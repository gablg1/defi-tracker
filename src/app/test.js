import {assert} from './utils';
import {Model} from './model';
import _ from 'lodash';

const testModels = () => {
  const A = Model.register('a', class A extends Model {
    static properties = {
      foo: String,
      x: Number,
    }
    constructor(json = {}) {
      super(json);
      this.foo  = this.foo || 'FOO';
      this.x = this.x || 3;
    }
  });

  const a = new A();

  assert(() => A.__properties.hasOwnProperty('x'));
  assert(() => A.__properties.hasOwnProperty('foo'));
  assert(() => A.__properties.hasOwnProperty('uniqueKey'));
  assert(() => !_.isEmpty(a.uniqueKey));
};


export const testAll = () => {
  testModels();
  console.log("Tests GREEN!");
};

