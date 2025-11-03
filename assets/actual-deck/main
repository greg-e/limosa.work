function X_(B) {
  return B && B.__esModule && Object.prototype.hasOwnProperty.call(B, "default") ? B.default : B;
}
var d0 = { exports: {} }, Zp = {}, p0 = { exports: {} }, St = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KR;
function Z_() {
  if (KR) return St;
  KR = 1;
  var B = Symbol.for("react.element"), G = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), Je = Symbol.for("react.strict_mode"), Le = Symbol.for("react.profiler"), Oe = Symbol.for("react.provider"), S = Symbol.for("react.context"), xt = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), fe = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), J = Symbol.iterator;
  function Ce(_) {
    return _ === null || typeof _ != "object" ? null : (_ = J && _[J] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var ie = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Qe = Object.assign, yt = {};
  function vt(_, P, Be) {
    this.props = _, this.context = P, this.refs = yt, this.updater = Be || ie;
  }
  vt.prototype.isReactComponent = {}, vt.prototype.setState = function(_, P) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, P, "setState");
  }, vt.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function Jt() {
  }
  Jt.prototype = vt.prototype;
  function st(_, P, Be) {
    this.props = _, this.context = P, this.refs = yt, this.updater = Be || ie;
  }
  var le = st.prototype = new Jt();
  le.constructor = st, Qe(le, vt.prototype), le.isPureReactComponent = !0;
  var Ue = Array.isArray, Ee = Object.prototype.hasOwnProperty, at = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xt(_, P, Be) {
    var Pe, ct = {}, it = null, nt = null;
    if (P != null) for (Pe in P.ref !== void 0 && (nt = P.ref), P.key !== void 0 && (it = "" + P.key), P) Ee.call(P, Pe) && !He.hasOwnProperty(Pe) && (ct[Pe] = P[Pe]);
    var lt = arguments.length - 2;
    if (lt === 1) ct.children = Be;
    else if (1 < lt) {
      for (var ft = Array(lt), Bt = 0; Bt < lt; Bt++) ft[Bt] = arguments[Bt + 2];
      ct.children = ft;
    }
    if (_ && _.defaultProps) for (Pe in lt = _.defaultProps, lt) ct[Pe] === void 0 && (ct[Pe] = lt[Pe]);
    return { $$typeof: B, type: _, key: it, ref: nt, props: ct, _owner: at.current };
  }
  function Ht(_, P) {
    return { $$typeof: B, type: _.type, key: P, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function en(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === B;
  }
  function un(_) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(Be) {
      return P[Be];
    });
  }
  var _t = /\/+/g;
  function Me(_, P) {
    return typeof _ == "object" && _ !== null && _.key != null ? un("" + _.key) : P.toString(36);
  }
  function jt(_, P, Be, Pe, ct) {
    var it = typeof _;
    (it === "undefined" || it === "boolean") && (_ = null);
    var nt = !1;
    if (_ === null) nt = !0;
    else switch (it) {
      case "string":
      case "number":
        nt = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case B:
          case G:
            nt = !0;
        }
    }
    if (nt) return nt = _, ct = ct(nt), _ = Pe === "" ? "." + Me(nt, 0) : Pe, Ue(ct) ? (Be = "", _ != null && (Be = _.replace(_t, "$&/") + "/"), jt(ct, P, Be, "", function(Bt) {
      return Bt;
    })) : ct != null && (en(ct) && (ct = Ht(ct, Be + (!ct.key || nt && nt.key === ct.key ? "" : ("" + ct.key).replace(_t, "$&/") + "/") + _)), P.push(ct)), 1;
    if (nt = 0, Pe = Pe === "" ? "." : Pe + ":", Ue(_)) for (var lt = 0; lt < _.length; lt++) {
      it = _[lt];
      var ft = Pe + Me(it, lt);
      nt += jt(it, P, Be, ft, ct);
    }
    else if (ft = Ce(_), typeof ft == "function") for (_ = ft.call(_), lt = 0; !(it = _.next()).done; ) it = it.value, ft = Pe + Me(it, lt++), nt += jt(it, P, Be, ft, ct);
    else if (it === "object") throw P = String(_), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return nt;
  }
  function kt(_, P, Be) {
    if (_ == null) return _;
    var Pe = [], ct = 0;
    return jt(_, Pe, "", "", function(it) {
      return P.call(Be, it, ct++);
    }), Pe;
  }
  function Ot(_) {
    if (_._status === -1) {
      var P = _._result;
      P = P(), P.then(function(Be) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = Be);
      }, function(Be) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = Be);
      }), _._status === -1 && (_._status = 0, _._result = P);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var Te = { current: null }, Z = { transition: null }, xe = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: Z, ReactCurrentOwner: at };
  function ne() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return St.Children = { map: kt, forEach: function(_, P, Be) {
    kt(_, function() {
      P.apply(this, arguments);
    }, Be);
  }, count: function(_) {
    var P = 0;
    return kt(_, function() {
      P++;
    }), P;
  }, toArray: function(_) {
    return kt(_, function(P) {
      return P;
    }) || [];
  }, only: function(_) {
    if (!en(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, St.Component = vt, St.Fragment = M, St.Profiler = Le, St.PureComponent = st, St.StrictMode = Je, St.Suspense = ae, St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xe, St.act = ne, St.cloneElement = function(_, P, Be) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Pe = Qe({}, _.props), ct = _.key, it = _.ref, nt = _._owner;
    if (P != null) {
      if (P.ref !== void 0 && (it = P.ref, nt = at.current), P.key !== void 0 && (ct = "" + P.key), _.type && _.type.defaultProps) var lt = _.type.defaultProps;
      for (ft in P) Ee.call(P, ft) && !He.hasOwnProperty(ft) && (Pe[ft] = P[ft] === void 0 && lt !== void 0 ? lt[ft] : P[ft]);
    }
    var ft = arguments.length - 2;
    if (ft === 1) Pe.children = Be;
    else if (1 < ft) {
      lt = Array(ft);
      for (var Bt = 0; Bt < ft; Bt++) lt[Bt] = arguments[Bt + 2];
      Pe.children = lt;
    }
    return { $$typeof: B, type: _.type, key: ct, ref: it, props: Pe, _owner: nt };
  }, St.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: Oe, _context: _ }, _.Consumer = _;
  }, St.createElement = Xt, St.createFactory = function(_) {
    var P = Xt.bind(null, _);
    return P.type = _, P;
  }, St.createRef = function() {
    return { current: null };
  }, St.forwardRef = function(_) {
    return { $$typeof: xt, render: _ };
  }, St.isValidElement = en, St.lazy = function(_) {
    return { $$typeof: et, _payload: { _status: -1, _result: _ }, _init: Ot };
  }, St.memo = function(_, P) {
    return { $$typeof: fe, type: _, compare: P === void 0 ? null : P };
  }, St.startTransition = function(_) {
    var P = Z.transition;
    Z.transition = {};
    try {
      _();
    } finally {
      Z.transition = P;
    }
  }, St.unstable_act = ne, St.useCallback = function(_, P) {
    return Te.current.useCallback(_, P);
  }, St.useContext = function(_) {
    return Te.current.useContext(_);
  }, St.useDebugValue = function() {
  }, St.useDeferredValue = function(_) {
    return Te.current.useDeferredValue(_);
  }, St.useEffect = function(_, P) {
    return Te.current.useEffect(_, P);
  }, St.useId = function() {
    return Te.current.useId();
  }, St.useImperativeHandle = function(_, P, Be) {
    return Te.current.useImperativeHandle(_, P, Be);
  }, St.useInsertionEffect = function(_, P) {
    return Te.current.useInsertionEffect(_, P);
  }, St.useLayoutEffect = function(_, P) {
    return Te.current.useLayoutEffect(_, P);
  }, St.useMemo = function(_, P) {
    return Te.current.useMemo(_, P);
  }, St.useReducer = function(_, P, Be) {
    return Te.current.useReducer(_, P, Be);
  }, St.useRef = function(_) {
    return Te.current.useRef(_);
  }, St.useState = function(_) {
    return Te.current.useState(_);
  }, St.useSyncExternalStore = function(_, P, Be) {
    return Te.current.useSyncExternalStore(_, P, Be);
  }, St.useTransition = function() {
    return Te.current.useTransition();
  }, St.version = "18.3.1", St;
}
var ev = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ev.exports;
var XR;
function J_() {
  return XR || (XR = 1, function(B, G) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var M = "18.3.1", Je = Symbol.for("react.element"), Le = Symbol.for("react.portal"), Oe = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), xt = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), fe = Symbol.for("react.context"), et = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), Ce = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), Qe = Symbol.for("react.lazy"), yt = Symbol.for("react.offscreen"), vt = Symbol.iterator, Jt = "@@iterator";
      function st(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = vt && h[vt] || h[Jt];
        return typeof C == "function" ? C : null;
      }
      var le = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ue = {
        transition: null
      }, Ee = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, at = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, Xt = null;
      function Ht(h) {
        Xt = h;
      }
      He.setExtraStackFrame = function(h) {
        Xt = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        Xt && (h += Xt);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var en = !1, un = !1, _t = !1, Me = !1, jt = !1, kt = {
        ReactCurrentDispatcher: le,
        ReactCurrentBatchConfig: Ue,
        ReactCurrentOwner: at
      };
      kt.ReactDebugCurrentFrame = He, kt.ReactCurrentActQueue = Ee;
      function Ot(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            z[j - 1] = arguments[j];
          Z("warn", h, z);
        }
      }
      function Te(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            z[j - 1] = arguments[j];
          Z("error", h, z);
        }
      }
      function Z(h, C, z) {
        {
          var j = kt.ReactDebugCurrentFrame, X = j.getStackAddendum();
          X !== "" && (C += "%s", z = z.concat([X]));
          var Ne = z.map(function(re) {
            return String(re);
          });
          Ne.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ne);
        }
      }
      var xe = {};
      function ne(h, C) {
        {
          var z = h.constructor, j = z && (z.displayName || z.name) || "ReactClass", X = j + "." + C;
          if (xe[X])
            return;
          Te("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), xe[X] = !0;
        }
      }
      var _ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, z) {
          ne(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, z, j) {
          ne(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, z, j) {
          ne(h, "setState");
        }
      }, P = Object.assign, Be = {};
      Object.freeze(Be);
      function Pe(h, C, z) {
        this.props = h, this.context = C, this.refs = Be, this.updater = z || _;
      }
      Pe.prototype.isReactComponent = {}, Pe.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Pe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ct = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, it = function(h, C) {
          Object.defineProperty(Pe.prototype, h, {
            get: function() {
              Ot("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var nt in ct)
          ct.hasOwnProperty(nt) && it(nt, ct[nt]);
      }
      function lt() {
      }
      lt.prototype = Pe.prototype;
      function ft(h, C, z) {
        this.props = h, this.context = C, this.refs = Be, this.updater = z || _;
      }
      var Bt = ft.prototype = new lt();
      Bt.constructor = ft, P(Bt, Pe.prototype), Bt.isPureReactComponent = !0;
      function On() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var br = Array.isArray;
      function Cn(h) {
        return br(h);
      }
      function nr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Vn(h) {
        try {
          return Bn(h), !1;
        } catch {
          return !0;
        }
      }
      function Bn(h) {
        return "" + h;
      }
      function Ir(h) {
        if (Vn(h))
          return Te("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), Bn(h);
      }
      function ci(h, C, z) {
        var j = h.displayName;
        if (j)
          return j;
        var X = C.displayName || C.name || "";
        return X !== "" ? z + "(" + X + ")" : z;
      }
      function sa(h) {
        return h.displayName || "Context";
      }
      function qn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Te("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Oe:
            return "Fragment";
          case Le:
            return "Portal";
          case xt:
            return "Profiler";
          case S:
            return "StrictMode";
          case J:
            return "Suspense";
          case Ce:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case fe:
              var C = h;
              return sa(C) + ".Consumer";
            case ae:
              var z = h;
              return sa(z._context) + ".Provider";
            case et:
              return ci(h, h.render, "ForwardRef");
            case ie:
              var j = h.displayName || null;
              return j !== null ? j : qn(h.type) || "Memo";
            case Qe: {
              var X = h, Ne = X._payload, re = X._init;
              try {
                return qn(re(Ne));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Rn = Object.prototype.hasOwnProperty, $n = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, Ia, Ln;
      Ln = {};
      function Sr(h) {
        if (Rn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function ca(h) {
        if (Rn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Qa(h, C) {
        var z = function() {
          gr || (gr = !0, Te("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function fi(h, C) {
        var z = function() {
          Ia || (Ia = !0, Te("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function ee(h) {
        if (typeof h.ref == "string" && at.current && h.__self && at.current.stateNode !== h.__self) {
          var C = qn(at.current.type);
          Ln[C] || (Te('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Ln[C] = !0);
        }
      }
      var we = function(h, C, z, j, X, Ne, re) {
        var je = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Je,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: re,
          // Record the component responsible for creating this element.
          _owner: Ne
        };
        return je._store = {}, Object.defineProperty(je._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(je, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(je, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.freeze && (Object.freeze(je.props), Object.freeze(je)), je;
      };
      function ut(h, C, z) {
        var j, X = {}, Ne = null, re = null, je = null, mt = null;
        if (C != null) {
          Sr(C) && (re = C.ref, ee(C)), ca(C) && (Ir(C.key), Ne = "" + C.key), je = C.__self === void 0 ? null : C.__self, mt = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Rn.call(C, j) && !$n.hasOwnProperty(j) && (X[j] = C[j]);
        }
        var bt = arguments.length - 2;
        if (bt === 1)
          X.children = z;
        else if (bt > 1) {
          for (var an = Array(bt), Qt = 0; Qt < bt; Qt++)
            an[Qt] = arguments[Qt + 2];
          Object.freeze && Object.freeze(an), X.children = an;
        }
        if (h && h.defaultProps) {
          var ot = h.defaultProps;
          for (j in ot)
            X[j] === void 0 && (X[j] = ot[j]);
        }
        if (Ne || re) {
          var Wt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ne && Qa(X, Wt), re && fi(X, Wt);
        }
        return we(h, Ne, re, je, mt, at.current, X);
      }
      function Ft(h, C) {
        var z = we(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function tn(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, X = P({}, h.props), Ne = h.key, re = h.ref, je = h._self, mt = h._source, bt = h._owner;
        if (C != null) {
          Sr(C) && (re = C.ref, bt = at.current), ca(C) && (Ir(C.key), Ne = "" + C.key);
          var an;
          h.type && h.type.defaultProps && (an = h.type.defaultProps);
          for (j in C)
            Rn.call(C, j) && !$n.hasOwnProperty(j) && (C[j] === void 0 && an !== void 0 ? X[j] = an[j] : X[j] = C[j]);
        }
        var Qt = arguments.length - 2;
        if (Qt === 1)
          X.children = z;
        else if (Qt > 1) {
          for (var ot = Array(Qt), Wt = 0; Wt < Qt; Wt++)
            ot[Wt] = arguments[Wt + 2];
          X.children = ot;
        }
        return we(h.type, Ne, re, je, mt, bt, X);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Je;
      }
      var on = ".", Kn = ":";
      function nn(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(X) {
          return z[X];
        });
        return "$" + j;
      }
      var $t = !1, Yt = /\/+/g;
      function fa(h) {
        return h.replace(Yt, "$&/");
      }
      function Er(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Ir(h.key), nn("" + h.key)) : C.toString(36);
      }
      function xa(h, C, z, j, X) {
        var Ne = typeof h;
        (Ne === "undefined" || Ne === "boolean") && (h = null);
        var re = !1;
        if (h === null)
          re = !0;
        else
          switch (Ne) {
            case "string":
            case "number":
              re = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Je:
                case Le:
                  re = !0;
              }
          }
        if (re) {
          var je = h, mt = X(je), bt = j === "" ? on + Er(je, 0) : j;
          if (Cn(mt)) {
            var an = "";
            bt != null && (an = fa(bt) + "/"), xa(mt, C, an, "", function(Kf) {
              return Kf;
            });
          } else mt != null && (vn(mt) && (mt.key && (!je || je.key !== mt.key) && Ir(mt.key), mt = Ft(
            mt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (mt.key && (!je || je.key !== mt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              fa("" + mt.key) + "/"
            ) : "") + bt
          )), C.push(mt));
          return 1;
        }
        var Qt, ot, Wt = 0, hn = j === "" ? on : j + Kn;
        if (Cn(h))
          for (var Rl = 0; Rl < h.length; Rl++)
            Qt = h[Rl], ot = hn + Er(Qt, Rl), Wt += xa(Qt, C, z, ot, X);
        else {
          var qo = st(h);
          if (typeof qo == "function") {
            var Bi = h;
            qo === Bi.entries && ($t || Ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), $t = !0);
            for (var Ko = qo.call(Bi), ou, qf = 0; !(ou = Ko.next()).done; )
              Qt = ou.value, ot = hn + Er(Qt, qf++), Wt += xa(Qt, C, z, ot, X);
          } else if (Ne === "object") {
            var sc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (sc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : sc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Wt;
      }
      function Hi(h, C, z) {
        if (h == null)
          return h;
        var j = [], X = 0;
        return xa(h, j, "", "", function(Ne) {
          return C.call(z, Ne, X++);
        }), j;
      }
      function Jl(h) {
        var C = 0;
        return Hi(h, function() {
          C++;
        }), C;
      }
      function eu(h, C, z) {
        Hi(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function pl(h) {
        return Hi(h, function(C) {
          return C;
        }) || [];
      }
      function vl(h) {
        if (!vn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function tu(h) {
        var C = {
          $$typeof: fe,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ae,
          _context: C
        };
        var z = !1, j = !1, X = !1;
        {
          var Ne = {
            $$typeof: fe,
            _context: C
          };
          Object.defineProperties(Ne, {
            Provider: {
              get: function() {
                return j || (j = !0, Te("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(re) {
                C.Provider = re;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(re) {
                C._currentValue = re;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(re) {
                C._currentValue2 = re;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(re) {
                C._threadCount = re;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, Te("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(re) {
                X || (Ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", re), X = !0);
              }
            }
          }), C.Consumer = Ne;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var _r = -1, kr = 0, rr = 1, di = 2;
      function Wa(h) {
        if (h._status === _r) {
          var C = h._result, z = C();
          if (z.then(function(Ne) {
            if (h._status === kr || h._status === _r) {
              var re = h;
              re._status = rr, re._result = Ne;
            }
          }, function(Ne) {
            if (h._status === kr || h._status === _r) {
              var re = h;
              re._status = di, re._result = Ne;
            }
          }), h._status === _r) {
            var j = h;
            j._status = kr, j._result = z;
          }
        }
        if (h._status === rr) {
          var X = h._result;
          return X === void 0 && Te(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, X), "default" in X || Te(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, X), X.default;
        } else
          throw h._result;
      }
      function pi(h) {
        var C = {
          // We use these fields to store the result.
          _status: _r,
          _result: h
        }, z = {
          $$typeof: Qe,
          _payload: C,
          _init: Wa
        };
        {
          var j, X;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Ne) {
                Te("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Ne, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(Ne) {
                Te("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = Ne, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function vi(h) {
        h != null && h.$$typeof === ie ? Te("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Te("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Te("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Te("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: et,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(j) {
              z = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function $(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Oe || h === xt || jt || h === S || h === J || h === Ce || Me || h === yt || en || un || _t || typeof h == "object" && h !== null && (h.$$typeof === Qe || h.$$typeof === ie || h.$$typeof === ae || h.$$typeof === fe || h.$$typeof === et || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ue(h, C) {
        $(h) || Te("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: ie,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(X) {
              j = X, !h.name && !h.displayName && (h.displayName = X);
            }
          });
        }
        return z;
      }
      function me() {
        var h = le.current;
        return h === null && Te(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Xe(h) {
        var C = me();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? Te("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && Te("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ge(h) {
        var C = me();
        return C.useState(h);
      }
      function ht(h, C, z) {
        var j = me();
        return j.useReducer(h, C, z);
      }
      function dt(h) {
        var C = me();
        return C.useRef(h);
      }
      function Tn(h, C) {
        var z = me();
        return z.useEffect(h, C);
      }
      function rn(h, C) {
        var z = me();
        return z.useInsertionEffect(h, C);
      }
      function sn(h, C) {
        var z = me();
        return z.useLayoutEffect(h, C);
      }
      function ar(h, C) {
        var z = me();
        return z.useCallback(h, C);
      }
      function Ga(h, C) {
        var z = me();
        return z.useMemo(h, C);
      }
      function qa(h, C, z) {
        var j = me();
        return j.useImperativeHandle(h, C, z);
      }
      function Ze(h, C) {
        {
          var z = me();
          return z.useDebugValue(h, C);
        }
      }
      function rt() {
        var h = me();
        return h.useTransition();
      }
      function Ka(h) {
        var C = me();
        return C.useDeferredValue(h);
      }
      function nu() {
        var h = me();
        return h.useId();
      }
      function ru(h, C, z) {
        var j = me();
        return j.useSyncExternalStore(h, C, z);
      }
      var hl = 0, Wu, ml, Qr, Io, Dr, uc, oc;
      function Gu() {
      }
      Gu.__reactDisabledLog = !0;
      function yl() {
        {
          if (hl === 0) {
            Wu = console.log, ml = console.info, Qr = console.warn, Io = console.error, Dr = console.group, uc = console.groupCollapsed, oc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Gu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          hl++;
        }
      }
      function da() {
        {
          if (hl--, hl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: P({}, h, {
                value: Wu
              }),
              info: P({}, h, {
                value: ml
              }),
              warn: P({}, h, {
                value: Qr
              }),
              error: P({}, h, {
                value: Io
              }),
              group: P({}, h, {
                value: Dr
              }),
              groupCollapsed: P({}, h, {
                value: uc
              }),
              groupEnd: P({}, h, {
                value: oc
              })
            });
          }
          hl < 0 && Te("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = kt.ReactCurrentDispatcher, Za;
      function qu(h, C, z) {
        {
          if (Za === void 0)
            try {
              throw Error();
            } catch (X) {
              var j = X.stack.trim().match(/\n( *(at )?)/);
              Za = j && j[1] || "";
            }
          return `
` + Za + h;
        }
      }
      var au = !1, gl;
      {
        var Ku = typeof WeakMap == "function" ? WeakMap : Map;
        gl = new Ku();
      }
      function Xu(h, C) {
        if (!h || au)
          return "";
        {
          var z = gl.get(h);
          if (z !== void 0)
            return z;
        }
        var j;
        au = !0;
        var X = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ne;
        Ne = Xa.current, Xa.current = null, yl();
        try {
          if (C) {
            var re = function() {
              throw Error();
            };
            if (Object.defineProperty(re.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(re, []);
              } catch (hn) {
                j = hn;
              }
              Reflect.construct(h, [], re);
            } else {
              try {
                re.call();
              } catch (hn) {
                j = hn;
              }
              h.call(re.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              j = hn;
            }
            h();
          }
        } catch (hn) {
          if (hn && j && typeof hn.stack == "string") {
            for (var je = hn.stack.split(`
`), mt = j.stack.split(`
`), bt = je.length - 1, an = mt.length - 1; bt >= 1 && an >= 0 && je[bt] !== mt[an]; )
              an--;
            for (; bt >= 1 && an >= 0; bt--, an--)
              if (je[bt] !== mt[an]) {
                if (bt !== 1 || an !== 1)
                  do
                    if (bt--, an--, an < 0 || je[bt] !== mt[an]) {
                      var Qt = `
` + je[bt].replace(" at new ", " at ");
                      return h.displayName && Qt.includes("<anonymous>") && (Qt = Qt.replace("<anonymous>", h.displayName)), typeof h == "function" && gl.set(h, Qt), Qt;
                    }
                  while (bt >= 1 && an >= 0);
                break;
              }
          }
        } finally {
          au = !1, Xa.current = Ne, da(), Error.prepareStackTrace = X;
        }
        var ot = h ? h.displayName || h.name : "", Wt = ot ? qu(ot) : "";
        return typeof h == "function" && gl.set(h, Wt), Wt;
      }
      function Pi(h, C, z) {
        return Xu(h, !1);
      }
      function Wf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Vi(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Xu(h, Wf(h));
        if (typeof h == "string")
          return qu(h);
        switch (h) {
          case J:
            return qu("Suspense");
          case Ce:
            return qu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case et:
              return Pi(h.render);
            case ie:
              return Vi(h.type, C, z);
            case Qe: {
              var j = h, X = j._payload, Ne = j._init;
              try {
                return Vi(Ne(X), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Lt = {}, Zu = kt.ReactDebugCurrentFrame;
      function wt(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          Zu.setExtraStackFrame(z);
        } else
          Zu.setExtraStackFrame(null);
      }
      function Qo(h, C, z, j, X) {
        {
          var Ne = Function.call.bind(Rn);
          for (var re in h)
            if (Ne(h, re)) {
              var je = void 0;
              try {
                if (typeof h[re] != "function") {
                  var mt = Error((j || "React class") + ": " + z + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw mt.name = "Invariant Violation", mt;
                }
                je = h[re](C, re, j, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (bt) {
                je = bt;
              }
              je && !(je instanceof Error) && (wt(X), Te("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", z, re, typeof je), wt(null)), je instanceof Error && !(je.message in Lt) && (Lt[je.message] = !0, wt(X), Te("Failed %s type: %s", z, je.message), wt(null));
            }
        }
      }
      function hi(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          Ht(z);
        } else
          Ht(null);
      }
      var We;
      We = !1;
      function Ju() {
        if (at.current) {
          var h = qn(at.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ir(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function mi(h) {
        return h != null ? ir(h.__source) : "";
      }
      var Or = {};
      function yi(h) {
        var C = Ju();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function cn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = yi(C);
          if (!Or[z]) {
            Or[z] = !0;
            var j = "";
            h && h._owner && h._owner !== at.current && (j = " It was passed a child from " + qn(h._owner.type) + "."), hi(h), Te('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, j), hi(null);
          }
        }
      }
      function It(h, C) {
        if (typeof h == "object") {
          if (Cn(h))
            for (var z = 0; z < h.length; z++) {
              var j = h[z];
              vn(j) && cn(j, C);
            }
          else if (vn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var X = st(h);
            if (typeof X == "function" && X !== h.entries)
              for (var Ne = X.call(h), re; !(re = Ne.next()).done; )
                vn(re.value) && cn(re.value, C);
          }
        }
      }
      function Sl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === et || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ie))
            z = C.propTypes;
          else
            return;
          if (z) {
            var j = qn(C);
            Qo(z, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !We) {
            We = !0;
            var X = qn(C);
            Te("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Te("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Yn(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var j = C[z];
            if (j !== "children" && j !== "key") {
              hi(h), Te("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), hi(null);
              break;
            }
          }
          h.ref !== null && (hi(h), Te("Invalid attribute `ref` supplied to `React.Fragment`."), hi(null));
        }
      }
      function Lr(h, C, z) {
        var j = $(h);
        if (!j) {
          var X = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = mi(C);
          Ne ? X += Ne : X += Ju();
          var re;
          h === null ? re = "null" : Cn(h) ? re = "array" : h !== void 0 && h.$$typeof === Je ? (re = "<" + (qn(h.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : re = typeof h, Te("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, X);
        }
        var je = ut.apply(this, arguments);
        if (je == null)
          return je;
        if (j)
          for (var mt = 2; mt < arguments.length; mt++)
            It(arguments[mt], h);
        return h === Oe ? Yn(je) : Sl(je), je;
      }
      var wa = !1;
      function iu(h) {
        var C = Lr.bind(null, h);
        return C.type = h, wa || (wa = !0, Ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Wo(h, C, z) {
        for (var j = tn.apply(this, arguments), X = 2; X < arguments.length; X++)
          It(arguments[X], j.type);
        return Sl(j), j;
      }
      function Go(h, C) {
        var z = Ue.transition;
        Ue.transition = {};
        var j = Ue.transition;
        Ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Ue.transition = z, z === null && j._updatedFibers) {
            var X = j._updatedFibers.size;
            X > 10 && Ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var El = !1, lu = null;
      function Gf(h) {
        if (lu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = B && B[C];
            lu = z.call(B, "timers").setImmediate;
          } catch {
            lu = function(X) {
              El === !1 && (El = !0, typeof MessageChannel > "u" && Te("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ne = new MessageChannel();
              Ne.port1.onmessage = X, Ne.port2.postMessage(void 0);
            };
          }
        return lu(h);
      }
      var ba = 0, Ja = !1;
      function gi(h) {
        {
          var C = ba;
          ba++, Ee.current === null && (Ee.current = []);
          var z = Ee.isBatchingLegacy, j;
          try {
            if (Ee.isBatchingLegacy = !0, j = h(), !z && Ee.didScheduleLegacyUpdate) {
              var X = Ee.current;
              X !== null && (Ee.didScheduleLegacyUpdate = !1, Cl(X));
            }
          } catch (ot) {
            throw _a(C), ot;
          } finally {
            Ee.isBatchingLegacy = z;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Ne = j, re = !1, je = {
              then: function(ot, Wt) {
                re = !0, Ne.then(function(hn) {
                  _a(C), ba === 0 ? eo(hn, ot, Wt) : ot(hn);
                }, function(hn) {
                  _a(C), Wt(hn);
                });
              }
            };
            return !Ja && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              re || (Ja = !0, Te("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), je;
          } else {
            var mt = j;
            if (_a(C), ba === 0) {
              var bt = Ee.current;
              bt !== null && (Cl(bt), Ee.current = null);
              var an = {
                then: function(ot, Wt) {
                  Ee.current === null ? (Ee.current = [], eo(mt, ot, Wt)) : ot(mt);
                }
              };
              return an;
            } else {
              var Qt = {
                then: function(ot, Wt) {
                  ot(mt);
                }
              };
              return Qt;
            }
          }
        }
      }
      function _a(h) {
        h !== ba - 1 && Te("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ba = h;
      }
      function eo(h, C, z) {
        {
          var j = Ee.current;
          if (j !== null)
            try {
              Cl(j), Gf(function() {
                j.length === 0 ? (Ee.current = null, C(h)) : eo(h, C, z);
              });
            } catch (X) {
              z(X);
            }
          else
            C(h);
        }
      }
      var to = !1;
      function Cl(h) {
        if (!to) {
          to = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            to = !1;
          }
        }
      }
      var uu = Lr, no = Wo, ro = iu, ei = {
        map: Hi,
        forEach: eu,
        count: Jl,
        toArray: pl,
        only: vl
      };
      G.Children = ei, G.Component = Pe, G.Fragment = Oe, G.Profiler = xt, G.PureComponent = ft, G.StrictMode = S, G.Suspense = J, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kt, G.act = gi, G.cloneElement = no, G.createContext = tu, G.createElement = uu, G.createFactory = ro, G.createRef = On, G.forwardRef = vi, G.isValidElement = vn, G.lazy = pi, G.memo = ue, G.startTransition = Go, G.unstable_act = gi, G.useCallback = ar, G.useContext = Xe, G.useDebugValue = Ze, G.useDeferredValue = Ka, G.useEffect = Tn, G.useId = nu, G.useImperativeHandle = qa, G.useInsertionEffect = rn, G.useLayoutEffect = sn, G.useMemo = Ga, G.useReducer = ht, G.useRef = dt, G.useState = Ge, G.useSyncExternalStore = ru, G.useTransition = rt, G.version = M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ev, ev.exports)), ev.exports;
}
process.env.NODE_ENV === "production" ? p0.exports = Z_() : p0.exports = J_();
var wr = p0.exports;
const ek = /* @__PURE__ */ X_(wr);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function tk() {
  if (ZR) return Zp;
  ZR = 1;
  var B = wr, G = Symbol.for("react.element"), M = Symbol.for("react.fragment"), Je = Object.prototype.hasOwnProperty, Le = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(xt, ae, fe) {
    var et, J = {}, Ce = null, ie = null;
    fe !== void 0 && (Ce = "" + fe), ae.key !== void 0 && (Ce = "" + ae.key), ae.ref !== void 0 && (ie = ae.ref);
    for (et in ae) Je.call(ae, et) && !Oe.hasOwnProperty(et) && (J[et] = ae[et]);
    if (xt && xt.defaultProps) for (et in ae = xt.defaultProps, ae) J[et] === void 0 && (J[et] = ae[et]);
    return { $$typeof: G, type: xt, key: Ce, ref: ie, props: J, _owner: Le.current };
  }
  return Zp.Fragment = M, Zp.jsx = S, Zp.jsxs = S, Zp;
}
var Jp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JR;
function nk() {
  return JR || (JR = 1, process.env.NODE_ENV !== "production" && function() {
    var B = wr, G = Symbol.for("react.element"), M = Symbol.for("react.portal"), Je = Symbol.for("react.fragment"), Le = Symbol.for("react.strict_mode"), Oe = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), xt = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), et = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), Qe = Symbol.iterator, yt = "@@iterator";
    function vt(R) {
      if (R === null || typeof R != "object")
        return null;
      var $ = Qe && R[Qe] || R[yt];
      return typeof $ == "function" ? $ : null;
    }
    var Jt = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function st(R) {
      {
        for (var $ = arguments.length, ue = new Array($ > 1 ? $ - 1 : 0), me = 1; me < $; me++)
          ue[me - 1] = arguments[me];
        le("error", R, ue);
      }
    }
    function le(R, $, ue) {
      {
        var me = Jt.ReactDebugCurrentFrame, Xe = me.getStackAddendum();
        Xe !== "" && ($ += "%s", ue = ue.concat([Xe]));
        var Ge = ue.map(function(ht) {
          return String(ht);
        });
        Ge.unshift("Warning: " + $), Function.prototype.apply.call(console[R], console, Ge);
      }
    }
    var Ue = !1, Ee = !1, at = !1, He = !1, Xt = !1, Ht;
    Ht = Symbol.for("react.module.reference");
    function en(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Je || R === Oe || Xt || R === Le || R === fe || R === et || He || R === ie || Ue || Ee || at || typeof R == "object" && R !== null && (R.$$typeof === Ce || R.$$typeof === J || R.$$typeof === S || R.$$typeof === xt || R.$$typeof === ae || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ht || R.getModuleId !== void 0));
    }
    function un(R, $, ue) {
      var me = R.displayName;
      if (me)
        return me;
      var Xe = $.displayName || $.name || "";
      return Xe !== "" ? ue + "(" + Xe + ")" : ue;
    }
    function _t(R) {
      return R.displayName || "Context";
    }
    function Me(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && st("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Je:
          return "Fragment";
        case M:
          return "Portal";
        case Oe:
          return "Profiler";
        case Le:
          return "StrictMode";
        case fe:
          return "Suspense";
        case et:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case xt:
            var $ = R;
            return _t($) + ".Consumer";
          case S:
            var ue = R;
            return _t(ue._context) + ".Provider";
          case ae:
            return un(R, R.render, "ForwardRef");
          case J:
            var me = R.displayName || null;
            return me !== null ? me : Me(R.type) || "Memo";
          case Ce: {
            var Xe = R, Ge = Xe._payload, ht = Xe._init;
            try {
              return Me(ht(Ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, kt = 0, Ot, Te, Z, xe, ne, _, P;
    function Be() {
    }
    Be.__reactDisabledLog = !0;
    function Pe() {
      {
        if (kt === 0) {
          Ot = console.log, Te = console.info, Z = console.warn, xe = console.error, ne = console.group, _ = console.groupCollapsed, P = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        kt++;
      }
    }
    function ct() {
      {
        if (kt--, kt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, R, {
              value: Ot
            }),
            info: jt({}, R, {
              value: Te
            }),
            warn: jt({}, R, {
              value: Z
            }),
            error: jt({}, R, {
              value: xe
            }),
            group: jt({}, R, {
              value: ne
            }),
            groupCollapsed: jt({}, R, {
              value: _
            }),
            groupEnd: jt({}, R, {
              value: P
            })
          });
        }
        kt < 0 && st("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var it = Jt.ReactCurrentDispatcher, nt;
    function lt(R, $, ue) {
      {
        if (nt === void 0)
          try {
            throw Error();
          } catch (Xe) {
            var me = Xe.stack.trim().match(/\n( *(at )?)/);
            nt = me && me[1] || "";
          }
        return `
` + nt + R;
      }
    }
    var ft = !1, Bt;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      Bt = new On();
    }
    function br(R, $) {
      if (!R || ft)
        return "";
      {
        var ue = Bt.get(R);
        if (ue !== void 0)
          return ue;
      }
      var me;
      ft = !0;
      var Xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ge;
      Ge = it.current, it.current = null, Pe();
      try {
        if ($) {
          var ht = function() {
            throw Error();
          };
          if (Object.defineProperty(ht.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ht, []);
            } catch (Ze) {
              me = Ze;
            }
            Reflect.construct(R, [], ht);
          } else {
            try {
              ht.call();
            } catch (Ze) {
              me = Ze;
            }
            R.call(ht.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            me = Ze;
          }
          R();
        }
      } catch (Ze) {
        if (Ze && me && typeof Ze.stack == "string") {
          for (var dt = Ze.stack.split(`
`), Tn = me.stack.split(`
`), rn = dt.length - 1, sn = Tn.length - 1; rn >= 1 && sn >= 0 && dt[rn] !== Tn[sn]; )
            sn--;
          for (; rn >= 1 && sn >= 0; rn--, sn--)
            if (dt[rn] !== Tn[sn]) {
              if (rn !== 1 || sn !== 1)
                do
                  if (rn--, sn--, sn < 0 || dt[rn] !== Tn[sn]) {
                    var ar = `
` + dt[rn].replace(" at new ", " at ");
                    return R.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", R.displayName)), typeof R == "function" && Bt.set(R, ar), ar;
                  }
                while (rn >= 1 && sn >= 0);
              break;
            }
        }
      } finally {
        ft = !1, it.current = Ge, ct(), Error.prepareStackTrace = Xe;
      }
      var Ga = R ? R.displayName || R.name : "", qa = Ga ? lt(Ga) : "";
      return typeof R == "function" && Bt.set(R, qa), qa;
    }
    function Cn(R, $, ue) {
      return br(R, !1);
    }
    function nr(R) {
      var $ = R.prototype;
      return !!($ && $.isReactComponent);
    }
    function Vn(R, $, ue) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return br(R, nr(R));
      if (typeof R == "string")
        return lt(R);
      switch (R) {
        case fe:
          return lt("Suspense");
        case et:
          return lt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ae:
            return Cn(R.render);
          case J:
            return Vn(R.type, $, ue);
          case Ce: {
            var me = R, Xe = me._payload, Ge = me._init;
            try {
              return Vn(Ge(Xe), $, ue);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Ir = {}, ci = Jt.ReactDebugCurrentFrame;
    function sa(R) {
      if (R) {
        var $ = R._owner, ue = Vn(R.type, R._source, $ ? $.type : null);
        ci.setExtraStackFrame(ue);
      } else
        ci.setExtraStackFrame(null);
    }
    function qn(R, $, ue, me, Xe) {
      {
        var Ge = Function.call.bind(Bn);
        for (var ht in R)
          if (Ge(R, ht)) {
            var dt = void 0;
            try {
              if (typeof R[ht] != "function") {
                var Tn = Error((me || "React class") + ": " + ue + " type `" + ht + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[ht] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              dt = R[ht]($, ht, me, ue, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rn) {
              dt = rn;
            }
            dt && !(dt instanceof Error) && (sa(Xe), st("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", ue, ht, typeof dt), sa(null)), dt instanceof Error && !(dt.message in Ir) && (Ir[dt.message] = !0, sa(Xe), st("Failed %s type: %s", ue, dt.message), sa(null));
          }
      }
    }
    var Rn = Array.isArray;
    function $n(R) {
      return Rn(R);
    }
    function gr(R) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, ue = $ && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ue;
      }
    }
    function Ia(R) {
      try {
        return Ln(R), !1;
      } catch {
        return !0;
      }
    }
    function Ln(R) {
      return "" + R;
    }
    function Sr(R) {
      if (Ia(R))
        return st("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(R)), Ln(R);
    }
    var ca = Jt.ReactCurrentOwner, Qa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, ee;
    function we(R) {
      if (Bn.call(R, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(R, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ut(R) {
      if (Bn.call(R, "key")) {
        var $ = Object.getOwnPropertyDescriptor(R, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ft(R, $) {
      typeof R.ref == "string" && ca.current;
    }
    function tn(R, $) {
      {
        var ue = function() {
          fi || (fi = !0, st("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        ue.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ue,
          configurable: !0
        });
      }
    }
    function vn(R, $) {
      {
        var ue = function() {
          ee || (ee = !0, st("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        ue.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ue,
          configurable: !0
        });
      }
    }
    var on = function(R, $, ue, me, Xe, Ge, ht) {
      var dt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: G,
        // Built-in properties that belong on the element
        type: R,
        key: $,
        ref: ue,
        props: ht,
        // Record the component responsible for creating this element.
        _owner: Ge
      };
      return dt._store = {}, Object.defineProperty(dt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(dt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty(dt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Xe
      }), Object.freeze && (Object.freeze(dt.props), Object.freeze(dt)), dt;
    };
    function Kn(R, $, ue, me, Xe) {
      {
        var Ge, ht = {}, dt = null, Tn = null;
        ue !== void 0 && (Sr(ue), dt = "" + ue), ut($) && (Sr($.key), dt = "" + $.key), we($) && (Tn = $.ref, Ft($, Xe));
        for (Ge in $)
          Bn.call($, Ge) && !Qa.hasOwnProperty(Ge) && (ht[Ge] = $[Ge]);
        if (R && R.defaultProps) {
          var rn = R.defaultProps;
          for (Ge in rn)
            ht[Ge] === void 0 && (ht[Ge] = rn[Ge]);
        }
        if (dt || Tn) {
          var sn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          dt && tn(ht, sn), Tn && vn(ht, sn);
        }
        return on(R, dt, Tn, Xe, me, ca.current, ht);
      }
    }
    var nn = Jt.ReactCurrentOwner, $t = Jt.ReactDebugCurrentFrame;
    function Yt(R) {
      if (R) {
        var $ = R._owner, ue = Vn(R.type, R._source, $ ? $.type : null);
        $t.setExtraStackFrame(ue);
      } else
        $t.setExtraStackFrame(null);
    }
    var fa;
    fa = !1;
    function Er(R) {
      return typeof R == "object" && R !== null && R.$$typeof === G;
    }
    function xa() {
      {
        if (nn.current) {
          var R = Me(nn.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Hi(R) {
      return "";
    }
    var Jl = {};
    function eu(R) {
      {
        var $ = xa();
        if (!$) {
          var ue = typeof R == "string" ? R : R.displayName || R.name;
          ue && ($ = `

Check the top-level render call using <` + ue + ">.");
        }
        return $;
      }
    }
    function pl(R, $) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ue = eu($);
        if (Jl[ue])
          return;
        Jl[ue] = !0;
        var me = "";
        R && R._owner && R._owner !== nn.current && (me = " It was passed a child from " + Me(R._owner.type) + "."), Yt(R), st('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ue, me), Yt(null);
      }
    }
    function vl(R, $) {
      {
        if (typeof R != "object")
          return;
        if ($n(R))
          for (var ue = 0; ue < R.length; ue++) {
            var me = R[ue];
            Er(me) && pl(me, $);
          }
        else if (Er(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Xe = vt(R);
          if (typeof Xe == "function" && Xe !== R.entries)
            for (var Ge = Xe.call(R), ht; !(ht = Ge.next()).done; )
              Er(ht.value) && pl(ht.value, $);
        }
      }
    }
    function tu(R) {
      {
        var $ = R.type;
        if ($ == null || typeof $ == "string")
          return;
        var ue;
        if (typeof $ == "function")
          ue = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === ae || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === J))
          ue = $.propTypes;
        else
          return;
        if (ue) {
          var me = Me($);
          qn(ue, R.props, "prop", me, R);
        } else if ($.PropTypes !== void 0 && !fa) {
          fa = !0;
          var Xe = Me($);
          st("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Xe || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && st("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(R) {
      {
        for (var $ = Object.keys(R.props), ue = 0; ue < $.length; ue++) {
          var me = $[ue];
          if (me !== "children" && me !== "key") {
            Yt(R), st("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), Yt(null);
            break;
          }
        }
        R.ref !== null && (Yt(R), st("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    var kr = {};
    function rr(R, $, ue, me, Xe, Ge) {
      {
        var ht = en(R);
        if (!ht) {
          var dt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (dt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Hi();
          Tn ? dt += Tn : dt += xa();
          var rn;
          R === null ? rn = "null" : $n(R) ? rn = "array" : R !== void 0 && R.$$typeof === G ? (rn = "<" + (Me(R.type) || "Unknown") + " />", dt = " Did you accidentally export a JSX literal instead of a component?") : rn = typeof R, st("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", rn, dt);
        }
        var sn = Kn(R, $, ue, Xe, Ge);
        if (sn == null)
          return sn;
        if (ht) {
          var ar = $.children;
          if (ar !== void 0)
            if (me)
              if ($n(ar)) {
                for (var Ga = 0; Ga < ar.length; Ga++)
                  vl(ar[Ga], R);
                Object.freeze && Object.freeze(ar);
              } else
                st("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vl(ar, R);
        }
        if (Bn.call($, "key")) {
          var qa = Me(R), Ze = Object.keys($).filter(function(nu) {
            return nu !== "key";
          }), rt = Ze.length > 0 ? "{key: someKey, " + Ze.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!kr[qa + rt]) {
            var Ka = Ze.length > 0 ? "{" + Ze.join(": ..., ") + ": ...}" : "{}";
            st(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rt, qa, Ka, qa), kr[qa + rt] = !0;
          }
        }
        return R === Je ? _r(sn) : tu(sn), sn;
      }
    }
    function di(R, $, ue) {
      return rr(R, $, ue, !0);
    }
    function Wa(R, $, ue) {
      return rr(R, $, ue, !1);
    }
    var pi = Wa, vi = di;
    Jp.Fragment = Je, Jp.jsx = pi, Jp.jsxs = vi;
  }()), Jp;
}
process.env.NODE_ENV === "production" ? d0.exports = tk() : d0.exports = nk();
var Ye = d0.exports, v0 = { exports: {} }, $a = {}, Qm = { exports: {} }, c0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e1;
function rk() {
  return e1 || (e1 = 1, function(B) {
    function G(Z, xe) {
      var ne = Z.length;
      Z.push(xe);
      e: for (; 0 < ne; ) {
        var _ = ne - 1 >>> 1, P = Z[_];
        if (0 < Le(P, xe)) Z[_] = xe, Z[ne] = P, ne = _;
        else break e;
      }
    }
    function M(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function Je(Z) {
      if (Z.length === 0) return null;
      var xe = Z[0], ne = Z.pop();
      if (ne !== xe) {
        Z[0] = ne;
        e: for (var _ = 0, P = Z.length, Be = P >>> 1; _ < Be; ) {
          var Pe = 2 * (_ + 1) - 1, ct = Z[Pe], it = Pe + 1, nt = Z[it];
          if (0 > Le(ct, ne)) it < P && 0 > Le(nt, ct) ? (Z[_] = nt, Z[it] = ne, _ = it) : (Z[_] = ct, Z[Pe] = ne, _ = Pe);
          else if (it < P && 0 > Le(nt, ne)) Z[_] = nt, Z[it] = ne, _ = it;
          else break e;
        }
      }
      return xe;
    }
    function Le(Z, xe) {
      var ne = Z.sortIndex - xe.sortIndex;
      return ne !== 0 ? ne : Z.id - xe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Oe = performance;
      B.unstable_now = function() {
        return Oe.now();
      };
    } else {
      var S = Date, xt = S.now();
      B.unstable_now = function() {
        return S.now() - xt;
      };
    }
    var ae = [], fe = [], et = 1, J = null, Ce = 3, ie = !1, Qe = !1, yt = !1, vt = typeof setTimeout == "function" ? setTimeout : null, Jt = typeof clearTimeout == "function" ? clearTimeout : null, st = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function le(Z) {
      for (var xe = M(fe); xe !== null; ) {
        if (xe.callback === null) Je(fe);
        else if (xe.startTime <= Z) Je(fe), xe.sortIndex = xe.expirationTime, G(ae, xe);
        else break;
        xe = M(fe);
      }
    }
    function Ue(Z) {
      if (yt = !1, le(Z), !Qe) if (M(ae) !== null) Qe = !0, Ot(Ee);
      else {
        var xe = M(fe);
        xe !== null && Te(Ue, xe.startTime - Z);
      }
    }
    function Ee(Z, xe) {
      Qe = !1, yt && (yt = !1, Jt(Xt), Xt = -1), ie = !0;
      var ne = Ce;
      try {
        for (le(xe), J = M(ae); J !== null && (!(J.expirationTime > xe) || Z && !un()); ) {
          var _ = J.callback;
          if (typeof _ == "function") {
            J.callback = null, Ce = J.priorityLevel;
            var P = _(J.expirationTime <= xe);
            xe = B.unstable_now(), typeof P == "function" ? J.callback = P : J === M(ae) && Je(ae), le(xe);
          } else Je(ae);
          J = M(ae);
        }
        if (J !== null) var Be = !0;
        else {
          var Pe = M(fe);
          Pe !== null && Te(Ue, Pe.startTime - xe), Be = !1;
        }
        return Be;
      } finally {
        J = null, Ce = ne, ie = !1;
      }
    }
    var at = !1, He = null, Xt = -1, Ht = 5, en = -1;
    function un() {
      return !(B.unstable_now() - en < Ht);
    }
    function _t() {
      if (He !== null) {
        var Z = B.unstable_now();
        en = Z;
        var xe = !0;
        try {
          xe = He(!0, Z);
        } finally {
          xe ? Me() : (at = !1, He = null);
        }
      } else at = !1;
    }
    var Me;
    if (typeof st == "function") Me = function() {
      st(_t);
    };
    else if (typeof MessageChannel < "u") {
      var jt = new MessageChannel(), kt = jt.port2;
      jt.port1.onmessage = _t, Me = function() {
        kt.postMessage(null);
      };
    } else Me = function() {
      vt(_t, 0);
    };
    function Ot(Z) {
      He = Z, at || (at = !0, Me());
    }
    function Te(Z, xe) {
      Xt = vt(function() {
        Z(B.unstable_now());
      }, xe);
    }
    B.unstable_IdlePriority = 5, B.unstable_ImmediatePriority = 1, B.unstable_LowPriority = 4, B.unstable_NormalPriority = 3, B.unstable_Profiling = null, B.unstable_UserBlockingPriority = 2, B.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, B.unstable_continueExecution = function() {
      Qe || ie || (Qe = !0, Ot(Ee));
    }, B.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ht = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, B.unstable_getCurrentPriorityLevel = function() {
      return Ce;
    }, B.unstable_getFirstCallbackNode = function() {
      return M(ae);
    }, B.unstable_next = function(Z) {
      switch (Ce) {
        case 1:
        case 2:
        case 3:
          var xe = 3;
          break;
        default:
          xe = Ce;
      }
      var ne = Ce;
      Ce = xe;
      try {
        return Z();
      } finally {
        Ce = ne;
      }
    }, B.unstable_pauseExecution = function() {
    }, B.unstable_requestPaint = function() {
    }, B.unstable_runWithPriority = function(Z, xe) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var ne = Ce;
      Ce = Z;
      try {
        return xe();
      } finally {
        Ce = ne;
      }
    }, B.unstable_scheduleCallback = function(Z, xe, ne) {
      var _ = B.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? _ + ne : _) : ne = _, Z) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = ne + P, Z = { id: et++, callback: xe, priorityLevel: Z, startTime: ne, expirationTime: P, sortIndex: -1 }, ne > _ ? (Z.sortIndex = ne, G(fe, Z), M(ae) === null && Z === M(fe) && (yt ? (Jt(Xt), Xt = -1) : yt = !0, Te(Ue, ne - _))) : (Z.sortIndex = P, G(ae, Z), Qe || ie || (Qe = !0, Ot(Ee))), Z;
    }, B.unstable_shouldYield = un, B.unstable_wrapCallback = function(Z) {
      var xe = Ce;
      return function() {
        var ne = Ce;
        Ce = xe;
        try {
          return Z.apply(this, arguments);
        } finally {
          Ce = ne;
        }
      };
    };
  }(c0)), c0;
}
var f0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t1;
function ak() {
  return t1 || (t1 = 1, function(B) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var G = !1, M = 5;
      function Je(ee, we) {
        var ut = ee.length;
        ee.push(we), S(ee, we, ut);
      }
      function Le(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function Oe(ee) {
        if (ee.length === 0)
          return null;
        var we = ee[0], ut = ee.pop();
        return ut !== we && (ee[0] = ut, xt(ee, ut, 0)), we;
      }
      function S(ee, we, ut) {
        for (var Ft = ut; Ft > 0; ) {
          var tn = Ft - 1 >>> 1, vn = ee[tn];
          if (ae(vn, we) > 0)
            ee[tn] = we, ee[Ft] = vn, Ft = tn;
          else
            return;
        }
      }
      function xt(ee, we, ut) {
        for (var Ft = ut, tn = ee.length, vn = tn >>> 1; Ft < vn; ) {
          var on = (Ft + 1) * 2 - 1, Kn = ee[on], nn = on + 1, $t = ee[nn];
          if (ae(Kn, we) < 0)
            nn < tn && ae($t, Kn) < 0 ? (ee[Ft] = $t, ee[nn] = we, Ft = nn) : (ee[Ft] = Kn, ee[on] = we, Ft = on);
          else if (nn < tn && ae($t, we) < 0)
            ee[Ft] = $t, ee[nn] = we, Ft = nn;
          else
            return;
        }
      }
      function ae(ee, we) {
        var ut = ee.sortIndex - we.sortIndex;
        return ut !== 0 ? ut : ee.id - we.id;
      }
      var fe = 1, et = 2, J = 3, Ce = 4, ie = 5;
      function Qe(ee, we) {
      }
      var yt = typeof performance == "object" && typeof performance.now == "function";
      if (yt) {
        var vt = performance;
        B.unstable_now = function() {
          return vt.now();
        };
      } else {
        var Jt = Date, st = Jt.now();
        B.unstable_now = function() {
          return Jt.now() - st;
        };
      }
      var le = 1073741823, Ue = -1, Ee = 250, at = 5e3, He = 1e4, Xt = le, Ht = [], en = [], un = 1, _t = null, Me = J, jt = !1, kt = !1, Ot = !1, Te = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, xe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ne(ee) {
        for (var we = Le(en); we !== null; ) {
          if (we.callback === null)
            Oe(en);
          else if (we.startTime <= ee)
            Oe(en), we.sortIndex = we.expirationTime, Je(Ht, we);
          else
            return;
          we = Le(en);
        }
      }
      function _(ee) {
        if (Ot = !1, ne(ee), !kt)
          if (Le(Ht) !== null)
            kt = !0, Ln(P);
          else {
            var we = Le(en);
            we !== null && Sr(_, we.startTime - ee);
          }
      }
      function P(ee, we) {
        kt = !1, Ot && (Ot = !1, ca()), jt = !0;
        var ut = Me;
        try {
          var Ft;
          if (!G) return Be(ee, we);
        } finally {
          _t = null, Me = ut, jt = !1;
        }
      }
      function Be(ee, we) {
        var ut = we;
        for (ne(ut), _t = Le(Ht); _t !== null && !(_t.expirationTime > ut && (!ee || ci())); ) {
          var Ft = _t.callback;
          if (typeof Ft == "function") {
            _t.callback = null, Me = _t.priorityLevel;
            var tn = _t.expirationTime <= ut, vn = Ft(tn);
            ut = B.unstable_now(), typeof vn == "function" ? _t.callback = vn : _t === Le(Ht) && Oe(Ht), ne(ut);
          } else
            Oe(Ht);
          _t = Le(Ht);
        }
        if (_t !== null)
          return !0;
        var on = Le(en);
        return on !== null && Sr(_, on.startTime - ut), !1;
      }
      function Pe(ee, we) {
        switch (ee) {
          case fe:
          case et:
          case J:
          case Ce:
          case ie:
            break;
          default:
            ee = J;
        }
        var ut = Me;
        Me = ee;
        try {
          return we();
        } finally {
          Me = ut;
        }
      }
      function ct(ee) {
        var we;
        switch (Me) {
          case fe:
          case et:
          case J:
            we = J;
            break;
          default:
            we = Me;
            break;
        }
        var ut = Me;
        Me = we;
        try {
          return ee();
        } finally {
          Me = ut;
        }
      }
      function it(ee) {
        var we = Me;
        return function() {
          var ut = Me;
          Me = we;
          try {
            return ee.apply(this, arguments);
          } finally {
            Me = ut;
          }
        };
      }
      function nt(ee, we, ut) {
        var Ft = B.unstable_now(), tn;
        if (typeof ut == "object" && ut !== null) {
          var vn = ut.delay;
          typeof vn == "number" && vn > 0 ? tn = Ft + vn : tn = Ft;
        } else
          tn = Ft;
        var on;
        switch (ee) {
          case fe:
            on = Ue;
            break;
          case et:
            on = Ee;
            break;
          case ie:
            on = Xt;
            break;
          case Ce:
            on = He;
            break;
          case J:
          default:
            on = at;
            break;
        }
        var Kn = tn + on, nn = {
          id: un++,
          callback: we,
          priorityLevel: ee,
          startTime: tn,
          expirationTime: Kn,
          sortIndex: -1
        };
        return tn > Ft ? (nn.sortIndex = tn, Je(en, nn), Le(Ht) === null && nn === Le(en) && (Ot ? ca() : Ot = !0, Sr(_, tn - Ft))) : (nn.sortIndex = Kn, Je(Ht, nn), !kt && !jt && (kt = !0, Ln(P))), nn;
      }
      function lt() {
      }
      function ft() {
        !kt && !jt && (kt = !0, Ln(P));
      }
      function Bt() {
        return Le(Ht);
      }
      function On(ee) {
        ee.callback = null;
      }
      function br() {
        return Me;
      }
      var Cn = !1, nr = null, Vn = -1, Bn = M, Ir = -1;
      function ci() {
        var ee = B.unstable_now() - Ir;
        return !(ee < Bn);
      }
      function sa() {
      }
      function qn(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? Bn = Math.floor(1e3 / ee) : Bn = M;
      }
      var Rn = function() {
        if (nr !== null) {
          var ee = B.unstable_now();
          Ir = ee;
          var we = !0, ut = !0;
          try {
            ut = nr(we, ee);
          } finally {
            ut ? $n() : (Cn = !1, nr = null);
          }
        } else
          Cn = !1;
      }, $n;
      if (typeof xe == "function")
        $n = function() {
          xe(Rn);
        };
      else if (typeof MessageChannel < "u") {
        var gr = new MessageChannel(), Ia = gr.port2;
        gr.port1.onmessage = Rn, $n = function() {
          Ia.postMessage(null);
        };
      } else
        $n = function() {
          Te(Rn, 0);
        };
      function Ln(ee) {
        nr = ee, Cn || (Cn = !0, $n());
      }
      function Sr(ee, we) {
        Vn = Te(function() {
          ee(B.unstable_now());
        }, we);
      }
      function ca() {
        Z(Vn), Vn = -1;
      }
      var Qa = sa, fi = null;
      B.unstable_IdlePriority = ie, B.unstable_ImmediatePriority = fe, B.unstable_LowPriority = Ce, B.unstable_NormalPriority = J, B.unstable_Profiling = fi, B.unstable_UserBlockingPriority = et, B.unstable_cancelCallback = On, B.unstable_continueExecution = ft, B.unstable_forceFrameRate = qn, B.unstable_getCurrentPriorityLevel = br, B.unstable_getFirstCallbackNode = Bt, B.unstable_next = ct, B.unstable_pauseExecution = lt, B.unstable_requestPaint = Qa, B.unstable_runWithPriority = Pe, B.unstable_scheduleCallback = nt, B.unstable_shouldYield = ci, B.unstable_wrapCallback = it, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(f0)), f0;
}
var n1;
function u1() {
  return n1 || (n1 = 1, process.env.NODE_ENV === "production" ? Qm.exports = rk() : Qm.exports = ak()), Qm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r1;
function ik() {
  if (r1) return $a;
  r1 = 1;
  var B = wr, G = u1();
  function M(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Je = /* @__PURE__ */ new Set(), Le = {};
  function Oe(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Le[n] = r, n = 0; n < r.length; n++) Je.add(r[n]);
  }
  var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ae = Object.prototype.hasOwnProperty, fe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, et = {}, J = {};
  function Ce(n) {
    return ae.call(J, n) ? !0 : ae.call(et, n) ? !1 : fe.test(n) ? J[n] = !0 : (et[n] = !0, !1);
  }
  function ie(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Qe(n, r, l, o) {
    if (r === null || typeof r > "u" || ie(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function yt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var vt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    vt[n] = new yt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    vt[r] = new yt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    vt[n] = new yt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    vt[n] = new yt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    vt[n] = new yt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    vt[n] = new yt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    vt[n] = new yt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    vt[n] = new yt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    vt[n] = new yt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Jt = /[\-:]([a-z])/g;
  function st(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Jt,
      st
    );
    vt[r] = new yt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Jt, st);
    vt[r] = new yt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Jt, st);
    vt[r] = new yt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    vt[n] = new yt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), vt.xlinkHref = new yt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    vt[n] = new yt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function le(n, r, l, o) {
    var c = vt.hasOwnProperty(r) ? vt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Qe(r, l, c, o) && (l = null), o || c === null ? Ce(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ue = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ee = Symbol.for("react.element"), at = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), Xt = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), en = Symbol.for("react.provider"), un = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), Me = Symbol.for("react.suspense"), jt = Symbol.for("react.suspense_list"), kt = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Te = Symbol.for("react.offscreen"), Z = Symbol.iterator;
  function xe(n) {
    return n === null || typeof n != "object" ? null : (n = Z && n[Z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ne = Object.assign, _;
  function P(n) {
    if (_ === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + n;
  }
  var Be = !1;
  function Pe(n, r) {
    if (!n || Be) return "";
    Be = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Be = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function ct(n) {
    switch (n.tag) {
      case 5:
        return P(n.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Pe(n.type, !1), n;
      case 11:
        return n = Pe(n.type.render, !1), n;
      case 1:
        return n = Pe(n.type, !0), n;
      default:
        return "";
    }
  }
  function it(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case He:
        return "Fragment";
      case at:
        return "Portal";
      case Ht:
        return "Profiler";
      case Xt:
        return "StrictMode";
      case Me:
        return "Suspense";
      case jt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case un:
        return (n.displayName || "Context") + ".Consumer";
      case en:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case kt:
        return r = n.displayName || null, r !== null ? r : it(n.type) || "Memo";
      case Ot:
        r = n._payload, n = n._init;
        try {
          return it(n(r));
        } catch {
        }
    }
    return null;
  }
  function nt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return it(r);
      case 8:
        return r === Xt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function lt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function ft(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = ft(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function On(n) {
    n._valueTracker || (n._valueTracker = Bt(n));
  }
  function br(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = ft(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Cn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function nr(n, r) {
    var l = r.checked;
    return ne({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Vn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = lt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && le(n, "checked", r, !1);
  }
  function Ir(n, r) {
    Bn(n, r);
    var l = lt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? sa(n, r.type, l) : r.hasOwnProperty("defaultValue") && sa(n, r.type, lt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ci(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function sa(n, r, l) {
    (r !== "number" || Cn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qn = Array.isArray;
  function Rn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + lt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function $n(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(M(91));
    return ne({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function gr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(M(92));
        if (qn(l)) {
          if (1 < l.length) throw Error(M(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: lt(l) };
  }
  function Ia(n, r) {
    var l = lt(r.value), o = lt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ln(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Sr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ca(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Sr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Qa, fi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Qa = Qa || document.createElement("div"), Qa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Qa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ee(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var we = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ut = ["Webkit", "ms", "Moz", "O"];
  Object.keys(we).forEach(function(n) {
    ut.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), we[r] = we[n];
    });
  });
  function Ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || we.hasOwnProperty(n) && we[n] ? ("" + r).trim() : r + "px";
  }
  function tn(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var vn = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function on(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(M(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(M(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(M(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(M(62));
    }
  }
  function Kn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var nn = null;
  function $t(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, fa = null, Er = null;
  function xa(n) {
    if (n = ke(n)) {
      if (typeof Yt != "function") throw Error(M(280));
      var r = n.stateNode;
      r && (r = mn(r), Yt(n.stateNode, n.type, r));
    }
  }
  function Hi(n) {
    fa ? Er ? Er.push(n) : Er = [n] : fa = n;
  }
  function Jl() {
    if (fa) {
      var n = fa, r = Er;
      if (Er = fa = null, xa(n), r) for (n = 0; n < r.length; n++) xa(r[n]);
    }
  }
  function eu(n, r) {
    return n(r);
  }
  function pl() {
  }
  var vl = !1;
  function tu(n, r, l) {
    if (vl) return n(r, l);
    vl = !0;
    try {
      return eu(n, r, l);
    } finally {
      vl = !1, (fa !== null || Er !== null) && (pl(), Jl());
    }
  }
  function _r(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = mn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(M(231, r, typeof l));
    return l;
  }
  var kr = !1;
  if (xt) try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      kr = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    kr = !1;
  }
  function di(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var Wa = !1, pi = null, vi = !1, R = null, $ = { onError: function(n) {
    Wa = !0, pi = n;
  } };
  function ue(n, r, l, o, c, d, m, E, T) {
    Wa = !1, pi = null, di.apply($, arguments);
  }
  function me(n, r, l, o, c, d, m, E, T) {
    if (ue.apply(this, arguments), Wa) {
      if (Wa) {
        var U = pi;
        Wa = !1, pi = null;
      } else throw Error(M(198));
      vi || (vi = !0, R = U);
    }
  }
  function Xe(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ge(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function ht(n) {
    if (Xe(n) !== n) throw Error(M(188));
  }
  function dt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Xe(n), r === null) throw Error(M(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return ht(c), n;
          if (d === o) return ht(c), r;
          d = d.sibling;
        }
        throw Error(M(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(M(189));
        }
      }
      if (l.alternate !== o) throw Error(M(190));
    }
    if (l.tag !== 3) throw Error(M(188));
    return l.stateNode.current === l ? n : r;
  }
  function Tn(n) {
    return n = dt(n), n !== null ? rn(n) : null;
  }
  function rn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = rn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var sn = G.unstable_scheduleCallback, ar = G.unstable_cancelCallback, Ga = G.unstable_shouldYield, qa = G.unstable_requestPaint, Ze = G.unstable_now, rt = G.unstable_getCurrentPriorityLevel, Ka = G.unstable_ImmediatePriority, nu = G.unstable_UserBlockingPriority, ru = G.unstable_NormalPriority, hl = G.unstable_LowPriority, Wu = G.unstable_IdlePriority, ml = null, Qr = null;
  function Io(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : Gu, uc = Math.log, oc = Math.LN2;
  function Gu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (uc(n) / oc | 0) | 0;
  }
  var yl = 64, da = 4194304;
  function Xa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Za(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Xa(E) : (d &= m, d !== 0 && (o = Xa(d)));
    } else m = l & ~c, m !== 0 ? o = Xa(m) : d !== 0 && (o = Xa(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function qu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function au(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Dr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = qu(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function gl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ku() {
    var n = yl;
    return yl <<= 1, !(yl & 4194240) && (yl = 64), n;
  }
  function Xu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Pi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function Wf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Zu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var wt, Qo, hi, We, Ju, ir = !1, mi = [], Or = null, yi = null, cn = null, It = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Map(), Yn = [], Lr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function wa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Or = null;
        break;
      case "dragenter":
      case "dragleave":
        yi = null;
        break;
      case "mouseover":
      case "mouseout":
        cn = null;
        break;
      case "pointerover":
      case "pointerout":
        It.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sl.delete(r.pointerId);
    }
  }
  function iu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ke(r), r !== null && Qo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Wo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Or = iu(Or, n, r, l, o, c), !0;
      case "dragenter":
        return yi = iu(yi, n, r, l, o, c), !0;
      case "mouseover":
        return cn = iu(cn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return It.set(d, iu(It.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Sl.set(d, iu(Sl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Go(n) {
    var r = vu(n.target);
    if (r !== null) {
      var l = Xe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ge(l), r !== null) {
            n.blockedOn = r, Ju(n.priority, function() {
              hi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function El(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = no(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        nn = o, l.target.dispatchEvent(o), nn = null;
      } else return r = ke(l), r !== null && Qo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    El(n) && l.delete(r);
  }
  function Gf() {
    ir = !1, Or !== null && El(Or) && (Or = null), yi !== null && El(yi) && (yi = null), cn !== null && El(cn) && (cn = null), It.forEach(lu), Sl.forEach(lu);
  }
  function ba(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, G.unstable_scheduleCallback(G.unstable_NormalPriority, Gf)));
  }
  function Ja(n) {
    function r(c) {
      return ba(c, n);
    }
    if (0 < mi.length) {
      ba(mi[0], n);
      for (var l = 1; l < mi.length; l++) {
        var o = mi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Or !== null && ba(Or, n), yi !== null && ba(yi, n), cn !== null && ba(cn, n), It.forEach(r), Sl.forEach(r), l = 0; l < Yn.length; l++) o = Yn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Yn.length && (l = Yn[0], l.blockedOn === null); ) Go(l), l.blockedOn === null && Yn.shift();
  }
  var gi = Ue.ReactCurrentBatchConfig, _a = !0;
  function eo(n, r, l, o) {
    var c = Lt, d = gi.transition;
    gi.transition = null;
    try {
      Lt = 1, Cl(n, r, l, o);
    } finally {
      Lt = c, gi.transition = d;
    }
  }
  function to(n, r, l, o) {
    var c = Lt, d = gi.transition;
    gi.transition = null;
    try {
      Lt = 4, Cl(n, r, l, o);
    } finally {
      Lt = c, gi.transition = d;
    }
  }
  function Cl(n, r, l, o) {
    if (_a) {
      var c = no(n, r, l, o);
      if (c === null) Ec(n, r, o, uu, l), wa(n, o);
      else if (Wo(c, n, r, l, o)) o.stopPropagation();
      else if (wa(n, o), r & 4 && -1 < Lr.indexOf(n)) {
        for (; c !== null; ) {
          var d = ke(c);
          if (d !== null && wt(d), d = no(n, r, l, o), d === null && Ec(n, r, o, uu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Ec(n, r, o, null, l);
    }
  }
  var uu = null;
  function no(n, r, l, o) {
    if (uu = null, n = $t(o), n = vu(n), n !== null) if (r = Xe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ge(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return uu = n, null;
  }
  function ro(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (rt()) {
          case Ka:
            return 1;
          case nu:
            return 4;
          case ru:
          case hl:
            return 16;
          case Wu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ei = null, h = null, C = null;
  function z() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in ei ? ei.value : ei.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function X() {
    return !0;
  }
  function Ne() {
    return !1;
  }
  function re(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? X : Ne, this.isPropagationStopped = Ne, this;
    }
    return ne(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = X);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = X);
    }, persist: function() {
    }, isPersistent: X }), r;
  }
  var je = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, mt = re(je), bt = ne({}, je, { view: 0, detail: 0 }), an = re(bt), Qt, ot, Wt, hn = ne({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Jf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Wt && (Wt && n.type === "mousemove" ? (Qt = n.screenX - Wt.screenX, ot = n.screenY - Wt.screenY) : ot = Qt = 0, Wt = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : ot;
  } }), Rl = re(hn), qo = ne({}, hn, { dataTransfer: 0 }), Bi = re(qo), Ko = ne({}, bt, { relatedTarget: 0 }), ou = re(Ko), qf = ne({}, je, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sc = re(qf), Kf = ne({}, je, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), tv = re(Kf), Xf = ne({}, je, { data: 0 }), Zf = re(Xf), nv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, rv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Gm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $i(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Gm[n]) ? !!r[n] : !1;
  }
  function Jf() {
    return $i;
  }
  var ed = ne({}, bt, { key: function(n) {
    if (n.key) {
      var r = nv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Jf, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), td = re(ed), nd = ne({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), av = re(nd), cc = ne({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Jf }), iv = re(cc), Wr = ne({}, je, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yi = re(Wr), Mn = ne({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ii = re(Mn), rd = [9, 13, 27, 32], ao = xt && "CompositionEvent" in window, Xo = null;
  xt && "documentMode" in document && (Xo = document.documentMode);
  var Zo = xt && "TextEvent" in window && !Xo, lv = xt && (!ao || Xo && 8 < Xo && 11 >= Xo), uv = " ", fc = !1;
  function ov(n, r) {
    switch (n) {
      case "keyup":
        return rd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var io = !1;
  function cv(n, r) {
    switch (n) {
      case "compositionend":
        return sv(r);
      case "keypress":
        return r.which !== 32 ? null : (fc = !0, uv);
      case "textInput":
        return n = r.data, n === uv && fc ? null : n;
      default:
        return null;
    }
  }
  function qm(n, r) {
    if (io) return n === "compositionend" || !ao && ov(n, r) ? (n = z(), C = h = ei = null, io = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return lv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Km = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function fv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Km[n.type] : r === "textarea";
  }
  function ad(n, r, l, o) {
    Hi(o), r = as(r, "onChange"), 0 < r.length && (l = new mt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Si = null, su = null;
  function dv(n) {
    du(n, 0);
  }
  function Jo(n) {
    var r = ni(n);
    if (br(r)) return n;
  }
  function Xm(n, r) {
    if (n === "change") return r;
  }
  var pv = !1;
  if (xt) {
    var id;
    if (xt) {
      var ld = "oninput" in document;
      if (!ld) {
        var vv = document.createElement("div");
        vv.setAttribute("oninput", "return;"), ld = typeof vv.oninput == "function";
      }
      id = ld;
    } else id = !1;
    pv = id && (!document.documentMode || 9 < document.documentMode);
  }
  function hv() {
    Si && (Si.detachEvent("onpropertychange", mv), su = Si = null);
  }
  function mv(n) {
    if (n.propertyName === "value" && Jo(su)) {
      var r = [];
      ad(r, su, n, $t(n)), tu(dv, r);
    }
  }
  function Zm(n, r, l) {
    n === "focusin" ? (hv(), Si = r, su = l, Si.attachEvent("onpropertychange", mv)) : n === "focusout" && hv();
  }
  function yv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Jo(su);
  }
  function Jm(n, r) {
    if (n === "click") return Jo(r);
  }
  function gv(n, r) {
    if (n === "input" || n === "change") return Jo(r);
  }
  function ey(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ti = typeof Object.is == "function" ? Object.is : ey;
  function es(n, r) {
    if (ti(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ae.call(r, c) || !ti(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Sv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function dc(n, r) {
    var l = Sv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Sv(l);
    }
  }
  function Tl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ts() {
    for (var n = window, r = Cn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Cn(n.document);
    }
    return r;
  }
  function pc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lo(n) {
    var r = ts(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Tl(l.ownerDocument.documentElement, l)) {
      if (o !== null && pc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = dc(l, d);
          var m = dc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ty = xt && "documentMode" in document && 11 >= document.documentMode, uo = null, ud = null, ns = null, od = !1;
  function sd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    od || uo == null || uo !== Cn(o) || (o = uo, "selectionStart" in o && pc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && es(ns, o) || (ns = o, o = as(ud, "onSelect"), 0 < o.length && (r = new mt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = uo)));
  }
  function vc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var cu = { animationend: vc("Animation", "AnimationEnd"), animationiteration: vc("Animation", "AnimationIteration"), animationstart: vc("Animation", "AnimationStart"), transitionend: vc("Transition", "TransitionEnd") }, lr = {}, cd = {};
  xt && (cd = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function hc(n) {
    if (lr[n]) return lr[n];
    if (!cu[n]) return n;
    var r = cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in cd) return lr[n] = r[l];
    return n;
  }
  var Ev = hc("animationend"), Cv = hc("animationiteration"), Rv = hc("animationstart"), Tv = hc("transitionend"), fd = /* @__PURE__ */ new Map(), mc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ka(n, r) {
    fd.set(n, r), Oe(r, [n]);
  }
  for (var dd = 0; dd < mc.length; dd++) {
    var fu = mc[dd], ny = fu.toLowerCase(), ry = fu[0].toUpperCase() + fu.slice(1);
    ka(ny, "on" + ry);
  }
  ka(Ev, "onAnimationEnd"), ka(Cv, "onAnimationIteration"), ka(Rv, "onAnimationStart"), ka("dblclick", "onDoubleClick"), ka("focusin", "onFocus"), ka("focusout", "onBlur"), ka(Tv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Oe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Oe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Oe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Oe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Oe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Oe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pd = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function yc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, me(o, r, void 0, n), n.currentTarget = null;
  }
  function du(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, U = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          yc(c, E, U), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          yc(c, E, U), d = T;
        }
      }
    }
    if (vi) throw n = R, vi = !1, R = null, n;
  }
  function Pt(n, r) {
    var l = r[us];
    l === void 0 && (l = r[us] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (xv(r, n, 2, !1), l.add(o));
  }
  function gc(n, r, l) {
    var o = 0;
    r && (o |= 4), xv(l, n, o, r);
  }
  var Sc = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(n) {
    if (!n[Sc]) {
      n[Sc] = !0, Je.forEach(function(l) {
        l !== "selectionchange" && (pd.has(l) || gc(l, !1, n), gc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Sc] || (r[Sc] = !0, gc("selectionchange", !1, r));
    }
  }
  function xv(n, r, l, o) {
    switch (ro(r)) {
      case 1:
        var c = eo;
        break;
      case 4:
        c = to;
        break;
      default:
        c = Cl;
    }
    l = c.bind(null, r, l, n), c = void 0, !kr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Ec(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = vu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    tu(function() {
      var U = d, Q = $t(l), q = [];
      e: {
        var I = fd.get(n);
        if (I !== void 0) {
          var de = mt, ye = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              de = td;
              break;
            case "focusin":
              ye = "focus", de = ou;
              break;
            case "focusout":
              ye = "blur", de = ou;
              break;
            case "beforeblur":
            case "afterblur":
              de = ou;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              de = Rl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = Bi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = iv;
              break;
            case Ev:
            case Cv:
            case Rv:
              de = sc;
              break;
            case Tv:
              de = Yi;
              break;
            case "scroll":
              de = an;
              break;
            case "wheel":
              de = Ii;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = tv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = av;
          }
          var Re = (r & 4) !== 0, kn = !Re && n === "scroll", k = Re ? I !== null ? I + "Capture" : null : I;
          Re = [];
          for (var w = U, L; w !== null; ) {
            L = w;
            var W = L.stateNode;
            if (L.tag === 5 && W !== null && (L = W, k !== null && (W = _r(w, k), W != null && Re.push(so(w, W, L)))), kn) break;
            w = w.return;
          }
          0 < Re.length && (I = new de(I, ye, null, l, Q), q.push({ event: I, listeners: Re }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (I = n === "mouseover" || n === "pointerover", de = n === "mouseout" || n === "pointerout", I && l !== nn && (ye = l.relatedTarget || l.fromElement) && (vu(ye) || ye[Qi])) break e;
          if ((de || I) && (I = Q.window === Q ? Q : (I = Q.ownerDocument) ? I.defaultView || I.parentWindow : window, de ? (ye = l.relatedTarget || l.toElement, de = U, ye = ye ? vu(ye) : null, ye !== null && (kn = Xe(ye), ye !== kn || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (de = null, ye = U), de !== ye)) {
            if (Re = Rl, W = "onMouseLeave", k = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (Re = av, W = "onPointerLeave", k = "onPointerEnter", w = "pointer"), kn = de == null ? I : ni(de), L = ye == null ? I : ni(ye), I = new Re(W, w + "leave", de, l, Q), I.target = kn, I.relatedTarget = L, W = null, vu(Q) === U && (Re = new Re(k, w + "enter", ye, l, Q), Re.target = L, Re.relatedTarget = kn, W = Re), kn = W, de && ye) t: {
              for (Re = de, k = ye, w = 0, L = Re; L; L = xl(L)) w++;
              for (L = 0, W = k; W; W = xl(W)) L++;
              for (; 0 < w - L; ) Re = xl(Re), w--;
              for (; 0 < L - w; ) k = xl(k), L--;
              for (; w--; ) {
                if (Re === k || k !== null && Re === k.alternate) break t;
                Re = xl(Re), k = xl(k);
              }
              Re = null;
            }
            else Re = null;
            de !== null && wv(q, I, de, Re, !1), ye !== null && kn !== null && wv(q, kn, ye, Re, !0);
          }
        }
        e: {
          if (I = U ? ni(U) : window, de = I.nodeName && I.nodeName.toLowerCase(), de === "select" || de === "input" && I.type === "file") var ge = Xm;
          else if (fv(I)) if (pv) ge = gv;
          else {
            ge = yv;
            var Ae = Zm;
          }
          else (de = I.nodeName) && de.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (ge = Jm);
          if (ge && (ge = ge(n, U))) {
            ad(q, ge, l, Q);
            break e;
          }
          Ae && Ae(n, I, U), n === "focusout" && (Ae = I._wrapperState) && Ae.controlled && I.type === "number" && sa(I, "number", I.value);
        }
        switch (Ae = U ? ni(U) : window, n) {
          case "focusin":
            (fv(Ae) || Ae.contentEditable === "true") && (uo = Ae, ud = U, ns = null);
            break;
          case "focusout":
            ns = ud = uo = null;
            break;
          case "mousedown":
            od = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            od = !1, sd(q, l, Q);
            break;
          case "selectionchange":
            if (ty) break;
          case "keydown":
          case "keyup":
            sd(q, l, Q);
        }
        var Fe;
        if (ao) e: {
          switch (n) {
            case "compositionstart":
              var Ie = "onCompositionStart";
              break e;
            case "compositionend":
              Ie = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ie = "onCompositionUpdate";
              break e;
          }
          Ie = void 0;
        }
        else io ? ov(n, l) && (Ie = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ie = "onCompositionStart");
        Ie && (lv && l.locale !== "ko" && (io || Ie !== "onCompositionStart" ? Ie === "onCompositionEnd" && io && (Fe = z()) : (ei = Q, h = "value" in ei ? ei.value : ei.textContent, io = !0)), Ae = as(U, Ie), 0 < Ae.length && (Ie = new Zf(Ie, n, null, l, Q), q.push({ event: Ie, listeners: Ae }), Fe ? Ie.data = Fe : (Fe = sv(l), Fe !== null && (Ie.data = Fe)))), (Fe = Zo ? cv(n, l) : qm(n, l)) && (U = as(U, "onBeforeInput"), 0 < U.length && (Q = new Zf("onBeforeInput", "beforeinput", null, l, Q), q.push({ event: Q, listeners: U }), Q.data = Fe));
      }
      du(q, r);
    });
  }
  function so(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function as(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = _r(n, l), d != null && o.unshift(so(n, d, c)), d = _r(n, r), d != null && o.push(so(n, d, c))), n = n.return;
    }
    return o;
  }
  function xl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function wv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (T = _r(l, d), T != null && m.unshift(so(l, T, E))) : c || (T = _r(l, d), T != null && m.push(so(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var bv = /\r\n?/g, ay = /\u0000|\uFFFD/g;
  function _v(n) {
    return (typeof n == "string" ? n : "" + n).replace(bv, `
`).replace(ay, "");
  }
  function Cc(n, r, l) {
    if (r = _v(r), _v(n) !== r && l) throw Error(M(425));
  }
  function wl() {
  }
  var is = null, pu = null;
  function Rc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Tc = typeof setTimeout == "function" ? setTimeout : void 0, vd = typeof clearTimeout == "function" ? clearTimeout : void 0, kv = typeof Promise == "function" ? Promise : void 0, co = typeof queueMicrotask == "function" ? queueMicrotask : typeof kv < "u" ? function(n) {
    return kv.resolve(null).then(n).catch(xc);
  } : Tc;
  function xc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function fo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ja(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ja(r);
  }
  function Ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Dv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var bl = Math.random().toString(36).slice(2), Ci = "__reactFiber$" + bl, ls = "__reactProps$" + bl, Qi = "__reactContainer$" + bl, us = "__reactEvents$" + bl, po = "__reactListeners$" + bl, iy = "__reactHandles$" + bl;
  function vu(n) {
    var r = n[Ci];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Qi] || l[Ci]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Dv(n); n !== null; ) {
          if (l = n[Ci]) return l;
          n = Dv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ke(n) {
    return n = n[Ci] || n[Qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ni(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(M(33));
  }
  function mn(n) {
    return n[ls] || null;
  }
  var Et = [], Da = -1;
  function Oa(n) {
    return { current: n };
  }
  function ln(n) {
    0 > Da || (n.current = Et[Da], Et[Da] = null, Da--);
  }
  function _e(n, r) {
    Da++, Et[Da] = n.current, n.current = r;
  }
  var Cr = {}, En = Oa(Cr), In = Oa(!1), Gr = Cr;
  function qr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Cr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Nn(n) {
    return n = n.childContextTypes, n != null;
  }
  function vo() {
    ln(In), ln(En);
  }
  function Ov(n, r, l) {
    if (En.current !== Cr) throw Error(M(168));
    _e(En, r), _e(In, l);
  }
  function os(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(M(108, nt(n) || "Unknown", c));
    return ne({}, l, o);
  }
  function Xn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Cr, Gr = En.current, _e(En, n), _e(In, In.current), !0;
  }
  function wc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(M(169));
    l ? (n = os(n, r, Gr), o.__reactInternalMemoizedMergedChildContext = n, ln(In), ln(En), _e(En, n)) : ln(In), _e(In, l);
  }
  var Ri = null, ho = !1, Wi = !1;
  function bc(n) {
    Ri === null ? Ri = [n] : Ri.push(n);
  }
  function _l(n) {
    ho = !0, bc(n);
  }
  function Ti() {
    if (!Wi && Ri !== null) {
      Wi = !0;
      var n = 0, r = Lt;
      try {
        var l = Ri;
        for (Lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ri = null, ho = !1;
      } catch (c) {
        throw Ri !== null && (Ri = Ri.slice(n + 1)), sn(Ka, Ti), c;
      } finally {
        Lt = r, Wi = !1;
      }
    }
    return null;
  }
  var kl = [], Dl = 0, Ol = null, Gi = 0, zn = [], La = 0, pa = null, xi = 1, wi = "";
  function hu(n, r) {
    kl[Dl++] = Gi, kl[Dl++] = Ol, Ol = n, Gi = r;
  }
  function Lv(n, r, l) {
    zn[La++] = xi, zn[La++] = wi, zn[La++] = pa, pa = n;
    var o = xi;
    n = wi;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, xi = 1 << 32 - Dr(r) + c | l << c | o, wi = d + n;
    } else xi = 1 << d | l << c | o, wi = n;
  }
  function _c(n) {
    n.return !== null && (hu(n, 1), Lv(n, 1, 0));
  }
  function kc(n) {
    for (; n === Ol; ) Ol = kl[--Dl], kl[Dl] = null, Gi = kl[--Dl], kl[Dl] = null;
    for (; n === pa; ) pa = zn[--La], zn[La] = null, wi = zn[--La], zn[La] = null, xi = zn[--La], zn[La] = null;
  }
  var Kr = null, Xr = null, dn = !1, Ma = null;
  function hd(n, r) {
    var l = ja(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Mv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Kr = n, Xr = Ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Kr = n, Xr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = pa !== null ? { id: xi, overflow: wi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ja(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Kr = n, Xr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function md(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function yd(n) {
    if (dn) {
      var r = Xr;
      if (r) {
        var l = r;
        if (!Mv(n, r)) {
          if (md(n)) throw Error(M(418));
          r = Ei(l.nextSibling);
          var o = Kr;
          r && Mv(n, r) ? hd(o, l) : (n.flags = n.flags & -4097 | 2, dn = !1, Kr = n);
        }
      } else {
        if (md(n)) throw Error(M(418));
        n.flags = n.flags & -4097 | 2, dn = !1, Kr = n;
      }
    }
  }
  function Qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Kr = n;
  }
  function Dc(n) {
    if (n !== Kr) return !1;
    if (!dn) return Qn(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Rc(n.type, n.memoizedProps)), r && (r = Xr)) {
      if (md(n)) throw ss(), Error(M(418));
      for (; r; ) hd(n, r), r = Ei(r.nextSibling);
    }
    if (Qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(M(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Xr = Ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Xr = null;
      }
    } else Xr = Kr ? Ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ss() {
    for (var n = Xr; n; ) n = Ei(n.nextSibling);
  }
  function Ll() {
    Xr = Kr = null, dn = !1;
  }
  function qi(n) {
    Ma === null ? Ma = [n] : Ma.push(n);
  }
  var ly = Ue.ReactCurrentBatchConfig;
  function mu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(M(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(M(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(M(284));
      if (!l._owner) throw Error(M(290, n));
    }
    return n;
  }
  function Oc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(M(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yu(n) {
    function r(k, w) {
      if (n) {
        var L = k.deletions;
        L === null ? (k.deletions = [w], k.flags |= 16) : L.push(w);
      }
    }
    function l(k, w) {
      if (!n) return null;
      for (; w !== null; ) r(k, w), w = w.sibling;
      return null;
    }
    function o(k, w) {
      for (k = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? k.set(w.key, w) : k.set(w.index, w), w = w.sibling;
      return k;
    }
    function c(k, w) {
      return k = Hl(k, w), k.index = 0, k.sibling = null, k;
    }
    function d(k, w, L) {
      return k.index = L, n ? (L = k.alternate, L !== null ? (L = L.index, L < w ? (k.flags |= 2, w) : L) : (k.flags |= 2, w)) : (k.flags |= 1048576, w);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, w, L, W) {
      return w === null || w.tag !== 6 ? (w = Gd(L, k.mode, W), w.return = k, w) : (w = c(w, L), w.return = k, w);
    }
    function T(k, w, L, W) {
      var ge = L.type;
      return ge === He ? Q(k, w, L.props.children, W, L.key) : w !== null && (w.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Ot && Nv(ge) === w.type) ? (W = c(w, L.props), W.ref = mu(k, w, L), W.return = k, W) : (W = Hs(L.type, L.key, L.props, null, k.mode, W), W.ref = mu(k, w, L), W.return = k, W);
    }
    function U(k, w, L, W) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== L.containerInfo || w.stateNode.implementation !== L.implementation ? (w = cf(L, k.mode, W), w.return = k, w) : (w = c(w, L.children || []), w.return = k, w);
    }
    function Q(k, w, L, W, ge) {
      return w === null || w.tag !== 7 ? (w = tl(L, k.mode, W, ge), w.return = k, w) : (w = c(w, L), w.return = k, w);
    }
    function q(k, w, L) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = Gd("" + w, k.mode, L), w.return = k, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Ee:
            return L = Hs(w.type, w.key, w.props, null, k.mode, L), L.ref = mu(k, null, w), L.return = k, L;
          case at:
            return w = cf(w, k.mode, L), w.return = k, w;
          case Ot:
            var W = w._init;
            return q(k, W(w._payload), L);
        }
        if (qn(w) || xe(w)) return w = tl(w, k.mode, L, null), w.return = k, w;
        Oc(k, w);
      }
      return null;
    }
    function I(k, w, L, W) {
      var ge = w !== null ? w.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ge !== null ? null : E(k, w, "" + L, W);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Ee:
            return L.key === ge ? T(k, w, L, W) : null;
          case at:
            return L.key === ge ? U(k, w, L, W) : null;
          case Ot:
            return ge = L._init, I(
              k,
              w,
              ge(L._payload),
              W
            );
        }
        if (qn(L) || xe(L)) return ge !== null ? null : Q(k, w, L, W, null);
        Oc(k, L);
      }
      return null;
    }
    function de(k, w, L, W, ge) {
      if (typeof W == "string" && W !== "" || typeof W == "number") return k = k.get(L) || null, E(w, k, "" + W, ge);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case Ee:
            return k = k.get(W.key === null ? L : W.key) || null, T(w, k, W, ge);
          case at:
            return k = k.get(W.key === null ? L : W.key) || null, U(w, k, W, ge);
          case Ot:
            var Ae = W._init;
            return de(k, w, L, Ae(W._payload), ge);
        }
        if (qn(W) || xe(W)) return k = k.get(L) || null, Q(w, k, W, ge, null);
        Oc(w, W);
      }
      return null;
    }
    function ye(k, w, L, W) {
      for (var ge = null, Ae = null, Fe = w, Ie = w = 0, er = null; Fe !== null && Ie < L.length; Ie++) {
        Fe.index > Ie ? (er = Fe, Fe = null) : er = Fe.sibling;
        var zt = I(k, Fe, L[Ie], W);
        if (zt === null) {
          Fe === null && (Fe = er);
          break;
        }
        n && Fe && zt.alternate === null && r(k, Fe), w = d(zt, w, Ie), Ae === null ? ge = zt : Ae.sibling = zt, Ae = zt, Fe = er;
      }
      if (Ie === L.length) return l(k, Fe), dn && hu(k, Ie), ge;
      if (Fe === null) {
        for (; Ie < L.length; Ie++) Fe = q(k, L[Ie], W), Fe !== null && (w = d(Fe, w, Ie), Ae === null ? ge = Fe : Ae.sibling = Fe, Ae = Fe);
        return dn && hu(k, Ie), ge;
      }
      for (Fe = o(k, Fe); Ie < L.length; Ie++) er = de(Fe, k, Ie, L[Ie], W), er !== null && (n && er.alternate !== null && Fe.delete(er.key === null ? Ie : er.key), w = d(er, w, Ie), Ae === null ? ge = er : Ae.sibling = er, Ae = er);
      return n && Fe.forEach(function(Bl) {
        return r(k, Bl);
      }), dn && hu(k, Ie), ge;
    }
    function Re(k, w, L, W) {
      var ge = xe(L);
      if (typeof ge != "function") throw Error(M(150));
      if (L = ge.call(L), L == null) throw Error(M(151));
      for (var Ae = ge = null, Fe = w, Ie = w = 0, er = null, zt = L.next(); Fe !== null && !zt.done; Ie++, zt = L.next()) {
        Fe.index > Ie ? (er = Fe, Fe = null) : er = Fe.sibling;
        var Bl = I(k, Fe, zt.value, W);
        if (Bl === null) {
          Fe === null && (Fe = er);
          break;
        }
        n && Fe && Bl.alternate === null && r(k, Fe), w = d(Bl, w, Ie), Ae === null ? ge = Bl : Ae.sibling = Bl, Ae = Bl, Fe = er;
      }
      if (zt.done) return l(
        k,
        Fe
      ), dn && hu(k, Ie), ge;
      if (Fe === null) {
        for (; !zt.done; Ie++, zt = L.next()) zt = q(k, zt.value, W), zt !== null && (w = d(zt, w, Ie), Ae === null ? ge = zt : Ae.sibling = zt, Ae = zt);
        return dn && hu(k, Ie), ge;
      }
      for (Fe = o(k, Fe); !zt.done; Ie++, zt = L.next()) zt = de(Fe, k, Ie, zt.value, W), zt !== null && (n && zt.alternate !== null && Fe.delete(zt.key === null ? Ie : zt.key), w = d(zt, w, Ie), Ae === null ? ge = zt : Ae.sibling = zt, Ae = zt);
      return n && Fe.forEach(function(hh) {
        return r(k, hh);
      }), dn && hu(k, Ie), ge;
    }
    function kn(k, w, L, W) {
      if (typeof L == "object" && L !== null && L.type === He && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Ee:
            e: {
              for (var ge = L.key, Ae = w; Ae !== null; ) {
                if (Ae.key === ge) {
                  if (ge = L.type, ge === He) {
                    if (Ae.tag === 7) {
                      l(k, Ae.sibling), w = c(Ae, L.props.children), w.return = k, k = w;
                      break e;
                    }
                  } else if (Ae.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Ot && Nv(ge) === Ae.type) {
                    l(k, Ae.sibling), w = c(Ae, L.props), w.ref = mu(k, Ae, L), w.return = k, k = w;
                    break e;
                  }
                  l(k, Ae);
                  break;
                } else r(k, Ae);
                Ae = Ae.sibling;
              }
              L.type === He ? (w = tl(L.props.children, k.mode, W, L.key), w.return = k, k = w) : (W = Hs(L.type, L.key, L.props, null, k.mode, W), W.ref = mu(k, w, L), W.return = k, k = W);
            }
            return m(k);
          case at:
            e: {
              for (Ae = L.key; w !== null; ) {
                if (w.key === Ae) if (w.tag === 4 && w.stateNode.containerInfo === L.containerInfo && w.stateNode.implementation === L.implementation) {
                  l(k, w.sibling), w = c(w, L.children || []), w.return = k, k = w;
                  break e;
                } else {
                  l(k, w);
                  break;
                }
                else r(k, w);
                w = w.sibling;
              }
              w = cf(L, k.mode, W), w.return = k, k = w;
            }
            return m(k);
          case Ot:
            return Ae = L._init, kn(k, w, Ae(L._payload), W);
        }
        if (qn(L)) return ye(k, w, L, W);
        if (xe(L)) return Re(k, w, L, W);
        Oc(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, w !== null && w.tag === 6 ? (l(k, w.sibling), w = c(w, L), w.return = k, k = w) : (l(k, w), w = Gd(L, k.mode, W), w.return = k, k = w), m(k)) : l(k, w);
    }
    return kn;
  }
  var xn = yu(!0), oe = yu(!1), va = Oa(null), Zr = null, mo = null, gd = null;
  function Sd() {
    gd = mo = Zr = null;
  }
  function Ed(n) {
    var r = va.current;
    ln(va), n._currentValue = r;
  }
  function Cd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Zr = n, gd = mo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (An = !0), n.firstContext = null);
  }
  function Na(n) {
    var r = n._currentValue;
    if (gd !== n) if (n = { context: n, memoizedValue: r, next: null }, mo === null) {
      if (Zr === null) throw Error(M(308));
      mo = n, Zr.dependencies = { lanes: 0, firstContext: n };
    } else mo = mo.next = n;
    return r;
  }
  var gu = null;
  function Rd(n) {
    gu === null ? gu = [n] : gu.push(n);
  }
  function Td(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Rd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ha(n, o);
  }
  function ha(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ma = !1;
  function xd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ki(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ml(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Ct & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ha(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Rd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ha(n, l);
  }
  function Lc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  function Uv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function cs(n, r, l, o) {
    var c = n.updateQueue;
    ma = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = U : E.next = U, Q.lastBaseUpdate = T));
    }
    if (d !== null) {
      var q = c.baseState;
      m = 0, Q = U = T = null, E = d;
      do {
        var I = E.lane, de = E.eventTime;
        if ((o & I) === I) {
          Q !== null && (Q = Q.next = {
            eventTime: de,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Re = E;
            switch (I = r, de = l, Re.tag) {
              case 1:
                if (ye = Re.payload, typeof ye == "function") {
                  q = ye.call(de, q, I);
                  break e;
                }
                q = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Re.payload, I = typeof ye == "function" ? ye.call(de, q, I) : ye, I == null) break e;
                q = ne({}, q, I);
                break e;
              case 2:
                ma = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, I = c.effects, I === null ? c.effects = [E] : I.push(E));
        } else de = { eventTime: de, lane: I, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (U = Q = de, T = q) : Q = Q.next = de, m |= I;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          I = E, E = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (T = q), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Oi |= m, n.lanes = m, n.memoizedState = q;
    }
  }
  function wd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(M(191, c));
        c.call(o);
      }
    }
  }
  var fs = {}, bi = Oa(fs), ds = Oa(fs), ps = Oa(fs);
  function Su(n) {
    if (n === fs) throw Error(M(174));
    return n;
  }
  function bd(n, r) {
    switch (_e(ps, r), _e(ds, n), _e(bi, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ca(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ca(r, n);
    }
    ln(bi), _e(bi, r);
  }
  function Eu() {
    ln(bi), ln(ds), ln(ps);
  }
  function Av(n) {
    Su(ps.current);
    var r = Su(bi.current), l = ca(r, n.type);
    r !== l && (_e(ds, n), _e(bi, l));
  }
  function Mc(n) {
    ds.current === n && (ln(bi), ln(ds));
  }
  var gn = Oa(0);
  function Nc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var vs = [];
  function De() {
    for (var n = 0; n < vs.length; n++) vs[n]._workInProgressVersionPrimary = null;
    vs.length = 0;
  }
  var pt = Ue.ReactCurrentDispatcher, Mt = Ue.ReactCurrentBatchConfig, Gt = 0, Nt = null, Un = null, Zn = null, zc = !1, hs = !1, Cu = 0, Y = 0;
  function Dt() {
    throw Error(M(321));
  }
  function Ve(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ti(n[l], r[l])) return !1;
    return !0;
  }
  function Nl(n, r, l, o, c, d) {
    if (Gt = d, Nt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, pt.current = n === null || n.memoizedState === null ? qc : Cs, n = l(o, c), hs) {
      d = 0;
      do {
        if (hs = !1, Cu = 0, 25 <= d) throw Error(M(301));
        d += 1, Zn = Un = null, r.updateQueue = null, pt.current = Kc, n = l(o, c);
      } while (hs);
    }
    if (pt.current = bu, r = Un !== null && Un.next !== null, Gt = 0, Zn = Un = Nt = null, zc = !1, r) throw Error(M(300));
    return n;
  }
  function ri() {
    var n = Cu !== 0;
    return Cu = 0, n;
  }
  function Rr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Zn === null ? Nt.memoizedState = Zn = n : Zn = Zn.next = n, Zn;
  }
  function wn() {
    if (Un === null) {
      var n = Nt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Un.next;
    var r = Zn === null ? Nt.memoizedState : Zn.next;
    if (r !== null) Zn = r, Un = n;
    else {
      if (n === null) throw Error(M(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Zn === null ? Nt.memoizedState = Zn = n : Zn = Zn.next = n;
    }
    return Zn;
  }
  function Xi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zl(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(M(311));
    l.lastRenderedReducer = n;
    var o = Un, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, U = d;
      do {
        var Q = U.lane;
        if ((Gt & Q) === Q) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var q = {
            lane: Q,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = q, m = o) : T = T.next = q, Nt.lanes |= Q, Oi |= Q;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, ti(o, r.memoizedState) || (An = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Nt.lanes |= d, Oi |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ru(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(M(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ti(d, r.memoizedState) || (An = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Uc() {
  }
  function Ac(n, r) {
    var l = Nt, o = wn(), c = r(), d = !ti(o.memoizedState, c);
    if (d && (o.memoizedState = c, An = !0), o = o.queue, ms(Hc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Zn !== null && Zn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, Fc.bind(null, l, o, c, r), void 0, null), Wn === null) throw Error(M(349));
      Gt & 30 || jc(l, r, c);
    }
    return c;
  }
  function jc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Fc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Pc(r) && Vc(n);
  }
  function Hc(n, r, l) {
    return l(function() {
      Pc(r) && Vc(n);
    });
  }
  function Pc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ti(n, l);
    } catch {
      return !0;
    }
  }
  function Vc(n) {
    var r = ha(n, 1);
    r !== null && Ur(r, n, 1, -1);
  }
  function Bc(n) {
    var r = Rr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xi, lastRenderedState: n }, r.queue = n, n = n.dispatch = wu.bind(null, Nt, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function $c() {
    return wn().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = Rr();
    Nt.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = wn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Un !== null) {
      var m = Un.memoizedState;
      if (d = m.destroy, o !== null && Ve(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    Nt.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function Yc(n, r) {
    return yo(8390656, 8, n, r);
  }
  function ms(n, r) {
    return go(2048, 8, n, r);
  }
  function Ic(n, r) {
    return go(4, 2, n, r);
  }
  function ys(n, r) {
    return go(4, 4, n, r);
  }
  function xu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Qc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, xu.bind(null, r, n), l);
  }
  function gs() {
  }
  function Wc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ve(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Gc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ve(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function _d(n, r, l) {
    return Gt & 21 ? (ti(l, r) || (l = Ku(), Nt.lanes |= l, Oi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, An = !0), n.memoizedState = l);
  }
  function Ss(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Mt.transition;
    Mt.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, Mt.transition = o;
    }
  }
  function kd() {
    return wn().memoizedState;
  }
  function Es(n, r, l) {
    var o = Li(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Jr(n)) jv(r, l);
    else if (l = Td(n, r, l, o), l !== null) {
      var c = Hn();
      Ur(l, n, o, c), Zt(l, r, o);
    }
  }
  function wu(n, r, l) {
    var o = Li(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Jr(n)) jv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ti(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Rd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Td(n, r, c, o), l !== null && (c = Hn(), Ur(l, n, o, c), Zt(l, r, o));
    }
  }
  function Jr(n) {
    var r = n.alternate;
    return n === Nt || r !== null && r === Nt;
  }
  function jv(n, r) {
    hs = zc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Zt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var bu = { readContext: Na, useCallback: Dt, useContext: Dt, useEffect: Dt, useImperativeHandle: Dt, useInsertionEffect: Dt, useLayoutEffect: Dt, useMemo: Dt, useReducer: Dt, useRef: Dt, useState: Dt, useDebugValue: Dt, useDeferredValue: Dt, useTransition: Dt, useMutableSource: Dt, useSyncExternalStore: Dt, useId: Dt, unstable_isNewReconciler: !1 }, qc = { readContext: Na, useCallback: function(n, r) {
    return Rr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Na, useEffect: Yc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(
      4194308,
      4,
      xu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return yo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return yo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Rr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Rr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Es.bind(null, Nt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Rr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Bc, useDebugValue: gs, useDeferredValue: function(n) {
    return Rr().memoizedState = n;
  }, useTransition: function() {
    var n = Bc(!1), r = n[0];
    return n = Ss.bind(null, n[1]), Rr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Nt, c = Rr();
    if (dn) {
      if (l === void 0) throw Error(M(407));
      l = l();
    } else {
      if (l = r(), Wn === null) throw Error(M(349));
      Gt & 30 || jc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Yc(Hc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, Fc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Rr(), r = Wn.identifierPrefix;
    if (dn) {
      var l = wi, o = xi;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Cu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Y++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Cs = {
    readContext: Na,
    useCallback: Wc,
    useContext: Na,
    useEffect: ms,
    useImperativeHandle: Qc,
    useInsertionEffect: Ic,
    useLayoutEffect: ys,
    useMemo: Gc,
    useReducer: zl,
    useRef: $c,
    useState: function() {
      return zl(Xi);
    },
    useDebugValue: gs,
    useDeferredValue: function(n) {
      var r = wn();
      return _d(r, Un.memoizedState, n);
    },
    useTransition: function() {
      var n = zl(Xi)[0], r = wn().memoizedState;
      return [n, r];
    },
    useMutableSource: Uc,
    useSyncExternalStore: Ac,
    useId: kd,
    unstable_isNewReconciler: !1
  }, Kc = { readContext: Na, useCallback: Wc, useContext: Na, useEffect: ms, useImperativeHandle: Qc, useInsertionEffect: Ic, useLayoutEffect: ys, useMemo: Gc, useReducer: Ru, useRef: $c, useState: function() {
    return Ru(Xi);
  }, useDebugValue: gs, useDeferredValue: function(n) {
    var r = wn();
    return Un === null ? r.memoizedState = n : _d(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = Ru(Xi)[0], r = wn().memoizedState;
    return [n, r];
  }, useMutableSource: Uc, useSyncExternalStore: Ac, useId: kd, unstable_isNewReconciler: !1 };
  function ai(n, r) {
    if (n && n.defaultProps) {
      r = ne({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Dd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ne({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Xc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Xe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Li(n), d = Ki(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (Ur(r, n, c, o), Lc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Li(n), d = Ki(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (Ur(r, n, c, o), Lc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = Li(n), c = Ki(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ml(n, c, o), r !== null && (Ur(r, n, o, l), Lc(r, n, o));
  } };
  function Fv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function Zc(n, r, l) {
    var o = !1, c = Cr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Na(d) : (c = Nn(r) ? Gr : En.current, o = r.contextTypes, d = (o = o != null) ? qr(n, c) : Cr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Xc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Hv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Xc.enqueueReplaceState(r, r.state, null);
  }
  function Rs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, xd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Na(d) : (d = Nn(r) ? Gr : En.current, c.context = qr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Xc.enqueueReplaceState(c, c.state, null), cs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _u(n, r) {
    try {
      var l = "", o = r;
      do
        l += ct(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Od(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ld(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Jc = typeof WeakMap == "function" ? WeakMap : Map;
  function Pv(n, r, l) {
    l = Ki(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      xo || (xo = !0, Ou = o), Ld(n, r);
    }, l;
  }
  function Md(n, r, l) {
    l = Ki(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ld(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ld(n, r), typeof o != "function" && (jl === null ? jl = /* @__PURE__ */ new Set([this]) : jl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Nd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Jc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = py.bind(null, n, r, l), r.then(n, n));
  }
  function Vv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ul(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ki(-1, 1), r.tag = 2, Ml(l, r, 1))), l.lanes |= 1), n);
  }
  var Ts = Ue.ReactCurrentOwner, An = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? oe(r, null, l, o) : xn(r, n.child, l, o);
  }
  function ea(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = Nl(n, r, l, o, d, c), l = ri(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ua(n, r, c)) : (dn && l && _c(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function ku(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Wd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, tt(n, r, d, o, c)) : (n = Hs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return Ua(n, r, c);
    }
    return r.flags |= 1, n = Hl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function tt(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref) if (An = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (An = !0);
      else return r.lanes = n.lanes, Ua(n, r, c);
    }
    return Bv(n, r, l, o, c);
  }
  function xs(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _e(Co, ya), ya |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, _e(Co, ya), ya |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, _e(Co, ya), ya |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, _e(Co, ya), ya |= o;
    return ur(n, r, c, l), r.child;
  }
  function zd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Bv(n, r, l, o, c) {
    var d = Nn(l) ? Gr : En.current;
    return d = qr(r, d), yn(r, c), l = Nl(n, r, l, o, d, c), o = ri(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ua(n, r, c)) : (dn && o && _c(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function $v(n, r, l, o, c) {
    if (Nn(l)) {
      var d = !0;
      Xn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) za(n, r), Zc(r, l, o), Rs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Na(U) : (U = Nn(l) ? Gr : En.current, U = qr(r, U));
      var Q = l.getDerivedStateFromProps, q = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Hv(r, m, o, U), ma = !1;
      var I = r.memoizedState;
      m.state = I, cs(r, o, m, c), T = r.memoizedState, E !== o || I !== T || In.current || ma ? (typeof Q == "function" && (Dd(r, l, Q, o), T = r.memoizedState), (E = ma || Fv(r, l, E, o, I, T, U)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, zv(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ai(r.type, E), m.props = U, q = r.pendingProps, I = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Na(T) : (T = Nn(l) ? Gr : En.current, T = qr(r, T));
      var de = l.getDerivedStateFromProps;
      (Q = typeof de == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== q || I !== T) && Hv(r, m, o, T), ma = !1, I = r.memoizedState, m.state = I, cs(r, o, m, c);
      var ye = r.memoizedState;
      E !== q || I !== ye || In.current || ma ? (typeof de == "function" && (Dd(r, l, de, o), ye = r.memoizedState), (U = ma || Fv(r, l, U, o, I, ye, T) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return ws(n, r, l, o, d, c);
  }
  function ws(n, r, l, o, c, d) {
    zd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && wc(r, l, !1), Ua(n, r, d);
    o = r.stateNode, Ts.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = xn(r, n.child, null, d), r.child = xn(r, null, E, d)) : ur(n, r, E, d), r.memoizedState = o.state, c && wc(r, l, !0), r.child;
  }
  function So(n) {
    var r = n.stateNode;
    r.pendingContext ? Ov(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ov(n, r.context, !1), bd(n, r.containerInfo);
  }
  function Yv(n, r, l, o, c) {
    return Ll(), qi(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var ef = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ud(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function tf(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), _e(gn, c & 1), n === null)
      return yd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Pl(m, o, 0, null), n = tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ud(l), r.memoizedState = ef, n) : Ad(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Iv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Hl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Hl(E, d) : (d = tl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Ud(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = ef, o;
    }
    return d = n.child, n = d.sibling, o = Hl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ad(n, r) {
    return r = Pl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function bs(n, r, l, o) {
    return o !== null && qi(o), xn(r, n.child, null, l), n = Ad(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Iv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Od(Error(M(422))), bs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Pl({ mode: "visible", children: o.children }, c, 0, null), d = tl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && xn(r, n.child, null, m), r.child.memoizedState = Ud(m), r.memoizedState = ef, d);
    if (!(r.mode & 1)) return bs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(M(419)), o = Od(d, o, void 0), bs(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, An || E) {
      if (o = Wn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ha(n, c), Ur(o, n, c, -1));
      }
      return Qd(), o = Od(Error(M(421))), bs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Xr = Ei(c.nextSibling), Kr = r, dn = !0, Ma = null, n !== null && (zn[La++] = xi, zn[La++] = wi, zn[La++] = pa, xi = n.id, wi = n.overflow, pa = r), r = Ad(r, o.children), r.flags |= 4096, r);
  }
  function jd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Cd(n.return, r, l);
  }
  function Mr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function _i(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (ur(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && jd(n, l, r);
        else if (n.tag === 19) jd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (_e(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Nc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Mr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Nc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Mr(r, !0, l, null, d);
        break;
      case "together":
        Mr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function za(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ua(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Oi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(M(153));
    if (r.child !== null) {
      for (n = r.child, l = Hl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Hl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function _s(n, r, l) {
    switch (r.tag) {
      case 3:
        So(r), Ll();
        break;
      case 5:
        Av(r);
        break;
      case 1:
        Nn(r.type) && Xn(r);
        break;
      case 4:
        bd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        _e(va, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (_e(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? tf(n, r, l) : (_e(gn, gn.current & 1), n = Ua(n, r, l), n !== null ? n.sibling : null);
        _e(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return _i(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), _e(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, xs(n, r, l);
    }
    return Ua(n, r, l);
  }
  var Aa, jn, Qv, Wv;
  Aa = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, jn = function() {
  }, Qv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Su(bi.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = ne({}, c, { value: void 0 }), o = ne({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = $n(n, c), o = $n(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = wl);
      }
      on(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Le.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Le.hasOwnProperty(U) ? (T != null && U === "onScroll" && Pt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Wv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ks(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Jn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Gv(n, r, l) {
    var o = r.pendingProps;
    switch (kc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Jn(r), null;
      case 1:
        return Nn(r.type) && vo(), Jn(r), null;
      case 3:
        return o = r.stateNode, Eu(), ln(In), ln(En), De(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Dc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ma !== null && (Lu(Ma), Ma = null))), jn(n, r), Jn(r), null;
      case 5:
        Mc(r);
        var c = Su(ps.current);
        if (l = r.type, n !== null && r.stateNode != null) Qv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(M(166));
            return Jn(r), null;
          }
          if (n = Su(bi.current), Dc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ci] = r, o[ls] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Pt("cancel", o), Pt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Pt(rs[c], o);
                break;
              case "source":
                Pt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Pt(
                  "error",
                  o
                ), Pt("load", o);
                break;
              case "details":
                Pt("toggle", o);
                break;
              case "input":
                Vn(o, d), Pt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Pt("invalid", o);
                break;
              case "textarea":
                gr(o, d), Pt("invalid", o);
            }
            on(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Cc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Cc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Le.hasOwnProperty(m) && E != null && m === "onScroll" && Pt("scroll", o);
            }
            switch (l) {
              case "input":
                On(o), ci(o, d, !0);
                break;
              case "textarea":
                On(o), Ln(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = wl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Sr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ci] = r, n[ls] = o, Aa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Kn(l, o), l) {
                case "dialog":
                  Pt("cancel", n), Pt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Pt(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Pt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Pt(
                    "error",
                    n
                  ), Pt("load", n), c = o;
                  break;
                case "details":
                  Pt("toggle", n), c = o;
                  break;
                case "input":
                  Vn(n, o), c = nr(n, o), Pt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ne({}, o, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  gr(n, o), c = $n(n, o), Pt("invalid", n);
                  break;
                default:
                  c = o;
              }
              on(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? tn(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && fi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ee(n, T) : typeof T == "number" && ee(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Le.hasOwnProperty(d) ? T != null && d === "onScroll" && Pt("scroll", n) : T != null && le(n, d, T, m));
              }
              switch (l) {
                case "input":
                  On(n), ci(n, o, !1);
                  break;
                case "textarea":
                  On(n), Ln(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + lt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Rn(n, !!o.multiple, d, !1) : o.defaultValue != null && Rn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = wl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Jn(r), null;
      case 6:
        if (n && r.stateNode != null) Wv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(M(166));
          if (l = Su(ps.current), Su(bi.current), Dc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ci] = r, (d = o.nodeValue !== l) && (n = Kr, n !== null)) switch (n.tag) {
              case 3:
                Cc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Cc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ci] = r, r.stateNode = o;
        }
        return Jn(r), null;
      case 13:
        if (ln(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Xr !== null && r.mode & 1 && !(r.flags & 128)) ss(), Ll(), r.flags |= 98560, d = !1;
          else if (d = Dc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(M(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(M(317));
              d[Ci] = r;
            } else Ll(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Jn(r), d = !1;
          } else Ma !== null && (Lu(Ma), Ma = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? _n === 0 && (_n = 3) : Qd())), r.updateQueue !== null && (r.flags |= 4), Jn(r), null);
      case 4:
        return Eu(), jn(n, r), n === null && oo(r.stateNode.containerInfo), Jn(r), null;
      case 10:
        return Ed(r.type._context), Jn(r), null;
      case 17:
        return Nn(r.type) && vo(), Jn(r), null;
      case 19:
        if (ln(gn), d = r.memoizedState, d === null) return Jn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) ks(d, !1);
        else {
          if (_n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Nc(n), m !== null) {
              for (r.flags |= 128, ks(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return _e(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ze() > To && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Nc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ks(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return Jn(r), null;
          } else 2 * Ze() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ze(), r.sibling = null, l = gn.current, _e(gn, o ? l & 1 | 2 : l & 1), r) : (Jn(r), null);
      case 22:
      case 23:
        return Id(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ya & 1073741824 && (Jn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Jn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(M(156, r.tag));
  }
  function nf(n, r) {
    switch (kc(r), r.tag) {
      case 1:
        return Nn(r.type) && vo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), ln(In), ln(En), De(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Mc(r), null;
      case 13:
        if (ln(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(M(340));
          Ll();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return ln(gn), null;
      case 4:
        return Eu(), null;
      case 10:
        return Ed(r.type._context), null;
      case 22:
      case 23:
        return Id(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ds = !1, Tr = !1, uy = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function Eo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      pn(n, r, o);
    }
    else l.current = null;
  }
  function rf(n, r, l) {
    try {
      l();
    } catch (o) {
      pn(n, r, o);
    }
  }
  var qv = !1;
  function Kv(n, r) {
    if (is = _a, n = ts(), pc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, U = 0, Q = 0, q = n, I = null;
          t: for (; ; ) {
            for (var de; q !== l || c !== 0 && q.nodeType !== 3 || (E = m + c), q !== d || o !== 0 && q.nodeType !== 3 || (T = m + o), q.nodeType === 3 && (m += q.nodeValue.length), (de = q.firstChild) !== null; )
              I = q, q = de;
            for (; ; ) {
              if (q === n) break t;
              if (I === l && ++U === c && (E = m), I === d && ++Q === o && (T = m), (de = q.nextSibling) !== null) break;
              q = I, I = q.parentNode;
            }
            q = de;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pu = { focusedElem: n, selectionRange: l }, _a = !1, he = r; he !== null; ) if (r = he, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, he = n;
    else for (; he !== null; ) {
      r = he;
      try {
        var ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var Re = ye.memoizedProps, kn = ye.memoizedState, k = r.stateNode, w = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Re : ai(r.type, Re), kn);
              k.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(M(163));
        }
      } catch (W) {
        pn(r, r.return, W);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, he = n;
        break;
      }
      he = r.return;
    }
    return ye = qv, qv = !1, ye;
  }
  function Os(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && rf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ls(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Fd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function af(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, af(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ci], delete r[ls], delete r[us], delete r[po], delete r[iy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ms(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Zi(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ms(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = wl));
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  function Di(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Di(n, r, l), n = n.sibling; n !== null; ) Di(n, r, l), n = n.sibling;
  }
  var bn = null, Nr = !1;
  function zr(n, r, l) {
    for (l = l.child; l !== null; ) Xv(n, r, l), l = l.sibling;
  }
  function Xv(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(ml, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Tr || Eo(l, r);
      case 6:
        var o = bn, c = Nr;
        bn = null, zr(n, r, l), bn = o, Nr = c, bn !== null && (Nr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : bn.removeChild(l.stateNode));
        break;
      case 18:
        bn !== null && (Nr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? fo(n.parentNode, l) : n.nodeType === 1 && fo(n, l), Ja(n)) : fo(bn, l.stateNode));
        break;
      case 4:
        o = bn, c = Nr, bn = l.stateNode.containerInfo, Nr = !0, zr(n, r, l), bn = o, Nr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && rf(l, r, m), c = c.next;
          } while (c !== o);
        }
        zr(n, r, l);
        break;
      case 1:
        if (!Tr && (Eo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          pn(l, r, E);
        }
        zr(n, r, l);
        break;
      case 21:
        zr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Tr = (o = Tr) || l.memoizedState !== null, zr(n, r, l), Tr = o) : zr(n, r, l);
        break;
      default:
        zr(n, r, l);
    }
  }
  function Zv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new uy()), r.forEach(function(o) {
        var c = uh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ii(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              bn = E.stateNode, Nr = !1;
              break e;
            case 3:
              bn = E.stateNode.containerInfo, Nr = !0;
              break e;
            case 4:
              bn = E.stateNode.containerInfo, Nr = !0;
              break e;
          }
          E = E.return;
        }
        if (bn === null) throw Error(M(160));
        Xv(d, m, c), bn = null, Nr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (U) {
        pn(c, r, U);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Hd(r, n), r = r.sibling;
  }
  function Hd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ii(r, n), ta(n), o & 4) {
          try {
            Os(3, n, n.return), Ls(3, n);
          } catch (Re) {
            pn(n, n.return, Re);
          }
          try {
            Os(5, n, n.return);
          } catch (Re) {
            pn(n, n.return, Re);
          }
        }
        break;
      case 1:
        ii(r, n), ta(n), o & 512 && l !== null && Eo(l, l.return);
        break;
      case 5:
        if (ii(r, n), ta(n), o & 512 && l !== null && Eo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ee(c, "");
          } catch (Re) {
            pn(n, n.return, Re);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), Kn(E, m);
            var U = Kn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Q = T[m], q = T[m + 1];
              Q === "style" ? tn(c, q) : Q === "dangerouslySetInnerHTML" ? fi(c, q) : Q === "children" ? ee(c, q) : le(c, Q, q, U);
            }
            switch (E) {
              case "input":
                Ir(c, d);
                break;
              case "textarea":
                Ia(c, d);
                break;
              case "select":
                var I = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var de = d.value;
                de != null ? Rn(c, !!d.multiple, de, !1) : I !== !!d.multiple && (d.defaultValue != null ? Rn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Rn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ls] = d;
          } catch (Re) {
            pn(n, n.return, Re);
          }
        }
        break;
      case 6:
        if (ii(r, n), ta(n), o & 4) {
          if (n.stateNode === null) throw Error(M(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Re) {
            pn(n, n.return, Re);
          }
        }
        break;
      case 3:
        if (ii(r, n), ta(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ja(r.containerInfo);
        } catch (Re) {
          pn(n, n.return, Re);
        }
        break;
      case 4:
        ii(r, n), ta(n);
        break;
      case 13:
        ii(r, n), ta(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Bd = Ze())), o & 4 && Zv(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (Tr = (U = Tr) || Q, ii(r, n), Tr = U) : ii(r, n), ta(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !Q && n.mode & 1) for (he = n, Q = n.child; Q !== null; ) {
            for (q = he = Q; he !== null; ) {
              switch (I = he, de = I.child, I.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, I, I.return);
                  break;
                case 1:
                  Eo(I, I.return);
                  var ye = I.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    o = I, l = I.return;
                    try {
                      r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                    } catch (Re) {
                      pn(o, l, Re);
                    }
                  }
                  break;
                case 5:
                  Eo(I, I.return);
                  break;
                case 22:
                  if (I.memoizedState !== null) {
                    Ns(q);
                    continue;
                  }
              }
              de !== null ? (de.return = I, he = de) : Ns(q);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, q = n; ; ) {
            if (q.tag === 5) {
              if (Q === null) {
                Q = q;
                try {
                  c = q.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = q.stateNode, T = q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Ft("display", m));
                } catch (Re) {
                  pn(n, n.return, Re);
                }
              }
            } else if (q.tag === 6) {
              if (Q === null) try {
                q.stateNode.nodeValue = U ? "" : q.memoizedProps;
              } catch (Re) {
                pn(n, n.return, Re);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === n) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === n) break e;
              Q === q && (Q = null), q = q.return;
            }
            Q === q && (Q = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        ii(r, n), ta(n), o & 4 && Zv(n);
        break;
      case 21:
        break;
      default:
        ii(
          r,
          n
        ), ta(n);
    }
  }
  function ta(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ms(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(M(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ee(c, ""), o.flags &= -33);
            var d = Zi(n);
            Di(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Zi(n);
            ki(n, E, m);
            break;
          default:
            throw Error(M(161));
        }
      } catch (T) {
        pn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function oy(n, r, l) {
    he = n, Pd(n);
  }
  function Pd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; he !== null; ) {
      var c = he, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ds;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Tr;
          E = Ds;
          var U = Tr;
          if (Ds = m, (Tr = T) && !U) for (he = c; he !== null; ) m = he, T = m.child, m.tag === 22 && m.memoizedState !== null ? Vd(c) : T !== null ? (T.return = m, he = T) : Vd(c);
          for (; d !== null; ) he = d, Pd(d), d = d.sibling;
          he = c, Ds = E, Tr = U;
        }
        Jv(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, he = d) : Jv(n);
    }
  }
  function Jv(n) {
    for (; he !== null; ) {
      var r = he;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Tr || Ls(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Tr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ai(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && wd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                wd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var U = r.alternate;
                if (U !== null) {
                  var Q = U.memoizedState;
                  if (Q !== null) {
                    var q = Q.dehydrated;
                    q !== null && Ja(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
          Tr || r.flags & 512 && Fd(r);
        } catch (I) {
          pn(r, r.return, I);
        }
      }
      if (r === n) {
        he = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function Ns(n) {
    for (; he !== null; ) {
      var r = he;
      if (r === n) {
        he = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function Vd(n) {
    for (; he !== null; ) {
      var r = he;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ls(4, r);
            } catch (T) {
              pn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                pn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Fd(r);
            } catch (T) {
              pn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Fd(r);
            } catch (T) {
              pn(r, m, T);
            }
        }
      } catch (T) {
        pn(r, r.return, T);
      }
      if (r === n) {
        he = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, he = E;
        break;
      }
      he = r.return;
    }
  }
  var sy = Math.ceil, Al = Ue.ReactCurrentDispatcher, Du = Ue.ReactCurrentOwner, or = Ue.ReactCurrentBatchConfig, Ct = 0, Wn = null, Fn = null, sr = 0, ya = 0, Co = Oa(0), _n = 0, zs = null, Oi = 0, Ro = 0, lf = 0, Us = null, na = null, Bd = 0, To = 1 / 0, ga = null, xo = !1, Ou = null, jl = null, uf = !1, Ji = null, As = 0, Fl = 0, wo = null, js = -1, xr = 0;
  function Hn() {
    return Ct & 6 ? Ze() : js !== -1 ? js : js = Ze();
  }
  function Li(n) {
    return n.mode & 1 ? Ct & 2 && sr !== 0 ? sr & -sr : ly.transition !== null ? (xr === 0 && (xr = Ku()), xr) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ro(n.type)), n) : 1;
  }
  function Ur(n, r, l, o) {
    if (50 < Fl) throw Fl = 0, wo = null, Error(M(185));
    Pi(n, l, o), (!(Ct & 2) || n !== Wn) && (n === Wn && (!(Ct & 2) && (Ro |= l), _n === 4 && li(n, sr)), ra(n, o), l === 1 && Ct === 0 && !(r.mode & 1) && (To = Ze() + 500, ho && Ti()));
  }
  function ra(n, r) {
    var l = n.callbackNode;
    au(n, r);
    var o = Za(n, n === Wn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? _l($d.bind(null, n)) : bc($d.bind(null, n)), co(function() {
        !(Ct & 6) && Ti();
      }), l = null;
      else {
        switch (Zu(o)) {
          case 1:
            l = Ka;
            break;
          case 4:
            l = nu;
            break;
          case 16:
            l = ru;
            break;
          case 536870912:
            l = Wu;
            break;
          default:
            l = ru;
        }
        l = sh(l, of.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function of(n, r) {
    if (js = -1, xr = 0, Ct & 6) throw Error(M(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l) return null;
    var o = Za(n, n === Wn ? sr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = sf(n, o);
    else {
      r = o;
      var c = Ct;
      Ct |= 2;
      var d = th();
      (Wn !== n || sr !== r) && (ga = null, To = Ze() + 500, el(n, r));
      do
        try {
          nh();
          break;
        } catch (E) {
          eh(n, E);
        }
      while (!0);
      Sd(), Al.current = d, Ct = c, Fn !== null ? r = 0 : (Wn = null, sr = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (c = gl(n), c !== 0 && (o = c, r = Fs(n, c))), r === 1) throw l = zs, el(n, 0), li(n, o), ra(n, Ze()), l;
      if (r === 6) li(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !cy(c) && (r = sf(n, o), r === 2 && (d = gl(n), d !== 0 && (o = d, r = Fs(n, d))), r === 1)) throw l = zs, el(n, 0), li(n, o), ra(n, Ze()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(M(345));
          case 2:
            Nu(n, na, ga);
            break;
          case 3:
            if (li(n, o), (o & 130023424) === o && (r = Bd + 500 - Ze(), 10 < r)) {
              if (Za(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Hn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Tc(Nu.bind(null, n, na, ga), r);
              break;
            }
            Nu(n, na, ga);
            break;
          case 4:
            if (li(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ze() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * sy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Tc(Nu.bind(null, n, na, ga), o);
              break;
            }
            Nu(n, na, ga);
            break;
          case 5:
            Nu(n, na, ga);
            break;
          default:
            throw Error(M(329));
        }
      }
    }
    return ra(n, Ze()), n.callbackNode === l ? of.bind(null, n) : null;
  }
  function Fs(n, r) {
    var l = Us;
    return n.current.memoizedState.isDehydrated && (el(n, r).flags |= 256), n = sf(n, r), n !== 2 && (r = na, na = l, r !== null && Lu(r)), n;
  }
  function Lu(n) {
    na === null ? na = n : na.push.apply(na, n);
  }
  function cy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ti(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function li(n, r) {
    for (r &= ~lf, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function $d(n) {
    if (Ct & 6) throw Error(M(327));
    bo();
    var r = Za(n, 0);
    if (!(r & 1)) return ra(n, Ze()), null;
    var l = sf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gl(n);
      o !== 0 && (r = o, l = Fs(n, o));
    }
    if (l === 1) throw l = zs, el(n, 0), li(n, r), ra(n, Ze()), l;
    if (l === 6) throw Error(M(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Nu(n, na, ga), ra(n, Ze()), null;
  }
  function Yd(n, r) {
    var l = Ct;
    Ct |= 1;
    try {
      return n(r);
    } finally {
      Ct = l, Ct === 0 && (To = Ze() + 500, ho && Ti());
    }
  }
  function Mu(n) {
    Ji !== null && Ji.tag === 0 && !(Ct & 6) && bo();
    var r = Ct;
    Ct |= 1;
    var l = or.transition, o = Lt;
    try {
      if (or.transition = null, Lt = 1, n) return n();
    } finally {
      Lt = o, or.transition = l, Ct = r, !(Ct & 6) && Ti();
    }
  }
  function Id() {
    ya = Co.current, ln(Co);
  }
  function el(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, vd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (kc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && vo();
          break;
        case 3:
          Eu(), ln(In), ln(En), De();
          break;
        case 5:
          Mc(o);
          break;
        case 4:
          Eu();
          break;
        case 13:
          ln(gn);
          break;
        case 19:
          ln(gn);
          break;
        case 10:
          Ed(o.type._context);
          break;
        case 22:
        case 23:
          Id();
      }
      l = l.return;
    }
    if (Wn = n, Fn = n = Hl(n.current, null), sr = ya = r, _n = 0, zs = null, lf = Ro = Oi = 0, na = Us = null, gu !== null) {
      for (r = 0; r < gu.length; r++) if (l = gu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      gu = null;
    }
    return n;
  }
  function eh(n, r) {
    do {
      var l = Fn;
      try {
        if (Sd(), pt.current = bu, zc) {
          for (var o = Nt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          zc = !1;
        }
        if (Gt = 0, Zn = Un = Nt = null, hs = !1, Cu = 0, Du.current = null, l === null || l.return === null) {
          _n = 1, zs = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = sr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, Q = E, q = Q.tag;
            if (!(Q.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var I = Q.alternate;
              I ? (Q.updateQueue = I.updateQueue, Q.memoizedState = I.memoizedState, Q.lanes = I.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var de = Vv(m);
            if (de !== null) {
              de.flags &= -257, Ul(de, m, E, d, r), de.mode & 1 && Nd(d, U, r), r = de, T = U;
              var ye = r.updateQueue;
              if (ye === null) {
                var Re = /* @__PURE__ */ new Set();
                Re.add(T), r.updateQueue = Re;
              } else ye.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Nd(d, U, r), Qd();
                break e;
              }
              T = Error(M(426));
            }
          } else if (dn && E.mode & 1) {
            var kn = Vv(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), Ul(kn, m, E, d, r), qi(_u(T, E));
              break e;
            }
          }
          d = T = _u(T, E), _n !== 4 && (_n = 2), Us === null ? Us = [d] : Us.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Pv(d, T, r);
                Uv(d, k);
                break e;
              case 1:
                E = T;
                var w = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (jl === null || !jl.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var W = Md(d, E, r);
                  Uv(d, W);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ah(l);
      } catch (ge) {
        r = ge, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function th() {
    var n = Al.current;
    return Al.current = bu, n === null ? bu : n;
  }
  function Qd() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), Wn === null || !(Oi & 268435455) && !(Ro & 268435455) || li(Wn, sr);
  }
  function sf(n, r) {
    var l = Ct;
    Ct |= 2;
    var o = th();
    (Wn !== n || sr !== r) && (ga = null, el(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        eh(n, c);
      }
    while (!0);
    if (Sd(), Ct = l, Al.current = o, Fn !== null) throw Error(M(261));
    return Wn = null, sr = 0, _n;
  }
  function fy() {
    for (; Fn !== null; ) rh(Fn);
  }
  function nh() {
    for (; Fn !== null && !Ga(); ) rh(Fn);
  }
  function rh(n) {
    var r = oh(n.alternate, n, ya);
    n.memoizedProps = n.pendingProps, r === null ? ah(n) : Fn = r, Du.current = null;
  }
  function ah(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = nf(l, r), l !== null) {
          l.flags &= 32767, Fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          _n = 6, Fn = null;
          return;
        }
      } else if (l = Gv(l, r, ya), l !== null) {
        Fn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    _n === 0 && (_n = 5);
  }
  function Nu(n, r, l) {
    var o = Lt, c = or.transition;
    try {
      or.transition = null, Lt = 1, dy(n, r, l, o);
    } finally {
      or.transition = c, Lt = o;
    }
    return null;
  }
  function dy(n, r, l, o) {
    do
      bo();
    while (Ji !== null);
    if (Ct & 6) throw Error(M(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(M(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Wf(n, d), n === Wn && (Fn = Wn = null, sr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || uf || (uf = !0, sh(ru, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = or.transition, or.transition = null;
      var m = Lt;
      Lt = 1;
      var E = Ct;
      Ct |= 4, Du.current = null, Kv(n, l), Hd(l, n), lo(pu), _a = !!is, pu = is = null, n.current = l, oy(l), qa(), Ct = E, Lt = m, or.transition = d;
    } else n.current = l;
    if (uf && (uf = !1, Ji = n, As = c), d = n.pendingLanes, d === 0 && (jl = null), Io(l.stateNode), ra(n, Ze()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (xo) throw xo = !1, n = Ou, Ou = null, n;
    return As & 1 && n.tag !== 0 && bo(), d = n.pendingLanes, d & 1 ? n === wo ? Fl++ : (Fl = 0, wo = n) : Fl = 0, Ti(), null;
  }
  function bo() {
    if (Ji !== null) {
      var n = Zu(As), r = or.transition, l = Lt;
      try {
        if (or.transition = null, Lt = 16 > n ? 16 : n, Ji === null) var o = !1;
        else {
          if (n = Ji, Ji = null, As = 0, Ct & 6) throw Error(M(331));
          var c = Ct;
          for (Ct |= 4, he = n.current; he !== null; ) {
            var d = he, m = d.child;
            if (he.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (he = U; he !== null; ) {
                    var Q = he;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, Q, d);
                    }
                    var q = Q.child;
                    if (q !== null) q.return = Q, he = q;
                    else for (; he !== null; ) {
                      Q = he;
                      var I = Q.sibling, de = Q.return;
                      if (af(Q), Q === U) {
                        he = null;
                        break;
                      }
                      if (I !== null) {
                        I.return = de, he = I;
                        break;
                      }
                      he = de;
                    }
                  }
                }
                var ye = d.alternate;
                if (ye !== null) {
                  var Re = ye.child;
                  if (Re !== null) {
                    ye.child = null;
                    do {
                      var kn = Re.sibling;
                      Re.sibling = null, Re = kn;
                    } while (Re !== null);
                  }
                }
                he = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, he = m;
            else e: for (; he !== null; ) {
              if (d = he, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, he = k;
                break e;
              }
              he = d.return;
            }
          }
          var w = n.current;
          for (he = w; he !== null; ) {
            m = he;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, he = L;
            else e: for (m = w; he !== null; ) {
              if (E = he, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ls(9, E);
                }
              } catch (ge) {
                pn(E, E.return, ge);
              }
              if (E === m) {
                he = null;
                break e;
              }
              var W = E.sibling;
              if (W !== null) {
                W.return = E.return, he = W;
                break e;
              }
              he = E.return;
            }
          }
          if (Ct = c, Ti(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(ml, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Lt = l, or.transition = r;
      }
    }
    return !1;
  }
  function ih(n, r, l) {
    r = _u(l, r), r = Pv(n, r, 1), n = Ml(n, r, 1), r = Hn(), n !== null && (Pi(n, 1, r), ra(n, r));
  }
  function pn(n, r, l) {
    if (n.tag === 3) ih(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ih(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (jl === null || !jl.has(o))) {
          n = _u(l, n), n = Md(r, n, 1), r = Ml(r, n, 1), n = Hn(), r !== null && (Pi(r, 1, n), ra(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function py(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, Wn === n && (sr & l) === l && (_n === 4 || _n === 3 && (sr & 130023424) === sr && 500 > Ze() - Bd ? el(n, 0) : lf |= l), ra(n, r);
  }
  function lh(n, r) {
    r === 0 && (n.mode & 1 ? (r = da, da <<= 1, !(da & 130023424) && (da = 4194304)) : r = 1);
    var l = Hn();
    n = ha(n, r), n !== null && (Pi(n, r, l), ra(n, l));
  }
  function vy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), lh(n, l);
  }
  function uh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(M(314));
    }
    o !== null && o.delete(r), lh(n, l);
  }
  var oh;
  oh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || In.current) An = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return An = !1, _s(n, r, l);
      An = !!(n.flags & 131072);
    }
    else An = !1, dn && r.flags & 1048576 && Lv(r, Gi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        za(n, r), n = r.pendingProps;
        var c = qr(r, En.current);
        yn(r, l), c = Nl(null, r, o, n, c, l);
        var d = ri();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nn(o) ? (d = !0, Xn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, xd(r), c.updater = Xc, r.stateNode = c, c._reactInternals = r, Rs(r, o, n, l), r = ws(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && _c(r), ur(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (za(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = my(o), n = ai(o, n), c) {
            case 0:
              r = Bv(null, r, o, n, l);
              break e;
            case 1:
              r = $v(null, r, o, n, l);
              break e;
            case 11:
              r = ea(null, r, o, n, l);
              break e;
            case 14:
              r = ku(null, r, o, ai(o.type, n), l);
              break e;
          }
          throw Error(M(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Bv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), $v(n, r, o, c, l);
      case 3:
        e: {
          if (So(r), n === null) throw Error(M(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, zv(n, r), cs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _u(Error(M(423)), r), r = Yv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _u(Error(M(424)), r), r = Yv(n, r, o, l, c);
            break e;
          } else for (Xr = Ei(r.stateNode.containerInfo.firstChild), Kr = r, dn = !0, Ma = null, l = oe(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ll(), o === c) {
              r = Ua(n, r, l);
              break e;
            }
            ur(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Av(r), n === null && yd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Rc(o, c) ? m = null : d !== null && Rc(o, d) && (r.flags |= 32), zd(n, r), ur(n, r, m, l), r.child;
      case 6:
        return n === null && yd(r), null;
      case 13:
        return tf(n, r, l);
      case 4:
        return bd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = xn(r, null, o, l) : ur(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), ea(n, r, o, c, l);
      case 7:
        return ur(n, r, r.pendingProps, l), r.child;
      case 8:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, _e(va, o._currentValue), o._currentValue = m, d !== null) if (ti(d.value, m)) {
            if (d.children === c.children && !In.current) {
              r = Ua(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Ki(-1, l & -l), T.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var Q = U.pending;
                      Q === null ? T.next = T : (T.next = Q.next, Q.next = T), U.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Cd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(M(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Cd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          ur(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, yn(r, l), c = Na(c), o = o(c), r.flags |= 1, ur(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ai(o, r.pendingProps), c = ai(o.type, c), ku(n, r, o, c, l);
      case 15:
        return tt(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), za(n, r), r.tag = 1, Nn(o) ? (n = !0, Xn(r)) : n = !1, yn(r, l), Zc(r, o, c), Rs(r, o, c, l), ws(null, r, o, !0, n, l);
      case 19:
        return _i(n, r, l);
      case 22:
        return xs(n, r, l);
    }
    throw Error(M(156, r.tag));
  };
  function sh(n, r) {
    return sn(n, r);
  }
  function hy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ja(n, r, l, o) {
    return new hy(n, r, l, o);
  }
  function Wd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function") return Wd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t) return 11;
      if (n === kt) return 14;
    }
    return 2;
  }
  function Hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = ja(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Hs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Wd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case He:
        return tl(l.children, c, d, r);
      case Xt:
        m = 8, c |= 8;
        break;
      case Ht:
        return n = ja(12, l, r, c | 2), n.elementType = Ht, n.lanes = d, n;
      case Me:
        return n = ja(13, l, r, c), n.elementType = Me, n.lanes = d, n;
      case jt:
        return n = ja(19, l, r, c), n.elementType = jt, n.lanes = d, n;
      case Te:
        return Pl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case en:
            m = 10;
            break e;
          case un:
            m = 9;
            break e;
          case _t:
            m = 11;
            break e;
          case kt:
            m = 14;
            break e;
          case Ot:
            m = 16, o = null;
            break e;
        }
        throw Error(M(130, n == null ? n : typeof n, ""));
    }
    return r = ja(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function tl(n, r, l, o) {
    return n = ja(7, n, o, r), n.lanes = l, n;
  }
  function Pl(n, r, l, o) {
    return n = ja(22, n, o, r), n.elementType = Te, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Gd(n, r, l) {
    return n = ja(6, n, null, r), n.lanes = l, n;
  }
  function cf(n, r, l) {
    return r = ja(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ch(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xu(0), this.expirationTimes = Xu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function ff(n, r, l, o, c, d, m, E, T) {
    return n = new ch(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ja(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xd(d), n;
  }
  function yy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: at, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function qd(n) {
    if (!n) return Cr;
    n = n._reactInternals;
    e: {
      if (Xe(n) !== n || n.tag !== 1) throw Error(M(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Nn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(M(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Nn(l)) return os(n, l, r);
    }
    return r;
  }
  function fh(n, r, l, o, c, d, m, E, T) {
    return n = ff(l, o, !0, n, c, d, m, E, T), n.context = qd(null), l = n.current, o = Hn(), c = Li(l), d = Ki(o, c), d.callback = r ?? null, Ml(l, d, c), n.current.lanes = c, Pi(n, c, o), ra(n, o), n;
  }
  function df(n, r, l, o) {
    var c = r.current, d = Hn(), m = Li(c);
    return l = qd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ki(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ml(c, r, m), n !== null && (Ur(n, c, m, d), Lc(n, c, m)), m;
  }
  function pf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Kd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function vf(n, r) {
    Kd(n, r), (n = n.alternate) && Kd(n, r);
  }
  function dh() {
    return null;
  }
  var zu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Xd(n) {
    this._internalRoot = n;
  }
  hf.prototype.render = Xd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(M(409));
    df(n, r, null, null);
  }, hf.prototype.unmount = Xd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mu(function() {
        df(null, n, null, null);
      }), r[Qi] = null;
    }
  };
  function hf(n) {
    this._internalRoot = n;
  }
  hf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = We();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Yn.length && r !== 0 && r < Yn[l].priority; l++) ;
      Yn.splice(l, 0, n), l === 0 && Go(n);
    }
  };
  function Zd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function mf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ph() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = pf(m);
          d.call(U);
        };
      }
      var m = fh(r, o, n, 0, null, !1, !1, "", ph);
      return n._reactRootContainer = m, n[Qi] = m.current, oo(n.nodeType === 8 ? n.parentNode : n), Mu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = pf(T);
        E.call(U);
      };
    }
    var T = ff(n, 0, !1, null, null, !1, !1, "", ph);
    return n._reactRootContainer = T, n[Qi] = T.current, oo(n.nodeType === 8 ? n.parentNode : n), Mu(function() {
      df(r, T, l, o);
    }), T;
  }
  function Ps(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = pf(m);
          E.call(T);
        };
      }
      df(r, m, n, c);
    } else m = gy(l, r, n, c, o);
    return pf(m);
  }
  wt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xa(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), ra(r, Ze()), !(Ct & 6) && (To = Ze() + 500, Ti()));
        }
        break;
      case 13:
        Mu(function() {
          var o = ha(n, 1);
          if (o !== null) {
            var c = Hn();
            Ur(o, n, 1, c);
          }
        }), vf(n, 1);
    }
  }, Qo = function(n) {
    if (n.tag === 13) {
      var r = ha(n, 134217728);
      if (r !== null) {
        var l = Hn();
        Ur(r, n, 134217728, l);
      }
      vf(n, 134217728);
    }
  }, hi = function(n) {
    if (n.tag === 13) {
      var r = Li(n), l = ha(n, r);
      if (l !== null) {
        var o = Hn();
        Ur(l, n, r, o);
      }
      vf(n, r);
    }
  }, We = function() {
    return Lt;
  }, Ju = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, Yt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Ir(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = mn(o);
              if (!c) throw Error(M(90));
              br(o), Ir(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ia(n, l);
        break;
      case "select":
        r = l.value, r != null && Rn(n, !!l.multiple, r, !1);
    }
  }, eu = Yd, pl = Mu;
  var Sy = { usingClientEntryPoint: !1, Events: [ke, ni, mn, Hi, Jl, Yd] }, Vs = { findFiberByHostInstance: vu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vh = { bundleType: Vs.bundleType, version: Vs.version, rendererPackageName: Vs.rendererPackageName, rendererConfig: Vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ue.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vs.findFiberByHostInstance || dh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber) try {
      ml = Vl.inject(vh), Qr = Vl;
    } catch {
    }
  }
  return $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy, $a.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Zd(r)) throw Error(M(200));
    return yy(n, r, null, l);
  }, $a.createRoot = function(n, r) {
    if (!Zd(n)) throw Error(M(299));
    var l = !1, o = "", c = zu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = ff(n, 1, !1, null, null, l, !1, o, c), n[Qi] = r.current, oo(n.nodeType === 8 ? n.parentNode : n), new Xd(r);
  }, $a.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(M(188)) : (n = Object.keys(n).join(","), Error(M(268, n)));
    return n = Tn(r), n = n === null ? null : n.stateNode, n;
  }, $a.flushSync = function(n) {
    return Mu(n);
  }, $a.hydrate = function(n, r, l) {
    if (!mf(r)) throw Error(M(200));
    return Ps(null, n, r, !0, l);
  }, $a.hydrateRoot = function(n, r, l) {
    if (!Zd(n)) throw Error(M(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = zu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = fh(r, null, n, 1, l ?? null, c, !1, d, m), n[Qi] = r.current, oo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new hf(r);
  }, $a.render = function(n, r, l) {
    if (!mf(r)) throw Error(M(200));
    return Ps(null, n, r, !1, l);
  }, $a.unmountComponentAtNode = function(n) {
    if (!mf(n)) throw Error(M(40));
    return n._reactRootContainer ? (Mu(function() {
      Ps(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Qi] = null;
      });
    }), !0) : !1;
  }, $a.unstable_batchedUpdates = Yd, $a.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!mf(l)) throw Error(M(200));
    if (n == null || n._reactInternals === void 0) throw Error(M(38));
    return Ps(n, r, l, !1, o);
  }, $a.version = "18.3.1-next-f1338f8080-20240426", $a;
}
var Ya = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a1;
function lk() {
  return a1 || (a1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var B = wr, G = u1(), M = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Je = !1;
    function Le(e) {
      Je = e;
    }
    function Oe(e) {
      if (!Je) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        xt("warn", e, a);
      }
    }
    function S(e) {
      if (!Je) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        xt("error", e, a);
      }
    }
    function xt(e, t, a) {
      {
        var i = M.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ae = 0, fe = 1, et = 2, J = 3, Ce = 4, ie = 5, Qe = 6, yt = 7, vt = 8, Jt = 9, st = 10, le = 11, Ue = 12, Ee = 13, at = 14, He = 15, Xt = 16, Ht = 17, en = 18, un = 19, _t = 21, Me = 22, jt = 23, kt = 24, Ot = 25, Te = !0, Z = !1, xe = !1, ne = !1, _ = !1, P = !0, Be = !0, Pe = !0, ct = !0, it = /* @__PURE__ */ new Set(), nt = {}, lt = {};
    function ft(e, t) {
      Bt(e, t), Bt(e + "Capture", t);
    }
    function Bt(e, t) {
      nt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), nt[e] = t;
      {
        var a = e.toLowerCase();
        lt[a] = e, e === "onDoubleClick" && (lt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        it.add(t[i]);
    }
    var On = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", br = Object.prototype.hasOwnProperty;
    function Cn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function nr(e) {
      try {
        return Vn(e), !1;
      } catch {
        return !0;
      }
    }
    function Vn(e) {
      return "" + e;
    }
    function Bn(e, t) {
      if (nr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function Ir(e) {
      if (nr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    function ci(e, t) {
      if (nr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function sa(e, t) {
      if (nr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function qn(e) {
      if (nr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    function Rn(e) {
      if (nr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    var $n = 0, gr = 1, Ia = 2, Ln = 3, Sr = 4, ca = 5, Qa = 6, fi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ee = fi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", we = new RegExp("^[" + fi + "][" + ee + "]*$"), ut = {}, Ft = {};
    function tn(e) {
      return br.call(Ft, e) ? !0 : br.call(ut, e) ? !1 : we.test(e) ? (Ft[e] = !0, !0) : (ut[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === $n : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function on(e, t, a, i) {
      if (a !== null && a.type === $n)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Kn(e, t, a, i) {
      if (t === null || typeof t > "u" || on(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Ln:
            return !t;
          case Sr:
            return t === !1;
          case ca:
            return isNaN(t);
          case Qa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function nn(e) {
      return Yt.hasOwnProperty(e) ? Yt[e] : null;
    }
    function $t(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ia || t === Ln || t === Sr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Yt = {}, fa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    fa.forEach(function(e) {
      Yt[e] = new $t(
        e,
        $n,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Yt[t] = new $t(
        t,
        gr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Yt[e] = new $t(
        e,
        Ia,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Yt[e] = new $t(
        e,
        Ia,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Yt[e] = new $t(
        e,
        Ln,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new $t(
        e,
        Ln,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new $t(
        e,
        Sr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new $t(
        e,
        Qa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Yt[e] = new $t(
        e,
        ca,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Er = /[\-\:]([a-z])/g, xa = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, xa);
      Yt[t] = new $t(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, xa);
      Yt[t] = new $t(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, xa);
      Yt[t] = new $t(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Yt[e] = new $t(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Hi = "xlinkHref";
    Yt[Hi] = new $t(
      "xlinkHref",
      gr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Yt[e] = new $t(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Jl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, eu = !1;
    function pl(e) {
      !eu && Jl.test(e) && (eu = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Bn(a, t), i.sanitizeURL && pl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Sr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Kn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Kn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Ln)
            return a;
          f = e.getAttribute(s);
        }
        return Kn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function tu(e, t, a, i) {
      {
        if (!tn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Bn(a, t), u === "" + a ? a : u;
      }
    }
    function _r(e, t, a, i) {
      var u = nn(t);
      if (!vn(t, u, i)) {
        if (Kn(t, a, u, i) && (a = null), i || u === null) {
          if (tn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Bn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Ln ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, x;
          b === Ln || b === Sr && a === !0 ? x = "" : (Bn(a, y), x = "" + a, u.sanitizeURL && pl(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var kr = Symbol.for("react.element"), rr = Symbol.for("react.portal"), di = Symbol.for("react.fragment"), Wa = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), vi = Symbol.for("react.provider"), R = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), Xe = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), ht = Symbol.for("react.scope"), dt = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), rn = Symbol.for("react.legacy_hidden"), sn = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Ga = Symbol.iterator, qa = "@@iterator";
    function Ze(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ga && e[Ga] || e[qa];
      return typeof t == "function" ? t : null;
    }
    var rt = Object.assign, Ka = 0, nu, ru, hl, Wu, ml, Qr, Io;
    function Dr() {
    }
    Dr.__reactDisabledLog = !0;
    function uc() {
      {
        if (Ka === 0) {
          nu = console.log, ru = console.info, hl = console.warn, Wu = console.error, ml = console.group, Qr = console.groupCollapsed, Io = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Dr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ka++;
      }
    }
    function oc() {
      {
        if (Ka--, Ka === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rt({}, e, {
              value: nu
            }),
            info: rt({}, e, {
              value: ru
            }),
            warn: rt({}, e, {
              value: hl
            }),
            error: rt({}, e, {
              value: Wu
            }),
            group: rt({}, e, {
              value: ml
            }),
            groupCollapsed: rt({}, e, {
              value: Qr
            }),
            groupEnd: rt({}, e, {
              value: Io
            })
          });
        }
        Ka < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gu = M.ReactCurrentDispatcher, yl;
    function da(e, t, a) {
      {
        if (yl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            yl = i && i[1] || "";
          }
        return `
` + yl + e;
      }
    }
    var Xa = !1, Za;
    {
      var qu = typeof WeakMap == "function" ? WeakMap : Map;
      Za = new qu();
    }
    function au(e, t) {
      if (!e || Xa)
        return "";
      {
        var a = Za.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Xa = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Gu.current, Gu.current = null, uc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Za.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Xa = !1, Gu.current = s, oc(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", N = x ? da(x) : "";
      return typeof e == "function" && Za.set(e, N), N;
    }
    function gl(e, t, a) {
      return au(e, !0);
    }
    function Ku(e, t, a) {
      return au(e, !1);
    }
    function Xu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Pi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, Xu(e));
      if (typeof e == "string")
        return da(e);
      switch (e) {
        case ue:
          return da("Suspense");
        case me:
          return da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $:
            return Ku(e.render);
          case Xe:
            return Pi(e.type, t, a);
          case Ge: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Pi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Wf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ie:
          return da(e.type);
        case Xt:
          return da("Lazy");
        case Ee:
          return da("Suspense");
        case un:
          return da("SuspenseList");
        case ae:
        case et:
        case He:
          return Ku(e.type);
        case le:
          return Ku(e.type.render);
        case fe:
          return gl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
      try {
        var t = "", a = e;
        do
          t += Wf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Lt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Zu(e) {
      return e.displayName || "Context";
    }
    function wt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case di:
          return "Fragment";
        case rr:
          return "Portal";
        case pi:
          return "Profiler";
        case Wa:
          return "StrictMode";
        case ue:
          return "Suspense";
        case me:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Zu(t) + ".Consumer";
          case vi:
            var a = e;
            return Zu(a._context) + ".Provider";
          case $:
            return Lt(e, e.render, "ForwardRef");
          case Xe:
            var i = e.displayName || null;
            return i !== null ? i : wt(e.type) || "Memo";
          case Ge: {
            var u = e, s = u._payload, f = u._init;
            try {
              return wt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Qo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function hi(e) {
      return e.displayName || "Context";
    }
    function We(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case kt:
          return "Cache";
        case Jt:
          var i = a;
          return hi(i) + ".Consumer";
        case st:
          var u = a;
          return hi(u._context) + ".Provider";
        case en:
          return "DehydratedFragment";
        case le:
          return Qo(a, a.render, "ForwardRef");
        case yt:
          return "Fragment";
        case ie:
          return a;
        case Ce:
          return "Portal";
        case J:
          return "Root";
        case Qe:
          return "Text";
        case Xt:
          return wt(a);
        case vt:
          return a === Wa ? "StrictMode" : "Mode";
        case Me:
          return "Offscreen";
        case Ue:
          return "Profiler";
        case _t:
          return "Scope";
        case Ee:
          return "Suspense";
        case un:
          return "SuspenseList";
        case Ot:
          return "TracingMarker";
        case fe:
        case ae:
        case Ht:
        case et:
        case at:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Ju = M.ReactDebugCurrentFrame, ir = null, mi = !1;
    function Or() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e < "u")
          return We(e);
      }
      return null;
    }
    function yi() {
      return ir === null ? "" : Vi(ir);
    }
    function cn() {
      Ju.getCurrentStack = null, ir = null, mi = !1;
    }
    function It(e) {
      Ju.getCurrentStack = e === null ? null : yi, ir = e, mi = !1;
    }
    function Sl() {
      return ir;
    }
    function Yn(e) {
      mi = e;
    }
    function Lr(e) {
      return "" + e;
    }
    function wa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Rn(e), e;
        default:
          return "";
      }
    }
    var iu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Wo(e, t) {
      iu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Go(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function El(e) {
      return e._valueTracker;
    }
    function lu(e) {
      e._valueTracker = null;
    }
    function Gf(e) {
      var t = "";
      return e && (Go(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ba(e) {
      var t = Go(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Rn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Rn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Rn(p), i = "" + p;
          },
          stopTracking: function() {
            lu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ja(e) {
      El(e) || (e._valueTracker = ba(e));
    }
    function gi(e) {
      if (!e)
        return !1;
      var t = El(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Gf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function _a(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var eo = !1, to = !1, Cl = !1, uu = !1;
    function no(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ro(e, t) {
      var a = e, i = t.checked, u = rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ei(e, t) {
      Wo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !eo && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), eo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: wa(t.value != null ? t.value : i),
        controlled: no(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && _r(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = no(t);
        !a._wrapperState.controlled && i && !uu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), uu = !0), a._wrapperState.controlled && !i && !Cl && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cl = !0);
      }
      h(e, t);
      var u = wa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Lr(u)) : a.value !== Lr(u) && (a.value = Lr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ne(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ne(a, t.type, wa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Lr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      C(a, t), X(a, t);
    }
    function X(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Bn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Mh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            gi(f), C(f, p);
          }
        }
      }
    }
    function Ne(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || _a(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Lr(e._wrapperState.initialValue) : e.defaultValue !== Lr(a) && (e.defaultValue = Lr(a)));
    }
    var re = !1, je = !1, mt = !1;
    function bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? B.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || je || (je = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (mt || (mt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !re && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), re = !0);
    }
    function an(e, t) {
      t.value != null && e.setAttribute("value", Lr(wa(t.value)));
    }
    var Qt = Array.isArray;
    function ot(e) {
      return Qt(e);
    }
    var Wt;
    Wt = !1;
    function hn() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Rl = ["value", "defaultValue"];
    function qo(e) {
      {
        Wo("select", e);
        for (var t = 0; t < Rl.length; t++) {
          var a = Rl[t];
          if (e[a] != null) {
            var i = ot(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Lr(wa(a)), b = null, x = 0; x < u.length; x++) {
          if (u[x].value === g) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          b === null && !u[x].disabled && (b = u[x]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function Ko(e, t) {
      return rt({}, t, {
        value: void 0
      });
    }
    function ou(e, t) {
      var a = e;
      qo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Wt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Wt = !0);
    }
    function qf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function sc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Kf(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var tv = !1;
    function Xf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Lr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Zf(e, t) {
      var a = e;
      Wo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !tv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), tv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ot(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: wa(i)
      };
    }
    function nv(e, t) {
      var a = e, i = wa(t.value), u = wa(t.defaultValue);
      if (i != null) {
        var s = Lr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Lr(u));
    }
    function rv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Gm(e, t) {
      nv(e, t);
    }
    var $i = "http://www.w3.org/1999/xhtml", Jf = "http://www.w3.org/1998/Math/MathML", ed = "http://www.w3.org/2000/svg";
    function td(e) {
      switch (e) {
        case "svg":
          return ed;
        case "math":
          return Jf;
        default:
          return $i;
      }
    }
    function nd(e, t) {
      return e == null || e === $i ? td(t) : e === ed && t === "foreignObject" ? $i : e;
    }
    var av = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, cc, iv = av(function(e, t) {
      if (e.namespaceURI === ed && !("innerHTML" in e)) {
        cc = cc || document.createElement("div"), cc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = cc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Wr = 1, Yi = 3, Mn = 8, Ii = 9, rd = 11, ao = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Yi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var uv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zo).forEach(function(e) {
      uv.forEach(function(t) {
        Zo[lv(t, e)] = Zo[e];
      });
    });
    function fc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zo.hasOwnProperty(e) && Zo[e]) ? t + "px" : (sa(t, e), ("" + t).trim());
    }
    var ov = /([A-Z])/g, sv = /^ms-/;
    function io(e) {
      return e.replace(ov, "-$1").toLowerCase().replace(sv, "-ms-");
    }
    var cv = function() {
    };
    {
      var qm = /^(?:webkit|moz|o)[A-Z]/, Km = /^-ms-/, fv = /-(.)/g, ad = /;\s*$/, Si = {}, su = {}, dv = !1, Jo = !1, Xm = function(e) {
        return e.replace(fv, function(t, a) {
          return a.toUpperCase();
        });
      }, pv = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Xm(e.replace(Km, "ms-"))
        ));
      }, id = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ld = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ad, "")));
      }, vv = function(e, t) {
        dv || (dv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hv = function(e, t) {
        Jo || (Jo = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      cv = function(e, t) {
        e.indexOf("-") > -1 ? pv(e) : qm.test(e) ? id(e) : ad.test(t) && ld(e, t), typeof t == "number" && (isNaN(t) ? vv(e, t) : isFinite(t) || hv(e, t));
      };
    }
    var mv = cv;
    function Zm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : io(i)) + ":", t += fc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function yv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || mv(i, t[i]);
          var s = fc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Jm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function gv(e) {
      var t = {};
      for (var a in e)
        for (var i = Xo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ey(e, t) {
      {
        if (!t)
          return;
        var a = gv(e), i = gv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Jm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ti = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, es = rt({
      menuitem: !0
    }, ti), Sv = "__html";
    function dc(e, t) {
      if (t) {
        if (es[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Tl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ts = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, pc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, lo = {}, ty = new RegExp("^(aria)-[" + ee + "]*$"), uo = new RegExp("^(aria)[A-Z][" + ee + "]*$");
    function ud(e, t) {
      {
        if (br.call(lo, t) && lo[t])
          return !0;
        if (uo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = pc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lo[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), lo[t] = !0, !0;
        }
        if (ty.test(t)) {
          var u = t.toLowerCase(), s = pc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return lo[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), lo[t] = !0, !0;
        }
      }
      return !0;
    }
    function ns(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ud(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function od(e, t) {
      Tl(e, t) || ns(e, t);
    }
    var sd = !1;
    function vc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !sd && (sd = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var cu = function() {
    };
    {
      var lr = {}, cd = /^on./, hc = /^on[^A-Z]/, Ev = new RegExp("^(aria)-[" + ee + "]*$"), Cv = new RegExp("^(aria)[A-Z][" + ee + "]*$");
      cu = function(e, t, a, i) {
        if (br.call(lr, t) && lr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), lr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), lr[t] = !0, !0;
          if (cd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), lr[t] = !0, !0;
        } else if (cd.test(t))
          return hc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
        if (Ev.test(t) || Cv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var v = nn(t), y = v !== null && v.type === $n;
        if (ts.hasOwnProperty(u)) {
          var g = ts[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), lr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), lr[t] = !0, !0;
        return typeof a == "boolean" && on(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : y ? !0 : on(t, a, v, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Ln && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var Rv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = cu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Tv(e, t, a) {
      Tl(e, t) || Rv(e, t, a);
    }
    var fd = 1, mc = 2, ka = 4, dd = fd | mc | ka, fu = null;
    function ny(e) {
      fu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), fu = e;
    }
    function ry() {
      fu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), fu = null;
    }
    function rs(e) {
      return e === fu;
    }
    function pd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var yc = null, du = null, Pt = null;
    function gc(e) {
      var t = Do(e);
      if (t) {
        if (typeof yc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Mh(a);
          yc(t.stateNode, t.type, i);
        }
      }
    }
    function Sc(e) {
      yc = e;
    }
    function oo(e) {
      du ? Pt ? Pt.push(e) : Pt = [e] : du = e;
    }
    function xv() {
      return du !== null || Pt !== null;
    }
    function Ec() {
      if (du) {
        var e = du, t = Pt;
        if (du = null, Pt = null, gc(e), t)
          for (var a = 0; a < t.length; a++)
            gc(t[a]);
      }
    }
    var so = function(e, t) {
      return e(t);
    }, as = function() {
    }, xl = !1;
    function wv() {
      var e = xv();
      e && (as(), Ec());
    }
    function bv(e, t, a) {
      if (xl)
        return e(t, a);
      xl = !0;
      try {
        return so(e, t, a);
      } finally {
        xl = !1, wv();
      }
    }
    function ay(e, t, a) {
      so = e, as = a;
    }
    function _v(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Cc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && _v(t));
        default:
          return !1;
      }
    }
    function wl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Mh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Cc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var is = !1;
    if (On)
      try {
        var pu = {};
        Object.defineProperty(pu, "passive", {
          get: function() {
            is = !0;
          }
        }), window.addEventListener("test", pu, pu), window.removeEventListener("test", pu, pu);
      } catch {
        is = !1;
      }
    function Rc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Tc = Rc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var vd = document.createElement("react");
      Tc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, x = !0, N = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          vd.removeEventListener(H, ze, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var se = Array.prototype.slice.call(arguments, 3);
        function ze() {
          b = !0, F(), a.apply(i, se), x = !1;
        }
        var be, Tt = !1, gt = !1;
        function D(O) {
          if (be = O.error, Tt = !0, be === null && O.colno === 0 && O.lineno === 0 && (gt = !0), O.defaultPrevented && be != null && typeof be == "object")
            try {
              be._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), vd.addEventListener(H, ze, !1), g.initEvent(H, !1, !1), vd.dispatchEvent(g), A && Object.defineProperty(window, "event", A), b && x && (Tt ? gt && (be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(be)), window.removeEventListener("error", D), !b)
          return F(), Rc.apply(this, arguments);
      };
    }
    var kv = Tc, co = !1, xc = null, fo = !1, Ei = null, Dv = {
      onError: function(e) {
        co = !0, xc = e;
      }
    };
    function bl(e, t, a, i, u, s, f, p, v) {
      co = !1, xc = null, kv.apply(Dv, arguments);
    }
    function Ci(e, t, a, i, u, s, f, p, v) {
      if (bl.apply(this, arguments), co) {
        var y = us();
        fo || (fo = !0, Ei = y);
      }
    }
    function ls() {
      if (fo) {
        var e = Ei;
        throw fo = !1, Ei = null, e;
      }
    }
    function Qi() {
      return co;
    }
    function us() {
      if (co) {
        var e = xc;
        return co = !1, xc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function po(e) {
      return e._reactInternals;
    }
    function iy(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var ke = (
      /*                      */
      0
    ), ni = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), Et = (
      /*                       */
      4
    ), Da = (
      /*                */
      16
    ), Oa = (
      /*                 */
      32
    ), ln = (
      /*                     */
      64
    ), _e = (
      /*                   */
      128
    ), Cr = (
      /*            */
      256
    ), En = (
      /*                          */
      512
    ), In = (
      /*                     */
      1024
    ), Gr = (
      /*                      */
      2048
    ), qr = (
      /*                    */
      4096
    ), Nn = (
      /*                   */
      8192
    ), vo = (
      /*             */
      16384
    ), Ov = (
      /*               */
      32767
    ), os = (
      /*                   */
      32768
    ), Xn = (
      /*                */
      65536
    ), wc = (
      /* */
      131072
    ), Ri = (
      /*                       */
      1048576
    ), ho = (
      /*                    */
      2097152
    ), Wi = (
      /*                 */
      4194304
    ), bc = (
      /*                */
      8388608
    ), _l = (
      /*               */
      16777216
    ), Ti = (
      /*              */
      33554432
    ), kl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Et | In | 0
    ), Dl = mn | Et | Da | Oa | En | qr | Nn, Ol = Et | ln | En | Nn, Gi = Gr | Da, zn = Wi | bc | ho, La = M.ReactCurrentOwner;
    function pa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | qr)) !== ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function xi(e) {
      if (e.tag === Ee) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function wi(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function hu(e) {
      return pa(e) === e;
    }
    function Lv(e) {
      {
        var t = La.current;
        if (t !== null && t.tag === fe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", We(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = po(e);
      return u ? pa(u) === u : !1;
    }
    function _c(e) {
      if (pa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function kc(e) {
      var t = e.alternate;
      if (!t) {
        var a = pa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return _c(s), e;
            if (v === u)
              return _c(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Kr(e) {
      var t = kc(e);
      return t !== null ? Xr(t) : null;
    }
    function Xr(e) {
      if (e.tag === ie || e.tag === Qe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Xr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dn(e) {
      var t = kc(e);
      return t !== null ? Ma(t) : null;
    }
    function Ma(e) {
      if (e.tag === ie || e.tag === Qe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Ce) {
          var a = Ma(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hd = G.unstable_scheduleCallback, Mv = G.unstable_cancelCallback, md = G.unstable_shouldYield, yd = G.unstable_requestPaint, Qn = G.unstable_now, Dc = G.unstable_getCurrentPriorityLevel, ss = G.unstable_ImmediatePriority, Ll = G.unstable_UserBlockingPriority, qi = G.unstable_NormalPriority, ly = G.unstable_LowPriority, mu = G.unstable_IdlePriority, Oc = G.unstable_yieldValue, Nv = G.unstable_setDisableYieldValue, yu = null, xn = null, oe = null, va = !1, Zr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function mo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Be && (e = rt({}, e, {
          getLaneLabelMap: gu,
          injectProfilingHooks: Na
        })), yu = t.inject(e), xn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (xn && typeof xn.onScheduleFiberRoot == "function")
        try {
          xn.onScheduleFiberRoot(yu, e, t);
        } catch (a) {
          va || (va = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Sd(e, t) {
      if (xn && typeof xn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & _e) === _e;
          if (Pe) {
            var i;
            switch (t) {
              case Mr:
                i = ss;
                break;
              case _i:
                i = Ll;
                break;
              case za:
                i = qi;
                break;
              case Ua:
                i = mu;
                break;
              default:
                i = qi;
                break;
            }
            xn.onCommitFiberRoot(yu, e, i, a);
          }
        } catch (u) {
          va || (va = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ed(e) {
      if (xn && typeof xn.onPostCommitFiberRoot == "function")
        try {
          xn.onPostCommitFiberRoot(yu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Cd(e) {
      if (xn && typeof xn.onCommitFiberUnmount == "function")
        try {
          xn.onCommitFiberUnmount(yu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof Oc == "function" && (Nv(e), Le(e)), xn && typeof xn.setStrictMode == "function")
        try {
          xn.setStrictMode(yu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Na(e) {
      oe = e;
    }
    function gu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Cu; a++) {
          var i = jv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Rd(e) {
      oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
    }
    function Td() {
      oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
    }
    function ha(e) {
      oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
    }
    function ma() {
      oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
    }
    function xd(e) {
      oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
    }
    function zv() {
      oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
    }
    function Ki(e) {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ml() {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
    }
    function Lc(e) {
      oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
    }
    function Uv() {
      oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
    }
    function cs(e) {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function wd() {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
    }
    function fs(e, t, a) {
      oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, a);
    }
    function bi(e, t, a) {
      oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, a);
    }
    function ds(e) {
      oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
    }
    function ps() {
      oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
    }
    function Su(e) {
      oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
    }
    function bd() {
      oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
    }
    function Eu(e) {
      oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
    }
    function Av() {
      oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
    }
    function Mc() {
      oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
    }
    function gn(e) {
      oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
    }
    function Nc(e, t) {
      oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
    }
    function vs(e, t) {
      oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
    }
    var De = (
      /*                         */
      0
    ), pt = (
      /*                 */
      1
    ), Mt = (
      /*                    */
      2
    ), Gt = (
      /*               */
      8
    ), Nt = (
      /*              */
      16
    ), Un = Math.clz32 ? Math.clz32 : hs, Zn = Math.log, zc = Math.LN2;
    function hs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Zn(t) / zc | 0) | 0;
    }
    var Cu = 31, Y = (
      /*                        */
      0
    ), Dt = (
      /*                          */
      0
    ), Ve = (
      /*                        */
      1
    ), Nl = (
      /*    */
      2
    ), ri = (
      /*             */
      4
    ), Rr = (
      /*            */
      8
    ), wn = (
      /*                     */
      16
    ), Xi = (
      /*                */
      32
    ), zl = (
      /*                       */
      4194240
    ), Ru = (
      /*                        */
      64
    ), Uc = (
      /*                        */
      128
    ), Ac = (
      /*                        */
      256
    ), jc = (
      /*                        */
      512
    ), Fc = (
      /*                        */
      1024
    ), Hc = (
      /*                        */
      2048
    ), Pc = (
      /*                        */
      4096
    ), Vc = (
      /*                        */
      8192
    ), Bc = (
      /*                        */
      16384
    ), Tu = (
      /*                       */
      32768
    ), $c = (
      /*                       */
      65536
    ), yo = (
      /*                       */
      131072
    ), go = (
      /*                       */
      262144
    ), Yc = (
      /*                       */
      524288
    ), ms = (
      /*                       */
      1048576
    ), Ic = (
      /*                       */
      2097152
    ), ys = (
      /*                            */
      130023424
    ), xu = (
      /*                             */
      4194304
    ), Qc = (
      /*                             */
      8388608
    ), gs = (
      /*                             */
      16777216
    ), Wc = (
      /*                             */
      33554432
    ), Gc = (
      /*                             */
      67108864
    ), _d = xu, Ss = (
      /*          */
      134217728
    ), kd = (
      /*                          */
      268435455
    ), Es = (
      /*               */
      268435456
    ), wu = (
      /*                        */
      536870912
    ), Jr = (
      /*                   */
      1073741824
    );
    function jv(e) {
      {
        if (e & Ve)
          return "Sync";
        if (e & Nl)
          return "InputContinuousHydration";
        if (e & ri)
          return "InputContinuous";
        if (e & Rr)
          return "DefaultHydration";
        if (e & wn)
          return "Default";
        if (e & Xi)
          return "TransitionHydration";
        if (e & zl)
          return "Transition";
        if (e & ys)
          return "Retry";
        if (e & Ss)
          return "SelectiveHydration";
        if (e & Es)
          return "IdleHydration";
        if (e & wu)
          return "Idle";
        if (e & Jr)
          return "Offscreen";
      }
    }
    var Zt = -1, bu = Ru, qc = xu;
    function Cs(e) {
      switch (Ul(e)) {
        case Ve:
          return Ve;
        case Nl:
          return Nl;
        case ri:
          return ri;
        case Rr:
          return Rr;
        case wn:
          return wn;
        case Xi:
          return Xi;
        case Ru:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case Tu:
        case $c:
        case yo:
        case go:
        case Yc:
        case ms:
        case Ic:
          return e & zl;
        case xu:
        case Qc:
        case gs:
        case Wc:
        case Gc:
          return e & ys;
        case Ss:
          return Ss;
        case Es:
          return Es;
        case wu:
          return wu;
        case Jr:
          return Jr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Kc(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & kd;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = Cs(p);
        else {
          var v = f & s;
          v !== Y && (i = Cs(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = Cs(y) : s !== Y && (i = Cs(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Y) {
        var g = Ul(i), b = Ul(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === wn && (b & zl) !== Y
        )
          return t;
      }
      (i & ri) !== Y && (i |= a & wn);
      var x = e.entangledLanes;
      if (x !== Y)
        for (var N = e.entanglements, A = i & x; A > 0; ) {
          var F = An(A), se = 1 << F;
          i |= N[F], A &= ~se;
        }
      return i;
    }
    function ai(e, t) {
      for (var a = e.eventTimes, i = Zt; t > 0; ) {
        var u = An(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Dd(e, t) {
      switch (e) {
        case Ve:
        case Nl:
        case ri:
          return t + 250;
        case Rr:
        case wn:
        case Xi:
        case Ru:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case Tu:
        case $c:
        case yo:
        case go:
        case Yc:
        case ms:
        case Ic:
          return t + 5e3;
        case xu:
        case Qc:
        case gs:
        case Wc:
        case Gc:
          return Zt;
        case Ss:
        case Es:
        case wu:
        case Jr:
          return Zt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Zt;
      }
    }
    function Xc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p, y = s[p];
        y === Zt ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Dd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Fv(e) {
      return Cs(e.pendingLanes);
    }
    function Zc(e) {
      var t = e.pendingLanes & ~Jr;
      return t !== Y ? t : t & Jr ? Jr : Y;
    }
    function Hv(e) {
      return (e & Ve) !== Y;
    }
    function Rs(e) {
      return (e & kd) !== Y;
    }
    function _u(e) {
      return (e & ys) === e;
    }
    function Od(e) {
      var t = Ve | ri | wn;
      return (e & t) === Y;
    }
    function Ld(e) {
      return (e & zl) === e;
    }
    function Jc(e, t) {
      var a = Nl | ri | Rr | wn;
      return (t & a) !== Y;
    }
    function Pv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Md(e) {
      return (e & zl) !== Y;
    }
    function Nd() {
      var e = bu;
      return bu <<= 1, (bu & zl) === Y && (bu = Ru), e;
    }
    function Vv() {
      var e = qc;
      return qc <<= 1, (qc & ys) === Y && (qc = xu), e;
    }
    function Ul(e) {
      return e & -e;
    }
    function Ts(e) {
      return Ul(e);
    }
    function An(e) {
      return 31 - Un(e);
    }
    function ur(e) {
      return An(e);
    }
    function ea(e, t) {
      return (e & t) !== Y;
    }
    function ku(e, t) {
      return (e & t) === t;
    }
    function tt(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function zd(e, t) {
      return e & t;
    }
    function Bv(e) {
      return e;
    }
    function $v(e, t) {
      return e !== Dt && e < t ? e : t;
    }
    function ws(e) {
      for (var t = [], a = 0; a < Cu; a++)
        t.push(e);
      return t;
    }
    function So(e, t, a) {
      e.pendingLanes |= t, t !== wu && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = ur(t);
      i[u] = a;
    }
    function Yv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = An(i), s = 1 << u;
        a[u] = Zt, i &= ~s;
      }
    }
    function ef(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Ud(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p;
        i[p] = Y, u[p] = Zt, s[p] = Zt, f &= ~v;
      }
    }
    function tf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = An(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ad(e, t) {
      var a = Ul(t), i;
      switch (a) {
        case ri:
          i = Nl;
          break;
        case wn:
          i = Rr;
          break;
        case Ru:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case Tu:
        case $c:
        case yo:
        case go:
        case Yc:
        case ms:
        case Ic:
        case xu:
        case Qc:
        case gs:
        case Wc:
        case Gc:
          i = Xi;
          break;
        case wu:
          i = Es;
          break;
        default:
          i = Dt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Dt ? Dt : i;
    }
    function bs(e, t, a) {
      if (Zr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ur(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Iv(e, t) {
      if (Zr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = ur(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function jd(e, t) {
      return null;
    }
    var Mr = Ve, _i = ri, za = wn, Ua = wu, _s = Dt;
    function Aa() {
      return _s;
    }
    function jn(e) {
      _s = e;
    }
    function Qv(e, t) {
      var a = _s;
      try {
        return _s = e, t();
      } finally {
        _s = a;
      }
    }
    function Wv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ks(e, t) {
      return e > t ? e : t;
    }
    function Jn(e, t) {
      return e !== 0 && e < t;
    }
    function Gv(e) {
      var t = Ul(e);
      return Jn(Mr, t) ? Jn(_i, t) ? Rs(t) ? za : Ua : _i : Mr;
    }
    function nf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ds;
    function Tr(e) {
      Ds = e;
    }
    function uy(e) {
      Ds(e);
    }
    var he;
    function Eo(e) {
      he = e;
    }
    var rf;
    function qv(e) {
      rf = e;
    }
    var Kv;
    function Os(e) {
      Kv = e;
    }
    var Ls;
    function Fd(e) {
      Ls = e;
    }
    var af = !1, Ms = [], Zi = null, ki = null, Di = null, bn = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), zr = [], Xv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Zv(e) {
      return Xv.indexOf(e) > -1;
    }
    function ii(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Hd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Zi = null;
          break;
        case "dragenter":
        case "dragleave":
          ki = null;
          break;
        case "mouseover":
        case "mouseout":
          Di = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          bn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Nr.delete(i);
          break;
        }
      }
    }
    function ta(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ii(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && he(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function oy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Zi = ta(Zi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return ki = ta(ki, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Di = ta(Di, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return bn.set(y, ta(bn.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return Nr.set(b, ta(Nr.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Pd(e) {
      var t = Ys(e.target);
      if (t !== null) {
        var a = pa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ee) {
            var u = xi(a);
            if (u !== null) {
              e.blockedOn = u, Ls(e.priority, function() {
                rf(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (nf(s)) {
              e.blockedOn = wi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Jv(e) {
      for (var t = Kv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < zr.length && Jn(t, zr[i].priority); i++)
        ;
      zr.splice(i, 0, a), i === 0 && Pd(a);
    }
    function Ns(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ro(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ny(s), u.target.dispatchEvent(s), ry();
        } else {
          var f = Do(i);
          return f !== null && he(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Vd(e, t, a) {
      Ns(e) && a.delete(t);
    }
    function sy() {
      af = !1, Zi !== null && Ns(Zi) && (Zi = null), ki !== null && Ns(ki) && (ki = null), Di !== null && Ns(Di) && (Di = null), bn.forEach(Vd), Nr.forEach(Vd);
    }
    function Al(e, t) {
      e.blockedOn === t && (e.blockedOn = null, af || (af = !0, G.unstable_scheduleCallback(G.unstable_NormalPriority, sy)));
    }
    function Du(e) {
      if (Ms.length > 0) {
        Al(Ms[0], e);
        for (var t = 1; t < Ms.length; t++) {
          var a = Ms[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Zi !== null && Al(Zi, e), ki !== null && Al(ki, e), Di !== null && Al(Di, e);
      var i = function(p) {
        return Al(p, e);
      };
      bn.forEach(i), Nr.forEach(i);
      for (var u = 0; u < zr.length; u++) {
        var s = zr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; zr.length > 0; ) {
        var f = zr[0];
        if (f.blockedOn !== null)
          break;
        Pd(f), f.blockedOn === null && zr.shift();
      }
    }
    var or = M.ReactCurrentBatchConfig, Ct = !0;
    function Wn(e) {
      Ct = !!e;
    }
    function Fn() {
      return Ct;
    }
    function sr(e, t, a) {
      var i = lf(t), u;
      switch (i) {
        case Mr:
          u = ya;
          break;
        case _i:
          u = Co;
          break;
        case za:
        default:
          u = _n;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ya(e, t, a, i) {
      var u = Aa(), s = or.transition;
      or.transition = null;
      try {
        jn(Mr), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function Co(e, t, a, i) {
      var u = Aa(), s = or.transition;
      or.transition = null;
      try {
        jn(_i), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function _n(e, t, a, i) {
      Ct && zs(e, t, a, i);
    }
    function zs(e, t, a, i) {
      var u = Ro(e, t, a, i);
      if (u === null) {
        by(e, t, i, Oi, a), Hd(e, i);
        return;
      }
      if (oy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Hd(e, i), t & ka && Zv(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && uy(s);
          var f = Ro(e, t, a, i);
          if (f === null && by(e, t, i, Oi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var Oi = null;
    function Ro(e, t, a, i) {
      Oi = null;
      var u = pd(i), s = Ys(u);
      if (s !== null) {
        var f = pa(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ee) {
            var v = xi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var y = f.stateNode;
            if (nf(y))
              return wi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Oi = s, null;
    }
    function lf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Mr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return _i;
        case "message": {
          var t = Dc();
          switch (t) {
            case ss:
              return Mr;
            case Ll:
              return _i;
            case qi:
            case ly:
              return za;
            case mu:
              return Ua;
            default:
              return za;
          }
        }
        default:
          return za;
      }
    }
    function Us(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function na(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Bd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function To(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ga = null, xo = null, Ou = null;
    function jl(e) {
      return ga = e, xo = As(), !0;
    }
    function uf() {
      ga = null, xo = null, Ou = null;
    }
    function Ji() {
      if (Ou)
        return Ou;
      var e, t = xo, a = t.length, i, u = As(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ou = u.slice(e, p), Ou;
    }
    function As() {
      return "value" in ga ? ga.value : ga.textContent;
    }
    function Fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function wo() {
      return !0;
    }
    function js() {
      return !1;
    }
    function xr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = wo : this.isDefaultPrevented = js, this.isPropagationStopped = js, this;
      }
      return rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = wo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = wo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: wo
      }), t;
    }
    var Hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Li = xr(Hn), Ur = rt({}, Hn, {
      view: 0,
      detail: 0
    }), ra = xr(Ur), of, Fs, Lu;
    function cy(e) {
      e !== Lu && (Lu && e.type === "mousemove" ? (of = e.screenX - Lu.screenX, Fs = e.screenY - Lu.screenY) : (of = 0, Fs = 0), Lu = e);
    }
    var li = rt({}, Ur, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (cy(e), of);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fs;
      }
    }), $d = xr(li), Yd = rt({}, li, {
      dataTransfer: 0
    }), Mu = xr(Yd), Id = rt({}, Ur, {
      relatedTarget: 0
    }), el = xr(Id), eh = rt({}, Hn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), th = xr(eh), Qd = rt({}, Hn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), sf = xr(Qd), fy = rt({}, Hn, {
      data: 0
    }), nh = xr(fy), rh = nh, ah = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Nu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function dy(e) {
      if (e.key) {
        var t = ah[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Nu[e.keyCode] || "Unidentified" : "";
    }
    var bo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ih(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = bo[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return ih;
    }
    var py = rt({}, Ur, {
      key: dy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), lh = xr(py), vy = rt({}, li, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), uh = xr(vy), oh = rt({}, Ur, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), sh = xr(oh), hy = rt({}, Hn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ja = xr(hy), Wd = rt({}, li, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), my = xr(Wd), Hl = [9, 13, 27, 32], Hs = 229, tl = On && "CompositionEvent" in window, Pl = null;
    On && "documentMode" in document && (Pl = document.documentMode);
    var Gd = On && "TextEvent" in window && !Pl, cf = On && (!tl || Pl && Pl > 8 && Pl <= 11), ch = 32, ff = String.fromCharCode(ch);
    function yy() {
      ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ft("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ft("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ft("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var qd = !1;
    function fh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function df(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function pf(e, t) {
      return e === "keydown" && t.keyCode === Hs;
    }
    function Kd(e, t) {
      switch (e) {
        case "keyup":
          return Hl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Hs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function vf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function dh(e) {
      return e.locale === "ko";
    }
    var zu = !1;
    function Xd(e, t, a, i, u) {
      var s, f;
      if (tl ? s = df(t) : zu ? Kd(t, i) && (s = "onCompositionEnd") : pf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      cf && !dh(i) && (!zu && s === "onCompositionStart" ? zu = jl(u) : s === "onCompositionEnd" && zu && (f = Ji()));
      var p = Sh(a, s);
      if (p.length > 0) {
        var v = new nh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = vf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function hf(e, t) {
      switch (e) {
        case "compositionend":
          return vf(t);
        case "keypress":
          var a = t.which;
          return a !== ch ? null : (qd = !0, ff);
        case "textInput":
          var i = t.data;
          return i === ff && qd ? null : i;
        default:
          return null;
      }
    }
    function Zd(e, t) {
      if (zu) {
        if (e === "compositionend" || !tl && Kd(e, t)) {
          var a = Ji();
          return uf(), zu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!fh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return cf && !dh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function mf(e, t, a, i, u) {
      var s;
      if (Gd ? s = hf(t, i) : s = Zd(t, i), !s)
        return null;
      var f = Sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new rh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function ph(e, t, a, i, u, s, f) {
      Xd(e, t, a, i, u), mf(e, t, a, i, u);
    }
    var gy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Ps(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!gy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Sy(e) {
      if (!On)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Vs() {
      ft("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function vh(e, t, a, i) {
      oo(i);
      var u = Sh(t, "onChange");
      if (u.length > 0) {
        var s = new Li("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Vl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      vh(t, n, e, pd(e)), bv(o, t);
    }
    function o(e) {
      _0(e, 0);
    }
    function c(e) {
      var t = Rf(e);
      if (gi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    On && (m = Sy("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Vl = e, n = t, Vl.attachEvent("onpropertychange", U);
    }
    function T() {
      Vl && (Vl.detachEvent("onpropertychange", U), Vl = null, n = null);
    }
    function U(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function Q(e, t, a) {
      e === "focusin" ? (T(), E(t, a)) : e === "focusout" && T();
    }
    function q(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function I(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function de(e, t) {
      if (e === "click")
        return c(t);
    }
    function ye(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Re(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ne(e, "number", e.value);
    }
    function kn(e, t, a, i, u, s, f) {
      var p = a ? Rf(a) : window, v, y;
      if (r(p) ? v = d : Ps(p) ? m ? v = ye : (v = q, y = Q) : I(p) && (v = de), v) {
        var g = v(t, a);
        if (g) {
          vh(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Re(p);
    }
    function k() {
      Bt("onMouseEnter", ["mouseout", "mouseover"]), Bt("onMouseLeave", ["mouseout", "mouseover"]), Bt("onPointerEnter", ["pointerout", "pointerover"]), Bt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function w(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !rs(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ys(y) || dp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var x, N;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (x = a, N = A ? Ys(A) : null, N !== null) {
            var F = pa(N);
            (N !== F || N.tag !== ie && N.tag !== Qe) && (N = null);
          }
        } else
          x = null, N = a;
        if (x !== N) {
          var se = $d, ze = "onMouseLeave", be = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (se = uh, ze = "onPointerLeave", be = "onPointerEnter", Tt = "pointer");
          var gt = x == null ? g : Rf(x), D = N == null ? g : Rf(N), H = new se(ze, Tt + "leave", x, i, u);
          H.target = gt, H.relatedTarget = D;
          var O = null, K = Ys(u);
          if (K === a) {
            var ve = new se(be, Tt + "enter", N, i, u);
            ve.target = D, ve.relatedTarget = gt, O = ve;
          }
          D1(e, H, O, x, N);
        }
      }
    }
    function L(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var W = typeof Object.is == "function" ? Object.is : L;
    function ge(e, t) {
      if (W(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!br.call(t, s) || !W(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ae(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Fe(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ie(e, t) {
      for (var a = Ae(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Yi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ae(Fe(a));
      }
    }
    function er(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return zt(e, u, s, f, p);
    }
    function zt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e: for (; ; ) {
        for (var x = null; g === t && (a === 0 || g.nodeType === Yi) && (f = s + a), g === i && (u === 0 || g.nodeType === Yi) && (p = s + u), g.nodeType === Yi && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
          b = g, g = x;
        for (; ; ) {
          if (g === e)
            break e;
          if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (x = g.nextSibling) !== null)
            break;
          g = b, b = g.parentNode;
        }
        g = x;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Bl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Ie(e, f), g = Ie(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function hh(e) {
      return e && e.nodeType === Yi;
    }
    function m0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : hh(e) ? !1 : hh(t) ? m0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function f1(e) {
      return e && e.ownerDocument && m0(e.ownerDocument.documentElement, e);
    }
    function d1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function y0() {
      for (var e = window, t = _a(); t instanceof e.HTMLIFrameElement; ) {
        if (d1(t))
          e = t.contentWindow;
        else
          return t;
        t = _a(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function p1() {
      var e = y0();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? h1(e) : null
      };
    }
    function v1(e) {
      var t = y0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && f1(a)) {
        i !== null && Ey(a) && m1(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Wr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function h1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function m1(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Bl(e, t);
    }
    var y1 = On && "documentMode" in document && document.documentMode <= 11;
    function g1() {
      ft("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var yf = null, Cy = null, Jd = null, Ry = !1;
    function S1(e) {
      if ("selectionStart" in e && Ey(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function E1(e) {
      return e.window === e ? e.document : e.nodeType === Ii ? e : e.ownerDocument;
    }
    function g0(e, t, a) {
      var i = E1(a);
      if (!(Ry || yf == null || yf !== _a(i))) {
        var u = S1(yf);
        if (!Jd || !ge(Jd, u)) {
          Jd = u;
          var s = Sh(Cy, "onSelect");
          if (s.length > 0) {
            var f = new Li("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = yf;
          }
        }
      }
    }
    function C1(e, t, a, i, u, s, f) {
      var p = a ? Rf(a) : window;
      switch (t) {
        case "focusin":
          (Ps(p) || p.contentEditable === "true") && (yf = p, Cy = a, Jd = null);
          break;
        case "focusout":
          yf = null, Cy = null, Jd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, g0(e, i, u);
          break;
        case "selectionchange":
          if (y1)
            break;
        case "keydown":
        case "keyup":
          g0(e, i, u);
      }
    }
    function mh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var gf = {
      animationend: mh("Animation", "AnimationEnd"),
      animationiteration: mh("Animation", "AnimationIteration"),
      animationstart: mh("Animation", "AnimationStart"),
      transitionend: mh("Transition", "TransitionEnd")
    }, Ty = {}, S0 = {};
    On && (S0 = document.createElement("div").style, "AnimationEvent" in window || (delete gf.animationend.animation, delete gf.animationiteration.animation, delete gf.animationstart.animation), "TransitionEvent" in window || delete gf.transitionend.transition);
    function yh(e) {
      if (Ty[e])
        return Ty[e];
      if (!gf[e])
        return e;
      var t = gf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in S0)
          return Ty[e] = t[a];
      return e;
    }
    var E0 = yh("animationend"), C0 = yh("animationiteration"), R0 = yh("animationstart"), T0 = yh("transitionend"), x0 = /* @__PURE__ */ new Map(), w0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      x0.set(e, t), ft(t, [e]);
    }
    function R1() {
      for (var e = 0; e < w0.length; e++) {
        var t = w0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(E0, "onAnimationEnd"), _o(C0, "onAnimationIteration"), _o(R0, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(T0, "onTransitionEnd");
    }
    function T1(e, t, a, i, u, s, f) {
      var p = x0.get(t);
      if (p !== void 0) {
        var v = Li, y = t;
        switch (t) {
          case "keypress":
            if (Fl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = lh;
            break;
          case "focusin":
            y = "focus", v = el;
            break;
          case "focusout":
            y = "blur", v = el;
            break;
          case "beforeblur":
          case "afterblur":
            v = el;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = $d;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Mu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = sh;
            break;
          case E0:
          case C0:
          case R0:
            v = th;
            break;
          case T0:
            v = ja;
            break;
          case "scroll":
            v = ra;
            break;
          case "wheel":
            v = my;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = sf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = uh;
            break;
        }
        var g = (s & ka) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = _1(a, p, i.type, g, b);
          if (x.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: x
            });
          }
        }
      }
    }
    R1(), k(), Vs(), g1(), yy();
    function x1(e, t, a, i, u, s, f) {
      T1(e, t, a, i, u, s);
      var p = (s & dd) === 0;
      p && (w(e, t, a, i, u), kn(e, t, a, i, u), C1(e, t, a, i, u), ph(e, t, a, i, u));
    }
    var ep = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], xy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ep));
    function b0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ci(i, t, void 0, e), e.currentTarget = null;
    }
    function w1(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          b0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, x = g.currentTarget, N = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          b0(e, N, x), i = b;
        }
    }
    function _0(e, t) {
      for (var a = (t & ka) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        w1(s, f, a);
      }
      ls();
    }
    function b1(e, t, a, i, u) {
      var s = pd(a), f = [];
      x1(f, e, i, a, s, t), _0(f, t);
    }
    function Sn(e, t) {
      xy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = nx(t), u = O1(e);
      i.has(u) || (k0(t, e, mc, a), i.add(u));
    }
    function wy(e, t, a) {
      xy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ka), k0(a, e, i, t);
    }
    var gh = "_reactListening" + Math.random().toString(36).slice(2);
    function tp(e) {
      if (!e[gh]) {
        e[gh] = !0, it.forEach(function(a) {
          a !== "selectionchange" && (xy.has(a) || wy(a, !1, e), wy(a, !0, e));
        });
        var t = e.nodeType === Ii ? e : e.ownerDocument;
        t !== null && (t[gh] || (t[gh] = !0, wy("selectionchange", !1, t)));
      }
    }
    function k0(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Bd(e, t, s, f) : na(e, t, s) : f !== void 0 ? To(e, t, s, f) : Us(e, t, s);
    }
    function D0(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
      var s = i;
      if (!(t & fd) && !(t & mc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === J || v === Ce) {
              var y = p.stateNode.containerInfo;
              if (D0(y, f))
                break;
              if (v === Ce)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === J || b === Ce) {
                    var x = g.stateNode.containerInfo;
                    if (D0(x, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var N = Ys(y);
                if (N === null)
                  return;
                var A = N.tag;
                if (A === ie || A === Qe) {
                  p = s = N;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      bv(function() {
        return b1(e, t, a, s);
      });
    }
    function np(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function _1(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, x = b.stateNode, N = b.tag;
        if (N === ie && x !== null && (g = x, p !== null)) {
          var A = wl(y, p);
          A != null && v.push(np(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ie && f !== null) {
          var v = f, y = wl(u, a);
          y != null && i.unshift(np(u, y, v));
          var g = wl(u, t);
          g != null && i.push(np(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Sf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ie);
      return e || null;
    }
    function k1(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Sf(s))
        u++;
      for (var f = 0, p = i; p; p = Sf(p))
        f++;
      for (; u - f > 0; )
        a = Sf(a), u--;
      for (; f - u > 0; )
        i = Sf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Sf(a), i = Sf(i);
      }
      return null;
    }
    function O0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ie && g !== null) {
          var x = g;
          if (u) {
            var N = wl(p, s);
            N != null && f.unshift(np(p, N, x));
          } else if (!u) {
            var A = wl(p, s);
            A != null && f.push(np(p, A, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function D1(e, t, a, i, u) {
      var s = i && u ? k1(i, u) : null;
      i !== null && O0(e, t, i, s, !1), u !== null && a !== null && O0(e, a, u, s, !0);
    }
    function O1(e, t) {
      return e + "__bubble";
    }
    var Fa = !1, rp = "dangerouslySetInnerHTML", Eh = "suppressContentEditableWarning", ko = "suppressHydrationWarning", L0 = "autoFocus", Bs = "children", $s = "style", Ch = "__html", _y, Rh, ap, M0, Th, N0, z0;
    _y = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Rh = function(e, t) {
      od(e, t), vc(e, t), Tv(e, t, {
        registrationNameDependencies: nt,
        possibleRegistrationNames: lt
      });
    }, N0 = On && !document.documentMode, ap = function(e, t, a) {
      if (!Fa) {
        var i = xh(a), u = xh(t);
        u !== i && (Fa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, M0 = function(e) {
      if (!Fa) {
        Fa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Th = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, z0 = function(e, t) {
      var a = e.namespaceURI === $i ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var L1 = /\r\n?/g, M1 = /\u0000|\uFFFD/g;
    function xh(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(L1, `
`).replace(M1, "");
    }
    function wh(e, t, a, i) {
      var u = xh(t), s = xh(e);
      if (s !== u && (i && (Fa || (Fa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Te))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function U0(e) {
      return e.nodeType === Ii ? e : e.ownerDocument;
    }
    function N1() {
    }
    function bh(e) {
      e.onclick = N1;
    }
    function z1(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === $s)
            f && Object.freeze(f), yv(t, f);
          else if (s === rp) {
            var p = f ? f[Ch] : void 0;
            p != null && iv(t, p);
          } else if (s === Bs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ao(t, f);
            } else typeof f == "number" && ao(t, "" + f);
          else s === Eh || s === ko || s === L0 || (nt.hasOwnProperty(s) ? f != null && (typeof f != "function" && Th(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && _r(t, s, f, u));
        }
    }
    function U1(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === $s ? yv(e, f) : s === rp ? iv(e, f) : s === Bs ? ao(e, f) : _r(e, s, f, i);
      }
    }
    function A1(e, t, a, i) {
      var u, s = U0(a), f, p = i;
      if (p === $i && (p = td(e)), p === $i) {
        if (u = Tl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === $i && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !br.call(_y, e) && (_y[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function j1(e, t) {
      return U0(t).createTextNode(e);
    }
    function F1(e, t, a, i) {
      var u = Tl(t, a);
      Rh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ep.length; f++)
            Sn(ep[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          ei(e, a), s = ro(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a), s = a;
          break;
        case "select":
          ou(e, a), s = Ko(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Zf(e, a), s = Xf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (dc(t, s), z1(t, e, i, s, u), t) {
        case "input":
          Ja(e), z(e, a, !1);
          break;
        case "textarea":
          Ja(e), rv(e);
          break;
        case "option":
          an(e, a);
          break;
        case "select":
          qf(e, a);
          break;
        default:
          typeof s.onClick == "function" && bh(e);
          break;
      }
    }
    function H1(e, t, a, i, u) {
      Rh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ro(e, a), p = ro(e, i), s = [];
          break;
        case "select":
          f = Ko(e, a), p = Ko(e, i), s = [];
          break;
        case "textarea":
          f = Xf(e, a), p = Xf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && bh(e);
          break;
      }
      dc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === $s) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === rp || v === Bs || v === Eh || v === ko || v === L0 || (nt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === N || x == null && N == null))
          if (v === $s)
            if (x && Object.freeze(x), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && N[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === rp) {
            var A = x ? x[Ch] : void 0, F = N ? N[Ch] : void 0;
            A != null && F !== A && (s = s || []).push(v, A);
          } else v === Bs ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === Eh || v === ko || (nt.hasOwnProperty(v) ? (x != null && (typeof x != "function" && Th(v, x), v === "onScroll" && Sn("scroll", e)), !s && N !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (ey(g, p[$s]), (s = s || []).push($s, g)), s;
    }
    function P1(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Tl(a, i), f = Tl(a, u);
      switch (U1(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          nv(e, u);
          break;
        case "select":
          sc(e, u);
          break;
      }
    }
    function V1(e) {
      {
        var t = e.toLowerCase();
        return ts.hasOwnProperty(t) && ts[t] || null;
      }
    }
    function B1(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Tl(t, a), Rh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < ep.length; y++)
            Sn(ep[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          ei(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a);
          break;
        case "select":
          ou(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Zf(e, a), Sn("invalid", e);
          break;
      }
      dc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var x = g[b].name.toLowerCase();
          switch (x) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var N = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var F = a[A];
          if (A === Bs)
            typeof F == "string" ? e.textContent !== F && (a[ko] !== !0 && wh(e.textContent, F, s, f), N = [Bs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[ko] !== !0 && wh(e.textContent, F, s, f), N = [Bs, "" + F]);
          else if (nt.hasOwnProperty(A))
            F != null && (typeof F != "function" && Th(A, F), A === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var se = void 0, ze = nn(A);
            if (a[ko] !== !0) {
              if (!(A === Eh || A === ko || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === rp) {
                  var be = e.innerHTML, Tt = F ? F[Ch] : void 0;
                  if (Tt != null) {
                    var gt = z0(e, Tt);
                    gt !== be && ap(A, be, gt);
                  }
                } else if (A === $s) {
                  if (v.delete(A), N0) {
                    var D = Zm(F);
                    se = e.getAttribute("style"), D !== se && ap(A, se, D);
                  }
                } else if (p && !_)
                  v.delete(A.toLowerCase()), se = tu(e, A, F), F !== se && ap(A, se, F);
                else if (!vn(A, ze, p) && !Kn(A, F, ze, p)) {
                  var H = !1;
                  if (ze !== null)
                    v.delete(ze.attributeName), se = vl(e, A, F, ze);
                  else {
                    var O = i;
                    if (O === $i && (O = td(t)), O === $i)
                      v.delete(A.toLowerCase());
                    else {
                      var K = V1(A);
                      K !== null && K !== A && (H = !0, v.delete(K)), v.delete(A);
                    }
                    se = tu(e, A, F);
                  }
                  var ve = _;
                  !ve && F !== se && !H && ap(A, se, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[ko] !== !0 && M0(v), t) {
        case "input":
          Ja(e), z(e, a, !0);
          break;
        case "textarea":
          Ja(e), rv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && bh(e);
          break;
      }
      return N;
    }
    function $1(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t, a) {
      {
        if (Fa)
          return;
        Fa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || Fa)
          return;
        Fa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Y1(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          Gm(e, a);
          return;
        case "select":
          Kf(e, a);
          return;
      }
    }
    var ip = function() {
    }, lp = function() {
    };
    {
      var I1 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], A0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Q1 = A0.concat(["button"]), W1 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], j0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      lp = function(e, t) {
        var a = rt({}, e || j0), i = {
          tag: t
        };
        return A0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Q1.indexOf(t) !== -1 && (a.pTagInButtonScope = null), I1.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var G1 = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return W1.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, q1 = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, F0 = {};
      ip = function(e, t, a) {
        a = a || j0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = G1(e, u) ? null : i, f = s ? null : q1(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!F0[y]) {
            F0[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var _h = "suppressHydrationWarning", kh = "$", Dh = "/$", up = "$?", op = "$!", K1 = "style", My = null, Ny = null;
    function X1(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ii:
        case rd: {
          t = i === Ii ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : nd(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = nd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = lp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function Z1(e, t, a) {
      {
        var i = e, u = nd(i.namespace, t), s = lp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function xk(e) {
      return e;
    }
    function J1(e) {
      My = Fn(), Ny = p1();
      var t = null;
      return Wn(!1), t;
    }
    function eT(e) {
      v1(Ny), Wn(My), My = null, Ny = null;
    }
    function tT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ip(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = lp(f.ancestorInfo, e);
          ip(null, p, v);
        }
        s = f.namespace;
      }
      var y = A1(e, t, a, s);
      return fp(u, y), Vy(y, t), y;
    }
    function nT(e, t) {
      e.appendChild(t);
    }
    function rT(e, t, a, i, u) {
      switch (F1(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function aT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = lp(f.ancestorInfo, t);
          ip(null, p, v);
        }
      }
      return H1(e, t, a, i);
    }
    function zy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function iT(e, t, a, i) {
      {
        var u = a;
        ip(null, e, u.ancestorInfo);
      }
      var s = j1(e, t);
      return fp(i, s), s;
    }
    function lT() {
      var e = window.event;
      return e === void 0 ? za : lf(e.type);
    }
    var Uy = typeof setTimeout == "function" ? setTimeout : void 0, uT = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, H0 = typeof Promise == "function" ? Promise : void 0, oT = typeof queueMicrotask == "function" ? queueMicrotask : typeof H0 < "u" ? function(e) {
      return H0.resolve(null).then(e).catch(sT);
    } : Uy;
    function sT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function cT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function fT(e, t, a, i, u, s) {
      P1(e, t, a, i, u), Vy(e, u);
    }
    function P0(e) {
      ao(e, "");
    }
    function dT(e, t, a) {
      e.nodeValue = a;
    }
    function pT(e, t) {
      e.appendChild(t);
    }
    function vT(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function hT(e, t, a) {
      e.insertBefore(t, a);
    }
    function mT(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function yT(e, t) {
      e.removeChild(t);
    }
    function gT(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Mn) {
          var s = u.data;
          if (s === Dh)
            if (i === 0) {
              e.removeChild(u), Du(t);
              return;
            } else
              i--;
          else (s === kh || s === up || s === op) && i++;
        }
        a = u;
      } while (a);
      Du(t);
    }
    function ST(e, t) {
      e.nodeType === Mn ? jy(e.parentNode, t) : e.nodeType === Wr && jy(e, t), Du(e);
    }
    function ET(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function CT(e) {
      e.nodeValue = "";
    }
    function RT(e, t) {
      e = e;
      var a = t[K1], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = fc("display", i);
    }
    function TT(e, t) {
      e.nodeValue = t;
    }
    function xT(e) {
      e.nodeType === Wr ? e.textContent = "" : e.nodeType === Ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function wT(e, t, a) {
      return e.nodeType !== Wr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function bT(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function _T(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function V0(e) {
      return e.data === up;
    }
    function Fy(e) {
      return e.data === op;
    }
    function kT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function DT(e, t) {
      e._reactRetry = t;
    }
    function Oh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Wr || t === Yi)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === kh || a === op || a === up)
            break;
          if (a === Dh)
            return null;
        }
      }
      return e;
    }
    function sp(e) {
      return Oh(e.nextSibling);
    }
    function OT(e) {
      return Oh(e.firstChild);
    }
    function LT(e) {
      return Oh(e.firstChild);
    }
    function MT(e) {
      return Oh(e.nextSibling);
    }
    function NT(e, t, a, i, u, s, f) {
      fp(s, e), Vy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & pt) !== De;
      return B1(e, t, a, p, i, y, f);
    }
    function zT(e, t, a, i) {
      return fp(a, e), a.mode & pt, $1(e, t);
    }
    function UT(e, t) {
      fp(t, e);
    }
    function AT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Dh) {
            if (a === 0)
              return sp(t);
            a--;
          } else (i === kh || i === op || i === up) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function B0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === kh || i === op || i === up) {
            if (a === 0)
              return t;
            a--;
          } else i === Dh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function jT(e) {
      Du(e);
    }
    function FT(e) {
      Du(e);
    }
    function HT(e) {
      return e !== "head" && e !== "body";
    }
    function PT(e, t, a, i) {
      var u = !0;
      wh(t.nodeValue, a, i, u);
    }
    function VT(e, t, a, i, u, s) {
      if (t[_h] !== !0) {
        var f = !0;
        wh(i.nodeValue, u, s, f);
      }
    }
    function BT(e, t) {
      t.nodeType === Wr ? ky(e, t) : t.nodeType === Mn || Dy(e, t);
    }
    function $T(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Wr ? ky(a, t) : t.nodeType === Mn || Dy(a, t));
      }
    }
    function YT(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === Wr ? ky(a, i) : i.nodeType === Mn || Dy(a, i));
    }
    function IT(e, t, a) {
      Oy(e, t);
    }
    function QT(e, t) {
      Ly(e, t);
    }
    function WT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function GT(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function qT(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Oy(a, i);
    }
    function KT(e, t, a, i, u) {
      (u || t[_h] !== !0) && Ly(a, i);
    }
    function XT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function ZT(e) {
      tp(e);
    }
    var Ef = Math.random().toString(36).slice(2), Cf = "__reactFiber$" + Ef, Hy = "__reactProps$" + Ef, cp = "__reactContainer$" + Ef, Py = "__reactEvents$" + Ef, JT = "__reactListeners$" + Ef, ex = "__reactHandles$" + Ef;
    function tx(e) {
      delete e[Cf], delete e[Hy], delete e[Py], delete e[JT], delete e[ex];
    }
    function fp(e, t) {
      t[Cf] = e;
    }
    function Lh(e, t) {
      t[cp] = e;
    }
    function $0(e) {
      e[cp] = null;
    }
    function dp(e) {
      return !!e[cp];
    }
    function Ys(e) {
      var t = e[Cf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[cp] || a[Cf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = B0(e); u !== null; ) {
              var s = u[Cf];
              if (s)
                return s;
              u = B0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[Cf] || e[cp];
      return t && (t.tag === ie || t.tag === Qe || t.tag === Ee || t.tag === J) ? t : null;
    }
    function Rf(e) {
      if (e.tag === ie || e.tag === Qe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mh(e) {
      return e[Hy] || null;
    }
    function Vy(e, t) {
      e[Hy] = t;
    }
    function nx(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var Y0 = {}, I0 = M.ReactDebugCurrentFrame;
    function Nh(e) {
      if (e) {
        var t = e._owner, a = Pi(e.type, e._source, t ? t.type : null);
        I0.setExtraStackFrame(a);
      } else
        I0.setExtraStackFrame(null);
    }
    function nl(e, t, a, i, u) {
      {
        var s = Function.call.bind(br);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Nh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Nh(null)), p instanceof Error && !(p.message in Y0) && (Y0[p.message] = !0, Nh(u), S("Failed %s type: %s", a, p.message), Nh(null));
          }
      }
    }
    var By = [], zh;
    zh = [];
    var Uu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (Uu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== zh[Uu] && S("Unexpected Fiber popped."), e.current = By[Uu], By[Uu] = null, zh[Uu] = null, Uu--;
    }
    function ia(e, t, a) {
      Uu++, By[Uu] = e.current, zh[Uu] = a, e.current = t;
    }
    var $y;
    $y = {};
    var ui = {};
    Object.freeze(ui);
    var Au = Oo(ui), $l = Oo(!1), Yy = ui;
    function Tf(e, t, a) {
      return a && Yl(t) ? Yy : Au.current;
    }
    function Q0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function xf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ui;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = We(e) || "Unknown";
          nl(i, s, "context", p);
        }
        return u && Q0(e, t, s), s;
      }
    }
    function Uh() {
      return $l.current;
    }
    function Yl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ah(e) {
      aa($l, e), aa(Au, e);
    }
    function Iy(e) {
      aa($l, e), aa(Au, e);
    }
    function W0(e, t, a) {
      {
        if (Au.current !== ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(Au, t, e), ia($l, a, e);
      }
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = We(e) || "Unknown";
            $y[s] || ($y[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((We(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = We(e) || "Unknown";
          nl(u, f, "child context", v);
        }
        return rt({}, a, f);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ui;
        return Yy = Au.current, ia(Au, a, e), ia($l, $l.current, e), !0;
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = G0(e, t, Yy);
          i.__reactInternalMemoizedMergedChildContext = u, aa($l, e), aa(Au, e), ia(Au, u, e), ia($l, a, e);
        } else
          aa($l, e), ia($l, a, e);
      }
    }
    function rx(e) {
      {
        if (!hu(e) || e.tag !== fe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case fe: {
              var a = t.type;
              if (Yl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, Fh = 1, ju = null, Qy = !1, Wy = !1;
    function K0(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    function ax(e) {
      Qy = !0, K0(e);
    }
    function X0() {
      Qy && Mo();
    }
    function Mo() {
      if (!Wy && ju !== null) {
        Wy = !0;
        var e = 0, t = Aa();
        try {
          var a = !0, i = ju;
          for (jn(Mr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ju = null, Qy = !1;
        } catch (s) {
          throw ju !== null && (ju = ju.slice(e + 1)), hd(ss, Mo), s;
        } finally {
          jn(t), Wy = !1;
        }
      }
      return null;
    }
    var wf = [], bf = 0, Hh = null, Ph = 0, Mi = [], Ni = 0, Is = null, Fu = 1, Hu = "";
    function ix(e) {
      return Ws(), (e.flags & Ri) !== ke;
    }
    function lx(e) {
      return Ws(), Ph;
    }
    function ux() {
      var e = Hu, t = Fu, a = t & ~ox(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      Ws(), wf[bf++] = Ph, wf[bf++] = Hh, Hh = e, Ph = t;
    }
    function Z0(e, t, a) {
      Ws(), Mi[Ni++] = Fu, Mi[Ni++] = Hu, Mi[Ni++] = Is, Is = e;
      var i = Fu, u = Hu, s = Vh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Vh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), x = f >> y, N = s - y, A = Vh(t) + N, F = p << N, se = F | x, ze = b + u;
        Fu = 1 << A | se, Hu = ze;
      } else {
        var be = p << s, Tt = be | f, gt = u;
        Fu = 1 << v | Tt, Hu = gt;
      }
    }
    function Gy(e) {
      Ws();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Qs(e, a), Z0(e, a, i);
      }
    }
    function Vh(e) {
      return 32 - Un(e);
    }
    function ox(e) {
      return 1 << Vh(e) - 1;
    }
    function qy(e) {
      for (; e === Hh; )
        Hh = wf[--bf], wf[bf] = null, Ph = wf[--bf], wf[bf] = null;
      for (; e === Is; )
        Is = Mi[--Ni], Mi[Ni] = null, Hu = Mi[--Ni], Mi[Ni] = null, Fu = Mi[--Ni], Mi[Ni] = null;
    }
    function sx() {
      return Ws(), Is !== null ? {
        id: Fu,
        overflow: Hu
      } : null;
    }
    function cx(e, t) {
      Ws(), Mi[Ni++] = Fu, Mi[Ni++] = Hu, Mi[Ni++] = Is, Fu = t.id, Hu = t.overflow, Is = e;
    }
    function Ws() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, zi = null, rl = !1, Gs = !1, No = null;
    function fx() {
      rl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function J0() {
      Gs = !0;
    }
    function dx() {
      return Gs;
    }
    function px(e) {
      var t = e.stateNode.containerInfo;
      return zi = LT(t), Ar = e, rl = !0, No = null, Gs = !1, !0;
    }
    function vx(e, t, a) {
      return zi = MT(t), Ar = e, rl = !0, No = null, Gs = !1, a !== null && cx(e, a), !0;
    }
    function eE(e, t) {
      switch (e.tag) {
        case J: {
          BT(e.stateNode.containerInfo, t);
          break;
        }
        case ie: {
          var a = (e.mode & pt) !== De;
          YT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ee: {
          var i = e.memoizedState;
          i.dehydrated !== null && $T(i.dehydrated, t);
          break;
        }
      }
    }
    function tE(e, t) {
      eE(e, t);
      var a = g_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Da) : i.push(a);
    }
    function Ky(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ie:
                var i = t.type;
                t.pendingProps, IT(a, i);
                break;
              case Qe:
                var u = t.pendingProps;
                QT(a, u);
                break;
            }
            break;
          }
          case ie: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ie: {
                var v = t.type, y = t.pendingProps, g = (e.mode & pt) !== De;
                qT(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Qe: {
                var b = t.pendingProps, x = (e.mode & pt) !== De;
                KT(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case Ee: {
            var N = e.memoizedState, A = N.dehydrated;
            if (A !== null) switch (t.tag) {
              case ie:
                var F = t.type;
                t.pendingProps, WT(A, F);
                break;
              case Qe:
                var se = t.pendingProps;
                GT(A, se);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function nE(e, t) {
      t.flags = t.flags & ~qr | mn, Ky(e, t);
    }
    function rE(e, t) {
      switch (e.tag) {
        case ie: {
          var a = e.type;
          e.pendingProps;
          var i = wT(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, zi = OT(i), !0) : !1;
        }
        case Qe: {
          var u = e.pendingProps, s = bT(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, zi = null, !0) : !1;
        }
        case Ee: {
          var f = _T(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: sx(),
              retryLane: Jr
            };
            e.memoizedState = p;
            var v = S_(f);
            return v.return = e, e.child = v, Ar = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Xy(e) {
      return (e.mode & pt) !== De && (e.flags & _e) === ke;
    }
    function Zy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Jy(e) {
      if (rl) {
        var t = zi;
        if (!t) {
          Xy(e) && (Ky(Ar, e), Zy()), nE(Ar, e), rl = !1, Ar = e;
          return;
        }
        var a = t;
        if (!rE(e, t)) {
          Xy(e) && (Ky(Ar, e), Zy()), t = sp(a);
          var i = Ar;
          if (!t || !rE(e, t)) {
            nE(Ar, e), rl = !1, Ar = e;
            return;
          }
          tE(i, a);
        }
      }
    }
    function hx(e, t, a) {
      var i = e.stateNode, u = !Gs, s = NT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function mx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = zT(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case J: {
              var s = u.stateNode.containerInfo, f = (u.mode & pt) !== De;
              PT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ie: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & pt) !== De;
              VT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function yx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      UT(a, e);
    }
    function gx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return AT(a);
    }
    function aE(e) {
      for (var t = e.return; t !== null && t.tag !== ie && t.tag !== J && t.tag !== Ee; )
        t = t.return;
      Ar = t;
    }
    function Bh(e) {
      if (e !== Ar)
        return !1;
      if (!rl)
        return aE(e), rl = !0, !1;
      if (e.tag !== J && (e.tag !== ie || HT(e.type) && !zy(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (Xy(e))
            iE(e), Zy();
          else
            for (; t; )
              tE(e, t), t = sp(t);
      }
      return aE(e), e.tag === Ee ? zi = gx(e) : zi = Ar ? sp(e.stateNode) : null, !0;
    }
    function Sx() {
      return rl && zi !== null;
    }
    function iE(e) {
      for (var t = zi; t; )
        eE(e, t), t = sp(t);
    }
    function _f() {
      Ar = null, zi = null, rl = !1, Gs = !1;
    }
    function lE() {
      No !== null && (JC(No), No = null);
    }
    function jr() {
      return rl;
    }
    function eg(e) {
      No === null ? No = [e] : No.push(e);
    }
    var Ex = M.ReactCurrentBatchConfig, Cx = null;
    function Rx() {
      return Ex.transition;
    }
    var al = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Tx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gt && (t = a), a = a.return;
        return t;
      }, qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], Ks = /* @__PURE__ */ new Set();
      al.recordUnsafeLifecycleWarnings = function(e, t) {
        Ks.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillMount == "function" && vp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && mp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillUpdate == "function" && gp.push(e));
      }, al.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(x) {
          e.add(We(x) || "Component"), Ks.add(x.type);
        }), pp = []);
        var t = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(x) {
          t.add(We(x) || "Component"), Ks.add(x.type);
        }), vp = []);
        var a = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(x) {
          a.add(We(x) || "Component"), Ks.add(x.type);
        }), hp = []);
        var i = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(x) {
          i.add(We(x) || "Component"), Ks.add(x.type);
        }), mp = []);
        var u = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(x) {
          u.add(We(x) || "Component"), Ks.add(x.type);
        }), yp = []);
        var s = /* @__PURE__ */ new Set();
        if (gp.length > 0 && (gp.forEach(function(x) {
          s.add(We(x) || "Component"), Ks.add(x.type);
        }), gp = []), t.size > 0) {
          var f = qs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = qs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = qs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = qs(e);
          Oe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = qs(a);
          Oe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = qs(u);
          Oe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var $h = /* @__PURE__ */ new Map(), uE = /* @__PURE__ */ new Set();
      al.recordLegacyContextWarning = function(e, t) {
        var a = Tx(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!uE.has(e.type)) {
          var i = $h.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], $h.set(a, i)), i.push(e));
        }
      }, al.flushLegacyContextWarning = function() {
        $h.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(We(s) || "Component"), uE.add(s.type);
            });
            var u = qs(i);
            try {
              It(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              cn();
            }
          }
        });
      }, al.discardPendingWarnings = function() {
        pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], $h = /* @__PURE__ */ new Map();
      };
    }
    var tg, ng, rg, ag, ig, oE = function(e, t) {
    };
    tg = !1, ng = !1, rg = {}, ag = {}, ig = {}, oE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = We(t) || "Component";
        ag[a] || (ag[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function xx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Sp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Gt || P) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== fe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !xx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = We(e) || "Component";
          rg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), rg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== fe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ci(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var x = v.refs;
            b === null ? delete x[y] : x[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Yh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ih(e) {
      {
        var t = We(e) || "Component";
        if (ig[t])
          return;
        ig[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function sE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function cE(e) {
      function t(D, H) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [H], D.flags |= Da) : O.push(H);
        }
      }
      function a(D, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, H) {
        for (var O = /* @__PURE__ */ new Map(), K = H; K !== null; )
          K.key !== null ? O.set(K.key, K) : O.set(K.index, K), K = K.sibling;
        return O;
      }
      function u(D, H) {
        var O = ic(D, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, H, O) {
        if (D.index = O, !e)
          return D.flags |= Ri, H;
        var K = D.alternate;
        if (K !== null) {
          var ve = K.index;
          return ve < H ? (D.flags |= mn, H) : ve;
        } else
          return D.flags |= mn, H;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= mn), D;
      }
      function p(D, H, O, K) {
        if (H === null || H.tag !== Qe) {
          var ve = e0(O, D.mode, K);
          return ve.return = D, ve;
        } else {
          var ce = u(H, O);
          return ce.return = D, ce;
        }
      }
      function v(D, H, O, K) {
        var ve = O.type;
        if (ve === di)
          return g(D, H, O.props.children, K, O.key);
        if (H !== null && (H.elementType === ve || // Keep this check inline so it only runs on the false path:
        hR(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ve == "object" && ve !== null && ve.$$typeof === Ge && sE(ve) === H.type)) {
          var ce = u(H, O.props);
          return ce.ref = Sp(D, H, O), ce.return = D, ce._debugSource = O._source, ce._debugOwner = O._owner, ce;
        }
        var $e = JS(O, D.mode, K);
        return $e.ref = Sp(D, H, O), $e.return = D, $e;
      }
      function y(D, H, O, K) {
        if (H === null || H.tag !== Ce || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var ve = t0(O, D.mode, K);
          return ve.return = D, ve;
        } else {
          var ce = u(H, O.children || []);
          return ce.return = D, ce;
        }
      }
      function g(D, H, O, K, ve) {
        if (H === null || H.tag !== yt) {
          var ce = Yo(O, D.mode, K, ve);
          return ce.return = D, ce;
        } else {
          var $e = u(H, O);
          return $e.return = D, $e;
        }
      }
      function b(D, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var K = e0("" + H, D.mode, O);
          return K.return = D, K;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case kr: {
              var ve = JS(H, D.mode, O);
              return ve.ref = Sp(D, null, H), ve.return = D, ve;
            }
            case rr: {
              var ce = t0(H, D.mode, O);
              return ce.return = D, ce;
            }
            case Ge: {
              var $e = H._payload, Ke = H._init;
              return b(D, Ke($e), O);
            }
          }
          if (ot(H) || Ze(H)) {
            var Kt = Yo(H, D.mode, O, null);
            return Kt.return = D, Kt;
          }
          Yh(D, H);
        }
        return typeof H == "function" && Ih(D), null;
      }
      function x(D, H, O, K) {
        var ve = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return ve !== null ? null : p(D, H, "" + O, K);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case kr:
              return O.key === ve ? v(D, H, O, K) : null;
            case rr:
              return O.key === ve ? y(D, H, O, K) : null;
            case Ge: {
              var ce = O._payload, $e = O._init;
              return x(D, H, $e(ce), K);
            }
          }
          if (ot(O) || Ze(O))
            return ve !== null ? null : g(D, H, O, K, null);
          Yh(D, O);
        }
        return typeof O == "function" && Ih(D), null;
      }
      function N(D, H, O, K, ve) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var ce = D.get(O) || null;
          return p(H, ce, "" + K, ve);
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case kr: {
              var $e = D.get(K.key === null ? O : K.key) || null;
              return v(H, $e, K, ve);
            }
            case rr: {
              var Ke = D.get(K.key === null ? O : K.key) || null;
              return y(H, Ke, K, ve);
            }
            case Ge:
              var Kt = K._payload, Ut = K._init;
              return N(D, H, O, Ut(Kt), ve);
          }
          if (ot(K) || Ze(K)) {
            var Gn = D.get(O) || null;
            return g(H, Gn, K, ve, null);
          }
          Yh(H, K);
        }
        return typeof K == "function" && Ih(H), null;
      }
      function A(D, H, O) {
        {
          if (typeof D != "object" || D === null)
            return H;
          switch (D.$$typeof) {
            case kr:
            case rr:
              oE(D, O);
              var K = D.key;
              if (typeof K != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(K);
                break;
              }
              if (!H.has(K)) {
                H.add(K);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", K);
              break;
            case Ge:
              var ve = D._payload, ce = D._init;
              A(ce(ve), H, O);
              break;
          }
        }
        return H;
      }
      function F(D, H, O, K) {
        for (var ve = null, ce = 0; ce < O.length; ce++) {
          var $e = O[ce];
          ve = A($e, ve, D);
        }
        for (var Ke = null, Kt = null, Ut = H, Gn = 0, At = 0, Pn = null; Ut !== null && At < O.length; At++) {
          Ut.index > At ? (Pn = Ut, Ut = null) : Pn = Ut.sibling;
          var ua = x(D, Ut, O[At], K);
          if (ua === null) {
            Ut === null && (Ut = Pn);
            break;
          }
          e && Ut && ua.alternate === null && t(D, Ut), Gn = s(ua, Gn, At), Kt === null ? Ke = ua : Kt.sibling = ua, Kt = ua, Ut = Pn;
        }
        if (At === O.length) {
          if (a(D, Ut), jr()) {
            var Yr = At;
            Qs(D, Yr);
          }
          return Ke;
        }
        if (Ut === null) {
          for (; At < O.length; At++) {
            var si = b(D, O[At], K);
            si !== null && (Gn = s(si, Gn, At), Kt === null ? Ke = si : Kt.sibling = si, Kt = si);
          }
          if (jr()) {
            var Ra = At;
            Qs(D, Ra);
          }
          return Ke;
        }
        for (var Ta = i(D, Ut); At < O.length; At++) {
          var oa = N(Ta, D, At, O[At], K);
          oa !== null && (e && oa.alternate !== null && Ta.delete(oa.key === null ? At : oa.key), Gn = s(oa, Gn, At), Kt === null ? Ke = oa : Kt.sibling = oa, Kt = oa);
        }
        if (e && Ta.forEach(function(Qf) {
          return t(D, Qf);
        }), jr()) {
          var Qu = At;
          Qs(D, Qu);
        }
        return Ke;
      }
      function se(D, H, O, K) {
        var ve = Ze(O);
        if (typeof ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (ng || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ng = !0), O.entries === ve && (tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tg = !0);
          var ce = ve.call(O);
          if (ce)
            for (var $e = null, Ke = ce.next(); !Ke.done; Ke = ce.next()) {
              var Kt = Ke.value;
              $e = A(Kt, $e, D);
            }
        }
        var Ut = ve.call(O);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, At = null, Pn = H, ua = 0, Yr = 0, si = null, Ra = Ut.next(); Pn !== null && !Ra.done; Yr++, Ra = Ut.next()) {
          Pn.index > Yr ? (si = Pn, Pn = null) : si = Pn.sibling;
          var Ta = x(D, Pn, Ra.value, K);
          if (Ta === null) {
            Pn === null && (Pn = si);
            break;
          }
          e && Pn && Ta.alternate === null && t(D, Pn), ua = s(Ta, ua, Yr), At === null ? Gn = Ta : At.sibling = Ta, At = Ta, Pn = si;
        }
        if (Ra.done) {
          if (a(D, Pn), jr()) {
            var oa = Yr;
            Qs(D, oa);
          }
          return Gn;
        }
        if (Pn === null) {
          for (; !Ra.done; Yr++, Ra = Ut.next()) {
            var Qu = b(D, Ra.value, K);
            Qu !== null && (ua = s(Qu, ua, Yr), At === null ? Gn = Qu : At.sibling = Qu, At = Qu);
          }
          if (jr()) {
            var Qf = Yr;
            Qs(D, Qf);
          }
          return Gn;
        }
        for (var Xp = i(D, Pn); !Ra.done; Yr++, Ra = Ut.next()) {
          var Zl = N(Xp, D, Yr, Ra.value, K);
          Zl !== null && (e && Zl.alternate !== null && Xp.delete(Zl.key === null ? Yr : Zl.key), ua = s(Zl, ua, Yr), At === null ? Gn = Zl : At.sibling = Zl, At = Zl);
        }
        if (e && Xp.forEach(function(K_) {
          return t(D, K_);
        }), jr()) {
          var q_ = Yr;
          Qs(D, q_);
        }
        return Gn;
      }
      function ze(D, H, O, K) {
        if (H !== null && H.tag === Qe) {
          a(D, H.sibling);
          var ve = u(H, O);
          return ve.return = D, ve;
        }
        a(D, H);
        var ce = e0(O, D.mode, K);
        return ce.return = D, ce;
      }
      function be(D, H, O, K) {
        for (var ve = O.key, ce = H; ce !== null; ) {
          if (ce.key === ve) {
            var $e = O.type;
            if ($e === di) {
              if (ce.tag === yt) {
                a(D, ce.sibling);
                var Ke = u(ce, O.props.children);
                return Ke.return = D, Ke._debugSource = O._source, Ke._debugOwner = O._owner, Ke;
              }
            } else if (ce.elementType === $e || // Keep this check inline so it only runs on the false path:
            hR(ce, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof $e == "object" && $e !== null && $e.$$typeof === Ge && sE($e) === ce.type) {
              a(D, ce.sibling);
              var Kt = u(ce, O.props);
              return Kt.ref = Sp(D, ce, O), Kt.return = D, Kt._debugSource = O._source, Kt._debugOwner = O._owner, Kt;
            }
            a(D, ce);
            break;
          } else
            t(D, ce);
          ce = ce.sibling;
        }
        if (O.type === di) {
          var Ut = Yo(O.props.children, D.mode, K, O.key);
          return Ut.return = D, Ut;
        } else {
          var Gn = JS(O, D.mode, K);
          return Gn.ref = Sp(D, H, O), Gn.return = D, Gn;
        }
      }
      function Tt(D, H, O, K) {
        for (var ve = O.key, ce = H; ce !== null; ) {
          if (ce.key === ve)
            if (ce.tag === Ce && ce.stateNode.containerInfo === O.containerInfo && ce.stateNode.implementation === O.implementation) {
              a(D, ce.sibling);
              var $e = u(ce, O.children || []);
              return $e.return = D, $e;
            } else {
              a(D, ce);
              break;
            }
          else
            t(D, ce);
          ce = ce.sibling;
        }
        var Ke = t0(O, D.mode, K);
        return Ke.return = D, Ke;
      }
      function gt(D, H, O, K) {
        var ve = typeof O == "object" && O !== null && O.type === di && O.key === null;
        if (ve && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case kr:
              return f(be(D, H, O, K));
            case rr:
              return f(Tt(D, H, O, K));
            case Ge:
              var ce = O._payload, $e = O._init;
              return gt(D, H, $e(ce), K);
          }
          if (ot(O))
            return F(D, H, O, K);
          if (Ze(O))
            return se(D, H, O, K);
          Yh(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(ze(D, H, "" + O, K)) : (typeof O == "function" && Ih(D), a(D, H));
      }
      return gt;
    }
    var kf = cE(!0), fE = cE(!1);
    function wx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ic(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ic(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function bx(e, t) {
      for (var a = e.child; a !== null; )
        p_(a, t), a = a.sibling;
    }
    var lg = Oo(null), ug;
    ug = {};
    var Qh = null, Df = null, og = null, Wh = !1;
    function Gh() {
      Qh = null, Df = null, og = null, Wh = !1;
    }
    function dE() {
      Wh = !0;
    }
    function pE() {
      Wh = !1;
    }
    function vE(e, t, a) {
      ia(lg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ug && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ug;
    }
    function sg(e, t) {
      var a = lg.current;
      aa(lg, t), e._currentValue = a;
    }
    function cg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ku(i.childLanes, t) ? u !== null && !ku(u.childLanes, t) && (u.childLanes = tt(u.childLanes, t)) : (i.childLanes = tt(i.childLanes, t), u !== null && (u.childLanes = tt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _x(e, t, a) {
      kx(e, t, a);
    }
    function kx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === fe) {
                var p = Ts(a), v = Pu(Zt, p);
                v.tag = Kh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = tt(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = tt(x.lanes, a)), cg(i.return, a, e), s.lanes = tt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === st)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === en) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = tt(N.lanes, a);
          var A = N.alternate;
          A !== null && (A.lanes = tt(A.lanes, a)), cg(N, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Of(e, t) {
      Qh = e, Df = null, og = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ea(a.lanes, t) && zp(), a.firstContext = null);
      }
    }
    function tr(e) {
      Wh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (og !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Df === null) {
          if (Qh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Df = a, Qh.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          Df = Df.next = a;
      }
      return t;
    }
    var Xs = null;
    function fg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function Dx() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Xs = null;
      }
    }
    function hE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Ox(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Lx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Ha(e, t) {
      return qh(e, t);
    }
    var Mx = qh;
    function qh(e, t) {
      e.lanes = tt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = tt(a.lanes, t)), a === null && (e.flags & (mn | qr)) !== ke && fR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = tt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = tt(a.childLanes, t) : (u.flags & (mn | qr)) !== ke && fR(e), i = u, u = u.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var mE = 0, yE = 1, Kh = 2, dg = 3, Xh = !1, pg, Zh;
    pg = !1, Zh = null;
    function vg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function gE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: mE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Zh === u && !pg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), pg = !0), Ob()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Mx(e, a);
      } else
        return Lx(e, u, t, a);
    }
    function Jh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Md(a)) {
          var s = u.lanes;
          s = zd(s, e.pendingLanes);
          var f = tt(s, a);
          u.lanes = f, tf(e, f);
        }
      }
    }
    function hg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Nx(e, t, a, i, u, s) {
      switch (a.tag) {
        case yE: {
          var f = a.payload;
          if (typeof f == "function") {
            dE();
            var p = f.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              pE();
            }
            return p;
          }
          return f;
        }
        case dg:
          e.flags = e.flags & ~Xn | _e;
        case mE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            dE(), y = v.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              pE();
            }
          } else
            y = v;
          return y == null ? i : rt({}, i, y);
        }
        case Kh:
          return Xh = !0, i;
      }
      return i;
    }
    function em(e, t, a, i) {
      var u = e.updateQueue;
      Xh = !1, Zh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, x = b.lastBaseUpdate;
          x !== f && (x === null ? b.firstBaseUpdate = y : x.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, A = Y, F = null, se = null, ze = null, be = s;
        do {
          var Tt = be.lane, gt = be.eventTime;
          if (ku(i, Tt)) {
            if (ze !== null) {
              var H = {
                eventTime: gt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                tag: be.tag,
                payload: be.payload,
                callback: be.callback,
                next: null
              };
              ze = ze.next = H;
            }
            N = Nx(e, u, be, N, t, a);
            var O = be.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            be.lane !== Dt) {
              e.flags |= ln;
              var K = u.effects;
              K === null ? u.effects = [be] : K.push(be);
            }
          } else {
            var D = {
              eventTime: gt,
              lane: Tt,
              tag: be.tag,
              payload: be.payload,
              callback: be.callback,
              next: null
            };
            ze === null ? (se = ze = D, F = N) : ze = ze.next = D, A = tt(A, Tt);
          }
          if (be = be.next, be === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ve = p, ce = ve.next;
            ve.next = null, be = ce, u.lastBaseUpdate = ve, u.shared.pending = null;
          }
        } while (!0);
        ze === null && (F = N), u.baseState = F, u.firstBaseUpdate = se, u.lastBaseUpdate = ze;
        var $e = u.shared.interleaved;
        if ($e !== null) {
          var Ke = $e;
          do
            A = tt(A, Ke.lane), Ke = Ke.next;
          while (Ke !== $e);
        } else s === null && (u.shared.lanes = Y);
        Qp(A), e.lanes = A, e.memoizedState = N;
      }
      Zh = null;
    }
    function zx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function SE() {
      Xh = !1;
    }
    function tm() {
      return Xh;
    }
    function EE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, zx(f, a));
        }
    }
    var Ep = {}, Uo = Oo(Ep), Cp = Oo(Ep), nm = Oo(Ep);
    function rm(e) {
      if (e === Ep)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function CE() {
      var e = rm(nm.current);
      return e;
    }
    function mg(e, t) {
      ia(nm, t, e), ia(Cp, e, e), ia(Uo, Ep, e);
      var a = X1(t);
      aa(Uo, e), ia(Uo, a, e);
    }
    function Lf(e) {
      aa(Uo, e), aa(Cp, e), aa(nm, e);
    }
    function yg() {
      var e = rm(Uo.current);
      return e;
    }
    function RE(e) {
      rm(nm.current);
      var t = rm(Uo.current), a = Z1(t, e.type);
      t !== a && (ia(Cp, e, e), ia(Uo, a, e));
    }
    function gg(e) {
      Cp.current === e && (aa(Uo, e), aa(Cp, e));
    }
    var Ux = 0, TE = 1, xE = 1, Rp = 2, il = Oo(Ux);
    function Sg(e, t) {
      return (e & t) !== 0;
    }
    function Mf(e) {
      return e & TE;
    }
    function Eg(e, t) {
      return e & TE | t;
    }
    function Ax(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      ia(il, t, e);
    }
    function Nf(e) {
      aa(il, e);
    }
    function jx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ee) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || V0(i) || Fy(i))
              return t;
          }
        } else if (t.tag === un && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & _e) !== ke;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Pa = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), Il = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), Cg = [];
    function Rg() {
      for (var e = 0; e < Cg.length; e++) {
        var t = Cg[e];
        t._workInProgressVersionPrimary = null;
      }
      Cg.length = 0;
    }
    function Fx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var pe = M.ReactCurrentDispatcher, Tp = M.ReactCurrentBatchConfig, Tg, zf;
    Tg = /* @__PURE__ */ new Set();
    var Zs = Y, qt = null, dr = null, pr = null, im = !1, xp = !1, wp = 0, Hx = 0, Px = 25, V = null, Ui = null, jo = -1, xg = !1;
    function Vt() {
      {
        var e = V;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function te() {
      {
        var e = V;
        Ui !== null && (jo++, Ui[jo] !== e && Vx(e));
      }
    }
    function Uf(e) {
      e != null && !ot(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function Vx(e) {
      {
        var t = We(qt);
        if (!Tg.has(t) && (Tg.add(t), Ui !== null)) {
          for (var a = "", i = 30, u = 0; u <= jo; u++) {
            for (var s = Ui[u], f = u === jo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function wg(e, t) {
      if (xg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!W(e[a], t[a]))
          return !1;
      return !0;
    }
    function Af(e, t, a, i, u, s) {
      Zs = s, qt = t, Ui = e !== null ? e._debugHookTypes : null, jo = -1, xg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? pe.current = QE : Ui !== null ? pe.current = IE : pe.current = YE;
      var f = a(i, u);
      if (xp) {
        var p = 0;
        do {
          if (xp = !1, wp = 0, p >= Px)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, xg = !1, dr = null, pr = null, t.updateQueue = null, jo = -1, pe.current = WE, f = a(i, u);
        } while (xp);
      }
      pe.current = gm, t._debugHookTypes = Ui;
      var v = dr !== null && dr.next !== null;
      if (Zs = Y, qt = null, dr = null, pr = null, V = null, Ui = null, jo = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & pt) !== De && S("Internal React error: Expected static flag was missing. Please notify the React team."), im = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function jf() {
      var e = wp !== 0;
      return wp = 0, e;
    }
    function wE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Nt) !== De ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function bE() {
      if (pe.current = gm, im) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        im = !1;
      }
      Zs = Y, qt = null, dr = null, pr = null, Ui = null, jo = -1, V = null, HE = !1, xp = !1, wp = 0;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? qt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Ai() {
      var e;
      if (dr === null) {
        var t = qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = qt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? qt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function _E() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function bg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _g(e, t, a) {
      var i = Ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Ix.bind(null, qt, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, x = null, N = null, A = null, F = g;
        do {
          var se = F.lane;
          if (ku(Zs, se)) {
            if (A !== null) {
              var be = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              A = A.next = be;
            }
            if (F.hasEagerState)
              b = F.eagerState;
            else {
              var Tt = F.action;
              b = e(b, Tt);
            }
          } else {
            var ze = {
              lane: se,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            A === null ? (N = A = ze, x = b) : A = A.next = ze, qt.lanes = tt(qt.lanes, se), Qp(se);
          }
          F = F.next;
        } while (F !== null && F !== g);
        A === null ? x = b : A.next = N, W(b, i.memoizedState) || zp(), i.memoizedState = b, i.baseState = x, i.baseQueue = A, u.lastRenderedState = b;
      }
      var gt = u.interleaved;
      if (gt !== null) {
        var D = gt;
        do {
          var H = D.lane;
          qt.lanes = tt(qt.lanes, H), Qp(H), D = D.next;
        } while (D !== gt);
      } else f === null && (u.lanes = Y);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Dg(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        W(p, i.memoizedState) || zp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function wk(e, t, a) {
    }
    function bk(e, t, a) {
    }
    function Og(e, t, a) {
      var i = qt, u = Ql(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), zf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), zf = !0);
      } else {
        if (s = t(), !zf) {
          var p = t();
          W(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
        }
        var v = jm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(v, Zs) || kE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, cm(OE.bind(null, i, y, e), [e]), i.flags |= Gr, bp(cr | Fr, DE.bind(null, i, y, s, t), void 0, null), s;
    }
    function lm(e, t, a) {
      var i = qt, u = Ai(), s = t();
      if (!zf) {
        var f = t();
        W(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
      }
      var p = u.memoizedState, v = !W(p, s);
      v && (u.memoizedState = s, zp());
      var y = u.queue;
      if (kp(OE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Gr, bp(cr | Fr, DE.bind(null, i, y, s, t), void 0, null);
        var g = jm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(g, Zs) || kE(i, t, s);
      }
      return s;
    }
    function kE(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = qt.updateQueue;
      if (u === null)
        u = _E(), qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function DE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, LE(t) && ME(e);
    }
    function OE(e, t, a) {
      var i = function() {
        LE(t) && ME(e);
      };
      return a(i);
    }
    function LE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !W(a, i);
      } catch {
        return !0;
      }
    }
    function ME(e) {
      var t = Ha(e, Ve);
      t !== null && yr(t, e, Ve, Zt);
    }
    function um(e) {
      var t = Ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Qx.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return kg(bg);
    }
    function Mg(e) {
      return Dg(bg);
    }
    function bp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = qt.updateQueue;
      if (s === null)
        s = _E(), qt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Ng(e) {
      var t = Ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function om(e) {
      var t = Ai();
      return t.memoizedState;
    }
    function _p(e, t, a, i) {
      var u = Ql(), s = i === void 0 ? null : i;
      qt.flags |= e, u.memoizedState = bp(cr | t, a, void 0, s);
    }
    function sm(e, t, a, i) {
      var u = Ai(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (wg(s, v)) {
            u.memoizedState = bp(t, a, f, s);
            return;
          }
        }
      }
      qt.flags |= e, u.memoizedState = bp(cr | t, a, f, s);
    }
    function cm(e, t) {
      return (qt.mode & Nt) !== De ? _p(Ti | Gr | bc, Fr, e, t) : _p(Gr | bc, Fr, e, t);
    }
    function kp(e, t) {
      return sm(Gr, Fr, e, t);
    }
    function zg(e, t) {
      return _p(Et, Il, e, t);
    }
    function fm(e, t) {
      return sm(Et, Il, e, t);
    }
    function Ug(e, t) {
      var a = Et;
      return a |= Wi, (qt.mode & Nt) !== De && (a |= _l), _p(a, fr, e, t);
    }
    function dm(e, t) {
      return sm(Et, fr, e, t);
    }
    function NE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Ag(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Et;
      return u |= Wi, (qt.mode & Nt) !== De && (u |= _l), _p(u, fr, NE.bind(null, t, e), i);
    }
    function pm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sm(Et, fr, NE.bind(null, t, e), i);
    }
    function Bx(e, t) {
    }
    var vm = Bx;
    function jg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function hm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (wg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Fg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function mm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (wg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Hg(e) {
      var t = Ql();
      return t.memoizedState = e, e;
    }
    function zE(e) {
      var t = Ai(), a = dr, i = a.memoizedState;
      return AE(t, i, e);
    }
    function UE(e) {
      var t = Ai();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return AE(t, a, e);
    }
    function AE(e, t, a) {
      var i = !Od(Zs);
      if (i) {
        if (!W(a, t)) {
          var u = Nd();
          qt.lanes = tt(qt.lanes, u), Qp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, zp()), e.memoizedState = a, a;
    }
    function $x(e, t, a) {
      var i = Aa();
      jn(Wv(i, _i)), e(!0);
      var u = Tp.transition;
      Tp.transition = {};
      var s = Tp.transition;
      Tp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (jn(i), Tp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Oe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = um(!1), t = e[0], a = e[1], i = $x.bind(null, a), u = Ql();
      return u.memoizedState = i, [t, i];
    }
    function jE() {
      var e = Lg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    function FE() {
      var e = Mg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    var HE = !1;
    function Yx() {
      return HE;
    }
    function Vg() {
      var e = Ql(), t = jm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = ux();
        i = ":" + a + "R" + u;
        var s = wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Hx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ym() {
      var e = Ai(), t = e.memoizedState;
      return t;
    }
    function Ix(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PE(e))
        VE(t, u);
      else {
        var s = hE(e, t, u, i);
        if (s !== null) {
          var f = Ca();
          yr(s, e, i, f), BE(s, t, i);
        }
      }
      $E(e, i);
    }
    function Qx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PE(e))
        VE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = pe.current, pe.current = ll;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, W(y, v)) {
                Ox(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              pe.current = p;
            }
          }
        }
        var g = hE(e, t, u, i);
        if (g !== null) {
          var b = Ca();
          yr(g, e, i, b), BE(g, t, i);
        }
      }
      $E(e, i);
    }
    function PE(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function VE(e, t) {
      xp = im = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function BE(e, t, a) {
      if (Md(a)) {
        var i = t.lanes;
        i = zd(i, e.pendingLanes);
        var u = tt(i, a);
        t.lanes = u, tf(e, u);
      }
    }
    function $E(e, t, a) {
      vs(e, t);
    }
    var gm = {
      readContext: tr,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: Z
    }, YE = null, IE = null, QE = null, WE = null, Wl = null, ll = null, Sm = null;
    {
      var Bg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, qe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      YE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Vt(), Uf(t), jg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Vt(), Uf(t), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Vt(), Uf(a), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Vt(), Uf(t), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Vt(), Uf(t), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Vt(), Uf(t);
          var a = pe.current;
          pe.current = Wl;
          try {
            return Fg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Vt();
          var i = pe.current;
          pe.current = Wl;
          try {
            return _g(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Vt(), Ng(e);
        },
        useState: function(e) {
          V = "useState", Vt();
          var t = pe.current;
          pe.current = Wl;
          try {
            return um(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Vt(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", Vt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Vt(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", Vt(), Vg();
        },
        unstable_isNewReconciler: Z
      }, IE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), jg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = pe.current;
          pe.current = Wl;
          try {
            return Fg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = pe.current;
          pe.current = Wl;
          try {
            return _g(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), Ng(e);
        },
        useState: function(e) {
          V = "useState", te();
          var t = pe.current;
          pe.current = Wl;
          try {
            return um(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", te(), Vg();
        },
        unstable_isNewReconciler: Z
      }, QE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = pe.current;
          pe.current = ll;
          try {
            return mm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = pe.current;
          pe.current = ll;
          try {
            return kg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), om();
        },
        useState: function(e) {
          V = "useState", te();
          var t = pe.current;
          pe.current = ll;
          try {
            return Lg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), zE(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), jE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), lm(e, t);
        },
        useId: function() {
          return V = "useId", te(), ym();
        },
        unstable_isNewReconciler: Z
      }, WE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = pe.current;
          pe.current = Sm;
          try {
            return mm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = pe.current;
          pe.current = Sm;
          try {
            return Dg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), om();
        },
        useState: function(e) {
          V = "useState", te();
          var t = pe.current;
          pe.current = Sm;
          try {
            return Mg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), lm(e, t);
        },
        useId: function() {
          return V = "useId", te(), ym();
        },
        unstable_isNewReconciler: Z
      }, Wl = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", qe(), Vt(), jg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", qe(), Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", qe(), Vt(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", qe(), Vt(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", qe(), Vt(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", qe(), Vt(), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", qe(), Vt();
          var a = pe.current;
          pe.current = Wl;
          try {
            return Fg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", qe(), Vt();
          var i = pe.current;
          pe.current = Wl;
          try {
            return _g(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", qe(), Vt(), Ng(e);
        },
        useState: function(e) {
          V = "useState", qe(), Vt();
          var t = pe.current;
          pe.current = Wl;
          try {
            return um(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", qe(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", qe(), Vt(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", qe(), Vt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", qe(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", qe(), Vt(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", qe(), Vt(), Vg();
        },
        unstable_isNewReconciler: Z
      }, ll = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", qe(), te(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", qe(), te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", qe(), te(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", qe(), te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", qe(), te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", qe(), te(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", qe(), te();
          var a = pe.current;
          pe.current = ll;
          try {
            return mm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", qe(), te();
          var i = pe.current;
          pe.current = ll;
          try {
            return kg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", qe(), te(), om();
        },
        useState: function(e) {
          V = "useState", qe(), te();
          var t = pe.current;
          pe.current = ll;
          try {
            return Lg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", qe(), te(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", qe(), te(), zE(e);
        },
        useTransition: function() {
          return V = "useTransition", qe(), te(), jE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", qe(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", qe(), te(), lm(e, t);
        },
        useId: function() {
          return V = "useId", qe(), te(), ym();
        },
        unstable_isNewReconciler: Z
      }, Sm = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", qe(), te(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", qe(), te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", qe(), te(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", qe(), te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", qe(), te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", qe(), te(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", qe(), te();
          var a = pe.current;
          pe.current = ll;
          try {
            return mm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", qe(), te();
          var i = pe.current;
          pe.current = ll;
          try {
            return Dg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", qe(), te(), om();
        },
        useState: function(e) {
          V = "useState", qe(), te();
          var t = pe.current;
          pe.current = ll;
          try {
            return Mg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", qe(), te(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", qe(), te(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", qe(), te(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", qe(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", qe(), te(), lm(e, t);
        },
        useId: function() {
          return V = "useId", qe(), te(), ym();
        },
        unstable_isNewReconciler: Z
      };
    }
    var Fo = G.unstable_now, GE = 0, Em = -1, Dp = -1, Cm = -1, $g = !1, Rm = !1;
    function qE() {
      return $g;
    }
    function Wx() {
      Rm = !0;
    }
    function Gx() {
      $g = !1, Rm = !1;
    }
    function qx() {
      $g = Rm, Rm = !1;
    }
    function KE() {
      return GE;
    }
    function XE() {
      GE = Fo();
    }
    function Yg(e) {
      Dp = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function ZE(e) {
      Dp = -1;
    }
    function Tm(e, t) {
      if (Dp >= 0) {
        var a = Fo() - Dp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Dp = -1;
      }
    }
    function Gl(e) {
      if (Em >= 0) {
        var t = Fo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ue:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Ig(e) {
      if (Cm >= 0) {
        var t = Fo() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ue:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ql() {
      Em = Fo();
    }
    function Qg() {
      Cm = Fo();
    }
    function Wg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = rt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Gg = {}, qg, Kg, Xg, Zg, Jg, JE, xm, eS, tS, nS, Op;
    {
      qg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), Op = /* @__PURE__ */ new Set();
      var eC = /* @__PURE__ */ new Set();
      xm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          eC.has(a) || (eC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, JE = function(e, t) {
        if (t === void 0) {
          var a = wt(e) || "Component";
          Jg.has(a) || (Jg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Gg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Gg);
    }
    function rS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Gt) {
          yn(!0);
          try {
            s = a(i, u);
          } finally {
            yn(!1);
          }
        }
        JE(t, s);
      }
      var f = s == null ? u : rt({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var aS = {
      isMounted: Lv,
      enqueueSetState: function(e, t, a) {
        var i = po(e), u = Ca(), s = Bo(i), f = Pu(u, s);
        f.payload = t, a != null && (xm(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), Jh(p, i, s)), vs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = po(e), u = Ca(), s = Bo(i), f = Pu(u, s);
        f.tag = yE, f.payload = t, a != null && (xm(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), Jh(p, i, s)), vs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = po(e), i = Ca(), u = Bo(a), s = Pu(i, u);
        s.tag = Kh, t != null && (xm(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (yr(f, a, u, i), Jh(f, a, u)), Nc(a, u);
      }
    };
    function tC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Gt) {
            yn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              yn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", wt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ge(a, i) || !ge(u, s) : !0;
    }
    function Kx(e, t, a) {
      var i = e.stateNode;
      {
        var u = wt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === De && (Op.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === De && (Op.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Xg.has(t) && (Xg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ot(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function nC(e, t) {
      t.updater = aS, e.stateNode = t, vu(t, e), t._reactInternalInstance = Gg;
    }
    function rC(e, t, a) {
      var i = !1, u = ui, s = ui, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !nS.has(t)) {
          nS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === vi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = Tf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? xf(e, u) : ui;
      }
      var g = new t(a, s);
      if (e.mode & Gt) {
        yn(!0);
        try {
          g = new t(a, s);
        } finally {
          yn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      nC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var x = wt(t) || "Component";
          Kg.has(x) || (Kg.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, A = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), N !== null || A !== null || F !== null) {
            var se = wt(t) || "Component", ze = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(se) || (Zg.add(se), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, se, ze, N !== null ? `
  ` + N : "", A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && Q0(e, u, s), g;
    }
    function Xx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", We(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function aC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = We(e) || "Component";
          qg.has(s) || (qg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      Kx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = Tf(e, t, !0);
        u.context = xf(e, f);
      }
      {
        if (u.state === a) {
          var p = wt(t) || "Component";
          eS.has(p) || (eS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Gt && al.recordLegacyContextWarning(e, u), al.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (rS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Xx(e, u), em(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Et;
        y |= Wi, (e.mode & Nt) !== De && (y |= _l), e.flags |= y;
      }
    }
    function Zx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ui;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = Tf(e, t, !0);
        v = xf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && aC(e, u, a, v), SE();
      var x = e.memoizedState, N = u.state = x;
      if (em(e, a, u, i), N = e.memoizedState, s === a && x === N && !Uh() && !tm()) {
        if (typeof u.componentDidMount == "function") {
          var A = Et;
          A |= Wi, (e.mode & Nt) !== De && (A |= _l), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (rS(e, t, g, a), N = e.memoizedState);
      var F = tm() || tC(e, t, s, a, x, N, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var se = Et;
          se |= Wi, (e.mode & Nt) !== De && (se |= _l), e.flags |= se;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var ze = Et;
          ze |= Wi, (e.mode & Nt) !== De && (ze |= _l), e.flags |= ze;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, F;
    }
    function Jx(e, t, a, i, u) {
      var s = t.stateNode;
      gE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ul(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = ui;
      if (typeof g == "object" && g !== null)
        b = tr(g);
      else {
        var x = Tf(t, a, !0);
        b = xf(t, x);
      }
      var N = a.getDerivedStateFromProps, A = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && aC(t, s, i, b), SE();
      var F = t.memoizedState, se = s.state = F;
      if (em(t, i, s, u), se = t.memoizedState, f === v && F === se && !Uh() && !tm() && !xe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= In), !1;
      typeof N == "function" && (rS(t, a, N, i), se = t.memoizedState);
      var ze = tm() || tC(t, a, p, i, F, se, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      xe;
      return ze ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, se, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, se, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= In)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= In), t.memoizedProps = i, t.memoizedState = se), s.props = i, s.state = se, s.context = b, ze;
    }
    function Js(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function lS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function ew(e, t) {
      return !0;
    }
    function uS(e, t) {
      try {
        var a = ew(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === fe)
            return;
          console.error(i);
        }
        var p = u ? We(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === J)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = We(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var tw = typeof WeakMap == "function" ? WeakMap : Map;
    function iC(e, t, a) {
      var i = Pu(Zt, a);
      i.tag = dg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Wb(u), uS(e, t);
      }, i;
    }
    function oS(e, t, a) {
      var i = Pu(Zt, a);
      i.tag = dg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          mR(e), uS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        mR(e), uS(e, t), typeof u != "function" && Ib(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ea(e.lanes, Ve) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", We(e) || "Unknown"));
      }), i;
    }
    function lC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new tw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Gb.bind(null, e, t, a);
        Zr && Wp(e, a), t.then(s, s);
      }
    }
    function nw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function rw(e, t) {
      var a = e.tag;
      if ((e.mode & pt) === De && (a === ae || a === le || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function uC(e) {
      var t = e;
      do {
        if (t.tag === Ee && jx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function oC(e, t, a, i, u) {
      if ((e.mode & pt) === De) {
        if (e === t)
          e.flags |= Xn;
        else {
          if (e.flags |= _e, a.flags |= wc, a.flags &= -52805, a.tag === fe) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ht;
            else {
              var f = Pu(Zt, Ve);
              f.tag = Kh, zo(a, f, Ve);
            }
          }
          a.lanes = tt(a.lanes, Ve);
        }
        return e;
      }
      return e.flags |= Xn, e.lanes = u, e;
    }
    function aw(e, t, a, i, u) {
      if (a.flags |= os, Zr && Wp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        rw(a), jr() && a.mode & pt && J0();
        var f = uC(t);
        if (f !== null) {
          f.flags &= ~Cr, oC(f, t, a, e, u), f.mode & pt && lC(e, s, u), nw(f, e, s);
          return;
        } else {
          if (!Hv(u)) {
            lC(e, s, u), VS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & pt) {
        J0();
        var v = uC(t);
        if (v !== null) {
          (v.flags & Xn) === ke && (v.flags |= Cr), oC(v, t, a, e, u), eg(Js(i, a));
          return;
        }
      }
      i = Js(i, a), jb(i);
      var y = t;
      do {
        switch (y.tag) {
          case J: {
            var g = i;
            y.flags |= Xn;
            var b = Ts(u);
            y.lanes = tt(y.lanes, b);
            var x = iC(y, g, b);
            hg(y, x);
            return;
          }
          case fe:
            var N = i, A = y.type, F = y.stateNode;
            if ((y.flags & _e) === ke && (typeof A.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !uR(F))) {
              y.flags |= Xn;
              var se = Ts(u);
              y.lanes = tt(y.lanes, se);
              var ze = oS(y, N, se);
              hg(y, ze);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function iw() {
      return null;
    }
    var Lp = M.ReactCurrentOwner, ol = !1, sS, Mp, cS, fS, dS, ec, pS, wm, Np;
    sS = {}, Mp = {}, cS = {}, fS = {}, dS = {}, ec = !1, pS = {}, wm = {}, Np = {};
    function Sa(e, t, a, i) {
      e === null ? t.child = fE(t, null, a, i) : t.child = kf(t, e.child, a, i);
    }
    function lw(e, t, a, i) {
      t.child = kf(t, e.child, null, i), t.child = kf(t, null, a, i);
    }
    function sC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Of(t, u), ha(t);
      {
        if (Lp.current = t, Yn(!0), v = Af(e, t, f, i, p, u), y = jf(), t.mode & Gt) {
          yn(!0);
          try {
            v = Af(e, t, f, i, p, u), y = jf();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ma(), e !== null && !ol ? (wE(e, t, u), Vu(e, t, u)) : (jr() && y && Gy(t), t.flags |= ni, Sa(e, t, v, u), t.child);
    }
    function cC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (f_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = If(s), t.tag = He, t.type = f, mS(t, s), fC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && nl(
            p,
            i,
            // Resolved props
            "prop",
            wt(s)
          ), a.defaultProps !== void 0) {
            var v = wt(s) || "Unknown";
            Np[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Np[v] = !0);
          }
        }
        var y = ZS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && nl(
          b,
          i,
          // Resolved props
          "prop",
          wt(g)
        );
      }
      var x = e.child, N = RS(e, u);
      if (!N) {
        var A = x.memoizedProps, F = a.compare;
        if (F = F !== null ? F : ge, F(A, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ni;
      var se = ic(x, i);
      return se.ref = t.ref, se.return = t, t.child = se, se;
    }
    function fC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ge) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && nl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            wt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ge(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = g, RS(e, u))
            (e.flags & wc) !== ke && (ol = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return vS(e, t, a, i, u);
    }
    function dC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ne)
        if ((t.mode & pt) === De) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Fm(t, a);
        } else if (ea(a, Jr)) {
          var b = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var x = s !== null ? s.baseLanes : a;
          Fm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = tt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Jr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Fm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = tt(s.baseLanes, a), t.memoizedState = null) : N = a, Fm(t, N);
      }
      return Sa(e, t, u, a), t.child;
    }
    function uw(e, t, a) {
      var i = t.pendingProps;
      return Sa(e, t, i, a), t.child;
    }
    function ow(e, t, a) {
      var i = t.pendingProps.children;
      return Sa(e, t, i, a), t.child;
    }
    function sw(e, t, a) {
      {
        t.flags |= Et;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Sa(e, t, s, a), t.child;
    }
    function pC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= ho);
    }
    function vS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f;
      {
        var p = Tf(t, a, !0);
        f = xf(t, p);
      }
      var v, y;
      Of(t, u), ha(t);
      {
        if (Lp.current = t, Yn(!0), v = Af(e, t, a, i, f, u), y = jf(), t.mode & Gt) {
          yn(!0);
          try {
            v = Af(e, t, a, i, f, u), y = jf();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ma(), e !== null && !ol ? (wE(e, t, u), Vu(e, t, u)) : (jr() && y && Gy(t), t.flags |= ni, Sa(e, t, v, u), t.child);
    }
    function vC(e, t, a, i, u) {
      {
        switch (b_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= _e, t.flags |= Xn;
            var y = new Error("Simulated error coming from DevTools"), g = Ts(u);
            t.lanes = tt(t.lanes, g);
            var b = oS(t, Js(y, t), g);
            hg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && nl(
            x,
            i,
            // Resolved props
            "prop",
            wt(a)
          );
        }
      }
      var N;
      Yl(a) ? (N = !0, jh(t)) : N = !1, Of(t, u);
      var A = t.stateNode, F;
      A === null ? (_m(e, t), rC(t, a, i), iS(t, a, i, u), F = !0) : e === null ? F = Zx(t, a, i, u) : F = Jx(e, t, a, i, u);
      var se = hS(e, t, a, F, N, u);
      {
        var ze = t.stateNode;
        F && ze.props !== i && (ec || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", We(t) || "a component"), ec = !0);
      }
      return se;
    }
    function hS(e, t, a, i, u, s) {
      pC(e, t);
      var f = (t.flags & _e) !== ke;
      if (!i && !f)
        return u && q0(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Lp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, ZE();
      else {
        ha(t);
        {
          if (Yn(!0), v = p.render(), t.mode & Gt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          Yn(!1);
        }
        ma();
      }
      return t.flags |= ni, e !== null && f ? lw(e, t, v, s) : Sa(e, t, v, s), t.memoizedState = p.state, u && q0(t, a, !0), t.child;
    }
    function hC(e) {
      var t = e.stateNode;
      t.pendingContext ? W0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && W0(e, t.context, !1), mg(e, t.containerInfo);
    }
    function cw(e, t, a) {
      if (hC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      gE(e, t), em(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Cr) {
          var g = Js(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return mC(e, t, p, a, g);
        } else if (p !== s) {
          var b = Js(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return mC(e, t, p, a, b);
        } else {
          px(t);
          var x = fE(t, null, p, a);
          t.child = x;
          for (var N = x; N; )
            N.flags = N.flags & ~mn | qr, N = N.sibling;
        }
      } else {
        if (_f(), p === s)
          return Vu(e, t, a);
        Sa(e, t, p, a);
      }
      return t.child;
    }
    function mC(e, t, a, i, u) {
      return _f(), eg(u), t.flags |= Cr, Sa(e, t, a, i), t.child;
    }
    function fw(e, t, a) {
      RE(t), e === null && Jy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = zy(i, u);
      return p ? f = null : s !== null && zy(i, s) && (t.flags |= Oa), pC(e, t), Sa(e, t, f, a), t.child;
    }
    function dw(e, t) {
      return e === null && Jy(t), null;
    }
    function pw(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = d_(v), g = ul(v, u), b;
      switch (y) {
        case ae:
          return mS(t, v), t.type = v = If(v), b = vS(null, t, v, g, i), b;
        case fe:
          return t.type = v = QS(v), b = vC(null, t, v, g, i), b;
        case le:
          return t.type = v = WS(v), b = sC(null, t, v, g, i), b;
        case at: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && nl(
              x,
              g,
              // Resolved for outer only
              "prop",
              wt(v)
            );
          }
          return b = cC(
            null,
            t,
            v,
            ul(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ge && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function vw(e, t, a, i, u) {
      _m(e, t), t.tag = fe;
      var s;
      return Yl(a) ? (s = !0, jh(t)) : s = !1, Of(t, u), rC(t, a, i), iS(t, a, i, u), hS(null, t, a, !0, s, u);
    }
    function hw(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s;
      {
        var f = Tf(t, a, !1);
        s = xf(t, f);
      }
      Of(t, i);
      var p, v;
      ha(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = wt(a) || "Unknown";
          sS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), sS[y] = !0);
        }
        t.mode & Gt && al.recordLegacyContextWarning(t, null), Yn(!0), Lp.current = t, p = Af(null, t, a, u, s, i), v = jf(), Yn(!1);
      }
      if (ma(), t.flags |= ni, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = wt(a) || "Unknown";
        Mp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Mp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = wt(a) || "Unknown";
          Mp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Mp[b] = !0);
        }
        t.tag = fe, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return Yl(a) ? (x = !0, jh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, vg(t), nC(t, p), iS(t, a, u, i), hS(null, t, a, !0, x, i);
      } else {
        if (t.tag = ae, t.mode & Gt) {
          yn(!0);
          try {
            p = Af(null, t, a, u, s, i), v = jf();
          } finally {
            yn(!1);
          }
        }
        return jr() && v && Gy(t), Sa(null, t, p, i), mS(t, a), t.child;
      }
    }
    function mS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), dS[u] || (dS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = wt(t) || "Unknown";
          Np[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Np[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = wt(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), fS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = wt(t) || "Unknown";
          cS[v] || (S("%s: Function components do not support contextType.", v), cS[v] = !0);
        }
      }
    }
    var yS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Dt
    };
    function gS(e) {
      return {
        baseLanes: e,
        cachePool: iw(),
        transitions: null
      };
    }
    function mw(e, t) {
      var a = null;
      return {
        baseLanes: tt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function yw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Sg(e, Rp);
    }
    function gw(e, t) {
      return xs(e.childLanes, t);
    }
    function yC(e, t, a) {
      var i = t.pendingProps;
      __(t) && (t.flags |= _e);
      var u = il.current, s = !1, f = (t.flags & _e) !== ke;
      if (f || yw(u, e) ? (s = !0, t.flags &= ~_e) : (e === null || e.memoizedState !== null) && (u = Ax(u, xE)), u = Mf(u), Ao(t, u), e === null) {
        Jy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Tw(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = Sw(t, y, g, a), x = t.child;
          return x.memoizedState = gS(a), t.memoizedState = yS, b;
        } else
          return SS(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var A = N.dehydrated;
          if (A !== null)
            return xw(e, t, f, i, A, N, a);
        }
        if (s) {
          var F = i.fallback, se = i.children, ze = Cw(e, t, se, F, a), be = t.child, Tt = e.child.memoizedState;
          return be.memoizedState = Tt === null ? gS(a) : mw(Tt, a), be.childLanes = gw(e, a), t.memoizedState = yS, ze;
        } else {
          var gt = i.children, D = Ew(e, t, gt, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function SS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = ES(u, i);
      return s.return = e, e.child = s, s;
    }
    function Sw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & pt) === De && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & Mt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = ES(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return gR(e, t, Y, null);
    }
    function gC(e, t) {
      return ic(e, t);
    }
    function Ew(e, t, a, i) {
      var u = e.child, s = u.sibling, f = gC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & pt) === De && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Da) : p.push(s);
      }
      return t.child = f, f;
    }
    function Cw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & pt) === De && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & Mt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = gC(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var b;
      return p !== null ? b = ic(p, i) : (b = Yo(i, s, u, null), b.flags |= mn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function bm(e, t, a, i) {
      i !== null && eg(i), kf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = SS(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function Rw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = Yo(i, s, u, null);
      return v.flags |= mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & pt) !== De && kf(t, e.child, null, u), v;
    }
    function Tw(e, t, a) {
      return (e.mode & pt) === De ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ve) : Fy(t) ? e.lanes = Rr : e.lanes = Jr, null;
    }
    function xw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Cr) {
          t.flags &= ~Cr;
          var D = lS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= _e, null;
          var H = i.children, O = i.fallback, K = Rw(e, t, H, O, f), ve = t.child;
          return ve.memoizedState = gS(f), t.memoizedState = yS, K;
        }
      else {
        if (fx(), (t.mode & pt) === De)
          return bm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Fy(u)) {
          var p, v, y;
          {
            var g = kT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = lS(b, p, y);
          return bm(e, t, f, x);
        }
        var N = ea(f, e.childLanes);
        if (ol || N) {
          var A = jm();
          if (A !== null) {
            var F = Ad(A, f);
            if (F !== Dt && F !== s.retryLane) {
              s.retryLane = F;
              var se = Zt;
              Ha(e, F), yr(A, e, F, se);
            }
          }
          VS();
          var ze = lS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, ze);
        } else if (V0(u)) {
          t.flags |= _e, t.child = e.child;
          var be = qb.bind(null, e);
          return DT(u, be), null;
        } else {
          vx(t, u, s.treeContext);
          var Tt = i.children, gt = SS(t, Tt);
          return gt.flags |= qr, gt;
        }
      }
    }
    function SC(e, t, a) {
      e.lanes = tt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = tt(i.lanes, t)), cg(e.return, t, a);
    }
    function ww(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ee) {
          var u = i.memoizedState;
          u !== null && SC(i, a, e);
        } else if (i.tag === un)
          SC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function bw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && am(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function _w(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !pS[e])
        if (pS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function kw(e, t) {
      e !== void 0 && !wm[e] && (e !== "collapsed" && e !== "hidden" ? (wm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (wm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function EC(e, t) {
      {
        var a = ot(e), i = !a && typeof Ze(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Dw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ot(e)) {
          for (var a = 0; a < e.length; a++)
            if (!EC(e[a], a))
              return;
        } else {
          var i = Ze(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!EC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function CS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function CC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      _w(u), kw(s, u), Dw(f, u), Sa(e, t, f, a);
      var p = il.current, v = Sg(p, Rp);
      if (v)
        p = Eg(p, Rp), t.flags |= _e;
      else {
        var y = e !== null && (e.flags & _e) !== ke;
        y && ww(t, t.child, a), p = Mf(p);
      }
      if (Ao(t, p), (t.mode & pt) === De)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = bw(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), CS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var A = N.alternate;
              if (A !== null && am(A) === null) {
                t.child = N;
                break;
              }
              var F = N.sibling;
              N.sibling = x, x = N, N = F;
            }
            CS(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            CS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ow(e, t, a) {
      mg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = kf(t, null, i, a) : Sa(e, t, i, a), t.child;
    }
    var RC = !1;
    function Lw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || RC || (RC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && nl(v, s, "prop", "Context.Provider");
      }
      if (vE(t, u, p), f !== null) {
        var y = f.value;
        if (W(y, p)) {
          if (f.children === s.children && !Uh())
            return Vu(e, t, a);
        } else
          _x(t, u, a);
      }
      var g = s.children;
      return Sa(e, t, g, a), t.child;
    }
    var TC = !1;
    function Mw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (TC || (TC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Of(t, a);
      var f = tr(i);
      ha(t);
      var p;
      return Lp.current = t, Yn(!0), p = s(f), Yn(!1), ma(), t.flags |= ni, Sa(e, t, p, a), t.child;
    }
    function zp() {
      ol = !0;
    }
    function _m(e, t) {
      (t.mode & pt) === De && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ZE(), Qp(t.lanes), ea(a, t.childLanes) ? (wx(e, t), t.child) : null;
    }
    function Nw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Da) : s.push(e), a.flags |= mn, a;
      }
    }
    function RS(e, t) {
      var a = e.lanes;
      return !!ea(a, t);
    }
    function zw(e, t, a) {
      switch (t.tag) {
        case J:
          hC(t), t.stateNode, _f();
          break;
        case ie:
          RE(t);
          break;
        case fe: {
          var i = t.type;
          Yl(i) && jh(t);
          break;
        }
        case Ce:
          mg(t, t.stateNode.containerInfo);
          break;
        case st: {
          var u = t.memoizedProps.value, s = t.type._context;
          vE(t, s, u);
          break;
        }
        case Ue:
          {
            var f = ea(a, t.childLanes);
            f && (t.flags |= Et);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ee: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, Mf(il.current)), t.flags |= _e, null;
            var y = t.child, g = y.childLanes;
            if (ea(a, g))
              return yC(e, t, a);
            Ao(t, Mf(il.current));
            var b = Vu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Ao(t, Mf(il.current));
          break;
        }
        case un: {
          var x = (e.flags & _e) !== ke, N = ea(a, t.childLanes);
          if (x) {
            if (N)
              return CC(e, t, a);
            t.flags |= _e;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Ao(t, il.current), N)
            break;
          return null;
        }
        case Me:
        case jt:
          return t.lanes = Y, dC(e, t, a);
      }
      return Vu(e, t, a);
    }
    function xC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Nw(e, t, ZS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Uh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ol = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & _e) === ke)
            return ol = !1, zw(e, t, a);
          (e.flags & wc) !== ke ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, jr() && ix(t)) {
        var f = t.index, p = lx();
        Z0(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case et:
          return hw(e, t, t.type, a);
        case Xt: {
          var v = t.elementType;
          return pw(e, t, v, a);
        }
        case ae: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : ul(y, g);
          return vS(e, t, y, b, a);
        }
        case fe: {
          var x = t.type, N = t.pendingProps, A = t.elementType === x ? N : ul(x, N);
          return vC(e, t, x, A, a);
        }
        case J:
          return cw(e, t, a);
        case ie:
          return fw(e, t, a);
        case Qe:
          return dw(e, t);
        case Ee:
          return yC(e, t, a);
        case Ce:
          return Ow(e, t, a);
        case le: {
          var F = t.type, se = t.pendingProps, ze = t.elementType === F ? se : ul(F, se);
          return sC(e, t, F, ze, a);
        }
        case yt:
          return uw(e, t, a);
        case vt:
          return ow(e, t, a);
        case Ue:
          return sw(e, t, a);
        case st:
          return Lw(e, t, a);
        case Jt:
          return Mw(e, t, a);
        case at: {
          var be = t.type, Tt = t.pendingProps, gt = ul(be, Tt);
          if (t.type !== t.elementType) {
            var D = be.propTypes;
            D && nl(
              D,
              gt,
              // Resolved for outer only
              "prop",
              wt(be)
            );
          }
          return gt = ul(be.type, gt), cC(e, t, be, gt, a);
        }
        case He:
          return fC(e, t, t.type, t.pendingProps, a);
        case Ht: {
          var H = t.type, O = t.pendingProps, K = t.elementType === H ? O : ul(H, O);
          return vw(e, t, H, K, a);
        }
        case un:
          return CC(e, t, a);
        case _t:
          break;
        case Me:
          return dC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ff(e) {
      e.flags |= Et;
    }
    function wC(e) {
      e.flags |= En, e.flags |= ho;
    }
    var bC, TS, _C, kC;
    bC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ie || u.tag === Qe)
          nT(e, u.stateNode);
        else if (u.tag !== Ce) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, TS = function(e, t) {
    }, _C = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = yg(), v = aT(f, a, s, i, u, p);
        t.updateQueue = v, v && Ff(t);
      }
    }, kC = function(e, t, a, i) {
      a !== i && Ff(t);
    };
    function Up(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = ke;
      if (t) {
        if ((e.mode & Mt) !== De) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = tt(a, tt(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = tt(a, tt(g.lanes, g.childLanes)), i |= g.subtreeFlags & zn, i |= g.flags & zn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Mt) !== De) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = tt(a, tt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = tt(a, tt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Uw(e, t, a) {
      if (Sx() && (t.mode & pt) !== De && (t.flags & _e) === ke)
        return iE(t), _f(), t.flags |= Cr | os | Xn, !1;
      var i = Bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (yx(t), Hr(t), (t.mode & Mt) !== De) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (_f(), (t.flags & _e) === ke && (t.memoizedState = null), t.flags |= Et, Hr(t), (t.mode & Mt) !== De) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return lE(), !0;
    }
    function DC(e, t, a) {
      var i = t.pendingProps;
      switch (qy(t), t.tag) {
        case et:
        case Xt:
        case He:
        case ae:
        case le:
        case yt:
        case vt:
        case Ue:
        case Jt:
        case at:
          return Hr(t), null;
        case fe: {
          var u = t.type;
          return Yl(u) && Ah(t), Hr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (Lf(t), Iy(t), Rg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Bh(t);
            if (f)
              Ff(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Cr) !== ke) && (t.flags |= In, lE());
            }
          }
          return TS(e, t), Hr(t), null;
        }
        case ie: {
          gg(t);
          var v = CE(), y = t.type;
          if (e !== null && t.stateNode != null)
            _C(e, t, y, i, v), e.ref !== t.ref && wC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var g = yg(), b = Bh(t);
            if (b)
              hx(t, v, g) && Ff(t);
            else {
              var x = tT(y, i, v, g, t);
              bC(x, t, !1, !1), t.stateNode = x, rT(x, y, i, v) && Ff(t);
            }
            t.ref !== null && wC(t);
          }
          return Hr(t), null;
        }
        case Qe: {
          var N = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            kC(e, t, A, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = CE(), se = yg(), ze = Bh(t);
            ze ? mx(t) && Ff(t) : t.stateNode = iT(N, F, se, t);
          }
          return Hr(t), null;
        }
        case Ee: {
          Nf(t);
          var be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = Uw(e, t, be);
            if (!Tt)
              return t.flags & Xn ? t : null;
          }
          if ((t.flags & _e) !== ke)
            return t.lanes = a, (t.mode & Mt) !== De && Wg(t), t;
          var gt = be !== null, D = e !== null && e.memoizedState !== null;
          if (gt !== D && gt) {
            var H = t.child;
            if (H.flags |= Nn, (t.mode & pt) !== De) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Sg(il.current, xE) ? Ab() : VS();
            }
          }
          var K = t.updateQueue;
          if (K !== null && (t.flags |= Et), Hr(t), (t.mode & Mt) !== De && gt) {
            var ve = t.child;
            ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
          }
          return null;
        }
        case Ce:
          return Lf(t), TS(e, t), e === null && ZT(t.stateNode.containerInfo), Hr(t), null;
        case st:
          var ce = t.type._context;
          return sg(ce, t), Hr(t), null;
        case Ht: {
          var $e = t.type;
          return Yl($e) && Ah(t), Hr(t), null;
        }
        case un: {
          Nf(t);
          var Ke = t.memoizedState;
          if (Ke === null)
            return Hr(t), null;
          var Kt = (t.flags & _e) !== ke, Ut = Ke.rendering;
          if (Ut === null)
            if (Kt)
              Up(Ke, !1);
            else {
              var Gn = Fb() && (e === null || (e.flags & _e) === ke);
              if (!Gn)
                for (var At = t.child; At !== null; ) {
                  var Pn = am(At);
                  if (Pn !== null) {
                    Kt = !0, t.flags |= _e, Up(Ke, !1);
                    var ua = Pn.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= Et), t.subtreeFlags = ke, bx(t, a), Ao(t, Eg(il.current, Rp)), t.child;
                  }
                  At = At.sibling;
                }
              Ke.tail !== null && Qn() > KC() && (t.flags |= _e, Kt = !0, Up(Ke, !1), t.lanes = _d);
            }
          else {
            if (!Kt) {
              var Yr = am(Ut);
              if (Yr !== null) {
                t.flags |= _e, Kt = !0;
                var si = Yr.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= Et), Up(Ke, !0), Ke.tail === null && Ke.tailMode === "hidden" && !Ut.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Qn() * 2 - Ke.renderingStartTime > KC() && a !== Jr && (t.flags |= _e, Kt = !0, Up(Ke, !1), t.lanes = _d);
            }
            if (Ke.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var Ra = Ke.last;
              Ra !== null ? Ra.sibling = Ut : t.child = Ut, Ke.last = Ut;
            }
          }
          if (Ke.tail !== null) {
            var Ta = Ke.tail;
            Ke.rendering = Ta, Ke.tail = Ta.sibling, Ke.renderingStartTime = Qn(), Ta.sibling = null;
            var oa = il.current;
            return Kt ? oa = Eg(oa, Rp) : oa = Mf(oa), Ao(t, oa), Ta;
          }
          return Hr(t), null;
        }
        case _t:
          break;
        case Me:
        case jt: {
          PS(t);
          var Qu = t.memoizedState, Qf = Qu !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Zl = Xp !== null;
            Zl !== Qf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ne && (t.flags |= Nn);
          }
          return !Qf || (t.mode & pt) === De ? Hr(t) : ea(Xl, Jr) && (Hr(t), t.subtreeFlags & (mn | Et) && (t.flags |= Nn)), null;
        }
        case kt:
          return null;
        case Ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Aw(e, t, a) {
      switch (qy(t), t.tag) {
        case fe: {
          var i = t.type;
          Yl(i) && Ah(t);
          var u = t.flags;
          return u & Xn ? (t.flags = u & ~Xn | _e, (t.mode & Mt) !== De && Wg(t), t) : null;
        }
        case J: {
          t.stateNode, Lf(t), Iy(t), Rg();
          var s = t.flags;
          return (s & Xn) !== ke && (s & _e) === ke ? (t.flags = s & ~Xn | _e, t) : null;
        }
        case ie:
          return gg(t), null;
        case Ee: {
          Nf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            _f();
          }
          var p = t.flags;
          return p & Xn ? (t.flags = p & ~Xn | _e, (t.mode & Mt) !== De && Wg(t), t) : null;
        }
        case un:
          return Nf(t), null;
        case Ce:
          return Lf(t), null;
        case st:
          var v = t.type._context;
          return sg(v, t), null;
        case Me:
        case jt:
          return PS(t), null;
        case kt:
          return null;
        default:
          return null;
      }
    }
    function OC(e, t, a) {
      switch (qy(t), t.tag) {
        case fe: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case J: {
          t.stateNode, Lf(t), Iy(t), Rg();
          break;
        }
        case ie: {
          gg(t);
          break;
        }
        case Ce:
          Lf(t);
          break;
        case Ee:
          Nf(t);
          break;
        case un:
          Nf(t);
          break;
        case st:
          var u = t.type._context;
          sg(u, t);
          break;
        case Me:
        case jt:
          PS(t);
          break;
      }
    }
    var LC = null;
    LC = /* @__PURE__ */ new Set();
    var km = !1, Pr = !1, jw = typeof WeakSet == "function" ? WeakSet : Set, Se = null, Hf = null, Pf = null;
    function Fw(e) {
      bl(null, function() {
        throw e;
      }), us();
    }
    var Hw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Mt)
        try {
          ql(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function MC(e, t) {
      try {
        Ho(fr, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function xS(e, t, a) {
      try {
        Hw(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function Pw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function NC(e, t) {
      try {
        UC(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Vf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Pe && ct && e.mode & Mt)
              try {
                ql(), i = a(null);
              } finally {
                Gl(e);
              }
            else
              i = a(null);
          } catch (u) {
            fn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", We(e));
        } else
          a.current = null;
    }
    function Dm(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var zC = !1;
    function Vw(e, t) {
      J1(e.containerInfo), Se = t, Bw();
      var a = zC;
      return zC = !1, a;
    }
    function Bw() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & kl) !== ke && t !== null ? (t.return = e, Se = t) : $w();
      }
    }
    function $w() {
      for (; Se !== null; ) {
        var e = Se;
        It(e);
        try {
          Yw(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function Yw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & In) !== ke) {
        switch (It(e), e.tag) {
          case ae:
          case le:
          case He:
            break;
          case fe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ec && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), u);
              {
                var p = LC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", We(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              xT(v.containerInfo);
            }
            break;
          }
          case ie:
          case Qe:
          case Ce:
          case Ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        cn();
      }
    }
    function sl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Pa ? Ki(t) : (e & fr) !== Pa && cs(t), (e & Il) !== Pa && Gp(!0), Dm(t, a, p), (e & Il) !== Pa && Gp(!1), (e & Fr) !== Pa ? Ml() : (e & fr) !== Pa && wd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== Pa ? xd(t) : (e & fr) !== Pa && Lc(t);
            var f = s.create;
            (e & Il) !== Pa && Gp(!0), s.destroy = f(), (e & Il) !== Pa && Gp(!1), (e & Fr) !== Pa ? zv() : (e & fr) !== Pa && Uv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== ke ? v = "useLayoutEffect" : (s.tag & Il) !== ke ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Iw(e, t) {
      if ((t.flags & Et) !== ke)
        switch (t.tag) {
          case Ue: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = KE(), p = t.alternate === null ? "mount" : "update";
            qE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case J:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case Ue:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Qw(e, t, a, i) {
      if ((a.flags & Ol) !== ke)
        switch (a.tag) {
          case ae:
          case le:
          case He: {
            if (!Pr)
              if (a.mode & Mt)
                try {
                  ql(), Ho(fr | cr, a);
                } finally {
                  Gl(a);
                }
              else
                Ho(fr | cr, a);
            break;
          }
          case fe: {
            var u = a.stateNode;
            if (a.flags & Et && !Pr)
              if (t === null)
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(a) || "instance")), a.mode & Mt)
                  try {
                    ql(), u.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(a) || "instance")), a.mode & Mt)
                  try {
                    ql(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(a) || "instance")), EE(a, p, u));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ie:
                    y = a.child.stateNode;
                    break;
                  case fe:
                    y = a.child.stateNode;
                    break;
                }
              EE(a, v, y);
            }
            break;
          }
          case ie: {
            var g = a.stateNode;
            if (t === null && a.flags & Et) {
              var b = a.type, x = a.memoizedProps;
              cT(g, b, x);
            }
            break;
          }
          case Qe:
            break;
          case Ce:
            break;
          case Ue: {
            {
              var N = a.memoizedProps, A = N.onCommit, F = N.onRender, se = a.stateNode.effectDuration, ze = KE(), be = t === null ? "mount" : "update";
              qE() && (be = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ze);
              {
                typeof A == "function" && A(a.memoizedProps.id, be, se, ze), $b(a);
                var Tt = a.return;
                e: for (; Tt !== null; ) {
                  switch (Tt.tag) {
                    case J:
                      var gt = Tt.stateNode;
                      gt.effectDuration += se;
                      break e;
                    case Ue:
                      var D = Tt.stateNode;
                      D.effectDuration += se;
                      break e;
                  }
                  Tt = Tt.return;
                }
              }
            }
            break;
          }
          case Ee: {
            eb(e, a);
            break;
          }
          case un:
          case Ht:
          case _t:
          case Me:
          case jt:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & En && UC(a);
    }
    function Ww(e) {
      switch (e.tag) {
        case ae:
        case le:
        case He: {
          if (e.mode & Mt)
            try {
              ql(), MC(e, e.return);
            } finally {
              Gl(e);
            }
          else
            MC(e, e.return);
          break;
        }
        case fe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Pw(e, e.return, t), NC(e, e.return);
          break;
        }
        case ie: {
          NC(e, e.return);
          break;
        }
      }
    }
    function Gw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ie) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? ET(u) : RT(i.stateNode, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
          }
        } else if (i.tag === Qe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? CT(s) : TT(s, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
        } else if (!((i.tag === Me || i.tag === jt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function UC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ie:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Mt)
            try {
              ql(), u = t(i);
            } finally {
              Gl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", We(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", We(e)), t.current = i;
      }
    }
    function qw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function AC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, AC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ie) {
          var a = e.stateNode;
          a !== null && tx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Kw(e) {
      for (var t = e.return; t !== null; ) {
        if (jC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function jC(e) {
      return e.tag === ie || e.tag === J || e.tag === Ce;
    }
    function FC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || jC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ie && t.tag !== Qe && t.tag !== en; ) {
          if (t.flags & mn || t.child === null || t.tag === Ce)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function Xw(e) {
      var t = Kw(e);
      switch (t.tag) {
        case ie: {
          var a = t.stateNode;
          t.flags & Oa && (P0(a), t.flags &= ~Oa);
          var i = FC(e);
          bS(e, i, a);
          break;
        }
        case J:
        case Ce: {
          var u = t.stateNode.containerInfo, s = FC(e);
          wS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === ie || i === Qe;
      if (u) {
        var s = e.stateNode;
        t ? mT(a, s, t) : vT(a, s);
      } else if (i !== Ce) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === ie || i === Qe;
      if (u) {
        var s = e.stateNode;
        t ? hT(a, s, t) : pT(a, s);
      } else if (i !== Ce) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, cl = !1;
    function Zw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ie: {
              Vr = i.stateNode, cl = !1;
              break e;
            }
            case J: {
              Vr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
            case Ce: {
              Vr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        HC(e, t, a), Vr = null, cl = !1;
      }
      qw(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        HC(e, t, i), i = i.sibling;
    }
    function HC(e, t, a) {
      switch (Cd(a), a.tag) {
        case ie:
          Pr || Vf(a, t);
        case Qe: {
          {
            var i = Vr, u = cl;
            Vr = null, Po(e, t, a), Vr = i, cl = u, Vr !== null && (cl ? gT(Vr, a.stateNode) : yT(Vr, a.stateNode));
          }
          return;
        }
        case en: {
          Vr !== null && (cl ? ST(Vr, a.stateNode) : jy(Vr, a.stateNode));
          return;
        }
        case Ce: {
          {
            var s = Vr, f = cl;
            Vr = a.stateNode.containerInfo, cl = !0, Po(e, t, a), Vr = s, cl = f;
          }
          return;
        }
        case ae:
        case le:
        case at:
        case He: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, x = b.destroy, N = b.tag;
                  x !== void 0 && ((N & Il) !== Pa ? Dm(a, t, x) : (N & fr) !== Pa && (cs(a), a.mode & Mt ? (ql(), Dm(a, t, x), Gl(a)) : Dm(a, t, x), wd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case fe: {
          if (!Pr) {
            Vf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && xS(a, t, A);
          }
          Po(e, t, a);
          return;
        }
        case _t: {
          Po(e, t, a);
          return;
        }
        case Me: {
          if (
            // TODO: Remove this dead flag
            a.mode & pt
          ) {
            var F = Pr;
            Pr = F || a.memoizedState !== null, Po(e, t, a), Pr = F;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function Jw(e) {
      e.memoizedState;
    }
    function eb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && FT(s);
          }
        }
      }
    }
    function PC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new jw()), t.forEach(function(i) {
          var u = Kb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Zr)
              if (Hf !== null && Pf !== null)
                Wp(Pf, Hf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function tb(e, t, a) {
      Hf = a, Pf = e, It(t), VC(t, e), It(t), Hf = null, Pf = null;
    }
    function fl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Zw(e, t, s);
          } catch (v) {
            fn(s, t, v);
          }
        }
      var f = Sl();
      if (t.subtreeFlags & Dl)
        for (var p = t.child; p !== null; )
          It(p), VC(p, e), p = p.sibling;
      It(f);
    }
    function VC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ae:
        case le:
        case at:
        case He: {
          if (fl(t, e), Kl(e), u & Et) {
            try {
              sl(Il | cr, e, e.return), Ho(Il | cr, e);
            } catch ($e) {
              fn(e, e.return, $e);
            }
            if (e.mode & Mt) {
              try {
                ql(), sl(fr | cr, e, e.return);
              } catch ($e) {
                fn(e, e.return, $e);
              }
              Gl(e);
            } else
              try {
                sl(fr | cr, e, e.return);
              } catch ($e) {
                fn(e, e.return, $e);
              }
          }
          return;
        }
        case fe: {
          fl(t, e), Kl(e), u & En && i !== null && Vf(i, i.return);
          return;
        }
        case ie: {
          fl(t, e), Kl(e), u & En && i !== null && Vf(i, i.return);
          {
            if (e.flags & Oa) {
              var s = e.stateNode;
              try {
                P0(s);
              } catch ($e) {
                fn(e, e.return, $e);
              }
            }
            if (u & Et) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    fT(f, g, y, v, p, e);
                  } catch ($e) {
                    fn(e, e.return, $e);
                  }
              }
            }
          }
          return;
        }
        case Qe: {
          if (fl(t, e), Kl(e), u & Et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, x = e.memoizedProps, N = i !== null ? i.memoizedProps : x;
            try {
              dT(b, N, x);
            } catch ($e) {
              fn(e, e.return, $e);
            }
          }
          return;
        }
        case J: {
          if (fl(t, e), Kl(e), u & Et && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                jT(t.containerInfo);
              } catch ($e) {
                fn(e, e.return, $e);
              }
          }
          return;
        }
        case Ce: {
          fl(t, e), Kl(e);
          return;
        }
        case Ee: {
          fl(t, e), Kl(e);
          var F = e.child;
          if (F.flags & Nn) {
            var se = F.stateNode, ze = F.memoizedState, be = ze !== null;
            if (se.isHidden = be, be) {
              var Tt = F.alternate !== null && F.alternate.memoizedState !== null;
              Tt || Ub();
            }
          }
          if (u & Et) {
            try {
              Jw(e);
            } catch ($e) {
              fn(e, e.return, $e);
            }
            PC(e);
          }
          return;
        }
        case Me: {
          var gt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & pt
          ) {
            var D = Pr;
            Pr = D || gt, fl(t, e), Pr = D;
          } else
            fl(t, e);
          if (Kl(e), u & Nn) {
            var H = e.stateNode, O = e.memoizedState, K = O !== null, ve = e;
            if (H.isHidden = K, K && !gt && (ve.mode & pt) !== De) {
              Se = ve;
              for (var ce = ve.child; ce !== null; )
                Se = ce, rb(ce), ce = ce.sibling;
            }
            Gw(ve, K);
          }
          return;
        }
        case un: {
          fl(t, e), Kl(e), u & Et && PC(e);
          return;
        }
        case _t:
          return;
        default: {
          fl(t, e), Kl(e);
          return;
        }
      }
    }
    function Kl(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          Xw(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & qr && (e.flags &= ~qr);
    }
    function nb(e, t, a) {
      Hf = a, Pf = t, Se = e, BC(e, t, a), Hf = null, Pf = null;
    }
    function BC(e, t, a) {
      for (var i = (e.mode & pt) !== De; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Me && i) {
          var f = u.memoizedState !== null, p = f || km;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, b = km, x = Pr;
            km = p, Pr = g, Pr && !x && (Se = u, ab(u));
            for (var N = s; N !== null; )
              Se = N, BC(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            Se = u, km = b, Pr = x, _S(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ol) !== ke && s !== null ? (s.return = u, Se = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & Ol) !== ke) {
          var u = i.alternate;
          It(i);
          try {
            Qw(t, u, i, a);
          } catch (f) {
            fn(i, i.return, f);
          }
          cn();
        }
        if (i === e) {
          Se = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Se = s;
          return;
        }
        Se = i.return;
      }
    }
    function rb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case ae:
          case le:
          case at:
          case He: {
            if (t.mode & Mt)
              try {
                ql(), sl(fr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              sl(fr, t, t.return);
            break;
          }
          case fe: {
            Vf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && xS(t, t.return, i);
            break;
          }
          case ie: {
            Vf(t, t.return);
            break;
          }
          case Me: {
            var u = t.memoizedState !== null;
            if (u) {
              $C(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : $C(e);
      }
    }
    function $C(e) {
      for (; Se !== null; ) {
        var t = Se;
        if (t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function ab(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === Me) {
          var i = t.memoizedState !== null;
          if (i) {
            YC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : YC(e);
      }
    }
    function YC(e) {
      for (; Se !== null; ) {
        var t = Se;
        It(t);
        try {
          Ww(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (cn(), t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function ib(e, t, a, i) {
      Se = t, lb(t, e, a, i);
    }
    function lb(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & Gi) !== ke && s !== null ? (s.return = u, Se = s) : ub(e, t, a, i);
      }
    }
    function ub(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & Gr) !== ke) {
          It(u);
          try {
            ob(t, u, a, i);
          } catch (f) {
            fn(u, u.return, f);
          }
          cn();
        }
        if (u === e) {
          Se = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Se = s;
          return;
        }
        Se = u.return;
      }
    }
    function ob(e, t, a, i) {
      switch (t.tag) {
        case ae:
        case le:
        case He: {
          if (t.mode & Mt) {
            Qg();
            try {
              Ho(Fr | cr, t);
            } finally {
              Ig(t);
            }
          } else
            Ho(Fr | cr, t);
          break;
        }
      }
    }
    function sb(e) {
      Se = e, cb();
    }
    function cb() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & Da) !== ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, pb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Se = e;
          }
        }
        (e.subtreeFlags & Gi) !== ke && t !== null ? (t.return = e, Se = t) : fb();
      }
    }
    function fb() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & Gr) !== ke && (It(e), db(e), cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function db(e) {
      switch (e.tag) {
        case ae:
        case le:
        case He: {
          e.mode & Mt ? (Qg(), sl(Fr | cr, e, e.return), Ig(e)) : sl(Fr | cr, e, e.return);
          break;
        }
      }
    }
    function pb(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        It(a), hb(a, t), cn();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : vb(e);
      }
    }
    function vb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (AC(t), t === e) {
          Se = null;
          return;
        }
        if (a !== null) {
          a.return = i, Se = a;
          return;
        }
        Se = i;
      }
    }
    function hb(e, t) {
      switch (e.tag) {
        case ae:
        case le:
        case He: {
          e.mode & Mt ? (Qg(), sl(Fr, e, t), Ig(e)) : sl(Fr, e, t);
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case ae:
        case le:
        case He: {
          try {
            Ho(fr | cr, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case fe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case ae:
        case le:
        case He: {
          try {
            Ho(Fr | cr, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function gb(e) {
      switch (e.tag) {
        case ae:
        case le:
        case He: {
          try {
            sl(fr | cr, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case fe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && xS(e, e.return, t);
          break;
        }
      }
    }
    function Sb(e) {
      switch (e.tag) {
        case ae:
        case le:
        case He:
          try {
            sl(Fr | cr, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Ap = Symbol.for;
      Ap("selector.component"), Ap("selector.has_pseudo_class"), Ap("selector.role"), Ap("selector.test_id"), Ap("selector.text");
    }
    var Eb = [];
    function Cb() {
      Eb.forEach(function(e) {
        return e();
      });
    }
    var Rb = M.ReactCurrentActQueue;
    function Tb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function IC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Rb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var xb = Math.ceil, kS = M.ReactCurrentDispatcher, DS = M.ReactCurrentOwner, Br = M.ReactCurrentBatchConfig, dl = M.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), QC = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Bu = 0, jp = 1, tc = 2, Om = 3, Fp = 4, WC = 5, OS = 6, Rt = vr, Ea = null, Dn = null, hr = Y, Xl = Y, LS = Oo(Y), mr = Bu, Hp = null, Lm = Y, Pp = Y, Mm = Y, Vp = null, Va = null, MS = 0, GC = 500, qC = 1 / 0, wb = 500, $u = null;
    function Bp() {
      qC = Qn() + wb;
    }
    function KC() {
      return qC;
    }
    var Nm = !1, NS = null, Bf = null, nc = !1, Vo = null, $p = Y, zS = [], US = null, bb = 50, Yp = 0, AS = null, jS = !1, zm = !1, _b = 50, $f = 0, Um = null, Ip = Zt, Am = Y, XC = !1;
    function jm() {
      return Ea;
    }
    function Ca() {
      return (Rt & ($r | ji)) !== vr ? Qn() : (Ip !== Zt || (Ip = Qn()), Ip);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & pt) === De)
        return Ve;
      if ((Rt & $r) !== vr && hr !== Y)
        return Ts(hr);
      var a = Rx() !== Cx;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Am === Dt && (Am = Nd()), Am;
      }
      var u = Aa();
      if (u !== Dt)
        return u;
      var s = lT();
      return s;
    }
    function kb(e) {
      var t = e.mode;
      return (t & pt) === De ? Ve : Vv();
    }
    function yr(e, t, a, i) {
      Zb(), XC && S("useInsertionEffect must not schedule updates."), jS && (zm = !0), So(e, a, i), (Rt & $r) !== Y && e === Ea ? t_(t) : (Zr && bs(e, t, a), n_(t), e === Ea && ((Rt & $r) === vr && (Pp = tt(Pp, a)), mr === Fp && $o(e, hr)), Ba(e, i), a === Ve && Rt === vr && (t.mode & pt) === De && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !dl.isBatchingLegacy && (Bp(), X0()));
    }
    function Db(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Ba(e, a);
    }
    function Ob(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Rt & $r) !== vr
      );
    }
    function Ba(e, t) {
      var a = e.callbackNode;
      Xc(e, t);
      var i = Kc(e, e === Ea ? hr : Y);
      if (i === Y) {
        a !== null && pR(a), e.callbackNode = null, e.callbackPriority = Dt;
        return;
      }
      var u = Ul(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(dl.current !== null && a !== YS)) {
        a == null && s !== Ve && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && pR(a);
      var f;
      if (u === Ve)
        e.tag === Lo ? (dl.isBatchingLegacy !== null && (dl.didScheduleLegacyUpdate = !0), ax(eR.bind(null, e))) : K0(eR.bind(null, e)), dl.current !== null ? dl.current.push(Mo) : oT(function() {
          (Rt & ($r | ji)) === vr && Mo();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case Mr:
            p = ss;
            break;
          case _i:
            p = Ll;
            break;
          case za:
            p = qi;
            break;
          case Ua:
            p = mu;
            break;
          default:
            p = qi;
            break;
        }
        f = IS(p, ZC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function ZC(e, t) {
      if (Gx(), Ip = Zt, Am = Y, (Rt & ($r | ji)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Iu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Kc(e, e === Ea ? hr : Y);
      if (u === Y)
        return null;
      var s = !Jc(e, u) && !Pv(e, u) && !t, f = s ? Pb(e, u) : Hm(e, u);
      if (f !== Bu) {
        if (f === tc) {
          var p = Zc(e);
          p !== Y && (u = p, f = FS(e, p));
        }
        if (f === jp) {
          var v = Hp;
          throw rc(e, Y), $o(e, u), Ba(e, Qn()), v;
        }
        if (f === OS)
          $o(e, u);
        else {
          var y = !Jc(e, u), g = e.current.alternate;
          if (y && !Mb(g)) {
            if (f = Hm(e, u), f === tc) {
              var b = Zc(e);
              b !== Y && (u = b, f = FS(e, b));
            }
            if (f === jp) {
              var x = Hp;
              throw rc(e, Y), $o(e, u), Ba(e, Qn()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Lb(e, f, u);
        }
      }
      return Ba(e, Qn()), e.callbackNode === a ? ZC.bind(null, e) : null;
    }
    function FS(e, t) {
      var a = Vp;
      if (nf(e)) {
        var i = rc(e, t);
        i.flags |= Cr, XT(e.containerInfo);
      }
      var u = Hm(e, t);
      if (u !== tc) {
        var s = Va;
        Va = a, s !== null && JC(s);
      }
      return u;
    }
    function JC(e) {
      Va === null ? Va = e : Va.push.apply(Va, e);
    }
    function Lb(e, t, a) {
      switch (t) {
        case Bu:
        case jp:
          throw new Error("Root did not complete. This is a bug in React.");
        case tc: {
          ac(e, Va, $u);
          break;
        }
        case Om: {
          if ($o(e, a), _u(a) && // do not delay if we're inside an act() scope
          !vR()) {
            var i = MS + GC - Qn();
            if (i > 10) {
              var u = Kc(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!ku(s, a)) {
                Ca(), ef(e, s);
                break;
              }
              e.timeoutHandle = Uy(ac.bind(null, e, Va, $u), i);
              break;
            }
          }
          ac(e, Va, $u);
          break;
        }
        case Fp: {
          if ($o(e, a), Ld(a))
            break;
          if (!vR()) {
            var f = ai(e, a), p = f, v = Qn() - p, y = Xb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Uy(ac.bind(null, e, Va, $u), y);
              break;
            }
          }
          ac(e, Va, $u);
          break;
        }
        case WC: {
          ac(e, Va, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Mb(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!W(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & vo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function $o(e, t) {
      t = xs(t, Mm), t = xs(t, Pp), Yv(e, t);
    }
    function eR(e) {
      if (qx(), (Rt & ($r | ji)) !== vr)
        throw new Error("Should not already be working.");
      Iu();
      var t = Kc(e, Y);
      if (!ea(t, Ve))
        return Ba(e, Qn()), null;
      var a = Hm(e, t);
      if (e.tag !== Lo && a === tc) {
        var i = Zc(e);
        i !== Y && (t = i, a = FS(e, i));
      }
      if (a === jp) {
        var u = Hp;
        throw rc(e, Y), $o(e, t), Ba(e, Qn()), u;
      }
      if (a === OS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ac(e, Va, $u), Ba(e, Qn()), null;
    }
    function Nb(e, t) {
      t !== Y && (tf(e, tt(t, Ve)), Ba(e, Qn()), (Rt & ($r | ji)) === vr && (Bp(), Mo()));
    }
    function HS(e, t) {
      var a = Rt;
      Rt |= QC;
      try {
        return e(t);
      } finally {
        Rt = a, Rt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !dl.isBatchingLegacy && (Bp(), X0());
      }
    }
    function zb(e, t, a, i, u) {
      var s = Aa(), f = Br.transition;
      try {
        return Br.transition = null, jn(Mr), e(t, a, i, u);
      } finally {
        jn(s), Br.transition = f, Rt === vr && Bp();
      }
    }
    function Yu(e) {
      Vo !== null && Vo.tag === Lo && (Rt & ($r | ji)) === vr && Iu();
      var t = Rt;
      Rt |= QC;
      var a = Br.transition, i = Aa();
      try {
        return Br.transition = null, jn(Mr), e ? e() : void 0;
      } finally {
        jn(i), Br.transition = a, Rt = t, (Rt & ($r | ji)) === vr && Mo();
      }
    }
    function tR() {
      return (Rt & ($r | ji)) !== vr;
    }
    function Fm(e, t) {
      ia(LS, Xl, e), Xl = tt(Xl, t);
    }
    function PS(e) {
      Xl = LS.current, aa(LS, e);
    }
    function rc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, uT(a)), Dn !== null)
        for (var i = Dn.return; i !== null; ) {
          var u = i.alternate;
          OC(u, i), i = i.return;
        }
      Ea = e;
      var s = ic(e.current, null);
      return Dn = s, hr = Xl = t, mr = Bu, Hp = null, Lm = Y, Pp = Y, Mm = Y, Vp = null, Va = null, Dx(), al.discardPendingWarnings(), s;
    }
    function nR(e, t) {
      do {
        var a = Dn;
        try {
          if (Gh(), bE(), cn(), DS.current = null, a === null || a.return === null) {
            mr = jp, Hp = t, Dn = null;
            return;
          }
          if (Pe && a.mode & Mt && Tm(a, !0), Be)
            if (ma(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              bi(a, i, hr);
            } else
              fs(a, t, hr);
          aw(e, a.return, a, t, hr), lR(a);
        } catch (u) {
          t = u, Dn === a && a !== null ? (a = a.return, Dn = a) : a = Dn;
          continue;
        }
        return;
      } while (!0);
    }
    function rR() {
      var e = kS.current;
      return kS.current = gm, e === null ? gm : e;
    }
    function aR(e) {
      kS.current = e;
    }
    function Ub() {
      MS = Qn();
    }
    function Qp(e) {
      Lm = tt(e, Lm);
    }
    function Ab() {
      mr === Bu && (mr = Om);
    }
    function VS() {
      (mr === Bu || mr === Om || mr === tc) && (mr = Fp), Ea !== null && (Rs(Lm) || Rs(Pp)) && $o(Ea, hr);
    }
    function jb(e) {
      mr !== Fp && (mr = tc), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function Fb() {
      return mr === Bu;
    }
    function Hm(e, t) {
      var a = Rt;
      Rt |= $r;
      var i = rR();
      if (Ea !== e || hr !== t) {
        if (Zr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, hr), u.clear()), Iv(e, t);
        }
        $u = jd(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Hb();
          break;
        } catch (s) {
          nR(e, s);
        }
      while (!0);
      if (Gh(), Rt = a, aR(i), Dn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Mc(), Ea = null, hr = Y, mr;
    }
    function Hb() {
      for (; Dn !== null; )
        iR(Dn);
    }
    function Pb(e, t) {
      var a = Rt;
      Rt |= $r;
      var i = rR();
      if (Ea !== e || hr !== t) {
        if (Zr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, hr), u.clear()), Iv(e, t);
        }
        $u = jd(), Bp(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Vb();
          break;
        } catch (s) {
          nR(e, s);
        }
      while (!0);
      return Gh(), aR(i), Rt = a, Dn !== null ? (Av(), Bu) : (Mc(), Ea = null, hr = Y, mr);
    }
    function Vb() {
      for (; Dn !== null && !md(); )
        iR(Dn);
    }
    function iR(e) {
      var t = e.alternate;
      It(e);
      var a;
      (e.mode & Mt) !== De ? (Yg(e), a = BS(t, e, Xl), Tm(e, !0)) : a = BS(t, e, Xl), cn(), e.memoizedProps = e.pendingProps, a === null ? lR(e) : Dn = a, DS.current = null;
    }
    function lR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & os) === ke) {
          It(t);
          var u = void 0;
          if ((t.mode & Mt) === De ? u = DC(a, t, Xl) : (Yg(t), u = DC(a, t, Xl), Tm(t, !1)), cn(), u !== null) {
            Dn = u;
            return;
          }
        } else {
          var s = Aw(a, t);
          if (s !== null) {
            s.flags &= Ov, Dn = s;
            return;
          }
          if ((t.mode & Mt) !== De) {
            Tm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= os, i.subtreeFlags = ke, i.deletions = null;
          else {
            mr = OS, Dn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Dn = v;
          return;
        }
        t = i, Dn = t;
      } while (t !== null);
      mr === Bu && (mr = WC);
    }
    function ac(e, t, a) {
      var i = Aa(), u = Br.transition;
      try {
        Br.transition = null, jn(Mr), Bb(e, t, a, i);
      } finally {
        Br.transition = u, jn(i);
      }
      return null;
    }
    function Bb(e, t, a, i) {
      do
        Iu();
      while (Vo !== null);
      if (Jb(), (Rt & ($r | ji)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Rd(s), u === null)
        return Td(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Dt;
      var f = tt(u.lanes, u.childLanes);
      Ud(e, f), e === Ea && (Ea = null, Dn = null, hr = Y), ((u.subtreeFlags & Gi) !== ke || (u.flags & Gi) !== ke) && (nc || (nc = !0, US = a, IS(qi, function() {
        return Iu(), null;
      })));
      var p = (u.subtreeFlags & (kl | Dl | Ol | Gi)) !== ke, v = (u.flags & (kl | Dl | Ol | Gi)) !== ke;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = Aa();
        jn(Mr);
        var b = Rt;
        Rt |= ji, DS.current = null, Vw(e, u), XE(), tb(e, u, s), eT(e.containerInfo), e.current = u, ds(s), nb(u, e, s), ps(), yd(), Rt = b, jn(g), Br.transition = y;
      } else
        e.current = u, XE();
      var x = nc;
      if (nc ? (nc = !1, Vo = e, $p = s) : ($f = 0, Um = null), f = e.pendingLanes, f === Y && (Bf = null), x || cR(e.current, !1), Sd(u.stateNode, i), Zr && e.memoizedUpdaters.clear(), Cb(), Ba(e, Qn()), t !== null)
        for (var N = e.onRecoverableError, A = 0; A < t.length; A++) {
          var F = t[A], se = F.stack, ze = F.digest;
          N(F.value, {
            componentStack: se,
            digest: ze
          });
        }
      if (Nm) {
        Nm = !1;
        var be = NS;
        throw NS = null, be;
      }
      return ea($p, Ve) && e.tag !== Lo && Iu(), f = e.pendingLanes, ea(f, Ve) ? (Wx(), e === AS ? Yp++ : (Yp = 0, AS = e)) : Yp = 0, Mo(), Td(), null;
    }
    function Iu() {
      if (Vo !== null) {
        var e = Gv($p), t = ks(za, e), a = Br.transition, i = Aa();
        try {
          return Br.transition = null, jn(t), Yb();
        } finally {
          jn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function $b(e) {
      zS.push(e), nc || (nc = !0, IS(qi, function() {
        return Iu(), null;
      }));
    }
    function Yb() {
      if (Vo === null)
        return !1;
      var e = US;
      US = null;
      var t = Vo, a = $p;
      if (Vo = null, $p = Y, (Rt & ($r | ji)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, zm = !1, Su(a);
      var i = Rt;
      Rt |= ji, sb(t.current), ib(t, t.current, a, e);
      {
        var u = zS;
        zS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Iw(t, f);
        }
      }
      bd(), cR(t.current, !0), Rt = i, Mo(), zm ? t === Um ? $f++ : ($f = 0, Um = t) : $f = 0, jS = !1, zm = !1, Ed(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function uR(e) {
      return Bf !== null && Bf.has(e);
    }
    function Ib(e) {
      Bf === null ? Bf = /* @__PURE__ */ new Set([e]) : Bf.add(e);
    }
    function Qb(e) {
      Nm || (Nm = !0, NS = e);
    }
    var Wb = Qb;
    function oR(e, t, a) {
      var i = Js(a, t), u = iC(e, i, Ve), s = zo(e, u, Ve), f = Ca();
      s !== null && (So(s, Ve, f), Ba(s, f));
    }
    function fn(e, t, a) {
      if (Fw(a), Gp(!1), e.tag === J) {
        oR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          oR(i, e, a);
          return;
        } else if (i.tag === fe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !uR(s)) {
            var f = Js(a, e), p = oS(i, f, Ve), v = zo(i, p, Ve), y = Ca();
            v !== null && (So(v, Ve, y), Ba(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Gb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ca();
      ef(e, a), r_(e), Ea === e && ku(hr, a) && (mr === Fp || mr === Om && _u(hr) && Qn() - MS < GC ? rc(e, Y) : Mm = tt(Mm, a)), Ba(e, u);
    }
    function sR(e, t) {
      t === Dt && (t = kb(e));
      var a = Ca(), i = Ha(e, t);
      i !== null && (So(i, t, a), Ba(i, a));
    }
    function qb(e) {
      var t = e.memoizedState, a = Dt;
      t !== null && (a = t.retryLane), sR(e, a);
    }
    function Kb(e, t) {
      var a = Dt, i;
      switch (e.tag) {
        case Ee:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case un:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), sR(e, a);
    }
    function Xb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : xb(e / 1960) * 1960;
    }
    function Zb() {
      if (Yp > bb)
        throw Yp = 0, AS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      $f > _b && ($f = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Jb() {
      al.flushLegacyContextWarning(), al.flushPendingUnsafeLifecycleWarnings();
    }
    function cR(e, t) {
      It(e), Pm(e, _l, gb), t && Pm(e, Ti, Sb), Pm(e, _l, mb), t && Pm(e, Ti, yb), cn();
    }
    function Pm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ke ? i = i.child : ((i.flags & t) !== ke && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Vm = null;
    function fR(e) {
      {
        if ((Rt & $r) !== vr || !(e.mode & pt))
          return;
        var t = e.tag;
        if (t !== et && t !== J && t !== fe && t !== ae && t !== le && t !== at && t !== He)
          return;
        var a = We(e) || "ReactComponent";
        if (Vm !== null) {
          if (Vm.has(a))
            return;
          Vm.add(a);
        } else
          Vm = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          It(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? It(e) : cn();
        }
      }
    }
    var BS;
    {
      var e_ = null;
      BS = function(e, t, a) {
        var i = SR(e_, t);
        try {
          return xC(e, t, a);
        } catch (s) {
          if (dx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Gh(), bE(), OC(e, t), SR(t, i), t.mode & Mt && Yg(t), bl(null, xC, null, e, t, a), Qi()) {
            var u = us();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var dR = !1, $S;
    $S = /* @__PURE__ */ new Set();
    function t_(e) {
      if (mi && !Yx())
        switch (e.tag) {
          case ae:
          case le:
          case He: {
            var t = Dn && We(Dn) || "Unknown", a = t;
            if (!$S.has(a)) {
              $S.add(a);
              var i = We(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case fe: {
            dR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), dR = !0);
            break;
          }
        }
    }
    function Wp(e, t) {
      if (Zr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          bs(e, i, t);
        });
      }
    }
    var YS = {};
    function IS(e, t) {
      {
        var a = dl.current;
        return a !== null ? (a.push(t), YS) : hd(e, t);
      }
    }
    function pR(e) {
      if (e !== YS)
        return Mv(e);
    }
    function vR() {
      return dl.current !== null;
    }
    function n_(e) {
      {
        if (e.mode & pt) {
          if (!IC())
            return;
        } else if (!Tb() || Rt !== vr || e.tag !== ae && e.tag !== le && e.tag !== He)
          return;
        if (dl.current === null) {
          var t = ir;
          try {
            It(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, We(e));
          } finally {
            t ? It(e) : cn();
          }
        }
      }
    }
    function r_(e) {
      e.tag !== Lo && IC() && dl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Gp(e) {
      XC = e;
    }
    var Fi = null, Yf = null, a_ = function(e) {
      Fi = e;
    };
    function If(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return If(e);
    }
    function WS(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = If(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: $,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function hR(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case fe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ae: {
            (typeof i == "function" || s === Ge) && (u = !0);
            break;
          }
          case le: {
            (s === $ || s === Ge) && (u = !0);
            break;
          }
          case at:
          case He: {
            (s === Xe || s === Ge) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Fi(a);
          if (f !== void 0 && f === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function mR(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        Yf === null && (Yf = /* @__PURE__ */ new WeakSet()), Yf.add(e);
      }
    }
    var i_ = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Iu(), Yu(function() {
          GS(e.current, i, a);
        });
      }
    }, l_ = function(e, t) {
      {
        if (e.context !== ui)
          return;
        Iu(), Yu(function() {
          qp(t, e, null, null);
        });
      }
    };
    function GS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ae:
          case He:
          case fe:
            v = p;
            break;
          case le:
            v = p.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Fi(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === fe ? g = !0 : y = !0));
        }
        if (Yf !== null && (Yf.has(e) || i !== null && Yf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = Ha(e, Ve);
          x !== null && yr(x, e, Ve, Zt);
        }
        u !== null && !g && GS(u, t, a), s !== null && GS(s, t, a);
      }
    }
    var u_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return qS(e.current, i, a), a;
      }
    };
    function qS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ae:
          case He:
          case fe:
            p = f;
            break;
          case le:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? o_(e, a) : i !== null && qS(i, t, a), u !== null && qS(u, t, a);
      }
    }
    function o_(e, t) {
      {
        var a = s_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ie:
              t.add(i.stateNode);
              return;
            case Ce:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function s_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ie)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var KS;
    {
      KS = !1;
      try {
        var yR = Object.preventExtensions({});
      } catch {
        KS = !0;
      }
    }
    function c_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ke, this.subtreeFlags = ke, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !KS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new c_(e, t, a, i);
    };
    function XS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function f_(e) {
      return typeof e == "function" && !XS(e) && e.defaultProps === void 0;
    }
    function d_(e) {
      if (typeof e == "function")
        return XS(e) ? fe : ae;
      if (e != null) {
        var t = e.$$typeof;
        if (t === $)
          return le;
        if (t === Xe)
          return at;
      }
      return et;
    }
    function ic(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ke, a.subtreeFlags = ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case et:
        case ae:
        case He:
          a.type = If(e.type);
          break;
        case fe:
          a.type = QS(e.type);
          break;
        case le:
          a.type = WS(e.type);
          break;
      }
      return a;
    }
    function p_(e, t) {
      e.flags &= zn | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function v_(e, t, a) {
      var i;
      return e === Fh ? (i = pt, t === !0 && (i |= Gt, i |= Nt)) : i = De, Zr && (i |= Mt), oi(J, null, null, i);
    }
    function ZS(e, t, a, i, u, s) {
      var f = et, p = e;
      if (typeof e == "function")
        XS(e) ? (f = fe, p = QS(p)) : p = If(p);
      else if (typeof e == "string")
        f = ie;
      else
        e: switch (e) {
          case di:
            return Yo(a.children, u, s, t);
          case Wa:
            f = vt, u |= Gt, (u & pt) !== De && (u |= Nt);
            break;
          case pi:
            return h_(a, u, s, t);
          case ue:
            return m_(a, u, s, t);
          case me:
            return y_(a, u, s, t);
          case Tn:
            return gR(a, u, s, t);
          case rn:
          case ht:
          case sn:
          case ar:
          case dt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case vi:
                  f = st;
                  break e;
                case R:
                  f = Jt;
                  break e;
                case $:
                  f = le, p = WS(p);
                  break e;
                case Xe:
                  f = at;
                  break e;
                case Ge:
                  f = Xt, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? We(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = oi(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function JS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = ZS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var u = oi(yt, e, i, t);
      return u.lanes = a, u;
    }
    function h_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oi(Ue, e, i, t | Mt);
      return u.elementType = pi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function m_(e, t, a, i) {
      var u = oi(Ee, e, i, t);
      return u.elementType = ue, u.lanes = a, u;
    }
    function y_(e, t, a, i) {
      var u = oi(un, e, i, t);
      return u.elementType = me, u.lanes = a, u;
    }
    function gR(e, t, a, i) {
      var u = oi(Me, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function e0(e, t, a) {
      var i = oi(Qe, e, null, t);
      return i.lanes = a, i;
    }
    function g_() {
      var e = oi(ie, null, null, De);
      return e.elementType = "DELETED", e;
    }
    function S_(e) {
      var t = oi(en, null, null, De);
      return t.stateNode = e, t;
    }
    function t0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oi(Ce, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function SR(e, t) {
      return e === null && (e = oi(et, null, null, De)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function E_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Dt, this.eventTimes = ws(Y), this.expirationTimes = ws(Zt), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = ws(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Cu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Fh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function ER(e, t, a, i, u, s, f, p, v, y) {
      var g = new E_(e, t, a, p, v), b = v_(t, s);
      g.current = b, b.stateNode = g;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = x;
      }
      return vg(b), g;
    }
    var n0 = "18.3.1";
    function C_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ir(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: rr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var r0, a0;
    r0 = !1, a0 = {};
    function CR(e) {
      if (!e)
        return ui;
      var t = po(e), a = rx(t);
      if (t.tag === fe) {
        var i = t.type;
        if (Yl(i))
          return G0(t, i, a);
      }
      return a;
    }
    function R_(e, t) {
      {
        var a = po(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Kr(a);
        if (u === null)
          return null;
        if (u.mode & Gt) {
          var s = We(a) || "Component";
          if (!a0[s]) {
            a0[s] = !0;
            var f = ir;
            try {
              It(u), a.mode & Gt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? It(f) : cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function RR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return ER(e, t, v, y, a, i, u, s, f);
    }
    function TR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = ER(a, i, g, e, u, s, f, p, v);
      b.context = CR(null);
      var x = b.current, N = Ca(), A = Bo(x), F = Pu(N, A);
      return F.callback = t ?? null, zo(x, F, A), Db(b, A, N), b;
    }
    function qp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = Ca(), f = Bo(u);
      gn(f);
      var p = CR(a);
      t.context === null ? t.context = p : t.pendingContext = p, mi && ir !== null && !r0 && (r0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, We(ir) || "Unknown"));
      var v = Pu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (yr(y, u, f, s), Jh(y, u, f)), f;
    }
    function Bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ie:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function T_(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (nf(t)) {
            var a = Fv(t);
            Nb(t, a);
          }
          break;
        }
        case Ee: {
          Yu(function() {
            var u = Ha(e, Ve);
            if (u !== null) {
              var s = Ca();
              yr(u, e, Ve, s);
            }
          });
          var i = Ve;
          i0(e, i);
          break;
        }
      }
    }
    function xR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = $v(a.retryLane, t));
    }
    function i0(e, t) {
      xR(e, t);
      var a = e.alternate;
      a && xR(a, t);
    }
    function x_(e) {
      if (e.tag === Ee) {
        var t = Ss, a = Ha(e, t);
        if (a !== null) {
          var i = Ca();
          yr(a, e, t, i);
        }
        i0(e, t);
      }
    }
    function w_(e) {
      if (e.tag === Ee) {
        var t = Bo(e), a = Ha(e, t);
        if (a !== null) {
          var i = Ca();
          yr(a, e, t, i);
        }
        i0(e, t);
      }
    }
    function wR(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var bR = function(e) {
      return null;
    };
    function b_(e) {
      return bR(e);
    }
    var _R = function(e) {
      return !1;
    };
    function __(e) {
      return _R(e);
    }
    var kR = null, DR = null, OR = null, LR = null, MR = null, NR = null, zR = null, UR = null, AR = null;
    {
      var jR = function(e, t, a) {
        var i = t[a], u = ot(e) ? e.slice() : rt({}, e);
        return a + 1 === t.length ? (ot(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = jR(e[i], t, a + 1), u);
      }, FR = function(e, t) {
        return jR(e, t, 0);
      }, HR = function(e, t, a, i) {
        var u = t[i], s = ot(e) ? e.slice() : rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], ot(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = HR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, PR = function(e, t, a) {
        if (t.length !== a.length) {
          Oe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Oe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return HR(e, t, a, 0);
      }, VR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ot(e) ? e.slice() : rt({}, e);
        return s[u] = VR(e[u], t, a + 1, i), s;
      }, BR = function(e, t, a) {
        return VR(e, t, 0, a);
      }, l0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      kR = function(e, t, a, i) {
        var u = l0(e, t);
        if (u !== null) {
          var s = BR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Ha(e, Ve);
          f !== null && yr(f, e, Ve, Zt);
        }
      }, DR = function(e, t, a) {
        var i = l0(e, t);
        if (i !== null) {
          var u = FR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = rt({}, e.memoizedProps);
          var s = Ha(e, Ve);
          s !== null && yr(s, e, Ve, Zt);
        }
      }, OR = function(e, t, a, i) {
        var u = l0(e, t);
        if (u !== null) {
          var s = PR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Ha(e, Ve);
          f !== null && yr(f, e, Ve, Zt);
        }
      }, LR = function(e, t, a) {
        e.pendingProps = BR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, Ve);
        i !== null && yr(i, e, Ve, Zt);
      }, MR = function(e, t) {
        e.pendingProps = FR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ha(e, Ve);
        a !== null && yr(a, e, Ve, Zt);
      }, NR = function(e, t, a) {
        e.pendingProps = PR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, Ve);
        i !== null && yr(i, e, Ve, Zt);
      }, zR = function(e) {
        var t = Ha(e, Ve);
        t !== null && yr(t, e, Ve, Zt);
      }, UR = function(e) {
        bR = e;
      }, AR = function(e) {
        _R = e;
      };
    }
    function k_(e) {
      var t = Kr(e);
      return t === null ? null : t.stateNode;
    }
    function D_(e) {
      return null;
    }
    function O_() {
      return ir;
    }
    function L_(e) {
      var t = e.findFiberByHostInstance, a = M.ReactCurrentDispatcher;
      return mo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: kR,
        overrideHookStateDeletePath: DR,
        overrideHookStateRenamePath: OR,
        overrideProps: LR,
        overridePropsDeletePath: MR,
        overridePropsRenamePath: NR,
        setErrorHandler: UR,
        setSuspenseHandler: AR,
        scheduleUpdate: zR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: k_,
        findFiberByHostInstance: t || D_,
        // React Refresh
        findHostInstancesForRefresh: u_,
        scheduleRefresh: i_,
        scheduleRoot: l_,
        setRefreshHandler: a_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: O_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: n0
      });
    }
    var $R = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function u0(e) {
      this._internalRoot = e;
    }
    $m.prototype.render = u0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ym(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = wR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      qp(e, t, null, null);
    }, $m.prototype.unmount = u0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        tR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yu(function() {
          qp(null, e, null, null);
        }), $0(t);
      }
    };
    function M_(e, t) {
      if (!Ym(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      YR(e);
      var a = !1, i = !1, u = "", s = $R;
      t != null && (t.hydrate ? Oe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === kr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = RR(e, Fh, null, a, i, u, s);
      Lh(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return tp(p), new u0(f);
    }
    function $m(e) {
      this._internalRoot = e;
    }
    function N_(e) {
      e && Jv(e);
    }
    $m.prototype.unstable_scheduleHydration = N_;
    function z_(e, t, a) {
      if (!Ym(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      YR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = $R;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = TR(t, null, e, Fh, i, s, f, p, v);
      if (Lh(y.current, e), tp(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Fx(y, b);
        }
      return new $m(y);
    }
    function Ym(e) {
      return !!(e && (e.nodeType === Wr || e.nodeType === Ii || e.nodeType === rd));
    }
    function Kp(e) {
      return !!(e && (e.nodeType === Wr || e.nodeType === Ii || e.nodeType === rd || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function YR(e) {
      e.nodeType === Wr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), dp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var U_ = M.ReactCurrentOwner, IR;
    IR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = wR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = o0(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Wr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function o0(e) {
      return e ? e.nodeType === Ii ? e.documentElement : e.firstChild : null;
    }
    function QR() {
    }
    function A_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = Bm(f);
            s.call(x);
          };
        }
        var f = TR(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QR
        );
        e._reactRootContainer = f, Lh(f.current, e);
        var p = e.nodeType === Mn ? e.parentNode : e;
        return tp(p), Yu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = Bm(g);
            y.call(x);
          };
        }
        var g = RR(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QR
        );
        e._reactRootContainer = g, Lh(g.current, e);
        var b = e.nodeType === Mn ? e.parentNode : e;
        return tp(b), Yu(function() {
          qp(t, g, a, i);
        }), g;
      }
    }
    function j_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Im(e, t, a, i, u) {
      IR(a), j_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = A_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Bm(f);
            p.call(v);
          };
        }
        qp(t, f, e, u);
      }
      return Bm(f);
    }
    var WR = !1;
    function F_(e) {
      {
        WR || (WR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = U_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Wr ? e : R_(e, "findDOMNode");
    }
    function H_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Im(null, e, t, !0, a);
    }
    function P_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Im(null, e, t, !1, a);
    }
    function V_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Im(e, t, a, !1, i);
    }
    var GR = !1;
    function B_(e) {
      if (GR || (GR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Kp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = dp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = o0(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yu(function() {
          Im(null, null, e, !1, function() {
            e._reactRootContainer = null, $0(e);
          });
        }), !0;
      } else {
        {
          var u = o0(e), s = !!(u && Do(u)), f = e.nodeType === Wr && Kp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Tr(T_), Eo(x_), qv(w_), Os(Aa), Fd(Qv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Sc(Y1), ay(HS, zb, Yu);
    function $_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ym(t))
        throw new Error("Target container is not a DOM element.");
      return C_(e, t, null, a);
    }
    function Y_(e, t, a, i) {
      return V_(e, t, a, i);
    }
    var s0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Rf, Mh, oo, Ec, HS]
    };
    function I_(e, t) {
      return s0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), M_(e, t);
    }
    function Q_(e, t, a) {
      return s0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), z_(e, t, a);
    }
    function W_(e) {
      return tR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yu(e);
    }
    var G_ = L_({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: n0,
      rendererPackageName: "react-dom"
    });
    if (!G_ && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qR = window.location.protocol;
      /^(https?|file):$/.test(qR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s0, Ya.createPortal = $_, Ya.createRoot = I_, Ya.findDOMNode = F_, Ya.flushSync = W_, Ya.hydrate = H_, Ya.hydrateRoot = Q_, Ya.render = P_, Ya.unmountComponentAtNode = B_, Ya.unstable_batchedUpdates = HS, Ya.unstable_renderSubtreeIntoContainer = Y_, Ya.version = n0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ya;
}
function o1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o1);
    } catch (B) {
      console.error(B);
    }
  }
}
process.env.NODE_ENV === "production" ? (o1(), v0.exports = ik()) : v0.exports = lk();
var uk = v0.exports, h0, Wm = uk;
if (process.env.NODE_ENV === "production")
  h0 = Wm.createRoot, Wm.hydrateRoot;
else {
  var i1 = Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  h0 = function(B, G) {
    i1.usingClientEntryPoint = !0;
    try {
      return Wm.createRoot(B, G);
    } finally {
      i1.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ok = (B) => B.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), s1 = (...B) => B.filter((G, M, Je) => !!G && Je.indexOf(G) === M).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ck = wr.forwardRef(
  ({
    color: B = "currentColor",
    size: G = 24,
    strokeWidth: M = 2,
    absoluteStrokeWidth: Je,
    className: Le = "",
    children: Oe,
    iconNode: S,
    ...xt
  }, ae) => wr.createElement(
    "svg",
    {
      ref: ae,
      ...sk,
      width: G,
      height: G,
      stroke: B,
      strokeWidth: Je ? Number(M) * 24 / Number(G) : M,
      className: s1("lucide", Le),
      ...xt
    },
    [
      ...S.map(([fe, et]) => wr.createElement(fe, et)),
      ...Array.isArray(Oe) ? Oe : [Oe]
    ]
  )
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = (B, G) => {
  const M = wr.forwardRef(
    ({ className: Je, ...Le }, Oe) => wr.createElement(ck, {
      ref: Oe,
      iconNode: G,
      className: s1(`lucide-${ok(B)}`, Je),
      ...Le
    })
  );
  return M.displayName = `${B}`, M;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fk = lc("FlipHorizontal2", [
  ["path", { d: "m3 7 5 5-5 5V7", key: "couhi7" }],
  ["path", { d: "m21 7-5 5 5 5V7", key: "6ouia7" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 2v2", key: "tus03m" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dk = lc("Layers3", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  [
    "path",
    {
      d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
      key: "1e5n1m"
    }
  ],
  [
    "path",
    {
      d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
      key: "1iwflc"
    }
  ]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pk = lc("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vk = lc("Rotate3d", [
  [
    "path",
    {
      d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",
      key: "10n0gc"
    }
  ],
  ["path", { d: "m15.194 13.707 3.814 1.86-1.86 3.814", key: "16shm9" }],
  [
    "path",
    {
      d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",
      key: "1lxi77"
    }
  ]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hk = lc("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mk = lc("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yk = lc("UsersRound", [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
]), gk = [
  {
    id: "language-provenance",
    family: "Language",
    title: "Provenance",
    quote: "Truth requires protection.",
    tagline: "Trust comes from traceability.",
    why: "Truth in data exists only when its origin can be proven.",
    how: ["Tag source with identity, time, place", "Encrypt and sign events"],
    reflection: "Origin provable = truth stands alone.",
    audiences: ["Field", "Engineering", "Finance", "Leadership", "Partners"]
  }
], Sk = { Field: ["language-provenance"] }, c1 = {
  Language: { color: "bg-slate-800", accent: "text-slate-300" },
  Automation: { color: "bg-amber-700", accent: "text-amber-100" },
  Truth: { color: "bg-blue-800", accent: "text-blue-100" },
  Flow: { color: "bg-cyan-800", accent: "text-cyan-100" },
  Conviviality: { color: "bg-emerald-800", accent: "text-emerald-100" },
  Design: { color: "bg-neutral-900", accent: "text-neutral-200" },
  Mechanism: { color: "bg-zinc-800", accent: "text-zinc-100" },
  Outcome: { color: "bg-orange-700", accent: "text-orange-100" },
  Metric: { color: "bg-violet-800", accent: "text-violet-100" },
  Vision: { color: "bg-white", accent: "text-neutral-700", border: "border" }
};
function l1({ children: B, onClick: G, active: M }) {
  return /* @__PURE__ */ Ye.jsx(
    "button",
    {
      onClick: G,
      className: `px-3 py-1 rounded-full text-xs font-medium border ${M ? "bg-black text-white border-black" : "bg-white/80 text-black border-black/20"}`,
      children: B
    }
  );
}
function Ek({ query: B, setQuery: G, audience: M, setAudience: Je, onClearStack: Le }) {
  return /* @__PURE__ */ Ye.jsx("div", { className: "sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/10", children: /* @__PURE__ */ Ye.jsxs("div", { className: "px-3 py-2 flex items-center gap-2", children: [
    /* @__PURE__ */ Ye.jsxs("div", { className: "flex items-center gap-2 flex-1 bg-black/5 rounded-xl px-3 py-2", children: [
      /* @__PURE__ */ Ye.jsx(hk, { size: 18 }),
      /* @__PURE__ */ Ye.jsx(
        "input",
        {
          className: "bg-transparent outline-none w-full text-sm",
          placeholder: "Search cards",
          value: B,
          onChange: (Oe) => G(Oe.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ Ye.jsx(
      "select",
      {
        className: "appearance-none text-sm bg-black text-white px-3 py-2 rounded-xl",
        value: M,
        onChange: (Oe) => Je(Oe.target.value),
        children: ["Field", "Engineering", "Finance", "Leadership", "Partners"].map((Oe) => /* @__PURE__ */ Ye.jsx("option", { value: Oe, children: Oe }, Oe))
      }
    ),
    /* @__PURE__ */ Ye.jsxs(
      "button",
      {
        onClick: Le,
        className: "ml-1 inline-flex items-center gap-1 bg-red-600 text-white text-xs px-3 py-2 rounded-xl",
        children: [
          /* @__PURE__ */ Ye.jsx(mk, { size: 14 }),
          " Clear"
        ]
      }
    )
  ] }) });
}
function Ck({ card: B, onAdd: G }) {
  const [M, Je] = wr.useState(!1), Le = c1[B.family] || {};
  return /* @__PURE__ */ Ye.jsx("div", { className: "group [perspective:1000px]", children: /* @__PURE__ */ Ye.jsxs(
    "div",
    {
      className: "relative h-56 w-full cursor-pointer [transform-style:preserve-3d] transition-transform duration-500",
      onClick: () => Je(!M),
      style: { transform: M ? "rotateY(180deg)" : "rotateY(0deg)" },
      children: [
        /* @__PURE__ */ Ye.jsxs("div", { className: `absolute inset-0 rounded-2xl p-3 border ${Le.border || "border-black/10"} ${Le.color} text-white [backface-visibility:hidden] flex flex-col`, children: [
          /* @__PURE__ */ Ye.jsxs("div", { className: "flex justify-between mb-2", children: [
            /* @__PURE__ */ Ye.jsx("span", { className: `text-[10px] uppercase tracking-wider ${Le.accent}`, children: B.family }),
            /* @__PURE__ */ Ye.jsx(fk, { size: 16 })
          ] }),
          /* @__PURE__ */ Ye.jsx("div", { className: "text-lg font-semibold", children: B.title }),
          /* @__PURE__ */ Ye.jsx("div", { className: `text-[12px] mt-1 ${Le.accent}`, children: B.tagline }),
          /* @__PURE__ */ Ye.jsx("div", { className: "mt-auto pt-2", children: /* @__PURE__ */ Ye.jsxs(
            "button",
            {
              onClick: (Oe) => {
                Oe.stopPropagation(), G(B.id);
              },
              className: "text-xs bg-white text-black px-3 py-1 rounded-lg inline-flex items-center gap-1",
              children: [
                /* @__PURE__ */ Ye.jsx(pk, { size: 14 }),
                " Add"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ Ye.jsxs("div", { className: "absolute inset-0 rounded-2xl p-3 bg-white text-black border border-black/10 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col", children: [
          /* @__PURE__ */ Ye.jsxs("div", { className: "flex justify-between mb-1", children: [
            /* @__PURE__ */ Ye.jsx("span", { className: "text-[10px] uppercase tracking-wider text-black/60", children: "Back" }),
            /* @__PURE__ */ Ye.jsx(vk, { size: 16 })
          ] }),
          /* @__PURE__ */ Ye.jsx("div", { className: "text-[12px] mb-2", children: B.why }),
          /* @__PURE__ */ Ye.jsx("ul", { className: "text-[12px] list-disc pl-4 space-y-1", children: (B.how || []).map((Oe, S) => /* @__PURE__ */ Ye.jsx("li", { children: Oe }, S)) }),
          /* @__PURE__ */ Ye.jsx("div", { className: "mt-2 text-[12px] italic text-black/70", children: B.reflection })
        ] })
      ]
    }
  ) });
}
function Rk({ ids: B, cardMap: G, onRemove: M }) {
  return /* @__PURE__ */ Ye.jsxs("div", { className: "p-3 border-t border-black/10 bg-white", children: [
    /* @__PURE__ */ Ye.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium mb-2", children: [
      /* @__PURE__ */ Ye.jsx(dk, { size: 16 }),
      " Stack (",
      B.length,
      ")"
    ] }),
    /* @__PURE__ */ Ye.jsx("div", { className: "grid grid-cols-2 gap-2", children: B.map((Je) => {
      const Le = G[Je];
      if (!Le) return null;
      const Oe = c1[Le.family] || {};
      return /* @__PURE__ */ Ye.jsxs("div", { className: `rounded-xl border ${Oe.border || "border-black/10"} p-2`, children: [
        /* @__PURE__ */ Ye.jsx("div", { className: "text-[10px] uppercase text-black/60", children: Le.family }),
        /* @__PURE__ */ Ye.jsx("div", { className: "text-[13px] font-semibold", children: Le.title }),
        /* @__PURE__ */ Ye.jsx("button", { onClick: () => M(Je), className: "mt-1 text-[11px] text-red-600", children: "Remove" })
      ] }, Je);
    }) })
  ] });
}
function Tk() {
  const [B, G] = wr.useState(""), [M, Je] = wr.useState("Field"), [Le, Oe] = wr.useState("All"), [S, xt] = wr.useState([]), [ae, fe] = wr.useState(gk), [et, J] = wr.useState(Sk);
  ek.useEffect(() => {
    async function le() {
      try {
        const [Ue, Ee] = await Promise.all([
          fetch("/assets/actual-deck/cards.json"),
          fetch("/assets/actual-deck/presets.json")
        ]);
        Ue.ok && fe(await Ue.json()), Ee.ok && J(await Ee.json());
      } catch {
      }
    }
    le();
  }, []);
  const Ce = wr.useMemo(() => ae.reduce((le, Ue) => (le[Ue.id] = Ue, le), {}), [ae]), ie = new Set(et[M] || []), Qe = ae.filter((le) => {
    const Ue = B.toLowerCase(), Ee = [le.title, le.quote, le.tagline, le.why, (le.how || []).join(" ")].join(" ").toLowerCase(), at = !Ue || Ee.includes(Ue), He = Le === "All" || le.family === Le, Xt = ie.size === 0 || ie.has(le.id) || (le.audiences || []).includes(M);
    return at && He && Xt;
  });
  function yt(le) {
    xt((Ue) => Ue.includes(le) ? Ue : [...Ue, le]);
  }
  function vt(le) {
    xt((Ue) => Ue.filter((Ee) => Ee !== le));
  }
  function Jt() {
    xt([]);
  }
  const st = [...new Set(ae.map((le) => le.family))];
  return /* @__PURE__ */ Ye.jsxs("div", { className: "min-h-screen bg-neutral-50 text-neutral-900", children: [
    /* @__PURE__ */ Ye.jsx(Ek, { query: B, setQuery: G, audience: M, setAudience: Je, onClearStack: Jt }),
    /* @__PURE__ */ Ye.jsxs("div", { className: "px-3 pt-2 text-xs text-black/70 flex items-center gap-1", children: [
      /* @__PURE__ */ Ye.jsx(yk, { size: 14 }),
      " Audience preset: ",
      /* @__PURE__ */ Ye.jsx("b", { children: M })
    ] }),
    /* @__PURE__ */ Ye.jsxs("div", { className: "px-3 py-2 flex gap-2 overflow-x-auto no-scrollbar", children: [
      st.map((le) => /* @__PURE__ */ Ye.jsx(l1, { onClick: () => Oe(Le === le ? "All" : le), active: Le === le, children: le }, le)),
      /* @__PURE__ */ Ye.jsx(l1, { onClick: () => Oe("All"), active: Le === "All", children: "All" })
    ] }),
    /* @__PURE__ */ Ye.jsx("div", { className: "px-3 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3", children: Qe.map((le) => /* @__PURE__ */ Ye.jsx(Ck, { card: le, onAdd: yt }, le.id)) }),
    /* @__PURE__ */ Ye.jsx("div", { className: "fixed bottom-0 inset-x-0", children: /* @__PURE__ */ Ye.jsx(Rk, { ids: S, cardMap: Ce, onRemove: vt }) }),
    /* @__PURE__ */ Ye.jsx("div", { className: "sr-only", children: "Deck loads from /assets/actual-deck/*.json" })
  ] });
}
h0(document.getElementById("actual-deck")).render(/* @__PURE__ */ Ye.jsx(Tk, {}));
