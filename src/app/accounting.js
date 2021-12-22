

class GLTransaction {
  constructor(blockchainTransaction) {
    this.blockchainTransaction = blockchainTransaction;
  }
}

class GeneralLedger {
  constructor(worldState) {
    this.worldState = worldState;
    this.glTransactions = [];
  }

  processBlockchainTransaction(blockchainTransaction) {
    this.glTransactions.push(new GLTransaction(blockchainTransaction))
  }

  effectOfGLTransaction(glTransaction) {
    return {one: -5, jewel: +100}
  }

  stateBeforeTransaction(txIndex) {
    if (txIndex === 0) {
      return {};
    }

    if (txIndex > this.glTransactions.length) {
      throw new Error("Transaction index too large");
    }

    const prevState = stateBeforeTransaction(txIndex - 1);
    effectOfGLTransaction(this.glTransactions)

  }

}
