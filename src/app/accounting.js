import _ from 'lodash';
import {addressesEqual, assert} from './utils';

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
    const fromMe = addressesEqual(btx.from, this.worldState.defaultAddr);
    const toMe = addressesEqual(btx.to, this.worldState.defaultAddr);

    assert(() => fromMe || toMe);

    return {one: (fromMe ? -1 : +1) * btx.value};
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
      (state[key] || 0) + (effect[key] || 0)
    );
  }

  finalState() {
    return this.stateBeforeTransaction(this.glTransactions.length);
  }
}
