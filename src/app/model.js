import _ from 'lodash';
import {assert} from './utils';

export const deserialize = function(ty, json) {
  var typaram;
  if (ty === String) {
    if (_.isString(json)) {
      return json;
    }
    throw new Error("bad deserialize string");
  } else if (ty === Number) {
    if (_.isNumber(json)) {
      return json;
    }
    throw new Error("bad deserialize number");
  } else if (ty === Boolean) {
    if (_.isBoolean(json)) {
      return json;
    }
    throw new Error("bad deserialize boolean");
  } else if (_.isArray(ty) && ty.length === 1) {
    typaram = ty[0];
    if (!_.isArray(json)) {
      throw new Error();
    }
    return json.map(function(el) {
      return deserialize(typaram, el);
    });
  } else {
    if (ty.deserialize != null) {
      return ty.deserialize(json);
    }
    throw new Error("unknown type deserialized");
  }
};

export const serialize = function(ty, value) {
  var typaram;
  if (value === null || value === void 0) {
    // figure out optionals...
    return value;
  }
  if (ty === String) {
    if (_.isString(value)) {
      return value;
    }
    throw new Error(`bad serialize string ${value}`);
  } else if (ty === Number) {
    if (_.isNumber(value)) {
      return value;
    }
    throw new Error(`bad serialize number ${value}`);
  } else if (ty === Boolean) {
    if (_.isBoolean(value)) {
      return value;
    }
    throw new Error(`bad serialize boolean ${value}`);
  } else if (_.isArray(ty) && ty.length === 1) {
    typaram = ty[0];
    if (!_.isArray(value)) {
      throw new Error(`bad serialize array ${value}`);
    }
    return value.map(function(el) {
      return serialize(typaram, el);
    });
  } else if (value instanceof ty) {
    return value.serialize();
  } else {
    throw new Error(`unknown type serialized. ty = ${ty} value = ${value}`);
  }
};


let registeredModels = {};

export class Model {
  static __tag = 'v';
  static __properties = {
    uniqueKey: String
  }

  constructor (json) {
    if (_.isEmpty(this.uniqueKey)) {
      this.regenerateKey();
    }
  }

  serialize() {
    return _.extend({__ty: this.constructor.__tag},
      _.mapValues(this.constructor.__properties, (ty, prop) => {
        return serialize(ty, this[prop]);
      })
    );
  }

  regenerateKey() {
    this.uniqueKey = String(Math.random()).slice(2)
  }

  static deserialize(json) {
    assert(this.constructor.__isRegisteredModel)
    if (!_.isPlainObject(json)) {
        throw new Error("tried to deserialize a non-object")
    }
    if (_.isEmpty(json.__ty)) {
        throw new Error("serialized object does not have a __ty")
    }

    const type = registeredModels[json.__ty]

    if (_.isEmpty(type)) {
      throw new Error(`Type ${json.__ty} not registered`)
    }

    const deserialized_members = _.map(type.__properties, (ty, prop) => {
      return _.isEmpty(json[prop]) ? null : deserialize(ty, json[prop])
    });

    return new type(deserialized_members);
  }

  static register(tag, cls) {
    const superclass = cls.__proto__;
    return this.register_with_absolute_tag(superclass.__tag + '/' + tag, cls);
  }

  static register_with_absolute_tag(absolute_tag, cls) {
    const superclass = cls.__proto__;
    cls.__tag = absolute_tag;
    cls.__superclass = superclass;

    assert(() => superclass.__isRegisteredModel || superclass == this);
    assert(() => cls.hasOwnProperty('properties'))
    assert(() => _.isEmpty(cls.properties['__ty']))

    cls.__properties = _.extend({}, superclass.__properties, cls.properties);

    // Subclasses can remove a parent's property by redefining its type to be undefined.
    for (var prop in cls.__properties) {
      if (cls.__properties[prop] === undefined) {
        delete cls.__properties[prop];
      }
    }

    if (!_.isEmpty(registeredModels[cls.__tag])) {
      throw new Error('Model already registered');
    }

    cls.__isRegisteredModel = true
    registeredModels[cls.__tag] = cls
    return cls
  }
}
