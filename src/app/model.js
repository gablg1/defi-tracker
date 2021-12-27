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
  } else if (ty === JSON) {
    try {
      return JSON.parse(json);
    } catch(err) {
      throw new Error("bad deserialize JSON");
    }
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
  } else if (ty === JSON) {
    if (_.isObject(value)) {
      return JSON.stringify(value);
    }
    throw new Error(`bad serialize JSON ${value}`);
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

const defaultValueForType = function(ty) {
  if (ty === String) {
    return '';
  } else if (ty === Number) {
    return 0;
  } else if (ty === Boolean) {
    return false;
  } else if (ty === JSON) {
    return {};
  } else if (_.isArray(ty) && ty.length === 1) {
    return [];
  } else if (ty.__isRegisteredModel) {
    return new ty();
  } else {
    throw new Error(`unknown type = ${ty}`);
  }
};


let registeredModels = {};

export class Model {
  static __tag = 'v';
  static __properties = {
    uniqueKey: String
  }
  static defaultProperties = {}

  constructor(json = {}) {
    if (_.isEmpty(json.uniqueKey)) {
      this.regenerateKey();
    }

    for (const prop in this.constructor.__properties) {
      if (json[prop] != null) {
        this[prop] = json[prop];
      } else if (this.constructor.defaultProperties[prop] != null) {
        this[prop] = this.constructor.defaultProperties[prop];
      } else {
        this[prop] = defaultValueForType(this.constructor.__properties[prop]);
      }
    }

  }

  regenerateKey() {
    this.uniqueKey = String(Math.random()).slice(2);
  }


  serialize() {
    return _.extend({__ty: this.constructor.__tag},
      _.mapValues(this.constructor.__properties, (ty, prop) => {
        return serialize(ty, this[prop]);
      })
    );
  }

  clone() {
    const newObj = this.constructor.deserialize(this.serialize());
    newObj.regenerateKey();
    return newObj;
  }

  anyErrorFromChange(changeFn) {
    const changedClone = changeFn(this.clone());
    return changedClone.anyError();
  }

  throwIfErrorFromChange(changeFn) {
    const error = this.anyErrorFromChange(changeFn);
    if (error) {
      throw error;
    }
  }

  anyError() {
    throw new Error("Subclasses must override and implement this");
  }

  static deserialize(json = null) {
    if (json == null) {
      return new this();
    }

    assert(() => this.__isRegisteredModel)
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

    const deserialized_members = _.mapValues(type.__properties, (ty, prop) => {
      return json[prop] == null ? null : deserialize(ty, json[prop])
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

    assert(() => superclass.__isRegisteredModel || superclass === this);
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
