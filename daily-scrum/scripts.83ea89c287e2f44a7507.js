/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    i = Object.getPrototypeOf,
    o = n.slice,
    r = n.flat
      ? function (e) {
          return n.flat.call(e);
        }
      : function (e) {
          return n.concat.apply([], e);
        },
    s = n.push,
    a = n.indexOf,
    l = {},
    c = l.toString,
    u = l.hasOwnProperty,
    d = u.toString,
    f = d.call(Object),
    h = {},
    p = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    g = function (e) {
      return null != e && e === e.window;
    },
    m = e.document,
    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var i,
      o,
      r = (n = n || m).createElement("script");
    if (((r.text = e), t))
      for (i in v)
        (o = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          r.setAttribute(i, o);
    n.head.appendChild(r).parentNode.removeChild(r);
  }
  function b(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var _ = "3.6.0",
    w = function (e, t) {
      return new w.fn.init(e, t);
    };
  function x(e) {
    var t = !!e && "length" in e && e.length,
      n = b(e);
    return (
      !p(e) &&
      !g(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (w.fn = w.prototype =
    {
      jquery: _,
      constructor: w,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (e) {
        return null == e
          ? o.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = w.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          w.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          w.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          w.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || p(s) || (s = {}),
            a === l && ((s = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (i = e[t]),
                "__proto__" !== t &&
                  s !== i &&
                  (c && i && (w.isPlainObject(i) || (o = Array.isArray(i)))
                    ? ((n = s[t]),
                      (r =
                        o && !Array.isArray(n)
                          ? []
                          : o || w.isPlainObject(n)
                          ? n
                          : {}),
                      (o = !1),
                      (s[t] = w.extend(c, r, i)))
                    : void 0 !== i && (s[t] = i));
        return s;
      }),
    w.extend({
      expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== c.call(e) ||
          ((t = i(e)) &&
            ("function" !=
              typeof (n = u.call(t, "constructor") && t.constructor) ||
              d.call(n) !== f))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        y(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (x(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (x(Object(e))
              ? w.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : a.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
          !t(e[o], o) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          o,
          s = 0,
          a = [];
        if (x(e))
          for (i = e.length; s < i; s++)
            null != (o = t(e[s], s, n)) && a.push(o);
        else for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
        return r(a);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var E = (function (e) {
    var t,
      n,
      i,
      o,
      r,
      s,
      a,
      l,
      c,
      u,
      d,
      f,
      h,
      p,
      g,
      m,
      v,
      y,
      b,
      _ = "sizzle" + 1 * new Date(),
      w = e.document,
      x = 0,
      E = 0,
      T = le(),
      C = le(),
      A = le(),
      k = le(),
      S = function (e, t) {
        return e === t && (d = !0), 0;
      },
      N = {}.hasOwnProperty,
      D = [],
      L = D.pop,
      O = D.push,
      j = D.push,
      I = D.slice,
      P = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      H =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      q =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      R =
        "\\[" +
        M +
        "*(" +
        q +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        q +
        "))|)" +
        M +
        "*\\]",
      B =
        ":(" +
        q +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        R +
        ")*)|.*)\\)|)",
      F = new RegExp(M + "+", "g"),
      W = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      $ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      V = new RegExp(B),
      X = new RegExp("^" + q + "$"),
      Y = {
        ID: new RegExp("^#(" + q + ")"),
        CLASS: new RegExp("^\\.(" + q + ")"),
        TAG: new RegExp("^(" + q + "|[*])"),
        ATTR: new RegExp("^" + R),
        PSEUDO: new RegExp("^" + B),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + H + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      K = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      oe = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      re = function () {
        f();
      },
      se = _e(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      j.apply((D = I.call(w.childNodes)), w.childNodes),
        D[w.childNodes.length].nodeType;
    } catch (t) {
      j = {
        apply: D.length
          ? function (e, t) {
              O.apply(e, I.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    function ae(e, t, i, o) {
      var r,
        a,
        c,
        u,
        d,
        p,
        v,
        y = t && t.ownerDocument,
        w = t ? t.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
      )
        return i;
      if (!o && (f(t), (t = t || h), g)) {
        if (11 !== w && (d = Z.exec(e)))
          if ((r = d[1])) {
            if (9 === w) {
              if (!(c = t.getElementById(r))) return i;
              if (c.id === r) return i.push(c), i;
            } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r)
              return i.push(c), i;
          } else {
            if (d[2]) return j.apply(i, t.getElementsByTagName(e)), i;
            if (
              (r = d[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return j.apply(i, t.getElementsByClassName(r)), i;
          }
        if (
          n.qsa &&
          !k[e + " "] &&
          (!m || !m.test(e)) &&
          (1 !== w || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((v = e), (y = t), 1 === w && (U.test(e) || z.test(e)))) {
            for (
              ((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) ||
                ((u = t.getAttribute("id"))
                  ? (u = u.replace(ie, oe))
                  : t.setAttribute("id", (u = _))),
                a = (p = s(e)).length;
              a--;

            )
              p[a] = (u ? "#" + u : ":scope") + " " + be(p[a]);
            v = p.join(",");
          }
          try {
            return j.apply(i, y.querySelectorAll(v)), i;
          } catch (t) {
            k(e, !0);
          } finally {
            u === _ && t.removeAttribute("id");
          }
        }
      }
      return l(e.replace(W, "$1"), t, i, o);
    }
    function le() {
      var e = [];
      return function t(n, o) {
        return (
          e.push(n + " ") > i.cacheLength && delete t[e.shift()],
          (t[n + " "] = o)
        );
      };
    }
    function ce(e) {
      return (e[_] = !0), e;
    }
    function ue(e) {
      var t = h.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function de(e, t) {
      for (var n = e.split("|"), o = n.length; o--; ) i.attrHandle[n[o]] = t;
    }
    function fe(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function he(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function ge(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function me(e) {
      return ce(function (t) {
        return (
          (t = +t),
          ce(function (n, i) {
            for (var o, r = e([], n.length, t), s = r.length; s--; )
              n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = ae.support = {}),
    (r = ae.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !K.test(t || (n && n.nodeName) || "HTML");
      }),
    (f = ae.setDocument =
      function (e) {
        var t,
          o,
          s = e ? e.ownerDocument || e : w;
        return (
          s != h &&
            9 === s.nodeType &&
            s.documentElement &&
            ((p = (h = s).documentElement),
            (g = !r(h)),
            w != h &&
              (o = h.defaultView) &&
              o.top !== o &&
              (o.addEventListener
                ? o.addEventListener("unload", re, !1)
                : o.attachEvent && o.attachEvent("onunload", re)),
            (n.scope = ue(function (e) {
              return (
                p.appendChild(e).appendChild(h.createElement("div")),
                void 0 !== e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (n.attributes = ue(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = ue(function (e) {
              return (
                e.appendChild(h.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = J.test(h.getElementsByClassName)),
            (n.getById = ue(function (e) {
              return (
                (p.appendChild(e).id = _),
                !h.getElementsByName || !h.getElementsByName(_).length
              );
            })),
            n.getById
              ? ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n,
                      i,
                      o,
                      r = t.getElementById(e);
                    if (r) {
                      if ((n = r.getAttributeNode("id")) && n.value === e)
                        return [r];
                      for (o = t.getElementsByName(e), i = 0; (r = o[i++]); )
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                          return [r];
                    }
                    return [];
                  }
                })),
            (i.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return r;
                }),
            (i.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                  return t.getElementsByClassName(e);
              }),
            (v = []),
            (m = []),
            (n.qsa = J.test(h.querySelectorAll)) &&
              (ue(function (e) {
                var t;
                (p.appendChild(e).innerHTML =
                  "<a id='" +
                  _ +
                  "'></a><select id='" +
                  _ +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    m.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    m.push("\\[" + M + "*(?:value|" + H + ")"),
                  e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="),
                  (t = h.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    m.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || m.push(":checked"),
                  e.querySelectorAll("a#" + _ + "+*").length ||
                    m.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  m.push("[\\r\\n\\f]");
              }),
              ue(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = h.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    m.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    m.push(":enabled", ":disabled"),
                  (p.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    m.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  m.push(",.*:");
              })),
            (n.matchesSelector = J.test(
              (y =
                p.matches ||
                p.webkitMatchesSelector ||
                p.mozMatchesSelector ||
                p.oMatchesSelector ||
                p.msMatchesSelector)
            )) &&
              ue(function (e) {
                (n.disconnectedMatch = y.call(e, "*")),
                  y.call(e, "[s!='']:x"),
                  v.push("!=", B);
              }),
            (m = m.length && new RegExp(m.join("|"))),
            (v = v.length && new RegExp(v.join("|"))),
            (t = J.test(p.compareDocumentPosition)),
            (b =
              t || J.test(p.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (S = t
              ? function (e, t) {
                  if (e === t) return (d = !0), 0;
                  var i =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    i ||
                    (1 &
                      (i =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === i)
                      ? e == h || (e.ownerDocument == w && b(w, e))
                        ? -1
                        : t == h || (t.ownerDocument == w && b(w, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (d = !0), 0;
                  var n,
                    i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!o || !r)
                    return e == h
                      ? -1
                      : t == h
                      ? 1
                      : o
                      ? -1
                      : r
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (o === r) return fe(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (; s[i] === a[i]; ) i++;
                  return i
                    ? fe(s[i], a[i])
                    : s[i] == w
                    ? -1
                    : a[i] == w
                    ? 1
                    : 0;
                })),
          h
        );
      }),
    (ae.matches = function (e, t) {
      return ae(e, null, null, t);
    }),
    (ae.matchesSelector = function (e, t) {
      if (
        (f(e),
        n.matchesSelector &&
          g &&
          !k[t + " "] &&
          (!v || !v.test(t)) &&
          (!m || !m.test(t)))
      )
        try {
          var i = y.call(e, t);
          if (
            i ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (e) {
          k(t, !0);
        }
      return 0 < ae(t, h, null, [e]).length;
    }),
    (ae.contains = function (e, t) {
      return (e.ownerDocument || e) != h && f(e), b(e, t);
    }),
    (ae.attr = function (e, t) {
      (e.ownerDocument || e) != h && f(e);
      var o = i.attrHandle[t.toLowerCase()],
        r = o && N.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
      return void 0 !== r
        ? r
        : n.attributes || !g
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (ae.escape = function (e) {
      return (e + "").replace(ie, oe);
    }),
    (ae.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ae.uniqueSort = function (e) {
      var t,
        i = [],
        o = 0,
        r = 0;
      if (
        ((d = !n.detectDuplicates),
        (u = !n.sortStable && e.slice(0)),
        e.sort(S),
        d)
      ) {
        for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
        for (; o--; ) e.splice(i[o], 1);
      }
      return (u = null), e;
    }),
    (o = ae.getText =
      function (e) {
        var t,
          n = "",
          i = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === r || 4 === r) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += o(t);
        return n;
      }),
    ((i = ae.selectors =
      {
        cacheLength: 50,
        createPseudo: ce,
        match: Y,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || ae.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && ae.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return Y.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    V.test(n) &&
                    (t = s(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = T[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                T(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (i) {
              var o = ae.attr(i, e);
              return null == o
                ? "!=" === t
                : !t ||
                    ((o += ""),
                    "=" === t
                      ? o === n
                      : "!=" === t
                      ? o !== n
                      : "^=" === t
                      ? n && 0 === o.indexOf(n)
                      : "*=" === t
                      ? n && -1 < o.indexOf(n)
                      : "$=" === t
                      ? n && o.slice(-n.length) === n
                      : "~=" === t
                      ? -1 < (" " + o.replace(F, " ") + " ").indexOf(n)
                      : "|=" === t &&
                        (o === n || o.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, i, o) {
            var r = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === o
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var c,
                    u,
                    d,
                    f,
                    h,
                    p,
                    g = r !== s ? "nextSibling" : "previousSibling",
                    m = t.parentNode,
                    v = a && t.nodeName.toLowerCase(),
                    y = !l && !a,
                    b = !1;
                  if (m) {
                    if (r) {
                      for (; g; ) {
                        for (f = t; (f = f[g]); )
                          if (
                            a
                              ? f.nodeName.toLowerCase() === v
                              : 1 === f.nodeType
                          )
                            return !1;
                        p = g = "only" === e && !p && "nextSibling";
                      }
                      return !0;
                    }
                    if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                      for (
                        b =
                          (h =
                            (c =
                              (u =
                                (d = (f = m)[_] || (f[_] = {}))[f.uniqueID] ||
                                (d[f.uniqueID] = {}))[e] || [])[0] === x &&
                            c[1]) && c[2],
                          f = h && m.childNodes[h];
                        (f = (++h && f && f[g]) || (b = h = 0) || p.pop());

                      )
                        if (1 === f.nodeType && ++b && f === t) {
                          u[e] = [x, h, b];
                          break;
                        }
                    } else if (
                      (y &&
                        (b = h =
                          (c =
                            (u =
                              (d = (f = t)[_] || (f[_] = {}))[f.uniqueID] ||
                              (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]),
                      !1 === b)
                    )
                      for (
                        ;
                        (f = (++h && f && f[g]) || (b = h = 0) || p.pop()) &&
                        ((a
                          ? f.nodeName.toLowerCase() !== v
                          : 1 !== f.nodeType) ||
                          !++b ||
                          (y &&
                            ((u =
                              (d = f[_] || (f[_] = {}))[f.uniqueID] ||
                              (d[f.uniqueID] = {}))[e] = [x, b]),
                          f !== t));

                      );
                    return (b -= o) === i || (b % i == 0 && 0 <= b / i);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              o =
                i.pseudos[e] ||
                i.setFilters[e.toLowerCase()] ||
                ae.error("unsupported pseudo: " + e);
            return o[_]
              ? o(t)
              : 1 < o.length
              ? ((n = [e, e, "", t]),
                i.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ce(function (e, n) {
                      for (var i, r = o(e, t), s = r.length; s--; )
                        e[(i = P(e, r[s]))] = !(n[i] = r[s]);
                    })
                  : function (e) {
                      return o(e, 0, n);
                    })
              : o;
          },
        },
        pseudos: {
          not: ce(function (e) {
            var t = [],
              n = [],
              i = a(e.replace(W, "$1"));
            return i[_]
              ? ce(function (e, t, n, o) {
                  for (var r, s = i(e, null, o, []), a = e.length; a--; )
                    (r = s[a]) && (e[a] = !(t[a] = r));
                })
              : function (e, o, r) {
                  return (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop();
                };
          }),
          has: ce(function (e) {
            return function (t) {
              return 0 < ae(e, t).length;
            };
          }),
          contains: ce(function (e) {
            return (
              (e = e.replace(te, ne)),
              function (t) {
                return -1 < (t.textContent || o(t)).indexOf(e);
              }
            );
          }),
          lang: ce(function (e) {
            return (
              X.test(e || "") || ae.error("unsupported lang: " + e),
              (e = e.replace(te, ne).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = g
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === p;
          },
          focus: function (e) {
            return (
              e === h.activeElement &&
              (!h.hasFocus || h.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !i.pseudos.empty(e);
          },
          header: function (e) {
            return G.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: me(function () {
            return [0];
          }),
          last: me(function (e, t) {
            return [t - 1];
          }),
          eq: me(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: me(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: me(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: me(function (e, t, n) {
            for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
            return e;
          }),
          gt: me(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = he(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
    function ye() {}
    function be(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function _e(e, t, n) {
      var i = t.dir,
        o = t.next,
        r = o || i,
        s = n && "parentNode" === r,
        a = E++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, o);
            return !1;
          }
        : function (t, n, l) {
            var c,
              u,
              d,
              f = [x, a];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (
                    ((u =
                      (d = t[_] || (t[_] = {}))[t.uniqueID] ||
                      (d[t.uniqueID] = {})),
                    o && o === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((c = u[r]) && c[0] === x && c[1] === a)
                      return (f[2] = c[2]);
                    if (((u[r] = f)[2] = e(t, n, l))) return !0;
                  }
            return !1;
          };
    }
    function we(e) {
      return 1 < e.length
        ? function (t, n, i) {
            for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function xe(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
        (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
      return s;
    }
    function Ee(e, t, n, i, o, r) {
      return (
        i && !i[_] && (i = Ee(i)),
        o && !o[_] && (o = Ee(o, r)),
        ce(function (r, s, a, l) {
          var c,
            u,
            d,
            f = [],
            h = [],
            p = s.length,
            g =
              r ||
              (function (e, t, n) {
                for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                return n;
              })(t || "*", a.nodeType ? [a] : a, []),
            m = !e || (!r && t) ? g : xe(g, f, e, a, l),
            v = n ? (o || (r ? e : p || i) ? [] : s) : m;
          if ((n && n(m, v, a, l), i))
            for (c = xe(v, h), i(c, [], a, l), u = c.length; u--; )
              (d = c[u]) && (v[h[u]] = !(m[h[u]] = d));
          if (r) {
            if (o || e) {
              if (o) {
                for (c = [], u = v.length; u--; )
                  (d = v[u]) && c.push((m[u] = d));
                o(null, (v = []), c, l);
              }
              for (u = v.length; u--; )
                (d = v[u]) &&
                  -1 < (c = o ? P(r, d) : f[u]) &&
                  (r[c] = !(s[c] = d));
            }
          } else (v = xe(v === s ? v.splice(p, v.length) : v)), o ? o(null, s, v, l) : j.apply(s, v);
        })
      );
    }
    function Te(e) {
      for (
        var t,
          n,
          o,
          r = e.length,
          s = i.relative[e[0].type],
          a = s || i.relative[" "],
          l = s ? 1 : 0,
          u = _e(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          d = _e(
            function (e) {
              return -1 < P(t, e);
            },
            a,
            !0
          ),
          f = [
            function (e, n, i) {
              var o =
                (!s && (i || n !== c)) ||
                ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
              return (t = null), o;
            },
          ];
        l < r;
        l++
      )
        if ((n = i.relative[e[l].type])) f = [_e(we(f), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
            for (o = ++l; o < r && !i.relative[e[o].type]; o++);
            return Ee(
              1 < l && we(f),
              1 < l &&
                be(
                  e
                    .slice(0, l - 1)
                    .concat({ value: " " === e[l - 2].type ? "*" : "" })
                ).replace(W, "$1"),
              n,
              l < o && Te(e.slice(l, o)),
              o < r && Te((e = e.slice(o))),
              o < r && be(e)
            );
          }
          f.push(n);
        }
      return we(f);
    }
    return (
      (ye.prototype = i.filters = i.pseudos),
      (i.setFilters = new ye()),
      (s = ae.tokenize =
        function (e, t) {
          var n,
            o,
            r,
            s,
            a,
            l,
            c,
            u = C[e + " "];
          if (u) return t ? 0 : u.slice(0);
          for (a = e, l = [], c = i.preFilter; a; ) {
            for (s in ((n && !(o = $.exec(a))) ||
              (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
            (n = !1),
            (o = z.exec(a)) &&
              ((n = o.shift()),
              r.push({ value: n, type: o[0].replace(W, " ") }),
              (a = a.slice(n.length))),
            i.filter))
              !(o = Y[s].exec(a)) ||
                (c[s] && !(o = c[s](o))) ||
                ((n = o.shift()),
                r.push({ value: n, type: s, matches: o }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
        }),
      (a = ae.compile =
        function (e, t) {
          var n,
            o,
            r,
            a,
            l,
            u,
            d = [],
            p = [],
            m = A[e + " "];
          if (!m) {
            for (t || (t = s(e)), n = t.length; n--; )
              (m = Te(t[n]))[_] ? d.push(m) : p.push(m);
            (m = A(
              e,
              ((o = p),
              (a = 0 < (r = d).length),
              (l = 0 < o.length),
              (u = function (e, t, n, s, u) {
                var d,
                  p,
                  m,
                  v = 0,
                  y = "0",
                  b = e && [],
                  _ = [],
                  w = c,
                  E = e || (l && i.find.TAG("*", u)),
                  T = (x += null == w ? 1 : Math.random() || 0.1),
                  C = E.length;
                for (
                  u && (c = t == h || t || u);
                  y !== C && null != (d = E[y]);
                  y++
                ) {
                  if (l && d) {
                    for (
                      p = 0, t || d.ownerDocument == h || (f(d), (n = !g));
                      (m = o[p++]);

                    )
                      if (m(d, t || h, n)) {
                        s.push(d);
                        break;
                      }
                    u && (x = T);
                  }
                  a && ((d = !m && d) && v--, e && b.push(d));
                }
                if (((v += y), a && y !== v)) {
                  for (p = 0; (m = r[p++]); ) m(b, _, t, n);
                  if (e) {
                    if (0 < v) for (; y--; ) b[y] || _[y] || (_[y] = L.call(s));
                    _ = xe(_);
                  }
                  j.apply(s, _),
                    u &&
                      !e &&
                      0 < _.length &&
                      1 < v + r.length &&
                      ae.uniqueSort(s);
                }
                return u && ((x = T), (c = w)), b;
              }),
              a ? ce(u) : u)
            )).selector = e;
          }
          return m;
        }),
      (l = ae.select =
        function (e, t, n, o) {
          var r,
            l,
            c,
            u,
            d,
            f = "function" == typeof e && e,
            h = !o && s((e = f.selector || e));
          if (((n = n || []), 1 === h.length)) {
            if (
              2 < (l = h[0] = h[0].slice(0)).length &&
              "ID" === (c = l[0]).type &&
              9 === t.nodeType &&
              g &&
              i.relative[l[1].type]
            ) {
              if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              f && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (
              r = Y.needsContext.test(e) ? 0 : l.length;
              r-- && ((c = l[r]), !i.relative[(u = c.type)]);

            )
              if (
                (d = i.find[u]) &&
                (o = d(
                  c.matches[0].replace(te, ne),
                  (ee.test(l[0].type) && ve(t.parentNode)) || t
                ))
              ) {
                if ((l.splice(r, 1), !(e = o.length && be(l))))
                  return j.apply(n, o), n;
                break;
              }
          }
          return (
            (f || a(e, h))(
              o,
              t,
              !g,
              n,
              !t || (ee.test(e) && ve(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = _.split("").sort(S).join("") === _),
      (n.detectDuplicates = !!d),
      f(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        de("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        de("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        de(H, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      ae
    );
  })(e);
  (w.find = E),
    (w.expr = E.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = E.uniqueSort),
    (w.text = E.getText),
    (w.isXMLDoc = E.isXML),
    (w.contains = E.contains),
    (w.escapeSelector = E.escape);
  var T = function (e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && w(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    C = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    A = w.expr.match.needsContext;
  function k(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function N(e, t, n) {
    return p(t)
      ? w.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return -1 < a.call(t, e) !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? w.find.matchesSelector(i, e)
          ? [i]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < i; t++) if (w.contains(o[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, o[t], n);
        return 1 < i ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(N(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(N(this, e || [], !0));
      },
      is: function (e) {
        return !!N(this, "string" == typeof e && A.test(e) ? w(e) : e || [], !1)
          .length;
      },
    });
  var D,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : L.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(
            this,
            w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : m, !0)
          ),
          S.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = m.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : p(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (D = w(m));
  var O = /^(?:parents|prev(?:Until|All))/,
    j = { children: !0, contents: !0, next: !0, prev: !0 };
  function I(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        o = this.length,
        r = [],
        s = "string" != typeof e && w(e);
      if (!A.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? -1 < s.index(n)
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              r.push(n);
              break;
            }
      return this.pushStack(1 < r.length ? w.uniqueSort(r) : r);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? a.call(w(e), this[0])
          : a.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return T(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return T(e, "parentNode", n);
        },
        next: function (e) {
          return I(e, "nextSibling");
        },
        prev: function (e) {
          return I(e, "previousSibling");
        },
        nextAll: function (e) {
          return T(e, "nextSibling");
        },
        prevAll: function (e) {
          return T(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return T(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return T(e, "previousSibling", n);
        },
        siblings: function (e) {
          return C((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return C(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && i(e.contentDocument)
            ? e.contentDocument
            : (k(e, "template") && (e = e.content || e),
              w.merge([], e.childNodes));
        },
      },
      function (e, t) {
        w.fn[e] = function (n, i) {
          var o = w.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = w.filter(i, o)),
            1 < this.length &&
              (j[e] || w.uniqueSort(o), O.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function H(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function q(e, t, n, i) {
    var o;
    try {
      e && p((o = e.promise))
        ? o.call(e).done(t).fail(n)
        : e && p((o = e.then))
        ? o.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (w.Callbacks = function (e) {
    var t, n;
    e =
      "string" == typeof e
        ? ((t = e),
          (n = {}),
          w.each(t.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : w.extend({}, e);
    var i,
      o,
      r,
      s,
      a = [],
      l = [],
      c = -1,
      u = function () {
        for (s = s || e.once, r = i = !0; l.length; c = -1)
          for (o = l.shift(); ++c < a.length; )
            !1 === a[c].apply(o[0], o[1]) &&
              e.stopOnFalse &&
              ((c = a.length), (o = !1));
        e.memory || (o = !1), (i = !1), s && (a = o ? [] : "");
      },
      d = {
        add: function () {
          return (
            a &&
              (o && !i && ((c = a.length - 1), l.push(o)),
              (function t(n) {
                w.each(n, function (n, i) {
                  p(i)
                    ? (e.unique && d.has(i)) || a.push(i)
                    : i && i.length && "string" !== b(i) && t(i);
                });
              })(arguments),
              o && !i && u()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var n; -1 < (n = w.inArray(t, a, n)); )
                a.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < w.inArray(e, a) : 0 < a.length;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (s = l = []), (a = o = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (s = l = []), o || i || (a = o = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return (
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              i || u()),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return d;
  }),
    w.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              w.Callbacks("memory"),
              w.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          o = {
            state: function () {
              return i;
            },
            always: function () {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return o.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return w
                .Deferred(function (t) {
                  w.each(n, function (n, i) {
                    var o = p(e[i[4]]) && e[i[4]];
                    r[i[1]](function () {
                      var e = o && o.apply(this, arguments);
                      e && p(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + "With"](this, o ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, i, o) {
              var r = 0;
              function s(t, n, i, o) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var e, c;
                      if (!(t < r)) {
                        if ((e = i.apply(a, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (c =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          p(c)
                            ? o
                              ? c.call(e, s(r, n, H, o), s(r, n, M, o))
                              : (r++,
                                c.call(
                                  e,
                                  s(r, n, H, o),
                                  s(r, n, M, o),
                                  s(r, n, H, n.notifyWith)
                                ))
                            : (i !== H && ((a = void 0), (l = [e])),
                              (o || n.resolveWith)(a, l));
                      }
                    },
                    u = o
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (e) {
                            w.Deferred.exceptionHook &&
                              w.Deferred.exceptionHook(e, u.stackTrace),
                              r <= t + 1 &&
                                (i !== M && ((a = void 0), (l = [e])),
                                n.rejectWith(a, l));
                          }
                        };
                  t
                    ? u()
                    : (w.Deferred.getStackHook &&
                        (u.stackTrace = w.Deferred.getStackHook()),
                      e.setTimeout(u));
                };
              }
              return w
                .Deferred(function (e) {
                  n[0][3].add(s(0, e, p(o) ? o : H, e.notifyWith)),
                    n[1][3].add(s(0, e, p(t) ? t : H)),
                    n[2][3].add(s(0, e, p(i) ? i : M));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, o) : o;
            },
          },
          r = {};
        return (
          w.each(n, function (e, t) {
            var s = t[2],
              a = t[5];
            (o[t[1]] = s.add),
              a &&
                s.add(
                  function () {
                    i = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (r[t[0]] = function () {
                return (
                  r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                );
              }),
              (r[t[0] + "With"] = s.fireWith);
          }),
          o.promise(r),
          t && t.call(r, r),
          r
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          r = o.call(arguments),
          s = w.Deferred(),
          a = function (e) {
            return function (n) {
              (i[e] = this),
                (r[e] = 1 < arguments.length ? o.call(arguments) : n),
                --t || s.resolveWith(i, r);
            };
          };
        if (
          t <= 1 &&
          (q(e, s.done(a(n)).resolve, s.reject, !t),
          "pending" === s.state() || p(r[n] && r[n].then))
        )
          return s.then();
        for (; n--; ) q(r[n], a(n), s.reject);
        return s.promise();
      },
    });
  var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      R.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var B = w.Deferred();
  function F() {
    m.removeEventListener("DOMContentLoaded", F),
      e.removeEventListener("load", F),
      w.ready();
  }
  (w.fn.ready = function (e) {
    return (
      B.then(e).catch(function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0) !== e && 0 < --w.readyWait) ||
          B.resolveWith(m, [w]);
      },
    }),
    (w.ready.then = B.then),
    "complete" === m.readyState ||
    ("loading" !== m.readyState && !m.documentElement.doScroll)
      ? e.setTimeout(w.ready)
      : (m.addEventListener("DOMContentLoaded", F),
        e.addEventListener("load", F));
  var W = function (e, t, n, i, o, r, s) {
      var a = 0,
        l = e.length,
        c = null == n;
      if ("object" === b(n))
        for (a in ((o = !0), n)) W(e, t, a, n[a], !0, r, s);
      else if (
        void 0 !== i &&
        ((o = !0),
        p(i) || (s = !0),
        c &&
          (s
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(w(e), n);
              }))),
        t)
      )
        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
    },
    $ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace($, "ms-").replace(z, U);
  }
  var X = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = w.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            X(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          o = this.cache(e);
        if ("string" == typeof t) o[V(t)] = n;
        else for (i in t) o[V(i)] = t[i];
        return o;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in i
              ? [t]
              : t.match(P) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || w.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var K = new Y(),
    Q = new Y(),
    G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(e, t, n) {
    var i, o;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(J, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (o = n) ||
            ("false" !== o &&
              ("null" === o
                ? null
                : o === +o + ""
                ? +o
                : G.test(o)
                ? JSON.parse(o)
                : o));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return Q.hasData(e) || K.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return K.access(e, t, n);
    },
    _removeData: function (e, t) {
      K.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((o = Q.get(r)), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                0 === (i = s[n].name).indexOf("data-") &&
                ((i = V(i.slice(5))), Z(r, i, o[i]));
            K.set(r, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof e
          ? this.each(function () {
              Q.set(this, e);
            })
          : W(
              this,
              function (t) {
                var n;
                if (r && void 0 === t)
                  return void 0 !== (n = Q.get(r, e)) ||
                    void 0 !== (n = Z(r, e))
                    ? n
                    : void 0;
                this.each(function () {
                  Q.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = K.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = K.access(e, t, w.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = w._queueHooks(e, t);
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(
              e,
              function () {
                w.dequeue(e, t);
              },
              r
            )),
          !i && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          K.get(e, n) ||
          K.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              K.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          o = w.Deferred(),
          r = this,
          s = this.length,
          a = function () {
            --i || o.resolveWith(r, [r]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = K.get(r[s], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), o.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    ie = m.documentElement,
    oe = function (e) {
      return w.contains(e.ownerDocument, e);
    },
    re = { composed: !0 };
  ie.getRootNode &&
    (oe = function (e) {
      return (
        w.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
      );
    });
  var se = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && oe(e) && "none" === w.css(e, "display"))
    );
  };
  function ae(e, t, n, i) {
    var o,
      r,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      l = a(),
      c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      u =
        e.nodeType &&
        (w.cssNumber[t] || ("px" !== c && +l)) &&
        te.exec(w.css(e, t));
    if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; s--; )
        w.style(e, t, u + c),
          (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
          (u /= r);
      (u *= 2), w.style(e, t, u + c), (n = n || []);
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = o))),
      o
    );
  }
  var le = {};
  function ce(e, t) {
    for (var n, i, o, r, s, a, l, c = [], u = 0, d = e.length; u < d; u++)
      (i = e[u]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((c[u] = K.get(i, "display") || null),
              c[u] || (i.style.display = "")),
            "" === i.style.display &&
              se(i) &&
              (c[u] =
                ((l = s = r = void 0),
                (s = (o = i).ownerDocument),
                (a = o.nodeName),
                (l = le[a]) ||
                  ((r = s.body.appendChild(s.createElement(a))),
                  (l = w.css(r, "display")),
                  r.parentNode.removeChild(r),
                  "none" === l && (l = "block"),
                  (le[a] = l)))))
          : "none" !== n && ((c[u] = "none"), K.set(i, "display", n)));
    for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return ce(this, !0);
    },
    hide: function () {
      return ce(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            se(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var ue,
    de,
    fe = /^(?:checkbox|radio)$/i,
    he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    pe = /^$|^module$|\/(?:java|ecma)script/i;
  (ue = m.createDocumentFragment().appendChild(m.createElement("div"))),
    (de = m.createElement("input")).setAttribute("type", "radio"),
    de.setAttribute("checked", "checked"),
    de.setAttribute("name", "t"),
    ue.appendChild(de),
    (h.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ue.innerHTML = "<textarea>x</textarea>"),
    (h.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue),
    (ue.innerHTML = "<option></option>"),
    (h.option = !!ue.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function me(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && k(e, t)) ? w.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    h.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;
  function be(e, t, n, i, o) {
    for (
      var r,
        s,
        a,
        l,
        c,
        u,
        d = t.createDocumentFragment(),
        f = [],
        h = 0,
        p = e.length;
      h < p;
      h++
    )
      if ((r = e[h]) || 0 === r)
        if ("object" === b(r)) w.merge(f, r.nodeType ? [r] : r);
        else if (ye.test(r)) {
          for (
            s = s || d.appendChild(t.createElement("div")),
              a = (he.exec(r) || ["", ""])[1].toLowerCase(),
              l = ge[a] || ge._default,
              s.innerHTML = l[1] + w.htmlPrefilter(r) + l[2],
              u = l[0];
            u--;

          )
            s = s.lastChild;
          w.merge(f, s.childNodes), ((s = d.firstChild).textContent = "");
        } else f.push(t.createTextNode(r));
    for (d.textContent = "", h = 0; (r = f[h++]); )
      if (i && -1 < w.inArray(r, i)) o && o.push(r);
      else if (
        ((c = oe(r)), (s = me(d.appendChild(r), "script")), c && ve(s), n)
      )
        for (u = 0; (r = s[u++]); ) pe.test(r.type || "") && n.push(r);
    return d;
  }
  var _e = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function xe() {
    return !1;
  }
  function Ee(e, t) {
    return (
      (e ===
        (function () {
          try {
            return m.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Te(e, t, n, i, o, r) {
    var s, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        Te(e, a, n, i, t[a], r);
      return e;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
          ("string" == typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = xe;
    else if (!o) return e;
    return (
      1 === r &&
        ((s = o),
        ((o = function (e) {
          return w().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, o, i, n);
      })
    );
  }
  function Ce(e, t, n) {
    n
      ? (K.set(e, t, !1),
        w.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var i,
              r,
              s = K.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (s.length)
                (w.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((s = o.call(arguments)),
                K.set(this, t, s),
                (i = n(this, t)),
                this[t](),
                s !== (r = K.get(this, t)) || i ? K.set(this, t, !1) : (r = {}),
                s !== r)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), r && r.value
                );
            } else
              s.length &&
                (K.set(this, t, {
                  value: w.event.trigger(
                    w.extend(s[0], w.Event.prototype),
                    s.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === K.get(e, t) && w.event.add(e, t, we);
  }
  (w.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        f,
        h,
        p,
        g,
        m = K.get(e);
      if (X(e))
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
            o && w.find.matchesSelector(ie, o),
            n.guid || (n.guid = w.guid++),
            (l = m.events) || (l = m.events = Object.create(null)),
            (s = m.handle) ||
              (s = m.handle =
                function (t) {
                  return void 0 !== w && w.event.triggered !== t.type
                    ? w.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            c = (t = (t || "").match(P) || [""]).length;
          c--;

        )
          (h = g = (a = _e.exec(t[c]) || [])[1]),
            (p = (a[2] || "").split(".").sort()),
            h &&
              ((d = w.event.special[h] || {}),
              (h = (o ? d.delegateType : d.bindType) || h),
              (d = w.event.special[h] || {}),
              (u = w.extend(
                {
                  type: h,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && w.expr.match.needsContext.test(o),
                  namespace: p.join("."),
                },
                r
              )),
              (f = l[h]) ||
                (((f = l[h] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(e, i, p, s)) ||
                  (e.addEventListener && e.addEventListener(h, s))),
              d.add &&
                (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
              (w.event.global[h] = !0));
    },
    remove: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        f,
        h,
        p,
        g,
        m = K.hasData(e) && K.get(e);
      if (m && (l = m.events)) {
        for (c = (t = (t || "").match(P) || [""]).length; c--; )
          if (
            ((h = g = (a = _e.exec(t[c]) || [])[1]),
            (p = (a[2] || "").split(".").sort()),
            h)
          ) {
            for (
              d = w.event.special[h] || {},
                f = l[(h = (i ? d.delegateType : d.bindType) || h)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = r = f.length;
              r--;

            )
              (u = f[r]),
                (!o && g !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (f.splice(r, 1),
                  u.selector && f.delegateCount--,
                  d.remove && d.remove.call(e, u));
            s &&
              !f.length &&
              ((d.teardown && !1 !== d.teardown.call(e, p, m.handle)) ||
                w.removeEvent(e, h, m.handle),
              delete l[h]);
          } else for (h in l) w.event.remove(e, h + t[c], n, i, !0);
        w.isEmptyObject(l) && K.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        a = new Array(arguments.length),
        l = w.event.fix(e),
        c = (K.get(this, "events") || Object.create(null))[l.type] || [],
        u = w.event.special[l.type] || {};
      for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, l))
      ) {
        for (
          s = w.event.handlers.call(this, l, c), t = 0;
          (o = s[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = o.elem, n = 0;
            (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== r.namespace &&
              !l.rnamespace.test(r.namespace)) ||
              ((l.handleObj = r),
              (l.data = r.data),
              void 0 !==
                (i = (
                  (w.event.special[r.origType] || {}).handle || r.handler
                ).apply(o.elem, a)) &&
                !1 === (l.result = i) &&
                (l.preventDefault(), l.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        r,
        s,
        a = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (r = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(o = (i = t[n]).selector + " ")] &&
                (s[o] = i.needsContext
                  ? -1 < w(o, this).index(c)
                  : w.find(o, this, null, [c]).length),
                s[o] && r.push(i);
            r.length && a.push({ elem: c, handlers: r });
          }
      return (
        (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: p(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            fe.test(t.type) && t.click && k(t, "input") && Ce(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            fe.test(t.type) && t.click && k(t, "input") && Ce(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (fe.test(t.type) &&
              t.click &&
              k(t, "input") &&
              K.get(t, "click")) ||
            k(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : xe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: xe,
      isPropagationStopped: xe,
      isImmediatePropagationStopped: xe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      w.event.addProp
    ),
    w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      w.event.special[e] = {
        setup: function () {
          return Ce(this, e, Ee), !1;
        },
        trigger: function () {
          return Ce(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === this || w.contains(this, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, i) {
        return Te(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Te(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            w(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = xe),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ae = /<script|<style|<link/i,
    ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ne(e, t) {
    return (
      (k(e, "table") &&
        k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        w(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Le(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Oe(e, t) {
    var n, i, o, r, s, a;
    if (1 === t.nodeType) {
      if (K.hasData(e) && (a = K.get(e).events))
        for (o in (K.remove(t, "handle events"), a))
          for (n = 0, i = a[o].length; n < i; n++) w.event.add(t, o, a[o][n]);
      Q.hasData(e) && ((r = Q.access(e)), (s = w.extend({}, r)), Q.set(t, s));
    }
  }
  function je(e, t, n, i) {
    t = r(t);
    var o,
      s,
      a,
      l,
      c,
      u,
      d = 0,
      f = e.length,
      g = f - 1,
      m = t[0],
      v = p(m);
    if (v || (1 < f && "string" == typeof m && !h.checkClone && ke.test(m)))
      return e.each(function (o) {
        var r = e.eq(o);
        v && (t[0] = m.call(this, o, r.html())), je(r, t, n, i);
      });
    if (
      f &&
      ((s = (o = be(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === o.childNodes.length && (o = s),
      s || i)
    ) {
      for (l = (a = w.map(me(o, "script"), De)).length; d < f; d++)
        (c = o),
          d !== g &&
            ((c = w.clone(c, !0, !0)), l && w.merge(a, me(c, "script"))),
          n.call(e[d], c, d);
      if (l)
        for (u = a[a.length - 1].ownerDocument, w.map(a, Le), d = 0; d < l; d++)
          (c = a[d]),
            pe.test(c.type || "") &&
              !K.access(c, "globalEval") &&
              w.contains(u, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? w._evalUrl &&
                  !c.noModule &&
                  w._evalUrl(
                    c.src,
                    { nonce: c.nonce || c.getAttribute("nonce") },
                    u
                  )
                : y(c.textContent.replace(Se, ""), c, u));
    }
    return e;
  }
  function Ie(e, t, n) {
    for (var i, o = t ? w.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
      n || 1 !== i.nodeType || w.cleanData(me(i)),
        i.parentNode &&
          (n && oe(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var i,
        o,
        r,
        s,
        a,
        l,
        c,
        u = e.cloneNode(!0),
        d = oe(e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (s = me(u), i = 0, o = (r = me(e)).length; i < o; i++)
          (a = r[i]),
            "input" === (c = (l = s[i]).nodeName.toLowerCase()) &&
            fe.test(a.type)
              ? (l.checked = a.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = a.defaultValue);
      if (t)
        if (n)
          for (r = r || me(e), s = s || me(u), i = 0, o = r.length; i < o; i++)
            Oe(r[i], s[i]);
        else Oe(e, u);
      return (
        0 < (s = me(u, "script")).length && ve(s, !d && me(e, "script")), u
      );
    },
    cleanData: function (e) {
      for (var t, n, i, o = w.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (X(n)) {
          if ((t = n[K.expando])) {
            if (t.events)
              for (i in t.events)
                o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
            n[K.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Ie(this, e, !0);
      },
      remove: function (e) {
        return Ie(this, e);
      },
      text: function (e) {
        return W(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return je(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Ne(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return je(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Ne(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return je(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return je(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(me(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return W(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ae.test(e) &&
              !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(me(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return je(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(me(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, i = [], o = w(e), r = o.length - 1, a = 0; a <= r; a++)
            (n = a === r ? this : this.clone(!0)),
              w(o[a])[t](n),
              s.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    He = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Me = function (e, t, n) {
      var i,
        o,
        r = {};
      for (o in t) (r[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.call(e)), t)) e.style[o] = r[o];
      return i;
    },
    qe = new RegExp(ne.join("|"), "i");
  function Re(e, t, n) {
    var i,
      o,
      r,
      s,
      a = e.style;
    return (
      (n = n || He(e)) &&
        ("" !== (s = n.getPropertyValue(t) || n[t]) ||
          oe(e) ||
          (s = w.style(e, t)),
        !h.pixelBoxStyles() &&
          Pe.test(s) &&
          qe.test(t) &&
          ((i = a.width),
          (o = a.minWidth),
          (r = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = r))),
      void 0 !== s ? s + "" : s
    );
  }
  function Be(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (u) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ie.appendChild(c).appendChild(u);
        var t = e.getComputedStyle(u);
        (i = "1%" !== t.top),
          (l = 12 === n(t.marginLeft)),
          (u.style.right = "60%"),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (u.style.position = "absolute"),
          (r = 12 === n(u.offsetWidth / 3)),
          ie.removeChild(c),
          (u = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      r,
      s,
      a,
      l,
      c = m.createElement("div"),
      u = m.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === u.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), r;
        },
        reliableTrDimensions: function () {
          var t, n, i, o;
          return (
            null == a &&
              ((t = m.createElement("table")),
              (n = m.createElement("tr")),
              (i = m.createElement("div")),
              (t.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (n.style.cssText = "border:1px solid"),
              (n.style.height = "1px"),
              (i.style.height = "9px"),
              (i.style.display = "block"),
              ie.appendChild(t).appendChild(n).appendChild(i),
              (o = e.getComputedStyle(n)),
              (a =
                parseInt(o.height, 10) +
                  parseInt(o.borderTopWidth, 10) +
                  parseInt(o.borderBottomWidth, 10) ===
                n.offsetHeight),
              ie.removeChild(t)),
            a
          );
        },
      }));
  })();
  var Fe = ["Webkit", "Moz", "ms"],
    We = m.createElement("div").style,
    $e = {};
  function ze(e) {
    return (
      w.cssProps[e] ||
      $e[e] ||
      (e in We
        ? e
        : ($e[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Fe.length;
                n--;

              )
                if ((e = Fe[n] + t) in We) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Ve = /^--/,
    Xe = { position: "absolute", visibility: "hidden", display: "block" },
    Ye = { letterSpacing: "0", fontWeight: "400" };
  function Ke(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function Qe(e, t, n, i, o, r) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (l += w.css(e, n + ne[s], !0, o)),
        i
          ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, o)),
            "margin" !== n &&
              (l -= w.css(e, "border" + ne[s] + "Width", !0, o)))
          : ((l += w.css(e, "padding" + ne[s], !0, o)),
            "padding" !== n
              ? (l += w.css(e, "border" + ne[s] + "Width", !0, o))
              : (a += w.css(e, "border" + ne[s] + "Width", !0, o)));
    return (
      !i &&
        0 <= r &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5
            )
          ) || 0),
      l
    );
  }
  function Ge(e, t, n) {
    var i = He(e),
      o =
        (!h.boxSizingReliable() || n) &&
        "border-box" === w.css(e, "boxSizing", !1, i),
      r = o,
      s = Re(e, t, i),
      a = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (
      ((!h.boxSizingReliable() && o) ||
        (!h.reliableTrDimensions() && k(e, "tr")) ||
        "auto" === s ||
        (!parseFloat(s) && "inline" === w.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((o = "border-box" === w.css(e, "boxSizing", !1, i)),
        (r = a in e) && (s = e[a])),
      (s = parseFloat(s) || 0) +
        Qe(e, t, n || (o ? "border" : "content"), r, i, s) +
        "px"
    );
  }
  function Je(e, t, n, i, o) {
    return new Je.prototype.init(e, t, n, i, o);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Re(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          s,
          a = V(t),
          l = Ve.test(t),
          c = e.style;
        if (
          (l || (t = ze(a)), (s = w.cssHooks[t] || w.cssHooks[a]), void 0 === n)
        )
          return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
        "string" == (r = typeof n) &&
          (o = te.exec(n)) &&
          o[1] &&
          ((n = ae(e, t, o)), (r = "number")),
          null != n &&
            n == n &&
            ("number" !== r ||
              l ||
              (n += (o && o[3]) || (w.cssNumber[a] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var o,
        r,
        s,
        a = V(t);
      return (
        Ve.test(t) || (t = ze(a)),
        (s = w.cssHooks[t] || w.cssHooks[a]) &&
          "get" in s &&
          (o = s.get(e, !0, n)),
        void 0 === o && (o = Re(e, t, i)),
        "normal" === o && t in Ye && (o = Ye[t]),
        "" === n || n
          ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
          : o
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !Ue.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ge(e, t, i)
              : Me(e, Xe, function () {
                  return Ge(e, t, i);
                });
        },
        set: function (e, n, i) {
          var o,
            r = He(e),
            s = !h.scrollboxSize() && "absolute" === r.position,
            a = (s || i) && "border-box" === w.css(e, "boxSizing", !1, r),
            l = i ? Qe(e, t, i, a, r) : 0;
          return (
            a &&
              s &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(r[t]) -
                  Qe(e, t, "border", !1, r) -
                  0.5
              )),
            l &&
              (o = te.exec(n)) &&
              "px" !== (o[3] || "px") &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Ke(0, n, l)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = Be(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Re(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
          return o;
        },
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Ke);
    }),
    w.fn.extend({
      css: function (e, t) {
        return W(
          this,
          function (e, t, n) {
            var i,
              o,
              r = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = He(e), o = t.length; s < o; s++)
                r[t[s]] = w.css(e, t[s], !1, i);
              return r;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((w.Tween = Je).prototype = {
      constructor: Je,
      init: function (e, t, n, i, o, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (w.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Je.propHooks[this.prop];
        return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Je.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                w.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Je.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Je.prototype),
    ((Je.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!w.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Je.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = Je.prototype.init),
    (w.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    it = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
  function rt() {
    et &&
      (!1 === m.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(rt)
        : e.setTimeout(rt, w.fx.interval),
      w.fx.tick());
  }
  function st() {
    return (
      e.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function at(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      o["margin" + (n = ne[i])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function lt(e, t, n) {
    for (
      var i,
        o = (ct.tweeners[t] || []).concat(ct.tweeners["*"]),
        r = 0,
        s = o.length;
      r < s;
      r++
    )
      if ((i = o[r].call(n, t, e))) return i;
  }
  function ct(e, t, n) {
    var i,
      o,
      r = 0,
      s = ct.prefilters.length,
      a = w.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (
          var t = Ze || st(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = 1 - (n / c.duration || 0),
            r = 0,
            s = c.tweens.length;
          r < s;
          r++
        )
          c.tweens[r].run(i);
        return (
          a.notifyWith(e, [c, i, n]),
          i < 1 && s
            ? n
            : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        );
      },
      c = a.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Ze || st(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = w.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; n < i; n++) c.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
              : a.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      u = c.props;
    for (
      (function (e, t) {
        var n, i, o, r, s;
        for (n in e)
          if (
            ((o = t[(i = V(n))]),
            (r = e[n]),
            Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
            n !== i && ((e[i] = r), delete e[n]),
            (s = w.cssHooks[i]) && ("expand" in s))
          )
            for (n in ((r = s.expand(r)), delete e[i], r))
              (n in e) || ((e[n] = r[n]), (t[n] = o));
          else t[i] = o;
      })(u, c.opts.specialEasing);
      r < s;
      r++
    )
      if ((i = ct.prefilters[r].call(c, e, u, c.opts)))
        return (
          p(i.stop) &&
            (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      w.map(u, lt, c),
      p(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      w.fx.timer(w.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (w.Animation = w.extend(ct, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ae(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      p(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, i = 0, o = e.length; i < o; i++)
        (n = e[i]),
          (ct.tweeners[n] = ct.tweeners[n] || []),
          ct.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          d = "width" in t || "height" in t,
          f = this,
          h = {},
          p = e.style,
          g = e.nodeType && se(e),
          m = K.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (s = w._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          f.always(function () {
            f.always(function () {
              s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
            });
          })),
        t))
          if (((o = t[i]), it.test(o))) {
            if (
              (delete t[i],
              (r = r || "toggle" === o),
              o === (g ? "hide" : "show"))
            ) {
              if ("show" !== o || !m || void 0 === m[i]) continue;
              g = !0;
            }
            h[i] = (m && m[i]) || w.style(e, i);
          }
        if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
          for (i in (d &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (c = m && m.display) && (c = K.get(e, "display")),
            "none" === (u = w.css(e, "display")) &&
              (c
                ? (u = c)
                : (ce([e], !0),
                  (c = e.style.display || c),
                  (u = w.css(e, "display")),
                  ce([e]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === w.css(e, "float") &&
              (l ||
                (f.done(function () {
                  p.display = c;
                }),
                null == c && ((u = p.display), (c = "none" === u ? "" : u))),
              (p.display = "inline-block"))),
          n.overflow &&
            ((p.overflow = "hidden"),
            f.always(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          (l = !1),
          h))
            l ||
              (m
                ? "hidden" in m && (g = m.hidden)
                : (m = K.access(e, "fxshow", { display: c })),
              r && (m.hidden = !g),
              g && ce([e], !0),
              f.done(function () {
                for (i in (g || ce([e]), K.remove(e, "fxshow"), h))
                  w.style(e, i, h[i]);
              })),
              (l = lt(g ? m[i] : 0, i, f)),
              i in m ||
                ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (p(e) && e),
              duration: e,
              easing: (n && t) || (t && !p(t) && t),
            };
      return (
        w.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in w.fx.speeds
              ? (i.duration = w.fx.speeds[i.duration])
              : (i.duration = w.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          p(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
        }),
        i
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(se)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var o = w.isEmptyObject(e),
          r = w.speed(t, n, i),
          s = function () {
            var t = ct(this, w.extend({}, e), r);
            (o || K.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              o = null != e && e + "queueHooks",
              r = w.timers,
              s = K.get(this);
            if (o) s[o] && s[o].stop && i(s[o]);
            else for (o in s) s[o] && s[o].stop && ot.test(o) && i(s[o]);
            for (o = r.length; o--; )
              r[o].elem !== this ||
                (null != e && r[o].queue !== e) ||
                (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = K.get(this),
              i = n[e + "queue"],
              o = n[e + "queueHooks"],
              r = w.timers,
              s = i ? i.length : 0;
            for (
              n.finish = !0,
                w.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === e &&
                (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < s; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, i, o) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(at(t, !0), e, i, o);
      };
    }),
    w.each(
      {
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        w.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (Ze = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      et || ((et = !0), rt());
    }),
    (w.fx.stop = function () {
      et = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var o = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(o);
          };
        })
      );
    }),
    (tt = m.createElement("input")),
    (nt = m.createElement("select").appendChild(m.createElement("option"))),
    (tt.type = "checkbox"),
    (h.checkOn = "" !== tt.value),
    (h.optSelected = nt.selected),
    ((tt = m.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (h.radioValue = "t" === tt.value);
  var ut,
    dt = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return W(this, w.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === r && w.isXMLDoc(e)) ||
                (o =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? ut : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : null == (i = w.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && k(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          o = t && t.match(P);
        if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n);
      },
    }),
    (ut = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = dt[t] || w.find.attr;
      dt[t] = function (e, t, i) {
        var o,
          r,
          s = t.toLowerCase();
        return (
          i ||
            ((r = dt[s]),
            (dt[s] = o),
            (o = null != n(e, t, i) ? s : null),
            (dt[s] = r)),
          o
        );
      };
    });
  var ft = /^(?:input|select|textarea|button)$/i,
    ht = /^(?:a|area)$/i;
  function pt(e) {
    return (e.match(P) || []).join(" ");
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  w.fn.extend({
    prop: function (e, t) {
      return W(this, w.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && w.isXMLDoc(e)) ||
              ((t = w.propFix[t] || t), (o = w.propHooks[t])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && "get" in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ft.test(e.nodeName) || (ht.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    ),
    w.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (p(e))
          return this.each(function (t) {
            w(this).addClass(e.call(this, t, gt(this)));
          });
        if ((t = mt(e)).length)
          for (; (n = this[l++]); )
            if (((o = gt(n)), (i = 1 === n.nodeType && " " + pt(o) + " "))) {
              for (s = 0; (r = t[s++]); )
                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              o !== (a = pt(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (p(e))
          return this.each(function (t) {
            w(this).removeClass(e.call(this, t, gt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = mt(e)).length)
          for (; (n = this[l++]); )
            if (((o = gt(n)), (i = 1 === n.nodeType && " " + pt(o) + " "))) {
              for (s = 0; (r = t[s++]); )
                for (; -1 < i.indexOf(" " + r + " "); )
                  i = i.replace(" " + r + " ", " ");
              o !== (a = pt(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : p(e)
          ? this.each(function (n) {
              w(this).toggleClass(e.call(this, n, gt(this), t), t);
            })
          : this.each(function () {
              var t, o, r, s;
              if (i)
                for (o = 0, r = w(this), s = mt(e); (t = s[o++]); )
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = gt(this)) && K.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : K.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && -1 < (" " + pt(gt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var vt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = p(e)),
          this.each(function (n) {
            var o;
            1 === this.nodeType &&
              (null == (o = i ? e.call(this, n, w(this).val()) : e)
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : Array.isArray(o) &&
                  (o = w.map(o, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                w.valHooks[this.type] ||
                w.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, o, "value")) ||
                (this.value = o));
          }))
        : o
        ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(o, "value"))
          ? n
          : "string" == typeof (n = o.value)
          ? n.replace(vt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : pt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              o = e.options,
              r = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? r + 1 : o.length;
            for (i = r < 0 ? l : s ? r : 0; i < l; i++)
              if (
                ((n = o[i]).selected || i === r) &&
                !n.disabled &&
                (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))
              ) {
                if (((t = w(n).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, i, o = e.options, r = w.makeArray(t), s = o.length;
              s--;

            )
              ((i = o[s]).selected =
                -1 < w.inArray(w.valHooks.option.get(i), r)) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < w.inArray(w(e).val(), t));
        },
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var yt = /^(?:focusinfocus|focusoutblur)$/,
    bt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        d,
        f,
        h,
        v = [i || m],
        y = u.call(t, "type") ? t.type : t,
        b = u.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = h = a = i = i || m),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !yt.test(y + w.event.triggered) &&
          (-1 < y.indexOf(".") && ((y = (b = y.split(".")).shift()), b.sort()),
          (c = y.indexOf(":") < 0 && "on" + y),
          ((t = t[w.expando]
            ? t
            : new w.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = b.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (f = w.event.special[y] || {}),
          o || !f.trigger || !1 !== f.trigger.apply(i, n)))
      ) {
        if (!o && !f.noBubble && !g(i)) {
          for (
            l = f.delegateType || y, yt.test(l + y) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            v.push(s), (a = s);
          a === (i.ownerDocument || m) &&
            v.push(a.defaultView || a.parentWindow || e);
        }
        for (r = 0; (s = v[r++]) && !t.isPropagationStopped(); )
          (h = s),
            (t.type = 1 < r ? l : f.bindType || y),
            (d =
              (K.get(s, "events") || Object.create(null))[t.type] &&
              K.get(s, "handle")) && d.apply(s, n),
            (d = c && s[c]) &&
              d.apply &&
              X(s) &&
              ((t.result = d.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          o ||
            t.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(v.pop(), n)) ||
            !X(i) ||
            (c &&
              p(i[y]) &&
              !g(i) &&
              ((a = i[c]) && (i[c] = null),
              (w.event.triggered = y),
              t.isPropagationStopped() && h.addEventListener(y, bt),
              i[y](),
              t.isPropagationStopped() && h.removeEventListener(y, bt),
              (w.event.triggered = void 0),
              a && (i[c] = a))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(i, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              o = K.access(i, t);
            o || i.addEventListener(e, n, !0), K.access(i, t, (o || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              o = K.access(i, t) - 1;
            o
              ? K.access(i, t, o)
              : (i.removeEventListener(e, n, !0), K.remove(i, t));
          },
        };
      });
  var _t = e.location,
    wt = { guid: Date.now() },
    xt = /\?/;
  w.parseXML = function (t) {
    var n, i;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {}
    return (
      (i = n && n.getElementsByTagName("parsererror")[0]),
      (n && !i) ||
        w.error(
          "Invalid XML: " +
            (i
              ? w
                  .map(i.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : t)
        ),
      n
    );
  };
  var Et = /\[\]$/,
    Tt = /\r?\n/g,
    Ct = /^(?:submit|button|image|reset|file)$/i,
    At = /^(?:input|select|textarea|keygen)/i;
  function kt(e, t, n, i) {
    var o;
    if (Array.isArray(t))
      w.each(t, function (t, o) {
        n || Et.test(e)
          ? i(e, o)
          : kt(
              e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
              o,
              n,
              i
            );
      });
    else if (n || "object" !== b(t)) i(e, t);
    else for (o in t) kt(e + "[" + o + "]", t[o], n, i);
  }
  (w.param = function (e, t) {
    var n,
      i = [],
      o = function (e, t) {
        var n = p(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        o(this.name, this.value);
      });
    else for (n in e) kt(n, e[n], t, o);
    return i.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              At.test(this.nodeName) &&
              !Ct.test(e) &&
              (this.checked || !fe.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(Tt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Tt, "\r\n") };
          })
          .get();
      },
    });
  var St = /%20/g,
    Nt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    jt = /^\/\//,
    It = {},
    Pt = {},
    Ht = "*/".concat("*"),
    Mt = m.createElement("a");
  function qt(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        o = 0,
        r = t.toLowerCase().match(P) || [];
      if (p(n))
        for (; (i = r[o++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function Rt(e, t, n, i) {
    var o = {},
      r = e === Pt;
    function s(a) {
      var l;
      return (
        (o[a] = !0),
        w.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || r || o[c]
            ? r
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), s(c), !1);
        }),
        l
      );
    }
    return s(t.dataTypes[0]) || (!o["*"] && s("*"));
  }
  function Bt(e, t) {
    var n,
      i,
      o = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && w.extend(!0, e, i), e;
  }
  (Mt.href = _t.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: _t.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            _t.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ht,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": w.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Bt(Bt(e, w.ajaxSettings), t) : Bt(w.ajaxSettings, e);
      },
      ajaxPrefilter: qt(It),
      ajaxTransport: qt(Pt),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          h = w.ajaxSetup({}, n),
          p = h.context || h,
          g = h.context && (p.nodeType || p.jquery) ? w(p) : w.event,
          v = w.Deferred(),
          y = w.Callbacks("once memory"),
          b = h.statusCode || {},
          _ = {},
          x = {},
          E = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!s)
                  for (s = {}; (t = Lt.exec(r)); )
                    s[t[1].toLowerCase() + " "] = (
                      s[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = s[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return c ? r : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                  (_[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) T.always(e[T.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || E;
              return i && i.abort(t), C(0, t), this;
            },
          };
        if (
          (v.promise(T),
          (h.url = ((t || h.url || _t.href) + "").replace(
            jt,
            _t.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""]),
          null == h.crossDomain)
        ) {
          l = m.createElement("a");
          try {
            (l.href = h.url),
              (l.href = l.href),
              (h.crossDomain =
                Mt.protocol + "//" + Mt.host != l.protocol + "//" + l.host);
          } catch (t) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = w.param(h.data, h.traditional)),
          Rt(It, h, n, T),
          c)
        )
          return T;
        for (d in ((u = w.event && h.global) &&
          0 == w.active++ &&
          w.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Ot.test(h.type)),
        (o = h.url.replace(Nt, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(St, "+"))
          : ((f = h.url.slice(o.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((o += (xt.test(o) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Dt, "$1")),
              (f = (xt.test(o) ? "&" : "?") + "_=" + wt.guid++ + f)),
            (h.url = o + f)),
        h.ifModified &&
          (w.lastModified[o] &&
            T.setRequestHeader("If-Modified-Since", w.lastModified[o]),
          w.etag[o] && T.setRequestHeader("If-None-Match", w.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          T.setRequestHeader("Content-Type", h.contentType),
        T.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          T.setRequestHeader(d, h.headers[d]);
        if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || c))
          return T.abort();
        if (
          ((E = "abort"),
          y.add(h.complete),
          T.done(h.success),
          T.fail(h.error),
          (i = Rt(Pt, h, n, T)))
        ) {
          if (((T.readyState = 1), u && g.trigger("ajaxSend", [T, h]), c))
            return T;
          h.async &&
            0 < h.timeout &&
            (a = e.setTimeout(function () {
              T.abort("timeout");
            }, h.timeout));
          try {
            (c = !1), i.send(_, C);
          } catch (t) {
            if (c) throw t;
            C(-1, t);
          }
        } else C(-1, "No Transport");
        function C(t, n, s, l) {
          var d,
            f,
            m,
            _,
            x,
            E = n;
          c ||
            ((c = !0),
            a && e.clearTimeout(a),
            (i = void 0),
            (r = l || ""),
            (T.readyState = 0 < t ? 4 : 0),
            (d = (200 <= t && t < 300) || 304 === t),
            s &&
              (_ = (function (e, t, n) {
                for (
                  var i, o, r, s, a = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (o in a)
                    if (a[o] && a[o].test(i)) {
                      l.unshift(o);
                      break;
                    }
                if (l[0] in n) r = l[0];
                else {
                  for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                      r = o;
                      break;
                    }
                    s || (s = o);
                  }
                  r = r || s;
                }
                if (r) return r !== l[0] && l.unshift(r), n[r];
              })(h, T, s)),
            !d &&
              -1 < w.inArray("script", h.dataTypes) &&
              w.inArray("json", h.dataTypes) < 0 &&
              (h.converters["text script"] = function () {}),
            (_ = (function (e, t, n, i) {
              var o,
                r,
                s,
                a,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1])
                for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
              for (r = u.shift(); r; )
                if (
                  (e.responseFields[r] && (n[e.responseFields[r]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = r),
                  (r = u.shift()))
                )
                  if ("*" === r) r = l;
                  else if ("*" !== l && l !== r) {
                    if (!(s = c[l + " " + r] || c["* " + r]))
                      for (o in c)
                        if (
                          (a = o.split(" "))[1] === r &&
                          (s = c[l + " " + a[0]] || c["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = c[o])
                            : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: s
                              ? e
                              : "No conversion from " + l + " to " + r,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(h, _, T, d)),
            d
              ? (h.ifModified &&
                  ((x = T.getResponseHeader("Last-Modified")) &&
                    (w.lastModified[o] = x),
                  (x = T.getResponseHeader("etag")) && (w.etag[o] = x)),
                204 === t || "HEAD" === h.type
                  ? (E = "nocontent")
                  : 304 === t
                  ? (E = "notmodified")
                  : ((E = _.state), (f = _.data), (d = !(m = _.error))))
              : ((m = E), (!t && E) || ((E = "error"), t < 0 && (t = 0))),
            (T.status = t),
            (T.statusText = (n || E) + ""),
            d ? v.resolveWith(p, [f, E, T]) : v.rejectWith(p, [T, E, m]),
            T.statusCode(b),
            (b = void 0),
            u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [T, h, d ? f : m]),
            y.fireWith(p, [T, E]),
            u &&
              (g.trigger("ajaxComplete", [T, h]),
              --w.active || w.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return w.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, "script");
      },
    }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, i, o) {
        return (
          p(n) && ((o = o || i), (i = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: o, data: n, success: i },
              w.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    w.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (w._evalUrl = function (e, t, n) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          w.globalEval(e, t, n);
        },
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (p(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return p(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = p(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Ft = { 0: 200, 1223: 204 },
    Wt = w.ajaxSettings.xhr();
  (h.cors = !!Wt && "withCredentials" in Wt),
    (h.ajax = Wt = !!Wt),
    w.ajaxTransport(function (t) {
      var n, i;
      if (h.cors || (Wt && !t.crossDomain))
        return {
          send: function (o, r) {
            var s,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            for (s in (t.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(t.mimeType),
            t.crossDomain ||
              o["X-Requested-With"] ||
              (o["X-Requested-With"] = "XMLHttpRequest"),
            o))
              a.setRequestHeader(s, o[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    i =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  "abort" === e
                    ? a.abort()
                    : "error" === e
                    ? "number" != typeof a.status
                      ? r(0, "error")
                      : r(a.status, a.statusText)
                    : r(
                        Ft[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (o) {
              if (n) throw o;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    w.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (i, o) {
            (t = w("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              m.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var $t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || w.expando + "_" + wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter("json jsonp", function (t, n, i) {
      var o,
        r,
        s,
        a =
          !1 !== t.jsonp &&
          (Ut.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ut.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (o = t.jsonpCallback =
            p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Ut, "$1" + o))
            : !1 !== t.jsonp &&
              (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
          (t.converters["script json"] = function () {
            return s || w.error(o + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (r = e[o]),
          (e[o] = function () {
            s = arguments;
          }),
          i.always(function () {
            void 0 === r ? w(e).removeProp(o) : (e[o] = r),
              t[o] && ((t.jsonpCallback = n.jsonpCallback), zt.push(o)),
              s && p(r) && r(s[0]),
              (s = r = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument =
      ((($t = m.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === $t.childNodes.length)),
    (w.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((i = (t =
                  m.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = m.location.href),
                t.head.appendChild(i))
              : (t = m)),
          (r = !n && []),
          (o = S.exec(e))
            ? [t.createElement(o[1])]
            : ((o = be([e], t, r)),
              r && r.length && w(r).remove(),
              w.merge([], o.childNodes)));
      var i, o, r;
    }),
    (w.fn.load = function (e, t, n) {
      var i,
        o,
        r,
        s = this,
        a = e.indexOf(" ");
      return (
        -1 < a && ((i = pt(e.slice(a))), (e = e.slice(0, a))),
        p(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (o = "POST"),
        0 < s.length &&
          w
            .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
            .done(function (e) {
              (r = arguments),
                s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, r || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c = w.css(e, "position"),
          u = w(e),
          d = {};
        "static" === c && (e.style.position = "relative"),
          (a = u.offset()),
          (r = w.css(e, "top")),
          (l = w.css(e, "left")),
          ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto")
            ? ((s = (i = u.position()).top), (o = i.left))
            : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          p(t) && (t = t.call(e, n, w.extend({}, a))),
          null != t.top && (d.top = t.top - a.top + s),
          null != t.left && (d.left = t.left - a.left + o),
          "using" in t ? t.using.call(e, d) : u.css(d);
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            o = { top: 0, left: 0 };
          if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === w.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
              (o.left += w.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - o.top - w.css(i, "marginTop", !0),
            left: t.left - o.left - w.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === w.css(e, "position");

          )
            e = e.offsetParent;
          return e || ie;
        });
      },
    }),
    w.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (i) {
          return W(
            this,
            function (e, i, o) {
              var r;
              if (
                (g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === o)
              )
                return r ? r[t] : e[i];
              r
                ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
                : (e[i] = o);
            },
            e,
            i,
            arguments.length
          );
        };
      }
    ),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = Be(h.pixelPosition, function (e, n) {
        if (n)
          return (n = Re(e, t)), Pe.test(n) ? w(e).position()[t] + "px" : n;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, i) {
          w.fn[i] = function (o, r) {
            var s = arguments.length && (n || "boolean" != typeof o),
              a = n || (!0 === o || !0 === r ? "margin" : "border");
            return W(
              this,
              function (t, n, o) {
                var r;
                return g(t)
                  ? 0 === i.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((r = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      r["scroll" + e],
                      t.body["offset" + e],
                      r["offset" + e],
                      r["client" + e]
                    ))
                  : void 0 === o
                  ? w.css(t, n, a)
                  : w.style(t, n, o, a);
              },
              t,
              s ? o : void 0,
              s
            );
          };
        }
      );
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return 0 < arguments.length
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.proxy = function (e, t) {
    var n, i, r;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), p(e)))
      return (
        (i = o.call(arguments, 2)),
        ((r = function () {
          return e.apply(t || this, i.concat(o.call(arguments)));
        }).guid = e.guid =
          e.guid || w.guid++),
        r
      );
  }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = k),
    (w.isFunction = p),
    (w.isWindow = g),
    (w.camelCase = V),
    (w.type = b),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (w.trim = function (e) {
      return null == e ? "" : (e + "").replace(Vt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Xt = e.jQuery,
    Yt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Yt), t && e.jQuery === w && (e.jQuery = Xt), w;
    }),
    void 0 === t && (e.jQuery = e.$ = w),
    w
  );
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : (e.Popper = t());
  })(this, function () {
    "use strict";
    function e(e) {
      return e && "[object Function]" === {}.toString.call(e);
    }
    function t(e, t) {
      if (1 !== e.nodeType) return [];
      var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
      return t ? n[t] : n;
    }
    function n(e) {
      return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function i(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case "HTML":
        case "BODY":
          return e.ownerDocument.body;
        case "#document":
          return e.body;
      }
      var o = t(e),
        r = o.overflow,
        s = o.overflowX,
        a = o.overflowY;
      return /(auto|scroll|overlay)/.test(r + a + s) ? e : i(n(e));
    }
    function o(e) {
      return e && e.referenceNode ? e.referenceNode : e;
    }
    function r(e) {
      return 11 === e ? Q : 10 === e ? G : Q || G;
    }
    function s(e) {
      if (!e) return document.documentElement;
      for (
        var n = r(10) ? document.body : null, i = e.offsetParent || null;
        i === n && e.nextElementSibling;

      )
        i = (e = e.nextElementSibling).offsetParent;
      var o = i && i.nodeName;
      return o && "BODY" !== o && "HTML" !== o
        ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) &&
          "static" === t(i, "position")
          ? s(i)
          : i
        : e
        ? e.ownerDocument.documentElement
        : document.documentElement;
    }
    function a(e) {
      return null === e.parentNode ? e : a(e.parentNode);
    }
    function l(e, t) {
      if (!(e && e.nodeType && t && t.nodeType))
        return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        o = n ? t : e,
        r = document.createRange();
      r.setStart(i, 0), r.setEnd(o, 0);
      var c = r.commonAncestorContainer;
      if ((e !== c && t !== c) || i.contains(o))
        return (function (e) {
          var t = e.nodeName;
          return "BODY" !== t && ("HTML" === t || s(e.firstElementChild) === e);
        })(c)
          ? c
          : s(c);
      var u = a(e);
      return u.host ? l(u.host, t) : l(e, a(t).host);
    }
    function c(e) {
      var t =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : "top",
        n = "top" === t ? "scrollTop" : "scrollLeft",
        i = e.nodeName;
      if ("BODY" === i || "HTML" === i) {
        var o = e.ownerDocument.documentElement,
          r = e.ownerDocument.scrollingElement || o;
        return r[n];
      }
      return e[n];
    }
    function u(e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = c(t, "top"),
        o = c(t, "left"),
        r = n ? -1 : 1;
      return (
        (e.top += i * r),
        (e.bottom += i * r),
        (e.left += o * r),
        (e.right += o * r),
        e
      );
    }
    function d(e, t) {
      var n = "x" === t ? "Left" : "Top",
        i = "Left" == n ? "Right" : "Bottom";
      return (
        parseFloat(e["border" + n + "Width"]) +
        parseFloat(e["border" + i + "Width"])
      );
    }
    function f(e, t, n, i) {
      return V(
        t["offset" + e],
        t["scroll" + e],
        n["client" + e],
        n["offset" + e],
        n["scroll" + e],
        r(10)
          ? parseInt(n["offset" + e]) +
              parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) +
              parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")])
          : 0
      );
    }
    function h(e) {
      var t = e.body,
        n = e.documentElement,
        i = r(10) && getComputedStyle(n);
      return { height: f("Height", t, n, i), width: f("Width", t, n, i) };
    }
    function p(e) {
      return te({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function g(e) {
      var n = {};
      try {
        if (r(10)) {
          n = e.getBoundingClientRect();
          var i = c(e, "top"),
            o = c(e, "left");
          (n.top += i), (n.left += o), (n.bottom += i), (n.right += o);
        } else n = e.getBoundingClientRect();
      } catch (e) {}
      var s = {
          left: n.left,
          top: n.top,
          width: n.right - n.left,
          height: n.bottom - n.top,
        },
        a = "HTML" === e.nodeName ? h(e.ownerDocument) : {},
        l = a.width || e.clientWidth || s.width,
        u = a.height || e.clientHeight || s.height,
        f = e.offsetWidth - l,
        g = e.offsetHeight - u;
      if (f || g) {
        var m = t(e);
        (f -= d(m, "x")), (g -= d(m, "y")), (s.width -= f), (s.height -= g);
      }
      return p(s);
    }
    function m(e, n) {
      var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        s = r(10),
        a = "HTML" === n.nodeName,
        l = g(e),
        c = g(n),
        d = i(e),
        f = t(n),
        h = parseFloat(f.borderTopWidth),
        m = parseFloat(f.borderLeftWidth);
      o && a && ((c.top = V(c.top, 0)), (c.left = V(c.left, 0)));
      var v = p({
        top: l.top - c.top - h,
        left: l.left - c.left - m,
        width: l.width,
        height: l.height,
      });
      if (((v.marginTop = 0), (v.marginLeft = 0), !s && a)) {
        var y = parseFloat(f.marginTop),
          b = parseFloat(f.marginLeft);
        (v.top -= h - y),
          (v.bottom -= h - y),
          (v.left -= m - b),
          (v.right -= m - b),
          (v.marginTop = y),
          (v.marginLeft = b);
      }
      return (
        (s && !o ? n.contains(d) : n === d && "BODY" !== d.nodeName) &&
          (v = u(v, n)),
        v
      );
    }
    function v(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = e.ownerDocument.documentElement,
        i = m(e, n),
        o = V(n.clientWidth, window.innerWidth || 0),
        r = V(n.clientHeight, window.innerHeight || 0),
        s = t ? 0 : c(n),
        a = t ? 0 : c(n, "left"),
        l = {
          top: s - i.top + i.marginTop,
          left: a - i.left + i.marginLeft,
          width: o,
          height: r,
        };
      return p(l);
    }
    function y(e) {
      var i = e.nodeName;
      if ("BODY" === i || "HTML" === i) return !1;
      if ("fixed" === t(e, "position")) return !0;
      var o = n(e);
      return !!o && y(o);
    }
    function b(e) {
      if (!e || !e.parentElement || r()) return document.documentElement;
      for (var n = e.parentElement; n && "none" === t(n, "transform"); )
        n = n.parentElement;
      return n || document.documentElement;
    }
    function _(e, t, r, s) {
      var a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        c = { top: 0, left: 0 },
        u = a ? b(e) : l(e, o(t));
      if ("viewport" === s) c = v(u, a);
      else {
        var d;
        "scrollParent" === s
          ? "BODY" === (d = i(n(t))).nodeName &&
            (d = e.ownerDocument.documentElement)
          : (d = "window" === s ? e.ownerDocument.documentElement : s);
        var f = m(d, u, a);
        if ("HTML" !== d.nodeName || y(u)) c = f;
        else {
          var p = h(e.ownerDocument),
            g = p.height,
            _ = p.width;
          (c.top += f.top - f.marginTop),
            (c.bottom = g + f.top),
            (c.left += f.left - f.marginLeft),
            (c.right = _ + f.left);
        }
      }
      var w = "number" == typeof (r = r || 0);
      return (
        (c.left += w ? r : r.left || 0),
        (c.top += w ? r : r.top || 0),
        (c.right -= w ? r : r.right || 0),
        (c.bottom -= w ? r : r.bottom || 0),
        c
      );
    }
    function w(e) {
      return e.width * e.height;
    }
    function x(e, t, n, i, o) {
      var r =
        5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === e.indexOf("auto")) return e;
      var s = _(n, i, r, o),
        a = {
          top: { width: s.width, height: t.top - s.top },
          right: { width: s.right - t.right, height: s.height },
          bottom: { width: s.width, height: s.bottom - t.bottom },
          left: { width: t.left - s.left, height: s.height },
        },
        l = Object.keys(a)
          .map(function (e) {
            return te({ key: e }, a[e], { area: w(a[e]) });
          })
          .sort(function (e, t) {
            return t.area - e.area;
          }),
        c = l.filter(function (e) {
          var t = e.width,
            i = e.height;
          return t >= n.clientWidth && i >= n.clientHeight;
        }),
        u = 0 < c.length ? c[0].key : l[0].key,
        d = e.split("-")[1];
      return u + (d ? "-" + d : "");
    }
    function E(e, t, n) {
      var i =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
        r = i ? b(t) : l(t, o(n));
      return m(n, r, i);
    }
    function T(e) {
      var t = e.ownerDocument.defaultView.getComputedStyle(e),
        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
        i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
      return { width: e.offsetWidth + i, height: e.offsetHeight + n };
    }
    function C(e) {
      var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return e.replace(/left|right|bottom|top/g, function (e) {
        return t[e];
      });
    }
    function A(e, t, n) {
      n = n.split("-")[0];
      var i = T(e),
        o = { width: i.width, height: i.height },
        r = -1 !== ["right", "left"].indexOf(n),
        s = r ? "top" : "left",
        a = r ? "left" : "top",
        l = r ? "height" : "width",
        c = r ? "width" : "height";
      return (
        (o[s] = t[s] + t[l] / 2 - i[l] / 2),
        (o[a] = n === a ? t[a] - i[c] : t[C(a)]),
        o
      );
    }
    function k(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function S(t, n, i) {
      return (
        (void 0 === i
          ? t
          : t.slice(
              0,
              (function (e, t, n) {
                if (Array.prototype.findIndex)
                  return e.findIndex(function (e) {
                    return e[t] === n;
                  });
                var i = k(e, function (e) {
                  return e[t] === n;
                });
                return e.indexOf(i);
              })(t, "name", i)
            )
        ).forEach(function (t) {
          t.function &&
            console.warn(
              "`modifier.function` is deprecated, use `modifier.fn`!"
            );
          var i = t.function || t.fn;
          t.enabled &&
            e(i) &&
            ((n.offsets.popper = p(n.offsets.popper)),
            (n.offsets.reference = p(n.offsets.reference)),
            (n = i(n, t)));
        }),
        n
      );
    }
    function N() {
      if (!this.state.isDestroyed) {
        var e = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {},
        };
        (e.offsets.reference = E(
          this.state,
          this.popper,
          this.reference,
          this.options.positionFixed
        )),
          (e.placement = x(
            this.options.placement,
            e.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (e.originalPlacement = e.placement),
          (e.positionFixed = this.options.positionFixed),
          (e.offsets.popper = A(this.popper, e.offsets.reference, e.placement)),
          (e.offsets.popper.position = this.options.positionFixed
            ? "fixed"
            : "absolute"),
          (e = S(this.modifiers, e)),
          this.state.isCreated
            ? this.options.onUpdate(e)
            : ((this.state.isCreated = !0), this.options.onCreate(e));
      }
    }
    function D(e, t) {
      return e.some(function (e) {
        var n = e.name;
        return e.enabled && n === t;
      });
    }
    function L(e) {
      for (
        var t = [!1, "ms", "Webkit", "Moz", "O"],
          n = e.charAt(0).toUpperCase() + e.slice(1),
          i = 0;
        i < t.length;
        i++
      ) {
        var o = t[i],
          r = o ? "" + o + n : e;
        if (void 0 !== document.body.style[r]) return r;
      }
      return null;
    }
    function O() {
      return (
        (this.state.isDestroyed = !0),
        D(this.modifiers, "applyStyle") &&
          (this.popper.removeAttribute("x-placement"),
          (this.popper.style.position = ""),
          (this.popper.style.top = ""),
          (this.popper.style.left = ""),
          (this.popper.style.right = ""),
          (this.popper.style.bottom = ""),
          (this.popper.style.willChange = ""),
          (this.popper.style[L("transform")] = "")),
        this.disableEventListeners(),
        this.options.removeOnDestroy &&
          this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function j(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
    }
    function I(e, t, n, o) {
      var r = "BODY" === e.nodeName,
        s = r ? e.ownerDocument.defaultView : e;
      s.addEventListener(t, n, { passive: !0 }),
        r || I(i(s.parentNode), t, n, o),
        o.push(s);
    }
    function P(e, t, n, o) {
      (n.updateBound = o),
        j(e).addEventListener("resize", n.updateBound, { passive: !0 });
      var r = i(e);
      return (
        I(r, "scroll", n.updateBound, n.scrollParents),
        (n.scrollElement = r),
        (n.eventsEnabled = !0),
        n
      );
    }
    function H() {
      this.state.eventsEnabled ||
        (this.state = P(
          this.reference,
          this.options,
          this.state,
          this.scheduleUpdate
        ));
    }
    function M() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state = (function (e, t) {
          return (
            j(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function (e) {
              e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t
          );
        })(this.reference, this.state)));
    }
    function q(e) {
      return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function R(e, t) {
      Object.keys(t).forEach(function (n) {
        var i = "";
        -1 !==
          ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
          q(t[n]) &&
          (i = "px"),
          (e.style[n] = t[n] + i);
      });
    }
    function B(e, t, n) {
      var i = k(e, function (e) {
          return e.name === t;
        }),
        o =
          !!i &&
          e.some(function (e) {
            return e.name === n && e.enabled && e.order < i.order;
          });
      if (!o) {
        var r = "`" + t + "`";
        console.warn(
          "`" +
            n +
            "` modifier is required by " +
            r +
            " modifier in order to work, be sure to include it before " +
            r +
            "!"
        );
      }
      return o;
    }
    function F(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = oe.indexOf(e),
        i = oe.slice(n + 1).concat(oe.slice(0, n));
      return t ? i.reverse() : i;
    }
    function W(e, t, n, i) {
      var o = [0, 0],
        r = -1 !== ["right", "left"].indexOf(i),
        s = e.split(/(\+|\-)/).map(function (e) {
          return e.trim();
        }),
        a = s.indexOf(
          k(s, function (e) {
            return -1 !== e.search(/,|\s/);
          })
        );
      s[a] &&
        -1 === s[a].indexOf(",") &&
        console.warn(
          "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
        );
      var l = /\s*,\s*|\s+/,
        c =
          -1 === a
            ? [s]
            : [
                s.slice(0, a).concat([s[a].split(l)[0]]),
                [s[a].split(l)[1]].concat(s.slice(a + 1)),
              ];
      return (
        (c = c.map(function (e, i) {
          var o = (1 === i ? !r : r) ? "height" : "width",
            s = !1;
          return e
            .reduce(function (e, t) {
              return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                ? ((e[e.length - 1] = t), (s = !0), e)
                : s
                ? ((e[e.length - 1] += t), (s = !1), e)
                : e.concat(t);
            }, [])
            .map(function (e) {
              return (function (e, t, n, i) {
                var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                  r = +o[1],
                  s = o[2];
                if (!r) return e;
                if (0 === s.indexOf("%")) {
                  var a;
                  switch (s) {
                    case "%p":
                      a = n;
                      break;
                    case "%":
                    case "%r":
                    default:
                      a = i;
                  }
                  return (p(a)[t] / 100) * r;
                }
                return "vh" === s || "vw" === s
                  ? (("vh" === s
                      ? V(
                          document.documentElement.clientHeight,
                          window.innerHeight || 0
                        )
                      : V(
                          document.documentElement.clientWidth,
                          window.innerWidth || 0
                        )) /
                      100) *
                      r
                  : r;
              })(e, o, t, n);
            });
        })).forEach(function (e, t) {
          e.forEach(function (n, i) {
            q(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1));
          });
        }),
        o
      );
    }
    var $ = Math.min,
      z = Math.floor,
      U = Math.round,
      V = Math.max,
      X =
        "undefined" != typeof window &&
        "undefined" != typeof document &&
        "undefined" != typeof navigator,
      Y = (function () {
        for (
          var e = ["Edge", "Trident", "Firefox"], t = 0;
          t < e.length;
          t += 1
        )
          if (X && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
        return 0;
      })(),
      K =
        X && window.Promise
          ? function (e) {
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                  window.Promise.resolve().then(function () {
                    (t = !1), e();
                  }));
              };
            }
          : function (e) {
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                  setTimeout(function () {
                    (t = !1), e();
                  }, Y));
              };
            },
      Q = X && !(!window.MSInputMethodContext || !document.documentMode),
      G = X && /MSIE 10/.test(navigator.userAgent),
      J = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      },
      Z = (function () {
        function e(e, t) {
          for (var n, i = 0; i < t.length; i++)
            ((n = t[i]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      ee = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      },
      te =
        Object.assign ||
        function (e) {
          for (var t, n = 1; n < arguments.length; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        },
      ne = X && /Firefox/i.test(navigator.userAgent),
      ie = [
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start",
      ],
      oe = ie.slice(3),
      re = "flip",
      se = "clockwise",
      ae = "counterclockwise",
      le = (function () {
        function t(n, i) {
          var o = this,
            r =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          J(this, t),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(o.update);
            }),
            (this.update = K(this.update.bind(this))),
            (this.options = te({}, t.Defaults, r)),
            (this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: [],
            }),
            (this.reference = n && n.jquery ? n[0] : n),
            (this.popper = i && i.jquery ? i[0] : i),
            (this.options.modifiers = {}),
            Object.keys(te({}, t.Defaults.modifiers, r.modifiers)).forEach(
              function (e) {
                o.options.modifiers[e] = te(
                  {},
                  t.Defaults.modifiers[e] || {},
                  r.modifiers ? r.modifiers[e] : {}
                );
              }
            ),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (e) {
                return te({ name: e }, o.options.modifiers[e]);
              })
              .sort(function (e, t) {
                return e.order - t.order;
              })),
            this.modifiers.forEach(function (t) {
              t.enabled &&
                e(t.onLoad) &&
                t.onLoad(o.reference, o.popper, o.options, t, o.state);
            }),
            this.update();
          var s = this.options.eventsEnabled;
          s && this.enableEventListeners(), (this.state.eventsEnabled = s);
        }
        return (
          Z(t, [
            {
              key: "update",
              value: function () {
                return N.call(this);
              },
            },
            {
              key: "destroy",
              value: function () {
                return O.call(this);
              },
            },
            {
              key: "enableEventListeners",
              value: function () {
                return H.call(this);
              },
            },
            {
              key: "disableEventListeners",
              value: function () {
                return M.call(this);
              },
            },
          ]),
          t
        );
      })();
    return (
      (le.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
      (le.placements = ie),
      (le.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (e) {
              var t = e.placement,
                n = t.split("-")[0],
                i = t.split("-")[1];
              if (i) {
                var o = e.offsets,
                  r = o.reference,
                  s = o.popper,
                  a = -1 !== ["bottom", "top"].indexOf(n),
                  l = a ? "left" : "top",
                  c = a ? "width" : "height",
                  u = {
                    start: ee({}, l, r[l]),
                    end: ee({}, l, r[l] + r[c] - s[c]),
                  };
                e.offsets.popper = te({}, s, u[i]);
              }
              return e;
            },
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (e, t) {
              var n,
                i = t.offset,
                o = e.placement,
                r = e.offsets,
                s = r.popper,
                a = r.reference,
                l = o.split("-")[0];
              return (
                (n = q(+i) ? [+i, 0] : W(i, s, a, l)),
                "left" === l
                  ? ((s.top += n[0]), (s.left -= n[1]))
                  : "right" === l
                  ? ((s.top += n[0]), (s.left += n[1]))
                  : "top" === l
                  ? ((s.left += n[0]), (s.top -= n[1]))
                  : "bottom" === l && ((s.left += n[0]), (s.top += n[1])),
                (e.popper = s),
                e
              );
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (e, t) {
              var n = t.boundariesElement || s(e.instance.popper);
              e.instance.reference === n && (n = s(n));
              var i = L("transform"),
                o = e.instance.popper.style,
                r = o.top,
                a = o.left,
                l = o[i];
              (o.top = ""), (o.left = ""), (o[i] = "");
              var c = _(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                n,
                e.positionFixed
              );
              (o.top = r), (o.left = a), (o[i] = l), (t.boundaries = c);
              var u = t.priority,
                d = e.offsets.popper,
                f = {
                  primary: function (e) {
                    var n = d[e];
                    return (
                      d[e] < c[e] &&
                        !t.escapeWithReference &&
                        (n = V(d[e], c[e])),
                      ee({}, e, n)
                    );
                  },
                  secondary: function (e) {
                    var n = "right" === e ? "left" : "top",
                      i = d[n];
                    return (
                      d[e] > c[e] &&
                        !t.escapeWithReference &&
                        (i = $(
                          d[n],
                          c[e] - ("right" === e ? d.width : d.height)
                        )),
                      ee({}, n, i)
                    );
                  },
                };
              return (
                u.forEach(function (e) {
                  var t =
                    -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                  d = te({}, d, f[t](e));
                }),
                (e.offsets.popper = d),
                e
              );
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent",
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (e) {
              var t = e.offsets,
                n = t.popper,
                i = t.reference,
                o = e.placement.split("-")[0],
                r = z,
                s = -1 !== ["top", "bottom"].indexOf(o),
                a = s ? "right" : "bottom",
                l = s ? "left" : "top",
                c = s ? "width" : "height";
              return (
                n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]),
                n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])),
                e
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (e, n) {
              var i;
              if (!B(e.instance.modifiers, "arrow", "keepTogether")) return e;
              var o = n.element;
              if ("string" == typeof o) {
                if (!(o = e.instance.popper.querySelector(o))) return e;
              } else if (!e.instance.popper.contains(o))
                return (
                  console.warn(
                    "WARNING: `arrow.element` must be child of its popper element!"
                  ),
                  e
                );
              var r = e.placement.split("-")[0],
                s = e.offsets,
                a = s.popper,
                l = s.reference,
                c = -1 !== ["left", "right"].indexOf(r),
                u = c ? "height" : "width",
                d = c ? "Top" : "Left",
                f = d.toLowerCase(),
                h = c ? "left" : "top",
                g = c ? "bottom" : "right",
                m = T(o)[u];
              l[g] - m < a[f] && (e.offsets.popper[f] -= a[f] - (l[g] - m)),
                l[f] + m > a[g] && (e.offsets.popper[f] += l[f] + m - a[g]),
                (e.offsets.popper = p(e.offsets.popper));
              var v = l[f] + l[u] / 2 - m / 2,
                y = t(e.instance.popper),
                b = parseFloat(y["margin" + d]),
                _ = parseFloat(y["border" + d + "Width"]),
                w = v - e.offsets.popper[f] - b - _;
              return (
                (w = V($(a[u] - m, w), 0)),
                (e.arrowElement = o),
                (e.offsets.arrow = (ee((i = {}), f, U(w)), ee(i, h, ""), i)),
                e
              );
            },
            element: "[x-arrow]",
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (e, t) {
              if (D(e.instance.modifiers, "inner")) return e;
              if (e.flipped && e.placement === e.originalPlacement) return e;
              var n = _(
                  e.instance.popper,
                  e.instance.reference,
                  t.padding,
                  t.boundariesElement,
                  e.positionFixed
                ),
                i = e.placement.split("-")[0],
                o = C(i),
                r = e.placement.split("-")[1] || "",
                s = [];
              switch (t.behavior) {
                case re:
                  s = [i, o];
                  break;
                case se:
                  s = F(i);
                  break;
                case ae:
                  s = F(i, !0);
                  break;
                default:
                  s = t.behavior;
              }
              return (
                s.forEach(function (a, l) {
                  if (i !== a || s.length === l + 1) return e;
                  (i = e.placement.split("-")[0]), (o = C(i));
                  var c = e.offsets.popper,
                    u = e.offsets.reference,
                    d = z,
                    f =
                      ("left" === i && d(c.right) > d(u.left)) ||
                      ("right" === i && d(c.left) < d(u.right)) ||
                      ("top" === i && d(c.bottom) > d(u.top)) ||
                      ("bottom" === i && d(c.top) < d(u.bottom)),
                    h = d(c.left) < d(n.left),
                    p = d(c.right) > d(n.right),
                    g = d(c.top) < d(n.top),
                    m = d(c.bottom) > d(n.bottom),
                    v =
                      ("left" === i && h) ||
                      ("right" === i && p) ||
                      ("top" === i && g) ||
                      ("bottom" === i && m),
                    y = -1 !== ["top", "bottom"].indexOf(i),
                    b =
                      !!t.flipVariations &&
                      ((y && "start" === r && h) ||
                        (y && "end" === r && p) ||
                        (!y && "start" === r && g) ||
                        (!y && "end" === r && m)),
                    _ =
                      !!t.flipVariationsByContent &&
                      ((y && "start" === r && p) ||
                        (y && "end" === r && h) ||
                        (!y && "start" === r && m) ||
                        (!y && "end" === r && g)),
                    w = b || _;
                  (f || v || w) &&
                    ((e.flipped = !0),
                    (f || v) && (i = s[l + 1]),
                    w &&
                      (r = (function (e) {
                        return "end" === e
                          ? "start"
                          : "start" === e
                          ? "end"
                          : e;
                      })(r)),
                    (e.placement = i + (r ? "-" + r : "")),
                    (e.offsets.popper = te(
                      {},
                      e.offsets.popper,
                      A(e.instance.popper, e.offsets.reference, e.placement)
                    )),
                    (e = S(e.instance.modifiers, e, "flip")));
                }),
                e
              );
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
            flipVariations: !1,
            flipVariationsByContent: !1,
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (e) {
              var t = e.placement,
                n = t.split("-")[0],
                i = e.offsets,
                o = i.popper,
                r = i.reference,
                s = -1 !== ["left", "right"].indexOf(n),
                a = -1 === ["top", "left"].indexOf(n);
              return (
                (o[s ? "left" : "top"] =
                  r[n] - (a ? o[s ? "width" : "height"] : 0)),
                (e.placement = C(t)),
                (e.offsets.popper = p(o)),
                e
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (e) {
              if (!B(e.instance.modifiers, "hide", "preventOverflow")) return e;
              var t = e.offsets.reference,
                n = k(e.instance.modifiers, function (e) {
                  return "preventOverflow" === e.name;
                }).boundaries;
              if (
                t.bottom < n.top ||
                t.left > n.right ||
                t.top > n.bottom ||
                t.right < n.left
              ) {
                if (!0 === e.hide) return e;
                (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
              } else {
                if (!1 === e.hide) return e;
                (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
              }
              return e;
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (e, t) {
              var n = t.x,
                i = t.y,
                o = e.offsets.popper,
                r = k(e.instance.modifiers, function (e) {
                  return "applyStyle" === e.name;
                }).gpuAcceleration;
              void 0 !== r &&
                console.warn(
                  "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                );
              var a,
                l,
                c = void 0 === r ? t.gpuAcceleration : r,
                u = s(e.instance.popper),
                d = g(u),
                f = { position: o.position },
                h = (function (e, t) {
                  var n = e.offsets,
                    i = n.popper,
                    o = n.reference,
                    r = U,
                    s = function (e) {
                      return e;
                    },
                    a = r(o.width),
                    l = r(i.width),
                    c = -1 !== ["left", "right"].indexOf(e.placement),
                    u = -1 !== e.placement.indexOf("-"),
                    d = t ? (c || u || a % 2 == l % 2 ? r : z) : s,
                    f = t ? r : s;
                  return {
                    left: d(
                      1 == a % 2 && 1 == l % 2 && !u && t ? i.left - 1 : i.left
                    ),
                    top: f(i.top),
                    bottom: f(i.bottom),
                    right: d(i.right),
                  };
                })(e, 2 > window.devicePixelRatio || !ne),
                p = "bottom" === n ? "top" : "bottom",
                m = "right" === i ? "left" : "right",
                v = L("transform");
              if (
                ((l =
                  "bottom" == p
                    ? "HTML" === u.nodeName
                      ? -u.clientHeight + h.bottom
                      : -d.height + h.bottom
                    : h.top),
                (a =
                  "right" == m
                    ? "HTML" === u.nodeName
                      ? -u.clientWidth + h.right
                      : -d.width + h.right
                    : h.left),
                c && v)
              )
                (f[v] = "translate3d(" + a + "px, " + l + "px, 0)"),
                  (f[p] = 0),
                  (f[m] = 0),
                  (f.willChange = "transform");
              else {
                var y = "bottom" == p ? -1 : 1,
                  b = "right" == m ? -1 : 1;
                (f[p] = l * y), (f[m] = a * b), (f.willChange = p + ", " + m);
              }
              var _ = { "x-placement": e.placement };
              return (
                (e.attributes = te({}, _, e.attributes)),
                (e.styles = te({}, f, e.styles)),
                (e.arrowStyles = te({}, e.offsets.arrow, e.arrowStyles)),
                e
              );
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right",
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (e) {
              return (
                R(e.instance.popper, e.styles),
                (function (e, t) {
                  Object.keys(t).forEach(function (n) {
                    !1 === t[n]
                      ? e.removeAttribute(n)
                      : e.setAttribute(n, t[n]);
                  });
                })(e.instance.popper, e.attributes),
                e.arrowElement &&
                  Object.keys(e.arrowStyles).length &&
                  R(e.arrowElement, e.arrowStyles),
                e
              );
            },
            onLoad: function (e, t, n, i, o) {
              var r = E(o, t, e, n.positionFixed),
                s = x(
                  n.placement,
                  r,
                  t,
                  e,
                  n.modifiers.flip.boundariesElement,
                  n.modifiers.flip.padding
                );
              return (
                t.setAttribute("x-placement", s),
                R(t, { position: n.positionFixed ? "fixed" : "absolute" }),
                n
              );
            },
            gpuAcceleration: void 0,
          },
        },
      }),
      le
    );
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t(require("@popperjs/core")))
      : "function" == typeof define && define.amd
      ? define(["@popperjs/core"], t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).bootstrap =
          t(e.Popper));
  })(this, function (e) {
    "use strict";
    var t = (function (e) {
      if (e && e.__esModule) return e;
      var t = Object.create(null);
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            if ("default" !== n) {
              var i = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                i.get
                  ? i
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    }
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    })(e);
    const n = (e) => {
        let t = e.getAttribute("data-bs-target");
        if (!t || "#" === t) {
          let n = e.getAttribute("href");
          if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
          n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]),
            (t = n && "#" !== n ? n.trim() : null);
        }
        return t;
      },
      i = (e) => {
        const t = n(e);
        return t && document.querySelector(t) ? t : null;
      },
      o = (e) => {
        const t = n(e);
        return t ? document.querySelector(t) : null;
      },
      r = (e) => {
        e.dispatchEvent(new Event("transitionend"));
      },
      s = (e) =>
        !(!e || "object" != typeof e) &&
        (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
      a = (e) =>
        s(e)
          ? e.jquery
            ? e[0]
            : e
          : "string" == typeof e && e.length > 0
          ? document.querySelector(e)
          : null,
      l = (e, t, n) => {
        Object.keys(n).forEach((i) => {
          const o = n[i],
            r = t[i],
            a =
              r && s(r)
                ? "element"
                : null == (l = r)
                ? "" + l
                : {}.toString
                    .call(l)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          var l;
          if (!new RegExp(o).test(a))
            throw new TypeError(
              `${e.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${o}".`
            );
        });
      },
      c = (e) =>
        !(!s(e) || 0 === e.getClientRects().length) &&
        "visible" === getComputedStyle(e).getPropertyValue("visibility"),
      u = (e) =>
        !e ||
        e.nodeType !== Node.ELEMENT_NODE ||
        !!e.classList.contains("disabled") ||
        (void 0 !== e.disabled
          ? e.disabled
          : e.hasAttribute("disabled") &&
            "false" !== e.getAttribute("disabled")),
      d = (e) => {
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof e.getRootNode) {
          const t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        }
        return e instanceof ShadowRoot
          ? e
          : e.parentNode
          ? d(e.parentNode)
          : null;
      },
      f = () => {},
      h = (e) => {
        e.offsetHeight;
      },
      p = () => {
        const { jQuery: e } = window;
        return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
      },
      g = [],
      m = () => "rtl" === document.documentElement.dir,
      v = (e) => {
        var t;
        (t = () => {
          const t = p();
          if (t) {
            const n = e.NAME,
              i = t.fn[n];
            (t.fn[n] = e.jQueryInterface),
              (t.fn[n].Constructor = e),
              (t.fn[n].noConflict = () => ((t.fn[n] = i), e.jQueryInterface));
          }
        }),
          "loading" === document.readyState
            ? (g.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  g.forEach((e) => e());
                }),
              g.push(t))
            : t();
      },
      y = (e) => {
        "function" == typeof e && e();
      },
      b = (e, t, n = !0) => {
        if (!n) return void y(e);
        const i =
          ((e) => {
            if (!e) return 0;
            let { transitionDuration: t, transitionDelay: n } =
              window.getComputedStyle(e);
            const i = Number.parseFloat(t),
              o = Number.parseFloat(n);
            return i || o
              ? ((t = t.split(",")[0]),
                (n = n.split(",")[0]),
                1e3 * (Number.parseFloat(t) + Number.parseFloat(n)))
              : 0;
          })(t) + 5;
        let o = !1;
        const s = ({ target: n }) => {
          n === t &&
            ((o = !0), t.removeEventListener("transitionend", s), y(e));
        };
        t.addEventListener("transitionend", s),
          setTimeout(() => {
            o || r(t);
          }, i);
      },
      _ = (e, t, n, i) => {
        let o = e.indexOf(t);
        if (-1 === o) return e[!n && i ? e.length - 1 : 0];
        const r = e.length;
        return (
          (o += n ? 1 : -1),
          i && (o = (o + r) % r),
          e[Math.max(0, Math.min(o, r - 1))]
        );
      },
      w = /[^.]*(?=\..*)\.|.*/,
      x = /\..*/,
      E = /::\d+$/,
      T = {};
    let C = 1;
    const A = { mouseenter: "mouseover", mouseleave: "mouseout" },
      k = /^(mouseenter|mouseleave)/i,
      S = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function N(e, t) {
      return (t && `${t}::${C++}`) || e.uidEvent || C++;
    }
    function D(e) {
      const t = N(e);
      return (e.uidEvent = t), (T[t] = T[t] || {}), T[t];
    }
    function L(e, t, n = null) {
      const i = Object.keys(e);
      for (let o = 0, r = i.length; o < r; o++) {
        const r = e[i[o]];
        if (r.originalHandler === t && r.delegationSelector === n) return r;
      }
      return null;
    }
    function O(e, t, n) {
      const i = "string" == typeof t,
        o = i ? n : t;
      let r = P(e);
      return S.has(r) || (r = e), [i, o, r];
    }
    function j(e, t, n, i, o) {
      if ("string" != typeof t || !e) return;
      if ((n || ((n = i), (i = null)), k.test(t))) {
        const e = (e) =>
          function (t) {
            if (
              !t.relatedTarget ||
              (t.relatedTarget !== t.delegateTarget &&
                !t.delegateTarget.contains(t.relatedTarget))
            )
              return e.call(this, t);
          };
        i ? (i = e(i)) : (n = e(n));
      }
      const [r, s, a] = O(t, n, i),
        l = D(e),
        c = l[a] || (l[a] = {}),
        u = L(c, s, r ? n : null);
      if (u) return void (u.oneOff = u.oneOff && o);
      const d = N(s, t.replace(w, "")),
        f = r
          ? (function (e, t, n) {
              return function i(o) {
                const r = e.querySelectorAll(t);
                for (let { target: s } = o; s && s !== this; s = s.parentNode)
                  for (let a = r.length; a--; )
                    if (r[a] === s)
                      return (
                        (o.delegateTarget = s),
                        i.oneOff && H.off(e, o.type, t, n),
                        n.apply(s, [o])
                      );
                return null;
              };
            })(e, n, i)
          : (function (e, t) {
              return function n(i) {
                return (
                  (i.delegateTarget = e),
                  n.oneOff && H.off(e, i.type, t),
                  t.apply(e, [i])
                );
              };
            })(e, n);
      (f.delegationSelector = r ? n : null),
        (f.originalHandler = s),
        (f.oneOff = o),
        (f.uidEvent = d),
        (c[d] = f),
        e.addEventListener(a, f, r);
    }
    function I(e, t, n, i, o) {
      const r = L(t[n], i, o);
      r && (e.removeEventListener(n, r, Boolean(o)), delete t[n][r.uidEvent]);
    }
    function P(e) {
      return (e = e.replace(x, "")), A[e] || e;
    }
    const H = {
        on(e, t, n, i) {
          j(e, t, n, i, !1);
        },
        one(e, t, n, i) {
          j(e, t, n, i, !0);
        },
        off(e, t, n, i) {
          if ("string" != typeof t || !e) return;
          const [o, r, s] = O(t, n, i),
            a = s !== t,
            l = D(e),
            c = t.startsWith(".");
          if (void 0 !== r) {
            if (!l || !l[s]) return;
            return void I(e, l, s, r, o ? n : null);
          }
          c &&
            Object.keys(l).forEach((n) => {
              !(function (e, t, n, i) {
                const o = t[n] || {};
                Object.keys(o).forEach((r) => {
                  if (r.includes(i)) {
                    const i = o[r];
                    I(e, t, n, i.originalHandler, i.delegationSelector);
                  }
                });
              })(e, l, n, t.slice(1));
            });
          const u = l[s] || {};
          Object.keys(u).forEach((n) => {
            const i = n.replace(E, "");
            if (!a || t.includes(i)) {
              const t = u[n];
              I(e, l, s, t.originalHandler, t.delegationSelector);
            }
          });
        },
        trigger(e, t, n) {
          if ("string" != typeof t || !e) return null;
          const i = p(),
            o = P(t),
            r = t !== o,
            s = S.has(o);
          let a,
            l = !0,
            c = !0,
            u = !1,
            d = null;
          return (
            r &&
              i &&
              ((a = i.Event(t, n)),
              i(e).trigger(a),
              (l = !a.isPropagationStopped()),
              (c = !a.isImmediatePropagationStopped()),
              (u = a.isDefaultPrevented())),
            s
              ? ((d = document.createEvent("HTMLEvents")),
                d.initEvent(o, l, !0))
              : (d = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
            void 0 !== n &&
              Object.keys(n).forEach((e) => {
                Object.defineProperty(d, e, { get: () => n[e] });
              }),
            u && d.preventDefault(),
            c && e.dispatchEvent(d),
            d.defaultPrevented && void 0 !== a && a.preventDefault(),
            d
          );
        },
      },
      M = new Map();
    var q = {
      set(e, t, n) {
        M.has(e) || M.set(e, new Map());
        const i = M.get(e);
        i.has(t) || 0 === i.size
          ? i.set(t, n)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(i.keys())[0]
              }.`
            );
      },
      get: (e, t) => (M.has(e) && M.get(e).get(t)) || null,
      remove(e, t) {
        if (!M.has(e)) return;
        const n = M.get(e);
        n.delete(t), 0 === n.size && M.delete(e);
      },
    };
    class R {
      constructor(e) {
        (e = a(e)) &&
          ((this._element = e),
          q.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        q.remove(this._element, this.constructor.DATA_KEY),
          H.off(this._element, this.constructor.EVENT_KEY),
          Object.getOwnPropertyNames(this).forEach((e) => {
            this[e] = null;
          });
      }
      _queueCallback(e, t, n = !0) {
        b(e, t, n);
      }
      static getInstance(e) {
        return q.get(a(e), this.DATA_KEY);
      }
      static getOrCreateInstance(e, t = {}) {
        return (
          this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
        );
      }
      static get VERSION() {
        return "5.1.1";
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!'
        );
      }
      static get DATA_KEY() {
        return "bs." + this.NAME;
      }
      static get EVENT_KEY() {
        return "." + this.DATA_KEY;
      }
    }
    const B = (e, t = "hide") => {
      const n = "click.dismiss" + e.EVENT_KEY,
        i = e.NAME;
      H.on(document, n, `[data-bs-dismiss="${i}"]`, function (n) {
        if (
          (["A", "AREA"].includes(this.tagName) && n.preventDefault(), u(this))
        )
          return;
        const r = o(this) || this.closest("." + i);
        e.getOrCreateInstance(r)[t]();
      });
    };
    class F extends R {
      static get NAME() {
        return "alert";
      }
      close() {
        if (H.trigger(this._element, "close.bs.alert").defaultPrevented) return;
        this._element.classList.remove("show");
        const e = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, e);
      }
      _destroyElement() {
        this._element.remove(),
          H.trigger(this._element, "closed.bs.alert"),
          this.dispose();
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = F.getOrCreateInstance(this);
          if ("string" == typeof e) {
            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    B(F, "close"), v(F);
    class W extends R {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = W.getOrCreateInstance(this);
          "toggle" === e && t[e]();
        });
      }
    }
    function $(e) {
      return (
        "true" === e ||
        ("false" !== e &&
          (e === Number(e).toString()
            ? Number(e)
            : "" === e || "null" === e
            ? null
            : e))
      );
    }
    function z(e) {
      return e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
    }
    H.on(
      document,
      "click.bs.button.data-api",
      '[data-bs-toggle="button"]',
      (e) => {
        e.preventDefault();
        const t = e.target.closest('[data-bs-toggle="button"]');
        W.getOrCreateInstance(t).toggle();
      }
    ),
      v(W);
    const U = {
        setDataAttribute(e, t, n) {
          e.setAttribute("data-bs-" + z(t), n);
        },
        removeDataAttribute(e, t) {
          e.removeAttribute("data-bs-" + z(t));
        },
        getDataAttributes(e) {
          if (!e) return {};
          const t = {};
          return (
            Object.keys(e.dataset)
              .filter((e) => e.startsWith("bs"))
              .forEach((n) => {
                let i = n.replace(/^bs/, "");
                (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                  (t[i] = $(e.dataset[n]));
              }),
            t
          );
        },
        getDataAttribute: (e, t) => $(e.getAttribute("data-bs-" + z(t))),
        offset(e) {
          const t = e.getBoundingClientRect();
          return {
            top: t.top + window.pageYOffset,
            left: t.left + window.pageXOffset,
          };
        },
        position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
      },
      V = {
        find: (e, t = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(t, e)),
        findOne: (e, t = document.documentElement) =>
          Element.prototype.querySelector.call(t, e),
        children: (e, t) =>
          [].concat(...e.children).filter((e) => e.matches(t)),
        parents(e, t) {
          const n = [];
          let i = e.parentNode;
          for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
            i.matches(t) && n.push(i), (i = i.parentNode);
          return n;
        },
        prev(e, t) {
          let n = e.previousElementSibling;
          for (; n; ) {
            if (n.matches(t)) return [n];
            n = n.previousElementSibling;
          }
          return [];
        },
        next(e, t) {
          let n = e.nextElementSibling;
          for (; n; ) {
            if (n.matches(t)) return [n];
            n = n.nextElementSibling;
          }
          return [];
        },
        focusableChildren(e) {
          const t = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]',
          ]
            .map((e) => e + ':not([tabindex^="-"])')
            .join(", ");
          return this.find(t, e).filter((e) => !u(e) && c(e));
        },
      },
      X = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      Y = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      K = "next",
      Q = "prev",
      G = "left",
      J = "right",
      Z = { ArrowLeft: J, ArrowRight: G };
    class ee extends R {
      constructor(e, t) {
        super(e),
          (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(t)),
          (this._indicatorsElement = V.findOne(
            ".carousel-indicators",
            this._element
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(window.PointerEvent)),
          this._addEventListeners();
      }
      static get Default() {
        return X;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(K);
      }
      nextWhenVisible() {
        !document.hidden && c(this._element) && this.next();
      }
      prev() {
        this._slide(Q);
      }
      pause(e) {
        e || (this._isPaused = !0),
          V.findOne(
            ".carousel-item-next, .carousel-item-prev",
            this._element
          ) && (r(this._element), this.cycle(!0)),
          clearInterval(this._interval),
          (this._interval = null);
      }
      cycle(e) {
        e || (this._isPaused = !1),
          this._interval &&
            (clearInterval(this._interval), (this._interval = null)),
          this._config &&
            this._config.interval &&
            !this._isPaused &&
            (this._updateInterval(),
            (this._interval = setInterval(
              (document.visibilityState
                ? this.nextWhenVisible
                : this.next
              ).bind(this),
              this._config.interval
            )));
      }
      to(e) {
        this._activeElement = V.findOne(".active.carousel-item", this._element);
        const t = this._getItemIndex(this._activeElement);
        if (e > this._items.length - 1 || e < 0) return;
        if (this._isSliding)
          return void H.one(this._element, "slid.bs.carousel", () =>
            this.to(e)
          );
        if (t === e) return this.pause(), void this.cycle();
        const n = e > t ? K : Q;
        this._slide(n, this._items[e]);
      }
      _getConfig(e) {
        return (
          (e = {
            ...X,
            ...U.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          l("carousel", e, Y),
          e
        );
      }
      _handleSwipe() {
        const e = Math.abs(this.touchDeltaX);
        if (e <= 40) return;
        const t = e / this.touchDeltaX;
        (this.touchDeltaX = 0), t && this._slide(t > 0 ? J : G);
      }
      _addEventListeners() {
        this._config.keyboard &&
          H.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)),
          "hover" === this._config.pause &&
            (H.on(this._element, "mouseenter.bs.carousel", (e) =>
              this.pause(e)
            ),
            H.on(this._element, "mouseleave.bs.carousel", (e) =>
              this.cycle(e)
            )),
          this._config.touch &&
            this._touchSupported &&
            this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        const e = (e) =>
            this._pointerEvent &&
            ("pen" === e.pointerType || "touch" === e.pointerType),
          t = (t) => {
            e(t)
              ? (this.touchStartX = t.clientX)
              : this._pointerEvent || (this.touchStartX = t.touches[0].clientX);
          },
          n = (e) => {
            this.touchDeltaX =
              e.touches && e.touches.length > 1
                ? 0
                : e.touches[0].clientX - this.touchStartX;
          },
          i = (t) => {
            e(t) && (this.touchDeltaX = t.clientX - this.touchStartX),
              this._handleSwipe(),
              "hover" === this._config.pause &&
                (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  (e) => this.cycle(e),
                  500 + this._config.interval
                )));
          };
        V.find(".carousel-item img", this._element).forEach((e) => {
          H.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
        }),
          this._pointerEvent
            ? (H.on(this._element, "pointerdown.bs.carousel", (e) => t(e)),
              H.on(this._element, "pointerup.bs.carousel", (e) => i(e)),
              this._element.classList.add("pointer-event"))
            : (H.on(this._element, "touchstart.bs.carousel", (e) => t(e)),
              H.on(this._element, "touchmove.bs.carousel", (e) => n(e)),
              H.on(this._element, "touchend.bs.carousel", (e) => i(e)));
      }
      _keydown(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        const t = Z[e.key];
        t && (e.preventDefault(), this._slide(t));
      }
      _getItemIndex(e) {
        return (
          (this._items =
            e && e.parentNode ? V.find(".carousel-item", e.parentNode) : []),
          this._items.indexOf(e)
        );
      }
      _getItemByOrder(e, t) {
        const n = e === K;
        return _(this._items, t, n, this._config.wrap);
      }
      _triggerSlideEvent(e, t) {
        const n = this._getItemIndex(e),
          i = this._getItemIndex(
            V.findOne(".active.carousel-item", this._element)
          );
        return H.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: e,
          direction: t,
          from: i,
          to: n,
        });
      }
      _setActiveIndicatorElement(e) {
        if (this._indicatorsElement) {
          const t = V.findOne(".active", this._indicatorsElement);
          t.classList.remove("active"), t.removeAttribute("aria-current");
          const n = V.find("[data-bs-target]", this._indicatorsElement);
          for (let t = 0; t < n.length; t++)
            if (
              Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) ===
              this._getItemIndex(e)
            ) {
              n[t].classList.add("active"),
                n[t].setAttribute("aria-current", "true");
              break;
            }
        }
      }
      _updateInterval() {
        const e =
          this._activeElement ||
          V.findOne(".active.carousel-item", this._element);
        if (!e) return;
        const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        t
          ? ((this._config.defaultInterval =
              this._config.defaultInterval || this._config.interval),
            (this._config.interval = t))
          : (this._config.interval =
              this._config.defaultInterval || this._config.interval);
      }
      _slide(e, t) {
        const n = this._directionToOrder(e),
          i = V.findOne(".active.carousel-item", this._element),
          o = this._getItemIndex(i),
          r = t || this._getItemByOrder(n, i),
          s = this._getItemIndex(r),
          a = Boolean(this._interval),
          l = n === K,
          c = l ? "carousel-item-start" : "carousel-item-end",
          u = l ? "carousel-item-next" : "carousel-item-prev",
          d = this._orderToDirection(n);
        if (r && r.classList.contains("active"))
          return void (this._isSliding = !1);
        if (this._isSliding) return;
        if (this._triggerSlideEvent(r, d).defaultPrevented) return;
        if (!i || !r) return;
        (this._isSliding = !0),
          a && this.pause(),
          this._setActiveIndicatorElement(r),
          (this._activeElement = r);
        const f = () => {
          H.trigger(this._element, "slid.bs.carousel", {
            relatedTarget: r,
            direction: d,
            from: o,
            to: s,
          });
        };
        if (this._element.classList.contains("slide")) {
          r.classList.add(u), h(r), i.classList.add(c), r.classList.add(c);
          const e = () => {
            r.classList.remove(c, u),
              r.classList.add("active"),
              i.classList.remove("active", u, c),
              (this._isSliding = !1),
              setTimeout(f, 0);
          };
          this._queueCallback(e, i, !0);
        } else i.classList.remove("active"), r.classList.add("active"), (this._isSliding = !1), f();
        a && this.cycle();
      }
      _directionToOrder(e) {
        return [J, G].includes(e)
          ? m()
            ? e === G
              ? Q
              : K
            : e === G
            ? K
            : Q
          : e;
      }
      _orderToDirection(e) {
        return [K, Q].includes(e)
          ? m()
            ? e === Q
              ? G
              : J
            : e === Q
            ? J
            : G
          : e;
      }
      static carouselInterface(e, t) {
        const n = ee.getOrCreateInstance(e, t);
        let { _config: i } = n;
        "object" == typeof t && (i = { ...i, ...t });
        const o = "string" == typeof t ? t : i.slide;
        if ("number" == typeof t) n.to(t);
        else if ("string" == typeof o) {
          if (void 0 === n[o]) throw new TypeError(`No method named "${o}"`);
          n[o]();
        } else i.interval && i.ride && (n.pause(), n.cycle());
      }
      static jQueryInterface(e) {
        return this.each(function () {
          ee.carouselInterface(this, e);
        });
      }
      static dataApiClickHandler(e) {
        const t = o(this);
        if (!t || !t.classList.contains("carousel")) return;
        const n = { ...U.getDataAttributes(t), ...U.getDataAttributes(this) },
          i = this.getAttribute("data-bs-slide-to");
        i && (n.interval = !1),
          ee.carouselInterface(t, n),
          i && ee.getInstance(t).to(i),
          e.preventDefault();
      }
    }
    H.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      ee.dataApiClickHandler
    ),
      H.on(window, "load.bs.carousel.data-api", () => {
        const e = V.find('[data-bs-ride="carousel"]');
        for (let t = 0, n = e.length; t < n; t++)
          ee.carouselInterface(e[t], ee.getInstance(e[t]));
      }),
      v(ee);
    const te = { toggle: !0, parent: null },
      ne = { toggle: "boolean", parent: "(null|element)" };
    class ie extends R {
      constructor(e, t) {
        super(e),
          (this._isTransitioning = !1),
          (this._config = this._getConfig(t)),
          (this._triggerArray = []);
        const n = V.find('[data-bs-toggle="collapse"]');
        for (let e = 0, t = n.length; e < t; e++) {
          const t = n[e],
            o = i(t),
            r = V.find(o).filter((e) => e === this._element);
          null !== o &&
            r.length &&
            ((this._selector = o), this._triggerArray.push(t));
        }
        this._initializeChildren(),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return te;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let e,
          t = [];
        if (this._config.parent) {
          const e = V.find(".collapse .collapse", this._config.parent);
          t = V.find(
            ".collapse.show, .collapse.collapsing",
            this._config.parent
          ).filter((t) => !e.includes(t));
        }
        const n = V.findOne(this._selector);
        if (t.length) {
          const i = t.find((e) => n !== e);
          if (((e = i ? ie.getInstance(i) : null), e && e._isTransitioning))
            return;
        }
        if (H.trigger(this._element, "show.bs.collapse").defaultPrevented)
          return;
        t.forEach((t) => {
          n !== t && ie.getOrCreateInstance(t, { toggle: !1 }).hide(),
            e || q.set(t, "bs.collapse", null);
        });
        const i = this._getDimension();
        this._element.classList.remove("collapse"),
          this._element.classList.add("collapsing"),
          (this._element.style[i] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          (this._isTransitioning = !0);
        const o = "scroll" + (i[0].toUpperCase() + i.slice(1));
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove("collapsing"),
              this._element.classList.add("collapse", "show"),
              (this._element.style[i] = ""),
              H.trigger(this._element, "shown.bs.collapse");
          },
          this._element,
          !0
        ),
          (this._element.style[i] = this._element[o] + "px");
      }
      hide() {
        if (this._isTransitioning || !this._isShown()) return;
        if (H.trigger(this._element, "hide.bs.collapse").defaultPrevented)
          return;
        const e = this._getDimension();
        (this._element.style[e] =
          this._element.getBoundingClientRect()[e] + "px"),
          h(this._element),
          this._element.classList.add("collapsing"),
          this._element.classList.remove("collapse", "show");
        const t = this._triggerArray.length;
        for (let e = 0; e < t; e++) {
          const t = this._triggerArray[e],
            n = o(t);
          n && !this._isShown(n) && this._addAriaAndCollapsedClass([t], !1);
        }
        (this._isTransitioning = !0),
          (this._element.style[e] = ""),
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove("collapsing"),
                this._element.classList.add("collapse"),
                H.trigger(this._element, "hidden.bs.collapse");
            },
            this._element,
            !0
          );
      }
      _isShown(e = this._element) {
        return e.classList.contains("show");
      }
      _getConfig(e) {
        return (
          ((e = { ...te, ...U.getDataAttributes(this._element), ...e }).toggle =
            Boolean(e.toggle)),
          (e.parent = a(e.parent)),
          l("collapse", e, ne),
          e
        );
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal")
          ? "width"
          : "height";
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const e = V.find(".collapse .collapse", this._config.parent);
        V.find('[data-bs-toggle="collapse"]', this._config.parent)
          .filter((t) => !e.includes(t))
          .forEach((e) => {
            const t = o(e);
            t && this._addAriaAndCollapsedClass([e], this._isShown(t));
          });
      }
      _addAriaAndCollapsedClass(e, t) {
        e.length &&
          e.forEach((e) => {
            t ? e.classList.remove("collapsed") : e.classList.add("collapsed"),
              e.setAttribute("aria-expanded", t);
          });
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = {};
          "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
          const n = ie.getOrCreateInstance(this, t);
          if ("string" == typeof e) {
            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
            n[e]();
          }
        });
      }
    }
    H.on(
      document,
      "click.bs.collapse.data-api",
      '[data-bs-toggle="collapse"]',
      function (e) {
        ("A" === e.target.tagName ||
          (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
          e.preventDefault();
        const t = i(this);
        V.find(t).forEach((e) => {
          ie.getOrCreateInstance(e, { toggle: !1 }).toggle();
        });
      }
    ),
      v(ie);
    const oe = new RegExp("ArrowUp|ArrowDown|Escape"),
      re = m() ? "top-end" : "top-start",
      se = m() ? "top-start" : "top-end",
      ae = m() ? "bottom-end" : "bottom-start",
      le = m() ? "bottom-start" : "bottom-end",
      ce = m() ? "left-start" : "right-start",
      ue = m() ? "right-start" : "left-start",
      de = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0,
      },
      fe = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)",
      };
    class he extends R {
      constructor(e, t) {
        super(e),
          (this._popper = null),
          (this._config = this._getConfig(t)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar());
      }
      static get Default() {
        return de;
      }
      static get DefaultType() {
        return fe;
      }
      static get NAME() {
        return "dropdown";
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (u(this._element) || this._isShown(this._menu)) return;
        const e = { relatedTarget: this._element };
        if (H.trigger(this._element, "show.bs.dropdown", e).defaultPrevented)
          return;
        const t = he.getParentFromElement(this._element);
        this._inNavbar
          ? U.setDataAttribute(this._menu, "popper", "none")
          : this._createPopper(t),
          "ontouchstart" in document.documentElement &&
            !t.closest(".navbar-nav") &&
            []
              .concat(...document.body.children)
              .forEach((e) => H.on(e, "mouseover", f)),
          this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.add("show"),
          this._element.classList.add("show"),
          H.trigger(this._element, "shown.bs.dropdown", e);
      }
      hide() {
        if (u(this._element) || !this._isShown(this._menu)) return;
        const e = { relatedTarget: this._element };
        this._completeHide(e);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _completeHide(e) {
        H.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented ||
          ("ontouchstart" in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach((e) => H.off(e, "mouseover", f)),
          this._popper && this._popper.destroy(),
          this._menu.classList.remove("show"),
          this._element.classList.remove("show"),
          this._element.setAttribute("aria-expanded", "false"),
          U.removeDataAttribute(this._menu, "popper"),
          H.trigger(this._element, "hidden.bs.dropdown", e));
      }
      _getConfig(e) {
        if (
          ((e = {
            ...this.constructor.Default,
            ...U.getDataAttributes(this._element),
            ...e,
          }),
          l("dropdown", e, this.constructor.DefaultType),
          "object" == typeof e.reference &&
            !s(e.reference) &&
            "function" != typeof e.reference.getBoundingClientRect)
        )
          throw new TypeError(
            "dropdown".toUpperCase() +
              ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
          );
        return e;
      }
      _createPopper(e) {
        if (void 0 === t)
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)"
          );
        let n = this._element;
        "parent" === this._config.reference
          ? (n = e)
          : s(this._config.reference)
          ? (n = a(this._config.reference))
          : "object" == typeof this._config.reference &&
            (n = this._config.reference);
        const i = this._getPopperConfig(),
          o = i.modifiers.find(
            (e) => "applyStyles" === e.name && !1 === e.enabled
          );
        (this._popper = t.createPopper(n, this._menu, i)),
          o && U.setDataAttribute(this._menu, "popper", "static");
      }
      _isShown(e = this._element) {
        return e.classList.contains("show");
      }
      _getMenuElement() {
        return V.next(this._element, ".dropdown-menu")[0];
      }
      _getPlacement() {
        const e = this._element.parentNode;
        if (e.classList.contains("dropend")) return ce;
        if (e.classList.contains("dropstart")) return ue;
        const t =
          "end" ===
          getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return e.classList.contains("dropup") ? (t ? se : re) : t ? le : ae;
      }
      _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
      _getOffset() {
        const { offset: e } = this._config;
        return "string" == typeof e
          ? e.split(",").map((e) => Number.parseInt(e, 10))
          : "function" == typeof e
          ? (t) => e(t, this._element)
          : e;
      }
      _getPopperConfig() {
        const e = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          "static" === this._config.display &&
            (e.modifiers = [{ name: "applyStyles", enabled: !1 }]),
          {
            ...e,
            ...("function" == typeof this._config.popperConfig
              ? this._config.popperConfig(e)
              : this._config.popperConfig),
          }
        );
      }
      _selectMenuItem({ key: e, target: t }) {
        const n = V.find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        ).filter(c);
        n.length && _(n, t, "ArrowDown" === e, !n.includes(t)).focus();
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = he.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
      static clearMenus(e) {
        if (e && (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)))
          return;
        const t = V.find('[data-bs-toggle="dropdown"]');
        for (let n = 0, i = t.length; n < i; n++) {
          const i = he.getInstance(t[n]);
          if (!i || !1 === i._config.autoClose) continue;
          if (!i._isShown()) continue;
          const o = { relatedTarget: i._element };
          if (e) {
            const t = e.composedPath(),
              n = t.includes(i._menu);
            if (
              t.includes(i._element) ||
              ("inside" === i._config.autoClose && !n) ||
              ("outside" === i._config.autoClose && n)
            )
              continue;
            if (
              i._menu.contains(e.target) &&
              (("keyup" === e.type && "Tab" === e.key) ||
                /input|select|option|textarea|form/i.test(e.target.tagName))
            )
              continue;
            "click" === e.type && (o.clickEvent = e);
          }
          i._completeHide(o);
        }
      }
      static getParentFromElement(e) {
        return o(e) || e.parentNode;
      }
      static dataApiKeydownHandler(e) {
        if (
          /input|textarea/i.test(e.target.tagName)
            ? "Space" === e.key ||
              ("Escape" !== e.key &&
                (("ArrowDown" !== e.key && "ArrowUp" !== e.key) ||
                  e.target.closest(".dropdown-menu")))
            : !oe.test(e.key)
        )
          return;
        const t = this.classList.contains("show");
        if (!t && "Escape" === e.key) return;
        if ((e.preventDefault(), e.stopPropagation(), u(this))) return;
        const n = this.matches('[data-bs-toggle="dropdown"]')
            ? this
            : V.prev(this, '[data-bs-toggle="dropdown"]')[0],
          i = he.getOrCreateInstance(n);
        if ("Escape" !== e.key)
          return "ArrowUp" === e.key || "ArrowDown" === e.key
            ? (t || i.show(), void i._selectMenuItem(e))
            : void ((t && "Space" !== e.key) || he.clearMenus());
        i.hide();
      }
    }
    H.on(
      document,
      "keydown.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      he.dataApiKeydownHandler
    ),
      H.on(
        document,
        "keydown.bs.dropdown.data-api",
        ".dropdown-menu",
        he.dataApiKeydownHandler
      ),
      H.on(document, "click.bs.dropdown.data-api", he.clearMenus),
      H.on(document, "keyup.bs.dropdown.data-api", he.clearMenus),
      H.on(
        document,
        "click.bs.dropdown.data-api",
        '[data-bs-toggle="dropdown"]',
        function (e) {
          e.preventDefault(), he.getOrCreateInstance(this).toggle();
        }
      ),
      v(he);
    class pe {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const e = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - e);
      }
      hide() {
        const e = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(
            this._element,
            "paddingRight",
            (t) => t + e
          ),
          this._setElementAttributes(
            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            "paddingRight",
            (t) => t + e
          ),
          this._setElementAttributes(
            ".sticky-top",
            "marginRight",
            (t) => t - e
          );
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(e, t, n) {
        const i = this.getWidth();
        this._applyManipulationCallback(e, (e) => {
          if (e !== this._element && window.innerWidth > e.clientWidth + i)
            return;
          this._saveInitialAttribute(e, t);
          const o = window.getComputedStyle(e)[t];
          e.style[t] = n(Number.parseFloat(o)) + "px";
        });
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, "paddingRight"),
          this._resetElementAttributes(
            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            "paddingRight"
          ),
          this._resetElementAttributes(".sticky-top", "marginRight");
      }
      _saveInitialAttribute(e, t) {
        const n = e.style[t];
        n && U.setDataAttribute(e, t, n);
      }
      _resetElementAttributes(e, t) {
        this._applyManipulationCallback(e, (e) => {
          const n = U.getDataAttribute(e, t);
          void 0 === n
            ? e.style.removeProperty(t)
            : (U.removeDataAttribute(e, t), (e.style[t] = n));
        });
      }
      _applyManipulationCallback(e, t) {
        s(e) ? t(e) : V.find(e, this._element).forEach(t);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
    }
    const ge = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null,
      },
      me = {
        className: "string",
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)",
      };
    class ve {
      constructor(e) {
        (this._config = this._getConfig(e)),
          (this._isAppended = !1),
          (this._element = null);
      }
      show(e) {
        this._config.isVisible
          ? (this._append(),
            this._config.isAnimated && h(this._getElement()),
            this._getElement().classList.add("show"),
            this._emulateAnimation(() => {
              y(e);
            }))
          : y(e);
      }
      hide(e) {
        this._config.isVisible
          ? (this._getElement().classList.remove("show"),
            this._emulateAnimation(() => {
              this.dispose(), y(e);
            }))
          : y(e);
      }
      _getElement() {
        if (!this._element) {
          const e = document.createElement("div");
          (e.className = this._config.className),
            this._config.isAnimated && e.classList.add("fade"),
            (this._element = e);
        }
        return this._element;
      }
      _getConfig(e) {
        return (
          ((e = { ...ge, ...("object" == typeof e ? e : {}) }).rootElement = a(
            e.rootElement
          )),
          l("backdrop", e, me),
          e
        );
      }
      _append() {
        this._isAppended ||
          (this._config.rootElement.append(this._getElement()),
          H.on(this._getElement(), "mousedown.bs.backdrop", () => {
            y(this._config.clickCallback);
          }),
          (this._isAppended = !0));
      }
      dispose() {
        this._isAppended &&
          (H.off(this._element, "mousedown.bs.backdrop"),
          this._element.remove(),
          (this._isAppended = !1));
      }
      _emulateAnimation(e) {
        b(e, this._getElement(), this._config.isAnimated);
      }
    }
    const ye = { trapElement: null, autofocus: !0 },
      be = { trapElement: "element", autofocus: "boolean" };
    class _e {
      constructor(e) {
        (this._config = this._getConfig(e)),
          (this._isActive = !1),
          (this._lastTabNavDirection = null);
      }
      activate() {
        const { trapElement: e, autofocus: t } = this._config;
        this._isActive ||
          (t && e.focus(),
          H.off(document, ".bs.focustrap"),
          H.on(document, "focusin.bs.focustrap", (e) => this._handleFocusin(e)),
          H.on(document, "keydown.tab.bs.focustrap", (e) =>
            this._handleKeydown(e)
          ),
          (this._isActive = !0));
      }
      deactivate() {
        this._isActive &&
          ((this._isActive = !1), H.off(document, ".bs.focustrap"));
      }
      _handleFocusin(e) {
        const { target: t } = e,
          { trapElement: n } = this._config;
        if (t === document || t === n || n.contains(t)) return;
        const i = V.focusableChildren(n);
        0 === i.length
          ? n.focus()
          : "backward" === this._lastTabNavDirection
          ? i[i.length - 1].focus()
          : i[0].focus();
      }
      _handleKeydown(e) {
        "Tab" === e.key &&
          (this._lastTabNavDirection = e.shiftKey ? "backward" : "forward");
      }
      _getConfig(e) {
        return (
          (e = { ...ye, ...("object" == typeof e ? e : {}) }),
          l("focustrap", e, be),
          e
        );
      }
    }
    const we = { backdrop: !0, keyboard: !0, focus: !0 },
      xe = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
      };
    class Ee extends R {
      constructor(e, t) {
        super(e),
          (this._config = this._getConfig(t)),
          (this._dialog = V.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new pe());
      }
      static get Default() {
        return we;
      }
      static get NAME() {
        return "modal";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          this._isTransitioning ||
          H.trigger(this._element, "show.bs.modal", { relatedTarget: e })
            .defaultPrevented ||
          ((this._isShown = !0),
          this._isAnimated() && (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add("modal-open"),
          this._adjustDialog(),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          H.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
            H.one(this._element, "mouseup.dismiss.bs.modal", (e) => {
              e.target === this._element && (this._ignoreBackdropClick = !0);
            });
          }),
          this._showBackdrop(() => this._showElement(e)));
      }
      hide() {
        if (!this._isShown || this._isTransitioning) return;
        if (H.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;
        const e = this._isAnimated();
        e && (this._isTransitioning = !0),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          this._focustrap.deactivate(),
          this._element.classList.remove("show"),
          H.off(this._element, "click.dismiss.bs.modal"),
          H.off(this._dialog, "mousedown.dismiss.bs.modal"),
          this._queueCallback(() => this._hideModal(), this._element, e);
      }
      dispose() {
        [window, this._dialog].forEach((e) => H.off(e, ".bs.modal")),
          this._backdrop.dispose(),
          this._focustrap.deactivate(),
          super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new ve({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated(),
        });
      }
      _initializeFocusTrap() {
        return new _e({ trapElement: this._element });
      }
      _getConfig(e) {
        return (
          (e = {
            ...we,
            ...U.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          l("modal", e, xe),
          e
        );
      }
      _showElement(e) {
        const t = this._isAnimated(),
          n = V.findOne(".modal-body", this._dialog);
        (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
          document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0),
          n && (n.scrollTop = 0),
          t && h(this._element),
          this._element.classList.add("show"),
          this._queueCallback(
            () => {
              this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                H.trigger(this._element, "shown.bs.modal", {
                  relatedTarget: e,
                });
            },
            this._dialog,
            t
          );
      }
      _setEscapeEvent() {
        this._isShown
          ? H.on(this._element, "keydown.dismiss.bs.modal", (e) => {
              this._config.keyboard && "Escape" === e.key
                ? (e.preventDefault(), this.hide())
                : this._config.keyboard ||
                  "Escape" !== e.key ||
                  this._triggerBackdropTransition();
            })
          : H.off(this._element, "keydown.dismiss.bs.modal");
      }
      _setResizeEvent() {
        this._isShown
          ? H.on(window, "resize.bs.modal", () => this._adjustDialog())
          : H.off(window, "resize.bs.modal");
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove("modal-open"),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              H.trigger(this._element, "hidden.bs.modal");
          });
      }
      _showBackdrop(e) {
        H.on(this._element, "click.dismiss.bs.modal", (e) => {
          this._ignoreBackdropClick
            ? (this._ignoreBackdropClick = !1)
            : e.target === e.currentTarget &&
              (!0 === this._config.backdrop
                ? this.hide()
                : "static" === this._config.backdrop &&
                  this._triggerBackdropTransition());
        }),
          this._backdrop.show(e);
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
          return;
        const { classList: e, scrollHeight: t, style: n } = this._element,
          i = t > document.documentElement.clientHeight;
        (!i && "hidden" === n.overflowY) ||
          e.contains("modal-static") ||
          (i || (n.overflowY = "hidden"),
          e.add("modal-static"),
          this._queueCallback(() => {
            e.remove("modal-static"),
              i ||
                this._queueCallback(() => {
                  n.overflowY = "";
                }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      _adjustDialog() {
        const e =
            this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._scrollBar.getWidth(),
          n = t > 0;
        ((!n && e && !m()) || (n && !e && m())) &&
          (this._element.style.paddingLeft = t + "px"),
          ((n && !e && !m()) || (!n && e && m())) &&
            (this._element.style.paddingRight = t + "px");
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      static jQueryInterface(e, t) {
        return this.each(function () {
          const n = Ee.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
            n[e](t);
          }
        });
      }
    }
    H.on(
      document,
      "click.bs.modal.data-api",
      '[data-bs-toggle="modal"]',
      function (e) {
        const t = o(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          H.one(t, "show.bs.modal", (e) => {
            e.defaultPrevented ||
              H.one(t, "hidden.bs.modal", () => {
                c(this) && this.focus();
              });
          });
        const n = V.findOne(".modal.show");
        n && Ee.getInstance(n).hide(), Ee.getOrCreateInstance(t).toggle(this);
      }
    ),
      B(Ee),
      v(Ee);
    const Te = { backdrop: !0, keyboard: !0, scroll: !1 },
      Ce = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
    class Ae extends R {
      constructor(e, t) {
        super(e),
          (this._config = this._getConfig(t)),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          this._addEventListeners();
      }
      static get NAME() {
        return "offcanvas";
      }
      static get Default() {
        return Te;
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          H.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e })
            .defaultPrevented ||
          ((this._isShown = !0),
          (this._element.style.visibility = "visible"),
          this._backdrop.show(),
          this._config.scroll || new pe().hide(),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add("show"),
          this._queueCallback(
            () => {
              this._config.scroll || this._focustrap.activate(),
                H.trigger(this._element, "shown.bs.offcanvas", {
                  relatedTarget: e,
                });
            },
            this._element,
            !0
          ));
      }
      hide() {
        this._isShown &&
          (H.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
            (this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.remove("show"),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.setAttribute("aria-hidden", !0),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  (this._element.style.visibility = "hidden"),
                  this._config.scroll || new pe().reset(),
                  H.trigger(this._element, "hidden.bs.offcanvas");
              },
              this._element,
              !0
            )));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _getConfig(e) {
        return (
          (e = {
            ...Te,
            ...U.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          l("offcanvas", e, Ce),
          e
        );
      }
      _initializeBackDrop() {
        return new ve({
          className: "offcanvas-backdrop",
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: () => this.hide(),
        });
      }
      _initializeFocusTrap() {
        return new _e({ trapElement: this._element });
      }
      _addEventListeners() {
        H.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
          this._config.keyboard && "Escape" === e.key && this.hide();
        });
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ae.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    H.on(
      document,
      "click.bs.offcanvas.data-api",
      '[data-bs-toggle="offcanvas"]',
      function (e) {
        const t = o(this);
        if (
          (["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this))
        )
          return;
        H.one(t, "hidden.bs.offcanvas", () => {
          c(this) && this.focus();
        });
        const n = V.findOne(".offcanvas.show");
        n && n !== t && Ae.getInstance(n).hide(),
          Ae.getOrCreateInstance(t).toggle(this);
      }
    ),
      H.on(window, "load.bs.offcanvas.data-api", () =>
        V.find(".offcanvas.show").forEach((e) =>
          Ae.getOrCreateInstance(e).show()
        )
      ),
      B(Ae),
      v(Ae);
    const ke = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      Se = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      Ne =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      De = (e, t) => {
        const n = e.nodeName.toLowerCase();
        if (t.includes(n))
          return (
            !ke.has(n) || Boolean(Se.test(e.nodeValue) || Ne.test(e.nodeValue))
          );
        const i = t.filter((e) => e instanceof RegExp);
        for (let e = 0, t = i.length; e < t; e++) if (i[e].test(n)) return !0;
        return !1;
      };
    function Le(e, t, n) {
      if (!e.length) return e;
      if (n && "function" == typeof n) return n(e);
      const i = new window.DOMParser().parseFromString(e, "text/html"),
        o = Object.keys(t),
        r = [].concat(...i.body.querySelectorAll("*"));
      for (let e = 0, n = r.length; e < n; e++) {
        const n = r[e],
          i = n.nodeName.toLowerCase();
        if (!o.includes(i)) {
          n.remove();
          continue;
        }
        const s = [].concat(...n.attributes),
          a = [].concat(t["*"] || [], t[i] || []);
        s.forEach((e) => {
          De(e, a) || n.removeAttribute(e.nodeName);
        });
      }
      return i.body.innerHTML;
    }
    const Oe = new Set(["sanitize", "allowList", "sanitizeFn"]),
      je = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)",
      },
      Ie = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: m() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: m() ? "right" : "left",
      },
      Pe = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        popperConfig: null,
      },
      He = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip",
      };
    class Me extends R {
      constructor(e, n) {
        if (void 0 === t)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(e),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._config = this._getConfig(n)),
          (this.tip = null),
          this._setListeners();
      }
      static get Default() {
        return Pe;
      }
      static get NAME() {
        return "tooltip";
      }
      static get Event() {
        return He;
      }
      static get DefaultType() {
        return je;
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle(e) {
        if (this._isEnabled)
          if (e) {
            const t = this._initializeOnDelegatedTarget(e);
            (t._activeTrigger.click = !t._activeTrigger.click),
              t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
          } else {
            if (this.getTipElement().classList.contains("show"))
              return void this._leave(null, this);
            this._enter(null, this);
          }
      }
      dispose() {
        clearTimeout(this._timeout),
          H.off(
            this._element.closest(".modal"),
            "hide.bs.modal",
            this._hideModalHandler
          ),
          this.tip && this.tip.remove(),
          this._disposePopper(),
          super.dispose();
      }
      show() {
        if ("none" === this._element.style.display)
          throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        const e = H.trigger(this._element, this.constructor.Event.SHOW),
          n = d(this._element),
          i =
            null === n
              ? this._element.ownerDocument.documentElement.contains(
                  this._element
                )
              : n.contains(this._element);
        if (e.defaultPrevented || !i) return;
        "tooltip" === this.constructor.NAME &&
          this.tip &&
          this.getTitle() !==
            this.tip.querySelector(".tooltip-inner").innerHTML &&
          (this._disposePopper(), this.tip.remove(), (this.tip = null));
        const o = this.getTipElement(),
          r = ((e) => {
            do {
              e += Math.floor(1e6 * Math.random());
            } while (document.getElementById(e));
            return e;
          })(this.constructor.NAME);
        o.setAttribute("id", r),
          this._element.setAttribute("aria-describedby", r),
          this._config.animation && o.classList.add("fade");
        const s =
            "function" == typeof this._config.placement
              ? this._config.placement.call(this, o, this._element)
              : this._config.placement,
          a = this._getAttachment(s);
        this._addAttachmentClass(a);
        const { container: l } = this._config;
        q.set(o, this.constructor.DATA_KEY, this),
          this._element.ownerDocument.documentElement.contains(this.tip) ||
            (l.append(o),
            H.trigger(this._element, this.constructor.Event.INSERTED)),
          this._popper
            ? this._popper.update()
            : (this._popper = t.createPopper(
                this._element,
                o,
                this._getPopperConfig(a)
              )),
          o.classList.add("show");
        const c = this._resolvePossibleFunction(this._config.customClass);
        c && o.classList.add(...c.split(" ")),
          "ontouchstart" in document.documentElement &&
            [].concat(...document.body.children).forEach((e) => {
              H.on(e, "mouseover", f);
            });
        const u = this.tip.classList.contains("fade");
        this._queueCallback(
          () => {
            const e = this._hoverState;
            (this._hoverState = null),
              H.trigger(this._element, this.constructor.Event.SHOWN),
              "out" === e && this._leave(null, this);
          },
          this.tip,
          u
        );
      }
      hide() {
        if (!this._popper) return;
        const e = this.getTipElement();
        if (
          H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
        )
          return;
        e.classList.remove("show"),
          "ontouchstart" in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach((e) => H.off(e, "mouseover", f)),
          (this._activeTrigger.click = !1),
          (this._activeTrigger.focus = !1),
          (this._activeTrigger.hover = !1);
        const t = this.tip.classList.contains("fade");
        this._queueCallback(
          () => {
            this._isWithActiveTrigger() ||
              ("show" !== this._hoverState && e.remove(),
              this._cleanTipClass(),
              this._element.removeAttribute("aria-describedby"),
              H.trigger(this._element, this.constructor.Event.HIDDEN),
              this._disposePopper());
          },
          this.tip,
          t
        ),
          (this._hoverState = "");
      }
      update() {
        null !== this._popper && this._popper.update();
      }
      isWithContent() {
        return Boolean(this.getTitle());
      }
      getTipElement() {
        if (this.tip) return this.tip;
        const e = document.createElement("div");
        e.innerHTML = this._config.template;
        const t = e.children[0];
        return (
          this.setContent(t),
          t.classList.remove("fade", "show"),
          (this.tip = t),
          this.tip
        );
      }
      setContent(e) {
        this._sanitizeAndSetContent(e, this.getTitle(), ".tooltip-inner");
      }
      _sanitizeAndSetContent(e, t, n) {
        const i = V.findOne(n, e);
        t || !i ? this.setElementContent(i, t) : i.remove();
      }
      setElementContent(e, t) {
        if (null !== e)
          return s(t)
            ? ((t = a(t)),
              void (this._config.html
                ? t.parentNode !== e && ((e.innerHTML = ""), e.append(t))
                : (e.textContent = t.textContent)))
            : void (this._config.html
                ? (this._config.sanitize &&
                    (t = Le(
                      t,
                      this._config.allowList,
                      this._config.sanitizeFn
                    )),
                  (e.innerHTML = t))
                : (e.textContent = t));
      }
      getTitle() {
        const e =
          this._element.getAttribute("data-bs-original-title") ||
          this._config.title;
        return this._resolvePossibleFunction(e);
      }
      updateAttachment(e) {
        return "right" === e ? "end" : "left" === e ? "start" : e;
      }
      _initializeOnDelegatedTarget(e, t) {
        return (
          t ||
          this.constructor.getOrCreateInstance(
            e.delegateTarget,
            this._getDelegateConfig()
          )
        );
      }
      _getOffset() {
        const { offset: e } = this._config;
        return "string" == typeof e
          ? e.split(",").map((e) => Number.parseInt(e, 10))
          : "function" == typeof e
          ? (t) => e(t, this._element)
          : e;
      }
      _resolvePossibleFunction(e) {
        return "function" == typeof e ? e.call(this._element) : e;
      }
      _getPopperConfig(e) {
        const t = {
          placement: e,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "onChange",
              enabled: !0,
              phase: "afterWrite",
              fn: (e) => this._handlePopperPlacementChange(e),
            },
          ],
          onFirstUpdate: (e) => {
            e.options.placement !== e.placement &&
              this._handlePopperPlacementChange(e);
          },
        };
        return {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        };
      }
      _addAttachmentClass(e) {
        this.getTipElement().classList.add(
          `${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`
        );
      }
      _getAttachment(e) {
        return Ie[e.toUpperCase()];
      }
      _setListeners() {
        this._config.trigger.split(" ").forEach((e) => {
          if ("click" === e)
            H.on(
              this._element,
              this.constructor.Event.CLICK,
              this._config.selector,
              (e) => this.toggle(e)
            );
          else if ("manual" !== e) {
            const t =
                "hover" === e
                  ? this.constructor.Event.MOUSEENTER
                  : this.constructor.Event.FOCUSIN,
              n =
                "hover" === e
                  ? this.constructor.Event.MOUSELEAVE
                  : this.constructor.Event.FOCUSOUT;
            H.on(this._element, t, this._config.selector, (e) =>
              this._enter(e)
            ),
              H.on(this._element, n, this._config.selector, (e) =>
                this._leave(e)
              );
          }
        }),
          (this._hideModalHandler = () => {
            this._element && this.hide();
          }),
          H.on(
            this._element.closest(".modal"),
            "hide.bs.modal",
            this._hideModalHandler
          ),
          this._config.selector
            ? (this._config = {
                ...this._config,
                trigger: "manual",
                selector: "",
              })
            : this._fixTitle();
      }
      _fixTitle() {
        const e = this._element.getAttribute("title"),
          t = typeof this._element.getAttribute("data-bs-original-title");
        (e || "string" !== t) &&
          (this._element.setAttribute("data-bs-original-title", e || ""),
          !e ||
            this._element.getAttribute("aria-label") ||
            this._element.textContent ||
            this._element.setAttribute("aria-label", e),
          this._element.setAttribute("title", ""));
      }
      _enter(e, t) {
        (t = this._initializeOnDelegatedTarget(e, t)),
          e &&
            (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0),
          t.getTipElement().classList.contains("show") ||
          "show" === t._hoverState
            ? (t._hoverState = "show")
            : (clearTimeout(t._timeout),
              (t._hoverState = "show"),
              t._config.delay && t._config.delay.show
                ? (t._timeout = setTimeout(() => {
                    "show" === t._hoverState && t.show();
                  }, t._config.delay.show))
                : t.show());
      }
      _leave(e, t) {
        (t = this._initializeOnDelegatedTarget(e, t)),
          e &&
            (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] =
              t._element.contains(e.relatedTarget)),
          t._isWithActiveTrigger() ||
            (clearTimeout(t._timeout),
            (t._hoverState = "out"),
            t._config.delay && t._config.delay.hide
              ? (t._timeout = setTimeout(() => {
                  "out" === t._hoverState && t.hide();
                }, t._config.delay.hide))
              : t.hide());
      }
      _isWithActiveTrigger() {
        for (const e in this._activeTrigger)
          if (this._activeTrigger[e]) return !0;
        return !1;
      }
      _getConfig(e) {
        const t = U.getDataAttributes(this._element);
        return (
          Object.keys(t).forEach((e) => {
            Oe.has(e) && delete t[e];
          }),
          ((e = {
            ...this.constructor.Default,
            ...t,
            ...("object" == typeof e && e ? e : {}),
          }).container = !1 === e.container ? document.body : a(e.container)),
          "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          "number" == typeof e.title && (e.title = e.title.toString()),
          "number" == typeof e.content && (e.content = e.content.toString()),
          l("tooltip", e, this.constructor.DefaultType),
          e.sanitize &&
            (e.template = Le(e.template, e.allowList, e.sanitizeFn)),
          e
        );
      }
      _getDelegateConfig() {
        const e = {};
        for (const t in this._config)
          this.constructor.Default[t] !== this._config[t] &&
            (e[t] = this._config[t]);
        return e;
      }
      _cleanTipClass() {
        const e = this.getTipElement(),
          t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
          n = e.getAttribute("class").match(t);
        null !== n &&
          n.length > 0 &&
          n.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
      }
      _getBasicClassPrefix() {
        return "bs-tooltip";
      }
      _handlePopperPlacementChange(e) {
        const { state: t } = e;
        t &&
          ((this.tip = t.elements.popper),
          this._cleanTipClass(),
          this._addAttachmentClass(this._getAttachment(t.placement)));
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null));
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Me.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    v(Me);
    const qe = {
        ...Me.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      },
      Re = { ...Me.DefaultType, content: "(string|element|function)" },
      Be = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover",
      };
    class Fe extends Me {
      static get Default() {
        return qe;
      }
      static get NAME() {
        return "popover";
      }
      static get Event() {
        return Be;
      }
      static get DefaultType() {
        return Re;
      }
      isWithContent() {
        return this.getTitle() || this._getContent();
      }
      setContent(e) {
        this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"),
          this._sanitizeAndSetContent(e, this._getContent(), ".popover-body");
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      _getBasicClassPrefix() {
        return "bs-popover";
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Fe.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    v(Fe);
    const We = { offset: 10, method: "auto", target: "" },
      $e = { offset: "number", method: "string", target: "(string|element)" },
      ze = ".nav-link, .list-group-item, .dropdown-item";
    class Ue extends R {
      constructor(e, t) {
        super(e),
          (this._scrollElement =
            "BODY" === this._element.tagName ? window : this._element),
          (this._config = this._getConfig(t)),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          H.on(this._scrollElement, "scroll.bs.scrollspy", () =>
            this._process()
          ),
          this.refresh(),
          this._process();
      }
      static get Default() {
        return We;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        const e =
            this._scrollElement === this._scrollElement.window
              ? "offset"
              : "position",
          t = "auto" === this._config.method ? e : this._config.method,
          n = "position" === t ? this._getScrollTop() : 0;
        (this._offsets = []),
          (this._targets = []),
          (this._scrollHeight = this._getScrollHeight()),
          V.find(ze, this._config.target)
            .map((e) => {
              const o = i(e),
                r = o ? V.findOne(o) : null;
              if (r) {
                const e = r.getBoundingClientRect();
                if (e.width || e.height) return [U[t](r).top + n, o];
              }
              return null;
            })
            .filter((e) => e)
            .sort((e, t) => e[0] - t[0])
            .forEach((e) => {
              this._offsets.push(e[0]), this._targets.push(e[1]);
            });
      }
      dispose() {
        H.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
      }
      _getConfig(e) {
        return (
          ((e = {
            ...We,
            ...U.getDataAttributes(this._element),
            ...("object" == typeof e && e ? e : {}),
          }).target = a(e.target) || document.documentElement),
          l("scrollspy", e, $e),
          e
        );
      }
      _getScrollTop() {
        return this._scrollElement === window
          ? this._scrollElement.pageYOffset
          : this._scrollElement.scrollTop;
      }
      _getScrollHeight() {
        return (
          this._scrollElement.scrollHeight ||
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }
      _getOffsetHeight() {
        return this._scrollElement === window
          ? window.innerHeight
          : this._scrollElement.getBoundingClientRect().height;
      }
      _process() {
        const e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();
        if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
          const e = this._targets[this._targets.length - 1];
          this._activeTarget !== e && this._activate(e);
        } else {
          if (
            this._activeTarget &&
            e < this._offsets[0] &&
            this._offsets[0] > 0
          )
            return (this._activeTarget = null), void this._clear();
          for (let t = this._offsets.length; t--; )
            this._activeTarget !== this._targets[t] &&
              e >= this._offsets[t] &&
              (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) &&
              this._activate(this._targets[t]);
        }
      }
      _activate(e) {
        (this._activeTarget = e), this._clear();
        const t = ze
            .split(",")
            .map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
          n = V.findOne(t.join(","), this._config.target);
        n.classList.add("active"),
          n.classList.contains("dropdown-item")
            ? V.findOne(
                ".dropdown-toggle",
                n.closest(".dropdown")
              ).classList.add("active")
            : V.parents(n, ".nav, .list-group").forEach((e) => {
                V.prev(e, ".nav-link, .list-group-item").forEach((e) =>
                  e.classList.add("active")
                ),
                  V.prev(e, ".nav-item").forEach((e) => {
                    V.children(e, ".nav-link").forEach((e) =>
                      e.classList.add("active")
                    );
                  });
              }),
          H.trigger(this._scrollElement, "activate.bs.scrollspy", {
            relatedTarget: e,
          });
      }
      _clear() {
        V.find(ze, this._config.target)
          .filter((e) => e.classList.contains("active"))
          .forEach((e) => e.classList.remove("active"));
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ue.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    H.on(window, "load.bs.scrollspy.data-api", () => {
      V.find('[data-bs-spy="scroll"]').forEach((e) => new Ue(e));
    }),
      v(Ue);
    class Ve extends R {
      static get NAME() {
        return "tab";
      }
      show() {
        if (
          this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
          this._element.classList.contains("active")
        )
          return;
        let e;
        const t = o(this._element),
          n = this._element.closest(".nav, .list-group");
        if (n) {
          const t =
            "UL" === n.nodeName || "OL" === n.nodeName
              ? ":scope > li > .active"
              : ".active";
          (e = V.find(t, n)), (e = e[e.length - 1]);
        }
        const i = e
          ? H.trigger(e, "hide.bs.tab", { relatedTarget: this._element })
          : null;
        if (
          H.trigger(this._element, "show.bs.tab", { relatedTarget: e })
            .defaultPrevented ||
          (null !== i && i.defaultPrevented)
        )
          return;
        this._activate(this._element, n);
        const r = () => {
          H.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }),
            H.trigger(this._element, "shown.bs.tab", { relatedTarget: e });
        };
        t ? this._activate(t, t.parentNode, r) : r();
      }
      _activate(e, t, n) {
        const i = (
            !t || ("UL" !== t.nodeName && "OL" !== t.nodeName)
              ? V.children(t, ".active")
              : V.find(":scope > li > .active", t)
          )[0],
          o = n && i && i.classList.contains("fade"),
          r = () => this._transitionComplete(e, i, n);
        i && o
          ? (i.classList.remove("show"), this._queueCallback(r, e, !0))
          : r();
      }
      _transitionComplete(e, t, n) {
        if (t) {
          t.classList.remove("active");
          const e = V.findOne(":scope > .dropdown-menu .active", t.parentNode);
          e && e.classList.remove("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !1);
        }
        e.classList.add("active"),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !0),
          h(e),
          e.classList.contains("fade") && e.classList.add("show");
        let i = e.parentNode;
        if (
          (i && "LI" === i.nodeName && (i = i.parentNode),
          i && i.classList.contains("dropdown-menu"))
        ) {
          const t = e.closest(".dropdown");
          t &&
            V.find(".dropdown-toggle", t).forEach((e) =>
              e.classList.add("active")
            ),
            e.setAttribute("aria-expanded", !0);
        }
        n && n();
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ve.getOrCreateInstance(this);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    H.on(
      document,
      "click.bs.tab.data-api",
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      function (e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          u(this) || Ve.getOrCreateInstance(this).show();
      }
    ),
      v(Ve);
    const Xe = { animation: "boolean", autohide: "boolean", delay: "number" },
      Ye = { animation: !0, autohide: !0, delay: 5e3 };
    class Ke extends R {
      constructor(e, t) {
        super(e),
          (this._config = this._getConfig(t)),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get DefaultType() {
        return Xe;
      }
      static get Default() {
        return Ye;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        H.trigger(this._element, "show.bs.toast").defaultPrevented ||
          (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove("hide"),
          h(this._element),
          this._element.classList.add("show"),
          this._element.classList.add("showing"),
          this._queueCallback(
            () => {
              this._element.classList.remove("showing"),
                H.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide();
            },
            this._element,
            this._config.animation
          ));
      }
      hide() {
        this._element.classList.contains("show") &&
          (H.trigger(this._element, "hide.bs.toast").defaultPrevented ||
            (this._element.classList.add("showing"),
            this._queueCallback(
              () => {
                this._element.classList.add("hide"),
                  this._element.classList.remove("showing"),
                  this._element.classList.remove("show"),
                  H.trigger(this._element, "hidden.bs.toast");
              },
              this._element,
              this._config.animation
            )));
      }
      dispose() {
        this._clearTimeout(),
          this._element.classList.contains("show") &&
            this._element.classList.remove("show"),
          super.dispose();
      }
      _getConfig(e) {
        return (
          (e = {
            ...Ye,
            ...U.getDataAttributes(this._element),
            ...("object" == typeof e && e ? e : {}),
          }),
          l("toast", e, this.constructor.DefaultType),
          e
        );
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(e, t) {
        switch (e.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = t;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = t;
        }
        if (t) return void this._clearTimeout();
        const n = e.relatedTarget;
        this._element === n ||
          this._element.contains(n) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        H.on(this._element, "mouseover.bs.toast", (e) =>
          this._onInteraction(e, !0)
        ),
          H.on(this._element, "mouseout.bs.toast", (e) =>
            this._onInteraction(e, !1)
          ),
          H.on(this._element, "focusin.bs.toast", (e) =>
            this._onInteraction(e, !0)
          ),
          H.on(this._element, "focusout.bs.toast", (e) =>
            this._onInteraction(e, !1)
          );
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ke.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    return (
      B(Ke),
      v(Ke),
      {
        Alert: F,
        Button: W,
        Carousel: ee,
        Collapse: ie,
        Dropdown: he,
        Modal: Ee,
        Offcanvas: Ae,
        Popover: Fe,
        ScrollSpy: Ue,
        Tab: Ve,
        Toast: Ke,
        Tooltip: Me,
      }
    );
  });
