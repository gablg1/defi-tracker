import _ from 'lodash';
import {assert} from './utils';

const _l = _;
var registeredModels;

registeredModels = {};

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

var hasProp = {}.hasOwnProperty;

export const ValueType = (function() {
  class ValueType {
    // tags may not contain '/'s, as they are reserved for namespacing
    static compute_previously_persisted_property(prop, desc) {
      // remove the property from the list of computed properties
      this.prototype.properties[prop] = void 0;
      // set up the computed property
      return this.property(prop, desc);
    }

    static register(name, cls) {
      var ref, superclass;
      superclass = (ref = cls.__super__) != null ? ref.constructor : void 0;
      // give the class a fully qualified name
      // assert '/' not in cls.__tag
      return this.register_with_absolute_tag(superclass.__tag + '/' + name, cls);
    }

    static register_with_legacy_absolute_tag(absolute_tag, cls) {
      return this.register_with_absolute_tag(absolute_tag, cls);
    }

    static register_with_absolute_tag(absolute_tag, cls) {
      var p, ref, ref1, superclass, type;
      superclass = (ref = cls.__super__) != null ? ref.constructor : void 0;
      // only inherit from registered models, with Model as the root
      // assert superclass.__isRegisteredModel

      // assert cls::properties['__ty']? == false

      // even if it's empty, every Model subclass must define its properties
      assert(function() {
        return cls.prototype.hasOwnProperty('properties');
      });
      // inherit properties from parent
      cls.__properties = _.extend({}, superclass.__properties, cls.prototype.properties);
      ref1 = cls.__properties;
      for (p in ref1) {
        type = ref1[p];
        if (type === void 0) {
          // Subclasses can remove a parent's property by redefining it's type to be undefined.
          // This is useful for compute_previously_persisted_property.
          delete cls.__properties[p];
        }
      }
      cls.__tag = absolute_tag;
      if (registeredModels[cls.__tag] != null) {
        // it's an error to have two models with the same name
        // otherwise we don't know which to use when deserializing
        throw new Error('Model already registered');
      }
      // register the subclass for deserialization
      registeredModels[cls.__tag] = cls;
      // for debugging purposes, mark that we've registered cls
      // assert cls.__isRegisteredModel? == false
      cls.__isRegisteredModel = true;
      // mark the superclass as polymorphic.  We may want to not write
      // a tag/__ty to json if there's no possible polymorphism
      superclass.__hasVariants = true;
      // in case we accidentally inherited __hasVariants from our superclass,
      // explicitly set it to false.  We're asserting that we haven't been
      // registered yet up top, and any child inheriting from us will have
      // asserted that we (the superclass) had been registered, so we can
      // assume we don't have any variants yet
      cls.__hasVariants = false;
      return cls;
    }

    constructor(json = {}) {
      var prop, ref, ty;
      ref = this.constructor.__properties;
      for (prop in ref) {
        if (!hasProp.call(ref, prop)) continue;
        ty = ref[prop];
        if (json[prop] != null) {
          this[prop] = json[prop];
        }
      }
    }

    serialize() {
      var json, prop, ref, ty;
      // debug assert @constructor.__isRegisteredModel
      json = {
        __ty: this.constructor.__tag
      };
      ref = this.constructor.__properties;
      for (prop in ref) {
        if (!hasProp.call(ref, prop)) continue;
        ty = ref[prop];
        if (this[prop] != null) {
          json[prop] = serialize(ty, this[prop]);
        }
      }
      return json;
    }

    static deserialize(json) {
      var deserialized_members, prop, ref, ty, type;
      if (!_l.isPlainObject(json)) {
        // debug assert @constructor.__isRegisteredModel
        throw new Error("tried to deserialize a non-object");
      }
      if (json.__ty == null) {
        throw new Error("serialized object does not have a __ty");
      }
      type = registeredModels[json.__ty];
      if (type == null) {
        throw new Error(`Type ${json.__ty} not registered`);
      }
      if (!this.supertypeOf(type)) {
        // ask this, the type we're trying to deserialize, if we should trust `type` is a valid alternative
        throw new Error(`${nameForType(type)} is not a subtype of ${nameForType(this)}`);
      }
      if (this !== type) {
        // if type is a proper subtype, fully delegate deserialization to it
        return type.deserialize(json);
      }
      // recursively deserialize members
      deserialized_members = {};
      ref = type.__properties;
      for (prop in ref) {
        if (!hasProp.call(ref, prop)) continue;
        ty = ref[prop];
        if (json[prop] != null) {
          deserialized_members[prop] = deserialize(ty, json[prop]);
        }
      }
      // construct the new instance
      return new type(deserialized_members);
    }

    // this function is used to ask a Model what types it accepts.
    // A.supertypeOf(B) means that A knows how to deserialize objects of type B
    static supertypeOf(type) {
      return type === this || type.prototype instanceof this;
    }

    freshRepresentation() {
      return this.constructor.deserialize(this.serialize());
    }

    freshRepresentationWith(props) {
      return _l.extend(this.freshRepresentation(), props);
    }

    clone() {
      var clone;
      // @constructor gets the class of the current element (in this case, Block, LayoutBlock, etc)
      clone = this.freshRepresentation();
      return clone;
    }

    cloneWith(props) {
      return _l.extend(this.clone(), props);
    }

    // override this with
    //   getCustomEqualityChecks: -> _l.extend {}, super(), {prop: customCheck}
    // where
    //   customCheck :: (a -> a -> Bool)
    // getCustomEqualityChecks :: -> {prop: (a -> a -> Bool)}
    getCustomEqualityChecks() {
      return {};
    }

    isEqual(other) {
      var customEqualityChecks, prop, ref, ref1, ty;
      if (other == null) {
        // models are never equal to null or undefined
        return false;
      }
      if (other.constructor !== this.constructor) {
        // verify they're the same type type
        return false;
      }
      // verify all their properties match by isEqual, or a custom check if it's overridden
      customEqualityChecks = this.getCustomEqualityChecks();
      ref = this.constructor.__properties;
      for (prop in ref) {
        if (!hasProp.call(ref, prop)) continue;
        ty = ref[prop];
        if (!((ref1 = customEqualityChecks[prop]) != null ? ref1 : isEqual)(this[prop], other != null ? other[prop] : void 0)) {
          // get that short circuiting behavior
          return false;
        }
      }
      // all checks passed; they're equal
      return true;
    }

    static rebase(left, right, base) {
      var fresh_object;
      // construct a new fresh empty object to return so this function is pure
      fresh_object = new this();
      fresh_object.rebase(left, right, base);
      return fresh_object;
    }

    // override this with
    //   getCustomRebaseMechanisms: _l.extend {}, super(), {prop: customMechanism}
    // where
    //   customMechanism :: ((left :: a, right :: a, base :: a) -> a)
    // getCustomRebaseMechanisms :: -> {prop: (a -> a -> a -> a)}
    getCustomRebaseMechanisms() {
      return {};
    }

    rebase(left, right, base) {
      var customRebaseMechanisms, i, len, prop, ref, ref1, results;
      customRebaseMechanisms = this.getCustomRebaseMechanisms();
      ref = _.keys(this.constructor.__properties);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        prop = ref[i];
        results.push(this[prop] = ((ref1 = customRebaseMechanisms[prop]) != null ? ref1 : rebase)(left[prop], right[prop], base[prop]));
      }
      return results;
    }

  };

  // the property '__ty' is reserved

  // the root model class (Model)'s properties
  // these properties are inherited by all models
  ValueType.__properties = {};

  ValueType.__tag = "v";

  return ValueType;

}).call(this);

