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
