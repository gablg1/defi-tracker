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

  assert(() => A.__tag === 'v/a');
  assert(() => A.__superclass === Model);

  assert(() => a.serialize().__ty === 'v/a');
  assert(() => !_.isEmpty(a.uniqueKey));
  assert(() => _.keys(a.serialize()).length == 4);

  const B = Model.register('b', class B extends A {
    static properties = {
      k: String,
      singer: String,
      x: undefined,
    }
    constructor(json = {}) {
      super(json);
      this.k = this.k || 'kkkk';
      this.singer = this.singer || 'Adele';
    }
  });

  const b = new B();

  assert(() => B.__properties.hasOwnProperty('uniqueKey'));
  assert(() => B.__properties.hasOwnProperty('foo'));
  assert(() => B.__properties.hasOwnProperty('k'));
  assert(() => !B.__properties.hasOwnProperty('x'));

  assert(() => B.__tag == 'v/a/b')
  assert(() => B.__superclass == A);

  assert(() => _.keys(b.serialize()).length == 5);
  assert(() => b.serialize().singer === 'Adele');
  assert(() => b.serialize().__ty === 'v/a/b');
};


export const testAll = () => {
  testModels();
  console.log("Tests GREEN!");
};

