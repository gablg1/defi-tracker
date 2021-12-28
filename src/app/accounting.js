import _ from 'lodash';
import {assert} from './utils';

/* global BigInt */


export class Balances {
  constructor(json) {
    this.json = _.mapValues(json, val => BigInt(val));
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
  constructor(blockchainTransaction, worldState) {
    this.blockchainTransaction = blockchainTransaction;
    this.worldState = worldState;
    this.contract = worldState.findContract(blockchainTransaction.to);
  }
}

export class GeneralLedger {
  constructor(worldState) {
    this.worldState = worldState;
    this.glTransactions = [];
  }

  processBlockchainTransaction(blockchainTransaction) {
    this.glTransactions.push(new GLTransaction(blockchainTransaction, this.worldState))
  }

  effectOfGLTransaction(glTransaction) {
    return this.worldState.effectOfTransaction(glTransaction.blockchainTransaction);
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
