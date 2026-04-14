var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$3 = Symbol.for("react.element"), n$3 = Symbol.for("react.portal"), p$4 = Symbol.for("react.fragment"), q$4 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u$1 = Symbol.for("react.context"), v$4 = Symbol.for("react.forward_ref"), w$3 = Symbol.for("react.suspense"), x$3 = Symbol.for("react.memo"), y$3 = Symbol.for("react.lazy"), z$4 = Symbol.iterator;
function A$3(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z$4 && a[z$4] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$3 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$3 = Object.assign, D$3 = {};
function E$3(a, b2, e2) {
  this.props = a;
  this.context = b2;
  this.refs = D$3;
  this.updater = e2 || B$3;
}
E$3.prototype.isReactComponent = {};
E$3.prototype.setState = function(a, b2) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b2, "setState");
};
E$3.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F$2() {
}
F$2.prototype = E$3.prototype;
function G$3(a, b2, e2) {
  this.props = a;
  this.context = b2;
  this.refs = D$3;
  this.updater = e2 || B$3;
}
var H$2 = G$3.prototype = new F$2();
H$2.constructor = G$3;
C$3(H$2, E$3.prototype);
H$2.isPureReactComponent = true;
var I$3 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$2 = { key: true, ref: true, __self: true, __source: true };
function M$2(a, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J$1.call(b2, d2) && !L$2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2) c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a && a.defaultProps) for (d2 in g2 = a.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$3, type: a, key: k2, ref: h2, props: c2, _owner: K$2.current };
}
function N$2(a, b2) {
  return { $$typeof: l$3, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$3;
}
function escape$2(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var P$2 = /\/+/g;
function Q$2(a, b2) {
  return "object" === typeof a && null !== a && null != a.key ? escape$2("" + a.key) : b2.toString(36);
}
function R$1(a, b2, e2, d2, c2) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2) a = null;
  var h2 = false;
  if (null === a) h2 = true;
  else switch (k2) {
    case "string":
    case "number":
      h2 = true;
      break;
    case "object":
      switch (a.$$typeof) {
        case l$3:
        case n$3:
          h2 = true;
      }
  }
  if (h2) return h2 = a, c2 = c2(h2), a = "" === d2 ? "." + Q$2(h2, 0) : d2, I$3(c2) ? (e2 = "", null != a && (e2 = a.replace(P$2, "$&/") + "/"), R$1(c2, b2, e2, "", function(a2) {
    return a2;
  })) : null != c2 && (O$1(c2) && (c2 = N$2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$2, "$&/") + "/") + a)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$3(a)) for (var g2 = 0; g2 < a.length; g2++) {
    k2 = a[g2];
    var f2 = d2 + Q$2(k2, g2);
    h2 += R$1(k2, b2, e2, f2, c2);
  }
  else if (f2 = A$3(a), "function" === typeof f2) for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d2 + Q$2(k2, g2++), h2 += R$1(k2, b2, e2, f2, c2);
  else if ("object" === k2) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$2(a, b2, e2) {
  if (null == a) return a;
  var d2 = [], c2 = 0;
  R$1(a, d2, "", "", function(a2) {
    return b2.call(e2, a2, c2++);
  });
  return d2;
}
function T$2(a) {
  if (-1 === a._status) {
    var b2 = a._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
    }, function(b3) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
    });
    -1 === a._status && (a._status = 0, a._result = b2);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U$2 = { current: null }, V$1 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$2 };
function X$2() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$2, forEach: function(a, b2, e2) {
  S$2(a, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a) {
  var b2 = 0;
  S$2(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return S$2(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$3;
react_production_min.Fragment = p$4;
react_production_min.Profiler = r$2;
react_production_min.PureComponent = G$3;
react_production_min.StrictMode = q$4;
react_production_min.Suspense = w$3;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.act = X$2;
react_production_min.cloneElement = function(a, b2, e2) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d2 = C$3({}, a.props), c2 = a.key, k2 = a.ref, h2 = a._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$2.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a.type && a.type.defaultProps) var g2 = a.type.defaultProps;
    for (f2 in b2) J$1.call(b2, f2) && !L$2.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$3, type: a.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u$1, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t$1, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a) {
  var b2 = M$2.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$4, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y$3, _payload: { _status: -1, _result: a }, _init: T$2 };
};
react_production_min.memo = function(a, b2) {
  return { $$typeof: x$3, type: a, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a) {
  var b2 = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b2;
  }
};
react_production_min.unstable_act = X$2;
react_production_min.useCallback = function(a, b2) {
  return U$2.current.useCallback(a, b2);
};
react_production_min.useContext = function(a) {
  return U$2.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$2.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b2) {
  return U$2.current.useEffect(a, b2);
};
react_production_min.useId = function() {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function(a, b2, e2) {
  return U$2.current.useImperativeHandle(a, b2, e2);
};
react_production_min.useInsertionEffect = function(a, b2) {
  return U$2.current.useInsertionEffect(a, b2);
};
react_production_min.useLayoutEffect = function(a, b2) {
  return U$2.current.useLayoutEffect(a, b2);
};
react_production_min.useMemo = function(a, b2) {
  return U$2.current.useMemo(a, b2);
};
react_production_min.useReducer = function(a, b2, e2) {
  return U$2.current.useReducer(a, b2, e2);
};
react_production_min.useRef = function(a) {
  return U$2.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$2.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b2, e2) {
  return U$2.current.useSyncExternalStore(a, b2, e2);
};
react_production_min.useTransition = function() {
  return U$2.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$2 = reactExports, k$3 = Symbol.for("react.element"), l$2 = Symbol.for("react.fragment"), m$4 = Object.prototype.hasOwnProperty, n$2 = f$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$3 = { key: true, ref: true, __self: true, __source: true };
function q$3(c2, a, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a.key && (e2 = "" + a.key);
  void 0 !== a.ref && (h2 = a.ref);
  for (b2 in a) m$4.call(a, b2) && !p$3.hasOwnProperty(b2) && (d2[b2] = a[b2]);
  if (c2 && c2.defaultProps) for (b2 in a = c2.defaultProps, a) void 0 === d2[b2] && (d2[b2] = a[b2]);
  return { $$typeof: k$3, type: c2, key: e2, ref: h2, props: d2, _owner: n$2.current };
}
reactJsxRuntime_production_min.Fragment = l$2;
reactJsxRuntime_production_min.jsx = q$3;
reactJsxRuntime_production_min.jsxs = q$3;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports$1) {
  function f2(a, b2) {
    var c2 = a.length;
    a.push(b2);
    a: for (; 0 < c2; ) {
      var d2 = c2 - 1 >>> 1, e2 = a[d2];
      if (0 < g2(e2, b2)) a[d2] = b2, a[c2] = e2, c2 = d2;
      else break a;
    }
  }
  function h2(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length) return null;
    var b2 = a[0], c2 = a.pop();
    if (c2 !== b2) {
      a[0] = c2;
      a: for (var d2 = 0, e2 = a.length, w2 = e2 >>> 1; d2 < w2; ) {
        var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n2 = m2 + 1, x = a[n2];
        if (0 > g2(C2, c2)) n2 < e2 && 0 > g2(x, C2) ? (a[d2] = x, a[n2] = c2, d2 = n2) : (a[d2] = C2, a[m2] = c2, d2 = m2);
        else if (n2 < e2 && 0 > g2(x, c2)) a[d2] = x, a[n2] = c2, d2 = n2;
        else break a;
      }
    }
    return b2;
  }
  function g2(a, b2) {
    var c2 = a.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports$1.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports$1.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u4 = 1, v2 = null, y3 = 3, z2 = false, A2 = false, B3 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback) k2(t2);
      else if (b2.startTime <= a) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else break;
      b2 = h2(t2);
    }
  }
  function H2(a) {
    B3 = false;
    G2(a);
    if (!A2) if (null !== h2(r2)) A2 = true, I2(J2);
    else {
      var b2 = h2(t2);
      null !== b2 && K2(H2, b2.startTime - a);
    }
  }
  function J2(a, b2) {
    A2 = false;
    B3 && (B3 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y3;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y3 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports$1.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y3 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports$1.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports$1.unstable_now();
      Q2 = a;
      var b2 = true;
      try {
        b2 = O2(true, a);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b2) {
    L2 = D2(function() {
      a(exports$1.unstable_now());
    }, b2);
  }
  exports$1.unstable_IdlePriority = 5;
  exports$1.unstable_ImmediatePriority = 1;
  exports$1.unstable_LowPriority = 4;
  exports$1.unstable_NormalPriority = 3;
  exports$1.unstable_Profiling = null;
  exports$1.unstable_UserBlockingPriority = 2;
  exports$1.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports$1.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports$1.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports$1.unstable_getCurrentPriorityLevel = function() {
    return y3;
  };
  exports$1.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports$1.unstable_next = function(a) {
    switch (y3) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y3;
    }
    var c2 = y3;
    y3 = b2;
    try {
      return a();
    } finally {
      y3 = c2;
    }
  };
  exports$1.unstable_pauseExecution = function() {
  };
  exports$1.unstable_requestPaint = function() {
  };
  exports$1.unstable_runWithPriority = function(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c2 = y3;
    y3 = a;
    try {
      return b2();
    } finally {
      y3 = c2;
    }
  };
  exports$1.unstable_scheduleCallback = function(a, b2, c2) {
    var d2 = exports$1.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a = { id: u4++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a.sortIndex = c2, f2(t2, a), null === h2(r2) && a === h2(t2) && (B3 ? (E2(L2), L2 = -1) : B3 = true, K2(H2, c2 - d2))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports$1.unstable_shouldYield = M2;
  exports$1.unstable_wrapCallback = function(a) {
    var b2 = y3;
    return function() {
      var c2 = y3;
      y3 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        y3 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p$2(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b2) {
  ha(a, b2);
  ha(a + "Capture", b2);
}
function ha(a, b2) {
  ea[a] = b2;
  for (a = 0; a < b2.length; a++) da.add(b2[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a)) return true;
  if (ja.call(la, a)) return false;
  if (ka.test(a)) return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type) return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2) return false;
      if (null !== c2) return !c2.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c2, d2)) return true;
  if (d2) return false;
  if (null !== c2) switch (c2.type) {
    case 3:
      return !b2;
    case 4:
      return false === b2;
    case 5:
      return isNaN(b2);
    case 6:
      return isNaN(b2) || 1 > b2;
  }
  return false;
}
function v$3(a, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$3 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z$3[a] = new v$3(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b2 = a[0];
  z$3[b2] = new v$3(b2, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z$3[a] = new v$3(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z$3[a] = new v$3(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z$3[a] = new v$3(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z$3[a] = new v$3(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z$3[a] = new v$3(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z$3[a] = new v$3(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z$3[a] = new v$3(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b2 = a.replace(
    ra,
    sa
  );
  z$3[b2] = new v$3(b2, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z$3[b2] = new v$3(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z$3[b2] = new v$3(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z$3[a] = new v$3(a, 1, false, a.toLowerCase(), null, false, false);
});
z$3.xlinkHref = new v$3("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z$3[a] = new v$3(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b2, c2, d2) {
  var e2 = z$3.hasOwnProperty(b2) ? z$3[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a) return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A$2 = Object.assign, La;
function Ma(a) {
  if (void 0 === La) try {
    throw Error();
  } catch (c2) {
    var b2 = c2.stack.trim().match(/\n( *(at )?)/);
    La = b2 && b2[1] || "";
  }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b2) {
  if (!a || Na) return "";
  Na = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2) if (b2 = function() {
      throw Error();
    }, Object.defineProperty(b2.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b2, []);
      } catch (l2) {
        var d2 = l2;
      }
      Reflect.construct(a, [], b2);
    } else {
      try {
        b2.call();
      } catch (l2) {
        d2 = l2;
      }
      a.call(b2.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; ) h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e2[g2] !== f2[h2]) {
        if (1 !== g2 || 1 !== h2) {
          do
            if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
              var k2 = "\n" + e2[g2].replace(" at new ", " at ");
              a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
              return k2;
            }
          while (1 <= g2 && 0 <= h2);
        }
        break;
      }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c2;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a) switch (a.$$typeof) {
    case Ca:
      return (a.displayName || "Context") + ".Consumer";
    case Ba:
      return (a._context.displayName || "Context") + ".Provider";
    case Da:
      var b2 = a.render;
      a = a.displayName;
      a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      return a;
    case Ga:
      return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
    case Ha:
      b2 = a._payload;
      a = a._init;
      try {
        return Qa(a(b2));
      } catch (c2) {
      }
  }
  return null;
}
function Ra(a) {
  var b2 = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
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
      if ("function" === typeof b2) return b2.displayName || b2.name || null;
      if ("string" === typeof b2) return b2;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b2 = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a) {
  var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
  if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a2) {
      d2 = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a2) {
      d2 = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b2];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a) return false;
  var b2 = a._valueTracker;
  if (!b2) return true;
  var c2 = b2.getValue();
  var d2 = "";
  a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d2;
  return a !== c2 ? (b2.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;
  try {
    return a.activeElement || a.body;
  } catch (b2) {
    return a.body;
  }
}
function Ya(a, b2) {
  var c2 = b2.checked;
  return A$2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
}
function Za(a, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a, b2) {
  b2 = b2.checked;
  null != b2 && ta(a, "checked", b2, false);
}
function bb(a, b2) {
  ab(a, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2) if ("number" === d2) {
    if (0 === c2 && "" === a.value || a.value != c2) a.value = "" + c2;
  } else a.value !== "" + c2 && (a.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
}
function db(a, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
    b2 = "" + a._wrapperState.initialValue;
    c2 || b2 === a.value || (a.value = b2);
    a.defaultValue = b2;
  }
  c2 = a.name;
  "" !== c2 && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c2 && (a.name = c2);
}
function cb(a, b2, c2) {
  if ("number" !== b2 || Xa(a.ownerDocument) !== a) null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a, b2, c2, d2) {
  a = a.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++) b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a.length; c2++) e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a.length; e2++) {
      if (a[e2].value === c2) {
        a[e2].selected = true;
        d2 && (a[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a[e2].disabled || (b2 = a[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a, b2) {
  if (null != b2.dangerouslySetInnerHTML) throw Error(p$2(91));
  return A$2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2) throw Error(p$2(92));
      if (eb(c2)) {
        if (1 < c2.length) throw Error(p$2(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a._wrapperState = { initialValue: Sa(c2) };
}
function ib(a, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
  null != d2 && (a.defaultValue = "" + d2);
}
function jb(a) {
  var b2 = a.textContent;
  b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b2) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b2, c2, d2, e2);
    });
  } : a;
}(function(a, b2) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
    for (; b2.firstChild; ) a.appendChild(b2.firstChild);
  }
});
function ob(a, b2) {
  if (b2) {
    var c2 = a.firstChild;
    if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b2] = pb[a];
  });
});
function rb(a, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
}
function sb(a, b2) {
  a = a.style;
  for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
    var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
    "float" === c2 && (c2 = "cssFloat");
    d2 ? a.setProperty(c2, e2) : a[c2] = e2;
  }
}
var tb = A$2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b2) {
  if (b2) {
    if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p$2(137, a));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children) throw Error(p$2(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p$2(61));
    }
    if (null != b2.style && "object" !== typeof b2.style) throw Error(p$2(62));
  }
}
function vb(a, b2) {
  if (-1 === a.indexOf("-")) return "string" === typeof b2.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb) throw Error(p$2(280));
    var b2 = a.stateNode;
    b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a);
    if (b2) for (a = 0; a < b2.length; a++) Bb(b2[a]);
  }
}
function Gb(a, b2) {
  return a(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a, b2, c2) {
  if (Ib) return a(b2, c2);
  Ib = true;
  try {
    return Gb(a, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a, b2) {
  var c2 = a.stateNode;
  if (null === c2) return null;
  var d2 = Db(c2);
  if (null === d2) return null;
  c2 = d2[b2];
  a: switch (b2) {
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
      (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d2;
      break a;
    default:
      a = false;
  }
  if (a) return null;
  if (c2 && "function" !== typeof c2) throw Error(p$2(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a) {
  Lb = false;
}
function Nb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p$2(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b2 = a, c2 = a;
  if (a.alternate) for (; b2.return; ) b2 = b2.return;
  else {
    a = b2;
    do
      b2 = a, 0 !== (b2.flags & 4098) && (c2 = b2.return), a = b2.return;
    while (a);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b2 = a.memoizedState;
    null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
    if (null !== b2) return b2.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a) throw Error(p$2(188));
}
function Yb(a) {
  var b2 = a.alternate;
  if (!b2) {
    b2 = Vb(a);
    if (null === b2) throw Error(p$2(188));
    return b2 !== a ? null : a;
  }
  for (var c2 = a, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2) break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2) return Xb(e2), a;
        if (f2 === d2) return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$2(188));
    }
    if (c2.return !== d2.return) c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) throw Error(p$2(189));
      }
    }
    if (c2.alternate !== d2) throw Error(p$2(190));
  }
  if (3 !== c2.tag) throw Error(p$2(188));
  return c2.stateNode.current === c2 ? a : b2;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag) return a;
  for (a = a.child; null !== a; ) {
    var b2 = $b(a);
    if (null !== b2) return b2;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B$2 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
  } catch (b2) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
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
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b2) {
  var c2 = a.pendingLanes;
  if (0 === c2) return 0;
  var d2 = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e2;
    0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
  } else g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
  if (0 === d2) return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a.entangledLanes;
  if (0 !== b2) for (a = a.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
  return d2;
}
function vc(a, b2) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
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
      return b2 + 5e3;
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
function wc(a, b2) {
  for (var c2 = a.suspendedLanes, d2 = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2)) e2[g2] = vc(h2, b2);
    } else k2 <= b2 && (a.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a);
  return b2;
}
function Ac(a, b2, c2) {
  a.pendingLanes |= b2;
  536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b2 = 31 - oc(b2);
  a[b2] = c2;
}
function Bc(a, b2) {
  var c2 = a.pendingLanes & ~b2;
  a.pendingLanes = b2;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b2;
  a.mutableReadLanes &= b2;
  a.entangledLanes &= b2;
  b2 = a.entanglements;
  var d2 = a.eventTimes;
  for (a = a.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a, b2) {
  var c2 = a.entangledLanes |= b2;
  for (a = a.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e2 = 1 << d2;
    e2 & b2 | a[d2] & b2 && (a[d2] |= b2);
    c2 &= ~e2;
  }
}
var C$2 = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b2) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a, b2, c2, d2, e2, f2) {
  if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
  a.eventSystemFlags |= d2;
  b2 = a.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a;
}
function Uc(a, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a, b2, c2, d2, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b2, c2, d2, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c2, d2, e2)), true;
  }
  return false;
}
function Vc(a) {
  var b2 = Wc(a.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a.blockedOn = b2;
          Ic(a.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn) return false;
  for (var b2 = a.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
    if (null === c2) {
      c2 = a.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else return b2 = Cb(c2), null !== b2 && Fc(b2), a.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a, b2, c2) {
  Xc(a) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b2) {
  a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b2(b3) {
    return ad(b3, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b2, c2, d2) {
  var e2 = C$2, f2 = cd.transition;
  cd.transition = null;
  try {
    C$2 = 1, fd(a, b2, c2, d2);
  } finally {
    C$2 = e2, cd.transition = f2;
  }
}
function gd(a, b2, c2, d2) {
  var e2 = C$2, f2 = cd.transition;
  cd.transition = null;
  try {
    C$2 = 4, fd(a, b2, c2, d2);
  } finally {
    C$2 = e2, cd.transition = f2;
  }
}
function fd(a, b2, c2, d2) {
  if (dd) {
    var e2 = Yc(a, b2, c2, d2);
    if (null === e2) hd(a, b2, d2, id, c2), Sc(a, d2);
    else if (Uc(e2, a, b2, c2, d2)) d2.stopPropagation();
    else if (Sc(a, d2), b2 & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b2, c2, d2);
        null === f2 && hd(a, b2, d2, id, c2);
        if (f2 === e2) break;
        e2 = f2;
      }
      null !== e2 && d2.stopPropagation();
    } else hd(a, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a, b2, c2, d2) {
  id = null;
  a = xb(d2);
  a = Wc(a);
  if (null !== a) if (b2 = Vb(a), null === b2) a = null;
  else if (c2 = b2.tag, 13 === c2) {
    a = Wb(b2);
    if (null !== a) return a;
    a = null;
  } else if (3 === c2) {
    if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
    a = null;
  } else b2 !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
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
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a = 0; a < c2 && b2[a] === e2[a]; a++) ;
  var g2 = c2 - a;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++) ;
  return md = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
}
function od(a) {
  var b2 = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a) a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A$2(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$2({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a) return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A$2({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$2({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$2({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$2({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
}, Nd = {
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
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A$2({}, ud, { key: function(a) {
  if (a.key) {
    var b2 = Md[a.key] || a.key;
    if ("Unidentified" !== b2) return b2;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$2({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae$1 = ia && "CompositionEvent" in window, be$1 = null;
ia && "documentMode" in document && (be$1 = document.documentMode);
var ce$1 = ia && "TextEvent" in window && !be$1, de$1 = ia && (!ae$1 || be$1 && 8 < be$1 && 11 >= be$1), ee = String.fromCharCode(32), fe = false;
function ge$1(a, b2) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he$1(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie$1 = false;
function je$1(a, b2) {
  switch (a) {
    case "compositionend":
      return he$1(b2);
    case "keypress":
      if (32 !== b2.which) return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b2.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke$1(a, b2) {
  if (ie$1) return "compositionend" === a || !ae$1 && ge$1(a, b2) ? (a = nd(), md = ld = kd = null, ie$1 = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length) return b2.char;
        if (b2.which) return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de$1 && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le$1 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me$1(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b2 ? !!le$1[a.type] : "textarea" === b2 ? true : false;
}
function ne$1(a, b2, c2, d2) {
  Eb(d2);
  b2 = oe$1(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
}
var pe$1 = null, qe$1 = null;
function re$1(a) {
  se$1(a, 0);
}
function te$1(a) {
  var b2 = ue$1(a);
  if (Wa(b2)) return a;
}
function ve$1(a, b2) {
  if ("change" === a) return b2;
}
var we$1 = false;
if (ia) {
  var xe$1;
  if (ia) {
    var ye$1 = "oninput" in document;
    if (!ye$1) {
      var ze$1 = document.createElement("div");
      ze$1.setAttribute("oninput", "return;");
      ye$1 = "function" === typeof ze$1.oninput;
    }
    xe$1 = ye$1;
  } else xe$1 = false;
  we$1 = xe$1 && (!document.documentMode || 9 < document.documentMode);
}
function Ae$1() {
  pe$1 && (pe$1.detachEvent("onpropertychange", Be$1), qe$1 = pe$1 = null);
}
function Be$1(a) {
  if ("value" === a.propertyName && te$1(qe$1)) {
    var b2 = [];
    ne$1(b2, qe$1, a, xb(a));
    Jb(re$1, b2);
  }
}
function Ce$1(a, b2, c2) {
  "focusin" === a ? (Ae$1(), pe$1 = b2, qe$1 = c2, pe$1.attachEvent("onpropertychange", Be$1)) : "focusout" === a && Ae$1();
}
function De$1(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te$1(qe$1);
}
function Ee$1(a, b2) {
  if ("click" === a) return te$1(b2);
}
function Fe$1(a, b2) {
  if ("input" === a || "change" === a) return te$1(b2);
}
function Ge$1(a, b2) {
  return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
}
var He$1 = "function" === typeof Object.is ? Object.is : Ge$1;
function Ie$1(a, b2) {
  if (He$1(a, b2)) return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2) return false;
  var c2 = Object.keys(a), d2 = Object.keys(b2);
  if (c2.length !== d2.length) return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !He$1(a[e2], b2[e2])) return false;
  }
  return true;
}
function Je$1(a) {
  for (; a && a.firstChild; ) a = a.firstChild;
  return a;
}
function Ke$1(a, b2) {
  var c2 = Je$1(a);
  a = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a + c2.textContent.length;
      if (a <= b2 && d2 >= b2) return { node: c2, offset: b2 - a };
      a = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je$1(c2);
  }
}
function Le$1(a, b2) {
  return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le$1(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
}
function Me$1() {
  for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2) a = b2.contentWindow;
    else break;
    b2 = Xa(a.document);
  }
  return b2;
}
function Ne$1(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
}
function Oe$1(a) {
  var b2 = Me$1(), c2 = a.focusedElem, d2 = a.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le$1(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne$1(c2)) {
      if (b2 = d2.start, a = d2.end, void 0 === a && (a = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
      else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
        !a.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Ke$1(c2, f2);
        var g2 = Ke$1(
          c2,
          d2
        );
        e2 && g2 && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d2 ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
      }
    }
    b2 = [];
    for (a = c2; a = a.parentNode; ) 1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++) a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe$1 = ia && "documentMode" in document && 11 >= document.documentMode, Qe$1 = null, Re$1 = null, Se$1 = null, Te$1 = false;
function Ue$1(a, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te$1 || null == Qe$1 || Qe$1 !== Xa(d2) || (d2 = Qe$1, "selectionStart" in d2 && Ne$1(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se$1 && Ie$1(Se$1, d2) || (Se$1 = d2, d2 = oe$1(Re$1, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe$1)));
}
function Ve(a, b2) {
  var c2 = {};
  c2[a.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a] = "webkit" + b2;
  c2["Moz" + a] = "moz" + b2;
  return c2;
}
var We$1 = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe$1 = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We$1.animationend.animation, delete We$1.animationiteration.animation, delete We$1.animationstart.animation), "TransitionEvent" in window || delete We$1.transitionend.transition);
function Ze$1(a) {
  if (Xe$1[a]) return Xe$1[a];
  if (!We$1[a]) return a;
  var b2 = We$1[a], c2;
  for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye) return Xe$1[a] = b2[c2];
  return a;
}
var $e$1 = Ze$1("animationend"), af = Ze$1("animationiteration"), bf = Ze$1("animationstart"), cf = Ze$1("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b2) {
  df.set(a, b2);
  fa(b2, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e$1, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b2, c2) {
  var d2 = a.type || "unknown-event";
  a.currentTarget = c2;
  Ub(d2, b2, void 0, a);
  a.currentTarget = null;
}
function se$1(a, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a.length; c2++) {
    var d2 = a[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
        var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e2.isPropagationStopped()) break a;
        nf(e2, h2, l2);
        f2 = k2;
      }
      else for (g2 = 0; g2 < d2.length; g2++) {
        h2 = d2[g2];
        k2 = h2.instance;
        l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e2.isPropagationStopped()) break a;
        nf(e2, h2, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a = Rb, Qb = false, Rb = null, a;
}
function D$2(a, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a + "__bubble";
  c2.has(d2) || (pf(b2, a, 2, false), c2.add(d2));
}
function qf(a, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
    });
    var b2 = 9 === a.nodeType ? a : a.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : void 0 !== e2 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
}
function hd(a, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
    if (null === d2) return;
    var g2 = d2.tag;
    if (3 === g2 || 4 === g2) {
      var h2 = d2.stateNode.containerInfo;
      if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
      if (4 === g2) for (g2 = d2.return; null !== g2; ) {
        var k2 = g2.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
        }
        g2 = g2.return;
      }
      for (; null !== h2; ) {
        g2 = Wc(h2);
        if (null === g2) return;
        k2 = g2.tag;
        if (5 === k2 || 6 === k2) {
          d2 = f2 = g2;
          continue a;
        }
        h2 = h2.parentNode;
      }
    }
    d2 = d2.return;
  }
  Jb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a);
      if (void 0 !== h3) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c2)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e$1:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u4; null !== w2; ) {
          u4 = w2;
          var F2 = u4.stateNode;
          5 === u4.tag && null !== F2 && (u4 = F2, null !== x && (F2 = Kb(w2, x), null != F2 && t2.push(tf(w2, F2, u4))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue$1(k3);
            u4 = null == n2 ? h3 : ue$1(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u4;
            F2 = null;
            Wc(e3) === d3 && (t2 = new t2(x, w2 + "enter", n2, c2, e3), t2.target = u4, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x = n2;
              w2 = 0;
              for (u4 = t2; u4; u4 = vf(u4)) w2++;
              u4 = 0;
              for (F2 = x; F2; F2 = vf(F2)) u4++;
              for (; 0 < w2 - u4; ) t2 = vf(t2), w2--;
              for (; 0 < u4 - w2; ) x = vf(x), u4--;
              for (; w2--; ) {
                if (t2 === x || null !== x && t2 === x.alternate) break b;
                t2 = vf(t2);
                x = vf(x);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue$1(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type) var na = ve$1;
        else if (me$1(h3)) if (we$1) na = Fe$1;
        else {
          na = De$1;
          var xa = Ce$1;
        }
        else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee$1);
        if (na && (na = na(a, d3))) {
          ne$1(g3, na, c2, e3);
          break a;
        }
        xa && xa(a, h3, d3);
        "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d3 ? ue$1(d3) : window;
      switch (a) {
        case "focusin":
          if (me$1(xa) || "true" === xa.contentEditable) Qe$1 = xa, Re$1 = d3, Se$1 = null;
          break;
        case "focusout":
          Se$1 = Re$1 = Qe$1 = null;
          break;
        case "mousedown":
          Te$1 = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te$1 = false;
          Ue$1(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe$1) break;
        case "keydown":
        case "keyup":
          Ue$1(g3, c2, e3);
      }
      var $a;
      if (ae$1) b: {
        switch (a) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      }
      else ie$1 ? ge$1(a, c2) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de$1 && "ko" !== c2.locale && (ie$1 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie$1 && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = true)), xa = oe$1(d3, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he$1(c2), null !== $a && (ba.data = $a))));
      if ($a = ce$1 ? je$1(a, c2) : ke$1(a, c2)) d3 = oe$1(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
    }
    se$1(g3, b2);
  });
}
function tf(a, b2, c2) {
  return { instance: a, listener: b2, currentTarget: c2 };
}
function oe$1(a, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
    var e2 = a, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c2), null != f2 && d2.unshift(tf(a, f2, e2)), f2 = Kb(a, b2), null != f2 && d2.push(tf(a, f2, e2)));
    a = a.return;
  }
  return d2;
}
function vf(a) {
  if (null === a) return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2) break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b2, c2) {
  b2 = zf(b2);
  if (zf(a) !== b2 && c2) throw Error(p$2(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b2) {
  return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a.removeChild(c2);
    if (e2 && 8 === e2.nodeType) if (c2 = e2.data, "/$" === c2) {
      if (0 === d2) {
        a.removeChild(e2);
        bd(b2);
        return;
      }
      d2--;
    } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b2 = a.nodeType;
    if (1 === b2 || 3 === b2) break;
    if (8 === b2) {
      b2 = a.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
      if ("/$" === b2) return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b2 = 0; a; ) {
    if (8 === a.nodeType) {
      var c2 = a.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2) return a;
        b2--;
      } else "/$" === c2 && b2++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b2 = a[Of];
  if (b2) return b2;
  for (var c2 = a.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child) for (a = Mf(a); null !== a; ) {
        if (c2 = a[Of]) return c2;
        a = Mf(a);
      }
      return b2;
    }
    a = c2;
    c2 = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue$1(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(p$2(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E$2(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G$2(a, b2) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b2;
}
var Vf = {}, H$1 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b2) {
  var c2 = a.type.contextTypes;
  if (!c2) return Vf;
  var d2 = a.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2) e2[f2] = b2[f2];
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E$2(Wf);
  E$2(H$1);
}
function ag(a, b2, c2) {
  if (H$1.current !== Vf) throw Error(p$2(168));
  G$2(H$1, b2);
  G$2(Wf, c2);
}
function bg(a, b2, c2) {
  var d2 = a.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext) return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2) if (!(e2 in b2)) throw Error(p$2(108, Ra(a) || "Unknown", e2));
  return A$2({}, c2, d2);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$1.current;
  G$2(H$1, a);
  G$2(Wf, Wf.current);
  return true;
}
function dg(a, b2, c2) {
  var d2 = a.stateNode;
  if (!d2) throw Error(p$2(169));
  c2 ? (a = bg(a, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a, E$2(Wf), E$2(H$1), G$2(H$1, a)) : E$2(Wf);
  G$2(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b2 = C$2;
    try {
      var c2 = eg;
      for (C$2 = 1; a < c2.length; a++) {
        var d2 = c2[a];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
    } finally {
      C$2 = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b2;
}
function ug(a, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d2 = rg;
  a = sg;
  var e2 = 32 - oc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
    sg = f2 + a;
  } else rg = 1 << f2 | c2 << e2 | d2, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$2 = false, zg = null;
function Ag(a, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a;
  b2 = a.deletions;
  null === b2 ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
}
function Cg(a, b2) {
  switch (a.tag) {
    case 5:
      var c2 = a.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I$2) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a, b2)) {
        if (Dg(a)) throw Error(p$2(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a, b2) ? Ag(d2, c2) : (a.flags = a.flags & -4097 | 2, I$2 = false, xg = a);
      }
    } else {
      if (Dg(a)) throw Error(p$2(418));
      a.flags = a.flags & -4097 | 2;
      I$2 = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg) return false;
  if (!I$2) return Fg(a), I$2 = true, false;
  var b2;
  (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a)) throw Hg(), Error(p$2(418));
    for (; b2; ) Ag(a, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(p$2(317));
    a: {
      a = a.nextSibling;
      for (b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c2 = a.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b2--;
          } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; ) a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I$2 = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b2, c2) {
  a = c2.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag) throw Error(p$2(309));
        var d2 = c2.stateNode;
      }
      if (!d2) throw Error(p$2(147, a));
      var e2 = d2, f2 = "" + a;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
      b2 = function(a2) {
        var b3 = e2.refs;
        null === a2 ? delete b3[f2] : b3[f2] = a2;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a) throw Error(p$2(284));
    if (!c2._owner) throw Error(p$2(290, a));
  }
  return a;
}
function Mg(a, b2) {
  a = Object.prototype.toString.call(b2);
  throw Error(p$2(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
}
function Ng(a) {
  var b2 = a._init;
  return b2(a._payload);
}
function Og(a) {
  function b2(b3, c3) {
    if (a) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a) return null;
    for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a2, b3) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
    return a2;
  }
  function e2(a2, b3) {
    a2 = Pg(a2, b3);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a) return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a2, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function k2(a2, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya) return m2(a2, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d3 = e2(b3, c3.props), d3.ref = Lg(a2, b3, c3), d3.return = a2, d3;
    d3 = Rg(c3.type, c3.key, c3.props, null, a2.mode, d3);
    d3.ref = Lg(a2, b3, c3);
    d3.return = a2;
    return d3;
  }
  function l2(a2, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a2;
    return b3;
  }
  function m2(a2, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a2.mode, d3, f3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function q2(a2, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a2.mode, c3), b3.return = a2, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c3 = Rg(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = Lg(a2, null, b3), c3.return = a2, c3;
        case wa:
          return b3 = Sg(b3, a2.mode, c3), b3.return = a2, b3;
        case Ha:
          var d3 = b3._init;
          return q2(a2, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a2.mode, c3, null), b3.return = a2, b3;
      Mg(a2, b3);
    }
    return null;
  }
  function r2(a2, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e3 ? null : h2(a2, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va:
          return c3.key === e3 ? k2(a2, b3, c3, d3) : null;
        case wa:
          return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
        case Ha:
          return e3 = c3._init, r2(
            a2,
            b3,
            e3(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka(c3)) return null !== e3 ? null : m2(a2, b3, c3, d3, null);
      Mg(a2, c3);
    }
    return null;
  }
  function y3(a2, b3, c3, d3, e3) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a2, d3, e3);
        case wa:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
        case Ha:
          var f3 = d3._init;
          return y3(a2, b3, c3, f3(d3._payload), e3);
      }
      if (eb(d3) || Ka(d3)) return a2 = a2.get(c3) || null, m2(b3, a2, d3, e3, null);
      Mg(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, m3 = null, u4 = g3, w2 = g3 = 0, x = null; null !== u4 && w2 < h3.length; w2++) {
      u4.index > w2 ? (x = u4, u4 = null) : x = u4.sibling;
      var n3 = r2(e3, u4, h3[w2], k3);
      if (null === n3) {
        null === u4 && (u4 = x);
        break;
      }
      a && u4 && null === n3.alternate && b2(e3, u4);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u4 = x;
    }
    if (w2 === h3.length) return c2(e3, u4), I$2 && tg(e3, w2), l3;
    if (null === u4) {
      for (; w2 < h3.length; w2++) u4 = q2(e3, h3[w2], k3), null !== u4 && (g3 = f2(u4, g3, w2), null === m3 ? l3 = u4 : m3.sibling = u4, m3 = u4);
      I$2 && tg(e3, w2);
      return l3;
    }
    for (u4 = d2(e3, u4); w2 < h3.length; w2++) x = y3(u4, e3, w2, h3[w2], k3), null !== x && (a && null !== x.alternate && u4.delete(null === x.key ? w2 : x.key), g3 = f2(x, g3, w2), null === m3 ? l3 = x : m3.sibling = x, m3 = x);
    a && u4.forEach(function(a2) {
      return b2(e3, a2);
    });
    I$2 && tg(e3, w2);
    return l3;
  }
  function t2(e3, g3, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3) throw Error(p$2(150));
    h3 = l3.call(h3);
    if (null == h3) throw Error(p$2(151));
    for (var u4 = l3 = null, m3 = g3, w2 = g3 = 0, x = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x = m3, m3 = null) : x = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x);
        break;
      }
      a && m3 && null === t3.alternate && b2(e3, m3);
      g3 = f2(t3, g3, w2);
      null === u4 ? l3 = t3 : u4.sibling = t3;
      u4 = t3;
      m3 = x;
    }
    if (n3.done) return c2(
      e3,
      m3
    ), I$2 && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next()) n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u4 ? l3 = n3 : u4.sibling = n3, u4 = n3);
      I$2 && tg(e3, w2);
      return l3;
    }
    for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next()) n3 = y3(m3, e3, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u4 ? l3 = n3 : u4.sibling = n3, u4 = n3);
    a && m3.forEach(function(a2) {
      return b2(e3, a2);
    });
    I$2 && tg(e3, w2);
    return l3;
  }
  function J2(a2, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a2, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a2;
                    a2 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                  c2(a2, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = Lg(a2, l3, f3);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                }
                c2(a2, l3);
                break;
              } else b2(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d3 = Tg(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Lg(a2, d3, f3), h3.return = a2, a2 = h3);
          }
          return g2(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                c2(a2, d3.sibling);
                d3 = e2(d3, f3.children || []);
                d3.return = a2;
                a2 = d3;
                break a;
              } else {
                c2(a2, d3);
                break;
              }
              else b2(a2, d3);
              d3 = d3.sibling;
            }
            d3 = Sg(f3, a2.mode, h3);
            d3.return = a2;
            a2 = d3;
          }
          return g2(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d3, l3(f3._payload), h3);
      }
      if (eb(f3)) return n2(a2, d3, f3, h3);
      if (Ka(f3)) return t2(a2, d3, f3, h3);
      Mg(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = Qg(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2)) : c2(a2, d3);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a) {
  var b2 = Wg.current;
  E$2(Wg);
  a._currentValue = b2;
}
function bh(a, b2, c2) {
  for (; null !== a; ) {
    var d2 = a.alternate;
    (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a === c2) break;
    a = a.return;
  }
}
function ch(a, b2) {
  Xg = a;
  Zg = Yg = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (dh = true), a.firstContext = null);
}
function eh(a) {
  var b2 = a._currentValue;
  if (Zg !== a) if (a = { context: a, memoizedValue: b2, next: null }, null === Yg) {
    if (null === Xg) throw Error(p$2(308));
    Yg = a;
    Xg.dependencies = { lanes: 0, firstContext: a };
  } else Yg = Yg.next = a;
  return b2;
}
var fh = null;
function gh(a) {
  null === fh ? fh = [a] : fh.push(a);
}
function hh(a, b2, c2, d2) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, gh(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return ih(a, d2);
}
function ih(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a;
  for (a = a.return; null !== a; ) a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var jh = false;
function kh(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a, b2) {
  a = a.updateQueue;
  b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function mh(a, b2) {
  return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function nh(a, b2, c2) {
  var d2 = a.updateQueue;
  if (null === d2) return null;
  d2 = d2.shared;
  if (0 !== (K$1 & 2)) {
    var e2 = d2.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d2.pending = b2;
    return ih(a, c2);
  }
  e2 = d2.interleaved;
  null === e2 ? (b2.next = b2, gh(d2)) : (b2.next = e2.next, e2.next = b2);
  d2.interleaved = b2;
  return ih(a, c2);
}
function oh(a, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a, c2);
  }
}
function ph(a, b2) {
  var c2 = a.updateQueue, d2 = a.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a.updateQueue = c2;
    return;
  }
  a = c2.lastBaseUpdate;
  null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
  c2.lastBaseUpdate = b2;
}
function qh(a, b2, c2, d2) {
  var e2 = a.updateQueue;
  jh = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y3 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y3,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h2;
          r2 = b2;
          y3 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y3, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y3, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A$2({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else y3 = { eventTime: y3, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y3, k2 = q2) : m2 = m2.next = y3, g2 |= r2;
      h2 = h2.next;
      if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
      else r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else null === f2 && (e2.shared.lanes = 0);
    rh |= g2;
    a.lanes = g2;
    a.memoizedState = q2;
  }
}
function sh(a, b2, c2) {
  a = b2.effects;
  b2.effects = null;
  if (null !== a) for (b2 = 0; b2 < a.length; b2++) {
    var d2 = a[b2], e2 = d2.callback;
    if (null !== e2) {
      d2.callback = null;
      d2 = c2;
      if ("function" !== typeof e2) throw Error(p$2(191, e2));
      e2.call(d2);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a) {
  if (a === th) throw Error(p$2(174));
  return a;
}
function yh(a, b2) {
  G$2(wh, b2);
  G$2(vh, a);
  G$2(uh, th);
  a = b2.nodeType;
  switch (a) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
  }
  E$2(uh);
  G$2(uh, b2);
}
function zh() {
  E$2(uh);
  E$2(vh);
  E$2(wh);
}
function Ah(a) {
  xh(wh.current);
  var b2 = xh(uh.current);
  var c2 = lb(b2, a.type);
  b2 !== c2 && (G$2(vh, a), G$2(uh, c2));
}
function Bh(a) {
  vh.current === a && (E$2(uh), E$2(vh));
}
var L$1 = Uf(0);
function Ch(a) {
  for (var b2 = a; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128)) return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a) break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a) return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M$1 = null, N$1 = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P$1() {
  throw Error(p$2(321));
}
function Mh(a, b2) {
  if (null === b2) return false;
  for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++) if (!He$1(a[c2], b2[c2])) return false;
  return true;
}
function Nh(a, b2, c2, d2, e2, f2) {
  Hh = f2;
  M$1 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
  a = c2(d2, e2);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p$2(301));
      f2 += 1;
      O = N$1 = null;
      b2.updateQueue = null;
      Fh.current = Qh;
      a = c2(d2, e2);
    } while (Jh);
  }
  Fh.current = Rh;
  b2 = null !== N$1 && null !== N$1.next;
  Hh = 0;
  O = N$1 = M$1 = null;
  Ih = false;
  if (b2) throw Error(p$2(300));
  return a;
}
function Sh() {
  var a = 0 !== Kh;
  Kh = 0;
  return a;
}
function Th() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O ? M$1.memoizedState = O = a : O = O.next = a;
  return O;
}
function Uh() {
  if (null === N$1) {
    var a = M$1.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = N$1.next;
  var b2 = null === O ? M$1.memoizedState : O.next;
  if (null !== b2) O = b2, N$1 = a;
  else {
    if (null === a) throw Error(p$2(310));
    N$1 = a;
    a = { memoizedState: N$1.memoizedState, baseState: N$1.baseState, baseQueue: N$1.baseQueue, queue: N$1.queue, next: null };
    null === O ? M$1.memoizedState = O = a : O = O.next = a;
  }
  return O;
}
function Vh(a, b2) {
  return "function" === typeof b2 ? b2(a) : b2;
}
function Wh(a) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$2(311));
  c2.lastRenderedReducer = a;
  var d2 = N$1, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        M$1.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He$1(d2, b2.memoizedState) || (dh = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a = c2.interleaved;
  if (null !== a) {
    e2 = a;
    do
      f2 = e2.lane, M$1.lanes |= f2, rh |= f2, e2 = e2.next;
    while (e2 !== a);
  } else null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function Xh(a) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$2(311));
  c2.lastRenderedReducer = a;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He$1(f2, b2.memoizedState) || (dh = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Yh() {
}
function Zh(a, b2) {
  var c2 = M$1, d2 = Uh(), e2 = b2(), f2 = !He$1(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, dh = true);
  d2 = d2.queue;
  $h(ai.bind(null, c2, d2, a), [a]);
  if (d2.getSnapshot !== b2 || f2 || null !== O && O.memoizedState.tag & 1) {
    c2.flags |= 2048;
    bi(9, ci.bind(null, c2, d2, e2, b2), void 0, null);
    if (null === Q$1) throw Error(p$2(349));
    0 !== (Hh & 30) || di(c2, b2, e2);
  }
  return e2;
}
function di(a, b2, c2) {
  a.flags |= 16384;
  a = { getSnapshot: b2, value: c2 };
  b2 = M$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$1.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, null === c2 ? b2.stores = [a] : c2.push(a));
}
function ci(a, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  ei(b2) && fi(a);
}
function ai(a, b2, c2) {
  return c2(function() {
    ei(b2) && fi(a);
  });
}
function ei(a) {
  var b2 = a.getSnapshot;
  a = a.value;
  try {
    var c2 = b2();
    return !He$1(a, c2);
  } catch (d2) {
    return true;
  }
}
function fi(a) {
  var b2 = ih(a, 1);
  null !== b2 && gi(b2, a, 1, -1);
}
function hi(a) {
  var b2 = Th();
  "function" === typeof a && (a = a());
  b2.memoizedState = b2.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
  b2.queue = a;
  a = a.dispatch = ii.bind(null, M$1, a);
  return [b2.memoizedState, a];
}
function bi(a, b2, c2, d2) {
  a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
  b2 = M$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$1.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
  return a;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a, b2, c2, d2) {
  var e2 = Th();
  M$1.flags |= a;
  e2.memoizedState = bi(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function li(a, b2, c2, d2) {
  var e2 = Uh();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== N$1) {
    var g2 = N$1.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Mh(d2, g2.deps)) {
      e2.memoizedState = bi(b2, c2, f2, d2);
      return;
    }
  }
  M$1.flags |= a;
  e2.memoizedState = bi(1 | b2, c2, f2, d2);
}
function mi(a, b2) {
  return ki(8390656, 8, a, b2);
}
function $h(a, b2) {
  return li(2048, 8, a, b2);
}
function ni(a, b2) {
  return li(4, 2, a, b2);
}
function oi(a, b2) {
  return li(4, 4, a, b2);
}
function pi(a, b2) {
  if ("function" === typeof b2) return a = a(), b2(a), function() {
    b2(null);
  };
  if (null !== b2 && void 0 !== b2) return a = a(), b2.current = a, function() {
    b2.current = null;
  };
}
function qi(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return li(4, 4, pi.bind(null, b2, a), c2);
}
function ri() {
}
function si(a, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
  c2.memoizedState = [a, b2];
  return a;
}
function ti(a, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}
function ui(a, b2, c2) {
  if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c2;
  He$1(c2, b2) || (c2 = yc(), M$1.lanes |= c2, rh |= c2, a.baseState = true);
  return b2;
}
function vi(a, b2) {
  var c2 = C$2;
  C$2 = 0 !== c2 && 4 > c2 ? c2 : 4;
  a(true);
  var d2 = Gh.transition;
  Gh.transition = {};
  try {
    a(false), b2();
  } finally {
    C$2 = c2, Gh.transition = d2;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a, b2, c2) {
  var d2 = yi(a);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b2, c2);
  else if (c2 = hh(a, b2, c2, d2), null !== c2) {
    var e2 = R();
    gi(c2, a, d2, e2);
    Bi(c2, b2, d2);
  }
}
function ii(a, b2, c2) {
  var d2 = yi(a), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b2, e2);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
      var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
      e2.hasEagerState = true;
      e2.eagerState = h2;
      if (He$1(h2, g2)) {
        var k2 = b2.interleaved;
        null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
        b2.interleaved = e2;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c2 = hh(a, b2, e2, d2);
    null !== c2 && (e2 = R(), gi(c2, a, d2, e2), Bi(c2, b2, d2));
  }
}
function zi(a) {
  var b2 = a.alternate;
  return a === M$1 || null !== b2 && b2 === M$1;
}
function Ai(a, b2) {
  Jh = Ih = true;
  var c2 = a.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a.pending = b2;
}
function Bi(a, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a, c2);
  }
}
var Rh = { readContext: eh, useCallback: P$1, useContext: P$1, useEffect: P$1, useImperativeHandle: P$1, useInsertionEffect: P$1, useLayoutEffect: P$1, useMemo: P$1, useReducer: P$1, useRef: P$1, useState: P$1, useDebugValue: P$1, useDeferredValue: P$1, useTransition: P$1, useMutableSource: P$1, useSyncExternalStore: P$1, useId: P$1, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b2) {
  Th().memoizedState = [a, void 0 === b2 ? null : b2];
  return a;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return ki(
    4194308,
    4,
    pi.bind(null, b2, a),
    c2
  );
}, useLayoutEffect: function(a, b2) {
  return ki(4194308, 4, a, b2);
}, useInsertionEffect: function(a, b2) {
  return ki(4, 2, a, b2);
}, useMemo: function(a, b2) {
  var c2 = Th();
  b2 = void 0 === b2 ? null : b2;
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}, useReducer: function(a, b2, c2) {
  var d2 = Th();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
  d2.queue = a;
  a = a.dispatch = xi.bind(null, M$1, a);
  return [d2.memoizedState, a];
}, useRef: function(a) {
  var b2 = Th();
  a = { current: a };
  return b2.memoizedState = a;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
  return Th().memoizedState = a;
}, useTransition: function() {
  var a = hi(false), b2 = a[0];
  a = vi.bind(null, a[1]);
  Th().memoizedState = a;
  return [b2, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b2, c2) {
  var d2 = M$1, e2 = Th();
  if (I$2) {
    if (void 0 === c2) throw Error(p$2(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === Q$1) throw Error(p$2(349));
    0 !== (Hh & 30) || di(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  mi(ai.bind(
    null,
    d2,
    f2,
    a
  ), [a]);
  d2.flags |= 2048;
  bi(9, ci.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a = Th(), b2 = Q$1.identifierPrefix;
  if (I$2) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Kh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a.memoizedState = b2;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri,
  useDeferredValue: function(a) {
    var b2 = Uh();
    return ui(b2, N$1.memoizedState, a);
  },
  useTransition: function() {
    var a = Wh(Vh)[0], b2 = Uh().memoizedState;
    return [a, b2];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(a) {
  var b2 = Uh();
  return null === N$1 ? b2.memoizedState = a : ui(b2, N$1.memoizedState, a);
}, useTransition: function() {
  var a = Xh(Vh)[0], b2 = Uh().memoizedState;
  return [a, b2];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci(a, b2) {
  if (a && a.defaultProps) {
    b2 = A$2({}, b2);
    a = a.defaultProps;
    for (var c2 in a) void 0 === b2[c2] && (b2[c2] = a[c2]);
    return b2;
  }
  return b2;
}
function Di(a, b2, c2, d2) {
  b2 = a.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A$2({}, b2, c2);
  a.memoizedState = c2;
  0 === a.lanes && (a.updateQueue.baseState = c2);
}
var Ei = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = R(), e2 = yi(a), f2 = mh(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a, f2, e2);
  null !== b2 && (gi(b2, a, e2, d2), oh(b2, a, e2));
}, enqueueReplaceState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = R(), e2 = yi(a), f2 = mh(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a, f2, e2);
  null !== b2 && (gi(b2, a, e2, d2), oh(b2, a, e2));
}, enqueueForceUpdate: function(a, b2) {
  a = a._reactInternals;
  var c2 = R(), d2 = yi(a), e2 = mh(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = nh(a, e2, d2);
  null !== b2 && (gi(b2, a, d2, c2), oh(b2, a, d2));
} };
function Fi(a, b2, c2, d2, e2, f2, g2) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie$1(c2, d2) || !Ie$1(e2, f2) : true;
}
function Gi(a, b2, c2) {
  var d2 = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H$1.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a, e2) : Vf);
  b2 = new b2(c2, f2);
  a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = Ei;
  a.stateNode = b2;
  b2._reactInternals = a;
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Hi(a, b2, c2, d2) {
  a = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a && Ei.enqueueReplaceState(b2, b2.state, null);
}
function Ii(a, b2, c2, d2) {
  var e2 = a.stateNode;
  e2.props = c2;
  e2.state = a.memoizedState;
  e2.refs = {};
  kh(a);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H$1.current, e2.context = Yf(a, f2));
  e2.state = a.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (Di(a, b2, f2, c2), e2.state = a.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a, c2, e2, d2), e2.state = a.memoizedState);
  "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
}
function Ji(a, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b2, stack: e2, digest: null };
}
function Ki(a, b2, c2) {
  return { value: a, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Li(a, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Oi || (Oi = true, Pi = d2);
    Li(a, b2);
  };
  return c2;
}
function Qi(a, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  var d2 = a.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Li(a, b2);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Li(a, b2);
    "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Si(a, b2, c2) {
  var d2 = a.pingCache;
  if (null === d2) {
    d2 = a.pingCache = new Mi();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a = Ti.bind(null, a, b2, c2), b2.then(a, a));
}
function Ui(a) {
  do {
    var b2;
    if (b2 = 13 === a.tag) b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2) return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Vi(a, b2, c2, d2, e2) {
  if (0 === (a.mode & 1)) return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e2;
  return a;
}
var Wi = ua.ReactCurrentOwner, dh = false;
function Xi(a, b2, c2, d2) {
  b2.child = null === a ? Vg(b2, null, c2, d2) : Ug(b2, a.child, c2, d2);
}
function Yi(a, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  ch(b2, e2);
  d2 = Nh(a, b2, c2, d2, f2, e2);
  c2 = Sh();
  if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
  I$2 && c2 && vg(b2);
  b2.flags |= 1;
  Xi(a, b2, d2, e2);
  return b2.child;
}
function $i(a, b2, c2, d2, e2) {
  if (null === a) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a, b2, f2, d2, e2);
    a = Rg(c2.type, null, d2, b2, b2.mode, e2);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e2)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie$1;
    if (c2(g2, d2) && a.ref === b2.ref) return Zi(a, b2, e2);
  }
  b2.flags |= 1;
  a = Pg(f2, d2);
  a.ref = b2.ref;
  a.return = b2;
  return b2.child = a;
}
function bj(a, b2, c2, d2, e2) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie$1(f2, d2) && a.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a.lanes & e2)) 0 !== (a.flags & 131072) && (dh = true);
    else return b2.lanes = a.lanes, Zi(a, b2, e2);
  }
  return cj(a, b2, c2, d2, e2);
}
function dj(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$2(ej, fj), fj |= c2;
  else {
    if (0 === (c2 & 1073741824)) return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G$2(ej, fj), fj |= a, null;
    b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d2 = null !== f2 ? f2.baseLanes : c2;
    G$2(ej, fj);
    fj |= d2;
  }
  else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$2(ej, fj), fj |= d2;
  Xi(a, b2, e2, c2);
  return b2.child;
}
function gj(a, b2) {
  var c2 = b2.ref;
  if (null === a && null !== c2 || null !== a && a.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
}
function cj(a, b2, c2, d2, e2) {
  var f2 = Zf(c2) ? Xf : H$1.current;
  f2 = Yf(b2, f2);
  ch(b2, e2);
  c2 = Nh(a, b2, c2, d2, f2, e2);
  d2 = Sh();
  if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
  I$2 && d2 && vg(b2);
  b2.flags |= 1;
  Xi(a, b2, c2, e2);
  return b2.child;
}
function hj(a, b2, c2, d2, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else f2 = false;
  ch(b2, e2);
  if (null === b2.stateNode) ij(a, b2), Gi(b2, c2, d2), Ii(b2, c2, d2, e2), d2 = true;
  else if (null === a) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H$1.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Hi(b2, g2, d2, l2);
    jh = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    qh(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = jh || Fi(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    lh(a, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Ci(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H$1.current, k2 = Yf(b2, k2));
    var y3 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y3 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && Hi(b2, g2, d2, k2);
    jh = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    qh(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y3 && (Di(b2, c2, y3, d2), n2 = b2.memoizedState), (l2 = jh || Fi(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return jj(a, b2, c2, d2, f2, e2);
}
function jj(a, b2, c2, d2, e2, f2) {
  gj(a, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2) return e2 && dg(b2, c2, false), Zi(a, b2, f2);
  d2 = b2.stateNode;
  Wi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a && g2 ? (b2.child = Ug(b2, a.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function kj(a) {
  var b2 = a.stateNode;
  b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
  yh(a, b2.containerInfo);
}
function lj(a, b2, c2, d2, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Xi(a, b2, c2, d2);
  return b2.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function oj(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = L$1.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
  if (h2) f2 = true, b2.flags &= -129;
  else if (null === a || null !== a.memoizedState) e2 |= 1;
  G$2(L$1, e2 & 1);
  if (null === a) {
    Eg(b2);
    a = b2.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a = Tg(a, d2, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a) : qj(b2, g2);
  }
  e2 = a.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a, b2, g2, d2, h2, e2, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e2 = a.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a.child.memoizedState;
    g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a.childLanes & ~c2;
    b2.memoizedState = mj;
    return d2;
  }
  f2 = a.child;
  a = f2.sibling;
  d2 = Pg(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a], b2.flags |= 16) : c2.push(a));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function qj(a, b2) {
  b2 = pj({ mode: "visible", children: b2 }, a.mode, 0, null);
  b2.return = a;
  return a.child = b2;
}
function sj(a, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Ug(b2, a.child, null, c2);
  a = qj(b2, b2.pendingProps.children);
  a.flags |= 2;
  b2.memoizedState = null;
  return a;
}
function rj(a, b2, c2, d2, e2, f2, g2) {
  if (c2) {
    if (b2.flags & 256) return b2.flags &= -257, d2 = Ki(Error(p$2(422))), sj(a, b2, g2, d2);
    if (null !== b2.memoizedState) return b2.child = a.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e2 = b2.mode;
    d2 = pj({ mode: "visible", children: d2.children }, e2, 0, null);
    f2 = Tg(f2, e2, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Ug(b2, a.child, null, g2);
    b2.child.memoizedState = nj(g2);
    b2.memoizedState = mj;
    return f2;
  }
  if (0 === (b2.mode & 1)) return sj(a, b2, g2, null);
  if ("$!" === e2.data) {
    d2 = e2.nextSibling && e2.nextSibling.dataset;
    if (d2) var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p$2(419));
    d2 = Ki(f2, d2, void 0);
    return sj(a, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a.childLanes);
  if (dh || h2) {
    d2 = Q$1;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
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
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a, e2), gi(d2, a, e2, -1));
    }
    tj();
    d2 = Ki(Error(p$2(421)));
    return sj(a, b2, g2, d2);
  }
  if ("$?" === e2.data) return b2.flags |= 128, b2.child = a.child, b2 = uj.bind(null, a), e2._reactRetry = b2, null;
  a = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I$2 = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
  b2 = qj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function vj(a, b2, c2) {
  a.lanes |= b2;
  var d2 = a.alternate;
  null !== d2 && (d2.lanes |= b2);
  bh(a.return, b2, c2);
}
function wj(a, b2, c2, d2, e2) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function xj(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Xi(a, b2, d2.children, c2);
  d2 = L$1.current;
  if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b2.child; null !== a; ) {
      if (13 === a.tag) null !== a.memoizedState && vj(a, c2, b2);
      else if (19 === a.tag) vj(a, c2, b2);
      else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b2) break a;
      for (; null === a.sibling; ) {
        if (null === a.return || a.return === b2) break a;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
    d2 &= 1;
  }
  G$2(L$1, d2);
  if (0 === (b2.mode & 1)) b2.memoizedState = null;
  else switch (e2) {
    case "forwards":
      c2 = b2.child;
      for (e2 = null; null !== c2; ) a = c2.alternate, null !== a && null === Ch(a) && (e2 = c2), c2 = c2.sibling;
      c2 = e2;
      null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
      wj(b2, false, e2, c2, f2);
      break;
    case "backwards":
      c2 = null;
      e2 = b2.child;
      for (b2.child = null; null !== e2; ) {
        a = e2.alternate;
        if (null !== a && null === Ch(a)) {
          b2.child = e2;
          break;
        }
        a = e2.sibling;
        e2.sibling = c2;
        c2 = e2;
        e2 = a;
      }
      wj(b2, true, c2, null, f2);
      break;
    case "together":
      wj(b2, false, null, null, void 0);
      break;
    default:
      b2.memoizedState = null;
  }
  return b2.child;
}
function ij(a, b2) {
  0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function Zi(a, b2, c2) {
  null !== a && (b2.dependencies = a.dependencies);
  rh |= b2.lanes;
  if (0 === (c2 & b2.childLanes)) return null;
  if (null !== a && b2.child !== a.child) throw Error(p$2(153));
  if (null !== b2.child) {
    a = b2.child;
    c2 = Pg(a, a.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a.sibling; ) a = a.sibling, c2 = c2.sibling = Pg(a, a.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function yj(a, b2, c2) {
  switch (b2.tag) {
    case 3:
      kj(b2);
      Ig();
      break;
    case 5:
      Ah(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      yh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G$2(Wg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated) return G$2(L$1, L$1.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes)) return oj(a, b2, c2);
        G$2(L$1, L$1.current & 1);
        a = Zi(a, b2, c2);
        return null !== a ? a.sibling : null;
      }
      G$2(L$1, L$1.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d2) return xj(a, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G$2(L$1, L$1.current);
      if (d2) break;
      else return null;
    case 22:
    case 23:
      return b2.lanes = 0, dj(a, b2, c2);
  }
  return Zi(a, b2, c2);
}
var zj, Aj, Bj, Cj;
zj = function(a, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag) a.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2) break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2) return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Aj = function() {
};
Bj = function(a, b2, c2, d2) {
  var e2 = a.memoizedProps;
  if (e2 !== d2) {
    a = b2.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a, e2);
        d2 = Ya(a, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$2({}, e2, { value: void 0 });
        d2 = A$2({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a, e2);
        d2 = gb(a, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2) if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
      var h2 = e2[l2];
      for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
        for (g2 in h2) !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
        for (g2 in k2) k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
      } else c2 || (f2 || (f2 = []), f2.push(
        l2,
        c2
      )), c2 = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$2("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2) b2.flags |= 4;
  }
};
Cj = function(a, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Dj(a, b2) {
  if (!I$2) switch (a.tailMode) {
    case "hidden":
      b2 = a.tail;
      for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
      null === c2 ? a.tail = null : c2.sibling = null;
      break;
    case "collapsed":
      c2 = a.tail;
      for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
      null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
  }
}
function S$1(a) {
  var b2 = null !== a.alternate && a.alternate.child === a.child, c2 = 0, d2 = 0;
  if (b2) for (var e2 = a.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
  else for (e2 = a.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a, e2 = e2.sibling;
  a.subtreeFlags |= d2;
  a.childLanes = c2;
  return b2;
}
function Ej(a, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
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
      return S$1(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$1(b2), null;
    case 3:
      d2 = b2.stateNode;
      zh();
      E$2(Wf);
      E$2(H$1);
      Eh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a || null === a.child) Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a, b2);
      S$1(b2);
      return null;
    case 5:
      Bh(b2);
      var e2 = xh(wh.current);
      c2 = b2.type;
      if (null !== a && null != b2.stateNode) Bj(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode) throw Error(p$2(166));
          S$1(b2);
          return null;
        }
        a = xh(uh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D$2("cancel", d2);
              D$2("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$2("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++) D$2(lf[e2], d2);
              break;
            case "source":
              D$2("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D$2(
                "error",
                d2
              );
              D$2("load", d2);
              break;
            case "details":
              D$2("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              D$2("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D$2("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D$2("invalid", d2);
          }
          ub(c2, f2);
          e2 = null;
          for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
            var h2 = f2[g2];
            "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
              d2.textContent,
              h2,
              a
            ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$2("scroll", d2);
          }
          switch (c2) {
            case "input":
              Va(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c2));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
          a[Of] = b2;
          a[Pf] = d2;
          zj(a, b2, false, false);
          b2.stateNode = a;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D$2("cancel", a);
                D$2("close", a);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$2("load", a);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++) D$2(lf[e2], a);
                e2 = d2;
                break;
              case "source":
                D$2("error", a);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D$2(
                  "error",
                  a
                );
                D$2("load", a);
                e2 = d2;
                break;
              case "details":
                D$2("toggle", a);
                e2 = d2;
                break;
              case "input":
                Za(a, d2);
                e2 = Ya(a, d2);
                D$2("invalid", a);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$2({}, d2, { value: void 0 });
                D$2("invalid", a);
                break;
              case "textarea":
                hb(a, d2);
                e2 = gb(a, d2);
                D$2("invalid", a);
                break;
              default:
                e2 = d2;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2) if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$2("scroll", a) : null != k2 && ta(a, f2, k2, g2));
            }
            switch (c2) {
              case "input":
                Va(a);
                db(a, d2, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$1(b2);
      return null;
    case 6:
      if (a && null != b2.stateNode) Cj(a, b2, a.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p$2(166));
        c2 = xh(wh.current);
        xh(uh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a = xg, null !== a) switch (a.tag) {
              case 3:
                Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                break;
              case 5:
                true !== a.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
            }
          }
          f2 && (b2.flags |= 4);
        } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S$1(b2);
      return null;
    case 13:
      E$2(L$1);
      d2 = b2.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I$2 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a) {
            if (!f2) throw Error(p$2(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p$2(317));
            f2[Of] = b2;
          } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$1(b2);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a && null !== a.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (L$1.current & 1) ? 0 === T$1 && (T$1 = 3) : tj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$1(b2);
      return null;
    case 4:
      return zh(), Aj(a, b2), null === a && sf(b2.stateNode.containerInfo), S$1(b2), null;
    case 10:
      return ah(b2.type._context), S$1(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$1(b2), null;
    case 19:
      E$2(L$1);
      f2 = b2.memoizedState;
      if (null === f2) return S$1(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2) if (d2) Dj(f2, false);
      else {
        if (0 !== T$1 || null !== a && 0 !== (a.flags & 128)) for (a = b2.child; null !== a; ) {
          g2 = Ch(a);
          if (null !== g2) {
            b2.flags |= 128;
            Dj(f2, false);
            d2 = g2.updateQueue;
            null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
            b2.subtreeFlags = 0;
            d2 = c2;
            for (c2 = b2.child; null !== c2; ) f2 = c2, a = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
            G$2(L$1, L$1.current & 1 | 2);
            return b2.child;
          }
          a = a.sibling;
        }
        null !== f2.tail && B$2() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
      }
      else {
        if (!d2) if (a = Ch(g2), null !== a) {
          if (b2.flags |= 128, d2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$2) return S$1(b2), null;
        } else 2 * B$2() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$2(), b2.sibling = null, c2 = L$1.current, G$2(L$1, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S$1(b2);
      return null;
    case 22:
    case 23:
      return Hj(), d2 = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S$1(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$1(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$2(156, b2.tag));
}
function Ij(a, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 3:
      return zh(), E$2(Wf), E$2(H$1), Eh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
    case 5:
      return Bh(b2), null;
    case 13:
      E$2(L$1);
      a = b2.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b2.alternate) throw Error(p$2(340));
        Ig();
      }
      a = b2.flags;
      return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 19:
      return E$2(L$1), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b2.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U$1 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Lj(a, b2) {
  var c2 = a.ref;
  if (null !== c2) if ("function" === typeof c2) try {
    c2(null);
  } catch (d2) {
    W$1(a, b2, d2);
  }
  else c2.current = null;
}
function Mj(a, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W$1(a, b2, d2);
  }
}
var Nj = false;
function Oj(a, b2) {
  Cf = dd;
  a = Me$1();
  if (Ne$1(a)) {
    if ("selectionStart" in a) var c2 = { start: a.selectionStart, end: a.selectionEnd };
    else a: {
      c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
      var d2 = c2.getSelection && c2.getSelection();
      if (d2 && 0 !== d2.rangeCount) {
        c2 = d2.anchorNode;
        var e2 = d2.anchorOffset, f2 = d2.focusNode;
        d2 = d2.focusOffset;
        try {
          c2.nodeType, f2.nodeType;
        } catch (F2) {
          c2 = null;
          break a;
        }
        var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
        b: for (; ; ) {
          for (var y3; ; ) {
            q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
            q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
            3 === q2.nodeType && (g2 += q2.nodeValue.length);
            if (null === (y3 = q2.firstChild)) break;
            r2 = q2;
            q2 = y3;
          }
          for (; ; ) {
            if (q2 === a) break b;
            r2 === c2 && ++l2 === e2 && (h2 = g2);
            r2 === f2 && ++m2 === d2 && (k2 = g2);
            if (null !== (y3 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y3;
        }
        c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
      } else c2 = null;
    }
    c2 = c2 || { start: 0, end: 0 };
  } else c2 = null;
  Df = { focusedElem: a, selectionRange: c2 };
  dd = false;
  for (V = b2; null !== V; ) if (b2 = V, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a) a.return = b2, V = a;
  else for (; null !== V; ) {
    b2 = V;
    try {
      var n2 = b2.alternate;
      if (0 !== (b2.flags & 1024)) switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x = b2.stateNode, w2 = x.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci(b2.type, t2), J2);
            x.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u4 = b2.stateNode.containerInfo;
          1 === u4.nodeType ? u4.textContent = "" : 9 === u4.nodeType && u4.documentElement && u4.removeChild(u4.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p$2(163));
      }
    } catch (F2) {
      W$1(b2, b2.return, F2);
    }
    a = b2.sibling;
    if (null !== a) {
      a.return = b2.return;
      V = a;
      break;
    }
    V = b2.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a) === a) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Mj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Qj(a, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a) === a) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Rj(a) {
  var b2 = a.ref;
  if (null !== b2) {
    var c2 = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c2;
        break;
      default:
        a = c2;
    }
    "function" === typeof b2 ? b2(a) : b2.current = a;
  }
}
function Sj(a) {
  var b2 = a.alternate;
  null !== b2 && (a.alternate = null, Sj(b2));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Tj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Uj(a) {
  a: for (; ; ) {
    for (; null === a.sibling; ) {
      if (null === a.return || Tj(a.return)) return null;
      a = a.return;
    }
    a.sibling.return = a.return;
    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
      if (a.flags & 2) continue a;
      if (null === a.child || 4 === a.tag) continue a;
      else a.child.return = a, a = a.child;
    }
    if (!(a.flags & 2)) return a.stateNode;
  }
}
function Vj(a, b2, c2) {
  var d2 = a.tag;
  if (5 === d2 || 6 === d2) a = a.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a = a.child, null !== a)) for (Vj(a, b2, c2), a = a.sibling; null !== a; ) Vj(a, b2, c2), a = a.sibling;
}
function Wj(a, b2, c2) {
  var d2 = a.tag;
  if (5 === d2 || 6 === d2) a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
  else if (4 !== d2 && (a = a.child, null !== a)) for (Wj(a, b2, c2), a = a.sibling; null !== a; ) Wj(a, b2, c2), a = a.sibling;
}
var X$1 = null, Xj = false;
function Yj(a, b2, c2) {
  for (c2 = c2.child; null !== c2; ) Zj(a, b2, c2), c2 = c2.sibling;
}
function Zj(a, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c2);
  } catch (h2) {
  }
  switch (c2.tag) {
    case 5:
      U$1 || Lj(c2, b2);
    case 6:
      var d2 = X$1, e2 = Xj;
      X$1 = null;
      Yj(a, b2, c2);
      X$1 = d2;
      Xj = e2;
      null !== X$1 && (Xj ? (a = X$1, c2 = c2.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : X$1.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X$1 && (Xj ? (a = X$1, c2 = c2.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c2) : 1 === a.nodeType && Kf(a, c2), bd(a)) : Kf(X$1, c2.stateNode));
      break;
    case 4:
      d2 = X$1;
      e2 = Xj;
      X$1 = c2.stateNode.containerInfo;
      Xj = true;
      Yj(a, b2, c2);
      X$1 = d2;
      Xj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$1 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Yj(a, b2, c2);
      break;
    case 1:
      if (!U$1 && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
        d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
      } catch (h2) {
        W$1(c2, b2, h2);
      }
      Yj(a, b2, c2);
      break;
    case 21:
      Yj(a, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U$1 = (d2 = U$1) || null !== c2.memoizedState, Yj(a, b2, c2), U$1 = d2) : Yj(a, b2, c2);
      break;
    default:
      Yj(a, b2, c2);
  }
}
function ak(a) {
  var b2 = a.updateQueue;
  if (null !== b2) {
    a.updateQueue = null;
    var c2 = a.stateNode;
    null === c2 && (c2 = a.stateNode = new Kj());
    b2.forEach(function(b3) {
      var d2 = bk.bind(null, a, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function ck(a, b2) {
  var c2 = b2.deletions;
  if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    try {
      var f2 = a, g2 = b2, h2 = g2;
      a: for (; null !== h2; ) {
        switch (h2.tag) {
          case 5:
            X$1 = h2.stateNode;
            Xj = false;
            break a;
          case 3:
            X$1 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X$1 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h2 = h2.return;
      }
      if (null === X$1) throw Error(p$2(160));
      Zj(f2, g2, e2);
      X$1 = null;
      Xj = false;
      var k2 = e2.alternate;
      null !== k2 && (k2.return = null);
      e2.return = null;
    } catch (l2) {
      W$1(e2, b2, l2);
    }
  }
  if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a), b2 = b2.sibling;
}
function dk(a, b2) {
  var c2 = a.alternate, d2 = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b2, a);
      ek(a);
      if (d2 & 4) {
        try {
          Pj(3, a, a.return), Qj(3, a);
        } catch (t2) {
          W$1(a, a.return, t2);
        }
        try {
          Pj(5, a, a.return);
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      break;
    case 1:
      ck(b2, a);
      ek(a);
      d2 & 512 && null !== c2 && Lj(c2, c2.return);
      break;
    case 5:
      ck(b2, a);
      ek(a);
      d2 & 512 && null !== c2 && Lj(c2, c2.return);
      if (a.flags & 32) {
        var e2 = a.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      if (d2 & 4 && (e2 = a.stateNode, null != e2)) {
        var f2 = a.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2) try {
          "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
          vb(h2, g2);
          var l2 = vb(h2, f2);
          for (g2 = 0; g2 < k2.length; g2 += 2) {
            var m2 = k2[g2], q2 = k2[g2 + 1];
            "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
          }
          switch (h2) {
            case "input":
              bb(e2, f2);
              break;
            case "textarea":
              ib(e2, f2);
              break;
            case "select":
              var r2 = e2._wrapperState.wasMultiple;
              e2._wrapperState.wasMultiple = !!f2.multiple;
              var y3 = f2.value;
              null != y3 ? fb(e2, !!f2.multiple, y3, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e2,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e2[Pf] = f2;
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      break;
    case 6:
      ck(b2, a);
      ek(a);
      if (d2 & 4) {
        if (null === a.stateNode) throw Error(p$2(162));
        e2 = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      break;
    case 3:
      ck(b2, a);
      ek(a);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
        bd(b2.containerInfo);
      } catch (t2) {
        W$1(a, a.return, t2);
      }
      break;
    case 4:
      ck(b2, a);
      ek(a);
      break;
    case 13:
      ck(b2, a);
      ek(a);
      e2 = a.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B$2()));
      d2 & 4 && ak(a);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a.mode & 1 ? (U$1 = (l2 = U$1) || m2, ck(b2, a), U$1 = l2) : ck(b2, a);
      ek(a);
      if (d2 & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V = a, m2 = a.child; null !== m2; ) {
          for (q2 = V = m2; null !== V; ) {
            r2 = V;
            y3 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d2 = r2;
                  c2 = r2.return;
                  try {
                    b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W$1(d2, c2, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y3 ? (y3.return = r2, V = y3) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
              } catch (t2) {
                W$1(a, a.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W$1(a, a.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b2, a);
      ek(a);
      d2 & 4 && ak(a);
      break;
    case 21:
      break;
    default:
      ck(
        b2,
        a
      ), ek(a);
  }
}
function ek(a) {
  var b2 = a.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a.return; null !== c2; ) {
          if (Tj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$2(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
          var f2 = Uj(a);
          Wj(a, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Uj(a);
          Vj(a, h2, g2);
          break;
        default:
          throw Error(p$2(161));
      }
    } catch (k2) {
      W$1(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b2 & 4096 && (a.flags &= -4097);
}
function hk(a, b2, c2) {
  V = a;
  ik(a);
}
function ik(a, b2, c2) {
  for (var d2 = 0 !== (a.mode & 1); null !== V; ) {
    var e2 = V, f2 = e2.child;
    if (22 === e2.tag && d2) {
      var g2 = null !== e2.memoizedState || Jj;
      if (!g2) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$1;
        h2 = Jj;
        var l2 = U$1;
        Jj = g2;
        if ((U$1 = k2) && !l2) for (V = e2; null !== V; ) g2 = V, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g2, V = k2) : jk(e2);
        for (; null !== f2; ) V = f2, ik(f2), f2 = f2.sibling;
        V = e2;
        Jj = h2;
        U$1 = l2;
      }
      kk(a);
    } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : kk(a);
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b2 = V;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            U$1 || Qj(5, b2);
            break;
          case 1:
            var d2 = b2.stateNode;
            if (b2.flags & 4 && !U$1) if (null === c2) d2.componentDidMount();
            else {
              var e2 = b2.elementType === b2.type ? c2.memoizedProps : Ci(b2.type, c2.memoizedProps);
              d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b2.updateQueue;
            null !== f2 && sh(b2, f2, d2);
            break;
          case 3:
            var g2 = b2.updateQueue;
            if (null !== g2) {
              c2 = null;
              if (null !== b2.child) switch (b2.child.tag) {
                case 5:
                  c2 = b2.child.stateNode;
                  break;
                case 1:
                  c2 = b2.child.stateNode;
              }
              sh(b2, g2, c2);
            }
            break;
          case 5:
            var h2 = b2.stateNode;
            if (null === c2 && b2.flags & 4) {
              c2 = h2;
              var k2 = b2.memoizedProps;
              switch (b2.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c2.focus();
                  break;
                case "img":
                  k2.src && (c2.src = k2.src);
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
            if (null === b2.memoizedState) {
              var l2 = b2.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
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
            throw Error(p$2(163));
        }
        U$1 || b2.flags & 512 && Rj(b2);
      } catch (r2) {
        W$1(b2, b2.return, r2);
      }
    }
    if (b2 === a) {
      V = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function gk(a) {
  for (; null !== V; ) {
    var b2 = V;
    if (b2 === a) {
      V = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function jk(a) {
  for (; null !== V; ) {
    var b2 = V;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Qj(4, b2);
          } catch (k2) {
            W$1(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W$1(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$1(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$1(b2, g2, k2);
          }
      }
    } catch (k2) {
      W$1(b2, b2.return, k2);
    }
    if (b2 === a) {
      V = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V = h2;
      break;
    }
    V = b2.return;
  }
}
var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K$1 = 0, Q$1 = null, Y = null, Z$1 = 0, fj = 0, ej = Uf(0), T$1 = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R() {
  return 0 !== (K$1 & 6) ? B$2() : -1 !== Ak ? Ak : Ak = B$2();
}
function yi(a) {
  if (0 === (a.mode & 1)) return 1;
  if (0 !== (K$1 & 2) && 0 !== Z$1) return Z$1 & -Z$1;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a = C$2;
  if (0 !== a) return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function gi(a, b2, c2, d2) {
  if (50 < yk) throw yk = 0, zk = null, Error(p$2(185));
  Ac(a, c2, d2);
  if (0 === (K$1 & 2) || a !== Q$1) a === Q$1 && (0 === (K$1 & 2) && (qk |= c2), 4 === T$1 && Ck(a, Z$1)), Dk(a, d2), 1 === c2 && 0 === K$1 && 0 === (b2.mode & 1) && (Gj = B$2() + 500, fg && jg());
}
function Dk(a, b2) {
  var c2 = a.callbackNode;
  wc(a, b2);
  var d2 = uc(a, a === Q$1 ? Z$1 : 0);
  if (0 === d2) null !== c2 && bc(c2), a.callbackNode = null, a.callbackPriority = 0;
  else if (b2 = d2 & -d2, a.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
      0 === (K$1 & 6) && jg();
    }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Fk(c2, Gk.bind(null, a));
    }
    a.callbackPriority = b2;
    a.callbackNode = c2;
  }
}
function Gk(a, b2) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K$1 & 6)) throw Error(p$2(327));
  var c2 = a.callbackNode;
  if (Hk() && a.callbackNode !== c2) return null;
  var d2 = uc(a, a === Q$1 ? Z$1 : 0);
  if (0 === d2) return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a.expiredLanes) || b2) b2 = Ik(a, d2);
  else {
    b2 = d2;
    var e2 = K$1;
    K$1 |= 2;
    var f2 = Jk();
    if (Q$1 !== a || Z$1 !== b2) uk = null, Gj = B$2() + 500, Kk(a, b2);
    do
      try {
        Lk();
        break;
      } catch (h2) {
        Mk(a, h2);
      }
    while (1);
    $g();
    mk.current = f2;
    K$1 = e2;
    null !== Y ? b2 = 0 : (Q$1 = null, Z$1 = 0, b2 = T$1);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a), 0 !== e2 && (d2 = e2, b2 = Nk(a, e2)));
    if (1 === b2) throw c2 = pk, Kk(a, 0), Ck(a, d2), Dk(a, B$2()), c2;
    if (6 === b2) Ck(a, d2);
    else {
      e2 = a.current.alternate;
      if (0 === (d2 & 30) && !Ok(e2) && (b2 = Ik(a, d2), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d2 = f2, b2 = Nk(a, f2))), 1 === b2)) throw c2 = pk, Kk(a, 0), Ck(a, d2), Dk(a, B$2()), c2;
      a.finishedWork = e2;
      a.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$2(345));
        case 2:
          Pk(a, tk, uk);
          break;
        case 3:
          Ck(a, d2);
          if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B$2(), 10 < b2)) {
            if (0 !== uc(a, 0)) break;
            e2 = a.suspendedLanes;
            if ((e2 & d2) !== d2) {
              R();
              a.pingedLanes |= a.suspendedLanes & e2;
              break;
            }
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b2);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 4:
          Ck(a, d2);
          if ((d2 & 4194240) === d2) break;
          b2 = a.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B$2() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
          if (10 < d2) {
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d2);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 5:
          Pk(a, tk, uk);
          break;
        default:
          throw Error(p$2(329));
      }
    }
  }
  Dk(a, B$2());
  return a.callbackNode === c2 ? Gk.bind(null, a) : null;
}
function Nk(a, b2) {
  var c2 = sk;
  a.current.memoizedState.isDehydrated && (Kk(a, b2).flags |= 256);
  a = Ik(a, b2);
  2 !== a && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
  return a;
}
function Fj(a) {
  null === tk ? tk = a : tk.push.apply(tk, a);
}
function Ok(a) {
  for (var b2 = a; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2], f2 = e2.getSnapshot;
        e2 = e2.value;
        try {
          if (!He$1(f2(), e2)) return false;
        } catch (g2) {
          return false;
        }
      }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
    else {
      if (b2 === a) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a) return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Ck(a, b2) {
  b2 &= ~rk;
  b2 &= ~qk;
  a.suspendedLanes |= b2;
  a.pingedLanes &= ~b2;
  for (a = a.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a[c2] = -1;
    b2 &= ~d2;
  }
}
function Ek(a) {
  if (0 !== (K$1 & 6)) throw Error(p$2(327));
  Hk();
  var b2 = uc(a, 0);
  if (0 === (b2 & 1)) return Dk(a, B$2()), null;
  var c2 = Ik(a, b2);
  if (0 !== a.tag && 2 === c2) {
    var d2 = xc(a);
    0 !== d2 && (b2 = d2, c2 = Nk(a, d2));
  }
  if (1 === c2) throw c2 = pk, Kk(a, 0), Ck(a, b2), Dk(a, B$2()), c2;
  if (6 === c2) throw Error(p$2(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b2;
  Pk(a, tk, uk);
  Dk(a, B$2());
  return null;
}
function Qk(a, b2) {
  var c2 = K$1;
  K$1 |= 1;
  try {
    return a(b2);
  } finally {
    K$1 = c2, 0 === K$1 && (Gj = B$2() + 500, fg && jg());
  }
}
function Rk(a) {
  null !== wk && 0 === wk.tag && 0 === (K$1 & 6) && Hk();
  var b2 = K$1;
  K$1 |= 1;
  var c2 = ok.transition, d2 = C$2;
  try {
    if (ok.transition = null, C$2 = 1, a) return a();
  } finally {
    C$2 = d2, ok.transition = c2, K$1 = b2, 0 === (K$1 & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E$2(ej);
}
function Kk(a, b2) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c2 = a.timeoutHandle;
  -1 !== c2 && (a.timeoutHandle = -1, Gf(c2));
  if (null !== Y) for (c2 = Y.return; null !== c2; ) {
    var d2 = c2;
    wg(d2);
    switch (d2.tag) {
      case 1:
        d2 = d2.type.childContextTypes;
        null !== d2 && void 0 !== d2 && $f();
        break;
      case 3:
        zh();
        E$2(Wf);
        E$2(H$1);
        Eh();
        break;
      case 5:
        Bh(d2);
        break;
      case 4:
        zh();
        break;
      case 13:
        E$2(L$1);
        break;
      case 19:
        E$2(L$1);
        break;
      case 10:
        ah(d2.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c2 = c2.return;
  }
  Q$1 = a;
  Y = a = Pg(a.current, null);
  Z$1 = fj = b2;
  T$1 = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
      c2.interleaved = null;
      var e2 = d2.next, f2 = c2.pending;
      if (null !== f2) {
        var g2 = f2.next;
        f2.next = e2;
        d2.next = g2;
      }
      c2.pending = d2;
    }
    fh = null;
  }
  return a;
}
function Mk(a, b2) {
  do {
    var c2 = Y;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d2 = M$1.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        Ih = false;
      }
      Hh = 0;
      O = N$1 = M$1 = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c2 || null === c2.return) {
        T$1 = 1;
        pk = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z$1;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y3 = Ui(g2);
          if (null !== y3) {
            y3.flags &= -257;
            Vi(y3, g2, h2, f2, b2);
            y3.mode & 1 && Si(f2, l2, b2);
            b2 = y3;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Si(f2, l2, b2);
              tj();
              break a;
            }
            k2 = Error(p$2(426));
          }
        } else if (I$2 && h2.mode & 1) {
          var J2 = Ui(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi(J2, g2, h2, f2, b2);
            Jg(Ji(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ji(k2, h2);
        4 !== T$1 && (T$1 = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x = Ni(f2, k2, b2);
              ph(f2, x);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u4 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u4 && "function" === typeof u4.componentDidCatch && (null === Ri || !Ri.has(u4)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Qi(f2, h2, b2);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c2);
    } catch (na) {
      b2 = na;
      Y === c2 && null !== c2 && (Y = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a = mk.current;
  mk.current = Rh;
  return null === a ? Rh : a;
}
function tj() {
  if (0 === T$1 || 3 === T$1 || 2 === T$1) T$1 = 4;
  null === Q$1 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q$1, Z$1);
}
function Ik(a, b2) {
  var c2 = K$1;
  K$1 |= 2;
  var d2 = Jk();
  if (Q$1 !== a || Z$1 !== b2) uk = null, Kk(a, b2);
  do
    try {
      Tk();
      break;
    } catch (e2) {
      Mk(a, e2);
    }
  while (1);
  $g();
  K$1 = c2;
  mk.current = d2;
  if (null !== Y) throw Error(p$2(261));
  Q$1 = null;
  Z$1 = 0;
  return T$1;
}
function Tk() {
  for (; null !== Y; ) Uk(Y);
}
function Lk() {
  for (; null !== Y && !cc(); ) Uk(Y);
}
function Uk(a) {
  var b2 = Vk(a.alternate, a, fj);
  a.memoizedProps = a.pendingProps;
  null === b2 ? Sk(a) : Y = b2;
  nk.current = null;
}
function Sk(a) {
  var b2 = a;
  do {
    var c2 = b2.alternate;
    a = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Ej(c2, b2, fj), null !== c2) {
        Y = c2;
        return;
      }
    } else {
      c2 = Ij(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y = c2;
        return;
      }
      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T$1 = 6;
        Y = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y = b2;
      return;
    }
    Y = b2 = a;
  } while (null !== b2);
  0 === T$1 && (T$1 = 5);
}
function Pk(a, b2, c2) {
  var d2 = C$2, e2 = ok.transition;
  try {
    ok.transition = null, C$2 = 1, Wk(a, b2, c2, d2);
  } finally {
    ok.transition = e2, C$2 = d2;
  }
  return null;
}
function Wk(a, b2, c2, d2) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K$1 & 6)) throw Error(p$2(327));
  c2 = a.finishedWork;
  var e2 = a.finishedLanes;
  if (null === c2) return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c2 === a.current) throw Error(p$2(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a, f2);
  a === Q$1 && (Y = Q$1 = null, Z$1 = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g2 = C$2;
    C$2 = 1;
    var h2 = K$1;
    K$1 |= 4;
    nk.current = null;
    Oj(a, c2);
    dk(c2, a);
    Oe$1(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c2;
    hk(c2);
    dc();
    K$1 = h2;
    C$2 = g2;
    ok.transition = f2;
  } else a.current = c2;
  vk && (vk = false, wk = a, xk = e2);
  f2 = a.pendingLanes;
  0 === f2 && (Ri = null);
  mc(c2.stateNode);
  Dk(a, B$2());
  if (null !== b2) for (d2 = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Oi) throw Oi = false, a = Pi, Pi = null, a;
  0 !== (xk & 1) && 0 !== a.tag && Hk();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a = Dc(xk), b2 = ok.transition, c2 = C$2;
    try {
      ok.transition = null;
      C$2 = 16 > a ? 16 : a;
      if (null === wk) var d2 = false;
      else {
        a = wk;
        wk = null;
        xk = 0;
        if (0 !== (K$1 & 6)) throw Error(p$2(331));
        var e2 = K$1;
        K$1 |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g2 = f2.child;
          if (0 !== (V.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V = q2;
                  else for (; null !== V; ) {
                    m2 = V;
                    var r2 = m2.sibling, y3 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y3;
                      V = r2;
                      break;
                    }
                    V = y3;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V = g2;
          else b: for (; null !== V; ) {
            f2 = V;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x = f2.sibling;
            if (null !== x) {
              x.return = f2.return;
              V = x;
              break b;
            }
            V = f2.return;
          }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g2 = V;
          var u4 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u4) u4.return = g2, V = u4;
          else b: for (g2 = w2; null !== V; ) {
            h2 = V;
            if (0 !== (h2.flags & 2048)) try {
              switch (h2.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h2);
              }
            } catch (na) {
              W$1(h2, h2.return, na);
            }
            if (h2 === g2) {
              V = null;
              break b;
            }
            var F2 = h2.sibling;
            if (null !== F2) {
              F2.return = h2.return;
              V = F2;
              break b;
            }
            V = h2.return;
          }
        }
        K$1 = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a);
        } catch (na) {
        }
        d2 = true;
      }
      return d2;
    } finally {
      C$2 = c2, ok.transition = b2;
    }
  }
  return false;
}
function Xk(a, b2, c2) {
  b2 = Ji(c2, b2);
  b2 = Ni(a, b2, 1);
  a = nh(a, b2, 1);
  b2 = R();
  null !== a && (Ac(a, 1, b2), Dk(a, b2));
}
function W$1(a, b2, c2) {
  if (3 === a.tag) Xk(a, a, c2);
  else for (; null !== b2; ) {
    if (3 === b2.tag) {
      Xk(b2, a, c2);
      break;
    } else if (1 === b2.tag) {
      var d2 = b2.stateNode;
      if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
        a = Ji(c2, a);
        a = Qi(b2, a, 1);
        b2 = nh(b2, a, 1);
        a = R();
        null !== b2 && (Ac(b2, 1, a), Dk(b2, a));
        break;
      }
    }
    b2 = b2.return;
  }
}
function Ti(a, b2, c2) {
  var d2 = a.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = R();
  a.pingedLanes |= a.suspendedLanes & c2;
  Q$1 === a && (Z$1 & c2) === c2 && (4 === T$1 || 3 === T$1 && (Z$1 & 130023424) === Z$1 && 500 > B$2() - fk ? Kk(a, 0) : rk |= c2);
  Dk(a, b2);
}
function Yk(a, b2) {
  0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = R();
  a = ih(a, b2);
  null !== a && (Ac(a, b2, c2), Dk(a, c2));
}
function uj(a) {
  var b2 = a.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Yk(a, c2);
}
function bk(a, b2) {
  var c2 = 0;
  switch (a.tag) {
    case 13:
      var d2 = a.stateNode;
      var e2 = a.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a.stateNode;
      break;
    default:
      throw Error(p$2(314));
  }
  null !== d2 && d2.delete(b2);
  Yk(a, c2);
}
var Vk;
Vk = function(a, b2, c2) {
  if (null !== a) if (a.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a, b2, c2);
    dh = 0 !== (a.flags & 131072) ? true : false;
  }
  else dh = false, I$2 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      ij(a, b2);
      a = b2.pendingProps;
      var e2 = Yf(b2, H$1.current);
      ch(b2, c2);
      e2 = Nh(null, b2, d2, a, e2, c2);
      var f2 = Sh();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei, b2.stateNode = e2, e2._reactInternals = b2, Ii(b2, d2, a, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$2 && f2 && vg(b2), Xi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        ij(a, b2);
        a = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = Zk(d2);
        a = Ci(d2, a);
        switch (e2) {
          case 0:
            b2 = cj(null, b2, d2, a, c2);
            break a;
          case 1:
            b2 = hj(null, b2, d2, a, c2);
            break a;
          case 11:
            b2 = Yi(null, b2, d2, a, c2);
            break a;
          case 14:
            b2 = $i(null, b2, d2, Ci(d2.type, a), c2);
            break a;
        }
        throw Error(p$2(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), cj(a, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), hj(a, b2, d2, e2, c2);
    case 3:
      a: {
        kj(b2);
        if (null === a) throw Error(p$2(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        lh(a, b2);
        qh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
          e2 = Ji(Error(p$2(423)), b2);
          b2 = lj(a, b2, d2, c2, e2);
          break a;
        } else if (d2 !== e2) {
          e2 = Ji(Error(p$2(424)), b2);
          b2 = lj(a, b2, d2, c2, e2);
          break a;
        } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$2 = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e2) {
            b2 = Zi(a, b2, c2);
            break a;
          }
          Xi(a, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Ah(b2), null === a && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a, b2), Xi(a, b2, g2, c2), b2.child;
    case 6:
      return null === a && Eg(b2), null;
    case 13:
      return oj(a, b2, c2);
    case 4:
      return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Ug(b2, null, d2, c2) : Xi(a, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), Yi(a, b2, d2, e2, c2);
    case 7:
      return Xi(a, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Xi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Xi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G$2(Wg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2) if (He$1(f2.value, g2)) {
          if (f2.children === e2.children && !Wf.current) {
            b2 = Zi(a, b2, c2);
            break a;
          }
        } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
          var h2 = f2.dependencies;
          if (null !== h2) {
            g2 = f2.child;
            for (var k2 = h2.firstContext; null !== k2; ) {
              if (k2.context === d2) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c2 & -c2);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c2;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c2);
                bh(
                  f2.return,
                  c2,
                  b2
                );
                h2.lanes |= c2;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
          else if (18 === f2.tag) {
            g2 = f2.return;
            if (null === g2) throw Error(p$2(341));
            g2.lanes |= c2;
            h2 = g2.alternate;
            null !== h2 && (h2.lanes |= c2);
            bh(g2, c2, b2);
            g2 = f2.sibling;
          } else g2 = f2.child;
          if (null !== g2) g2.return = f2;
          else for (g2 = f2; null !== g2; ) {
            if (g2 === b2) {
              g2 = null;
              break;
            }
            f2 = g2.sibling;
            if (null !== f2) {
              f2.return = g2.return;
              g2 = f2;
              break;
            }
            g2 = g2.return;
          }
          f2 = g2;
        }
        Xi(a, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e2 = eh(e2), d2 = d2(e2), b2.flags |= 1, Xi(a, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = Ci(d2, b2.pendingProps), e2 = Ci(d2.type, e2), $i(a, b2, d2, e2, c2);
    case 15:
      return bj(a, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), ij(a, b2), b2.tag = 1, Zf(d2) ? (a = true, cg(b2)) : a = false, ch(b2, c2), Gi(b2, d2, e2), Ii(b2, d2, e2, c2), jj(null, b2, d2, true, a, c2);
    case 19:
      return xj(a, b2, c2);
    case 22:
      return dj(a, b2, c2);
  }
  throw Error(p$2(156, b2.tag));
};
function Fk(a, b2) {
  return ac(a, b2);
}
function $k(a, b2, c2, d2) {
  this.tag = a;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b2, c2, d2) {
  return new $k(a, b2, c2, d2);
}
function aj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Zk(a) {
  if ("function" === typeof a) return aj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da) return 11;
    if (a === Ga) return 14;
  }
  return 2;
}
function Pg(a, b2) {
  var c2 = a.alternate;
  null === c2 ? (c2 = Bg(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a.flags & 14680064;
  c2.childLanes = a.childLanes;
  c2.lanes = a.lanes;
  c2.child = a.child;
  c2.memoizedProps = a.memoizedProps;
  c2.memoizedState = a.memoizedState;
  c2.updateQueue = a.updateQueue;
  b2 = a.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a.sibling;
  c2.index = a.index;
  c2.ref = a.ref;
  return c2;
}
function Rg(a, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a;
  if ("function" === typeof a) aj(a) && (g2 = 1);
  else if ("string" === typeof a) g2 = 5;
  else a: switch (a) {
    case ya:
      return Tg(c2.children, e2, f2, b2);
    case za:
      g2 = 8;
      e2 |= 8;
      break;
    case Aa:
      return a = Bg(12, c2, b2, e2 | 2), a.elementType = Aa, a.lanes = f2, a;
    case Ea:
      return a = Bg(13, c2, b2, e2), a.elementType = Ea, a.lanes = f2, a;
    case Fa:
      return a = Bg(19, c2, b2, e2), a.elementType = Fa, a.lanes = f2, a;
    case Ia:
      return pj(c2, e2, f2, b2);
    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case Ba:
          g2 = 10;
          break a;
        case Ca:
          g2 = 9;
          break a;
        case Da:
          g2 = 11;
          break a;
        case Ga:
          g2 = 14;
          break a;
        case Ha:
          g2 = 16;
          d2 = null;
          break a;
      }
      throw Error(p$2(130, null == a ? a : typeof a, ""));
  }
  b2 = Bg(g2, c2, b2, e2);
  b2.elementType = a;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Tg(a, b2, c2, d2) {
  a = Bg(7, a, d2, b2);
  a.lanes = c2;
  return a;
}
function pj(a, b2, c2, d2) {
  a = Bg(22, a, d2, b2);
  a.elementType = Ia;
  a.lanes = c2;
  a.stateNode = { isHidden: false };
  return a;
}
function Qg(a, b2, c2) {
  a = Bg(6, a, null, b2);
  a.lanes = c2;
  return a;
}
function Sg(a, b2, c2) {
  b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b2;
}
function al(a, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  a = new al(a, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a;
}
function cl(a, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
}
function dl(a) {
  if (!a) return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag) throw Error(p$2(170));
    var b2 = a;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$2(171));
  }
  if (1 === a.tag) {
    var c2 = a.type;
    if (Zf(c2)) return bg(a, c2, b2);
  }
  return b2;
}
function el(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  a = bl(c2, d2, true, a, e2, f2, g2, h2, k2);
  a.context = dl(null);
  c2 = a.current;
  d2 = R();
  e2 = yi(c2);
  f2 = mh(d2, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  nh(c2, f2, e2);
  a.current.lanes = e2;
  Ac(a, e2, d2);
  Dk(a, d2);
  return a;
}
function fl(a, b2, c2, d2) {
  var e2 = b2.current, f2 = R(), g2 = yi(e2);
  c2 = dl(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = mh(f2, g2);
  b2.payload = { element: a };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a = nh(e2, b2, g2);
  null !== a && (gi(a, e2, g2, f2), oh(a, e2, g2));
  return g2;
}
function gl(a) {
  a = a.current;
  if (!a.child) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function hl(a, b2) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c2 = a.retryLane;
    a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function il(a, b2) {
  hl(a, b2);
  (a = a.alternate) && hl(a, b2);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ll(a) {
  this._internalRoot = a;
}
ml.prototype.render = ll.prototype.render = function(a) {
  var b2 = this._internalRoot;
  if (null === b2) throw Error(p$2(409));
  fl(a, b2, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b2 = a.containerInfo;
    Rk(function() {
      fl(null, a, null, null);
    });
    b2[uf] = null;
  }
};
function ml(a) {
  this._internalRoot = a;
}
ml.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b2 = Hc();
    a = { blockedOn: null, target: a, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
    Qc.splice(c2, 0, a);
    0 === c2 && Vc(a);
  }
};
function nl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function pl() {
}
function ql(a, b2, c2, d2, e2) {
  if (e2) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a2 = gl(g2);
        f2.call(a2);
      };
    }
    var g2 = el(b2, d2, a, 0, null, false, false, "", pl);
    a._reactRootContainer = g2;
    a[uf] = g2.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk();
    return g2;
  }
  for (; e2 = a.lastChild; ) a.removeChild(e2);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a2 = gl(k2);
      h2.call(a2);
    };
  }
  var k2 = bl(a, 0, false, null, null, false, false, "", pl);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Rk(function() {
    fl(b2, k2, c2, d2);
  });
  return k2;
}
function rl(a, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a2 = gl(g2);
        h2.call(a2);
      };
    }
    fl(b2, g2, a, e2);
  } else g2 = ql(c2, b2, a, e2, d2);
  return gl(g2);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b2 = a.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B$2()), 0 === (K$1 & 6) && (Gj = B$2() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b3 = ih(a, 1);
        if (null !== b3) {
          var c3 = R();
          gi(b3, a, 1, c3);
        }
      }), il(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b2 = ih(a, 134217728);
    if (null !== b2) {
      var c2 = R();
      gi(b2, a, 134217728, c2);
    }
    il(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b2 = yi(a), c2 = ih(a, b2);
    if (null !== c2) {
      var d2 = R();
      gi(c2, a, b2, d2);
    }
    il(a, b2);
  }
};
Hc = function() {
  return C$2;
};
Ic = function(a, b2) {
  var c2 = C$2;
  try {
    return C$2 = a, b2();
  } finally {
    C$2 = c2;
  }
};
yb = function(a, b2, c2) {
  switch (b2) {
    case "input":
      bb(a, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a; c2.parentNode; ) c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a && d2.form === a.form) {
            var e2 = Db(d2);
            if (!e2) throw Error(p$2(90));
            Wa(d2);
            bb(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue$1, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b2)) throw Error(p$2(200));
  return cl(a, b2, null, c2);
};
reactDom_production_min.createRoot = function(a, b2) {
  if (!nl(a)) throw Error(p$2(299));
  var c2 = false, d2 = "", e2 = kl;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = bl(a, 1, false, null, null, c2, false, d2, e2);
  a[uf] = b2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ll(b2);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b2 = a._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a.render) throw Error(p$2(188));
    a = Object.keys(a).join(",");
    throw Error(p$2(268, a));
  }
  a = Zb(b2);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Rk(a);
};
reactDom_production_min.hydrate = function(a, b2, c2) {
  if (!ol(b2)) throw Error(p$2(200));
  return rl(null, a, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a, b2, c2) {
  if (!nl(a)) throw Error(p$2(405));
  var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = kl;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = el(b2, null, a, 1, null != c2 ? c2 : null, e2, false, f2, g2);
  a[uf] = b2.current;
  sf(a);
  if (d2) for (a = 0; a < d2.length; a++) c2 = d2[a], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
    c2,
    e2
  );
  return new ml(b2);
};
reactDom_production_min.render = function(a, b2, c2) {
  if (!ol(b2)) throw Error(p$2(200));
  return rl(null, a, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!ol(a)) throw Error(p$2(40));
  return a._reactRootContainer ? (Rk(function() {
    rl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
  if (!ol(c2)) throw Error(p$2(200));
  if (null == a || void 0 === a._reactInternals) throw Error(p$2(38));
  return rl(a, b2, c2, false, d2);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
var createRoot;
var m$3 = reactDomExports;
{
  createRoot = client.createRoot = m$3.createRoot;
  client.hydrateRoot = m$3.hydrateRoot;
}
const TRELLO_API_KEY = "558e200650487a28cf1cc0b33561cd82";
const TRELLO_API_BASE = "https://api.trello.com/1";
const STORAGE_KEYS = {
  CURRENT_USER: "trelloCurrentUser",
  USER_DATA: "trelloUserData",
  THEME: "dashboardTheme",
  CLOCK_SETTING: "dashboardClockSetting_",
  REFRESH_INTERVAL: "dashboardRefreshInterval_",
  IGNORE_TEMPLATE_CARDS: "dashboardIgnoreTemplateCards_",
  IGNORE_COMPLETED_CARDS: "dashboardIgnoreCompletedCards_",
  IGNORE_NO_DESC_CARDS: "IGNORE_NO_DESC_CARDS_",
  // Matches legacy/SettingsScreen value
  RANDOM_COLORS_CACHE: "dashboardRandomColors",
  IGNORE_CARDS: "dashboardIgnoredCards_"
};
const DEFAULT_LAYOUT = [{ id: "all", name: "Default", listIds: [], ignoreFirstCard: false, displayFirstCardDescription: true, isCollapsed: false }];
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const now = /* @__PURE__ */ new Date();
const calcCalendarFilter = (key) => {
  let start, end2;
  if (key === "last_month") {
    start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    end2 = new Date(now.getFullYear(), now.getMonth(), 0);
    const monthName = MONTH_NAMES[start.getMonth()];
    return { start, end: end2, label: `Last month (${monthName} ${start.getFullYear()})`, titleSuffix: `${monthName} ${start.getFullYear()}` };
  } else if (key === "this_month") {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
    end2 = now;
    const monthName = MONTH_NAMES[now.getMonth()];
    return { start, end: end2, label: `This month (${monthName} ${now.getFullYear()})`, titleSuffix: `${monthName} ${now.getFullYear()}` };
  } else if (key === "this_week") {
    const dayOfWeek = now.getDay();
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    start = new Date(now);
    start.setDate(now.getDate() - daysToSubtract);
    start.setHours(0, 0, 0, 0);
    end2 = now;
    return { start, end: end2, label: `This week (Mon-Sun)`, titleSuffix: `This Week` };
  } else if (key === "last_week") {
    const dayOfWeek = now.getDay();
    const daysToSubtract = (dayOfWeek === 0 ? 6 : dayOfWeek - 1) + 7;
    start = new Date(now);
    start.setDate(now.getDate() - daysToSubtract);
    start.setHours(0, 0, 0, 0);
    end2 = new Date(start);
    end2.setDate(start.getDate() + 6);
    end2.setHours(23, 59, 59, 999);
    return { start, end: end2, label: `Last week (Mon-Sun)`, titleSuffix: `Last Week` };
  } else if (key === "last_3m") {
    start = new Date(now);
    start.setMonth(now.getMonth() - 3);
    start.setHours(0, 0, 0, 0);
    end2 = now;
    return { start, end: end2, label: "Last 3 Months", titleSuffix: "Last 3 Months" };
  } else if (key === "ytd") {
    start = new Date(now.getFullYear(), 0, 1);
    end2 = now;
    return { start, end: end2, label: "Year to Date", titleSuffix: "YTD" };
  } else if (key === "last_year") {
    start = new Date(now.getFullYear() - 1, 0, 1);
    end2 = new Date(now.getFullYear() - 1, 11, 31, 23, 59, 59, 999);
    return { start, end: end2, label: "Last Year", titleSuffix: "Last Year" };
  }
};
const TIME_FILTERS = {
  "all": { label: "All Time", minutes: 0, titleSuffix: "All Time", type: "absolute" },
  "24h": { label: "Last 24h", minutes: 60 * 24, titleSuffix: "Last 24h", type: "relative" },
  "48h": { label: "Last 48h", minutes: 60 * 48, titleSuffix: "Last 48h", type: "relative" },
  "72h": { label: "Last 72h", minutes: 60 * 72, titleSuffix: "Last 72h", type: "relative" },
  "7d": { label: "Last 7 days", minutes: 60 * 24 * 7, titleSuffix: "Last 7 Days", type: "relative" },
  "this_week": { ...calcCalendarFilter("this_week"), type: "calendar" },
  "last_week": { ...calcCalendarFilter("last_week"), type: "calendar" },
  "last_30d": { label: "Last 30 days", minutes: 60 * 24 * 30, titleSuffix: "Last 30 Days", type: "relative" },
  "this_month": { ...calcCalendarFilter("this_month"), type: "calendar" },
  "last_month": { ...calcCalendarFilter("last_month"), type: "calendar" },
  "last_3m": { ...calcCalendarFilter("last_3m"), type: "calendar" },
  "ytd": { ...calcCalendarFilter("ytd"), type: "calendar" },
  "last_year": { ...calcCalendarFilter("last_year"), type: "calendar" }
};
const trelloAuth = {
  login: (scope = "read") => {
    const appName = "Trello Stats Dashboard";
    const returnUrl = window.location.href.split("#")[0];
    const authUrl = `https://trello.com/1/authorize?expiration=never&name=${encodeURIComponent(appName)}&scope=${scope}&response_type=token&key=${TRELLO_API_KEY}&return_url=${encodeURIComponent(returnUrl)}`;
    window.location.href = authUrl;
  },
  getTokenFromUrl: () => {
    const hash = window.location.hash.substring(1);
    if (hash.startsWith("token=")) {
      const token = hash.substring(6);
      history.pushState("", document.title, window.location.pathname + window.location.search);
      return token;
    }
    return null;
  },
  logout: (callback) => {
    if (callback) callback();
  },
  checkTokenScopes: async (token) => {
    if (!token) return [];
    try {
      const response = await fetch(`${TRELLO_API_BASE}/tokens/${token}?key=${TRELLO_API_KEY}&token=${token}`);
      if (response.ok) {
        const data = await response.json();
        return data.permissions ? data.permissions.map((p2) => p2.read === true ? "read" : "").concat(data.permissions.map((p2) => p2.write === true ? "write" : "")).filter(Boolean) : [];
      }
    } catch (e2) {
      console.warn("Failed to check token scopes", e2);
    }
    return [];
  }
};
const trelloFetch = async (path, token, options = {}) => {
  if (!token) {
    throw new Error("Trello authentication token not provided.");
  }
  const apiKey = options.apiKey || TRELLO_API_KEY;
  const url = `${TRELLO_API_BASE}${path}${path.includes("?") ? "&" : "?"}key=${apiKey}&token=${token}`;
  console.log(`[TrelloAPI] ${options.method || "GET"} ${path}`, { options, url });
  const response = await fetch(url, options);
  if (response.ok) {
    console.log(`[TrelloAPI] Response OK ${response.status} for ${path}`);
  } else {
    const errorText = await response.text();
    console.error(`[TrelloAPI] Error ${response.status}:`, errorText);
    let errorMessage = errorText;
    try {
      const errorJson = JSON.parse(errorText);
      if (errorJson && errorJson.message) {
        errorMessage = errorJson.message;
      }
    } catch (e2) {
    }
    if (response.status === 429) {
      throw new Error(`Rate limit exceeded (429): Trello API requests too fast/frequent.`);
    }
    if (response.status === 401) {
      throw new Error(`Invalid or expired token. Please log in again. (Details: ${errorMessage})`);
    }
    throw new Error(errorMessage || `Trello API error: ${response.status}`);
  }
  return response.json();
};
const fetchAllTasksData = async (token) => {
  if (!token) throw new Error("No token provided");
  const orgsPromise = trelloFetch("/members/me/organizations?fields=id,displayName,name", token);
  const boardsPromise = trelloFetch("/members/me/boards?filter=open&fields=id,name,idOrganization,shortUrl,prefs", token);
  const memberCardsPromise = trelloFetch("/members/me/cards?filter=visible&fields=id,name,due,dueComplete,idBoard,idList,url,shortUrl,desc,idMembers,labels&checklists=all&checklist_fields=all", token);
  const searchPromise = trelloFetch("/search?query=checklist:me is:open&modelTypes=cards&cards_limit=1000&card_fields=id", token);
  const [orgs, boards, memberCards, searchResult] = await Promise.all([
    orgsPromise,
    boardsPromise,
    memberCardsPromise,
    searchPromise
  ]);
  const memberCardIds = new Set(memberCards.map((c2) => c2.id));
  const searchCards = searchResult.cards || [];
  const missingCardIds = searchCards.map((c2) => c2.id).filter((id2) => !memberCardIds.has(id2));
  let additionalCards = [];
  if (missingCardIds.length > 0) {
    const BATCH_SIZE = 10;
    const chunks = [];
    for (let i = 0; i < missingCardIds.length; i += BATCH_SIZE) {
      chunks.push(missingCardIds.slice(i, i + BATCH_SIZE));
    }
    const cardFields = "id,name,due,dueComplete,idBoard,idList,url,shortUrl,desc,idMembers,labels";
    const checklistParams = "checklists=all&checklist_fields=all";
    const batchPromises = chunks.map((chunk) => {
      const batchUrls = chunk.map((id2) => `/cards/${id2}?fields=${cardFields}&${checklistParams}`).join(",");
      return trelloFetch(`/batch?urls=${batchUrls}`, token);
    });
    const batchResults = await Promise.all(batchPromises);
    batchResults.forEach((batch2) => {
      if (Array.isArray(batch2)) {
        batch2.forEach((item) => {
          if (item["200"]) {
            additionalCards.push(item["200"]);
          }
        });
      }
    });
  }
  const allCards = [...memberCards, ...additionalCards];
  const knownBoardIds = new Set(boards.map((b2) => b2.id));
  const potentialBoardIds = new Set(allCards.map((c2) => c2.idBoard));
  const missingBoardIds = [...potentialBoardIds].filter((id2) => id2 && !knownBoardIds.has(id2));
  if (missingBoardIds.length > 0) {
    const BATCH_SIZE = 10;
    const chunks = [];
    for (let i = 0; i < missingBoardIds.length; i += BATCH_SIZE) {
      chunks.push(missingBoardIds.slice(i, i + BATCH_SIZE));
    }
    const batchPromises = chunks.map((chunk) => {
      const batchUrls = chunk.map((id2) => `/boards/${id2}?fields=id,name,idOrganization,shortUrl,prefs`).join(",");
      return trelloFetch(`/batch?urls=${batchUrls}`, token);
    });
    const batchResults = await Promise.all(batchPromises);
    batchResults.forEach((batch2) => {
      if (Array.isArray(batch2)) {
        batch2.forEach((item) => {
          if (item["200"]) {
            boards.push(item["200"]);
          }
        });
      }
    });
  }
  const knownOrgIds = new Set(orgs.map((o) => o.id));
  const potentialOrgIds = /* @__PURE__ */ new Set();
  boards.forEach((b2) => {
    if (b2.idOrganization) potentialOrgIds.add(b2.idOrganization);
  });
  const missingOrgIds = [...potentialOrgIds].filter((id2) => !knownOrgIds.has(id2));
  if (missingOrgIds.length > 0) {
    const BATCH_SIZE = 10;
    const chunks = [];
    for (let i = 0; i < missingOrgIds.length; i += BATCH_SIZE) {
      chunks.push(missingOrgIds.slice(i, i + BATCH_SIZE));
    }
    const batchPromises = chunks.map((chunk) => {
      const batchUrls = chunk.map((id2) => `/organizations/${id2}?fields=id,displayName,name`).join(",");
      return trelloFetch(`/batch?urls=${batchUrls}`, token);
    });
    const batchResults = await Promise.all(batchPromises);
    batchResults.forEach((batch2) => {
      if (Array.isArray(batch2)) {
        batch2.forEach((item) => {
          if (item["200"]) {
            orgs.push(item["200"]);
          }
        });
      }
    });
  }
  return { orgs, boards, cards: allCards };
};
const getCurrentUser = () => {
  return localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
};
const setCurrentUser = (userId) => {
  if (userId) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, userId);
  } else {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }
};
const getUserData = (userId, key) => {
  if (!userId) return null;
  const allUserData = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_DATA)) || {};
  const userData = allUserData[userId] || {};
  return userData[key];
};
const setUserData = (userId, key, value) => {
  if (!userId) return;
  const allUserData = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_DATA)) || {};
  if (!allUserData[userId]) {
    allUserData[userId] = {};
  }
  allUserData[userId][key] = value;
  localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(allUserData));
};
const getPersistentColors = (userId) => {
  try {
    return getUserData(userId, "listColors") || {};
  } catch (e2) {
    return {};
  }
};
const setPersistentColors = (userId, boardId, colorsMap) => {
  const allColors = getPersistentColors(userId);
  allColors[boardId] = colorsMap;
  setUserData(userId, "listColors", allColors);
};
const getPersistentLayout = (userId, boardId) => {
  try {
    const layout = getUserData(userId, "dashboardLayout") || {};
    const savedLayout = layout[boardId] || DEFAULT_LAYOUT;
    return savedLayout.map((s) => ({
      ...s,
      isCollapsed: s.isCollapsed || false,
      ignoreFirstCard: s.ignoreFirstCard || false,
      displayFirstCardDescription: s.displayFirstCardDescription !== false,
      // Default to true
      includeOnMap: s.includeOnMap === true
      // Default to false
    }));
  } catch (e2) {
    console.error("Error parsing dashboard layout:", e2);
    return DEFAULT_LAYOUT;
  }
};
const setPersistentLayout = (userId, boardId, layout) => {
  try {
    const allLayouts = getUserData(userId, "dashboardLayout") || {};
    allLayouts[boardId] = layout;
    setUserData(userId, "dashboardLayout", allLayouts);
  } catch (e2) {
    console.error("Error saving dashboard layout:", e2);
  }
};
const DarkModeContext = reactExports.createContext();
const useDarkMode = () => {
  return reactExports.useContext(DarkModeContext);
};
const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = reactExports.useState(() => localStorage.getItem(STORAGE_KEYS.THEME) || "system");
  reactExports.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = (currentTheme) => {
      const resolvedTheme = currentTheme === "system" ? mediaQuery.matches ? "dark" : "light" : currentTheme;
      document.documentElement.setAttribute("data-theme", resolvedTheme);
    };
    applyTheme(theme);
    const handleChange = () => applyTheme(theme);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);
  const toggleTheme = (newTheme) => {
    const resolvedTheme = newTheme || (theme === "light" ? "dark" : "light");
    setTheme(resolvedTheme);
    localStorage.setItem(STORAGE_KEYS.THEME, resolvedTheme);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DarkModeContext.Provider, { value: { theme, toggleTheme }, children });
};
const LandingPage = () => {
  const handleLogin = (e2) => {
    e2.preventDefault();
    trelloAuth.login();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "landing-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "landing-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: "Trellops" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "powerupicon2.png", alt: "Trellops Logo", style: { width: "120px", height: "120px", marginBottom: "20px" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Transform Your Trello Boards into Real-Time Operational Dashboards." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "subtitle", children: "From Kanban to Command Centre. Visualize your workload on a Wallboard or a Map." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#login", className: "cta-button", onClick: handleLogin, children: "Try Trellops Now!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "features", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "icon", children: "📊" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Real-Time Wallboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "See instant, close-to-realtime workload metrics. Perfect for office wall screens and operations centres. Group lists into custom blocks to focus on what matters." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "icon", children: "🗺️" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Live Map View" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "New!" }),
          " Visualize your cards geographically. Trellops automatically plots cards based on their address description or coordinates. Track field ops at a glance."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "icon", children: "🖱️" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Drag-and-Drop Control" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "New!" }),
          " Organise your dashboard in seconds. Simply drag lists between blocks and reorder your view with an intuitive new interface."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "icon", children: "🔒" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Privacy by Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'We believe in "Local First." Your dashboard configuration lives on your device. Server storage is only used if you explicitly choose to share a configuration link with a colleague.' })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "details", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why Trellops?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Custom Icons:" }),
          " Assign specific icons to blocks or override them based on Trello labels."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Smart Filters:" }),
          " Filter card totals by creation date to spot trends."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Actionable Map:" }),
          " Move cards to different lists directly from the map interface (requires write permission)."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Effortless Sharing:" }),
          " Share your exact setup with your team via a unique, secure link."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { id: "login-btn", onClick: handleLogin, children: "Login with Trello" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "help.html", children: "User Guide" }),
        " | ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "privacy.html", children: "Privacy Disclaimer" })
      ] })
    ] })
  ] });
};
const convertIntervalToSeconds = (value, unit) => {
  const numValue = parseInt(value) || 0;
  if (unit === "seconds") return numValue;
  if (unit === "minutes") return numValue * 60;
  if (unit === "hours") return numValue * 3600;
  return 30;
};
const getOrGenerateRandomColor = (listId, existingColors) => {
  let cache = JSON.parse(localStorage.getItem(STORAGE_KEYS.RANDOM_COLORS_CACHE)) || {};
  let color = cache[listId];
  const DEFAULT_FALLBACK_COLOR = "#dcdcdc";
  if (!color) {
    let r2, g2, b2;
    do {
      r2 = Math.floor(Math.random() * 101);
      g2 = Math.floor(Math.random() * 101);
      b2 = Math.floor(Math.random() * 101);
      color = "#" + ((1 << 24) + (r2 << 16) + (g2 << 8) + b2).toString(16).slice(1).padStart(6, "0");
    } while (existingColors instanceof Set && existingColors.has(color));
    cache[listId] = color;
    localStorage.setItem(STORAGE_KEYS.RANDOM_COLORS_CACHE, JSON.stringify(cache));
  }
  return color || DEFAULT_FALLBACK_COLOR;
};
const getLabelTextColor = (theme) => {
  const resolvedTheme = theme === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : theme;
  return resolvedTheme === "dark" ? "#ffffff" : "#222222";
};
const formatDynamicCountdown = (seconds) => {
  if (seconds === null || seconds === void 0) return "";
  if (seconds <= 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.ceil(seconds / 60)}m`;
  return `${Math.round(seconds / 3600)}h`;
};
const getTerminology = (settings2) => {
  const defaultTerms = {
    card: "Card",
    cards: "Cards",
    list: "List",
    lists: "Lists",
    board: "Board",
    boards: "Boards",
    label: "Label",
    labels: "Labels"
  };
  const naming = (settings2 == null ? void 0 : settings2.naming) || {};
  return {
    card: naming.card || defaultTerms.card,
    cards: naming.card ? `${naming.card}s` : defaultTerms.cards,
    list: naming.list || defaultTerms.list,
    lists: naming.list ? `${naming.list}s` : defaultTerms.lists,
    board: naming.board || defaultTerms.board,
    boards: naming.board ? `${naming.board}s` : defaultTerms.boards,
    label: naming.label || defaultTerms.label,
    labels: naming.label ? `${naming.label}s` : defaultTerms.labels
  };
};
const DigitalClock = ({ boardId, compact = false }) => {
  const [time, setTime] = reactExports.useState("");
  const [showClock, setShowClock] = reactExports.useState(() => localStorage.getItem(STORAGE_KEYS.CLOCK_SETTING + boardId) !== "false");
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      const now2 = /* @__PURE__ */ new Date();
      setTime(now2.toLocaleTimeString(void 0, { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    }, 1e3);
    return () => clearInterval(timer);
  }, []);
  reactExports.useEffect(() => {
    const savedSetting = localStorage.getItem(STORAGE_KEYS.CLOCK_SETTING + boardId);
    setShowClock(savedSetting !== "false");
  }, [boardId]);
  if (!showClock) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: compact ? "compact-clock" : "large-clock", style: compact ? { fontSize: "1.2em", fontWeight: "bold", color: "var(--text-primary)" } : {}, children: time || "--:--:--" });
};
const CardDetailsModal = ({ listId, listName, color, token, onClose, sectionsLayout, ignoreTemplateCards, ignoreNoDescCards, settings: settings2 }) => {
  const [cards, setCards] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  const { theme } = useDarkMode();
  const terms = getTerminology(settings2);
  const CardsTerm = terms.cards;
  const section = sectionsLayout.find((s) => s.listIds.includes(listId));
  const shouldIgnoreFirst = (section == null ? void 0 : section.ignoreFirstCard) || false;
  reactExports.useEffect(() => {
    setLoading(true);
    setError("");
    trelloFetch(`/lists/${listId}/cards?fields=id,name,shortUrl,labels,isTemplate,desc`, token).then((data) => {
      let cardsToDisplay = data;
      if (ignoreTemplateCards) {
        cardsToDisplay = cardsToDisplay.filter((card) => !card.isTemplate);
      }
      const filteredCards = shouldIgnoreFirst ? cardsToDisplay.slice(1) : cardsToDisplay;
      setCards(filteredCards);
    }).catch((e2) => {
      console.error("Card fetch error:", e2);
      setError(`Failed to load cards for this list: ${e2.message}`);
    }).finally(() => setLoading(false));
  }, [listId, token, shouldIgnoreFirst, ignoreTemplateCards]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-content", onClick: (e2) => e2.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "modal-close", onClick: onClose, style: { float: "right", fontSize: "1.5em", cursor: "pointer" }, children: "×" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { style: { color, borderColor: color }, children: [
      CardsTerm,
      " in: ",
      listName,
      " (",
      cards.length,
      ")"
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Loading ",
      CardsTerm.toLowerCase(),
      "..."
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "error", children: error }),
    !loading && cards.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "No ",
      CardsTerm.toLowerCase(),
      " found in this list."
    ] }),
    !loading && cards.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: cards.map((card) => {
      var _a2;
      const isIgnored = ignoreNoDescCards && (!card.desc || !card.desc.trim());
      const itemStyle = isIgnored ? { color: "lightgrey", fontStyle: "italic" } : {};
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-list-item", style: itemStyle, children: [
        (_a2 = card.labels) == null ? void 0 : _a2.map((label) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "card-label",
            style: {
              backgroundColor: label.color || "#999",
              color: getLabelTextColor(theme),
              opacity: isIgnored ? 0.6 : 1
            },
            children: label.name || label.color
          },
          label.id
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: card.shortUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            title: card.name,
            style: itemStyle,
            children: [
              card.name,
              " ",
              isIgnored && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.8em" }, children: " (no description)" })
            ]
          }
        )
      ] }, card.id);
    }) })
  ] }) });
};
const LabelFilter = ({ labels, selectedLabelIds, onChange, labelLogic, onLabelLogicChange }) => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const dropdownRef = reactExports.useRef(null);
  const { theme } = useDarkMode();
  const isAll = selectedLabelIds === null || selectedLabelIds === void 0;
  reactExports.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const toggleLabel = (id2) => {
    if (isAll) {
      const allOtherIds = new Set(labels.filter((l2) => l2.id !== id2).map((l2) => l2.id));
      onChange(allOtherIds);
    } else {
      const newSet = new Set(selectedLabelIds);
      if (newSet.has(id2)) newSet.delete(id2);
      else newSet.add(id2);
      onChange(newSet);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", display: "inline-block", marginLeft: "10px" }, ref: dropdownRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: "settings-button",
        onClick: () => setIsOpen(!isOpen),
        style: {
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 12px",
          fontSize: "0.9em",
          backgroundColor: theme === "dark" ? "var(--bg-secondary)" : "#ffffff",
          color: "var(--text-primary)",
          border: "1px solid var(--border-color)"
        },
        children: [
          "Labels",
          !isAll && selectedLabelIds.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            background: "var(--accent-color)",
            color: "white",
            borderRadius: "10px",
            padding: "0 6px",
            fontSize: "0.8em"
          }, children: selectedLabelIds.size }),
          !isAll && selectedLabelIds.size === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.8em", color: "var(--text-secondary)" }, children: "(None)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.8em" }, children: "▼" })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      position: "absolute",
      top: "100%",
      left: 0,
      marginTop: "5px",
      background: "var(--bg-secondary)",
      border: "1px solid var(--border-color)",
      borderRadius: "6px",
      boxShadow: "0 4px 12px var(--shadow-color)",
      zIndex: 1e3,
      width: "320px",
      display: "flex",
      flexDirection: "column",
      maxHeight: "500px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        padding: "10px",
        borderBottom: "1px solid var(--border-color)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "0.9em",
        fontWeight: "bold",
        color: "var(--text-primary)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Filter by Labels" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => onChange(null),
              style: {
                background: "transparent",
                border: "none",
                color: "var(--accent-color)",
                cursor: "pointer",
                fontSize: "0.9em",
                textDecoration: "underline"
              },
              children: "All"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => onChange(/* @__PURE__ */ new Set()),
              style: {
                background: "transparent",
                border: "none",
                color: "var(--text-secondary)",
                cursor: "pointer",
                fontSize: "0.9em",
                textDecoration: "underline"
              },
              children: "None"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "8px 10px", background: "var(--bg-tertiary)", borderBottom: "1px solid var(--border-color)", display: "flex", alignItems: "center", fontSize: "0.85em", color: "var(--text-secondary)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "15px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", cursor: "pointer" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "radio",
              name: "labelLogic",
              value: "OR",
              checked: labelLogic === "OR",
              onChange: () => onLabelLogicChange("OR"),
              style: { marginRight: "5px" }
            }
          ),
          "Match any"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", cursor: "pointer" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "radio",
              name: "labelLogic",
              value: "AND",
              checked: labelLogic === "AND",
              onChange: () => onLabelLogicChange("AND"),
              style: { marginRight: "5px" }
            }
          ),
          "Match all"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowY: "auto", padding: "10px", flex: 1 }, children: labels.map((label) => {
        const isChecked = isAll || selectedLabelIds.has(label.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "6px 0",
          cursor: "pointer",
          color: "var(--text-primary)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: isChecked,
              onChange: () => toggleLabel(label.id),
              style: { marginRight: "10px" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            display: "inline-block",
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: label.color || "#ccc",
            marginRight: "8px"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.9em" }, children: label.name || (label.color ? label.color : "No Name") })
        ] }, label.id);
      }) })
    ] })
  ] });
};
const ICONS = {
  // New Generic Icons
  "star": `<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>`,
  "heart": `<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>`,
  "flag": `<path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>`,
  "bookmark": `<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>`,
  "circle": `<circle cx="12" cy="12" r="10" />`,
  // Existing / Retained Icons
  "map-marker": `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>`,
  "user": `<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>`,
  "check-circle": `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>`,
  "alert-triangle": `<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>`,
  "info-circle": `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>`,
  "clock": `<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>`,
  "calendar": `<path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>`,
  "home": `<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>`,
  "truck": `<path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>`,
  "trash": `<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>`,
  // Weather/Nature
  "cloud": `<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>`,
  "sun": `<path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>`,
  "moon": `<path d="M6 14c0-3.31 2.69-6 6-6 1.05 0 2.03.28 2.89.76-.74-2.67-2.92-4.7-5.63-5.22-4.07-.78-8.08 1.84-8.86 5.91-.78 4.07 1.84 8.08 5.91 8.86 2.37.45 4.68-.31 6.36-1.87C9.31 20.3 6 17.58 6 14z"/>`,
  "flash": `<path d="M7 2v11h3v9l7-12h-4l4-8z"/>`,
  // Tools/Actions
  "edit": `<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>`,
  "lock": `<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3 3.1-3 1.71 0 3.1 1.29 3.1 3v2z"/>`,
  "unlock": `<path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3 3.1-3 1.71 0 3.1 1.29 3.1 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>`,
  "bell": `<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>`,
  // Transport
  "car": `<path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>`,
  "bus": `<path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 6h14v5H5V6z"/>`,
  "bike": `<path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1.2-.4-1.6 0l-1.6 1.6 1.6 1.6zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>`,
  "train": `<path d="M12 2c-4 0-8 .5-8 4v9.5c0 .95.38 1.81 1 2.44V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.56c.62-.63 1-1.49 1-2.44V6c0-3.5-3.58-4-8-4zm0 2c3.5 0 6 .5 6 1v5H6V5c0-.5 2.5-1 6-1zm6 11H6v-3h12v3z"/>`,
  "flight": `<path d="M10.18 9l-5.8-5.8L3 4.61v21.61L4.38 27.6l5.8-5.8h11.61L22.6 19.82 2.62.6 1.41 1.41l8.77 8.77z" fill="transparent" /><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>`,
  "boat": `<path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.39-.6-.39H2.72c-.26 0-.5.15-.6.39s-.14.52-.06.78L3.95 19zM6 6h12v2H6zm0 4h12v2H6z"/>`,
  "walk": `<path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>`,
  // Media & Actions
  "play": `<path d="M8 5v14l11-7z"/>`,
  "pause": `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`,
  "stop": `<path d="M6 6h12v12H6z"/>`,
  "forward": `<path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>`,
  "backward": `<path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/>`,
  "fingerprint": `<path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.03-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"/>`,
  "verified": `<path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"/>`,
  "shopping-cart": `<path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>`,
  "gavel": `<path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.83 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"/>`,
  "build": `<path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>`,
  "external-link": `<path d="M19 19H5V5h7V3H5c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.89 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>`,
  "street-view": `<path d="M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z"/> <circle cx="18" cy="6" r="5"/> <path d="M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z"/>`
};
const IconPicker = ({ selectedIcon, onChange, color = "#444" }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "icon-picker-grid", style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(36px, 1fr))",
    gap: "8px",
    padding: "8px",
    border: "1px solid var(--border-color)",
    borderRadius: "6px",
    marginTop: "8px",
    maxHeight: "160px",
    overflowY: "auto"
  }, children: Object.keys(ICONS).map((iconName) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      title: iconName,
      onClick: () => onChange(iconName),
      style: {
        padding: "6px",
        cursor: "pointer",
        borderRadius: "4px",
        border: selectedIcon === iconName ? "2px solid #579aff" : "1px solid transparent",
        backgroundColor: selectedIcon === iconName ? "rgba(87, 154, 255, 0.1)" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: color,
          dangerouslySetInnerHTML: { __html: ICONS[iconName] }
        }
      )
    },
    iconName
  )) });
};
const MapFilters = ({
  blocks,
  lists,
  allLabels,
  cards,
  markerRules,
  visibleListIds,
  visibleRuleIds,
  onToggleList,
  onToggleBlock,
  onToggleRule,
  // onToggleAll, // Removed
  onToggleAllBlocks,
  onToggleAllRules,
  homeLocation,
  showHomeLocation,
  onToggleHome
}) => {
  const [isExpanded, setIsExpanded] = reactExports.useState(false);
  const getListCount = (listId) => {
    if (!cards) return 0;
    return cards.filter((c2) => c2.idList === listId && c2.coordinates && c2.coordinates.lat).length;
  };
  const getBlockCount = (block) => {
    if (!cards || !block) return 0;
    return cards.filter((c2) => block.listIds.includes(c2.idList) && c2.coordinates && c2.coordinates.lat).length;
  };
  const getRuleCount = (rule, isDefault) => {
    if (!cards) return 0;
    const mappedCards = cards.filter((c2) => c2.coordinates && c2.coordinates.lat);
    if (isDefault) {
      return mappedCards.filter((c2) => {
        for (const r2 of markerRules) {
          if (c2.labels && c2.labels.some((l2) => l2.id === r2.labelId)) return false;
        }
        return true;
      }).length;
    }
    return mappedCards.filter((c2) => c2.labels && c2.labels.some((l2) => l2.id === rule.labelId)).length;
  };
  const renderIcon = (iconName) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      style: { marginRight: "6px", verticalAlign: "middle" },
      dangerouslySetInnerHTML: { __html: ICONS[iconName ? iconName.toLowerCase() : "map-marker"] || ICONS["map-marker"] }
    }
  );
  const renderColorDot = (color) => {
    const colorMap = {
      "blue": "#3388ff",
      "red": "#ff6b6b",
      "green": "#51cf66",
      "orange": "#ffa94d",
      "yellow": "#ffd43b",
      "grey": "#868e96",
      "black": "#343a40",
      "purple": "#9c27b0"
    };
    const bg2 = colorMap[color] || color;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: bg2,
      display: "inline-block",
      marginRight: "8px",
      verticalAlign: "middle",
      border: "1px solid rgba(0,0,0,0.2)"
    } });
  };
  if (!isExpanded) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-filters-overlay collapsed", onClick: () => setIsExpanded(true), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "filter-icon", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 6H21", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 12H17", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 18H14", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
      ] }),
      "Filters"
    ] });
  }
  const allBlockListIds = blocks.filter((b2) => b2.includeOnMap !== false).flatMap((b2) => b2.listIds);
  allBlockListIds.length > 0 && allBlockListIds.every((id2) => visibleListIds.has(id2));
  allBlockListIds.some((id2) => visibleListIds.has(id2));
  const allRuleIds = markerRules.map((r2) => r2.id).concat(["default"]);
  allRuleIds.every((id2) => visibleRuleIds.has(id2));
  allRuleIds.some((id2) => visibleRuleIds.has(id2));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-filters-overlay expanded", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filters-header", onClick: () => setIsExpanded(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Filters" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "close-filters", children: "▼" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filters-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-header-row", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Blocks" }) }),
        blocks.filter((b2) => b2.includeOnMap !== false).map((block) => {
          const relevantLists = block.listIds;
          const allVisible = relevantLists.every((id2) => visibleListIds.has(id2));
          const someVisible = relevantLists.some((id2) => visibleListIds.has(id2));
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-row block-row", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: allVisible,
                  ref: (input) => {
                    if (input) input.indeterminate = someVisible && !allVisible;
                  },
                  onChange: (e2) => onToggleBlock(block.id, e2.target.checked)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "label-text", children: [
                renderIcon(block.mapIcon),
                block.name,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { opacity: 0.6, marginLeft: "4px" }, children: [
                  "(",
                  getBlockCount(block),
                  ")"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "nested-lists", children: block.listIds.map((listId) => {
              const list = lists.find((l2) => l2.id === listId);
              if (!list) return null;
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-row list-row", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: visibleListIds.has(listId),
                    onChange: () => onToggleList(listId)
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "label-text", children: [
                  list.name,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { opacity: 0.6, marginLeft: "4px" }, children: [
                    "(",
                    getListCount(listId),
                    ")"
                  ] })
                ] })
              ] }) }, listId);
            }) })
          ] }, block.id);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-header-row", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Marker Variants" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-row", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: visibleRuleIds.has("default"),
              onChange: () => onToggleRule("default")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "label-text", children: [
            renderColorDot("blue"),
            "Default / No Rule ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { opacity: 0.6, marginLeft: "4px" }, children: [
              "(",
              getRuleCount(null, true),
              ")"
            ] })
          ] })
        ] }) }),
        markerRules.map((rule) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-row", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: visibleRuleIds.has(rule.id),
              onChange: () => onToggleRule(rule.id)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "label-text", children: [
            rule.overrideType === "color" ? renderColorDot(rule.overrideValue) : renderIcon(rule.overrideValue),
            (() => {
              const label = allLabels ? allLabels.find((l2) => l2.id === rule.labelId) : null;
              return label ? label.name : rule.labelName || "Unknown Label";
            })(),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { opacity: 0.6, marginLeft: "4px" }, children: [
              "(",
              getRuleCount(rule, false),
              ")"
            ] })
          ] })
        ] }) }, rule.id))
      ] }),
      homeLocation && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-section", style: { borderTop: "1px solid #eee", paddingTop: "10px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-row", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            checked: showHomeLocation,
            onChange: onToggleHome
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "label-text", children: [
          renderIcon(homeLocation.icon),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Home" })
        ] })
      ] }) }) })
    ] })
  ] });
};
const loadGoogleMaps = () => {
  {
    return Promise.reject(new Error("Google Maps API Key is missing. Please check VITE_GOOGLE_MAPS_API_KEY env var."));
  }
};
const googleMapsLoader = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loadGoogleMaps
}, Symbol.toStringTag, { value: "Module" }));
function L() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var T = L();
function Z(u4) {
  T = u4;
}
var C$1 = { exec: () => null };
function k$2(u4, e2 = "") {
  let t2 = typeof u4 == "string" ? u4 : u4.source, n2 = { replace: (r2, i) => {
    let s = typeof i == "string" ? i : i.source;
    return s = s.replace(m$2.caret, "$1"), t2 = t2.replace(r2, s), n2;
  }, getRegex: () => new RegExp(t2, e2) };
  return n2;
}
var me = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return false;
  }
})(), m$2 = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (u4) => new RegExp(`^( {0,3}${u4})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (u4) => new RegExp(`^ {0,${Math.min(3, u4 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (u4) => new RegExp(`^ {0,${Math.min(3, u4 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (u4) => new RegExp(`^ {0,${Math.min(3, u4 - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (u4) => new RegExp(`^ {0,${Math.min(3, u4 - 1)}}#`), htmlBeginRegex: (u4) => new RegExp(`^ {0,${Math.min(3, u4 - 1)}}<(?:[a-z].*>|!--)`, "i") }, xe = /^(?:[ \t]*(?:\n|$))+/, be = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Re = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, I$1 = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Te = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, N = /(?:[*+-]|\d{1,9}[.)])/, re = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, se = k$2(re).replace(/bull/g, N).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Oe = k$2(re).replace(/bull/g, N).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Q = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, we = /^[^\n]+/, F$1 = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, ye = k$2(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", F$1).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Pe = k$2(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, N).getRegex(), v$2 = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", j = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Se = k$2("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", j).replace("tag", v$2).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ie = k$2(Q).replace("hr", I$1).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v$2).getRegex(), $e = k$2(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ie).getRegex(), U = { blockquote: $e, code: be, def: ye, fences: Re, heading: Te, hr: I$1, html: Se, lheading: se, list: Pe, newline: xe, paragraph: ie, table: C$1, text: we }, te = k$2("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", I$1).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v$2).getRegex(), _e = { ...U, lheading: Oe, table: te, paragraph: k$2(Q).replace("hr", I$1).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", te).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v$2).getRegex() }, Le = { ...U, html: k$2(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", j).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: C$1, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: k$2(Q).replace("hr", I$1).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", se).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Me = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, ze = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, oe = /^( {2,}|\\)\n(?!\s*$)/, Ae = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, D$1 = /[\p{P}\p{S}]/u, K = /[\s\p{P}\p{S}]/u, ae = /[^\s\p{P}\p{S}]/u, Ce = k$2(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, K).getRegex(), le = /(?!~)[\p{P}\p{S}]/u, Ie = /(?!~)[\s\p{P}\p{S}]/u, Ee = /(?:[^\s\p{P}\p{S}]|~)/u, Be = k$2(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", me ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), ue = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, qe = k$2(ue, "u").replace(/punct/g, D$1).getRegex(), ve = k$2(ue, "u").replace(/punct/g, le).getRegex(), pe = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", De = k$2(pe, "gu").replace(/notPunctSpace/g, ae).replace(/punctSpace/g, K).replace(/punct/g, D$1).getRegex(), He = k$2(pe, "gu").replace(/notPunctSpace/g, Ee).replace(/punctSpace/g, Ie).replace(/punct/g, le).getRegex(), Ze = k$2("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ae).replace(/punctSpace/g, K).replace(/punct/g, D$1).getRegex(), Ge = k$2(/\\(punct)/, "gu").replace(/punct/g, D$1).getRegex(), Ne = k$2(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Qe = k$2(j).replace("(?:-->|$)", "-->").getRegex(), Fe = k$2("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Qe).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), q$2 = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, je = k$2(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", q$2).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ce = k$2(/^!?\[(label)\]\[(ref)\]/).replace("label", q$2).replace("ref", F$1).getRegex(), he = k$2(/^!?\[(ref)\](?:\[\])?/).replace("ref", F$1).getRegex(), Ue = k$2("reflink|nolink(?!\\()", "g").replace("reflink", ce).replace("nolink", he).getRegex(), ne = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, W = { _backpedal: C$1, anyPunctuation: Ge, autolink: Ne, blockSkip: Be, br: oe, code: ze, del: C$1, emStrongLDelim: qe, emStrongRDelimAst: De, emStrongRDelimUnd: Ze, escape: Me, link: je, nolink: he, punctuation: Ce, reflink: ce, reflinkSearch: Ue, tag: Fe, text: Ae, url: C$1 }, Ke = { ...W, link: k$2(/^!?\[(label)\]\((.*?)\)/).replace("label", q$2).getRegex(), reflink: k$2(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q$2).getRegex() }, G$1 = { ...W, emStrongRDelimAst: He, emStrongLDelim: ve, url: k$2(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ne).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: k$2(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ne).getRegex() }, We = { ...G$1, br: k$2(oe).replace("{2,}", "*").getRegex(), text: k$2(G$1.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, E$1 = { normal: U, gfm: _e, pedantic: Le }, M = { normal: W, gfm: G$1, breaks: We, pedantic: Ke };
var Xe = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ke = (u4) => Xe[u4];
function w$2(u4, e2) {
  if (e2) {
    if (m$2.escapeTest.test(u4)) return u4.replace(m$2.escapeReplace, ke);
  } else if (m$2.escapeTestNoEncode.test(u4)) return u4.replace(m$2.escapeReplaceNoEncode, ke);
  return u4;
}
function X(u4) {
  try {
    u4 = encodeURI(u4).replace(m$2.percentDecode, "%");
  } catch {
    return null;
  }
  return u4;
}
function J(u4, e2) {
  var _a2;
  let t2 = u4.replace(m$2.findPipe, (i, s, a) => {
    let o = false, l2 = s;
    for (; --l2 >= 0 && a[l2] === "\\"; ) o = !o;
    return o ? "|" : " |";
  }), n2 = t2.split(m$2.splitPipe), r2 = 0;
  if (n2[0].trim() || n2.shift(), n2.length > 0 && !((_a2 = n2.at(-1)) == null ? void 0 : _a2.trim()) && n2.pop(), e2) if (n2.length > e2) n2.splice(e2);
  else for (; n2.length < e2; ) n2.push("");
  for (; r2 < n2.length; r2++) n2[r2] = n2[r2].trim().replace(m$2.slashPipe, "|");
  return n2;
}
function z$2(u4, e2, t2) {
  let n2 = u4.length;
  if (n2 === 0) return "";
  let r2 = 0;
  for (; r2 < n2; ) {
    let i = u4.charAt(n2 - r2 - 1);
    if (i === e2 && true) r2++;
    else break;
  }
  return u4.slice(0, n2 - r2);
}
function de(u4, e2) {
  if (u4.indexOf(e2[1]) === -1) return -1;
  let t2 = 0;
  for (let n2 = 0; n2 < u4.length; n2++) if (u4[n2] === "\\") n2++;
  else if (u4[n2] === e2[0]) t2++;
  else if (u4[n2] === e2[1] && (t2--, t2 < 0)) return n2;
  return t2 > 0 ? -2 : -1;
}
function ge(u4, e2, t2, n2, r2) {
  let i = e2.href, s = e2.title || null, a = u4[1].replace(r2.other.outputLinkReplace, "$1");
  n2.state.inLink = true;
  let o = { type: u4[0].charAt(0) === "!" ? "image" : "link", raw: t2, href: i, title: s, text: a, tokens: n2.inlineTokens(a) };
  return n2.state.inLink = false, o;
}
function Je(u4, e2, t2) {
  let n2 = u4.match(t2.other.indentCodeCompensation);
  if (n2 === null) return e2;
  let r2 = n2[1];
  return e2.split(`
`).map((i) => {
    let s = i.match(t2.other.beginningSpace);
    if (s === null) return i;
    let [a] = s;
    return a.length >= r2.length ? i.slice(r2.length) : i;
  }).join(`
`);
}
var y$2 = class y {
  constructor(e2) {
    __publicField(this, "options");
    __publicField(this, "rules");
    __publicField(this, "lexer");
    this.options = e2 || T;
  }
  space(e2) {
    let t2 = this.rules.block.newline.exec(e2);
    if (t2 && t2[0].length > 0) return { type: "space", raw: t2[0] };
  }
  code(e2) {
    let t2 = this.rules.block.code.exec(e2);
    if (t2) {
      let n2 = t2[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t2[0], codeBlockStyle: "indented", text: this.options.pedantic ? n2 : z$2(n2, `
`) };
    }
  }
  fences(e2) {
    let t2 = this.rules.block.fences.exec(e2);
    if (t2) {
      let n2 = t2[0], r2 = Je(n2, t2[3] || "", this.rules);
      return { type: "code", raw: n2, lang: t2[2] ? t2[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t2[2], text: r2 };
    }
  }
  heading(e2) {
    let t2 = this.rules.block.heading.exec(e2);
    if (t2) {
      let n2 = t2[2].trim();
      if (this.rules.other.endingHash.test(n2)) {
        let r2 = z$2(n2, "#");
        (this.options.pedantic || !r2 || this.rules.other.endingSpaceChar.test(r2)) && (n2 = r2.trim());
      }
      return { type: "heading", raw: t2[0], depth: t2[1].length, text: n2, tokens: this.lexer.inline(n2) };
    }
  }
  hr(e2) {
    let t2 = this.rules.block.hr.exec(e2);
    if (t2) return { type: "hr", raw: z$2(t2[0], `
`) };
  }
  blockquote(e2) {
    let t2 = this.rules.block.blockquote.exec(e2);
    if (t2) {
      let n2 = z$2(t2[0], `
`).split(`
`), r2 = "", i = "", s = [];
      for (; n2.length > 0; ) {
        let a = false, o = [], l2;
        for (l2 = 0; l2 < n2.length; l2++) if (this.rules.other.blockquoteStart.test(n2[l2])) o.push(n2[l2]), a = true;
        else if (!a) o.push(n2[l2]);
        else break;
        n2 = n2.slice(l2);
        let p2 = o.join(`
`), c2 = p2.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r2 = r2 ? `${r2}
${p2}` : p2, i = i ? `${i}
${c2}` : c2;
        let g2 = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(c2, s, true), this.lexer.state.top = g2, n2.length === 0) break;
        let h2 = s.at(-1);
        if ((h2 == null ? void 0 : h2.type) === "code") break;
        if ((h2 == null ? void 0 : h2.type) === "blockquote") {
          let R2 = h2, f2 = R2.raw + `
` + n2.join(`
`), O2 = this.blockquote(f2);
          s[s.length - 1] = O2, r2 = r2.substring(0, r2.length - R2.raw.length) + O2.raw, i = i.substring(0, i.length - R2.text.length) + O2.text;
          break;
        } else if ((h2 == null ? void 0 : h2.type) === "list") {
          let R2 = h2, f2 = R2.raw + `
` + n2.join(`
`), O2 = this.list(f2);
          s[s.length - 1] = O2, r2 = r2.substring(0, r2.length - h2.raw.length) + O2.raw, i = i.substring(0, i.length - R2.raw.length) + O2.raw, n2 = f2.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: r2, tokens: s, text: i };
    }
  }
  list(e2) {
    var _a2, _b;
    let t2 = this.rules.block.list.exec(e2);
    if (t2) {
      let n2 = t2[1].trim(), r2 = n2.length > 1, i = { type: "list", raw: "", ordered: r2, start: r2 ? +n2.slice(0, -1) : "", loose: false, items: [] };
      n2 = r2 ? `\\d{1,9}\\${n2.slice(-1)}` : `\\${n2}`, this.options.pedantic && (n2 = r2 ? n2 : "[*+-]");
      let s = this.rules.other.listItemRegex(n2), a = false;
      for (; e2; ) {
        let l2 = false, p2 = "", c2 = "";
        if (!(t2 = s.exec(e2)) || this.rules.block.hr.test(e2)) break;
        p2 = t2[0], e2 = e2.substring(p2.length);
        let g2 = t2[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (O2) => " ".repeat(3 * O2.length)), h2 = e2.split(`
`, 1)[0], R2 = !g2.trim(), f2 = 0;
        if (this.options.pedantic ? (f2 = 2, c2 = g2.trimStart()) : R2 ? f2 = t2[1].length + 1 : (f2 = t2[2].search(this.rules.other.nonSpaceChar), f2 = f2 > 4 ? 1 : f2, c2 = g2.slice(f2), f2 += t2[1].length), R2 && this.rules.other.blankLine.test(h2) && (p2 += h2 + `
`, e2 = e2.substring(h2.length + 1), l2 = true), !l2) {
          let O2 = this.rules.other.nextBulletRegex(f2), V2 = this.rules.other.hrRegex(f2), Y2 = this.rules.other.fencesBeginRegex(f2), ee2 = this.rules.other.headingBeginRegex(f2), fe2 = this.rules.other.htmlBeginRegex(f2);
          for (; e2; ) {
            let H2 = e2.split(`
`, 1)[0], A2;
            if (h2 = H2, this.options.pedantic ? (h2 = h2.replace(this.rules.other.listReplaceNesting, "  "), A2 = h2) : A2 = h2.replace(this.rules.other.tabCharGlobal, "    "), Y2.test(h2) || ee2.test(h2) || fe2.test(h2) || O2.test(h2) || V2.test(h2)) break;
            if (A2.search(this.rules.other.nonSpaceChar) >= f2 || !h2.trim()) c2 += `
` + A2.slice(f2);
            else {
              if (R2 || g2.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || Y2.test(g2) || ee2.test(g2) || V2.test(g2)) break;
              c2 += `
` + h2;
            }
            !R2 && !h2.trim() && (R2 = true), p2 += H2 + `
`, e2 = e2.substring(H2.length + 1), g2 = A2.slice(f2);
          }
        }
        i.loose || (a ? i.loose = true : this.rules.other.doubleBlankLine.test(p2) && (a = true)), i.items.push({ type: "list_item", raw: p2, task: !!this.options.gfm && this.rules.other.listIsTask.test(c2), loose: false, text: c2, tokens: [] }), i.raw += p2;
      }
      let o = i.items.at(-1);
      if (o) o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
      else return;
      i.raw = i.raw.trimEnd();
      for (let l2 of i.items) {
        if (this.lexer.state.top = false, l2.tokens = this.lexer.blockTokens(l2.text, []), l2.task) {
          if (l2.text = l2.text.replace(this.rules.other.listReplaceTask, ""), ((_a2 = l2.tokens[0]) == null ? void 0 : _a2.type) === "text" || ((_b = l2.tokens[0]) == null ? void 0 : _b.type) === "paragraph") {
            l2.tokens[0].raw = l2.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), l2.tokens[0].text = l2.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
            for (let c2 = this.lexer.inlineQueue.length - 1; c2 >= 0; c2--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[c2].src)) {
              this.lexer.inlineQueue[c2].src = this.lexer.inlineQueue[c2].src.replace(this.rules.other.listReplaceTask, "");
              break;
            }
          }
          let p2 = this.rules.other.listTaskCheckbox.exec(l2.raw);
          if (p2) {
            let c2 = { type: "checkbox", raw: p2[0] + " ", checked: p2[0] !== "[ ]" };
            l2.checked = c2.checked, i.loose ? l2.tokens[0] && ["paragraph", "text"].includes(l2.tokens[0].type) && "tokens" in l2.tokens[0] && l2.tokens[0].tokens ? (l2.tokens[0].raw = c2.raw + l2.tokens[0].raw, l2.tokens[0].text = c2.raw + l2.tokens[0].text, l2.tokens[0].tokens.unshift(c2)) : l2.tokens.unshift({ type: "paragraph", raw: c2.raw, text: c2.raw, tokens: [c2] }) : l2.tokens.unshift(c2);
          }
        }
        if (!i.loose) {
          let p2 = l2.tokens.filter((g2) => g2.type === "space"), c2 = p2.length > 0 && p2.some((g2) => this.rules.other.anyLine.test(g2.raw));
          i.loose = c2;
        }
      }
      if (i.loose) for (let l2 of i.items) {
        l2.loose = true;
        for (let p2 of l2.tokens) p2.type === "text" && (p2.type = "paragraph");
      }
      return i;
    }
  }
  html(e2) {
    let t2 = this.rules.block.html.exec(e2);
    if (t2) return { type: "html", block: true, raw: t2[0], pre: t2[1] === "pre" || t2[1] === "script" || t2[1] === "style", text: t2[0] };
  }
  def(e2) {
    let t2 = this.rules.block.def.exec(e2);
    if (t2) {
      let n2 = t2[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r2 = t2[2] ? t2[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t2[3] ? t2[3].substring(1, t2[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t2[3];
      return { type: "def", tag: n2, raw: t2[0], href: r2, title: i };
    }
  }
  table(e2) {
    var _a2;
    let t2 = this.rules.block.table.exec(e2);
    if (!t2 || !this.rules.other.tableDelimiter.test(t2[2])) return;
    let n2 = J(t2[1]), r2 = t2[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = ((_a2 = t2[3]) == null ? void 0 : _a2.trim()) ? t2[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: t2[0], header: [], align: [], rows: [] };
    if (n2.length === r2.length) {
      for (let a of r2) this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
      for (let a = 0; a < n2.length; a++) s.header.push({ text: n2[a], tokens: this.lexer.inline(n2[a]), header: true, align: s.align[a] });
      for (let a of i) s.rows.push(J(a, s.header.length).map((o, l2) => ({ text: o, tokens: this.lexer.inline(o), header: false, align: s.align[l2] })));
      return s;
    }
  }
  lheading(e2) {
    let t2 = this.rules.block.lheading.exec(e2);
    if (t2) return { type: "heading", raw: t2[0], depth: t2[2].charAt(0) === "=" ? 1 : 2, text: t2[1], tokens: this.lexer.inline(t2[1]) };
  }
  paragraph(e2) {
    let t2 = this.rules.block.paragraph.exec(e2);
    if (t2) {
      let n2 = t2[1].charAt(t2[1].length - 1) === `
` ? t2[1].slice(0, -1) : t2[1];
      return { type: "paragraph", raw: t2[0], text: n2, tokens: this.lexer.inline(n2) };
    }
  }
  text(e2) {
    let t2 = this.rules.block.text.exec(e2);
    if (t2) return { type: "text", raw: t2[0], text: t2[0], tokens: this.lexer.inline(t2[0]) };
  }
  escape(e2) {
    let t2 = this.rules.inline.escape.exec(e2);
    if (t2) return { type: "escape", raw: t2[0], text: t2[1] };
  }
  tag(e2) {
    let t2 = this.rules.inline.tag.exec(e2);
    if (t2) return !this.lexer.state.inLink && this.rules.other.startATag.test(t2[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t2[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t2[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t2[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t2[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t2[0] };
  }
  link(e2) {
    let t2 = this.rules.inline.link.exec(e2);
    if (t2) {
      let n2 = t2[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n2)) {
        if (!this.rules.other.endAngleBracket.test(n2)) return;
        let s = z$2(n2.slice(0, -1), "\\");
        if ((n2.length - s.length) % 2 === 0) return;
      } else {
        let s = de(t2[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let o = (t2[0].indexOf("!") === 0 ? 5 : 4) + t2[1].length + s;
          t2[2] = t2[2].substring(0, s), t2[0] = t2[0].substring(0, o).trim(), t2[3] = "";
        }
      }
      let r2 = t2[2], i = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(r2);
        s && (r2 = s[1], i = s[3]);
      } else i = t2[3] ? t2[3].slice(1, -1) : "";
      return r2 = r2.trim(), this.rules.other.startAngleBracket.test(r2) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n2) ? r2 = r2.slice(1) : r2 = r2.slice(1, -1)), ge(t2, { href: r2 && r2.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, t2[0], this.lexer, this.rules);
    }
  }
  reflink(e2, t2) {
    let n2;
    if ((n2 = this.rules.inline.reflink.exec(e2)) || (n2 = this.rules.inline.nolink.exec(e2))) {
      let r2 = (n2[2] || n2[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t2[r2.toLowerCase()];
      if (!i) {
        let s = n2[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return ge(n2, i, n2[0], this.lexer, this.rules);
    }
  }
  emStrong(e2, t2, n2 = "") {
    let r2 = this.rules.inline.emStrongLDelim.exec(e2);
    if (!r2 || r2[3] && n2.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r2[1] || r2[2] || "") || !n2 || this.rules.inline.punctuation.exec(n2)) {
      let s = [...r2[0]].length - 1, a, o, l2 = s, p2 = 0, c2 = r2[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c2.lastIndex = 0, t2 = t2.slice(-1 * e2.length + s); (r2 = c2.exec(t2)) != null; ) {
        if (a = r2[1] || r2[2] || r2[3] || r2[4] || r2[5] || r2[6], !a) continue;
        if (o = [...a].length, r2[3] || r2[4]) {
          l2 += o;
          continue;
        } else if ((r2[5] || r2[6]) && s % 3 && !((s + o) % 3)) {
          p2 += o;
          continue;
        }
        if (l2 -= o, l2 > 0) continue;
        o = Math.min(o, o + l2 + p2);
        let g2 = [...r2[0]][0].length, h2 = e2.slice(0, s + r2.index + g2 + o);
        if (Math.min(s, o) % 2) {
          let f2 = h2.slice(1, -1);
          return { type: "em", raw: h2, text: f2, tokens: this.lexer.inlineTokens(f2) };
        }
        let R2 = h2.slice(2, -2);
        return { type: "strong", raw: h2, text: R2, tokens: this.lexer.inlineTokens(R2) };
      }
    }
  }
  codespan(e2) {
    let t2 = this.rules.inline.code.exec(e2);
    if (t2) {
      let n2 = t2[2].replace(this.rules.other.newLineCharGlobal, " "), r2 = this.rules.other.nonSpaceChar.test(n2), i = this.rules.other.startingSpaceChar.test(n2) && this.rules.other.endingSpaceChar.test(n2);
      return r2 && i && (n2 = n2.substring(1, n2.length - 1)), { type: "codespan", raw: t2[0], text: n2 };
    }
  }
  br(e2) {
    let t2 = this.rules.inline.br.exec(e2);
    if (t2) return { type: "br", raw: t2[0] };
  }
  del(e2) {
    let t2 = this.rules.inline.del.exec(e2);
    if (t2) return { type: "del", raw: t2[0], text: t2[2], tokens: this.lexer.inlineTokens(t2[2]) };
  }
  autolink(e2) {
    let t2 = this.rules.inline.autolink.exec(e2);
    if (t2) {
      let n2, r2;
      return t2[2] === "@" ? (n2 = t2[1], r2 = "mailto:" + n2) : (n2 = t2[1], r2 = n2), { type: "link", raw: t2[0], text: n2, href: r2, tokens: [{ type: "text", raw: n2, text: n2 }] };
    }
  }
  url(e2) {
    var _a2;
    let t2;
    if (t2 = this.rules.inline.url.exec(e2)) {
      let n2, r2;
      if (t2[2] === "@") n2 = t2[0], r2 = "mailto:" + n2;
      else {
        let i;
        do
          i = t2[0], t2[0] = ((_a2 = this.rules.inline._backpedal.exec(t2[0])) == null ? void 0 : _a2[0]) ?? "";
        while (i !== t2[0]);
        n2 = t2[0], t2[1] === "www." ? r2 = "http://" + t2[0] : r2 = t2[0];
      }
      return { type: "link", raw: t2[0], text: n2, href: r2, tokens: [{ type: "text", raw: n2, text: n2 }] };
    }
  }
  inlineText(e2) {
    let t2 = this.rules.inline.text.exec(e2);
    if (t2) {
      let n2 = this.lexer.state.inRawBlock;
      return { type: "text", raw: t2[0], text: t2[0], escaped: n2 };
    }
  }
};
var x$2 = class u {
  constructor(e2) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "inlineQueue");
    __publicField(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e2 || T, this.options.tokenizer = this.options.tokenizer || new y$2(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t2 = { other: m$2, block: E$1.normal, inline: M.normal };
    this.options.pedantic ? (t2.block = E$1.pedantic, t2.inline = M.pedantic) : this.options.gfm && (t2.block = E$1.gfm, this.options.breaks ? t2.inline = M.breaks : t2.inline = M.gfm), this.tokenizer.rules = t2;
  }
  static get rules() {
    return { block: E$1, inline: M };
  }
  static lex(e2, t2) {
    return new u(t2).lex(e2);
  }
  static lexInline(e2, t2) {
    return new u(t2).inlineTokens(e2);
  }
  lex(e2) {
    e2 = e2.replace(m$2.carriageReturn, `
`), this.blockTokens(e2, this.tokens);
    for (let t2 = 0; t2 < this.inlineQueue.length; t2++) {
      let n2 = this.inlineQueue[t2];
      this.inlineTokens(n2.src, n2.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e2, t2 = [], n2 = false) {
    var _a2, _b, _c;
    for (this.options.pedantic && (e2 = e2.replace(m$2.tabCharGlobal, "    ").replace(m$2.spaceLine, "")); e2; ) {
      let r2;
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.block) == null ? void 0 : _b.some((s) => (r2 = s.call({ lexer: this }, e2, t2)) ? (e2 = e2.substring(r2.raw.length), t2.push(r2), true) : false)) continue;
      if (r2 = this.tokenizer.space(e2)) {
        e2 = e2.substring(r2.raw.length);
        let s = t2.at(-1);
        r2.raw.length === 1 && s !== void 0 ? s.raw += `
` : t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.code(e2)) {
        e2 = e2.substring(r2.raw.length);
        let s = t2.at(-1);
        (s == null ? void 0 : s.type) === "paragraph" || (s == null ? void 0 : s.type) === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r2.raw, s.text += `
` + r2.text, this.inlineQueue.at(-1).src = s.text) : t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.fences(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.heading(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.hr(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.blockquote(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.list(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.html(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.def(e2)) {
        e2 = e2.substring(r2.raw.length);
        let s = t2.at(-1);
        (s == null ? void 0 : s.type) === "paragraph" || (s == null ? void 0 : s.type) === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r2.raw, s.text += `
` + r2.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[r2.tag] || (this.tokens.links[r2.tag] = { href: r2.href, title: r2.title }, t2.push(r2));
        continue;
      }
      if (r2 = this.tokenizer.table(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.lheading(e2)) {
        e2 = e2.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      let i = e2;
      if ((_c = this.options.extensions) == null ? void 0 : _c.startBlock) {
        let s = 1 / 0, a = e2.slice(1), o;
        this.options.extensions.startBlock.forEach((l2) => {
          o = l2.call({ lexer: this }, a), typeof o == "number" && o >= 0 && (s = Math.min(s, o));
        }), s < 1 / 0 && s >= 0 && (i = e2.substring(0, s + 1));
      }
      if (this.state.top && (r2 = this.tokenizer.paragraph(i))) {
        let s = t2.at(-1);
        n2 && (s == null ? void 0 : s.type) === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r2.raw, s.text += `
` + r2.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t2.push(r2), n2 = i.length !== e2.length, e2 = e2.substring(r2.raw.length);
        continue;
      }
      if (r2 = this.tokenizer.text(e2)) {
        e2 = e2.substring(r2.raw.length);
        let s = t2.at(-1);
        (s == null ? void 0 : s.type) === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r2.raw, s.text += `
` + r2.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t2.push(r2);
        continue;
      }
      if (e2) {
        let s = "Infinite loop on byte: " + e2.charCodeAt(0);
        if (this.options.silent) {
          console.error(s);
          break;
        } else throw new Error(s);
      }
    }
    return this.state.top = true, t2;
  }
  inline(e2, t2 = []) {
    return this.inlineQueue.push({ src: e2, tokens: t2 }), t2;
  }
  inlineTokens(e2, t2 = []) {
    var _a2, _b, _c, _d, _e2;
    let n2 = e2, r2 = null;
    if (this.tokens.links) {
      let o = Object.keys(this.tokens.links);
      if (o.length > 0) for (; (r2 = this.tokenizer.rules.inline.reflinkSearch.exec(n2)) != null; ) o.includes(r2[0].slice(r2[0].lastIndexOf("[") + 1, -1)) && (n2 = n2.slice(0, r2.index) + "[" + "a".repeat(r2[0].length - 2) + "]" + n2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r2 = this.tokenizer.rules.inline.anyPunctuation.exec(n2)) != null; ) n2 = n2.slice(0, r2.index) + "++" + n2.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let i;
    for (; (r2 = this.tokenizer.rules.inline.blockSkip.exec(n2)) != null; ) i = r2[2] ? r2[2].length : 0, n2 = n2.slice(0, r2.index + i) + "[" + "a".repeat(r2[0].length - i - 2) + "]" + n2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n2 = ((_b = (_a2 = this.options.hooks) == null ? void 0 : _a2.emStrongMask) == null ? void 0 : _b.call({ lexer: this }, n2)) ?? n2;
    let s = false, a = "";
    for (; e2; ) {
      s || (a = ""), s = false;
      let o;
      if ((_d = (_c = this.options.extensions) == null ? void 0 : _c.inline) == null ? void 0 : _d.some((p2) => (o = p2.call({ lexer: this }, e2, t2)) ? (e2 = e2.substring(o.raw.length), t2.push(o), true) : false)) continue;
      if (o = this.tokenizer.escape(e2)) {
        e2 = e2.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (o = this.tokenizer.tag(e2)) {
        e2 = e2.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (o = this.tokenizer.link(e2)) {
        e2 = e2.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (o = this.tokenizer.reflink(e2, this.tokens.links)) {
        e2 = e2.substring(o.raw.length);
        let p2 = t2.at(-1);
        o.type === "text" && (p2 == null ? void 0 : p2.type) === "text" ? (p2.raw += o.raw, p2.text += o.text) : t2.push(o);
        continue;
      }
      if (o = this.tokenizer.emStrong(e2, n2, a)) {
        e2 = e2.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (o = this.tokenizer.codespan(e2)) {
        e2 = e2.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (o = this.tokenizer.br(e2)) {
        e2 = e2.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (o = this.tokenizer.del(e2)) {
        e2 = e2.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (o = this.tokenizer.autolink(e2)) {
        e2 = e2.substring(o.raw.length), t2.push(o);
        continue;
      }
      if (!this.state.inLink && (o = this.tokenizer.url(e2))) {
        e2 = e2.substring(o.raw.length), t2.push(o);
        continue;
      }
      let l2 = e2;
      if ((_e2 = this.options.extensions) == null ? void 0 : _e2.startInline) {
        let p2 = 1 / 0, c2 = e2.slice(1), g2;
        this.options.extensions.startInline.forEach((h2) => {
          g2 = h2.call({ lexer: this }, c2), typeof g2 == "number" && g2 >= 0 && (p2 = Math.min(p2, g2));
        }), p2 < 1 / 0 && p2 >= 0 && (l2 = e2.substring(0, p2 + 1));
      }
      if (o = this.tokenizer.inlineText(l2)) {
        e2 = e2.substring(o.raw.length), o.raw.slice(-1) !== "_" && (a = o.raw.slice(-1)), s = true;
        let p2 = t2.at(-1);
        (p2 == null ? void 0 : p2.type) === "text" ? (p2.raw += o.raw, p2.text += o.text) : t2.push(o);
        continue;
      }
      if (e2) {
        let p2 = "Infinite loop on byte: " + e2.charCodeAt(0);
        if (this.options.silent) {
          console.error(p2);
          break;
        } else throw new Error(p2);
      }
    }
    return t2;
  }
};
var P = class {
  constructor(e2) {
    __publicField(this, "options");
    __publicField(this, "parser");
    this.options = e2 || T;
  }
  space(e2) {
    return "";
  }
  code({ text: e2, lang: t2, escaped: n2 }) {
    var _a2;
    let r2 = (_a2 = (t2 || "").match(m$2.notSpaceStart)) == null ? void 0 : _a2[0], i = e2.replace(m$2.endingNewline, "") + `
`;
    return r2 ? '<pre><code class="language-' + w$2(r2) + '">' + (n2 ? i : w$2(i, true)) + `</code></pre>
` : "<pre><code>" + (n2 ? i : w$2(i, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e2 }) {
    return `<blockquote>
${this.parser.parse(e2)}</blockquote>
`;
  }
  html({ text: e2 }) {
    return e2;
  }
  def(e2) {
    return "";
  }
  heading({ tokens: e2, depth: t2 }) {
    return `<h${t2}>${this.parser.parseInline(e2)}</h${t2}>
`;
  }
  hr(e2) {
    return `<hr>
`;
  }
  list(e2) {
    let t2 = e2.ordered, n2 = e2.start, r2 = "";
    for (let a = 0; a < e2.items.length; a++) {
      let o = e2.items[a];
      r2 += this.listitem(o);
    }
    let i = t2 ? "ol" : "ul", s = t2 && n2 !== 1 ? ' start="' + n2 + '"' : "";
    return "<" + i + s + `>
` + r2 + "</" + i + `>
`;
  }
  listitem(e2) {
    return `<li>${this.parser.parse(e2.tokens)}</li>
`;
  }
  checkbox({ checked: e2 }) {
    return "<input " + (e2 ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: e2 }) {
    return `<p>${this.parser.parseInline(e2)}</p>
`;
  }
  table(e2) {
    let t2 = "", n2 = "";
    for (let i = 0; i < e2.header.length; i++) n2 += this.tablecell(e2.header[i]);
    t2 += this.tablerow({ text: n2 });
    let r2 = "";
    for (let i = 0; i < e2.rows.length; i++) {
      let s = e2.rows[i];
      n2 = "";
      for (let a = 0; a < s.length; a++) n2 += this.tablecell(s[a]);
      r2 += this.tablerow({ text: n2 });
    }
    return r2 && (r2 = `<tbody>${r2}</tbody>`), `<table>
<thead>
` + t2 + `</thead>
` + r2 + `</table>
`;
  }
  tablerow({ text: e2 }) {
    return `<tr>
${e2}</tr>
`;
  }
  tablecell(e2) {
    let t2 = this.parser.parseInline(e2.tokens), n2 = e2.header ? "th" : "td";
    return (e2.align ? `<${n2} align="${e2.align}">` : `<${n2}>`) + t2 + `</${n2}>
`;
  }
  strong({ tokens: e2 }) {
    return `<strong>${this.parser.parseInline(e2)}</strong>`;
  }
  em({ tokens: e2 }) {
    return `<em>${this.parser.parseInline(e2)}</em>`;
  }
  codespan({ text: e2 }) {
    return `<code>${w$2(e2, true)}</code>`;
  }
  br(e2) {
    return "<br>";
  }
  del({ tokens: e2 }) {
    return `<del>${this.parser.parseInline(e2)}</del>`;
  }
  link({ href: e2, title: t2, tokens: n2 }) {
    let r2 = this.parser.parseInline(n2), i = X(e2);
    if (i === null) return r2;
    e2 = i;
    let s = '<a href="' + e2 + '"';
    return t2 && (s += ' title="' + w$2(t2) + '"'), s += ">" + r2 + "</a>", s;
  }
  image({ href: e2, title: t2, text: n2, tokens: r2 }) {
    r2 && (n2 = this.parser.parseInline(r2, this.parser.textRenderer));
    let i = X(e2);
    if (i === null) return w$2(n2);
    e2 = i;
    let s = `<img src="${e2}" alt="${n2}"`;
    return t2 && (s += ` title="${w$2(t2)}"`), s += ">", s;
  }
  text(e2) {
    return "tokens" in e2 && e2.tokens ? this.parser.parseInline(e2.tokens) : "escaped" in e2 && e2.escaped ? e2.text : w$2(e2.text);
  }
};
var $ = class {
  strong({ text: e2 }) {
    return e2;
  }
  em({ text: e2 }) {
    return e2;
  }
  codespan({ text: e2 }) {
    return e2;
  }
  del({ text: e2 }) {
    return e2;
  }
  html({ text: e2 }) {
    return e2;
  }
  text({ text: e2 }) {
    return e2;
  }
  link({ text: e2 }) {
    return "" + e2;
  }
  image({ text: e2 }) {
    return "" + e2;
  }
  br() {
    return "";
  }
  checkbox({ raw: e2 }) {
    return e2;
  }
};
var b$2 = class u2 {
  constructor(e2) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = e2 || T, this.options.renderer = this.options.renderer || new P(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new $();
  }
  static parse(e2, t2) {
    return new u2(t2).parse(e2);
  }
  static parseInline(e2, t2) {
    return new u2(t2).parseInline(e2);
  }
  parse(e2) {
    var _a2, _b;
    let t2 = "";
    for (let n2 = 0; n2 < e2.length; n2++) {
      let r2 = e2[n2];
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) == null ? void 0 : _b[r2.type]) {
        let s = r2, a = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (a !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(s.type)) {
          t2 += a || "";
          continue;
        }
      }
      let i = r2;
      switch (i.type) {
        case "space": {
          t2 += this.renderer.space(i);
          break;
        }
        case "hr": {
          t2 += this.renderer.hr(i);
          break;
        }
        case "heading": {
          t2 += this.renderer.heading(i);
          break;
        }
        case "code": {
          t2 += this.renderer.code(i);
          break;
        }
        case "table": {
          t2 += this.renderer.table(i);
          break;
        }
        case "blockquote": {
          t2 += this.renderer.blockquote(i);
          break;
        }
        case "list": {
          t2 += this.renderer.list(i);
          break;
        }
        case "checkbox": {
          t2 += this.renderer.checkbox(i);
          break;
        }
        case "html": {
          t2 += this.renderer.html(i);
          break;
        }
        case "def": {
          t2 += this.renderer.def(i);
          break;
        }
        case "paragraph": {
          t2 += this.renderer.paragraph(i);
          break;
        }
        case "text": {
          t2 += this.renderer.text(i);
          break;
        }
        default: {
          let s = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(s), "";
          throw new Error(s);
        }
      }
    }
    return t2;
  }
  parseInline(e2, t2 = this.renderer) {
    var _a2, _b;
    let n2 = "";
    for (let r2 = 0; r2 < e2.length; r2++) {
      let i = e2[r2];
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) == null ? void 0 : _b[i.type]) {
        let a = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (a !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          n2 += a || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "escape": {
          n2 += t2.text(s);
          break;
        }
        case "html": {
          n2 += t2.html(s);
          break;
        }
        case "link": {
          n2 += t2.link(s);
          break;
        }
        case "image": {
          n2 += t2.image(s);
          break;
        }
        case "checkbox": {
          n2 += t2.checkbox(s);
          break;
        }
        case "strong": {
          n2 += t2.strong(s);
          break;
        }
        case "em": {
          n2 += t2.em(s);
          break;
        }
        case "codespan": {
          n2 += t2.codespan(s);
          break;
        }
        case "br": {
          n2 += t2.br(s);
          break;
        }
        case "del": {
          n2 += t2.del(s);
          break;
        }
        case "text": {
          n2 += t2.text(s);
          break;
        }
        default: {
          let a = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return n2;
  }
};
var S = (_a = class {
  constructor(e2) {
    __publicField(this, "options");
    __publicField(this, "block");
    this.options = e2 || T;
  }
  preprocess(e2) {
    return e2;
  }
  postprocess(e2) {
    return e2;
  }
  processAllTokens(e2) {
    return e2;
  }
  emStrongMask(e2) {
    return e2;
  }
  provideLexer() {
    return this.block ? x$2.lex : x$2.lexInline;
  }
  provideParser() {
    return this.block ? b$2.parse : b$2.parseInline;
  }
}, __publicField(_a, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), __publicField(_a, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), _a);
var B$1 = class B {
  constructor(...e2) {
    __publicField(this, "defaults", L());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", this.parseMarkdown(true));
    __publicField(this, "parseInline", this.parseMarkdown(false));
    __publicField(this, "Parser", b$2);
    __publicField(this, "Renderer", P);
    __publicField(this, "TextRenderer", $);
    __publicField(this, "Lexer", x$2);
    __publicField(this, "Tokenizer", y$2);
    __publicField(this, "Hooks", S);
    this.use(...e2);
  }
  walkTokens(e2, t2) {
    var _a2, _b;
    let n2 = [];
    for (let r2 of e2) switch (n2 = n2.concat(t2.call(this, r2)), r2.type) {
      case "table": {
        let i = r2;
        for (let s of i.header) n2 = n2.concat(this.walkTokens(s.tokens, t2));
        for (let s of i.rows) for (let a of s) n2 = n2.concat(this.walkTokens(a.tokens, t2));
        break;
      }
      case "list": {
        let i = r2;
        n2 = n2.concat(this.walkTokens(i.items, t2));
        break;
      }
      default: {
        let i = r2;
        ((_b = (_a2 = this.defaults.extensions) == null ? void 0 : _a2.childTokens) == null ? void 0 : _b[i.type]) ? this.defaults.extensions.childTokens[i.type].forEach((s) => {
          let a = i[s].flat(1 / 0);
          n2 = n2.concat(this.walkTokens(a, t2));
        }) : i.tokens && (n2 = n2.concat(this.walkTokens(i.tokens, t2)));
      }
    }
    return n2;
  }
  use(...e2) {
    let t2 = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e2.forEach((n2) => {
      let r2 = { ...n2 };
      if (r2.async = this.defaults.async || r2.async || false, n2.extensions && (n2.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let s = t2.renderers[i.name];
          s ? t2.renderers[i.name] = function(...a) {
            let o = i.renderer.apply(this, a);
            return o === false && (o = s.apply(this, a)), o;
          } : t2.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = t2[i.level];
          s ? s.unshift(i.tokenizer) : t2[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t2.startBlock ? t2.startBlock.push(i.start) : t2.startBlock = [i.start] : i.level === "inline" && (t2.startInline ? t2.startInline.push(i.start) : t2.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t2.childTokens[i.name] = i.childTokens);
      }), r2.extensions = t2), n2.renderer) {
        let i = this.defaults.renderer || new P(this.defaults);
        for (let s in n2.renderer) {
          if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let a = s, o = n2.renderer[a], l2 = i[a];
          i[a] = (...p2) => {
            let c2 = o.apply(i, p2);
            return c2 === false && (c2 = l2.apply(i, p2)), c2 || "";
          };
        }
        r2.renderer = i;
      }
      if (n2.tokenizer) {
        let i = this.defaults.tokenizer || new y$2(this.defaults);
        for (let s in n2.tokenizer) {
          if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let a = s, o = n2.tokenizer[a], l2 = i[a];
          i[a] = (...p2) => {
            let c2 = o.apply(i, p2);
            return c2 === false && (c2 = l2.apply(i, p2)), c2;
          };
        }
        r2.tokenizer = i;
      }
      if (n2.hooks) {
        let i = this.defaults.hooks || new S();
        for (let s in n2.hooks) {
          if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let a = s, o = n2.hooks[a], l2 = i[a];
          S.passThroughHooks.has(s) ? i[a] = (p2) => {
            if (this.defaults.async && S.passThroughHooksRespectAsync.has(s)) return (async () => {
              let g2 = await o.call(i, p2);
              return l2.call(i, g2);
            })();
            let c2 = o.call(i, p2);
            return l2.call(i, c2);
          } : i[a] = (...p2) => {
            if (this.defaults.async) return (async () => {
              let g2 = await o.apply(i, p2);
              return g2 === false && (g2 = await l2.apply(i, p2)), g2;
            })();
            let c2 = o.apply(i, p2);
            return c2 === false && (c2 = l2.apply(i, p2)), c2;
          };
        }
        r2.hooks = i;
      }
      if (n2.walkTokens) {
        let i = this.defaults.walkTokens, s = n2.walkTokens;
        r2.walkTokens = function(a) {
          let o = [];
          return o.push(s.call(this, a)), i && (o = o.concat(i.call(this, a))), o;
        };
      }
      this.defaults = { ...this.defaults, ...r2 };
    }), this;
  }
  setOptions(e2) {
    return this.defaults = { ...this.defaults, ...e2 }, this;
  }
  lexer(e2, t2) {
    return x$2.lex(e2, t2 ?? this.defaults);
  }
  parser(e2, t2) {
    return b$2.parse(e2, t2 ?? this.defaults);
  }
  parseMarkdown(e2) {
    return (n2, r2) => {
      let i = { ...r2 }, s = { ...this.defaults, ...i }, a = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === true && i.async === false) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n2 > "u" || n2 === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof n2 != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n2) + ", string expected"));
      if (s.hooks && (s.hooks.options = s, s.hooks.block = e2), s.async) return (async () => {
        let o = s.hooks ? await s.hooks.preprocess(n2) : n2, p2 = await (s.hooks ? await s.hooks.provideLexer() : e2 ? x$2.lex : x$2.lexInline)(o, s), c2 = s.hooks ? await s.hooks.processAllTokens(p2) : p2;
        s.walkTokens && await Promise.all(this.walkTokens(c2, s.walkTokens));
        let h2 = await (s.hooks ? await s.hooks.provideParser() : e2 ? b$2.parse : b$2.parseInline)(c2, s);
        return s.hooks ? await s.hooks.postprocess(h2) : h2;
      })().catch(a);
      try {
        s.hooks && (n2 = s.hooks.preprocess(n2));
        let l2 = (s.hooks ? s.hooks.provideLexer() : e2 ? x$2.lex : x$2.lexInline)(n2, s);
        s.hooks && (l2 = s.hooks.processAllTokens(l2)), s.walkTokens && this.walkTokens(l2, s.walkTokens);
        let c2 = (s.hooks ? s.hooks.provideParser() : e2 ? b$2.parse : b$2.parseInline)(l2, s);
        return s.hooks && (c2 = s.hooks.postprocess(c2)), c2;
      } catch (o) {
        return a(o);
      }
    };
  }
  onError(e2, t2) {
    return (n2) => {
      if (n2.message += `
Please report this to https://github.com/markedjs/marked.`, e2) {
        let r2 = "<p>An error occurred:</p><pre>" + w$2(n2.message + "", true) + "</pre>";
        return t2 ? Promise.resolve(r2) : r2;
      }
      if (t2) return Promise.reject(n2);
      throw n2;
    };
  }
};
var _ = new B$1();
function d$2(u4, e2) {
  return _.parse(u4, e2);
}
d$2.options = d$2.setOptions = function(u4) {
  return _.setOptions(u4), d$2.defaults = _.defaults, Z(d$2.defaults), d$2;
};
d$2.getDefaults = L;
d$2.defaults = T;
d$2.use = function(...u4) {
  return _.use(...u4), d$2.defaults = _.defaults, Z(d$2.defaults), d$2;
};
d$2.walkTokens = function(u4, e2) {
  return _.walkTokens(u4, e2);
};
d$2.parseInline = _.parseInline;
d$2.Parser = b$2;
d$2.parser = b$2.parse;
d$2.Renderer = P;
d$2.TextRenderer = $;
d$2.Lexer = x$2;
d$2.lexer = x$2.lex;
d$2.Tokenizer = y$2;
d$2.Hooks = S;
d$2.parse = d$2;
d$2.options;
d$2.setOptions;
d$2.use;
d$2.walkTokens;
d$2.parseInline;
b$2.parse;
x$2.lex;
const HamburgerMenu = ({ children }) => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [position3, setPosition] = reactExports.useState({ top: 0, right: 0 });
  const buttonRef = reactExports.useRef(null);
  const menuRef = reactExports.useRef(null);
  const toggleMenu = (e2) => {
    e2.stopPropagation();
    if (!isOpen) {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + 5,
          right: window.innerWidth - rect.right
        });
      }
    }
    setIsOpen(!isOpen);
  };
  reactExports.useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleResize = () => {
      if (isOpen && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + 5,
          right: window.innerWidth - rect.right
        });
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleResize, true);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize, true);
    };
  }, [isOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hamburger-menu-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        ref: buttonRef,
        className: "hamburger-button",
        onClick: toggleMenu,
        "aria-label": "Menu",
        children: "☰"
      }
    ),
    isOpen && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: menuRef,
          className: "hamburger-dropdown",
          style: {
            position: "fixed",
            top: `${position3.top}px`,
            right: `${position3.right}px`,
            zIndex: 1e4,
            maxHeight: "80vh",
            overflowY: "auto"
          },
          children
        }
      ),
      document.body
    )
  ] });
};
const DARK_MODE_STYLE = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }]
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }]
  }
];
const getGoogleMarkerIcon = (markerConfig) => {
  const colorMap = {
    "blue": "#3388ff",
    "red": "#ff6b6b",
    "green": "#51cf66",
    "orange": "#ffa94d",
    "yellow": "#ffd43b",
    "grey": "#868e96",
    "black": "#343a40",
    "purple": "#9c27b0"
  };
  const markerColor = colorMap[markerConfig.color] || colorMap["blue"];
  const iconName = (markerConfig.icon || "map-marker").toLowerCase();
  const svgPath = ICONS[iconName] || ICONS["map-marker"];
  const pinPath = `<path d="M14 0C8 0 3 5 3 11c0 8 11 21 11 21s11-13 11-21C25 5 20 0 14 0z" fill="${markerColor}"/>`;
  const innerIconGroup = `<g transform="translate(7, 4) scale(0.58)" fill="#fff">${svgPath}</g>`;
  const svg = `
    <svg width="28" height="42" viewBox="0 0 28 42" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 3px 4px rgba(0,0,0,0.4));">
        ${pinPath}
        ${innerIconGroup}
    </svg>`;
  const url = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  return {
    url,
    scaledSize: new window.google.maps.Size(28, 42),
    anchor: new window.google.maps.Point(14, 42),
    labelOrigin: new window.google.maps.Point(14, 15)
  };
};
const getMarkerConfig = (card, block, markerRules) => {
  let icon = block.mapIcon || "map-marker";
  let color = "blue";
  const activeRuleIds = ["default"];
  let iconSet = false;
  let colorSet = false;
  if (markerRules && markerRules.length > 0) {
    for (const rule of markerRules) {
      if (iconSet && colorSet) break;
      if (card.labels && card.labels.some((l2) => l2.id === rule.labelId)) {
        if (rule.overrideType === "icon" && !iconSet) {
          icon = rule.overrideValue;
          iconSet = true;
          activeRuleIds.push(rule.id);
        } else if (rule.overrideType === "color" && !colorSet) {
          color = rule.overrideValue;
          colorSet = true;
          activeRuleIds.push(rule.id);
        }
      }
    }
  }
  if (activeRuleIds.length > 1) {
    const index = activeRuleIds.indexOf("default");
    if (index > -1) activeRuleIds.splice(index, 1);
  }
  return { icon, color, activeRuleIds };
};
function expandAbbreviations(address) {
  if (!address) return address;
  let expanded = address;
  expanded = expanded.replace(/^(?:CNR|Corner)\s+/i, "Corner of ");
  const replacements = [
    [/\bRd\b/gi, "Road"],
    [/\bAv\b/gi, "Avenue"],
    [/\bAve\b/gi, "Avenue"],
    [/\bSt\b/gi, "Street"],
    [/\bDr\b/gi, "Drive"],
    [/\bLn\b/gi, "Lane"],
    [/\bCt\b/gi, "Court"],
    [/\bPl\b/gi, "Place"],
    [/\bCres\b/gi, "Crescent"],
    [/\bBlvd\b/gi, "Boulevard"],
    [/\bPde\b/gi, "Parade"],
    [/\bHwy\b/gi, "Highway"],
    [/\bFwy\b/gi, "Freeway"]
  ];
  replacements.forEach(([regex, replacement]) => {
    expanded = expanded.replace(regex, replacement);
  });
  return expanded;
}
const parseAddressFromDescription = (desc) => {
  if (!desc || !desc.trim()) return null;
  const mapsPlaceMatch = desc.match(/https?:\/\/(?:www\.)?google\.[^\/\s]+\/maps\/place\/([^\s)]+)/i);
  if (mapsPlaceMatch) {
    const placePart = mapsPlaceMatch[1];
    try {
      return decodeURIComponent(placePart.replace(/\+/g, " "));
    } catch (e2) {
      return placePart.replace(/\+/g, " ");
    }
  }
  const coordMatch = desc.match(/(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)/);
  if (coordMatch) return `${coordMatch[1]},${coordMatch[2]}`;
  const addressPatterns = [
    /^\d+\s+[A-Za-z\s]+(?:St|Street|Ave|Avenue|Rd|Road|Ln|Lane|Dr|Drive|Way|Court|Ct|Place|Pl|Parkway|Crescent|Cres|Boulevard|Blvd)[^\n]*/i,
    /(?:CNR|Corner)\s+[A-Za-z\s]+[&\/]\s+[A-Za-z\s]+[^\n]*/i,
    /[A-Za-z\s]+(?:VIC|NSW|QLD|SA|WA|TAS|ACT)\s+\d{4}/i
  ];
  for (const pattern of addressPatterns) {
    const match2 = desc.match(pattern);
    if (match2) {
      const address = match2[0].trim();
      if (address.length > 5) return address;
    }
  }
  const lines = desc.split("\n").map((l2) => l2.trim()).filter((l2) => l2.length > 0);
  if (lines.length > 0 && lines[0].length > 5) {
    if (!/^S\d+|^[A-Z]{2}\d+/.test(lines[0])) return lines[0];
  }
  return null;
};
const GeocodingErrorToast = ({ error, onDismiss, onApply, onIgnore }) => {
  const [manualAddress, setManualAddress] = reactExports.useState("");
  const [searchResults, setSearchResults] = reactExports.useState([]);
  const autocompleteService = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (window.google && window.google.maps && window.google.maps.places) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
  }, []);
  const handleManualAddressChange = (e2) => {
    const val = e2.target.value;
    setManualAddress(val);
    if (!val || val.length < 3) {
      setSearchResults([]);
      return;
    }
    if (autocompleteService.current) {
      autocompleteService.current.getPlacePredictions({ input: val }, (predictions, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) setSearchResults(predictions);
        else setSearchResults([]);
      });
    }
  };
  const handleSelectResult = (prediction) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ placeId: prediction.place_id }, (results, status) => {
      if (status === "OK" && results[0]) {
        const loc = results[0].geometry.location;
        onApply(error.cardId, { lat: loc.lat(), lng: loc.lng(), display_name: results[0].formatted_address });
      } else alert("Failed to get details for this location.");
    });
  };
  const descriptionPreview = error.cardDesc ? error.cardDesc.length > 100 ? error.cardDesc.substring(0, 100) + "..." : error.cardDesc : "No description";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "status-message error-toast", style: { borderColor: "#ff6b6b", width: "350px", flexDirection: "column", alignItems: "flex-start", padding: "12px", gap: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", backgroundColor: "var(--bg-primary)", color: "var(--text-primary)", marginBottom: "10px", animation: "slideIn 0.3s ease-out", pointerEvents: "auto" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#c92a2a", fontWeight: "bold", fontSize: "0.95em" }, children: "Geocoding Error" }),
        error.cardUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: error.cardUrl, target: "_blank", rel: "noreferrer", style: { color: "#0057d9", fontWeight: "bold", textDecoration: "none", fontSize: "1em" }, children: error.cardName || "View Card" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: "bold" }, children: error.cardName || "Unknown Card" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onDismiss(error.cardId), style: { background: "none", border: "none", cursor: "pointer", fontSize: "1.5em", lineHeight: "1", color: "#888" }, children: "×" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85em", color: "var(--text-secondary)", background: "rgba(0,0,0,0.03)", padding: "6px", borderRadius: "4px", width: "100%", marginTop: "4px" }, children: descriptionPreview }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.9em", color: "#c92a2a", marginTop: "4px" }, children: [
      "Failed Address: ",
      error.failedAddress
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100%", marginTop: "8px", display: "flex", gap: "8px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => onIgnore(error.cardId),
        style: {
          flex: 1,
          padding: "6px",
          background: "#f8f9fa",
          border: "1px solid #ced4da",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "0.85em",
          color: "#495057"
        },
        onMouseEnter: (e2) => e2.currentTarget.style.background = "#e9ecef",
        onMouseLeave: (e2) => e2.currentTarget.style.background = "#f8f9fa",
        children: "Do not show on map"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { width: "100%", marginTop: "8px", borderTop: "1px solid #eee", paddingTop: "8px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { fontSize: "0.85em", fontWeight: "bold", display: "block", marginBottom: "4px" }, children: "Manual Fix (Search):" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: manualAddress, onChange: handleManualAddressChange, placeholder: "Search address...", style: { width: "100%", padding: "6px", borderRadius: "4px", border: "1px solid #ccc" } }),
        searchResults.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", top: "100%", left: 0, right: 0, zIndex: 3e3, background: "white", border: "1px solid #ccc", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", maxHeight: "150px", overflowY: "auto", color: "black" }, children: searchResults.map((p2) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => handleSelectResult(p2), style: { padding: "8px", cursor: "pointer", borderBottom: "1px solid #eee", fontSize: "0.9em" }, onMouseEnter: (e2) => e2.currentTarget.style.backgroundColor = "#f0f0f0", onMouseLeave: (e2) => e2.currentTarget.style.backgroundColor = "white", children: p2.description }, p2.place_id)) })
      ] })
    ] })
  ] });
};
const CardPopup = ({ card, listName, blockName, blocks, lists, onMove, enableStreetView, onZoom, onFixAddress }) => {
  const groupedLists = blocks.reduce((acc, block) => {
    if (block.includeOnMap === false) return acc;
    acc[block.id] = { name: block.name, lists: [] };
    const blockListIds = block.listIds;
    lists.forEach((l2) => {
      if (blockListIds.includes(l2.id)) {
        acc[block.id].lists.push(l2);
      }
    });
    return acc;
  }, {});
  const creationDate = new Date(1e3 * parseInt(card.id.substring(0, 8), 16));
  const now2 = /* @__PURE__ */ new Date();
  const diffMs = now2 - creationDate;
  const diffMins = Math.floor(diffMs / 6e4);
  let timeText = "";
  if (diffMins < 60) {
    timeText = `${diffMins} min${diffMins !== 1 ? "s" : ""}`;
  } else if (diffMins < 1440) {
    const hours = Math.round(diffMins / 60);
    timeText = `${hours} hour${hours !== 1 ? "s" : ""}`;
  } else {
    const days = Math.round(diffMins / 1440);
    timeText = `${days} day${days !== 1 ? "s" : ""}`;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "5px", minWidth: "240px", maxWidth: "300px", fontFamily: "sans-serif" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: card.shortUrl, target: "_blank", rel: "noreferrer", style: { fontSize: "1.2em", display: "block", marginBottom: "4px", color: "var(--text-color)", fontWeight: "bold", textDecoration: "none" }, children: [
      card.name,
      " ↗"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "1.05em", color: "#555", marginBottom: "8px", fontWeight: "500" }, children: [
      blockName ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: "700" }, children: [
        blockName,
        " › "
      ] }) : "",
      listName
    ] }),
    card.desc && card.desc.trim() !== "" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "popup-desc",
        style: { marginBottom: "10px", fontSize: "0.95em", color: "#111", lineHeight: "1.5" },
        dangerouslySetInnerHTML: { __html: d$2.parse(card.desc) }
      }
    ),
    card.labels && card.labels.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "10px" }, children: card.labels.map((l2) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
      backgroundColor: l2.color ? l2.color === "sky" ? "#00c2e0" : l2.color : "#ccc",
      color: getLabelTextColor(l2.color),
      padding: "3px 8px",
      borderRadius: "12px",
      fontSize: "0.75em",
      fontWeight: "bold",
      border: "1px solid rgba(0,0,0,0.1)"
    }, children: l2.name }, l2.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.9em", color: "#555", marginBottom: "10px", display: "flex", alignItems: "center", gap: "5px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: "bold" }, children: "Active for:" }),
      " ",
      timeText
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px", paddingTop: "10px", borderTop: "1px solid #eee" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
        card.coordinates && enableStreetView && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            title: "Open in Street View",
            onClick: () => window.open(`https://www.google.com/maps?layer=c&cbll=${card.coordinates.lat},${card.coordinates.lng}`, "_blank"),
            style: { background: "none", border: "none", cursor: "pointer", color: "#666", padding: "4px" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", dangerouslySetInnerHTML: { __html: ICONS["street-view"] } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            title: "Zoom to Card",
            onClick: () => onZoom && onZoom(card),
            style: { background: "none", border: "none", cursor: "pointer", color: "#666", padding: "4px" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "22", y1: "12", x2: "18", y2: "12" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "12", x2: "2", y2: "12" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "6", x2: "12", y2: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "22", x2: "12", y2: "18" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            title: "Fix Address",
            onClick: () => onFixAddress && onFixAddress(card),
            style: { background: "none", border: "none", cursor: "pointer", color: "#666", padding: "4px" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" })
            ] })
          }
        )
      ] }),
      onMove && lists.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          onChange: (e2) => onMove(card.id, e2.target.value),
          value: "",
          style: { maxWidth: "140px", fontSize: "0.9em", padding: "4px", borderRadius: "4px", borderColor: "#dfe1e6" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Move to..." }),
            Object.values(groupedLists).map((group) => group.lists.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("optgroup", { label: group.name, children: group.lists.map((l2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: l2.id, children: l2.name }, l2.id)) }, group.name))
          ]
        }
      )
    ] })
  ] });
};
const MapView = ({ user, settings: settings2, onClose, onShowSettings, onLogout, onShowTasks, onShowDashboard, isEmbedded, slideshowContent, onStopSlideshow, onStartSlideshow, keepScreenOn, onToggleScreenLock }) => {
  const [cards, setCards] = reactExports.useState([]);
  const [lists, setLists] = reactExports.useState([]);
  const [boardLabels, setBoardLabels] = reactExports.useState([]);
  const [status, setStatus] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(true);
  const [geocodingQueue, setGeocodingQueue] = reactExports.useState([]);
  const [blocks, setBlocks] = reactExports.useState([]);
  const [ignoredCards, setIgnoredCards] = reactExports.useState(/* @__PURE__ */ new Set());
  const [visibleListIds, setVisibleListIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [visibleRuleIds, setVisibleRuleIds] = reactExports.useState(/* @__PURE__ */ new Set(["default"]));
  const [showHomeLocation, setShowHomeLocation] = reactExports.useState(true);
  const [baseMap, setBaseMap] = reactExports.useState("roadmap");
  const [errors, setErrors] = reactExports.useState([]);
  const [markerRules, setMarkerRules] = reactExports.useState([]);
  const [homeLocation, setHomeLocation] = reactExports.useState(null);
  const [countdown, setCountdown] = reactExports.useState(null);
  const [mapLoaded, setMapLoaded] = reactExports.useState(false);
  const [initialFitDone, setInitialFitDone] = reactExports.useState(false);
  const infoWindowRef = reactExports.useRef(null);
  const currentOpenCardId = reactExports.useRef(null);
  const prevValidCardCount = reactExports.useRef(0);
  const { theme, toggleTheme } = useDarkMode();
  const mapRef = reactExports.useRef(null);
  const googleMapRef = reactExports.useRef(null);
  const markersRef = reactExports.useRef({});
  const homeMarkerRef = reactExports.useRef(null);
  const geocoderRef = reactExports.useRef(null);
  const getStoredSettings = () => {
    var _a2;
    if (!user) return {};
    try {
      return ((_a2 = JSON.parse(localStorage.getItem("trelloUserData") || "{}")[user.id]) == null ? void 0 : _a2.settings) || {};
    } catch (e2) {
      return {};
    }
  };
  const storedSettings = getStoredSettings();
  const boardId = (settings2 == null ? void 0 : settings2.boardId) || storedSettings.boardId;
  const boardName = settings2 && settings2.boardName ? settings2.boardName : storedSettings.boardName || "Trello Board";
  settings2 && settings2.mapGeocodeMode || (storedSettings == null ? void 0 : storedSettings.mapGeocodeMode) || "store";
  const ignoreTemplateCards = localStorage.getItem(STORAGE_KEYS.IGNORE_TEMPLATE_CARDS + boardId) !== "false";
  const ignoreCompletedCards = localStorage.getItem(STORAGE_KEYS.IGNORE_COMPLETED_CARDS + boardId) === "true";
  const ignoreNoDescCards = localStorage.getItem(STORAGE_KEYS.IGNORE_NO_DESC_CARDS + boardId) === "true";
  const updateTrelloCoordinates = localStorage.getItem("updateTrelloCoordinates_" + boardId) === "true";
  const enableCardMove = localStorage.getItem("enableCardMove_" + boardId) === "true";
  const enableStreetView = localStorage.getItem("enableStreetView_" + boardId) === "true";
  const terms = getTerminology(settings2);
  const CardsTerm = terms.cards;
  const savedRefresh = localStorage.getItem(STORAGE_KEYS.REFRESH_INTERVAL + boardId);
  const defaultRefreshSetting = { value: 1, unit: "minutes" };
  const refreshSetting = savedRefresh ? JSON.parse(savedRefresh) : defaultRefreshSetting;
  const refreshIntervalSeconds = convertIntervalToSeconds(refreshSetting.value, refreshSetting.unit);
  const showClock = localStorage.getItem(STORAGE_KEYS.CLOCK_SETTING + boardId) !== "false";
  reactExports.useEffect(() => {
    if (!mapLoaded) return;
    infoWindowRef.current = new window.google.maps.InfoWindow();
    infoWindowRef.current.addListener("closeclick", () => {
      currentOpenCardId.current = null;
    });
  }, [mapLoaded]);
  const fitMapBounds = () => {
    if (!googleMapRef.current) return;
    const bounds = new window.google.maps.LatLngBounds();
    let count2 = 0;
    Object.values(markersRef.current).forEach((marker) => {
      if (marker.getMap()) {
        bounds.extend(marker.getPosition());
        count2++;
      }
    });
    if (homeMarkerRef.current && homeMarkerRef.current.getMap()) {
      bounds.extend(homeMarkerRef.current.getPosition());
      count2++;
    }
    if (count2 === 1) {
      googleMapRef.current.setCenter(bounds.getCenter());
      googleMapRef.current.setZoom(14);
    } else if (count2 > 1) {
      googleMapRef.current.fitBounds(bounds, { top: 80, bottom: 80, left: 50, right: 50 });
    } else {
      if (homeLocation && homeLocation.coords) {
        const lat = typeof homeLocation.coords.lat === "function" ? homeLocation.coords.lat() : parseFloat(homeLocation.coords.lat);
        const lng = typeof homeLocation.coords.lng === "function" ? homeLocation.coords.lng() : parseFloat(homeLocation.coords.lon || homeLocation.coords.lng);
        googleMapRef.current.setCenter({ lat, lng });
        googleMapRef.current.setZoom(14);
      } else {
        googleMapRef.current.setCenter({ lat: -25.2744, lng: 133.7751 });
        googleMapRef.current.setZoom(4);
      }
    }
  };
  const trafficLayerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!googleMapRef.current || !mapLoaded) return;
    if (baseMap === "traffic") {
      googleMapRef.current.setMapTypeId("roadmap");
      if (!trafficLayerRef.current) {
        trafficLayerRef.current = new window.google.maps.TrafficLayer();
      }
      trafficLayerRef.current.setMap(googleMapRef.current);
    } else {
      if (trafficLayerRef.current) {
        trafficLayerRef.current.setMap(null);
      }
      if (baseMap !== "dark" && baseMap !== "traffic") {
        googleMapRef.current.setMapTypeId(baseMap);
      } else if (baseMap === "dark") {
        googleMapRef.current.setMapTypeId("dark_mode");
      }
    }
  }, [baseMap, mapLoaded]);
  const [showDashboardDropdown, setShowDashboardDropdown] = reactExports.useState(false);
  const [showTaskDropdown, setShowTaskDropdown] = reactExports.useState(false);
  const [visibleMarkersCount, setVisibleMarkersCount] = reactExports.useState(0);
  const [refreshVersion, setRefreshVersion] = reactExports.useState(0);
  reactExports.useEffect(() => {
    loadGoogleMaps().then((maps) => {
      if (!mapRef.current) return;
      const defaultStyles = [
        { featureType: "poi", stylers: [{ visibility: "off" }] }
      ];
      const mapOptions = {
        center: { lat: 0, lng: 0 },
        zoom: 2,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: defaultStyles,
        gestureHandling: "cooperative"
      };
      const map = new maps.Map(mapRef.current, mapOptions);
      map.addListener("click", () => {
        if (infoWindowRef.current) infoWindowRef.current.close();
        currentOpenCardId.current = null;
      });
      googleMapRef.current = map;
      geocoderRef.current = new maps.Geocoder();
      setMapLoaded(true);
      const styledMapType = new maps.StyledMapType(DARK_MODE_STYLE, { name: "Dark" });
      map.mapTypes.set("dark_mode", styledMapType);
    }).catch(console.error);
  }, []);
  reactExports.useEffect(() => {
    const handleKeyDown = (e2) => {
      if (e2.key === "Escape") {
        if (infoWindowRef.current) infoWindowRef.current.close();
        currentOpenCardId.current = null;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  const isFetchingRef = reactExports.useRef(false);
  const loadData = reactExports.useCallback(async (isRefresh = false) => {
    if (!user || !boardId || isFetchingRef.current) return;
    isFetchingRef.current = true;
    if (!isRefresh) {
      setLoading(true);
      setStatus(`Loading ${CardsTerm.toLowerCase()}...`);
    }
    try {
      const currentLayout = getPersistentLayout(user.id, boardId);
      setBlocks(currentLayout);
      const rulesKey = `TRELLO_MARKER_RULES_${boardId}`;
      const savedRules = localStorage.getItem(rulesKey);
      if (savedRules) setMarkerRules(JSON.parse(savedRules));
      else setMarkerRules([]);
      const enableHome = localStorage.getItem(`enableHomeLocation_${boardId}`) === "true";
      if (enableHome) {
        const homeCoords = JSON.parse(localStorage.getItem(`homeCoordinates_${boardId}`) || "null");
        const homeIcon = localStorage.getItem(`homeIcon_${boardId}`) || "home";
        const homeAddress = localStorage.getItem(`homeAddress_${boardId}`) || "";
        if (homeCoords) setHomeLocation({ coords: homeCoords, icon: homeIcon, address: homeAddress });
        else setHomeLocation(null);
      } else setHomeLocation(null);
      if (!isRefresh) {
        const allListIds = currentLayout.filter((b2) => b2.includeOnMap !== false).flatMap((b2) => b2.listIds);
        setVisibleListIds(new Set(allListIds));
        const allRuleIds = (savedRules ? JSON.parse(savedRules) : []).map((r2) => r2.id).concat(["default"]);
        setVisibleRuleIds(new Set(allRuleIds));
        const ignored = JSON.parse(localStorage.getItem(STORAGE_KEYS.IGNORE_CARDS + boardId) || "[]");
        setIgnoredCards(new Set(ignored));
      }
      const [listsData, labelsData, cardsData] = await Promise.all([
        trelloFetch(`/boards/${boardId}/lists?cards=none&fields=id,name`, user.token),
        trelloFetch(`/boards/${boardId}/labels`, user.token),
        trelloFetch(`/boards/${boardId}/cards?fields=id,name,desc,idList,labels,shortUrl,isTemplate,pos,coordinates,due,dueComplete&_=${Date.now()}`, user.token)
      ]);
      setLists(listsData);
      setBoardLabels(labelsData);
      const cacheKey = `MAP_GEOCODING_CACHE_${boardId}`;
      const cache = JSON.parse(localStorage.getItem(cacheKey) || "{}");
      const ignoreCompletedCards2 = localStorage.getItem(STORAGE_KEYS.IGNORE_COMPLETED_CARDS + boardId) === "true";
      const ignoreNoDescCards2 = localStorage.getItem("IGNORE_NO_DESC_CARDS_" + boardId) === "true";
      const absoluteMinPosByList = {};
      cardsData.forEach((c2) => {
        if (absoluteMinPosByList[c2.idList] === void 0 || c2.pos < absoluteMinPosByList[c2.idList]) {
          absoluteMinPosByList[c2.idList] = c2.pos;
        }
      });
      const processedCards = cardsData.filter((c2) => {
        if (ignoreTemplateCards && c2.isTemplate) return false;
        if (ignoreTemplateCards && c2.isTemplate) return false;
        if (ignoreCompletedCards2 && c2.dueComplete) return false;
        if (ignoreNoDescCards2 && (!c2.desc || !c2.desc.trim())) return false;
        return true;
      }).map((c2) => {
        let coords = null;
        if (c2.coordinates) {
          if (typeof c2.coordinates === "string" && c2.coordinates.includes(",")) {
            const parts = c2.coordinates.split(",");
            if (parts.length === 2) coords = { lat: parseFloat(parts[0]), lng: parseFloat(parts[1]) };
          } else if (typeof c2.coordinates === "object") {
            const lat = c2.coordinates.lat || c2.coordinates.latitude;
            const lng = c2.coordinates.lng || c2.coordinates.long || c2.coordinates.longitude;
            if (lat && lng) coords = { lat: parseFloat(lat), lng: parseFloat(lng) };
          }
        }
        if ((!coords || !coords.lat) && cache[c2.id]) coords = cache[c2.id];
        const isFirstInList = c2.pos === absoluteMinPosByList[c2.idList];
        return { ...c2, coordinates: coords, isFirstInList };
      });
      setCards(processedCards);
    } catch (e2) {
      console.error(e2);
      setStatus(`Error: ${e2.message}`);
    } finally {
      isFetchingRef.current = false;
      if (isRefresh) {
        setRefreshVersion((v2) => v2 + 1);
      } else {
        setLoading(false);
        setStatus("");
      }
    }
  }, [user, boardId, ignoreTemplateCards]);
  reactExports.useEffect(() => {
    if (!cards.length) return;
    const missingAddressCards = [];
    const newQueue = cards.filter((c2) => {
      const block = blocks.find((b2) => b2.listIds.includes(c2.idList));
      if (!block || block.includeOnMap === false) return false;
      if (block.ignoreFirstCard && c2.isFirstInList) return false;
      if (ignoredCards.has(c2.id)) return false;
      if (!c2.desc || !c2.desc.trim()) {
        missingAddressCards.push({ cardId: c2.id, cardName: c2.name, cardDesc: c2.desc, cardUrl: c2.shortUrl, failedAddress: "No description found" });
        return false;
      }
      const hasCoords = c2.coordinates && c2.coordinates.lat;
      if (hasCoords) return false;
      const address = parseAddressFromDescription(c2.desc);
      if (!address) {
        missingAddressCards.push({ cardId: c2.id, cardName: c2.name, cardDesc: c2.desc, cardUrl: c2.shortUrl, failedAddress: "No valid address found" });
        return false;
      }
      return true;
    });
    if (newQueue.length > 0) {
      setGeocodingQueue(newQueue);
    }
    if (missingAddressCards.length > 0) {
      setErrors((prev) => {
        const newErrors = [...prev];
        let changed = false;
        missingAddressCards.forEach((m2) => {
          if (!newErrors.some((e2) => e2.cardId === m2.cardId)) {
            newErrors.push(m2);
            changed = true;
          }
        });
        return changed ? newErrors : prev;
      });
    }
  }, [cards, blocks]);
  reactExports.useEffect(() => {
    if (geocodingQueue.length === 0) {
      return;
    }
    if (!mapLoaded) return;
    const processQueue = async () => {
      const card = geocodingQueue[0];
      const address = parseAddressFromDescription(card.desc);
      const cleanAddress = expandAbbreviations(address);
      const statusText = `Geocoding: ${card.name}`;
      setStatus(statusText.length > 30 ? statusText.substring(0, 30) + "..." : statusText);
      if (geocoderRef.current) {
        geocoderRef.current.geocode({ address: cleanAddress }, async (results, status2) => {
          if (status2 === "OK" && results[0]) {
            const loc = results[0].geometry.location;
            const coords = { lat: loc.lat(), lng: loc.lng(), display_name: results[0].formatted_address };
            setCards((prev) => prev.map((c2) => c2.id === card.id ? { ...c2, coordinates: coords } : c2));
            const cacheKey = `MAP_GEOCODING_CACHE_${boardId}`;
            const cache = JSON.parse(localStorage.getItem(cacheKey) || "{}");
            cache[card.id] = coords;
            localStorage.setItem(cacheKey, JSON.stringify(cache));
            if (updateTrelloCoordinates) {
              try {
                await trelloFetch(`/cards/${card.id}`, user.token, {
                  method: "PUT",
                  body: JSON.stringify({ coordinates: `${coords.lat},${coords.lng}` }),
                  headers: { "Content-Type": "application/json" }
                });
              } catch (e2) {
                console.error("Trello update failed", e2);
              }
            }
          } else {
            console.warn(`Geocoding failed for ${card.name}: ${status2}`);
            if (status2 === "OVER_QUERY_LIMIT") {
              setStatus(`Rate limited. Retrying in 2s...`);
              await new Promise((r2) => setTimeout(r2, 2e3));
              setGeocodingQueue((prev) => [...prev]);
              return;
            } else {
              setErrors((prev) => [...prev, { cardId: card.id, cardName: card.name, cardDesc: card.desc, cardUrl: card.shortUrl, failedAddress: cleanAddress }]);
            }
          }
          setGeocodingQueue((prev) => prev.slice(1));
          if (geocodingQueue.length === 1) setStatus("");
        });
      }
    };
    const timer = setTimeout(processQueue, 1200);
    return () => clearTimeout(timer);
  }, [geocodingQueue, mapLoaded, updateTrelloCoordinates, boardId, user, cards]);
  const intervalRef = reactExports.useRef(null);
  const countdownRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    loadData(false);
  }, [loadData]);
  reactExports.useEffect(() => {
    if (countdownRef.current) clearInterval(countdownRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (geocodingQueue.length === 0 && !loading) {
      setCountdown(refreshIntervalSeconds);
      countdownRef.current = setInterval(() => setCountdown((p2) => p2 !== null && p2 > 0 ? p2 - 1 : p2), 1e3);
      intervalRef.current = setInterval(() => {
        loadData(true);
        setCountdown(refreshIntervalSeconds);
      }, refreshIntervalSeconds * 1e3);
    } else {
      setCountdown(null);
    }
    return () => {
      clearInterval(countdownRef.current);
      clearInterval(intervalRef.current);
    };
  }, [geocodingQueue.length, loading, refreshIntervalSeconds, loadData]);
  const handleApplyResult = async (cardId, coords) => {
    setCards((prev) => prev.map((c2) => c2.id === cardId ? { ...c2, coordinates: coords } : c2));
    const cacheKey = `MAP_GEOCODING_CACHE_${boardId}`;
    const cache = JSON.parse(localStorage.getItem(cacheKey) || "{}");
    cache[cardId] = coords;
    localStorage.setItem(cacheKey, JSON.stringify(cache));
    setErrors((prev) => prev.filter((e2) => e2.cardId !== cardId));
    if (updateTrelloCoordinates) {
      try {
        await trelloFetch(`/cards/${cardId}`, user.token, {
          method: "PUT",
          body: JSON.stringify({ coordinates: `${coords.lat},${coords.lng}` }),
          headers: { "Content-Type": "application/json" }
        });
      } catch (e2) {
        console.error("Trello manual update failed", e2);
      }
    }
  };
  const handleDismissError = (id2) => setErrors((prev) => prev.filter((e2) => e2.cardId !== id2));
  const handleToggleList = (listId) => {
    const next = new Set(visibleListIds);
    if (next.has(listId)) next.delete(listId);
    else next.add(listId);
    setVisibleListIds(next);
  };
  const handleToggleBlock = (blockId, isChecked) => {
    const block = blocks.find((b2) => b2.id === blockId);
    if (!block) return;
    const next = new Set(visibleListIds);
    block.listIds.forEach((id2) => isChecked ? next.add(id2) : next.delete(id2));
    setVisibleListIds(next);
  };
  const handleToggleAllBlocks = (isChecked) => {
    const next = new Set(visibleListIds);
    const allListIds = blocks.filter((b2) => b2.includeOnMap !== false).flatMap((b2) => b2.listIds);
    allListIds.forEach((id2) => isChecked ? next.add(id2) : next.delete(id2));
    setVisibleListIds(next);
  };
  const handleToggleRule = (ruleId) => {
    const next = new Set(visibleRuleIds);
    if (next.has(ruleId)) next.delete(ruleId);
    else next.add(ruleId);
    setVisibleRuleIds(next);
  };
  const handleToggleAllRules = (isChecked) => {
    const allRuleIds = markerRules.map((r2) => r2.id).concat(["default"]);
    const next = new Set(isChecked ? allRuleIds : []);
    setVisibleRuleIds(next);
  };
  const handleMoveCard = async (cardId, newListId) => {
    if (!enableCardMove) return;
    try {
      await trelloFetch(`/cards/${cardId}`, user.token, {
        method: "PUT",
        body: JSON.stringify({ idList: newListId }),
        headers: { "Content-Type": "application/json" }
      });
      setCards((prev) => prev.map((c2) => c2.id === cardId ? { ...c2, idList: newListId } : c2));
      if (currentOpenCardId.current === cardId && markersRef.current[cardId] && infoWindowRef.current) {
        const card = cards.find((c2) => c2.id === cardId);
        const updatedCard = { ...card, idList: newListId };
        const list = lists.find((l2) => l2.id === newListId);
        const listName = list ? list.name : "Unknown";
        const block = blocks.find((b2) => b2.listIds.includes(newListId));
        const blockName = block ? block.name : "";
        const div = document.createElement("div");
        const root = createRoot(div);
        root.render(
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CardPopup,
            {
              card: updatedCard,
              listName,
              blockName,
              blocks,
              lists,
              onMove: handleMoveCard,
              enableStreetView,
              onFixAddress: handleFixAddress
            }
          )
        );
        infoWindowRef.current.setContent(div);
      }
    } catch (e2) {
      console.error("Failed to move card", e2);
      alert("Failed to move card.");
    }
  };
  const handleIgnoreCard = (cardId) => {
    setIgnoredCards((prev) => {
      const next = new Set(prev);
      next.add(cardId);
      localStorage.setItem(STORAGE_KEYS.IGNORE_CARDS + boardId, JSON.stringify(Array.from(next)));
      return next;
    });
    setCards((prev) => prev.map((c2) => c2.id === cardId ? { ...c2, coordinates: null } : c2));
    setErrors((prev) => prev.filter((e2) => e2.cardId !== cardId));
    setGeocodingQueue((prev) => prev.filter((c2) => c2.id !== cardId));
  };
  const handleFixAddress = reactExports.useCallback((card) => {
    setErrors((prev) => {
      if (prev.some((e2) => e2.cardId === card.id)) return prev;
      return [...prev, {
        cardId: card.id,
        cardName: card.name,
        cardDesc: card.desc,
        cardUrl: card.shortUrl,
        failedAddress: parseAddressFromDescription(card.desc) || "Manual Fix Requested"
      }];
    });
    if (infoWindowRef.current) infoWindowRef.current.close();
  }, []);
  const prevRefreshVersion = reactExports.useRef(0);
  const [totalFilteredCards, setTotalFilteredCards] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!googleMapRef.current || !mapLoaded) return;
    const map = googleMapRef.current;
    let droppedByGlobal = 0;
    let droppedByList = 0;
    let droppedByRule = 0;
    const allPotentialCards = cards.filter((c2) => {
      if (ignoreTemplateCards && c2.isTemplate) {
        droppedByGlobal++;
        return false;
      }
      if (ignoreCompletedCards && c2.dueComplete) {
        droppedByGlobal++;
        return false;
      }
      if (ignoreNoDescCards && (!c2.desc || !c2.desc.trim())) {
        droppedByGlobal++;
        return false;
      }
      if (!visibleListIds.has(c2.idList)) {
        droppedByList++;
        return false;
      }
      const block = blocks.find((b2) => b2.listIds.includes(c2.idList));
      if (!block) return true;
      if (block.ignoreFirstCard && c2.isFirstInList) {
        return false;
      }
      const { activeRuleIds } = getMarkerConfig(c2, block, markerRules);
      const isVisibleRule = [...activeRuleIds].some((id2) => visibleRuleIds.has(id2));
      if (!isVisibleRule) droppedByRule++;
      return isVisibleRule;
    });
    console.log(`[MapView Debug] Total: ${cards.length} | Potential: ${allPotentialCards.length} | Dropped: Global=${droppedByGlobal}, List=${droppedByList}, Rule=${droppedByRule}`);
    setTotalFilteredCards(allPotentialCards.length);
    const validCards = allPotentialCards.filter((c2) => c2.coordinates && c2.coordinates.lat);
    const missingCards = allPotentialCards.filter((c2) => !c2.coordinates || !c2.coordinates.lat);
    if (missingCards.length > 0) {
      console.log(`[MapView Debug] Missing Coordinates for ${missingCards.length} cards:`);
      missingCards.forEach((c2) => {
        const parsed = parseAddressFromDescription(c2.desc);
        console.log(` - "${c2.name}" (ID: ${c2.id}) | Desc len: ${c2.desc ? c2.desc.length : 0} | Parsed Addr: "${parsed}" | Queue Status: ${geocodingQueue.some((q2) => q2.id === c2.id) ? "In Queue" : "Not in Queue"} | Error Status: ${errors.some((e2) => e2.cardId === c2.id) ? "Has Error" : "No Error"}`);
      });
    }
    setVisibleMarkersCount(validCards.length);
    const visibleCards = validCards;
    const newMarkers = {};
    visibleCards.forEach((c2) => {
      const block = blocks.find((b2) => b2.listIds.includes(c2.idList)) || { mapIcon: "map-marker" };
      const markerConfig = getMarkerConfig(c2, block, markerRules);
      const googleIcon = getGoogleMarkerIcon(markerConfig);
      const position3 = { lat: c2.coordinates.lat, lng: c2.coordinates.lng };
      if (markersRef.current[c2.id]) {
        const m2 = markersRef.current[c2.id];
        m2.setPosition(position3);
        m2.setIcon(googleIcon);
        m2.set("cardData", c2);
        newMarkers[c2.id] = m2;
      } else {
        const m2 = new window.google.maps.Marker({ position: position3, map, icon: googleIcon, title: c2.name });
        m2.set("cardData", c2);
        m2.addListener("click", () => {
          const currentCard = m2.get("cardData");
          const div = document.createElement("div");
          const root = createRoot(div);
          const list = lists.find((l2) => l2.id === currentCard.idList);
          const listName = list ? list.name : "Unknown List";
          const parentBlock = blocks.find((b2) => b2.listIds.includes(currentCard.idList));
          const blockName = parentBlock ? parentBlock.name : "";
          currentOpenCardId.current = currentCard.id;
          root.render(
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CardPopup,
              {
                card: currentCard,
                listName,
                blockName,
                blocks,
                lists: enableCardMove ? lists : [],
                onMove: handleMoveCard,
                enableStreetView,
                onFixAddress: handleFixAddress,
                onZoom: (c22) => {
                  if (googleMapRef.current && c22.coordinates) {
                    googleMapRef.current.setCenter({ lat: c22.coordinates.lat, lng: c22.coordinates.lng });
                    const currentZoom = googleMapRef.current.getZoom();
                    googleMapRef.current.setZoom(Math.min(currentZoom + 2, 21));
                  }
                }
              }
            )
          );
          infoWindowRef.current.setContent(div);
          infoWindowRef.current.open(map, m2);
        });
        newMarkers[c2.id] = m2;
      }
    });
    setVisibleMarkersCount(Object.keys(newMarkers).length);
    Object.keys(markersRef.current).forEach((id2) => {
      if (!newMarkers[id2]) markersRef.current[id2].setMap(null);
    });
    markersRef.current = newMarkers;
    if (homeLocation && homeLocation.coords && showHomeLocation) {
      const pos = { lat: homeLocation.coords.lat, lng: homeLocation.coords.lon };
      const icon = getGoogleMarkerIcon({ icon: homeLocation.icon || "home", color: "purple" });
      if (homeMarkerRef.current) {
        homeMarkerRef.current.setPosition(pos);
        homeMarkerRef.current.setIcon(icon);
        homeMarkerRef.current.setMap(map);
      } else {
        const homeM = new window.google.maps.Marker({ position: pos, map, icon, zIndex: 1e3, title: "Home Location" });
        homeM.addListener("click", () => {
          const content = `
                        <div style="padding: 5px;">
                            <strong>Home Address</strong><br/>
                            ${homeLocation.address || homeLocation.coords.display_name || "No address set"}
                        </div>
                    `;
          infoWindowRef.current.setContent(content);
          infoWindowRef.current.open(map, homeM);
        });
        homeMarkerRef.current = homeM;
      }
    } else if (homeMarkerRef.current) {
      homeMarkerRef.current.setMap(null);
    }
    if (!initialFitDone && (visibleCards.length > 0 || !loading)) {
      fitMapBounds();
      setInitialFitDone(true);
      prevValidCardCount.current = validCards.length;
      prevRefreshVersion.current = refreshVersion;
    } else if (refreshVersion !== prevRefreshVersion.current) {
      if (visibleCards.length > 0) fitMapBounds();
      prevRefreshVersion.current = refreshVersion;
      prevValidCardCount.current = validCards.length;
    } else if (initialFitDone && validCards.length !== prevValidCardCount.current) {
      fitMapBounds();
      prevValidCardCount.current = validCards.length;
    }
  }, [cards, visibleListIds, visibleRuleIds, blocks, markerRules, homeLocation, showHomeLocation, mapLoaded, lists, refreshVersion, loading]);
  if (isEmbedded) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, position: "relative", height: "100%", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", top: 10, left: 10, zIndex: 5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        MapFilters,
        {
          lists,
          cards,
          allLabels: boardLabels,
          visibleListIds,
          onToggleList: handleToggleList,
          blocks,
          onToggleBlock: handleToggleBlock,
          onToggleAllBlocks: handleToggleAllBlocks,
          markerRules,
          visibleRuleIds,
          onToggleRule: handleToggleRule,
          onToggleAllRules: handleToggleAllRules,
          homeLocation,
          showHomeLocation,
          onToggleHome: () => setShowHomeLocation(!showHomeLocation)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            position: "absolute",
            top: "5px",
            right: "20px",
            zIndex: 800,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            padding: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#333"
          },
          onClick: fitMapBounds,
          title: "Fit Map to Markers",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "22", y1: "12", x2: "18", y2: "12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "12", x2: "2", y2: "12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "6", x2: "12", y2: "2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "22", x2: "12", y2: "18" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flexGrow: 1, position: "relative", background: "#e0e0e0", height: "100%" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: mapRef, style: { width: "100%", height: "100%" } }),
        !mapLoaded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }, children: "Loading Google Maps..." })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-view-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-header-title-area", children: [
        showClock && /* @__PURE__ */ jsxRuntimeExports.jsx(DigitalClock, { boardId }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { marginLeft: showClock ? "15px" : "0" }, children: boardName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginLeft: "auto", display: "flex", alignItems: "center", gap: "15px" }, children: [
        !mapLoaded && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "spinner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "desktop-only", style: { display: "flex", alignItems: "center", gap: "15px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.9em", color: "var(--text-secondary)", marginRight: "5px" }, children: [
            "Mapped: ",
            visibleMarkersCount,
            " / ",
            totalFilteredCards
          ] }),
          !onStopSlideshow && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: baseMap,
              onChange: (e2) => setBaseMap(e2.target.value),
              className: "time-filter-select",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "roadmap", children: "Roadmap" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "traffic", children: "Traffic" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "satellite", children: "Satellite" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hybrid", children: "Hybrid" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "terrain", children: "Terrain" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "dark", children: "Dark Mode" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "theme-toggle-button", onClick: onToggleScreenLock, style: { marginLeft: "10px" }, title: keepScreenOn ? "Prevent screen from turning off" : "Allow screen to turn off", children: keepScreenOn ? /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "17", x2: "12", y2: "21" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: { opacity: 0.5 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "17", x2: "12", y2: "21" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "1", y1: "1", x2: "23", y2: "23", style: { stroke: "currentColor" } })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "theme-toggle-button",
              onClick: () => toggleTheme(),
              children: theme === "dark" ? "☀️" : "🌙"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mobile-only", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HamburgerMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hamburger-section", style: { borderBottom: "1px solid var(--border-color)", paddingBottom: "10px", marginBottom: "15px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.9em", color: "var(--text-secondary)" }, children: [
            "Mapped: ",
            visibleMarkersCount,
            " / ",
            totalFilteredCards,
            " ",
            CardsTerm.toLowerCase()
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hamburger-section", style: { borderBottom: "1px solid var(--border-color)", paddingBottom: "10px", marginBottom: "15px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Map Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: baseMap,
                onChange: (e2) => setBaseMap(e2.target.value),
                className: "time-filter-select",
                style: { width: "100%", margin: "10px 0 0 0" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "roadmap", children: "Roadmap" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "traffic", children: "Traffic" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "satellite", children: "Satellite" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hybrid", children: "Hybrid" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "terrain", children: "Terrain" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "dark", children: "Dark Mode" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hamburger-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Actions" }),
            !onStopSlideshow && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: () => onClose(), children: "Dashboard View" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: () => onShowTasks(), children: "Tasks View" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: () => onShowSettings("board"), children: "Settings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: onLogout, children: "Logout" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hamburger-section", style: { marginTop: "10px", paddingTop: "10px", borderTop: "1px solid var(--border-color)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "theme-toggle-button",
              onClick: () => toggleTheme(),
              title: "Toggle Theme",
              style: { background: "transparent", fontSize: "1.5em", cursor: "pointer", border: "none" },
              children: theme === "dark" ? "☀️" : "🌙"
            }
          ) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "fixed", top: "80px", right: "20px", zIndex: 9999, pointerEvents: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { pointerEvents: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end" }, children: errors.map((err) => /* @__PURE__ */ jsxRuntimeExports.jsx(GeocodingErrorToast, { error: err, onDismiss: handleDismissError, onApply: handleApplyResult, onIgnore: handleIgnoreCard }, err.cardId)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexGrow: 1, position: "relative" }, children: slideshowContent === "dashboard" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100%", height: "100%", overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, { isEmbedded: true, user, settings: settings2 }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            position: "absolute",
            top: "5px",
            right: "20px",
            zIndex: 800,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            padding: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#333"
          },
          onClick: fitMapBounds,
          title: "Fit Map to Markers",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "60", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "22", y1: "12", x2: "18", y2: "12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "12", x2: "2", y2: "12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "6", x2: "12", y2: "2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "22", x2: "12", y2: "18" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "map-sidebar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        MapFilters,
        {
          lists,
          cards,
          allLabels: boardLabels,
          visibleListIds,
          onToggleList: handleToggleList,
          blocks,
          onToggleBlock: handleToggleBlock,
          onToggleAllBlocks: handleToggleAllBlocks,
          markerRules,
          visibleRuleIds,
          onToggleRule: handleToggleRule,
          onToggleAllRules: handleToggleAllRules,
          homeLocation,
          showHomeLocation,
          onToggleHome: () => setShowHomeLocation(!showHomeLocation)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flexGrow: 1, position: "relative", background: "#e0e0e0" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: mapRef, style: { width: "100%", height: "100%" } }),
        !mapLoaded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }, children: "Loading Google Maps..." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-footer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "map-footer-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8em", color: "#888" }, children: "Powered by Google Maps & Trello" }) }),
      onStopSlideshow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", left: "50%", transform: "translateX(-50%)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onStopSlideshow,
          style: { backgroundColor: "#d32f2f", color: "white", border: "none", padding: "5px 15px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" },
          children: "Stop Slideshow"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-footer-right", children: [
        !onStopSlideshow && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "desktop-only", style: { marginRight: "20px", fontWeight: "500", color: "var(--text-color)" }, children: [
          status || "Ready",
          " ",
          geocodingQueue.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "(Geocoding ",
            geocodingQueue.length,
            "...)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "button-secondary", onClick: () => {
          setCountdown(refreshIntervalSeconds);
          loadData(true);
        }, children: [
          "Refresh ",
          formatDynamicCountdown(countdown)
        ] }),
        !onStopSlideshow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "desktop-only", style: { display: "flex", gap: "15px", alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: () => onClose(), children: "Dashboard View" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary dropdown-arrow", style: { marginLeft: "-1px", borderLeft: "none", padding: "0 5px" }, onClick: () => setShowDashboardDropdown(!showDashboardDropdown), children: "▼" })
            ] }),
            showDashboardDropdown && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "context-menu", style: { position: "absolute", bottom: "100%", left: 0, background: "var(--bg-primary)", border: "1px solid #ccc", borderRadius: "4px", padding: "10px", minWidth: "250px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "menu-item", style: { marginBottom: "8px", padding: "4px", cursor: "pointer", borderRadius: "4px" }, onClick: () => {
                window.open("/dashboard", "_blank");
                setShowDashboardDropdown(false);
              }, children: "Open in New Tab" }),
              onStartSlideshow && !onStopSlideshow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "menu-item", style: { padding: "4px", cursor: "pointer", borderRadius: "4px" }, onClick: () => {
                onStartSlideshow();
                setShowDashboardDropdown(false);
              }, children: [
                "Start Slideshow (",
                (settings2 == null ? void 0 : settings2.slideshowInterval) || 10,
                "s)"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: () => onShowTasks(), children: "Tasks View" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary dropdown-arrow", style: { marginLeft: "-1px", borderLeft: "none", padding: "0 5px" }, onClick: () => setShowTaskDropdown(!showTaskDropdown), children: "▼" })
            ] }),
            showTaskDropdown && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "context-menu", style: { position: "absolute", bottom: "100%", left: 0, background: "var(--bg-primary)", border: "1px solid #ccc", borderRadius: "4px", padding: "5px", minWidth: "150px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "menu-item", onClick: () => {
              window.open("/tasks", "_blank");
              setShowTaskDropdown(false);
            }, children: "Open in New Tab" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: () => onShowSettings("board"), children: "Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: onLogout, children: "Logout" })
        ] })
      ] })
    ] }),
    (showDashboardDropdown || showTaskDropdown) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 99 }, onClick: () => {
      setShowDashboardDropdown(false);
      setShowTaskDropdown(false);
    } })
  ] });
};
const Dashboard = ({ user, settings: settings2, onShowSettings, onLogout, onShowTasks, onShowMap, onGoToStats, isEmbedded, slideshowContent, onStopSlideshow, onStartSlideshow, keepScreenOn, onToggleScreenLock }) => {
  var _a2, _b;
  const [allCards, setAllCards] = reactExports.useState([]);
  const [allListsMap, setAllListsMap] = reactExports.useState(/* @__PURE__ */ new Map());
  const [boardLabels, setBoardLabels] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  const [countdown, setCountdown] = reactExports.useState(30);
  const [timeFilter, setTimeFilter] = reactExports.useState("all");
  const [selectedLabelIds, setSelectedLabelIds] = reactExports.useState(null);
  const [labelLogic, setLabelLogic] = reactExports.useState("OR");
  const [enableMapView, setEnableMapView] = reactExports.useState(() => {
    if (settings2 && settings2.enableMapView !== void 0) return settings2.enableMapView;
    const boardIdLocal = settings2 == null ? void 0 : settings2.boardId;
    if (!boardIdLocal) return false;
    const stored = localStorage.getItem(`ENABLE_MAP_VIEW_${boardIdLocal}`);
    return stored === "true";
  });
  const timerRef = reactExports.useRef(null);
  const [showMapDropdown, setShowMapDropdown] = reactExports.useState(false);
  const [showTaskDropdown, setShowTaskDropdown] = reactExports.useState(false);
  const { theme, toggleTheme } = useDarkMode();
  reactExports.useEffect(() => {
    if (settings2) {
      if (settings2.enableMapView !== void 0) {
        setEnableMapView(settings2.enableMapView);
      } else if (settings2.boardId) {
        try {
          const stored = localStorage.getItem(`ENABLE_MAP_VIEW_${settings2.boardId}`);
          setEnableMapView(stored === "true");
        } catch (e2) {
        }
      }
    }
  }, [settings2]);
  const [modalList, setModalList] = reactExports.useState(null);
  const boardId = settings2 == null ? void 0 : settings2.boardId;
  const boardName = settings2 == null ? void 0 : settings2.boardName;
  const listsFromSettings = (settings2 == null ? void 0 : settings2.selectedLists) || [];
  const terms = getTerminology(settings2);
  const BoardTerm = terms.board;
  const sectionsLayout = boardId ? getPersistentLayout(user.id, boardId) : DEFAULT_LAYOUT;
  const persistentColors = getPersistentColors(user.id);
  const blocksMap = new Map(sectionsLayout.map((s) => [s.id, s]));
  const handleToggleCollapse = (blockId) => {
    const newLayout = sectionsLayout.map(
      (s) => s.id === blockId ? { ...s, isCollapsed: !s.isCollapsed } : s
    );
    setPersistentLayout(user.id, boardId, newLayout);
  };
  const effectiveSeconds = reactExports.useMemo(() => {
    try {
      const savedRefresh = localStorage.getItem(STORAGE_KEYS.REFRESH_INTERVAL + boardId);
      const defaultRefreshSetting = { value: 1, unit: "minutes" };
      const refreshSetting = savedRefresh ? JSON.parse(savedRefresh) : defaultRefreshSetting;
      const calculatedSeconds = convertIntervalToSeconds(refreshSetting.value, refreshSetting.unit);
      return calculatedSeconds < 15 ? 15 : calculatedSeconds;
    } catch (e2) {
      return 60;
    }
  }, [boardId]);
  const ignoreTemplateCards = localStorage.getItem(STORAGE_KEYS.IGNORE_TEMPLATE_CARDS + boardId) !== "false";
  const ignoreCompletedCards = localStorage.getItem(STORAGE_KEYS.IGNORE_COMPLETED_CARDS + boardId) === "true";
  const ignoreNoDescCards = localStorage.getItem("IGNORE_NO_DESC_CARDS_" + boardId) === "true";
  const isFetchingRef = reactExports.useRef(false);
  const fetchData = reactExports.useCallback(async (manual = false) => {
    if (manual || loading) setLoading(true);
    if (isFetchingRef.current) return;
    isFetchingRef.current = true;
    setError("");
    try {
      if (!boardId) throw new Error("No Board ID configured");
      const [listsData, labelsData, cardsData] = await Promise.all([
        trelloFetch(`/boards/${boardId}/lists?cards=none&fields=id,name,color`, user.token),
        trelloFetch(`/boards/${boardId}/labels`, user.token),
        trelloFetch(`/boards/${boardId}/cards?fields=id,idList,pos,name,desc,isTemplate,dateLastActivity,dueComplete,labels`, user.token)
      ]);
      const listsMap = /* @__PURE__ */ new Map();
      listsData.forEach((l2) => listsMap.set(l2.id, l2));
      setAllListsMap(listsMap);
      setBoardLabels(labelsData);
      setAllCards(cardsData);
    } catch (e2) {
      console.error("Dashboard fetch error:", e2);
      if (e2.message && e2.message.includes("429")) {
        setError("Trello API Limit Exceeded. Refresh paused.");
      } else {
        setError(e2.message);
      }
    } finally {
      isFetchingRef.current = false;
      setLoading(false);
    }
  }, [boardId, user.token, loading]);
  reactExports.useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          fetchData();
          return effectiveSeconds;
        }
        return prev - 1;
      });
    }, 1e3);
    timerRef.current = interval;
    setCountdown(effectiveSeconds);
    fetchData();
    return () => clearInterval(interval);
  }, [fetchData, effectiveSeconds]);
  reactExports.useCallback(() => {
    setCountdown(effectiveSeconds);
    fetchData(true);
  }, [effectiveSeconds, fetchData]);
  const counts = reactExports.useMemo(() => {
    const countsMap = /* @__PURE__ */ new Map();
    if (allCards.length === 0) return countsMap;
    const cardsByList = /* @__PURE__ */ new Map();
    allCards.forEach((c2) => {
      if (!cardsByList.has(c2.idList)) cardsByList.set(c2.idList, []);
      cardsByList.get(c2.idList).push(c2);
    });
    const filterConfig = TIME_FILTERS[timeFilter];
    let sinceDate = null;
    let beforeDate = null;
    if (filterConfig) {
      if (filterConfig.type === "relative" && timeFilter !== "all") {
        const now2 = /* @__PURE__ */ new Date();
        now2.setMinutes(now2.getMinutes() - filterConfig.minutes);
        sinceDate = now2;
      } else if (filterConfig.type === "calendar") {
        if (filterConfig.start) sinceDate = filterConfig.start;
        if (filterConfig.end && timeFilter !== "this_month" && timeFilter !== "this_week") {
          beforeDate = filterConfig.end;
        }
      }
    }
    const persistentColorsCopy = getPersistentColors(user.id);
    const usedColors = new Set(Object.values(persistentColorsCopy).flatMap((b2) => Object.values(b2)));
    const uniqueListIds = new Set(sectionsLayout.flatMap((s) => s.listIds));
    uniqueListIds.forEach((listId) => {
      var _a3;
      if (!allListsMap.has(listId)) return;
      const listCards = (cardsByList.get(listId) || []).sort((a, b2) => a.pos - b2.pos);
      const block = sectionsLayout.find((s) => s.listIds.includes(listId));
      const isIgnored = block == null ? void 0 : block.ignoreFirstCard;
      const displayDescription = block == null ? void 0 : block.displayFirstCardDescription;
      let titleCard = null;
      let countableCards = listCards;
      if (isIgnored && listCards.length > 0) {
        titleCard = listCards[0];
        countableCards = listCards.slice(1);
      }
      const filteredCount = countableCards.filter((c2) => {
        if (ignoreTemplateCards && c2.isTemplate) return false;
        if (ignoreCompletedCards && c2.dueComplete) return false;
        if (ignoreNoDescCards && (!c2.desc || !c2.desc.trim())) return false;
        if (sinceDate || beforeDate) {
          const cardDate = new Date(c2.dateLastActivity);
          if (sinceDate && cardDate < sinceDate) return false;
          if (beforeDate && cardDate >= beforeDate) return false;
        }
        if (selectedLabelIds !== null && selectedLabelIds.size > 0) {
          if (!c2.labels || c2.labels.length === 0) return false;
          const cardLabelIds = new Set(c2.labels.map((l2) => l2.id));
          if (labelLogic === "AND") {
            for (let id2 of selectedLabelIds) {
              if (!cardLabelIds.has(id2)) return false;
            }
          } else {
            let hasMatch = false;
            for (let id2 of selectedLabelIds) {
              if (cardLabelIds.has(id2)) {
                hasMatch = true;
                break;
              }
            }
            if (!hasMatch) return false;
          }
        } else if (selectedLabelIds !== null && selectedLabelIds.size === 0) {
          return false;
        }
        return true;
      }).length;
      let descriptionCardName = "";
      if (isIgnored && titleCard && displayDescription) {
        descriptionCardName = titleCard.name;
      }
      const listData = allListsMap.get(listId);
      let color = ((_a3 = persistentColors[boardId]) == null ? void 0 : _a3[listId]) || (listData == null ? void 0 : listData.color);
      if (!color || color === "#cccccc") {
        color = getOrGenerateRandomColor(listId, usedColors);
      }
      countsMap.set(listId, {
        listId,
        count: filteredCount,
        name: (listData == null ? void 0 : listData.name) || "Unknown List",
        displayColor: color,
        firstCardName: descriptionCardName
      });
    });
    return countsMap;
  }, [allCards, timeFilter, selectedLabelIds, labelLogic, allListsMap, sectionsLayout, user.id, boardId, ignoreTemplateCards, ignoreCompletedCards, ignoreNoDescCards]);
  const handleTileClick = (listId, listName, color) => {
    setModalList({ listId, listName, color, sectionsLayout });
  };
  const handleCloseModal = () => {
    setModalList(null);
  };
  const filterLabel = TIME_FILTERS[timeFilter].titleSuffix;
  const clockSetting = localStorage.getItem(STORAGE_KEYS.CLOCK_SETTING + boardId);
  const showClock = clockSetting !== "false";
  if (loading && allCards.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", style: { textAlign: "center", marginTop: "50px" }, children: "Loading dashboard data..." });
  if (!boardName || listsFromSettings.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Trellops Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "logout-button", onClick: onLogout, children: "Logout" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { textAlign: "center", marginTop: "50px" }, children: [
        "No Trello ",
        BoardTerm,
        " configured. Please go to settings to set up your first dashboard."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginTop: "20px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "settings-button", onClick: onShowSettings, children: "Go to Settings" }) })
    ] });
  }
  if (isEmbedded) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DashboardContent,
      {
        sectionsLayout,
        blocksMap,
        counts,
        allListsMap,
        handleTileClick,
        handleToggleCollapse,
        handleCloseModal,
        user,
        ignoreTemplateCards,
        ignoreNoDescCards,
        modalList
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-view-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-header-title-area", children: [
        showClock && /* @__PURE__ */ jsxRuntimeExports.jsx(DigitalClock, { boardId }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: { marginLeft: showClock ? "15px" : "0" }, children: [
          boardName,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: "15px" }, children: filterLabel })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-header-actions", style: { display: "flex", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "desktop-only", style: { display: "flex", alignItems: "center" }, children: [
          !onStopSlideshow && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LabelFilter,
              {
                labels: boardLabels,
                selectedLabelIds,
                onChange: setSelectedLabelIds,
                labelLogic,
                onLabelLogicChange: setLabelLogic
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "time-filter-select", value: timeFilter, onChange: (e2) => setTimeFilter(e2.target.value), style: { marginLeft: "10px" }, children: Object.keys(TIME_FILTERS).map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: key, children: TIME_FILTERS[key].label }, key)) }),
            ((_a2 = settings2 == null ? void 0 : settings2.statistics) == null ? void 0 : _a2.enabled) && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: onGoToStats || (() => window.open("/stats", "_self")), style: { marginLeft: "10px", height: "34px", padding: "0 15px", display: "flex", alignItems: "center" }, children: "Stats" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "theme-toggle-button", onClick: onToggleScreenLock, style: { marginLeft: "10px" }, title: keepScreenOn ? "Prevent screen from turning off" : "Allow screen to turn off", children: keepScreenOn ? /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "17", x2: "12", y2: "21" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: { opacity: 0.5 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "17", x2: "12", y2: "21" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "1", y1: "1", x2: "23", y2: "23", style: { stroke: "currentColor" } })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "theme-toggle-button", onClick: () => toggleTheme(), style: { marginLeft: "10px" }, children: theme === "dark" ? "☀️" : "🌙" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mobile-only", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HamburgerMenu, { children: [
          !onStopSlideshow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hamburger-section", style: { borderBottom: "1px solid var(--border-color)", paddingBottom: "10px", marginBottom: "15px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Filters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px", width: "100%", alignItems: "center" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "85%", textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                LabelFilter,
                {
                  labels: boardLabels,
                  selectedLabelIds,
                  onChange: setSelectedLabelIds,
                  labelLogic,
                  onLabelLogicChange: setLabelLogic
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  value: timeFilter,
                  onChange: (e2) => setTimeFilter(e2.target.value),
                  className: "time-filter-select",
                  style: { width: "85%", margin: 0 },
                  children: Object.keys(TIME_FILTERS).map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: key, children: TIME_FILTERS[key].label }, key))
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hamburger-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Actions" }),
            ((_b = settings2 == null ? void 0 : settings2.statistics) == null ? void 0 : _b.enabled) && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: onGoToStats || (() => window.open("/stats", "_self")), children: "Statistics View" }),
            enableMapView && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: onShowMap || (() => window.open("/map", "_blank")), children: "Map View" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: onShowTasks || (() => window.open("/tasks", "_blank")), children: "Tasks View" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: onShowSettings, children: "Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: onLogout, children: "Logout" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hamburger-section", style: { marginTop: "10px", paddingTop: "10px", borderTop: "1px solid var(--border-color)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "theme-toggle-button",
              onClick: () => toggleTheme(),
              title: "Toggle Theme",
              style: { background: "transparent", fontSize: "1.5em", cursor: "pointer", border: "none" },
              children: theme === "dark" ? "☀️" : "🌙"
            }
          ) })
        ] }) })
      ] })
    ] }),
    slideshowContent === "map" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1, position: "relative", width: "100%", overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapView, { isEmbedded: true, user, settings: settings2 }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      DashboardContent,
      {
        sectionsLayout,
        blocksMap,
        counts,
        allListsMap,
        handleTileClick,
        handleToggleCollapse,
        handleCloseModal,
        user,
        ignoreTemplateCards,
        ignoreNoDescCards,
        modalList
      }
    ),
    false,
    modalList && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardDetailsModal,
      {
        listId: modalList.listId,
        listName: modalList.listName,
        color: modalList.color,
        token: user.token,
        onClose: handleCloseModal,
        sectionsLayout,
        ignoreTemplateCards,
        ignoreNoDescCards,
        settings: settings2
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-footer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "map-footer-left", children: onStopSlideshow && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onStopSlideshow,
          style: { backgroundColor: "#d32f2f", color: "white", border: "none", padding: "5px 15px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" },
          children: "Stop Slideshow"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-footer-right", style: { display: "flex", gap: "15px", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "button-secondary", onClick: () => {
          setCountdown(effectiveSeconds);
          fetchData(true);
        }, children: [
          "Refresh ",
          formatDynamicCountdown(countdown)
        ] }),
        !onStopSlideshow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "desktop-only", style: { display: "flex", gap: "15px", alignItems: "center" }, children: [
          enableMapView && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: onShowMap || (() => window.open("/map", "_blank")), children: "Map View" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary dropdown-arrow", style: { marginLeft: "-1px", borderLeft: "none", padding: "0 5px" }, onClick: () => setShowMapDropdown(!showMapDropdown), children: "▼" })
            ] }),
            showMapDropdown && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "context-menu", style: { position: "absolute", bottom: "100%", left: 0, background: "var(--bg-primary)", border: "1px solid #ccc", borderRadius: "4px", padding: "10px", minWidth: "250px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "menu-item", style: { marginBottom: "8px", padding: "4px", cursor: "pointer", borderRadius: "4px" }, onClick: () => {
                window.open("/map", "_blank");
                setShowMapDropdown(false);
              }, children: "Open in New Tab" }),
              onStartSlideshow && !onStopSlideshow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "menu-item", style: { padding: "4px", cursor: "pointer", borderRadius: "4px" }, onClick: () => {
                onStartSlideshow();
                setShowMapDropdown(false);
              }, children: [
                "Start Slideshow (",
                (settings2 == null ? void 0 : settings2.slideshowInterval) || 10,
                "s)"
              ] })
            ] })
          ] }),
          (settings2 == null ? void 0 : settings2.enableTaskView) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: onShowTasks || (() => window.open("/tasks", "_blank")), children: "Tasks View" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary dropdown-arrow", style: { marginLeft: "-1px", borderLeft: "none", padding: "0 5px" }, onClick: () => setShowTaskDropdown(!showTaskDropdown), children: "▼" })
            ] }),
            showTaskDropdown && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "context-menu", style: { position: "absolute", bottom: "100%", left: 0, background: "var(--bg-primary)", border: "1px solid #ccc", borderRadius: "4px", padding: "5px", minWidth: "150px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "menu-item", onClick: () => {
              window.open("/tasks", "_blank");
              setShowTaskDropdown(false);
            }, children: "Open in New Tab" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: onShowSettings, children: "Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: onLogout, children: "Log Out" })
        ] })
      ] })
    ] }),
    (showTaskDropdown || showMapDropdown) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 99 }, onClick: () => {
      setShowTaskDropdown(false);
      setShowMapDropdown(false);
    } })
  ] });
};
const DashboardContent = ({
  sectionsLayout,
  blocksMap,
  counts,
  allListsMap,
  handleTileClick,
  handleToggleCollapse,
  handleCloseModal,
  user,
  ignoreTemplateCards,
  ignoreNoDescCards,
  modalList
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, overflowY: "auto", padding: "10px", paddingBottom: "80px", position: "relative", zIndex: 1 }, children: [
    sectionsLayout.map((block) => {
      var _a2;
      const blockTiles = block.listIds.map((listId) => {
        const tileData = counts.get(listId);
        if (!tileData) {
          const list = allListsMap.get(listId);
          if (list) {
            return { listId: list.id, name: list.name, count: "...", displayColor: "#ccc", firstCardName: "" };
          }
          return void 0;
        }
        return tileData;
      }).filter((item) => item !== void 0);
      const isCollapsed = ((_a2 = blocksMap.get(block.id)) == null ? void 0 : _a2.isCollapsed) || false;
      if (blockTiles.length === 0 && !isCollapsed) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard-block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block-header-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block-header", children: block.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "collapse-toggle", onClick: () => handleToggleCollapse(block.id), title: isCollapsed ? "Show Tiles" : "Hide Tiles", children: isCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.02 18.02 0 0 1 5.06-5.06" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4.22 4.22L12 12m5.07-5.07A10.07 10.07 0 0 1 23 12s-4 8-11 8c-1.85 0-3.61-.5-5.17-1.42" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "1", y1: "1", x2: "23", y2: "23" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "icon-eye", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8-11-8-11-8-11-8-11-8-11-8-11-8z" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "3" })
          ] }) })
        ] }),
        !isCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "dashboard-grid",
            style: {
              gridTemplateColumns: (() => {
                const count2 = blockTiles.length;
                const isDesktop = window.innerWidth > 768;
                if (isDesktop) {
                  return `repeat(${count2 < 6 ? count2 : "auto-fill, minmax(100px, 1fr)"}, 1fr)`;
                }
                if (count2 < 4) return `repeat(${count2}, 1fr)`;
                if (count2 === 5 || count2 === 6) return `repeat(3, 1fr)`;
                return `repeat(4, 1fr)`;
              })()
            },
            children: blockTiles.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard-tile", style: { backgroundColor: item.displayColor, color: "white" }, onClick: () => handleTileClick(item.listId, item.name, item.displayColor), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-count", children: item.count }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-name", children: item.name }),
              item.firstCardName && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-description card-description-text", title: item.firstCardName, children: item.firstCardName })
            ] }, item.listId))
          }
        )
      ] }, block.id);
    }),
    modalList && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardDetailsModal,
      {
        listId: modalList.listId,
        listName: modalList.listName,
        color: modalList.color,
        token: user.token,
        onClose: handleCloseModal,
        sectionsLayout,
        ignoreTemplateCards,
        ignoreNoDescCards,
        settings
      }
    )
  ] });
};
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e2 = new Event("vite:preloadError", {
      cancelable: true
    });
    e2.payload = err;
    window.dispatchEvent(e2);
    if (!e2.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
function _setPrototypeOf(t2, e2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, _setPrototypeOf(t2, e2);
}
function _inheritsLoose(t2, o) {
  t2.prototype = Object.create(o.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o);
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
    }
    return n2;
  }, _extends.apply(null, arguments);
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function toPrimitive(t2, r2) {
  if ("object" != _typeof(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i = e2.call(t2, r2);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function toPropertyKey(t2) {
  var i = toPrimitive(t2, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _defineProperty(e2, r2, t2) {
  return (r2 = toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString()
};
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore$1(reducer2, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore$1)(reducer2, preloadedState);
  }
  if (typeof reducer2 !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer2;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
function bindActionCreators$1(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error(formatProdErrorMessage(16));
  }
  var boundActionCreators = {};
  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a, b2) {
    return function() {
      return a(b2.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(formatProdErrorMessage(15));
      };
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}
var ReactReduxContext = /* @__PURE__ */ React.createContext(null);
function defaultNoopBatch(callback) {
  callback();
}
var batch = defaultNoopBatch;
var setBatch = function setBatch2(newBatch) {
  return batch = newBatch;
};
var getBatch = function getBatch2() {
  return batch;
};
function createListenerCollection() {
  var batch2 = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify2() {
      batch2(function() {
        var listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get2() {
      var listeners = [];
      var listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify: function notify() {
  },
  get: function get() {
    return [];
  }
};
function createSubscription(store, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  var subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}
var useIsomorphicLayoutEffect$1 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
function Provider(_ref) {
  var store = _ref.store, context = _ref.context, children = _ref.children;
  var contextValue = reactExports.useMemo(function() {
    var subscription = createSubscription(store);
    return {
      store,
      subscription
    };
  }, [store]);
  var previousState = reactExports.useMemo(function() {
    return store.getState();
  }, [store]);
  useIsomorphicLayoutEffect$1(function() {
    var subscription = contextValue.subscription;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return function() {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return /* @__PURE__ */ React.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
function _objectWithoutPropertiesLoose(r2, e2) {
  if (null == r2) return {};
  var t2 = {};
  for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
    if (-1 !== e2.indexOf(n2)) continue;
    t2[n2] = r2[n2];
  }
  return t2;
}
var reactIs$2 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = "function" === typeof Symbol && Symbol.for, c$1 = b$1 ? Symbol.for("react.element") : 60103, d$1 = b$1 ? Symbol.for("react.portal") : 60106, e$1 = b$1 ? Symbol.for("react.fragment") : 60107, f$1 = b$1 ? Symbol.for("react.strict_mode") : 60108, g$1 = b$1 ? Symbol.for("react.profiler") : 60114, h$1 = b$1 ? Symbol.for("react.provider") : 60109, k$1 = b$1 ? Symbol.for("react.context") : 60110, l$1 = b$1 ? Symbol.for("react.async_mode") : 60111, m$1 = b$1 ? Symbol.for("react.concurrent_mode") : 60111, n$1 = b$1 ? Symbol.for("react.forward_ref") : 60112, p$1 = b$1 ? Symbol.for("react.suspense") : 60113, q$1 = b$1 ? Symbol.for("react.suspense_list") : 60120, r$1 = b$1 ? Symbol.for("react.memo") : 60115, t = b$1 ? Symbol.for("react.lazy") : 60116, v$1 = b$1 ? Symbol.for("react.block") : 60121, w$1 = b$1 ? Symbol.for("react.fundamental") : 60117, x$1 = b$1 ? Symbol.for("react.responder") : 60118, y$1 = b$1 ? Symbol.for("react.scope") : 60119;
function z$1(a) {
  if ("object" === typeof a && null !== a) {
    var u4 = a.$$typeof;
    switch (u4) {
      case c$1:
        switch (a = a.type, a) {
          case l$1:
          case m$1:
          case e$1:
          case g$1:
          case f$1:
          case p$1:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k$1:
              case n$1:
              case t:
              case r$1:
              case h$1:
                return a;
              default:
                return u4;
            }
        }
      case d$1:
        return u4;
    }
  }
}
function A$1(a) {
  return z$1(a) === m$1;
}
reactIs_production_min$1.AsyncMode = l$1;
reactIs_production_min$1.ConcurrentMode = m$1;
reactIs_production_min$1.ContextConsumer = k$1;
reactIs_production_min$1.ContextProvider = h$1;
reactIs_production_min$1.Element = c$1;
reactIs_production_min$1.ForwardRef = n$1;
reactIs_production_min$1.Fragment = e$1;
reactIs_production_min$1.Lazy = t;
reactIs_production_min$1.Memo = r$1;
reactIs_production_min$1.Portal = d$1;
reactIs_production_min$1.Profiler = g$1;
reactIs_production_min$1.StrictMode = f$1;
reactIs_production_min$1.Suspense = p$1;
reactIs_production_min$1.isAsyncMode = function(a) {
  return A$1(a) || z$1(a) === l$1;
};
reactIs_production_min$1.isConcurrentMode = A$1;
reactIs_production_min$1.isContextConsumer = function(a) {
  return z$1(a) === k$1;
};
reactIs_production_min$1.isContextProvider = function(a) {
  return z$1(a) === h$1;
};
reactIs_production_min$1.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === c$1;
};
reactIs_production_min$1.isForwardRef = function(a) {
  return z$1(a) === n$1;
};
reactIs_production_min$1.isFragment = function(a) {
  return z$1(a) === e$1;
};
reactIs_production_min$1.isLazy = function(a) {
  return z$1(a) === t;
};
reactIs_production_min$1.isMemo = function(a) {
  return z$1(a) === r$1;
};
reactIs_production_min$1.isPortal = function(a) {
  return z$1(a) === d$1;
};
reactIs_production_min$1.isProfiler = function(a) {
  return z$1(a) === g$1;
};
reactIs_production_min$1.isStrictMode = function(a) {
  return z$1(a) === f$1;
};
reactIs_production_min$1.isSuspense = function(a) {
  return z$1(a) === p$1;
};
reactIs_production_min$1.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === e$1 || a === m$1 || a === g$1 || a === f$1 || a === p$1 || a === q$1 || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r$1 || a.$$typeof === h$1 || a.$$typeof === k$1 || a.$$typeof === n$1 || a.$$typeof === w$1 || a.$$typeof === x$1 || a.$$typeof === y$1 || a.$$typeof === v$1);
};
reactIs_production_min$1.typeOf = z$1;
{
  reactIs$2.exports = reactIs_production_min$1;
}
var reactIsExports$1 = reactIs$2.exports;
var reactIs$1 = reactIsExports$1;
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs$1.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
const hoistStatics = /* @__PURE__ */ getDefaultExportFromCjs(hoistNonReactStatics_cjs);
var reactIs = { exports: {} };
var reactIs_production_min = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = 60103, c = 60106, d = 60107, e = 60108, f = 60114, g = 60109, h = 60110, k = 60112, l = 60113, m = 60120, n = 60115, p = 60116, q = 60121, r = 60122, u3 = 60117, v = 60129, w = 60131;
if ("function" === typeof Symbol && Symbol.for) {
  var x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h = x("react.context");
  k = x("react.forward_ref");
  l = x("react.suspense");
  m = x("react.suspense_list");
  n = x("react.memo");
  p = x("react.lazy");
  q = x("react.block");
  r = x("react.server.block");
  u3 = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}
function y2(a) {
  if ("object" === typeof a && null !== a) {
    var t2 = a.$$typeof;
    switch (t2) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a;
              default:
                return t2;
            }
        }
      case c:
        return t2;
    }
  }
}
var z = g, A = b, B2 = k, C = d, D = p, E = n, F = c, G = f, H = e, I = l;
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = z;
reactIs_production_min.Element = A;
reactIs_production_min.ForwardRef = B2;
reactIs_production_min.Fragment = C;
reactIs_production_min.Lazy = D;
reactIs_production_min.Memo = E;
reactIs_production_min.Portal = F;
reactIs_production_min.Profiler = G;
reactIs_production_min.StrictMode = H;
reactIs_production_min.Suspense = I;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a) {
  return y2(a) === h;
};
reactIs_production_min.isContextProvider = function(a) {
  return y2(a) === g;
};
reactIs_production_min.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a) {
  return y2(a) === k;
};
reactIs_production_min.isFragment = function(a) {
  return y2(a) === d;
};
reactIs_production_min.isLazy = function(a) {
  return y2(a) === p;
};
reactIs_production_min.isMemo = function(a) {
  return y2(a) === n;
};
reactIs_production_min.isPortal = function(a) {
  return y2(a) === c;
};
reactIs_production_min.isProfiler = function(a) {
  return y2(a) === f;
};
reactIs_production_min.isStrictMode = function(a) {
  return y2(a) === e;
};
reactIs_production_min.isSuspense = function(a) {
  return y2(a) === l;
};
reactIs_production_min.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === v || a === e || a === l || a === m || a === w || "object" === typeof a && null !== a && (a.$$typeof === p || a.$$typeof === n || a.$$typeof === g || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u3 || a.$$typeof === q || a[0] === r) ? true : false;
};
reactIs_production_min.typeOf = y2;
{
  reactIs.exports = reactIs_production_min;
}
var reactIsExports = reactIs.exports;
var _excluded$2 = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"], _excluded2 = ["reactReduxForwardedRef"];
var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];
function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect$1(function() {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false;
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  if (!shouldHandleStateChanges) return;
  var didUnsubscribe = false;
  var lastThrownError = null;
  var checkForUpdates = function checkForUpdates2() {
    if (didUnsubscribe) {
      return;
    }
    var latestStoreState = store.getState();
    var newChildProps, error;
    try {
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e2) {
      error = e2;
      lastThrownError = e2;
    }
    if (!error) {
      lastThrownError = null;
    }
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true;
      forceComponentUpdateDispatch({
        type: "STORE_UPDATED",
        payload: {
          error
        }
      });
    }
  };
  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe();
  checkForUpdates();
  var unsubscribeWrapper = function unsubscribeWrapper2() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;
    if (lastThrownError) {
      throw lastThrownError;
    }
  };
  return unsubscribeWrapper;
}
var initStateUpdates = function initStateUpdates2() {
  return [null, 0];
};
function connectAdvanced(selectorFactory, _ref) {
  if (_ref === void 0) {
    _ref = {};
  }
  var _ref2 = _ref, _ref2$getDisplayName = _ref2.getDisplayName, getDisplayName = _ref2$getDisplayName === void 0 ? function(name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName, _ref2$methodName = _ref2.methodName, methodName = _ref2$methodName === void 0 ? "connectAdvanced" : _ref2$methodName, _ref2$renderCountProp = _ref2.renderCountProp, renderCountProp = _ref2$renderCountProp === void 0 ? void 0 : _ref2$renderCountProp, _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges, shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta, _ref2$storeKey = _ref2.storeKey, storeKey = _ref2$storeKey === void 0 ? "store" : _ref2$storeKey;
  _ref2.withRef;
  var _ref2$forwardRef = _ref2.forwardRef, forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef, _ref2$context = _ref2.context, context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context, connectOptions = _objectWithoutPropertiesLoose(_ref2, _excluded$2);
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    var displayName = getDisplayName(wrappedComponentName);
    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName,
      methodName,
      renderCountProp,
      shouldHandleStateChanges,
      storeKey,
      displayName,
      wrappedComponentName,
      WrappedComponent
    });
    var pure = connectOptions.pure;
    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    }
    var usePureOnlyMemo = pure ? reactExports.useMemo : function(callback) {
      return callback();
    };
    function ConnectFunction(props) {
      var _useMemo = reactExports.useMemo(function() {
        var reactReduxForwardedRef2 = props.reactReduxForwardedRef, wrapperProps2 = _objectWithoutPropertiesLoose(props, _excluded2);
        return [props.context, reactReduxForwardedRef2, wrapperProps2];
      }, [props]), propsContext = _useMemo[0], reactReduxForwardedRef = _useMemo[1], wrapperProps = _useMemo[2];
      var ContextToUse = reactExports.useMemo(function() {
        return propsContext && propsContext.Consumer && reactIsExports.isContextConsumer(/* @__PURE__ */ React.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]);
      var contextValue = reactExports.useContext(ContextToUse);
      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      Boolean(contextValue) && Boolean(contextValue.store);
      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = reactExports.useMemo(function() {
        return createChildSelector(store);
      }, [store]);
      var _useMemo2 = reactExports.useMemo(function() {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY;
        var subscription2 = createSubscription(store, didStoreComeFromProps ? null : contextValue.subscription);
        var notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
        return [subscription2, notifyNestedSubs2];
      }, [store, didStoreComeFromProps, contextValue]), subscription = _useMemo2[0], notifyNestedSubs = _useMemo2[1];
      var overriddenContextValue = reactExports.useMemo(function() {
        if (didStoreComeFromProps) {
          return contextValue;
        }
        return _extends({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]);
      var _useReducer = reactExports.useReducer(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates), _useReducer$ = _useReducer[0], previousStateUpdateResult = _useReducer$[0], forceComponentUpdateDispatch = _useReducer[1];
      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      }
      var lastChildProps = reactExports.useRef();
      var lastWrapperProps = reactExports.useRef(wrapperProps);
      var childPropsFromStoreUpdate = reactExports.useRef();
      var renderIsScheduled = reactExports.useRef(false);
      var actualChildProps = usePureOnlyMemo(function() {
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        }
        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]);
      var renderedWrappedComponent = reactExports.useMemo(function() {
        return /* @__PURE__ */ React.createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]);
      var renderedChild = reactExports.useMemo(function() {
        if (shouldHandleStateChanges) {
          return /* @__PURE__ */ React.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }
        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }
    var Connect = pure ? React.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;
    if (forwardRef) {
      var forwarded = React.forwardRef(function forwardConnectRef(props, ref) {
        return /* @__PURE__ */ React.createElement(Connect, _extends({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoistStatics(forwarded, WrappedComponent);
    }
    return hoistStatics(Connect, WrappedComponent);
  };
}
function is(x, y3) {
  if (x === y3) {
    return x !== 0 || y3 !== 0 || 1 / x === 1 / y3;
  } else {
    return x !== x && y3 !== y3;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;
  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}
function bindActionCreators(actionCreators, dispatch) {
  var boundActionCreators = {};
  var _loop = function _loop2(key2) {
    var actionCreator = actionCreators[key2];
    if (typeof actionCreator === "function") {
      boundActionCreators[key2] = function() {
        return dispatch(actionCreator.apply(void 0, arguments));
      };
    }
  };
  for (var key in actionCreators) {
    _loop(key);
  }
  return boundActionCreators;
}
function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);
    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== void 0 ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    _ref.displayName;
    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);
      if (typeof props === "function") {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }
      return props;
    };
    return proxy;
  };
}
function whenMapDispatchToPropsIsFunction(mapDispatchToProps2) {
  return typeof mapDispatchToProps2 === "function" ? wrapMapToPropsFunc(mapDispatchToProps2) : void 0;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps2) {
  return !mapDispatchToProps2 ? wrapMapToPropsConstant(function(dispatch) {
    return {
      dispatch
    };
  }) : void 0;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps2) {
  return mapDispatchToProps2 && typeof mapDispatchToProps2 === "object" ? wrapMapToPropsConstant(function(dispatch) {
    return bindActionCreators(mapDispatchToProps2, dispatch);
  }) : void 0;
}
const defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];
function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === "function" ? wrapMapToPropsFunc(mapStateToProps) : void 0;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function() {
    return {};
  }) : void 0;
}
const defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    _ref.displayName;
    var pure = _ref.pure, areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
      }
      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : void 0;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function() {
    return defaultMergeProps;
  } : void 0;
}
const defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
var _excluded$1 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps2(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual, areOwnPropsEqual = _ref.areOwnPropsEqual, areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;
  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps2.dependsOnOwnProps) dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps2.dependsOnOwnProps) dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps, initMapDispatchToProps = _ref2.initMapDispatchToProps, initMergeProps = _ref2.initMergeProps, options = _objectWithoutPropertiesLoose(_ref2, _excluded$1);
  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps2 = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);
  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch, options);
}
var _excluded = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }
  return function(dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}
function strictEqual(a, b2) {
  return a === b2;
}
function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$connectHOC = _ref.connectHOC, connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC, _ref$mapStateToPropsF = _ref.mapStateToPropsFactories, mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF, _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories, mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro, _ref$mergePropsFactor = _ref.mergePropsFactories, mergePropsFactories = _ref$mergePropsFactor === void 0 ? defaultMergePropsFactories : _ref$mergePropsFactor, _ref$selectorFactory = _ref.selectorFactory, selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;
  return function connect2(mapStateToProps, mapDispatchToProps2, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }
    var _ref3 = _ref2, _ref3$pure = _ref3.pure, pure = _ref3$pure === void 0 ? true : _ref3$pure, _ref3$areStatesEqual = _ref3.areStatesEqual, areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual, _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual, areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua, _ref3$areStatePropsEq = _ref3.areStatePropsEqual, areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq, _ref3$areMergedPropsE = _ref3.areMergedPropsEqual, areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE, extraOptions = _objectWithoutPropertiesLoose(_ref3, _excluded);
    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, "mapStateToProps");
    var initMapDispatchToProps = match(mapDispatchToProps2, mapDispatchToPropsFactories, "mapDispatchToProps");
    var initMergeProps = match(mergeProps, mergePropsFactories, "mergeProps");
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: "connect",
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps,
      initMapDispatchToProps,
      initMergeProps,
      pure,
      areStatesEqual,
      areOwnPropsEqual,
      areStatePropsEqual,
      areMergedPropsEqual
    }, extraOptions));
  };
}
const connect = /* @__PURE__ */ createConnect();
setBatch(reactDomExports.unstable_batchedUpdates);
function areInputsEqual$1(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }
  return true;
}
function useMemoOne(getResult, inputs) {
  var initial = reactExports.useState(function() {
    return {
      inputs,
      result: getResult()
    };
  })[0];
  var isFirstRun = reactExports.useRef(true);
  var committed = reactExports.useRef(initial);
  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual$1(inputs, committed.current.inputs));
  var cache = useCache ? committed.current : {
    inputs,
    result: getResult()
  };
  reactExports.useEffect(function() {
    isFirstRun.current = false;
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function() {
    return callback;
  }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;
var prefix$2 = "Invariant failed";
function invariant$1(condition, message) {
  {
    throw new Error(prefix$2);
  }
}
var getRect = function getRect2(_ref) {
  var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top,
    right,
    bottom,
    left,
    width,
    height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand2(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink2(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};
var shift = function shift2(target, shiftBy) {
  return {
    top: target.top + shiftBy.y,
    left: target.left + shiftBy.x,
    bottom: target.bottom + shiftBy.y,
    right: target.right + shiftBy.x
  };
};
var noSpacing$1 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox2(_ref2) {
  var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing$1 : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing$1 : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing$1 : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox,
    borderBox: getRect(borderBox),
    paddingBox,
    contentBox,
    margin,
    border,
    padding
  };
};
var parse = function parse2(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);
  if (suffix !== "px") {
    return 0;
  }
  var result = Number(value);
  !!isNaN(result) ? invariant$1() : void 0;
  return result;
};
var getWindowScroll$1 = function getWindowScroll2() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
var offset = function offset2(original, change) {
  var borderBox = original.borderBox, border = original.border, margin = original.margin, padding = original.padding;
  var shifted = shift(borderBox, change);
  return createBox({
    borderBox: shifted,
    border,
    margin,
    padding
  });
};
var withScroll = function withScroll2(original, scroll3) {
  if (scroll3 === void 0) {
    scroll3 = getWindowScroll$1();
  }
  return offset(original, scroll3);
};
var calculateBox = function calculateBox2(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };
  return createBox({
    borderBox,
    margin,
    padding,
    border
  });
};
var getBox = function getBox2(el2) {
  var borderBox = el2.getBoundingClientRect();
  var styles = window.getComputedStyle(el2);
  return calculateBox(borderBox, styles);
};
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual$2(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual$2(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual4) {
  if (isEqual4 === void 0) {
    isEqual4 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual4(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var rafSchd = function rafSchd2(fn) {
  var lastArgs = [];
  var frameId = null;
  var wrapperFn = function wrapperFn2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    lastArgs = args;
    if (frameId) {
      return;
    }
    frameId = requestAnimationFrame(function() {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };
  wrapperFn.cancel = function() {
    if (!frameId) {
      return;
    }
    cancelAnimationFrame(frameId);
    frameId = null;
  };
  return wrapperFn;
};
function log(type, message) {
  {
    return;
  }
}
log.bind(null, "warn");
log.bind(null, "error");
function noop() {
}
function getOptions(shared2, fromBinding) {
  return _extends({}, shared2, {}, fromBinding);
}
function bindEvents(el2, bindings, sharedOptions) {
  var unbindings = bindings.map(function(binding) {
    var options = getOptions(sharedOptions, binding.options);
    el2.addEventListener(binding.eventName, binding.fn, options);
    return function unbind() {
      el2.removeEventListener(binding.eventName, binding.fn, options);
    };
  });
  return function unbindAll() {
    unbindings.forEach(function(unbind) {
      unbind();
    });
  };
}
var prefix = "Invariant failed";
function RbdInvariant(message) {
  this.message = message;
}
RbdInvariant.prototype.toString = function toString() {
  return this.message;
};
function invariant(condition, message) {
  {
    throw new RbdInvariant(prefix);
  }
}
var ErrorBoundary = function(_React$Component) {
  _inheritsLoose(ErrorBoundary2, _React$Component);
  function ErrorBoundary2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.callbacks = null;
    _this.unbind = noop;
    _this.onWindowError = function(event) {
      var callbacks = _this.getCallbacks();
      if (callbacks.isDragging()) {
        callbacks.tryAbort();
      }
      var err = event.error;
      if (err instanceof RbdInvariant) {
        event.preventDefault();
      }
    };
    _this.getCallbacks = function() {
      if (!_this.callbacks) {
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      }
      return _this.callbacks;
    };
    _this.setCallbacks = function(callbacks) {
      _this.callbacks = callbacks;
    };
    return _this;
  }
  var _proto = ErrorBoundary2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.unbind = bindEvents(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  };
  _proto.componentDidCatch = function componentDidCatch(err) {
    if (err instanceof RbdInvariant) {
      this.setState({});
      return;
    }
    throw err;
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unbind();
  };
  _proto.render = function render() {
    return this.props.children(this.setCallbacks);
  };
  return ErrorBoundary2;
}(React.Component);
var dragHandleUsageInstructions = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n";
var position = function position2(index) {
  return index + 1;
};
var onDragStart = function onDragStart2(start3) {
  return "\n  You have lifted an item in position " + position(start3.source.index) + "\n";
};
var withLocation = function withLocation2(source, destination) {
  var isInHomeList = source.droppableId === destination.droppableId;
  var startPosition = position(source.index);
  var endPosition = position(destination.index);
  if (isInHomeList) {
    return "\n      You have moved the item from position " + startPosition + "\n      to position " + endPosition + "\n    ";
  }
  return "\n    You have moved the item from position " + startPosition + "\n    in list " + source.droppableId + "\n    to list " + destination.droppableId + "\n    in position " + endPosition + "\n  ";
};
var withCombine = function withCombine2(id2, source, combine2) {
  var inHomeList = source.droppableId === combine2.droppableId;
  if (inHomeList) {
    return "\n      The item " + id2 + "\n      has been combined with " + combine2.draggableId;
  }
  return "\n      The item " + id2 + "\n      in list " + source.droppableId + "\n      has been combined with " + combine2.draggableId + "\n      in list " + combine2.droppableId + "\n    ";
};
var onDragUpdate = function onDragUpdate2(update2) {
  var location = update2.destination;
  if (location) {
    return withLocation(update2.source, location);
  }
  var combine2 = update2.combine;
  if (combine2) {
    return withCombine(update2.draggableId, update2.source, combine2);
  }
  return "You are over an area that cannot be dropped on";
};
var returnedToStart = function returnedToStart2(source) {
  return "\n  The item has returned to its starting position\n  of " + position(source.index) + "\n";
};
var onDragEnd = function onDragEnd2(result) {
  if (result.reason === "CANCEL") {
    return "\n      Movement cancelled.\n      " + returnedToStart(result.source) + "\n    ";
  }
  var location = result.destination;
  var combine2 = result.combine;
  if (location) {
    return "\n      You have dropped the item.\n      " + withLocation(result.source, location) + "\n    ";
  }
  if (combine2) {
    return "\n      You have dropped the item.\n      " + withCombine(result.draggableId, result.source, combine2) + "\n    ";
  }
  return "\n    The item has been dropped while not over a drop area.\n    " + returnedToStart(result.source) + "\n  ";
};
var preset = {
  dragHandleUsageInstructions,
  onDragStart,
  onDragUpdate,
  onDragEnd
};
var origin = {
  x: 0,
  y: 0
};
var add = function add2(point1, point2) {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
};
var subtract = function subtract2(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
};
var isEqual = function isEqual2(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
var negate = function negate2(point) {
  return {
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  };
};
var patch = function patch2(line, value, otherValue) {
  var _ref;
  if (otherValue === void 0) {
    otherValue = 0;
  }
  return _ref = {}, _ref[line] = value, _ref[line === "x" ? "y" : "x"] = otherValue, _ref;
};
var distance = function distance2(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var closest = function closest2(target, points) {
  return Math.min.apply(Math, points.map(function(point) {
    return distance(target, point);
  }));
};
var apply = function apply2(fn) {
  return function(point) {
    return {
      x: fn(point.x),
      y: fn(point.y)
    };
  };
};
var executeClip = function(frame, subject) {
  var result = getRect({
    top: Math.max(subject.top, frame.top),
    right: Math.min(subject.right, frame.right),
    bottom: Math.min(subject.bottom, frame.bottom),
    left: Math.max(subject.left, frame.left)
  });
  if (result.width <= 0 || result.height <= 0) {
    return null;
  }
  return result;
};
var offsetByPosition = function offsetByPosition2(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};
var getCorners = function getCorners2(spacing) {
  return [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var scroll = function scroll2(target, frame) {
  if (!frame) {
    return target;
  }
  return offsetByPosition(target, frame.scroll.diff.displacement);
};
var increase = function increase2(target, axis, withPlaceholder) {
  if (withPlaceholder && withPlaceholder.increasedBy) {
    var _extends2;
    return _extends({}, target, (_extends2 = {}, _extends2[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends2));
  }
  return target;
};
var clip = function clip2(target, frame) {
  if (frame && frame.shouldClipSubject) {
    return executeClip(frame.pageMarginBox, target);
  }
  return getRect(target);
};
var getSubject = function(_ref) {
  var page = _ref.page, withPlaceholder = _ref.withPlaceholder, axis = _ref.axis, frame = _ref.frame;
  var scrolled = scroll(page.marginBox, frame);
  var increased = increase(scrolled, axis, withPlaceholder);
  var clipped = clip(increased, frame);
  return {
    page,
    withPlaceholder,
    active: clipped
  };
};
var scrollDroppable = function(droppable2, newScroll) {
  !droppable2.frame ? invariant() : void 0;
  var scrollable = droppable2.frame;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);
  var frame = _extends({}, scrollable, {
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  });
  var subject = getSubject({
    page: droppable2.subject.page,
    withPlaceholder: droppable2.subject.withPlaceholder,
    axis: droppable2.axis,
    frame
  });
  var result = _extends({}, droppable2, {
    frame,
    subject
  });
  return result;
};
function values(map) {
  if (Object.values) {
    return Object.values(map);
  }
  return Object.keys(map).map(function(key) {
    return map[key];
  });
}
function findIndex(list, predicate) {
  if (list.findIndex) {
    return list.findIndex(predicate);
  }
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return i;
    }
  }
  return -1;
}
function find(list, predicate) {
  if (list.find) {
    return list.find(predicate);
  }
  var index = findIndex(list, predicate);
  if (index !== -1) {
    return list[index];
  }
  return void 0;
}
function toArray(list) {
  return Array.prototype.slice.call(list);
}
var toDroppableMap = memoizeOne(function(droppables) {
  return droppables.reduce(function(previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDraggableMap = memoizeOne(function(draggables) {
  return draggables.reduce(function(previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDroppableList = memoizeOne(function(droppables) {
  return values(droppables);
});
var toDraggableList = memoizeOne(function(draggables) {
  return values(draggables);
});
var getDraggablesInsideDroppable = memoizeOne(function(droppableId, draggables) {
  var result = toDraggableList(draggables).filter(function(draggable2) {
    return droppableId === draggable2.descriptor.droppableId;
  }).sort(function(a, b2) {
    return a.descriptor.index - b2.descriptor.index;
  });
  return result;
});
function tryGetDestination(impact) {
  if (impact.at && impact.at.type === "REORDER") {
    return impact.at.destination;
  }
  return null;
}
function tryGetCombine(impact) {
  if (impact.at && impact.at.type === "COMBINE") {
    return impact.at.combine;
  }
  return null;
}
var removeDraggableFromList = memoizeOne(function(remove, list) {
  return list.filter(function(item) {
    return item.descriptor.id !== remove.descriptor.id;
  });
});
var moveToNextCombine = function(_ref) {
  var isMovingForward = _ref.isMovingForward, draggable2 = _ref.draggable, destination = _ref.destination, insideDestination = _ref.insideDestination, previousImpact = _ref.previousImpact;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var location = tryGetDestination(previousImpact);
  if (!location) {
    return null;
  }
  function getImpact(target) {
    var at = {
      type: "COMBINE",
      combine: {
        draggableId: target,
        droppableId: destination.descriptor.id
      }
    };
    return _extends({}, previousImpact, {
      at
    });
  }
  var all = previousImpact.displaced.all;
  var closestId = all.length ? all[0] : null;
  if (isMovingForward) {
    return closestId ? getImpact(closestId) : null;
  }
  var withoutDraggable = removeDraggableFromList(draggable2, insideDestination);
  if (!closestId) {
    if (!withoutDraggable.length) {
      return null;
    }
    var last = withoutDraggable[withoutDraggable.length - 1];
    return getImpact(last.descriptor.id);
  }
  var indexOfClosest = findIndex(withoutDraggable, function(d2) {
    return d2.descriptor.id === closestId;
  });
  !(indexOfClosest !== -1) ? invariant() : void 0;
  var proposedIndex = indexOfClosest - 1;
  if (proposedIndex < 0) {
    return null;
  }
  var before = withoutDraggable[proposedIndex];
  return getImpact(before.descriptor.id);
};
var isHomeOf = function(draggable2, destination) {
  return draggable2.descriptor.droppableId === destination.descriptor.id;
};
var noDisplacedBy = {
  point: origin,
  value: 0
};
var emptyGroups = {
  invisible: {},
  visible: {},
  all: []
};
var noImpact = {
  displaced: emptyGroups,
  displacedBy: noDisplacedBy,
  at: null
};
var isWithin = function(lowerBound, upperBound) {
  return function(value) {
    return lowerBound <= value && value <= upperBound;
  };
};
var isPartiallyVisibleThroughFrame = function(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function(subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    if (isContained) {
      return true;
    }
    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;
    if (isPartiallyContained) {
      return true;
    }
    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;
    if (isTargetBiggerThanFrame) {
      return true;
    }
    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
};
var isTotallyVisibleThroughFrame = function(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function(subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
};
var vertical = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
};
var horizontal = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var isTotallyVisibleThroughFrameOnAxis = function(axis) {
  return function(frame) {
    var isWithinVertical = isWithin(frame.top, frame.bottom);
    var isWithinHorizontal = isWithin(frame.left, frame.right);
    return function(subject) {
      if (axis === vertical) {
        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
      }
      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    };
  };
};
var getDroppableDisplaced = function getDroppableDisplaced2(target, destination) {
  var displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
  return offsetByPosition(target, displacement);
};
var isVisibleInDroppable = function isVisibleInDroppable2(target, destination, isVisibleThroughFrameFn) {
  if (!destination.subject.active) {
    return false;
  }
  return isVisibleThroughFrameFn(destination.subject.active)(target);
};
var isVisibleInViewport = function isVisibleInViewport2(target, viewport, isVisibleThroughFrameFn) {
  return isVisibleThroughFrameFn(viewport)(target);
};
var isVisible = function isVisible2(_ref) {
  var toBeDisplaced = _ref.target, destination = _ref.destination, viewport = _ref.viewport, withDroppableDisplacement2 = _ref.withDroppableDisplacement, isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
  var displacedTarget = withDroppableDisplacement2 ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};
var isPartiallyVisible = function isPartiallyVisible2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  }));
};
var isTotallyVisible = function isTotallyVisible2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  }));
};
var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
  }));
};
var getShouldAnimate = function getShouldAnimate2(id2, last, forceShouldAnimate) {
  if (typeof forceShouldAnimate === "boolean") {
    return forceShouldAnimate;
  }
  if (!last) {
    return true;
  }
  var invisible = last.invisible, visible = last.visible;
  if (invisible[id2]) {
    return false;
  }
  var previous = visible[id2];
  return previous ? previous.shouldAnimate : true;
};
function getTarget(draggable2, displacedBy) {
  var marginBox = draggable2.page.marginBox;
  var expandBy = {
    top: displacedBy.point.y,
    right: 0,
    bottom: 0,
    left: displacedBy.point.x
  };
  return getRect(expand(marginBox, expandBy));
}
function getDisplacementGroups(_ref) {
  var afterDragging = _ref.afterDragging, destination = _ref.destination, displacedBy = _ref.displacedBy, viewport = _ref.viewport, forceShouldAnimate = _ref.forceShouldAnimate, last = _ref.last;
  return afterDragging.reduce(function process2(groups, draggable2) {
    var target = getTarget(draggable2, displacedBy);
    var id2 = draggable2.descriptor.id;
    groups.all.push(id2);
    var isVisible3 = isPartiallyVisible({
      target,
      destination,
      viewport,
      withDroppableDisplacement: true
    });
    if (!isVisible3) {
      groups.invisible[draggable2.descriptor.id] = true;
      return groups;
    }
    var shouldAnimate = getShouldAnimate(id2, last, forceShouldAnimate);
    var displacement = {
      draggableId: id2,
      shouldAnimate
    };
    groups.visible[id2] = displacement;
    return groups;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function getIndexOfLastItem(draggables, options) {
  if (!draggables.length) {
    return 0;
  }
  var indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
  return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
}
function goAtEnd(_ref) {
  var insideDestination = _ref.insideDestination, inHomeList = _ref.inHomeList, displacedBy = _ref.displacedBy, destination = _ref.destination;
  var newIndex = getIndexOfLastItem(insideDestination, {
    inHomeList
  });
  return {
    displaced: emptyGroups,
    displacedBy,
    at: {
      type: "REORDER",
      destination: {
        droppableId: destination.descriptor.id,
        index: newIndex
      }
    }
  };
}
function calculateReorderImpact(_ref2) {
  var draggable2 = _ref2.draggable, insideDestination = _ref2.insideDestination, destination = _ref2.destination, viewport = _ref2.viewport, displacedBy = _ref2.displacedBy, last = _ref2.last, index = _ref2.index, forceShouldAnimate = _ref2.forceShouldAnimate;
  var inHomeList = isHomeOf(draggable2, destination);
  if (index == null) {
    return goAtEnd({
      insideDestination,
      inHomeList,
      displacedBy,
      destination
    });
  }
  var match2 = find(insideDestination, function(item) {
    return item.descriptor.index === index;
  });
  if (!match2) {
    return goAtEnd({
      insideDestination,
      inHomeList,
      displacedBy,
      destination
    });
  }
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var sliceFrom = insideDestination.indexOf(match2);
  var impacted = withoutDragging.slice(sliceFrom);
  var displaced = getDisplacementGroups({
    afterDragging: impacted,
    destination,
    displacedBy,
    last,
    viewport: viewport.frame,
    forceShouldAnimate
  });
  return {
    displaced,
    displacedBy,
    at: {
      type: "REORDER",
      destination: {
        droppableId: destination.descriptor.id,
        index
      }
    }
  };
}
function didStartAfterCritical(draggableId, afterCritical) {
  return Boolean(afterCritical.effected[draggableId]);
}
var fromCombine = function(_ref) {
  var isMovingForward = _ref.isMovingForward, destination = _ref.destination, draggables = _ref.draggables, combine2 = _ref.combine, afterCritical = _ref.afterCritical;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var combineId = combine2.draggableId;
  var combineWith = draggables[combineId];
  var combineWithIndex = combineWith.descriptor.index;
  var didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);
  if (didCombineWithStartAfterCritical) {
    if (isMovingForward) {
      return combineWithIndex;
    }
    return combineWithIndex - 1;
  }
  if (isMovingForward) {
    return combineWithIndex + 1;
  }
  return combineWithIndex;
};
var fromReorder = function(_ref) {
  var isMovingForward = _ref.isMovingForward, isInHomeList = _ref.isInHomeList, insideDestination = _ref.insideDestination, location = _ref.location;
  if (!insideDestination.length) {
    return null;
  }
  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  var firstIndex = insideDestination[0].descriptor.index;
  var lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
  var upperBound = isInHomeList ? lastIndex : lastIndex + 1;
  if (proposedIndex < firstIndex) {
    return null;
  }
  if (proposedIndex > upperBound) {
    return null;
  }
  return proposedIndex;
};
var moveToNextIndex = function(_ref) {
  var isMovingForward = _ref.isMovingForward, isInHomeList = _ref.isInHomeList, draggable2 = _ref.draggable, draggables = _ref.draggables, destination = _ref.destination, insideDestination = _ref.insideDestination, previousImpact = _ref.previousImpact, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var wasAt = previousImpact.at;
  !wasAt ? invariant() : void 0;
  if (wasAt.type === "REORDER") {
    var _newIndex = fromReorder({
      isMovingForward,
      isInHomeList,
      location: wasAt.destination,
      insideDestination
    });
    if (_newIndex == null) {
      return null;
    }
    return calculateReorderImpact({
      draggable: draggable2,
      insideDestination,
      destination,
      viewport,
      last: previousImpact.displaced,
      displacedBy: previousImpact.displacedBy,
      index: _newIndex
    });
  }
  var newIndex = fromCombine({
    isMovingForward,
    destination,
    displaced: previousImpact.displaced,
    draggables,
    combine: wasAt.combine,
    afterCritical
  });
  if (newIndex == null) {
    return null;
  }
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    last: previousImpact.displaced,
    displacedBy: previousImpact.displacedBy,
    index: newIndex
  });
};
var getCombinedItemDisplacement = function(_ref) {
  var displaced = _ref.displaced, afterCritical = _ref.afterCritical, combineWith = _ref.combineWith, displacedBy = _ref.displacedBy;
  var isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);
  if (didStartAfterCritical(combineWith, afterCritical)) {
    return isDisplaced ? origin : negate(displacedBy.point);
  }
  return isDisplaced ? displacedBy.point : origin;
};
var whenCombining = function(_ref) {
  var afterCritical = _ref.afterCritical, impact = _ref.impact, draggables = _ref.draggables;
  var combine2 = tryGetCombine(impact);
  !combine2 ? invariant() : void 0;
  var combineWith = combine2.draggableId;
  var center = draggables[combineWith].page.borderBox.center;
  var displaceBy = getCombinedItemDisplacement({
    displaced: impact.displaced,
    afterCritical,
    combineWith,
    displacedBy: impact.displacedBy
  });
  return add(center, displaceBy);
};
var distanceFromStartToBorderBoxCenter = function distanceFromStartToBorderBoxCenter2(axis, box) {
  return box.margin[axis.start] + box.borderBox[axis.size] / 2;
};
var distanceFromEndToBorderBoxCenter = function distanceFromEndToBorderBoxCenter2(axis, box) {
  return box.margin[axis.end] + box.borderBox[axis.size] / 2;
};
var getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter2(axis, target, isMoving) {
  return target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
};
var goAfter = function goAfter2(_ref) {
  var axis = _ref.axis, moveRelativeTo = _ref.moveRelativeTo, isMoving = _ref.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goBefore = function goBefore2(_ref2) {
  var axis = _ref2.axis, moveRelativeTo = _ref2.moveRelativeTo, isMoving = _ref2.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goIntoStart = function goIntoStart2(_ref3) {
  var axis = _ref3.axis, moveInto = _ref3.moveInto, isMoving = _ref3.isMoving;
  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
};
var whenReordering = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, draggables = _ref.draggables, droppable2 = _ref.droppable, afterCritical = _ref.afterCritical;
  var insideDestination = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
  var draggablePage = draggable2.page;
  var axis = droppable2.axis;
  if (!insideDestination.length) {
    return goIntoStart({
      axis,
      moveInto: droppable2.page,
      isMoving: draggablePage
    });
  }
  var displaced = impact.displaced, displacedBy = impact.displacedBy;
  var closestAfter = displaced.all[0];
  if (closestAfter) {
    var closest3 = draggables[closestAfter];
    if (didStartAfterCritical(closestAfter, afterCritical)) {
      return goBefore({
        axis,
        moveRelativeTo: closest3.page,
        isMoving: draggablePage
      });
    }
    var withDisplacement = offset(closest3.page, displacedBy.point);
    return goBefore({
      axis,
      moveRelativeTo: withDisplacement,
      isMoving: draggablePage
    });
  }
  var last = insideDestination[insideDestination.length - 1];
  if (last.descriptor.id === draggable2.descriptor.id) {
    return draggablePage.borderBox.center;
  }
  if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
    var page = offset(last.page, negate(afterCritical.displacedBy.point));
    return goAfter({
      axis,
      moveRelativeTo: page,
      isMoving: draggablePage
    });
  }
  return goAfter({
    axis,
    moveRelativeTo: last.page,
    isMoving: draggablePage
  });
};
var withDroppableDisplacement = function(droppable2, point) {
  var frame = droppable2.frame;
  if (!frame) {
    return point;
  }
  return add(point, frame.scroll.diff.displacement);
};
var getResultWithoutDroppableDisplacement = function getResultWithoutDroppableDisplacement2(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, droppable2 = _ref.droppable, draggables = _ref.draggables, afterCritical = _ref.afterCritical;
  var original = draggable2.page.borderBox.center;
  var at = impact.at;
  if (!droppable2) {
    return original;
  }
  if (!at) {
    return original;
  }
  if (at.type === "REORDER") {
    return whenReordering({
      impact,
      draggable: draggable2,
      draggables,
      droppable: droppable2,
      afterCritical
    });
  }
  return whenCombining({
    impact,
    draggables,
    afterCritical
  });
};
var getPageBorderBoxCenterFromImpact = function(args) {
  var withoutDisplacement = getResultWithoutDroppableDisplacement(args);
  var droppable2 = args.droppable;
  var withDisplacement = droppable2 ? withDroppableDisplacement(droppable2, withoutDisplacement) : withoutDisplacement;
  return withDisplacement;
};
var scrollViewport = function(viewport, newScroll) {
  var diff = subtract(newScroll, viewport.scroll.initial);
  var displacement = negate(diff);
  var frame = getRect({
    top: newScroll.y,
    bottom: newScroll.y + viewport.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport.frame.width
  });
  var updated = {
    frame,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement
      }
    }
  };
  return updated;
};
function getDraggables(ids, draggables) {
  return ids.map(function(id2) {
    return draggables[id2];
  });
}
function tryGetVisible(id2, groups) {
  for (var i = 0; i < groups.length; i++) {
    var displacement = groups[i].visible[id2];
    if (displacement) {
      return displacement;
    }
  }
  return null;
}
var speculativelyIncrease = function(_ref) {
  var impact = _ref.impact, viewport = _ref.viewport, destination = _ref.destination, draggables = _ref.draggables, maxScrollChange = _ref.maxScrollChange;
  var scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
  var last = impact.displaced;
  var withViewportScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination,
    displacedBy: impact.displacedBy,
    viewport: scrolledViewport.frame,
    last,
    forceShouldAnimate: false
  });
  var withDroppableScroll2 = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: scrolledDroppable,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    last,
    forceShouldAnimate: false
  });
  var invisible = {};
  var visible = {};
  var groups = [last, withViewportScroll, withDroppableScroll2];
  last.all.forEach(function(id2) {
    var displacement = tryGetVisible(id2, groups);
    if (displacement) {
      visible[id2] = displacement;
      return;
    }
    invisible[id2] = true;
  });
  var newImpact = _extends({}, impact, {
    displaced: {
      all: last.all,
      invisible,
      visible
    }
  });
  return newImpact;
};
var withViewportDisplacement = function(viewport, point) {
  return add(viewport.scroll.diff.displacement, point);
};
var getClientFromPageBorderBoxCenter = function(_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter, draggable2 = _ref.draggable, viewport = _ref.viewport;
  var withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
  var offset22 = subtract(withoutPageScrollChange, draggable2.page.borderBox.center);
  return add(draggable2.client.borderBox.center, offset22);
};
var isTotallyVisibleInNewLocation = function(_ref) {
  var draggable2 = _ref.draggable, destination = _ref.destination, newPageBorderBoxCenter = _ref.newPageBorderBoxCenter, viewport = _ref.viewport, withDroppableDisplacement2 = _ref.withDroppableDisplacement, _ref$onlyOnMainAxis = _ref.onlyOnMainAxis, onlyOnMainAxis = _ref$onlyOnMainAxis === void 0 ? false : _ref$onlyOnMainAxis;
  var changeNeeded = subtract(newPageBorderBoxCenter, draggable2.page.borderBox.center);
  var shifted = offsetByPosition(draggable2.page.borderBox, changeNeeded);
  var args = {
    target: shifted,
    destination,
    withDroppableDisplacement: withDroppableDisplacement2,
    viewport
  };
  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
};
var moveToNextPlace = function(_ref) {
  var isMovingForward = _ref.isMovingForward, draggable2 = _ref.draggable, destination = _ref.destination, draggables = _ref.draggables, previousImpact = _ref.previousImpact, viewport = _ref.viewport, previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, previousClientSelection = _ref.previousClientSelection, afterCritical = _ref.afterCritical;
  if (!destination.isEnabled) {
    return null;
  }
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var isInHomeList = isHomeOf(draggable2, destination);
  var impact = moveToNextCombine({
    isMovingForward,
    draggable: draggable2,
    destination,
    insideDestination,
    previousImpact
  }) || moveToNextIndex({
    isMovingForward,
    isInHomeList,
    draggable: draggable2,
    draggables,
    destination,
    insideDestination,
    previousImpact,
    viewport,
    afterCritical
  });
  if (!impact) {
    return null;
  }
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    afterCritical
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable2,
    destination,
    newPageBorderBoxCenter: pageBorderBoxCenter,
    viewport: viewport.frame,
    withDroppableDisplacement: false,
    onlyOnMainAxis: true
  });
  if (isVisibleInNewLocation) {
    var clientSelection = getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter,
      draggable: draggable2,
      viewport
    });
    return {
      clientSelection,
      impact,
      scrollJumpRequest: null
    };
  }
  var distance3 = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
  var cautious = speculativelyIncrease({
    impact,
    viewport,
    destination,
    draggables,
    maxScrollChange: distance3
  });
  return {
    clientSelection: previousClientSelection,
    impact: cautious,
    scrollJumpRequest: distance3
  };
};
var getKnownActive = function getKnownActive2(droppable2) {
  var rect = droppable2.subject.active;
  !rect ? invariant() : void 0;
  return rect;
};
var getBestCrossAxisDroppable = function(_ref) {
  var isMovingForward = _ref.isMovingForward, pageBorderBoxCenter = _ref.pageBorderBoxCenter, source = _ref.source, droppables = _ref.droppables, viewport = _ref.viewport;
  var active = source.subject.active;
  if (!active) {
    return null;
  }
  var axis = source.axis;
  var isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
  var candidates = toDroppableList(droppables).filter(function(droppable2) {
    return droppable2 !== source;
  }).filter(function(droppable2) {
    return droppable2.isEnabled;
  }).filter(function(droppable2) {
    return Boolean(droppable2.subject.active);
  }).filter(function(droppable2) {
    return isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable2));
  }).filter(function(droppable2) {
    var activeOfTarget = getKnownActive(droppable2);
    if (isMovingForward) {
      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
    }
    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
  }).filter(function(droppable2) {
    var activeOfTarget = getKnownActive(droppable2);
    var isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
  }).sort(function(a, b2) {
    var first = getKnownActive(a)[axis.crossAxisStart];
    var second = getKnownActive(b2)[axis.crossAxisStart];
    if (isMovingForward) {
      return first - second;
    }
    return second - first;
  }).filter(function(droppable2, index, array) {
    return getKnownActive(droppable2)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart];
  });
  if (!candidates.length) {
    return null;
  }
  if (candidates.length === 1) {
    return candidates[0];
  }
  var contains = candidates.filter(function(droppable2) {
    var isWithinDroppable = isWithin(getKnownActive(droppable2)[axis.start], getKnownActive(droppable2)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });
  if (contains.length === 1) {
    return contains[0];
  }
  if (contains.length > 1) {
    return contains.sort(function(a, b2) {
      return getKnownActive(a)[axis.start] - getKnownActive(b2)[axis.start];
    })[0];
  }
  return candidates.sort(function(a, b2) {
    var first = closest(pageBorderBoxCenter, getCorners(getKnownActive(a)));
    var second = closest(pageBorderBoxCenter, getCorners(getKnownActive(b2)));
    if (first !== second) {
      return first - second;
    }
    return getKnownActive(a)[axis.start] - getKnownActive(b2)[axis.start];
  })[0];
};
var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter2(draggable2, afterCritical) {
  var original = draggable2.page.borderBox.center;
  return didStartAfterCritical(draggable2.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
};
var getCurrentPageBorderBox = function getCurrentPageBorderBox2(draggable2, afterCritical) {
  var original = draggable2.page.borderBox;
  return didStartAfterCritical(draggable2.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
};
var getClosestDraggable = function(_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter, viewport = _ref.viewport, destination = _ref.destination, insideDestination = _ref.insideDestination, afterCritical = _ref.afterCritical;
  var sorted = insideDestination.filter(function(draggable2) {
    return isTotallyVisible({
      target: getCurrentPageBorderBox(draggable2, afterCritical),
      destination,
      viewport: viewport.frame,
      withDroppableDisplacement: true
    });
  }).sort(function(a, b2) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b2, afterCritical)));
    if (distanceToA < distanceToB) {
      return -1;
    }
    if (distanceToB < distanceToA) {
      return 1;
    }
    return a.descriptor.index - b2.descriptor.index;
  });
  return sorted[0] || null;
};
var getDisplacedBy = memoizeOne(function getDisplacedBy2(axis, displaceBy) {
  var displacement = displaceBy[axis.line];
  return {
    value: displacement,
    point: patch(axis.line, displacement)
  };
});
var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder2(droppable2, placeholderSize, draggables) {
  var axis = droppable2.axis;
  if (droppable2.descriptor.mode === "virtual") {
    return patch(axis.line, placeholderSize[axis.line]);
  }
  var availableSpace = droppable2.subject.page.contentBox[axis.size];
  var insideDroppable = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
  var spaceUsed = insideDroppable.reduce(function(sum, dimension) {
    return sum + dimension.client.marginBox[axis.size];
  }, 0);
  var requiredSpace = spaceUsed + placeholderSize[axis.line];
  var needsToGrowBy = requiredSpace - availableSpace;
  if (needsToGrowBy <= 0) {
    return null;
  }
  return patch(axis.line, needsToGrowBy);
};
var withMaxScroll = function withMaxScroll2(frame, max) {
  return _extends({}, frame, {
    scroll: _extends({}, frame.scroll, {
      max
    })
  });
};
var addPlaceholder = function addPlaceholder2(droppable2, draggable2, draggables) {
  var frame = droppable2.frame;
  !!isHomeOf(draggable2, droppable2) ? invariant() : void 0;
  !!droppable2.subject.withPlaceholder ? invariant() : void 0;
  var placeholderSize = getDisplacedBy(droppable2.axis, draggable2.displaceBy).point;
  var requiredGrowth = getRequiredGrowthForPlaceholder(droppable2, placeholderSize, draggables);
  var added = {
    placeholderSize,
    increasedBy: requiredGrowth,
    oldFrameMaxScroll: droppable2.frame ? droppable2.frame.scroll.max : null
  };
  if (!frame) {
    var _subject = getSubject({
      page: droppable2.subject.page,
      withPlaceholder: added,
      axis: droppable2.axis,
      frame: droppable2.frame
    });
    return _extends({}, droppable2, {
      subject: _subject
    });
  }
  var maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
  var newFrame = withMaxScroll(frame, maxScroll);
  var subject = getSubject({
    page: droppable2.subject.page,
    withPlaceholder: added,
    axis: droppable2.axis,
    frame: newFrame
  });
  return _extends({}, droppable2, {
    subject,
    frame: newFrame
  });
};
var removePlaceholder = function removePlaceholder2(droppable2) {
  var added = droppable2.subject.withPlaceholder;
  !added ? invariant() : void 0;
  var frame = droppable2.frame;
  if (!frame) {
    var _subject2 = getSubject({
      page: droppable2.subject.page,
      axis: droppable2.axis,
      frame: null,
      withPlaceholder: null
    });
    return _extends({}, droppable2, {
      subject: _subject2
    });
  }
  var oldMaxScroll = added.oldFrameMaxScroll;
  !oldMaxScroll ? invariant() : void 0;
  var newFrame = withMaxScroll(frame, oldMaxScroll);
  var subject = getSubject({
    page: droppable2.subject.page,
    axis: droppable2.axis,
    frame: newFrame,
    withPlaceholder: null
  });
  return _extends({}, droppable2, {
    subject,
    frame: newFrame
  });
};
var moveToNewDroppable = function(_ref) {
  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, moveRelativeTo = _ref.moveRelativeTo, insideDestination = _ref.insideDestination, draggable2 = _ref.draggable, draggables = _ref.draggables, destination = _ref.destination, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  if (!moveRelativeTo) {
    if (insideDestination.length) {
      return null;
    }
    var proposed = {
      displaced: emptyGroups,
      displacedBy: noDisplacedBy,
      at: {
        type: "REORDER",
        destination: {
          droppableId: destination.descriptor.id,
          index: 0
        }
      }
    };
    var proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact: proposed,
      draggable: draggable2,
      droppable: destination,
      draggables,
      afterCritical
    });
    var withPlaceholder = isHomeOf(draggable2, destination) ? destination : addPlaceholder(destination, draggable2, draggables);
    var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
      draggable: draggable2,
      destination: withPlaceholder,
      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
      viewport: viewport.frame,
      withDroppableDisplacement: false,
      onlyOnMainAxis: true
    });
    return isVisibleInNewLocation ? proposed : null;
  }
  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);
  var proposedIndex = function() {
    var relativeTo = moveRelativeTo.descriptor.index;
    if (moveRelativeTo.descriptor.id === draggable2.descriptor.id) {
      return relativeTo;
    }
    if (isGoingBeforeTarget) {
      return relativeTo;
    }
    return relativeTo + 1;
  }();
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    displacedBy,
    last: emptyGroups,
    index: proposedIndex
  });
};
var moveCrossAxis = function(_ref) {
  var isMovingForward = _ref.isMovingForward, previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, draggable2 = _ref.draggable, isOver = _ref.isOver, draggables = _ref.draggables, droppables = _ref.droppables, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var destination = getBestCrossAxisDroppable({
    isMovingForward,
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    source: isOver,
    droppables,
    viewport
  });
  if (!destination) {
    return null;
  }
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var moveRelativeTo = getClosestDraggable({
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    viewport,
    destination,
    insideDestination,
    afterCritical
  });
  var impact = moveToNewDroppable({
    previousPageBorderBoxCenter,
    destination,
    draggable: draggable2,
    draggables,
    moveRelativeTo,
    insideDestination,
    viewport,
    afterCritical
  });
  if (!impact) {
    return null;
  }
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    afterCritical
  });
  var clientSelection = getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport
  });
  return {
    clientSelection,
    impact,
    scrollJumpRequest: null
  };
};
var whatIsDraggedOver = function(impact) {
  var at = impact.at;
  if (!at) {
    return null;
  }
  if (at.type === "REORDER") {
    return at.destination.droppableId;
  }
  return at.combine.droppableId;
};
var getDroppableOver = function getDroppableOver2(impact, droppables) {
  var id2 = whatIsDraggedOver(impact);
  return id2 ? droppables[id2] : null;
};
var moveInDirection = function(_ref) {
  var state = _ref.state, type = _ref.type;
  var isActuallyOver = getDroppableOver(state.impact, state.dimensions.droppables);
  var isMainAxisMovementAllowed = Boolean(isActuallyOver);
  var home2 = state.dimensions.droppables[state.critical.droppable.id];
  var isOver = isActuallyOver || home2;
  var direction = isOver.axis.direction;
  var isMovingOnMainAxis = direction === "vertical" && (type === "MOVE_UP" || type === "MOVE_DOWN") || direction === "horizontal" && (type === "MOVE_LEFT" || type === "MOVE_RIGHT");
  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }
  var isMovingForward = type === "MOVE_DOWN" || type === "MOVE_RIGHT";
  var draggable2 = state.dimensions.draggables[state.critical.draggable.id];
  var previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
  var _state$dimensions = state.dimensions, draggables = _state$dimensions.draggables, droppables = _state$dimensions.droppables;
  return isMovingOnMainAxis ? moveToNextPlace({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    destination: isOver,
    draggables,
    viewport: state.viewport,
    previousClientSelection: state.current.client.selection,
    previousImpact: state.impact,
    afterCritical: state.afterCritical
  }) : moveCrossAxis({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    isOver,
    draggables,
    droppables,
    viewport: state.viewport,
    afterCritical: state.afterCritical
  });
};
function isMovementAllowed(state) {
  return state.phase === "DRAGGING" || state.phase === "COLLECTING";
}
function isPositionInFrame(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function run(point) {
    return isWithinVertical(point.y) && isWithinHorizontal(point.x);
  };
}
function getHasOverlap(first, second) {
  return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
}
function getFurthestAway(_ref) {
  var pageBorderBox = _ref.pageBorderBox, draggable2 = _ref.draggable, candidates = _ref.candidates;
  var startCenter = draggable2.page.borderBox.center;
  var sorted = candidates.map(function(candidate) {
    var axis = candidate.axis;
    var target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
    return {
      id: candidate.descriptor.id,
      distance: distance(startCenter, target)
    };
  }).sort(function(a, b2) {
    return b2.distance - a.distance;
  });
  return sorted[0] ? sorted[0].id : null;
}
function getDroppableOver$1(_ref2) {
  var pageBorderBox = _ref2.pageBorderBox, draggable2 = _ref2.draggable, droppables = _ref2.droppables;
  var candidates = toDroppableList(droppables).filter(function(item) {
    if (!item.isEnabled) {
      return false;
    }
    var active = item.subject.active;
    if (!active) {
      return false;
    }
    if (!getHasOverlap(pageBorderBox, active)) {
      return false;
    }
    if (isPositionInFrame(active)(pageBorderBox.center)) {
      return true;
    }
    var axis = item.axis;
    var childCenter = active.center[axis.crossAxisLine];
    var crossAxisStart = pageBorderBox[axis.crossAxisStart];
    var crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
    var isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
    var isStartContained = isContained(crossAxisStart);
    var isEndContained = isContained(crossAxisEnd);
    if (!isStartContained && !isEndContained) {
      return true;
    }
    if (isStartContained) {
      return crossAxisStart < childCenter;
    }
    return crossAxisEnd > childCenter;
  });
  if (!candidates.length) {
    return null;
  }
  if (candidates.length === 1) {
    return candidates[0].descriptor.id;
  }
  return getFurthestAway({
    pageBorderBox,
    draggable: draggable2,
    candidates
  });
}
var offsetRectByPosition = function offsetRectByPosition2(rect, point) {
  return getRect(offsetByPosition(rect, point));
};
var withDroppableScroll = function(droppable2, area) {
  var frame = droppable2.frame;
  if (!frame) {
    return area;
  }
  return offsetRectByPosition(area, frame.scroll.diff.value);
};
function getIsDisplaced(_ref) {
  var displaced = _ref.displaced, id2 = _ref.id;
  return Boolean(displaced.visible[id2] || displaced.invisible[id2]);
}
function atIndex(_ref) {
  var draggable2 = _ref.draggable, closest3 = _ref.closest, inHomeList = _ref.inHomeList;
  if (!closest3) {
    return null;
  }
  if (!inHomeList) {
    return closest3.descriptor.index;
  }
  if (closest3.descriptor.index > draggable2.descriptor.index) {
    return closest3.descriptor.index - 1;
  }
  return closest3.descriptor.index;
}
var getReorderImpact = function(_ref2) {
  var targetRect = _ref2.pageBorderBoxWithDroppableScroll, draggable2 = _ref2.draggable, destination = _ref2.destination, insideDestination = _ref2.insideDestination, last = _ref2.last, viewport = _ref2.viewport, afterCritical = _ref2.afterCritical;
  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var closest3 = find(withoutDragging, function(child) {
    var id2 = child.descriptor.id;
    var childCenter = child.page.borderBox.center[axis.line];
    var didStartAfterCritical$1 = didStartAfterCritical(id2, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: last,
      id: id2
    });
    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd <= childCenter;
      }
      return targetStart < childCenter - displacement;
    }
    if (isDisplaced) {
      return targetEnd <= childCenter + displacement;
    }
    return targetStart < childCenter;
  });
  var newIndex = atIndex({
    draggable: draggable2,
    closest: closest3,
    inHomeList: isHomeOf(draggable2, destination)
  });
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    last,
    displacedBy,
    index: newIndex
  });
};
var combineThresholdDivisor = 4;
var getCombineImpact = function(_ref) {
  var draggable2 = _ref.draggable, targetRect = _ref.pageBorderBoxWithDroppableScroll, previousImpact = _ref.previousImpact, destination = _ref.destination, insideDestination = _ref.insideDestination, afterCritical = _ref.afterCritical;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var combineWith = find(withoutDragging, function(child) {
    var id2 = child.descriptor.id;
    var childRect = child.page.borderBox;
    var childSize = childRect[axis.size];
    var threshold = childSize / combineThresholdDivisor;
    var didStartAfterCritical$1 = didStartAfterCritical(id2, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: previousImpact.displaced,
      id: id2
    });
    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
      }
      return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
    }
    if (isDisplaced) {
      return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
    }
    return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
  });
  if (!combineWith) {
    return null;
  }
  var impact = {
    displacedBy,
    displaced: previousImpact.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: combineWith.descriptor.id,
        droppableId: destination.descriptor.id
      }
    }
  };
  return impact;
};
var getDragImpact = function(_ref) {
  var pageOffset = _ref.pageOffset, draggable2 = _ref.draggable, draggables = _ref.draggables, droppables = _ref.droppables, previousImpact = _ref.previousImpact, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var pageBorderBox = offsetRectByPosition(draggable2.page.borderBox, pageOffset);
  var destinationId = getDroppableOver$1({
    pageBorderBox,
    draggable: draggable2,
    droppables
  });
  if (!destinationId) {
    return noImpact;
  }
  var destination = droppables[destinationId];
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
  return getCombineImpact({
    pageBorderBoxWithDroppableScroll,
    draggable: draggable2,
    previousImpact,
    destination,
    insideDestination,
    afterCritical
  }) || getReorderImpact({
    pageBorderBoxWithDroppableScroll,
    draggable: draggable2,
    destination,
    insideDestination,
    last: previousImpact.displaced,
    viewport,
    afterCritical
  });
};
var patchDroppableMap = function(droppables, updated) {
  var _extends2;
  return _extends({}, droppables, (_extends2 = {}, _extends2[updated.descriptor.id] = updated, _extends2));
};
var clearUnusedPlaceholder = function clearUnusedPlaceholder2(_ref) {
  var previousImpact = _ref.previousImpact, impact = _ref.impact, droppables = _ref.droppables;
  var last = whatIsDraggedOver(previousImpact);
  var now2 = whatIsDraggedOver(impact);
  if (!last) {
    return droppables;
  }
  if (last === now2) {
    return droppables;
  }
  var lastDroppable = droppables[last];
  if (!lastDroppable.subject.withPlaceholder) {
    return droppables;
  }
  var updated = removePlaceholder(lastDroppable);
  return patchDroppableMap(droppables, updated);
};
var recomputePlaceholders = function(_ref2) {
  var draggable2 = _ref2.draggable, draggables = _ref2.draggables, droppables = _ref2.droppables, previousImpact = _ref2.previousImpact, impact = _ref2.impact;
  var cleaned = clearUnusedPlaceholder({
    previousImpact,
    impact,
    droppables
  });
  var isOver = whatIsDraggedOver(impact);
  if (!isOver) {
    return cleaned;
  }
  var droppable2 = droppables[isOver];
  if (isHomeOf(draggable2, droppable2)) {
    return cleaned;
  }
  if (droppable2.subject.withPlaceholder) {
    return cleaned;
  }
  var patched = addPlaceholder(droppable2, draggable2, draggables);
  return patchDroppableMap(cleaned, patched);
};
var update = function(_ref) {
  var state = _ref.state, forcedClientSelection = _ref.clientSelection, forcedDimensions = _ref.dimensions, forcedViewport = _ref.viewport, forcedImpact = _ref.impact, scrollJumpRequest = _ref.scrollJumpRequest;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var clientSelection = forcedClientSelection || state.current.client.selection;
  var offset22 = subtract(clientSelection, state.initial.client.selection);
  var client2 = {
    offset: offset22,
    selection: clientSelection,
    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset22)
  };
  var page = {
    selection: add(client2.selection, viewport.scroll.current),
    borderBoxCenter: add(client2.borderBoxCenter, viewport.scroll.current),
    offset: add(client2.offset, viewport.scroll.diff.value)
  };
  var current = {
    client: client2,
    page
  };
  if (state.phase === "COLLECTING") {
    return _extends({
      phase: "COLLECTING"
    }, state, {
      dimensions,
      viewport,
      current
    });
  }
  var draggable2 = dimensions.draggables[state.critical.draggable.id];
  var newImpact = forcedImpact || getDragImpact({
    pageOffset: page.offset,
    draggable: draggable2,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: state.impact,
    viewport,
    afterCritical: state.afterCritical
  });
  var withUpdatedPlaceholders = recomputePlaceholders({
    draggable: draggable2,
    impact: newImpact,
    previousImpact: state.impact,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables
  });
  var result = _extends({}, state, {
    current,
    dimensions: {
      draggables: dimensions.draggables,
      droppables: withUpdatedPlaceholders
    },
    impact: newImpact,
    viewport,
    scrollJumpRequest: scrollJumpRequest || null,
    forceShouldAnimate: scrollJumpRequest ? false : null
  });
  return result;
};
function getDraggables$1(ids, draggables) {
  return ids.map(function(id2) {
    return draggables[id2];
  });
}
var recompute = function(_ref) {
  var impact = _ref.impact, viewport = _ref.viewport, draggables = _ref.draggables, destination = _ref.destination, forceShouldAnimate = _ref.forceShouldAnimate;
  var last = impact.displaced;
  var afterDragging = getDraggables$1(last.all, draggables);
  var displaced = getDisplacementGroups({
    afterDragging,
    destination,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    forceShouldAnimate,
    last
  });
  return _extends({}, impact, {
    displaced
  });
};
var getClientBorderBoxCenter = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, droppable2 = _ref.droppable, draggables = _ref.draggables, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    draggables,
    droppable: droppable2,
    afterCritical
  });
  return getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport
  });
};
var refreshSnap = function(_ref) {
  var state = _ref.state, forcedDimensions = _ref.dimensions, forcedViewport = _ref.viewport;
  !(state.movementMode === "SNAP") ? invariant() : void 0;
  var needsVisibilityCheck = state.impact;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var draggables = dimensions.draggables, droppables = dimensions.droppables;
  var draggable2 = draggables[state.critical.draggable.id];
  var isOver = whatIsDraggedOver(needsVisibilityCheck);
  !isOver ? invariant() : void 0;
  var destination = droppables[isOver];
  var impact = recompute({
    impact: needsVisibilityCheck,
    viewport,
    destination,
    draggables
  });
  var clientSelection = getClientBorderBoxCenter({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    viewport,
    afterCritical: state.afterCritical
  });
  return update({
    impact,
    clientSelection,
    state,
    dimensions,
    viewport
  });
};
var getHomeLocation = function(descriptor) {
  return {
    index: descriptor.index,
    droppableId: descriptor.droppableId
  };
};
var getLiftEffect = function(_ref) {
  var draggable2 = _ref.draggable, home2 = _ref.home, draggables = _ref.draggables, viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home2.axis, draggable2.displaceBy);
  var insideHome = getDraggablesInsideDroppable(home2.descriptor.id, draggables);
  var rawIndex = insideHome.indexOf(draggable2);
  !(rawIndex !== -1) ? invariant() : void 0;
  var afterDragging = insideHome.slice(rawIndex + 1);
  var effected = afterDragging.reduce(function(previous, item) {
    previous[item.descriptor.id] = true;
    return previous;
  }, {});
  var afterCritical = {
    inVirtualList: home2.descriptor.mode === "virtual",
    displacedBy,
    effected
  };
  var displaced = getDisplacementGroups({
    afterDragging,
    destination: home2,
    displacedBy,
    last: null,
    viewport: viewport.frame,
    forceShouldAnimate: false
  });
  var impact = {
    displaced,
    displacedBy,
    at: {
      type: "REORDER",
      destination: getHomeLocation(draggable2.descriptor)
    }
  };
  return {
    impact,
    afterCritical
  };
};
var patchDimensionMap = function(dimensions, updated) {
  return {
    draggables: dimensions.draggables,
    droppables: patchDroppableMap(dimensions.droppables, updated)
  };
};
var offsetDraggable = function(_ref) {
  var draggable2 = _ref.draggable, offset$1 = _ref.offset, initialWindowScroll = _ref.initialWindowScroll;
  var client2 = offset(draggable2.client, offset$1);
  var page = withScroll(client2, initialWindowScroll);
  var moved = _extends({}, draggable2, {
    placeholder: _extends({}, draggable2.placeholder, {
      client: client2
    }),
    client: client2,
    page
  });
  return moved;
};
var getFrame = function(droppable2) {
  var frame = droppable2.frame;
  !frame ? invariant() : void 0;
  return frame;
};
var adjustAdditionsForScrollChanges = function(_ref) {
  var additions = _ref.additions, updatedDroppables = _ref.updatedDroppables, viewport = _ref.viewport;
  var windowScrollChange = viewport.scroll.diff.value;
  return additions.map(function(draggable2) {
    var droppableId = draggable2.descriptor.droppableId;
    var modified = updatedDroppables[droppableId];
    var frame = getFrame(modified);
    var droppableScrollChange = frame.scroll.diff.value;
    var totalChange = add(windowScrollChange, droppableScrollChange);
    var moved = offsetDraggable({
      draggable: draggable2,
      offset: totalChange,
      initialWindowScroll: viewport.scroll.initial
    });
    return moved;
  });
};
var publishWhileDraggingInVirtual = function(_ref) {
  var state = _ref.state, published = _ref.published;
  var withScrollChange = published.modified.map(function(update2) {
    var existing = state.dimensions.droppables[update2.droppableId];
    var scrolled = scrollDroppable(existing, update2.scroll);
    return scrolled;
  });
  var droppables = _extends({}, state.dimensions.droppables, {}, toDroppableMap(withScrollChange));
  var updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
    additions: published.additions,
    updatedDroppables: droppables,
    viewport: state.viewport
  }));
  var draggables = _extends({}, state.dimensions.draggables, {}, updatedAdditions);
  published.removals.forEach(function(id2) {
    delete draggables[id2];
  });
  var dimensions = {
    droppables,
    draggables
  };
  var wasOverId = whatIsDraggedOver(state.impact);
  var wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
  var draggable2 = dimensions.draggables[state.critical.draggable.id];
  var home2 = dimensions.droppables[state.critical.droppable.id];
  var _getLiftEffect = getLiftEffect({
    draggable: draggable2,
    home: home2,
    draggables,
    viewport: state.viewport
  }), onLiftImpact = _getLiftEffect.impact, afterCritical = _getLiftEffect.afterCritical;
  var previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
  var impact = getDragImpact({
    pageOffset: state.current.page.offset,
    draggable: dimensions.draggables[state.critical.draggable.id],
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact,
    viewport: state.viewport,
    afterCritical
  });
  var draggingState = _extends({
    phase: "DRAGGING"
  }, state, {
    phase: "DRAGGING",
    impact,
    onLiftImpact,
    dimensions,
    afterCritical,
    forceShouldAnimate: false
  });
  if (state.phase === "COLLECTING") {
    return draggingState;
  }
  var dropPending3 = _extends({
    phase: "DROP_PENDING"
  }, draggingState, {
    phase: "DROP_PENDING",
    reason: state.reason,
    isWaiting: false
  });
  return dropPending3;
};
var isSnapping = function isSnapping2(state) {
  return state.movementMode === "SNAP";
};
var postDroppableChange = function postDroppableChange2(state, updated, isEnabledChanging) {
  var dimensions = patchDimensionMap(state.dimensions, updated);
  if (!isSnapping(state) || isEnabledChanging) {
    return update({
      state,
      dimensions
    });
  }
  return refreshSnap({
    state,
    dimensions
  });
};
function removeScrollJumpRequest(state) {
  if (state.isDragging && state.movementMode === "SNAP") {
    return _extends({
      phase: "DRAGGING"
    }, state, {
      scrollJumpRequest: null
    });
  }
  return state;
}
var idle = {
  phase: "IDLE",
  completed: null,
  shouldFlush: false
};
var reducer = function(state, action) {
  if (state === void 0) {
    state = idle;
  }
  if (action.type === "FLUSH") {
    return _extends({}, idle, {
      shouldFlush: true
    });
  }
  if (action.type === "INITIAL_PUBLISH") {
    !(state.phase === "IDLE") ? invariant() : void 0;
    var _action$payload = action.payload, critical = _action$payload.critical, clientSelection = _action$payload.clientSelection, viewport = _action$payload.viewport, dimensions = _action$payload.dimensions, movementMode = _action$payload.movementMode;
    var draggable2 = dimensions.draggables[critical.draggable.id];
    var home2 = dimensions.droppables[critical.droppable.id];
    var client2 = {
      selection: clientSelection,
      borderBoxCenter: draggable2.client.borderBox.center,
      offset: origin
    };
    var initial = {
      client: client2,
      page: {
        selection: add(client2.selection, viewport.scroll.initial),
        borderBoxCenter: add(client2.selection, viewport.scroll.initial),
        offset: add(client2.selection, viewport.scroll.diff.value)
      }
    };
    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function(item) {
      return !item.isFixedOnPage;
    });
    var _getLiftEffect = getLiftEffect({
      draggable: draggable2,
      home: home2,
      draggables: dimensions.draggables,
      viewport
    }), impact = _getLiftEffect.impact, afterCritical = _getLiftEffect.afterCritical;
    var result = {
      phase: "DRAGGING",
      isDragging: true,
      critical,
      movementMode,
      dimensions,
      initial,
      current: initial,
      isWindowScrollAllowed,
      impact,
      afterCritical,
      onLiftImpact: impact,
      viewport,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return result;
  }
  if (action.type === "COLLECTION_STARTING") {
    if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
      return state;
    }
    !(state.phase === "DRAGGING") ? invariant() : void 0;
    var _result = _extends({
      phase: "COLLECTING"
    }, state, {
      phase: "COLLECTING"
    });
    return _result;
  }
  if (action.type === "PUBLISH_WHILE_DRAGGING") {
    !(state.phase === "COLLECTING" || state.phase === "DROP_PENDING") ? invariant() : void 0;
    return publishWhileDraggingInVirtual({
      state,
      published: action.payload
    });
  }
  if (action.type === "MOVE") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant() : void 0;
    var _clientSelection = action.payload.client;
    if (isEqual(_clientSelection, state.current.client.selection)) {
      return state;
    }
    return update({
      state,
      clientSelection: _clientSelection,
      impact: isSnapping(state) ? state.impact : null
    });
  }
  if (action.type === "UPDATE_DROPPABLE_SCROLL") {
    if (state.phase === "DROP_PENDING") {
      return removeScrollJumpRequest(state);
    }
    if (state.phase === "COLLECTING") {
      return removeScrollJumpRequest(state);
    }
    !isMovementAllowed(state) ? invariant() : void 0;
    var _action$payload2 = action.payload, id2 = _action$payload2.id, newScroll = _action$payload2.newScroll;
    var target = state.dimensions.droppables[id2];
    if (!target) {
      return state;
    }
    var scrolled = scrollDroppable(target, newScroll);
    return postDroppableChange(state, scrolled, false);
  }
  if (action.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant() : void 0;
    var _action$payload3 = action.payload, _id = _action$payload3.id, isEnabled = _action$payload3.isEnabled;
    var _target = state.dimensions.droppables[_id];
    !_target ? invariant() : void 0;
    !(_target.isEnabled !== isEnabled) ? invariant() : void 0;
    var updated = _extends({}, _target, {
      isEnabled
    });
    return postDroppableChange(state, updated, true);
  }
  if (action.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant() : void 0;
    var _action$payload4 = action.payload, _id2 = _action$payload4.id, isCombineEnabled = _action$payload4.isCombineEnabled;
    var _target2 = state.dimensions.droppables[_id2];
    !_target2 ? invariant() : void 0;
    !(_target2.isCombineEnabled !== isCombineEnabled) ? invariant() : void 0;
    var _updated = _extends({}, _target2, {
      isCombineEnabled
    });
    return postDroppableChange(state, _updated, true);
  }
  if (action.type === "MOVE_BY_WINDOW_SCROLL") {
    if (state.phase === "DROP_PENDING" || state.phase === "DROP_ANIMATING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant() : void 0;
    !state.isWindowScrollAllowed ? invariant() : void 0;
    var _newScroll = action.payload.newScroll;
    if (isEqual(state.viewport.scroll.current, _newScroll)) {
      return removeScrollJumpRequest(state);
    }
    var _viewport = scrollViewport(state.viewport, _newScroll);
    if (isSnapping(state)) {
      return refreshSnap({
        state,
        viewport: _viewport
      });
    }
    return update({
      state,
      viewport: _viewport
    });
  }
  if (action.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!isMovementAllowed(state)) {
      return state;
    }
    var maxScroll = action.payload.maxScroll;
    if (isEqual(maxScroll, state.viewport.scroll.max)) {
      return state;
    }
    var withMaxScroll3 = _extends({}, state.viewport, {
      scroll: _extends({}, state.viewport.scroll, {
        max: maxScroll
      })
    });
    return _extends({
      phase: "DRAGGING"
    }, state, {
      viewport: withMaxScroll3
    });
  }
  if (action.type === "MOVE_UP" || action.type === "MOVE_DOWN" || action.type === "MOVE_LEFT" || action.type === "MOVE_RIGHT") {
    if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
      return state;
    }
    !(state.phase === "DRAGGING") ? invariant() : void 0;
    var _result2 = moveInDirection({
      state,
      type: action.type
    });
    if (!_result2) {
      return state;
    }
    return update({
      state,
      impact: _result2.impact,
      clientSelection: _result2.clientSelection,
      scrollJumpRequest: _result2.scrollJumpRequest
    });
  }
  if (action.type === "DROP_PENDING") {
    var reason = action.payload.reason;
    !(state.phase === "COLLECTING") ? invariant() : void 0;
    var newState = _extends({
      phase: "DROP_PENDING"
    }, state, {
      phase: "DROP_PENDING",
      isWaiting: true,
      reason
    });
    return newState;
  }
  if (action.type === "DROP_ANIMATE") {
    var _action$payload5 = action.payload, completed = _action$payload5.completed, dropDuration = _action$payload5.dropDuration, newHomeClientOffset = _action$payload5.newHomeClientOffset;
    !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? invariant() : void 0;
    var _result3 = {
      phase: "DROP_ANIMATING",
      completed,
      dropDuration,
      newHomeClientOffset,
      dimensions: state.dimensions
    };
    return _result3;
  }
  if (action.type === "DROP_COMPLETE") {
    var _completed = action.payload.completed;
    return {
      phase: "IDLE",
      completed: _completed,
      shouldFlush: false
    };
  }
  return state;
};
var beforeInitialCapture = function beforeInitialCapture2(args) {
  return {
    type: "BEFORE_INITIAL_CAPTURE",
    payload: args
  };
};
var lift = function lift2(args) {
  return {
    type: "LIFT",
    payload: args
  };
};
var initialPublish = function initialPublish2(args) {
  return {
    type: "INITIAL_PUBLISH",
    payload: args
  };
};
var publishWhileDragging = function publishWhileDragging2(args) {
  return {
    type: "PUBLISH_WHILE_DRAGGING",
    payload: args
  };
};
var collectionStarting = function collectionStarting2() {
  return {
    type: "COLLECTION_STARTING",
    payload: null
  };
};
var updateDroppableScroll = function updateDroppableScroll2(args) {
  return {
    type: "UPDATE_DROPPABLE_SCROLL",
    payload: args
  };
};
var updateDroppableIsEnabled = function updateDroppableIsEnabled2(args) {
  return {
    type: "UPDATE_DROPPABLE_IS_ENABLED",
    payload: args
  };
};
var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled2(args) {
  return {
    type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
    payload: args
  };
};
var move = function move2(args) {
  return {
    type: "MOVE",
    payload: args
  };
};
var moveByWindowScroll = function moveByWindowScroll2(args) {
  return {
    type: "MOVE_BY_WINDOW_SCROLL",
    payload: args
  };
};
var updateViewportMaxScroll = function updateViewportMaxScroll2(args) {
  return {
    type: "UPDATE_VIEWPORT_MAX_SCROLL",
    payload: args
  };
};
var moveUp = function moveUp2() {
  return {
    type: "MOVE_UP",
    payload: null
  };
};
var moveDown = function moveDown2() {
  return {
    type: "MOVE_DOWN",
    payload: null
  };
};
var moveRight = function moveRight2() {
  return {
    type: "MOVE_RIGHT",
    payload: null
  };
};
var moveLeft = function moveLeft2() {
  return {
    type: "MOVE_LEFT",
    payload: null
  };
};
var flush = function flush2() {
  return {
    type: "FLUSH",
    payload: null
  };
};
var animateDrop = function animateDrop2(args) {
  return {
    type: "DROP_ANIMATE",
    payload: args
  };
};
var completeDrop = function completeDrop2(args) {
  return {
    type: "DROP_COMPLETE",
    payload: args
  };
};
var drop = function drop2(args) {
  return {
    type: "DROP",
    payload: args
  };
};
var dropPending = function dropPending2(args) {
  return {
    type: "DROP_PENDING",
    payload: args
  };
};
var dropAnimationFinished = function dropAnimationFinished2() {
  return {
    type: "DROP_ANIMATION_FINISHED",
    payload: null
  };
};
var lift$1 = function(marshal) {
  return function(_ref) {
    var getState = _ref.getState, dispatch = _ref.dispatch;
    return function(next) {
      return function(action) {
        if (action.type !== "LIFT") {
          next(action);
          return;
        }
        var _action$payload = action.payload, id2 = _action$payload.id, clientSelection = _action$payload.clientSelection, movementMode = _action$payload.movementMode;
        var initial = getState();
        if (initial.phase === "DROP_ANIMATING") {
          dispatch(completeDrop({
            completed: initial.completed
          }));
        }
        !(getState().phase === "IDLE") ? invariant() : void 0;
        dispatch(flush());
        dispatch(beforeInitialCapture({
          draggableId: id2,
          movementMode
        }));
        var scrollOptions = {
          shouldPublishImmediately: movementMode === "SNAP"
        };
        var request = {
          draggableId: id2,
          scrollOptions
        };
        var _marshal$startPublish = marshal.startPublishing(request), critical = _marshal$startPublish.critical, dimensions = _marshal$startPublish.dimensions, viewport = _marshal$startPublish.viewport;
        dispatch(initialPublish({
          critical,
          dimensions,
          clientSelection,
          movementMode,
          viewport
        }));
      };
    };
  };
};
var style = function(marshal) {
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "INITIAL_PUBLISH") {
          marshal.dragging();
        }
        if (action.type === "DROP_ANIMATE") {
          marshal.dropping(action.payload.completed.result.reason);
        }
        if (action.type === "FLUSH" || action.type === "DROP_COMPLETE") {
          marshal.resting();
        }
        next(action);
      };
    };
  };
};
var curves = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
};
var combine = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
};
var timings = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
};
var outOfTheWayTiming = timings.outOfTheWay + "s " + curves.outOfTheWay;
var transitions = {
  fluid: "opacity " + outOfTheWayTiming,
  snap: "transform " + outOfTheWayTiming + ", opacity " + outOfTheWayTiming,
  drop: function drop3(duration) {
    var timing = duration + "s " + curves.drop;
    return "transform " + timing + ", opacity " + timing;
  },
  outOfTheWay: "transform " + outOfTheWayTiming,
  placeholder: "height " + outOfTheWayTiming + ", width " + outOfTheWayTiming + ", margin " + outOfTheWayTiming
};
var moveTo = function moveTo2(offset22) {
  return isEqual(offset22, origin) ? null : "translate(" + offset22.x + "px, " + offset22.y + "px)";
};
var transforms = {
  moveTo,
  drop: function drop4(offset22, isCombining) {
    var translate = moveTo(offset22);
    if (!translate) {
      return null;
    }
    if (!isCombining) {
      return translate;
    }
    return translate + " scale(" + combine.scale.drop + ")";
  }
};
var minDropTime = timings.minDropTime, maxDropTime = timings.maxDropTime;
var dropTimeRange = maxDropTime - minDropTime;
var maxDropTimeAtDistance = 1500;
var cancelDropModifier = 0.6;
var getDropDuration = function(_ref) {
  var current = _ref.current, destination = _ref.destination, reason = _ref.reason;
  var distance$1 = distance(current, destination);
  if (distance$1 <= 0) {
    return minDropTime;
  }
  if (distance$1 >= maxDropTimeAtDistance) {
    return maxDropTime;
  }
  var percentage = distance$1 / maxDropTimeAtDistance;
  var duration = minDropTime + dropTimeRange * percentage;
  var withDuration = reason === "CANCEL" ? duration * cancelDropModifier : duration;
  return Number(withDuration.toFixed(2));
};
var getNewHomeClientOffset = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, dimensions = _ref.dimensions, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var draggables = dimensions.draggables, droppables = dimensions.droppables;
  var droppableId = whatIsDraggedOver(impact);
  var destination = droppableId ? droppables[droppableId] : null;
  var home2 = droppables[draggable2.descriptor.droppableId];
  var newClientCenter = getClientBorderBoxCenter({
    impact,
    draggable: draggable2,
    draggables,
    afterCritical,
    droppable: destination || home2,
    viewport
  });
  var offset22 = subtract(newClientCenter, draggable2.client.borderBox.center);
  return offset22;
};
var getDropImpact = function(_ref) {
  var draggables = _ref.draggables, reason = _ref.reason, lastImpact = _ref.lastImpact, home2 = _ref.home, viewport = _ref.viewport, onLiftImpact = _ref.onLiftImpact;
  if (!lastImpact.at || reason !== "DROP") {
    var recomputedHomeImpact = recompute({
      draggables,
      impact: onLiftImpact,
      destination: home2,
      viewport,
      forceShouldAnimate: true
    });
    return {
      impact: recomputedHomeImpact,
      didDropInsideDroppable: false
    };
  }
  if (lastImpact.at.type === "REORDER") {
    return {
      impact: lastImpact,
      didDropInsideDroppable: true
    };
  }
  var withoutMovement = _extends({}, lastImpact, {
    displaced: emptyGroups
  });
  return {
    impact: withoutMovement,
    didDropInsideDroppable: true
  };
};
var drop$1 = function(_ref) {
  var getState = _ref.getState, dispatch = _ref.dispatch;
  return function(next) {
    return function(action) {
      if (action.type !== "DROP") {
        next(action);
        return;
      }
      var state = getState();
      var reason = action.payload.reason;
      if (state.phase === "COLLECTING") {
        dispatch(dropPending({
          reason
        }));
        return;
      }
      if (state.phase === "IDLE") {
        return;
      }
      var isWaitingForDrop = state.phase === "DROP_PENDING" && state.isWaiting;
      !!isWaitingForDrop ? invariant() : void 0;
      !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? invariant() : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;
      var draggable2 = dimensions.draggables[state.critical.draggable.id];
      var _getDropImpact = getDropImpact({
        reason,
        lastImpact: state.impact,
        afterCritical: state.afterCritical,
        onLiftImpact: state.onLiftImpact,
        home: state.dimensions.droppables[state.critical.droppable.id],
        viewport: state.viewport,
        draggables: state.dimensions.draggables
      }), impact = _getDropImpact.impact, didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;
      var destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
      var combine2 = didDropInsideDroppable ? tryGetCombine(impact) : null;
      var source = {
        index: critical.draggable.index,
        droppableId: critical.droppable.id
      };
      var result = {
        draggableId: draggable2.descriptor.id,
        type: draggable2.descriptor.type,
        source,
        reason,
        mode: state.movementMode,
        destination,
        combine: combine2
      };
      var newHomeClientOffset = getNewHomeClientOffset({
        impact,
        draggable: draggable2,
        dimensions,
        viewport: state.viewport,
        afterCritical: state.afterCritical
      });
      var completed = {
        critical: state.critical,
        afterCritical: state.afterCritical,
        result,
        impact
      };
      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);
      if (!isAnimationRequired) {
        dispatch(completeDrop({
          completed
        }));
        return;
      }
      var dropDuration = getDropDuration({
        current: state.current.client.offset,
        destination: newHomeClientOffset,
        reason
      });
      var args = {
        newHomeClientOffset,
        dropDuration,
        completed
      };
      dispatch(animateDrop(args));
    };
  };
};
var getWindowScroll = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
function getWindowScrollBinding(update2) {
  return {
    eventName: "scroll",
    options: {
      passive: true,
      capture: false
    },
    fn: function fn(event) {
      if (event.target !== window && event.target !== window.document) {
        return;
      }
      update2();
    }
  };
}
function getScrollListener(_ref) {
  var onWindowScroll = _ref.onWindowScroll;
  function updateScroll() {
    onWindowScroll(getWindowScroll());
  }
  var scheduled = rafSchd(updateScroll);
  var binding = getWindowScrollBinding(scheduled);
  var unbind = noop;
  function isActive() {
    return unbind !== noop;
  }
  function start3() {
    !!isActive() ? invariant() : void 0;
    unbind = bindEvents(window, [binding]);
  }
  function stop() {
    !isActive() ? invariant() : void 0;
    scheduled.cancel();
    unbind();
    unbind = noop;
  }
  return {
    start: start3,
    stop,
    isActive
  };
}
var shouldEnd = function shouldEnd2(action) {
  return action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATE" || action.type === "FLUSH";
};
var scrollListener = function(store) {
  var listener = getScrollListener({
    onWindowScroll: function onWindowScroll(newScroll) {
      store.dispatch(moveByWindowScroll({
        newScroll
      }));
    }
  });
  return function(next) {
    return function(action) {
      if (!listener.isActive() && action.type === "INITIAL_PUBLISH") {
        listener.start();
      }
      if (listener.isActive() && shouldEnd(action)) {
        listener.stop();
      }
      next(action);
    };
  };
};
var getExpiringAnnounce = function(announce) {
  var wasCalled = false;
  var isExpired = false;
  var timeoutId = setTimeout(function() {
    isExpired = true;
  });
  var result = function result2(message) {
    if (wasCalled) {
      return;
    }
    if (isExpired) {
      return;
    }
    wasCalled = true;
    announce(message);
    clearTimeout(timeoutId);
  };
  result.wasCalled = function() {
    return wasCalled;
  };
  return result;
};
var getAsyncMarshal = function() {
  var entries = [];
  var execute3 = function execute4(timerId) {
    var index = findIndex(entries, function(item) {
      return item.timerId === timerId;
    });
    !(index !== -1) ? invariant() : void 0;
    var _entries$splice = entries.splice(index, 1), entry = _entries$splice[0];
    entry.callback();
  };
  var add3 = function add4(fn) {
    var timerId = setTimeout(function() {
      return execute3(timerId);
    });
    var entry = {
      timerId,
      callback: fn
    };
    entries.push(entry);
  };
  var flush3 = function flush4() {
    if (!entries.length) {
      return;
    }
    var shallow = [].concat(entries);
    entries.length = 0;
    shallow.forEach(function(entry) {
      clearTimeout(entry.timerId);
      entry.callback();
    });
  };
  return {
    add: add3,
    flush: flush3
  };
};
var areLocationsEqual = function areLocationsEqual2(first, second) {
  if (first == null && second == null) {
    return true;
  }
  if (first == null || second == null) {
    return false;
  }
  return first.droppableId === second.droppableId && first.index === second.index;
};
var isCombineEqual = function isCombineEqual2(first, second) {
  if (first == null && second == null) {
    return true;
  }
  if (first == null || second == null) {
    return false;
  }
  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
var isCriticalEqual = function isCriticalEqual2(first, second) {
  if (first === second) {
    return true;
  }
  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};
var withTimings = function withTimings2(key, fn) {
  fn();
};
var getDragStart = function getDragStart2(critical, mode) {
  return {
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    },
    mode
  };
};
var execute = function execute2(responder, data, announce, getDefaultMessage) {
  if (!responder) {
    announce(getDefaultMessage(data));
    return;
  }
  var willExpire = getExpiringAnnounce(announce);
  var provided = {
    announce: willExpire
  };
  responder(data, provided);
  if (!willExpire.wasCalled()) {
    announce(getDefaultMessage(data));
  }
};
var getPublisher = function(getResponders, announce) {
  var asyncMarshal = getAsyncMarshal();
  var dragging = null;
  var beforeCapture = function beforeCapture2(draggableId, mode) {
    !!dragging ? invariant() : void 0;
    withTimings("onBeforeCapture", function() {
      var fn = getResponders().onBeforeCapture;
      if (fn) {
        var before = {
          draggableId,
          mode
        };
        fn(before);
      }
    });
  };
  var beforeStart = function beforeStart2(critical, mode) {
    !!dragging ? invariant() : void 0;
    withTimings("onBeforeDragStart", function() {
      var fn = getResponders().onBeforeDragStart;
      if (fn) {
        fn(getDragStart(critical, mode));
      }
    });
  };
  var start3 = function start4(critical, mode) {
    !!dragging ? invariant() : void 0;
    var data = getDragStart(critical, mode);
    dragging = {
      mode,
      lastCritical: critical,
      lastLocation: data.source,
      lastCombine: null
    };
    asyncMarshal.add(function() {
      withTimings("onDragStart", function() {
        return execute(getResponders().onDragStart, data, announce, preset.onDragStart);
      });
    });
  };
  var update2 = function update3(critical, impact) {
    var location = tryGetDestination(impact);
    var combine2 = tryGetCombine(impact);
    !dragging ? invariant() : void 0;
    var hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);
    if (hasCriticalChanged) {
      dragging.lastCritical = critical;
    }
    var hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);
    if (hasLocationChanged) {
      dragging.lastLocation = location;
    }
    var hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine2);
    if (hasGroupingChanged) {
      dragging.lastCombine = combine2;
    }
    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
      return;
    }
    var data = _extends({}, getDragStart(critical, dragging.mode), {
      combine: combine2,
      destination: location
    });
    asyncMarshal.add(function() {
      withTimings("onDragUpdate", function() {
        return execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate);
      });
    });
  };
  var flush3 = function flush4() {
    !dragging ? invariant() : void 0;
    asyncMarshal.flush();
  };
  var drop5 = function drop6(result) {
    !dragging ? invariant() : void 0;
    dragging = null;
    withTimings("onDragEnd", function() {
      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
    });
  };
  var abort = function abort2() {
    if (!dragging) {
      return;
    }
    var result = _extends({}, getDragStart(dragging.lastCritical, dragging.mode), {
      combine: null,
      destination: null,
      reason: "CANCEL"
    });
    drop5(result);
  };
  return {
    beforeCapture,
    beforeStart,
    start: start3,
    update: update2,
    flush: flush3,
    drop: drop5,
    abort
  };
};
var responders = function(getResponders, announce) {
  var publisher = getPublisher(getResponders, announce);
  return function(store) {
    return function(next) {
      return function(action) {
        if (action.type === "BEFORE_INITIAL_CAPTURE") {
          publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
          return;
        }
        if (action.type === "INITIAL_PUBLISH") {
          var critical = action.payload.critical;
          publisher.beforeStart(critical, action.payload.movementMode);
          next(action);
          publisher.start(critical, action.payload.movementMode);
          return;
        }
        if (action.type === "DROP_COMPLETE") {
          var result = action.payload.completed.result;
          publisher.flush();
          next(action);
          publisher.drop(result);
          return;
        }
        next(action);
        if (action.type === "FLUSH") {
          publisher.abort();
          return;
        }
        var state = store.getState();
        if (state.phase === "DRAGGING") {
          publisher.update(state.critical, state.impact);
        }
      };
    };
  };
};
var dropAnimationFinish = function(store) {
  return function(next) {
    return function(action) {
      if (action.type !== "DROP_ANIMATION_FINISHED") {
        next(action);
        return;
      }
      var state = store.getState();
      !(state.phase === "DROP_ANIMATING") ? invariant() : void 0;
      store.dispatch(completeDrop({
        completed: state.completed
      }));
    };
  };
};
var dropAnimationFlushOnScroll = function(store) {
  var unbind = null;
  var frameId = null;
  function clear() {
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
    if (unbind) {
      unbind();
      unbind = null;
    }
  }
  return function(next) {
    return function(action) {
      if (action.type === "FLUSH" || action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATION_FINISHED") {
        clear();
      }
      next(action);
      if (action.type !== "DROP_ANIMATE") {
        return;
      }
      var binding = {
        eventName: "scroll",
        options: {
          capture: true,
          passive: false,
          once: true
        },
        fn: function flushDropAnimation() {
          var state = store.getState();
          if (state.phase === "DROP_ANIMATING") {
            store.dispatch(dropAnimationFinished());
          }
        }
      };
      frameId = requestAnimationFrame(function() {
        frameId = null;
        unbind = bindEvents(window, [binding]);
      });
    };
  };
};
var dimensionMarshalStopper = function(marshal) {
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "DROP_COMPLETE" || action.type === "FLUSH" || action.type === "DROP_ANIMATE") {
          marshal.stopPublishing();
        }
        next(action);
      };
    };
  };
};
var focus = function(marshal) {
  var isWatching = false;
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "INITIAL_PUBLISH") {
          isWatching = true;
          marshal.tryRecordFocus(action.payload.critical.draggable.id);
          next(action);
          marshal.tryRestoreFocusRecorded();
          return;
        }
        next(action);
        if (!isWatching) {
          return;
        }
        if (action.type === "FLUSH") {
          isWatching = false;
          marshal.tryRestoreFocusRecorded();
          return;
        }
        if (action.type === "DROP_COMPLETE") {
          isWatching = false;
          var result = action.payload.completed.result;
          if (result.combine) {
            marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
          }
          marshal.tryRestoreFocusRecorded();
        }
      };
    };
  };
};
var shouldStop = function shouldStop2(action) {
  return action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATE" || action.type === "FLUSH";
};
var autoScroll = function(autoScroller) {
  return function(store) {
    return function(next) {
      return function(action) {
        if (shouldStop(action)) {
          autoScroller.stop();
          next(action);
          return;
        }
        if (action.type === "INITIAL_PUBLISH") {
          next(action);
          var state = store.getState();
          !(state.phase === "DRAGGING") ? invariant() : void 0;
          autoScroller.start(state);
          return;
        }
        next(action);
        autoScroller.scroll(store.getState());
      };
    };
  };
};
var pendingDrop = function(store) {
  return function(next) {
    return function(action) {
      next(action);
      if (action.type !== "PUBLISH_WHILE_DRAGGING") {
        return;
      }
      var postActionState = store.getState();
      if (postActionState.phase !== "DROP_PENDING") {
        return;
      }
      if (postActionState.isWaiting) {
        return;
      }
      store.dispatch(drop({
        reason: postActionState.reason
      }));
    };
  };
};
var composeEnhancers = compose;
var createStore = function(_ref) {
  var dimensionMarshal = _ref.dimensionMarshal, focusMarshal = _ref.focusMarshal, styleMarshal = _ref.styleMarshal, getResponders = _ref.getResponders, announce = _ref.announce, autoScroller = _ref.autoScroller;
  return createStore$1(reducer, composeEnhancers(applyMiddleware(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift$1(dimensionMarshal), drop$1, dropAnimationFinish, dropAnimationFlushOnScroll, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
};
var clean$1 = function clean3() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};
function createPublisher(_ref) {
  var registry = _ref.registry, callbacks = _ref.callbacks;
  var staging = clean$1();
  var frameId = null;
  var collect = function collect2() {
    if (frameId) {
      return;
    }
    callbacks.collectionStarting();
    frameId = requestAnimationFrame(function() {
      frameId = null;
      var _staging = staging, additions = _staging.additions, removals = _staging.removals, modified = _staging.modified;
      var added = Object.keys(additions).map(function(id2) {
        return registry.draggable.getById(id2).getDimension(origin);
      }).sort(function(a, b2) {
        return a.descriptor.index - b2.descriptor.index;
      });
      var updated = Object.keys(modified).map(function(id2) {
        var entry = registry.droppable.getById(id2);
        var scroll3 = entry.callbacks.getScrollWhileDragging();
        return {
          droppableId: id2,
          scroll: scroll3
        };
      });
      var result = {
        additions: added,
        removals: Object.keys(removals),
        modified: updated
      };
      staging = clean$1();
      callbacks.publish(result);
    });
  };
  var add3 = function add4(entry) {
    var id2 = entry.descriptor.id;
    staging.additions[id2] = entry;
    staging.modified[entry.descriptor.droppableId] = true;
    if (staging.removals[id2]) {
      delete staging.removals[id2];
    }
    collect();
  };
  var remove = function remove2(entry) {
    var descriptor = entry.descriptor;
    staging.removals[descriptor.id] = true;
    staging.modified[descriptor.droppableId] = true;
    if (staging.additions[descriptor.id]) {
      delete staging.additions[descriptor.id];
    }
    collect();
  };
  var stop = function stop2() {
    if (!frameId) {
      return;
    }
    cancelAnimationFrame(frameId);
    frameId = null;
    staging = clean$1();
  };
  return {
    add: add3,
    remove,
    stop
  };
}
var getMaxScroll = function(_ref) {
  var scrollHeight = _ref.scrollHeight, scrollWidth = _ref.scrollWidth, height = _ref.height, width = _ref.width;
  var maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  var adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
};
var getDocumentElement = function() {
  var doc = document.documentElement;
  !doc ? invariant() : void 0;
  return doc;
};
var getMaxWindowScroll = function() {
  var doc = getDocumentElement();
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: doc.clientWidth,
    height: doc.clientHeight
  });
  return maxScroll;
};
var getViewport = function() {
  var scroll3 = getWindowScroll();
  var maxScroll = getMaxWindowScroll();
  var top = scroll3.y;
  var left = scroll3.x;
  var doc = getDocumentElement();
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var right = left + width;
  var bottom = top + height;
  var frame = getRect({
    top,
    left,
    right,
    bottom
  });
  var viewport = {
    frame,
    scroll: {
      initial: scroll3,
      current: scroll3,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport;
};
var getInitialPublish = function(_ref) {
  var critical = _ref.critical, scrollOptions = _ref.scrollOptions, registry = _ref.registry;
  var viewport = getViewport();
  var windowScroll = viewport.scroll.current;
  var home2 = critical.droppable;
  var droppables = registry.droppable.getAllByType(home2.type).map(function(entry) {
    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
  });
  var draggables = registry.draggable.getAllByType(critical.draggable.type).map(function(entry) {
    return entry.getDimension(windowScroll);
  });
  var dimensions = {
    draggables: toDraggableMap(draggables),
    droppables: toDroppableMap(droppables)
  };
  var result = {
    dimensions,
    critical,
    viewport
  };
  return result;
};
function shouldPublishUpdate(registry, dragging, entry) {
  if (entry.descriptor.id === dragging.id) {
    return false;
  }
  if (entry.descriptor.type !== dragging.type) {
    return false;
  }
  var home2 = registry.droppable.getById(entry.descriptor.droppableId);
  if (home2.descriptor.mode !== "virtual") {
    return false;
  }
  return true;
}
var createDimensionMarshal = function(registry, callbacks) {
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publishWhileDragging,
      collectionStarting: callbacks.collectionStarting
    },
    registry
  });
  var updateDroppableIsEnabled3 = function updateDroppableIsEnabled4(id2, isEnabled) {
    !registry.droppable.exists(id2) ? invariant() : void 0;
    if (!collection) {
      return;
    }
    callbacks.updateDroppableIsEnabled({
      id: id2,
      isEnabled
    });
  };
  var updateDroppableIsCombineEnabled3 = function updateDroppableIsCombineEnabled4(id2, isCombineEnabled) {
    if (!collection) {
      return;
    }
    !registry.droppable.exists(id2) ? invariant() : void 0;
    callbacks.updateDroppableIsCombineEnabled({
      id: id2,
      isCombineEnabled
    });
  };
  var updateDroppableScroll3 = function updateDroppableScroll4(id2, newScroll) {
    if (!collection) {
      return;
    }
    !registry.droppable.exists(id2) ? invariant() : void 0;
    callbacks.updateDroppableScroll({
      id: id2,
      newScroll
    });
  };
  var scrollDroppable2 = function scrollDroppable3(id2, change) {
    if (!collection) {
      return;
    }
    registry.droppable.getById(id2).callbacks.scroll(change);
  };
  var stopPublishing = function stopPublishing2() {
    if (!collection) {
      return;
    }
    publisher.stop();
    var home2 = collection.critical.droppable;
    registry.droppable.getAllByType(home2.type).forEach(function(entry) {
      return entry.callbacks.dragStopped();
    });
    collection.unsubscribe();
    collection = null;
  };
  var subscriber = function subscriber2(event) {
    !collection ? invariant() : void 0;
    var dragging = collection.critical.draggable;
    if (event.type === "ADDITION") {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.add(event.value);
      }
    }
    if (event.type === "REMOVAL") {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.remove(event.value);
      }
    }
  };
  var startPublishing = function startPublishing2(request) {
    !!collection ? invariant() : void 0;
    var entry = registry.draggable.getById(request.draggableId);
    var home2 = registry.droppable.getById(entry.descriptor.droppableId);
    var critical = {
      draggable: entry.descriptor,
      droppable: home2.descriptor
    };
    var unsubscribe = registry.subscribe(subscriber);
    collection = {
      critical,
      unsubscribe
    };
    return getInitialPublish({
      critical,
      registry,
      scrollOptions: request.scrollOptions
    });
  };
  var marshal = {
    updateDroppableIsEnabled: updateDroppableIsEnabled3,
    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled3,
    scrollDroppable: scrollDroppable2,
    updateDroppableScroll: updateDroppableScroll3,
    startPublishing,
    stopPublishing
  };
  return marshal;
};
var canStartDrag = function(state, id2) {
  if (state.phase === "IDLE") {
    return true;
  }
  if (state.phase !== "DROP_ANIMATING") {
    return false;
  }
  if (state.completed.result.draggableId === id2) {
    return false;
  }
  return state.completed.result.reason === "DROP";
};
var scrollWindow = function(change) {
  window.scrollBy(change.x, change.y);
};
var getScrollableDroppables = memoizeOne(function(droppables) {
  return toDroppableList(droppables).filter(function(droppable2) {
    if (!droppable2.isEnabled) {
      return false;
    }
    if (!droppable2.frame) {
      return false;
    }
    return true;
  });
});
var getScrollableDroppableOver = function getScrollableDroppableOver2(target, droppables) {
  var maybe = find(getScrollableDroppables(droppables), function(droppable2) {
    !droppable2.frame ? invariant() : void 0;
    return isPositionInFrame(droppable2.frame.pageMarginBox)(target);
  });
  return maybe;
};
var getBestScrollableDroppable = function(_ref) {
  var center = _ref.center, destination = _ref.destination, droppables = _ref.droppables;
  if (destination) {
    var _dimension = droppables[destination];
    if (!_dimension.frame) {
      return null;
    }
    return _dimension;
  }
  var dimension = getScrollableDroppableOver(center, droppables);
  return dimension;
};
var config = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: function ease(percentage) {
    return Math.pow(percentage, 2);
  },
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  }
};
var getDistanceThresholds = function(container, axis) {
  var startScrollingFrom = container[axis.size] * config.startFromPercentage;
  var maxScrollValueAt = container[axis.size] * config.maxScrollAtPercentage;
  var thresholds = {
    startScrollingFrom,
    maxScrollValueAt
  };
  return thresholds;
};
var getPercentage = function(_ref) {
  var startOfRange = _ref.startOfRange, endOfRange = _ref.endOfRange, current = _ref.current;
  var range = endOfRange - startOfRange;
  if (range === 0) {
    return 0;
  }
  var currentInRange = current - startOfRange;
  var percentage = currentInRange / range;
  return percentage;
};
var minScroll = 1;
var getValueFromDistance = function(distanceToEdge, thresholds) {
  if (distanceToEdge > thresholds.startScrollingFrom) {
    return 0;
  }
  if (distanceToEdge <= thresholds.maxScrollValueAt) {
    return config.maxPixelScroll;
  }
  if (distanceToEdge === thresholds.startScrollingFrom) {
    return minScroll;
  }
  var percentageFromMaxScrollValueAt = getPercentage({
    startOfRange: thresholds.maxScrollValueAt,
    endOfRange: thresholds.startScrollingFrom,
    current: distanceToEdge
  });
  var percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
  var scroll3 = config.maxPixelScroll * config.ease(percentageFromStartScrollingFrom);
  return Math.ceil(scroll3);
};
var accelerateAt = config.durationDampening.accelerateAt;
var stopAt = config.durationDampening.stopDampeningAt;
var dampenValueByTime = function(proposedScroll, dragStartTime) {
  var startOfRange = dragStartTime;
  var endOfRange = stopAt;
  var now2 = Date.now();
  var runTime = now2 - startOfRange;
  if (runTime >= stopAt) {
    return proposedScroll;
  }
  if (runTime < accelerateAt) {
    return minScroll;
  }
  var betweenAccelerateAtAndStopAtPercentage = getPercentage({
    startOfRange: accelerateAt,
    endOfRange,
    current: runTime
  });
  var scroll3 = proposedScroll * config.ease(betweenAccelerateAtAndStopAtPercentage);
  return Math.ceil(scroll3);
};
var getValue = function(_ref) {
  var distanceToEdge = _ref.distanceToEdge, thresholds = _ref.thresholds, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll3 = getValueFromDistance(distanceToEdge, thresholds);
  if (scroll3 === 0) {
    return 0;
  }
  if (!shouldUseTimeDampening) {
    return scroll3;
  }
  return Math.max(dampenValueByTime(scroll3, dragStartTime), minScroll);
};
var getScrollOnAxis = function(_ref) {
  var container = _ref.container, distanceToEdges = _ref.distanceToEdges, dragStartTime = _ref.dragStartTime, axis = _ref.axis, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var thresholds = getDistanceThresholds(container, axis);
  var isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];
  if (isCloserToEnd) {
    return getValue({
      distanceToEdge: distanceToEdges[axis.end],
      thresholds,
      dragStartTime,
      shouldUseTimeDampening
    });
  }
  return -1 * getValue({
    distanceToEdge: distanceToEdges[axis.start],
    thresholds,
    dragStartTime,
    shouldUseTimeDampening
  });
};
var adjustForSizeLimits = function(_ref) {
  var container = _ref.container, subject = _ref.subject, proposedScroll = _ref.proposedScroll;
  var isTooBigVertically = subject.height > container.height;
  var isTooBigHorizontally = subject.width > container.width;
  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }
  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }
  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
};
var clean$2 = apply(function(value) {
  return value === 0 ? 0 : value;
});
var getScroll = function(_ref) {
  var dragStartTime = _ref.dragStartTime, container = _ref.container, subject = _ref.subject, center = _ref.center, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var distanceToEdges = {
    top: center.y - container.top,
    right: container.right - center.x,
    bottom: container.bottom - center.y,
    left: center.x - container.left
  };
  var y3 = getScrollOnAxis({
    container,
    distanceToEdges,
    dragStartTime,
    axis: vertical,
    shouldUseTimeDampening
  });
  var x = getScrollOnAxis({
    container,
    distanceToEdges,
    dragStartTime,
    axis: horizontal,
    shouldUseTimeDampening
  });
  var required2 = clean$2({
    x,
    y: y3
  });
  if (isEqual(required2, origin)) {
    return null;
  }
  var limited = adjustForSizeLimits({
    container,
    subject,
    proposedScroll: required2
  });
  if (!limited) {
    return null;
  }
  return isEqual(limited, origin) ? null : limited;
};
var smallestSigned = apply(function(value) {
  if (value === 0) {
    return 0;
  }
  return value > 0 ? 1 : -1;
});
var getOverlap = /* @__PURE__ */ function() {
  var getRemainder = function getRemainder2(target, max) {
    if (target < 0) {
      return target;
    }
    if (target > max) {
      return target - max;
    }
    return 0;
  };
  return function(_ref) {
    var current = _ref.current, max = _ref.max, change = _ref.change;
    var targetScroll = add(current, change);
    var overlap = {
      x: getRemainder(targetScroll.x, max.x),
      y: getRemainder(targetScroll.y, max.y)
    };
    if (isEqual(overlap, origin)) {
      return null;
    }
    return overlap;
  };
}();
var canPartiallyScroll = function canPartiallyScroll2(_ref2) {
  var rawMax = _ref2.max, current = _ref2.current, change = _ref2.change;
  var max = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  var smallestChange = smallestSigned(change);
  var overlap = getOverlap({
    max,
    current,
    change: smallestChange
  });
  if (!overlap) {
    return true;
  }
  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }
  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }
  return false;
};
var canScrollWindow = function canScrollWindow2(viewport, change) {
  return canPartiallyScroll({
    current: viewport.scroll.current,
    max: viewport.scroll.max,
    change
  });
};
var getWindowOverlap = function getWindowOverlap2(viewport, change) {
  if (!canScrollWindow(viewport, change)) {
    return null;
  }
  var max = viewport.scroll.max;
  var current = viewport.scroll.current;
  return getOverlap({
    current,
    max,
    change
  });
};
var canScrollDroppable = function canScrollDroppable2(droppable2, change) {
  var frame = droppable2.frame;
  if (!frame) {
    return false;
  }
  return canPartiallyScroll({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change
  });
};
var getDroppableOverlap = function getDroppableOverlap2(droppable2, change) {
  var frame = droppable2.frame;
  if (!frame) {
    return null;
  }
  if (!canScrollDroppable(droppable2, change)) {
    return null;
  }
  return getOverlap({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change
  });
};
var getWindowScrollChange = function(_ref) {
  var viewport = _ref.viewport, subject = _ref.subject, center = _ref.center, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll3 = getScroll({
    dragStartTime,
    container: viewport.frame,
    subject,
    center,
    shouldUseTimeDampening
  });
  return scroll3 && canScrollWindow(viewport, scroll3) ? scroll3 : null;
};
var getDroppableScrollChange = function(_ref) {
  var droppable2 = _ref.droppable, subject = _ref.subject, center = _ref.center, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var frame = droppable2.frame;
  if (!frame) {
    return null;
  }
  var scroll3 = getScroll({
    dragStartTime,
    container: frame.pageMarginBox,
    subject,
    center,
    shouldUseTimeDampening
  });
  return scroll3 && canScrollDroppable(droppable2, scroll3) ? scroll3 : null;
};
var scroll$1 = function(_ref) {
  var state = _ref.state, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening, scrollWindow2 = _ref.scrollWindow, scrollDroppable2 = _ref.scrollDroppable;
  var center = state.current.page.borderBoxCenter;
  var draggable2 = state.dimensions.draggables[state.critical.draggable.id];
  var subject = draggable2.page.marginBox;
  if (state.isWindowScrollAllowed) {
    var viewport = state.viewport;
    var _change = getWindowScrollChange({
      dragStartTime,
      viewport,
      subject,
      center,
      shouldUseTimeDampening
    });
    if (_change) {
      scrollWindow2(_change);
      return;
    }
  }
  var droppable2 = getBestScrollableDroppable({
    center,
    destination: whatIsDraggedOver(state.impact),
    droppables: state.dimensions.droppables
  });
  if (!droppable2) {
    return;
  }
  var change = getDroppableScrollChange({
    dragStartTime,
    droppable: droppable2,
    subject,
    center,
    shouldUseTimeDampening
  });
  if (change) {
    scrollDroppable2(droppable2.descriptor.id, change);
  }
};
var createFluidScroller = function(_ref) {
  var scrollWindow2 = _ref.scrollWindow, scrollDroppable2 = _ref.scrollDroppable;
  var scheduleWindowScroll = rafSchd(scrollWindow2);
  var scheduleDroppableScroll = rafSchd(scrollDroppable2);
  var dragging = null;
  var tryScroll = function tryScroll2(state) {
    !dragging ? invariant() : void 0;
    var _dragging = dragging, shouldUseTimeDampening = _dragging.shouldUseTimeDampening, dragStartTime = _dragging.dragStartTime;
    scroll$1({
      state,
      scrollWindow: scheduleWindowScroll,
      scrollDroppable: scheduleDroppableScroll,
      dragStartTime,
      shouldUseTimeDampening
    });
  };
  var start$1 = function start$12(state) {
    !!dragging ? invariant() : void 0;
    var dragStartTime = Date.now();
    var wasScrollNeeded = false;
    var fakeScrollCallback = function fakeScrollCallback2() {
      wasScrollNeeded = true;
    };
    scroll$1({
      state,
      dragStartTime: 0,
      shouldUseTimeDampening: false,
      scrollWindow: fakeScrollCallback,
      scrollDroppable: fakeScrollCallback
    });
    dragging = {
      dragStartTime,
      shouldUseTimeDampening: wasScrollNeeded
    };
    if (wasScrollNeeded) {
      tryScroll(state);
    }
  };
  var stop = function stop2() {
    if (!dragging) {
      return;
    }
    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
    dragging = null;
  };
  return {
    start: start$1,
    stop,
    scroll: tryScroll
  };
};
var createJumpScroller = function(_ref) {
  var move3 = _ref.move, scrollDroppable2 = _ref.scrollDroppable, scrollWindow2 = _ref.scrollWindow;
  var moveByOffset = function moveByOffset2(state, offset22) {
    var client2 = add(state.current.client.selection, offset22);
    move3({
      client: client2
    });
  };
  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan2(droppable2, change) {
    if (!canScrollDroppable(droppable2, change)) {
      return change;
    }
    var overlap = getDroppableOverlap(droppable2, change);
    if (!overlap) {
      scrollDroppable2(droppable2.descriptor.id, change);
      return null;
    }
    var whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable2(droppable2.descriptor.id, whatTheDroppableCanScroll);
    var remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };
  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan2(isWindowScrollAllowed, viewport, change) {
    if (!isWindowScrollAllowed) {
      return change;
    }
    if (!canScrollWindow(viewport, change)) {
      return change;
    }
    var overlap = getWindowOverlap(viewport, change);
    if (!overlap) {
      scrollWindow2(change);
      return null;
    }
    var whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow2(whatTheWindowCanScroll);
    var remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };
  var jumpScroller = function jumpScroller2(state) {
    var request = state.scrollJumpRequest;
    if (!request) {
      return;
    }
    var destination = whatIsDraggedOver(state.impact);
    !destination ? invariant() : void 0;
    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);
    if (!droppableRemainder) {
      return;
    }
    var viewport = state.viewport;
    var windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);
    if (!windowRemainder) {
      return;
    }
    moveByOffset(state, windowRemainder);
  };
  return jumpScroller;
};
var createAutoScroller = function(_ref) {
  var scrollDroppable2 = _ref.scrollDroppable, scrollWindow2 = _ref.scrollWindow, move3 = _ref.move;
  var fluidScroller = createFluidScroller({
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2
  });
  var jumpScroll = createJumpScroller({
    move: move3,
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2
  });
  var scroll3 = function scroll4(state) {
    if (state.phase !== "DRAGGING") {
      return;
    }
    if (state.movementMode === "FLUID") {
      fluidScroller.scroll(state);
      return;
    }
    if (!state.scrollJumpRequest) {
      return;
    }
    jumpScroll(state);
  };
  var scroller = {
    scroll: scroll3,
    start: fluidScroller.start,
    stop: fluidScroller.stop
  };
  return scroller;
};
var prefix$1 = "data-rbd";
var dragHandle = function() {
  var base = prefix$1 + "-drag-handle";
  return {
    base,
    draggableId: base + "-draggable-id",
    contextId: base + "-context-id"
  };
}();
var draggable = function() {
  var base = prefix$1 + "-draggable";
  return {
    base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var droppable = function() {
  var base = prefix$1 + "-droppable";
  return {
    base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var scrollContainer = {
  contextId: prefix$1 + "-scroll-container-context-id"
};
var makeGetSelector = function makeGetSelector2(context) {
  return function(attribute) {
    return "[" + attribute + '="' + context + '"]';
  };
};
var getStyles = function getStyles2(rules, property) {
  return rules.map(function(rule) {
    var value = rule.styles[property];
    if (!value) {
      return "";
    }
    return rule.selector + " { " + value + " }";
  }).join(" ");
};
var noPointerEvents = "pointer-events: none;";
var getStyles$1 = function(contextId) {
  var getSelector2 = makeGetSelector(contextId);
  var dragHandle$1 = function() {
    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
    return {
      selector: getSelector2(dragHandle.contextId),
      styles: {
        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
        resting: grabCursor,
        dragging: noPointerEvents,
        dropAnimating: grabCursor
      }
    };
  }();
  var draggable$1 = function() {
    var transition = "\n      transition: " + transitions.outOfTheWay + ";\n    ";
    return {
      selector: getSelector2(draggable.contextId),
      styles: {
        dragging: transition,
        dropAnimating: transition,
        userCancel: transition
      }
    };
  }();
  var droppable$1 = {
    selector: getSelector2(droppable.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  };
  var body = {
    selector: "body",
    styles: {
      dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
    }
  };
  var rules = [draggable$1, dragHandle$1, droppable$1, body];
  return {
    always: getStyles(rules, "always"),
    resting: getStyles(rules, "resting"),
    dragging: getStyles(rules, "dragging"),
    dropAnimating: getStyles(rules, "dropAnimating"),
    userCancel: getStyles(rules, "userCancel")
  };
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
var getHead = function getHead2() {
  var head = document.querySelector("head");
  !head ? invariant() : void 0;
  return head;
};
var createStyleEl = function createStyleEl2(nonce) {
  var el2 = document.createElement("style");
  if (nonce) {
    el2.setAttribute("nonce", nonce);
  }
  el2.type = "text/css";
  return el2;
};
function useStyleMarshal(contextId, nonce) {
  var styles = useMemo(function() {
    return getStyles$1(contextId);
  }, [contextId]);
  var alwaysRef = reactExports.useRef(null);
  var dynamicRef = reactExports.useRef(null);
  var setDynamicStyle = useCallback(memoizeOne(function(proposed) {
    var el2 = dynamicRef.current;
    !el2 ? invariant() : void 0;
    el2.textContent = proposed;
  }), []);
  var setAlwaysStyle = useCallback(function(proposed) {
    var el2 = alwaysRef.current;
    !el2 ? invariant() : void 0;
    el2.textContent = proposed;
  }, []);
  useIsomorphicLayoutEffect(function() {
    !(!alwaysRef.current && !dynamicRef.current) ? invariant() : void 0;
    var always = createStyleEl(nonce);
    var dynamic = createStyleEl(nonce);
    alwaysRef.current = always;
    dynamicRef.current = dynamic;
    always.setAttribute(prefix$1 + "-always", contextId);
    dynamic.setAttribute(prefix$1 + "-dynamic", contextId);
    getHead().appendChild(always);
    getHead().appendChild(dynamic);
    setAlwaysStyle(styles.always);
    setDynamicStyle(styles.resting);
    return function() {
      var remove = function remove2(ref2) {
        var current = ref2.current;
        !current ? invariant() : void 0;
        getHead().removeChild(current);
        ref2.current = null;
      };
      remove(alwaysRef);
      remove(dynamicRef);
    };
  }, [nonce, setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, contextId]);
  var dragging = useCallback(function() {
    return setDynamicStyle(styles.dragging);
  }, [setDynamicStyle, styles.dragging]);
  var dropping = useCallback(function(reason) {
    if (reason === "DROP") {
      setDynamicStyle(styles.dropAnimating);
      return;
    }
    setDynamicStyle(styles.userCancel);
  }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
  var resting = useCallback(function() {
    if (!dynamicRef.current) {
      return;
    }
    setDynamicStyle(styles.resting);
  }, [setDynamicStyle, styles.resting]);
  var marshal = useMemo(function() {
    return {
      dragging,
      dropping,
      resting
    };
  }, [dragging, dropping, resting]);
  return marshal;
}
var getWindowFromEl = function(el2) {
  return el2 && el2.ownerDocument ? el2.ownerDocument.defaultView : window;
};
function isHtmlElement(el2) {
  return el2 instanceof getWindowFromEl(el2).HTMLElement;
}
function findDragHandle(contextId, draggableId) {
  var selector = "[" + dragHandle.contextId + '="' + contextId + '"]';
  var possible = toArray(document.querySelectorAll(selector));
  if (!possible.length) {
    return null;
  }
  var handle = find(possible, function(el2) {
    return el2.getAttribute(dragHandle.draggableId) === draggableId;
  });
  if (!handle) {
    return null;
  }
  if (!isHtmlElement(handle)) {
    return null;
  }
  return handle;
}
function useFocusMarshal(contextId) {
  var entriesRef = reactExports.useRef({});
  var recordRef = reactExports.useRef(null);
  var restoreFocusFrameRef = reactExports.useRef(null);
  var isMountedRef = reactExports.useRef(false);
  var register = useCallback(function register2(id2, focus2) {
    var entry = {
      id: id2,
      focus: focus2
    };
    entriesRef.current[id2] = entry;
    return function unregister() {
      var entries = entriesRef.current;
      var current = entries[id2];
      if (current !== entry) {
        delete entries[id2];
      }
    };
  }, []);
  var tryGiveFocus = useCallback(function tryGiveFocus2(tryGiveFocusTo) {
    var handle = findDragHandle(contextId, tryGiveFocusTo);
    if (handle && handle !== document.activeElement) {
      handle.focus();
    }
  }, [contextId]);
  var tryShiftRecord = useCallback(function tryShiftRecord2(previous, redirectTo) {
    if (recordRef.current === previous) {
      recordRef.current = redirectTo;
    }
  }, []);
  var tryRestoreFocusRecorded = useCallback(function tryRestoreFocusRecorded2() {
    if (restoreFocusFrameRef.current) {
      return;
    }
    if (!isMountedRef.current) {
      return;
    }
    restoreFocusFrameRef.current = requestAnimationFrame(function() {
      restoreFocusFrameRef.current = null;
      var record = recordRef.current;
      if (record) {
        tryGiveFocus(record);
      }
    });
  }, [tryGiveFocus]);
  var tryRecordFocus = useCallback(function tryRecordFocus2(id2) {
    recordRef.current = null;
    var focused = document.activeElement;
    if (!focused) {
      return;
    }
    if (focused.getAttribute(dragHandle.draggableId) !== id2) {
      return;
    }
    recordRef.current = id2;
  }, []);
  useIsomorphicLayoutEffect(function() {
    isMountedRef.current = true;
    return function clearFrameOnUnmount() {
      isMountedRef.current = false;
      var frameId = restoreFocusFrameRef.current;
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);
  var marshal = useMemo(function() {
    return {
      register,
      tryRecordFocus,
      tryRestoreFocusRecorded,
      tryShiftRecord
    };
  }, [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord]);
  return marshal;
}
function createRegistry() {
  var entries = {
    draggables: {},
    droppables: {}
  };
  var subscribers = [];
  function subscribe(cb2) {
    subscribers.push(cb2);
    return function unsubscribe() {
      var index = subscribers.indexOf(cb2);
      if (index === -1) {
        return;
      }
      subscribers.splice(index, 1);
    };
  }
  function notify2(event) {
    if (subscribers.length) {
      subscribers.forEach(function(cb2) {
        return cb2(event);
      });
    }
  }
  function findDraggableById(id2) {
    return entries.draggables[id2] || null;
  }
  function getDraggableById(id2) {
    var entry = findDraggableById(id2);
    !entry ? invariant() : void 0;
    return entry;
  }
  var draggableAPI = {
    register: function register(entry) {
      entries.draggables[entry.descriptor.id] = entry;
      notify2({
        type: "ADDITION",
        value: entry
      });
    },
    update: function update2(entry, last) {
      var current = entries.draggables[last.descriptor.id];
      if (!current) {
        return;
      }
      if (current.uniqueId !== entry.uniqueId) {
        return;
      }
      delete entries.draggables[last.descriptor.id];
      entries.draggables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var draggableId = entry.descriptor.id;
      var current = findDraggableById(draggableId);
      if (!current) {
        return;
      }
      if (entry.uniqueId !== current.uniqueId) {
        return;
      }
      delete entries.draggables[draggableId];
      notify2({
        type: "REMOVAL",
        value: entry
      });
    },
    getById: getDraggableById,
    findById: findDraggableById,
    exists: function exists(id2) {
      return Boolean(findDraggableById(id2));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.draggables).filter(function(entry) {
        return entry.descriptor.type === type;
      });
    }
  };
  function findDroppableById(id2) {
    return entries.droppables[id2] || null;
  }
  function getDroppableById(id2) {
    var entry = findDroppableById(id2);
    !entry ? invariant() : void 0;
    return entry;
  }
  var droppableAPI = {
    register: function register(entry) {
      entries.droppables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var current = findDroppableById(entry.descriptor.id);
      if (!current) {
        return;
      }
      if (entry.uniqueId !== current.uniqueId) {
        return;
      }
      delete entries.droppables[entry.descriptor.id];
    },
    getById: getDroppableById,
    findById: findDroppableById,
    exists: function exists(id2) {
      return Boolean(findDroppableById(id2));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.droppables).filter(function(entry) {
        return entry.descriptor.type === type;
      });
    }
  };
  function clean4() {
    entries.draggables = {};
    entries.droppables = {};
    subscribers.length = 0;
  }
  return {
    draggable: draggableAPI,
    droppable: droppableAPI,
    subscribe,
    clean: clean4
  };
}
function useRegistry() {
  var registry = useMemo(createRegistry, []);
  reactExports.useEffect(function() {
    return function unmount() {
      requestAnimationFrame(registry.clean);
    };
  }, [registry]);
  return registry;
}
var StoreContext = React.createContext(null);
var getBodyElement = function() {
  var body = document.body;
  !body ? invariant() : void 0;
  return body;
};
var visuallyHidden = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
var getId = function getId2(contextId) {
  return "rbd-announcement-" + contextId;
};
function useAnnouncer(contextId) {
  var id2 = useMemo(function() {
    return getId(contextId);
  }, [contextId]);
  var ref2 = reactExports.useRef(null);
  reactExports.useEffect(function setup() {
    var el2 = document.createElement("div");
    ref2.current = el2;
    el2.id = id2;
    el2.setAttribute("aria-live", "assertive");
    el2.setAttribute("aria-atomic", "true");
    _extends(el2.style, visuallyHidden);
    getBodyElement().appendChild(el2);
    return function cleanup() {
      setTimeout(function remove() {
        var body = getBodyElement();
        if (body.contains(el2)) {
          body.removeChild(el2);
        }
        if (el2 === ref2.current) {
          ref2.current = null;
        }
      });
    };
  }, [id2]);
  var announce = useCallback(function(message) {
    var el2 = ref2.current;
    if (el2) {
      el2.textContent = message;
      return;
    }
  }, []);
  return announce;
}
var count = 0;
var defaults = {
  separator: "::"
};
function useUniqueId(prefix2, options) {
  if (options === void 0) {
    options = defaults;
  }
  return useMemo(function() {
    return "" + prefix2 + options.separator + count++;
  }, [options.separator, prefix2]);
}
function getElementId(_ref) {
  var contextId = _ref.contextId, uniqueId = _ref.uniqueId;
  return "rbd-hidden-text-" + contextId + "-" + uniqueId;
}
function useHiddenTextElement(_ref2) {
  var contextId = _ref2.contextId, text = _ref2.text;
  var uniqueId = useUniqueId("hidden-text", {
    separator: "-"
  });
  var id2 = useMemo(function() {
    return getElementId({
      contextId,
      uniqueId
    });
  }, [uniqueId, contextId]);
  reactExports.useEffect(function mount() {
    var el2 = document.createElement("div");
    el2.id = id2;
    el2.textContent = text;
    el2.style.display = "none";
    getBodyElement().appendChild(el2);
    return function unmount() {
      var body = getBodyElement();
      if (body.contains(el2)) {
        body.removeChild(el2);
      }
    };
  }, [id2, text]);
  return id2;
}
var AppContext = React.createContext(null);
function usePrevious(current) {
  var ref2 = reactExports.useRef(current);
  reactExports.useEffect(function() {
    ref2.current = current;
  });
  return ref2;
}
function create() {
  var lock = null;
  function isClaimed() {
    return Boolean(lock);
  }
  function isActive(value) {
    return value === lock;
  }
  function claim(abandon) {
    !!lock ? invariant() : void 0;
    var newLock = {
      abandon
    };
    lock = newLock;
    return newLock;
  }
  function release() {
    !lock ? invariant() : void 0;
    lock = null;
  }
  function tryAbandon() {
    if (lock) {
      lock.abandon();
      release();
    }
  }
  return {
    isClaimed,
    isActive,
    claim,
    release,
    tryAbandon
  };
}
var tab = 9;
var enter = 13;
var escape$1 = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;
var _preventedKeys;
var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
var preventStandardKeyEvents = function(event) {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
};
var supportedEventName = function() {
  var base = "visibilitychange";
  if (typeof document === "undefined") {
    return base;
  }
  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
  var supported = find(candidates, function(eventName) {
    return "on" + eventName in document;
  });
  return supported || base;
}();
var primaryButton = 0;
var sloppyClickThreshold = 5;
function isSloppyClickThresholdExceeded(original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
}
var idle$1 = {
  type: "IDLE"
};
function getCaptureBindings(_ref) {
  var cancel = _ref.cancel, completed = _ref.completed, getPhase = _ref.getPhase, setPhase = _ref.setPhase;
  return [{
    eventName: "mousemove",
    fn: function fn(event) {
      var button = event.button, clientX = event.clientX, clientY = event.clientY;
      if (button !== primaryButton) {
        return;
      }
      var point = {
        x: clientX,
        y: clientY
      };
      var phase = getPhase();
      if (phase.type === "DRAGGING") {
        event.preventDefault();
        phase.actions.move(point);
        return;
      }
      !(phase.type === "PENDING") ? invariant() : void 0;
      var pending = phase.point;
      if (!isSloppyClickThresholdExceeded(pending, point)) {
        return;
      }
      event.preventDefault();
      var actions = phase.actions.fluidLift(point);
      setPhase({
        type: "DRAGGING",
        actions
      });
    }
  }, {
    eventName: "mouseup",
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: "mousedown",
    fn: function fn(event) {
      if (getPhase().type === "DRAGGING") {
        event.preventDefault();
      }
      cancel();
    }
  }, {
    eventName: "keydown",
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type === "PENDING") {
        cancel();
        return;
      }
      if (event.keyCode === escape$1) {
        event.preventDefault();
        cancel();
        return;
      }
      preventStandardKeyEvents(event);
    }
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "scroll",
    options: {
      passive: true,
      capture: false
    },
    fn: function fn() {
      if (getPhase().type === "PENDING") {
        cancel();
      }
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== "IDLE") ? invariant() : void 0;
      if (phase.actions.shouldRespectForcePress()) {
        cancel();
        return;
      }
      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useMouseSensor(api) {
  var phaseRef = reactExports.useRef(idle$1);
  var unbindEventsRef = reactExports.useRef(noop);
  var startCaptureBinding = useMemo(function() {
    return {
      eventName: "mousedown",
      fn: function onMouseDown(event) {
        if (event.defaultPrevented) {
          return;
        }
        if (event.button !== primaryButton) {
          return;
        }
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!actions) {
          return;
        }
        event.preventDefault();
        var point = {
          x: event.clientX,
          y: event.clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var preventForcePressBinding = useMemo(function() {
    return {
      eventName: "webkitmouseforcewillbegin",
      fn: function fn(event) {
        if (event.defaultPrevented) {
          return;
        }
        var id2 = api.findClosestDraggableId(event);
        if (!id2) {
          return;
        }
        var options = api.findOptionsForDraggable(id2);
        if (!options) {
          return;
        }
        if (options.shouldRespectForcePress) {
          return;
        }
        if (!api.canGetLock(id2)) {
          return;
        }
        event.preventDefault();
      }
    };
  }, [api]);
  var listenForCapture = useCallback(function listenForCapture2() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
  }, [preventForcePressBinding, startCaptureBinding]);
  var stop = useCallback(function() {
    var current = phaseRef.current;
    if (current.type === "IDLE") {
      return;
    }
    phaseRef.current = idle$1;
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture]);
  var cancel = useCallback(function() {
    var phase = phaseRef.current;
    stop();
    if (phase.type === "DRAGGING") {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }
    if (phase.type === "PENDING") {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = useCallback(function bindCapturingEvents2() {
    var options = {
      capture: true,
      passive: false
    };
    var bindings = getCaptureBindings({
      cancel,
      completed: stop,
      getPhase: function getPhase() {
        return phaseRef.current;
      },
      setPhase: function setPhase(phase) {
        phaseRef.current = phase;
      }
    });
    unbindEventsRef.current = bindEvents(window, bindings, options);
  }, [cancel, stop]);
  var startPendingDrag = useCallback(function startPendingDrag2(actions, point) {
    !(phaseRef.current.type === "IDLE") ? invariant() : void 0;
    phaseRef.current = {
      type: "PENDING",
      point,
      actions
    };
    bindCapturingEvents();
  }, [bindCapturingEvents]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}
var _scrollJumpKeys;
function noop$1() {
}
var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);
function getDraggingBindings(actions, stop) {
  function cancel() {
    stop();
    actions.cancel();
  }
  function drop5() {
    stop();
    actions.drop();
  }
  return [{
    eventName: "keydown",
    fn: function fn(event) {
      if (event.keyCode === escape$1) {
        event.preventDefault();
        cancel();
        return;
      }
      if (event.keyCode === space) {
        event.preventDefault();
        drop5();
        return;
      }
      if (event.keyCode === arrowDown) {
        event.preventDefault();
        actions.moveDown();
        return;
      }
      if (event.keyCode === arrowUp) {
        event.preventDefault();
        actions.moveUp();
        return;
      }
      if (event.keyCode === arrowRight) {
        event.preventDefault();
        actions.moveRight();
        return;
      }
      if (event.keyCode === arrowLeft) {
        event.preventDefault();
        actions.moveLeft();
        return;
      }
      if (scrollJumpKeys[event.keyCode]) {
        event.preventDefault();
        return;
      }
      preventStandardKeyEvents(event);
    }
  }, {
    eventName: "mousedown",
    fn: cancel
  }, {
    eventName: "mouseup",
    fn: cancel
  }, {
    eventName: "click",
    fn: cancel
  }, {
    eventName: "touchstart",
    fn: cancel
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "wheel",
    fn: cancel,
    options: {
      passive: true
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useKeyboardSensor(api) {
  var unbindEventsRef = reactExports.useRef(noop$1);
  var startCaptureBinding = useMemo(function() {
    return {
      eventName: "keydown",
      fn: function onKeyDown(event) {
        if (event.defaultPrevented) {
          return;
        }
        if (event.keyCode !== space) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var preDrag = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!preDrag) {
          return;
        }
        event.preventDefault();
        var isCapturing = true;
        var actions = preDrag.snapLift();
        unbindEventsRef.current();
        function stop() {
          !isCapturing ? invariant() : void 0;
          isCapturing = false;
          unbindEventsRef.current();
          listenForCapture();
        }
        unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
          capture: true,
          passive: false
        });
      }
    };
  }, [api]);
  var listenForCapture = useCallback(function tryStartCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}
var idle$2 = {
  type: "IDLE"
};
var timeForLongPress = 120;
var forcePressThreshold = 0.15;
function getWindowBindings(_ref) {
  var cancel = _ref.cancel, getPhase = _ref.getPhase;
  return [{
    eventName: "orientationchange",
    fn: cancel
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "contextmenu",
    fn: function fn(event) {
      event.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: function fn(event) {
      if (getPhase().type !== "DRAGGING") {
        cancel();
        return;
      }
      if (event.keyCode === escape$1) {
        event.preventDefault();
      }
      cancel();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function getHandleBindings(_ref2) {
  var cancel = _ref2.cancel, completed = _ref2.completed, getPhase = _ref2.getPhase;
  return [{
    eventName: "touchmove",
    options: {
      capture: false
    },
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      phase.hasMoved = true;
      var _event$touches$ = event.touches[0], clientX = _event$touches$.clientX, clientY = _event$touches$.clientY;
      var point = {
        x: clientX,
        y: clientY
      };
      event.preventDefault();
      phase.actions.move(point);
    }
  }, {
    eventName: "touchend",
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: "touchcancel",
    fn: function fn(event) {
      if (getPhase().type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      cancel();
    }
  }, {
    eventName: "touchforcechange",
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== "IDLE") ? invariant() : void 0;
      var touch = event.touches[0];
      if (!touch) {
        return;
      }
      var isForcePress = touch.force >= forcePressThreshold;
      if (!isForcePress) {
        return;
      }
      var shouldRespect = phase.actions.shouldRespectForcePress();
      if (phase.type === "PENDING") {
        if (shouldRespect) {
          cancel();
        }
        return;
      }
      if (shouldRespect) {
        if (phase.hasMoved) {
          event.preventDefault();
          return;
        }
        cancel();
        return;
      }
      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useTouchSensor(api) {
  var phaseRef = reactExports.useRef(idle$2);
  var unbindEventsRef = reactExports.useRef(noop);
  var getPhase = useCallback(function getPhase2() {
    return phaseRef.current;
  }, []);
  var setPhase = useCallback(function setPhase2(phase) {
    phaseRef.current = phase;
  }, []);
  var startCaptureBinding = useMemo(function() {
    return {
      eventName: "touchstart",
      fn: function onTouchStart(event) {
        if (event.defaultPrevented) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!actions) {
          return;
        }
        var touch = event.touches[0];
        var clientX = touch.clientX, clientY = touch.clientY;
        var point = {
          x: clientX,
          y: clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var listenForCapture = useCallback(function listenForCapture2() {
    var options = {
      capture: true,
      passive: false
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  var stop = useCallback(function() {
    var current = phaseRef.current;
    if (current.type === "IDLE") {
      return;
    }
    if (current.type === "PENDING") {
      clearTimeout(current.longPressTimerId);
    }
    setPhase(idle$2);
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture, setPhase]);
  var cancel = useCallback(function() {
    var phase = phaseRef.current;
    stop();
    if (phase.type === "DRAGGING") {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }
    if (phase.type === "PENDING") {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = useCallback(function bindCapturingEvents2() {
    var options = {
      capture: true,
      passive: false
    };
    var args = {
      cancel,
      completed: stop,
      getPhase
    };
    var unbindTarget = bindEvents(window, getHandleBindings(args), options);
    var unbindWindow = bindEvents(window, getWindowBindings(args), options);
    unbindEventsRef.current = function unbindAll() {
      unbindTarget();
      unbindWindow();
    };
  }, [cancel, getPhase, stop]);
  var startDragging = useCallback(function startDragging2() {
    var phase = getPhase();
    !(phase.type === "PENDING") ? invariant() : void 0;
    var actions = phase.actions.fluidLift(phase.point);
    setPhase({
      type: "DRAGGING",
      actions,
      hasMoved: false
    });
  }, [getPhase, setPhase]);
  var startPendingDrag = useCallback(function startPendingDrag2(actions, point) {
    !(getPhase().type === "IDLE") ? invariant() : void 0;
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    setPhase({
      type: "PENDING",
      point,
      actions,
      longPressTimerId
    });
    bindCapturingEvents();
  }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
      var phase = getPhase();
      if (phase.type === "PENDING") {
        clearTimeout(phase.longPressTimerId);
        setPhase(idle$2);
      }
    };
  }, [getPhase, listenForCapture, setPhase]);
  useIsomorphicLayoutEffect(function webkitHack() {
    var unbind = bindEvents(window, [{
      eventName: "touchmove",
      fn: function fn() {
      },
      options: {
        capture: false,
        passive: false
      }
    }]);
    return unbind;
  }, []);
}
var interactiveTagNames = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
};
function isAnInteractiveElement(parent, current) {
  if (current == null) {
    return false;
  }
  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);
  if (hasAnInteractiveTag) {
    return true;
  }
  var attribute = current.getAttribute("contenteditable");
  if (attribute === "true" || attribute === "") {
    return true;
  }
  if (current === parent) {
    return false;
  }
  return isAnInteractiveElement(parent, current.parentElement);
}
function isEventInInteractiveElement(draggable2, event) {
  var target = event.target;
  if (!isHtmlElement(target)) {
    return false;
  }
  return isAnInteractiveElement(draggable2, target);
}
var getBorderBoxCenterPosition = function(el2) {
  return getRect(el2.getBoundingClientRect()).center;
};
function isElement(el2) {
  return el2 instanceof getWindowFromEl(el2).Element;
}
var supportedMatchesName = function() {
  var base = "matches";
  if (typeof document === "undefined") {
    return base;
  }
  var candidates = [base, "msMatchesSelector", "webkitMatchesSelector"];
  var value = find(candidates, function(name) {
    return name in Element.prototype;
  });
  return value || base;
}();
function closestPonyfill(el2, selector) {
  if (el2 == null) {
    return null;
  }
  if (el2[supportedMatchesName](selector)) {
    return el2;
  }
  return closestPonyfill(el2.parentElement, selector);
}
function closest$1(el2, selector) {
  if (el2.closest) {
    return el2.closest(selector);
  }
  return closestPonyfill(el2, selector);
}
function getSelector(contextId) {
  return "[" + dragHandle.contextId + '="' + contextId + '"]';
}
function findClosestDragHandleFromEvent(contextId, event) {
  var target = event.target;
  if (!isElement(target)) {
    return null;
  }
  var selector = getSelector(contextId);
  var handle = closest$1(target, selector);
  if (!handle) {
    return null;
  }
  if (!isHtmlElement(handle)) {
    return null;
  }
  return handle;
}
function tryGetClosestDraggableIdFromEvent(contextId, event) {
  var handle = findClosestDragHandleFromEvent(contextId, event);
  if (!handle) {
    return null;
  }
  return handle.getAttribute(dragHandle.draggableId);
}
function findDraggable(contextId, draggableId) {
  var selector = "[" + draggable.contextId + '="' + contextId + '"]';
  var possible = toArray(document.querySelectorAll(selector));
  var draggable$1 = find(possible, function(el2) {
    return el2.getAttribute(draggable.id) === draggableId;
  });
  if (!draggable$1) {
    return null;
  }
  if (!isHtmlElement(draggable$1)) {
    return null;
  }
  return draggable$1;
}
function preventDefault(event) {
  event.preventDefault();
}
function _isActive(_ref) {
  var expected = _ref.expected, phase = _ref.phase, isLockActive = _ref.isLockActive;
  _ref.shouldWarn;
  if (!isLockActive()) {
    return false;
  }
  if (expected !== phase) {
    return false;
  }
  return true;
}
function canStart(_ref2) {
  var lockAPI = _ref2.lockAPI, store = _ref2.store, registry = _ref2.registry, draggableId = _ref2.draggableId;
  if (lockAPI.isClaimed()) {
    return false;
  }
  var entry = registry.draggable.findById(draggableId);
  if (!entry) {
    return false;
  }
  if (!entry.options.isEnabled) {
    return false;
  }
  if (!canStartDrag(store.getState(), draggableId)) {
    return false;
  }
  return true;
}
function tryStart(_ref3) {
  var lockAPI = _ref3.lockAPI, contextId = _ref3.contextId, store = _ref3.store, registry = _ref3.registry, draggableId = _ref3.draggableId, forceSensorStop = _ref3.forceSensorStop, sourceEvent = _ref3.sourceEvent;
  var shouldStart = canStart({
    lockAPI,
    store,
    registry,
    draggableId
  });
  if (!shouldStart) {
    return null;
  }
  var entry = registry.draggable.getById(draggableId);
  var el2 = findDraggable(contextId, entry.descriptor.id);
  if (!el2) {
    return null;
  }
  if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el2, sourceEvent)) {
    return null;
  }
  var lock = lockAPI.claim(forceSensorStop || noop);
  var phase = "PRE_DRAG";
  function getShouldRespectForcePress() {
    return entry.options.shouldRespectForcePress;
  }
  function isLockActive() {
    return lockAPI.isActive(lock);
  }
  function tryDispatch(expected, getAction) {
    if (_isActive({
      expected,
      phase,
      isLockActive,
      shouldWarn: true
    })) {
      store.dispatch(getAction());
    }
  }
  var tryDispatchWhenDragging = tryDispatch.bind(null, "DRAGGING");
  function lift$12(args) {
    function completed() {
      lockAPI.release();
      phase = "COMPLETED";
    }
    if (phase !== "PRE_DRAG") {
      completed();
      !(phase === "PRE_DRAG") ? invariant() : void 0;
    }
    store.dispatch(lift(args.liftActionArgs));
    phase = "DRAGGING";
    function finish3(reason, options) {
      if (options === void 0) {
        options = {
          shouldBlockNextClick: false
        };
      }
      args.cleanup();
      if (options.shouldBlockNextClick) {
        var unbind = bindEvents(window, [{
          eventName: "click",
          fn: preventDefault,
          options: {
            once: true,
            passive: false,
            capture: true
          }
        }]);
        setTimeout(unbind);
      }
      completed();
      store.dispatch(drop({
        reason
      }));
    }
    return _extends({
      isActive: function isActive() {
        return _isActive({
          expected: "DRAGGING",
          phase,
          isLockActive,
          shouldWarn: false
        });
      },
      shouldRespectForcePress: getShouldRespectForcePress,
      drop: function drop5(options) {
        return finish3("DROP", options);
      },
      cancel: function cancel(options) {
        return finish3("CANCEL", options);
      }
    }, args.actions);
  }
  function fluidLift(clientSelection) {
    var move$1 = rafSchd(function(client2) {
      tryDispatchWhenDragging(function() {
        return move({
          client: client2
        });
      });
    });
    var api = lift$12({
      liftActionArgs: {
        id: draggableId,
        clientSelection,
        movementMode: "FLUID"
      },
      cleanup: function cleanup() {
        return move$1.cancel();
      },
      actions: {
        move: move$1
      }
    });
    return _extends({}, api, {
      move: move$1
    });
  }
  function snapLift() {
    var actions = {
      moveUp: function moveUp$1() {
        return tryDispatchWhenDragging(moveUp);
      },
      moveRight: function moveRight$1() {
        return tryDispatchWhenDragging(moveRight);
      },
      moveDown: function moveDown$1() {
        return tryDispatchWhenDragging(moveDown);
      },
      moveLeft: function moveLeft$1() {
        return tryDispatchWhenDragging(moveLeft);
      }
    };
    return lift$12({
      liftActionArgs: {
        id: draggableId,
        clientSelection: getBorderBoxCenterPosition(el2),
        movementMode: "SNAP"
      },
      cleanup: noop,
      actions
    });
  }
  function abortPreDrag() {
    var shouldRelease = _isActive({
      expected: "PRE_DRAG",
      phase,
      isLockActive,
      shouldWarn: true
    });
    if (shouldRelease) {
      lockAPI.release();
    }
  }
  var preDrag = {
    isActive: function isActive() {
      return _isActive({
        expected: "PRE_DRAG",
        phase,
        isLockActive,
        shouldWarn: false
      });
    },
    shouldRespectForcePress: getShouldRespectForcePress,
    fluidLift,
    snapLift,
    abort: abortPreDrag
  };
  return preDrag;
}
var defaultSensors = [useMouseSensor, useKeyboardSensor, useTouchSensor];
function useSensorMarshal(_ref4) {
  var contextId = _ref4.contextId, store = _ref4.store, registry = _ref4.registry, customSensors = _ref4.customSensors, enableDefaultSensors = _ref4.enableDefaultSensors;
  var useSensors = [].concat(enableDefaultSensors ? defaultSensors : [], customSensors || []);
  var lockAPI = reactExports.useState(function() {
    return create();
  })[0];
  var tryAbandonLock = useCallback(function tryAbandonLock2(previous, current) {
    if (previous.isDragging && !current.isDragging) {
      lockAPI.tryAbandon();
    }
  }, [lockAPI]);
  useIsomorphicLayoutEffect(function listenToStore() {
    var previous = store.getState();
    var unsubscribe = store.subscribe(function() {
      var current = store.getState();
      tryAbandonLock(previous, current);
      previous = current;
    });
    return unsubscribe;
  }, [lockAPI, store, tryAbandonLock]);
  useIsomorphicLayoutEffect(function() {
    return lockAPI.tryAbandon;
  }, [lockAPI.tryAbandon]);
  var canGetLock = useCallback(function(draggableId) {
    return canStart({
      lockAPI,
      registry,
      store,
      draggableId
    });
  }, [lockAPI, registry, store]);
  var tryGetLock = useCallback(function(draggableId, forceStop, options) {
    return tryStart({
      lockAPI,
      registry,
      contextId,
      store,
      draggableId,
      forceSensorStop: forceStop,
      sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
    });
  }, [contextId, lockAPI, registry, store]);
  var findClosestDraggableId = useCallback(function(event) {
    return tryGetClosestDraggableIdFromEvent(contextId, event);
  }, [contextId]);
  var findOptionsForDraggable = useCallback(function(id2) {
    var entry = registry.draggable.findById(id2);
    return entry ? entry.options : null;
  }, [registry.draggable]);
  var tryReleaseLock = useCallback(function tryReleaseLock2() {
    if (!lockAPI.isClaimed()) {
      return;
    }
    lockAPI.tryAbandon();
    if (store.getState().phase !== "IDLE") {
      store.dispatch(flush());
    }
  }, [lockAPI, store]);
  var isLockClaimed = useCallback(lockAPI.isClaimed, [lockAPI]);
  var api = useMemo(function() {
    return {
      canGetLock,
      tryGetLock,
      findClosestDraggableId,
      findOptionsForDraggable,
      tryReleaseLock,
      isLockClaimed
    };
  }, [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
  for (var i = 0; i < useSensors.length; i++) {
    useSensors[i](api);
  }
}
var createResponders = function createResponders2(props) {
  return {
    onBeforeCapture: props.onBeforeCapture,
    onBeforeDragStart: props.onBeforeDragStart,
    onDragStart: props.onDragStart,
    onDragEnd: props.onDragEnd,
    onDragUpdate: props.onDragUpdate
  };
};
function getStore(lazyRef) {
  !lazyRef.current ? invariant() : void 0;
  return lazyRef.current;
}
function App$1(props) {
  var contextId = props.contextId, setCallbacks = props.setCallbacks, sensors = props.sensors, nonce = props.nonce, dragHandleUsageInstructions2 = props.dragHandleUsageInstructions;
  var lazyStoreRef = reactExports.useRef(null);
  var lastPropsRef = usePrevious(props);
  var getResponders = useCallback(function() {
    return createResponders(lastPropsRef.current);
  }, [lastPropsRef]);
  var announce = useAnnouncer(contextId);
  var dragHandleUsageInstructionsId = useHiddenTextElement({
    contextId,
    text: dragHandleUsageInstructions2
  });
  var styleMarshal = useStyleMarshal(contextId, nonce);
  var lazyDispatch = useCallback(function(action) {
    getStore(lazyStoreRef).dispatch(action);
  }, []);
  var marshalCallbacks = useMemo(function() {
    return bindActionCreators$1({
      publishWhileDragging,
      updateDroppableScroll,
      updateDroppableIsEnabled,
      updateDroppableIsCombineEnabled,
      collectionStarting
    }, lazyDispatch);
  }, [lazyDispatch]);
  var registry = useRegistry();
  var dimensionMarshal = useMemo(function() {
    return createDimensionMarshal(registry, marshalCallbacks);
  }, [registry, marshalCallbacks]);
  var autoScroller = useMemo(function() {
    return createAutoScroller(_extends({
      scrollWindow,
      scrollDroppable: dimensionMarshal.scrollDroppable
    }, bindActionCreators$1({
      move
    }, lazyDispatch)));
  }, [dimensionMarshal.scrollDroppable, lazyDispatch]);
  var focusMarshal = useFocusMarshal(contextId);
  var store = useMemo(function() {
    return createStore({
      announce,
      autoScroller,
      dimensionMarshal,
      focusMarshal,
      getResponders,
      styleMarshal
    });
  }, [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);
  lazyStoreRef.current = store;
  var tryResetStore = useCallback(function() {
    var current = getStore(lazyStoreRef);
    var state = current.getState();
    if (state.phase !== "IDLE") {
      current.dispatch(flush());
    }
  }, []);
  var isDragging = useCallback(function() {
    var state = getStore(lazyStoreRef).getState();
    return state.isDragging || state.phase === "DROP_ANIMATING";
  }, []);
  var appCallbacks = useMemo(function() {
    return {
      isDragging,
      tryAbort: tryResetStore
    };
  }, [isDragging, tryResetStore]);
  setCallbacks(appCallbacks);
  var getCanLift = useCallback(function(id2) {
    return canStartDrag(getStore(lazyStoreRef).getState(), id2);
  }, []);
  var getIsMovementAllowed = useCallback(function() {
    return isMovementAllowed(getStore(lazyStoreRef).getState());
  }, []);
  var appContext = useMemo(function() {
    return {
      marshal: dimensionMarshal,
      focus: focusMarshal,
      contextId,
      canLift: getCanLift,
      isMovementAllowed: getIsMovementAllowed,
      dragHandleUsageInstructionsId,
      registry
    };
  }, [contextId, dimensionMarshal, dragHandleUsageInstructionsId, focusMarshal, getCanLift, getIsMovementAllowed, registry]);
  useSensorMarshal({
    contextId,
    store,
    registry,
    customSensors: sensors,
    enableDefaultSensors: props.enableDefaultSensors !== false
  });
  reactExports.useEffect(function() {
    return tryResetStore;
  }, [tryResetStore]);
  return React.createElement(AppContext.Provider, {
    value: appContext
  }, React.createElement(Provider, {
    context: StoreContext,
    store
  }, props.children));
}
var count$1 = 0;
function useInstanceCount() {
  return useMemo(function() {
    return "" + count$1++;
  }, []);
}
function DragDropContext(props) {
  var contextId = useInstanceCount();
  var dragHandleUsageInstructions2 = props.dragHandleUsageInstructions || preset.dragHandleUsageInstructions;
  return React.createElement(ErrorBoundary, null, function(setCallbacks) {
    return React.createElement(App$1, {
      nonce: props.nonce,
      contextId,
      setCallbacks,
      dragHandleUsageInstructions: dragHandleUsageInstructions2,
      enableDefaultSensors: props.enableDefaultSensors,
      sensors: props.sensors,
      onBeforeCapture: props.onBeforeCapture,
      onBeforeDragStart: props.onBeforeDragStart,
      onDragStart: props.onDragStart,
      onDragUpdate: props.onDragUpdate,
      onDragEnd: props.onDragEnd
    }, props.children);
  });
}
var isEqual$1 = function isEqual3(base) {
  return function(value) {
    return base === value;
  };
};
var isScroll = isEqual$1("scroll");
var isAuto = isEqual$1("auto");
var isEither = function isEither2(overflow, fn) {
  return fn(overflow.overflowX) || fn(overflow.overflowY);
};
var isElementScrollable = function isElementScrollable2(el2) {
  var style2 = window.getComputedStyle(el2);
  var overflow = {
    overflowX: style2.overflowX,
    overflowY: style2.overflowY
  };
  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};
var isBodyScrollable = function isBodyScrollable2() {
  {
    return false;
  }
};
var getClosestScrollable = function getClosestScrollable2(el2) {
  if (el2 == null) {
    return null;
  }
  if (el2 === document.body) {
    return isBodyScrollable() ? el2 : null;
  }
  if (el2 === document.documentElement) {
    return null;
  }
  if (!isElementScrollable(el2)) {
    return getClosestScrollable2(el2.parentElement);
  }
  return el2;
};
var getScroll$1 = function(el2) {
  return {
    x: el2.scrollLeft,
    y: el2.scrollTop
  };
};
var getIsFixed = function getIsFixed2(el2) {
  if (!el2) {
    return false;
  }
  var style2 = window.getComputedStyle(el2);
  if (style2.position === "fixed") {
    return true;
  }
  return getIsFixed2(el2.parentElement);
};
var getEnv = function(start3) {
  var closestScrollable = getClosestScrollable(start3);
  var isFixedOnPage = getIsFixed(start3);
  return {
    closestScrollable,
    isFixedOnPage
  };
};
var getDroppableDimension = function(_ref) {
  var descriptor = _ref.descriptor, isEnabled = _ref.isEnabled, isCombineEnabled = _ref.isCombineEnabled, isFixedOnPage = _ref.isFixedOnPage, direction = _ref.direction, client2 = _ref.client, page = _ref.page, closest3 = _ref.closest;
  var frame = function() {
    if (!closest3) {
      return null;
    }
    var scrollSize = closest3.scrollSize, frameClient = closest3.client;
    var maxScroll = getMaxScroll({
      scrollHeight: scrollSize.scrollHeight,
      scrollWidth: scrollSize.scrollWidth,
      height: frameClient.paddingBox.height,
      width: frameClient.paddingBox.width
    });
    return {
      pageMarginBox: closest3.page.marginBox,
      frameClient,
      scrollSize,
      shouldClipSubject: closest3.shouldClipSubject,
      scroll: {
        initial: closest3.scroll,
        current: closest3.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  }();
  var axis = direction === "vertical" ? vertical : horizontal;
  var subject = getSubject({
    page,
    withPlaceholder: null,
    axis,
    frame
  });
  var dimension = {
    descriptor,
    isCombineEnabled,
    isFixedOnPage,
    axis,
    isEnabled,
    client: client2,
    page,
    frame,
    subject
  };
  return dimension;
};
var getClient = function getClient2(targetRef, closestScrollable) {
  var base = getBox(targetRef);
  if (!closestScrollable) {
    return base;
  }
  if (targetRef !== closestScrollable) {
    return base;
  }
  var top = base.paddingBox.top - closestScrollable.scrollTop;
  var left = base.paddingBox.left - closestScrollable.scrollLeft;
  var bottom = top + closestScrollable.scrollHeight;
  var right = left + closestScrollable.scrollWidth;
  var paddingBox = {
    top,
    right,
    bottom,
    left
  };
  var borderBox = expand(paddingBox, base.border);
  var client2 = createBox({
    borderBox,
    margin: base.margin,
    border: base.border,
    padding: base.padding
  });
  return client2;
};
var getDimension = function(_ref) {
  var ref2 = _ref.ref, descriptor = _ref.descriptor, env = _ref.env, windowScroll = _ref.windowScroll, direction = _ref.direction, isDropDisabled = _ref.isDropDisabled, isCombineEnabled = _ref.isCombineEnabled, shouldClipSubject = _ref.shouldClipSubject;
  var closestScrollable = env.closestScrollable;
  var client2 = getClient(ref2, closestScrollable);
  var page = withScroll(client2, windowScroll);
  var closest3 = function() {
    if (!closestScrollable) {
      return null;
    }
    var frameClient = getBox(closestScrollable);
    var scrollSize = {
      scrollHeight: closestScrollable.scrollHeight,
      scrollWidth: closestScrollable.scrollWidth
    };
    return {
      client: frameClient,
      page: withScroll(frameClient, windowScroll),
      scroll: getScroll$1(closestScrollable),
      scrollSize,
      shouldClipSubject
    };
  }();
  var dimension = getDroppableDimension({
    descriptor,
    isEnabled: !isDropDisabled,
    isCombineEnabled,
    isFixedOnPage: env.isFixedOnPage,
    direction,
    client: client2,
    page,
    closest: closest3
  });
  return dimension;
};
var immediate = {
  passive: false
};
var delayed = {
  passive: true
};
var getListenerOptions = function(options) {
  return options.shouldPublishImmediately ? immediate : delayed;
};
function useRequiredContext(Context) {
  var result = reactExports.useContext(Context);
  !result ? invariant() : void 0;
  return result;
}
var getClosestScrollableFromDrag = function getClosestScrollableFromDrag2(dragging) {
  return dragging && dragging.env.closestScrollable || null;
};
function useDroppablePublisher(args) {
  var whileDraggingRef = reactExports.useRef(null);
  var appContext = useRequiredContext(AppContext);
  var uniqueId = useUniqueId("droppable");
  var registry = appContext.registry, marshal = appContext.marshal;
  var previousRef = usePrevious(args);
  var descriptor = useMemo(function() {
    return {
      id: args.droppableId,
      type: args.type,
      mode: args.mode
    };
  }, [args.droppableId, args.mode, args.type]);
  var publishedDescriptorRef = reactExports.useRef(descriptor);
  var memoizedUpdateScroll = useMemo(function() {
    return memoizeOne(function(x, y3) {
      !whileDraggingRef.current ? invariant() : void 0;
      var scroll4 = {
        x,
        y: y3
      };
      marshal.updateDroppableScroll(descriptor.id, scroll4);
    });
  }, [descriptor.id, marshal]);
  var getClosestScroll = useCallback(function() {
    var dragging = whileDraggingRef.current;
    if (!dragging || !dragging.env.closestScrollable) {
      return origin;
    }
    return getScroll$1(dragging.env.closestScrollable);
  }, []);
  var updateScroll = useCallback(function() {
    var scroll4 = getClosestScroll();
    memoizedUpdateScroll(scroll4.x, scroll4.y);
  }, [getClosestScroll, memoizedUpdateScroll]);
  var scheduleScrollUpdate = useMemo(function() {
    return rafSchd(updateScroll);
  }, [updateScroll]);
  var onClosestScroll = useCallback(function() {
    var dragging = whileDraggingRef.current;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !(dragging && closest3) ? invariant() : void 0;
    var options = dragging.scrollOptions;
    if (options.shouldPublishImmediately) {
      updateScroll();
      return;
    }
    scheduleScrollUpdate();
  }, [scheduleScrollUpdate, updateScroll]);
  var getDimensionAndWatchScroll = useCallback(function(windowScroll, options) {
    !!whileDraggingRef.current ? invariant() : void 0;
    var previous = previousRef.current;
    var ref2 = previous.getDroppableRef();
    !ref2 ? invariant() : void 0;
    var env = getEnv(ref2);
    var dragging = {
      ref: ref2,
      descriptor,
      env,
      scrollOptions: options
    };
    whileDraggingRef.current = dragging;
    var dimension = getDimension({
      ref: ref2,
      descriptor,
      env,
      windowScroll,
      direction: previous.direction,
      isDropDisabled: previous.isDropDisabled,
      isCombineEnabled: previous.isCombineEnabled,
      shouldClipSubject: !previous.ignoreContainerClipping
    });
    var scrollable = env.closestScrollable;
    if (scrollable) {
      scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
      scrollable.addEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
    }
    return dimension;
  }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
  var getScrollWhileDragging = useCallback(function() {
    var dragging = whileDraggingRef.current;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !(dragging && closest3) ? invariant() : void 0;
    return getScroll$1(closest3);
  }, []);
  var dragStopped = useCallback(function() {
    var dragging = whileDraggingRef.current;
    !dragging ? invariant() : void 0;
    var closest3 = getClosestScrollableFromDrag(dragging);
    whileDraggingRef.current = null;
    if (!closest3) {
      return;
    }
    scheduleScrollUpdate.cancel();
    closest3.removeAttribute(scrollContainer.contextId);
    closest3.removeEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
  }, [onClosestScroll, scheduleScrollUpdate]);
  var scroll3 = useCallback(function(change) {
    var dragging = whileDraggingRef.current;
    !dragging ? invariant() : void 0;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !closest3 ? invariant() : void 0;
    closest3.scrollTop += change.y;
    closest3.scrollLeft += change.x;
  }, []);
  var callbacks = useMemo(function() {
    return {
      getDimensionAndWatchScroll,
      getScrollWhileDragging,
      dragStopped,
      scroll: scroll3
    };
  }, [dragStopped, getDimensionAndWatchScroll, getScrollWhileDragging, scroll3]);
  var entry = useMemo(function() {
    return {
      uniqueId,
      descriptor,
      callbacks
    };
  }, [callbacks, descriptor, uniqueId]);
  useIsomorphicLayoutEffect(function() {
    publishedDescriptorRef.current = entry.descriptor;
    registry.droppable.register(entry);
    return function() {
      if (whileDraggingRef.current) {
        dragStopped();
      }
      registry.droppable.unregister(entry);
    };
  }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
  useIsomorphicLayoutEffect(function() {
    if (!whileDraggingRef.current) {
      return;
    }
    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
  }, [args.isDropDisabled, marshal]);
  useIsomorphicLayoutEffect(function() {
    if (!whileDraggingRef.current) {
      return;
    }
    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
  }, [args.isCombineEnabled, marshal]);
}
function noop$2() {
}
var empty = {
  width: 0,
  height: 0,
  margin: noSpacing
};
var getSize = function getSize2(_ref) {
  var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount, placeholder2 = _ref.placeholder, animate = _ref.animate;
  if (isAnimatingOpenOnMount) {
    return empty;
  }
  if (animate === "close") {
    return empty;
  }
  return {
    height: placeholder2.client.borderBox.height,
    width: placeholder2.client.borderBox.width,
    margin: placeholder2.client.margin
  };
};
var getStyle = function getStyle2(_ref2) {
  var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount, placeholder2 = _ref2.placeholder, animate = _ref2.animate;
  var size = getSize({
    isAnimatingOpenOnMount,
    placeholder: placeholder2,
    animate
  });
  return {
    display: placeholder2.display,
    boxSizing: "border-box",
    width: size.width,
    height: size.height,
    marginTop: size.margin.top,
    marginRight: size.margin.right,
    marginBottom: size.margin.bottom,
    marginLeft: size.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: animate !== "none" ? transitions.placeholder : null
  };
};
function Placeholder(props) {
  var animateOpenTimerRef = reactExports.useRef(null);
  var tryClearAnimateOpenTimer = useCallback(function() {
    if (!animateOpenTimerRef.current) {
      return;
    }
    clearTimeout(animateOpenTimerRef.current);
    animateOpenTimerRef.current = null;
  }, []);
  var animate = props.animate, onTransitionEnd = props.onTransitionEnd, onClose = props.onClose, contextId = props.contextId;
  var _useState = reactExports.useState(props.animate === "open"), isAnimatingOpenOnMount = _useState[0], setIsAnimatingOpenOnMount = _useState[1];
  reactExports.useEffect(function() {
    if (!isAnimatingOpenOnMount) {
      return noop$2;
    }
    if (animate !== "open") {
      tryClearAnimateOpenTimer();
      setIsAnimatingOpenOnMount(false);
      return noop$2;
    }
    if (animateOpenTimerRef.current) {
      return noop$2;
    }
    animateOpenTimerRef.current = setTimeout(function() {
      animateOpenTimerRef.current = null;
      setIsAnimatingOpenOnMount(false);
    });
    return tryClearAnimateOpenTimer;
  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
  var onSizeChangeEnd = useCallback(function(event) {
    if (event.propertyName !== "height") {
      return;
    }
    onTransitionEnd();
    if (animate === "close") {
      onClose();
    }
  }, [animate, onClose, onTransitionEnd]);
  var style2 = getStyle({
    isAnimatingOpenOnMount,
    animate: props.animate,
    placeholder: props.placeholder
  });
  return React.createElement(props.placeholder.tagName, {
    style: style2,
    "data-rbd-placeholder-context-id": contextId,
    onTransitionEnd: onSizeChangeEnd,
    ref: props.innerRef
  });
}
var Placeholder$1 = React.memo(Placeholder);
var DroppableContext = React.createContext(null);
var AnimateInOut = function(_React$PureComponent) {
  _inheritsLoose(AnimateInOut2, _React$PureComponent);
  function AnimateInOut2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      isVisible: Boolean(_this.props.on),
      data: _this.props.on,
      animate: _this.props.shouldAnimate && _this.props.on ? "open" : "none"
    };
    _this.onClose = function() {
      if (_this.state.animate !== "close") {
        return;
      }
      _this.setState({
        isVisible: false
      });
    };
    return _this;
  }
  AnimateInOut2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (!props.shouldAnimate) {
      return {
        isVisible: Boolean(props.on),
        data: props.on,
        animate: "none"
      };
    }
    if (props.on) {
      return {
        isVisible: true,
        data: props.on,
        animate: "open"
      };
    }
    if (state.isVisible) {
      return {
        isVisible: true,
        data: state.data,
        animate: "close"
      };
    }
    return {
      isVisible: false,
      animate: "close",
      data: null
    };
  };
  var _proto = AnimateInOut2.prototype;
  _proto.render = function render() {
    if (!this.state.isVisible) {
      return null;
    }
    var provided = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(provided);
  };
  return AnimateInOut2;
}(React.PureComponent);
var zIndexOptions = {
  dragging: 5e3,
  dropAnimating: 4500
};
var getDraggingTransition = function getDraggingTransition2(shouldAnimateDragMovement, dropping) {
  if (dropping) {
    return transitions.drop(dropping.duration);
  }
  if (shouldAnimateDragMovement) {
    return transitions.snap;
  }
  return transitions.fluid;
};
var getDraggingOpacity = function getDraggingOpacity2(isCombining, isDropAnimating) {
  if (!isCombining) {
    return null;
  }
  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};
var getShouldDraggingAnimate = function getShouldDraggingAnimate2(dragging) {
  if (dragging.forceShouldAnimate != null) {
    return dragging.forceShouldAnimate;
  }
  return dragging.mode === "SNAP";
};
function getDraggingStyle(dragging) {
  var dimension = dragging.dimension;
  var box = dimension.client;
  var offset22 = dragging.offset, combineWith = dragging.combineWith, dropping = dragging.dropping;
  var isCombining = Boolean(combineWith);
  var shouldAnimate = getShouldDraggingAnimate(dragging);
  var isDropAnimating = Boolean(dropping);
  var transform = isDropAnimating ? transforms.drop(offset22, isCombining) : transforms.moveTo(offset22);
  var style2 = {
    position: "fixed",
    top: box.marginBox.top,
    left: box.marginBox.left,
    boxSizing: "border-box",
    width: box.borderBox.width,
    height: box.borderBox.height,
    transition: getDraggingTransition(shouldAnimate, dropping),
    transform,
    opacity: getDraggingOpacity(isCombining, isDropAnimating),
    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
    pointerEvents: "none"
  };
  return style2;
}
function getSecondaryStyle(secondary) {
  return {
    transform: transforms.moveTo(secondary.offset),
    transition: secondary.shouldAnimateDisplacement ? null : "none"
  };
}
function getStyle$1(mapped) {
  return mapped.type === "DRAGGING" ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}
function getDimension$1(descriptor, el2, windowScroll) {
  if (windowScroll === void 0) {
    windowScroll = origin;
  }
  var computedStyles = window.getComputedStyle(el2);
  var borderBox = el2.getBoundingClientRect();
  var client2 = calculateBox(borderBox, computedStyles);
  var page = withScroll(client2, windowScroll);
  var placeholder2 = {
    client: client2,
    tagName: el2.tagName.toLowerCase(),
    display: computedStyles.display
  };
  var displaceBy = {
    x: client2.marginBox.width,
    y: client2.marginBox.height
  };
  var dimension = {
    descriptor,
    placeholder: placeholder2,
    displaceBy,
    client: client2,
    page
  };
  return dimension;
}
function useDraggablePublisher(args) {
  var uniqueId = useUniqueId("draggable");
  var descriptor = args.descriptor, registry = args.registry, getDraggableRef = args.getDraggableRef, canDragInteractiveElements = args.canDragInteractiveElements, shouldRespectForcePress = args.shouldRespectForcePress, isEnabled = args.isEnabled;
  var options = useMemo(function() {
    return {
      canDragInteractiveElements,
      shouldRespectForcePress,
      isEnabled
    };
  }, [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
  var getDimension2 = useCallback(function(windowScroll) {
    var el2 = getDraggableRef();
    !el2 ? invariant() : void 0;
    return getDimension$1(descriptor, el2, windowScroll);
  }, [descriptor, getDraggableRef]);
  var entry = useMemo(function() {
    return {
      uniqueId,
      descriptor,
      options,
      getDimension: getDimension2
    };
  }, [descriptor, getDimension2, options, uniqueId]);
  var publishedRef = reactExports.useRef(entry);
  var isFirstPublishRef = reactExports.useRef(true);
  useIsomorphicLayoutEffect(function() {
    registry.draggable.register(publishedRef.current);
    return function() {
      return registry.draggable.unregister(publishedRef.current);
    };
  }, [registry.draggable]);
  useIsomorphicLayoutEffect(function() {
    if (isFirstPublishRef.current) {
      isFirstPublishRef.current = false;
      return;
    }
    var last = publishedRef.current;
    publishedRef.current = entry;
    registry.draggable.update(entry, last);
  }, [entry, registry.draggable]);
}
function preventHtml5Dnd(event) {
  event.preventDefault();
}
function Draggable(props) {
  var ref2 = reactExports.useRef(null);
  var setRef = useCallback(function(el2) {
    ref2.current = el2;
  }, []);
  var getRef = useCallback(function() {
    return ref2.current;
  }, []);
  var _useRequiredContext = useRequiredContext(AppContext), contextId = _useRequiredContext.contextId, dragHandleUsageInstructionsId = _useRequiredContext.dragHandleUsageInstructionsId, registry = _useRequiredContext.registry;
  var _useRequiredContext2 = useRequiredContext(DroppableContext), type = _useRequiredContext2.type, droppableId = _useRequiredContext2.droppableId;
  var descriptor = useMemo(function() {
    return {
      id: props.draggableId,
      index: props.index,
      type,
      droppableId
    };
  }, [props.draggableId, props.index, type, droppableId]);
  var children = props.children, draggableId = props.draggableId, isEnabled = props.isEnabled, shouldRespectForcePress = props.shouldRespectForcePress, canDragInteractiveElements = props.canDragInteractiveElements, isClone = props.isClone, mapped = props.mapped, dropAnimationFinishedAction = props.dropAnimationFinished;
  if (!isClone) {
    var forPublisher = useMemo(function() {
      return {
        descriptor,
        registry,
        getDraggableRef: getRef,
        canDragInteractiveElements,
        shouldRespectForcePress,
        isEnabled
      };
    }, [descriptor, registry, getRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled]);
    useDraggablePublisher(forPublisher);
  }
  var dragHandleProps = useMemo(function() {
    return isEnabled ? {
      tabIndex: 0,
      role: "button",
      "aria-describedby": dragHandleUsageInstructionsId,
      "data-rbd-drag-handle-draggable-id": draggableId,
      "data-rbd-drag-handle-context-id": contextId,
      draggable: false,
      onDragStart: preventHtml5Dnd
    } : null;
  }, [contextId, dragHandleUsageInstructionsId, draggableId, isEnabled]);
  var onMoveEnd = useCallback(function(event) {
    if (mapped.type !== "DRAGGING") {
      return;
    }
    if (!mapped.dropping) {
      return;
    }
    if (event.propertyName !== "transform") {
      return;
    }
    dropAnimationFinishedAction();
  }, [dropAnimationFinishedAction, mapped]);
  var provided = useMemo(function() {
    var style2 = getStyle$1(mapped);
    var onTransitionEnd = mapped.type === "DRAGGING" && mapped.dropping ? onMoveEnd : null;
    var result = {
      innerRef: setRef,
      draggableProps: {
        "data-rbd-draggable-context-id": contextId,
        "data-rbd-draggable-id": draggableId,
        style: style2,
        onTransitionEnd
      },
      dragHandleProps
    };
    return result;
  }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);
  var rubric = useMemo(function() {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  }, [descriptor.droppableId, descriptor.id, descriptor.index, descriptor.type]);
  return children(provided, mapped.snapshot, rubric);
}
var isStrictEqual = function(a, b2) {
  return a === b2;
};
var whatIsDraggedOverFromResult = function(result) {
  var combine2 = result.combine, destination = result.destination;
  if (destination) {
    return destination.droppableId;
  }
  if (combine2) {
    return combine2.droppableId;
  }
  return null;
};
var getCombineWithFromResult = function getCombineWithFromResult2(result) {
  return result.combine ? result.combine.draggableId : null;
};
var getCombineWithFromImpact = function getCombineWithFromImpact2(impact) {
  return impact.at && impact.at.type === "COMBINE" ? impact.at.combine.draggableId : null;
};
function getDraggableSelector() {
  var memoizedOffset = memoizeOne(function(x, y3) {
    return {
      x,
      y: y3
    };
  });
  var getMemoizedSnapshot = memoizeOne(function(mode, isClone, draggingOver, combineWith, dropping) {
    return {
      isDragging: true,
      isClone,
      isDropAnimating: Boolean(dropping),
      dropAnimation: dropping,
      mode,
      draggingOver,
      combineWith,
      combineTargetFor: null
    };
  });
  var getMemoizedProps = memoizeOne(function(offset22, mode, dimension, isClone, draggingOver, combineWith, forceShouldAnimate) {
    return {
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver,
        combineWith,
        mode,
        offset: offset22,
        dimension,
        forceShouldAnimate,
        snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
      }
    };
  });
  var selector = function selector2(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }
      var offset22 = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var draggingOver = whatIsDraggedOver(state.impact);
      var combineWith = getCombineWithFromImpact(state.impact);
      var forceShouldAnimate = state.forceShouldAnimate;
      return getMemoizedProps(memoizedOffset(offset22.x, offset22.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (completed.result.draggableId !== ownProps.draggableId) {
        return null;
      }
      var isClone = ownProps.isClone;
      var _dimension = state.dimensions.draggables[ownProps.draggableId];
      var result = completed.result;
      var mode = result.mode;
      var _draggingOver = whatIsDraggedOverFromResult(result);
      var _combineWith = getCombineWithFromResult(result);
      var duration = state.dropDuration;
      var dropping = {
        duration,
        curve: curves.drop,
        moveTo: state.newHomeClientOffset,
        opacity: _combineWith ? combine.opacity.drop : null,
        scale: _combineWith ? combine.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: state.newHomeClientOffset,
          dimension: _dimension,
          dropping,
          draggingOver: _draggingOver,
          combineWith: _combineWith,
          mode,
          forceShouldAnimate: null,
          snapshot: getMemoizedSnapshot(mode, isClone, _draggingOver, _combineWith, dropping)
        }
      };
    }
    return null;
  };
  return selector;
}
function getSecondarySnapshot(combineTargetFor) {
  return {
    isDragging: false,
    isDropAnimating: false,
    isClone: false,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor,
    combineWith: null
  };
}
var atRest = {
  mapped: {
    type: "SECONDARY",
    offset: origin,
    combineTargetFor: null,
    shouldAnimateDisplacement: true,
    snapshot: getSecondarySnapshot(null)
  }
};
function getSecondarySelector() {
  var memoizedOffset = memoizeOne(function(x, y3) {
    return {
      x,
      y: y3
    };
  });
  var getMemoizedSnapshot = memoizeOne(getSecondarySnapshot);
  var getMemoizedProps = memoizeOne(function(offset22, combineTargetFor, shouldAnimateDisplacement) {
    if (combineTargetFor === void 0) {
      combineTargetFor = null;
    }
    return {
      mapped: {
        type: "SECONDARY",
        offset: offset22,
        combineTargetFor,
        shouldAnimateDisplacement,
        snapshot: getMemoizedSnapshot(combineTargetFor)
      }
    };
  });
  var getFallback = function getFallback2(combineTargetFor) {
    return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
  };
  var getProps = function getProps2(ownId, draggingId, impact, afterCritical) {
    var visualDisplacement = impact.displaced.visible[ownId];
    var isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
    var combine2 = tryGetCombine(impact);
    var combineTargetFor = combine2 && combine2.draggableId === ownId ? draggingId : null;
    if (!visualDisplacement) {
      if (!isAfterCriticalInVirtualList) {
        return getFallback(combineTargetFor);
      }
      if (impact.displaced.invisible[ownId]) {
        return null;
      }
      var change = negate(afterCritical.displacedBy.point);
      var _offset = memoizedOffset(change.x, change.y);
      return getMemoizedProps(_offset, combineTargetFor, true);
    }
    if (isAfterCriticalInVirtualList) {
      return getFallback(combineTargetFor);
    }
    var displaceBy = impact.displacedBy.point;
    var offset22 = memoizedOffset(displaceBy.x, displaceBy.y);
    return getMemoizedProps(offset22, combineTargetFor, visualDisplacement.shouldAnimate);
  };
  var selector = function selector2(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }
      return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (completed.result.draggableId === ownProps.draggableId) {
        return null;
      }
      return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
    }
    return null;
  };
  return selector;
}
var makeMapStateToProps = function makeMapStateToProps2() {
  var draggingSelector = getDraggableSelector();
  var secondarySelector = getSecondarySelector();
  var selector = function selector2(state, ownProps) {
    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
  };
  return selector;
};
var mapDispatchToProps = {
  dropAnimationFinished
};
var ConnectedDraggable = connect(makeMapStateToProps, mapDispatchToProps, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);
function PrivateDraggable(props) {
  var droppableContext = useRequiredContext(DroppableContext);
  var isUsingCloneFor = droppableContext.isUsingCloneFor;
  if (isUsingCloneFor === props.draggableId && !props.isClone) {
    return null;
  }
  return React.createElement(ConnectedDraggable, props);
}
function PublicDraggable(props) {
  var isEnabled = typeof props.isDragDisabled === "boolean" ? !props.isDragDisabled : true;
  var canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
  var shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
  return React.createElement(PrivateDraggable, _extends({}, props, {
    isClone: false,
    isEnabled,
    canDragInteractiveElements,
    shouldRespectForcePress
  }));
}
function Droppable(props) {
  var appContext = reactExports.useContext(AppContext);
  !appContext ? invariant() : void 0;
  var contextId = appContext.contextId, isMovementAllowed2 = appContext.isMovementAllowed;
  var droppableRef = reactExports.useRef(null);
  var placeholderRef = reactExports.useRef(null);
  var children = props.children, droppableId = props.droppableId, type = props.type, mode = props.mode, direction = props.direction, ignoreContainerClipping = props.ignoreContainerClipping, isDropDisabled = props.isDropDisabled, isCombineEnabled = props.isCombineEnabled, snapshot = props.snapshot, useClone = props.useClone, updateViewportMaxScroll3 = props.updateViewportMaxScroll, getContainerForClone = props.getContainerForClone;
  var getDroppableRef = useCallback(function() {
    return droppableRef.current;
  }, []);
  var setDroppableRef = useCallback(function(value) {
    droppableRef.current = value;
  }, []);
  useCallback(function() {
    return placeholderRef.current;
  }, []);
  var setPlaceholderRef = useCallback(function(value) {
    placeholderRef.current = value;
  }, []);
  var onPlaceholderTransitionEnd = useCallback(function() {
    if (isMovementAllowed2()) {
      updateViewportMaxScroll3({
        maxScroll: getMaxWindowScroll()
      });
    }
  }, [isMovementAllowed2, updateViewportMaxScroll3]);
  useDroppablePublisher({
    droppableId,
    type,
    mode,
    direction,
    isDropDisabled,
    isCombineEnabled,
    ignoreContainerClipping,
    getDroppableRef
  });
  var placeholder2 = React.createElement(AnimateInOut, {
    on: props.placeholder,
    shouldAnimate: props.shouldAnimatePlaceholder
  }, function(_ref) {
    var onClose = _ref.onClose, data = _ref.data, animate = _ref.animate;
    return React.createElement(Placeholder$1, {
      placeholder: data,
      onClose,
      innerRef: setPlaceholderRef,
      animate,
      contextId,
      onTransitionEnd: onPlaceholderTransitionEnd
    });
  });
  var provided = useMemo(function() {
    return {
      innerRef: setDroppableRef,
      placeholder: placeholder2,
      droppableProps: {
        "data-rbd-droppable-id": droppableId,
        "data-rbd-droppable-context-id": contextId
      }
    };
  }, [contextId, droppableId, placeholder2, setDroppableRef]);
  var isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
  var droppableContext = useMemo(function() {
    return {
      droppableId,
      type,
      isUsingCloneFor
    };
  }, [droppableId, isUsingCloneFor, type]);
  function getClone() {
    if (!useClone) {
      return null;
    }
    var dragging = useClone.dragging, render = useClone.render;
    var node = React.createElement(PrivateDraggable, {
      draggableId: dragging.draggableId,
      index: dragging.source.index,
      isClone: true,
      isEnabled: true,
      shouldRespectForcePress: false,
      canDragInteractiveElements: true
    }, function(draggableProvided, draggableSnapshot) {
      return render(draggableProvided, draggableSnapshot, dragging);
    });
    return ReactDOM.createPortal(node, getContainerForClone());
  }
  return React.createElement(DroppableContext.Provider, {
    value: droppableContext
  }, children(provided, snapshot), getClone());
}
var isMatchingType = function isMatchingType2(type, critical) {
  return type === critical.droppable.type;
};
var getDraggable = function getDraggable2(critical, dimensions) {
  return dimensions.draggables[critical.draggable.id];
};
var makeMapStateToProps$1 = function makeMapStateToProps3() {
  var idleWithAnimation = {
    placeholder: null,
    shouldAnimatePlaceholder: true,
    snapshot: {
      isDraggingOver: false,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: false
    },
    useClone: null
  };
  var idleWithoutAnimation = _extends({}, idleWithAnimation, {
    shouldAnimatePlaceholder: false
  });
  var getDraggableRubric = memoizeOne(function(descriptor) {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  });
  var getMapProps = memoizeOne(function(id2, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) {
    var draggableId = dragging.descriptor.id;
    var isHome = dragging.descriptor.droppableId === id2;
    if (isHome) {
      var useClone = renderClone ? {
        render: renderClone,
        dragging: getDraggableRubric(dragging.descriptor)
      } : null;
      var _snapshot = {
        isDraggingOver: isDraggingOverForConsumer,
        draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
        draggingFromThisWith: draggableId,
        isUsingPlaceholder: true
      };
      return {
        placeholder: dragging.placeholder,
        shouldAnimatePlaceholder: false,
        snapshot: _snapshot,
        useClone
      };
    }
    if (!isEnabled) {
      return idleWithoutAnimation;
    }
    if (!isDraggingOverForImpact) {
      return idleWithAnimation;
    }
    var snapshot = {
      isDraggingOver: isDraggingOverForConsumer,
      draggingOverWith: draggableId,
      draggingFromThisWith: null,
      isUsingPlaceholder: true
    };
    return {
      placeholder: dragging.placeholder,
      shouldAnimatePlaceholder: true,
      snapshot,
      useClone: null
    };
  });
  var selector = function selector2(state, ownProps) {
    var id2 = ownProps.droppableId;
    var type = ownProps.type;
    var isEnabled = !ownProps.isDropDisabled;
    var renderClone = ownProps.renderClone;
    if (state.isDragging) {
      var critical = state.critical;
      if (!isMatchingType(type, critical)) {
        return idleWithoutAnimation;
      }
      var dragging = getDraggable(critical, state.dimensions);
      var isDraggingOver = whatIsDraggedOver(state.impact) === id2;
      return getMapProps(id2, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (!isMatchingType(type, completed.critical)) {
        return idleWithoutAnimation;
      }
      var _dragging = getDraggable(completed.critical, state.dimensions);
      return getMapProps(id2, isEnabled, whatIsDraggedOverFromResult(completed.result) === id2, whatIsDraggedOver(completed.impact) === id2, _dragging, renderClone);
    }
    if (state.phase === "IDLE" && state.completed && !state.shouldFlush) {
      var _completed = state.completed;
      if (!isMatchingType(type, _completed.critical)) {
        return idleWithoutAnimation;
      }
      var wasOver = whatIsDraggedOver(_completed.impact) === id2;
      var wasCombining = Boolean(_completed.impact.at && _completed.impact.at.type === "COMBINE");
      var isHome = _completed.critical.droppable.id === id2;
      if (wasOver) {
        return wasCombining ? idleWithAnimation : idleWithoutAnimation;
      }
      if (isHome) {
        return idleWithAnimation;
      }
      return idleWithoutAnimation;
    }
    return idleWithoutAnimation;
  };
  return selector;
};
var mapDispatchToProps$1 = {
  updateViewportMaxScroll
};
function getBody() {
  !document.body ? invariant() : void 0;
  return document.body;
}
var defaultProps = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false,
  renderClone: null,
  getContainerForClone: getBody
};
var ConnectedDroppable = connect(makeMapStateToProps$1, mapDispatchToProps$1, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
ConnectedDroppable.defaultProps = defaultProps;
const MoreOptionsModal = ({ onClose, onExport, onImport, onReset, boardName, selectedBoardId }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-content", onClick: (e2) => e2.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "modal-close", onClick: onClose, style: { float: "right", fontSize: "1.5em", cursor: "pointer" }, children: "×" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "More Options" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "settings-button",
          onClick: onExport,
          disabled: !selectedBoardId,
          children: [
            "Export Dashboard configuration for ",
            boardName
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "import-file-input", className: "settings-button", children: [
        "Import a configuration file for ",
        boardName,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "file",
            id: "import-file-input",
            accept: ".json",
            onChange: onImport,
            style: { display: "none" }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "button-danger",
          onClick: onReset,
          disabled: !selectedBoardId,
          children: [
            "Reset the layout for the ",
            boardName
          ]
        }
      )
    ] })
  ] }) });
};
const COLORS = [
  { name: "blue", hex: "#3388ff", label: "Blue" },
  { name: "red", hex: "#ff6b6b", label: "Red" },
  { name: "green", hex: "#51cf66", label: "Green" },
  { name: "orange", hex: "#ffa94d", label: "Orange" },
  { name: "yellow", hex: "#ffd43b", label: "Yellow" },
  { name: "grey", hex: "#868e96", label: "Grey" },
  { name: "black", hex: "#212529", label: "Black" }
];
const ColorPicker = ({ selectedColor, onChange }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "color-picker-flex", style: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "8px"
  }, children: COLORS.map((c2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      title: c2.label,
      onClick: () => onChange(c2.name),
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        backgroundColor: c2.hex,
        cursor: "pointer",
        border: selectedColor === c2.name ? "3px solid #000" : "1px solid rgba(0,0,0,0.1)",
        boxShadow: selectedColor === c2.name ? "0 0 0 2px #fff inset" : "none",
        transition: "transform 0.1s"
      },
      onMouseEnter: (e2) => e2.currentTarget.style.transform = "scale(1.1)",
      onMouseLeave: (e2) => e2.currentTarget.style.transform = "scale(1.0)"
    },
    c2.name
  )) });
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match2, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
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
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$1);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
const ShareConfigModal = ({ config: config2, onClose, boardName }) => {
  const [copied, setCopied] = reactExports.useState(false);
  const configString = JSON.stringify(config2);
  const encoded = btoa(unescape(encodeURIComponent(configString)));
  const shareUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?config=${encodeURIComponent(encoded)}`;
  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-content", style: { maxWidth: "600px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Share Configuration" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Copy the link below to share this configuration with others:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "10px", marginBottom: "15px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          readOnly: true,
          value: shareUrl,
          style: { flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" },
          onClick: (e2) => e2.target.select()
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCopy, className: "action-button", children: copied ? "Copied!" : "Copy" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      marginTop: "15px",
      padding: "10px",
      background: "#fff3cd",
      border: "1px solid #ffeeba",
      borderRadius: "4px",
      color: "#856404",
      fontSize: "0.9em"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
      " The recipient of this link must have a Trello account and access to the board ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: boardName || "specified" }),
      " to be able to display it. Features requiring extended write permissions will have to be granted by the recipients of this link."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "flex-end", marginTop: "20px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: onClose, children: "Close" }) })
  ] }) });
};
const SettingsScreen = ({ user, initialTab = "dashboard", onClose, onSave, onLogout, importedConfig = null, onClearImportConfig = () => {
}, viewMode = "default", onManageTasks, onGoToStats }) => {
  const [boards, setBoards] = reactExports.useState([]);
  const [selectedBoardId, setSelectedBoardId] = reactExports.useState("");
  const [allLists, setAllLists] = reactExports.useState([]);
  const [boardLabels, setBoardLabels] = reactExports.useState([]);
  const [blocks, setBlocks] = reactExports.useState([]);
  const [listColors, setListColors] = reactExports.useState({});
  const [refreshValue, setRefreshValue] = reactExports.useState(1);
  const [refreshUnit, setRefreshUnit] = reactExports.useState("minutes");
  const [showClock, setShowClock] = reactExports.useState(true);
  const [ignoreTemplateCards, setIgnoreTemplateCards] = reactExports.useState(true);
  const [ignoreCompletedCards, setIgnoreCompletedCards] = reactExports.useState(false);
  const [ignoreNoDescCards, setIgnoreNoDescCards] = reactExports.useState(false);
  const [enableMapView, setEnableMapView] = reactExports.useState(false);
  const [mapGeocodeMode, setMapGeocodeMode] = reactExports.useState("store");
  const [updateTrelloCoordinates, setUpdateTrelloCoordinates] = reactExports.useState(false);
  const [enableCardMove, setEnableCardMove] = reactExports.useState(false);
  const [enableTaskView, setEnableTaskView] = reactExports.useState(false);
  const [taskViewWorkspaces, setTaskViewWorkspaces] = reactExports.useState(null);
  const [taskViewRefreshInterval, setTaskViewRefreshInterval] = reactExports.useState({ value: 5, unit: "minutes" });
  const [userOrgs, setUserOrgs] = reactExports.useState([]);
  const [enableHomeLocation, setEnableHomeLocation] = reactExports.useState(false);
  const [homeAddress, setHomeAddress] = reactExports.useState("");
  const [homeCoordinates, setHomeCoordinates] = reactExports.useState(null);
  const [homeIcon, setHomeIcon] = reactExports.useState("home");
  const [validatingAddress, setValidatingAddress] = reactExports.useState(false);
  const [markerRules, setMarkerRules] = reactExports.useState([]);
  const [hasWritePermission, setHasWritePermission] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [showMoreOptions, setShowMoreOptions] = reactExports.useState(false);
  const [loadingLists, setLoadingLists] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState(initialTab === "tasks" ? "dashboard" : initialTab);
  const [expandedSection, setExpandedSection] = reactExports.useState(viewMode === "tasks" ? "tasks" : "board");
  reactExports.useEffect(() => {
    if (viewMode === "tasks") {
      setExpandedSection("tasks");
    } else {
      setExpandedSection("board");
    }
  }, [viewMode]);
  const [showShareModal, setShowShareModal] = reactExports.useState(false);
  const [pendingImport, setPendingImport] = reactExports.useState(null);
  const [showResetSection, setShowResetSection] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (importedConfig) {
      setPendingImport(importedConfig);
    } else if (user == null ? void 0 : user.token) {
      trelloAuth.checkTokenScopes(user.token).then((scopes) => {
        const canWrite = scopes.includes("write");
        setHasWritePermission(canWrite);
        if (!canWrite) {
          setUpdateTrelloCoordinates(false);
          setEnableCardMove(false);
        }
      });
    }
  }, [user, importedConfig]);
  const [enableStreetView, setEnableStreetView] = reactExports.useState(false);
  const [enableStats, setEnableStats] = reactExports.useState(false);
  const [statsShowArchived, setStatsShowArchived] = reactExports.useState(true);
  const [statsIncludedLists, setStatsIncludedLists] = reactExports.useState([]);
  const [statsCustomPrompt, setStatsCustomPrompt] = reactExports.useState("");
  const [isImprovingPrompt, setIsImprovingPrompt] = reactExports.useState(false);
  const [namingCard, setNamingCard] = reactExports.useState("");
  const [namingList, setNamingList] = reactExports.useState("");
  const [namingBoard, setNamingBoard] = reactExports.useState("");
  const [namingLabel, setNamingLabel] = reactExports.useState("");
  const [slideshowInterval, setSlideshowInterval] = reactExports.useState(10);
  reactExports.useEffect(() => {
    if (expandedSection === "tasks" && boards.length > 0) {
      if (userOrgs.length === 0 && user && user.token) {
        trelloFetch("/members/me/organizations?fields=id,displayName,name", user.token).then((fetchedOrgs) => {
          const allOrgsMap = /* @__PURE__ */ new Map();
          fetchedOrgs.forEach((o) => allOrgsMap.set(o.id, o));
          if (boards && boards.length > 0) {
            boards.forEach((b2) => {
              if (b2.idOrganization && b2.organization) {
                if (!allOrgsMap.has(b2.idOrganization)) {
                  allOrgsMap.set(b2.idOrganization, {
                    id: b2.idOrganization,
                    displayName: b2.organization.displayName || b2.organization.name,
                    name: b2.organization.name
                  });
                }
              }
            });
          }
          const uniqueOrgs = Array.from(allOrgsMap.values()).sort((a, b2) => (a.displayName || a.name).localeCompare(b2.displayName || b2.name));
          setUserOrgs(uniqueOrgs);
          if (taskViewWorkspaces === null || Array.isArray(taskViewWorkspaces) && taskViewWorkspaces.length === 0) {
            setTaskViewWorkspaces(uniqueOrgs.map((o) => o.id));
          }
        }).catch((e2) => console.warn("Failed to fetch orgs for settings", e2));
      }
    }
  }, [expandedSection, user, boards]);
  const [searchResults, setSearchResults] = reactExports.useState([]);
  const [isSearching, setIsSearching] = reactExports.useState(false);
  const wrapperRef = React.useRef(null);
  const autocompleteService = React.useRef(null);
  const geocoderRef = React.useRef(null);
  reactExports.useEffect(() => {
    __vitePreload(async () => {
      const { loadGoogleMaps: loadGoogleMaps2 } = await Promise.resolve().then(() => googleMapsLoader);
      return { loadGoogleMaps: loadGoogleMaps2 };
    }, true ? void 0 : void 0).then(({ loadGoogleMaps: loadGoogleMaps2 }) => {
      loadGoogleMaps2().then((maps) => {
        if (!autocompleteService.current) {
          autocompleteService.current = new maps.places.AutocompleteService();
          geocoderRef.current = new maps.Geocoder();
        }
      }).catch((e2) => console.warn("Google Maps not loaded for Settings:", e2));
    });
  }, []);
  const handleHomeAddressChange = (e2) => {
    const val = e2.target.value;
    setHomeAddress(val);
    if (!val || val.length < 3) {
      setSearchResults([]);
      return;
    }
    if (autocompleteService.current) {
      setIsSearching(true);
      autocompleteService.current.getPlacePredictions({ input: val }, (predictions, status) => {
        console.log("[GoogleMaps] Autocomplete status:", status);
        console.log("[GoogleMaps] Autocomplete predictions:", predictions);
        setIsSearching(false);
        if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
          setSearchResults(predictions);
        } else {
          console.warn("[GoogleMaps] Autocomplete failed or empty:", status);
          setSearchResults([]);
        }
      });
    }
  };
  const handleSelectResult = (prediction) => {
    setHomeAddress(prediction.description);
    setSearchResults([]);
    if (geocoderRef.current) {
      geocoderRef.current.geocode({ placeId: prediction.place_id }, (results, status) => {
        if (status === "OK" && results[0]) {
          const loc = results[0].geometry.location;
          setHomeCoordinates({
            lat: loc.lat(),
            lon: loc.lng(),
            display_name: prediction.description
          });
        }
      });
    }
  };
  const applyImportedConfig = () => {
    if (!pendingImport) return;
    const config2 = pendingImport;
    if (config2.boardId) {
      const existingBoard = boards.find((b2) => b2.id === config2.boardId);
      if (!existingBoard && config2.boardName) ;
      setSelectedBoardId(config2.boardId);
      fetchBoardData(config2.boardId);
    }
    if (config2.blocks) setBlocks(config2.blocks);
    if (config2.listColors) setListColors(config2.listColors);
    if (config2.markerRules) setMarkerRules(config2.markerRules);
    if (config2.refreshValue) setRefreshValue(config2.refreshValue);
    if (config2.refreshUnit) setRefreshUnit(config2.refreshUnit);
    if (config2.showClock !== void 0) setShowClock(config2.showClock);
    if (config2.ignoreTemplateCards !== void 0) setIgnoreTemplateCards(config2.ignoreTemplateCards);
    if (config2.ignoreCompletedCards !== void 0) setIgnoreCompletedCards(config2.ignoreCompletedCards);
    if (config2.ignoreNoDescCards !== void 0) setIgnoreNoDescCards(config2.ignoreNoDescCards);
    if (config2.enableMapView !== void 0) setEnableMapView(config2.enableMapView);
    if (config2.mapGeocodeMode) setMapGeocodeMode(config2.mapGeocodeMode);
    if (config2.mapGeocodeMode) setMapGeocodeMode(config2.mapGeocodeMode);
    if (config2.enableCardMove !== void 0) setEnableCardMove(config2.enableCardMove);
    if (config2.enableStreetView !== void 0) setEnableStreetView(config2.enableStreetView);
    if (config2.updateTrelloCoordinates !== void 0) setUpdateTrelloCoordinates(config2.updateTrelloCoordinates);
    if (config2.enableTaskView !== void 0) setEnableTaskView(config2.enableTaskView);
    if (config2.taskViewWorkspaces !== void 0) setTaskViewWorkspaces(config2.taskViewWorkspaces);
    if (config2.taskViewRefreshInterval !== void 0) setTaskViewRefreshInterval(config2.taskViewRefreshInterval);
    setPendingImport(null);
    onClearImportConfig();
  };
  const dismissImport = () => {
    setPendingImport(null);
    onClearImportConfig();
  };
  reactExports.useEffect(() => {
    setActiveTab(initialTab);
    if (initialTab === "map" && (user == null ? void 0 : user.token)) {
      checkPermissions();
    }
  }, [initialTab, user]);
  const checkPermissions = async () => {
    if (!(user == null ? void 0 : user.token)) return;
    const scopes = await trelloAuth.checkTokenScopes(user.token);
    const canWrite = scopes.includes("write");
    setHasWritePermission(canWrite);
    console.log("Token scopes:", scopes, "Can write:", canWrite);
    if (!canWrite) {
      setUpdateTrelloCoordinates(false);
      setEnableCardMove(false);
    }
  };
  const loadBoardSettings = async (boardId) => {
    var _a2, _b, _c, _d;
    if (!boardId || !user) return;
    setLoadingLists(true);
    setError("");
    try {
      await fetchBoardData(boardId);
      const allUserData = JSON.parse(localStorage.getItem("trelloUserData") || "{}");
      const savedLayout = (_b = (_a2 = allUserData[user.id]) == null ? void 0 : _a2.dashboardLayout) == null ? void 0 : _b[boardId];
      if (savedLayout) {
        setBlocks(savedLayout);
      } else {
        const legacyKey = `TRELLO_DASHBOARD_LAYOUT_${boardId}`;
        const legacyLayout = localStorage.getItem(legacyKey);
        if (legacyLayout) setBlocks(JSON.parse(legacyLayout));
        else setBlocks([]);
      }
      const savedColors = ((_c = getPersistentColors(user.id)) == null ? void 0 : _c[boardId]) || {};
      setListColors(savedColors);
      const savedRefresh = localStorage.getItem(STORAGE_KEYS.REFRESH_INTERVAL + boardId);
      if (savedRefresh) {
        const parsed = JSON.parse(savedRefresh);
        setRefreshValue(parsed.value);
        setRefreshUnit(parsed.unit);
      } else {
        setRefreshValue(1);
        setRefreshUnit("minutes");
      }
      const savedClock = localStorage.getItem(STORAGE_KEYS.CLOCK_SETTING + boardId);
      setShowClock(savedClock !== "false");
      const savedIgnore = localStorage.getItem(STORAGE_KEYS.IGNORE_TEMPLATE_CARDS + boardId);
      setIgnoreTemplateCards(savedIgnore !== "false");
      const savedIgnoreCompleted = localStorage.getItem(STORAGE_KEYS.IGNORE_COMPLETED_CARDS + boardId);
      setIgnoreCompletedCards(savedIgnoreCompleted === "true");
      const savedIgnoreNoDesc = localStorage.getItem("IGNORE_NO_DESC_CARDS_" + boardId);
      setIgnoreNoDescCards(savedIgnoreNoDesc === "true");
      const rulesKey = `TRELLO_MARKER_RULES_${boardId}`;
      const savedRules = localStorage.getItem(rulesKey);
      if (savedRules) setMarkerRules(JSON.parse(savedRules));
      else setMarkerRules([]);
      const userSettings = (_d = allUserData[user.id]) == null ? void 0 : _d.settings;
      if (userSettings) {
        if (userSettings.enableTaskView !== void 0) setEnableTaskView(userSettings.enableTaskView);
        if (userSettings.taskViewWorkspaces !== void 0) setTaskViewWorkspaces(userSettings.taskViewWorkspaces);
        if (userSettings.taskViewRefreshInterval !== void 0) setTaskViewRefreshInterval(userSettings.taskViewRefreshInterval);
      }
      const savedUpdateTrello = localStorage.getItem("updateTrelloCoordinates_" + boardId);
      setUpdateTrelloCoordinates(savedUpdateTrello === "true");
      const savedEnableCardMove = localStorage.getItem("enableCardMove_" + boardId);
      setEnableCardMove(savedEnableCardMove === "true");
      setEnableHomeLocation(localStorage.getItem(`enableHomeLocation_${boardId}`) === "true");
      setHomeAddress(localStorage.getItem(`homeAddress_${boardId}`) || "");
      const savedHomeCoords = localStorage.getItem(`homeCoordinates_${boardId}`);
      setHomeCoordinates(savedHomeCoords ? JSON.parse(savedHomeCoords) : null);
      setHomeIcon(localStorage.getItem(`homeIcon_${boardId}`) || "home");
      setHomeCoordinates(savedHomeCoords ? JSON.parse(savedHomeCoords) : null);
      setHomeIcon(localStorage.getItem(`homeIcon_${boardId}`) || "home");
      const savedEnableStreetView = localStorage.getItem("enableStreetView_" + boardId);
      setEnableStreetView(savedEnableStreetView === "true");
      const statsSettings = (userSettings == null ? void 0 : userSettings.statistics) || {};
      setEnableStats(!!statsSettings.enabled);
      setStatsShowArchived(statsSettings.includeArchived !== void 0 ? statsSettings.includeArchived : true);
      setStatsIncludedLists(statsSettings.includedLists || []);
      setStatsCustomPrompt(statsSettings.customAIPrompt || "");
      const namingSettings = (userSettings == null ? void 0 : userSettings.naming) || {};
      setNamingCard(namingSettings.card || "");
      setNamingList(namingSettings.list || "");
      setNamingBoard(namingSettings.board || "");
      setNamingLabel(namingSettings.label || "");
      if (userSettings == null ? void 0 : userSettings.slideshowInterval) setSlideshowInterval(userSettings.slideshowInterval);
      else setSlideshowInterval(10);
    } catch (e2) {
      console.warn("Error loading board settings", e2);
      setError("Failed to load settings for this board.");
    } finally {
      setLoadingLists(false);
    }
  };
  reactExports.useEffect(() => {
    const loadInitialSettings = async () => {
      var _a2;
      if (!user) return;
      try {
        const boardsData = await trelloFetch("/members/me/boards?fields=id,name,url,idOrganization&organization=true&organization_fields=displayName,name", user.token);
        setBoards(boardsData);
        const storedData = JSON.parse(localStorage.getItem("trelloUserData") || "{}");
        const userSettings = (_a2 = storedData[user.id]) == null ? void 0 : _a2.settings;
        if (userSettings == null ? void 0 : userSettings.boardId) {
          const bId = userSettings.boardId;
          setSelectedBoardId(bId);
          await loadBoardSettings(bId);
          if (userSettings.enableMapView !== void 0) setEnableMapView(userSettings.enableMapView);
          if (userSettings.mapGeocodeMode) setMapGeocodeMode(userSettings.mapGeocodeMode);
          if (userSettings.enableTaskView !== void 0) setEnableTaskView(userSettings.enableTaskView);
          if (userSettings.taskViewWorkspaces !== void 0) setTaskViewWorkspaces(userSettings.taskViewWorkspaces);
          if (userSettings.taskViewRefreshInterval !== void 0) setTaskViewRefreshInterval(userSettings.taskViewRefreshInterval);
        }
      } catch (e2) {
        console.warn("Error loading settings", e2);
      }
    };
    loadInitialSettings();
  }, [user]);
  const fetchBoardData = async (boardId) => {
    setLoadingLists(true);
    setError("");
    try {
      const listsData = await trelloFetch(`/boards/${boardId}/lists?cards=open&card_fields=name&card_limit=1&fields=id,name`, user.token);
      setAllLists(listsData);
      const labelsData = await trelloFetch(`/boards/${boardId}/labels`, user.token);
      setBoardLabels(labelsData);
    } catch (e2) {
      setError("Failed to load board lists.");
    } finally {
      setLoadingLists(false);
    }
  };
  const handleBoardChange = async (e2) => {
    const boardId = e2.target.value;
    setSelectedBoardId(boardId);
    if (boardId) {
      await loadBoardSettings(boardId);
    } else {
      setBlocks([]);
      setListColors({});
      setMarkerRules([]);
      setAllLists([]);
    }
  };
  const handleAddBlock = () => {
    setBlocks([...blocks, {
      id: `block-${Date.now()}`,
      name: "New Block",
      listIds: [],
      includeOnMap: false,
      mapIcon: "map-marker",
      ignoreFirstCard: false,
      displayFirstCardDescription: false
    }]);
  };
  const handleRemoveBlock = (blockId) => {
    if (window.confirm("Delete this block? Assigned lists will be unassigned.")) {
      setBlocks(blocks.filter((b2) => b2.id !== blockId));
    }
  };
  const handleUpdateBlockName = (id2, name) => {
    setBlocks(blocks.map((b2) => b2.id === id2 ? { ...b2, name } : b2));
  };
  const handleUpdateBlockProp = (id2, prop, val) => {
    setBlocks(blocks.map((b2) => b2.id === id2 ? { ...b2, [prop]: val } : b2));
  };
  const onDragEnd3 = (result) => {
    const { source, destination, draggableId, type } = result;
    if (!destination) return;
    if (type === "RULE") {
      const newRules = Array.from(markerRules);
      const [movedRule] = newRules.splice(source.index, 1);
      newRules.splice(destination.index, 0, movedRule);
      setMarkerRules(newRules);
      return;
    }
    if (type === "BLOCK") {
      const newBlocks2 = Array.from(blocks);
      const [movedBlock] = newBlocks2.splice(source.index, 1);
      newBlocks2.splice(destination.index, 0, movedBlock);
      setBlocks(newBlocks2);
      return;
    }
    const listId = draggableId;
    const sourceId = source.droppableId;
    const destId = destination.droppableId;
    const removeListFromBlock = (blockId, lId) => {
      const block = blocks.find((b2) => b2.id === blockId);
      const newListIds = block.listIds.filter((id2) => id2 !== lId);
      return { ...block, listIds: newListIds };
    };
    const addListToBlock = (blockId, lId, index) => {
      const block = blocks.find((b2) => b2.id === blockId);
      const newListIds = Array.from(block.listIds);
      newListIds.splice(index, 0, lId);
      return { ...block, listIds: newListIds };
    };
    if (sourceId === destId && sourceId !== "unassigned") {
      const block = blocks.find((b2) => b2.id === sourceId);
      const newListIds = Array.from(block.listIds);
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, listId);
      setBlocks(blocks.map((b2) => b2.id === sourceId ? { ...b2, listIds: newListIds } : b2));
      return;
    }
    let newBlocks = [...blocks];
    if (sourceId !== "unassigned") {
      newBlocks = newBlocks.map((b2) => b2.id === sourceId ? removeListFromBlock(sourceId, listId) : b2);
    }
    if (destId !== "unassigned") {
      newBlocks = newBlocks.map((b2) => b2.id === destId ? addListToBlock(destId, listId, destination.index) : b2);
    }
    setBlocks(newBlocks);
  };
  const handleAddRule = () => setMarkerRules([...markerRules, { id: `rule-${Date.now()}`, labelId: "", overrideType: "color", overrideValue: "red" }]);
  const handleUpdateRule = (id2, f2, v2) => setMarkerRules(markerRules.map((r2) => r2.id === id2 ? { ...r2, [f2]: v2 } : r2));
  const removeRule = (id2) => setMarkerRules(markerRules.filter((r2) => r2.id !== id2));
  const handleSave = () => {
    if (slideshowInterval < 10) {
      alert("Slideshow interval must be at least 10 seconds.");
      return;
    }
    if (refreshUnit === "seconds" && parseInt(refreshValue) < 15) {
      setError("Refresh interval must be at least 15 seconds.");
      window.scrollTo(0, 0);
      return;
    }
    if (!selectedBoardId && !enableTaskView) {
      return alert("You must either enable the tasks view, or choose a Trello board to configure as a dashboard to use Trellops.");
    }
    const selectedBoard2 = boards.find((b2) => b2.id === selectedBoardId);
    try {
      if (selectedBoardId) {
        setPersistentLayout(user.id, selectedBoardId, blocks);
        setPersistentColors(user.id, selectedBoardId, listColors);
        localStorage.setItem(STORAGE_KEYS.REFRESH_INTERVAL + selectedBoardId, JSON.stringify({ value: refreshValue, unit: refreshUnit }));
        localStorage.setItem(STORAGE_KEYS.CLOCK_SETTING + selectedBoardId, showClock ? "true" : "false");
        localStorage.setItem(STORAGE_KEYS.IGNORE_TEMPLATE_CARDS + selectedBoardId, ignoreTemplateCards ? "true" : "false");
        localStorage.setItem(STORAGE_KEYS.IGNORE_COMPLETED_CARDS + selectedBoardId, ignoreCompletedCards ? "true" : "false");
        localStorage.setItem(STORAGE_KEYS.IGNORE_NO_DESC_CARDS + selectedBoardId, ignoreNoDescCards ? "true" : "false");
        localStorage.setItem(`TRELLO_MARKER_RULES_${selectedBoardId}`, JSON.stringify(markerRules.filter((r2) => r2.labelId)));
        localStorage.setItem(`enableHomeLocation_${selectedBoardId}`, enableHomeLocation);
        localStorage.setItem(`homeAddress_${selectedBoardId}`, homeAddress);
        localStorage.setItem(`homeCoordinates_${selectedBoardId}`, JSON.stringify(homeCoordinates));
        localStorage.setItem(`homeIcon_${selectedBoardId}`, homeIcon);
        const safeUpdateTrello = updateTrelloCoordinates && hasWritePermission;
        localStorage.setItem("updateTrelloCoordinates_" + selectedBoardId, safeUpdateTrello ? "true" : "false");
        const safeEnableCardMove = enableCardMove && hasWritePermission;
        localStorage.setItem("enableCardMove_" + selectedBoardId, safeEnableCardMove ? "true" : "false");
        localStorage.setItem("enableStreetView_" + selectedBoardId, enableStreetView ? "true" : "false");
        if (safeUpdateTrello) {
          const cacheKey = `MAP_GEOCODING_CACHE_${selectedBoardId}`;
          if (localStorage.getItem(cacheKey)) {
            localStorage.removeItem(cacheKey);
            console.log("Cache cleared due to Trello Update enablement.");
          }
        }
      }
      const assignedLists = blocks.flatMap((b2) => b2.listIds.map((lId) => allLists.find((l2) => l2.id === lId))).filter(Boolean);
      const newSettings = {
        boardId: selectedBoardId || null,
        boardName: selectedBoard2 ? selectedBoard2.name : selectedBoardId ? "Unknown Board" : null,
        selectedLists: assignedLists,
        // THIS FIXES THE "NO BOARD CONFIG" ERROR
        enableMapView,
        mapGeocodeMode,
        enableCardMove: enableCardMove && hasWritePermission,
        enableStreetView,
        enableTaskView,
        taskViewWorkspaces,
        taskViewRefreshInterval,
        slideshowInterval: parseInt(slideshowInterval) || 10,
        statistics: {
          enabled: enableStats,
          showArchived: statsShowArchived,
          includedLists: statsIncludedLists,
          customAIPrompt: statsCustomPrompt
        },
        naming: {
          card: namingCard.trim() || void 0,
          list: namingList.trim() || void 0,
          board: namingBoard.trim() || void 0,
          label: namingLabel.trim() || void 0
        }
      };
      const storedData = JSON.parse(localStorage.getItem("trelloUserData") || "{}");
      storedData[user.id] = {
        ...storedData[user.id],
        settings: newSettings
      };
      localStorage.setItem("trelloUserData", JSON.stringify(storedData));
      onSave(newSettings);
    } catch (e2) {
      console.error(e2);
      setError("Failed to save settings.");
    }
  };
  const handleSaveTasks = () => {
    try {
      const newSettings = {
        // Keep existing board settings? No, we are updating user.settings which mixes both.
        // We need to fetch existing settings to preserve board specific stuff if we aren't careful?
        // Actually, our persistence model replaces `user.settings`.
        // We need to construct the full object.
        // To be safe, we should probably read the current state for board stuff OR just update the specific keys in `storedData`.
        // STRATEGY: Update only specific keys in localStorage 'trelloUserData'
        ...user.settings,
        // Start with current settings
        enableTaskView,
        taskViewWorkspaces,
        taskViewRefreshInterval
      };
      const storedData = JSON.parse(localStorage.getItem("trelloUserData") || "{}");
      const currentUserData = storedData[user.id] || {};
      storedData[user.id] = {
        ...currentUserData,
        settings: {
          ...currentUserData.settings || {},
          enableTaskView,
          taskViewWorkspaces,
          taskViewRefreshInterval
        }
      };
      localStorage.setItem("trelloUserData", JSON.stringify(storedData));
      onSave({
        ...user.settings || {},
        enableTaskView,
        taskViewWorkspaces,
        taskViewRefreshInterval
      });
      if (onManageTasks) {
        if (viewMode === "tasks") {
          window.history.pushState({}, "", "/tasks");
          window.dispatchEvent(new Event("popstate"));
        } else {
          onClose();
        }
      } else {
        if (viewMode === "tasks") {
          window.history.pushState({}, "", "/tasks");
          window.dispatchEvent(new Event("popstate"));
        } else {
          onClose();
        }
      }
    } catch (e2) {
      console.error("Failed to save task settings", e2);
      alert("Failed to save task settings");
    }
  };
  const handleImprovePrompt = async () => {
    if (!statsCustomPrompt.trim()) return;
    setIsImprovingPrompt(true);
    try {
      const res = await fetch("/api/improvePrompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rawPrompt: statsCustomPrompt })
      });
      const data = await res.json();
      if (res.ok) {
        setStatsCustomPrompt(data.improvedPrompt);
      } else {
        alert(`Error improving prompt: ${data.error}`);
      }
    } catch (e2) {
      alert(`Error improving prompt: ${e2.message}`);
    } finally {
      setIsImprovingPrompt(false);
    }
  };
  const handleClearBoardConfig = () => {
    if (window.confirm("Clear all settings?")) {
      setBlocks([]);
      setListColors({});
      setMarkerRules([]);
    }
  };
  const getConfigObject = () => {
    var _a2;
    if (!selectedBoardId) return null;
    const boardName = (_a2 = boards.find((b2) => b2.id === selectedBoardId)) == null ? void 0 : _a2.name;
    return {
      boardId: selectedBoardId,
      boardName,
      // Include name
      blocks,
      listColors,
      markerRules,
      refreshValue,
      refreshUnit,
      showClock,
      ignoreTemplateCards,
      ignoreCompletedCards,
      ignoreNoDescCards,
      enableMapView,
      mapGeocodeMode,
      enableCardMove,
      enableStreetView,
      enableTaskView,
      taskViewWorkspaces,
      taskViewRefreshInterval
    };
  };
  const handleExportConfig = () => {
    const config2 = getConfigObject();
    if (!config2) return;
    const blob = new Blob([JSON.stringify(config2, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `trellops-config-${selectedBoardId}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const handleImportConfig = (e2) => {
    const file = e2.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const config2 = JSON.parse(evt.target.result);
        if (config2.boardId && config2.boardId !== selectedBoardId) {
          if (!window.confirm(`This config is for board ${config2.boardId}, but you are on ${selectedBoardId}. Import anyway?`)) return;
          const targetBoard = boards.find((b2) => b2.id === config2.boardId);
          if (targetBoard) {
            setSelectedBoardId(config2.boardId);
            fetchBoardData(config2.boardId);
          } else {
            console.warn("Imported config for unknown board:", config2.boardId);
            setSelectedBoardId(config2.boardId);
            fetchBoardData(config2.boardId);
          }
        }
        if (config2.blocks) setBlocks(config2.blocks);
        if (config2.listColors) setListColors(config2.listColors);
        if (config2.markerRules) setMarkerRules(config2.markerRules);
        if (config2.refreshValue) setRefreshValue(config2.refreshValue);
        if (config2.refreshUnit) setRefreshUnit(config2.refreshUnit);
        if (config2.showClock !== void 0) setShowClock(config2.showClock);
        if (config2.ignoreTemplateCards !== void 0) setIgnoreTemplateCards(config2.ignoreTemplateCards);
        if (config2.ignoreCompletedCards !== void 0) setIgnoreCompletedCards(config2.ignoreCompletedCards);
        if (config2.ignoreNoDescCards !== void 0) setIgnoreNoDescCards(config2.ignoreNoDescCards);
        if (config2.enableMapView !== void 0) setEnableMapView(config2.enableMapView);
        if (config2.mapGeocodeMode) setMapGeocodeMode(config2.mapGeocodeMode);
        if (config2.enableCardMove !== void 0) setEnableCardMove(config2.enableCardMove);
        if (config2.enableStreetView !== void 0) setEnableStreetView(config2.enableStreetView);
        if (config2.enableTaskView !== void 0) setEnableTaskView(config2.enableTaskView);
        if (config2.taskViewWorkspaces !== void 0) setTaskViewWorkspaces(config2.taskViewWorkspaces);
        if (config2.taskViewRefreshInterval !== void 0) setTaskViewRefreshInterval(config2.taskViewRefreshInterval);
        alert("Configuration imported! Click Save to persist changes.");
      } catch (err) {
        console.error(err);
        alert("Failed to parse configuration file.");
      }
    };
    reader.readAsText(file);
  };
  const assignedListIds = new Set(blocks.flatMap((b2) => b2.listIds));
  const unassignedLists = allLists.filter((l2) => !assignedListIds.has(l2.id));
  const selectedBoard = boards.find((b2) => b2.id === selectedBoardId);
  const ToggleSwitch = ({ checked, onChange, id: id2 }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "switch", htmlFor: id2, style: { pointerEvents: "none" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        checked,
        onChange,
        id: id2
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "slider round" })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settings-container", style: { maxWidth: "80%", width: "80%" }, children: [
    viewMode === "default" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Dashboard Settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "admin-section", style: { marginBottom: "20px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Choose your Trello Board" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9em", color: "#666", marginTop: "-10px" }, children: "Boards are pulled directly from your Trello account, across all workspaces." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: selectedBoardId, onChange: handleBoardChange, className: "board-select", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Choose a Board --" }),
          (() => {
            const grouped = {};
            const noOrg = [];
            boards.forEach((b2) => {
              if (b2.organization) {
                const orgName = b2.organization.displayName || b2.organization.name;
                if (!grouped[orgName]) grouped[orgName] = [];
                grouped[orgName].push(b2);
              } else {
                noOrg.push(b2);
              }
            });
            const sortedOrgNames = Object.keys(grouped).sort((a, b2) => a.localeCompare(b2));
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              sortedOrgNames.map((orgName) => /* @__PURE__ */ jsxRuntimeExports.jsx("optgroup", { label: orgName, children: grouped[orgName].sort((a, b2) => a.name.localeCompare(b2.name)).map((b2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: b2.id, children: b2.name }, b2.id)) }, orgName)),
              noOrg.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("optgroup", { label: "Personal Boards", children: noOrg.sort((a, b2) => a.name.localeCompare(b2.name)).map((b2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: b2.id, children: b2.name }, b2.id)) })
            ] });
          })()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settings-tabs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `tab-button ${activeTab === "dashboard" ? "active" : ""}`,
            onClick: () => setActiveTab("dashboard"),
            children: "Dashboard View Settings"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `tab-button ${activeTab === "map" ? "active" : ""}`,
            onClick: () => {
              setActiveTab("map");
              checkPermissions();
            },
            children: "Map View Settings"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `tab-button ${activeTab === "statistics" ? "active" : ""}`,
            onClick: () => setActiveTab("statistics"),
            children: "Statistics Settings"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `tab-button ${activeTab === "other" ? "active" : ""}`,
            onClick: () => setActiveTab("other"),
            children: "Other Board settings"
          }
        )
      ] })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-banner", style: { background: "#ffebee", color: "#c62828", padding: "10px", marginBottom: "15px", borderRadius: "4px", border: "1px solid #ffcdd2", marginTop: "10px" }, children: error }),
    pendingImport && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-banner", style: { background: "#e3f2fd", color: "#0d47a1", padding: "15px", marginBottom: "15px", borderRadius: "4px", border: "1px solid #90caf9", marginTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Configuration Loaded:" }),
        " Shared settings available for board ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: pendingImport.boardName || pendingImport.boardId }),
        ".",
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.9em", marginTop: "4px" }, children: "Unsaved changes will be lost if you apply this configuration." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: applyImportedConfig, style: { background: "#1976d2", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }, children: "Apply" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: dismissImport, style: { background: "transparent", color: "#0d47a1", border: "1px solid #0d47a1", padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }, children: "Dismiss" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DragDropContext, { onDragEnd: onDragEnd3, children: [
      viewMode === "default" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", borderBottom: "1px solid #ddd", marginBottom: "20px" }, children: activeTab === "dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tab-content", children: selectedBoard ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "admin-section", id: "section-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "1. Manage your Trellops blocks" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9em", color: "#666", marginTop: "-10px" }, children: "A block is a group of tiles representing each Trello list (or column). You will be able to assign one or multiple tiles to each block. Blocks can be shown or hidden on demand on the dashboard." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectedDroppable, { droppableId: "blocks-list", type: "BLOCK", children: (provided) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: provided.innerRef, ...provided.droppableProps, children: [
            blocks.map((block, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(PublicDraggable, { draggableId: block.id, index, children: (provided2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                ref: provided2.innerRef,
                ...provided2.draggableProps,
                style: { display: "flex", gap: "10px", marginBottom: "8px", alignItems: "center", background: "#fff", padding: "8px", border: "1px solid #eee", borderRadius: "4px", ...provided2.draggableProps.style },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...provided2.dragHandleProps, className: "drag-handle", style: { color: "#ccc", marginRight: "5px" }, children: "::" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: block.name,
                      onChange: (e2) => handleUpdateBlockName(block.id, e2.target.value),
                      className: "block-name-input"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleRemoveBlock(block.id),
                      style: { color: "red", marginLeft: "auto", background: "none", border: "none", fontSize: "1.2rem", cursor: "pointer", fontWeight: "bold" },
                      title: "Remove Block",
                      children: "X"
                    }
                  )
                ]
              }
            ) }, block.id)),
            provided.placeholder
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "add-block-button", onClick: handleAddBlock, style: { marginTop: "10px" }, children: "+ Add Block" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "admin-section", id: "section-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "2. Assign tiles to your blocks" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9em", color: "#666", marginTop: "-10px" }, children: "Tiles show the total count of cards in each Trello list, automatically updating as the cards are created or moved. Choose from the Unassigned pool on the left, the lists you want to create as a tile in the respective block on the right. Then customise each tile position and colour." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "20px", alignItems: "flex-start", marginTop: "15px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, background: "#f8f9fa", padding: "10px", borderRadius: "6px", border: "1px solid #dee2e6" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Available Lists" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectedDroppable, { droppableId: "unassigned", type: "LIST", children: (provided) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: provided.innerRef, ...provided.droppableProps, style: { minHeight: "100px" }, children: [
                unassignedLists.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(PublicDraggable, { draggableId: list.id, index, children: (provided2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    ref: provided2.innerRef,
                    ...provided2.draggableProps,
                    ...provided2.dragHandleProps,
                    style: { padding: "8px", margin: "4px 0", background: "white", border: "1px solid #ddd", borderRadius: "4px", ...provided2.draggableProps.style },
                    children: list.name
                  }
                ) }, list.id)),
                provided.placeholder
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 2, display: "flex", flexDirection: "column", gap: "15px" }, children: blocks.map((block) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#e7f5ff", padding: "10px", borderRadius: "6px", border: "1px solid #a5d8ff" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: 0, marginBottom: "10px" }, children: block.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "rgba(255,255,255,0.5)", padding: "8px", borderRadius: "4px", marginBottom: "10px", fontSize: "0.85em" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "15px", flexWrap: "wrap" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: { display: "flex", alignItems: "center", cursor: "pointer" },
                    onClick: () => handleUpdateBlockProp(block.id, "ignoreFirstCard", !block.ignoreFirstCard),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSwitch, { checked: block.ignoreFirstCard, onChange: (e2) => handleUpdateBlockProp(block.id, "ignoreFirstCard", e2.target.checked) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Do not count the first card in the total" })
                    ]
                  }
                ),
                block.ignoreFirstCard && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: { display: "flex", alignItems: "center", cursor: "pointer" },
                    onClick: () => handleUpdateBlockProp(block.id, "displayFirstCardDescription", !block.displayFirstCardDescription),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSwitch, { checked: block.displayFirstCardDescription, onChange: (e2) => handleUpdateBlockProp(block.id, "displayFirstCardDescription", e2.target.checked) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Display the first card as tile description" })
                    ]
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectedDroppable, { droppableId: block.id, type: "LIST", children: (provided) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: provided.innerRef, ...provided.droppableProps, style: { minHeight: "50px" }, children: [
                block.listIds.map((listId, index) => {
                  const list = allLists.find((l2) => l2.id === listId);
                  if (!list) return null;
                  const color = listColors[listId] || "#0079bf";
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(PublicDraggable, { draggableId: listId, index, children: (provided2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      ref: provided2.innerRef,
                      ...provided2.draggableProps,
                      ...provided2.dragHandleProps,
                      style: { padding: "8px", margin: "4px 0", background: "white", borderLeft: `5px solid ${color}`, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", ...provided2.draggableProps.style },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: list.name }),
                        block.ignoreFirstCard && block.displayFirstCardDescription && list.cards && list.cards.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
                          width: "20%",
                          textAlign: "right",
                          fontSize: "0.85em",
                          color: "#666",
                          fontStyle: "italic",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          flexShrink: 0
                        }, children: [
                          "[",
                          list.cards[0].name,
                          "]"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "color",
                            value: color,
                            onChange: (e2) => setListColors({ ...listColors, [listId]: e2.target.value }),
                            style: { width: "30px", height: "30px", padding: 0, border: "none", background: "none", cursor: "pointer", flexShrink: 0 },
                            title: "Tile Colour"
                          }
                        )
                      ]
                    }
                  ) }, listId);
                }),
                provided.placeholder
              ] }) })
            ] }, block.id)) })
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "20px", fontStyle: "italic", color: "#666" }, children: "Select a board to configure blocks" }) }) }),
      activeTab === "map" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tab-content", children: selectedBoard ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "admin-section", id: "section-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
          "Map View Settings for ",
          selectedBoard.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9em", color: "#666", marginTop: "-10px", marginBottom: "15px" }, children: "Map settings are saved per-board. Choose whether Map View is enabled and how geocoding should behave for cards on this board." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settings-row", style: { display: "flex", alignItems: "center", cursor: "pointer" }, onClick: () => setEnableMapView(!enableMapView), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSwitch, { checked: enableMapView, onChange: (e2) => setEnableMapView(e2.target.checked) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Enable Map View" })
        ] }),
        enableMapView && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "15px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "15px", background: "#f8f9fa", padding: "10px", borderRadius: "4px", border: "1px solid #eee" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { fontWeight: "bold", display: "block", marginBottom: "8px" }, children: "Geocoding behavior:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "12px", opacity: 0.7 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSwitch, { checked: true, onChange: () => {
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: "8px" }, children: 'Read the coordinates from the Trello card "Location" field to display the card location' })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: { display: "flex", alignItems: "center", marginBottom: "12px", cursor: "pointer" },
                onClick: () => {
                  const newVal = mapGeocodeMode === "disabled" ? "store" : "disabled";
                  setMapGeocodeMode(newVal);
                  if (newVal === "disabled") setUpdateTrelloCoordinates(false);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ToggleSwitch,
                    {
                      checked: mapGeocodeMode !== "disabled",
                      onChange: (e2) => {
                        const newVal = e2.target.checked ? "store" : "disabled";
                        setMapGeocodeMode(newVal);
                        if (newVal === "disabled") setUpdateTrelloCoordinates(false);
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginLeft: "8px" }, children: [
                    "If no coordinates are present in the card, parse the card description to decode the coordinates for the card. (experimental)",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85em", color: "#666", fontStyle: "italic" }, children: "Note: this will use Google Maps Geocoding API, and will store the coordinates locally on your browser cache" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85em", color: "#666", fontStyle: "italic", display: "block", marginTop: "4px" }, children: "Note: Cards without a description will be skipped." })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginLeft: "25px", marginBottom: "15px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: { display: "flex", alignItems: "center", opacity: mapGeocodeMode === "disabled" ? 0.5 : 1, pointerEvents: mapGeocodeMode === "disabled" ? "none" : "auto", cursor: mapGeocodeMode === "disabled" ? "default" : "pointer" },
                  onClick: () => setUpdateTrelloCoordinates(!updateTrelloCoordinates),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ToggleSwitch,
                      {
                        checked: updateTrelloCoordinates,
                        onChange: (e2) => setUpdateTrelloCoordinates(e2.target.checked)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginLeft: "8px" }, children: [
                      "Update the Trello card coordinates using the decoded address from Google Maps (beta).",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85em", color: "#666", fontStyle: "italic" }, children: "It is recommended to only have one dashboard enabled with this feature for each Trello board" })
                    ] })
                  ]
                }
              ),
              updateTrelloCoordinates && !hasWritePermission && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "10px", padding: "10px", background: "#e3f2fd", border: "1px solid #90caf9", borderRadius: "4px", color: "#0d47a1", fontSize: "0.9em" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Permission Required:" }),
                ' To update card coordinates, you must grant Trello "Write" access.',
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.9em", marginTop: "5px", display: "block" }, children: "The location cache on your computer will be reset for the cards to be decoded again." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => trelloAuth.login("read,write"),
                    style: { display: "block", marginTop: "8px", padding: "5px 10px", background: "#1976d2", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" },
                    children: "Authorize Write Access (Re-Login)"
                  }
                )
              ] }),
              updateTrelloCoordinates && hasWritePermission && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "5px", color: "green", fontSize: "0.9em", display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginRight: "5px" }, children: "✅" }),
                " Write permissions successfully granted."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Block Map Options" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9em", color: "#666", marginTop: "-10px", marginBottom: "15px" }, children: "Choose which blocks appear on the map and customize their markers." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "15px", marginBottom: "20px" }, children: blocks.map((block) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#f8f9fa", padding: "10px", borderRadius: "6px", border: "1px solid #dee2e6" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: 0 }, children: block.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", cursor: "pointer" }, onClick: () => handleUpdateBlockProp(block.id, "includeOnMap", !block.includeOnMap), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSwitch, { checked: block.includeOnMap, onChange: (e2) => handleUpdateBlockProp(block.id, "includeOnMap", e2.target.checked) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Show on map" })
              ] })
            ] }),
            block.includeOnMap && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "10px", paddingTop: "10px", borderTop: "1px solid rgba(0,0,0,0.1)" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { fontSize: "0.85em", fontWeight: "bold", display: "block", marginBottom: "5px" }, children: "Icon:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconPicker, { selectedIcon: block.mapIcon, onChange: (icon) => handleUpdateBlockProp(block.id, "mapIcon", icon) }) })
            ] })
          ] }, block.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "admin-section", style: { marginTop: "20px", borderTop: "1px solid #eee", paddingTop: "15px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Marker Variants" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9em", color: "#666", marginTop: "-10px", marginBottom: "15px" }, children: "Choose alternative display options for cards based on their Trello label value. You can choose to display a marker with a different colour or icon. In case of conflicts, the rule higher in the list will be applied." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectedDroppable, { droppableId: "marker-rules", type: "RULE", children: (provided) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: provided.innerRef, ...provided.droppableProps, className: "rules-list", children: [
              markerRules.map((rule, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(PublicDraggable, { draggableId: rule.id, index: idx, children: (provided2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  ref: provided2.innerRef,
                  ...provided2.draggableProps,
                  className: "rule-item",
                  style: { display: "flex", gap: "10px", alignItems: "center", background: "#fff", padding: "10px", marginBottom: "5px", border: "1px solid #eee", flexWrap: "wrap", ...provided2.draggableProps.style },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...provided2.dragHandleProps, className: "drag-handle", style: { color: "#ccc", marginRight: "5px" }, children: "::" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: rule.labelId, onChange: (e2) => handleUpdateRule(rule.id, "labelId", e2.target.value), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Label --" }),
                      boardLabels.map((l2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: l2.id, children: l2.name || l2.color }, l2.id))
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", checked: rule.overrideType === "color", onChange: () => handleUpdateRule(rule.id, "overrideType", "color") }),
                        " Color"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", checked: rule.overrideType === "icon", onChange: () => handleUpdateRule(rule.id, "overrideType", "icon") }),
                        " Icon"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1, minWidth: "200px" }, children: rule.overrideType === "color" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ColorPicker, { selectedColor: rule.overrideValue, onChange: (v2) => handleUpdateRule(rule.id, "overrideValue", v2) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconPicker, { selectedIcon: rule.overrideValue, onChange: (v2) => handleUpdateRule(rule.id, "overrideValue", v2) }) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeRule(rule.id), style: { color: "red", marginLeft: "auto" }, children: "X" })
                  ]
                }
              ) }, rule.id)),
              provided.placeholder
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleAddRule, style: { marginTop: "10px" }, children: "+ Add Rule" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "admin-section", style: { marginTop: "20px", borderTop: "1px solid #eee", paddingTop: "15px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "8px", cursor: "pointer" }, onClick: () => setEnableStreetView(!enableStreetView), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ToggleSwitch,
              {
                checked: enableStreetView,
                onChange: (e2) => setEnableStreetView(e2.target.checked)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginLeft: "10px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Show street view" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.9em", color: "#666" }, children: "Enable to add a link to a Google Street View of the address that will open in a new window" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "admin-section", style: { marginTop: "20px", borderTop: "1px solid #eee", paddingTop: "15px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "8px", cursor: "pointer" }, onClick: () => setEnableCardMove(!enableCardMove), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ToggleSwitch,
                {
                  checked: enableCardMove,
                  onChange: (e2) => {
                    if (e2.target.checked && !hasWritePermission) ;
                    setEnableCardMove(e2.target.checked);
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginLeft: "10px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Enable card move from the map view" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.9em", color: "#666" }, children: 'Display a dropdown allowing to move a card to another list from the visible block directly from a marker on the map. This requires "write" access to your Trello board for Trellops to move the cards on your behalf' })
              ] })
            ] }),
            enableCardMove && !hasWritePermission && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "10px", padding: "10px", background: "#e3f2fd", border: "1px solid #90caf9", borderRadius: "4px", color: "#0d47a1", fontSize: "0.9em" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Permission Required:" }),
              ' To move cards, you must grant Trello "Write" access.',
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => trelloAuth.login("read,write"),
                  style: { display: "block", marginTop: "8px", padding: "5px 10px", background: "#1976d2", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" },
                  children: "Authorize Write Access (Re-Login)"
                }
              )
            ] }),
            enableCardMove && hasWritePermission && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "5px", color: "green", fontSize: "0.9em", display: "flex", alignItems: "center" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginRight: "5px" }, children: "✅" }),
              " Write permissions successfully granted."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "admin-section", style: { marginTop: "20px", borderTop: "1px solid #eee", paddingTop: "15px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "8px", cursor: "pointer" }, onClick: () => setEnableHomeLocation(!enableHomeLocation), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ToggleSwitch,
                {
                  checked: enableHomeLocation,
                  onChange: (e2) => setEnableHomeLocation(e2.target.checked)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginLeft: "10px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Set home location" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.9em", color: "#666" }, children: "Set a home address that will be permanently displayed on the map for this board." })
              ] })
            ] }),
            enableHomeLocation && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginLeft: "50px", marginTop: "10px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "10px" }, ref: wrapperRef, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontWeight: "bold", marginBottom: "5px", fontSize: "0.9em" }, children: "Home Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: homeAddress,
                      onChange: handleHomeAddressChange,
                      placeholder: "Start typing your address...",
                      style: { width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }
                    }
                  ),
                  isSearching && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", color: "#888", fontSize: "0.8em" }, children: "Searching..." }),
                  searchResults.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    zIndex: 1e3,
                    background: "white",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    maxHeight: "200px",
                    overflowY: "auto"
                  }, children: searchResults.map((result, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      onClick: () => handleSelectResult(result),
                      style: {
                        padding: "8px 12px",
                        cursor: "pointer",
                        borderBottom: idx < searchResults.length - 1 ? "1px solid #eee" : "none",
                        fontSize: "0.9em",
                        color: "black"
                      },
                      onMouseEnter: (e2) => e2.target.style.background = "#f5f5f5",
                      onMouseLeave: (e2) => e2.target.style.background = "white",
                      children: result.description
                    },
                    idx
                  )) })
                ] }),
                homeCoordinates && !isSearching && searchResults.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85em", color: "green", marginTop: "5px" }, children: [
                  "Resolved: ",
                  homeCoordinates.display_name
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "10px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontWeight: "bold", marginBottom: "5px", fontSize: "0.9em" }, children: "Marker Icon" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(IconPicker, { selectedIcon: homeIcon, onChange: setHomeIcon, color: "#444" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "admin-section", style: { marginTop: "20px", borderTop: "1px solid #eee", paddingTop: "15px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Reset coordinates cache" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9em", color: "#666", marginTop: "-10px", marginBottom: "15px" }, children: "Use this button to remove all card coordinates on your local computer. This is to be used for troubleshooting purposes and will trigger a re-fetch using Nominatim" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "button-secondary",
                style: { borderColor: "#d32f2f", color: "#d32f2f" },
                onClick: () => {
                  if (window.confirm("Are you sure you want to clear the local geocoding cache? This will force addresses to be re-fetched from Nominatim.")) {
                    try {
                      const key = `MAP_GEOCODING_CACHE_${selectedBoard.id}`;
                      localStorage.removeItem(key);
                      localStorage.removeItem(STORAGE_KEYS.IGNORE_CARDS + selectedBoard.id);
                      alert("Cache and ignored cards cleared successfully.");
                    } catch (e2) {
                      alert("Failed to clear cache");
                    }
                  }
                },
                children: "Reset Location Cache"
              }
            )
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "20px", fontStyle: "italic", color: "#666" }, children: "Select a board to configure map settings" }) }),
      activeTab === "statistics" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tab-content", children: selectedBoard ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "admin-section", id: "section-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
          "Statistics View Settings for ",
          selectedBoard.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9em", color: "#666", marginTop: "-10px", marginBottom: "15px" }, children: "Configure the historical data analysis view." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settings-row", style: { display: "flex", alignItems: "center", cursor: "pointer" }, onClick: () => setEnableStats(!enableStats), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSwitch, { checked: enableStats, onChange: (e2) => setEnableStats(e2.target.checked) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Enable Statistics View" })
        ] }),
        enableStats && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "15px", marginLeft: "20px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", cursor: "pointer", marginBottom: "15px" }, onClick: () => setStatsShowArchived(!statsShowArchived), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSwitch, { checked: statsShowArchived, onChange: (e2) => setStatsShowArchived(e2.target.checked) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Show output for Archived cards" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "15px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { fontWeight: "bold", display: "block", marginBottom: "8px" }, children: "Lists to include in reports:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9em", color: "#666", marginTop: "-5px" }, children: 'Uncheck to exclude specific lists (e.g. "Done" or "Backlog") from statistics.' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { maxHeight: "300px", overflowY: "auto", border: "1px solid #ddd", padding: "10px", borderRadius: "4px", background: "white" }, children: (() => {
              const layout = getPersistentLayout(user.id, selectedBoardId) || DEFAULT_LAYOUT;
              const grouped = {};
              const processedListIds = /* @__PURE__ */ new Set();
              layout.forEach((block) => {
                const relevantLists = allLists.filter((l2) => block.listIds.includes(l2.id));
                if (relevantLists.length > 0) {
                  grouped[block.name] = relevantLists;
                  relevantLists.forEach((l2) => processedListIds.add(l2.id));
                }
              });
              const otherLists = allLists.filter((l2) => !processedListIds.has(l2.id));
              if (otherLists.length > 0) {
                grouped["Other Lists"] = otherLists;
              }
              if (Object.keys(grouped).length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontStyle: "italic", color: "#888" }, children: "No lists found." });
              return Object.entries(grouped).map(([blockName, lists]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "10px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: "bold", fontSize: "0.9em", color: "#444", marginBottom: "5px", borderBottom: "1px solid #eee" }, children: blockName }),
                lists.map((list) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "5px", marginLeft: "10px" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      id: `stat-list-${list.id}`,
                      checked: statsIncludedLists.length === 0 || statsIncludedLists.includes(list.id),
                      onChange: (e2) => {
                        if (e2.target.checked) {
                          setStatsIncludedLists((prev) => [...prev, list.id]);
                        } else {
                          if (statsIncludedLists.length === 0) {
                            const newSet = allLists.map((l2) => l2.id).filter((id2) => id2 !== list.id);
                            setStatsIncludedLists(newSet);
                          } else {
                            setStatsIncludedLists((prev) => prev.filter((id2) => id2 !== list.id));
                          }
                        }
                      },
                      style: { marginRight: "8px" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: `stat-list-${list.id}`, style: { cursor: "pointer" }, children: list.name })
                ] }, list.id))
              ] }, blockName));
            })() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "button-link",
                style: { fontSize: "0.8em", padding: "5px 0", background: "none", border: "none", color: "#0079bf", cursor: "pointer", textDecoration: "underline" },
                onClick: () => setStatsIncludedLists([]),
                children: "Select All (Clear Filter)"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "20px", padding: "15px", background: "#f0f4f8", borderRadius: "6px", border: "1px solid #cce" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 18, color: "#0052cc" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { fontWeight: "bold", margin: 0, color: "#0052cc" }, children: "Custom AI Prompt (Optional)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9em", color: "#666", marginTop: "0", marginBottom: "10px" }, children: "Provide additional context or specific instructions to the AI when generating a summary for this board. This context will be added to the core system instructions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                value: statsCustomPrompt,
                onChange: (e2) => setStatsCustomPrompt(e2.target.value),
                placeholder: "E.g., Write the summary as a pirate...",
                style: { width: "100%", minHeight: "80px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", resize: "vertical" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: "button-secondary",
                onClick: handleImprovePrompt,
                disabled: isImprovingPrompt || !statsCustomPrompt.trim(),
                style: { marginTop: "10px", display: "flex", alignItems: "center", gap: "5px" },
                children: [
                  isImprovingPrompt ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 16, className: "spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 16 }),
                  isImprovingPrompt ? "Improving..." : "Improve Prompt with AI"
                ]
              }
            )
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "20px", fontStyle: "italic", color: "#666" }, children: "Select a board to configure settings" }) }),
      activeTab === "other" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tab-content", children: [
        selectedBoard ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "admin-section", id: "section-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
              "Other Settings for ",
              selectedBoard.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9em", color: "#666", marginTop: "-10px", marginBottom: "15px" }, children: "These settings are saved separately for each Trello board. Auto-refresh must be at least 15 seconds; recommended 30 seconds for live displays. The digital clock appears in the top-left corner of the screen and follows the local computer time format. Template Cards in Trello can be excluded from the count (recommended); completed cards can also be excluded." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { fontWeight: "bold", display: "block", marginBottom: "5px" }, children: "Refresh Interval" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: refreshUnit === "seconds" ? 15 : 1, value: refreshValue, onChange: (e2) => setRefreshValue(e2.target.value), style: { width: "60px", padding: "5px", borderRadius: "4px", border: "1px solid #ccc" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: refreshUnit, onChange: (e2) => setRefreshUnit(e2.target.value), style: { padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "seconds", children: "Seconds" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "minutes", children: "Minutes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hours", children: "Hours" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.8em", color: "#666", marginTop: "5px" }, children: "How often the data is retrieved from Trello." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { fontWeight: "bold", display: "block", marginBottom: "5px" }, children: "Slideshow Interval (Seconds)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "number",
                    min: "10",
                    value: slideshowInterval,
                    onChange: (e2) => {
                      setSlideshowInterval(e2.target.value);
                    },
                    style: { width: "60px", padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }
                  }
                ),
                slideshowInterval < 10 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "red", marginLeft: "10px", fontSize: "0.9em" }, children: "Minimum 10 seconds required" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.8em", color: "#666", marginTop: "5px" }, children: "Slideshow mode will cycle between the Dashboard and Map views at regular intervals, minimum 10 seconds. Start the slideshow using the arrows next to the Dashboard or Map button in the footer." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { fontWeight: "bold", display: "block", marginBottom: "5px" }, children: "Features" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", cursor: "pointer" }, onClick: () => setShowClock(!showClock), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSwitch, { checked: showClock, onChange: (e2) => setShowClock(e2.target.checked) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Show Clock" }),
                    showClock && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: "15px", color: "#555", fontFamily: "monospace", background: "#f0f0f0", padding: "2px 6px", borderRadius: "4px", border: "1px solid #ddd" }, children: (/* @__PURE__ */ new Date()).toLocaleTimeString() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", cursor: "pointer" }, onClick: () => setIgnoreTemplateCards(!ignoreTemplateCards), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSwitch, { checked: ignoreTemplateCards, onChange: (e2) => setIgnoreTemplateCards(e2.target.checked) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ignore Template Cards" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "setting-item-row", onClick: () => setIgnoreNoDescCards(!ignoreNoDescCards), style: { cursor: "pointer", display: "flex", alignItems: "flex-start" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "2px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ToggleSwitch,
                      {
                        id: "ignoreNoDescCards",
                        checked: ignoreNoDescCards,
                        onChange: (e2) => setIgnoreNoDescCards(e2.target.checked)
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginLeft: "10px" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ignoreNoDescCards", style: { cursor: "pointer" }, children: "Ignore Cards without Description" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { display: "block", fontSize: "0.85em", color: "#666", fontWeight: "normal", marginTop: "2px" }, children: "If enabled, cards with empty descriptions will not be counted in dashboard or placed on the map. (First card description usage is unaffected)." })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "setting-item-row", onClick: () => setIgnoreCompletedCards(!ignoreCompletedCards), style: { cursor: "pointer" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ToggleSwitch,
                      {
                        id: "ignoreCompletedCards",
                        checked: ignoreCompletedCards,
                        onChange: (e2) => setIgnoreCompletedCards(e2.target.checked)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ignoreCompletedCards", style: { marginLeft: "10px", cursor: "pointer" }, children: "Ignore Completed Cards (Due Complete)" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "admin-section", id: "section-naming", style: { marginTop: "20px", borderTop: "1px solid #eee", paddingTop: "15px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Naming configuration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9em", color: "#666", marginTop: "-10px", marginBottom: "15px" }, children: 'Customize the terminology used across your Dashboard, Map, and Statistics views. By default, it will use "Card", "List", and "Board". Leave empty to use defaults.' }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "15px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { fontWeight: "bold" }, children: '"Card" is called...' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: namingCard,
                    onChange: (e2) => setNamingCard(e2.target.value),
                    placeholder: "e.g. Task, Job, Ticket",
                    style: { width: "250px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { fontWeight: "bold" }, children: '"List" is called...' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: namingList,
                    onChange: (e2) => setNamingList(e2.target.value),
                    placeholder: "e.g. Phase, Stage, Status",
                    style: { width: "250px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { fontWeight: "bold" }, children: '"Board" is called...' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: namingBoard,
                    onChange: (e2) => setNamingBoard(e2.target.value),
                    placeholder: "e.g. Project, Sprint, Portfolio",
                    style: { width: "250px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { fontWeight: "bold" }, children: '"Label" is called...' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: namingLabel,
                    onChange: (e2) => setNamingLabel(e2.target.value),
                    placeholder: "e.g. Tag, Category, Group",
                    style: { width: "250px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }
                  }
                )
              ] })
            ] })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "20px", fontStyle: "italic", color: "#666" }, children: "Select a board to configure settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "danger-zone", style: { marginTop: "40px", paddingTop: "10px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
                                .danger-header:hover { background-color: #fff0f0; }
                             ` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "danger-header",
              onClick: () => setShowResetSection(!showResetSection),
              style: {
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { color: "black", margin: 0 }, children: "⚠️ Global settings reset" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.2em", color: "#d32f2f" }, children: showResetSection ? "▼" : "▶" })
              ]
            }
          ),
          showResetSection && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { backgroundColor: "#fff0f0", padding: "15px", borderRadius: "4px", border: "1px solid #ffcdcd", marginTop: "10px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: "0.9em", color: "#8b0000", marginBottom: "10px" }, children: [
              "Resetting your settings will remove any locally stored information including dashboard and map configuration for ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ALL boards" }),
              ", as well as decoded geolocations."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9em", color: "#8b0000", marginBottom: "15px" }, children: "Your Trello account will NOT be affected, nor will your Trellops subscriptions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "15px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { display: "block", marginBottom: "5px", color: "#8b0000", fontSize: "0.85em" }, children: "The reset will erase all the information stored below; it is recommended that you back up each configuration first." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: { margin: "5px 0 10px 20px", fontSize: "0.85em", color: "#8b0000" }, children: (() => {
                const storedData = JSON.parse(localStorage.getItem("trelloUserData") || "{}");
                const userData = storedData[user == null ? void 0 : user.id] || {};
                const boardsWithLayout = Object.keys(userData.dashboardLayout || {});
                const boardsWithColors = Object.keys(userData.listColors || {});
                const allCachedBoardIds = /* @__PURE__ */ new Set([...boardsWithLayout, ...boardsWithColors]);
                if (allCachedBoardIds.size === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No cached configurations found." });
                return Array.from(allCachedBoardIds).map((bid) => {
                  var _a2;
                  const bName = ((_a2 = boards.find((b2) => b2.id === bid)) == null ? void 0 : _a2.name) || bid;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    bName,
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#b71c1c", fontSize: "0.8em" }, children: [
                      "(",
                      bid,
                      ")"
                    ] })
                  ] }, bid);
                });
              })() })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  if (confirm(`ARE YOU SURE you want to DELETE ALL LOCAL SETTINGS?

This cannot be undone.`)) {
                    const storedData = JSON.parse(localStorage.getItem("trelloUserData") || "{}");
                    if (user == null ? void 0 : user.id) delete storedData[user.id];
                    localStorage.setItem("trelloUserData", JSON.stringify(storedData));
                    const keysToRemove = [];
                    for (let i = 0; i < localStorage.length; i++) {
                      const key = localStorage.key(i);
                      if (key && (key.startsWith("TRELLO_") || key.startsWith("MAP_GEOCODING_CACHE_") || key.startsWith("updateTrelloCoordinates_") || key.startsWith("enableCardMove_") || key.startsWith("enableStreetView_") || key.startsWith("refreshInterval_"))) {
                        keysToRemove.push(key);
                      }
                    }
                    keysToRemove.forEach((k2) => localStorage.removeItem(k2));
                    alert("All local cache has been reset. The application will reload.");
                    window.location.reload();
                  }
                },
                style: { backgroundColor: "#d32f2f", color: "white", border: "none", padding: "10px 15px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" },
                children: "Reset My Trellops Stored Cache"
              }
            )
          ] })
        ] })
      ] }),
      viewMode === "default" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "actions-container", style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "save-layout-button", onClick: handleSave, children: "Save Settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: onClose, children: "Cancel" }),
        activeTab !== "tasks" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: () => setShowShareModal(true), children: "Share Configuration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: () => setShowMoreOptions(true), children: "More..." })
        ] })
      ] })
    ] }),
    viewMode === "default" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "30px", borderTop: "1px solid #eee", paddingTop: "20px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Looking for Task View settings?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "5px 0 0 0", fontSize: "0.9em", color: "#666" }, children: "Use the dedicated page to configure your global task dashboard." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/tasks/settings",
          onClick: (e2) => {
            window.history.pushState({}, "", "/tasks/settings");
            if (onManageTasks) onManageTasks();
            else window.dispatchEvent(new Event("popstate"));
          },
          className: "button-secondary",
          style: { textDecoration: "none", display: "inline-block" },
          children: "Manage Tasks View"
        }
      )
    ] }) }),
    viewMode === "tasks" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "admin-section", id: "section-tasks", style: { marginTop: "0", borderTop: "none" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: { margin: 0 }, children: [
            user.fullName || user.displayName || user.username,
            " Tasks View Settings"
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { paddingTop: "10px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.9em", color: "#666", marginTop: "-10px", marginBottom: "15px" }, children: `This is a separate feature, independent from the dashboard and map views. Enable a "Bird's Eye View" dashboard to see all your assigned tasks (checklists) and cards across ALL your workspaces and boards in one place.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settings-row", style: { display: "flex", alignItems: "center", cursor: "pointer" }, onClick: () => setEnableTaskView(!enableTaskView), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSwitch, { checked: enableTaskView, onChange: (e2) => setEnableTaskView(e2.target.checked) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Enable Tasks View" })
        ] }),
        enableTaskView && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "10px", fontSize: "0.9em", color: "green", display: "flex", alignItems: "center", marginBottom: "20px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginRight: "5px" }, children: "✓" }),
            ' A "Tasks View" button will appear in the main navigation footer.'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "setting-group", style: { marginBottom: "20px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "setting-label", children: "Workspaces to Include" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85em", color: "#666", marginBottom: "5px" }, children: "Select which workspaces to show tasks from. At least one workspace must be selected." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { maxHeight: "150px", overflowY: "auto", border: "1px solid #ddd", padding: "10px", borderRadius: "4px" }, children: userOrgs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontStyle: "italic", color: "#888" }, children: "Loading workspaces..." }) : userOrgs.map((org) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "5px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  id: `ws-${org.id}`,
                  checked: taskViewWorkspaces && taskViewWorkspaces.includes(org.id),
                  onChange: (e2) => {
                    if (e2.target.checked) {
                      setTaskViewWorkspaces([...taskViewWorkspaces || [], org.id]);
                    } else {
                      if (taskViewWorkspaces.length > 1) {
                        setTaskViewWorkspaces(taskViewWorkspaces.filter((id2) => id2 !== org.id));
                      } else {
                        alert("At least one workspace must be selected.");
                      }
                    }
                  },
                  style: { marginRight: "8px" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: `ws-${org.id}`, style: { cursor: "pointer" }, children: org.displayName })
            ] }, org.id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "setting-group", style: { marginBottom: "20px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "setting-label", children: "Auto-Refresh Interval" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "10px", alignItems: "center" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: "1",
                  value: taskViewRefreshInterval.value,
                  onChange: (e2) => setTaskViewRefreshInterval({ ...taskViewRefreshInterval, value: parseInt(e2.target.value) || 1 }),
                  style: { width: "60px", padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: taskViewRefreshInterval.unit,
                  onChange: (e2) => setTaskViewRefreshInterval({ ...taskViewRefreshInterval, unit: e2.target.value }),
                  style: { padding: "5px", borderRadius: "4px", border: "1px solid #ccc" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "minutes", children: "Minutes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hours", children: "Hours" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85em", color: "#666", marginTop: "5px" }, children: "Minimum 1 minute." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "actions-container", style: { display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: handleSaveTasks, children: "Save Tasks Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: onClose, children: "Cancel" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginTop: "30px", marginBottom: "10px", fontSize: "0.85em", color: "#aaa", fontWeight: "bold" }, children: [
      "v4.5.",
      "AEM9",
      " - Jan 09, 2026"
    ] }),
    showShareModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShareConfigModal,
      {
        config: getConfigObject(),
        onClose: () => setShowShareModal(false),
        boardName: selectedBoard == null ? void 0 : selectedBoard.name
      }
    ),
    showMoreOptions && /* @__PURE__ */ jsxRuntimeExports.jsx(
      MoreOptionsModal,
      {
        onClose: () => setShowMoreOptions(false),
        onReset: handleClearBoardConfig,
        onExport: handleExportConfig,
        onImport: handleImportConfig,
        selectedBoardId,
        boardName: selectedBoard == null ? void 0 : selectedBoard.name
      }
    )
  ] });
};
const TaskView = ({ user, settings: settings2, onClose, onShowSettings, onLogout, onShowMap, onMainView }) => {
  const [loading, setLoading] = reactExports.useState(true);
  const [data, setData] = reactExports.useState({ orgs: [], boards: [], cards: [] });
  const [error, setError] = reactExports.useState("");
  const [refreshCountdown, setRefreshCountdown] = reactExports.useState(null);
  const [showDashboardDropdown, setShowDashboardDropdown] = reactExports.useState(false);
  const [showMapDropdown, setShowMapDropdown] = reactExports.useState(false);
  const [selectedWorkspaceIds, setSelectedWorkspaceIds] = reactExports.useState(null);
  const [selectedBoardIds, setSelectedBoardIds] = reactExports.useState(null);
  const [filterAssigned, setFilterAssigned] = reactExports.useState(true);
  const [filterMember, setFilterMember] = reactExports.useState(true);
  const [filterComplete, setFilterComplete] = reactExports.useState(false);
  const [sortBy, setSortBy] = reactExports.useState("board");
  const { theme, toggleTheme } = useDarkMode();
  const taskViewWorkspaces = (settings2 == null ? void 0 : settings2.taskViewWorkspaces) || [];
  const refreshIntervalSetting = (settings2 == null ? void 0 : settings2.taskViewRefreshInterval) || { value: 5, unit: "minutes" };
  const intervalRef = reactExports.useRef(null);
  const countdownRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    loadData();
  }, [user]);
  reactExports.useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (countdownRef.current) clearInterval(countdownRef.current);
    const minutes = refreshIntervalSetting.unit === "hours" ? refreshIntervalSetting.value * 60 : refreshIntervalSetting.value;
    const totalSeconds = Math.max(60, minutes * 60);
    setRefreshCountdown(totalSeconds);
    countdownRef.current = setInterval(() => {
      setRefreshCountdown((prev) => {
        if (prev <= 1) return totalSeconds;
        return prev - 1;
      });
    }, 1e3);
    intervalRef.current = setInterval(() => {
      loadData(true);
      setRefreshCountdown(totalSeconds);
    }, totalSeconds * 1e3);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, [refreshIntervalSetting.value, refreshIntervalSetting.unit]);
  const loadData = async (isRefresh = false) => {
    if (!isRefresh) setLoading(true);
    try {
      const result = await fetchAllTasksData(user.token);
      setData(result);
    } catch (e2) {
      console.error(e2);
      if (!isRefresh) setError("Failed to load tasks. Please try again.");
    } finally {
      if (!isRefresh) setLoading(false);
    }
  };
  const processedTasks = reactExports.useMemo(() => {
    if (!data.cards.length) return [];
    let tasks = [];
    const orgMap = new Map(data.orgs.map((o) => [o.id, o]));
    const boardMap = new Map(data.boards.map((b2) => [b2.id, b2]));
    data.cards.forEach((card) => {
      const board = boardMap.get(card.idBoard);
      const orgId = board == null ? void 0 : board.idOrganization;
      const rawOrg = orgMap.get(orgId);
      let finalOrgName = (rawOrg == null ? void 0 : rawOrg.displayName) || (rawOrg == null ? void 0 : rawOrg.name) || "External Workspaces";
      let finalOrgId = (rawOrg == null ? void 0 : rawOrg.id) || "external_combined";
      if (finalOrgName === "External Workspaces") {
        finalOrgId = "external_combined";
      }
      if (taskViewWorkspaces.length > 0 && finalOrgId !== "external_combined" && !taskViewWorkspaces.includes(orgId)) {
        return;
      }
      const baseProps = {
        cardId: card.id,
        cardName: card.name,
        cardUrl: card.url,
        boardId: card.idBoard,
        boardName: (board == null ? void 0 : board.name) || "Unknown Board",
        orgId: finalOrgId,
        orgName: finalOrgName,
        isCompleted: card.dueComplete || false,
        due: card.due,
        labels: card.labels || []
      };
      const myChecklistItems = [];
      if (card.checklists && card.checklists.length > 0) {
        card.checklists.forEach((cl2) => {
          cl2.checkItems.forEach((ci2) => {
            const assignedToMe = ci2.idMember && ci2.idMember === user.id || ci2.idMembers && ci2.idMembers.includes(user.id);
            if (assignedToMe) {
              myChecklistItems.push({
                id: ci2.id,
                name: ci2.name,
                state: ci2.state,
                due: ci2.due
              });
            }
          });
        });
      }
      const isMember = card.idMembers && card.idMembers.includes(user.id);
      if (isMember || myChecklistItems.length > 0) {
        tasks.push({
          ...baseProps,
          // We treat the "Principal" task as the card itself.
          // If strict "Assigned Only" filter is on, we might need adjustments,
          // but usually "Assigned" means "I have work here".
          type: "card",
          isMember,
          checkItems: myChecklistItems
        });
      }
    });
    return tasks;
  }, [data, user.id, taskViewWorkspaces]);
  const displayedTasks = reactExports.useMemo(() => {
    let result = processedTasks;
    if (!filterAssigned && !filterMember) return [];
    result = result.filter((t2) => {
      const hasAssignments = t2.checkItems.length > 0;
      const isMember = t2.isMember;
      if (filterAssigned && filterMember) return hasAssignments || isMember;
      if (filterAssigned) return hasAssignments;
      if (filterMember) return isMember;
      return false;
    });
    if (selectedWorkspaceIds && selectedWorkspaceIds.size > 0) {
      result = result.filter((t2) => selectedWorkspaceIds.has(t2.orgId));
    }
    if (selectedBoardIds && selectedBoardIds.size > 0) {
      result = result.filter((t2) => selectedBoardIds.has(t2.boardId));
    }
    if (!filterComplete) {
      result = result.filter((t2) => {
        const cardDone = t2.isCompleted;
        const allItemsDone = t2.checkItems.length === 0 || t2.checkItems.every((i) => i.state === "complete");
        return !(cardDone && allItemsDone);
      });
    }
    const safeStr = (s) => s || "";
    result.sort((a, b2) => {
      if (sortBy === "due") {
        if (!a.due) return 1;
        if (!b2.due) return -1;
        return new Date(a.due) - new Date(b2.due);
      }
      const isExtA = a.orgId === "external_combined";
      const isExtB = b2.orgId === "external_combined";
      if (isExtA && !isExtB) return 1;
      if (!isExtA && isExtB) return -1;
      const orgCompare = safeStr(a.orgName).localeCompare(safeStr(b2.orgName));
      if (orgCompare !== 0) return orgCompare;
      return safeStr(a.boardName).localeCompare(safeStr(b2.boardName)) || safeStr(a.cardName).localeCompare(safeStr(b2.cardName));
    });
    return result;
  }, [processedTasks, filterAssigned, filterMember, filterComplete, selectedWorkspaceIds, selectedBoardIds, sortBy]);
  const groupedData = reactExports.useMemo(() => {
    const groups = {};
    displayedTasks.forEach((task) => {
      if (!groups[task.orgId]) {
        groups[task.orgId] = {
          name: task.orgName,
          boards: {}
          // Insert order might not be preserved in object keys, but often is in modern JS. 
          // For safety, we can rely on Object.entries later sorting automatically? 
          // Actually, displayedTasks loop order determines insertion order.
        };
      }
      if (!groups[task.orgId].boards[task.boardId]) {
        groups[task.orgId].boards[task.boardId] = {
          name: task.boardName,
          tasks: []
        };
      }
      groups[task.orgId].boards[task.boardId].tasks.push(task);
    });
    return groups;
  }, [displayedTasks]);
  const safeSort = (a, b2) => (a.name || "").localeCompare(b2.name || "");
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", style: { textAlign: "center", marginTop: 50 }, children: "Loading Tasks..." });
  if (error) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container error", children: error });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "map-header-title-area", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { children: [
        "Tasks for ",
        user.fullName || user.username
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-header-actions", style: { flexGrow: 1, justifyContent: "flex-end", display: "flex", alignItems: "center", gap: "5px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-filters", style: { display: "flex", gap: "5px", alignItems: "center", flexWrap: "nowrap", flexShrink: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            MultiSelectFilter,
            {
              label: "Workspace",
              options: Array.from(new Set(processedTasks.map((t2) => t2.orgId))).map((orgId) => {
                var _a2;
                return { id: orgId, name: ((_a2 = processedTasks.find((t2) => t2.orgId === orgId)) == null ? void 0 : _a2.orgName) || "Unknown" };
              }).sort(safeSort),
              selectedIds: selectedWorkspaceIds,
              onChange: (ids) => {
                setSelectedWorkspaceIds(ids);
                setSelectedBoardIds(null);
              },
              className: "time-filter-select"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            MultiSelectFilter,
            {
              label: "Boards",
              options: Array.from(new Set(processedTasks.filter((t2) => selectedWorkspaceIds === null || selectedWorkspaceIds.has(t2.orgId)).map((t2) => t2.boardId))).map((boardId) => {
                var _a2;
                return { id: boardId, name: ((_a2 = processedTasks.find((t2) => t2.boardId === boardId)) == null ? void 0 : _a2.boardName) || "Unknown" };
              }).sort(safeSort),
              selectedIds: selectedBoardIds,
              onChange: setSelectedBoardIds,
              className: "time-filter-select"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: sortBy,
              onChange: (e2) => setSortBy(e2.target.value),
              className: "time-filter-select",
              style: { borderRadius: "4px", border: "1px solid var(--border-color)", backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "board", children: "Sort: Board" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "due", children: "Sort: Due" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "desktop-only", style: { display: "flex", gap: "10px", alignItems: "center", fontSize: "0.9em" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { cursor: "pointer", display: "flex", alignItems: "center", whiteSpace: "nowrap" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: filterAssigned, onChange: (e2) => setFilterAssigned(e2.target.checked), style: { marginRight: "4px" } }),
              " Assigned to me"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { cursor: "pointer", display: "flex", alignItems: "center", whiteSpace: "nowrap" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: filterMember, onChange: (e2) => setFilterMember(e2.target.checked), style: { marginRight: "4px" } }),
              " Member of"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { cursor: "pointer", display: "flex", alignItems: "center", whiteSpace: "nowrap" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: filterComplete, onChange: (e2) => setFilterComplete(e2.target.checked), style: { marginRight: "4px" } }),
              " Done"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "desktop-only", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "theme-toggle-button", onClick: () => toggleTheme(), style: { flexShrink: 0 }, children: theme === "dark" ? "☀️" : "🌙" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mobile-only", style: { marginLeft: "5px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HamburgerMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hamburger-section", style: { borderBottom: "1px solid var(--border-color)", paddingBottom: "10px", marginBottom: "15px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Filters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", padding: "0 10px", width: "100%", boxSizing: "border-box" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", cursor: "pointer", fontSize: "0.9em", width: "100%" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: filterAssigned, onChange: (e2) => setFilterAssigned(e2.target.checked), style: { marginRight: "10px", transform: "scale(1.2)" } }),
                "Assigned to Me"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", cursor: "pointer", fontSize: "0.9em", width: "100%" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: filterMember, onChange: (e2) => setFilterMember(e2.target.checked), style: { marginRight: "10px", transform: "scale(1.2)" } }),
                "Member"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", cursor: "pointer", fontSize: "0.9em", width: "100%" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: filterComplete, onChange: (e2) => setFilterComplete(e2.target.checked), style: { marginRight: "10px", transform: "scale(1.2)" } }),
                "Show Completed"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hamburger-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Actions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: () => onMainView ? onMainView() : onClose(), children: "Dashboard View" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: onShowSettings, children: "Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: onLogout, children: "Logout" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hamburger-section", style: { marginTop: "10px", paddingTop: "10px", borderTop: "1px solid var(--border-color)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "theme-toggle-button",
              onClick: () => toggleTheme(),
              title: "Toggle Theme",
              style: { background: "transparent", fontSize: "1.5em", cursor: "pointer", border: "none" },
              children: theme === "dark" ? "☀️" : "🌙"
            }
          ) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "task-content", style: { flex: 1, overflowY: "auto", padding: "20px", paddingBottom: "80px", background: "var(--bg-canvas)", position: "relative", zIndex: 1 }, children: Object.keys(groupedData).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", color: "#888", marginTop: "50px" }, children: "No tasks found matching filters." }) : Object.entries(groupedData).map(([orgId, orgData]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "workspace-section", style: { marginBottom: "40px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { borderBottom: "2px solid var(--border-color, #ccc)", paddingBottom: "10px", marginBottom: "20px", color: "var(--text-primary)" }, children: orgData.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "boards-grid", style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", alignItems: "start" }, children: Object.entries(orgData.boards).map(([boardId, boardData]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "board-card", style: { background: "var(--bg-secondary)", borderRadius: "8px", padding: "15px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", maxHeight: "600px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { style: { marginTop: 0, fontSize: "1.1em", marginBottom: "15px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color, #eee)", paddingBottom: "8px" }, children: [
          boardData.name,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.8em", fontWeight: "normal", color: "var(--text-secondary)" }, children: [
            "(",
            boardData.tasks.length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tasks-list-vertical", style: { display: "flex", flexDirection: "column", gap: "15px", overflowY: "auto", paddingRight: "5px" }, children: boardData.tasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "task-card", style: { background: "var(--bg-primary)", padding: "12px", borderRadius: "6px", boxShadow: "0 1px 2px rgba(0,0,0,0.1)", borderLeft: task.checkItems && task.checkItems.length > 0 ? "4px solid #0079bf" : "4px solid #ff9f1a", color: "var(--text-primary)", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "8px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: task.cardUrl, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none", color: "var(--text-primary)", fontWeight: "600", fontSize: "1em", lineHeight: "1.3", wordBreak: "break-word" }, children: task.cardName }),
              task.isMember && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: "Member", style: { fontSize: "0.9em", marginLeft: "5px", opacity: 0.7 }, children: "👤" })
            ] }),
            task.labels && task.labels.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "8px" }, children: task.labels.map((l2) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.7em", padding: "2px 6px", borderRadius: "3px", backgroundColor: l2.color ? getLabelColor(l2.color) : "#ccc", color: l2.color ? "#fff" : "#000", fontWeight: "500" }, children: l2.name }, l2.id)) }),
            task.due && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85em", marginTop: "8px", color: new Date(task.due) < /* @__PURE__ */ new Date() && !task.isCompleted ? "#eb5a46" : "#5ba4cf", display: "flex", alignItems: "center" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginRight: "4px" }, children: "🕒" }),
              new Date(task.due).toLocaleDateString(),
              " ",
              new Date(task.due).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              " ",
              task.isCompleted && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: "5px", color: "green" }, children: "✓ Done" })
            ] })
          ] }),
          task.checkItems && task.checkItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "auto", paddingTop: "10px", borderTop: "1px solid var(--border-color, #eee)" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75em", color: "var(--text-secondary)", marginBottom: "5px", textTransform: "uppercase", fontWeight: "bold" }, children: "Your Tasks:" }),
            task.checkItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "flex-start", padding: "4px 0", paddingLeft: "10px", borderLeft: "2px solid #ddd", fontSize: "0.9em", marginBottom: "4px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "16px", height: "16px", borderRadius: "3px", border: "1px solid #ccc", marginRight: "8px", marginTop: "2px", display: "flex", alignItems: "center", justifyContent: "center", background: item.state === "complete" ? "#5ba4cf" : "transparent", flexShrink: 0 }, children: item.state === "complete" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "white", fontSize: "11px" }, children: "✓" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: item.state === "complete" ? "#888" : "var(--text-primary)", textDecoration: item.state === "complete" ? "line-through" : "none", lineHeight: "1.4" }, children: item.name })
            ] }, item.id))
          ] })
        ] }, task.type === "card" ? `card-${task.cardId}` : task.id)) })
      ] }, boardId)) })
    ] }, orgId)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-footer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "map-footer-left" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-footer-right", style: { display: "flex", gap: "15px", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "button-secondary", onClick: () => {
          setRefreshCountdown(60);
          loadData(true);
        }, children: [
          "Refresh ",
          formatDynamicCountdown(refreshCountdown)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "desktop-only", style: { display: "flex", gap: "15px", alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: () => onMainView ? onMainView() : onClose(), children: "Dashboard View" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary dropdown-arrow", style: { marginLeft: "-1px", padding: "0 5px", borderLeft: "none" }, onClick: () => setShowDashboardDropdown(!showDashboardDropdown), children: "▼" })
            ] }),
            showDashboardDropdown && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "context-menu", style: { position: "absolute", bottom: "100%", left: 0, background: "var(--bg-primary)", border: "1px solid #ccc", borderRadius: "4px", padding: "5px", minWidth: "150px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "menu-item", onClick: () => {
              window.open("/dashboard", "_blank");
              setShowDashboardDropdown(false);
            }, children: "Open in New Tab" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: onShowSettings, children: "Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: onLogout, children: "Logout" })
        ] })
      ] })
    ] })
  ] });
};
const getLabelColor = (colorName) => {
  const colors = {
    green: "#61bd4f",
    yellow: "#f2d600",
    orange: "#ff9f1a",
    red: "#eb5a46",
    purple: "#c377e0",
    blue: "#0079bf",
    sky: "#00c2e0",
    lime: "#51e898",
    pink: "#ff78cb",
    black: "#344563",
    none: "#b3bac5"
  };
  return colors[colorName] || "#b3bac5";
};
const MultiSelectFilter = ({ label, options, selectedIds, onChange, className }) => {
  const { theme } = useDarkMode();
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const dropdownRef = reactExports.useRef(null);
  const isAll = selectedIds === null || selectedIds === void 0;
  reactExports.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const toggleOption = (id2) => {
    if (isAll) {
      const allOtherIds = new Set(options.filter((o) => o.id !== id2).map((o) => o.id));
      onChange(allOtherIds);
    } else {
      const newSet = new Set(selectedIds);
      if (newSet.has(id2)) newSet.delete(id2);
      else newSet.add(id2);
      onChange(newSet);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", display: "inline-block" }, ref: dropdownRef, className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: "settings-button",
        onClick: () => setIsOpen(!isOpen),
        style: {
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 12px",
          fontSize: "0.9em",
          backgroundColor: theme === "dark" ? "var(--bg-secondary)" : "#ffffff",
          color: "var(--text-primary)",
          border: "1px solid var(--border-color)",
          maxWidth: "100%",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }, children: label }),
          !isAll && selectedIds.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            background: "var(--accent-color)",
            color: "white",
            borderRadius: "10px",
            padding: "0 6px",
            fontSize: "0.8em",
            marginLeft: "4px"
          }, children: selectedIds.size }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.8em", marginLeft: "4px" }, children: "▼" })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      position: "absolute",
      top: "100%",
      left: 0,
      marginTop: "5px",
      background: "var(--bg-secondary)",
      border: "1px solid var(--border-color)",
      borderRadius: "6px",
      boxShadow: "0 4px 12px var(--shadow-color)",
      zIndex: 1e3,
      minWidth: "200px",
      display: "flex",
      flexDirection: "column",
      maxHeight: "400px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        padding: "8px",
        borderBottom: "1px solid var(--border-color)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "0.85em",
        fontWeight: "bold",
        color: "var(--text-primary)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onChange(null), style: { background: "transparent", border: "none", color: "var(--accent-color)", cursor: "pointer", textDecoration: "underline" }, children: "All" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onChange(/* @__PURE__ */ new Set()), style: { background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer", textDecoration: "underline" }, children: "None" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowY: "auto", padding: "8px", flex: 1 }, children: options.map((opt) => {
        const isChecked = isAll || selectedIds.has(opt.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", padding: "4px 0", cursor: "pointer", color: "var(--text-primary)", fontSize: "0.9em" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: isChecked, onChange: () => toggleOption(opt.id), style: { marginRight: "8px" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: opt.name })
        ] }, opt.id);
      }) })
    ] })
  ] });
};
const StatisticsView = ({ user, settings: settings2, onShowSettings, onGoToDashboard, onLogout }) => {
  const [cards, setCards] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  const { theme, toggleTheme } = useDarkMode();
  const terms = getTerminology(settings2);
  const CardsTerm = terms.cards;
  const LabelsTerm = terms.labels ? terms.labels.charAt(0).toUpperCase() + terms.labels.slice(1) : "Labels";
  const [summaryText, setSummaryText] = reactExports.useState("");
  const [isGeneratingSummary, setIsGeneratingSummary] = reactExports.useState(false);
  const [createdFilter, setCreatedFilter] = reactExports.useState("this_week");
  const [customRange, setCustomRange] = reactExports.useState({ start: null, end: null });
  const [showCustomRange, setShowCustomRange] = reactExports.useState(false);
  const [selectedLabelIds, setSelectedLabelIds] = reactExports.useState(null);
  const [labelLogic, setLabelLogic] = reactExports.useState("OR");
  const [granularity, setGranularity] = reactExports.useState("day");
  const [allLabels, setAllLabels] = reactExports.useState([]);
  const [members, setMembers] = reactExports.useState([]);
  const enableMapView = settings2 == null ? void 0 : settings2.enableMapView;
  const boardId = settings2 == null ? void 0 : settings2.boardId;
  const boardName = settings2 == null ? void 0 : settings2.boardName;
  const lineChartRef = reactExports.useRef(null);
  const pieChartRef = reactExports.useRef(null);
  const lineChartInstance = reactExports.useRef(null);
  const pieChartInstance = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!boardId) return;
    setLoading(true);
    const fetchData = async () => {
      try {
        const labelsData = await trelloFetch(`/boards/${boardId}/labels`, user.token);
        setAllLabels(labelsData);
        const membersData = await trelloFetch(`/boards/${boardId}/members?fields=id,fullName`, user.token);
        setMembers(membersData);
        const cardsData = await trelloFetch(`/boards/${boardId}/cards?fields=id,name,labels,idList,due,dueComplete,dateLastActivity,desc,pos,coordinates,badges,idMembers&pluginData=true&actions=commentCard`, user.token);
        const processedCards = cardsData.map((c2) => {
          let coords = null;
          if (c2.coordinates) {
            const { latitude, longitude } = c2.coordinates;
            if (latitude && longitude) coords = { lat: latitude, lng: longitude };
          }
          return { ...c2, coordinates: coords };
        });
        const statsSettings = (settings2 == null ? void 0 : settings2.statistics) || {};
        const includedLists = statsSettings.includedLists || [];
        const includedSet = new Set(includedLists);
        let finalCards = processedCards;
        if (includedLists.length > 0) {
          finalCards = finalCards.filter((c2) => includedSet.has(c2.idList));
        }
        setCards(finalCards);
      } catch (e2) {
        setError(e2.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [boardId, user.token, settings2 == null ? void 0 : settings2.statistics]);
  const getCreationDate = (id2) => new Date(1e3 * parseInt(id2.substring(0, 8), 16));
  const isDateInFilter = (date, filterKey) => {
    if (filterKey === "all") return true;
    if (filterKey === "custom") {
      if (!customRange.start) return true;
      return date >= new Date(customRange.start) && (!customRange.end || date <= new Date(customRange.end));
    }
    const f2 = TIME_FILTERS[filterKey];
    if (!f2) return true;
    if (f2.type === "relative") {
      const cutoff = /* @__PURE__ */ new Date();
      cutoff.setMinutes(cutoff.getMinutes() - f2.minutes);
      return date >= cutoff;
    }
    if (f2.type === "calendar") {
      return date >= f2.start && (!f2.end || date <= f2.end);
    }
    return true;
  };
  const getFilterRange = (filterKey) => {
    if (filterKey === "custom" && customRange.start) {
      return { start: new Date(customRange.start), end: customRange.end ? new Date(customRange.end) : /* @__PURE__ */ new Date() };
    }
    if (filterKey === "all") return null;
    const f2 = TIME_FILTERS[filterKey];
    if (!f2) return null;
    if (f2.type === "relative") {
      const start = /* @__PURE__ */ new Date();
      start.setMinutes(start.getMinutes() - f2.minutes);
      return { start, end: /* @__PURE__ */ new Date() };
    }
    if (f2.type === "calendar") {
      return { start: f2.start, end: f2.end || /* @__PURE__ */ new Date() };
    }
    return null;
  };
  const formatDateBucket = (date, gran) => {
    const d2 = new Date(date);
    if (gran === "hour") {
      return d2.toLocaleString("default", { month: "short", day: "numeric", hour: "numeric", hour12: true });
    }
    if (gran === "cumulative_hour") {
      return d2.toLocaleString("default", { hour: "numeric", hour12: true });
    }
    if (gran === "month") {
      return d2.toLocaleString("default", { month: "short", year: "numeric" });
    }
    return d2.toLocaleDateString();
  };
  const matchesLabelFilter = (card) => {
    if (!selectedLabelIds || selectedLabelIds.size === 0) return true;
    if (!card.labels || card.labels.length === 0) return false;
    const cardLabelIds = new Set(card.labels.map((l2) => l2.id));
    if (labelLogic === "AND") {
      for (let id2 of selectedLabelIds) {
        if (!cardLabelIds.has(id2)) return false;
      }
      return true;
    } else {
      for (let id2 of selectedLabelIds) {
        if (cardLabelIds.has(id2)) return true;
      }
      return false;
    }
  };
  let filterLabelText = "";
  if (createdFilter === "custom") {
    filterLabelText = `${new Date(customRange.start).toLocaleDateString()} - ${customRange.end ? new Date(customRange.end).toLocaleDateString() : "Now"}`;
  } else {
    const f2 = TIME_FILTERS[createdFilter];
    filterLabelText = f2 ? f2.label : createdFilter;
  }
  let labelInfo = "";
  if (selectedLabelIds && selectedLabelIds.size > 0) {
    const labelNames = allLabels.filter((l2) => selectedLabelIds.has(l2.id)).map((l2) => l2.name || l2.color);
    labelInfo = ` - Labels: ${labelNames.join(", ")}`;
    if (labelInfo.length > 50) labelInfo = ` - Labels: ${selectedLabelIds.size} selected`;
  }
  reactExports.useEffect(() => {
    if (loading || cards.length === 0) return;
    if (lineChartInstance.current) lineChartInstance.current.destroy();
    if (pieChartInstance.current) pieChartInstance.current.destroy();
    if (!window.Chart) return;
    if (window.ChartDataLabels) {
      try {
        window.Chart.register(window.ChartDataLabels);
      } catch (e2) {
      }
    }
    try {
      const lineChartCards = cards.filter(matchesLabelFilter);
      const range = getFilterRange(createdFilter);
      const bucketMap = /* @__PURE__ */ new Map();
      if (range && (granularity === "hour" || granularity === "day" || granularity === "cumulative_hour")) {
        let current = new Date(range.start);
        const end2 = new Date(range.end);
        if (current < end2) {
          while (current <= end2) {
            const key = formatDateBucket(current, granularity);
            let sortDate = current.getTime();
            if (granularity === "cumulative_hour") {
              sortDate = current.getHours();
            }
            if (!bucketMap.has(key)) bucketMap.set(key, { created: 0, completed: 0, sortDate });
            if (granularity === "hour" || granularity === "cumulative_hour") current.setHours(current.getHours() + 1);
            else current.setDate(current.getDate() + 1);
          }
        }
        if (granularity === "cumulative_hour") {
          for (let h2 = 0; h2 < 24; h2++) {
            const dateSim = /* @__PURE__ */ new Date();
            dateSim.setHours(h2, 0, 0, 0);
            const key = formatDateBucket(dateSim, "cumulative_hour");
            if (!bucketMap.has(key)) bucketMap.set(key, { created: 0, completed: 0, sortDate: h2 });
          }
        }
      }
      const validCreatedCards = lineChartCards.filter((c2) => isDateInFilter(getCreationDate(c2.id), createdFilter));
      validCreatedCards.forEach((c2) => {
        const date = getCreationDate(c2.id);
        const key = formatDateBucket(date, granularity);
        let sortDate = date.getTime();
        if (granularity === "cumulative_hour") sortDate = date.getHours();
        if (!bucketMap.has(key)) bucketMap.set(key, { created: 0, completed: 0, sortDate });
        bucketMap.get(key).created++;
      });
      const validCompletedCards = lineChartCards.filter((c2) => {
        if (!c2.dueComplete || !c2.due) return false;
        return isDateInFilter(new Date(c2.due), createdFilter);
      });
      validCompletedCards.forEach((c2) => {
        const date = new Date(c2.due);
        const key = formatDateBucket(date, granularity);
        let sortDate = date.getTime();
        if (granularity === "cumulative_hour") sortDate = date.getHours();
        if (!bucketMap.has(key)) bucketMap.set(key, { created: 0, completed: 0, sortDate });
        bucketMap.get(key).completed++;
      });
      const sortedKeys = Array.from(bucketMap.keys()).sort((a, b2) => {
        return bucketMap.get(a).sortDate - bucketMap.get(b2).sortDate;
      });
      const totalCreated = bucketMap && Array.from(bucketMap.values()).reduce((acc, val) => acc + val.created, 0);
      const totalCompleted = bucketMap && Array.from(bucketMap.values()).reduce((acc, val) => acc + val.completed, 0);
      const ctxLine = lineChartRef.current.getContext("2d");
      lineChartInstance.current = new window.Chart(ctxLine, {
        type: "line",
        data: {
          labels: sortedKeys,
          datasets: [
            {
              label: `Created (${totalCreated})`,
              data: sortedKeys.map((k2) => bucketMap.get(k2).created),
              borderColor: "#0079bf",
              backgroundColor: "#0079bf",
              tension: 0.1
            },
            {
              label: `Completed (${totalCompleted})`,
              data: sortedKeys.map((k2) => bucketMap.get(k2).completed),
              borderColor: "#61bd4f",
              backgroundColor: "#61bd4f",
              tension: 0.1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: "index", intersect: false },
          plugins: {
            legend: { position: "top" },
            title: {
              display: true,
              text: `${totalCreated} ${CardsTerm.toLowerCase()} created / ${totalCompleted} Completed - ${filterLabelText}${labelInfo}`,
              font: { size: 16 }
            },
            datalabels: { display: false }
          },
          scales: {
            x: { title: { display: true, text: granularity.includes("hour") ? "Hour" : "Date" } },
            y: { title: { display: true, text: "Count" }, beginAtZero: true }
          }
        }
      });
      const pieCardsDateFiltered = cards.filter((c2) => isDateInFilter(getCreationDate(c2.id), createdFilter));
      const validPieCards = pieCardsDateFiltered.filter(matchesLabelFilter);
      const labelCombinations = {};
      validPieCards.forEach((c2) => {
        if (!c2.labels || c2.labels.length === 0) {
          const key = "No Label";
          labelCombinations[key] = (labelCombinations[key] || 0) + 1;
        } else {
          const names = c2.labels.map((l2) => l2.name || l2.color).sort().join(" + ");
          labelCombinations[names] = (labelCombinations[names] || 0) + 1;
        }
      });
      const ctxPie = pieChartRef.current.getContext("2d");
      pieChartInstance.current = new window.Chart(ctxPie, {
        type: "pie",
        data: {
          labels: Object.keys(labelCombinations),
          datasets: [{
            data: Object.values(labelCombinations),
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850"
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: 50 },
          // Increased padding from 30 to 50
          plugins: {
            legend: { display: false },
            datalabels: {
              color: "#000",
              anchor: "end",
              align: "end",
              offset: 10,
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 4,
              padding: 4,
              formatter: (value, ctx) => {
                const label = ctx.chart.data.labels[ctx.dataIndex];
                return [label, `(${value})`];
              },
              font: { weight: "bold", size: 11 }
            }
          }
        }
      });
    } catch (err) {
      console.error("Chart error:", err);
    }
  }, [cards, createdFilter, granularity, selectedLabelIds, labelLogic, customRange]);
  const handleExport = (elementId, name) => {
    if (!window.html2canvas) {
      alert("Export library not loaded.");
      return;
    }
    const el2 = elementId ? document.getElementById(elementId) : document.querySelector(".dashboard-grid");
    window.html2canvas(el2).then((canvas) => {
      const link = document.createElement("a");
      link.download = `${boardName}-stats-${name || "all"}.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  };
  const handleGenerateSummary = async () => {
    var _a2;
    setIsGeneratingSummary(true);
    setSummaryText("");
    let attempts = 0;
    const maxAttempts = 3;
    while (attempts < maxAttempts) {
      attempts++;
      try {
        const range = getFilterRange(createdFilter);
        const diffDays = range && range.end && range.start ? (range.end.getTime() - range.start.getTime()) / (1e3 * 60 * 60 * 24) : 0;
        const validCreatedCards = cards.filter(matchesLabelFilter).filter((c2) => isDateInFilter(getCreationDate(c2.id), createdFilter));
        const validCompletedCards = cards.filter(matchesLabelFilter).filter((c2) => c2.dueComplete && c2.due && isDateInFilter(new Date(c2.due), createdFilter));
        const uniqueCardsMap = /* @__PURE__ */ new Map();
        validCreatedCards.forEach((c2) => uniqueCardsMap.set(c2.id, { ...c2, isCreatedInPeriod: true }));
        validCompletedCards.forEach((c2) => {
          if (uniqueCardsMap.has(c2.id)) {
            uniqueCardsMap.get(c2.id).isCompletedInPeriod = true;
          } else {
            uniqueCardsMap.set(c2.id, { ...c2, isCompletedInPeriod: true });
          }
        });
        const payloadCards = Array.from(uniqueCardsMap.values()).map((c2) => {
          var _a3, _b;
          const optimizedCard = { name: c2.name };
          if (c2.desc) optimizedCard.desc = c2.desc.replace(/[\r\n]+/g, " ").substring(0, 60).trim() + "...";
          if (c2.labels && c2.labels.length > 0) optimizedCard.labels = c2.labels.map((l2) => l2.name || l2.color);
          if (((_a3 = c2.idMembers) == null ? void 0 : _a3.length) > 0) {
            optimizedCard.members = c2.idMembers.map((id2) => {
              const m2 = members.find((mbr) => mbr.id === id2);
              return m2 ? m2.fullName : id2;
            });
          }
          if (c2.actions && c2.actions.length > 0) {
            optimizedCard.comments = c2.actions.filter((a) => {
              var _a4;
              return a.type === "commentCard" && ((_a4 = a.data) == null ? void 0 : _a4.text);
            }).map((a) => a.data.text.substring(0, 100));
          } else if (((_b = c2.badges) == null ? void 0 : _b.comments) > 0) {
            optimizedCard.commentsCount = c2.badges.comments;
          }
          if (c2.coordinates) optimizedCard.coords = {
            lat: Math.round(c2.coordinates.lat * 1e3) / 1e3,
            lng: Math.round(c2.coordinates.lng * 1e3) / 1e3
          };
          if (c2.isCreatedInPeriod) optimizedCard.created = true;
          if (c2.isCompletedInPeriod) optimizedCard.completed = true;
          return optimizedCard;
        });
        const response = await fetch("/api/summarize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cardsData: payloadCards,
            periodLabel: filterLabelText,
            diffDays,
            customPromptContext: ((_a2 = settings2 == null ? void 0 : settings2.statistics) == null ? void 0 : _a2.customAIPrompt) || ""
          })
        });
        if (!response.ok) {
          let errorMsg = "An error occurred";
          try {
            const errorData = await response.json();
            errorMsg = errorData.error || errorMsg;
          } catch (e2) {
          }
          setSummaryText(`*The AI model is currently experiencing high demand. Spikes in demand are usually temporary. Please try again later.* 

<details><summary>Developer Info</summary>${typeof errorMsg === "object" ? JSON.stringify(errorMsg) : errorMsg}</details>`);
          setIsGeneratingSummary(false);
          return;
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let summaryBuffer = "";
        let done = false;
        while (!done) {
          const { value, done: readerDone } = await reader.read();
          done = readerDone;
          if (value) {
            summaryBuffer += decoder.decode(value, { stream: true });
            setSummaryText(summaryBuffer);
          }
        }
        setIsGeneratingSummary(false);
        return;
      } catch (e2) {
        if (attempts < maxAttempts) {
          setSummaryText(`*Network issue detected. Retrying... (Attempt ${attempts + 1}/${maxAttempts})*`);
          await new Promise((r2) => setTimeout(r2, 2e3));
          continue;
        }
        setSummaryText(`**Error generating summary:** ${e2.message}`);
        setIsGeneratingSummary(false);
        return;
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "statistics-view", style: { width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-primary)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "map-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-title-area", style: { display: "flex", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DigitalClock, { boardId }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: { marginLeft: "20px" }, children: [
          boardName,
          " - Statistics"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-actions", style: { display: "flex", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "desktop-only", style: { display: "flex", alignItems: "center", gap: "15px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            LabelFilter,
            {
              labels: allLabels,
              selectedLabelIds,
              onChange: setSelectedLabelIds,
              labelLogic,
              onLabelLogicChange: setLabelLogic
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "time-filter-select", value: createdFilter, onChange: (e2) => {
            const val = e2.target.value;
            setCreatedFilter(val);
            if (val === "custom") setShowCustomRange(true);
            else setShowCustomRange(false);
          }, style: { margin: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "this_week", children: "Created: This Week" }),
            Object.keys(TIME_FILTERS).filter((k2) => k2 !== "all").map((k2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: k2, children: TIME_FILTERS[k2].label }, k2)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "custom", children: "Custom Range" })
          ] }),
          createdFilter === "custom" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "5px", alignItems: "center" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: customRange.start || "", onChange: (e2) => setCustomRange({ ...customRange, start: e2.target.value }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "to" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: customRange.end || "", onChange: (e2) => setCustomRange({ ...customRange, end: e2.target.value }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "theme-toggle-button",
              onClick: () => toggleTheme(),
              title: "Toggle Theme",
              style: { background: "transparent", fontSize: "1.5em", cursor: "pointer", border: "none", marginLeft: "10px" },
              children: theme === "dark" ? "☀️" : "🌙"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mobile-only", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HamburgerMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hamburger-section", style: { borderBottom: "1px solid var(--border-color)", paddingBottom: "10px", marginBottom: "15px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Filters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px", width: "100%", alignItems: "center" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "85%", textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                LabelFilter,
                {
                  labels: allLabels,
                  selectedLabelIds,
                  onChange: setSelectedLabelIds,
                  labelLogic,
                  onLabelLogicChange: setLabelLogic
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "time-filter-select", value: createdFilter, onChange: (e2) => {
                const val = e2.target.value;
                setCreatedFilter(val);
                if (val === "custom") setShowCustomRange(true);
                else setShowCustomRange(false);
              }, style: { width: "85%", margin: 0 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "this_week", children: "Created: This Week" }),
                Object.keys(TIME_FILTERS).filter((k2) => k2 !== "all").map((k2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: k2, children: TIME_FILTERS[k2].label }, k2)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "custom", children: "Custom Range" })
              ] }),
              createdFilter === "custom" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "5px", width: "85%" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: customRange.start || "", onChange: (e2) => setCustomRange({ ...customRange, start: e2.target.value }), style: { width: "100%" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { textAlign: "center" }, children: "to" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: customRange.end || "", onChange: (e2) => setCustomRange({ ...customRange, end: e2.target.value }), style: { width: "100%" } })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hamburger-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Actions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: onGoToDashboard, children: "Dashboard View" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", disabled: !enableMapView, onClick: () => window.location.href = "/map", children: "Map View" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: onShowSettings, children: "Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-link", onClick: onLogout, children: "Logout" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hamburger-section", style: { marginTop: "10px", paddingTop: "10px", borderTop: "1px solid var(--border-color)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "theme-toggle-button",
              onClick: () => toggleTheme(),
              title: "Toggle Theme",
              style: { background: "transparent", fontSize: "1.5em", cursor: "pointer", border: "none" },
              children: theme === "dark" ? "☀️" : "🌙"
            }
          ) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", style: { flex: 1, paddingBottom: "80px" }, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "center", alignItems: "center", height: "400px", fontSize: "1.2em", color: "#666" }, children: "Generating stats..." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "stats-export-area", className: "dashboard-grid", style: { marginTop: "20px", display: "flex", flexDirection: "column", gap: "30px", padding: "0 20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-card", style: { width: "100%", display: "flex", flexDirection: "column", border: "1px solid var(--accent-light)", background: "var(--bg-secondary)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: summaryText ? "15px" : "0" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", color: "var(--accent)" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 20 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: 0, color: "var(--text-primary)" }, children: "AI Summary for the period" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "15px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "button-link",
                onClick: onShowSettings,
                style: { fontSize: "0.85em", textDecoration: "underline", color: "var(--text-secondary)", background: "none", border: "none", cursor: "pointer", padding: 0 },
                children: "Create your custom prompt"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: "button-primary",
                onClick: handleGenerateSummary,
                disabled: isGeneratingSummary,
                style: { display: "flex", alignItems: "center", gap: "5px", padding: "6px 12px", fontSize: "0.9em" },
                children: [
                  isGeneratingSummary ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 16, className: "spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 16 }),
                  isGeneratingSummary ? "Generating..." : "Generate Summary"
                ]
              }
            )
          ] })
        ] }),
        summaryText && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "markdown-content ai-summary-content",
            style: { fontSize: "1.05em", lineHeight: "1.6", color: "var(--text-primary)" },
            dangerouslySetInnerHTML: { __html: d$2(summaryText) }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-card", id: "card-line-chart", style: { width: "100%", minHeight: "400px", display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "10px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { style: { textTransform: "capitalize" }, children: [
            CardsTerm,
            " Created / Completed"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "5px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: granularity, onChange: (e2) => setGranularity(e2.target.value), style: { padding: "2px", fontSize: "0.9em" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "day", children: "By Day" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hour", children: "By Hour" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cumulative_hour", children: "Per Hour (Cumulative)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "month", children: "By Month" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleExport("card-line-chart", "timeline"), style: { fontSize: "0.8em", padding: "2px 5px" }, children: "Export" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1, position: "relative" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: lineChartRef }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-card", id: "card-pie-chart", style: { width: "100%", minHeight: "500px", display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "10px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
            LabelsTerm,
            " Breakdown - ",
            filterLabelText
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleExport("card-pie-chart", "labels"), style: { fontSize: "0.8em", padding: "2px 5px" }, children: "Export" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1, position: "relative" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: pieChartRef }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-action-bar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: onGoToDashboard, children: "Dashboard View" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", disabled: !enableMapView, onClick: () => window.location.href = "/map", children: "Map View" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: onShowSettings, children: "Settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button-secondary", onClick: onLogout, children: "Log Out" })
      ] })
    ] })
  ] });
};
const useWakeLock = () => {
  const wakeLockRef = reactExports.useRef(null);
  const [isSupported, setIsSupported] = reactExports.useState(false);
  const [isLocked, setIsLocked] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if ("wakeLock" in navigator) {
      setIsSupported(true);
    } else {
      console.warn("Screen Wake Lock API not supported.");
    }
  }, []);
  const requestWakeLock = reactExports.useCallback(async () => {
    if (!isSupported) return;
    try {
      const wakeLock = await navigator.wakeLock.request("screen");
      wakeLockRef.current = wakeLock;
      setIsLocked(true);
      wakeLock.addEventListener("release", () => {
        setIsLocked(false);
        wakeLockRef.current = null;
      });
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  }, [isSupported]);
  const releaseWakeLock = reactExports.useCallback(async () => {
    if (!isSupported || !wakeLockRef.current) return;
    try {
      await wakeLockRef.current.release();
      wakeLockRef.current = null;
      setIsLocked(false);
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  }, [isSupported]);
  reactExports.useEffect(() => {
    const handleVisibilityChange = async () => {
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isLocked]);
  return { isSupported, isLocked, requestWakeLock, releaseWakeLock };
};
const App = () => {
  const [user, setUser] = reactExports.useState(null);
  const [settings2, setSettings] = reactExports.useState(null);
  const [view, setView] = reactExports.useState("landing");
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  const [settingsTab, setSettingsTab] = reactExports.useState("dashboard");
  const [importConfig, setImportConfig] = reactExports.useState(null);
  const [previousView, setPreviousView] = reactExports.useState(null);
  const [slideshowActive, setSlideshowActive] = reactExports.useState(false);
  const [slideshowView, setSlideshowView] = reactExports.useState(null);
  const [keepScreenOn, setKeepScreenOn] = reactExports.useState(false);
  const { requestWakeLock, releaseWakeLock } = useWakeLock();
  reactExports.useEffect(() => {
    if (slideshowActive || keepScreenOn) {
      requestWakeLock();
    } else {
      releaseWakeLock();
    }
  }, [slideshowActive, keepScreenOn, requestWakeLock, releaseWakeLock]);
  reactExports.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const configParam = params.get("config");
    if (configParam) {
      try {
        atob(configParam);
        localStorage.setItem("PENDING_SHARE_CONFIG", configParam);
        window.history.replaceState({}, document.title, window.location.pathname);
      } catch (e2) {
        console.error("Invalid config param in URL");
      }
    }
    const path = window.location.pathname;
    if (path === "/map") setView("map");
    else if (path === "/tasks") setView("tasks");
    else if (path === "/tasks/settings") setView("tasks-settings");
    else if (path === "/stats") setView("stats");
    else if (path === "/settings") setView("settings");
    const tokenFromUrl = trelloAuth.getTokenFromUrl();
    if (tokenFromUrl) {
      handleLoginSuccess(tokenFromUrl);
    } else {
      const loggedInUserId = getCurrentUser();
      if (loggedInUserId) {
        const userData = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_DATA)) || {};
        const userSession = userData[loggedInUserId];
        if (userSession && userSession.token) {
          handleLoginSuccess(userSession.token);
        } else {
          if (path !== "/map") setView("landing");
          setLoading(false);
        }
      } else {
        if (path !== "/map") setView("landing");
        setLoading(false);
      }
    }
  }, []);
  reactExports.useEffect(() => {
    if (view === "dashboard" && localStorage.getItem("openSettingsOnLoad") === "true") {
      localStorage.removeItem("openSettingsOnLoad");
      setPreviousView("dashboard");
      setView("settings");
    }
  }, [view]);
  reactExports.useEffect(() => {
    let interval;
    if (slideshowActive) {
      const time = ((settings2 == null ? void 0 : settings2.slideshowInterval) || 10) * 1e3;
      interval = setInterval(() => {
        setSlideshowView((prev) => prev === "dashboard" ? "map" : "dashboard");
      }, time);
    }
    return () => clearInterval(interval);
  }, [slideshowActive, settings2]);
  const handleStartSlideshow = () => {
    setSlideshowActive(true);
    setSlideshowView(view === "map" ? "map" : "dashboard");
  };
  const handleStopSlideshow = () => {
    setSlideshowActive(false);
    setSlideshowView(null);
  };
  const handleLoginSuccess = async (token) => {
    setLoading(true);
    setError("");
    try {
      const member = await trelloFetch("/members/me", token);
      const userData = { id: member.id, username: member.username, fullName: member.fullName, token };
      setUserData(member.id, "token", token);
      setUserData(member.id, "username", member.username);
      setCurrentUser(member.id);
      setUser(userData);
      const savedSettings = getUserData(member.id, "settings");
      const path = window.location.pathname;
      const isTaskViewEnabled = savedSettings && savedSettings.enableTaskView;
      const isBoardConfigured = savedSettings && savedSettings.boardId;
      if (path === "/tasks" || path === "/tasks/settings") {
        if (path === "/tasks" && !isTaskViewEnabled) {
          console.log("Task View disabled, redirecting to /tasks/settings");
          setView("tasks-settings");
          window.history.replaceState({}, "", "/tasks/settings");
        } else if (path === "/tasks/settings") {
          setView("tasks-settings");
        } else {
          setView("tasks");
        }
      } else if (path === "/map") {
        if (!isBoardConfigured) {
          console.log("No board configured, redirecting to /settings");
          setView("settings");
          window.history.replaceState({}, "", "/settings");
        } else {
          if (savedSettings) setSettings(savedSettings);
          setView("map");
        }
      } else if (path === "/settings") {
        if (savedSettings) setSettings(savedSettings);
        setView("settings");
      } else if (path === "/stats") {
        if (isBoardConfigured) {
          if (savedSettings) setSettings(savedSettings);
          setView("stats");
        } else {
          setView("settings");
          window.history.replaceState({}, "", "/settings");
        }
      } else {
        if (isBoardConfigured) {
          setSettings(savedSettings);
          setView("dashboard");
          if (path !== "/dashboard") window.history.replaceState({}, "", "/dashboard");
        } else {
          setView("settings");
          window.history.replaceState({}, "", "/settings");
        }
      }
      if (savedSettings) setSettings(savedSettings);
      const pendingConfig = localStorage.getItem("PENDING_SHARE_CONFIG");
      if (pendingConfig) {
        try {
          const decoded = decodeURIComponent(escape(atob(pendingConfig)));
          const config2 = JSON.parse(decoded);
          setImportConfig(config2);
          setView("settings");
          setPreviousView("dashboard");
          localStorage.removeItem("PENDING_SHARE_CONFIG");
          console.log("Loaded pending shared configuration");
        } catch (e2) {
          console.error("Failed to load pending config", e2);
        }
      }
    } catch (e2) {
      console.error("Login validation failed:", e2);
      setError("Failed to validate Trello session. Please log in again.");
      setCurrentUser(null);
      setView("landing");
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    if (user) {
      setUserData(user.id, "token", null);
    }
    setCurrentUser(null);
    setUser(null);
    setSettings(null);
    setView("landing");
    setPreviousView(null);
    trelloAuth.logout();
  };
  const handleSaveSettings = (newSettings) => {
    if (!newSettings) ;
    else {
      setSettings(newSettings);
    }
    if (view === "tasks-settings") {
      if (newSettings && newSettings.enableTaskView) {
        setView("tasks");
        window.history.pushState({}, "", "/tasks");
        return;
      }
    }
    if (previousView === "map" && (newSettings == null ? void 0 : newSettings.boardId)) {
      setView("map");
      window.history.pushState({}, "", "/map");
    } else if (previousView === "tasks" && (newSettings == null ? void 0 : newSettings.enableTaskView)) {
      setView("tasks");
      window.history.pushState({}, "", "/tasks");
    } else if (newSettings == null ? void 0 : newSettings.boardId) {
      setView("dashboard");
      window.history.pushState({}, "", "/dashboard");
    } else {
      setView("settings");
      window.history.pushState({}, "", "/settings");
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", style: { textAlign: "center", marginTop: "50px" }, children: "Initializing Trellops..." });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error", style: { textAlign: "center", marginTop: "50px" }, children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginTop: "20px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "settings-button", onClick: () => {
        setError("");
        setView("landing");
      }, children: "Go to Login" }) })
    ] });
  }
  if (view === "map") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      MapView,
      {
        user,
        settings: settings2,
        onClose: () => {
          setView("dashboard");
          window.history.pushState({}, "", "/dashboard");
        },
        onShowSettings: () => {
          setPreviousView("map");
          setSettingsTab("map");
          setView("settings");
          window.history.pushState({}, "", "/settings");
        },
        onLogout: handleLogout,
        onShowTasks: () => {
          setPreviousView("map");
          setView("tasks");
          window.history.pushState({}, "", "/tasks");
        },
        onShowDashboard: () => {
          setView("dashboard");
          window.history.pushState({}, "", "/dashboard");
        },
        slideshowContent: slideshowActive ? slideshowView : null,
        onStartSlideshow: handleStartSlideshow,
        onStopSlideshow: slideshowActive ? handleStopSlideshow : null,
        keepScreenOn,
        onToggleScreenLock: () => setKeepScreenOn(!keepScreenOn)
      }
    );
  }
  if (view === "tasks") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      TaskView,
      {
        user,
        settings: settings2,
        onClose: () => {
          setView("dashboard");
          window.history.pushState({}, "", "/dashboard");
        },
        onMainView: () => {
          setView("dashboard");
          window.history.pushState({}, "", "/dashboard");
        },
        onShowSettings: () => {
          setPreviousView("tasks");
          setSettingsTab("tasks");
          setView("tasks-settings");
          window.history.pushState({}, "", "/tasks/settings");
        },
        onShowMap: () => {
          setPreviousView("tasks");
          setView("map");
          window.history.pushState({}, "", "/map");
        },
        onLogout: handleLogout,
        onGoToStats: () => {
          setPreviousView("settings");
          setView("stats");
        }
      }
    );
  }
  if (view === "stats" && user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      StatisticsView,
      {
        user,
        settings: settings2,
        onShowSettings: () => {
          setPreviousView("stats");
          setView("settings");
          setSettingsTab("statistics");
        },
        onGoToDashboard: () => setView("dashboard"),
        onLogout: handleLogout
      }
    );
  }
  if (view === "landing") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingPage, {});
  }
  if (view === "dashboard") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dashboard,
      {
        user,
        settings: settings2,
        onShowSettings: () => {
          setPreviousView("dashboard");
          setSettingsTab("dashboard");
          setView("settings");
          window.history.pushState({}, "", "/settings");
        },
        onLogout: handleLogout,
        onShowTasks: () => {
          setPreviousView("dashboard");
          setView("tasks");
          window.history.pushState({}, "", "/tasks");
        },
        onShowMap: () => {
          setPreviousView("dashboard");
          setView("map");
          window.history.pushState({}, "", "/map");
        },
        slideshowContent: slideshowActive ? slideshowView : null,
        onStartSlideshow: handleStartSlideshow,
        onStopSlideshow: slideshowActive ? handleStopSlideshow : null,
        keepScreenOn,
        onToggleScreenLock: () => setKeepScreenOn(!keepScreenOn)
      }
    );
  }
  if (view === "settings") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SettingsScreen,
      {
        user,
        initialTab: settingsTab,
        onSave: handleSaveSettings,
        onClose: () => {
          if (settings2 == null ? void 0 : settings2.boardId) {
            if (previousView === "map") {
              setView("map");
              window.history.pushState({}, "", "/map");
            } else {
              setView("dashboard");
              window.history.pushState({}, "", "/dashboard");
            }
          } else {
            window.location.href = "/";
          }
        },
        onLogout: handleLogout,
        importedConfig: importConfig,
        onClearImportConfig: () => setImportConfig(null),
        viewMode: "default",
        onManageTasks: () => {
          setView("tasks-settings");
          window.history.pushState({}, "", "/tasks/settings");
        },
        onGoToStats: () => {
          setPreviousView("settings");
          setView("stats");
          window.history.pushState({}, "", "/stats");
        }
      }
    );
  }
  if (view === "tasks-settings") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SettingsScreen,
      {
        user,
        initialTab: "tasks",
        onSave: handleSaveSettings,
        onClose: () => {
          if (settings2 == null ? void 0 : settings2.enableTaskView) {
            setView("tasks");
            window.history.pushState({}, "", "/tasks");
          } else if (settings2 == null ? void 0 : settings2.boardId) {
            setView("dashboard");
            window.history.pushState({}, "", "/dashboard");
          } else {
            window.location.href = "/";
          }
        },
        onLogout: handleLogout,
        viewMode: "tasks"
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingPage, {});
};
const PreviewBanner = () => {
  const [isVisible3, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (window.location.hostname !== "trellops.xyz") {
      setIsVisible(true);
    }
  }, []);
  if (!isVisible3) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    width: "100%",
    backgroundColor: "#003366",
    color: "#ffffff",
    textAlign: "center",
    padding: "4px 0",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "1px",
    zIndex: 9999,
    position: "relative"
    // Ensure it pushes content down
  }, children: "PREVIEW ENVIRONMENT" });
};
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DarkModeProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(App, {})
  ] }) })
);
