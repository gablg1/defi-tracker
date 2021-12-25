import _ from 'lodash';
import {addressesEqual, assert} from './utils';
import {ethers} from 'ethers';

/* global BigInt */

const BigNumber = ethers.BigNumber;

const bigNumberify = (val) => {
  return BigInt(val);
};

const sign = (me, from, to) => {
  const fromMe = addressesEqual(me, from);
  const toMe = addressesEqual(me, to);
  assert(() => fromMe || toMe);
  if (fromMe) {
    return bigNumberify(-1);
  } else if (toMe) {
    return bigNumberify(+1);
  } else {
    return bigNumberify(0);
  }

};

class GLTransaction {
  constructor(blockchainTransaction) {
    this.blockchainTransaction = blockchainTransaction;
  }
}

export class GeneralLedger {
  constructor(worldState) {
    this.worldState = worldState;
    this.glTransactions = [];
  }

  processBlockchainTransaction(blockchainTransaction) {
    this.glTransactions.push(new GLTransaction(blockchainTransaction))
  }

  effectOfGLTransaction(glTransaction) {
    const btx = glTransaction.blockchainTransaction;

    let totalValue = BigInt(btx.value || 0) * sign(this.worldState.defaultAddr, btx.from, btx.to);

    totalValue -= btx.gasFeePaid;

    for (const evt of (btx.receipt?.decodedLogs || [])) {
      if (evt.name === "Withdrawal") {
        const toAdd = BigInt(_.find(evt.events, {name: 'wad'}).value);
        totalValue += toAdd;
      }
    }

    return {one: totalValue};
  }

  stateAfterTransaction(txIndex) {
    return this.stateBeforeTransaction(txIndex + 1);
  }

  stateBeforeTransaction(txIndex) {
    if (txIndex === 0) {
      return {};
    }

    if (txIndex > this.glTransactions.length) {
      throw new Error("Transaction index too large");
    }

    const prevState = this.stateBeforeTransaction(txIndex - 1);
    return this.applyEffect(prevState, this.effectOfGLTransaction(this.glTransactions[txIndex - 1]));
  }

  applyEffect(state, effect) {
    return _.mapValues(_.extend({}, state, effect), (__, key) =>
      (state[key] || BigInt(0)) + (effect[key] || BigInt(0))
    );
  }

  finalState() {
    return this.stateBeforeTransaction(this.glTransactions.length);
  }
}