const nameForType = function(ty) {
  if (ty === String) {
    return 's';
  } else if (ty === Number) {
    return 'n';
  } else if (ty === Boolean) {
    return 'b';
  } else if (_.isArray(ty) && ty.length === 1) {
    return `[${nameForType(ty[0])}]`;
  } else if (ty.prototype instanceof ValueType) {
    return ty.__tag;
  } else {
    throw new Error("unknown type");
  }
};

// isEqual :: (Serializable) -> (Serializable) -> Bool
const isEqual = function(a, b) {
  if (a === null || a === void 0 || _.isString(a) || _.isNumber(a) || _.isBoolean(a)) {
    return a === b;
  } else if (_l.isArray(a)) {
    return _l.isArray(b) && a.length === b.length && _l.every(_l.zip(a, b), function([ea, eb]) {
      return isEqual(ea, eb);
    });
  } else if (a instanceof ValueType) {
    return a.isEqual(b);
  } else {
    throw new Error('Unexpected type');
  }
};

const rebase = function(left, right, base) {
  var ref;
  // This is a policy choice that deleting a Model (like a block) takes precedence in rebasing
  if (base instanceof ValueType && base !== void 0 && (left === void 0 || right === void 0)) {
    return void 0;
  } else if (base instanceof ValueType && ((left != null ? left.constructor : void 0) === (ref = right != null ? right.constructor : void 0) && ref === (base != null ? base.constructor : void 0))) {
    // if the value is a model, and all values are the same type, dispatch to a custom
    // rebase mechanism.
    // Do this even if left == base or right == base, because testing for equality
    // should be almost as expensive as just doing the rebase.  If it isn't, the custom
    // rebase mechanism can check for equality itself manually.
    return base.constructor.rebase(left, right, base);
  } else if (isEqual(left, base)) {
    return right;
  } else {
    //   else if isEqual(right, base) then left # included for readability
    return left; // conflict!  We have no way to resolve it, since this type has no special
  }
};

// rebase mechanism.  Prefer left.  By picking one atomically, at least the
// types will match.  This is reasonable default behavior.
