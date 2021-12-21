import React from '../../node_modules/react';
import ReactDOM from '../../node_modules/react-dom';
import App from './App';

import {assert} from './utils';
import {Model} from './model';
import _ from 'lodash';

// UI Tests
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Model Tests
const A = Model.register('a', class A extends Model {
  static properties = {
    foo: Number,
    x: Number,
  }

  static defaultProperties = {
    x: 3,
  }
});

const B = Model.register('b', class B extends A {
  static properties = {
    k: String,
    singer: String,
    x: undefined,
  }

  static defaultProperties = {
    singer: 'Adele',
  }
});

it('Model basic functionality works', () => {
  const a = new A();

  assert(() => A.__properties.hasOwnProperty('x'));
  assert(() => A.__properties.hasOwnProperty('foo'));
  assert(() => A.__properties.hasOwnProperty('uniqueKey'));

  assert(() => A.__tag === 'v/a');
  assert(() => A.__superclass === Model);

  assert(() => a.serialize().__ty === 'v/a');
  assert(() => !_.isEmpty(a.uniqueKey));
  assert(() => _.keys(a.serialize()).length == 4);
  assert(() => a.foo == 0);
  assert(() => a.x == 3);

  assert(() => A.deserialize(a.serialize()).x == 3);
  assert(() => A.deserialize(a.serialize()).foo == 0);

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
  assert(() => b.k === '');
  assert(() => b.x == undefined);
});
