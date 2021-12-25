import _ from 'lodash';
import {addressesEqual, assert} from './utils';
import {ethers} from 'ethers';

/* global BigInt */

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

class Balances {
  constructor(json) {
    this.json = json;
  }

  plus(effect) {
    assert(() => effect instanceof Balances);
    return new Balances(_.mapValues(_.extend({}, this.json, effect.json), (__, key) =>
      (this.json[key] || BigInt(0)) + (effect.json[key] || BigInt(0))
    ));
  }

  toJson() {
    return this.json;
  }
}


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
    const oneValue = BigInt(btx.value || 0) * sign(this.worldState.defaultAddr, btx.from, btx.to) - btx.gasFeePaid;

    let effect = new Balances({one: oneValue});

    for (const evt of (btx.receipt?.decodedLogs || [])) {
      const rule = this.worldState.anyApplicableEventRule(evt);
      if (rule) {
        effect = effect.plus(rule.apply(evt));
      }
      /*
       * TODO: Implement dynamically
      if (evt.name === "Withdrawal") {
        const toAdd = BigInt(_.find(evt.events, {name: 'wad'}).value);
        totalValue += toAdd;
      }
      */
    }

    return effect;
  }

  stateAfterTransaction(txIndex) {
    return this.stateBeforeTransaction(txIndex + 1);
  }

  stateBeforeTransaction(txIndex) {
    if (txIndex === 0) {
      return new Balances({});
    }

    if (txIndex > this.glTransactions.length) {
      throw new Error("Transaction index too large");
    }

    const prevState = this.stateBeforeTransaction(txIndex - 1);
    return prevState.plus(this.effectOfGLTransaction(this.glTransactions[txIndex - 1]));
  }

  finalState() {
    return this.stateBeforeTransaction(this.glTransactions.length);
  }
}
