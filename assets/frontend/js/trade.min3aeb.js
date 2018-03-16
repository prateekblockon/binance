function isArray(e) {
    return "[object Array]" === Object.prototype.toString.call(e)
}

function isBoolean(e) {
    return "boolean" == typeof e
}

function isDate(e) {
    return "[object Date]" === Object.prototype.toString.call(e)
}

function isDefined(e) {
    return void 0 !== e
}

function isFunction(e) {
    return "function" == typeof e
}

function isNull(e) {
    return null === e
}

function isNumber(e) {
    return "number" == typeof e
}

function isObject(e) {
    return null !== e && "object" == typeof e
}

function isString(e) {
    return "string" == typeof e
}

function isUndefined(e) {
    return void 0 === e
}

function convertToBoolean(e) {
    return isBoolean(e) ? e : null !== e && "" !== e && "false" !== e
}

function hasProperty(e, t) {
    return e.hasOwnProperty(t)
}

function isStringEmpty(e) {
    return isNull(e) || isUndefined(e) || isString(e) && 0 == e.length
}

function isStringNonempty(e) {
    return isString(e) && e.length > 0
}

function upperCaseFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function areEqual(e, t) {
    return angular.equals(e, t)
}

function min(e, t) {
    return e < t ? e : t
}

function max(e, t) {
    return e > t ? e : t
}

function beginsWith(e, t) {
    return isString(e) && 0 == e.lastIndexOf(t, 0)
}

function endsWith(e, t) {
    return isString(e) && -1 !== e.indexOf(t, e.length - t.length)
}

function copy(e, t) {
    return angular.copy(e, t)
}

function removeProperty(e, t) {
    delete e[t]
}

function removeProperties(e, t) {
    for (var n = 0; n < t.length; ++n) delete e[t[n]]
}

function forEach(e, t, n) {
    return angular.forEach(e, t, n)
}

function defineScalyrJsLibrary(e, t) {
    var n = [];
    if (t instanceof Array)
        for (var r = 0; r < t.length - 1; ++r) n.push(t[r]);
    return angular.module(e, n).factory(e, t)
}

function defineScalyrAngularModule(e, t) {
    return angular.module(e, t)
}

function isArray(e) {
    return "[object Array]" === Object.prototype.toString.call(e)
}

function isBoolean(e) {
    return "boolean" == typeof e
}

function isDate(e) {
    return "[object Date]" === Object.prototype.toString.call(e)
}

function isDefined(e) {
    return void 0 !== e
}

function isFunction(e) {
    return "function" == typeof e
}

function isNull(e) {
    return null === e
}

function isNumber(e) {
    return "number" == typeof e
}

function isObject(e) {
    return null !== e && "object" == typeof e
}

function isString(e) {
    return "string" == typeof e
}

function isUndefined(e) {
    return void 0 === e
}

function convertToBoolean(e) {
    return isBoolean(e) ? e : null !== e && "" !== e && "false" !== e
}

function hasProperty(e, t) {
    return e.hasOwnProperty(t)
}

function isStringEmpty(e) {
    return isNull(e) || isUndefined(e) || isString(e) && 0 == e.length
}

function isStringNonempty(e) {
    return isString(e) && e.length > 0
}

function upperCaseFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function areEqual(e, t) {
    return angular.equals(e, t)
}

function min(e, t) {
    return e < t ? e : t
}

function max(e, t) {
    return e > t ? e : t
}

function beginsWith(e, t) {
    return isString(e) && 0 == e.lastIndexOf(t, 0)
}

function endsWith(e, t) {
    return isString(e) && -1 !== e.indexOf(t, e.length - t.length)
}

function copy(e, t) {
    return angular.copy(e, t)
}

function removeProperty(e, t) {
    delete e[t]
}

function removeProperties(e, t) {
    for (var n = 0; n < t.length; ++n) delete e[t[n]]
}

function forEach(e, t, n) {
    return angular.forEach(e, t, n)
}

function defineScalyrJsLibrary(e, t) {
    var n = [];
    if (t instanceof Array)
        for (var r = 0; r < t.length - 1; ++r) n.push(t[r]);
    return angular.module(e, n).factory(e, t)
}

function defineScalyrAngularModule(e, t) {
    return angular.module(e, t)
}! function(e) {
    var t, n, r, o, i, s = (n = (t = e).backingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1, (window.devicePixelRatio || 1) / n);
    1 !== s && (! function(e, t) {
        for (var n in e) e.hasOwnProperty(n) && t(e[n], n)
    }({
        fillRect: "all",
        clearRect: "all",
        strokeRect: "all",
        moveTo: "all",
        lineTo: "all",
        arc: [0, 1, 2],
        arcTo: "all",
        bezierCurveTo: "all",
        isPointinPath: "all",
        isPointinStroke: "all",
        quadraticCurveTo: "all",
        rect: "all",
        translate: "all",
        createRadialGradient: "all",
        createLinearGradient: "all"
    }, function(t, n) {
        var r;
        e[n] = (r = e[n], function() {
            var e, n, o = Array.prototype.slice.call(arguments);
            if ("all" === t) o = o.map(function(e) {
                return e * s
            });
            else if (Array.isArray(t))
                for (e = 0, n = t.length; e < n; e++) o[t[e]] *= s;
            return r.apply(this, o)
        })
    }), e.stroke = (r = e.stroke, function() {
        this.lineWidth *= s, r.apply(this, arguments), this.lineWidth /= s
    }), e.fillText = (o = e.fillText, function() {
        var e = Array.prototype.slice.call(arguments);
        e[1] *= s, e[2] *= s, this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function(e, t, n) {
            return t * s + n
        }), e.length >= 4 && s > 1 && (e[3] *= s), o.apply(this, e), this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function(e, t, n) {
            return t / s + n
        })
    }), e.strokeText = (i = e.strokeText, function() {
        var e = Array.prototype.slice.call(arguments);
        e[1] *= s, e[2] *= s, this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function(e, t, n) {
            return t * s + n
        }), i.apply(this, e), this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function(e, t, n) {
            return t / s + n
        })
    }))
}(CanvasRenderingContext2D.prototype),
function(e) {
    var t;
    e.getContext = (t = e.getContext, function(e) {
        var n, r, o = t.call(this, e);
        return "2d" === e && (n = o.backingStorePixelRatio || o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o.oBackingStorePixelRatio || o.backingStorePixelRatio || 1, (r = (window.devicePixelRatio || 1) / n) > 1 && "true" != $(this).attr("val") && !($(this).attr("class") || "").match("geetest_absolute") && ("" != this.style.height && Number(this.style.height.replace("px", "")) * r == this.height || (this.style.height = this.height + "px", this.style.width = this.width + "px", this.width *= r, this.height *= r, $(this).attr("val", !0)))), o
    })
}(HTMLCanvasElement.prototype),
function(e, t) {
    var n, r, o = typeof t,
        i = e.location,
        s = e.document,
        a = s.documentElement,
        l = e.jQuery,
        c = e.$,
        u = {},
        p = [],
        f = "1.10.2",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        v = u.toString,
        b = u.hasOwnProperty,
        y = f.trim,
        $ = function(e, t) {
            return new $.fn.init(e, t, r)
        },
        x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        w = /\S+/g,
        k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        S = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        C = /^[\],:{}\s]*$/,
        E = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        P = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        N = /-([\da-z])/gi,
        O = function(e, t) {
            return t.toUpperCase()
        },
        I = function(e) {
            (s.addEventListener || "load" === e.type || "complete" === s.readyState) && (M(), $.ready())
        },
        M = function() {
            s.addEventListener ? (s.removeEventListener("DOMContentLoaded", I, !1), e.removeEventListener("load", I, !1)) : (s.detachEvent("onreadystatechange", I), e.detachEvent("onload", I))
        };

    function _(e) {
        var t = e.length,
            n = $.type(e);
        return !$.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
    }
    $.fn = $.prototype = {
            jquery: f,
            constructor: $,
            init: function(e, n, r) {
                var o, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (!(o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e)) || !o[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (o[1]) {
                        if (n = n instanceof $ ? n[0] : n, $.merge(this, $.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : s, !0)), S.test(o[1]) && $.isPlainObject(n))
                            for (o in n) $.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                        return this
                    }
                    if ((i = s.getElementById(o[2])) && i.parentNode) {
                        if (i.id !== o[2]) return r.find(e);
                        this.length = 1, this[0] = i
                    }
                    return this.context = s, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : $.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), $.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return g.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = $.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return $.each(this, e, t)
            },
            ready: function(e) {
                return $.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(g.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack($.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: h,
            sort: [].sort,
            splice: [].splice
        }, $.fn.init.prototype = $.fn, $.extend = $.fn.extend = function() {
            var e, n, r, o, i, s, a = arguments[0] || {},
                l = 1,
                c = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || $.isFunction(a) || (a = {}), c === l && (a = this, --l); c > l; l++)
                if (null != (i = arguments[l]))
                    for (o in i) e = a[o], r = i[o], a !== r && (u && r && ($.isPlainObject(r) || (n = $.isArray(r))) ? (n ? (n = !1, s = e && $.isArray(e) ? e : []) : s = e && $.isPlainObject(e) ? e : {}, a[o] = $.extend(u, s, r)) : r !== t && (a[o] = r));
            return a
        }, $.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            noConflict: function(t) {
                return e.$ === $ && (e.$ = c), t && e.jQuery === $ && (e.jQuery = l), $
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? $.readyWait++ : $.ready(!0)
            },
            ready: function(e) {
                if (!0 === e ? !--$.readyWait : !$.isReady) {
                    if (!s.body) return setTimeout($.ready);
                    $.isReady = !0, !0 !== e && --$.readyWait > 0 || (n.resolveWith(s, [$]), $.fn.trigger && $(s).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === $.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === $.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[v.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                var n;
                if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
                try {
                    if (e.constructor && !b.call(e, "constructor") && !b.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if ($.support.ownLast)
                    for (n in e) return b.call(e, n);
                for (n in e);
                return n === t || b.call(e, n)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || s;
                var r = S.exec(e),
                    o = !n && [];
                return r ? [t.createElement(r[1])] : (r = $.buildFragment([e], t, o), o && $(o).remove(), $.merge([], r.childNodes))
            },
            parseJSON: function(n) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && ((n = $.trim(n)) && C.test(n.replace(A, "@").replace(P, "]").replace(E, ""))) ? Function("return " + n)() : ($.error("Invalid JSON: " + n), t)
            },
            parseXML: function(n) {
                var r, o;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (o = new DOMParser, r = o.parseFromString(n, "text/xml")) : ((r = new ActiveXObject("Microsoft.XMLDOM")).async = "false", r.loadXML(n))
                } catch (e) {
                    r = t
                }
                return r && r.documentElement && !r.getElementsByTagName("parsererror").length || $.error("Invalid XML: " + n), r
            },
            noop: function() {},
            globalEval: function(t) {
                t && $.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(D, "ms-").replace(N, O)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var r, o = 0,
                    i = e.length,
                    s = _(e);
                if (n) {
                    if (s)
                        for (; i > o && !1 !== (r = t.apply(e[o], n)); o++);
                    else
                        for (o in e)
                            if (r = t.apply(e[o], n), !1 === r) break
                } else if (s)
                    for (; i > o && !1 !== (r = t.call(e[o], o, e[o])); o++);
                else
                    for (o in e)
                        if (r = t.call(e[o], o, e[o]), !1 === r) break; return e
            },
            trim: y && !y.call("\ufeff ") ? function(e) {
                return null == e ? "" : y.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(k, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (_(Object(e)) ? $.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (m) return m.call(t, e, n);
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var r = n.length,
                    o = e.length,
                    i = 0;
                if ("number" == typeof r)
                    for (; r > i; i++) e[o++] = n[i];
                else
                    for (; n[i] !== t;) e[o++] = n[i++];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                var r, o = [],
                    i = 0,
                    s = e.length;
                for (n = !!n; s > i; i++) r = !!t(e[i], i), n !== r && o.push(e[i]);
                return o
            },
            map: function(e, t, n) {
                var r, o = 0,
                    i = e.length,
                    s = [];
                if (_(e))
                    for (; i > o; o++) r = t(e[o], o, n), null != r && (s[s.length] = r);
                else
                    for (o in e) r = t(e[o], o, n), null != r && (s[s.length] = r);
                return d.apply([], s)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, o, i;
                return "string" == typeof n && (i = e[n], n = e, e = i), $.isFunction(e) ? (r = g.call(arguments, 2), (o = function() {
                    return e.apply(n || this, r.concat(g.call(arguments)))
                }).guid = e.guid = e.guid || $.guid++, o) : t
            },
            access: function(e, n, r, o, i, s, a) {
                var l = 0,
                    c = e.length,
                    u = null == r;
                if ("object" === $.type(r)) {
                    i = !0;
                    for (l in r) $.access(e, n, l, r[l], !0, s, a)
                } else if (o !== t && (i = !0, $.isFunction(o) || (a = !0), u && (a ? (n.call(e, o), n = null) : (u = n, n = function(e, t, n) {
                        return u.call($(e), n)
                    })), n))
                    for (; c > l; l++) n(e[l], r, a ? o : o.call(e[l], l, n(e[l], r)));
                return i ? e : u ? n.call(e) : c ? n(e[0], r) : s
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(e, t, n, r) {
                var o, i, s = {};
                for (i in t) s[i] = e.style[i], e.style[i] = t[i];
                o = n.apply(e, r || []);
                for (i in t) e.style[i] = s[i];
                return o
            }
        }), $.ready.promise = function(t) {
            if (!n)
                if (n = $.Deferred(), "complete" === s.readyState) setTimeout($.ready);
                else if (s.addEventListener) s.addEventListener("DOMContentLoaded", I, !1), e.addEventListener("load", I, !1);
            else {
                s.attachEvent("onreadystatechange", I), e.attachEvent("onload", I);
                var r = !1;
                try {
                    r = null == e.frameElement && s.documentElement
                } catch (e) {}
                r && r.doScroll && function e() {
                    if (!$.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (t) {
                            return setTimeout(e, 50)
                        }
                        M(), $.ready()
                    }
                }()
            }
            return n.promise(t)
        }, $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            u["[object " + t + "]"] = t.toLowerCase()
        }), r = $(s),
        function(e, t) {
            var n, r, o, i, s, a, l, c, u, p, f, d, h, g, m, v, b, y = "sizzle" + -new Date,
                x = e.document,
                w = 0,
                k = 0,
                T = se(),
                S = se(),
                C = se(),
                E = !1,
                A = function(e, t) {
                    return e === t ? (E = !0, 0) : 0
                },
                P = "undefined",
                D = 1 << 31,
                N = {}.hasOwnProperty,
                O = [],
                I = O.pop,
                M = O.push,
                _ = O.push,
                L = O.slice,
                F = O.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                R = "[\\x20\\t\\r\\n\\f]",
                j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                q = j.replace("w", "w#"),
                U = "\\[" + R + "*(" + j + ")" + R + "*(?:([*^$|!~]?=)" + R + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + q + ")|)|)" + R + "*\\]",
                H = ":(" + j + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + U.replace(3, 8) + ")*)|.*)\\)|)",
                V = RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                z = RegExp("^" + R + "*," + R + "*"),
                W = RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                G = RegExp(R + "*[+~]"),
                Y = RegExp("=" + R + "*([^\\]'\"]*)" + R + "*\\]", "g"),
                K = RegExp(H),
                Q = RegExp("^" + q + "$"),
                X = {
                    ID: RegExp("^#(" + j + ")"),
                    CLASS: RegExp("^\\.(" + j + ")"),
                    TAG: RegExp("^(" + j.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + U),
                    PSEUDO: RegExp("^" + H),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + B + ")$", "i"),
                    needsContext: RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                },
                J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /^(?:input|select|textarea|button)$/i,
                te = /^h\d$/i,
                ne = /'|\\/g,
                re = RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
                oe = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                _.apply(O = L.call(x.childNodes), x.childNodes), O[x.childNodes.length].nodeType
            } catch (e) {
                _ = {
                    apply: O.length ? function(e, t) {
                        M.apply(e, L.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }

            function ie(e, t, n, o) {
                var s, a, c, u, d, m, v, $, w, k;
                if ((t ? t.ownerDocument || t : x) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (u = t.nodeType) && 9 !== u) return [];
                if (h && !o) {
                    if (s = Z.exec(e))
                        if (c = s[1]) {
                            if (9 === u) {
                                if (!(a = t.getElementById(c)) || !a.parentNode) return n;
                                if (a.id === c) return n.push(a), n
                            } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(c)) && b(t, a) && a.id === c) return n.push(a), n
                        } else {
                            if (s[2]) return _.apply(n, t.getElementsByTagName(e)), n;
                            if ((c = s[3]) && r.getElementsByClassName && t.getElementsByClassName) return _.apply(n, t.getElementsByClassName(c)), n
                        }
                    if (r.qsa && (!g || !g.test(e))) {
                        if ($ = v = y, w = t, k = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                            for (m = ge(e), (v = t.getAttribute("id")) ? $ = v.replace(ne, "\\$&") : t.setAttribute("id", $), $ = "[id='" + $ + "'] ", d = m.length; d--;) m[d] = $ + me(m[d]);
                            w = G.test(e) && t.parentNode || t, k = m.join(",")
                        }
                        if (k) try {
                            return _.apply(n, w.querySelectorAll(k)), n
                        } catch (e) {} finally {
                            v || t.removeAttribute("id")
                        }
                    }
                }
                return function(e, t, n, o) {
                    var s, a, c, u, p, f = ge(e);
                    if (!o && 1 === f.length) {
                        if ((a = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = a[0]).type && r.getById && 9 === t.nodeType && h && i.relative[a[1].type]) {
                            if (!(t = (i.find.ID(c.matches[0].replace(re, oe), t) || [])[0])) return n;
                            e = e.slice(a.shift().value.length)
                        }
                        for (s = X.needsContext.test(e) ? 0 : a.length; s-- && (c = a[s], !i.relative[u = c.type]);)
                            if ((p = i.find[u]) && (o = p(c.matches[0].replace(re, oe), G.test(a[0].type) && t.parentNode || t))) {
                                if (a.splice(s, 1), !(e = o.length && me(a))) return _.apply(n, o), n;
                                break
                            }
                    }
                    return l(e, f)(o, t, !h, n, G.test(e)), n
                }(e.replace(V, "$1"), t, n, o)
            }

            function se() {
                var e = [];
                return function t(n, r) {
                    return e.push(n += " ") > i.cacheLength && delete t[e.shift()], t[n] = r
                }
            }

            function ae(e) {
                return e[y] = !0, e
            }

            function le(e) {
                var t = f.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ce(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) i.attrHandle[n[r]] = t
            }

            function ue(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function pe(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function fe(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function de(e) {
                return ae(function(t) {
                    return t = +t, ae(function(n, r) {
                        for (var o, i = e([], n.length, t), s = i.length; s--;) n[o = i[s]] && (n[o] = !(r[o] = n[o]))
                    })
                })
            }
            a = ie.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, r = ie.support = {}, p = ie.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : x,
                    o = n.defaultView;
                return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !a(n), o && o.attachEvent && o !== o.top && o.attachEvent("onbeforeunload", function() {
                    p()
                }), r.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), r.getElementsByTagName = le(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), r.getElementsByClassName = le(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), r.getById = le(function(e) {
                    return d.appendChild(e).id = y, !n.getElementsByName || !n.getElementsByName(y).length
                }), r.getById ? (i.find.ID = function(e, t) {
                    if (typeof t.getElementById !== P && h) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(re, oe);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete i.find.ID, i.filter.ID = function(e) {
                    var t = e.replace(re, oe);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== P && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), i.find.TAG = r.getElementsByTagName ? function(e, n) {
                    return typeof n.getElementsByTagName !== P ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        o = 0,
                        i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return i
                }, i.find.CLASS = r.getElementsByClassName && function(e, n) {
                    return typeof n.getElementsByClassName !== P && h ? n.getElementsByClassName(e) : t
                }, m = [], g = [], (r.qsa = J.test(n.querySelectorAll)) && (le(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + R + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
                }), le(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (r.matchesSelector = J.test(v = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && le(function(e) {
                    r.disconnectedMatch = v.call(e, "div"), v.call(e, "[s!='']:x"), m.push("!=", H)
                }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), b = J.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = d.compareDocumentPosition ? function(e, t) {
                    if (e === t) return E = !0, 0;
                    var o = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return o ? 1 & o || !r.sortDetached && t.compareDocumentPosition(e) === o ? e === n || b(x, e) ? -1 : t === n || b(x, t) ? 1 : u ? F.call(u, e) - F.call(u, t) : 0 : 4 & o ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, o = 0,
                        i = e.parentNode,
                        s = t.parentNode,
                        a = [e],
                        l = [t];
                    if (e === t) return E = !0, 0;
                    if (!i || !s) return e === n ? -1 : t === n ? 1 : i ? -1 : s ? 1 : u ? F.call(u, e) - F.call(u, t) : 0;
                    if (i === s) return ue(e, t);
                    for (r = e; r = r.parentNode;) a.unshift(r);
                    for (r = t; r = r.parentNode;) l.unshift(r);
                    for (; a[o] === l[o];) o++;
                    return o ? ue(a[o], l[o]) : a[o] === x ? -1 : l[o] === x ? 1 : 0
                }, n) : f
            }, ie.matches = function(e, t) {
                return ie(e, null, null, t)
            }, ie.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
                    var n = v.call(e, t);
                    if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return ie(t, f, null, [e]).length > 0
            }, ie.contains = function(e, t) {
                return (e.ownerDocument || e) !== f && p(e), b(e, t)
            }, ie.attr = function(e, n) {
                (e.ownerDocument || e) !== f && p(e);
                var o = i.attrHandle[n.toLowerCase()],
                    s = o && N.call(i.attrHandle, n.toLowerCase()) ? o(e, n, !h) : t;
                return s === t ? r.attributes || !h ? e.getAttribute(n) : (s = e.getAttributeNode(n)) && s.specified ? s.value : null : s
            }, ie.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, ie.uniqueSort = function(e) {
                var t, n = [],
                    o = 0,
                    i = 0;
                if (E = !r.detectDuplicates, u = !r.sortStable && e.slice(0), e.sort(A), E) {
                    for (; t = e[i++];) t === e[i] && (o = n.push(i));
                    for (; o--;) e.splice(n[o], 1)
                }
                return e
            }, s = ie.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += s(t);
                return n
            }, (i = ie.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(re, oe), e[3] = (e[4] || e[5] || "").replace(re, oe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, r = !e[5] && e[2];
                        return X.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && K.test(r) && (n = ge(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(re, oe).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && T(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== P && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var o = ie.attr(r, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, o) {
                        var i = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === r && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, p, f, d, h, g = i !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                b = !l && !a;
                            if (m) {
                                if (i) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)
                                            if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild], s && b) {
                                    for (d = (c = (u = m[y] || (m[y] = {}))[e] || [])[0] === w && c[1], f = c[0] === w && c[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (f = d = 0) || h.pop();)
                                        if (1 === p.nodeType && ++f && p === t) {
                                            u[e] = [w, d, f];
                                            break
                                        }
                                } else if (b && (c = (t[y] || (t[y] = {}))[e]) && c[0] === w) f = c[1];
                                else
                                    for (;
                                        (p = ++d && p && p[g] || (f = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++f || (b && ((p[y] || (p[y] = {}))[e] = [w, f]), p !== t)););
                                return (f -= o) === r || 0 == f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                        return r[y] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                            for (var o, i = r(e, t), s = i.length; s--;) o = F.call(e, i[s]), e[o] = !(n[o] = i[s])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var t = [],
                            n = [],
                            r = l(e.replace(V, "$1"));
                        return r[y] ? ae(function(e, t, n, o) {
                            for (var i, s = r(e, null, o, []), a = e.length; a--;)(i = s[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, o, i) {
                            return t[0] = e, r(t, null, i, n), !n.pop()
                        }
                    }),
                    has: ae(function(e) {
                        return function(t) {
                            return ie(e, t).length > 0
                        }
                    }),
                    contains: ae(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                        }
                    }),
                    lang: ae(function(e) {
                        return Q.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(re, oe).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === d
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return te.test(e.nodeName)
                    },
                    input: function(e) {
                        return ee.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: de(function() {
                        return [0]
                    }),
                    last: de(function(e, t) {
                        return [t - 1]
                    }),
                    eq: de(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: de(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: de(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: de(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: de(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = i.pseudos.eq;
            for (n in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[n] = pe(n);
            for (n in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[n] = fe(n);

            function he() {}

            function ge(e, t) {
                var n, r, o, s, a, l, c, u = S[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, l = [], c = i.preFilter; a;) {
                    (!n || (r = z.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = W.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(V, " ")
                    }), a = a.slice(n.length));
                    for (s in i.filter) !(r = X[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: s,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? ie.error(e) : S(e, l).slice(0)
            }

            function me(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function ve(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    s = k++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function(t, n, a) {
                    var l, c, u, p = w + " " + s;
                    if (a) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i)
                                if (u = t[y] || (t[y] = {}), (c = u[r]) && c[0] === p) {
                                    if (!0 === (l = c[1]) || l === o) return !0 === l
                                } else if (c = u[r] = [p], c[1] = e(t, n, a) || o, !0 === c[1]) return !0
                }
            }

            function be(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function ye(e, t, n, r, o) {
                for (var i, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(i = e[a]) && (!n || n(i, r, o)) && (s.push(i), c && t.push(a));
                return s
            }

            function $e(e, t, n, r, o, i) {
                return r && !r[y] && (r = $e(r)), o && !o[y] && (o = $e(o, i)), ae(function(i, s, a, l) {
                    var c, u, p, f = [],
                        d = [],
                        h = s.length,
                        g = i || function(e, t, n) {
                            for (var r = 0, o = t.length; o > r; r++) ie(e, t[r], n);
                            return n
                        }(t || "*", a.nodeType ? [a] : a, []),
                        m = !e || !i && t ? g : ye(g, f, e, a, l),
                        v = n ? o || (i ? e : h || r) ? [] : s : m;
                    if (n && n(m, v, a, l), r)
                        for (c = ye(v, d), r(c, [], a, l), u = c.length; u--;)(p = c[u]) && (v[d[u]] = !(m[d[u]] = p));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (c = [], u = v.length; u--;)(p = v[u]) && c.push(m[u] = p);
                                o(null, v = [], c, l)
                            }
                            for (u = v.length; u--;)(p = v[u]) && (c = o ? F.call(i, p) : f[u]) > -1 && (i[c] = !(s[c] = p))
                        }
                    } else v = ye(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, l) : _.apply(s, v)
                })
            }

            function xe(e) {
                for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ve(function(e) {
                        return e === t
                    }, a, !0), p = ve(function(e) {
                        return F.call(t, e) > -1
                    }, a, !0), f = [function(e, n, r) {
                        return !s && (r || n !== c) || ((t = n).nodeType ? u(e, n, r) : p(e, n, r))
                    }]; o > l; l++)
                    if (n = i.relative[e[l].type]) f = [ve(be(f), n)];
                    else {
                        if ((n = i.filter[e[l].type].apply(null, e[l].matches))[y]) {
                            for (r = ++l; o > r && !i.relative[e[r].type]; r++);
                            return $e(l > 1 && be(f), l > 1 && me(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(V, "$1"), n, r > l && xe(e.slice(l, r)), o > r && xe(e = e.slice(r)), o > r && me(e))
                        }
                        f.push(n)
                    }
                return be(f)
            }
            he.prototype = i.filters = i.pseudos, i.setFilters = new he, l = ie.compile = function(e, t) {
                var n, r, s, a, l, u, p, d = [],
                    h = [],
                    g = C[e + " "];
                if (!g) {
                    for (t || (t = ge(e)), n = t.length; n--;) g = xe(t[n]), g[y] ? d.push(g) : h.push(g);
                    g = C(e, (r = h, a = 0, l = (s = d).length > 0, u = r.length > 0, p = function(e, t, n, p, d) {
                        var h, g, m, v = [],
                            b = 0,
                            y = "0",
                            $ = e && [],
                            x = null != d,
                            k = c,
                            T = e || u && i.find.TAG("*", d && t.parentNode || t),
                            S = w += null == k ? 1 : Math.random() || .1;
                        for (x && (c = t !== f && t, o = a); null != (h = T[y]); y++) {
                            if (u && h) {
                                for (g = 0; m = r[g++];)
                                    if (m(h, t, n)) {
                                        p.push(h);
                                        break
                                    }
                                x && (w = S, o = ++a)
                            }
                            l && ((h = !m && h) && b--, e && $.push(h))
                        }
                        if (b += y, l && y !== b) {
                            for (g = 0; m = s[g++];) m($, v, t, n);
                            if (e) {
                                if (b > 0)
                                    for (; y--;) $[y] || v[y] || (v[y] = I.call(p));
                                v = ye(v)
                            }
                            _.apply(p, v), x && !e && v.length > 0 && b + s.length > 1 && ie.uniqueSort(p)
                        }
                        return x && (w = S, c = k), $
                    }, l ? ae(p) : p))
                }
                return g
            }, r.sortStable = y.split("").sort(A).join("") === y, r.detectDuplicates = E, p(), r.sortDetached = le(function(e) {
                return 1 & e.compareDocumentPosition(f.createElement("div"))
            }), le(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || ce("type|href|height|width", function(e, n, r) {
                return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
            }), r.attributes && le(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || ce("value", function(e, n, r) {
                return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
            }), le(function(e) {
                return null == e.getAttribute("disabled")
            }) || ce(B, function(e, n, r) {
                var o;
                return r ? t : (o = e.getAttributeNode(n)) && o.specified ? o.value : !0 === e[n] ? n.toLowerCase() : null
            }), $.find = ie, $.expr = ie.selectors, $.expr[":"] = $.expr.pseudos, $.unique = ie.uniqueSort, $.text = ie.getText, $.isXMLDoc = ie.isXML, $.contains = ie.contains
        }(e);
    var L = {};
    $.Callbacks = function(e) {
        var n, r, o, i, s, a, l, c, u = [],
            p = !(e = "string" == typeof e ? L[e] || (r = L[n = e] = {}, $.each(n.match(w) || [], function(e, t) {
                r[t] = !0
            }), r) : $.extend({}, e)).once && [],
            f = function(t) {
                for (i = e.memory && t, s = !0, l = c || 0, c = 0, a = u.length, o = !0; u && a > l; l++)
                    if (!1 === u[l].apply(t[0], t[1]) && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                o = !1, u && (p ? p.length && f(p.shift()) : i ? u = [] : d.disable())
            },
            d = {
                add: function() {
                    if (u) {
                        var t = u.length;
                        (function t(n) {
                            $.each(n, function(n, r) {
                                var o = $.type(r);
                                "function" === o ? e.unique && d.has(r) || u.push(r) : r && r.length && "string" !== o && t(r)
                            })
                        })(arguments), o ? a = u.length : i && (c = t, f(i))
                    }
                    return this
                },
                remove: function() {
                    return u && $.each(arguments, function(e, t) {
                        for (var n;
                            (n = $.inArray(t, u, n)) > -1;) u.splice(n, 1), o && (a >= n && a--, l >= n && l--)
                    }), this
                },
                has: function(e) {
                    return e ? $.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], a = 0, this
                },
                disable: function() {
                    return u = p = i = t, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return p = t, i || d.disable(), this
                },
                locked: function() {
                    return !p
                },
                fireWith: function(e, t) {
                    return !u || s && !p || (t = [e, (t = t || []).slice ? t.slice() : t], o ? p.push(t) : f(t)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return d
    }, $.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", $.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", $.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", $.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return $.Deferred(function(n) {
                            $.each(t, function(t, i) {
                                var s = i[0],
                                    a = $.isFunction(e[t]) && e[t];
                                o[i[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && $.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? $.extend(e, r) : r
                    }
                },
                o = {};
            return r.pipe = r.then, $.each(t, function(e, i) {
                var s = i[2],
                    a = i[3];
                r[i[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
                    return o[i[0] + "With"](this === o ? r : this, arguments), this
                }, o[i[0] + "With"] = s.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, r, o = 0,
                i = g.call(arguments),
                s = i.length,
                a = 1 !== s || e && $.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : $.Deferred(),
                c = function(e, n, r) {
                    return function(o) {
                        n[e] = this, r[e] = arguments.length > 1 ? g.call(arguments) : o, r === t ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = Array(s), n = Array(s), r = Array(s); s > o; o++) i[o] && $.isFunction(i[o].promise) ? i[o].promise().done(c(o, r, i)).fail(l.reject).progress(c(o, n, t)) : --a;
            return a || l.resolveWith(r, i), l.promise()
        }
    }), $.support = function(t) {
        var n, r, i, a, l, c, u, p, f, d = s.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], !(r = d.getElementsByTagName("a")[0]) || !r.style || !n.length) return t;
        c = (a = s.createElement("select")).appendChild(s.createElement("option")), i = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!i.value, t.optSelected = c.selected, t.enctype = !!s.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== s.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, a.disabled = !0, t.optDisabled = !c.disabled;
        try {
            delete d.test
        } catch (e) {
            t.deleteExpando = !1
        }(i = s.createElement("input")).setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), (l = s.createDocumentFragment()).appendChild(i), t.appendChecked = i.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(u = "on" + f, "t"), t[f + "Bubbles"] = u in e || !1 === d.attributes[u].expando;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in $(t)) break;
        return t.ownLast = "0" !== f, $(function() {
            var n, r, i, a = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = s.getElementsByTagName("body")[0];
            l && ((n = s.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (i = d.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === i[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", $.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, (r = d.appendChild(s.createElement("div"))).style.cssText = d.style.cssText = a, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== o && (d.innerHTML = "", d.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = i = r = null)
        }), n = a = l = c = r = i = null, t
    }({});
    var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        B = /([A-Z])/g;

    function R(e, n, r, o) {
        if ($.acceptData(e)) {
            var i, s, a = $.expando,
                l = e.nodeType,
                c = l ? $.cache : e,
                u = l ? e[a] : e[a] && a;
            if (u && c[u] && (o || c[u].data) || r !== t || "string" != typeof n) return u || (u = l ? e[a] = p.pop() || $.guid++ : a), c[u] || (c[u] = l ? {} : {
                toJSON: $.noop
            }), ("object" == typeof n || "function" == typeof n) && (o ? c[u] = $.extend(c[u], n) : c[u].data = $.extend(c[u].data, n)), s = c[u], o || (s.data || (s.data = {}), s = s.data), r !== t && (s[$.camelCase(n)] = r), "string" == typeof n ? (i = s[n], null == i && (i = s[$.camelCase(n)])) : i = s, i
        }
    }

    function j(e, t, n) {
        if ($.acceptData(e)) {
            var r, o, i = e.nodeType,
                s = i ? $.cache : e,
                a = i ? e[$.expando] : $.expando;
            if (s[a]) {
                if (t && (r = n ? s[a] : s[a].data)) {
                    $.isArray(t) ? t = t.concat($.map(t, $.camelCase)) : t in r ? t = [t] : t = (t = $.camelCase(t)) in r ? [t] : t.split(" "), o = t.length;
                    for (; o--;) delete r[t[o]];
                    if (n ? !U(r) : !$.isEmptyObject(r)) return
                }(n || (delete s[a].data, U(s[a]))) && (i ? $.cleanData([e], !0) : $.support.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }

    function q(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var o = "data-" + n.replace(B, "-$1").toLowerCase();
            if ("string" == typeof(r = e.getAttribute(o))) {
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : F.test(r) ? $.parseJSON(r) : r)
                } catch (e) {}
                $.data(e, n, r)
            } else r = t
        }
        return r
    }

    function U(e) {
        var t;
        for (t in e)
            if (("data" !== t || !$.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    $.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? $.cache[e[$.expando]] : e[$.expando]) && !U(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return j(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return j(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && $.noData[e.nodeName.toLowerCase()];
            return !t || !0 !== t && e.getAttribute("classid") === t
        }
    }), $.fn.extend({
        data: function(e, n) {
            var r, o, i = null,
                s = 0,
                a = this[0];
            if (e === t) {
                if (this.length && (i = $.data(a), 1 === a.nodeType && !$._data(a, "parsedAttrs"))) {
                    for (r = a.attributes; r.length > s; s++) o = r[s].name, 0 === o.indexOf("data-") && (o = $.camelCase(o.slice(5)), q(a, o, i[o]));
                    $._data(a, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                $.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                $.data(this, e, n)
            }) : a ? q(a, e, $.data(a, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                $.removeData(this, e)
            })
        }
    }), $.extend({
        queue: function(e, n, r) {
            var o;
            return e ? (n = (n || "fx") + "queue", o = $._data(e, n), r && (!o || $.isArray(r) ? o = $._data(e, n, $.makeArray(r)) : o.push(r)), o || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = $.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = $._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function() {
                $.dequeue(e, t)
            }, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return $._data(e, n) || $._data(e, n, {
                empty: $.Callbacks("once memory").add(function() {
                    $._removeData(e, t + "queue"), $._removeData(e, n)
                })
            })
        }
    }), $.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? $.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = $.queue(this, e, n);
                $._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && $.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                $.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = $.fx ? $.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, o = 1,
                i = $.Deferred(),
                s = this,
                a = this.length,
                l = function() {
                    --o || i.resolveWith(s, [s])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) r = $._data(s[a], e + "queueHooks"), r && r.empty && (o++, r.empty.add(l));
            return l(), i.promise(n)
        }
    });
    var H, V, z = /[\t\r\n\f]/g,
        W = /\r/g,
        G = /^(?:input|select|textarea|button|object)$/i,
        Y = /^(?:a|area)$/i,
        K = /^(?:checked|selected)$/i,
        Q = $.support.getSetAttribute,
        X = $.support.input;
    $.fn.extend({
        attr: function(e, t) {
            return $.access(this, $.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                $.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return $.access(this, $.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = $.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (e) {}
            })
        },
        addClass: function(e) {
            var t, n, r, o, i, s = 0,
                a = this.length,
                l = "string" == typeof e && e;
            if ($.isFunction(e)) return this.each(function(t) {
                $(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(w) || []; a > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(z, " ") : " ")) {
                        for (i = 0; o = t[i++];) 0 > r.indexOf(" " + o + " ") && (r += o + " ");
                        n.className = $.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, s = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if ($.isFunction(e)) return this.each(function(t) {
                $(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(w) || []; a > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(z, " ") : "")) {
                        for (i = 0; o = t[i++];)
                            for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
                        n.className = e ? $.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : $.isFunction(e) ? this.each(function(n) {
                $(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = $(this), s = e.match(w) || []; t = s[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === o || "boolean" === n) && (this.className && $._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : $._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(z, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, o, i = this[0];
            return arguments.length ? (o = $.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = o ? e.call(this, n, $(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : $.isArray(i) && (i = $.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (r = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, i, "value") !== t || (this.value = i))
            })) : i ? (r = $.valHooks[i.type] || $.valHooks[i.nodeName.toLowerCase()]) && "get" in r && (n = r.get(i, "value")) !== t ? n : "string" == typeof(n = i.value) ? n.replace(W, "") : null == n ? "" : n : void 0
        }
    }), $.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = $.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, s = i ? null : [], a = i ? o + 1 : r.length, l = 0 > o ? a : i ? o : 0; a > l; l++)
                        if (n = r[l], !(!n.selected && l !== o || ($.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && $.nodeName(n.parentNode, "optgroup"))) {
                            if (t = $(n).val(), i) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = $.makeArray(t), s = o.length; s--;) r = o[s], (r.selected = $.inArray($(r).val(), i) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), i
                }
            }
        },
        attr: function(e, n, r) {
            var i, s, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === o ? $.prop(e, n, r) : (1 === a && $.isXMLDoc(e) || (n = n.toLowerCase(), i = $.attrHooks[n] || ($.expr.match.bool.test(n) ? V : H)), r === t ? i && "get" in i && null !== (s = i.get(e, n)) ? s : (s = $.find.attr(e, n), null == s ? t : s) : null !== r ? i && "set" in i && (s = i.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : ($.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, o = 0,
                i = t && t.match(w);
            if (i && 1 === e.nodeType)
                for (; n = i[o++];) r = $.propFix[n] || n, $.expr.match.bool.test(n) ? X && Q || !K.test(n) ? e[r] = !1 : e[$.camelCase("default-" + n)] = e[r] = !1 : $.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!$.support.radioValue && "radio" === t && $.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, n, r) {
            var o, i, s, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !$.isXMLDoc(e), s && (n = $.propFix[n] || n, i = $.propHooks[n]), r !== t ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : e[n] = r : i && "get" in i && null !== (o = i.get(e, n)) ? o : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = $.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : G.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), V = {
        set: function(e, t, n) {
            return !1 === t ? $.removeAttr(e, n) : X && Q || !K.test(n) ? e.setAttribute(!Q && $.propFix[n] || n, n) : e[$.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, $.each($.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = $.expr.attrHandle[n] || $.find.attr;
        $.expr.attrHandle[n] = X && Q || !K.test(n) ? function(e, n, o) {
            var i = $.expr.attrHandle[n],
                s = o ? t : ($.expr.attrHandle[n] = t) != r(e, n, o) ? n.toLowerCase() : null;
            return $.expr.attrHandle[n] = i, s
        } : function(e, n, r) {
            return r ? t : e[$.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), X && Q || ($.attrHooks.value = {
        set: function(e, n, r) {
            return $.nodeName(e, "input") ? (e.defaultValue = n, t) : H && H.set(e, n, r)
        }
    }), Q || (H = {
        set: function(e, n, r) {
            var o = e.getAttributeNode(r);
            return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(r)), o.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, $.expr.attrHandle.id = $.expr.attrHandle.name = $.expr.attrHandle.coords = function(e, n, r) {
        var o;
        return r ? t : (o = e.getAttributeNode(n)) && "" !== o.value ? o.value : null
    }, $.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: H.set
    }, $.attrHooks.contenteditable = {
        set: function(e, t, n) {
            H.set(e, "" !== t && t, n)
        }
    }, $.each(["width", "height"], function(e, n) {
        $.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), $.support.hrefNormalized || $.each(["href", "src"], function(e, t) {
        $.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), $.support.style || ($.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), $.support.optSelected || ($.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), $.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        $.propFix[this.toLowerCase()] = this
    }), $.support.enctype || ($.propFix.enctype = "encoding"), $.each(["radio", "checkbox"], function() {
        $.valHooks[this] = {
            set: function(e, n) {
                return $.isArray(n) ? e.checked = $.inArray($(e).val(), n) >= 0 : t
            }
        }, $.support.checkOn || ($.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var J = /^(?:input|select|textarea)$/i,
        Z = /^key/,
        ee = /^(?:mouse|contextmenu)|click/,
        te = /^(?:focusinfocus|focusoutblur)$/,
        ne = /^([^.]*)(?:\.(.+)|)$/;

    function re() {
        return !0
    }

    function oe() {
        return !1
    }

    function ie() {
        try {
            return s.activeElement
        } catch (e) {}
    }
    $.event = {
        global: {},
        add: function(e, n, r, i, s) {
            var a, l, c, u, p, f, d, h, g, m, v, b = $._data(e);
            if (b) {
                for (r.handler && (r = (u = r).handler, s = u.selector), r.guid || (r.guid = $.guid++), (l = b.events) || (l = b.events = {}), (f = b.handle) || ((f = b.handle = function(e) {
                        return typeof $ === o || e && $.event.triggered === e.type ? t : $.event.dispatch.apply(f.elem, arguments)
                    }).elem = e), c = (n = (n || "").match(w) || [""]).length; c--;) a = ne.exec(n[c]) || [], g = v = a[1], m = (a[2] || "").split(".").sort(), g && (p = $.event.special[g] || {}, g = (s ? p.delegateType : p.bindType) || g, p = $.event.special[g] || {}, d = $.extend({
                    type: g,
                    origType: v,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: s,
                    needsContext: s && $.expr.match.needsContext.test(s),
                    namespace: m.join(".")
                }, u), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && !1 !== p.setup.call(e, i, m, f) || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), s ? h.splice(h.delegateCount++, 0, d) : h.push(d), $.event.global[g] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, o) {
            var i, s, a, l, c, u, p, f, d, h, g, m = $.hasData(e) && $._data(e);
            if (m && (u = m.events)) {
                for (c = (t = (t || "").match(w) || [""]).length; c--;)
                    if (a = ne.exec(t[c]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        for (p = $.event.special[d] || {}, f = u[d = (r ? p.delegateType : p.bindType) || d] || [], a = a[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = i = f.length; i--;) s = f[i], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || r && r !== s.selector && ("**" !== r || !s.selector) || (f.splice(i, 1), s.selector && f.delegateCount--, p.remove && p.remove.call(e, s));
                        l && !f.length && (p.teardown && !1 !== p.teardown.call(e, h, m.handle) || $.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) $.event.remove(e, d + t[c], n, r, !0);
                $.isEmptyObject(u) && (delete m.handle, $._removeData(e, "events"))
            }
        },
        trigger: function(n, r, o, i) {
            var a, l, c, u, p, f, d, h = [o || s],
                g = b.call(n, "type") ? n.type : n,
                m = b.call(n, "namespace") ? n.namespace.split(".") : [];
            if (c = f = o = o || s, 3 !== o.nodeType && 8 !== o.nodeType && !te.test(g + $.event.triggered) && (g.indexOf(".") >= 0 && (g = (m = g.split(".")).shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, (n = n[$.expando] ? n : new $.Event(g, "object" == typeof n && n)).isTrigger = i ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = o), r = null == r ? [n] : $.makeArray(r, [n]), p = $.event.special[g] || {}, i || !p.trigger || !1 !== p.trigger.apply(o, r))) {
                if (!i && !p.noBubble && !$.isWindow(o)) {
                    for (u = p.delegateType || g, te.test(u + g) || (c = c.parentNode); c; c = c.parentNode) h.push(c), f = c;
                    f === (o.ownerDocument || s) && h.push(f.defaultView || f.parentWindow || e)
                }
                for (d = 0;
                    (c = h[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? u : p.bindType || g, a = ($._data(c, "events") || {})[n.type] && $._data(c, "handle"), a && a.apply(c, r), a = l && c[l], a && $.acceptData(c) && a.apply && !1 === a.apply(c, r) && n.preventDefault();
                if (n.type = g, !i && !n.isDefaultPrevented() && (!p._default || !1 === p._default.apply(h.pop(), r)) && $.acceptData(o) && l && o[g] && !$.isWindow(o)) {
                    (f = o[l]) && (o[l] = null), $.event.triggered = g;
                    try {
                        o[g]()
                    } catch (e) {}
                    $.event.triggered = t, f && (o[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = $.event.fix(e);
            var n, r, o, i, s, a = [],
                l = g.call(arguments),
                c = ($._data(this, "events") || {})[e.type] || [],
                u = $.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (a = $.event.handlers.call(this, e, c), n = 0;
                    (i = a[n++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, s = 0;
                        (o = i.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = (($.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l), r !== t && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, o, i, s, a = [],
                l = n.delegateCount,
                c = e.target;
            if (l && c.nodeType && (!e.button || "click" !== e.type))
                for (; c != this; c = c.parentNode || this)
                    if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
                        for (i = [], s = 0; l > s; s++) o = n[s], r = o.selector + " ", i[r] === t && (i[r] = o.needsContext ? $(r, this).index(c) >= 0 : $.find(r, this, null, [c]).length), i[r] && i.push(o);
                        i.length && a.push({
                            elem: c,
                            handlers: i
                        })
                    }
            return n.length > l && a.push({
                elem: this,
                handlers: n.slice(l)
            }), a
        },
        fix: function(e) {
            if (e[$.expando]) return e;
            var t, n, r, o = e.type,
                i = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = ee.test(o) ? this.mouseHooks : Z.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new $.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
            return e.target || (e.target = i.srcElement || s), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, i) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, o, i, a = n.button,
                    l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = (o = e.target.ownerDocument || s).documentElement, r = o.body, e.pageX = n.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ie() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ie() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return $.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return $.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var o = $.extend(new $.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? $.event.trigger(o, null, t) : $.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, $.removeEvent = s.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === o && (e[r] = null), e.detachEvent(r, n))
    }, $.Event = function(e, n) {
        return this instanceof $.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? re : oe) : this.type = e, n && $.extend(this, n), this.timeStamp = e && e.timeStamp || $.now(), this[$.expando] = !0, t) : new $.Event(e, n)
    }, $.Event.prototype = {
        isDefaultPrevented: oe,
        isPropagationStopped: oe,
        isImmediatePropagationStopped: oe,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = re, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = re, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = re, this.stopPropagation()
        }
    }, $.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        $.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    o = e.handleObj;
                return (!r || r !== this && !$.contains(this, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), $.support.submitBubbles || ($.event.special.submit = {
        setup: function() {
            return !$.nodeName(this, "form") && ($.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = $.nodeName(n, "input") || $.nodeName(n, "button") ? n.form : t;
                r && !$._data(r, "submitBubbles") && ($.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), $._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && $.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !$.nodeName(this, "form") && ($.event.remove(this, "._submit"), t)
        }
    }), $.support.changeBubbles || ($.event.special.change = {
        setup: function() {
            return J.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && ($.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), $.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), $.event.simulate("change", this, e, !0)
            })), !1) : ($.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                J.test(t.nodeName) && !$._data(t, "changeBubbles") && ($.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || $.event.simulate("change", this.parentNode, e, !0)
                }), $._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return $.event.remove(this, "._change"), !J.test(this.nodeName)
        }
    }), $.support.focusinBubbles || $.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                $.event.simulate(t, e.target, $.event.fix(e), !0)
            };
        $.event.special[t] = {
            setup: function() {
                0 == n++ && s.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 == --n && s.removeEventListener(e, r, !0)
            }
        }
    }), $.fn.extend({
        on: function(e, n, r, o, i) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (s in e) this.on(s, n, r, e[s], i);
                return this
            }
            if (null == r && null == o ? (o = n, r = n = t) : null == o && ("string" == typeof n ? (o = r, r = t) : (o = r, r = n, n = t)), !1 === o) o = oe;
            else if (!o) return this;
            return 1 === i && (a = o, (o = function(e) {
                return $().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = $.guid++)), this.each(function() {
                $.event.add(this, e, o, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var o, i;
            if (e && e.preventDefault && e.handleObj) return o = e.handleObj, $(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, n, e[i]);
                return this
            }
            return (!1 === n || "function" == typeof n) && (r = n, n = t), !1 === r && (r = oe), this.each(function() {
                $.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                $.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? $.event.trigger(e, n, r, !0) : t
        }
    });
    var se = /^.[^:#\[\.,]*$/,
        ae = /^(?:parents|prev(?:Until|All))/,
        le = $.expr.match.needsContext,
        ce = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function ue(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function pe(e, t, n) {
        if ($.isFunction(t)) return $.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return $.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (se.test(t)) return $.filter(t, e, n);
            t = $.filter(t, e)
        }
        return $.grep(e, function(e) {
            return $.inArray(e, t) >= 0 !== n
        })
    }

    function fe(e) {
        var t = de.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }
    $.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                o = r.length;
            if ("string" != typeof e) return this.pushStack($(e).filter(function() {
                for (t = 0; o > t; t++)
                    if ($.contains(r[t], this)) return !0
            }));
            for (t = 0; o > t; t++) $.find(e, r[t], n);
            return (n = this.pushStack(o > 1 ? $.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = $(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if ($.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(pe(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(pe(this, e || [], !1))
        },
        is: function(e) {
            return !!pe(this, "string" == typeof e && le.test(e) ? $(e) : e || [], !1).length
        },
        closest: function(e, t) {
            for (var n, r = 0, o = this.length, i = [], s = le.test(e) || "string" != typeof e ? $(e, t || this.context) : 0; o > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && $.find.matchesSelector(n, e))) {
                        n = i.push(n);
                        break
                    }
            return this.pushStack(i.length > 1 ? $.unique(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? $.inArray(this[0], $(e)) : $.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? $(e, t) : $.makeArray(e && e.nodeType ? [e] : e),
                r = $.merge(this.get(), n);
            return this.pushStack($.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), $.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return $.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return $.dir(e, "parentNode", n)
        },
        next: function(e) {
            return ue(e, "nextSibling")
        },
        prev: function(e) {
            return ue(e, "previousSibling")
        },
        nextAll: function(e) {
            return $.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return $.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return $.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return $.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return $.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return $.sibling(e.firstChild)
        },
        contents: function(e) {
            return $.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : $.merge([], e.childNodes)
        }
    }, function(e, t) {
        $.fn[e] = function(n, r) {
            var o = $.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = $.filter(r, o)), this.length > 1 && (ce[e] || (o = $.unique(o)), ae.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    }), $.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? $.find.matchesSelector(r, e) ? [r] : [] : $.find.matches(e, $.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            for (var o = [], i = e[n]; i && 9 !== i.nodeType && (r === t || 1 !== i.nodeType || !$(i).is(r));) 1 === i.nodeType && o.push(i), i = i[n];
            return o
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var de = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        he = / jQuery\d+="(?:null|\d+)"/g,
        ge = RegExp("<(?:" + de + ")[\\s/>]", "i"),
        me = /^\s+/,
        ve = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        be = /<([\w:]+)/,
        ye = /<tbody/i,
        $e = /<|&#?\w+;/,
        xe = /<(?:script|style|link)/i,
        we = /^(?:checkbox|radio)$/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Te = /^$|\/(?:java|ecma)script/i,
        Se = /^true\/(.*)/,
        Ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ee = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: $.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ae = fe(s).appendChild(s.createElement("div"));

    function Pe(e, t) {
        return $.nodeName(e, "table") && $.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function De(e) {
        return e.type = (null !== $.find.attr(e, "type")) + "/" + e.type, e
    }

    function Ne(e) {
        var t = Se.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) $._data(n, "globalEval", !t || $._data(t[r], "globalEval"))
    }

    function Ie(e, t) {
        if (1 === t.nodeType && $.hasData(e)) {
            var n, r, o, i = $._data(e),
                s = $._data(t, i),
                a = i.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (r = 0, o = a[n].length; o > r; r++) $.event.add(t, n, a[n][r])
            }
            s.data && (s.data = $.extend({}, s.data))
        }
    }

    function Me(e, t) {
        var n, r, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !$.support.noCloneEvent && t[$.expando]) {
                o = $._data(t);
                for (r in o.events) $.removeEvent(t, r, o.handle);
                t.removeAttribute($.expando)
            }
            "script" === n && t.text !== e.text ? (De(t).text = e.text, Ne(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), $.support.html5Clone && e.innerHTML && !$.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && we.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function _e(e, n) {
        var r, i, s = 0,
            a = typeof e.getElementsByTagName !== o ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== o ? e.querySelectorAll(n || "*") : t;
        if (!a)
            for (a = [], r = e.childNodes || e; null != (i = r[s]); s++) !n || $.nodeName(i, n) ? a.push(i) : $.merge(a, _e(i, n));
        return n === t || n && $.nodeName(e, n) ? $.merge([e], a) : a
    }

    function Le(e) {
        we.test(e.type) && (e.defaultChecked = e.checked)
    }
    Ee.optgroup = Ee.option, Ee.tbody = Ee.tfoot = Ee.colgroup = Ee.caption = Ee.thead, Ee.th = Ee.td, $.fn.extend({
        text: function(e) {
            return $.access(this, function(e) {
                return e === t ? $.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Pe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? $.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || $.cleanData(_e(n)), n.parentNode && (t && $.contains(n.ownerDocument, n) && Oe(_e(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && $.cleanData(_e(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && $.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return $.clone(this, e, t)
            })
        },
        html: function(e) {
            return $.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    o = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(he, "") : t;
                if (!("string" != typeof e || xe.test(e) || !$.support.htmlSerialize && ge.test(e) || !$.support.leadingWhitespace && me.test(e) || Ee[(be.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(ve, "<$1></$2>");
                    try {
                        for (; o > r; r++) n = this[r] || {}, 1 === n.nodeType && ($.cleanData(_e(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (e) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = $.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    o = e[t++];
                o && (r && r.parentNode !== o && (r = this.nextSibling), $(this).remove(), o.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, o, i, s, a, l, c = 0,
                u = this.length,
                p = this,
                f = u - 1,
                h = e[0],
                g = $.isFunction(h);
            if (g || !(1 >= u || "string" != typeof h || $.support.checkClone) && ke.test(h)) return this.each(function(r) {
                var o = p.eq(r);
                g && (e[0] = h.call(this, r, o.html())), o.domManip(e, t, n)
            });
            if (u && (r = (l = $.buildFragment(e, this[0].ownerDocument, !1, !n && this)).firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (i = (s = $.map(_e(l, "script"), De)).length; u > c; c++) o = l, c !== f && (o = $.clone(o, !0, !0), i && $.merge(s, _e(o, "script"))), t.call(this[c], o, c);
                if (i)
                    for (a = s[s.length - 1].ownerDocument, $.map(s, Ne), c = 0; i > c; c++) o = s[c], Te.test(o.type || "") && !$._data(o, "globalEval") && $.contains(a, o) && (o.src ? $._evalUrl(o.src) : $.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Ce, "")));
                l = r = null
            }
            return this
        }
    }), $.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        $.fn[e] = function(e) {
            for (var n, r = 0, o = [], i = $(e), s = i.length - 1; s >= r; r++) n = r === s ? this : this.clone(!0), $(i[r])[t](n), h.apply(o, n.get());
            return this.pushStack(o)
        }
    }), $.extend({
        clone: function(e, t, n) {
            var r, o, i, s, a, l = $.contains(e.ownerDocument, e);
            if ($.support.html5Clone || $.isXMLDoc(e) || !ge.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (Ae.innerHTML = e.outerHTML, Ae.removeChild(i = Ae.firstChild)), !($.support.noCloneEvent && $.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || $.isXMLDoc(e)))
                for (r = _e(i), a = _e(e), s = 0; null != (o = a[s]); ++s) r[s] && Me(o, r[s]);
            if (t)
                if (n)
                    for (a = a || _e(e), r = r || _e(i), s = 0; null != (o = a[s]); s++) Ie(o, r[s]);
                else Ie(e, i);
            return (r = _e(i, "script")).length > 0 && Oe(r, !l && _e(e, "script")), r = a = o = null, i
        },
        buildFragment: function(e, t, n, r) {
            for (var o, i, s, a, l, c, u, p = e.length, f = fe(t), d = [], h = 0; p > h; h++)
                if (i = e[h], i || 0 === i)
                    if ("object" === $.type(i)) $.merge(d, i.nodeType ? [i] : i);
                    else if ($e.test(i)) {
                for (a = a || f.appendChild(t.createElement("div")), l = (be.exec(i) || ["", ""])[1].toLowerCase(), u = Ee[l] || Ee._default, a.innerHTML = u[1] + i.replace(ve, "<$1></$2>") + u[2], o = u[0]; o--;) a = a.lastChild;
                if (!$.support.leadingWhitespace && me.test(i) && d.push(t.createTextNode(me.exec(i)[0])), !$.support.tbody)
                    for (o = (i = "table" !== l || ye.test(i) ? "<table>" !== u[1] || ye.test(i) ? 0 : a : a.firstChild) && i.childNodes.length; o--;) $.nodeName(c = i.childNodes[o], "tbody") && !c.childNodes.length && i.removeChild(c);
                for ($.merge(d, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = f.lastChild
            } else d.push(t.createTextNode(i));
            for (a && f.removeChild(a), $.support.appendChecked || $.grep(_e(d, "input"), Le), h = 0; i = d[h++];)
                if ((!r || -1 === $.inArray(i, r)) && (s = $.contains(i.ownerDocument, i), a = _e(f.appendChild(i), "script"), s && Oe(a), n))
                    for (o = 0; i = a[o++];) Te.test(i.type || "") && n.push(i);
            return a = null, f
        },
        cleanData: function(e, t) {
            for (var n, r, i, s, a = 0, l = $.expando, c = $.cache, u = $.support.deleteExpando, f = $.event.special; null != (n = e[a]); a++)
                if ((t || $.acceptData(n)) && (i = n[l], s = i && c[i])) {
                    if (s.events)
                        for (r in s.events) f[r] ? $.event.remove(n, r) : $.removeEvent(n, r, s.handle);
                    c[i] && (delete c[i], u ? delete n[l] : typeof n.removeAttribute !== o ? n.removeAttribute(l) : n[l] = null, p.push(i))
                }
        },
        _evalUrl: function(e) {
            return $.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    }), $.fn.extend({
        wrapAll: function(e) {
            if ($.isFunction(e)) return this.each(function(t) {
                $(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = $(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return $.isFunction(e) ? this.each(function(t) {
                $(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = $(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = $.isFunction(e);
            return this.each(function(n) {
                $(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                $.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Fe, Be, Re, je = /alpha\([^)]*\)/i,
        qe = /opacity\s*=\s*([^)]*)/,
        Ue = /^(top|right|bottom|left)$/,
        He = /^(none|table(?!-c[ea]).+)/,
        Ve = /^margin/,
        ze = RegExp("^(" + x + ")(.*)$", "i"),
        We = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
        Ge = RegExp("^([+-])=(" + x + ")", "i"),
        Ye = {
            BODY: "block"
        },
        Ke = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Xe = ["Top", "Right", "Bottom", "Left"],
        Je = ["Webkit", "O", "Moz", "ms"];

    function Ze(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, o = Je.length; o--;)
            if (t = Je[o] + n, t in e) return t;
        return r
    }

    function et(e, t) {
        return e = t || e, "none" === $.css(e, "display") || !$.contains(e.ownerDocument, e)
    }

    function tt(e, t) {
        for (var n, r, o, i = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (i[s] = $._data(r, "olddisplay"), n = r.style.display, t ? (i[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && et(r) && (i[s] = $._data(r, "olddisplay", it(r.nodeName)))) : i[s] || (o = et(r), (n && "none" !== n || !o) && $._data(r, "olddisplay", o ? n : $.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[s] || "" : "none"));
        return e
    }

    function nt(e, t, n) {
        var r = ze.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function rt(e, t, n, r, o) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > i; i += 2) "margin" === n && (s += $.css(e, n + Xe[i], !0, o)), r ? ("content" === n && (s -= $.css(e, "padding" + Xe[i], !0, o)), "margin" !== n && (s -= $.css(e, "border" + Xe[i] + "Width", !0, o))) : (s += $.css(e, "padding" + Xe[i], !0, o), "padding" !== n && (s += $.css(e, "border" + Xe[i] + "Width", !0, o)));
        return s
    }

    function ot(e, t, n) {
        var r = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            i = Be(e),
            s = $.support.boxSizing && "border-box" === $.css(e, "boxSizing", !1, i);
        if (0 >= o || null == o) {
            if ((0 > (o = Re(e, t, i)) || null == o) && (o = e.style[t]), We.test(o)) return o;
            r = s && ($.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + rt(e, t, n || (s ? "border" : "content"), r, i) + "px"
    }

    function it(e) {
        var t = s,
            n = Ye[e];
        return n || ("none" !== (n = st(e, t)) && n || ((t = ((Fe = (Fe || $("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || Fe[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = st(e, t), Fe.detach()), Ye[e] = n), n
    }

    function st(e, t) {
        var n = $(t.createElement(e)).appendTo(t.body),
            r = $.css(n[0], "display");
        return n.remove(), r
    }
    $.fn.extend({
        css: function(e, n) {
            return $.access(this, function(e, n, r) {
                var o, i, s = {},
                    a = 0;
                if ($.isArray(n)) {
                    for (i = Be(e), o = n.length; o > a; a++) s[n[a]] = $.css(e, n[a], !1, i);
                    return s
                }
                return r !== t ? $.style(e, n, r) : $.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return tt(this, !0)
        },
        hide: function() {
            return tt(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                et(this) ? $(this).show() : $(this).hide()
            })
        }
    }), $.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Re(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: $.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, s, a, l = $.camelCase(n),
                    c = e.style;
                if (n = $.cssProps[l] || ($.cssProps[l] = Ze(c, l)), a = $.cssHooks[n] || $.cssHooks[l], r === t) return a && "get" in a && (i = a.get(e, !1, o)) !== t ? i : c[n];
                if ("string" === (s = typeof r) && (i = Ge.exec(r)) && (r = (i[1] + 1) * i[2] + parseFloat($.css(e, n)), s = "number"), !(null == r || "number" === s && isNaN(r) || ("number" !== s || $.cssNumber[l] || (r += "px"), $.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), a && "set" in a && (r = a.set(e, r, o)) === t))) try {
                    c[n] = r
                } catch (e) {}
            }
        },
        css: function(e, n, r, o) {
            var i, s, a, l = $.camelCase(n);
            return n = $.cssProps[l] || ($.cssProps[l] = Ze(e.style, l)), (a = $.cssHooks[n] || $.cssHooks[l]) && "get" in a && (s = a.get(e, !0, r)), s === t && (s = Re(e, n, o)), "normal" === s && n in Qe && (s = Qe[n]), "" === r || r ? (i = parseFloat(s), !0 === r || $.isNumeric(i) ? i || 0 : s) : s
        }
    }), e.getComputedStyle ? (Be = function(t) {
        return e.getComputedStyle(t, null)
    }, Re = function(e, n, r) {
        var o, i, s, a = r || Be(e),
            l = a ? a.getPropertyValue(n) || a[n] : t,
            c = e.style;
        return a && ("" !== l || $.contains(e.ownerDocument, e) || (l = $.style(e, n)), We.test(l) && Ve.test(n) && (o = c.width, i = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = o, c.minWidth = i, c.maxWidth = s)), l
    }) : s.documentElement.currentStyle && (Be = function(e) {
        return e.currentStyle
    }, Re = function(e, n, r) {
        var o, i, s, a = r || Be(e),
            l = a ? a[n] : t,
            c = e.style;
        return null == l && c && c[n] && (l = c[n]), We.test(l) && !Ue.test(n) && (o = c.left, (s = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = o, s && (i.left = s)), "" === l ? "auto" : l
    }), $.each(["height", "width"], function(e, n) {
        $.cssHooks[n] = {
            get: function(e, r, o) {
                return r ? 0 === e.offsetWidth && He.test($.css(e, "display")) ? $.swap(e, Ke, function() {
                    return ot(e, n, o)
                }) : ot(e, n, o) : t
            },
            set: function(e, t, r) {
                var o = r && Be(e);
                return nt(0, t, r ? rt(e, n, r, $.support.boxSizing && "border-box" === $.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), $.support.opacity || ($.cssHooks.opacity = {
        get: function(e, t) {
            return qe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                o = $.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                i = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === $.trim(i.replace(je, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = je.test(i) ? i.replace(je, o) : i + " " + o)
        }
    }), $(function() {
        $.support.reliableMarginRight || ($.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? $.swap(e, {
                    display: "inline-block"
                }, Re, [e, "marginRight"]) : t
            }
        }), !$.support.pixelPosition && $.fn.position && $.each(["top", "left"], function(e, n) {
            $.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Re(e, n), We.test(r) ? $(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), $.expr && $.expr.filters && ($.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !$.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || $.css(e, "display"))
    }, $.expr.filters.visible = function(e) {
        return !$.expr.filters.hidden(e)
    }), $.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        $.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + Xe[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, Ve.test(e) || ($.cssHooks[e + t].set = nt)
    });
    var at = /%20/g,
        lt = /\[\]$/,
        ct = /\r?\n/g,
        ut = /^(?:submit|button|image|reset|file)$/i,
        pt = /^(?:input|select|textarea|keygen)/i;

    function ft(e, t, n, r) {
        var o;
        if ($.isArray(t)) $.each(t, function(t, o) {
            n || lt.test(e) ? r(e, o) : ft(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r)
        });
        else if (n || "object" !== $.type(t)) r(e, t);
        else
            for (o in t) ft(e + "[" + o + "]", t[o], n, r)
    }
    $.fn.extend({
        serialize: function() {
            return $.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = $.prop(this, "elements");
                return e ? $.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !$(this).is(":disabled") && pt.test(this.nodeName) && !ut.test(e) && (this.checked || !we.test(e))
            }).map(function(e, t) {
                var n = $(this).val();
                return null == n ? null : $.isArray(n) ? $.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(ct, "\r\n")
                }
            }).get()
        }
    }), $.param = function(e, n) {
        var r, o = [],
            i = function(e, t) {
                t = $.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = $.ajaxSettings && $.ajaxSettings.traditional), $.isArray(e) || e.jquery && !$.isPlainObject(e)) $.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (r in e) ft(r, e[r], n, i);
        return o.join("&").replace(at, "+")
    }, $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        $.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), $.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var dt, ht, gt = $.now(),
        mt = /\?/,
        vt = /#.*$/,
        bt = /([?&])_=[^&]*/,
        yt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        $t = /^(?:GET|HEAD)$/,
        xt = /^\/\//,
        wt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        kt = $.fn.load,
        Tt = {},
        St = {},
        Ct = "*/".concat("*");
    try {
        ht = i.href
    } catch (e) {
        (ht = s.createElement("a")).href = "", ht = ht.href
    }

    function Et(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0,
                i = t.toLowerCase().match(w) || [];
            if ($.isFunction(n))
                for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function At(e, n, r, o) {
        var i = {},
            s = e === St;

        function a(l) {
            var c;
            return i[l] = !0, $.each(e[l] || [], function(e, l) {
                var u = l(n, r, o);
                return "string" != typeof u || s || i[u] ? s ? !(c = u) : t : (n.dataTypes.unshift(u), a(u), !1)
            }), c
        }
        return a(n.dataTypes[0]) || !i["*"] && a("*")
    }

    function Pt(e, n) {
        var r, o, i = $.ajaxSettings.flatOptions || {};
        for (o in n) n[o] !== t && ((i[o] ? e : r || (r = {}))[o] = n[o]);
        return r && $.extend(!0, e, r), e
    }
    dt = wt.exec(ht.toLowerCase()) || [], $.fn.load = function(e, n, r) {
        if ("string" != typeof e && kt) return kt.apply(this, arguments);
        var o, i, s, a = this,
            l = e.indexOf(" ");
        return l >= 0 && (o = e.slice(l, e.length), e = e.slice(0, l)), $.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (s = "POST"), a.length > 0 && $.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n
        }).done(function(e) {
            i = arguments, a.html(o ? $("<div>").append($.parseHTML(e)).find(o) : e)
        }).complete(r && function(e, t) {
            a.each(r, i || [e.responseText, t, e])
        }), this
    }, $.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        $.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), $.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ht,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(dt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ct,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": $.parseJSON,
                "text xml": $.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Pt(Pt(e, $.ajaxSettings), t) : Pt($.ajaxSettings, e)
        },
        ajaxPrefilter: Et(Tt),
        ajaxTransport: Et(St),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, o, i, s, a, l, c, u, p = $.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? $(f) : $.event,
                h = $.Deferred(),
                g = $.Callbacks("once memory"),
                m = p.statusCode || {},
                v = {},
                b = {},
                y = 0,
                x = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === y) {
                            if (!u)
                                for (u = {}; t = yt.exec(s);) u[t[1].toLowerCase()] = t[2];
                            t = u[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return y || (e = b[n] = b[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return y || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > y)
                                for (t in e) m[t] = [m[t], e[t]];
                            else k.always(e[k.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return c && c.abort(t), T(0, t), this
                    }
                };
            if (h.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, p.url = ((e || p.url || ht) + "").replace(vt, "").replace(xt, dt[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = $.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = wt.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === dt[1] && r[2] === dt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (dt[3] || ("http:" === dt[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = $.param(p.data, p.traditional)), At(Tt, p, n, k), 2 === y) return k;
            (l = p.global) && 0 == $.active++ && $.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !$t.test(p.type), i = p.url, p.hasContent || (p.data && (i = p.url += (mt.test(i) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = bt.test(i) ? i.replace(bt, "$1_=" + gt++) : i + (mt.test(i) ? "&" : "?") + "_=" + gt++)), p.ifModified && ($.lastModified[i] && k.setRequestHeader("If-Modified-Since", $.lastModified[i]), $.etag[i] && k.setRequestHeader("If-None-Match", $.etag[i])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ct + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers) k.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (!1 === p.beforeSend.call(f, k, p) || 2 === y)) return k.abort();
            x = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) k[o](p[o]);
            if (c = At(St, p, n, k)) {
                k.readyState = 1, l && d.trigger("ajaxSend", [k, p]), p.async && p.timeout > 0 && (a = setTimeout(function() {
                    k.abort("timeout")
                }, p.timeout));
                try {
                    y = 1, c.send(v, T)
                } catch (e) {
                    if (!(2 > y)) throw e;
                    T(-1, e)
                }
            } else T(-1, "No Transport");

            function T(e, n, r, o) {
                var u, v, b, x, w, T = n;
                2 !== y && (y = 2, a && clearTimeout(a), c = t, s = o || "", k.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, r && (x = function(e, n, r) {
                    var o, i, s, a, l = e.contents,
                        c = e.dataTypes;
                    for (;
                        "*" === c[0];) c.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
                    if (i)
                        for (a in l)
                            if (l[a] && l[a].test(i)) {
                                c.unshift(a);
                                break
                            }
                    if (c[0] in r) s = c[0];
                    else {
                        for (a in r) {
                            if (!c[0] || e.converters[a + " " + c[0]]) {
                                s = a;
                                break
                            }
                            o || (o = a)
                        }
                        s = s || o
                    }
                    return s ? (s !== c[0] && c.unshift(s), r[s]) : t
                }(p, k, r)), x = function(e, t, n, r) {
                    var o, i, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    i = u.shift();
                    for (; i;)
                        if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift())
                            if ("*" === i) i = l;
                            else if ("*" !== l && l !== i) {
                        if (!(s = c[l + " " + i] || c["* " + i]))
                            for (o in c)
                                if (a = o.split(" "), a[1] === i && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (i = a[0], u.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + i
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, x, k, u), u ? (p.ifModified && ((w = k.getResponseHeader("Last-Modified")) && ($.lastModified[i] = w), (w = k.getResponseHeader("etag")) && ($.etag[i] = w)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, v = x.data, u = !(b = x.error))) : (b = T, (e || !T) && (T = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (n || T) + "", u ? h.resolveWith(f, [v, T, k]) : h.rejectWith(f, [k, T, b]), k.statusCode(m), m = t, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [k, p, u ? v : b]), g.fireWith(f, [k, T]), l && (d.trigger("ajaxComplete", [k, p]), --$.active || $.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(e, t, n) {
            return $.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return $.get(e, t, n, "script")
        }
    }), $.each(["get", "post"], function(e, n) {
        $[n] = function(e, r, o, i) {
            return $.isFunction(r) && (i = i || o, o = r, r = t), $.ajax({
                url: e,
                type: n,
                dataType: i,
                data: r,
                success: o
            })
        }
    }), $.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return $.globalEval(e), e
            }
        }
    }), $.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), $.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = s.head || $("head")[0] || s.documentElement;
            return {
                send: function(t, o) {
                    (n = s.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || o(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Dt = [],
        Nt = /(=)\?(?=&|$)|\?\?/;
    $.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Dt.pop() || $.expando + "_" + gt++;
            return this[e] = !0, e
        }
    }), $.ajaxPrefilter("json jsonp", function(n, r, o) {
        var i, s, a, l = !1 !== n.jsonp && (Nt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (i = n.jsonpCallback = $.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Nt, "$1" + i) : !1 !== n.jsonp && (n.url += (mt.test(n.url) ? "&" : "?") + n.jsonp + "=" + i), n.converters["script json"] = function() {
            return a || $.error(i + " was not called"), a[0]
        }, n.dataTypes[0] = "json", s = e[i], e[i] = function() {
            a = arguments
        }, o.always(function() {
            e[i] = s, n[i] && (n.jsonpCallback = r.jsonpCallback, Dt.push(i)), a && $.isFunction(s) && s(a[0]), a = s = t
        }), "script") : t
    });
    var Ot, It, Mt = 0,
        _t = e.ActiveXObject && function() {
            var e;
            for (e in Ot) Ot[e](t, !0)
        };

    function Lt() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    $.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && Lt() || function() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }()
    } : Lt, It = $.ajaxSettings.xhr(), $.support.cors = !!It && "withCredentials" in It, (It = $.support.ajax = !!It) && $.ajaxTransport(function(n) {
        var r;
        if (!n.crossDomain || $.support.cors) return {
            send: function(o, i) {
                var s, a, l = n.xhr();
                if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                    for (a in n.xhrFields) l[a] = n.xhrFields[a];
                n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (a in o) l.setRequestHeader(a, o[a])
                } catch (e) {}
                l.send(n.hasContent && n.data || null), r = function(e, o) {
                    var a, c, u, p;
                    try {
                        if (r && (o || 4 === l.readyState))
                            if (r = t, s && (l.onreadystatechange = $.noop, _t && delete Ot[s]), o) 4 !== l.readyState && l.abort();
                            else {
                                p = {}, a = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                try {
                                    u = l.statusText
                                } catch (e) {
                                    u = ""
                                }
                                a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = p.text ? 200 : 404
                            }
                    } catch (e) {
                        o || i(-1, e)
                    }
                    p && i(a, u, p, c)
                }, n.async ? 4 === l.readyState ? setTimeout(r) : (s = ++Mt, _t && (Ot || (Ot = {}, $(e).unload(_t)), Ot[s] = r), l.onreadystatechange = r) : r()
            },
            abort: function() {
                r && r(t, !0)
            }
        }
    });
    var Ft, Bt, Rt = /^(?:toggle|show|hide)$/,
        jt = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
        qt = /queueHooks$/,
        Ut = [function(e, t, n) {
            var r, o, i, s, a, l, c = this,
                u = {},
                p = e.style,
                f = e.nodeType && et(e),
                d = $._data(e, "fxshow");
            n.queue || (null == (a = $._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, c.always(function() {
                c.always(function() {
                    a.unqueued--, $.queue(e, "fx").length || a.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === $.css(e, "display") && "none" === $.css(e, "float") && ($.support.inlineBlockNeedsLayout && "inline" !== it(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", $.support.shrinkWrapBlocks || c.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (o = t[r], Rt.exec(o)) {
                    if (delete t[r], i = i || "toggle" === o, o === (f ? "hide" : "show")) continue;
                    u[r] = d && d[r] || $.style(e, r)
                }
            if (!$.isEmptyObject(u)) {
                d ? "hidden" in d && (f = d.hidden) : d = $._data(e, "fxshow", {}), i && (d.hidden = !f), f ? $(e).show() : c.done(function() {
                    $(e).hide()
                }), c.done(function() {
                    var t;
                    $._removeData(e, "fxshow");
                    for (t in u) $.style(e, t, u[t])
                });
                for (r in u) s = zt(f ? d[r] : 0, r, c), r in d || (d[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
            }
        }],
        Ht = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    o = jt.exec(t),
                    i = o && o[3] || ($.cssNumber[e] ? "" : "px"),
                    s = ($.cssNumber[e] || "px" !== i && +r) && jt.exec($.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== i) {
                    i = i || s[3], o = o || [], s = +r || 1;
                    do {
                        a = a || ".5", s /= a, $.style(n.elem, e, s + i)
                    } while (a !== (a = n.cur() / r) && 1 !== a && --l)
                }
                return o && (s = n.start = +s || +r || 0, n.unit = i, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };

    function Vt() {
        return setTimeout(function() {
            Ft = t
        }), Ft = $.now()
    }

    function zt(e, t, n) {
        for (var r, o = (Ht[t] || []).concat(Ht["*"]), i = 0, s = o.length; s > i; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function Wt(e, t, n) {
        var r, o, i = 0,
            s = Ut.length,
            a = $.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = Ft || Vt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), i = 0, s = c.tweens.length; s > i; i++) c.tweens[i].run(r);
                return a.notifyWith(e, [c, r, n]), 1 > r && s ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: $.extend({}, t),
                opts: $.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ft || Vt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = $.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; r > n; n++) c.tweens[n].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, r, o, i, s;
                for (n in e)
                    if (r = $.camelCase(n), o = t[r], i = e[n], $.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), s = $.cssHooks[r], s && "expand" in s) {
                        i = s.expand(i), delete e[r];
                        for (n in i) n in e || (e[n] = i[n], t[n] = o)
                    } else t[r] = o
            }(u, c.opts.specialEasing); s > i; i++)
            if (r = Ut[i].call(c, e, u, c.opts)) return r;
        return $.map(u, zt, c), $.isFunction(c.opts.start) && c.opts.start.call(e, c), $.fx.timer($.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function Gt(e, t, n, r, o) {
        return new Gt.prototype.init(e, t, n, r, o)
    }

    function Yt(e, t) {
        var n, r = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Xe[o], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function Kt(e) {
        return $.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    $.Animation = $.extend(Wt, {
        tweener: function(e, t) {
            $.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, o = e.length; o > r; r++) n = e[r], Ht[n] = Ht[n] || [], Ht[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Ut.unshift(e) : Ut.push(e)
        }
    }), $.Tween = Gt, Gt.prototype = {
        constructor: Gt,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || ($.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Gt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Gt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Gt.propHooks[this.prop];
            return this.pos = t = this.options.duration ? $.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Gt.propHooks._default.set(this), this
        }
    }, Gt.prototype.init.prototype = Gt.prototype, Gt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = $.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                $.fx.step[e.prop] ? $.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[$.cssProps[e.prop]] || $.cssHooks[e.prop]) ? $.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Gt.propHooks.scrollTop = Gt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, $.each(["toggle", "show", "hide"], function(e, t) {
        var n = $.fn[t];
        $.fn[t] = function(e, r, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Yt(t, !0), e, r, o)
        }
    }), $.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(et).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var o = $.isEmptyObject(e),
                i = $.speed(t, n, r),
                s = function() {
                    var t = Wt(this, $.extend({}, e), i);
                    (o || $._data(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
        },
        stop: function(e, n, r) {
            var o = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    i = $.timers,
                    s = $._data(this);
                if (n) s[n] && s[n].stop && o(s[n]);
                else
                    for (n in s) s[n] && s[n].stop && qt.test(n) && o(s[n]);
                for (n = i.length; n--;) i[n].elem !== this || null != e && i[n].queue !== e || (i[n].anim.stop(r), t = !1, i.splice(n, 1));
                (t || !r) && $.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = $._data(this),
                    r = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    i = $.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, $.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), $.each({
        slideDown: Yt("show"),
        slideUp: Yt("hide"),
        slideToggle: Yt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        $.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), $.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? $.extend({}, e) : {
            complete: n || !n && t || $.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !$.isFunction(t) && t
        };
        return r.duration = $.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in $.fx.speeds ? $.fx.speeds[r.duration] : $.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            $.isFunction(r.old) && r.old.call(this), r.queue && $.dequeue(this, r.queue)
        }, r
    }, $.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, $.timers = [], $.fx = Gt.prototype.init, $.fx.tick = function() {
        var e, n = $.timers,
            r = 0;
        for (Ft = $.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || $.fx.stop(), Ft = t
    }, $.fx.timer = function(e) {
        e() && $.timers.push(e) && $.fx.start()
    }, $.fx.interval = 13, $.fx.start = function() {
        Bt || (Bt = setInterval($.fx.tick, $.fx.interval))
    }, $.fx.stop = function() {
        clearInterval(Bt), Bt = null
    }, $.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, $.fx.step = {}, $.expr && $.expr.filters && ($.expr.filters.animated = function(e) {
        return $.grep($.timers, function(t) {
            return e === t.elem
        }).length
    }), $.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            $.offset.setOffset(this, e, t)
        });
        var n, r, i = {
                top: 0,
                left: 0
            },
            s = this[0],
            a = s && s.ownerDocument;
        return a ? (n = a.documentElement, $.contains(n, s) ? (typeof s.getBoundingClientRect !== o && (i = s.getBoundingClientRect()), r = Kt(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i) : void 0
    }, $.offset = {
        setOffset: function(e, t, n) {
            var r = $.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var o, i, s = $(e),
                a = s.offset(),
                l = $.css(e, "top"),
                c = $.css(e, "left"),
                u = {},
                p = {};
            ("absolute" === r || "fixed" === r) && $.inArray("auto", [l, c]) > -1 ? (o = (p = s.position()).top, i = p.left) : (o = parseFloat(l) || 0, i = parseFloat(c) || 0), $.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (u.top = t.top - a.top + o), null != t.left && (u.left = t.left - a.left + i), "using" in t ? t.using.call(e, u) : s.css(u)
        }
    }, $.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === $.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), $.nodeName(e[0], "html") || (n = e.offset()), n.top += $.css(e[0], "borderTopWidth", !0), n.left += $.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - $.css(r, "marginTop", !0),
                    left: t.left - n.left - $.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || a; e && !$.nodeName(e, "html") && "static" === $.css(e, "position");) e = e.offsetParent;
                return e || a
            })
        }
    }), $.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        $.fn[e] = function(o) {
            return $.access(this, function(e, o, i) {
                var s = Kt(e);
                return i === t ? s ? n in s ? s[n] : s.document.documentElement[o] : e[o] : (s ? s.scrollTo(r ? $(s).scrollLeft() : i, r ? i : $(s).scrollTop()) : e[o] = i, t)
            }, e, o, arguments.length, null)
        }
    }), $.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        $.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, o) {
            $.fn[o] = function(o, i) {
                var s = arguments.length && (r || "boolean" != typeof o),
                    a = r || (!0 === o || !0 === i ? "margin" : "border");
                return $.access(this, function(n, r, o) {
                    var i;
                    return $.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (i = n.documentElement, Math.max(n.body["scroll" + e], i["scroll" + e], n.body["offset" + e], i["offset" + e], i["client" + e])) : o === t ? $.css(n, r, a) : $.style(n, r, o, a)
                }, n, s ? o : t, s, null)
            }
        })
    }), $.fn.size = function() {
        return this.length
    }, $.fn.andSelf = $.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = $ : (e.jQuery = e.$ = $, "function" == typeof define && define.amd && define("jquery", [], function() {
        return $
    }))
}(window),
function(e) {
    "use strict";

    function t(e, t, n, r) {
        var o = e.c,
            i = e.e + t + 1;
        if (1 === n) r = o[i] >= 5;
        else if (2 === n) r = o[i] > 5 || 5 == o[i] && (r || 0 > i || o[i + 1] !== d || 1 & o[i - 1]);
        else if (3 === n) r = r || o[i] !== d || 0 > i;
        else if (r = !1, 0 !== n) throw Error(c + "rounding mode");
        if (1 > i || !o[0]) o.length = 1, r ? (e.e = -t, o[0] = 1) : o[0] = e.e = 0;
        else {
            if (o.length = i--, r)
                for (; ++o[i] > 9;) o[i] = 0, i-- || (++e.e, o.unshift(1));
            for (i = o.length; !o[--i];) o.pop()
        }
        return e
    }

    function n(e, n, r, o) {
        var i, a, l = e.constructor,
            p = !e.c[0];
        if (r !== d) {
            if (r !== ~~r || (3 == n) > r || r > s) throw Error(3 == n ? c + "precision" : u);
            for (r = o - (e = new l(e)).e, e.c.length > ++o && t(e, r, l.RM), 2 == n && (o = e.e + r + 1); e.c.length < o;) e.c.push(0)
        }
        if (i = e.e, r = (a = e.c.join("")).length, 2 != n && (1 == n || 3 == n && i >= o || i <= l.NE || i >= l.PE)) a = a.charAt(0) + (r > 1 ? "." + a.slice(1) : "") + (0 > i ? "e" : "e+") + i;
        else if (0 > i) {
            for (; ++i;) a = "0" + a;
            a = "0." + a
        } else if (i > 0)
            if (++i > r)
                for (i -= r; i--;) a += "0";
            else r > i && (a = a.slice(0, i) + "." + a.slice(i));
        else r > 1 && (a = a.charAt(0) + "." + a.slice(1));
        return e.s < 0 && (!p || 4 == n) ? "-" + a : a
    }
    var r, o = 20,
        i = 1,
        s = 1e6,
        a = -7,
        l = 21,
        c = "[big.js] Invalid ",
        u = c + "decimal places",
        p = "[big.js] Division by zero",
        f = {},
        d = void 0,
        h = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    f.abs = function() {
        var e = new this.constructor(this);
        return e.s = 1, e
    }, f.cmp = function(e) {
        var t, n = this.c,
            r = (e = new this.constructor(e)).c,
            o = this.s,
            i = e.s,
            s = this.e,
            a = e.e;
        if (!n[0] || !r[0]) return n[0] ? o : r[0] ? -i : 0;
        if (o != i) return o;
        if (t = 0 > o, s != a) return s > a ^ t ? 1 : -1;
        for (i = (s = n.length) < (a = r.length) ? s : a, o = -1; ++o < i;)
            if (n[o] != r[o]) return n[o] > r[o] ^ t ? 1 : -1;
        return s == a ? 0 : s > a ^ t ? 1 : -1
    }, f.div = function(e) {
        var n = this.constructor,
            r = this.c,
            o = (e = new n(e)).c,
            i = this.s == e.s ? 1 : -1,
            a = n.DP;
        if (a !== ~~a || 0 > a || a > s) throw Error(u);
        if (!o[0]) throw Error(p);
        if (!r[0]) return new n(0 * i);
        var l, c, f, h, g, m = o.slice(),
            v = l = o.length,
            b = r.length,
            y = r.slice(0, l),
            $ = y.length,
            x = e,
            w = x.c = [],
            k = 0,
            T = a + (x.e = this.e - e.e) + 1;
        for (x.s = i, i = 0 > T ? 0 : T, m.unshift(0); $++ < l;) y.push(0);
        do {
            for (f = 0; 10 > f; f++) {
                if (l != ($ = y.length)) h = l > $ ? 1 : -1;
                else
                    for (g = -1, h = 0; ++g < l;)
                        if (o[g] != y[g]) {
                            h = o[g] > y[g] ? 1 : -1;
                            break
                        } if (!(0 > h)) break;
                for (c = $ == l ? o : m; $;) {
                    if (y[--$] < c[$]) {
                        for (g = $; g && !y[--g];) y[g] = 9;
                        --y[g], y[$] += 10
                    }
                    y[$] -= c[$]
                }
                for (; !y[0];) y.shift()
            }
            w[k++] = h ? f : ++f, y[0] && h ? y[$] = r[v] || 0 : y = [r[v]]
        } while ((v++ < b || y[0] !== d) && i--);
        return w[0] || 1 == k || (w.shift(), x.e--), k > T && t(x, a, n.RM, y[0] !== d), x
    }, f.eq = function(e) {
        return !this.cmp(e)
    }, f.gt = function(e) {
        return this.cmp(e) > 0
    }, f.gte = function(e) {
        return this.cmp(e) > -1
    }, f.lt = function(e) {
        return this.cmp(e) < 0
    }, f.lte = function(e) {
        return this.cmp(e) < 1
    }, f.minus = f.sub = function(e) {
        var t, n, r, o, i = this.constructor,
            s = this.s,
            a = (e = new i(e)).s;
        if (s != a) return e.s = -a, this.plus(e);
        var l = this.c.slice(),
            c = this.e,
            u = e.c,
            p = e.e;
        if (!l[0] || !u[0]) return u[0] ? (e.s = -a, e) : new i(l[0] ? this : 0);
        if (s = c - p) {
            for ((o = 0 > s) ? (s = -s, r = l) : (p = c, r = u), r.reverse(), a = s; a--;) r.push(0);
            r.reverse()
        } else
            for (n = ((o = l.length < u.length) ? l : u).length, s = a = 0; n > a; a++)
                if (l[a] != u[a]) {
                    o = l[a] < u[a];
                    break
                } if (o && (r = l, l = u, u = r, e.s = -e.s), (a = (n = u.length) - (t = l.length)) > 0)
            for (; a--;) l[t++] = 0;
        for (a = t; n > s;) {
            if (l[--n] < u[n]) {
                for (t = n; t && !l[--t];) l[t] = 9;
                --l[t], l[n] += 10
            }
            l[n] -= u[n]
        }
        for (; 0 === l[--a];) l.pop();
        for (; 0 === l[0];) l.shift(), --p;
        return l[0] || (e.s = 1, l = [p = 0]), e.c = l, e.e = p, e
    }, f.mod = function(e) {
        var t, n = this,
            r = n.constructor,
            o = n.s,
            i = (e = new r(e)).s;
        if (!e.c[0]) throw Error(p);
        return n.s = e.s = 1, t = 1 == e.cmp(n), n.s = o, e.s = i, t ? new r(n) : (o = r.DP, i = r.RM, r.DP = r.RM = 0, n = n.div(e), r.DP = o, r.RM = i, this.minus(n.times(e)))
    }, f.plus = f.add = function(e) {
        var t, n = this.constructor,
            r = this.s,
            o = (e = new n(e)).s;
        if (r != o) return e.s = -o, this.minus(e);
        var i = this.e,
            s = this.c,
            a = e.e,
            l = e.c;
        if (!s[0] || !l[0]) return l[0] ? e : new n(s[0] ? this : 0 * r);
        if (s = s.slice(), r = i - a) {
            for (r > 0 ? (a = i, t = l) : (r = -r, t = s), t.reverse(); r--;) t.push(0);
            t.reverse()
        }
        for (s.length - l.length < 0 && (t = l, l = s, s = t), r = l.length, o = 0; r; s[r] %= 10) o = (s[--r] = s[r] + l[r] + o) / 10 | 0;
        for (o && (s.unshift(o), ++a), r = s.length; 0 === s[--r];) s.pop();
        return e.c = s, e.e = a, e
    }, f.pow = function(e) {
        var t = this,
            n = new t.constructor(1),
            r = n,
            o = 0 > e;
        if (e !== ~~e || -1e6 > e || e > 1e6) throw Error(c + "exponent");
        for (o && (e = -e); 1 & e && (r = r.times(t)), e >>= 1;) t = t.times(t);
        return o ? n.div(r) : r
    }, f.round = function(e, n) {
        var r = this.constructor;
        if (e === d) e = 0;
        else if (e !== ~~e || 0 > e || e > s) throw Error(u);
        return t(new r(this), e, n === d ? r.RM : n)
    }, f.sqrt = function() {
        var e, n, r, o = this.constructor,
            i = this.s,
            s = this.e,
            a = new o(.5);
        if (!this.c[0]) return new o(this);
        if (0 > i) throw Error("[big.js] No square root");
        0 === (i = Math.sqrt(this.toString())) || i === 1 / 0 ? ((n = this.c.join("")).length + s & 1 || (n += "0"), (e = new o(Math.sqrt(n).toString())).e = ((s + 1) / 2 | 0) - (0 > s || 1 & s)) : e = new o(i.toString()), s = e.e + (o.DP += 4);
        do {
            r = e, e = a.times(r.plus(this.div(r)))
        } while (r.c.slice(0, s).join("") !== e.c.slice(0, s).join(""));
        return t(e, o.DP -= 4, o.RM)
    }, f.times = f.mul = function(e) {
        var t, n = this.constructor,
            r = this.c,
            o = (e = new n(e)).c,
            i = r.length,
            s = o.length,
            a = this.e,
            l = e.e;
        if (e.s = this.s == e.s ? 1 : -1, !r[0] || !o[0]) return new n(0 * e.s);
        for (e.e = a + l, s > i && (t = r, r = o, o = t, l = i, i = s, s = l), t = new Array(l = i + s); l--;) t[l] = 0;
        for (a = s; a--;) {
            for (s = 0, l = i + a; l > a;) s = t[l] + o[a] * r[l - a - 1] + s, t[l--] = s % 10, s = s / 10 | 0;
            t[l] = (t[l] + s) % 10
        }
        for (s ? ++e.e : t.shift(), a = t.length; !t[--a];) t.pop();
        return e.c = t, e
    }, f.toExponential = function(e) {
        return n(this, 1, e, e)
    }, f.toFixed = function(e) {
        return n(this, 2, e, this.e + e)
    }, f.toPrecision = function(e) {
        return n(this, 3, e, e - 1)
    }, f.toString = function() {
        return n(this)
    }, f.valueOf = f.toJSON = function() {
        return n(this, 4)
    }, (r = function e() {
        function t(n) {
            return this instanceof t ? (n instanceof t ? (this.s = n.s, this.e = n.e, this.c = n.c.slice()) : function(e, t) {
                var n, r, o;
                if (0 === t && 0 > 1 / t) t = "-0";
                else if (!h.test(t += "")) throw Error(c + "number");
                for (e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (0 > n && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : 0 > n && (n = t.length), o = t.length, r = 0; o > r && "0" == t.charAt(r);) ++r;
                if (r == o) e.c = [e.e = 0];
                else {
                    for (; o > 0 && "0" == t.charAt(--o););
                    for (e.e = n - r - 1, e.c = [], n = 0; o >= r;) e.c[n++] = +t.charAt(r++)
                }
            }(this, n), void(this.constructor = t)) : n === d ? e() : new t(n)
        }
        return t.prototype = f, t.DP = o, t.RM = i, t.NE = a, t.PE = l, t.version = "5.0.2", t
    }()).default = r.Big = r, "function" == typeof define && define.amd ? define(function() {
        return r
    }) : "undefined" != typeof module && module.exports ? module.exports = r : e.Big = r
}(this),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    var t, n, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
    if (e.event.fixHooks)
        for (var i = r.length; i;) e.event.fixHooks[r[--i]] = e.event.mouseHooks;

    function s(r) {
        var o, i, s, a = r || window.event,
            l = [].slice.call(arguments, 1),
            c = 0,
            u = 0,
            p = 0;
        return (r = e.event.fix(a)).type = "mousewheel", a.wheelDelta && (c = a.wheelDelta), a.detail && (c = -1 * a.detail), a.deltaY && (c = p = -1 * a.deltaY), a.deltaX && (c = -1 * (u = a.deltaX)), void 0 !== a.wheelDeltaY && (p = a.wheelDeltaY), void 0 !== a.wheelDeltaX && (u = -1 * a.wheelDeltaX), o = Math.abs(c), (!t || o < t) && (t = o), i = Math.max(Math.abs(p), Math.abs(u)), (!n || i < n) && (n = i), s = c > 0 ? "floor" : "ceil", c = Math[s](c / t), u = Math[s](u / n), p = Math[s](p / n), l.unshift(r, c, u, p), (e.event.dispatch || e.event.handle).apply(this, l)
    }
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var e = o.length; e;) this.addEventListener(o[--e], s, !1);
            else this.onmousewheel = s
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = o.length; e;) this.removeEventListener(o[--e], s, !1);
            else this.onmousewheel = null
        }
    }, e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}),
function(e) {
    var t, n, r, o, i, s, a, l, c, u, p, f, d, h, g, m, v, b, y, $, x, w, k, T, S, C, E, A, P, D, N, O, I, M, _, L, F, B = (t = 65, n = {
        eventName: "click",
        onShow: function() {},
        onBeforeShow: function() {},
        onHide: function() {},
        onChange: function() {},
        onSubmit: function() {},
        color: "ff0000",
        livePreview: !0,
        flat: !1
    }, r = function(t, n) {
        var r = _(t);
        e(n).data("colorpicker").fields.eq(1).val(r.r).end().eq(2).val(r.g).end().eq(3).val(r.b).end()
    }, o = function(t, n) {
        e(n).data("colorpicker").fields.eq(4).val(t.h).end().eq(5).val(t.s).end().eq(6).val(t.b).end()
    }, i = function(t, n) {
        e(n).data("colorpicker").fields.eq(0).val(L(t)).end()
    }, s = function(t, n) {
        e(n).data("colorpicker").selector.css("backgroundColor", "#" + L({
            h: t.h,
            s: 100,
            b: 100
        })), e(n).data("colorpicker").selectorIndic.css({
            left: parseInt(150 * t.s / 100, 10),
            top: parseInt(150 * (100 - t.b) / 100, 10)
        })
    }, a = function(t, n) {
        e(n).data("colorpicker").hue.css("top", parseInt(150 - 150 * t.h / 360, 10))
    }, l = function(t, n) {
        e(n).data("colorpicker").currentColor.css("backgroundColor", "#" + L(t))
    }, c = function(t, n) {
        e(n).data("colorpicker").newColor.css("backgroundColor", "#" + L(t))
    }, u = function(n) {
        var r = n.charCode || n.keyCode || -1;
        if (r > t && r <= 90 || 32 == r) return !1;
        !0 === e(this).parent().parent().data("colorpicker").livePreview && p.apply(this)
    }, p = function(t) {
        var n, l = e(this).parent().parent();
        this.parentNode.className.indexOf("_hex") > 0 ? l.data("colorpicker").color = n = I(O(this.value)) : this.parentNode.className.indexOf("_hsb") > 0 ? l.data("colorpicker").color = n = D({
            h: parseInt(l.data("colorpicker").fields.eq(4).val(), 10),
            s: parseInt(l.data("colorpicker").fields.eq(5).val(), 10),
            b: parseInt(l.data("colorpicker").fields.eq(6).val(), 10)
        }) : l.data("colorpicker").color = n = M(N({
            r: parseInt(l.data("colorpicker").fields.eq(1).val(), 10),
            g: parseInt(l.data("colorpicker").fields.eq(2).val(), 10),
            b: parseInt(l.data("colorpicker").fields.eq(3).val(), 10)
        })), t && (r(n, l.get(0)), i(n, l.get(0)), o(n, l.get(0))), s(n, l.get(0)), a(n, l.get(0)), c(n, l.get(0)), l.data("colorpicker").onChange.apply(l, [n, L(n), _(n)])
    }, f = function(t) {
        e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus")
    }, d = function() {
        t = this.parentNode.className.indexOf("_hex") > 0 ? 70 : 65, e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"), e(this).parent().addClass("colorpicker_focus")
    }, h = function(t) {
        var n = e(this).parent().find("input").focus(),
            r = {
                el: e(this).parent().addClass("colorpicker_slider"),
                max: this.parentNode.className.indexOf("_hsb_h") > 0 ? 360 : this.parentNode.className.indexOf("_hsb") > 0 ? 100 : 255,
                y: t.pageY,
                field: n,
                val: parseInt(n.val(), 10),
                preview: e(this).parent().parent().data("colorpicker").livePreview
            };
        e(document).bind("mouseup", r, m), e(document).bind("mousemove", r, g)
    }, g = function(e) {
        return e.data.field.val(Math.max(0, Math.min(e.data.max, parseInt(e.data.val + e.pageY - e.data.y, 10)))), e.data.preview && p.apply(e.data.field.get(0), [!0]), !1
    }, m = function(t) {
        return p.apply(t.data.field.get(0), [!0]), t.data.el.removeClass("colorpicker_slider").find("input").focus(), e(document).unbind("mouseup", m), e(document).unbind("mousemove", g), !1
    }, v = function(t) {
        var n = {
            cal: e(this).parent(),
            y: e(this).offset().top
        };
        n.preview = n.cal.data("colorpicker").livePreview, e(document).bind("mouseup", n, y), e(document).bind("mousemove", n, b)
    }, b = function(e) {
        return p.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360 * (150 - Math.max(0, Math.min(150, e.pageY - e.data.y))) / 150, 10)).get(0), [e.data.preview]), !1
    }, y = function(t) {
        return r(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), i(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), e(document).unbind("mouseup", y), e(document).unbind("mousemove", b), !1
    }, $ = function(t) {
        var n = {
            cal: e(this).parent(),
            pos: e(this).offset()
        };
        n.preview = n.cal.data("colorpicker").livePreview, e(document).bind("mouseup", n, w), e(document).bind("mousemove", n, x)
    }, x = function(e) {
        return p.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, e.pageY - e.data.pos.top))) / 150, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(150, e.pageX - e.data.pos.left)) / 150, 10)).get(0), [e.data.preview]), !1
    }, w = function(t) {
        return r(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), i(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), e(document).unbind("mouseup", w), e(document).unbind("mousemove", x), !1
    }, k = function(t) {
        e(this).addClass("colorpicker_focus")
    }, T = function(t) {
        e(this).removeClass("colorpicker_focus")
    }, S = function(t) {
        var n = e(this).parent(),
            r = n.data("colorpicker").color;
        n.data("colorpicker").origColor = r, l(r, n.get(0)), n.data("colorpicker").onSubmit(r, L(r), _(r), n.data("colorpicker").el)
    }, C = function(t) {
        var n = e("#" + e(this).data("colorpickerId"));
        n.data("colorpicker").onBeforeShow.apply(this, [n.get(0)]);
        var r = e(this).offset(),
            o = P(),
            i = r.top + this.offsetHeight,
            s = r.left;
        return i + 176 > o.t + o.h && (i -= this.offsetHeight + 176), s + 356 > o.l + o.w && (s -= 356), n.css({
            left: s + "px",
            top: i + "px"
        }), 0 != n.data("colorpicker").onShow.apply(this, [n.get(0)]) && n.show(), e(document).bind("mousedown", {
            cal: n
        }, E), !1
    }, E = function(t) {
        A(t.data.cal.get(0), t.target, t.data.cal.get(0)) || (0 != t.data.cal.data("colorpicker").onHide.apply(this, [t.data.cal.get(0)]) && t.data.cal.hide(), e(document).unbind("mousedown", E))
    }, A = function(e, t, n) {
        if (e == t) return !0;
        if (e.contains) return e.contains(t);
        if (e.compareDocumentPosition) return !!(16 & e.compareDocumentPosition(t));
        for (var r = t.parentNode; r && r != n;) {
            if (r == e) return !0;
            r = r.parentNode
        }
        return !1
    }, P = function() {
        var e = "CSS1Compat" == document.compatMode;
        return {
            l: window.pageXOffset || (e ? document.documentElement.scrollLeft : document.body.scrollLeft),
            t: window.pageYOffset || (e ? document.documentElement.scrollTop : document.body.scrollTop),
            w: window.innerWidth || (e ? document.documentElement.clientWidth : document.body.clientWidth),
            h: window.innerHeight || (e ? document.documentElement.clientHeight : document.body.clientHeight)
        }
    }, D = function(e) {
        return {
            h: Math.min(360, Math.max(0, e.h)),
            s: Math.min(100, Math.max(0, e.s)),
            b: Math.min(100, Math.max(0, e.b))
        }
    }, N = function(e) {
        return {
            r: Math.min(255, Math.max(0, e.r)),
            g: Math.min(255, Math.max(0, e.g)),
            b: Math.min(255, Math.max(0, e.b))
        }
    }, O = function(e) {
        var t = 6 - e.length;
        if (t > 0) {
            for (var n = [], r = 0; r < t; r++) n.push("0");
            n.push(e), e = n.join("")
        }
        return e
    }, I = function(e) {
        return M((t = e, {
            r: (t = parseInt(t.indexOf("#") > -1 ? t.substring(1) : t, 16)) >> 16,
            g: (65280 & t) >> 8,
            b: 255 & t
        }));
        var t
    }, M = function(e) {
        var t = {
                h: 0,
                s: 0,
                b: 0
            },
            n = Math.min(e.r, e.g, e.b),
            r = Math.max(e.r, e.g, e.b),
            o = r - n;
        return t.b = r, t.s = 0 != r ? 255 * o / r : 0, 0 != t.s ? e.r == r ? t.h = (e.g - e.b) / o : e.g == r ? t.h = 2 + (e.b - e.r) / o : t.h = 4 + (e.r - e.g) / o : t.h = -1, t.h *= 60, t.h < 0 && (t.h += 360), t.s *= 100 / 255, t.b *= 100 / 255, t
    }, _ = function(e) {
        var t = {},
            n = Math.round(e.h),
            r = Math.round(255 * e.s / 100),
            o = Math.round(255 * e.b / 100);
        if (0 == r) t.r = t.g = t.b = o;
        else {
            var i = o,
                s = (255 - r) * o / 255,
                a = n % 60 * (i - s) / 60;
            360 == n && (n = 0), n < 60 ? (t.r = i, t.b = s, t.g = s + a) : n < 120 ? (t.g = i, t.b = s, t.r = i - a) : n < 180 ? (t.g = i, t.r = s, t.b = s + a) : n < 240 ? (t.b = i, t.r = s, t.g = i - a) : n < 300 ? (t.b = i, t.g = s, t.r = s + a) : n < 360 ? (t.r = i, t.g = s, t.b = i - a) : (t.r = 0, t.g = 0, t.b = 0)
        }
        return {
            r: Math.round(t.r),
            g: Math.round(t.g),
            b: Math.round(t.b)
        }
    }, L = function(t) {
        return n = _(t), r = [n.r.toString(16), n.g.toString(16), n.b.toString(16)], e.each(r, function(e, t) {
            1 == t.length && (r[e] = "0" + t)
        }), r.join("");
        var n, r
    }, F = function() {
        var t = e(this).parent(),
            n = t.data("colorpicker").origColor;
        t.data("colorpicker").color = n, r(n, t.get(0)), i(n, t.get(0)), o(n, t.get(0)), s(n, t.get(0)), a(n, t.get(0)), c(n, t.get(0))
    }, {
        init: function(t) {
            if ("string" == typeof(t = e.extend({}, n, t || {})).color) t.color = I(t.color);
            else if (void 0 != t.color.r && void 0 != t.color.g && void 0 != t.color.b) t.color = M(t.color);
            else {
                if (void 0 == t.color.h || void 0 == t.color.s || void 0 == t.color.b) return this;
                t.color = D(t.color)
            }
            return this.each(function() {
                if (!e(this).data("colorpickerId")) {
                    var n = e.extend({}, t);
                    n.origColor = t.color;
                    var g = "collorpicker_" + parseInt(1e3 * Math.random());
                    e(this).data("colorpickerId", g);
                    var m = e('<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>').attr("id", g);
                    n.flat ? m.appendTo(this).show() : m.appendTo(document.body), n.fields = m.find("input").bind("keyup", u).bind("change", p).bind("blur", f).bind("focus", d), m.find("span").bind("mousedown", h).end().find(">div.colorpicker_current_color").bind("click", F), n.selector = m.find("div.colorpicker_color").bind("mousedown", $), n.selectorIndic = n.selector.find("div div"), n.el = this, n.hue = m.find("div.colorpicker_hue div"), m.find("div.colorpicker_hue").bind("mousedown", v), n.newColor = m.find("div.colorpicker_new_color"), n.currentColor = m.find("div.colorpicker_current_color"), m.data("colorpicker", n), m.find("div.colorpicker_submit").bind("mouseenter", k).bind("mouseleave", T).bind("click", S), r(n.color, m.get(0)), o(n.color, m.get(0)), i(n.color, m.get(0)), a(n.color, m.get(0)), s(n.color, m.get(0)), l(n.color, m.get(0)), c(n.color, m.get(0)), n.flat ? m.css({
                        position: "relative",
                        display: "block"
                    }) : e(this).bind(n.eventName, C)
                }
            })
        },
        showPicker: function() {
            return this.each(function() {
                e(this).data("colorpickerId") && C.apply(this)
            })
        },
        hidePicker: function() {
            return this.each(function() {
                e(this).data("colorpickerId") && e("#" + e(this).data("colorpickerId")).hide()
            })
        },
        setColor: function(t) {
            if ("string" == typeof t) t = I(t);
            else if (void 0 != t.r && void 0 != t.g && void 0 != t.b) t = M(t);
            else {
                if (void 0 == t.h || void 0 == t.s || void 0 == t.b) return this;
                t = D(t)
            }
            return this.each(function() {
                if (e(this).data("colorpickerId")) {
                    var n = e("#" + e(this).data("colorpickerId"));
                    n.data("colorpicker").color = t, n.data("colorpicker").origColor = t, r(t, n.get(0)), o(t, n.get(0)), i(t, n.get(0)), a(t, n.get(0)), s(t, n.get(0)), l(t, n.get(0)), c(t, n.get(0))
                }
            })
        }
    });
    e.fn.extend({
        ColorPicker: B.init,
        ColorPickerHide: B.hidePicker,
        ColorPickerShow: B.showPicker,
        ColorPickerSetColor: B.setColor,
        ColorPicker: B.init,
        ColorPickerHide: B.hidePicker,
        ColorPickerShow: B.showPicker,
        ColorPickerSetColor: B.setColor
    })
}(jQuery),
function(e) {
    var t = function(e, t) {
            return e << t | e >>> 32 - t
        },
        n = function(e, t) {
            var n, r, o, i, s;
            return o = 2147483648 & e, i = 2147483648 & t, s = (1073741823 & e) + (1073741823 & t), (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ s ^ o ^ i : n | r ? 1073741824 & s ? 3221225472 ^ s ^ o ^ i : 1073741824 ^ s ^ o ^ i : s ^ o ^ i
        },
        r = function(e, r, o, i, s, a, l) {
            var c;
            return e = n(e, n(n((c = r) & o | ~c & i, s), l)), n(t(e, a), r)
        },
        o = function(e, r, o, i, s, a, l) {
            var c;
            return e = n(e, n(n(r & (c = i) | o & ~c, s), l)), n(t(e, a), r)
        },
        i = function(e, r, o, i, s, a, l) {
            return e = n(e, n(n(r ^ o ^ i, s), l)), n(t(e, a), r)
        },
        s = function(e, r, o, i, s, a, l) {
            return e = n(e, n(n(o ^ (r | ~i), s), l)), n(t(e, a), r)
        },
        a = function(e) {
            var t, n = "",
                r = "";
            for (t = 0; t <= 3; t++) n += (r = "0" + (e >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
            return n
        };
    jQuery.extend({
        md5: function(e) {
            var t, l, c, u, p, f, d, h, g, m = Array();
            for (m = function(e) {
                    for (var t, n = e.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), i = Array(o - 1), s = 0, a = 0; a < n;) s = a % 4 * 8, i[t = (a - a % 4) / 4] = i[t] | e.charCodeAt(a) << s, a++;
                    return s = a % 4 * 8, i[t = (a - a % 4) / 4] = i[t] | 128 << s, i[o - 2] = n << 3, i[o - 1] = n >>> 29, i
                }(e = function(e) {
                    e = e.replace(/\x0d\x0a/g, "\n");
                    for (var t = "", n = 0; n < e.length; n++) {
                        var r = e.charCodeAt(n);
                        r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
                    }
                    return t
                }(e)), f = 1732584193, d = 4023233417, h = 2562383102, g = 271733878, t = 0; t < m.length; t += 16) l = f, c = d, u = h, p = g, f = r(f, d, h, g, m[t + 0], 7, 3614090360), g = r(g, f, d, h, m[t + 1], 12, 3905402710), h = r(h, g, f, d, m[t + 2], 17, 606105819), d = r(d, h, g, f, m[t + 3], 22, 3250441966), f = r(f, d, h, g, m[t + 4], 7, 4118548399), g = r(g, f, d, h, m[t + 5], 12, 1200080426), h = r(h, g, f, d, m[t + 6], 17, 2821735955), d = r(d, h, g, f, m[t + 7], 22, 4249261313), f = r(f, d, h, g, m[t + 8], 7, 1770035416), g = r(g, f, d, h, m[t + 9], 12, 2336552879), h = r(h, g, f, d, m[t + 10], 17, 4294925233), d = r(d, h, g, f, m[t + 11], 22, 2304563134), f = r(f, d, h, g, m[t + 12], 7, 1804603682), g = r(g, f, d, h, m[t + 13], 12, 4254626195), h = r(h, g, f, d, m[t + 14], 17, 2792965006), d = r(d, h, g, f, m[t + 15], 22, 1236535329), f = o(f, d, h, g, m[t + 1], 5, 4129170786), g = o(g, f, d, h, m[t + 6], 9, 3225465664), h = o(h, g, f, d, m[t + 11], 14, 643717713), d = o(d, h, g, f, m[t + 0], 20, 3921069994), f = o(f, d, h, g, m[t + 5], 5, 3593408605), g = o(g, f, d, h, m[t + 10], 9, 38016083), h = o(h, g, f, d, m[t + 15], 14, 3634488961), d = o(d, h, g, f, m[t + 4], 20, 3889429448), f = o(f, d, h, g, m[t + 9], 5, 568446438), g = o(g, f, d, h, m[t + 14], 9, 3275163606), h = o(h, g, f, d, m[t + 3], 14, 4107603335), d = o(d, h, g, f, m[t + 8], 20, 1163531501), f = o(f, d, h, g, m[t + 13], 5, 2850285829), g = o(g, f, d, h, m[t + 2], 9, 4243563512), h = o(h, g, f, d, m[t + 7], 14, 1735328473), d = o(d, h, g, f, m[t + 12], 20, 2368359562), f = i(f, d, h, g, m[t + 5], 4, 4294588738), g = i(g, f, d, h, m[t + 8], 11, 2272392833), h = i(h, g, f, d, m[t + 11], 16, 1839030562), d = i(d, h, g, f, m[t + 14], 23, 4259657740), f = i(f, d, h, g, m[t + 1], 4, 2763975236), g = i(g, f, d, h, m[t + 4], 11, 1272893353), h = i(h, g, f, d, m[t + 7], 16, 4139469664), d = i(d, h, g, f, m[t + 10], 23, 3200236656), f = i(f, d, h, g, m[t + 13], 4, 681279174), g = i(g, f, d, h, m[t + 0], 11, 3936430074), h = i(h, g, f, d, m[t + 3], 16, 3572445317), d = i(d, h, g, f, m[t + 6], 23, 76029189), f = i(f, d, h, g, m[t + 9], 4, 3654602809), g = i(g, f, d, h, m[t + 12], 11, 3873151461), h = i(h, g, f, d, m[t + 15], 16, 530742520), d = i(d, h, g, f, m[t + 2], 23, 3299628645), f = s(f, d, h, g, m[t + 0], 6, 4096336452), g = s(g, f, d, h, m[t + 7], 10, 1126891415), h = s(h, g, f, d, m[t + 14], 15, 2878612391), d = s(d, h, g, f, m[t + 5], 21, 4237533241), f = s(f, d, h, g, m[t + 12], 6, 1700485571), g = s(g, f, d, h, m[t + 3], 10, 2399980690), h = s(h, g, f, d, m[t + 10], 15, 4293915773), d = s(d, h, g, f, m[t + 1], 21, 2240044497), f = s(f, d, h, g, m[t + 8], 6, 1873313359), g = s(g, f, d, h, m[t + 15], 10, 4264355552), h = s(h, g, f, d, m[t + 6], 15, 2734768916), d = s(d, h, g, f, m[t + 13], 21, 1309151649), f = s(f, d, h, g, m[t + 4], 6, 4149444226), g = s(g, f, d, h, m[t + 11], 10, 3174756917), h = s(h, g, f, d, m[t + 2], 15, 718787259), d = s(d, h, g, f, m[t + 9], 21, 3951481745), f = n(f, l), d = n(d, c), h = n(h, u), g = n(g, p);
            return (a(f) + a(d) + a(h) + a(g)).toLowerCase()
        }
    })
}(),
function(e, t, n) {
    "use strict";

    function r(e) {
        return function() {
            var t, n = arguments[0];
            n = "[" + (e ? e + ":" : "") + n + "] http://errors.angularjs.org/1.2.28/" + (e ? e + "/" : "") + n;
            for (t = 1; t < arguments.length; t++) n = n + (1 == t ? "?" : "&") + "p" + (t - 1) + "=" + encodeURIComponent("function" == typeof arguments[t] ? arguments[t].toString().replace(/ \{[\s\S]*$/, "") : void 0 === arguments[t] ? "undefined" : "string" != typeof arguments[t] ? JSON.stringify(arguments[t]) : arguments[t]);
            return Error(n)
        }
    }

    function o(e) {
        if (null == e || T(e)) return !1;
        var t = e.length;
        return !(1 !== e.nodeType || !t) || (y(e) || Yt(e) || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function i(e, t, n) {
        var r;
        if (e)
            if (w(e))
                for (r in e) "prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r);
            else if (Yt(e) || o(e))
            for (r = 0; r < e.length; r++) t.call(n, e[r], r);
        else if (e.forEach && e.forEach !== i) e.forEach(t, n);
        else
            for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
        return e
    }

    function s(e) {
        var t, n = [];
        for (t in e) e.hasOwnProperty(t) && n.push(t);
        return n.sort()
    }

    function a(e) {
        return function(t, n) {
            e(n, t)
        }
    }

    function l() {
        for (var e, t = Gt.length; t;) {
            if (57 == (e = Gt[--t].charCodeAt(0))) return Gt[t] = "A", Gt.join("");
            if (90 != e) return Gt[t] = String.fromCharCode(e + 1), Gt.join("");
            Gt[t] = "0"
        }
        return Gt.unshift("0"), Gt.join("")
    }

    function c(e, t) {
        t ? e.$$hashKey = t : delete e.$$hashKey
    }

    function u(e) {
        var t = e.$$hashKey;
        return i(arguments, function(t) {
            t !== e && i(t, function(t, n) {
                e[n] = t
            })
        }), c(e, t), e
    }

    function p(e) {
        return parseInt(e, 10)
    }

    function f(e, t) {
        return u(new(u(function() {}, {
            prototype: e
        })), t)
    }

    function d() {}

    function h(e) {
        return e
    }

    function g(e) {
        return function() {
            return e
        }
    }

    function m(e) {
        return void 0 === e
    }

    function v(e) {
        return void 0 !== e
    }

    function b(e) {
        return null != e && "object" == typeof e
    }

    function y(e) {
        return "string" == typeof e
    }

    function $(e) {
        return "number" == typeof e
    }

    function x(e) {
        return "[object Date]" === Vt.call(e)
    }

    function w(e) {
        return "function" == typeof e
    }

    function k(e) {
        return "[object RegExp]" === Vt.call(e)
    }

    function T(e) {
        return e && e.document && e.location && e.alert && e.setInterval
    }

    function S(e) {
        return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }

    function C(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var n = 0; n < e.length; n++)
            if (t === e[n]) return n;
        return -1
    }

    function E(e, t) {
        var n = C(e, t);
        return 0 <= n && e.splice(n, 1), t
    }

    function A(e, t, n, r) {
        if (T(e) || e && e.$evalAsync && e.$watch) throw zt("cpws");
        if (t) {
            if (e === t) throw zt("cpi");
            if (n = n || [], r = r || [], b(e)) {
                var o = C(n, e);
                if (-1 !== o) return r[o];
                n.push(e), r.push(t)
            }
            if (Yt(e))
                for (var s = t.length = 0; s < e.length; s++) o = A(e[s], null, n, r), b(e[s]) && (n.push(e[s]), r.push(o)), t.push(o);
            else {
                var a = t.$$hashKey;
                Yt(t) ? t.length = 0 : i(t, function(e, n) {
                    delete t[n]
                });
                for (s in e) o = A(e[s], null, n, r), b(e[s]) && (n.push(e[s]), r.push(o)), t[s] = o;
                c(t, a)
            }
        } else(t = e) && (Yt(e) ? t = A(e, [], n, r) : x(e) ? t = new Date(e.getTime()) : k(e) ? (t = RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), t.lastIndex = e.lastIndex) : b(e) && (t = A(e, {}, n, r)));
        return t
    }

    function P(e, t) {
        if (Yt(e)) {
            t = t || [];
            for (var n = 0; n < e.length; n++) t[n] = e[n]
        } else if (b(e))
            for (n in t = t || {}, e) !jt.call(e, n) || "$" === n.charAt(0) && "$" === n.charAt(1) || (t[n] = e[n]);
        return t || e
    }

    function D(e, t) {
        if (e === t) return !0;
        if (null === e || null === t) return !1;
        if (e != e && t != t) return !0;
        var r, o = typeof e;
        if (o == typeof t && "object" == o) {
            if (!Yt(e)) {
                if (x(e)) return !!x(t) && (isNaN(e.getTime()) && isNaN(t.getTime()) || e.getTime() === t.getTime());
                if (k(e) && k(t)) return e.toString() == t.toString();
                if (e && e.$evalAsync && e.$watch || t && t.$evalAsync && t.$watch || T(e) || T(t) || Yt(t)) return !1;
                o = {};
                for (r in e)
                    if ("$" !== r.charAt(0) && !w(e[r])) {
                        if (!D(e[r], t[r])) return !1;
                        o[r] = !0
                    }
                for (r in t)
                    if (!o.hasOwnProperty(r) && "$" !== r.charAt(0) && t[r] !== n && !w(t[r])) return !1;
                return !0
            }
            if (!Yt(t)) return !1;
            if ((o = e.length) == t.length) {
                for (r = 0; r < o; r++)
                    if (!D(e[r], t[r])) return !1;
                return !0
            }
        }
        return !1
    }

    function N(e, t) {
        var n = 2 < arguments.length ? Ut.call(arguments, 2) : [];
        return !w(t) || t instanceof RegExp ? t : n.length ? function() {
            return arguments.length ? t.apply(e, n.concat(Ut.call(arguments, 0))) : t.apply(e, n)
        } : function() {
            return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
    }

    function O(e, r) {
        var o = r;
        return "string" == typeof e && "$" === e.charAt(0) ? o = n : T(r) ? o = "$WINDOW" : r && t === r ? o = "$DOCUMENT" : r && r.$evalAsync && r.$watch && (o = "$SCOPE"), o
    }

    function I(e, t) {
        return void 0 === e ? n : JSON.stringify(e, O, t ? "  " : null)
    }

    function M(e) {
        return y(e) ? JSON.parse(e) : e
    }

    function _(e) {
        return "function" == typeof e ? e = !0 : e && 0 !== e.length ? e = !("f" == (e = Rt("" + e)) || "0" == e || "false" == e || "no" == e || "n" == e || "[]" == e) : e = !1, e
    }

    function L(e) {
        e = Mt(e).clone();
        try {
            e.empty()
        } catch (e) {}
        var t = Mt("<div>").append(e).html();
        try {
            return 3 === e[0].nodeType ? Rt(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
                return "<" + Rt(t)
            })
        } catch (e) {
            return Rt(t)
        }
    }

    function F(e) {
        try {
            return decodeURIComponent(e)
        } catch (e) {}
    }

    function B(e) {
        var t, n, r = {};
        return i((e || "").split("&"), function(e) {
            e && (t = e.replace(/\+/g, "%20").split("="), v(n = F(t[0])) && (e = !v(t[1]) || F(t[1]), jt.call(r, n) ? Yt(r[n]) ? r[n].push(e) : r[n] = [r[n], e] : r[n] = e))
        }), r
    }

    function R(e) {
        var t = [];
        return i(e, function(e, n) {
            Yt(e) ? i(e, function(e) {
                t.push(q(n, !0) + (!0 === e ? "" : "=" + q(e, !0)))
            }) : t.push(q(n, !0) + (!0 === e ? "" : "=" + q(e, !0)))
        }), t.length ? t.join("&") : ""
    }

    function j(e) {
        return q(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function q(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
    }

    function U(n, r) {
        var o = function() {
                if ((n = Mt(n)).injector()) {
                    var e = n[0] === t ? "document" : L(n);
                    throw zt("btstrpd", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                return (r = r || []).unshift(["$provide", function(e) {
                    e.value("$rootElement", n)
                }]), r.unshift("ng"), (e = ge(r)).invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(e, t, n, r, o) {
                    e.$apply(function() {
                        t.data("$injector", r), n(t)(e)
                    })
                }]), e
            },
            s = /^NG_DEFER_BOOTSTRAP!/;
        if (e && !s.test(e.name)) return o();
        e.name = e.name.replace(s, ""), Wt.resumeBootstrap = function(e) {
            i(e, function(e) {
                r.push(e)
            }), o()
        }
    }

    function H(e, t) {
        return t = t || "_", e.replace(Xt, function(e, n) {
            return (n ? t : "") + e.toLowerCase()
        })
    }

    function V(e, t, n) {
        if (!e) throw zt("areq", t || "?", n || "required");
        return e
    }

    function z(e, t, n) {
        return n && Yt(e) && (e = e[e.length - 1]), V(w(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function W(e, t) {
        if ("hasOwnProperty" === e) throw zt("badname", t)
    }

    function G(e, t, n) {
        if (!t) return e;
        for (var r, o = e, i = (t = t.split(".")).length, s = 0; s < i; s++) r = t[s], e && (e = (o = e)[r]);
        return !n && w(e) ? N(o, e) : e
    }

    function Y(e) {
        var t = e[0];
        if (t === (e = e[e.length - 1])) return Mt(t);
        var n = [t];
        do {
            if (!(t = t.nextSibling)) break;
            n.push(t)
        } while (t !== e);
        return Mt(n)
    }

    function K(e) {
        return e.replace(rn, function(e, t, n, r) {
            return r ? n.toUpperCase() : n
        }).replace(on, "Moz$1")
    }

    function Q(e, t, n, r) {
        function o(e) {
            var o, s, a, l, c, u, p = n && e ? [this.filter(e)] : [this],
                f = t;
            if (!r || null != e)
                for (; p.length;)
                    for (o = p.shift(), s = 0, a = o.length; s < a; s++)
                        for (l = Mt(o[s]), f ? l.triggerHandler("$destroy") : f = !f, c = 0, l = (u = l.children()).length; c < l; c++) p.push(_t(u[c]));
            return i.apply(this, arguments)
        }
        var i = (i = _t.fn[e]).$original || i;
        o.$original = i, _t.fn[e] = o
    }

    function X(e) {
        if (e instanceof X) return e;
        if (y(e) && (e = Kt(e)), !(this instanceof X)) {
            if (y(e) && "<" != e.charAt(0)) throw sn("nosel");
            return new X(e)
        }
        if (y(e)) {
            var n, r = e;
            if (e = t, n = an.exec(r)) e = [e.createElement(n[1])];
            else {
                var o, i = e;
                if (e = i.createDocumentFragment(), n = [], ln.test(r)) {
                    for (i = e.appendChild(i.createElement("div")), o = (cn.exec(r) || ["", ""])[1].toLowerCase(), o = pn[o] || pn._default, i.innerHTML = "<div>&#160;</div>" + o[1] + r.replace(un, "<$1></$2>") + o[2], i.removeChild(i.firstChild), r = o[0]; r--;) i = i.lastChild;
                    for (r = 0, o = i.childNodes.length; r < o; ++r) n.push(i.childNodes[r]);
                    (i = e.firstChild).textContent = ""
                } else n.push(i.createTextNode(r));
                e.textContent = "", e.innerHTML = "", e = n
            }
            ae(this, e), Mt(t.createDocumentFragment()).append(this)
        } else ae(this, e)
    }

    function J(e) {
        return e.cloneNode(!0)
    }

    function Z(e) {
        te(e);
        var t = 0;
        for (e = e.childNodes || []; t < e.length; t++) Z(e[t])
    }

    function ee(e, t, n, r) {
        if (v(r)) throw sn("offargs");
        var o = ne(e, "events");
        ne(e, "handle") && (m(t) ? i(o, function(t, n) {
            nn(e, n, t), delete o[n]
        }) : i(t.split(" "), function(t) {
            m(n) ? (nn(e, t, o[t]), delete o[t]) : E(o[t] || [], n)
        }))
    }

    function te(e, t) {
        var r = e.ng339,
            o = Zt[r];
        o && (t ? delete Zt[r].data[t] : (o.handle && (o.events.$destroy && o.handle({}, "$destroy"), ee(e)), delete Zt[r], e.ng339 = n))
    }

    function ne(e, t, n) {
        var r = e.ng339;
        r = Zt[r || -1];
        if (!v(n)) return r && r[t];
        r || (e.ng339 = r = ++en, r = Zt[r] = {}), r[t] = n
    }

    function re(e, t, n) {
        var r = ne(e, "data"),
            o = v(n),
            i = !o && v(t),
            s = i && !b(t);
        if (r || s || ne(e, "data", r = {}), o) r[t] = n;
        else {
            if (!i) return r;
            if (s) return r && r[t];
            u(r, t)
        }
    }

    function oe(e, t) {
        return !!e.getAttribute && -1 < (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ")
    }

    function ie(e, t) {
        t && e.setAttribute && i(t.split(" "), function(t) {
            e.setAttribute("class", Kt((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Kt(t) + " ", " ")))
        })
    }

    function se(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            i(t.split(" "), function(e) {
                e = Kt(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
            }), e.setAttribute("class", Kt(n))
        }
    }

    function ae(e, t) {
        if (t) {
            t = t.nodeName || !v(t.length) || T(t) ? [t] : t;
            for (var n = 0; n < t.length; n++) e.push(t[n])
        }
    }

    function le(e, t) {
        return ce(e, "$" + (t || "ngController") + "Controller")
    }

    function ce(e, t, r) {
        for (9 == e.nodeType && (e = e.documentElement), t = Yt(t) ? t : [t]; e;) {
            for (var o = 0, i = t.length; o < i; o++)
                if ((r = Mt.data(e, t[o])) !== n) return r;
            e = e.parentNode || 11 === e.nodeType && e.host
        }
    }

    function ue(e) {
        for (var t = 0, n = e.childNodes; t < n.length; t++) Z(n[t]);
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function pe(e, t) {
        var n = dn[t.toLowerCase()];
        return n && hn[e.nodeName] && n
    }

    function fe(e, t) {
        var r, o = typeof e;
        return "function" == o || "object" == o && null !== e ? "function" == typeof(r = e.$$hashKey) ? r = e.$$hashKey() : r === n && (r = e.$$hashKey = (t || l)()) : r = e, o + ":" + r
    }

    function de(e, t) {
        if (t) {
            var n = 0;
            this.nextUid = function() {
                return ++n
            }
        }
        i(e, this.put, this)
    }

    function he(e) {
        var t, n;
        return "function" == typeof e ? (t = e.$inject) || (t = [], e.length && i((n = (n = e.toString().replace(bn, "")).match(gn))[1].split(mn), function(e) {
            e.replace(vn, function(e, n, r) {
                t.push(r)
            })
        }), e.$inject = t) : Yt(e) ? (z(e[n = e.length - 1], "fn"), t = e.slice(0, n)) : z(e, "fn", !0), t
    }

    function ge(e) {
        function t(e) {
            return function(t, n) {
                if (!b(t)) return e(t, n);
                i(t, a(e))
            }
        }

        function n(e, t) {
            if (W(e, "service"), (w(t) || Yt(t)) && (t = f.instantiate(t)), !t.$get) throw yn("pget", e);
            return p[e + l] = t
        }

        function r(e, t) {
            return n(e, {
                $get: t
            })
        }

        function o(e, t) {
            function n(n) {
                if (e.hasOwnProperty(n)) {
                    if (e[n] === s) throw yn("cdep", n + " <- " + c.join(" <- "));
                    return e[n]
                }
                try {
                    return c.unshift(n), e[n] = s, e[n] = t(n)
                } catch (t) {
                    throw e[n] === s && delete e[n], t
                } finally {
                    c.shift()
                }
            }

            function r(e, t, r) {
                var o, i, s, a = [],
                    l = he(e);
                for (i = 0, o = l.length; i < o; i++) {
                    if ("string" != typeof(s = l[i])) throw yn("itkn", s);
                    a.push(r && r.hasOwnProperty(s) ? r[s] : n(s))
                }
                return Yt(e) && (e = e[o]), e.apply(t, a)
            }
            return {
                invoke: r,
                instantiate: function(e, t) {
                    var n, o = function() {};
                    return o.prototype = (Yt(e) ? e[e.length - 1] : e).prototype, b(n = r(e, o = new o, t)) || w(n) ? n : o
                },
                get: n,
                annotate: he,
                has: function(t) {
                    return p.hasOwnProperty(t + l) || e.hasOwnProperty(t)
                }
            }
        }
        var s = {},
            l = "Provider",
            c = [],
            u = new de([], !0),
            p = {
                $provide: {
                    provider: t(n),
                    factory: t(r),
                    service: t(function(e, t) {
                        return r(e, ["$injector", function(e) {
                            return e.instantiate(t)
                        }])
                    }),
                    value: t(function(e, t) {
                        return r(e, g(t))
                    }),
                    constant: t(function(e, t) {
                        W(e, "constant"), p[e] = t, h[e] = t
                    }),
                    decorator: function(e, t) {
                        var n = f.get(e + l),
                            r = n.$get;
                        n.$get = function() {
                            var e = m.invoke(r, n);
                            return m.invoke(t, null, {
                                $delegate: e
                            })
                        }
                    }
                }
            },
            f = p.$injector = o(p, function() {
                throw yn("unpr", c.join(" <- "))
            }),
            h = {},
            m = h.$injector = o(h, function(e) {
                return e = f.get(e + l), m.invoke(e.$get, e)
            });
        return i(function e(t) {
            var n, r, o, s, a = [];
            return i(t, function(t) {
                if (!u.get(t)) {
                    u.put(t, !0);
                    try {
                        if (y(t))
                            for (n = Lt(t), a = a.concat(e(n.requires)).concat(n._runBlocks), r = n._invokeQueue, o = 0, s = r.length; o < s; o++) {
                                var i = r[o],
                                    l = f.get(i[0]);
                                l[i[1]].apply(l, i[2])
                            } else w(t) ? a.push(f.invoke(t)) : Yt(t) ? a.push(f.invoke(t)) : z(t, "module")
                    } catch (e) {
                        throw Yt(t) && (t = t[t.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), yn("modulerr", t, e.stack || e.message || e)
                    }
                }
            }), a
        }(e), function(e) {
            m.invoke(e || d)
        }), m
    }

    function me() {
        var e = !0;
        this.disableAutoScrolling = function() {
            e = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(t, n, r) {
            function o() {
                var e, r, o, a = n.hash();
                a ? (e = s.getElementById(a)) ? e.scrollIntoView() : (r = s.getElementsByName(a), o = null, i(r, function(e) {
                    o || "a" !== Rt(e.nodeName) || (o = e)
                }), (e = o) ? e.scrollIntoView() : "top" === a && t.scrollTo(0, 0)) : t.scrollTo(0, 0)
            }
            var s = t.document;
            return e && r.$watch(function() {
                return n.hash()
            }, function() {
                r.$evalAsync(o)
            }), o
        }]
    }

    function ve() {
        this.$get = ["$$rAF", "$timeout", function(e, t) {
            return e.supported ? function(t) {
                return e(t)
            } : function(e) {
                return t(e, 0, !1)
            }
        }]
    }

    function be(e, t, r, o) {
        function s(e) {
            try {
                e.apply(null, Ut.call(arguments, 1))
            } finally {
                if (0 === --v)
                    for (; b.length;) try {
                        b.pop()()
                    } catch (e) {
                        r.error(e)
                    }
            }
        }

        function a() {
            w != l.url() && (w = l.url(), i(S, function(e) {
                e(l.url())
            }))
        }
        var l = this,
            c = t[0],
            u = e.location,
            p = e.history,
            f = e.setTimeout,
            h = e.clearTimeout,
            g = {};
        l.isMock = !1;
        var v = 0,
            b = [];
        l.$$completeOutstandingRequest = s, l.$$incOutstandingRequestCount = function() {
            v++
        }, l.notifyWhenNoOutstandingRequests = function(e) {
            i(x, function(e) {
                e()
            }), 0 === v ? e() : b.push(e)
        };
        var $, x = [];
        l.addPollFn = function(e) {
            var t, n;
            return m($) && (t = 100, n = f, function e() {
                i(x, function(e) {
                    e()
                }), $ = n(e, t)
            }()), x.push(e), e
        };
        var w = u.href,
            k = t.find("base"),
            T = null;
        l.url = function(t, n) {
            if (u !== e.location && (u = e.location), p !== e.history && (p = e.history), !t) return T || u.href.replace(/%27/g, "'");
            if (w != t) {
                var r = w && qe(w) === qe(t);
                return w = t, !r && o.history ? n ? p.replaceState(null, "", t) : (p.pushState(null, "", t), k.attr("href", k.attr("href"))) : (r || (T = t), n ? u.replace(t) : u.href = t), l
            }
        };
        var S = [],
            C = !1;
        l.onUrlChange = function(t) {
            return C || (o.history && Mt(e).on("popstate", a), o.hashchange ? Mt(e).on("hashchange", a) : l.addPollFn(a), C = !0), S.push(t), t
        }, l.$$checkUrlChange = a, l.baseHref = function() {
            var e = k.attr("href");
            return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var E = {},
            A = "",
            P = l.baseHref();
        l.cookies = function(e, t) {
            var o, i, s, a;
            if (!e) {
                if (c.cookie !== A)
                    for (A = c.cookie, o = A.split("; "), E = {}, s = 0; s < o.length; s++) i = o[s], a = i.indexOf("="), 0 < a && (e = unescape(i.substring(0, a)), E[e] === n && (E[e] = unescape(i.substring(a + 1))));
                return E
            }
            t === n ? c.cookie = escape(e) + "=;path=" + P + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : y(t) && (4096 < (o = (c.cookie = escape(e) + "=" + escape(t) + ";path=" + P).length + 1) && r.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + o + " > 4096 bytes)!"))
        }, l.defer = function(e, t) {
            var n;
            return v++, n = f(function() {
                delete g[n], s(e)
            }, t || 0), g[n] = !0, n
        }, l.defer.cancel = function(e) {
            return !!g[e] && (delete g[e], h(e), s(d), !0)
        }
    }

    function ye() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
            return new be(e, r, t, n)
        }]
    }

    function $e() {
        this.$get = function() {
            function e(e, n) {
                function o(e) {
                    e != f && (d ? d == e && (d = e.n) : d = e, i(e.n, e.p), i(e, f), (f = e).n = null)
                }

                function i(e, t) {
                    e != t && (e && (e.p = t), t && (t.n = e))
                }
                if (e in t) throw r("$cacheFactory")("iid", e);
                var s = 0,
                    a = u({}, n, {
                        id: e
                    }),
                    l = {},
                    c = n && n.capacity || Number.MAX_VALUE,
                    p = {},
                    f = null,
                    d = null;
                return t[e] = {
                    put: function(e, t) {
                        c < Number.MAX_VALUE && o(p[e] || (p[e] = {
                            key: e
                        }));
                        if (!m(t)) return e in l || s++, l[e] = t, s > c && this.remove(d.key), t
                    },
                    get: function(e) {
                        if (c < Number.MAX_VALUE) {
                            var t = p[e];
                            if (!t) return;
                            o(t)
                        }
                        return l[e]
                    },
                    remove: function(e) {
                        if (c < Number.MAX_VALUE) {
                            var t = p[e];
                            if (!t) return;
                            t == f && (f = t.p), t == d && (d = t.n), i(t.n, t.p), delete p[e]
                        }
                        delete l[e], s--
                    },
                    removeAll: function() {
                        l = {}, s = 0, p = {}, f = d = null
                    },
                    destroy: function() {
                        p = a = l = null, delete t[e]
                    },
                    info: function() {
                        return u({}, a, {
                            size: s
                        })
                    }
                }
            }
            var t = {};
            return e.info = function() {
                var e = {};
                return i(t, function(t, n) {
                    e[n] = t.info()
                }), e
            }, e.get = function(e) {
                return t[e]
            }, e
        }
    }

    function xe() {
        this.$get = ["$cacheFactory", function(e) {
            return e("templates")
        }]
    }

    function we(e, r) {
        var o = {},
            s = "Directive",
            l = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
            c = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
            p = /^(on[a-z]+|formaction)$/;
        this.directive = function t(n, r) {
            return W(n, "directive"), y(n) ? (V(r, "directiveFactory"), o.hasOwnProperty(n) || (o[n] = [], e.factory(n + s, ["$injector", "$exceptionHandler", function(e, t) {
                var r = [];
                return i(o[n], function(o, i) {
                    try {
                        var s = e.invoke(o);
                        w(s) ? s = {
                            compile: g(s)
                        } : !s.compile && s.link && (s.compile = g(s.link)), s.priority = s.priority || 0, s.index = i, s.name = s.name || n, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "A", r.push(s)
                    } catch (e) {
                        t(e)
                    }
                }), r
            }])), o[n].push(r)) : i(n, a(t)), this
        }, this.aHrefSanitizationWhitelist = function(e) {
            return v(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return v(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(e, r, a, d, g, m, v, $, x, k, T, S) {
            function C(e, t, n, r, o) {
                e instanceof Mt || (e = Mt(e)), i(e, function(t, n) {
                    3 == t.nodeType && t.nodeValue.match(/\S+/) && (e[n] = Mt(t).wrap("<span></span>").parent()[0])
                });
                var s = A(e, t, e, n, r, o);
                return E(e, "ng-scope"),
                    function(t, n, r, o) {
                        V(t, "scope");
                        var a = n ? fn.clone.call(e) : e;
                        i(r, function(e, t) {
                            a.data("$" + t + "Controller", e)
                        }), r = 0;
                        for (var l = a.length; r < l; r++) {
                            var c = a[r].nodeType;
                            1 !== c && 9 !== c || a.eq(r).data("$scope", t)
                        }
                        return n && n(a, t), s && s(t, a, a, o), a
                    }
            }

            function E(e, t) {
                try {
                    e.addClass(t)
                } catch (e) {}
            }

            function A(e, t, r, o, i, s) {
                for (var a, l, c, u, p = [], f = 0; f < e.length; f++) a = new Y, l = O(e[f], [], a, 0 === f ? o : n, i), (s = l.length ? _(l, e[f], a, t, r, null, [], [], s) : null) && s.scope && E(a.$$element, "ng-scope"), a = s && s.terminal || !(c = e[f].childNodes) || !c.length ? null : A(c, s ? (s.transcludeOnThisElement || !s.templateOnThisElement) && s.transclude : t), p.push(s, a), u = u || s || a, s = null;
                return u ? function(e, r, o, i) {
                    var s, a, l, c, u, f, d;
                    s = r.length;
                    var h = Array(s);
                    for (c = 0; c < s; c++) h[c] = r[c];
                    for (f = c = 0, u = p.length; c < u; f++) a = h[f], r = p[c++], s = p[c++], r ? (r.scope ? (l = e.$new(), Mt.data(a, "$scope", l)) : l = e, d = r.transcludeOnThisElement ? N(e, r.transclude, i) : !r.templateOnThisElement && i ? i : !i && t ? N(e, t) : null, r(s, l, a, o, d)) : s && s(e, a.childNodes, n, i)
                } : null
            }

            function N(e, t, n) {
                return function(r, o, i) {
                    var s = !1;
                    return r || (s = (r = e.$new()).$$transcluded = !0), o = t(r, o, i, n), s && o.on("$destroy", function() {
                        r.$destroy()
                    }), o
                }
            }

            function O(e, t, n, o, i) {
                var s, a, u, p, f = n.$attr;
                switch (e.nodeType) {
                    case 1:
                        B(t, ke(Ft(e).toLowerCase()), "E", o, i);
                        for (var d, h, g, m = e.attributes, v = 0, b = m && m.length; v < b; v++) {
                            var $ = !1,
                                x = !1;
                            if (d = m[v], !It || 8 <= It || d.specified) s = d.name, h = Kt(d.value), d = ke(s), (g = Z.test(d)) && (s = H(d.substr(6), "-")), d === d.replace(/(Start|End)$/, "") + "Start" && ($ = s, x = s.substr(0, s.length - 5) + "end", s = s.substr(0, s.length - 6)), f[d = ke(s.toLowerCase())] = s, !g && n.hasOwnProperty(d) || (n[d] = h, pe(e, d) && (n[d] = !0)), z(e, t, h, d), B(t, d, "A", o, i, $, x)
                        }
                        if (y(e = e.className) && "" !== e)
                            for (; s = c.exec(e);) d = ke(s[2]), B(t, d, "C", o, i) && (n[d] = Kt(s[3])), e = e.substr(s.index + s[0].length);
                        break;
                    case 3:
                        a = t, u = e.nodeValue, (p = r(u, !0)) && a.push({
                            priority: 0,
                            compile: function(e) {
                                var t = e.parent().length;
                                return t && E(e.parent(), "ng-binding"),
                                    function(e, n) {
                                        var r = n.parent(),
                                            o = r.data("$binding") || [];
                                        o.push(p), r.data("$binding", o), t || E(r, "ng-binding"), e.$watch(p, function(e) {
                                            n[0].nodeValue = e
                                        })
                                    }
                            }
                        });
                        break;
                    case 8:
                        try {
                            (s = l.exec(e.nodeValue)) && (B(t, d = ke(s[1]), "M", o, i) && (n[d] = Kt(s[2])))
                        } catch (e) {}
                }
                return t.sort(q), t
            }

            function I(e, t, n) {
                var r = [],
                    o = 0;
                if (t && e.hasAttribute && e.hasAttribute(t))
                    do {
                        if (!e) throw wn("uterdir", t, n);
                        1 == e.nodeType && (e.hasAttribute(t) && o++, e.hasAttribute(n) && o--), r.push(e), e = e.nextSibling
                    } while (0 < o);
                else r.push(e);
                return Mt(r)
            }

            function M(e, t, n) {
                return function(r, o, i, s, a) {
                    return o = I(o[0], t, n), e(r, o, i, s, a)
                }
            }

            function _(e, o, s, l, c, u, p, f, d) {
                function h(e, t, n, r) {
                    e && (n && (e = M(e, n, r)), e.require = k.require, e.directiveName = T, (B === k || k.$$isolateScope) && (e = G(e, {
                        isolateScope: !0
                    })), p.push(e)), t && (n && (t = M(t, n, r)), t.require = k.require, t.directiveName = T, (B === k || k.$$isolateScope) && (t = G(t, {
                        isolateScope: !0
                    })), f.push(t))
                }

                function g(e, t, n, r) {
                    var o, s = "data",
                        a = !1;
                    if (y(t)) {
                        for (;
                            "^" == (o = t.charAt(0)) || "?" == o;) t = t.substr(1), "^" == o && (s = "inheritedData"), a = a || "?" == o;
                        if (o = null, r && "data" === s && (o = r[t]), !(o = o || n[s]("$" + t + "Controller")) && !a) throw wn("ctreq", t, e)
                    } else Yt(t) && (o = [], i(t, function(t) {
                        o.push(g(e, t, n, r))
                    }));
                    return o
                }

                function $(e, t, l, c, u) {
                    var d, h, b, y, $, x, w, k = {};
                    if (d = o === l ? s : P(s, new Y(Mt(l), s.$attr)), h = d.$$element, B) {
                        var T = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        x = t.$new(!0), !q || q !== B && q !== B.$$originalDirective ? h.data("$isolateScopeNoTemplate", x) : h.data("$isolateScope", x), E(h, "ng-isolate-scope"), i(B.scope, function(e, n) {
                            var o, i, s, a, l = (u = e.match(T) || [])[3] || n,
                                c = "?" == u[2],
                                u = u[1];
                            switch (x.$$isolateBindings[n] = u + l, u) {
                                case "@":
                                    d.$observe(l, function(e) {
                                        x[n] = e
                                    }), d.$$observers[l].$$scope = t, d[l] && (x[n] = r(d[l])(t));
                                    break;
                                case "=":
                                    if (c && !d[l]) break;
                                    i = m(d[l]), a = i.literal ? D : function(e, t) {
                                        return e === t || e != e && t != t
                                    }, s = i.assign || function() {
                                        throw o = x[n] = i(t), wn("nonassign", d[l], B.name)
                                    }, o = x[n] = i(t), x.$watch(function() {
                                        var e = i(t);
                                        return a(e, x[n]) || (a(e, o) ? s(t, e = x[n]) : x[n] = e), o = e
                                    }, null, i.literal);
                                    break;
                                case "&":
                                    i = m(d[l]), x[n] = function(e) {
                                        return i(t, e)
                                    };
                                    break;
                                default:
                                    throw wn("iscp", B.name, n, e)
                            }
                        })
                    }
                    for (w = u && function(e, t) {
                            var r;
                            return 2 > arguments.length && (t = e, e = n), K && (r = k), u(e, t, r)
                        }, _ && i(_, function(e) {
                            var n, r = {
                                $scope: e === B || e.$$isolateScope ? x : t,
                                $element: h,
                                $attrs: d,
                                $transclude: w
                            };
                            "@" == ($ = e.controller) && ($ = d[e.name]), n = v($, r), k[e.name] = n, K || h.data("$" + e.name + "Controller", n), e.controllerAs && (r.$scope[e.controllerAs] = n)
                        }), c = 0, b = p.length; c < b; c++) try {
                        (y = p[c])(y.isolateScope ? x : t, h, d, y.require && g(y.directiveName, y.require, h, k), w)
                    } catch (e) {
                        a(e, L(h))
                    }
                    for (c = t, B && (B.template || null === B.templateUrl) && (c = x), e && e(c, l.childNodes, n, u), c = f.length - 1; 0 <= c; c--) try {
                        (y = f[c])(y.isolateScope ? x : t, h, d, y.require && g(y.directiveName, y.require, h, k), w)
                    } catch (e) {
                        a(e, L(h))
                    }
                }
                d = d || {};
                for (var x, k, T, S, A, N = -Number.MAX_VALUE, _ = d.controllerDirectives, B = d.newIsolateScopeDirective, q = d.templateDirective, H = d.nonTlbTranscludeDirective, V = !1, z = !1, K = d.hasElementTranscludeDirective, Q = s.$$element = Mt(o), Z = l, ee = 0, te = e.length; ee < te; ee++) {
                    var ne = (k = e[ee]).$$start,
                        re = k.$$end;
                    if (ne && (Q = I(o, ne, re)), S = n, N > k.priority) break;
                    if ((S = k.scope) && (x = x || k, k.templateUrl || (U("new/isolated scope", B, k, Q), b(S) && (B = k))), T = k.name, !k.templateUrl && k.controller && (S = k.controller, U("'" + T + "' controller", (_ = _ || {})[T], k, Q), _[T] = k), (S = k.transclude) && (V = !0, k.$$tlb || (U("transclusion", H, k, Q), H = k), "element" == S ? (K = !0, N = k.priority, S = Q, Q = s.$$element = Mt(t.createComment(" " + T + ": " + s[T] + " ")), o = Q[0], W(c, Ut.call(S, 0), o), Z = C(S, l, N, u && u.name, {
                            nonTlbTranscludeDirective: H
                        })) : (S = Mt(J(o)).contents(), Q.empty(), Z = C(S, l))), k.template)
                        if (z = !0, U("template", q, k, Q), q = k, S = w(k.template) ? k.template(Q, s) : k.template, S = X(S), k.replace) {
                            if (u = k, S = ln.test(S) ? Mt(Kt(S)) : [], o = S[0], 1 != S.length || 1 !== o.nodeType) throw wn("tplrt", T, "");
                            W(c, Q, o), S = O(o, [], te = {
                                $attr: {}
                            });
                            var oe = e.splice(ee + 1, e.length - (ee + 1));
                            B && F(S), e = e.concat(S).concat(oe), R(s, te), te = e.length
                        } else Q.html(S);
                    if (k.templateUrl) z = !0, U("template", q, k, Q), q = k, k.replace && (u = k), $ = j(e.splice(ee, e.length - ee), Q, s, c, V && Z, p, f, {
                        controllerDirectives: _,
                        newIsolateScopeDirective: B,
                        templateDirective: q,
                        nonTlbTranscludeDirective: H
                    }), te = e.length;
                    else if (k.compile) try {
                        w(A = k.compile(Q, s, Z)) ? h(null, A, ne, re) : A && h(A.pre, A.post, ne, re)
                    } catch (e) {
                        a(e, L(Q))
                    }
                    k.terminal && ($.terminal = !0, N = Math.max(N, k.priority))
                }
                return $.scope = x && !0 === x.scope, $.transcludeOnThisElement = V, $.templateOnThisElement = z, $.transclude = Z, d.hasElementTranscludeDirective = K, $
            }

            function F(e) {
                for (var t = 0, n = e.length; t < n; t++) e[t] = f(e[t], {
                    $$isolateScope: !0
                })
            }

            function B(t, r, i, l, c, u, p) {
                if (r === c) return null;
                if (c = null, o.hasOwnProperty(r))
                    for (var d, h = 0, g = (r = e.get(r + s)).length; h < g; h++) try {
                        d = r[h], (l === n || l > d.priority) && -1 != d.restrict.indexOf(i) && (u && (d = f(d, {
                            $$start: u,
                            $$end: p
                        })), t.push(d), c = d)
                    } catch (e) {
                        a(e)
                    }
                return c
            }

            function R(e, t) {
                var n = t.$attr,
                    r = e.$attr,
                    o = e.$$element;
                i(e, function(r, o) {
                    "$" != o.charAt(0) && (t[o] && t[o] !== r && (r += ("style" === o ? ";" : " ") + t[o]), e.$set(o, r, !0, n[o]))
                }), i(t, function(t, i) {
                    "class" == i ? (E(o, t), e.class = (e.class ? e.class + " " : "") + t) : "style" == i ? (o.attr("style", o.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == i.charAt(0) || e.hasOwnProperty(i) || (e[i] = t, r[i] = n[i])
                })
            }

            function j(e, t, n, r, o, s, a, l) {
                var c, p, f = [],
                    h = t[0],
                    m = e.shift(),
                    v = u({}, m, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: m
                    }),
                    y = w(m.templateUrl) ? m.templateUrl(t, n) : m.templateUrl;
                return t.empty(), d.get(k.getTrustedResourceUrl(y), {
                        cache: g
                    }).success(function(u) {
                        var d, g;
                        if (u = X(u), m.replace) {
                            if (u = ln.test(u) ? Mt(Kt(u)) : [], d = u[0], 1 != u.length || 1 !== d.nodeType) throw wn("tplrt", m.name, y);
                            u = {
                                $attr: {}
                            }, W(r, t, d);
                            var $ = O(d, [], u);
                            b(m.scope) && F($), e = $.concat(e), R(n, u)
                        } else d = h, t.html(u);
                        for (e.unshift(v), c = _(e, d, n, o, t, m, s, a, l), i(r, function(e, n) {
                                e == d && (r[n] = t[0])
                            }), p = A(t[0].childNodes, o); f.length;) {
                            u = f.shift(), g = f.shift();
                            var x = f.shift(),
                                w = f.shift();
                            $ = t[0];
                            if (g !== h) {
                                var k = g.className;
                                l.hasElementTranscludeDirective && m.replace || ($ = J(d)), W(x, Mt(g), $), E(Mt($), k)
                            }
                            g = c.transcludeOnThisElement ? N(u, c.transclude, w) : w, c(p, u, $, r, g)
                        }
                        f = null
                    }).error(function(e, t, n, r) {
                        throw wn("tpload", r.url)
                    }),
                    function(e, t, n, r, o) {
                        e = o, f ? (f.push(t), f.push(n), f.push(r), f.push(e)) : (c.transcludeOnThisElement && (e = N(t, c.transclude, o)), c(p, t, n, r, e))
                    }
            }

            function q(e, t) {
                var n = t.priority - e.priority;
                return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
            }

            function U(e, t, n, r) {
                if (t) throw wn("multidir", t.name, n.name, e, L(r))
            }

            function z(e, t, n, o) {
                var i = r(n, !0);
                if (i) {
                    if ("multiple" === o && "SELECT" === Ft(e)) throw wn("selmulti", L(e));
                    t.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(t, n, s) {
                                    if (n = s.$$observers || (s.$$observers = {}), p.test(o)) throw wn("nodomevents");
                                    (i = r(s[o], !0, function(e, t) {
                                        if ("srcdoc" == t) return k.HTML;
                                        var n = Ft(e);
                                        return "xlinkHref" == t || "FORM" == n && "action" == t || "IMG" != n && ("src" == t || "ngSrc" == t) ? k.RESOURCE_URL : void 0
                                    }(e, o))) && (s[o] = i(t), (n[o] || (n[o] = [])).$$inter = !0, (s.$$observers && s.$$observers[o].$$scope || t).$watch(i, function(e, t) {
                                        "class" === o && e != t ? s.$updateClass(e, t) : s.$set(o, e)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function W(e, n, r) {
                var o, i, s = n[0],
                    a = n.length,
                    l = s.parentNode;
                if (e)
                    for (o = 0, i = e.length; o < i; o++)
                        if (e[o] == s) {
                            e[o++] = r, i = o + a - 1;
                            for (var c = e.length; o < c; o++, i++) i < c ? e[o] = e[i] : delete e[o];
                            e.length -= a - 1;
                            break
                        }
                for (l && l.replaceChild(r, s), (e = t.createDocumentFragment()).appendChild(s), r[Mt.expando] = s[Mt.expando], s = 1, a = n.length; s < a; s++) l = n[s], Mt(l).remove(), e.appendChild(l), delete n[s];
                n[0] = r, n.length = 1
            }

            function G(e, t) {
                return u(function() {
                    return e.apply(null, arguments)
                }, e, t)
            }
            var Y = function(e, t) {
                this.$$element = e, this.$attr = t || {}
            };
            Y.prototype = {
                $normalize: ke,
                $addClass: function(e) {
                    e && 0 < e.length && T.addClass(this.$$element, e)
                },
                $removeClass: function(e) {
                    e && 0 < e.length && T.removeClass(this.$$element, e)
                },
                $updateClass: function(e, t) {
                    var n = Te(e, t),
                        r = Te(t, e);
                    0 === n.length ? T.removeClass(this.$$element, r) : 0 === r.length ? T.addClass(this.$$element, n) : T.setClass(this.$$element, n, r)
                },
                $set: function(e, t, r, o) {
                    var s = pe(this.$$element[0], e);
                    s && (this.$$element.prop(e, t), o = s), this[e] = t, o ? this.$attr[e] = o : (o = this.$attr[e]) || (this.$attr[e] = o = H(e, "-")), ("A" === (s = Ft(this.$$element)) && "href" === e || "IMG" === s && "src" === e) && (this[e] = t = S(t, "src" === e)), !1 !== r && (null === t || t === n ? this.$$element.removeAttr(o) : this.$$element.attr(o, t)), (r = this.$$observers) && i(r[e], function(e) {
                        try {
                            e(t)
                        } catch (e) {
                            a(e)
                        }
                    })
                },
                $observe: function(e, t) {
                    var n = this,
                        r = n.$$observers || (n.$$observers = {}),
                        o = r[e] || (r[e] = []);
                    return o.push(t), $.$evalAsync(function() {
                        o.$$inter || t(n[e])
                    }), t
                }
            };
            var K = r.startSymbol(),
                Q = r.endSymbol(),
                X = "{{" == K || "}}" == Q ? h : function(e) {
                    return e.replace(/\{\{/g, K).replace(/}}/g, Q)
                },
                Z = /^ngAttr[A-Z]/;
            return C
        }]
    }

    function ke(e) {
        return K(e.replace(kn, ""))
    }

    function Te(e, t) {
        var n = "",
            r = e.split(/\s+/),
            o = t.split(/\s+/),
            i = 0;
        e: for (; i < r.length; i++) {
            for (var s = r[i], a = 0; a < o.length; a++)
                if (s == o[a]) continue e;
            n += (0 < n.length ? " " : "") + s
        }
        return n
    }

    function Se() {
        var e = {},
            t = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(t, n) {
            W(t, "controller"), b(t) ? u(e, t) : e[t] = n
        }, this.$get = ["$injector", "$window", function(n, o) {
            return function(i, s) {
                var a, l, c;
                if (y(i) && (l = (a = i.match(t))[1], c = a[3], z(i = e.hasOwnProperty(l) ? e[l] : G(s.$scope, l, !0) || G(o, l, !0), l, !0)), a = n.instantiate(i, s), c) {
                    if (!s || "object" != typeof s.$scope) throw r("$controller")("noscp", l || i.name, c);
                    s.$scope[c] = a
                }
                return a
            }
        }]
    }

    function Ce() {
        this.$get = ["$window", function(e) {
            return Mt(e.document)
        }]
    }

    function Ee() {
        this.$get = ["$log", function(e) {
            return function(t, n) {
                e.error.apply(e, arguments)
            }
        }]
    }

    function Ae(e) {
        var t, n, r, o = {};
        return e ? (i(e.split("\n"), function(e) {
            r = e.indexOf(":"), t = Rt(Kt(e.substr(0, r))), n = Kt(e.substr(r + 1)), t && (o[t] = o[t] ? o[t] + ", " + n : n)
        }), o) : o
    }

    function Pe(e) {
        var t = b(e) ? e : n;
        return function(n) {
            return t || (t = Ae(e)), n ? t[Rt(n)] || null : t
        }
    }

    function De(e, t, n) {
        return w(n) ? n(e, t) : (i(n, function(n) {
            e = n(e, t)
        }), e)
    }

    function Ne() {
        var e = /^\s*(\[|\{[^\{])/,
            t = /[\}\]]\s*$/,
            r = /^\)\]\}',?\n/,
            o = {
                "Content-Type": "application/json;charset=utf-8"
            },
            a = this.defaults = {
                transformResponse: [function(n) {
                    return y(n) && (n = n.replace(r, ""), e.test(n) && t.test(n) && (n = M(n))), n
                }],
                transformRequest: [function(e) {
                    return b(e) && "[object File]" !== Vt.call(e) && "[object Blob]" !== Vt.call(e) ? I(e) : e
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: P(o),
                    put: P(o),
                    patch: P(o)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            },
            l = this.interceptors = [],
            c = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(e, t, r, o, p, f) {
            function d(r) {
                function l(e) {
                    var t = u({}, e, {
                        data: De(e.data, e.headers, c.transformResponse)
                    });
                    return 200 <= e.status && 300 > e.status ? t : p.reject(t)
                }
                var c = {
                        method: "get",
                        transformRequest: a.transformRequest,
                        transformResponse: a.transformResponse
                    },
                    f = function(e) {
                        var t, n, r, o, s = a.headers,
                            l = u({}, e.headers);
                        s = u({}, s.common, s[Rt(e.method)]);
                        e: for (t in s) {
                            e = Rt(t);
                            for (n in l)
                                if (Rt(n) === e) continue e;
                            l[t] = s[t]
                        }
                        return i(r = l, function(e, t) {
                            w(e) && (null != (o = e()) ? r[t] = o : delete r[t])
                        }), l
                    }(r);
                u(c, r), c.headers = f, c.method = qt(c.method);
                var y = [function(r) {
                        f = r.headers;
                        var c = De(r.data, Pe(f), r.transformRequest);
                        return m(c) && i(f, function(e, t) {
                                "content-type" === Rt(t) && delete f[t]
                            }), m(r.withCredentials) && !m(a.withCredentials) && (r.withCredentials = a.withCredentials),
                            function(r, l, c) {
                                function u(e, t, n, o) {
                                    (200 <= (t = Math.max(t, 0)) && 300 > t ? $.resolve : $.reject)({
                                        data: e,
                                        status: t,
                                        headers: Pe(n),
                                        config: r,
                                        statusText: o
                                    })
                                }

                                function f() {
                                    var e = C(d.pendingRequests, r); - 1 !== e && d.pendingRequests.splice(e, 1)
                                }
                                var g, y, $ = p.defer(),
                                    k = $.promise,
                                    T = function(e, t) {
                                        if (!t) return e;
                                        var n = [];
                                        return function(e, t, n) {
                                            for (var r = s(e), o = 0; o < r.length; o++) t.call(n, e[r[o]], r[o])
                                        }(t, function(e, t) {
                                            null === e || m(e) || (Yt(e) || (e = [e]), i(e, function(e) {
                                                b(e) && (e = x(e) ? e.toISOString() : I(e)), n.push(q(t) + "=" + q(e))
                                            }))
                                        }), 0 < n.length && (e += (-1 == e.indexOf("?") ? "?" : "&") + n.join("&")), e
                                    }(r.url, r.params);
                                if (d.pendingRequests.push(r), k.then(f, f), !r.cache && !a.cache || !1 === r.cache || "GET" !== r.method && "JSONP" !== r.method || (g = b(r.cache) ? r.cache : b(a.cache) ? a.cache : h), g)
                                    if (y = g.get(T), v(y)) {
                                        if (y && w(y.then)) return y.then(f, f), y;
                                        Yt(y) ? u(y[1], y[0], P(y[2]), y[3]) : u(y, 200, {}, "OK")
                                    } else g.put(T, k);
                                return m(y) && ((y = dt(r.url) ? t.cookies()[r.xsrfCookieName || a.xsrfCookieName] : n) && (c[r.xsrfHeaderName || a.xsrfHeaderName] = y), e(r.method, T, l, function(e, t, n, r) {
                                    g && (200 <= e && 300 > e ? g.put(T, [e, t, Ae(n), r]) : g.remove(T)), u(t, e, n, r), o.$$phase || o.$apply()
                                }, c, r.timeout, r.withCredentials, r.responseType)), k
                            }(r, c, f).then(l, l)
                    }, n],
                    $ = p.when(c);
                for (i(g, function(e) {
                        (e.request || e.requestError) && y.unshift(e.request, e.requestError), (e.response || e.responseError) && y.push(e.response, e.responseError)
                    }); y.length;) {
                    r = y.shift();
                    var k = y.shift();
                    $ = $.then(r, k)
                }
                return $.success = function(e) {
                    return $.then(function(t) {
                        e(t.data, t.status, t.headers, c)
                    }), $
                }, $.error = function(e) {
                    return $.then(null, function(t) {
                        e(t.data, t.status, t.headers, c)
                    }), $
                }, $
            }
            var h = r("$http"),
                g = [];
            return i(l, function(e) {
                    g.unshift(y(e) ? f.get(e) : f.invoke(e))
                }), i(c, function(e, t) {
                    var n = y(e) ? f.get(e) : f.invoke(e);
                    g.splice(t, 0, {
                        response: function(e) {
                            return n(p.when(e))
                        },
                        responseError: function(e) {
                            return n(p.reject(e))
                        }
                    })
                }), d.pendingRequests = [],
                function(e) {
                    i(arguments, function(e) {
                        d[e] = function(t, n) {
                            return d(u(n || {}, {
                                method: e,
                                url: t
                            }))
                        }
                    })
                }("get", "delete", "head", "jsonp"),
                function(e) {
                    i(arguments, function(e) {
                        d[e] = function(t, n, r) {
                            return d(u(r || {}, {
                                method: e,
                                url: t,
                                data: n
                            }))
                        }
                    })
                }("post", "put", "patch"), d.defaults = a, d
        }]
    }

    function Oe(t) {
        if (8 >= It && (!t.match(/^(get|post|head|put|delete|options)$/i) || !e.XMLHttpRequest)) return new e.ActiveXObject("Microsoft.XMLHTTP");
        if (e.XMLHttpRequest) return new e.XMLHttpRequest;
        throw r("$httpBackend")("noxhr")
    }

    function Ie() {
        this.$get = ["$browser", "$window", "$document", function(e, t, n) {
            return function(e, t, n, r, o) {
                var s = -1;
                return function(a, l, c, u, p, f, h, g) {
                    function m() {
                        $ = s, A && A(), P && P.abort()
                    }

                    function b(t, r, o, i, s) {
                        D && n.cancel(D), A = P = null, 0 === r && (r = o ? 200 : "file" == ft(l).protocol ? 404 : 0), t(1223 === r ? 204 : r, o, i, s || ""), e.$$completeOutstandingRequest(d)
                    }
                    var $, x, k, T, S, C;
                    if (e.$$incOutstandingRequestCount(), l = l || e.url(), "jsonp" == Rt(a)) {
                        var E = "_" + (r.counter++).toString(36);
                        r[E] = function(e) {
                            r[E].data = e, r[E].called = !0
                        };
                        var A = (x = l.replace("JSON_CALLBACK", "angular.callbacks." + E), k = E, T = function(e, t) {
                            b(u, e, r[E].data, "", t), r[E] = d
                        }, S = o.createElement("script"), C = null, S.type = "text/javascript", S.src = x, S.async = !0, C = function(e) {
                            nn(S, "load", C), nn(S, "error", C), o.body.removeChild(S), S = null;
                            var t = -1,
                                n = "unknown";
                            e && ("load" !== e.type || r[k].called || (e = {
                                type: "error"
                            }), n = e.type, t = "error" === e.type ? 404 : 200), T && T(t, n)
                        }, tn(S, "load", C), tn(S, "error", C), 8 >= It && (S.onreadystatechange = function() {
                            y(S.readyState) && /loaded|complete/.test(S.readyState) && (S.onreadystatechange = null, C({
                                type: "load"
                            }))
                        }), o.body.appendChild(S), C)
                    } else {
                        var P = t(a);
                        if (P.open(a, l, !0), i(p, function(e, t) {
                                v(e) && P.setRequestHeader(t, e)
                            }), P.onreadystatechange = function() {
                                if (P && 4 == P.readyState) {
                                    var e = null,
                                        t = null,
                                        n = "";
                                    $ !== s && (e = P.getAllResponseHeaders(), t = "response" in P ? P.response : P.responseText), $ === s && 10 > It || (n = P.statusText), b(u, $ || P.status, t, e, n)
                                }
                            }, h && (P.withCredentials = !0), g) try {
                            P.responseType = g
                        } catch (e) {
                            if ("json" !== g) throw e
                        }
                        P.send(c || null)
                    }
                    if (0 < f) var D = n(m, f);
                    else f && w(f.then) && f.then(m)
                }
            }(e, Oe, e.defer, t.angular.callbacks, n[0])
        }]
    }

    function Me() {
        var e = "{{",
            t = "}}";
        this.startSymbol = function(t) {
            return t ? (e = t, this) : e
        }, this.endSymbol = function(e) {
            return e ? (t = e, this) : t
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, o) {
            function i(i, l, c) {
                for (var u, p, f = 0, d = [], h = i.length, g = !1, m = []; f < h;) - 1 != (u = i.indexOf(e, f)) && -1 != (p = i.indexOf(t, u + s)) ? (f != u && d.push(i.substring(f, u)), d.push(f = n(g = i.substring(u + s, p))), f.exp = g, f = p + a, g = !0) : (f != h && d.push(i.substring(f)), f = h);
                if ((h = d.length) || (d.push(""), h = 1), c && 1 < d.length) throw Tn("noconcat", i);
                if (!l || g) return m.length = h, f = function(e) {
                    try {
                        for (var t, n = 0, s = h; n < s; n++) {
                            if ("function" == typeof(t = d[n]))
                                if (t = t(e), t = c ? o.getTrusted(c, t) : o.valueOf(t), null == t) t = "";
                                else switch (typeof t) {
                                    case "string":
                                        break;
                                    case "number":
                                        t = "" + t;
                                        break;
                                    default:
                                        t = I(t)
                                }
                                m[n] = t
                        }
                        return m.join("")
                    } catch (t) {
                        e = Tn("interr", i, t.toString()), r(e)
                    }
                }, f.exp = i, f.parts = d, f
            }
            var s = e.length,
                a = t.length;
            return i.startSymbol = function() {
                return e
            }, i.endSymbol = function() {
                return t
            }, i
        }]
    }

    function _e() {
        this.$get = ["$rootScope", "$window", "$q", function(e, t, n) {
            function r(r, i, s, a) {
                var l = t.setInterval,
                    c = t.clearInterval,
                    u = n.defer(),
                    p = u.promise,
                    f = 0,
                    d = v(a) && !a;
                return s = v(s) ? s : 0, p.then(null, null, r), p.$$intervalId = l(function() {
                    u.notify(f++), 0 < s && f >= s && (u.resolve(f), c(p.$$intervalId), delete o[p.$$intervalId]), d || e.$apply()
                }, i), o[p.$$intervalId] = u, p
            }
            var o = {};
            return r.cancel = function(e) {
                return !!(e && e.$$intervalId in o) && (o[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete o[e.$$intervalId], !0)
            }, r
        }]
    }

    function Le() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    short: "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(e) {
                    return 1 === e ? "one" : "other"
                }
            }
        }
    }

    function Fe(e) {
        for (var t = (e = e.split("/")).length; t--;) e[t] = j(e[t]);
        return e.join("/")
    }

    function Be(e, t, n) {
        e = ft(e, n), t.$$protocol = e.protocol, t.$$host = e.hostname, t.$$port = p(e.port) || Cn[e.protocol] || null
    }

    function Re(e, t, n) {
        var r = "/" !== e.charAt(0);
        r && (e = "/" + e), e = ft(e, n), t.$$path = decodeURIComponent(r && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), t.$$search = B(e.search), t.$$hash = decodeURIComponent(e.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }

    function je(e, t) {
        if (0 === t.indexOf(e)) return t.substr(e.length)
    }

    function qe(e) {
        var t = e.indexOf("#");
        return -1 == t ? e : e.substr(0, t)
    }

    function Ue(e) {
        return e.substr(0, qe(e).lastIndexOf("/") + 1)
    }

    function He(e, t) {
        this.$$html5 = !0, t = t || "";
        var r = Ue(e);
        Be(e, this, e), this.$$parse = function(t) {
            var n = je(r, t);
            if (!y(n)) throw En("ipthprfx", t, r);
            Re(n, this, e), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var e = R(this.$$search),
                t = this.$$hash ? "#" + j(this.$$hash) : "";
            this.$$url = Fe(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = r + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function(o, i) {
            var s, a;
            return (s = je(e, o)) !== n ? (a = s, a = (s = je(t, s)) !== n ? r + (je("/", s) || s) : e + a) : (s = je(r, o)) !== n ? a = r + s : r == o + "/" && (a = r), a && this.$$parse(a), !!a
        }
    }

    function Ve(e, t) {
        var n = Ue(e);
        Be(e, this, e), this.$$parse = function(r) {
            var o;
            if (!y(o = "#" == (o = je(e, r) || je(n, r)).charAt(0) ? je(t, o) : this.$$html5 ? o : "")) throw En("ihshprfx", r, t);
            Re(o, this, e), r = this.$$path;
            var i = /^\/[A-Z]:(\/.*)/;
            0 === o.indexOf(e) && (o = o.replace(e, "")), i.exec(o) || (r = (o = i.exec(r)) ? o[1] : r), this.$$path = r, this.$$compose()
        }, this.$$compose = function() {
            var n = R(this.$$search),
                r = this.$$hash ? "#" + j(this.$$hash) : "";
            this.$$url = Fe(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + (this.$$url ? t + this.$$url : "")
        }, this.$$parseLinkUrl = function(t, n) {
            return qe(e) == qe(t) && (this.$$parse(t), !0)
        }
    }

    function ze(e, t) {
        this.$$html5 = !0, Ve.apply(this, arguments);
        var n = Ue(e);
        this.$$parseLinkUrl = function(r, o) {
            var i, s;
            return e == qe(r) ? i = r : (s = je(n, r)) ? i = e + t + s : n === r + "/" && (i = n), i && this.$$parse(i), !!i
        }, this.$$compose = function() {
            var n = R(this.$$search),
                r = this.$$hash ? "#" + j(this.$$hash) : "";
            this.$$url = Fe(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + t + this.$$url
        }
    }

    function We(e) {
        return function() {
            return this[e]
        }
    }

    function Ge(e, t) {
        return function(n) {
            return m(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
        }
    }

    function Ye() {
        var t = "",
            n = !1;
        this.hashPrefix = function(e) {
            return v(e) ? (t = e, this) : t
        }, this.html5Mode = function(e) {
            return v(e) ? (n = e, this) : n
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(r, o, i, s) {
            function a(e) {
                r.$broadcast("$locationChangeSuccess", l.absUrl(), e)
            }
            var l, c = o.baseHref(),
                u = o.url();
            n ? (c = u.substring(0, u.indexOf("/", u.indexOf("//") + 2)) + (c || "/"), i = i.history ? He : ze) : (c = qe(u), i = Ve), (l = new i(c, "#" + t)).$$parseLinkUrl(u, u);
            var p = /^\s*(javascript|mailto):/i;
            s.on("click", function(t) {
                if (!t.ctrlKey && !t.metaKey && 2 != t.which) {
                    for (var n = Mt(t.target);
                        "a" !== Rt(n[0].nodeName);)
                        if (n[0] === s[0] || !(n = n.parent())[0]) return;
                    var i = n.prop("href"),
                        a = n.attr("href") || n.attr("xlink:href");
                    b(i) && "[object SVGAnimatedString]" === i.toString() && (i = ft(i.animVal).href), p.test(i) || !i || n.attr("target") || t.isDefaultPrevented() || !l.$$parseLinkUrl(i, a) || (t.preventDefault(), l.absUrl() != o.url() && (r.$apply(), e.angular["ff-684208-preventDefault"] = !0))
                }
            }), l.absUrl() != u && o.url(l.absUrl(), !0), o.onUrlChange(function(e) {
                l.absUrl() != e && (r.$evalAsync(function() {
                    var t = l.absUrl();
                    l.$$parse(e), r.$broadcast("$locationChangeStart", e, t).defaultPrevented ? (l.$$parse(t), o.url(t)) : a(t)
                }), r.$$phase || r.$digest())
            });
            var f = 0;
            return r.$watch(function() {
                var e = o.url(),
                    t = l.$$replace;
                return f && e == l.absUrl() || (f++, r.$evalAsync(function() {
                    r.$broadcast("$locationChangeStart", l.absUrl(), e).defaultPrevented ? l.$$parse(e) : (o.url(l.absUrl(), t), a(e))
                })), l.$$replace = !1, f
            }), l
        }]
    }

    function Ke() {
        var e = !0,
            t = this;
        this.debugEnabled = function(t) {
            return v(t) ? (e = t, this) : e
        }, this.$get = ["$window", function(n) {
            function r(e) {
                var t = n.console || {},
                    r = t[e] || t.log || d;
                e = !1;
                try {
                    e = !!r.apply
                } catch (e) {}
                return e ? function() {
                    var e = [];
                    return i(arguments, function(t) {
                        var n;
                        e.push(((n = t) instanceof Error && (n.stack ? n = n.message && -1 === n.stack.indexOf(n.message) ? "Error: " + n.message + "\n" + n.stack : n.stack : n.sourceURL && (n = n.message + "\n" + n.sourceURL + ":" + n.line)), n))
                    }), r.apply(t, e)
                } : function(e, t) {
                    r(e, null == t ? "" : t)
                }
            }
            return {
                log: r("log"),
                info: r("info"),
                warn: r("warn"),
                error: r("error"),
                debug: (o = r("debug"), function() {
                    e && o.apply(t, arguments)
                })
            };
            var o
        }]
    }

    function Qe(e, t) {
        if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw Pn("isecfld", t);
        return e
    }

    function Xe(e, t) {
        if (e) {
            if (e.constructor === e) throw Pn("isecfn", t);
            if (e.document && e.location && e.alert && e.setInterval) throw Pn("isecwindow", t);
            if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw Pn("isecdom", t);
            if (e === Object) throw Pn("isecobj", t)
        }
        return e
    }

    function Je(e, t, r, o, i) {
        Xe(e, o), i = i || {}, t = t.split(".");
        for (var s, a = 0; 1 < t.length; a++) {
            var l = Xe(e[s = Qe(t.shift(), o)], o);
            l || (l = {}, e[s] = l), (e = l).then && i.unwrapPromises && (An(o), "$$v" in e || function(e) {
                e.then(function(t) {
                    e.$$v = t
                })
            }(e), e.$$v === n && (e.$$v = {}), e = e.$$v)
        }
        return Xe(e[s = Qe(t.shift(), o)], o), e[s] = r
    }

    function Ze(e) {
        return "constructor" == e
    }

    function et(e, t, r, o, i, s, a) {
        Qe(e, s), Qe(t, s), Qe(r, s), Qe(o, s), Qe(i, s);
        var l = function(e) {
                return Xe(e, s)
            },
            c = a.expensiveChecks,
            u = c || Ze(e) ? l : h,
            p = c || Ze(t) ? l : h,
            f = c || Ze(r) ? l : h,
            d = c || Ze(o) ? l : h,
            g = c || Ze(i) ? l : h;
        return a.unwrapPromises ? function(a, l) {
            var c, h = l && l.hasOwnProperty(e) ? l : a;
            return null == h ? h : ((h = u(h[e])) && h.then && (An(s), "$$v" in h || ((c = h).$$v = n, c.then(function(e) {
                c.$$v = u(e)
            })), h = u(h.$$v)), t ? null == h ? n : ((h = p(h[t])) && h.then && (An(s), "$$v" in h || ((c = h).$$v = n, c.then(function(e) {
                c.$$v = p(e)
            })), h = p(h.$$v)), r ? null == h ? n : ((h = f(h[r])) && h.then && (An(s), "$$v" in h || ((c = h).$$v = n, c.then(function(e) {
                c.$$v = f(e)
            })), h = f(h.$$v)), o ? null == h ? n : ((h = d(h[o])) && h.then && (An(s), "$$v" in h || ((c = h).$$v = n, c.then(function(e) {
                c.$$v = d(e)
            })), h = d(h.$$v)), i ? null == h ? n : ((h = g(h[i])) && h.then && (An(s), "$$v" in h || ((c = h).$$v = n, c.then(function(e) {
                c.$$v = g(e)
            })), h = g(h.$$v)), h) : h) : h) : h) : h)
        } : function(s, a) {
            var l = a && a.hasOwnProperty(e) ? a : s;
            return null == l ? l : (l = u(l[e]), t ? null == l ? n : (l = p(l[t]), r ? null == l ? n : (l = f(l[r]), o ? null == l ? n : (l = d(l[o]), i ? null == l ? n : l = g(l[i]) : l) : l) : l) : l)
        }
    }

    function tt(e, t, r) {
        var o = t.expensiveChecks,
            s = o ? Rn : Bn;
        if (s.hasOwnProperty(e)) return s[e];
        var a, l, c, u = e.split("."),
            p = u.length;
        if (t.csp) a = 6 > p ? et(u[0], u[1], u[2], u[3], u[4], r, t) : function(e, o) {
            var i, s = 0;
            do {
                i = et(u[s++], u[s++], u[s++], u[s++], u[s++], r, t)(e, o), o = n, e = i
            } while (s < p);
            return i
        };
        else {
            var f = "var p;\n";
            o && (f += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var d = o;
            i(u, function(e, n) {
                Qe(e, r);
                var i = (n ? "s" : '((l&&l.hasOwnProperty("' + e + '"))?l:s)') + '["' + e + '"]',
                    s = o || Ze(e);
                s && (i = "eso(" + i + ", fe)", d = !0), f += "if(s == null) return undefined;\ns=" + i + ";\n", t.unwrapPromises && (f += 'if (s && s.then) {\n pw("' + r.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (s ? "eso(v)" : "v") + ";});\n}\n s=" + (s ? "eso(s.$$v)" : "s.$$v") + "\n}\n")
            }), f += "return s;", (a = new Function("s", "l", "pw", "eso", "fe", f)).toString = g(f), (d || t.unwrapPromises) && (l = a, c = r, a = function(e, t) {
                return l(e, t, An, Xe, c)
            })
        }
        return "hasOwnProperty" !== e && (s[e] = a), a
    }

    function nt() {
        var e = {},
            t = {},
            n = {
                csp: !1,
                unwrapPromises: !1,
                logPromiseWarnings: !0,
                expensiveChecks: !1
            };
        this.unwrapPromises = function(e) {
            return v(e) ? (n.unwrapPromises = !!e, this) : n.unwrapPromises
        }, this.logPromiseWarnings = function(e) {
            return v(e) ? (n.logPromiseWarnings = e, this) : n.logPromiseWarnings
        }, this.$get = ["$filter", "$sniffer", "$log", function(r, o, i) {
            n.csp = o.csp;
            var s = {
                csp: n.csp,
                unwrapPromises: n.unwrapPromises,
                logPromiseWarnings: n.logPromiseWarnings,
                expensiveChecks: !0
            };
            return An = function(e) {
                    n.logPromiseWarnings && !Dn.hasOwnProperty(e) && (Dn[e] = !0, i.warn("[$parse] Promise found in the expression `" + e + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
                },
                function(o, i) {
                    var a;
                    switch (typeof o) {
                        case "string":
                            var l = i ? t : e;
                            if (l.hasOwnProperty(o)) return l[o];
                            var c = new Ln(a = i ? s : n);
                            return a = new Fn(c, r, a).parse(o), "hasOwnProperty" !== o && (l[o] = a), a;
                        case "function":
                            return o;
                        default:
                            return d
                    }
                }
        }]
    }

    function rt() {
        this.$get = ["$rootScope", "$exceptionHandler", function(e, t) {
            return function(e, t) {
                function r(e) {
                    return e
                }

                function o(e) {
                    return l(e)
                }
                var s = function() {
                        var i, l, u = [];
                        return l = {
                            resolve: function(t) {
                                if (u) {
                                    var r = u;
                                    u = n, i = a(t), r.length && e(function() {
                                        for (var e, t = 0, n = r.length; t < n; t++) e = r[t], i.then(e[0], e[1], e[2])
                                    })
                                }
                            },
                            reject: function(e) {
                                l.resolve(c(e))
                            },
                            notify: function(t) {
                                if (u) {
                                    var n = u;
                                    u.length && e(function() {
                                        for (var e, r = 0, o = n.length; r < o; r++) e = n[r], e[2](t)
                                    })
                                }
                            },
                            promise: {
                                then: function(e, n, a) {
                                    var l = s(),
                                        c = function(n) {
                                            try {
                                                l.resolve((w(e) ? e : r)(n))
                                            } catch (e) {
                                                l.reject(e), t(e)
                                            }
                                        },
                                        p = function(e) {
                                            try {
                                                l.resolve((w(n) ? n : o)(e))
                                            } catch (e) {
                                                l.reject(e), t(e)
                                            }
                                        },
                                        f = function(e) {
                                            try {
                                                l.notify((w(a) ? a : r)(e))
                                            } catch (e) {
                                                t(e)
                                            }
                                        };
                                    return u ? u.push([c, p, f]) : i.then(c, p, f), l.promise
                                },
                                catch: function(e) {
                                    return this.then(null, e)
                                },
                                finally: function(e) {
                                    function t(e, t) {
                                        var n = s();
                                        return t ? n.resolve(e) : n.reject(e), n.promise
                                    }

                                    function n(n, o) {
                                        var i = null;
                                        try {
                                            i = (e || r)()
                                        } catch (e) {
                                            return t(e, !1)
                                        }
                                        return i && w(i.then) ? i.then(function() {
                                            return t(n, o)
                                        }, function(e) {
                                            return t(e, !1)
                                        }) : t(n, o)
                                    }
                                    return this.then(function(e) {
                                        return n(e, !0)
                                    }, function(e) {
                                        return n(e, !1)
                                    })
                                }
                            }
                        }
                    },
                    a = function(t) {
                        return t && w(t.then) ? t : {
                            then: function(n) {
                                var r = s();
                                return e(function() {
                                    r.resolve(n(t))
                                }), r.promise
                            }
                        }
                    },
                    l = function(e) {
                        var t = s();
                        return t.reject(e), t.promise
                    },
                    c = function(n) {
                        return {
                            then: function(r, i) {
                                var a = s();
                                return e(function() {
                                    try {
                                        a.resolve((w(i) ? i : o)(n))
                                    } catch (e) {
                                        a.reject(e), t(e)
                                    }
                                }), a.promise
                            }
                        }
                    };
                return {
                    defer: s,
                    reject: l,
                    when: function(n, i, c, u) {
                        var p, f = s(),
                            d = function(e) {
                                try {
                                    return (w(i) ? i : r)(e)
                                } catch (e) {
                                    return t(e), l(e)
                                }
                            },
                            h = function(e) {
                                try {
                                    return (w(c) ? c : o)(e)
                                } catch (e) {
                                    return t(e), l(e)
                                }
                            },
                            g = function(e) {
                                try {
                                    return (w(u) ? u : r)(e)
                                } catch (e) {
                                    t(e)
                                }
                            };
                        return e(function() {
                            a(n).then(function(e) {
                                p || (p = !0, f.resolve(a(e).then(d, h, g)))
                            }, function(e) {
                                p || (p = !0, f.resolve(h(e)))
                            }, function(e) {
                                p || f.notify(g(e))
                            })
                        }), f.promise
                    },
                    all: function(e) {
                        var t = s(),
                            n = 0,
                            r = Yt(e) ? [] : {};
                        return i(e, function(e, o) {
                            n++, a(e).then(function(e) {
                                r.hasOwnProperty(o) || (r[o] = e, --n || t.resolve(r))
                            }, function(e) {
                                r.hasOwnProperty(o) || t.reject(e)
                            })
                        }), 0 === n && t.resolve(r), t.promise
                    }
                }
            }(function(t) {
                e.$evalAsync(t)
            }, t)
        }]
    }

    function ot() {
        this.$get = ["$window", "$timeout", function(e, t) {
            var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame,
                r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                o = !!n,
                i = o ? function(e) {
                    var t = n(e);
                    return function() {
                        r(t)
                    }
                } : function(e) {
                    var n = t(e, 16.66, !1);
                    return function() {
                        t.cancel(n)
                    }
                };
            return i.supported = o, i
        }]
    }

    function it() {
        var e = 10,
            t = r("$rootScope"),
            n = null;
        this.digestTtl = function(t) {
            return arguments.length && (e = t), e
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(r, s, a, c) {
            function u() {
                this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.this = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
            }

            function p(e) {
                if (m.$$phase) throw t("inprog", m.$$phase);
                m.$$phase = e
            }

            function f(e, t) {
                var n = a(e);
                return z(n, t), n
            }

            function h(e, t, n) {
                do {
                    e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]
                } while (e = e.$parent)
            }

            function g() {}
            u.prototype = {
                constructor: u,
                $new: function(e) {
                    return e ? ((e = new u).$root = this.$root, e.$$asyncQueue = this.$$asyncQueue, e.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = l(), this.$$childScopeClass = null
                    }, this.$$childScopeClass.prototype = this), e = new this.$$childScopeClass), e.this = e, e.$parent = this, e.$$prevSibling = this.$$childTail, this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = e : this.$$childHead = this.$$childTail = e, e
                },
                $watch: function(e, t, r) {
                    var o = f(e, "watch"),
                        i = this.$$watchers,
                        s = {
                            fn: t,
                            last: g,
                            get: o,
                            exp: e,
                            eq: !!r
                        };
                    if (n = null, !w(t)) {
                        var a = f(t || d, "listener");
                        s.fn = function(e, t, n) {
                            a(n)
                        }
                    }
                    if ("string" == typeof e && o.constant) {
                        var l = s.fn;
                        s.fn = function(e, t, n) {
                            l.call(this, e, t, n), E(i, s)
                        }
                    }
                    return i || (i = this.$$watchers = []), i.unshift(s),
                        function() {
                            E(i, s), n = null
                        }
                },
                $watchCollection: function(e, t) {
                    var n, r, i, s = this,
                        l = 1 < t.length,
                        c = 0,
                        u = a(e),
                        p = [],
                        f = {},
                        d = !0,
                        h = 0;
                    return this.$watch(function() {
                        var e, t, i;
                        if (b(n = u(s)))
                            if (o(n))
                                for (r !== p && (r = p, h = r.length = 0, c++), e = n.length, h !== e && (c++, r.length = h = e), t = 0; t < e; t++) i = r[t] != r[t] && n[t] != n[t], i || r[t] === n[t] || (c++, r[t] = n[t]);
                            else {
                                r !== f && (r = f = {}, h = 0, c++), e = 0;
                                for (t in n) n.hasOwnProperty(t) && (e++, r.hasOwnProperty(t) ? (i = r[t] != r[t] && n[t] != n[t], i || r[t] === n[t] || (c++, r[t] = n[t])) : (h++, r[t] = n[t], c++));
                                if (h > e)
                                    for (t in c++, r) r.hasOwnProperty(t) && !n.hasOwnProperty(t) && (h--, delete r[t])
                            } else r !== n && (r = n, c++);
                        return c
                    }, function() {
                        if (d ? (d = !1, t(n, n, s)) : t(n, i, s), l)
                            if (b(n))
                                if (o(n)) {
                                    i = Array(n.length);
                                    for (var e = 0; e < n.length; e++) i[e] = n[e]
                                } else
                                    for (e in i = {}, n) jt.call(n, e) && (i[e] = n[e]);
                        else i = n
                    })
                },
                $digest: function() {
                    var r, o, i, a, l, u, f, d, h, v, b = this.$$asyncQueue,
                        y = this.$$postDigestQueue,
                        $ = e,
                        x = [];
                    p("$digest"), c.$$checkUrlChange(), n = null;
                    do {
                        for (u = !1, f = this; b.length;) {
                            try {
                                (v = b.shift()).scope.$eval(v.expression)
                            } catch (e) {
                                m.$$phase = null, s(e)
                            }
                            n = null
                        }
                        e: do {
                            if (a = f.$$watchers)
                                for (l = a.length; l--;) try {
                                    if (r = a[l])
                                        if ((o = r.get(f)) === (i = r.last) || (r.eq ? D(o, i) : "number" == typeof o && "number" == typeof i && isNaN(o) && isNaN(i))) {
                                            if (r === n) {
                                                u = !1;
                                                break e
                                            }
                                        } else u = !0, n = r, r.last = r.eq ? A(o, null) : o, r.fn(o, i === g ? o : i, f), 5 > $ && (d = 4 - $, x[d] || (x[d] = []), h = w(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, h += "; newVal: " + I(o) + "; oldVal: " + I(i), x[d].push(h))
                                } catch (e) {
                                    m.$$phase = null, s(e)
                                }
                            if (!(a = f.$$childHead || f !== this && f.$$nextSibling))
                                for (; f !== this && !(a = f.$$nextSibling);) f = f.$parent
                        } while (f = a);
                        if ((u || b.length) && !$--) throw m.$$phase = null, t("infdig", e, I(x))
                    } while (u || b.length);
                    for (m.$$phase = null; y.length;) try {
                        y.shift()()
                    } catch (e) {
                        s(e)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var e = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this !== m && (i(this.$$listenerCount, N(null, h, this)), e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = d, this.$on = this.$watch = function() {
                            return d
                        })
                    }
                },
                $eval: function(e, t) {
                    return a(e)(this, t)
                },
                $evalAsync: function(e) {
                    m.$$phase || m.$$asyncQueue.length || c.defer(function() {
                        m.$$asyncQueue.length && m.$digest()
                    }), this.$$asyncQueue.push({
                        scope: this,
                        expression: e
                    })
                },
                $$postDigest: function(e) {
                    this.$$postDigestQueue.push(e)
                },
                $apply: function(e) {
                    try {
                        return p("$apply"), this.$eval(e)
                    } catch (e) {
                        s(e)
                    } finally {
                        m.$$phase = null;
                        try {
                            m.$digest()
                        } catch (e) {
                            throw s(e), e
                        }
                    }
                },
                $on: function(e, t) {
                    var n = this.$$listeners[e];
                    n || (this.$$listeners[e] = n = []), n.push(t);
                    var r = this;
                    do {
                        r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++
                    } while (r = r.$parent);
                    var o = this;
                    return function() {
                        var r = C(n, t); - 1 !== r && (n[r] = null, h(o, 1, e))
                    }
                },
                $emit: function(e, t) {
                    var n, r, o, i = [],
                        a = this,
                        l = !1,
                        c = {
                            name: e,
                            targetScope: a,
                            stopPropagation: function() {
                                l = !0
                            },
                            preventDefault: function() {
                                c.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        u = [c].concat(Ut.call(arguments, 1));
                    do {
                        for (n = a.$$listeners[e] || i, c.currentScope = a, r = 0, o = n.length; r < o; r++)
                            if (n[r]) try {
                                n[r].apply(null, u)
                            } catch (e) {
                                s(e)
                            } else n.splice(r, 1), r--, o--;
                        if (l) break;
                        a = a.$parent
                    } while (a);
                    return c
                },
                $broadcast: function(e, t) {
                    for (var n, r, o = this, i = this, a = {
                            name: e,
                            targetScope: this,
                            preventDefault: function() {
                                a.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        }, l = [a].concat(Ut.call(arguments, 1)); o = i;) {
                        for (a.currentScope = o, n = 0, r = (i = o.$$listeners[e] || []).length; n < r; n++)
                            if (i[n]) try {
                                i[n].apply(null, l)
                            } catch (e) {
                                s(e)
                            } else i.splice(n, 1), n--, r--;
                        if (!(i = o.$$listenerCount[e] && o.$$childHead || o !== this && o.$$nextSibling))
                            for (; o !== this && !(i = o.$$nextSibling);) o = o.$parent
                    }
                    return a
                }
            };
            var m = new u;
            return m
        }]
    }

    function st() {
        var e = /^\s*(https?|ftp|mailto|tel|file):/,
            t = /^\s*((https?|ftp|file):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(t) {
            return v(t) ? (e = t, this) : e
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return v(e) ? (t = e, this) : t
        }, this.$get = function() {
            return function(n, r) {
                var o, i = r ? t : e;
                return It && !(8 <= It) || ("" === (o = ft(n).href) || o.match(i)) ? n : "unsafe:" + o
            }
        }
    }

    function at(e) {
        var t = [];
        return v(e) && i(e, function(e) {
            t.push(function(e) {
                if ("self" === e) return e;
                if (y(e)) {
                    if (-1 < e.indexOf("***")) throw jn("iwcard", e);
                    return e = e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), RegExp("^" + e + "$")
                }
                if (k(e)) return RegExp("^" + e.source + "$");
                throw jn("imatcher")
            }(e))
        }), t
    }

    function lt() {
        this.SCE_CONTEXTS = qn;
        var e = ["self"],
            t = [];
        this.resourceUrlWhitelist = function(t) {
            return arguments.length && (e = at(t)), e
        }, this.resourceUrlBlacklist = function(e) {
            return arguments.length && (t = at(e)), t
        }, this.$get = ["$injector", function(r) {
            function o(e) {
                var t = function(e) {
                    this.$$unwrapTrustedValue = function() {
                        return e
                    }
                };
                return e && (t.prototype = new e), t.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, t.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, t
            }
            var i = function(e) {
                throw jn("unsafe")
            };
            r.has("$sanitize") && (i = r.get("$sanitize"));
            var s = o(),
                a = {};
            return a[qn.HTML] = o(s), a[qn.CSS] = o(s), a[qn.URL] = o(s), a[qn.JS] = o(s), a[qn.RESOURCE_URL] = o(a[qn.URL]), {
                trustAs: function(e, t) {
                    var r = a.hasOwnProperty(e) ? a[e] : null;
                    if (!r) throw jn("icontext", e, t);
                    if (null === t || t === n || "" === t) return t;
                    if ("string" != typeof t) throw jn("itype", e);
                    return new r(t)
                },
                getTrusted: function(r, o) {
                    if (null === o || o === n || "" === o) return o;
                    if ((c = a.hasOwnProperty(r) ? a[r] : null) && o instanceof c) return o.$$unwrapTrustedValue();
                    if (r === qn.RESOURCE_URL) {
                        var s, l, c = ft(o.toString()),
                            u = !1;
                        for (s = 0, l = e.length; s < l; s++)
                            if ("self" === e[s] ? dt(c) : e[s].exec(c.href)) {
                                u = !0;
                                break
                            }
                        if (u)
                            for (s = 0, l = t.length; s < l; s++)
                                if ("self" === t[s] ? dt(c) : t[s].exec(c.href)) {
                                    u = !1;
                                    break
                                }
                        if (u) return o;
                        throw jn("insecurl", o.toString())
                    }
                    if (r === qn.HTML) return i(o);
                    throw jn("unsafe")
                },
                valueOf: function(e) {
                    return e instanceof s ? e.$$unwrapTrustedValue() : e
                }
            }
        }]
    }

    function ct() {
        var e = !0;
        this.enabled = function(t) {
            return arguments.length && (e = !!t), e
        }, this.$get = ["$parse", "$sniffer", "$sceDelegate", function(t, n, r) {
            if (e && n.msie && 8 > n.msieDocumentMode) throw jn("iequirks");
            var o = P(qn);
            o.isEnabled = function() {
                return e
            }, o.trustAs = r.trustAs, o.getTrusted = r.getTrusted, o.valueOf = r.valueOf, e || (o.trustAs = o.getTrusted = function(e, t) {
                return t
            }, o.valueOf = h), o.parseAs = function(e, n) {
                var r = t(n);
                return r.literal && r.constant ? r : function(t, n) {
                    return o.getTrusted(e, r(t, n))
                }
            };
            var s = o.parseAs,
                a = o.getTrusted,
                l = o.trustAs;
            return i(qn, function(e, t) {
                var n = Rt(t);
                o[K("parse_as_" + n)] = function(t) {
                    return s(e, t)
                }, o[K("get_trusted_" + n)] = function(t) {
                    return a(e, t)
                }, o[K("trust_as_" + n)] = function(t) {
                    return l(e, t)
                }
            }), o
        }]
    }

    function ut() {
        this.$get = ["$window", "$document", function(e, t) {
            var n, r = {},
                o = p((/android (\d+)/.exec(Rt((e.navigator || {}).userAgent)) || [])[1]),
                i = /Boxee/i.test((e.navigator || {}).userAgent),
                s = t[0] || {},
                a = s.documentMode,
                l = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                c = s.body && s.body.style,
                u = !1,
                f = !1;
            if (c) {
                for (var d in c)
                    if (u = l.exec(d)) {
                        n = (n = u[0]).substr(0, 1).toUpperCase() + n.substr(1);
                        break
                    }
                n || (n = "WebkitOpacity" in c && "webkit"), u = !!("transition" in c || n + "Transition" in c), f = !!("animation" in c || n + "Animation" in c), !o || u && f || (u = y(s.body.style.webkitTransition), f = y(s.body.style.webkitAnimation))
            }
            return {
                history: !(!e.history || !e.history.pushState || 4 > o || i),
                hashchange: "onhashchange" in e && (!a || 7 < a),
                hasEvent: function(e) {
                    if ("input" == e && 9 == It) return !1;
                    if (m(r[e])) {
                        var t = s.createElement("div");
                        r[e] = "on" + e in t
                    }
                    return r[e]
                },
                csp: Qt(),
                vendorPrefix: n,
                transitions: u,
                animations: f,
                android: o,
                msie: It,
                msieDocumentMode: a
            }
        }]
    }

    function pt() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(e, t, n, r) {
            function o(o, s, a) {
                var l = n.defer(),
                    c = l.promise,
                    u = v(a) && !a;
                return s = t.defer(function() {
                    try {
                        l.resolve(o())
                    } catch (e) {
                        l.reject(e), r(e)
                    } finally {
                        delete i[c.$$timeoutId]
                    }
                    u || e.$apply()
                }, s), c.$$timeoutId = s, i[s] = l, c
            }
            var i = {};
            return o.cancel = function(e) {
                return !!(e && e.$$timeoutId in i) && (i[e.$$timeoutId].reject("canceled"), delete i[e.$$timeoutId], t.defer.cancel(e.$$timeoutId))
            }, o
        }]
    }

    function ft(e, t) {
        var n = e;
        return It && (Un.setAttribute("href", n), n = Un.href), Un.setAttribute("href", n), {
            href: Un.href,
            protocol: Un.protocol ? Un.protocol.replace(/:$/, "") : "",
            host: Un.host,
            search: Un.search ? Un.search.replace(/^\?/, "") : "",
            hash: Un.hash ? Un.hash.replace(/^#/, "") : "",
            hostname: Un.hostname,
            port: Un.port,
            pathname: "/" === Un.pathname.charAt(0) ? Un.pathname : "/" + Un.pathname
        }
    }

    function dt(e) {
        return (e = y(e) ? ft(e) : e).protocol === Hn.protocol && e.host === Hn.host
    }

    function ht() {
        this.$get = g(e)
    }

    function gt(e) {
        function t(r, o) {
            if (b(r)) {
                var s = {};
                return i(r, function(e, n) {
                    s[n] = t(n, e)
                }), s
            }
            return e.factory(r + n, o)
        }
        var n = "Filter";
        this.register = t, this.$get = ["$injector", function(e) {
            return function(t) {
                return e.get(t + n)
            }
        }], t("currency", vt), t("date", kt), t("filter", mt), t("json", Tt), t("limitTo", St), t("lowercase", Yn), t("number", bt), t("orderBy", Ct), t("uppercase", Kn)
    }

    function mt() {
        return function(e, t, n) {
            if (!Yt(e)) return e;
            var r = typeof n,
                o = [];
            o.check = function(e) {
                for (var t = 0; t < o.length; t++)
                    if (!o[t](e)) return !1;
                return !0
            }, "function" !== r && (n = "boolean" === r && n ? function(e, t) {
                return Wt.equals(e, t)
            } : function(e, t) {
                if (e && t && "object" == typeof e && "object" == typeof t) {
                    for (var r in e)
                        if ("$" !== r.charAt(0) && jt.call(e, r) && n(e[r], t[r])) return !0;
                    return !1
                }
                return t = ("" + t).toLowerCase(), -1 < ("" + e).toLowerCase().indexOf(t)
            });
            var i = function(e, t) {
                if ("string" == typeof t && "!" === t.charAt(0)) return !i(e, t.substr(1));
                switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "string":
                        return n(e, t);
                    case "object":
                        switch (typeof t) {
                            case "object":
                                return n(e, t);
                            default:
                                for (var r in e)
                                    if ("$" !== r.charAt(0) && i(e[r], t)) return !0
                        }
                        return !1;
                    case "array":
                        for (r = 0; r < e.length; r++)
                            if (i(e[r], t)) return !0;
                        return !1;
                    default:
                        return !1
                }
            };
            switch (typeof t) {
                case "boolean":
                case "number":
                case "string":
                    t = {
                        $: t
                    };
                case "object":
                    for (var s in t) ! function(e) {
                        void 0 !== t[e] && o.push(function(n) {
                            return i("$" == e ? n : n && n[e], t[e])
                        })
                    }(s);
                    break;
                case "function":
                    o.push(t);
                    break;
                default:
                    return e
            }
            for (r = [], s = 0; s < e.length; s++) {
                var a = e[s];
                o.check(a) && r.push(a)
            }
            return r
        }
    }

    function vt(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n) {
            return m(n) && (n = t.CURRENCY_SYM), yt(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
        }
    }

    function bt(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n) {
            return yt(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
        }
    }

    function yt(e, t, n, r, o) {
        if (null == e || !isFinite(e) || b(e)) return "";
        var i = 0 > e,
            s = (e = Math.abs(e)) + "",
            a = "",
            l = [],
            c = !1; - 1 !== s.indexOf("e") && ((u = s.match(/([\d\.]+)e(-?)(\d+)/)) && "-" == u[2] && u[3] > o + 1 ? (s = "0", e = 0) : (a = s, c = !0));
        if (c) 0 < o && -1 < e && 1 > e && (a = e.toFixed(o));
        else {
            s = (s.split(Vn)[1] || "").length, m(o) && (o = Math.min(Math.max(t.minFrac, s), t.maxFrac)), 0 === (e = +(Math.round(+(e.toString() + "e" + o)).toString() + "e" + -o)) && (i = !1), s = (e = ("" + e).split(Vn))[0], e = e[1] || "";
            var u = 0,
                p = t.lgSize,
                f = t.gSize;
            if (s.length >= p + f)
                for (u = s.length - p, c = 0; c < u; c++) 0 == (u - c) % f && 0 !== c && (a += n), a += s.charAt(c);
            for (c = u; c < s.length; c++) 0 == (s.length - c) % p && 0 !== c && (a += n), a += s.charAt(c);
            for (; e.length < o;) e += "0";
            o && "0" !== o && (a += r + e.substr(0, o))
        }
        return l.push(i ? t.negPre : t.posPre), l.push(a), l.push(i ? t.negSuf : t.posSuf), l.join("")
    }

    function $t(e, t, n) {
        var r = "";
        for (0 > e && (r = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
        return n && (e = e.substr(e.length - t)), r + e
    }

    function xt(e, t, n, r) {
        return n = n || 0,
            function(o) {
                return o = o["get" + e](), (0 < n || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), $t(o, t, r)
            }
    }

    function wt(e, t) {
        return function(n, r) {
            var o = n["get" + e]();
            return r[qt(t ? "SHORT" + e : e)][o]
        }
    }

    function kt(e) {
        var t = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, r) {
            var o, s, a = "",
                l = [];
            if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, y(n) && (n = Gn.test(n) ? p(n) : function(e) {
                    var n;
                    if (n = e.match(t)) {
                        e = new Date(0);
                        var r = 0,
                            o = 0,
                            i = n[8] ? e.setUTCFullYear : e.setFullYear,
                            s = n[8] ? e.setUTCHours : e.setHours;
                        n[9] && (r = p(n[9] + n[10]), o = p(n[9] + n[11])), i.call(e, p(n[1]), p(n[2]) - 1, p(n[3])), r = p(n[4] || 0) - r, o = p(n[5] || 0) - o, i = p(n[6] || 0), n = Math.round(1e3 * parseFloat("0." + (n[7] || 0))), s.call(e, r, o, i, n)
                    }
                    return e
                }(n)), $(n) && (n = new Date(n)), !x(n)) return n;
            for (; r;)(s = Wn.exec(r)) ? (l = l.concat(Ut.call(s, 1)), r = l.pop()) : (l.push(r), r = null);
            return i(l, function(t) {
                o = zn[t], a += o ? o(n, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), a
        }
    }

    function Tt() {
        return function(e) {
            return I(e, !0)
        }
    }

    function St() {
        return function(e, t) {
            if (!Yt(e) && !y(e)) return e;
            if (t = 1 / 0 === Math.abs(Number(t)) ? Number(t) : p(t), y(e)) return t ? 0 <= t ? e.slice(0, t) : e.slice(t, e.length) : "";
            var n, r, o = [];
            for (t > e.length ? t = e.length : t < -e.length && (t = -e.length), 0 < t ? (n = 0, r = t) : (n = e.length + t, r = e.length); n < r; n++) o.push(e[n]);
            return o
        }
    }

    function Ct(e) {
        return function(t, n, r) {
            function s(e, t) {
                return _(t) ? function(t, n) {
                    return e(n, t)
                } : e
            }

            function a(e, t) {
                var n = typeof e,
                    r = typeof t;
                return n == r ? (x(e) && x(t) && (e = e.valueOf(), t = t.valueOf()), "string" == n && (e = e.toLowerCase(), t = t.toLowerCase()), e === t ? 0 : e < t ? -1 : 1) : n < r ? -1 : 1
            }
            return o(t) ? (0 === (n = Yt(n) ? n : [n]).length && (n = ["+"]), l = function(t) {
                var n = !1,
                    r = t || h;
                if (y(t)) {
                    if ("+" != t.charAt(0) && "-" != t.charAt(0) || (n = "-" == t.charAt(0), t = t.substring(1)), "" === t) return s(function(e, t) {
                        return a(e, t)
                    }, n);
                    if ((r = e(t)).constant) {
                        var o = r();
                        return s(function(e, t) {
                            return a(e[o], t[o])
                        }, n)
                    }
                }
                return s(function(e, t) {
                    return a(r(e), r(t))
                }, n)
            }, u = [], i(n, function(e, t, n) {
                u.push(l.call(c, e, t, n))
            }), n = u, Ut.call(t).sort(s(function(e, t) {
                for (var r = 0; r < n.length; r++) {
                    var o = n[r](e, t);
                    if (0 !== o) return o
                }
                return 0
            }, r))) : t;
            var l, c, u
        }
    }

    function Et(e) {
        return w(e) && (e = {
            link: e
        }), e.restrict = e.restrict || "AC", g(e)
    }

    function At(e, t, n, r) {
        function o(t, n) {
            n = n ? "-" + H(n, "-") : "", r.setClass(e, (t ? lr : cr) + n, (t ? cr : lr) + n)
        }
        var s = this,
            a = e.parent().controller("form") || Jn,
            l = 0,
            c = s.$error = {},
            u = [];
        s.$name = t.name || t.ngForm, s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, a.$addControl(s), e.addClass(ur), o(!0), s.$addControl = function(e) {
            W(e.$name, "input"), u.push(e), e.$name && (s[e.$name] = e)
        }, s.$removeControl = function(e) {
            e.$name && s[e.$name] === e && delete s[e.$name], i(c, function(t, n) {
                s.$setValidity(n, !0, e)
            }), E(u, e)
        }, s.$setValidity = function(e, t, n) {
            var r = c[e];
            if (t) r && (E(r, n), r.length || (l--, l || (o(t), s.$valid = !0, s.$invalid = !1), c[e] = !1, o(!0, e), a.$setValidity(e, !0, s)));
            else {
                if (l || o(t), r) {
                    if (-1 != C(r, n)) return
                } else c[e] = r = [], l++, o(!1, e), a.$setValidity(e, !1, s);
                r.push(n), s.$valid = !1, s.$invalid = !0
            }
        }, s.$setDirty = function() {
            r.removeClass(e, ur), r.addClass(e, pr), s.$dirty = !0, s.$pristine = !1, a.$setDirty()
        }, s.$setPristine = function() {
            r.removeClass(e, pr), r.addClass(e, ur), s.$dirty = !1, s.$pristine = !0, i(u, function(e) {
                e.$setPristine()
            })
        }
    }

    function Pt(e, t, r, o) {
        return e.$setValidity(t, r), r ? o : n
    }

    function Dt(e, t) {
        var n, r;
        if (t)
            for (n = 0; n < t.length; ++n)
                if (r = t[n], e[r]) return !0;
        return !1
    }

    function Nt(e, t, n, o, i, s) {
        var a = t.prop(Bt),
            l = t[0].placeholder,
            c = {},
            u = Rt(t[0].type);
        if (o.$$validityState = a, !i.android) {
            var f = !1;
            t.on("compositionstart", function(e) {
                f = !0
            }), t.on("compositionend", function() {
                f = !1, d()
            })
        }
        var d = function(r) {
            if (!f) {
                var i = t.val();
                It && "input" === (r || c).type && t[0].placeholder !== l ? l = t[0].placeholder : ("password" !== u && _(n.ngTrim || "T") && (i = Kt(i)), r = a && o.$$hasNativeValidators, (o.$viewValue !== i || "" === i && r) && (e.$root.$$phase ? o.$setViewValue(i) : e.$apply(function() {
                    o.$setViewValue(i)
                })))
            }
        };
        if (i.hasEvent("input")) t.on("input", d);
        else {
            var h, g = function() {
                h || (h = s.defer(function() {
                    d(), h = null
                }))
            };
            t.on("keydown", function(e) {
                91 === (e = e.keyCode) || 15 < e && 19 > e || 37 <= e && 40 >= e || g()
            }), i.hasEvent("paste") && t.on("paste cut", g)
        }
        t.on("change", d), o.$render = function() {
            t.val(o.$isEmpty(o.$viewValue) ? "" : o.$viewValue)
        };
        var m = n.ngPattern;
        if (m && ((i = m.match(/^\/(.*)\/([gim]*)$/)) ? (m = RegExp(i[1], i[2]), i = function(e) {
                return Pt(o, "pattern", o.$isEmpty(e) || m.test(e), e)
            }) : i = function(n) {
                var i = e.$eval(m);
                if (!i || !i.test) throw r("ngPattern")("noregexp", m, i, L(t));
                return Pt(o, "pattern", o.$isEmpty(n) || i.test(n), n)
            }, o.$formatters.push(i), o.$parsers.push(i)), n.ngMinlength) {
            var v = p(n.ngMinlength);
            i = function(e) {
                return Pt(o, "minlength", o.$isEmpty(e) || e.length >= v, e)
            }, o.$parsers.push(i), o.$formatters.push(i)
        }
        if (n.ngMaxlength) {
            var b = p(n.ngMaxlength);
            i = function(e) {
                return Pt(o, "maxlength", o.$isEmpty(e) || e.length <= b, e)
            }, o.$parsers.push(i), o.$formatters.push(i)
        }
    }

    function Ot(e, t) {
        return e = "ngClass" + e, ["$animate", function(n) {
            function r(e, t) {
                var n = [],
                    r = 0;
                e: for (; r < e.length; r++) {
                    for (var o = e[r], i = 0; i < t.length; i++)
                        if (o == t[i]) continue e;
                    n.push(o)
                }
                return n
            }

            function o(e) {
                if (!Yt(e)) {
                    if (y(e)) return e.split(" ");
                    if (b(e)) {
                        var t = [];
                        return i(e, function(e, n) {
                            e && (t = t.concat(n.split(" ")))
                        }), t
                    }
                }
                return e
            }
            return {
                restrict: "AC",
                link: function(s, a, l) {
                    function c(e, t) {
                        var n = a.data("$classCounts") || {},
                            r = [];
                        return i(e, function(e) {
                            (0 < t || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(0 < t) && r.push(e))
                        }), a.data("$classCounts", n), r.join(" ")
                    }

                    function u(e) {
                        if (!0 === t || s.$index % 2 === t) {
                            var i = o(e || []);
                            if (p) {
                                if (!D(e, p)) {
                                    var u = o(p);
                                    f = r(i, u), i = c(i = r(u, i), -1);
                                    0 === (f = c(f, 1)).length ? n.removeClass(a, i) : 0 === i.length ? n.addClass(a, f) : n.setClass(a, f, i)
                                }
                            } else {
                                var f = c(i, 1);
                                l.$addClass(f)
                            }
                        }
                        p = P(e)
                    }
                    var p;
                    s.$watch(l[e], u, !0), l.$observe("class", function(t) {
                        u(s.$eval(l[e]))
                    }), "ngClass" !== e && s.$watch("$index", function(n, r) {
                        var i = 1 & n;
                        if (i !== (1 & r)) {
                            var a = o(s.$eval(l[e]));
                            i === t ? (i = c(a, 1), l.$addClass(i)) : (i = c(a, -1), l.$removeClass(i))
                        }
                    })
                }
            }
        }]
    }
    var It, Mt, _t, Lt, Ft, Bt = "validity",
        Rt = function(e) {
            return y(e) ? e.toLowerCase() : e
        },
        jt = Object.prototype.hasOwnProperty,
        qt = function(e) {
            return y(e) ? e.toUpperCase() : e
        },
        Ut = [].slice,
        Ht = [].push,
        Vt = Object.prototype.toString,
        zt = r("ng"),
        Wt = e.angular || (e.angular = {}),
        Gt = ["0", "0", "0"];
    It = p((/msie (\d+)/.exec(Rt(navigator.userAgent)) || [])[1]), isNaN(It) && (It = p((/trident\/.*; rv:(\d+)/.exec(Rt(navigator.userAgent)) || [])[1])), d.$inject = [], h.$inject = [];
    var Yt = w(Array.isArray) ? Array.isArray : function(e) {
            return "[object Array]" === Vt.call(e)
        },
        Kt = String.prototype.trim ? function(e) {
            return y(e) ? e.trim() : e
        } : function(e) {
            return y(e) ? e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : e
        };
    Ft = 9 > It ? function(e) {
        return (e = e.nodeName ? e : e[0]).scopeName && "HTML" != e.scopeName ? qt(e.scopeName + ":" + e.nodeName) : e.nodeName
    } : function(e) {
        return e.nodeName ? e.nodeName : e[0].nodeName
    };
    var Qt = function() {
            if (v(Qt.isActive_)) return Qt.isActive_;
            var e = !(!t.querySelector("[ng-csp]") && !t.querySelector("[data-ng-csp]"));
            if (!e) try {
                new Function("")
            } catch (t) {
                e = !0
            }
            return Qt.isActive_ = e
        },
        Xt = /[A-Z]/g,
        Jt = {
            full: "1.2.28",
            major: 1,
            minor: 2,
            dot: 28,
            codeName: "finnish-disembarkation"
        };
    X.expando = "ng339";
    var Zt = X.cache = {},
        en = 1,
        tn = e.document.addEventListener ? function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : function(e, t, n) {
            e.attachEvent("on" + t, n)
        },
        nn = e.document.removeEventListener ? function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            e.detachEvent("on" + t, n)
        };
    X._data = function(e) {
        return this.cache[e[this.expando]] || {}
    };
    var rn = /([\:\-\_]+(.))/g,
        on = /^moz([A-Z])/,
        sn = r("jqLite"),
        an = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ln = /<|&#?\w+;/,
        cn = /<([\w:]+)/,
        un = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        pn = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    pn.optgroup = pn.option, pn.tbody = pn.tfoot = pn.colgroup = pn.caption = pn.thead, pn.th = pn.td;
    var fn = X.prototype = {
            ready: function(n) {
                function r() {
                    o || (o = !0, n())
                }
                var o = !1;
                "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), X(e).on("load", r))
            },
            toString: function() {
                var e = [];
                return i(this, function(t) {
                    e.push("" + t)
                }), "[" + e.join(", ") + "]"
            },
            eq: function(e) {
                return Mt(0 <= e ? this[e] : this[this.length + e])
            },
            length: 0,
            push: Ht,
            sort: [].sort,
            splice: [].splice
        },
        dn = {};
    i("multiple selected checked disabled readOnly required open".split(" "), function(e) {
        dn[Rt(e)] = e
    });
    var hn = {};
    i("input select option textarea button form details".split(" "), function(e) {
        hn[qt(e)] = !0
    }), i({
        data: re,
        removeData: te
    }, function(e, t) {
        X[t] = e
    }), i({
        data: re,
        inheritedData: ce,
        scope: function(e) {
            return Mt.data(e, "$scope") || ce(e.parentNode || e, ["$isolateScope", "$scope"])
        },
        isolateScope: function(e) {
            return Mt.data(e, "$isolateScope") || Mt.data(e, "$isolateScopeNoTemplate")
        },
        controller: le,
        injector: function(e) {
            return ce(e, "$injector")
        },
        removeAttr: function(e, t) {
            e.removeAttribute(t)
        },
        hasClass: oe,
        css: function(e, t, r) {
            var o;
            if (t = K(t), !v(r)) return 8 >= It && ("" === (o = e.currentStyle && e.currentStyle[t]) && (o = "auto")), o = o || e.style[t], 8 >= It && (o = "" === o ? n : o), o;
            e.style[t] = r
        },
        attr: function(e, t, r) {
            var o = Rt(t);
            if (dn[o]) {
                if (!v(r)) return e[t] || (e.attributes.getNamedItem(t) || d).specified ? o : n;
                r ? (e[t] = !0, e.setAttribute(t, o)) : (e[t] = !1, e.removeAttribute(o))
            } else if (v(r)) e.setAttribute(t, r);
            else if (e.getAttribute) return e = e.getAttribute(t, 2), null === e ? n : e
        },
        prop: function(e, t, n) {
            if (!v(n)) return e[t];
            e[t] = n
        },
        text: function() {
            function e(e, n) {
                var r = t[e.nodeType];
                if (m(n)) return r ? e[r] : "";
                e[r] = n
            }
            var t = [];
            return 9 > It ? (t[1] = "innerText", t[3] = "nodeValue") : t[1] = t[3] = "textContent", e.$dv = "", e
        }(),
        val: function(e, t) {
            if (m(t)) {
                if ("SELECT" === Ft(e) && e.multiple) {
                    var n = [];
                    return i(e.options, function(e) {
                        e.selected && n.push(e.value || e.text)
                    }), 0 === n.length ? null : n
                }
                return e.value
            }
            e.value = t
        },
        html: function(e, t) {
            if (m(t)) return e.innerHTML;
            for (var n = 0, r = e.childNodes; n < r.length; n++) Z(r[n]);
            e.innerHTML = t
        },
        empty: ue
    }, function(e, t) {
        X.prototype[t] = function(t, r) {
            var o, i, s = this.length;
            if (e !== ue && (2 == e.length && e !== oe && e !== le ? t : r) === n) {
                if (b(t)) {
                    for (o = 0; o < s; o++)
                        if (e === re) e(this[o], t);
                        else
                            for (i in t) e(this[o], i, t[i]);
                    return this
                }
                for (s = (o = e.$dv) === n ? Math.min(s, 1) : s, i = 0; i < s; i++) {
                    var a = e(this[i], t, r);
                    o = o ? o + a : a
                }
                return o
            }
            for (o = 0; o < s; o++) e(this[o], t, r);
            return this
        }
    }), i({
        removeData: te,
        dealoc: Z,
        on: function e(n, r, o, s) {
            if (v(s)) throw sn("onargs");
            var a, l, c, u = ne(n, "events"),
                p = ne(n, "handle");
            u || ne(n, "events", u = {}), p || ne(n, "handle", (l = u, (c = function(e, n) {
                if (e.preventDefault || (e.preventDefault = function() {
                        e.returnValue = !1
                    }), e.stopPropagation || (e.stopPropagation = function() {
                        e.cancelBubble = !0
                    }), e.target || (e.target = e.srcElement || t), m(e.defaultPrevented)) {
                    var r = e.preventDefault;
                    e.preventDefault = function() {
                        e.defaultPrevented = !0, r.call(e)
                    }, e.defaultPrevented = !1
                }
                e.isDefaultPrevented = function() {
                    return e.defaultPrevented || !1 === e.returnValue
                }, i(P(l[n || e.type] || []), function(t) {
                    t.call(a, e)
                }), 8 >= It ? (e.preventDefault = null, e.stopPropagation = null, e.isDefaultPrevented = null) : (delete e.preventDefault, delete e.stopPropagation, delete e.isDefaultPrevented)
            }).elem = a = n, p = c)), i(r.split(" "), function(r) {
                var i = u[r];
                if (!i) {
                    if ("mouseenter" == r || "mouseleave" == r) {
                        var s = t.body.contains || t.body.compareDocumentPosition ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        };
                        u[r] = [], e(n, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[r], function(e) {
                            var t = e.relatedTarget;
                            t && (t === this || s(this, t)) || p(e, r)
                        })
                    } else tn(n, r, p), u[r] = [];
                    i = u[r]
                }
                i.push(o)
            })
        },
        off: ee,
        one: function(e, t, n) {
            (e = Mt(e)).on(t, function r() {
                e.off(t, n), e.off(t, r)
            }), e.on(t, n)
        },
        replaceWith: function(e, t) {
            var n, r = e.parentNode;
            Z(e), i(new X(t), function(t) {
                n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
            })
        },
        children: function(e) {
            var t = [];
            return i(e.childNodes, function(e) {
                1 === e.nodeType && t.push(e)
            }), t
        },
        contents: function(e) {
            return e.contentDocument || e.childNodes || []
        },
        append: function(e, t) {
            i(new X(t), function(t) {
                1 !== e.nodeType && 11 !== e.nodeType || e.appendChild(t)
            })
        },
        prepend: function(e, t) {
            if (1 === e.nodeType) {
                var n = e.firstChild;
                i(new X(t), function(t) {
                    e.insertBefore(t, n)
                })
            }
        },
        wrap: function(e, t) {
            t = Mt(t)[0];
            var n = e.parentNode;
            n && n.replaceChild(t, e), t.appendChild(e)
        },
        remove: function(e) {
            Z(e);
            var t = e.parentNode;
            t && t.removeChild(e)
        },
        after: function(e, t) {
            var n = e,
                r = e.parentNode;
            i(new X(t), function(e) {
                r.insertBefore(e, n.nextSibling), n = e
            })
        },
        addClass: se,
        removeClass: ie,
        toggleClass: function(e, t, n) {
            t && i(t.split(" "), function(t) {
                var r = n;
                m(r) && (r = !oe(e, t)), (r ? se : ie)(e, t)
            })
        },
        parent: function(e) {
            return (e = e.parentNode) && 11 !== e.nodeType ? e : null
        },
        next: function(e) {
            if (e.nextElementSibling) return e.nextElementSibling;
            for (e = e.nextSibling; null != e && 1 !== e.nodeType;) e = e.nextSibling;
            return e
        },
        find: function(e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : []
        },
        clone: J,
        triggerHandler: function(e, t, n) {
            var r, o;
            r = t.type || t;
            var s = (ne(e, "events") || {})[r];
            s && (r = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented
                },
                stopPropagation: d,
                type: r,
                target: e
            }, t.type && (r = u(r, t)), t = P(s), o = n ? [r].concat(n) : [r], i(t, function(t) {
                t.apply(e, o)
            }))
        }
    }, function(e, t) {
        X.prototype[t] = function(t, n, r) {
            for (var o, i = 0; i < this.length; i++) m(o) ? (o = e(this[i], t, n, r), v(o) && (o = Mt(o))) : ae(o, e(this[i], t, n, r));
            return v(o) ? o : this
        }, X.prototype.bind = X.prototype.on, X.prototype.unbind = X.prototype.off
    }), de.prototype = {
        put: function(e, t) {
            this[fe(e, this.nextUid)] = t
        },
        get: function(e) {
            return this[fe(e, this.nextUid)]
        },
        remove: function(e) {
            var t = this[e = fe(e, this.nextUid)];
            return delete this[e], t
        }
    };
    var gn = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        mn = /,/,
        vn = /^\s*(_?)(\S+?)\1\s*$/,
        bn = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        yn = r("$injector"),
        $n = r("$animate"),
        xn = ["$provide", function(e) {
            this.$$selectors = {}, this.register = function(t, n) {
                var r = t + "-animation";
                if (t && "." != t.charAt(0)) throw $n("notcsel", t);
                this.$$selectors[t.substr(1)] = r, e.factory(r, n)
            }, this.classNameFilter = function(e) {
                return 1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null), this.$$classNameFilter
            }, this.$get = ["$timeout", "$$asyncCallback", function(e, t) {
                return {
                    enter: function(e, n, r, o) {
                        r ? r.after(e) : (n && n[0] || (n = r.parent()), n.append(e)), o && t(o)
                    },
                    leave: function(e, n) {
                        e.remove(), n && t(n)
                    },
                    move: function(e, t, n, r) {
                        this.enter(e, t, n, r)
                    },
                    addClass: function(e, n, r) {
                        n = y(n) ? n : Yt(n) ? n.join(" ") : "", i(e, function(e) {
                            se(e, n)
                        }), r && t(r)
                    },
                    removeClass: function(e, n, r) {
                        n = y(n) ? n : Yt(n) ? n.join(" ") : "", i(e, function(e) {
                            ie(e, n)
                        }), r && t(r)
                    },
                    setClass: function(e, n, r, o) {
                        i(e, function(e) {
                            se(e, n), ie(e, r)
                        }), o && t(o)
                    },
                    enabled: d
                }
            }]
        }],
        wn = r("$compile");
    we.$inject = ["$provide", "$$sanitizeUriProvider"];
    var kn = /^(x[\:\-_]|data[\:\-_])/i,
        Tn = r("$interpolate"),
        Sn = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        Cn = {
            http: 80,
            https: 443,
            ftp: 21
        },
        En = r("$location");
    ze.prototype = Ve.prototype = He.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: We("$$absUrl"),
        url: function(e) {
            return m(e) ? this.$$url : ((e = Sn.exec(e))[1] && this.path(decodeURIComponent(e[1])), (e[2] || e[1]) && this.search(e[3] || ""), this.hash(e[5] || ""), this)
        },
        protocol: We("$$protocol"),
        host: We("$$host"),
        port: We("$$port"),
        path: Ge("$$path", function(e) {
            return "/" == (e = null !== e ? e.toString() : "").charAt(0) ? e : "/" + e
        }),
        search: function(e, t) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (y(e) || $(e)) e = e.toString(), this.$$search = B(e);
                    else {
                        if (!b(e)) throw En("isrcharg");
                        i(e, function(t, n) {
                            null == t && delete e[n]
                        }), this.$$search = e
                    }
                    break;
                default:
                    m(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
            }
            return this.$$compose(), this
        },
        hash: Ge("$$hash", function(e) {
            return null !== e ? e.toString() : ""
        }),
        replace: function() {
            return this.$$replace = !0, this
        }
    };
    var An, Pn = r("$parse"),
        Dn = {},
        Nn = Function.prototype.call,
        On = Function.prototype.apply,
        In = Function.prototype.bind,
        Mn = {
            null: function() {
                return null
            },
            true: function() {
                return !0
            },
            false: function() {
                return !1
            },
            undefined: d,
            "+": function(e, t, r, o) {
                return r = r(e, t), o = o(e, t), v(r) ? v(o) ? r + o : r : v(o) ? o : n
            },
            "-": function(e, t, n, r) {
                return n = n(e, t), r = r(e, t), (v(n) ? n : 0) - (v(r) ? r : 0)
            },
            "*": function(e, t, n, r) {
                return n(e, t) * r(e, t)
            },
            "/": function(e, t, n, r) {
                return n(e, t) / r(e, t)
            },
            "%": function(e, t, n, r) {
                return n(e, t) % r(e, t)
            },
            "^": function(e, t, n, r) {
                return n(e, t) ^ r(e, t)
            },
            "=": d,
            "===": function(e, t, n, r) {
                return n(e, t) === r(e, t)
            },
            "!==": function(e, t, n, r) {
                return n(e, t) !== r(e, t)
            },
            "==": function(e, t, n, r) {
                return n(e, t) == r(e, t)
            },
            "!=": function(e, t, n, r) {
                return n(e, t) != r(e, t)
            },
            "<": function(e, t, n, r) {
                return n(e, t) < r(e, t)
            },
            ">": function(e, t, n, r) {
                return n(e, t) > r(e, t)
            },
            "<=": function(e, t, n, r) {
                return n(e, t) <= r(e, t)
            },
            ">=": function(e, t, n, r) {
                return n(e, t) >= r(e, t)
            },
            "&&": function(e, t, n, r) {
                return n(e, t) && r(e, t)
            },
            "||": function(e, t, n, r) {
                return n(e, t) || r(e, t)
            },
            "&": function(e, t, n, r) {
                return n(e, t) & r(e, t)
            },
            "|": function(e, t, n, r) {
                return r(e, t)(e, t, n(e, t))
            },
            "!": function(e, t, n) {
                return !n(e, t)
            }
        },
        _n = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        },
        Ln = function(e) {
            this.options = e
        };
    Ln.prototype = {
        constructor: Ln,
        lex: function(e) {
            for (this.text = e, this.index = 0, this.ch = n, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
                else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(this.ch)) this.readIdent();
                else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch
                }), this.index++;
                else {
                    if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue
                    }
                    var t = (e = this.ch + this.peek()) + this.peek(2),
                        r = Mn[this.ch],
                        o = Mn[e],
                        i = Mn[t];
                    i ? (this.tokens.push({
                        index: this.index,
                        text: t,
                        fn: i
                    }), this.index += 3) : o ? (this.tokens.push({
                        index: this.index,
                        text: e,
                        fn: o
                    }), this.index += 2) : r ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: r
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
                this.lastCh = this.ch
            }
            return this.tokens
        },
        is: function(e) {
            return -1 !== e.indexOf(this.ch)
        },
        was: function(e) {
            return -1 !== e.indexOf(this.lastCh)
        },
        peek: function(e) {
            return e = e || 1, this.index + e < this.text.length && this.text.charAt(this.index + e)
        },
        isNumber: function(e) {
            return "0" <= e && "9" >= e
        },
        isWhitespace: function(e) {
            return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
        },
        isIdent: function(e) {
            return "a" <= e && "z" >= e || "A" <= e && "Z" >= e || "_" === e || "$" === e
        },
        isExpOperator: function(e) {
            return "-" === e || "+" === e || this.isNumber(e)
        },
        throwError: function(e, t, n) {
            throw n = n || this.index, t = v(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n, Pn("lexerr", e, t, this.text)
        },
        readNumber: function() {
            for (var e = "", t = this.index; this.index < this.text.length;) {
                var n = Rt(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) e += n;
                else {
                    var r = this.peek();
                    if ("e" == n && this.isExpOperator(r)) e += n;
                    else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1)) e += n;
                    else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            e *= 1, this.tokens.push({
                index: t,
                text: e,
                literal: !0,
                constant: !0,
                fn: function() {
                    return e
                }
            })
        },
        readIdent: function() {
            for (var e, t, n, r, o = this, i = "", s = this.index; this.index < this.text.length && ("." === (r = this.text.charAt(this.index)) || this.isIdent(r) || this.isNumber(r));) "." === r && (e = this.index), i += r, this.index++;
            if (e)
                for (t = this.index; t < this.text.length;) {
                    if ("(" === (r = this.text.charAt(t))) {
                        n = i.substr(e - s + 1), i = i.substr(0, e - s), this.index = t;
                        break
                    }
                    if (!this.isWhitespace(r)) break;
                    t++
                }
            if (s = {
                    index: s,
                    text: i
                }, Mn.hasOwnProperty(i)) s.fn = Mn[i], s.literal = !0, s.constant = !0;
            else {
                var a = tt(i, this.options, this.text);
                s.fn = u(function(e, t) {
                    return a(e, t)
                }, {
                    assign: function(e, t) {
                        return Je(e, i, t, o.text, o.options)
                    }
                })
            }
            this.tokens.push(s), n && (this.tokens.push({
                index: e,
                text: "."
            }), this.tokens.push({
                index: e + 1,
                text: n
            }))
        },
        readString: function(e) {
            var t = this.index;
            this.index++;
            for (var n = "", r = e, o = !1; this.index < this.text.length;) {
                var i = this.text.charAt(this.index);
                r = r + i;
                if (o) "u" === i ? (o = this.text.substring(this.index + 1, this.index + 5), o.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + o + "]"), this.index += 4, n += String.fromCharCode(parseInt(o, 16))) : n += _n[i] || i, o = !1;
                else if ("\\" === i) o = !0;
                else {
                    if (i === e) return this.index++, void this.tokens.push({
                        index: t,
                        text: r,
                        string: n,
                        literal: !0,
                        constant: !0,
                        fn: function() {
                            return n
                        }
                    });
                    n += i
                }
                this.index++
            }
            this.throwError("Unterminated quote", t)
        }
    };
    var Fn = function(e, t, n) {
        this.lexer = e, this.$filter = t, this.options = n
    };
    Fn.ZERO = u(function() {
        return 0
    }, {
        constant: !0
    }), Fn.prototype = {
        constructor: Fn,
        parse: function(e) {
            return this.text = e, this.tokens = this.lexer.lex(e), e = this.statements(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e.literal = !!e.literal, e.constant = !!e.constant, e
        },
        primary: function() {
            var e, t;
            if (this.expect("(")) e = this.filterChain(), this.consume(")");
            else if (this.expect("[")) e = this.arrayDeclaration();
            else if (this.expect("{")) e = this.object();
            else {
                var n = this.expect();
                (e = n.fn) || this.throwError("not a primary expression", n), e.literal = !!n.literal, e.constant = !!n.constant
            }
            for (; n = this.expect("(", "[", ".");) "(" === n.text ? (e = this.functionCall(e, t), t = null) : "[" === n.text ? (t = e, e = this.objectIndex(e)) : "." === n.text ? (t = e, e = this.fieldAccess(e)) : this.throwError("IMPOSSIBLE");
            return e
        },
        throwError: function(e, t) {
            throw Pn("syntax", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw Pn("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function(e, t, n, r) {
            if (0 < this.tokens.length) {
                var o = this.tokens[0],
                    i = o.text;
                if (i === e || i === t || i === n || i === r || !(e || t || n || r)) return o
            }
            return !1
        },
        expect: function(e, t, n, r) {
            return !!(e = this.peek(e, t, n, r)) && (this.tokens.shift(), e)
        },
        consume: function(e) {
            this.expect(e) || this.throwError("is unexpected, expecting [" + e + "]", this.peek())
        },
        unaryFn: function(e, t) {
            return u(function(n, r) {
                return e(n, r, t)
            }, {
                constant: t.constant
            })
        },
        ternaryFn: function(e, t, n) {
            return u(function(r, o) {
                return e(r, o) ? t(r, o) : n(r, o)
            }, {
                constant: e.constant && t.constant && n.constant
            })
        },
        binaryFn: function(e, t, n) {
            return u(function(r, o) {
                return t(r, o, e, n)
            }, {
                constant: e.constant && n.constant
            })
        },
        statements: function() {
            for (var e = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && e.push(this.filterChain()), !this.expect(";")) return 1 === e.length ? e[0] : function(t, n) {
                    for (var r, o = 0; o < e.length; o++) {
                        var i = e[o];
                        i && (r = i(t, n))
                    }
                    return r
                }
        },
        filterChain: function() {
            for (var e, t = this.expression();;) {
                if (!(e = this.expect("|"))) return t;
                t = this.binaryFn(t, e.fn, this.filter())
            }
        },
        filter: function() {
            for (var e = this.expect(), t = this.$filter(e.text), n = [];;) {
                if (!(e = this.expect(":"))) {
                    var r = function(e, r, o) {
                        o = [o];
                        for (var i = 0; i < n.length; i++) o.push(n[i](e, r));
                        return t.apply(e, o)
                    };
                    return function() {
                        return r
                    }
                }
                n.push(this.expression())
            }
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var e, t, n = this.ternary();
            return (t = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, t.index) + "] can not be assigned to", t), e = this.ternary(), function(t, r) {
                return n.assign(t, e(t, r), r)
            }) : n
        },
        ternary: function() {
            var e, t, n = this.logicalOR();
            return this.expect("?") ? (e = this.assignment(), (t = this.expect(":")) ? this.ternaryFn(n, e, this.assignment()) : void this.throwError("expected :", t)) : n
        },
        logicalOR: function() {
            for (var e, t = this.logicalAND();;) {
                if (!(e = this.expect("||"))) return t;
                t = this.binaryFn(t, e.fn, this.logicalAND())
            }
        },
        logicalAND: function() {
            var e, t = this.equality();
            return (e = this.expect("&&")) && (t = this.binaryFn(t, e.fn, this.logicalAND())), t
        },
        equality: function() {
            var e, t = this.relational();
            return (e = this.expect("==", "!=", "===", "!==")) && (t = this.binaryFn(t, e.fn, this.equality())), t
        },
        relational: function() {
            var e, t = this.additive();
            return (e = this.expect("<", ">", "<=", ">=")) && (t = this.binaryFn(t, e.fn, this.relational())), t
        },
        additive: function() {
            for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = this.binaryFn(t, e.fn, this.multiplicative());
            return t
        },
        multiplicative: function() {
            for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = this.binaryFn(t, e.fn, this.unary());
            return t
        },
        unary: function() {
            var e;
            return this.expect("+") ? this.primary() : (e = this.expect("-")) ? this.binaryFn(Fn.ZERO, e.fn, this.unary()) : (e = this.expect("!")) ? this.unaryFn(e.fn, this.unary()) : this.primary()
        },
        fieldAccess: function(e) {
            var t = this,
                n = this.expect().text,
                r = tt(n, this.options, this.text);
            return u(function(t, n, o) {
                return r(o || e(t, n))
            }, {
                assign: function(r, o, i) {
                    return (i = e(r, i)) || e.assign(r, i = {}), Je(i, n, o, t.text, t.options)
                }
            })
        },
        objectIndex: function(e) {
            var t = this,
                r = this.expression();
            return this.consume("]"), u(function(o, i) {
                var s, a = e(o, i),
                    l = r(o, i);
                return Qe(l, t.text), a ? ((a = Xe(a[l], t.text)) && a.then && t.options.unwrapPromises && (s = a, "$$v" in a || (s.$$v = n, s.then(function(e) {
                    s.$$v = e
                })), a = a.$$v), a) : n
            }, {
                assign: function(n, o, i) {
                    var s = Qe(r(n, i), t.text);
                    return (i = Xe(e(n, i), t.text)) || e.assign(n, i = {}), i[s] = o
                }
            })
        },
        functionCall: function(e, t) {
            var n = [];
            if (")" !== this.peekToken().text)
                do {
                    n.push(this.expression())
                } while (this.expect(","));
            this.consume(")");
            var r = this;
            return function(o, i) {
                for (var s = [], a = t ? t(o, i) : o, l = 0; l < n.length; l++) s.push(Xe(n[l](o, i), r.text));
                l = e(o, i, a) || d, Xe(a, r.text);
                var c = r.text;
                if (l) {
                    if (l.constructor === l) throw Pn("isecfn", c);
                    if (l === Nn || l === On || In && l === In) throw Pn("isecff", c)
                }
                return Xe(s = l.apply ? l.apply(a, s) : l(s[0], s[1], s[2], s[3], s[4]), r.text)
            }
        },
        arrayDeclaration: function() {
            var e = [],
                t = !0;
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    var n = this.expression();
                    e.push(n), n.constant || (t = !1)
                } while (this.expect(","));
            return this.consume("]"), u(function(t, n) {
                for (var r = [], o = 0; o < e.length; o++) r.push(e[o](t, n));
                return r
            }, {
                literal: !0,
                constant: t
            })
        },
        object: function() {
            var e = [],
                t = !0;
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    var n = (n = this.expect()).string || n.text;
                    this.consume(":");
                    var r = this.expression();
                    e.push({
                        key: n,
                        value: r
                    }), r.constant || (t = !1)
                } while (this.expect(","));
            return this.consume("}"), u(function(t, n) {
                for (var r = {}, o = 0; o < e.length; o++) {
                    var i = e[o];
                    r[i.key] = i.value(t, n)
                }
                return r
            }, {
                literal: !0,
                constant: t
            })
        }
    };
    var Bn = {},
        Rn = {},
        jn = r("$sce"),
        qn = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Un = t.createElement("a"),
        Hn = ft(e.location.href);
    gt.$inject = ["$provide"], vt.$inject = ["$locale"], bt.$inject = ["$locale"];
    var Vn = ".",
        zn = {
            yyyy: xt("FullYear", 4),
            yy: xt("FullYear", 2, 0, !0),
            y: xt("FullYear", 1),
            MMMM: wt("Month"),
            MMM: wt("Month", !0),
            MM: xt("Month", 2, 1),
            M: xt("Month", 1, 1),
            dd: xt("Date", 2),
            d: xt("Date", 1),
            HH: xt("Hours", 2),
            H: xt("Hours", 1),
            hh: xt("Hours", 2, -12),
            h: xt("Hours", 1, -12),
            mm: xt("Minutes", 2),
            m: xt("Minutes", 1),
            ss: xt("Seconds", 2),
            s: xt("Seconds", 1),
            sss: xt("Milliseconds", 3),
            EEEE: wt("Day"),
            EEE: wt("Day", !0),
            a: function(e, t) {
                return 12 > e.getHours() ? t.AMPMS[0] : t.AMPMS[1]
            },
            Z: function(e) {
                return (0 <= (e = -1 * e.getTimezoneOffset()) ? "+" : "") + ($t(Math[0 < e ? "floor" : "ceil"](e / 60), 2) + $t(Math.abs(e % 60), 2))
            }
        },
        Wn = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
        Gn = /^\-?\d+$/;
    kt.$inject = ["$locale"];
    var Yn = g(Rt),
        Kn = g(qt);
    Ct.$inject = ["$parse"];
    var Qn = g({
            restrict: "E",
            compile: function(e, n) {
                if (8 >= It && (n.href || n.name || n.$set("href", ""), e.append(t.createComment("IE fix"))), !n.href && !n.xlinkHref && !n.name) return function(e, t) {
                    var n = "[object SVGAnimatedString]" === Vt.call(t.prop("href")) ? "xlink:href" : "href";
                    t.on("click", function(e) {
                        t.attr(n) || e.preventDefault()
                    })
                }
            }
        }),
        Xn = {};
    i(dn, function(e, t) {
        if ("multiple" != e) {
            var n = ke("ng-" + t);
            Xn[n] = function() {
                return {
                    priority: 100,
                    link: function(e, r, o) {
                        e.$watch(o[n], function(e) {
                            o.$set(t, !!e)
                        })
                    }
                }
            }
        }
    }), i(["src", "srcset", "href"], function(e) {
        var t = ke("ng-" + e);
        Xn[t] = function() {
            return {
                priority: 99,
                link: function(n, r, o) {
                    var i = e,
                        s = e;
                    "href" === e && "[object SVGAnimatedString]" === Vt.call(r.prop("href")) && (s = "xlinkHref", o.$attr[s] = "xlink:href", i = null), o.$observe(t, function(t) {
                        t ? (o.$set(s, t), It && i && r.prop(i, o[s])) : "href" === e && o.$set(s, null)
                    })
                }
            }
        }
    });
    var Jn = {
        $addControl: d,
        $removeControl: d,
        $setValidity: d,
        $setDirty: d,
        $setPristine: d
    };
    At.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var Zn = function(e) {
            return ["$timeout", function(t) {
                return {
                    name: "form",
                    restrict: e ? "EAC" : "E",
                    controller: At,
                    compile: function() {
                        return {
                            pre: function(e, r, o, i) {
                                if (!o.action) {
                                    var s = function(e) {
                                        e.preventDefault ? e.preventDefault() : e.returnValue = !1
                                    };
                                    tn(r[0], "submit", s), r.on("$destroy", function() {
                                        t(function() {
                                            nn(r[0], "submit", s)
                                        }, 0, !1)
                                    })
                                }
                                var a = r.parent().controller("form"),
                                    l = o.name || o.ngForm;
                                l && Je(e, l, i, l), a && r.on("$destroy", function() {
                                    a.$removeControl(i), l && Je(e, l, n, l), u(i, Jn)
                                })
                            }
                        }
                    }
                }
            }]
        },
        er = Zn(),
        tr = Zn(!0),
        nr = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        rr = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        or = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        ir = {
            text: Nt,
            number: function(e, t, r, o, i, s) {
                var a, l, c, u, p;
                Nt(e, t, r, o, i, s), o.$parsers.push(function(e) {
                    var t = o.$isEmpty(e);
                    return t || or.test(e) ? (o.$setValidity("number", !0), "" === e ? null : t ? e : parseFloat(e)) : (o.$setValidity("number", !1), n)
                }), a = o, l = "number", c = sr, u = null, b(p = o.$$validityState) && (a.$$hasNativeValidators = !0, a.$parsers.push(function(e) {
                    if (a.$error[l] || Dt(p, u) || !Dt(p, c)) return e;
                    a.$setValidity(l, !1)
                })), o.$formatters.push(function(e) {
                    return o.$isEmpty(e) ? "" : "" + e
                }), r.min && (e = function(e) {
                    var t = parseFloat(r.min);
                    return Pt(o, "min", o.$isEmpty(e) || e >= t, e)
                }, o.$parsers.push(e), o.$formatters.push(e)), r.max && (e = function(e) {
                    var t = parseFloat(r.max);
                    return Pt(o, "max", o.$isEmpty(e) || e <= t, e)
                }, o.$parsers.push(e), o.$formatters.push(e)), o.$formatters.push(function(e) {
                    return Pt(o, "number", o.$isEmpty(e) || $(e), e)
                })
            },
            url: function(e, t, n, r, o, i) {
                Nt(e, t, n, r, o, i), e = function(e) {
                    return Pt(r, "url", r.$isEmpty(e) || nr.test(e), e)
                }, r.$formatters.push(e), r.$parsers.push(e)
            },
            email: function(e, t, n, r, o, i) {
                Nt(e, t, n, r, o, i), e = function(e) {
                    return Pt(r, "email", r.$isEmpty(e) || rr.test(e), e)
                }, r.$formatters.push(e), r.$parsers.push(e)
            },
            radio: function(e, t, n, r) {
                m(n.name) && t.attr("name", l()), t.on("click", function() {
                    t[0].checked && e.$apply(function() {
                        r.$setViewValue(n.value)
                    })
                }), r.$render = function() {
                    t[0].checked = n.value == r.$viewValue
                }, n.$observe("value", r.$render)
            },
            checkbox: function(e, t, n, r) {
                var o = n.ngTrueValue,
                    i = n.ngFalseValue;
                y(o) || (o = !0), y(i) || (i = !1), t.on("click", function() {
                    e.$apply(function() {
                        r.$setViewValue(t[0].checked)
                    })
                }), r.$render = function() {
                    t[0].checked = r.$viewValue
                }, r.$isEmpty = function(e) {
                    return e !== o
                }, r.$formatters.push(function(e) {
                    return e === o
                }), r.$parsers.push(function(e) {
                    return e ? o : i
                })
            },
            hidden: d,
            button: d,
            submit: d,
            reset: d,
            file: d
        },
        sr = ["badInput"],
        ar = ["$browser", "$sniffer", function(e, t) {
            return {
                restrict: "E",
                require: "?ngModel",
                link: function(n, r, o, i) {
                    i && (ir[Rt(o.type)] || ir.text)(n, r, o, i, t, e)
                }
            }
        }],
        lr = "ng-valid",
        cr = "ng-invalid",
        ur = "ng-pristine",
        pr = "ng-dirty",
        fr = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(e, t, n, o, s, a) {
            function l(e, t) {
                t = t ? "-" + H(t, "-") : "", a.removeClass(o, (e ? cr : lr) + t), a.addClass(o, (e ? lr : cr) + t)
            }
            this.$modelValue = this.$viewValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = n.name;
            var c = s(n.ngModel),
                u = c.assign;
            if (!u) throw r("ngModel")("nonassign", n.ngModel, L(o));
            this.$render = d, this.$isEmpty = function(e) {
                return m(e) || "" === e || null === e || e != e
            };
            var p = o.inheritedData("$formController") || Jn,
                f = 0,
                h = this.$error = {};
            o.addClass(ur), l(!0), this.$setValidity = function(e, t) {
                h[e] !== !t && (t ? (h[e] && f--, f || (l(!0), this.$valid = !0, this.$invalid = !1)) : (l(!1), this.$invalid = !0, this.$valid = !1, f++), h[e] = !t, l(t, e), p.$setValidity(e, t, this))
            }, this.$setPristine = function() {
                this.$dirty = !1, this.$pristine = !0, a.removeClass(o, pr), a.addClass(o, ur)
            }, this.$setViewValue = function(n) {
                this.$viewValue = n, this.$pristine && (this.$dirty = !0, this.$pristine = !1, a.removeClass(o, ur), a.addClass(o, pr), p.$setDirty()), i(this.$parsers, function(e) {
                    n = e(n)
                }), this.$modelValue !== n && (this.$modelValue = n, u(e, n), i(this.$viewChangeListeners, function(e) {
                    try {
                        e()
                    } catch (e) {
                        t(e)
                    }
                }))
            };
            var g = this;
            e.$watch(function() {
                var t = c(e);
                if (g.$modelValue !== t) {
                    var n = g.$formatters,
                        r = n.length;
                    for (g.$modelValue = t; r--;) t = n[r](t);
                    g.$viewValue !== t && (g.$viewValue = t, g.$render())
                }
                return t
            })
        }],
        dr = function() {
            return {
                require: ["ngModel", "^?form"],
                controller: fr,
                link: function(e, t, n, r) {
                    var o = r[0],
                        i = r[1] || Jn;
                    i.$addControl(o), e.$on("$destroy", function() {
                        i.$removeControl(o)
                    })
                }
            }
        },
        hr = g({
            require: "ngModel",
            link: function(e, t, n, r) {
                r.$viewChangeListeners.push(function() {
                    e.$eval(n.ngChange)
                })
            }
        }),
        gr = function() {
            return {
                require: "?ngModel",
                link: function(e, t, n, r) {
                    if (r) {
                        n.required = !0;
                        var o = function(e) {
                            if (!n.required || !r.$isEmpty(e)) return r.$setValidity("required", !0), e;
                            r.$setValidity("required", !1)
                        };
                        r.$formatters.push(o), r.$parsers.unshift(o), n.$observe("required", function() {
                            o(r.$viewValue)
                        })
                    }
                }
            }
        },
        mr = function() {
            return {
                require: "ngModel",
                link: function(e, t, r, o) {
                    var s = (e = /\/(.*)\//.exec(r.ngList)) && RegExp(e[1]) || r.ngList || ",";
                    o.$parsers.push(function(e) {
                        if (!m(e)) {
                            var t = [];
                            return e && i(e.split(s), function(e) {
                                e && t.push(Kt(e))
                            }), t
                        }
                    }), o.$formatters.push(function(e) {
                        return Yt(e) ? e.join(", ") : n
                    }), o.$isEmpty = function(e) {
                        return !e || !e.length
                    }
                }
            }
        },
        vr = /^(true|false|\d+)$/,
        br = function() {
            return {
                priority: 100,
                compile: function(e, t) {
                    return vr.test(t.ngValue) ? function(e, t, n) {
                        n.$set("value", e.$eval(n.ngValue))
                    } : function(e, t, n) {
                        e.$watch(n.ngValue, function(e) {
                            n.$set("value", e)
                        })
                    }
                }
            }
        },
        yr = Et({
            compile: function(e) {
                return e.addClass("ng-binding"),
                    function(e, t, r) {
                        t.data("$binding", r.ngBind), e.$watch(r.ngBind, function(e) {
                            t.text(e == n ? "" : e)
                        })
                    }
            }
        }),
        $r = ["$interpolate", function(e) {
            return function(t, n, r) {
                t = e(n.attr(r.$attr.ngBindTemplate)), n.addClass("ng-binding").data("$binding", t), r.$observe("ngBindTemplate", function(e) {
                    n.text(e)
                })
            }
        }],
        xr = ["$sce", "$parse", function(e, t) {
            return {
                compile: function(n) {
                    return n.addClass("ng-binding"),
                        function(n, r, o) {
                            r.data("$binding", o.ngBindHtml);
                            var i = t(o.ngBindHtml);
                            n.$watch(function() {
                                return (i(n) || "").toString()
                            }, function(t) {
                                r.html(e.getTrustedHtml(i(n)) || "")
                            })
                        }
                }
            }
        }],
        wr = Ot("", !0),
        kr = Ot("Odd", 0),
        Tr = Ot("Even", 1),
        Sr = Et({
            compile: function(e, t) {
                t.$set("ngCloak", n), e.removeClass("ng-cloak")
            }
        }),
        Cr = [function() {
            return {
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        Er = {},
        Ar = {
            blur: !0,
            focus: !0
        };
    i("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
        var t = ke("ng-" + e);
        Er[t] = ["$parse", "$rootScope", function(n, r) {
            return {
                compile: function(o, i) {
                    var s = n(i[t], !0);
                    return function(t, n) {
                        n.on(e, function(n) {
                            var o = function() {
                                s(t, {
                                    $event: n
                                })
                            };
                            Ar[e] && r.$$phase ? t.$evalAsync(o) : t.$apply(o)
                        })
                    }
                }
            }
        }]
    });
    var Pr = ["$animate", function(e) {
            return {
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(n, r, o, i, s) {
                    var a, l, c;
                    n.$watch(o.ngIf, function(i) {
                        _(i) ? l || (l = n.$new(), s(l, function(n) {
                            n[n.length++] = t.createComment(" end ngIf: " + o.ngIf + " "), a = {
                                clone: n
                            }, e.enter(n, r.parent(), r)
                        })) : (c && (c.remove(), c = null), l && (l.$destroy(), l = null), a && (c = Y(a.clone), e.leave(c, function() {
                            c = null
                        }), a = null))
                    })
                }
            }
        }],
        Dr = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(e, t, n, r, o) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: Wt.noop,
                compile: function(i, s) {
                    var a = s.ngInclude || s.src,
                        l = s.onload || "",
                        c = s.autoscroll;
                    return function(i, s, u, p, f) {
                        var d, h, g, m = 0,
                            b = function() {
                                h && (h.remove(), h = null), d && (d.$destroy(), d = null), g && (r.leave(g, function() {
                                    h = null
                                }), h = g, g = null)
                            };
                        i.$watch(o.parseAsResourceUrl(a), function(o) {
                            var a = function() {
                                    !v(c) || c && !i.$eval(c) || n()
                                },
                                u = ++m;
                            o ? (e.get(o, {
                                cache: t
                            }).success(function(e) {
                                if (u === m) {
                                    var t = i.$new();
                                    p.template = e, e = f(t, function(e) {
                                        b(), r.enter(e, null, s, a)
                                    }), g = e, (d = t).$emit("$includeContentLoaded"), i.$eval(l)
                                }
                            }).error(function() {
                                u === m && b()
                            }), i.$emit("$includeContentRequested")) : (b(), p.template = null)
                        })
                    }
                }
            }
        }],
        Nr = ["$compile", function(e) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(t, n, r, o) {
                    n.html(o.template), e(n.contents())(t)
                }
            }
        }],
        Or = Et({
            priority: 450,
            compile: function() {
                return {
                    pre: function(e, t, n) {
                        e.$eval(n.ngInit)
                    }
                }
            }
        }),
        Ir = Et({
            terminal: !0,
            priority: 1e3
        }),
        Mr = ["$locale", "$interpolate", function(e, t) {
            var n = /{}/g;
            return {
                restrict: "EA",
                link: function(r, o, s) {
                    var a = s.count,
                        l = s.$attr.when && o.attr(s.$attr.when),
                        c = s.offset || 0,
                        u = r.$eval(l) || {},
                        p = {},
                        f = t.startSymbol(),
                        d = t.endSymbol(),
                        h = /^when(Minus)?(.+)$/;
                    i(s, function(e, t) {
                        h.test(t) && (u[Rt(t.replace("when", "").replace("Minus", "-"))] = o.attr(s.$attr[t]))
                    }), i(u, function(e, r) {
                        p[r] = t(e.replace(n, f + a + "-" + c + d))
                    }), r.$watch(function() {
                        var t = parseFloat(r.$eval(a));
                        return isNaN(t) ? "" : (t in u || (t = e.pluralCat(t - c)), p[t](r, o, !0))
                    }, function(e) {
                        o.text(e)
                    })
                }
            }
        }],
        _r = ["$parse", "$animate", function(e, n) {
            var s = r("ngRepeat");
            return {
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                link: function(r, a, l, c, u) {
                    var p, f, d, h, g, m, v = l.ngRepeat,
                        b = v.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                        y = {
                            $id: fe
                        };
                    if (!b) throw s("iexp", v);
                    if (l = b[1], c = b[2], (b = b[3]) ? (p = e(b), f = function(e, t, n) {
                            return m && (y[m] = e), y[g] = t, y.$index = n, p(r, y)
                        }) : (d = function(e, t) {
                            return fe(t)
                        }, h = function(e) {
                            return e
                        }), !(b = l.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/))) throw s("iidexp", l);
                    g = b[3] || b[1], m = b[2];
                    var $ = {};
                    r.$watchCollection(c, function(e) {
                        var l, c, p, b, y, x, w, k, T, S, C = a[0],
                            E = {},
                            A = [];
                        if (o(e)) T = e, k = f || d;
                        else {
                            k = f || h, T = [];
                            for (x in e) e.hasOwnProperty(x) && "$" != x.charAt(0) && T.push(x);
                            T.sort()
                        }
                        for (b = T.length, c = A.length = T.length, l = 0; l < c; l++)
                            if (x = e === T ? l : T[l], w = e[x], p = k(x, w, l), W(p, "`track by` id"), $.hasOwnProperty(p)) S = $[p], delete $[p], E[p] = S, A[l] = S;
                            else {
                                if (E.hasOwnProperty(p)) throw i(A, function(e) {
                                    e && e.scope && ($[e.id] = e)
                                }), s("dupes", v, p, I(w));
                                A[l] = {
                                    id: p
                                }, E[p] = !1
                            }
                        for (x in $) $.hasOwnProperty(x) && (S = $[x], l = Y(S.clone), n.leave(l), i(l, function(e) {
                            e.$$NG_REMOVED = !0
                        }), S.scope.$destroy());
                        for (l = 0, c = T.length; l < c; l++) {
                            if (w = e[x = e === T ? l : T[l]], S = A[l], A[l - 1] && (C = A[l - 1].clone[A[l - 1].clone.length - 1]), S.scope) {
                                y = S.scope, p = C;
                                do {
                                    p = p.nextSibling
                                } while (p && p.$$NG_REMOVED);
                                S.clone[0] != p && n.move(Y(S.clone), null, Mt(C)), C = S.clone[S.clone.length - 1]
                            } else y = r.$new();
                            y[g] = w, m && (y[m] = x), y.$index = l, y.$first = 0 === l, y.$last = l === b - 1, y.$middle = !(y.$first || y.$last), y.$odd = !(y.$even = 0 == (1 & l)), S.scope || u(y, function(e) {
                                e[e.length++] = t.createComment(" end ngRepeat: " + v + " "), n.enter(e, null, Mt(C)), C = e, S.scope = y, S.clone = e, E[S.id] = S
                            })
                        }
                        $ = E
                    })
                }
            }
        }],
        Lr = ["$animate", function(e) {
            return function(t, n, r) {
                t.$watch(r.ngShow, function(t) {
                    e[_(t) ? "removeClass" : "addClass"](n, "ng-hide")
                })
            }
        }],
        Fr = ["$animate", function(e) {
            return function(t, n, r) {
                t.$watch(r.ngHide, function(t) {
                    e[_(t) ? "addClass" : "removeClass"](n, "ng-hide")
                })
            }
        }],
        Br = Et(function(e, t, n) {
            e.$watch(n.ngStyle, function(e, n) {
                n && e !== n && i(n, function(e, n) {
                    t.css(n, "")
                }), e && t.css(e)
            }, !0)
        }),
        Rr = ["$animate", function(e) {
            return {
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(t, n, r, o) {
                    var s = [],
                        a = [],
                        l = [],
                        c = [];
                    t.$watch(r.ngSwitch || r.on, function(n) {
                        var u, p;
                        for (u = 0, p = l.length; u < p; ++u) l[u].remove();
                        for (u = l.length = 0, p = c.length; u < p; ++u) {
                            var f = a[u];
                            c[u].$destroy(), l[u] = f, e.leave(f, function() {
                                l.splice(u, 1)
                            })
                        }
                        a.length = 0, c.length = 0, (s = o.cases["!" + n] || o.cases["?"]) && (t.$eval(r.change), i(s, function(n) {
                            var r = t.$new();
                            c.push(r), n.transclude(r, function(t) {
                                var r = n.element;
                                a.push(t), e.enter(t, r.parent(), r)
                            })
                        }))
                    })
                }
            }
        }],
        jr = Et({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function(e, t, n, r, o) {
                r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                    transclude: o,
                    element: t
                })
            }
        }),
        qr = Et({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function(e, t, n, r, o) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                    transclude: o,
                    element: t
                })
            }
        }),
        Ur = Et({
            link: function(e, t, n, o, i) {
                if (!i) throw r("ngTransclude")("orphan", L(t));
                i(function(e) {
                    t.empty(), t.append(e)
                })
            }
        }),
        Hr = ["$templateCache", function(e) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(t, n) {
                    "text/ng-template" == n.type && e.put(n.id, t[0].text)
                }
            }
        }],
        Vr = r("ngOptions"),
        zr = g({
            terminal: !0
        }),
        Wr = ["$compile", "$parse", function(e, r) {
            var o = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                a = {
                    $setViewValue: d
                };
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function(e, t, n) {
                    var r, o = this,
                        i = {},
                        s = a;
                    o.databound = n.ngModel, o.init = function(e, t, n) {
                        s = e, r = n
                    }, o.addOption = function(t) {
                        W(t, '"option value"'), i[t] = !0, s.$viewValue == t && (e.val(t), r.parent() && r.remove())
                    }, o.removeOption = function(e) {
                        this.hasOption(e) && (delete i[e], s.$viewValue == e && this.renderUnknownOption(e))
                    }, o.renderUnknownOption = function(t) {
                        t = "? " + fe(t) + " ?", r.val(t), e.prepend(r), e.val(t), r.prop("selected", !0)
                    }, o.hasOption = function(e) {
                        return i.hasOwnProperty(e)
                    }, t.$on("$destroy", function() {
                        o.renderUnknownOption = d
                    })
                }],
                link: function(a, l, c, u) {
                    if (u[1]) {
                        var p = u[0];
                        u = u[1];
                        var f, d = c.multiple,
                            h = c.ngOptions,
                            g = !1,
                            b = Mt(t.createElement("option")),
                            y = Mt(t.createElement("optgroup")),
                            $ = b.clone();
                        c = 0;
                        for (var x = l.children(), w = x.length; c < w; c++)
                            if ("" === x[c].value) {
                                f = g = x.eq(c);
                                break
                            }
                        p.init(u, g, $), d && (u.$isEmpty = function(e) {
                            return !e || 0 === e.length
                        }), h ? function(t, i, a) {
                            function l() {
                                var e, n, r, o, l, c = {
                                        "": []
                                    },
                                    h = [""];
                                r = a.$modelValue, o = w(t) || [];
                                var S, C, E, A, P, D = m ? s(o) : o;
                                if (C = {}, E = !1, d)
                                    if (n = a.$modelValue, k && Yt(n))
                                        for (E = new de([]), e = {}, l = 0; l < n.length; l++) e[f] = n[l], E.put(k(t, e), n[l]);
                                    else E = new de(n);
                                for (l = E, E = 0; E < (S = D.length); E++) {
                                    if (n = E, m) {
                                        if ("$" === (n = D[E]).charAt(0)) continue;
                                        C[m] = n
                                    }
                                    C[f] = o[n], (n = c[e = $(t, C) || ""]) || (n = c[e] = [], h.push(e)), d ? e = v(l.remove(k ? k(t, C) : x(t, C))) : (k ? ((e = {})[f] = r, e = k(t, e) === k(t, C)) : e = r === x(t, C), l = l || e), A = v(A = u(t, C)) ? A : "", n.push({
                                        id: k ? k(t, C) : m ? D[E] : E,
                                        label: A,
                                        selected: e
                                    })
                                }
                                for (d || (g || null === r ? c[""].unshift({
                                        id: "",
                                        label: "",
                                        selected: !l
                                    }) : l || c[""].unshift({
                                        id: "?",
                                        label: "",
                                        selected: !0
                                    })), C = 0, D = h.length; C < D; C++) {
                                    for (n = c[e = h[C]], T.length <= C ? (o = [r = {
                                            element: y.clone().attr("label", e),
                                            label: n.label
                                        }], T.push(o), i.append(r.element)) : (r = (o = T[C])[0]).label != e && r.element.attr("label", r.label = e), A = null, E = 0, S = n.length; E < S; E++) e = n[E], (l = o[E + 1]) ? (A = l.element, l.label !== e.label && (A.text(l.label = e.label), A.prop("label", l.label)), l.id !== e.id && A.val(l.id = e.id), A[0].selected !== e.selected && (A.prop("selected", l.selected = e.selected), It && A.prop("selected", l.selected))) : ("" === e.id && g ? P = g : (P = b.clone()).val(e.id).prop("selected", e.selected).attr("selected", e.selected).prop("label", e.label).text(e.label), o.push({
                                        element: P,
                                        label: e.label,
                                        id: e.id,
                                        selected: e.selected
                                    }), p.addOption(e.label, P), A ? A.after(P) : r.element.append(P), A = P);
                                    for (E++; o.length > E;) e = o.pop(), p.removeOption(e.label), e.element.remove()
                                }
                                for (; T.length > C;) T.pop()[0].element.remove()
                            }
                            var c;
                            if (!(c = h.match(o))) throw Vr("iexp", h, L(i));
                            var u = r(c[2] || c[1]),
                                f = c[4] || c[6],
                                m = c[5],
                                $ = r(c[3] || ""),
                                x = r(c[2] ? c[1] : f),
                                w = r(c[7]),
                                k = c[8] ? r(c[8]) : null,
                                T = [
                                    [{
                                        element: i,
                                        label: ""
                                    }]
                                ];
                            g && (e(g)(t), g.removeClass("ng-scope"), g.remove()), i.empty(), i.on("change", function() {
                                t.$apply(function() {
                                    var e, r, o, s, c, u, p, h, g = w(t) || [],
                                        v = {};
                                    if (d) {
                                        for (o = [], c = 0, p = T.length; c < p; c++)
                                            for (e = T[c], s = 1, u = e.length; s < u; s++)
                                                if ((r = e[s].element)[0].selected) {
                                                    if (r = r.val(), m && (v[m] = r), k)
                                                        for (h = 0; h < g.length && (v[f] = g[h], k(t, v) != r); h++);
                                                    else v[f] = g[r];
                                                    o.push(x(t, v))
                                                }
                                    } else if (r = i.val(), "?" == r) o = n;
                                    else if ("" === r) o = null;
                                    else if (k) {
                                        for (h = 0; h < g.length; h++)
                                            if (v[f] = g[h], k(t, v) == r) {
                                                o = x(t, v);
                                                break
                                            }
                                    } else v[f] = g[r], m && (v[m] = r), o = x(t, v);
                                    a.$setViewValue(o), l()
                                })
                            }), a.$render = l, t.$watchCollection(w, l), t.$watchCollection(function() {
                                var e = {},
                                    n = w(t);
                                if (n) {
                                    for (var r = Array(n.length), o = 0, i = n.length; o < i; o++) e[f] = n[o], r[o] = u(t, e);
                                    return r
                                }
                            }, l), d && t.$watchCollection(function() {
                                return a.$modelValue
                            }, l)
                        }(a, l, u) : d ? (E = a, A = l, (N = u).$render = function() {
                            var e = new de(N.$viewValue);
                            i(A.find("option"), function(t) {
                                t.selected = v(e.get(t.value))
                            })
                        }, E.$watch(function() {
                            D(O, N.$viewValue) || (O = P(N.$viewValue), N.$render())
                        }), A.on("change", function() {
                            E.$apply(function() {
                                var e = [];
                                i(A.find("option"), function(t) {
                                    t.selected && e.push(t.value)
                                }), N.$setViewValue(e)
                            })
                        })) : (k = a, T = l, C = p, (S = u).$render = function() {
                            var e = S.$viewValue;
                            C.hasOption(e) ? ($.parent() && $.remove(), T.val(e), "" === e && f.prop("selected", !0)) : m(e) && f ? T.val("") : C.renderUnknownOption(e)
                        }, T.on("change", function() {
                            k.$apply(function() {
                                $.parent() && $.remove(), S.$setViewValue(T.val())
                            })
                        }))
                    }
                    var k, T, S, C, E, A, N, O
                }
            }
        }],
        Gr = ["$interpolate", function(e) {
            var t = {
                addOption: d,
                removeOption: d
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function(n, r) {
                    if (m(r.value)) {
                        var o = e(n.text(), !0);
                        o || r.$set("value", n.text())
                    }
                    return function(e, n, r) {
                        var i = n.parent(),
                            s = i.data("$selectController") || i.parent().data("$selectController");
                        s && s.databound ? n.prop("selected", !1) : s = t, o ? e.$watch(o, function(e, t) {
                            r.$set("value", e), e !== t && s.removeOption(t), s.addOption(e)
                        }) : s.addOption(r.value), n.on("$destroy", function() {
                            s.removeOption(r.value)
                        })
                    }
                }
            }
        }],
        Yr = g({
            restrict: "E",
            terminal: !0
        });
    e.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((_t = e.jQuery) && _t.fn.on ? (Mt = _t, u(_t.fn, {
        scope: fn.scope,
        isolateScope: fn.isolateScope,
        controller: fn.controller,
        injector: fn.injector,
        inheritedData: fn.inheritedData
    }), Q("remove", !0, !0, !1), Q("empty", !1, !1, !1), Q("html", !1, !1, !0)) : Mt = X, Wt.element = Mt, function(t) {
        var n, o, s, a;
        u(t, {
            bootstrap: U,
            copy: A,
            extend: u,
            equals: D,
            element: Mt,
            forEach: i,
            injector: ge,
            noop: d,
            bind: N,
            toJson: I,
            fromJson: M,
            identity: h,
            isUndefined: m,
            isDefined: v,
            isString: y,
            isFunction: w,
            isObject: b,
            isNumber: $,
            isElement: S,
            isArray: Yt,
            version: Jt,
            isDate: x,
            lowercase: Rt,
            uppercase: qt,
            callbacks: {
                counter: 0
            },
            $$minErr: r,
            $$csp: Qt
        }), n = e, s = r("$injector"), a = r("ng"), (n = n.angular || (n.angular = {})).$$minErr = n.$$minErr || r, Lt = n.module || (n.module = (o = {}, function(e, t, n) {
            if ("hasOwnProperty" === e) throw a("badname", "module");
            return t && o.hasOwnProperty(e) && (o[e] = null), o[e] || (o[e] = function() {
                function r(e, t, n) {
                    return function() {
                        return o[n || "push"]([e, t, arguments]), l
                    }
                }
                if (!t) throw s("nomod", e);
                var o = [],
                    i = [],
                    a = r("$injector", "invoke"),
                    l = {
                        _invokeQueue: o,
                        _runBlocks: i,
                        requires: t,
                        name: e,
                        provider: r("$provide", "provider"),
                        factory: r("$provide", "factory"),
                        service: r("$provide", "service"),
                        value: r("$provide", "value"),
                        constant: r("$provide", "constant", "unshift"),
                        animation: r("$animateProvider", "register"),
                        filter: r("$filterProvider", "register"),
                        controller: r("$controllerProvider", "register"),
                        directive: r("$compileProvider", "directive"),
                        config: a,
                        run: function(e) {
                            return i.push(e), this
                        }
                    };
                return n && a(n), l
            }())
        }));
        try {
            Lt("ngLocale")
        } catch (e) {
            Lt("ngLocale", []).provider("$locale", Le)
        }
        Lt("ng", ["ngLocale"], ["$provide", function(e) {
            e.provider({
                $$sanitizeUri: st
            }), e.provider("$compile", we).directive({
                a: Qn,
                input: ar,
                textarea: ar,
                form: er,
                script: Hr,
                select: Wr,
                style: Yr,
                option: Gr,
                ngBind: yr,
                ngBindHtml: xr,
                ngBindTemplate: $r,
                ngClass: wr,
                ngClassEven: Tr,
                ngClassOdd: kr,
                ngCloak: Sr,
                ngController: Cr,
                ngForm: tr,
                ngHide: Fr,
                ngIf: Pr,
                ngInclude: Dr,
                ngInit: Or,
                ngNonBindable: Ir,
                ngPluralize: Mr,
                ngRepeat: _r,
                ngShow: Lr,
                ngStyle: Br,
                ngSwitch: Rr,
                ngSwitchWhen: jr,
                ngSwitchDefault: qr,
                ngOptions: zr,
                ngTransclude: Ur,
                ngModel: dr,
                ngList: mr,
                ngChange: hr,
                required: gr,
                ngRequired: gr,
                ngValue: br
            }).directive({
                ngInclude: Nr
            }).directive(Xn).directive(Er), e.provider({
                $anchorScroll: me,
                $animate: xn,
                $browser: ye,
                $cacheFactory: $e,
                $controller: Se,
                $document: Ce,
                $exceptionHandler: Ee,
                $filter: gt,
                $interpolate: Me,
                $interval: _e,
                $http: Ne,
                $httpBackend: Ie,
                $location: Ye,
                $log: Ke,
                $parse: nt,
                $rootScope: it,
                $q: rt,
                $sce: ct,
                $sceDelegate: lt,
                $sniffer: ut,
                $templateCache: xe,
                $timeout: pt,
                $window: ht,
                $$rAF: ot,
                $$asyncCallback: ve
            })
        }])
    }(Wt), Mt(t).ready(function() {
        ! function(e, n) {
            function r(e) {
                e && a.push(e)
            }
            var o, s, a = [e],
                l = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
                c = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
            i(l, function(n) {
                l[n] = !0, r(t.getElementById(n)), n = n.replace(":", "\\:"), e.querySelectorAll && (i(e.querySelectorAll("." + n), r), i(e.querySelectorAll("." + n + "\\:"), r), i(e.querySelectorAll("[" + n + "]"), r))
            }), i(a, function(e) {
                if (!o) {
                    var t = c.exec(" " + e.className + " ");
                    t ? (o = e, s = (t[2] || "").replace(/\s+/g, ",")) : i(e.attributes, function(t) {
                        !o && l[t.name] && (o = e, s = t.value)
                    })
                }
            }), o && n(o, s ? [s] : [])
        }(t, U)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'), angular.module("sly", ["slyEvaluate", "slyRepeat"]), defineScalyrAngularModule("slyEvaluate", ["gatedScope"]).directive("slyEvaluateOnlyWhen", ["$parse", function(e) {
        return {
            scope: !0,
            restrict: "A",
            compile: function(t, n) {
                return {
                    pre: function(t, n, r) {
                        var o = null,
                            i = !1,
                            s = e(r.slyEvaluateOnlyWhen),
                            a = null;
                        if (hasProperty(r, "slyAlwaysEvaluate") && (a = r.slyAlwaysEvaluate, isStringEmpty(a))) throw new Exception("Empty string is illegal for value of slyAlwaysEvaluate");
                        t.$addWatcherGate(function() {
                            var e = s(t);
                            if (!i) return i = !0, o = e, !0;
                            var n = o !== e;
                            return o = e, n
                        }, function(e) {
                            return isNull(a) || !(isStringNonempty(e) && e.indexOf(a) >= 0)
                        }, !0)
                    }
                }
            }
        }
    }]).directive("slyAlwaysEvaluate", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {}
        }
    }).directive("slyShow", ["$animate", function(e) {
        return {
            restrict: "A",
            link: function(t, n, r) {
                t.$watch(r.slyShow, function(t) {
                    e[function(e) {
                        if (e && 0 !== e.length) {
                            var t = "" + e;
                            e = !("f" == (t = isString(t) ? t.toLowerCase() : t) || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)
                        } else e = !1;
                        return e
                    }(t) ? "removeClass" : "addClass"](n, "ng-hide")
                }, !1, "slyShow")
            }
        }
    }]).directive("slyPreventEvaluationWhenHidden", function() {
        return {
            restrict: "A",
            scope: !0,
            compile: function(e, t) {
                return {
                    pre: function(e, t, n) {
                        e.$addWatcherGate(function() {
                            return !t.hasClass("ng-hide")
                        }, function(e, t, n, r) {
                            return !isDefined(r) || "slyShow" != r
                        })
                    }
                }
            }
        }
    }), defineScalyrAngularModule("slyRepeat", ["gatedScope"]).directive("slyRepeat", ["$animate", "$parse", function(e, t) {
        function n(e) {
            e.scope.$addWatcherGate(function() {
                return e.isActiveForRepeat
            })
        }
        return {
            restrict: "A",
            scope: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            compile: function(t, r, o) {
                return function(t, r, i) {
                    var s = i.slyRepeat,
                        a = s.match(/^\s*(.+)\s+in\s+(.*?)$/);
                    if (!a) throw Error("Expected slyRepeat in form of '_item_ in _collection_' but got '" + s + "'.");
                    var l = a[1],
                        c = a[2];
                    if (!(a = l.match(/^(?:([\$\w]+))$/))) throw Error("'item' in 'item in collection' should be identifier but got '" + lhs + "'.");
                    var u = [],
                        p = [],
                        f = t.$watchCollection(c, function(i) {
                            if (i) {
                                if (!isArray(i)) throw Error("'collection' did not evaluate to an array.  expression was " + c);
                                var s = u.length;
                                if (u.length < i.length && p.length > 0) {
                                    var a = u.length + p.length;
                                    a > i.length && (a = i.length), u = u.concat(p.splice(0, a - u.length))
                                }
                                var f = null,
                                    d = [],
                                    h = [];
                                if (i.length > u.length) {
                                    for (var g = u.length; g < i.length; ++g) {
                                        var m = {
                                            scope: t.$new(),
                                            isActiveForRepeat: !0
                                        };
                                        n(m), m.scope.$index = g, m.scope.$first = 0 == g, h.push(m)
                                    }
                                    f = u.concat(h), d = p
                                } else if (i.length < u.length) {
                                    for (g = i.length; g < u.length; ++g) u[g].isActiveForRepeat = !1;
                                    d = u.splice(i.length, u.length - i.length).concat(p), f = u
                                } else f = u, d = p;
                                if (f.length > 0) {
                                    var v = f.length - 1,
                                        b = f.length - 1;
                                    s < f.length && (v = s), v > 0 && (v -= 1);
                                    for (g = v; g <= b; ++g) f[g].scope.$last = g == f.length - 1, f[g].scope.$middle = 0 != g && g != f.length - 1, f[g].isActiveForRepeat || (f[g].isActiveForRepeat = !0, f[g].element.css("display", ""))
                                }
                                for (g = 0; g < d.length && !d[g].isActiveForRepeat; ++g) d[g].element.css("display", "none");
                                for (g = 0; g < f.length; ++g) f[g].scope[l] = i[g];
                                var y = r;
                                u.length > 0 && (y = u[u.length - 1].element);
                                for (g = 0; g < h.length; ++g) o(h[g].scope, function(t) {
                                    e.enter(t, null, y), y = t, h[g].element = t
                                });
                                u = f, p = d
                            }
                        });
                    t.$on("$destroy", function() {
                        f()
                    })
                }
            }
        }
    }]), defineScalyrAngularModule("gatedScope", []).config(["$provide", function(e) {
        e.decorator("$rootScope", ["$delegate", "$exceptionHandler", function(e, t) {
            var n = {};
            for (var r in e) isFunction(e[r]) && (n[r] = e[r]);
            var o, i = e.constructor,
                s = {};
            return s.$new = function(e) {
                var t = n.$new.call(this, e);
                return t.$$gatingFunction = this.$$gatingFunction, t.$$parentGatingFunction = this.$$gatingFunction, t.$$shouldGateFunction = this.$$shouldGateFunction, t.$$gatedWatchers = [], t.$$cleanUpQueue = this.$$cleanUpQueue, t
            }, s.$digestGated = function(e) {
                var n, r, i, s, a, l, c = this,
                    u = !1;
                do {
                    if (i = c.$$gatedWatchers)
                        for (s = i.length; s--;) try {
                            if ((n = i[s]).gatingFunction !== e) continue;
                            n && !isNull(n.cleanUp) && (n.cleanUp(), n.cleanUp = null), n && (r = n.get(c)) !== (l = n.last) && !(n.eq ? areEqual(r, l) : "number" == typeof r && "number" == typeof l && isNaN(r) && isNaN(l)) && (u = !0, n.last = n.eq ? copy(r) : r, n.fn(r, l === o ? r : l, c))
                        } catch (e) {
                            t(e)
                        }
                    if (!(a = c.$$gatingFunction === e && c.$$childHead || c !== this && c.$$nextSibling))
                        for (; c !== this && !(a = c.$$nextSibling);) c = c.$parent
                } while (c = a);
                return e.hasDigested = !0, u
            }, s.$watch = function(e, t, r, i) {
                if (isNull(this.$$gatingFunction) || !isNull(this.$$shouldGateFunction) && !this.$$shouldGateFunction(e, t, r, i)) return n.$watch.call(this, e, t, r);
                var s = this.$$watchers;
                this.$$watchers = this.$$gatedWatchers;
                var a = n.$watch.call(this, e, t, r);
                this.$$watchers = s, this.$$gatedWatchers[0].gatingFunction = this.$$gatingFunction, this.$$gatedWatchers[0].cleanUp = null, o = this.$$gatedWatchers[0].last;
                var l = this.$$gatedWatchers[0];
                if (this.$$gatingFunction.shouldEvalNewWatchers && this.$$gatingFunction.hasDigested) {
                    var c = this;
                    l.cleanUp = n.$watch.call(c, function() {
                        var e;
                        isNull(l.cleanUp) || (c.$$cleanUpQueue.unshift(l.cleanUp), l.cleanUp = null);
                        var t = o;
                        return l && (e = l.get(c)) !== (t = l.last) && !(l.eq ? areEqual(e, t) : "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)) && (l.last = l.eq ? copy(e) : e, l.fn(e, t === o ? e : t, c)), l.last
                    })
                }
                return a
            }, s.$digest = function() {
                var e = !1;
                if (!isNull(this.$$parentGatingFunction) && this.$$parentGatingFunction()) {
                    var r = 5;
                    do {
                        if (r--, (e = this.$digestGated(this.$$parentGatingFunction)) && !r--) throw Error(TTL + " $digest() iterations reached for gated watcher. Aborting!\nWatchers fired in the last 5 iterations.")
                    } while (e)
                }
                e = n.$digest.call(this) || e;
                for (var o = this.$$cleanUpQueue; o.length;) try {
                    o.shift()()
                } catch (e) {
                    t(e)
                }
                return e
            }, s.$addWatcherGate = function(e, t, r) {
                var o, i = 0,
                    s = this,
                    a = !isNull(this.$$gatingFunction);
                o = null, s.$watch(function() {
                    return e() ? s.$digestGated(e) && ++i : a && isNull(o) && (o = n.$watch.call(s, function() {
                        return e() && (o(), o = null, s.$digestGated(e) && ++i), i
                    })), i
                }), isUndefined(t) && (t = null), isUndefined(r) && (r = !1), this.$$gatingFunction = e, this.$$gatingFunction.shouldEvalNewWatchers = r, this.$$shouldGateFunction = t
            }, angular.extend(i.prototype, s), angular.extend(e, s), e.$$gatingFunction = null, e.$$parentGatingFunction = null, e.$$shouldGateFunction = null, e.$$gatedWatchers = [], e.$$cleanUpQueue = [], e
        }])
    }]), defineScalyrAngularModule("slyEvaluate", ["gatedScope"]).directive("slyEvaluateOnlyWhen", ["$parse", function(e) {
        return {
            scope: !0,
            restrict: "A",
            compile: function(t, n) {
                return {
                    pre: function(t, n, r) {
                        var o = null,
                            i = !1,
                            s = e(r.slyEvaluateOnlyWhen),
                            a = null;
                        if (hasProperty(r, "slyAlwaysEvaluate") && (a = r.slyAlwaysEvaluate, isStringEmpty(a))) throw new Exception("Empty string is illegal for value of slyAlwaysEvaluate");
                        t.$addWatcherGate(function() {
                            var e = s(t);
                            if (!i) return i = !0, o = e, !0;
                            var n = o !== e;
                            return o = e, n
                        }, function(e) {
                            return isNull(a) || !(isStringNonempty(e) && e.indexOf(a) >= 0)
                        }, !0)
                    }
                }
            }
        }
    }]).directive("slyAlwaysEvaluate", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {}
        }
    }).directive("slyShow", ["$animate", function(e) {
        return {
            restrict: "A",
            link: function(t, n, r) {
                t.$watch(r.slyShow, function(t) {
                    e[function(e) {
                        if (e && 0 !== e.length) {
                            var t = "" + e;
                            e = !("f" == (t = isString(t) ? t.toLowerCase() : t) || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)
                        } else e = !1;
                        return e
                    }(t) ? "removeClass" : "addClass"](n, "ng-hide")
                }, !1, "slyShow")
            }
        }
    }]).directive("slyPreventEvaluationWhenHidden", function() {
        return {
            restrict: "A",
            scope: !0,
            compile: function(e, t) {
                return {
                    pre: function(e, t, n) {
                        e.$addWatcherGate(function() {
                            return !t.hasClass("ng-hide")
                        }, function(e, t, n, r) {
                            return !isDefined(r) || "slyShow" != r
                        })
                    }
                }
            }
        }
    }), defineScalyrAngularModule("slyRepeat", ["gatedScope"]).directive("slyRepeat", ["$animate", "$parse", function(e, t) {
        function n(e) {
            e.scope.$addWatcherGate(function() {
                return e.isActiveForRepeat
            })
        }
        return {
            restrict: "A",
            scope: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            compile: function(t, r, o) {
                return function(t, r, i) {
                    var s = i.slyRepeat,
                        a = s.match(/^\s*(.+)\s+in\s+(.*?)$/);
                    if (!a) throw Error("Expected slyRepeat in form of '_item_ in _collection_' but got '" + s + "'.");
                    var l = a[1],
                        c = a[2];
                    if (!(a = l.match(/^(?:([\$\w]+))$/))) throw Error("'item' in 'item in collection' should be identifier but got '" + lhs + "'.");
                    var u = [],
                        p = [],
                        f = t.$watchCollection(c, function(i) {
                            if (i) {
                                if (!isArray(i)) throw Error("'collection' did not evaluate to an array.  expression was " + c);
                                var s = u.length;
                                if (u.length < i.length && p.length > 0) {
                                    var a = u.length + p.length;
                                    a > i.length && (a = i.length), u = u.concat(p.splice(0, a - u.length))
                                }
                                var f = null,
                                    d = [],
                                    h = [];
                                if (i.length > u.length) {
                                    for (var g = u.length; g < i.length; ++g) {
                                        var m = {
                                            scope: t.$new(),
                                            isActiveForRepeat: !0
                                        };
                                        n(m), m.scope.$index = g, m.scope.$first = 0 == g, h.push(m)
                                    }
                                    f = u.concat(h), d = p
                                } else if (i.length < u.length) {
                                    for (g = i.length; g < u.length; ++g) u[g].isActiveForRepeat = !1;
                                    d = u.splice(i.length, u.length - i.length).concat(p), f = u
                                } else f = u, d = p;
                                if (f.length > 0) {
                                    var v = f.length - 1,
                                        b = f.length - 1;
                                    s < f.length && (v = s), v > 0 && (v -= 1);
                                    for (g = v; g <= b; ++g) f[g].scope.$last = g == f.length - 1, f[g].scope.$middle = 0 != g && g != f.length - 1, f[g].isActiveForRepeat || (f[g].isActiveForRepeat = !0, f[g].element.css("display", ""))
                                }
                                for (g = 0; g < d.length && !d[g].isActiveForRepeat; ++g) d[g].element.css("display", "none");
                                for (g = 0; g < f.length; ++g) f[g].scope[l] = i[g];
                                var y = r;
                                u.length > 0 && (y = u[u.length - 1].element);
                                for (g = 0; g < h.length; ++g) o(h[g].scope, function(t) {
                                    e.enter(t, null, y), y = t, h[g].element = t
                                });
                                u = f, p = d
                            }
                        });
                    t.$on("$destroy", function() {
                        f()
                    })
                }
            }
        }
    }]),
    function(e, t) {
        "function" == typeof define && define.amd ? define([], function() {
            return t()
        }) : "object" == typeof exports ? module.exports = t() : t()
    }(0, function() {
        function e(e) {
            "use strict";
            var t = e.storageKey(),
                n = e.storage(),
                r = function() {
                    var r = e.preferredLanguage();
                    angular.isString(r) ? e.use(r) : n.put(t, e.use())
                };
            r.displayName = "fallbackFromIncorrectStorageValue", n ? n.get(t) ? e.use(n.get(t)).catch(r) : r() : angular.isString(e.preferredLanguage()) && e.use(e.preferredLanguage())
        }

        function t(e, t, n, r) {
            "use strict";
            var o, i, s, a, l, c, u, p, f, d, h, g, m, v, b, y = {},
                $ = [],
                x = e,
                w = [],
                k = "translate-cloak",
                T = !1,
                S = !1,
                C = ".",
                E = 0,
                A = !0,
                P = "default",
                D = {
                    default: function(e) {
                        return (e || "").split("-").join("_")
                    },
                    java: function(e) {
                        var t = (e || "").split("-").join("_"),
                            n = t.split("_");
                        return n.length > 1 ? n[0].toLowerCase() + "_" + n[1].toUpperCase() : t
                    },
                    bcp47: function(e) {
                        var t = (e || "").split("_").join("-"),
                            n = t.split("-");
                        return n.length > 1 ? n[0].toLowerCase() + "-" + n[1].toUpperCase() : t
                    }
                },
                N = function() {
                    if (angular.isFunction(r.getLocale)) return r.getLocale();
                    var e, n, o = t.$get().navigator,
                        i = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
                    if (angular.isArray(o.languages))
                        for (e = 0; e < o.languages.length; e++)
                            if (n = o.languages[e], n && n.length) return n;
                    for (e = 0; e < i.length; e++)
                        if (n = o[i[e]], n && n.length) return n;
                    return null
                };
            N.displayName = "angular-translate/service: getFirstBrowserLanguage";
            var O = function() {
                var e = N() || "";
                return D[P] && (e = D[P](e)), e
            };
            O.displayName = "angular-translate/service: getLocale";
            var I = function(e, t) {
                    for (var n = 0, r = e.length; r > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                M = function() {
                    return this.toString().replace(/^\s+|\s+$/g, "")
                },
                _ = function(e) {
                    for (var t = [], n = angular.lowercase(e), r = 0, o = $.length; o > r; r++) t.push(angular.lowercase($[r]));
                    if (I(t, n) > -1) return e;
                    var s;
                    if (i)
                        for (var a in i) {
                            var l = !1,
                                c = Object.prototype.hasOwnProperty.call(i, a) && angular.lowercase(a) === angular.lowercase(e);
                            if ("*" === a.slice(-1) && (l = a.slice(0, -1) === e.slice(0, a.length - 1)), (c || l) && (s = i[a], I(t, angular.lowercase(s)) > -1)) return s
                        }
                    if (e) {
                        var u = e.split("_");
                        if (u.length > 1 && I(t, angular.lowercase(u[0])) > -1) return u[0]
                    }
                    return e
                },
                L = function(e, t) {
                    if (!e && !t) return y;
                    if (e && !t) {
                        if (angular.isString(e)) return y[e]
                    } else angular.isObject(y[e]) || (y[e] = {}), angular.extend(y[e], F(t));
                    return this
                };
            this.translations = L, this.cloakClassName = function(e) {
                return e ? (k = e, this) : k
            }, this.nestedObjectDelimeter = function(e) {
                return e ? (C = e, this) : C
            };
            var F = function(e, t, n, r) {
                var o, i, s, a;
                t || (t = []), n || (n = {});
                for (o in e) Object.prototype.hasOwnProperty.call(e, o) && (a = e[o], angular.isObject(a) ? F(a, t.concat(o), n, o) : (i = t.length ? "" + t.join(C) + C + o : o, t.length && o === r && (s = "" + t.join(C), n[s] = "@:" + i), n[i] = a));
                return n
            };
            F.displayName = "flatObject", this.addInterpolation = function(e) {
                return w.push(e), this
            }, this.useMessageFormatInterpolation = function() {
                return this.useInterpolation("$translateMessageFormatInterpolation")
            }, this.useInterpolation = function(e) {
                return d = e, this
            }, this.useSanitizeValueStrategy = function(e) {
                return n.useStrategy(e), this
            }, this.preferredLanguage = function(e) {
                return e ? (B(e), this) : o
            };
            var B = function(e) {
                return e && (o = e), o
            };
            this.translationNotFoundIndicator = function(e) {
                return this.translationNotFoundIndicatorLeft(e), this.translationNotFoundIndicatorRight(e), this
            }, this.translationNotFoundIndicatorLeft = function(e) {
                return e ? (m = e, this) : m
            }, this.translationNotFoundIndicatorRight = function(e) {
                return e ? (v = e, this) : v
            }, this.fallbackLanguage = function(e) {
                return R(e), this
            };
            var R = function(e) {
                return e ? (angular.isString(e) ? (a = !0, s = [e]) : angular.isArray(e) && (a = !1, s = e), angular.isString(o) && I(s, o) < 0 && s.push(o), this) : a ? s[0] : s
            };
            this.use = function(e) {
                if (e) {
                    if (!y[e] && !h) throw new Error("$translateProvider couldn't find translationTable for langKey: '" + e + "'");
                    return l = e, this
                }
                return l
            };
            var j = function(e) {
                return e ? (x = e, this) : p ? p + x : x
            };
            this.storageKey = j, this.useUrlLoader = function(e, t) {
                return this.useLoader("$translateUrlLoader", angular.extend({
                    url: e
                }, t))
            }, this.useStaticFilesLoader = function(e) {
                return this.useLoader("$translateStaticFilesLoader", e)
            }, this.useLoader = function(e, t) {
                return h = e, g = t || {}, this
            }, this.useLocalStorage = function() {
                return this.useStorage("$translateLocalStorage")
            }, this.useCookieStorage = function() {
                return this.useStorage("$translateCookieStorage")
            }, this.useStorage = function(e) {
                return u = e, this
            }, this.storagePrefix = function(e) {
                return e ? (p = e, this) : e
            }, this.useMissingTranslationHandlerLog = function() {
                return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")
            }, this.useMissingTranslationHandler = function(e) {
                return f = e, this
            }, this.usePostCompiling = function(e) {
                return T = !!e, this
            }, this.forceAsyncReload = function(e) {
                return S = !!e, this
            }, this.uniformLanguageTag = function(e) {
                return e ? angular.isString(e) && (e = {
                    standard: e
                }) : e = {}, P = e.standard, this
            }, this.determinePreferredLanguage = function(e) {
                var t = e && angular.isFunction(e) ? e() : O();
                return o = $.length ? _(t) : t, this
            }, this.registerAvailableLanguageKeys = function(e, t) {
                return e ? ($ = e, t && (i = t), this) : $
            }, this.useLoaderCache = function(e) {
                return !1 === e ? b = void 0 : !0 === e ? b = !0 : void 0 === e ? b = "$translationCache" : e && (b = e), this
            }, this.directivePriority = function(e) {
                return void 0 === e ? E : (E = e, this)
            }, this.statefulFilter = function(e) {
                return void 0 === e ? A : (A = e, this)
            }, this.$get = ["$log", "$injector", "$rootScope", "$q", function(e, t, n, r) {
                var i, p, $, P, D = t.get(d || "$translateDefaultInterpolation"),
                    N = !1,
                    O = {},
                    q = {},
                    U = function(e, t, n, a) {
                        if (angular.isArray(e)) {
                            return function(e) {
                                for (var o = {}, i = [], s = function(e) {
                                        var i = r.defer(),
                                            s = function(t) {
                                                o[e] = t, i.resolve([e, t])
                                            };
                                        return U(e, t, n, a).then(s, s), i.promise
                                    }, l = 0, c = e.length; c > l; l++) i.push(s(e[l]));
                                return r.all(i).then(function() {
                                    return o
                                })
                            }(e)
                        }
                        var c = r.defer();
                        e && (e = M.apply(e));
                        var f = function() {
                            var e = o ? q[o] : q[l];
                            if (p = 0, u && !e) {
                                var t = i.get(x);
                                if (e = q[t], s && s.length) {
                                    var n = I(s, t);
                                    p = 0 === n ? 1 : 0, I(s, o) < 0 && s.push(o)
                                }
                            }
                            return e
                        }();
                        if (f) {
                            var d = function() {
                                J(e, t, n, a).then(c.resolve, c.reject)
                            };
                            d.displayName = "promiseResolved", f.finally(d, c.reject)
                        } else J(e, t, n, a).then(c.resolve, c.reject);
                        return c.promise
                    },
                    H = function(e) {
                        return m && (e = [m, e].join(" ")), v && (e = [e, v].join(" ")), e
                    },
                    V = function(e) {
                        l = e, u && i.put(U.storageKey(), l), n.$emit("$translateChangeSuccess", {
                            language: e
                        }), D.setLocale(l);
                        var t = function(e, t) {
                            O[t].setLocale(l)
                        };
                        t.displayName = "eachInterpolatorLocaleSetter", angular.forEach(O, t), n.$emit("$translateChangeEnd", {
                            language: e
                        })
                    },
                    z = function(e) {
                        if (!e) throw "No language key specified for loading.";
                        var o = r.defer();
                        n.$emit("$translateLoadingStart", {
                            language: e
                        }), N = !0;
                        var i = b;
                        "string" == typeof i && (i = t.get(i)), N && P && P.resolve(), P = r.defer();
                        var s = angular.extend({}, g, {
                                key: e,
                                $http: angular.extend({}, {
                                    cache: i,
                                    timeout: P.promise
                                }, g.$http)
                            }),
                            a = function(t) {
                                var r = {};
                                n.$emit("$translateLoadingSuccess", {
                                    language: e
                                }), angular.isArray(t) ? angular.forEach(t, function(e) {
                                    angular.extend(r, F(e))
                                }) : angular.extend(r, F(t)), N = !1, o.resolve({
                                    key: e,
                                    table: r
                                }), n.$emit("$translateLoadingEnd", {
                                    language: e
                                })
                            };
                        a.displayName = "onLoaderSuccess";
                        var l = function(e) {
                            n.$emit("$translateLoadingError", {
                                language: e
                            }), o.reject(e), n.$emit("$translateLoadingEnd", {
                                language: e
                            })
                        };
                        return l.displayName = "onLoaderError", t.get(h)(s).then(a, l), o.promise
                    };
                if (u && (!(i = t.get(u)).get || !i.put)) throw new Error("Couldn't use storage '" + u + "', missing get() or put() method!");
                if (w.length) {
                    var W = function(e) {
                        var n = t.get(e);
                        n.setLocale(o || l), O[n.getInterpolationIdentifier()] = n
                    };
                    W.displayName = "interpolationFactoryAdder", angular.forEach(w, W)
                }
                var G = function(e, t, n, o) {
                        var i = r.defer(),
                            s = function(r) {
                                if (Object.prototype.hasOwnProperty.call(r, t)) {
                                    o.setLocale(e);
                                    var s = r[t];
                                    "@:" === s.substr(0, 2) ? G(e, s.substr(2), n, o).then(i.resolve, i.reject) : i.resolve(o.interpolate(r[t], n)), o.setLocale(l)
                                } else i.reject()
                            };
                        return s.displayName = "fallbackTranslationResolver",
                            function(e) {
                                var t = r.defer();
                                if (Object.prototype.hasOwnProperty.call(y, e)) t.resolve(y[e]);
                                else if (q[e]) {
                                    var n = function(e) {
                                        L(e.key, e.table), t.resolve(e.table)
                                    };
                                    n.displayName = "translationTableResolver", q[e].then(n, t.reject)
                                } else t.reject();
                                return t.promise
                            }(e).then(s, i.reject), i.promise
                    },
                    Y = function(e, t, n, r) {
                        var o, i = y[e];
                        if (i && Object.prototype.hasOwnProperty.call(i, t)) {
                            if (r.setLocale(e), "@:" === (o = r.interpolate(i[t], n)).substr(0, 2)) return Y(e, o.substr(2), n, r);
                            r.setLocale(l)
                        }
                        return o
                    },
                    K = function(e, n) {
                        if (f) {
                            var r = t.get(f)(e, l, n);
                            return void 0 !== r ? r : e
                        }
                        return e
                    },
                    Q = function(e, t, n, o, i) {
                        var a = r.defer();
                        if (e < s.length) {
                            var l = s[e];
                            G(l, t, n, o).then(a.resolve, function() {
                                Q(e + 1, t, n, o, i).then(a.resolve)
                            })
                        } else a.resolve(i || K(t, n));
                        return a.promise
                    },
                    X = function(e, t, n, r) {
                        var o;
                        if (e < s.length) {
                            var i = s[e];
                            (o = Y(i, t, n, r)) || (o = X(e + 1, t, n, r))
                        }
                        return o
                    },
                    J = function(e, t, n, o) {
                        var i, a, c, u, d = r.defer(),
                            h = l ? y[l] : y,
                            g = n ? O[n] : D;
                        if (h && Object.prototype.hasOwnProperty.call(h, e)) {
                            var m = h[e];
                            "@:" === m.substr(0, 2) ? U(m.substr(2), t, n, o).then(d.resolve, d.reject) : d.resolve(g.interpolate(m, t))
                        } else {
                            var v;
                            f && !N && (v = K(e, t)), l && s && s.length ? (i = e, a = t, c = g, u = o, Q($ > 0 ? $ : p, i, a, c, u)).then(function(e) {
                                d.resolve(e)
                            }, function(e) {
                                d.reject(H(e))
                            }) : f && !N && v ? d.resolve(o || v) : o ? d.resolve(o) : d.reject(H(e))
                        }
                        return d.promise
                    },
                    Z = function(e, t, n) {
                        var r, o = l ? y[l] : y,
                            i = D;
                        if (O && Object.prototype.hasOwnProperty.call(O, n) && (i = O[n]), o && Object.prototype.hasOwnProperty.call(o, e)) {
                            var a = o[e];
                            r = "@:" === a.substr(0, 2) ? Z(a.substr(2), t, n) : i.interpolate(a, t)
                        } else {
                            var c;
                            f && !N && (c = K(e, t)), l && s && s.length ? (p = 0, r = X($ > 0 ? $ : p, e, t, i)) : r = f && !N && c ? c : H(e)
                        }
                        return r
                    };
                U.preferredLanguage = function(e) {
                    return e && B(e), o
                }, U.cloakClassName = function() {
                    return k
                }, U.nestedObjectDelimeter = function() {
                    return C
                }, U.fallbackLanguage = function(e) {
                    if (void 0 !== e && null !== e) {
                        if (R(e), h && s && s.length)
                            for (var t = 0, n = s.length; n > t; t++) q[s[t]] || (q[s[t]] = z(s[t]));
                        U.use(U.use())
                    }
                    return a ? s[0] : s
                }, U.useFallbackLanguage = function(e) {
                    if (void 0 !== e && null !== e)
                        if (e) {
                            var t = I(s, e);
                            t > -1 && ($ = t)
                        } else $ = 0
                }, U.proposedLanguage = function() {
                    return c
                }, U.storage = function() {
                    return i
                }, U.use = function(e) {
                    if (!e) return l;
                    var t = r.defer();
                    n.$emit("$translateChangeStart", {
                        language: e
                    });
                    var o = _(e);
                    return o && (e = o), !S && y[e] || !h || q[e] ? c === e && q[e] ? q[e].then(function(e) {
                        return t.resolve(e.key), e
                    }, function(e) {
                        return t.reject(e), r.reject(e)
                    }) : (t.resolve(e), V(e)) : (c = e, q[e] = z(e).then(function(e) {
                        return L(e.key, e.table), t.resolve(e.key), V(e.key), e
                    }, function(e) {
                        return n.$emit("$translateChangeError", {
                            language: e
                        }), t.reject(e), n.$emit("$translateChangeEnd", {
                            language: e
                        }), r.reject(e)
                    }), q[e].finally(function() {
                        var t;
                        c === (t = e) && (c = void 0), q[t] = void 0
                    })), t.promise
                }, U.storageKey = function() {
                    return j()
                }, U.isPostCompilingEnabled = function() {
                    return T
                }, U.isForceAsyncReloadEnabled = function() {
                    return S
                }, U.refresh = function(e) {
                    function t() {
                        i.resolve(), n.$emit("$translateRefreshEnd", {
                            language: e
                        })
                    }

                    function o() {
                        i.reject(), n.$emit("$translateRefreshEnd", {
                            language: e
                        })
                    }
                    if (!h) throw new Error("Couldn't refresh translation table, no loader registered!");
                    var i = r.defer();
                    if (n.$emit("$translateRefreshStart", {
                            language: e
                        }), e)
                        if (y[e]) {
                            var a = function(n) {
                                L(n.key, n.table), e === l && V(l), t()
                            };
                            a.displayName = "refreshPostProcessor", z(e).then(a, o)
                        } else o();
                    else {
                        var c = [],
                            u = {};
                        if (s && s.length)
                            for (var p = 0, f = s.length; f > p; p++) c.push(z(s[p])), u[s[p]] = !0;
                        l && !u[l] && c.push(z(l));
                        var d = function(e) {
                            y = {}, angular.forEach(e, function(e) {
                                L(e.key, e.table)
                            }), l && V(l), t()
                        };
                        d.displayName = "refreshPostProcessor", r.all(c).then(d, o)
                    }
                    return i.promise
                }, U.instant = function(e, t, n) {
                    if (null === e || angular.isUndefined(e)) return e;
                    if (angular.isArray(e)) {
                        for (var r = {}, i = 0, a = e.length; a > i; i++) r[e[i]] = U.instant(e[i], t, n);
                        return r
                    }
                    if (angular.isString(e) && e.length < 1) return e;
                    e && (e = M.apply(e));
                    var c, u = [];
                    o && u.push(o), l && u.push(l), s && s.length && (u = u.concat(s));
                    for (var p = 0, d = u.length; d > p; p++) {
                        var h = u[p];
                        if (y[h] && (void 0 !== y[h][e] ? c = Z(e, t, n) : (m || v) && (c = H(e))), void 0 !== c) break
                    }
                    return c || "" === c || (c = D.interpolate(e, t), f && !N && (c = K(e, t))), c
                }, U.versionInfo = function() {
                    return "2.8.0"
                }, U.loaderCache = function() {
                    return b
                }, U.directivePriority = function() {
                    return E
                }, U.statefulFilter = function() {
                    return A
                }, U.isReady = function() {
                    return !1
                };
                var ee = r.defer();
                U.onReady = function(e) {
                    var t = r.defer();
                    return angular.isFunction(e) && t.promise.then(e), ee.promise.then(function() {
                        t.resolve()
                    }), t.promise
                };
                var te = n.$on("$translateReady", function() {
                        ee.resolve(), te(), te = null
                    }),
                    ne = n.$on("$translateChangeEnd", function() {
                        ee.resolve(), ne(), ne = null
                    });
                if (h) {
                    if (angular.equals(y, {}) && U.use() && U.use(U.use()), s && s.length)
                        for (var re = function(e) {
                                return L(e.key, e.table), n.$emit("$translateChangeEnd", {
                                    language: e.key
                                }), e
                            }, oe = 0, ie = s.length; ie > oe; oe++) {
                            var se = s[oe];
                            (S || !y[se]) && (q[se] = z(se).then(re))
                        }
                } else n.$emit("$translateReady", {
                    language: U.use()
                });
                return U
            }]
        }

        function n(e, t) {
            "use strict";
            var n = {};
            return n.setLocale = function(e) {
                e
            }, n.getInterpolationIdentifier = function() {
                return "default"
            }, n.useSanitizeValueStrategy = function(e) {
                return t.useStrategy(e), this
            }, n.interpolate = function(n, r) {
                r = r || {}, r = t.sanitize(r, "params");
                var o = e(n)(r);
                return t.sanitize(o, "text")
            }, n
        }

        function r(e, t, n, r, i, s) {
            "use strict";
            return {
                restrict: "AE",
                scope: !0,
                priority: e.directivePriority(),
                compile: function(t, a) {
                    var l = a.translateValues ? a.translateValues : void 0,
                        c = a.translateInterpolation ? a.translateInterpolation : void 0,
                        u = t[0].outerHTML.match(/translate-value-+/i),
                        p = "^(.*)(" + n.startSymbol() + ".*" + n.endSymbol() + ")(.*)",
                        f = "^(.*)" + n.startSymbol() + "(.*)" + n.endSymbol() + "(.*)";
                    return function(t, d, h) {
                        t.interpolateParams = {}, t.preText = "", t.postText = "", t.translateNamespace = o(t);
                        var g = {},
                            m = function(e) {
                                if (angular.isFunction(m._unwatchOld) && (m._unwatchOld(), m._unwatchOld = void 0), angular.equals(e, "") || !angular.isDefined(e)) {
                                    var r = function() {
                                            return this.toString().replace(/^\s+|\s+$/g, "")
                                        }.apply(d.text()),
                                        o = r.match(p);
                                    if (angular.isArray(o)) {
                                        t.preText = o[1], t.postText = o[3], g.translate = n(o[2])(t.$parent);
                                        var i = r.match(f);
                                        angular.isArray(i) && i[2] && i[2].length && (m._unwatchOld = t.$watch(i[2], function(e) {
                                            g.translate = e, w()
                                        }))
                                    } else g.translate = r
                                } else g.translate = e;
                                w()
                            },
                            v = function(e) {
                                h.$observe(e, function(t) {
                                    g[e] = t, w()
                                })
                            };
                        ! function(e, n, r) {
                            if (n.translateValues && angular.extend(e, i(n.translateValues)(t.$parent)), u)
                                for (var o in r) Object.prototype.hasOwnProperty.call(n, o) && "translateValue" === o.substr(0, 14) && "translateValues" !== o && (e[angular.lowercase(o.substr(14, 1)) + o.substr(15)] = r[o])
                        }(t.interpolateParams, h, a);
                        var b = !0;
                        h.$observe("translate", function(e) {
                            void 0 === e ? m("") : "" === e && b || (g.translate = e, w()), b = !1
                        });
                        for (var y in h) h.hasOwnProperty(y) && "translateAttr" === y.substr(0, 13) && v(y);
                        if (h.$observe("translateDefault", function(e) {
                                t.defaultText = e
                            }), l && h.$observe("translateValues", function(e) {
                                e && t.$parent.$watch(function() {
                                    angular.extend(t.interpolateParams, i(e)(t.$parent))
                                })
                            }), u) {
                            var $ = function(e) {
                                h.$observe(e, function(n) {
                                    var r = angular.lowercase(e.substr(14, 1)) + e.substr(15);
                                    t.interpolateParams[r] = n
                                })
                            };
                            for (var x in h) Object.prototype.hasOwnProperty.call(h, x) && "translateValue" === x.substr(0, 14) && "translateValues" !== x && $(x)
                        }
                        var w = function() {
                                for (var e in g) g.hasOwnProperty(e) && void 0 !== g[e] && k(e, g[e], t, t.interpolateParams, t.defaultText, t.translateNamespace)
                            },
                            k = function(t, n, r, o, i, s) {
                                n ? (s && "." === n.charAt(0) && (n = s + n), e(n, o, c, i).then(function(e) {
                                    T(e, r, !0, t)
                                }, function(e) {
                                    T(e, r, !1, t)
                                })) : T(n, r, !1, t)
                            },
                            T = function(t, n, o, i) {
                                if ("translate" === i) {
                                    o || void 0 === n.defaultText || (t = n.defaultText), d.empty().append(n.preText + t + n.postText);
                                    var s = e.isPostCompilingEnabled(),
                                        l = void 0 !== a.translateCompile,
                                        c = l && "false" !== a.translateCompile;
                                    (s && !l || c) && r(d.contents())(n)
                                } else {
                                    o || void 0 === n.defaultText || (t = n.defaultText);
                                    var u = h.$attr[i];
                                    "data-" === u.substr(0, 5) && (u = u.substr(5)), u = u.substr(15), d.attr(u, t)
                                }
                            };
                        (l || u || h.translateDefault) && t.$watch("interpolateParams", w, !0);
                        var S = s.$on("$translateChangeSuccess", w);
                        d.text().length ? m(h.translate ? h.translate : "") : h.translate && m(h.translate), w(), t.$on("$destroy", S)
                    }
                }
            }
        }

        function o(e) {
            "use strict";
            return e.translateNamespace ? e.translateNamespace : e.$parent ? o(e.$parent) : void 0
        }

        function i(e) {
            "use strict";
            return {
                compile: function(t) {
                    var n = function() {
                            t.addClass(e.cloakClassName())
                        },
                        r = function() {
                            t.removeClass(e.cloakClassName())
                        };
                    return e.onReady(function() {
                            r()
                        }), n(),
                        function(t, o, i) {
                            i.translateCloak && i.translateCloak.length && i.$observe("translateCloak", function(t) {
                                e(t).then(r, n)
                            })
                        }
                }
            }
        }

        function s() {
            "use strict";
            return {
                restrict: "A",
                scope: !0,
                compile: function() {
                    return {
                        pre: function(e, t, n) {
                            e.translateNamespace = o(e), e.translateNamespace && "." === n.translateNamespace.charAt(0) ? e.translateNamespace += n.translateNamespace : e.translateNamespace = n.translateNamespace
                        }
                    }
                }
            }
        }

        function o(e) {
            "use strict";
            return e.translateNamespace ? e.translateNamespace : e.$parent ? o(e.$parent) : void 0
        }

        function a(e, t) {
            "use strict";
            var n = function(n, r, o) {
                return angular.isObject(r) || (r = e(r)(this)), t.instant(n, r, o)
            };
            return t.statefulFilter() && (n.$stateful = !0), n
        }

        function l(e) {
            "use strict";
            return e("translations")
        }
        return angular.module("pascalprecht.translate", ["ng"]).run(e), e.$inject = ["$translate"], e.displayName = "runTranslate", angular.module("pascalprecht.translate").provider("$translateSanitization", function() {
            "use strict";
            var e, t, n = null,
                r = !1,
                o = !1;
            (t = {
                sanitize: function(e, t) {
                    return "text" === t && (e = s(e)), e
                },
                escape: function(e, t) {
                    return "text" === t && (e = i(e)), e
                },
                sanitizeParameters: function(e, t) {
                    return "params" === t && (e = a(e, s)), e
                },
                escapeParameters: function(e, t) {
                    return "params" === t && (e = a(e, i)), e
                }
            }).escaped = t.escapeParameters, this.addStrategy = function(e, n) {
                return t[e] = n, this
            }, this.removeStrategy = function(e) {
                return delete t[e], this
            }, this.useStrategy = function(e) {
                return r = !0, n = e, this
            }, this.$get = ["$injector", "$log", function(i, s) {
                var a, l = {};
                return i.has("$sanitize") && (e = i.get("$sanitize")), {
                    useStrategy: (a = this, function(e) {
                        a.useStrategy(e)
                    }),
                    sanitize: function(e, a, c) {
                        if (n || r || o || (s.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."), o = !0), arguments.length < 3 && (c = n), !c) return e;
                        var u, p, f, d = angular.isArray(c) ? c : [c];
                        return u = e, p = a, f = d, angular.forEach(f, function(e) {
                            if (angular.isFunction(e)) u = e(u, p);
                            else if (angular.isFunction(t[e])) u = t[e](u, p);
                            else {
                                if (!angular.isString(t[e])) throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '" + e + "'");
                                if (!l[t[e]]) try {
                                    l[t[e]] = i.get(t[e])
                                } catch (n) {
                                    throw l[t[e]] = function() {}, new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '" + e + "'")
                                }
                                u = l[t[e]](u, p)
                            }
                        }), u
                    }
                }
            }];
            var i = function(e) {
                    var t = angular.element("<div></div>");
                    return t.text(e), t.html()
                },
                s = function(t) {
                    if (!e) throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");
                    return e(t)
                },
                a = function(e, t) {
                    if (angular.isObject(e)) {
                        var n = angular.isArray(e) ? [] : {};
                        return angular.forEach(e, function(e, r) {
                            n[r] = a(e, t)
                        }), n
                    }
                    return angular.isNumber(e) ? e : t(e)
                }
        }), angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider", {}).provider("$translate", t), t.$inject = ["$STORAGE_KEY", "$windowProvider", "$translateSanitizationProvider", "pascalprechtTranslateOverrider"], t.displayName = "displayName", angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", n), n.$inject = ["$interpolate", "$translateSanitization"], n.displayName = "$translateDefaultInterpolation", angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY"), angular.module("pascalprecht.translate").directive("translate", r), r.$inject = ["$translate", "$q", "$interpolate", "$compile", "$parse", "$rootScope"], r.displayName = "translateDirective", angular.module("pascalprecht.translate").directive("translateCloak", i), i.$inject = ["$translate"], i.displayName = "translateCloakDirective", angular.module("pascalprecht.translate").directive("translateNamespace", s), s.displayName = "translateNamespaceDirective", angular.module("pascalprecht.translate").filter("translate", a), a.$inject = ["$parse", "$translate"], a.displayName = "translateFilterFactory", angular.module("pascalprecht.translate").factory("$translationCache", l), l.$inject = ["$cacheFactory"], l.displayName = "$translationCache", "pascalprecht.translate"
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define([], function() {
            return t()
        }) : "object" == typeof exports ? module.exports = t() : t()
    }(0, function() {
        function e(e, t) {
            "use strict";
            return function(n) {
                if (!n || !(angular.isArray(n.files) || angular.isString(n.prefix) && angular.isString(n.suffix))) throw new Error("Couldn't load static files, no files and prefix or suffix specified!");
                n.files || (n.files = [{
                    prefix: n.prefix,
                    suffix: n.suffix
                }]);
                for (var r = function(r) {
                        if (!r || !angular.isString(r.prefix) || !angular.isString(r.suffix)) throw new Error("Couldn't load static file, no prefix or suffix specified!");
                        return t(angular.extend({
                            url: [r.prefix, n.key, r.suffix].join(""),
                            method: "GET",
                            params: ""
                        }, n.$http)).then(function(e) {
                            return e.data
                        }, function() {
                            return e.reject(n.key)
                        })
                    }, o = [], i = n.files.length, s = 0; i > s; s++) o.push(r({
                    prefix: n.files[s].prefix,
                    key: n.key,
                    suffix: n.files[s].suffix
                }));
                return e.all(o).then(function(e) {
                    for (var t = e.length, n = {}, r = 0; t > r; r++)
                        for (var o in e[r]) n[o] = e[r][o];
                    return n
                })
            }
        }
        return e.$inject = ["$q", "$http"], angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader", e), e.displayName = "$translateStaticFilesLoader", "pascalprecht.translate"
    }),
    function(e, t, n) {
        "use strict";
        t.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function(e, n) {
            var r, o = {},
                i = {},
                s = !1,
                a = t.copy,
                l = t.isUndefined;
            return n.addPollFn(function() {
                var t = n.cookies();
                r != t && (r = t, a(t, i), a(t, o), s && e.$apply())
            })(), s = !0, e.$watch(function() {
                var e, r, s;
                for (e in i) l(o[e]) && n.cookies(e, void 0);
                for (e in o) r = o[e], t.isString(r) || (r = "" + r, o[e] = r), r !== i[e] && (n.cookies(e, r), s = !0);
                if (s)
                    for (e in r = n.cookies(), o) o[e] !== r[e] && (l(r[e]) ? delete o[e] : o[e] = r[e])
            }), o
        }]).factory("$cookieStore", ["$cookies", function(e) {
            return {
                get: function(n) {
                    return (n = e[n]) ? t.fromJson(n) : n
                },
                put: function(n, r) {
                    e[n] = t.toJson(r)
                },
                remove: function(t) {
                    delete e[t]
                }
            }
        }])
    }(window, window.angular);
var Langs = {};

function getLang() {
    var e = localStorage.lang || "cn";
    return Langs[e] || Langs.en
}
Langs.en = {
        time: "时间",
        open: "开盘",
        high: "最高",
        low: "最低",
        close: "收盘",
        increase: "涨幅",
        swing: "振幅",
        volume: "VOL",
        quoteVolume: "转让额",
        hand: "换手率",
        o: "开",
        h: "高",
        l: "低",
        c: "收",
        price: "价格",
        updown: "涨跌",
        rang: "幅度"
    }, Langs.cn = {
        time: "时间",
        open: "开盘",
        high: "最高",
        low: "最低",
        close: "收盘",
        increase: "涨幅",
        swing: "振幅",
        volume: "成交量",
        quoteVolume: "成交额",
        hand: "换手率",
        o: "开",
        h: "高",
        l: "低",
        c: "收",
        price: "价格",
        updown: "涨跌",
        rang: "幅度"
    },
    function(e) {
        "use strict";
        var t = function(e, t) {
            this.init("tooltip", e, t)
        };
        t.prototype = {
            constructor: t,
            init: function(t, n, r) {
                var o, i;
                this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, "manual" != this.options.trigger && (o = "hover" == this.options.trigger ? "mouseenter" : "focus", i = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.on(o, this.options.selector, e.proxy(this.enter, this)), this.$element.on(i, this.options.selector, e.proxy(this.leave, this))), this.options.selector ? this._options = e.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            getOptions: function(t) {
                return (t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data())).delay && "number" == typeof t.delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), t
            },
            enter: function(t) {
                var n = e(t.currentTarget)[this.type](this._options).data(this.type);
                n.options.delay && n.options.delay.show ? (n.hoverState = "in", setTimeout(function() {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show)) : n.show()
            },
            leave: function(t) {
                var n = e(t.currentTarget)[this.type](this._options).data(this.type);
                n.options.delay && n.options.delay.hide ? (n.hoverState = "out", setTimeout(function() {
                    "out" == n.hoverState && n.hide()
                }, n.options.delay.hide)) : n.hide()
            },
            show: function() {
                var e, t, n, r, o, i, s;
                if (this.hasContent() && this.enabled) {
                    switch (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), i = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, t = /in/.test(i), e.remove().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).appendTo(t ? this.$element : document.body), n = this.getPosition(t), r = e[0].offsetWidth, o = e[0].offsetHeight, t ? i.split(" ")[1] : i) {
                        case "bottom":
                            s = {
                                top: n.top + n.height,
                                left: n.left + n.width / 2 - r / 2
                            };
                            break;
                        case "top":
                            s = {
                                top: n.top - o,
                                left: n.left + n.width / 2 - r / 2
                            };
                            break;
                        case "left":
                            s = {
                                top: n.top + n.height / 2 - o / 2,
                                left: n.left - r
                            };
                            break;
                        case "right":
                            s = {
                                top: n.top + n.height / 2 - o / 2,
                                left: n.left + n.width
                            }
                    }
                    e.css(s).addClass(i).addClass("in")
                }
            },
            setContent: function() {
                var e = this.tip();
                e.find(".tooltip-inner").html(this.getTitle()), e.removeClass("fade in top bottom left right")
            },
            hide: function() {
                var t, n = this.tip();
                n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? (t = setTimeout(function() {
                    n.off(e.support.transition.end).remove()
                }, 500), n.one(e.support.transition.end, function() {
                    clearTimeout(t), n.remove()
                })) : n.remove()
            },
            fixTitle: function() {
                var e = this.$element;
                (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").removeAttr("title")
            },
            hasContent: function() {
                return this.getTitle()
            },
            getPosition: function(t) {
                return e.extend({}, t ? {
                    top: 0,
                    left: 0
                } : this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                })
            },
            getTitle: function() {
                var e = this.$element,
                    t = this.options;
                return (e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)).toString().replace(/(^\s*|\s*$)/, "")
            },
            tip: function() {
                return this.$tip = this.$tip || e(this.options.template)
            },
            validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            toggleEnabled: function() {
                this.enabled = !this.enabled
            },
            toggle: function() {
                this[this.tip().hasClass("in") ? "hide" : "show"]()
            }
        }, e.fn.tooltip = function(n) {
            return this.each(function() {
                var r = e(this),
                    o = r.data("tooltip"),
                    i = "object" == typeof n && n;
                o || r.data("tooltip", o = new t(this, i)), "string" == typeof n && o[n]()
            })
        }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
            animation: !0,
            delay: 0,
            selector: !1,
            placement: "top",
            trigger: "hover",
            title: "",
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        }
    }(window.jQuery);
var BASE_URL = "http://localhost/rtbtc-dev/",
    DATA_URL = "http://localhost/rtbtc-dev/",
    DEBUG = !0,
    OFFLINE = !1,
    RTBTC_Class = function(e, t, n) {
        var r = null;

        function o() {
            var r = {
                url: "" + e,
                debug: !!t,
                offline: !!n,
                lang: "en",
                accounts: {},
                has_api: !1,
                prefsAccount: "",
                expires: millitime() + 60,
                expires_id: -1,
                base: "",
                base_int: 1,
                base_prec: 8,
                quote: "CNY",
                quote_int: 1,
                quote_prec: 4,
                exch_fee: {
                    mtgox: .0065,
                    bitstamp: .005,
                    btce: .002
                },
                token: "",
                version: "0.0.0",
                startTime: millitime(),
                offset: 0,
                exchange: "bitstamp",
                exch_list: ["bitstamp", "btce"],
                handlers: {},
                title: "" + window.document.title,
                ERROR: 1,
                WARNING: 2,
                MESSAGE: 3,
                windows: []
            };

            function o(e, t) {
                if (r.handlers.hasOwnProperty(e))
                    for (var n = 0; n < r.handlers[e].length; n++) r.handlers[e][n][1](t)
            }
            var i = function(e, t) {
                switch (t) {
                    case r.ERROR:
                        console.error(e);
                        break;
                    case r.WARNING:
                        console.warn(e);
                        break;
                    case r.MESSAGE:
                    default:
                        console.log(e)
                }
                if (!DEBUG) throw {}
            };
            $.ajaxSetup({
                async: !0,
                type: "POST",
                dataType: "json",
                crossDomain: !1
            });
            var s = function(e) {
                void 0 !== e.t0 && void 0 !== e.t1 && void 0 !== e.t2 && void 0 !== e.t3 && o("timing", {
                    latency: (-e.t0 + e.t1 - e.t2 + e.t3) / 2,
                    processing: e.t2 - e.t1
                })
            };
            for (var a = [""], l = [""], c = 1; c <= 30; c++) l.push(l[c - 1] + "&nbsp;"), a.push(a[c - 1] + "0");
            return {
                token: function(e) {
                    return null == e ? r.token : (r.token = e, DEBUG && i('Set RTBTC token to "' + e + '"'), this)
                },
                account: function() {
                    return r.accounts[r.exchange]
                },
                accounts: function(e) {
                    r.accounts = {};
                    for (var t in e) r.exch_list.indexOf(t) < 0 || (r.accounts[t] = e[t], DEBUG && i("Set user account string for " + t + ' to "' + e[t] + '"'));
                    return this
                },
                prefsAccount: function(e) {
                    return null == e ? r.prefsAccount : (r.prefsAccount = e, DEBUG && i('Set user preferences account string to "' + e + '"'), this)
                },
                hasApi: function() {
                    return r.accounts.hasOwnProperty(r.exchange)
                },
                startTime: function() {
                    return r.startTime
                },
                offset: function(e) {
                    return null == e ? r.offset : (r.offset = e.client - e.server, DEBUG && i("Got server time offset of " + r.offset + "s"), this)
                },
                expires: function(e) {
                    return null == e ? r.expires : (r.expires = +e + r.offset, 1e3 * (t = r.expires - millitime()) > 2147483647 || (DEBUG && i("Expire in " + (r.expires - millitime()) + "s"), window.clearTimeout(r.expires_id), r.expires_id = window.setTimeout(function() {
                        DEBUG && i("Subscription expired. Reloading."), window.location.reload()
                    }, 1e3 * t)), DEBUG && i("Set expiration time to " + new Date(1e3 * r.expires)), this);
                    var t
                },
                ajax: function(e, t, n, a, l) {
                    var c, u, p, f, d;
                    return void 0 !== e && (c = e, u = t, p = n, f = a, d = l, DEBUG && i("AJAX Call for " + c + ", data:"), DEBUG && null != u && i(u), $.ajax({
                        url: r.url + "api/" + c,
                        data: {
                            payload: u,
                            token: r.token,
                            aid: r.accounts[r.exchange],
                            t0: millitime()
                        },
                        success: function(e, t, n) {
                            var a = millitime();
                            if (void 0 !== e.result) {
                                if (void 0 !== e.timing && s({
                                        t0: parseFloat(e.timing.t0),
                                        t1: parseFloat(e.timing.t1),
                                        t2: parseFloat(e.timing.t2),
                                        t3: a
                                    }), void 0 !== e.token && (r.token = $.trim(e.token)), void 0 !== e.version) {
                                    var l = $.trim(e.version);
                                    l != r.version && window.setTimeout(function() {
                                        o("version", l)
                                    }, 5e3)
                                }
                                if ("success" == e.result) DEBUG && i("Success data [" + c + "]:"), DEBUG && i(e.data), "function" == typeof p && p(e.data);
                                else if (void 0 !== e.reason) switch (e.reason) {
                                    case "session":
                                    case "auth":
                                        DEBUG && i("Save failure: " + e.reason), !OFFLINE && window.location.reload();
                                        break;
                                    default:
                                        "function" == typeof f && (DEBUG && i("Calling failure fn with:"), DEBUG && i(e.reason), f(e.reason))
                                } else "function" == typeof f && f()
                            } else "function" == typeof d && d()
                        },
                        error: function(e, t, n) {
                            "function" == typeof d && d()
                        }
                    })), this
                },
                json: function(e, t, n) {
                    var r, o, s;
                    return void 0 !== e && (r = e, o = t, s = n, DEBUG && i("JSON Call for " + r), $.ajax({
                        url: r,
                        type: "GET",
                        dataType: "json",
                        success: function(e, t, n) {
                            "function" == typeof o && o(e)
                        },
                        error: function(e, t, n) {
                            "function" == typeof s && s()
                        }
                    })), this
                },
                base: function() {
                    return r.base
                },
                quote: function() {
                    return r.quote
                },
                symbol: function() {
                    return r.base + "/" + r.quote
                },
                baseInt: function() {
                    return r.base_int
                },
                quoteInt: function() {
                    return r.quote_int
                },
                basePrec: function() {
                    return r.base_prec
                },
                quotePrec: function() {
                    return r.quote_prec
                },
                instrument: function(e, t, n) {
                    try {
                        e = e.toLowerCase(), t = t.toUpperCase(), n = n.toUpperCase()
                    } catch (o) {
                        return DEBUG && i("RTBTC.instrument 1: " + e + ", " + t + ", " + n, r.ERROR), this
                    }
                    var s = {
                        exch: "" + r.exchange,
                        base: "" + r.base,
                        quote: "" + r.quote
                    };
                    return r.exchange = e, r.base = t, r.quote = n, DEBUG && i("RTBTC:instrument(" + r.exchange + ", " + r.base + ", " + r.quote + ")"), DEBUG && i(" " + r.base + " precision : " + r.base_prec + ", int: " + r.base_int), DEBUG && i(" " + r.quote + " precision: " + r.quote_prec + ", int: " + r.quote_int), o("instrument", {
                        old_instr: s,
                        new_instr: {
                            exch: r.exchange,
                            base: r.base,
                            quote: r.quote
                        }
                    }), this
                },
                version: function(e) {
                    if (null == e) return r.version;
                    r.version = e;
                    for (var t = "", n = 0; n < 75; n++) t += "=";
                    return DEBUG && i(t), DEBUG && i("RTBTC Version " + r.version), DEBUG && i(t), DEBUG && i(" "), this
                },
                url: function() {
                    return r.url
                },
                language: function(e) {
                    return null == e ? r.lang : (r.lang = e, o("language", r.lang), this)
                },
                handler: function(e, t, n) {
                    return r.handlers.hasOwnProperty(e) || (r.handlers[e] = []), r.handlers[e].push([t, n]), this
                },
                unregister: function(e, t, n) {
                    if (r.handlers.hasOwnProperty(e)) {
                        var o, i = void 0 === n;
                        for (o = r.handlers[e].length - 1; o >= 0; o--) r.handlers[e][o][0] == t && (i || r.handlers[e][o][1] == n) && r.handlers[e].splice(o, 1);
                        return this
                    }
                },
                unregisterAll: function(e) {
                    var t, n;
                    for (n in r.handlers)
                        if (r.handlers.hasOwnProperty(n))
                            for (t = r.handlers[n].length - 1; t >= 0; t--) r.handlers[n][t][0] == e && r.handlers[n].splice(t, 1)
                },
                trigger: function(e, t) {
                    o(e, t)
                },
                countdown: function(e, t) {
                    $(e).each(function(e, t) {
                        $(t).data("time", parseInt($(this).attr("name"))).removeAttr("name")
                    });
                    var n = function(e, t) {
                        $(e).each(function(e, n) {
                            var r = Math.max($(n).data("time"), 0),
                                o = t ? dhms_from_sec(r) : hms_from_sec(r);
                            return $(n).text(o), $(n).data("time", r - 1), !0
                        })
                    };
                    window.setInterval(function() {
                        n(e, t)
                    }, 1e3), n(e, t)
                },
                toggle: function(e, t, n, r) {
                    return $("<span/>").addClass("control-toggle").addClass(function() {
                        return e ? "yes" : "no"
                    }).append(function() {
                        return '<i class="icon-' + (e ? "ok" : "remove") + '"></i>'
                    }).data("state", e).click(function(e) {
                        var o = $(e.currentTarget);
                        o.data("state") ? (o.data("state", !1).removeClass("yes").addClass("no").html('<i class="icon-remove"></i>'), "function" == typeof n && n()) : (o.data("state", !0).removeClass("no").addClass("yes").html('<i class="icon-ok"></i>'), "function" == typeof t && t()), "function" == typeof r && r(), stopEvent(e)
                    })
                },
                select: function(e, t, n, r) {
                    var o, i, s = $("<select/>").on("change", function(t) {
                        n(t.currentTarget.value), r && (t.currentTarget.value = e)
                    });
                    for (o = 0; o < t.length; o++) i = $("<option/>").html(t[o].text).attr("value", t[o].val), t[o].val == e && i.attr("selected", "selected"), s.append(i);
                    return s
                },
                numFormat: function(e, t) {
                    if (void 0 === e) return "";
                    var n = null == t ? Settings.display.precision.price : t,
                        r = e.toFixed(n),
                        o = r.length,
                        i = 1;
                    for (isNaN(r) && (r = "0.0"); i < t;) {
                        if ("0" != r.charAt(o - i)) {
                            if (1 == i) return r;
                            break
                        }
                        i++
                    }
                    return Settings.display.zeros ? r.slice(0, o - i + 1) + '<span class="insig">' + a[i - 1] + "</span>" : r.slice(0, o - i + 1) + l[i - 1]
                },
                numFormatShort: function(e, t) {
                    if (void 0 === e) return "";
                    var n = null == t ? Settings.display.precision.price : t,
                        r = e.toFixed(n),
                        o = r.length,
                        i = 1;
                    for (isNaN(r) && (r = "0.0"); i < t;) {
                        if ("0" != r.charAt(o - i)) {
                            if (1 == i) return r;
                            break
                        }
                        i++
                    }
                    return r.slice(0, o - i + 1)
                },
                siteTitle: function(e) {
                    window.document.title = e + r.title
                },
                newWindow: function() {
                    return r.windows.append(window.open(r.url + "s/platform/window", uniqueID())), this
                },
                regUnsignedNum: new RegExp(/^\d*\.?\d*$/),
                internals: DEBUG ? function() {
                    return r
                } : function() {
                    return null
                },
                debug: r.debug ? i : function(e, t) {},
                isDebug: function() {
                    return r.debug
                },
                offline: function() {
                    return r.offline
                },
                ERROR: r.ERROR,
                WARNING: r.WARNING,
                MESSAGE: r.MESSAGE,
                ZEROS: a,
                SPACES: l
            }
        }
        return new function() {
            this.Build = function() {
                return null == r && ((r = new o).constructor = null), r
            }
        }
    }(BASE_URL, DEBUG, OFFLINE),
    RTBTC = RTBTC_Class.Build(),
    BTC = "&#3647;",
    BTC_U = "฿",
    BTC_INT = 1;

function log10(e) {
    return Math.log(e) / Math.LN10
}

function millitime() {
    return (new Date).getTime() / 1e3
}

function hms_from_epoch_ms(e, t) {
    var n, r, o, i = "",
        s = null;
    try {
        s = new Date(e), t ? (n = s.getHours(), r = s.getMinutes(), o = s.getSeconds()) : (n = s.getUTCHours(), r = s.getUTCMinutes(), o = s.getUTCSeconds()), i += (n < 10 ? "0" + n : n) + ":", i += (r < 10 ? "0" + r : r) + ":", i += o < 10 ? "0" + o : o
    } catch (e) {
        i = "00:00:00"
    }
    return i
}

function formatted_date(e, t, n) {
    var r = new Date(1e3 * e),
        o = "";
    return !0 === n ? (t && (o = r.getFullYear() + "-"), o += r.getMonth() + 1 < 10 ? "0" : "", o += r.getMonth() + 1 + "-", o += r.getDate() < 10 ? "0" : "", o += r.getDate()) : (t && (o = r.getUTCFullYear() + "-"), o += r.getUTCMonth() + 1 < 10 ? "0" : "", o += r.getUTCMonth() + 1 + "-", o += r.getUTCDate() < 10 ? "0" : "", o += r.getUTCDate()), o
}

function timestamp(e) {
    null != e && void 0 !== e || (e = !0);
    var t, n, r, o = new Date,
        i = "";
    return e ? (t = o.getHours(), n = o.getMinutes(), r = o.getSeconds()) : (t = o.getUTCHours(), n = o.getUTCMinutes(), r = o.getUTCSeconds()), i += (t < 10 ? "0" + t : t) + ":", i += (n < 10 ? "0" + n : n) + ":", i += r < 10 ? "0" + r : r
}

function hms_from_sec(e) {
    var t = "",
        n = e % 60,
        r = (e - n) / 60 % 60,
        o = (e - 60 * r - n) / 3600 % 3600;
    return t += (o < 10 ? "0" + o : o) + ":", t += (r < 10 ? "0" + r : r) + ":", t += n < 10 ? "0" + n : n
}

function dhms_from_sec(e) {
    var t, n, r, o, i = "",
        s = e;
    return s -= 86400 * (t = Math.floor(s / 86400)), o = (s -= 3600 * (n = Math.floor(s / 3600))) - 60 * (r = Math.floor(s / 60)), i += t > 0 ? t + ":" : "", i += (n < 10 ? "0" + n : n) + ":", i += (r < 10 ? "0" + r : r) + ":", i += o < 10 ? "0" + o : o
}

function time_delta_print(e) {
    var t, n, r, o = "",
        i = e;
    return i |= 0, i -= 86400 * (t = Math.floor(i / 86400)), i -= 3600 * (n = Math.floor(i / 3600)), r = Math.floor(i / 60), t >= 2 ? o = t + " days" : t >= 1 ? (o = t + " day, " + n + " hour", n > 1 && (o += "s")) : n >= 1 ? (o = n + " hour", n > 1 && (o += "s")) : o = r >= 1 ? r + " min" : i - 60 * r + " sec", o + " ago"
}

function numberWithCommas(e) {
    var t = e.toString().split(".");
    return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.join(".")
}

function delayClass(e, t, n) {
    window.setTimeout(function() {
        $(e).removeClass(t)
    }, n)
}

function deepCopy(e) {
    return $.extend(!0, {}, e)
}

function AssertException(e) {
    this.message = e
}

function assert(e, t) {
    if (!e) throw new AssertException(t)
}

function stopEvent(e) {
    try {
        e.preventDefault(), e.stopPropagation()
    } catch (e) {}
}

function NoBreak(e) {
    return e.replace(/ /g, "&nbsp;")
}

function HTMLEncode(e) {
    return $("<div/>").text(e).html()
}

function HTMLDecode(e) {
    return $("<div/>").html(e).text()
}

function clearingSpan() {
    return $("<span/>").addClass("clear").html("&nbsp;")
}

function clearingSpanHTML() {
    return '<span class="clear">&nbsp;</span>'
}
AssertException.prototype.toString = function() {
    return "AssertException: " + this.message
};
var lastUniqueID = 0;

function uniqueID() {
    return "id" + lastUniqueID++
}

function randInt(e) {
    return Math.floor(Math.random() * e)
}

function randRange(e, t) {
    return Math.floor(Math.random() * (t - e)) + e
}
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),
    alphalen = alphabet.length;

function randomString(e) {
    "number" != typeof e && (e = 10);
    var t = 0,
        n = "";
    for (t = 0; t < e; t++) n += alphabet[randInt(alphalen)];
    return n
}

function storageSupport() {
    try {
        return "localStorage" in window && null !== window.localStorage
    } catch (e) {
        return !1
    }
}

function wsSupport() {
    try {
        return !!window.WebSocket
    } catch (e) {
        return !1
    }
}

function locationOf(e, t, n, r, o) {
    null == n && (n = 0), null == r && (r = t.length - 1), "string" == typeof o && ("gt" == o ? o = function(e, t) {
        return e > t
    } : "lt" == o && (o = function(e, t) {
        return e < t
    }));
    var i = parseInt(n + (r - n) / 2);
    return t[i] == e ? {
        index: i,
        exact: !0
    } : r - n <= 1 ? {
        index: i + 1,
        exact: !1
    } : o(t[i], e) ? locationOf(e, t, i, r, o) : locationOf(e, t, n, i, o)
}

function has_worker() {
    return !!window.Worker
}

function pixel_ratio() {
    return window.hasOwnProperty("devicePixelRatio") ? window.devicePixelRatio : 1
}
Object.size = function(e) {
    var t, n = 0;
    for (t in e) e.hasOwnProperty(t) && n++;
    return n
}, Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
    var t = this.length,
        n = Number(arguments[1]) || 0;
    for ((n = n < 0 ? Math.ceil(n) : Math.floor(n)) < 0 && (n += t); n < t; n++)
        if (n in this && this[n] === e) return n;
    return -1
});
var has_dataURI = function() {
    return !1
};
! function() {
    var e = new Image;
    e.onload = function() {
        1 == this.width && 1 == this.height && (has_dataURI = function() {
            return !0
        })
    }, e.onerror = function() {}, e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
}(),
function() {
    var e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.reqAnimFrame = void 0 !== e ? e : function(e) {
        e()
    }
}(), jQuery.cookie = function(e, t, n) {
    if (arguments.length > 1 && "[object Object]" !== String(t)) {
        if (n = jQuery.extend({}, n), null !== t && void 0 !== t || (n.expires = -1), "number" == typeof n.expires) {
            var r = n.expires,
                o = n.expires = new Date;
            o.setDate(o.getDate() + r)
        }
        return t = String(t), document.cookie = [encodeURIComponent(e), "=", n.raw ? t : encodeURIComponent(t), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
    }
    var i, s = (n = t || {}).raw ? function(e) {
        return e
    } : decodeURIComponent;
    return (i = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? s(i[1]) : null
};
var Colors = {
        c: {
            stroke: {
                fenshi: "#ffffff",
                up: "#ff0000",
                down: "#3AA60C",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#252522",
                border: "#333",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191919",
                up: "#ff0000",
                down: "#3AA60C",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        c1: {
            stroke: {
                fenshi: "#ffffff",
                up: "#d00017",
                down: "#4dd710",
                bid: "#d00017",
                ask: "#4dd710",
                grid: "#252522",
                border: "#333",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191919",
                up: "#3AA60C",
                down: "#A10013",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        f: {
            stroke: {
                up: "#00a1d9",
                down: "#ed111a",
                bid: "#ed111a",
                ask: "#00a1d9",
                grid: "#d5e4eb",
                border: "#014d65",
                order: "#014d65",
                majorlevel: "#014d65",
                minorlevel: "#014d65",
                crosshair: "#040f12",
                i: ["#00a1d9", "#ed111a", "#014d65", "#c60", "#6c0", "#0cc", "#cc0", "#0c0"]
            },
            fill: {
                bg: "#d5e4eb",
                up: "#00ACE5",
                down: "#FF121A",
                label: "#09232B",
                flags: "#F2F8FA",
                crosshair: "#fff",
                blankBG: "#fff",
                flagtext: "#040f12",
                ordertext: "#014d65",
                slottext: "#040f12"
            }
        },
        m: {
            stroke: {
                up: "#9C6",
                down: "#B40000",
                bid: "#7A1631",
                ask: "#89D12A",
                grid: "#454545",
                border: "#616161",
                order: "#014d65",
                majorlevel: "#014d65",
                minorlevel: "#014d65",
                crosshair: "#ffc200",
                i: ["#ffc200", "#0099cc", "#014d65", "#c60", "#6c0", "#0cc", "#cc0", "#0c0"]
            },
            fill: {
                bg: "#0f0f0f",
                up: "#658744",
                down: "#750000",
                label: "#F4FFE4",
                flags: "#0f0f0f",
                crosshair: "#0f0f0f",
                blankBG: "#0f0f0f",
                flagtext: "#F4FFE4",
                ordertext: "#014d65",
                slottext: "#F4FFE4"
            }
        },
        t: {
            stroke: {
                up: "#498192",
                down: "#daa102",
                bid: "#daa102",
                ask: "#498192",
                grid: "#0d1e29",
                border: "#014d65",
                order: "#014d65",
                majorlevel: "#014d65",
                minorlevel: "#014d65",
                crosshair: "#040f12",
                i: ["#498192", "#daa102", "#014d65", "#c60", "#6c0", "#0cc", "#cc0", "#0c0"]
            },
            fill: {
                bg: "#05232c",
                up: "#d6f7fb",
                down: "#f9f15f",
                label: "#daa102",
                flags: "#F2F8FA",
                crosshair: "#fff",
                blankBG: "#050b0f",
                flagtext: "#040f12",
                ordertext: "#014d65",
                slottext: "#040f12"
            }
        },
        s: {
            stroke: {
                up: "#999",
                down: "#000",
                bid: "#333",
                ask: "#999",
                grid: "#ddd",
                border: "#000",
                order: "#014d65",
                majorlevel: "#ccc",
                minorlevel: "#ddd",
                crosshair: "#000",
                i: ["#aaa", "#999", "#ccc", "#777"]
            },
            fill: {
                bg: "#fff",
                up: "#bbb",
                down: "#333",
                label: "#333",
                flags: "#fff",
                crosshair: "#fff",
                blankBG: "#fff",
                flagtext: "#000",
                ordertext: "#014d65",
                slottext: "#000"
            }
        },
        a: {
            stroke: {
                up: "#d00017",
                down: "#4dd710",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#d3d3d3",
                border: "#999999",
                order: "red",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#008fdb",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#ffffff",
                up: "#A10013",
                down: "#3AA60C",
                label: "#999999",
                flags: "#ffffff",
                crosshair: "#ffffff",
                blankBG: "#ffffff",
                flagtext: "#999999",
                ordertext: "#ffc200",
                slottext: "#165d82"
            }
        },
        a1: {
            stroke: {
                fenshi: "#267cd1",
                up: "#f24957",
                down: "#1dbf60",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#d3d3d3",
                border: "#999999",
                arrow: "#008fbd",
                order: "red",
                opacity: !0,
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#008fdb",
                i: ["#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#ffffff",
                up: "#f24957",
                down: "#1dbf60",
                label: "#999999",
                flags: "#ffffff",
                crosshair: "#ffffff",
                blankBG: "#ffffff",
                flagtext: "#999999",
                ordertext: "#ffc200",
                slottext: "#165d82"
            }
        },
        a2: {
            stroke: {
                fenshi: "#267cd1",
                up: "#f24957",
                down: "#1dbf60",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#d3d3d3",
                border: "#999999",
                arrow: "#008fbd",
                order: "red",
                priceShow: !0,
                opacity: !0,
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#008fdb",
                i: ["#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#ffffff",
                up: "#f24957",
                down: "#1dbf60",
                label: "#999999",
                flags: "#ffffff",
                crosshair: "#ffffff",
                blankBG: "#ffffff",
                flagtext: "#999999",
                ordertext: "#ffc200",
                slottext: "#165d82"
            }
        },
        "depth-white": {
            stroke: {
                up: "#d00017",
                down: "#ff6c78",
                bid: "#4dd710",
                ask: "#ff6c78",
                grid: "#dedede",
                border: "#dedede",
                order: "#1ad1af",
                majorlevel: "blue",
                minorlevel: "blue",
                crosshair: "#deac37",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#ffffff",
                up: "#ff6c78",
                down: "#9ed577",
                label: "#999999",
                flags: "#191919",
                crosshair: "#fff",
                blankBG: "#ffffff",
                flagtext: "#666666",
                ordertext: "#1ad1af",
                slottext: "blue"
            }
        },
        "chart-white2": {
            stroke: {
                fenshi: "#267cd1",
                up: "#73c921",
                fillUp: "#73c921",
                down: "#ca2c78",
                bid: "#79b48a",
                ask: "#f32f3f",
                grid: "#f1f1f1",
                border: "#f1f1f1",
                arrow: "#444",
                order: "red",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#008fdb",
                i: ["#ffc200", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#ffffff",
                up: "#73c921",
                down: "#ca2c78",
                label: "#999999",
                flags: "#ffffff",
                crosshair: "#ffffff",
                blankBG: "#ffffff",
                flagtext: "#999999",
                ordertext: "#ffc200",
                slottext: "#165d82"
            }
        },
        "depth-black-bnb": {
            stroke: {
                up: "#d00017",
                down: "#4dd710",
                bid: "#a3ff61",
                ask: "#ff3394",
                grid: "#323c45",
                border: "#333",
                order: "#ffffff",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#deac37",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#262d33",
                up: "#ff3394",
                down: "#a3ff61",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffffff",
                slottext: "#f4ffe4"
            }
        },
        "depth-black-mobile-bnb": {
            stroke: {
                up: "#d00017",
                down: "#4dd710",
                bid: "#a3ff61",
                ask: "#ff3394",
                grid: "#323c45",
                border: "#333",
                order: "#ffffff",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#deac37",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191d21",
                up: "#ff3394",
                down: "#a3ff61",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffffff",
                slottext: "#f4ffe4"
            }
        },
        "chart-black-bnb": {
            stroke: {
                fenshi: "#ffffff",
                up: "#73c921",
                down: "#ca2c78",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#323c45",
                border: "#323c45",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#262d33",
                up: "#73c921",
                down: "#ca2c78",
                label: "#9EA694",
                flags: "#262d33",
                crosshair: "#262d33",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "chart-black-mobile-bnb": {
            stroke: {
                fenshi: "#ffffff",
                up: "#73c921",
                down: "#ca2c78",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#323c45",
                border: "#323c45",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191d21",
                up: "#73c921",
                down: "#ca2c78",
                label: "#9EA694",
                flags: "#262d33",
                crosshair: "#262d33",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "depth-black-ico": {
            stroke: {
                fenshi: "#ffffff",
                up: "#4dd710",
                down: "#d00017",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#252522",
                border: "#333",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191919",
                up: "#A10013",
                down: "#3AA60C",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "chart-black-ico": {
            stroke: {
                fenshi: "#ffffff",
                up: "#3AA60C",
                down: "#ff0000",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#323c45",
                border: "#333",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191919",
                up: "#3AA60C",
                down: "#ff0000",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#262d33",
                blankBG: "#191919",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "chart-black-zql": {
            stroke: {
                fenshi: "#ffffff",
                up: "#3AA60C",
                down: "#ff0000",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#323c45",
                border: "#333",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191919",
                up: "#3AA60C",
                down: "#ff0000",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#262d33",
                blankBG: "#191919",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "chart-black-mobile-zql": {
            stroke: {
                fenshi: "#ffffff",
                up: "#73c921",
                down: "#ca2c78",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#323c45",
                border: "#323c45",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191d21",
                up: "#73c921",
                down: "#ca2c78",
                label: "#9EA694",
                flags: "#262d33",
                crosshair: "#262d33",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "depth-black-zql": {
            stroke: {
                fenshi: "#ffffff",
                up: "#4dd710",
                down: "#d00017",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#252522",
                border: "#333",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191919",
                up: "#A10013",
                down: "#3AA60C",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "depth-black-mobile-zql": {
            stroke: {
                up: "#d00017",
                down: "#4dd710",
                bid: "#a3ff61",
                ask: "#ff3394",
                grid: "#323c45",
                border: "#333",
                order: "#ffffff",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#deac37",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191d21",
                up: "#ff3394",
                down: "#a3ff61",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffffff",
                slottext: "#f4ffe4"
            }
        },
        "chart-black-dae": {
            stroke: {
                fenshi: "#ffffff",
                up: "#73c921",
                down: "#ca2c78",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#323c45",
                border: "#323c45",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191919",
                up: "#73c921",
                down: "#ca2c78",
                label: "#9EA694",
                flags: "#262d33",
                crosshair: "#262d33",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "chart-black-mobile-dae": {
            stroke: {
                fenshi: "#ffffff",
                up: "#73c921",
                down: "#ca2c78",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#323c45",
                border: "#323c45",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191d21",
                up: "#73c921",
                down: "#ca2c78",
                label: "#9EA694",
                flags: "#262d33",
                crosshair: "#262d33",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "depth-black-dae": {
            stroke: {
                up: "#d00017",
                down: "#4dd710",
                bid: "#a3ff61",
                ask: "#ff3394",
                grid: "#323c45",
                border: "#333",
                order: "#ffffff",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#deac37",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#262d33",
                up: "#ff3394",
                down: "#a3ff61",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffffff",
                slottext: "#f4ffe4"
            }
        },
        "depth-black-mobile-dae": {
            stroke: {
                up: "#d00017",
                down: "#4dd710",
                bid: "#a3ff61",
                ask: "#ff3394",
                grid: "#323c45",
                border: "#333",
                order: "#ffffff",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#deac37",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191d21",
                up: "#ff3394",
                down: "#a3ff61",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffffff",
                slottext: "#f4ffe4"
            }
        }
    },
    Validator = function() {
        var e = null,
            t = null,
            n = 1,
            r = 2,
            o = 3,
            i = 4,
            s = RTBTC.debug,
            a = function(a) {
                switch (t) {
                    case n:
                        if ("boolean" == typeof a) return e = a, !0;
                        break;
                    case r:
                        if ("number" == typeof a) return e = parseInt(a), !0;
                        break;
                    case o:
                        if ("number" == typeof a) return e = parseFloat(a), !0;
                        break;
                    case i:
                        if ("string" == typeof a) return e = "" + a, !0
                }
                return DEBUG && s("Unable to validate " + a + ' as type "' + function(e) {
                    switch (e) {
                        case n:
                            return "boolean";
                        case r:
                            return "integer";
                        case o:
                            return "float";
                        case i:
                            return "string";
                        default:
                            return "unknown"
                    }
                }(t) + '". Detected type: ' + typeof a, RTBTC.ERROR), !1
            };
        return {
            create: function(s) {
                if (s === n && (t = s), s === r && (t = s), s === o && (t = s), s === i && (t = s), null == t) throw "Invalid type.";
                return {
                    get: function() {
                        return e
                    },
                    set: function(e) {
                        return a(e), this
                    },
                    toString: function() {
                        return "" + e
                    }
                }
            },
            BOOL: n,
            INT: r,
            FLOAT: o,
            STRING: i
        }
    },
    V = new Validator,
    Settings = {
        base: "BTC",
        quote: "USD",
        exchange: "mtgox",
        display: {
            precision: {
                price: 5,
                volume: 4
            },
            zeros: !0,
            grid: 5
        },
        sounds: {},
        localTime: !0,
        theme: "c",
        version: "0.0.0",
        layouts: [{
            name: "Market Overview",
            modules: [{
                m: {
                    t: "order-book",
                    w: 478,
                    h: 478,
                    x: 510,
                    y: 100,
                    l: !0
                },
                c: {
                    g: !0,
                    i: .01,
                    s: !0,
                    d: 50
                }
            }, {
                m: {
                    t: "time-sales",
                    w: 488,
                    h: 178,
                    x: 10,
                    y: 400,
                    l: !0
                },
                c: {
                    f: !0,
                    s: !0
                }
            }, {
                m: {
                    t: "ticker",
                    w: 478,
                    h: 78,
                    x: 510,
                    y: 10,
                    l: !0
                },
                c: {
                    a: !0,
                    h: !0,
                    l: !0,
                    v: !0
                }
            }, {
                m: {
                    t: "orders",
                    w: 488,
                    h: 108,
                    x: 10,
                    y: 280,
                    l: !0
                },
                c: {}
            }, {
                m: {
                    t: "order-entry",
                    w: 238,
                    h: 258,
                    x: 10,
                    y: 10,
                    l: !0
                },
                c: {
                    b: !0,
                    c: !0,
                    l: !1
                }
            }, {
                m: {
                    t: "order-entry",
                    w: 238,
                    h: 258,
                    x: 260,
                    y: 10,
                    l: !0
                },
                c: {
                    b: !1,
                    c: !0,
                    l: !1
                }
            }]
        }]
    },
    Settings_Helper = function() {
        var e = (new Validator).create(V.BOOL),
            t = (new Validator).create(V.INT),
            n = ((new Validator).create(V.FLOAT), (new Validator).create(V.STRING)),
            r = {},
            o = {
                dpp: Settings.display.precision.price,
                dpv: Settings.display.precision.volume,
                dz: Settings.display.zeros,
                dg: Settings.display.grid,
                b: Settings.base,
                q: Settings.quote,
                ex: Settings.exchange,
                lt: Settings.localTime,
                thm: Settings.theme,
                snd: Settings.sounds,
                version: Settings.version
            },
            i = (RTBTC.debug, function(e, t, n) {
                return void 0 === r[e] ? t : n.set(t).set(r[e]).get()
            });
        return {
            process: function(s) {
                return function(s) {
                    r = s, Settings.display.precision.price = i("dpp", o.dpp, t), Settings.display.precision.volume = i("dpv", o.dpv, t), Settings.display.zeros = i("dz", o.dz, e), Settings.display.grid = i("dg", o.dg, t), Settings.display.grid = 5, Settings.localTime = i("lt", o.lt, e), Settings.theme = i("thm", o.thm, n), Settings.version = i("version", o.version, n);
                    var a = i("b", o.b, n);
                    Currency.valid(a) && (Settings.base = a);
                    var l = i("q", o.q, n);
                    Currency.valid(l) && (Settings.quote = l);
                    var c = i("ex", o.ex, n);
                    if (Exchanges.valid(c) && (Settings.exchange = c), Settings.sounds = s.hasOwnProperty("snd") ? s.snd : {}, void 0 !== s.layouts && s.layouts.length > 0) {
                        var u, p;
                        Settings.layouts = [];
                        for (var f = 0; f < s.layouts.length; f++) {
                            if (u = {}, void 0 !== s.layouts[f].name && s.layouts[f].name.length > 0 && (u.name = "" + s.layouts[f].name), void 0 !== s.layouts[f].modules) {
                                u.modules = [];
                                for (var d = 0; d < s.layouts[f].modules.length; d++) p = {
                                    m: {},
                                    c: {}
                                }, void 0 !== s.layouts[f].modules[d].m && (p.m = s.layouts[f].modules[d].m), void 0 !== s.layouts[f].modules[d].c && (p.c = s.layouts[f].modules[d].c), u.modules.push(deepCopy(p))
                            }
                            Settings.layouts.push(deepCopy(u))
                        }
                    }
                }(s), this
            },
            save: function() {
                var e = {};
                for (var t in o) o.hasOwnProperty(t) && (e[t] = o[t]);
                return e.layouts = Settings.layouts, JSON.stringify(e)
            },
            saveToStructure: function(e, t) {
                o[e] = t
            }
        }
    }();

function _(e, t) {
    return e
}
var i18n = {
        Account: {
            ru: "счет",
            de: "Konto",
            cn: "帐户",
            pl: "konto",
            vi: "T�i kho?n",
            da: "konto",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Close: {
            ru: "?????????",
            de: "schlie�en",
            cn: "??",
            pl: "zamkn??",
            vi: "?�ng",
            da: "Luk",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Settings: {
            ru: "?????????",
            de: "Einstellungen",
            cn: "??",
            pl: "Ustawienia",
            vi: "C�i ??t",
            da: "Indstillinger",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Layout: {
            ru: "????????????",
            de: "Layout",
            cn: "??",
            pl: "uk?ad",
            vi: "Giao di?n",
            da: "Layout",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Locking: {
            ru: "??????????",
            de: "Sperren",
            cn: "??",
            pl: "Blokowanie",
            vi: "kh�a",
            da: "L�sning",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        "Place Order": {
            ru: "?????????? ?????",
            de: "Bestellung aufgeben",
            cn: "???",
            pl: "Z?�? zam�wienie",
            vi: "??t th? t?",
            da: "Afgiv ordre",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Sending: {
            ru: "??????????",
            de: "Senden",
            cn: "??",
            pl: "wysy?anie",
            vi: "g?i",
            da: "Sende",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Bid: {
            ru: "???",
            de: "Geld",
            cn: "??",
            pl: "oferta",
            vi: "Gi� th?u",
            da: "Bud",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Ask: {
            ru: "???",
            de: "Brief",
            "en-gb": "Offer",
            cn: "?",
            pl: "zapyta?",
            vi: "xin",
            da: "Sp�rg",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Sum: {
            ru: "?????",
            de: "Summe",
            cn: "??",
            pl: "suma",
            vi: "Sum",
            da: "Sum",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Size: {
            ru: "??????",
            de: "Gr��e",
            cn: "??",
            pl: "rozmiar",
            vi: "K�ch th??c",
            da: "St�rrelse",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        }
    },
    Data_Class = function() {
        var e = null;

        function t() {
            var e = {
                    cache: {
                        bars: {},
                        ticks: [],
                        ticker: {}
                    },
                    links: {},
                    currentPeriod: 60,
                    online: [2592e3, 604800, 259200, 86400, 43200, 21600, 14400, 7200, 3600, 1800, 900, 300, 180, 60],
                    offline: [2592e3, 604800, 259200, 86400, 43200, 21600, 14400, 7200, 3600, 1800, 900, 300, 180, 60],
                    lock: {},
                    storage: null,
                    hasStorage: storageSupport(),
                    config: {
                        saveTimeout: 3e4,
                        saveID: -1,
                        tradeCount: 0,
                        tradeSave: 100,
                        tradeBuffer: 1500,
                        ticksMaxAge: 300
                    },
                    self: null,
                    debug: RTBTC.isDebug()
                },
                t = RTBTC.debug,
                n = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1";

            function r() {
                DEBUG && t("Data Setup. " + (e.hasStorage ? "Has" : "Does not have") + " localStorage"), e.hasStorage && (e.storage = window.localStorage),
                    function() {
                        var t, n, r = RTBTC.base(),
                            i = RTBTC.quote();
                        for (e.cache.ticks = [], e.cache.ticker = {}, n = 0; n < e.offline.length; n++) t = e.offline[n], e.cache.bars[t] = [];
                        for (n = 0; n < e.online.length; n++) t = e.online[n], e.links[t] = {
                            prev: null,
                            next: null,
                            last: null
                        }, e.lock[t] = !1;
                        if (o(e.currentPeriod, !0), e.hasStorage) {
                            var s = r + i + "_ticks";
                            if (void 0 !== e.storage[s]) {
                                var a = JSON.parse(e.storage[s]);
                                a.hasOwnProperty("stamp") && a.stamp + e.config.ticksMaxAge > millitime() && (e.cache.ticks = a.ticks)
                            }
                        }
                    }()
            }

            function o(r, o) {
                if (e.lock[r]) DEBUG && t("data: _load: LOCK on period " + r);
                else {
                    e.lock[r] = !0;
                    var i, s, a = RTBTC.base(),
                        l = n + "/klines?symbol=" + RTBTC.base() + "&interval=" + function(e) {
                            switch (e) {
                                case 0:
                                case 60:
                                    return "1m";
                                case 180:
                                    return "3m";
                                case 300:
                                    return "5m";
                                case 900:
                                    return "15m";
                                case 1800:
                                    return "30m";
                                case 3600:
                                    return "1h";
                                case 7200:
                                    return "2h";
                                case 14400:
                                    return "4h";
                                case 21600:
                                    return "6h";
                                case 43200:
                                    return "12h";
                                case 86400:
                                    return "1d";
                                case 259200:
                                    return "3d";
                                case 604800:
                                    return "1w"
                            }
                        }(r);
                    if (null != e.links[r].prev) l += "&endTime=" + e.links[r].prev;
                    else if (!o) return void(e.lock[r] = !1);
                    RTBTC.json(l, (s = r, function(t) {
                        a == RTBTC.base() && function(t, n, r) {
                            var o;
                            if (e.lock[n] = !1, t.length >= 0 && e._onLoaded && e._onLoaded(), t[t.length - 1], t.length > 0 && (e.links[n].prev = t[0][0] - 1e3 * n), RTBTC.trigger("console", "Loaded " + t.length + " chart bars."), 0 != t.length) {
                                for (e.cache.bars[n] = [], o = t.length - 1; o >= 0; o--) e.cache.bars[n].push([t[o][0], Number(t[o][1]), Number(t[o][2]), Number(t[o][3]), Number(t[o][4]), Number(t[o][5]), Number(t[o][7])]);
                                RTBTC.trigger("barclose", n)
                            }
                        }(t, s)
                    }), (i = r, function(n) {
                        var r;
                        r = i, e.lock[r] = !1, DEBUG && t("Data: load failure for period " + r + "!")
                    }))
                }
            }

            function i() {
                if (e.hasStorage) {
                    millitime();
                    var n = RTBTC.exchange() + "_" + RTBTC.base() + RTBTC.quote() + "_ticks",
                        r = e.cache.ticks.slice(0, e.config.tradeBuffer),
                        o = {};
                    if (0 != r.length) {
                        o.stamp = millitime(), o.ticks = r;
                        try {
                            e.storage[n] = JSON.stringify(o)
                        } catch (e) {
                            DEBUG && t("LocalStorage quota exceeded.")
                        }
                        window.clearTimeout(e.config.saveID), e.config.saveID = -1
                    }
                }
            }
            return {
                setup: function(t) {
                    return "undifined" != t && e.online.indexOf(t) >= 0 && (e.currentPeriod = t), r(), this
                },
                self: function(t) {
                    return e.self = t, RTBTC.handler("trade", "data", e.self.onTrade), RTBTC.handler("ticker", "data", e.self.onTicker), RTBTC.handler("instrument", "data", r), this
                },
                onTrade: function(t) {
                    ! function(t) {
                        var n, r = [t.time, t.price, t.amount];
                        e.cache.ticks.splice(0, 0, r);
                        var o, s, a, l = e.cache.ticks.length,
                            c = e.config.tradeBuffer;
                        l > c && e.cache.ticks.splice(c - 1, c - l);
                        for (s in e.cache.bars) e.cache.bars.hasOwnProperty(s) && (o = +s, n = (a = +(a = t.time)) - a % o, 0 == e.cache.bars[s].length || n >= e.cache.bars[s][0][0] + o ? (e.cache.bars[s].splice(0, 0, [n, r[1], r[1], r[1], r[1], r[2]]), RTBTC.trigger("barclose", s)) : n == e.cache.bars[s][0][0] && (r[1] > e.cache.bars[s][0][2] && (e.cache.bars[s][0][2] = r[1]), r[1] < e.cache.bars[s][0][3] && (e.cache.bars[s][0][3] = r[1]), e.cache.bars[s][0][4] = r[1], e.cache.bars[s][0][5] += r[2]));
                        ++e.config.tradeCount % e.config.tradeSave == 0 ? i() : -1 == e.config.saveID && (e.config.saveID = window.setTimeout(i, e.config.saveTimeout))
                    }(t)
                },
                onTicker: function(t) {
                    var n;
                    n = t, e.cache.ticker = n
                },
                onBar: function(t, n) {
                    ! function(t, n) {
                        if (void 0 != e.cache.bars[n])
                            if (e.cache.bars[n].length > 0) {
                                if (t[0] < e.cache.bars[n][0][0]) return;
                                if (t[0] == e.cache.bars[n][0][0] && t[5] <= e.cache.bars[n][0][5]) return;
                                t[0] == e.cache.bars[n][0][0] ? e.cache.bars[n][0] = t : e.cache.bars[n].splice(0, 0, t), RTBTC.trigger("barclose", n)
                            } else e.cache.bars[n].splice(0, 0, t), RTBTC.trigger("barclose", n)
                    }(t, n)
                },
                onLoaded: function(t) {
                    e._onLoaded = t
                },
                data: e.cache,
                loadPrev: function(t) {
                    var n = t;
                    if (-1 == e.online.indexOf(t))
                        for (var r = 0; r < e.online.length; r++)
                            if (e.online[r] <= t) {
                                n = e.online[r];
                                break
                            }
                    o(n, !1)
                },
                internals: e.debug ? function() {
                    return e
                } : function() {
                    return {}
                },
                debug: e.debug ? t : function(e, t) {}
            }
        }
        return new function() {
            this.Build = function() {
                return null == e && ((e = new t).constructor = null), e
            }
        }
    }(),
    Data = Data_Class.Build(),
    digit = 6,
    Indicator = function() {
        var e = {
                type: "",
                shortName: "IND",
                color: null,
                min: 0,
                max: 1,
                p: [],
                ps: [],
                V: new Validator,
                input: null,
                output: [],
                cache: {
                    i0: -1,
                    i1: -1,
                    t0: -1,
                    values: []
                },
                CANDLE: 0,
                OHLC: 1,
                HLC: 2,
                LINE: 3,
                MOUNTAIN: 4,
                BANDS: 5,
                PSAR: 6,
                HIST: 7,
                LBLHIST: 8,
                HISTLINE: 9,
                draw: function() {
                    return []
                },
                statics: function() {
                    return {}
                },
                update: function(e, t, n) {},
                label: function(e) {
                    return ""
                },
                debug: RTBTC.isDebug()
            },
            t = RTBTC.debug;

        function n(t) {
            var n = _("DMI");
            return n += "(" + ~~e.p[0] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += ": ", n += e.output[2][t].toFixed(1), n += ", +DI: ", n += e.output[1][t].toFixed(1), n += ", -DI: ", n += e.output[0][t].toFixed(1)), n
        }

        function r() {
            return [{
                type: e.LINE,
                data: e.output[0]
            }, {
                type: e.LINE,
                data: e.output[1]
            }, {
                type: e.LINE,
                data: e.output[2]
            }]
        }

        function o(t, n, r) {
            var o, i, s, a, l, c, u = 0,
                p = 0,
                f = 0,
                d = 0,
                h = 0,
                g = 0;
            for (e.output = [
                    [0],
                    [0],
                    [0]
                ], e.min = 1 / 0, e.max = -1 / 0, o = Math.min(t.length - 2, r + 150 - 1); o >= n; o--) p = Math.max(t[o][2] - t[o][3], Math.abs(t[o][2] - t[o + 1][4]), Math.abs(t[o][3] - t[o + 1][4])), i = t[o][2] - t[o + 1][2] > t[o + 1][3] - t[o][3] ? Math.max(t[o][2] - t[o + 1][2], 0) : 0, s = t[o + 1][3] - t[o][3] > t[o][2] - t[o + 1][2] ? Math.max(t[o + 1][3] - t[o][3], 0) : 0, u < e.p[0] ? (f += p, d += i, h += s) : (f = f - f / e.p[0] + p, d = d - d / e.p[0] + i, h = h - h / e.p[0] + s), a = 100 * d / f, l = 100 * h / f, c = 100 * Math.abs(a - l) / (a + l + 1e-6), u < e.p[0] ? g = 0 : u < 2 * e.p[0] ? g += c / e.p[0] : g = (g * (e.p[0] - 1) + c) / e.p[0], e.output[0].splice(0, 0, l), e.output[1].splice(0, 0, a), e.output[2].splice(0, 0, g), o < r && (l < e.min && (e.min = l), a < e.min && (e.min = a), g < e.min && (e.min = g), l > e.max && (e.max = l), a > e.max && (e.max = a), g > e.max && (e.max = g)), u++
        }

        function i() {
            return {
                major: [50],
                minor: [30, 70]
            }
        }

        function s() {
            return [{
                type: e.LINE,
                data: e.output[0]
            }, {
                type: e.LINE,
                data: e.output[1]
            }, {
                type: e.LINE,
                data: e.output[2]
            }]
        }

        function a(t, n, r) {
            var o, i, s = e.p[0],
                a = e.p[1],
                l = 0,
                c = 0,
                u = 0,
                p = .05,
                f = [],
                d = 0,
                h = [];
            for (e.output = [
                    [],
                    [],
                    []
                ], o = Math.min(t.length - 1, r + s); o >= n; o--) i = t[o][4], f.splice(0, 0, i), h.splice(0, 0, i * i), c += i, u += h[0], f.length > s && (c -= f.pop(), u -= h.pop()), l = c / f.length, f.length > 1 ? (d = f.length, p = Math.sqrt((d * u - c * c) / (d * (d - 1)))) : p = 0, e.output[0].splice(0, 0, l), e.output[1].splice(0, 0, l + a * p), e.output[2].splice(0, 0, l - a * p)
        }

        function l(t) {
            var n = _("Bands");
            return n += "(" + ~~e.p[0] + ", " + e.p[1].toFixed(1) + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += ": ", n += e.output[2][t].toFixed(digit) + ", ", n += e.output[0][t].toFixed(digit) + ", ", n += e.output[1][t].toFixed(digit)), n
        }

        function c() {
            return [{
                type: e.LINE,
                data: e.output[0]
            }]
        }

        function u() {
            return {
                major: [-200, -100, 100, 200],
                minor: [0]
            }
        }

        function p(t, n, r) {
            var o, i, s, a, l, c = e.p[0],
                u = [],
                p = Math.min(t.length - 1, r + e.p[0]);
            for (e.output = [
                    []
                ], o = p; o >= n; o--) {
                a = (t[o][2] + t[o][3] + t[o][4]) / 3;
                var f = 0;
                for (i = o; i <= Math.min(o + c - 1, p); i++) f += t[i][4];
                var d = f / (Math.min(o + c - 1, p) - o + 1);
                u.splice(0, 0, d), u.length > c && u.pop();
                var h = 0;
                for (s = 0; s <= u.length - 1; s++) h += Math.abs(u[s] - t[o + s][4]);
                var g = h / u.length;
                l = 0 == g ? 0 : (a - d) / g / .015, e.output[0].splice(0, 0, l)
            }
        }

        function f(t) {
            var n = "CCI";
            return n += "(" + ~~e.p[0] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += " " + e.output[0][t].toFixed(digit)), n
        }

        function d() {
            return [{
                type: e.LINE,
                data: e.output[0]
            }, {
                type: e.LINE,
                data: e.output[1]
            }, {
                type: e.LINE,
                data: e.output[2]
            }]
        }

        function h(t, n, r) {
            var o, i, s, a = e.p[0],
                l = Math.min(t.length - 1, r + a),
                c = [],
                u = t[l][2],
                p = t[l][3];
            for (e.output = [
                    [],
                    [],
                    []
                ], o = l; o >= n; o--) {
                if (s = t[o][4], c.splice(0, 0, s), s > u && (u = s), s < p && (p = s), c.length > a)
                    for (c.pop(), p = 1e15, u = -1e15, i = 0; i < c.length; i++) c[i] > u && (u = c[i]), c[i] < p && (p = c[i]);
                e.output[0].splice(0, 0, (u + p) / 2), e.output[1].splice(0, 0, u), e.output[2].splice(0, 0, p)
            }
        }

        function g(t) {
            var n = _("Channel");
            return n += "(" + ~~e.p[0] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += ": ", n += e.output[2][t].toFixed(digit) + ", ", n += e.output[0][t].toFixed(digit) + ", ", n += e.output[1][t].toFixed(digit)), n
        }

        function m() {
            return [{
                type: e.LINE,
                data: e.output
            }]
        }

        function v(t, n, r) {
            var o, i, s = 2 / (e.p[0] + 1),
                a = Math.ceil(Math.log(.01) / Math.log(1 - s));
            for (e.output = [t[Math.min(t.length - 1, r + a + 1)][4]], o = Math.min(t.length - 2, r + a); o >= n; o--) i = s * t[o][4] + (1 - s) * e.output[0], e.output.splice(0, 0, i)
        }

        function b(t) {
            var n = "";
            return t >= 0 && t < e.output.length && (n = _("EMA"), n += "(" + ~~e.p[0] + "): ", n += e.output[t].toFixed(digit)), n
        }

        function y() {
            return [{
                type: e.LINE,
                data: e.output
            }]
        }

        function $(t, n, r) {
            var o, i = e.p[0],
                s = 0,
                a = 0;
            for (e.output = [], o = Math.min(t.length - 1, r + i); o >= n; o--) {
                if (s == i - 1) {
                    a = 0;
                    for (var l = 0; l <= i - 1; l++) a += t[o + l][4];
                    e.output.splice(0, 0, a / i)
                } else s > i - 1 ? (a = e.output[0] * i, a -= t[o + i][4], a += t[o][4], e.output.splice(0, 0, a / i)) : e.output.splice(0, 0, void 0);
                s++
            }
        }

        function x(t) {
            var n = "";
            return t >= 0 && t < e.output.length && (n = _("MA"), n += "(" + ~~e.p[0] + "): ", n += (e.output[t] || 0).toFixed(digit)), n
        }

        function w() {
            return [{
                type: e.LINE,
                data: e.output
            }]
        }

        function k() {
            return {
                major: [-500, 500],
                minor: [0]
            }
        }

        function T(t, n, r) {
            var o, i, s = 2 / (e.p[1] + 1),
                a = Math.ceil(Math.log(.01) / Math.log(1 - s));
            if (e.min = 1 / 0, e.max = -1 / 0, e.output = [], o = Math.min(t.length - 1, r + a + 1), !(--o < 0)) {
                for (i = 0 == t[o][5] ? 0 : e.p[0] * (t[o][2] - t[o][3]) / t[o][5] * (t[o][2] + t[o][3] - t[o + 1][2] - t[o + 1][3]) * .5, e.output.splice(0, 0, i), --o; o >= n; o--)(i = s * (0 == t[o][5] ? 0 : e.p[0] * (t[o][2] - t[o][3]) / t[o][5] * (t[o][2] + t[o][3] - t[o + 1][2] - t[o + 1][3]) * .5) + (1 - s) * i) > e.max && (e.max = i), i < e.min && (e.min = i), e.output.splice(0, 0, i);
                e.max = e.max + .05 * (e.max - e.min)
            }
        }

        function S(t) {
            var n = _("EMV");
            return t >= 0 && t < e.output.length && (n += "(" + ~~e.p[0] + ", " + ~~e.p[1] + "): ", n += e.output[t].toFixed(digit)), n
        }

        function C() {
            return [{
                type: e.LINE,
                data: e.output
            }]
        }

        function E(t, n, r) {
            var o, i, s, a, l = 2 / (e.p[0] + 1),
                c = Math.ceil(Math.log(.01) / Math.log(1 - l));
            for (a = s = i = t[Math.min(t.length - 1, r + c + 1)][4], o = Math.min(t.length - 2, r + c); o >= n; o--) a = l * (s = l * (i = l * t[o][4] + (1 - l) * i) + (1 - l) * s) + (1 - l) * a, e.output.splice(0, 0, a)
        }

        function A(t) {
            var n = _("TRIX");
            return t >= 0 && t < e.output.length && (n += "(" + ~~e.p[0] + "): ", n += e.output[t].toFixed(digit)), n
        }

        function P() {
            return [{
                type: e.HIST,
                data: e.output[0]
            }, {
                type: e.LINE,
                data: e.output[1]
            }, {
                type: e.LINE,
                data: e.output[2]
            }]
        }

        function D() {
            return {
                minor: [0]
            }
        }

        function N(t, n, r) {
            var o, i, s, a = 0,
                l = 0,
                c = 0,
                u = 2 / (1 + e.p[0]),
                p = 2 / (1 + e.p[1]),
                f = 2 / (1 + e.p[2]),
                d = Math.ceil(Math.log(.01) / Math.log(1 - Math.min(u, p))),
                h = t[Math.min(t.length - 1, r + d + 1)][4];
            for (e.output = [
                    [0],
                    [0],
                    [0]
                ], a = h, l = h, c = 0, e.min = 0, e.max = 0, o = Math.min(t.length - 2, r + d); o >= n; o--) s = (i = (a = u * (h = t[o][4]) + (1 - u) * a) - (l = p * h + (1 - p) * l)) - (c = f * i + (1 - f) * c), e.output[0].splice(0, 0, s), e.output[1].splice(0, 0, c), e.output[2].splice(0, 0, i), o < r && (i > e.max && (e.max = i), i < e.min && (e.min = i), s > e.max && (e.max = s), s < e.min && (e.min = s));
            e.max = e.max + .05 * (e.max - e.min), 0 == e.max && 0 == e.min && (e.max = 10, e.min = -10)
        }

        function O(t) {
            var n = _("MACD");
            return n += "(" + ~~e.p[0] + ", " + ~~e.p[1] + ", " + ~~e.p[2] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += ": ", n += e.output[0][t].toFixed(digit) + ", ", n += e.output[1][t].toFixed(digit) + ", ", n += e.output[2][t].toFixed(digit)), n
        }

        function I() {
            return {
                major: [20, 80]
            }
        }

        function M() {
            return [{
                type: e.LINE,
                data: e.output
            }]
        }

        function L() {
            return {
                minor: [0]
            }
        }

        function F(t, n, r) {
            var o;
            if (!(t.length <= 1))
                for (e.output = [t[Math.min(t.length - 2, r - 1)][5] / BTC_INT], e.min = e.output[0], e.max = e.min, o = Math.min(t.length - 2, r - 1); o >= n; o--) t[o][4] > t[o + 1][4] ? e.output.splice(0, 0, e.output[0] + t[o][5] / BTC_INT) : e.output.splice(0, 0, e.output[0] - t[o][5] / BTC_INT), e.output[0] < e.min && (e.min = e.output[0]), e.output[0] > e.max && (e.max = e.output[0])
        }

        function B(t) {
            var n = _("On Balance Volume");
            return t >= 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(1)), n
        }

        function R() {
            return [{
                type: e.PSAR,
                data: e.output
            }]
        }

        function j(t, n, r) {
            var o, i, s, a = !0,
                l = e.p[0],
                c = (e.p[1], Math.min(t.length - 1, r + 100)),
                u = t[c][2],
                p = t[c][3],
                f = u,
                d = p;
            for (e.output = [d], s = c - 1; s >= n; s--) o = t[s][2], i = t[s][3], d = e.output[0] + l * (f - e.output[0]), a ? (o > f && (f = o, (l += e.p[0]) > e.p[1] && (l = e.p[1])), d > i && (a = !1, d = f, l = e.p[0], f = i)) : (i < f && (f = i, (l += e.p[0]) > e.p[1] && (l = e.p[1])), d < o && (a = !0, d = f, l = e.p[0], f = o)), u = o, p = i, e.output.splice(0, 0, d)
        }

        function q(t) {
            var n = "PSAR";
            return n += "(" + e.p[0].toFixed(3) + ", " + e.p[1].toFixed(digit) + ")", t >= 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(digit)), n
        }

        function U() {
            return [{
                type: e.LINE,
                data: e.output
            }]
        }

        function H() {
            return {
                major: [30, 70],
                minor: [50]
            }
        }

        function V(t, n, r) {
            var o, i, s = 0,
                a = [],
                l = [],
                c = 0,
                u = 0,
                p = 0,
                f = !1,
                d = 0;
            for (e.output = [50], o = Math.min(t.length - 2, r + 250); o >= n; o--) {
                if (f = t[o][4] > t[o + 1][4], d = t[o][4] - t[o + 1][4], f ? a.push(d) : l.push(-d), s < e.p[0]) e.output.splice(0, 0, 50);
                else if (s == e.p[0]) {
                    for (i = 0; i < a.length; i++) c += a[i];
                    for (0 == a.length ? c = 0 : c /= a.length, i = 0; i < l.length; i++) u += l[i];
                    0 == l.length ? u = 0 : u /= l.length, p = c / (u + 1e-8), e.output.splice(0, 0, 100 - 100 / (1 + p))
                } else p = (c = (c * (e.p[0] - 1) + (f ? d : 0)) / e.p[0]) / ((u = (u * (e.p[0] - 1) + (f ? 0 : -d)) / e.p[0]) + 1e-8), e.output.splice(0, 0, 100 - 100 / (1 + p));
                s++
            }
        }

        function z(t) {
            var n = _("RSI");
            return t >= 0 && t < e.output.length && (n += "(" + ~~e.p[0] + "): ", n += e.output[t].toFixed(1)), n
        }

        function W() {
            return [{
                type: e.LINE,
                data: e.output[0]
            }, {
                type: e.LINE,
                data: e.output[1]
            }]
        }

        function G() {
            return {
                major: [20, 80],
                minor: [50]
            }
        }

        function Y(t, n, r) {
            var o, i, s = [],
                a = 1e15,
                l = -1e15,
                c = 0,
                u = 0,
                p = 2 / (e.p[2] + 1),
                f = 2 / (e.p[3] + 1);
            e.output = [
                [],
                []
            ];
            var d, h, g = 0,
                m = [],
                v = [],
                b = 0,
                y = 0,
                $ = 0,
                x = !1,
                w = 0;
            for (d = Math.min(t.length - 2, r + 250); d >= n; d--) {
                if (x = t[d][4] > t[d + 1][4], w = t[d][4] - t[d + 1][4], x ? m.push(w) : v.push(-w), g < e.p[0]) $ = 50;
                else if (g == e.p[0]) {
                    for (h = 0; h < m.length; h++) b += m[h];
                    for (0 == m.length ? b = 0 : b /= m.length, h = 0; h < v.length; h++) y += v[h];
                    0 == v.length ? y = 0 : y /= v.length, $ = 100 - 100 / (1 + b / (y + 1e-8))
                } else $ = 100 - 100 / (1 + (b = (b * (e.p[0] - 1) + (x ? w : 0)) / e.p[0]) / ((y = (y * (e.p[0] - 1) + (x ? 0 : -w)) / e.p[0]) + 1e-8));
                if (g++, s.splice(0, 0, $), $ > l && (l = $), $ < a && (a = $), s.length > e.p[1] && ((i = s.pop()) >= l || i <= a))
                    for (a = 1e15, l = -1e15, o = 0; o < s.length; o++) s[o] > l && (l = s[o]), s[o] < a && (a = s[o]);
                u = f * (c = p * (l == a ? 100 : 100 * ($ - a) / (l - a)) + (1 - p) * c) + (1 - f) * u, e.output[0].splice(0, 0, c), e.output[1].splice(0, 0, u)
            }
        }

        function K(t) {
            var n = "STORSI";
            return n += "(" + ~~e.p[0] + ", " + ~~e.p[1] + ", " + ~~e.p[2] + ", " + ~~e.p[3] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += " K:" + e.output[0][t].toFixed(digit) + ", ", n += " D:" + e.output[1][t].toFixed(digit)), n
        }

        function Q() {
            return [{
                type: e.LINE,
                data: e.output
            }]
        }

        function X(t, n, r) {
            var o, i, s = [],
                a = 0,
                l = e.p[0];
            for (e.output = [], o = Math.min(t.length - 1, r + l); o >= n; o--) i = t[o][4], s.length < l ? (s.push(i), a = (a * (s.length - 1) + i) / s.length) : (a -= s[0] / l, a += i / l, s.splice(0, 1), s.push(i)), e.output.splice(0, 0, a)
        }

        function J(t) {
            var n = _("SMA");
            return t >= 0 && t < e.output.length && (n += "(" + ~~e.p[0] + "): ", n += e.output[t].toFixed(digit)), n
        }

        function Z() {
            return [{
                type: e.LINE,
                data: e.output[0]
            }, {
                type: e.LINE,
                data: e.output[1]
            }]
        }

        function ee() {
            return {
                major: [20, 80],
                minor: [50]
            }
        }

        function te(t, n, r) {
            var o, i, s, a, l = [],
                c = 1e15,
                u = -1e15,
                p = 0,
                f = 0,
                d = 2 / (e.p[1] + 1),
                h = 2 / (e.p[2] + 1);
            for (e.output = [
                    [],
                    []
                ], o = Math.min(t.length - 1, r + e.p[0]); o >= n; o--) {
                if (s = t[o][4], l.splice(0, 0, s), s > u && (u = s), s < c && (c = s), l.length > e.p[0] && ((a = l.pop()) >= u || a <= c))
                    for (c = 1e15, u = -1e15, i = 0; i < l.length; i++) l[i] > u && (u = l[i]), l[i] < c && (c = l[i]);
                f = h * (p = d * (u == c ? 100 : 100 * (s - c) / (u - c)) + (1 - d) * p) + (1 - h) * f, e.output[0].splice(0, 0, p), e.output[1].splice(0, 0, f)
            }
        }

        function ne(t) {
            var n = "STO";
            return t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += " %K(" + ~~e.p[0] + ", " + ~~e.p[1] + "): ", n += e.output[0][t].toFixed(1), n += " %D(" + ~~e.p[2] + "): ", n += e.output[1][t].toFixed(1)), n
        }

        function re() {
            return [{
                type: e.LINE,
                data: e.output[0]
            }, {
                type: e.LINE,
                data: e.output[1]
            }, {
                type: e.LINE,
                data: e.output[2]
            }]
        }

        function oe() {
            return {
                major: [0, 100],
                minor: [50]
            }
        }

        function ie(t, n, r) {
            var o, i, s, a, l = [],
                c = 1e15,
                u = -1e15,
                p = 0,
                f = 0,
                d = 0,
                h = 1 / e.p[1],
                g = 1 / e.p[2];
            for (e.output = [
                    [],
                    [],
                    []
                ], o = Math.min(t.length - 1, r + e.p[0]); o >= n; o--) {
                if (s = t[o][4], l.splice(0, 0, s), s > u && (u = s), s < c && (c = s), l.length > e.p[0] && ((a = l.pop()) >= u || a <= c))
                    for (c = 1e15, u = -1e15, i = 0; i < l.length; i++) l[i] > u && (u = l[i]), l[i] < c && (c = l[i]);
                d = 3 * (p = h * (u == c ? 100 : 100 * (s - c) / (u - c)) + (1 - h) * p) - 2 * (f = g * p + (1 - g) * f), e.output[0].splice(0, 0, p), e.output[1].splice(0, 0, f), e.output[2].splice(0, 0, d)
            }
        }

        function se(t) {
            var n = "KDJ";
            return n += "(" + ~~e.p[0] + ", " + ~~e.p[1] + ", " + ~~e.p[2] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += " K:" + e.output[0][t].toFixed(digit) + ", ", n += " D:" + e.output[1][t].toFixed(digit) + ", ", n += " J:" + e.output[2][t].toFixed(digit)), n
        }

        function ae(t, n, r) {
            var o, i;
            if (!(void 0 === t || t.length <= n)) {
                for (e.max = -1 / 0, o = 0; o <= r - n; o++) {
                    (i = t[o + n][5] / BTC_INT) > e.max && (e.max = i);
                    var s = !0;
                    s = t[o + n][4] >= t[o + n][1] && !(t[o + n][1] == t[o + n][4] && t[o + n + 1] && t[o + n + 1][4] > t[o + n][4]), e.output.push([i, s])
                }
                0 == e.max ? e.max = 10 : e.max = e.max
            }
        }

        function le() {
            return [{
                type: e.LBLHIST,
                data: e.output
            }]
        }

        function ce(t) {
            var n = "";
            return t >= 0 && t < e.output.length && (n = _(getLang().volume), n += " " + e.output[t][0].toFixed(4)), n
        }

        function ue() {
            return [{
                type: e.LINE,
                data: e.output
            }]
        }

        function pe(t, n, r) {
            var o, i = 0,
                s = 0,
                a = 0;
            for (e.output = [], o = Math.min(t.length - 1, r + e.p[0]); o >= n; o--) i += t[o][4] * (t[o][5] / BTC_INT), s += t[o][5] / BTC_INT, a >= e.p[0] && (i -= t[o + e.p[0]][4] * (t[o + e.p[0]][5] / BTC_INT), s -= t[o + e.p[0]][5] / BTC_INT), e.output.splice(0, 0, i / s), a++
        }

        function fe(t) {
            var n = "VWAP";
            return n += "(" + ~~e.p[0] + ")", t >= 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(digit)), n
        }

        function de() {
            return {
                major: [20, 80],
                minor: [50]
            }
        }

        function he() {
            return [{
                type: e.LINE,
                data: e.output
            }]
        }

        function ge(t, n, r) {
            var o, i, s, a, l = [],
                c = 1e15,
                u = -1e15,
                p = 0;
            for (e.output = [], o = Math.min(t.length - 1, r + e.p[0]); o >= n; o--) {
                if (s = t[o][4], l.splice(0, 0, s), s > u && (u = s), s < c && (c = s), l.length > e.p[0] && ((a = l.pop()) >= u || a <= c))
                    for (c = 1e15, u = -1e15, i = 0; i < l.length; i++) l[i] > u && (u = l[i]), l[i] < c && (c = l[i]);
                p = u == c ? 100 : 100 * (s - c) / (u - c), e.output.splice(0, 0, p)
            }
        }

        function me(t) {
            var n = "Wm %R";
            return n += "(" + ~~e.p[0] + ")", t >= 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(1)), n
        }

        function ve() {
            return {
                major: [-5, 5],
                minor: [0]
            }
        }

        function be(t) {
            var n = _("MTM");
            return n += "(" + ~~e.p[0] + ")", t >= 0 && e.output.length > 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(digit)), n
        }

        function ye() {
            return [{
                type: e.LINE,
                data: e.output
            }]
        }

        function $e(t, n, r) {
            var o;
            for (e.min = 1 / 0, e.max = -1 / 0, e.output = [], o = Math.min(t.length - 1 - e.p[0], r); o >= n; o--) {
                var i = t[o][4] - t[o + e.p[0]][4];
                i > e.max && (e.max = i), i < e.min && (e.min = i), e.output.splice(0, 0, i)
            }
            e.max = e.max + .05 * (e.max - e.min)
        }

        function xe() {
            return [{
                type: e.LINE,
                data: e.output
            }]
        }

        function we(t, n, r) {
            var o = 0,
                i = 0;
            e.output = [];
            for (var s = Math.min(t.length - 1, r); s >= n; s--) o += t[s][6], 0 == (i += t[s][5]) ? e.output.splice(0, 0, t[s][4]) : e.output.splice(0, 0, o / i)
        }

        function ke(t) {
            var n = "";
            return t >= 0 && t < e.output.length && (n = _("AVL"), n += e.output[t].toFixed(digit)), n
        }

        function Te() {
            return [{
                type: e.LINE,
                data: e.output
            }]
        }

        function Se(t, n, r) {
            var o = 0,
                i = 0;
            e.output = [];
            for (var s = Math.min(t.length - 1, r); s >= n; s--) o += (t[s][1] + t[s][2] + t[s][3] + t[s][4]) / 4 * t[s][5], 0 == (i += t[s][5]) ? e.output.splice(0, 0, t[s][4]) : e.output.splice(0, 0, o / i)
        }

        function Ce(t) {
            var n = "";
            return t >= 0 && t < e.output.length && (n = _("AVL"), n += e.output[t].toFixed(digit)), n
        }
        return {
            build: function(Ee, Ae) {
                return function(Ee) {
                        switch (DEBUG && t("Indicator: building " + Ee), Ee) {
                            case "dmi":
                                e.shortName = "DMI", e.p = [14], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.label = n, e.draw = r, e.update = o;
                                break;
                            case "arn":
                                e.shortName = "Aroon", e.min = 0, e.max = 100, e.p = [25], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.statics = i;
                                break;
                            case "atr":
                                e.shortName = "ATR", e.p = [14], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }];
                                break;
                            case "bnd":
                                e.shortName = "Bands", e.p = [21, 2], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }, {
                                    label: _("z Score"),
                                    type: e.V.FLOAT,
                                    bounds: [.1, 1 / 0],
                                    inc: .1,
                                    places: 1
                                }], e.draw = s, e.update = a, e.label = l;
                                break;
                            case "cci":
                                e.shortName = "CCI", e.min = -250, e.max = 250, e.p = [20], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.draw = c, e.statics = u, e.update = p, e.label = f;
                                break;
                            case "dcn":
                                e.shortName = "Channels", e.p = [21], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.draw = d, e.update = h, e.label = g;
                                break;
                            case "ema":
                                e.shortName = "EMA", e.p = [5], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = m, e.update = v, e.label = b;
                                break;
                            case "ma":
                                e.shortName = "MA", e.p = [5], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = y, e.update = $, e.label = x;
                                break;
                            case "trix":
                                e.shortName = "TRIX", e.p = [9], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = C, e.update = E, e.label = A;
                                break;
                            case "macd":
                                e.shortName = "MACD", e.p = [12, 26, 9], e.ps = [{
                                    label: "Short EMA",
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }, {
                                    label: "Long EMA",
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }, {
                                    label: "Signal",
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.label = O, e.draw = P, e.statics = D, e.update = N;
                                break;
                            case "mfi":
                                e.shortName = "MFI", e.min = 0, e.max = 100, e.p = [14], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.statics = I;
                                break;
                            case "obv":
                                e.shortName = "OBV", e.p = [], e.draw = M, e.statics = L, e.update = F, e.label = B;
                                break;
                            case "emv":
                                e.shortName = "EMV", e.p = [1e4, 14], e.ps = [{
                                    label: "除数",
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }, {
                                    label: "长度",
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.draw = w, e.statics = k, e.update = T, e.label = S;
                                break;
                            case "psar":
                                e.shortName = "PSAR", e.p = [.02, .2], e.ps = [{
                                    label: "AF",
                                    type: e.V.FLOAT,
                                    bounds: [0, 1],
                                    inc: .01,
                                    places: 3
                                }, {
                                    label: "Max AF",
                                    type: e.V.FLOAT,
                                    bounds: [0, 1],
                                    inc: .01,
                                    places: 3
                                }], e.draw = R, e.update = j, e.label = q;
                                break;
                            case "rsi":
                                e.shortName = "RSI", e.min = 0, e.max = 100, e.p = [14], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.draw = U, e.statics = H, e.update = V, e.label = z;
                                break;
                            case "storsi":
                                e.shortName = "STORSI", e.min = 0, e.max = 100, e.p = [14, 9, 3, 3], e.ps = [{
                                    label: "RSI长度",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }, {
                                    label: "Stoch长度",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }, {
                                    label: "平滑%K",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }, {
                                    label: "平滑%D",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = W, e.statics = G, e.update = Y, e.label = K;
                                break;
                            case "sma":
                                e.shortName = "SMA", e.p = [21], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.draw = Q, e.update = X, e.label = J;
                                break;
                            case "sto":
                                e.shortName = "STO", e.min = 0, e.max = 100, e.p = [14, 3, 3], e.ps = [{
                                    label: "长度",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }, {
                                    label: "平滑%K",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }, {
                                    label: "平滑%D",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = Z, e.statics = ee, e.update = te, e.label = ne;
                                break;
                            case "kdj":
                                e.shortName = "KDJ", e.min = -50, e.max = 150, e.p = [9, 3, 3], e.ps = [{
                                    label: "%K",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }, {
                                    label: "%D",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }, {
                                    label: "%J",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = re, e.statics = oe, e.update = ie, e.label = se;
                                break;
                            case "vol":
                                e.shortName = "VOL", e.min = 0, e.update = ae, e.draw = le, e.label = ce;
                                break;
                            case "vwap":
                                e.shortName = "VWAP", e.p = [14], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = ue, e.update = pe, e.label = fe;
                                break;
                            case "wpr":
                                e.shortName = "Wm %R", e.min = 0, e.max = 100, e.p = [14], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = he, e.statics = de, e.update = ge, e.label = me;
                                break;
                            case "mtm":
                                e.shortName = "MTM", e.p = [14], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.label = be, e.draw = ye, e.statics = ve, e.update = $e;
                                break;
                            case "avl":
                                e.shortName = "AVL", e.draw = xe, e.update = we, e.label = ke;
                                break;
                            case "avlIndex":
                                e.shortName = "AVL", e.draw = Te, e.update = Se, e.label = Ce
                        }
                        e.type = Ee
                    }(Ee),
                    function(t) {
                        var n;
                        if (void 0 !== t && t.hasOwnProperty("length"))
                            for (n = 0; n < e.ps.length; n++) t.length <= n || t[n] < e.ps[n].bounds[0] || t[n] > e.ps[n].bounds[1] || (e.p[n] = t[n])
                    }(Ae), this
            },
            reset: function() {
                return e.output = [], this
            },
            bounds: function() {
                return [e.min, e.max]
            },
            update: function(t, n, r) {
                if (e.output = [], void 0 !== t && t.hasOwnProperty("length") && 0 != t.length) return e.update(t, n, r), this
            },
            draw: function() {
                return e.draw()
            },
            statics: function() {
                return e.statics()
            },
            label: function(t) {
                return e.label(t)
            },
            color: function(t) {
                return void 0 === t ? e.color : (e.color = t, this)
            },
            shortName: function() {
                return e.shortName
            },
            settings: function() {
                return e.p
            },
            paramSettings: function() {
                return e.ps
            },
            params: function(e) {},
            paramUpdate: function(t, n) {
                return e.p[t] = n, this
            },
            internals: e.debug ? function() {
                return e
            } : function() {
                return null
            }
        }
    },
    mobile, Chart = function() {
        var e = {
                element: "",
                parent: null,
                module: null,
                self: null,
                canvas: {
                    base: null,
                    bg: null,
                    main: null,
                    fg: null,
                    orders: null,
                    lbl: null,
                    i: null,
                    line: null
                },
                w: 0,
                h: 0,
                mode: {
                    current: 0,
                    avail: ["Time Bars"],
                    display: 0,
                    avail_display: ["Candle", "OHLC", "HLC", "Line"]
                },
                TIME_BAR: 0,
                CANDLE: 0,
                OHLC: 1,
                HLC: 2,
                LINE: 3,
                MOUNTAIN: 4,
                BANDS: 5,
                PSAR: 6,
                HIST: 7,
                LBLHIST: 8,
                period: {
                    current: 13,
                    string: "M15",
                    avail: [2592e3, 604800, 259200, 86400, 43200, 28800, 21600, 14400, 7200, 3600, 2700, 1800, 900, 300, 180, 60, 0]
                },
                bars: {
                    visible: -1,
                    offset: 0,
                    blank: 0,
                    endpad: 0,
                    data: [],
                    noload: {},
                    startTime1: "9:30:00",
                    endTime1: "11:30:00",
                    startTime2: "13:00:00",
                    endTime2: "15:00:00",
                    ticks: [],
                    fixTime: !1
                },
                slots: [{
                    main: !0,
                    px: 0,
                    h: 50,
                    u: [{
                        t: "ema",
                        i: null,
                        s: [5]
                    }],
                    o: []
                }, {
                    t: "vol",
                    i: null,
                    px: 5,
                    h: 10,
                    s: []
                }],
                resize: {
                    avail: 0,
                    slots: [],
                    pct: []
                },
                price: {
                    high: 100,
                    low: 50,
                    range: 50,
                    bid: NaN,
                    ask: NaN
                },
                log: {
                    m: 0,
                    b: 0,
                    b10: 0
                },
                px: {
                    pad: 5,
                    lbl: {
                        w: 65,
                        h: 14,
                        tick: 5,
                        halftick: 2,
                        font: 11
                    },
                    bar: {
                        width: 7,
                        dx: 4,
                        spacing: 1
                    },
                    price: 1,
                    crosshairs: {
                        x: 0,
                        y: 0
                    },
                    slotmin: 50
                },
                flags: {
                    redraw: {
                        base: !0,
                        main: !0,
                        underlay: !0,
                        overlay: !0,
                        inds: !0
                    },
                    recompute: !0,
                    widget: !1
                },
                mouse: {
                    down: !1,
                    zoom: !1,
                    w0: null,
                    x: 0,
                    y: 0,
                    bar: null,
                    sx: 0,
                    sy: 0,
                    origOffset: 0,
                    origSpacing: 1,
                    resize: !1,
                    re_slot: 0,
                    re_slots: {
                        px0: 0,
                        h0: 0,
                        px1: 0,
                        h1: 0
                    },
                    slot: -1
                },
                colors: Colors.c,
                lastColorIndex: 0,
                defaultColors: null,
                SOLID: 0,
                DOTTED: 1,
                DASHED: 2,
                DASHDOT: 3,
                font: {
                    precision: 2,
                    labels: mobile ? '10px/1.0em  "Microsoft YaHei", Arial, sans-serif' : '11px/1.0em  Consolas, "Courier New", monospace',
                    size: 11,
                    lineHeight: 1,
                    face: ' "Microsoft YaHei", Consolas, "Courier New", monospace',
                    indicators: '10px/1.0em  "Microsoft YaHei", Arial, sans-serif',
                    heading: '12px/1.0em  "Microsoft YaHei", Arial, sans-serif',
                    headingBold: 'bold 12px/1.0em  "Microsoft YaHei", Arial, sans-serif',
                    headingSize: 12
                },
                watermark: "bijietech.com",
                settings: {
                    repaint: !0,
                    grid: !0,
                    crosshairs: !0,
                    icontrols: !0,
                    bidask: !0,
                    logscale: !1,
                    userorders: !1
                },
                indicators: {
                    macd: "MACD",
                    kdj: "KDJ",
                    cci: "Commodity Channel Index",
                    dmi: "Directional Movement Index",
                    obv: "On-Balance Volume",
                    rsi: "Relative Strength Index",
                    sto: "Stochastic Oscillator",
                    storsi: "Stochastic RSI",
                    vol: "Volume",
                    wpr: "Williams %R",
                    emv: "Ease of movement value",
                    mtm: "Momentum"
                },
                mobileIndicators: ["macd", "kdj", "cci", "dmi", "obv", "rsi", "sto", "storsi", "wpr", "emv", "mtm", "avl"],
                currentIndicator: 0,
                overlays: {
                    ema: "Exponential Moving Average",
                    bnd: "Bollinger Bands &reg;",
                    psar: "Parabolic SAR",
                    dcn: "Price Channels",
                    sma: "Simple Moving Average",
                    vwap: "Volume Weighted Average Price",
                    trix: "Triple Exponentially Smoothed Average",
                    avl: "avl",
                    ma: "ma"
                },
                mobileOverlays: ["ema", "bnd", "psar", "dcn", "sma", "vwap", "trix", "avl", "ma"],
                currentOverlay: 0,
                lastPinchTime: -1,
                lastZoomTime: -1,
                startTouchCoords: [],
                crossHairH: !0,
                setShowRateOnLeft: !1,
                data: {},
                curIndex: 1,
                offset: 0,
                preClose: 0,
                showMainCrosshairs: !0,
                stopEvent: !1,
                preTradingDay: 0,
                notClicked: !0,
                debug: RTBTC.isDebug()
            },
            t = RTBTC.debug;

        function n() {
            var n, r = (e.slots.length - 1) * (2 + e.px.pad) + 1 + e.px.lbl.h,
                o = e.h - r,
                i = -1;
            for (n = 0; n < e.slots.length; n++) e.slots[n].hasOwnProperty("main") ? e.slots[n].h = (e.mainSlotHeightPercent || .67) * o | 0 : e.slots[n].h = (1 - e.mainSlotHeightPercent || .33) * o / (e.slots.length - 1) | 0, e.slots[n].px = i, i += e.slots[n].h + 2 + e.px.pad + 1, DEBUG && t("Slot " + n + " height: " + e.slots[n].h + ", px: " + e.slots[n].px)
        }

        function r(t) {
            if (n(), void 0 !== t) {
                var r = new Validator,
                    o = (new Validator).create(r.INT),
                    i = (new Validator).create(r.BOOL);
                t.hasOwnProperty("r") && (e.settings.repaint = i.set(e.settings.repaint).set(t.r).get()), t.hasOwnProperty("g") && (e.settings.grid = i.set(e.settings.grid).set(t.g).get()), t.hasOwnProperty("c") && (e.settings.crosshairs = i.set(e.settings.crosshairs).set(t.c).get()), t.hasOwnProperty("k") && (e.settings.icontrols = i.set(e.settings.icontrols).set(t.k).get()), t.hasOwnProperty("b") && (e.settings.bidask = i.set(e.settings.bidask).set(t.b).get()), t.hasOwnProperty("l") && (e.settings.logscale = i.set(e.settings.logscale).set(t.l).get()), t.hasOwnProperty("o") && (e.settings.userorders = i.set(e.settings.userorders).set(t.o).get()), t.hasOwnProperty("time") && (e.settings.time = i.set(e.settings.userorders).set(t.time).get()), t.hasOwnProperty("m") && (e.mode.current = o.set(e.mode.current).set(t.m).get()), t.hasOwnProperty("d") && (e.mode.display = o.set(e.mode.display).set(t.d).get()), t.hasOwnProperty("w") && (e.px.bar.width = o.set(e.px.bar.width).set(t.w).get()), t.hasOwnProperty("s") && (e.px.bar.spacing = o.set(e.px.bar.spacing).set(t.s).get());
                for (var s = o.set(e.period.avail[e.period.current]).set(t.t).get(), a = 0; a < e.period.avail.length; a++) e.period.avail[a] == s && (e.period.current = a);
                if (t.hasOwnProperty("i")) {
                    var l, c, u, p, f = [],
                        d = ["m", "p", "h"],
                        h = [],
                        g = [];
                    for (a in e.indicators) e.indicators.hasOwnProperty(a) && h.push(a);
                    for (a in e.overlays) e.overlays.hasOwnProperty(a) && g.push(a);
                    for (a = 0; a < t.i.length; a++) {
                        for (c = !0, l = 0; l < d.length; l++) c = c && t.i[a].hasOwnProperty(d[l]);
                        if (c) {
                            if (u = {
                                    px: ~~+t.i[a].p,
                                    h: ~~+t.i[a].h
                                }, t.i[a].m) {
                                if (u.main = !0, u.o = [], u.u = [], t.i[a].hasOwnProperty("o"))
                                    for (l = 0; l < t.i[a].o.length; l++) p = null, t.i[a].o[l].hasOwnProperty("t") && g.indexOf(t.i[a].o[l].t) >= 0 && t.i[a].o[l].hasOwnProperty("s") && (t.i[a].o[l].hasOwnProperty("c") && (p = t.i[a].o[l].c), u.o.push({
                                        t: t.i[a].o[l].t,
                                        i: null,
                                        s: t.i[a].o[l].s,
                                        c: p
                                    }));
                                if (t.i[a].hasOwnProperty("u"))
                                    for (l = 0; l < t.i[a].u.length; l++) t.i[a].u[l].hasOwnProperty("t") && g.indexOf(t.i[a].u[l].t) >= 0 && t.i[a].u[l].hasOwnProperty("s") && (t.i[a].u[l].hasOwnProperty("c") && (p = t.i[a].u[l].c), u.u.push({
                                        t: t.i[a].u[l].t,
                                        i: null,
                                        s: t.i[a].u[l].s,
                                        c: p
                                    }))
                            } else {
                                if (!(h.indexOf(t.i[a].t) >= 0 && t.i[a].hasOwnProperty("r"))) continue;
                                u.t = t.i[a].t, u.i = null, u.s = t.i[a].r
                            }
                            f.push(u)
                        }
                    }
                    f.length > 0 && (e.slots = f, n())
                }
            }
        }

        function o(t) {
            var n = t[0],
                r = Ue();
            0 == e.bars.data.length || 0 == r || n >= e.bars.data[0][0] + 1e3 * r ? (e.bars.data.splice(0, 0, [n, t[1], t[1], t[1], t[1], t[2]]), e.flags.recompute = !0) : (t[1] > e.bars.data[0][2] && (e.bars.data[0][2] = t[1]), t[1] < e.bars.data[0][3] && (e.bars.data[0][3] = t[1]), e.bars.data[0][4] = t[1], e.bars.data[0][5] += t[2], e.flags.recompute = !0), (t[1] > e.highPrice || t[1] < e.lowPrice || e.bars.data[0][5] > e.maxVol) && (e.flags.recompute = !0)
        }

        function i(e) {
            var t = parseFloat(e[0]),
                n = parseFloat(e[1]),
                r = parseFloat(e[2]);
            return !(isNaN(t) || isNaN(n) || isNaN(r))
        }

        function s() {
            $(e.element).append($('<div id="chartCtrlFixed" class="chartCtrl" hidden><div class="content"><div>时间:<span id="date"></span></div><div>开盘:<span id="open"></span></div><div>最高:<span id="high"></span></div><div>最低:<span id="low"></span></div><div>收盘:<span  id="close"></span></div><div>涨幅:<span id="updownPercent" ></span></div><div>振幅:<span  id="updown1"></span></div><div>成交量:<span  id="volume"></span></div><div>成交额:<span  id="quoteVolume"></span></div><div>换手率:<span  id="hand"></span></div></div></div>'));
            $(e.element).mouseover(function() {
                e.mode.display, e.CANDLE
            }), $(e.element).mouseout(function() {
                e.mode.display == e.CANDLE && $("#chartCtrlFixed").hide()
            }), e.updateXFK = function(t) {
                if (t) o = n = [(new Date).getTime(), 0, 0, 0, 0, 0];
                else var n = e.bars.data[e.curIndex],
                    r = e.curIndex + 1 >= e.bars.data.length ? e.curIndex : e.curIndex + 1,
                    o = e.bars.data[r];
                var i, s = e.period.avail[e.period.current];
                s > 0 && s <= 3600 ? i = new Date(n[0]).Format("MM-dd hh:mm") : 86400 == s ? i = new Date(n[0]).Format("yyyy/MM/dd/") + function(e) {
                    var t = "";
                    switch (e) {
                        case 0:
                            t = "日";
                            break;
                        case 1:
                            t = "一";
                            break;
                        case 2:
                            t = "二";
                            break;
                        case 3:
                            t = "三";
                            break;
                        case 4:
                            t = "四";
                            break;
                        case 5:
                            t = "五";
                            break;
                        case 6:
                            t = "六"
                    }
                    return t
                }(new Date(n[0]).getDay()) : 604800 == s && (i = new Date(n[0]).Format("yyyy-MM-dd")), t && (i = "--"), $("#chartCtrlFixed #date").text(i), $("#chartCtrlFixed #open").text(t ? "--" : ae(n[1])), $("#chartCtrlFixed #open").css("color", n[1] < o[4] ? "#ff4056" : n[1] > o[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #high").text(t ? "--" : ae(n[2])), $("#chartCtrlFixed #high").css("color", n[2] < o[4] ? "#ff4056" : n[2] > o[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #low").text(t ? "--" : ae(n[3])), $("#chartCtrlFixed #low").css("color", n[3] < o[4] ? "#ff4056" : n[3] > o[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #close").text(t ? "--" : ae(n[4])), $("#chartCtrlFixed #close").css("color", n[4] < o[4] ? "#ff4056" : n[4] > o[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #updownPercent").text(t ? "--" : (100 * (n[4] - o[4]) / o[4]).toFixed(2) + "%"), $("#chartCtrlFixed #updownPercent").css("color", n[4] < o[4] ? "#ff4056" : n[4] > o[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #updown1").text(t ? "--" : (100 * (n[2] - n[3]) / o[4]).toFixed(2) + "%"), $("#chartCtrlFixed #volume").text(t ? "--" : n[5].toFixed(0)), $("#chartCtrlFixed #hand").text(t ? "--" : (100 * (e.data.circulation ? n[5] / e.data.circulation : 0)).toFixed(6) + "%")
            }
        }

        function a(n) {
            var r, o, i = [],
                s = 0,
                a = $("<div/>").addClass("control-" + n);
            return i[s++] = '<span class="settings-popout">', i[s++] = '<span class="icon settings">', i[s++] = '<i class="icon-wrench"></i></span>', i[s++] = "</span>", a.addClass("icontrol").html(i.join("")).css("top", e.slots[n].px + 3 + "px"), a.hide(), 0 == n ? $("span.move-up i", a).addClass("disable") : $("span.move-up", a).tooltip({
                placement: "right",
                title: _("Move Up")
            }).click((r = n, function() {
                ! function(n, r) {
                    if (!(e.slots.length <= 1) && (0 != n || !r) && (n != e.slots.length - 1 || r)) {
                        DEBUG && t("Moving indicator in slot " + n + " " + (r ? "up" : "down")), $(".icontrol", e.element).each(function(e, t) {
                            $(t).data("popped") && l(e)
                        });
                        var o, i, s = r ? n - 1 : n + 1;
                        i = e.slots[s].px, e.slots[s].px = e.slots[n].px, e.slots[n].px = i, o = e.slots.splice(n, 1)[0], e.slots.splice(s, 0, o), Be(), qe()
                    }
                }(r, !0)
            })), $("span.settings", a).tooltip({
                placement: "right",
                title: _("Settings")
            }).click((o = n, function() {
                l(o)
            })), n == e.slots.length - 1 && $("span.move-down i", a).addClass("disable"), a
        }

        function l(t) {
            if (!(e.slots.length <= t || t < 0 || $(".popout .extra-settings").length > 0)) {
                var n = $(".control-" + t, e.element);
                if (n.click(function(e) {
                        e.stopPropagation()
                    }), $(document).click(function() {
                        $(".extra-settings", n).remove(), $(".colorpicker").hide(), n.data("popped", !1)
                    }), n.data("popped")) return $(".extra-settings", n).remove(), n.removeClass("popout"), n.data("popped", !1), void $(".settings", n).tooltip("enable");
                var r, o, i = $("<span/>").addClass("extra-settings"),
                    s = [];
                if (e.slots[t].hasOwnProperty("main")) {
                    var a, c, f, d = $("<div/>").addClass("underlays sortable"),
                        m = $("<div/>").addClass("overlays sortable"),
                        b = $("<div/>").addClass("rows");
                    for (b.append($("<div/>").addClass("title").html(_("Behind Price"))), S = 0; S < e.slots[t].u.length; S++) {
                        for (c = C(t, S, "u"), "bidask" == e.slots[t].u[S].t && (c = null), f = uniqueID(), a = $("<div/>").addClass("row").addClass("row1").addClass("u" + S).data({
                                j: S,
                                place: "u"
                            }).append($("<span/>").addClass("icon reorder-icon").append($("<i/>").addClass("icon-reorder").css("color", c).attr("id", f))).append($("<u/>").html(e.slots[t].u[S].i.shortName() + ": ")), y = e.slots[t].u[S].i.settings(), x = e.slots[t].u[S].i.paramSettings(), w = "", 0 == y.length && a.append($("<u/>").text(" --- ")), T = 0; T < y.length; T++) w = uniqueID(), a.append($("<span/>").addClass("param-field").append($("<strong/>").text(x[T].hasOwnProperty("label") ? x[T].label : "P" + (T + 1))).append($("<input/>").attr("type", "text").val(y[T]).addClass("param-input").attr("id", w))), s.push({
                            val: y[T],
                            sel: "#" + w,
                            set: x[T],
                            fn: function(n, r, o) {
                                return function(i) {
                                    "function" == typeof n && n(r, i), e.slots[t].u[o].s = [i], v()
                                }
                            }(e.slots[t].u[S].i.paramUpdate, T, S)
                        });
                        w = uniqueID(), a.append($("<span/>").addClass("icon remove-icon").attr("id", w).append($("<i/>").addClass("icon-trash")).click(function(e, t, n, r) {
                            return function() {
                                $("#" + e).tooltip("hide"), h(t, "u", r), l(r), l(r)
                            }
                        }(w, S, 0, t)).tooltip({
                            placement: "right",
                            title: _("Remove")
                        })), k = uniqueID(), a.append($("<span/>").addClass("icon edit-icon").attr("id", k).append($("<i/>").addClass("icon-edit")).click(u(k, t, "u", S, f)).tooltip({
                            placement: "right",
                            title: _("Pick Color")
                        })), a.append(clearingSpan()), d.append(a)
                    }
                    for (b.append(d), b.append($("<div/>").addClass("title").html(_("In Front of Price"))), S = 0; S < e.slots[t].o.length; S++) {
                        for (c = C(t, S, "o"), "bidask" == e.slots[t].o[S].t && (c = null), f = uniqueID(), a = $("<div/>").addClass("row").addClass("o" + S).data({
                                j: S,
                                place: "o"
                            }).append($("<span/>").addClass("icon reorder-icon").append($("<i/>").addClass("icon-reorder").css("color", c).attr("id", f))).append($("<u/>").html(e.slots[t].o[S].i.shortName() + ": ")), y = e.slots[t].o[S].i.settings(), x = e.slots[t].o[S].i.paramSettings(), w = "", 0 == y.length && a.append($("<u/>").text(" --- ")), T = 0; T < y.length; T++) w = uniqueID(), a.append($("<span/>").addClass("param-field").append($("<strong/>").text(x[T].hasOwnProperty("label") ? x[T].label : "P" + (T + 1))).append($("<input/>").attr("type", "text").val(y[T]).addClass("param-input").attr("id", w))), s.push({
                            val: y[T],
                            sel: "#" + w,
                            set: x[T],
                            fn: function(n, r, o) {
                                return function(i) {
                                    "function" == typeof n && n(r, i), e.slots[t].o[o].s = [i], v()
                                }
                            }(e.slots[t].o[S].i.paramUpdate, T, S)
                        });
                        w = uniqueID(), a.append($("<span/>").addClass("icon remove-icon").attr("id", w).append($("<i/>").addClass("icon-trash")).click(function(e, t, n, r) {
                            return function() {
                                $("#" + e).tooltip("hide"), h(t, "o", r), l(r), l(r)
                            }
                        }(w, S, 0, t)).tooltip({
                            placement: "right",
                            title: _("Remove")
                        })), k = uniqueID(), a.append($("<span/>").addClass("icon edit-icon").attr("id", k).append($("<i/>").addClass("icon-edit")).click(u(k, t, "o", S, f)).tooltip({
                            placement: "right",
                            title: _("Pick Color")
                        })), a.append(clearingSpan()), m.append(a)
                    }
                    b.append(m), i.append(b);
                    $(".rows", i), $(".reorder-icon", i), r = $(".rows", i);
                    $(".overlays", i).append("<div class='row' style='height:0'></div>"), $(".underlays", i).append("<div class='row' style='height:0'></div>")
                } else {
                    i.append($("<span/>").addClass("icon remove-icon").append($("<i/>").addClass("icon-trash")).click((o = t, function() {
                        $(".control-" + o + " .remove-icon", e.element).tooltip("hide"), g(o)
                    })).tooltip({
                        placement: "bottom",
                        title: _("Remove")
                    }));
                    for (var y = e.slots[t].i.settings(), x = e.slots[t].i.paramSettings(), w = "", k = "", T = 0; T < y.length; T++) w = uniqueID(), i.append($("<span/>").addClass("param-field").append($("<strong/>").text(x[T].hasOwnProperty("label") ? x[T].label : "P" + (T + 1))).append($("<input/>").attr("type", "text").val(y[T]).addClass("param-input").attr("id", w))), s.push({
                        val: y[T],
                        sel: "#" + w,
                        set: x[T],
                        fn: function(e, t) {
                            return function(n) {
                                "function" == typeof e && e(t, n), v()
                            }
                        }(e.slots[t].i.paramUpdate, T)
                    })
                }
                i.append(clearingSpan()), $(".settings-popout", n).append(i);
                for (var S = 0; S < s.length; S++) $(s[S].sel).data("value", s[S].val), p(t, s[S].sel, s[S].set, s[S].fn, v);
                n.addClass("popout"), $(".settings", n).tooltip("disable"), n.data("popped", !0)
            }
        }

        function c() {
            var t;
            for (t = 0; t < e.slots.length; t++) $(".control-" + t, e.element).data("popped") && l(t)
        }

        function u(t, n, r, o, i) {
            return function() {
                $("#" + t).ColorPicker({
                    color: C(n, o, r),
                    onChange: function(t, s, a) {
                        ! function(t, n, r, o) {
                            var i = null;
                            i = e.slots[t].hasOwnProperty("main") && void 0 !== r ? e.slots[t][r][n].i : e.slots[t].i;
                            null != i && i.color(o)
                        }(n, o, r, "#" + s), "o" == r ? e.flags.redraw.overlay = !0 : "u" == r && (e.flags.redraw.underlay = !0), window.reqAnimFrame(m), $("#" + i).css("color", "#" + s)
                    },
                    onHide: function() {}
                }).ColorPickerShow(), $(".colorpicker").click(function(e) {
                    e.stopPropagation()
                })
            }
        }

        function p(e, t, n, r, o, i) {
            new Validator;
            var s = (new Validator).create(n.type),
                a = n.hasOwnProperty("inc") ? n.inc : 1,
                c = n.hasOwnProperty("places") ? n.places : 0;
            $(t).on({
                keyup: function(o) {
                    var i = $(t),
                        u = o.keyCode || o.which,
                        p = 38,
                        f = 40,
                        d = 13,
                        h = 27,
                        g = !1,
                        m = i.data("value");
                    switch (u) {
                        case p:
                            m + a <= n.bounds[1] && (i.data("value", m + a), i.val((m + a).toFixed(c)), "function" == typeof r && r(m + a));
                            break;
                        case f:
                            m - a >= n.bounds[0] && (i.data("value", m - a), i.val((m - a).toFixed(c)), "function" == typeof r && r(m - a));
                            break;
                        case d:
                        case h:
                            o.preventDefault(), o.stopPropagation(), l(e);
                            break;
                        default:
                            g = !0
                    }
                    if (g) {
                        var v = +i.val(),
                            b = s.set(m).set(v).get();
                        b != m && (b >= n.bounds[0] && b <= n.bounds[1] ? (i.data("value", b), "function" == typeof r && r(b)) : i.val().length > 0 && i.val(m))
                    }
                },
                blur: function() {
                    0 == $(t).val().length && $(t).val($(t).data("value")), "function" == typeof o && o()
                }
            })
        }

        function f(n, r) {
            DEBUG && t("Adding overlay " + n + " to chart.");
            var o = {
                t: n,
                i: (new Indicator).build(n),
                s: []
            };
            o.s = o.i.settings(), r && o.i.paramUpdate(0, r), o.i.color(e.colors.stroke.i[e.lastColorIndex % e.colors.stroke.i.length]), e.lastColorIndex++;
            var i, s = -1;
            for (i = 0; i < e.slots.length; i++)
                if (e.slots[i].hasOwnProperty("main")) {
                    s = i;
                    break
                } - 1 != s && (e.slots[s].u.push(o), $(".control-" + s, e.element).data("popped") && (l(s), l(s)), v())
        }

        function d(r) {
            DEBUG && t("Adding indicator " + r + " to chart.");
            var o, i = (e.slots.length - 1) * (2 + e.px.pad) + 1 + e.px.lbl.h,
                s = (e.h, Math.max(e.slots[e.slots.length - 1].h * e.slots.length / (e.slots.length + 1), e.px.slotmin)),
                l = 0,
                c = 0,
                u = 0,
                p = !1,
                f = 0,
                d = {
                    t: r,
                    h: s,
                    px: 0,
                    i: (new Indicator).build(r),
                    s: []
                };
            for (d.s = d.i.settings(); l < s;)
                if (!p && e.slots[c % e.slots.length].h <= e.px.slotmin) ++u == e.slots.length && (p = !0), c++;
                else {
                    for (u = 0, e.slots[c % e.slots.length].h -= 1, l += 1, o = 1 + c % e.slots.length; o < e.slots.length; o++) e.slots[o].px -= 1;
                    if (c++, ++f > 1500) {
                        DEBUG && t("Emergency break. nc = " + u + " shrink: " + (p ? "true" : "false")), DEBUG && t(e.slots);
                        break
                    }
                }
            d.px = e.slots[e.slots.length - 1].h + 2 + e.px.pad + 1, e.slots.push(d);
            for (var h = 1; h <= e.slots.length - 2; h++) $(".control-" + h, e.element).remove(), e.slots[h].control = a(h), $(e.element).append(e.slots[h].control);
            e.slots[e.slots.length - 1].control = a(e.slots.length - 1), $(e.element).append(e.slots[e.slots.length - 1].control), n(), Be(), qe()
        }

        function h(t, n, r) {
            e.slots[r].hasOwnProperty(n) && (e.slots[r][n].splice(t, 1), $(".control-" + r + " ." + n + t, e.element).remove(), v())
        }

        function g(n) {
            if (!e.slots[n].hasOwnProperty("main")) {
                var r, o = +e.slots[n].h + e.px.pad + 3,
                    i = -1;
                for ($(".control-" + (e.slots.length - 1), e.element).remove(), $(".icontrol", e.element).each(function(e, t) {
                        $(t).data("popped") && l(e)
                    }), r = 0; r < e.slots.length; r++)
                    if (r != n && (i < 0 && r > n && (e.slots[r].px -= e.slots[n].h), e.slots[r].hasOwnProperty("main"))) {
                        i = r, e.slots[r].h += o;
                        break
                    }
                for (r = 0; r < e.slots.length; r++) DEBUG && t("Slot " + r + " h: " + e.slots[r].h + ", px: " + e.slots[r].px);
                e.slots.splice(n, 1), Be(), qe()
            }
        }

        function m() {
            var t, n, r = e.canvas.base[0].getContext("2d"),
                o = e.canvas.orders[0].getContext("2d"),
                i = e.canvas.bg[0].getContext("2d"),
                s = e.canvas.main[0].getContext("2d"),
                a = e.canvas.fg[0].getContext("2d");
            for (e.flags.recompute && function(t) {
                    if (e.bars.fixTime) {
                        var n, r = new Date(e.bars.data && e.bars.data.length > 0 ? e.bars.data[0][0] : new Date),
                            o = new Date(r.getFullYear() + "/" + (r.getMonth() + 1) + "/" + r.getDate() + " " + e.bars.startTime1),
                            i = new Date(r.getFullYear() + "/" + (r.getMonth() + 1) + "/" + r.getDate() + " " + e.bars.endTime1),
                            s = new Date(r.getFullYear() + "/" + (r.getMonth() + 1) + "/" + r.getDate() + " " + e.bars.startTime2),
                            a = new Date(r.getFullYear() + "/" + (r.getMonth() + 1) + "/" + r.getDate() + " " + e.bars.endTime2);
                        n = r <= i && r >= o ? (i.getTime() - r.getTime() + (a - s)) / 6e4 + 1 : r < s && r > i ? (a - s) / 6e4 : r <= a && r >= s ? (a.getTime() - r.getTime()) / 6e4 : r > a ? 0 : (i.getTime() - o.getTime() + a.getTime() - s.getTime()) / 6e4, n = Math.floor(n), e.bars.blank = n < 0 ? 0 : n, e.bars.visible = (i.getTime() - o.getTime() + a.getTime() - s.getTime()) / 6e4 + 1, e.px.bar.spacing = 1
                    } else e.px.bar.spacing = e.px.bar.width / 3 > 2 ? e.px.bar.width / 3 : 2, e.bars.visible = 0 | parseInt((e.w - e.px.lbl.tick - e.px.lbl.w - 1) / (e.px.bar.width + e.px.bar.spacing));
                    var l, c, u = ve();
                    u[1] > -1 && (e.price.high = 0, e.price.low = 1e15);
                    if (e.mode.display == e.CANDLE)
                        for (l = u[0]; l <= u[1]; l++) e.bars.data[l][2] > e.price.high && (e.price.high = e.bars.data[l][2]), e.bars.data[l][3] < e.price.low && (e.price.low = e.bars.data[l][3]);
                    else
                        for (l = u[0]; l <= u[1]; l++) e.bars.data[l][4] > e.price.high && (e.price.high = e.bars.data[l][4]), e.bars.data[l][4] < e.price.low && (e.price.low = e.bars.data[l][4]);
                    var p = e.canvas.base[0].getContext("2d");
                    p.font = e.font.labels, e.px.lbl.w = p.measureText(ae(10)).width + 8, e.LblWidthChange && e.LblWidthChange(e.px.lbl.w);
                    var f = e.price.high - e.price.low;
                    e.settings.logscale && (e.price.high = Math.min(1.1 * e.price.high, e.price.high + .1 * f), e.price.low = Math.max(e.price.low / 1.1, e.price.low - .1 * f));
                    e.price.low < 0 && (e.price.low = 0);
                    for (e.px.bar.dx = (e.px.bar.width - 1) / 2 | 0, e.period.string = Ve(), l = 0; l < e.slots.length; l++)
                        if (e.slots[l].hasOwnProperty("main")) {
                            if (e.settings.logscale) {
                                var d = e.slots[l].px,
                                    h = d + e.slots[l].h;
                                try {
                                    e.log.m = (d - h) / log10(p1 / p0), e.log.b = (d * log10(p0) - h * log10(p1)) / log10(p0 / p1)
                                } catch (t) {
                                    e.log.m = 0, e.log.b = 0
                                }
                            }
                            e.price.high, e.price.low;
                            for (c = 0; c < e.slots[l].o.length; c++)
                                if (e.slots[l].o[c].hasOwnProperty("i")) {
                                    e.slots[l].o[c].i.update(e.bars.data, u[0], u[1]);
                                    var g = e.slots[l].o[c].i.draw();
                                    if (g)
                                        for (var m = 0; m < g.length; m++)
                                            for (var v = g[m].data, b = 0; b < u[1] - u[0]; b++) {
                                                var y = v[b];
                                                y > e.price.high && (e.price.high = y), y < e.price.low && (e.price.low = y)
                                            }
                                }
                            for (c = 0; c < e.slots[l].u.length; c++)
                                if (e.slots[l].u[c].hasOwnProperty("i")) {
                                    "ema" == e.slots[l].u[c].t && e.slots[l].u[c].s && e.slots[l].u[c].i.paramUpdate(0, e.slots[l].u[c].s[0]), e.slots[l].u[c].i.update(e.bars.data, u[0], u[1]);
                                    var g = e.slots[l].u[c].i.draw();
                                    if (g)
                                        for (var m = 0; m < g.length; m++)
                                            for (var v = g[m].data, b = 0; b < u[1] - u[0]; b++) {
                                                var y = v[b];
                                                y > e.price.high && (e.price.high = y), y < e.price.low && (e.price.low = y)
                                            }
                                }
                        } else e.slots[l].i.update(e.bars.data, u[0], u[1]);
                    var $ = e.slots[0].h,
                        x = 40 * (e.price.high - e.price.low) / ($ - 40),
                        w = void 0 === Data.qouteFixed ? 1e-5 : Math.pow(.1, Data.qouteFixed - 2);
                    x > w ? (e.price.high += 3 * x / 4, e.price.low -= x / 4) : (e.price.high = 1.01 * e.price.high, e.price.low = e.price.low / 1.01);
                    e.price.low < 0 && (e.price.low = 0);
                    e.price.range = e.price.high - e.price.low, e.flags.recompute = !1, e.flags.redraw.base = !0, e.flags.redraw.main = !0, e.flags.redraw.underlay = !0, e.flags.redraw.overlay = !0, e.flags.redraw.inds = !0
                }(), e.flags.redraw.base && (r.clearRect(0, 0, e.w, e.h), function(t, n) {
                    void 0 === n && (n = !1);
                    var r, o;
                    for (t.fillStyle = e.colors.fill.bg, o = e.w - e.px.lbl.w - e.px.lbl.tick, ue(t, o, 0, e.px.lbl.w + e.px.lbl.tick, e.h), ue(t, 0, 0, e.offset, e.h), r = 0; r < e.slots.length; r++) r < e.slots.length - 1 ? ue(t, 0, e.slots[r].px + e.slots[r].h + 2, o, e.px.pad) : ue(t, 0, e.slots[r].px + e.slots[r].h + 2, o, e.px.lbl.h);
                    for (function(t) {
                            e.w;
                            var n, r, o, i, s, a, l, c, u, p = Ue(),
                                f = Settings.localTime,
                                d = [];
                            if (ee(t, !0), t.strokeStyle = e.colors.stroke.grid, t.lineWidth = 1, a = t.measureText("00:00").width, l = t.measureText("12/30").width, t.measureText("Jan").width, c = 1.25 * a, (u = 2 * Math.ceil(c / (e.px.bar.width + e.px.bar.spacing))) <= 0 && (u = 1), t.beginPath(), p < 14400) {
                                for (o = 0;; o++)
                                    if (!((s = be(o)) < 0)) {
                                        if (s >= e.bars.data.length) break;
                                        if (Z(w = e.bars.data[s][0], f)) {
                                            if (d.push(o), 1 == X(w, f) ? 1 == Y(w, f) ? te(t, G(w, f), o) : te(t, K(w, f), o) : te(t, Q(w, !1, f), o), e.settings.grid)
                                                for (i = 0; i < e.slots.length; i++);
                                            if (o > e.bars.visible) break;
                                            o += u - 1
                                        }
                                    }
                                if (0 == d.length && d.push(ye(e.bars.data.length - 1)), t.stroke(), t.beginPath(), ee(t, !1), t.strokeStyle = e.colors.stroke.grid, e.bars.fixTime) {
                                    var h = new Date,
                                        g = new Date(h.getFullYear() + "/" + (h.getMonth() + 1) + "/" + h.getDate() + " " + e.bars.startTime1),
                                        m = new Date(h.getFullYear() + "/" + (h.getMonth() + 1) + "/" + h.getDate() + " " + e.bars.endTime1),
                                        v = new Date(h.getFullYear() + "/" + (h.getMonth() + 1) + "/" + h.getDate() + " " + e.bars.startTime2),
                                        b = new Date(h.getFullYear() + "/" + (h.getMonth() + 1) + "/" + h.getDate() + " " + e.bars.endTime2),
                                        y = m.getTime() - g.getTime();
                                    y /= 6e4;
                                    var $ = m.getTime() - g.getTime() + b.getTime() - v.getTime();
                                    $ /= 6e4;
                                    var x = Math.ceil($ / e.w * 17),
                                        w = (Math.ceil($ / e.w * e.offset), b.getTime());
                                    for (n = J(w, !1, f), te(t, n, x + Math.ceil($ / e.w * 2)), w = (b.getTime() + v.getTime()) / 2, n = J(w, !1, f), te(t, n, 60), w = m.getTime(), n = J(w, !1, f), te(t, n, 120), w = (m.getTime() + g.getTime()) / 2, n = J(w, !1, f), te(t, n, 180), w = g.getTime(), n = J(w, !1, f), te(t, n, 240 - x), e.mode.display != e.CANDLE && function(t) {
                                            for (var n = 1; n <= 5; n++) q(t, fe(n * (e.price.high - e.price.low) / 6 + e.price.low, 0), e.DOTTED)
                                        }(t), i = 0; i < e.slots.length; i++) B(t, i, 0, e.DOTTED);
                                    for (i = 0; i < e.slots.length; i++) B(t, i, $ / 4, e.DOTTED);
                                    for (i = 0; i < e.slots.length; i++) B(t, i, y + 1, e.DOTTED);
                                    for (i = 0; i < e.slots.length; i++) B(t, i, $ + 1, e.DOTTED);
                                    for (i = 0; i < e.slots.length; i++) B(t, i, 3 * $ / 4 + 1, e.DOTTED)
                                } else
                                    for (r = d.length - 1; r >= 0; r--)
                                        for (o = d[r] - u;; o -= u)
                                            if (!(o > e.bars.visible)) {
                                                if (0 == r && o < 0) break;
                                                if ((s = be(o)) < 0) break;
                                                if (!(s >= e.bars.data.length)) {
                                                    if (e.settings.grid)
                                                        for (i = 0; i < e.slots.length; i++);
                                                    if (o <= d[r - 1]) break;
                                                    if (r > 0 && de(o) + a / 2 >= de(d[r - 1]) - l / 2) break;
                                                    w = e.bars.data[s][0], n = J(w, !1, f), te(t, n, o)
                                                }
                                            }
                                t.stroke()
                            } else if (p < 86400) {
                                var k = -1,
                                    T = -1;
                                for (o = 0;; o++)
                                    if (!((s = be(o)) < 0)) {
                                        if (s >= e.bars.data.length - 1) break;
                                        if (w = e.bars.data[s][0], T = X(w, f), k = X(e.bars.data[s + 1][0], f), p > 86400 && Y(w, f) != Y(e.bars.data[s + 1][0], f) || k > 1 && 1 == T) {
                                            if (d.push(o), 1 == Y(w, f) ? te(t, G(w, f), o) : te(t, K(w, f), o), e.settings.grid)
                                                for (i = 0; i < e.slots.length; i++);
                                            if (d[d.length - 1] > e.bars.visible) break;
                                            o += u - 1
                                        }
                                    }
                                for (d.push(ye(e.bars.data.length - 1)), t.stroke(), t.beginPath(), ee(t, !1), t.strokeStyle = e.colors.stroke.grid, r = d.length - 1; r >= 0; r--)
                                    for (o = d[r] - u;; o -= u)
                                        if (!(o > e.bars.visible)) {
                                            if (0 == r && o < 0) break;
                                            if ((s = be(o)) < 0) break;
                                            if (!(s >= e.bars.data.length)) {
                                                if (e.settings.grid)
                                                    for (i = 0; i < e.slots.length; i++);
                                                if (o <= d[r - 1]) break;
                                                if (r > 0 && de(o) + a / 2 >= de(d[r - 1]) - l / 2) break;
                                                w = e.bars.data[s][0], n = Z(w, f) ? p < 86400 ? X(w, f) : Q(w, !1, f) : J(w, !1, f), te(t, n, o)
                                            }
                                        }
                                t.stroke()
                            } else if (p < 2592e3) {
                                var k = -1,
                                    T = -1;
                                for (o = 0;; o++)
                                    if (!((s = be(o)) < 0)) {
                                        if (s >= e.bars.data.length - 1) break;
                                        if (w = e.bars.data[s][0], T = X(w, f), k = X(e.bars.data[s + 1][0], f), p > 86400 && Y(w, f) != Y(e.bars.data[s + 1][0], f) || k > 1 && 1 == T) {
                                            if (d.push(o), 1 == Y(w, f) ? te(t, G(w, f), o) : te(t, K(w, f), o), e.settings.grid)
                                                for (i = 0; i < e.slots.length; i++);
                                            if (d[d.length - 1] > e.bars.visible) break;
                                            o += u - 1
                                        }
                                    }
                                for (d.push(ye(e.bars.data.length - 1)), t.stroke(), t.beginPath(), ee(t, !1), t.strokeStyle = e.colors.stroke.grid, r = d.length - 1; r >= 0; r--)
                                    for (o = d[r] - u;; o -= u)
                                        if (!(o > e.bars.visible)) {
                                            if (0 == r && o < 0) break;
                                            if ((s = be(o)) < 0) break;
                                            if (!(s >= e.bars.data.length)) {
                                                if (e.settings.grid)
                                                    for (i = 0; i < e.slots.length; i++);
                                                if (o <= d[r - 1]) break;
                                                if (r > 0 && de(o) + a / 2 >= de(d[r - 1]) - l / 2) break;
                                                w = e.bars.data[s][0], n = p < 86400 ? X(w, f) : Q(w, !1, f), te(t, n, o)
                                            }
                                        }
                                t.stroke()
                            }
                        }(t), t.textAlign = "left", t.textBaseline = "middle", t.font = e.font.labels, t.fillStyle = e.colors.fill.label, r = 0; r < e.slots.length; r++) e.slots[r].hasOwnProperty("main") ? (t.strokeStyle = e.colors.stroke.border, t.beginPath(), A(t, r), t.stroke()) : S(t, r), F(t, r)
                }(r), e.flags.redraw.base = !1, e.settings.userorders ? x(o) : o.clearRect(0, 0, e.w, e.h)), (e.flags.redraw.inds || e.flags.redraw.overlay) && (a.clearRect(0, 0, e.w, e.h), e.flags.redraw.inds = !0, e.flags.redraw.overlay = !0), e.flags.redraw.underlay && i.clearRect(0, 0, e.w, e.h), t = 0; t < e.slots.length; t++)
                if (e.slots[t].hasOwnProperty("main")) {
                    if (e.flags.redraw.main && (s.clearRect(0, 0, e.w, e.h), T(s, t), e.flags.redraw.main = !1), e.flags.redraw.underlay) {
                        for (b(i, t), n = 0; n < e.slots[t].u.length; n++) E(i, t, e.slots[t].u[n].i);
                        e.flags.redraw.underlay = !1
                    }
                    if (e.flags.redraw.overlay) {
                        for (b(a, t), n = 0; n < e.slots[t].o.length; n++) E(a, t, e.slots[t].o[n].i);
                        e.flags.redraw.overlay = !1
                    }
                } else(e.flags.redraw.inds || "vol" == e.slots[t].t) && (b(a, t), E(a, t, e.slots[t].i));
            e.flags.redraw.inds = !1, e.notClicked || 1 == mobile || (a.strokeStyle = "#f9ee30", a.strokeRect(0, 0, e.w, e.h))
        }

        function v() {
            var n = Ue(),
                r = 0;
            if (e.bars.data = [], Data.data.bars[n])
                if (1 == e.bars.fixTime)
                    for (r = 0; r < Data.data.bars[n].length; r++) e.bars.data.push(Data.data.bars[n][r]);
                else e.bars.data = Data.data.bars[n];
            void 0 === e.bars.data && (DEBUG && t("No data for " + n), e.bars.data = []), e.flags.recompute = !0, m()
        }

        function b(t, n) {
            t.clearRect(0, e.slots[n].px - e.px.pad, e.w, e.slots[n].h + 2 * e.px.pad)
        }

        function y() {
            var n = e.canvas.orders[0].getContext("2d");
            DEBUG && t("Chart refreshing user orders.");
            try {
                x(n)
            } catch (e) {
                DEBUG && t("Could not clear user orders"), DEBUG && console.error(e)
            }
        }

        function x(t) {
            void 0 === t && (t = e.canvas.orders[0].getContext("2d"));
            for (var n = -1, r = 0; r < e.slots.length; r++)
                if (e.slots[r].hasOwnProperty("main")) {
                    n = r;
                    break
                }
            if (-1 != n) {
                try {
                    t.clearRect(0, 0, e.w, e.h)
                } catch (e) {
                    return
                }
                if (e.settings.userorders) {
                    var o = UserAccount.orders(),
                        i = "",
                        s = "",
                        a = {},
                        l = [],
                        c = [],
                        u = [],
                        p = [],
                        f = (r = 0, 0);
                    for (i in o)
                        if (o.hasOwnProperty(i) && i == RTBTC.exchange())
                            for (s in o[i]) o[i].hasOwnProperty(s) && ((a = o[i][s]).exch = i, a.hasOwnProperty("base") && a.base == RTBTC.base() && a.hasOwnProperty("quote") && a.quote == RTBTC.quote() && ((f = fe(a.price, n)) < e.slots[n].px || f > e.slots[n].px + e.slots[n].h || ("buy" == a.action ? (l.push(a), u.push(k(a))) : "sell" == a.action && (c.push(a), p.push(k(a))))));
                    if (l.length + c.length > 0 && (t.textAlign = "left", t.font = e.font.indicators), l.length > 0) {
                        for (t.strokeStyle = e.colors.stroke.bid, t.fillStyle = e.colors.stroke.bid, t.textBaseline = "top", t.beginPath(), r = 0; r < l.length; r++) j(t, n, l[r].price, e.DASHDOT), (f = fe(l[r].price, n) + 1) > e.slots[n].px + e.slots[n].h - 10 || t.fillText(u[r], 2, f);
                        for (t.stroke(), t.font = e.font.labels, t.textBaseline = "middle", r = 0; r < l.length; r++) t.fillStyle = e.colors.fill.flags, ie(t, n, l[r].price, ae(l[r].price))
                    }
                    if (c.length > 0) {
                        for (t.strokeStyle = e.colors.stroke.ask, t.fillStyle = e.colors.stroke.ask, t.textBaseline = "top", t.font = e.font.indicators, t.beginPath(), r = 0; r < c.length; r++) j(t, n, c[r].price, e.DASHDOT), f = fe(c[r].price, n) + 1, t.fillText(p[r], 2, f);
                        for (t.stroke(), t.font = e.font.labels, t.textBaseline = "middle", r = 0; r < c.length; r++) t.fillStyle = e.colors.fill.flags, ie(t, n, c[r].price, ae(c[r].price))
                    }
                }
            }
        }

        function k(e) {
            var t = "";
            return "buy" == e.action ? t += _("BUY") : "sell" == e.action ? t += _("SELL") : t += "UNKNOWN ACTION", t += " ", t += parseFloat(e.amount).toFixed(Exchanges.cur_prec(e.exch, e.base))
        }

        function T(t, n) {
            if (void 0 !== e.bars.data && 0 != e.bars.data.length) switch (e.settings.bidask && function(t, n) {
                if (isNaN(e.price.bid) && isNaN(e.price.ask)) return;
                var r = e.price.bid,
                    o = e.price.ask;
                t.textBaseline = "middle", t.textAlign = "left", t.font = e.font.labels, t.fillStyle = e.colors.fill.flags, t.strokeStyle = e.colors.stroke.ask, t.beginPath(), j(t, n, o, e.SOLID), t.stroke(), ie(t, n, o, ae(o)), t.fillStyle = e.colors.fill.flags, t.strokeStyle = e.colors.stroke.bid, t.beginPath(), j(t, n, r, e.SOLID), t.stroke(), ie(t, n, r, ae(r))
            }(t, n), e.mode.display) {
                case e.CANDLE:
                case e.OHLC:
                case e.HLC:
                    ! function(t, n, r, o) {
                        var i, s, a, l, c = ve(),
                            u = null,
                            p = [],
                            f = [];
                        i = r.length - 1 > c[1] ? r[c[1] + 1] : r[c[1]];
                        switch (o) {
                            case e.CANDLE:
                                u = O;
                                break;
                            case e.OHLC:
                                u = I;
                                break;
                            case e.HLC:
                                u = M;
                                break;
                            default:
                                return
                        }
                        var d, h, g = 0,
                            m = 1e5;
                        for (s = c[1]; s >= c[0]; s--) r[s][4] >= r[s][1] ? r[s][1] == r[s][4] && r[s + 1] && r[s + 1][4] > r[s][1] ? f.push([s, ye(s)]) : p.push([s, ye(s)]) : f.push([s, ye(s)]), i = r[s], r[s][2] >= g && (g = r[s][2], d = s), r[s][3] <= m && (m = r[s][3], h = s);
                        for (t.strokeStyle = e.colors.stroke.down, t.fillStyle = e.colors.fill.down, t.beginPath(), s = 0; s < f.length; s++)(a = r[f[s][0]].slice())[5] /= BTC_INT, u(t, n, f[s][1], a, !0);
                        for (t.stroke(), t.strokeStyle = e.colors.stroke.up, t.fillStyle = e.colors.fill.up, t.beginPath(), s = 0; s < p.length; s++)(a = deepCopy(r[p[s][0]]))[5] /= BTC_INT, u(t, n, p[s][1], a, !1);
                        t.stroke(), l = i[4], r.length >= 2 && r[1][4] > r[0][4] && (t.strokeStyle = e.colors.stroke.down);
                        if (t.fillStyle = e.colors.fill.flags, t.textBaseline = "middle", t.font = e.font.labels, ie(t, n, l, ae(l)), o == e.CANDLE) {
                            t.textBaseline = "middle", t.fillStyle = e.colors.stroke.arrow;
                            var v = fe(g, n),
                                b = de(ye(d)),
                                y = fe(m, n),
                                $ = de(ye(h)),
                                x = t.measureText(ae(g)).width + 19,
                                w = t.measureText(ae(m)).width + 21;
                            b - x > 0 ? (ke(t, 0, 0, b - 15, v, b - 2, v), t.fillText(ae(g), b - x, v)) : (ke(t, 0, 0, b + 15, v, b + 2, v), t.fillText(ae(g), b + 19, v)), $ - w > 0 ? (ke(t, 0, 0, $ - 15, y, $ - 2, y), t.fillText(ae(m), $ - x, y)) : (ke(t, 0, 0, $ + 15, y, $ + 2, y), t.fillText(ae(m), $ + 19, y))
                        }
                    }(t, n, e.bars.data, e.mode.display);
                    break;
                case e.LINE:
                case e.MOUNTAIN:
                    P(t, n, e.bars.data, e.mode.display == e.MOUNTAIN, !0, !0)
            }
        }

        function S(t, n) {
            var r, o, i = e.slots[n].i.statics(),
                s = !0,
                a = e.slots[n].i.bounds();
            if (t.lineWidth = 1, i.hasOwnProperty("minor")) {
                for (t.strokeStyle = e.colors.stroke.minorlevel, t.fillStyle = e.colors.fill.label, t.beginPath(), r = 0; r < i.minor.length; r++)(o = i.minor[r]) < a[0] || o > a[1] || (j(t, n, o, e.DASHDOT), re(t, n, o, ae(o)));
                for (t.stroke(), t.strokeStyle = e.colors.stroke.border, t.beginPath(), r = 0; r < i.minor.length; r++)(o = i.minor[r]) < a[0] || o > a[1] || re(t, n, o, ae(o));
                t.stroke(), s = !1
            }
            if (i.hasOwnProperty("major")) {
                for (t.strokeStyle = e.colors.stroke.majorlevel, t.fillStyle = e.colors.fill.label, t.beginPath(), r = 0; r < i.major.length; r++)(o = i.major[r]) < a[0] || o > a[1] || (j(t, n, o, e.SOLID), re(t, n, o, ae(o)));
                for (t.stroke(), t.strokeStyle = e.colors.stroke.border, t.beginPath(), r = 0; r < i.major.length; r++)(o = i.major[r]) < a[0] || o > a[1] || re(t, n, o, ae(o));
                t.stroke(), s = !1
            }
            s && (t.strokeStyle = e.colors.stroke.border, t.beginPath(), A(t, n), t.stroke())
        }

        function C(t, n, r) {
            var o = null,
                i = e.colors.stroke.i,
                s = null;
            return e.slots[t].hasOwnProperty("main") && void 0 !== r && (s = e.slots[t][r][n].i), null != s && (o = s.color()), null === o && (void 0 !== n ? o = i[n % i.length] : (o = i[e.lastColorIndex % i.length], e.lastColorIndex++)), o
        }

        function E(t, n, r, o) {
            if (void 0 !== r) {
                var i, s = r.draw(),
                    a = null,
                    l = e.slots[n].hasOwnProperty("main");
                for (i = 0; i < s.length; i++) switch (a = null, s[i].type) {
                    case e.CANDLE:
                    case e.OHLC:
                    case e.HLC:
                        break;
                    case e.LINE:
                        l && (a = r.color()), null == a && (a = C(n, i)), t.strokeStyle = a, t.beginPath(), P(t, n, s[i].data, !1, !1), t.stroke();
                        break;
                    case e.MOUNTAIN:
                        P(t, n, s[i].data, !0, !1);
                        break;
                    case e.BANDS:
                        break;
                    case e.PSAR:
                        l && (a = r.color()), null == a && (a = C(n, i)), t.strokeStyle = a, t.beginPath(), N(t, n, s[i].data), t.stroke();
                        break;
                    case e.HIST:
                        D(t, n, s[i].data, !0);
                        break;
                    case e.LBLHIST:
                        D(t, n, s[i].data, !1)
                }
            }
        }

        function A(t, n) {
            var r, o, i, s, a, l, c, u, p, f, d, h, g, m = [],
                v = 0,
                b = 0,
                y = [5, 2.5, 2];
            if (e.slots[n].hasOwnProperty("main")) o = e.price.high, i = e.price.low;
            else {
                var $ = e.slots[n].i.bounds();
                i = $[0], o = $[1]
            }
            if (!((r = o - i) < 0 || (s = r / ~~(e.slots[n].h / (4 * e.px.lbl.font))) < 0)) {
                for (c = Math.log(s) / Math.LN10, a = Math.pow(10, c > 0 ? ~~c : Math.floor(c)), .5, v = 0; v < y.length; v++)(h = Math.log(s / a / (y[v] / 10)) / Math.LN10) > 1 && m.push([a * y[v], Math.abs(.5 - h), h]);
                for (0 == m.length && m.push([a, 0, 0]), l = 1e8, v = 0; v < m.length; v++) m[v][1] < l && (l = m[v][1], s = m[v][0]);
                if (u = ~~(o / s) * s, p = e.w - e.px.lbl.tick - e.px.lbl.w, f = fe(u, n), d = fe(i, n) - e.px.lbl.font / 2 | 0, 1 != n) {
                    if (e.slots[n].hasOwnProperty("main") && 0 != e.offset) {
                        t.textAlign = "right";
                        for (v = 0; v <= 6; v++) {
                            var x = e.price.low + v * (e.price.high - e.price.low) / 6;
                            A = fe(x, n);
                            t.textBaseline = 6 == v ? "top" : 0 == v ? "bottom" : "middle", t.fillText((100 * (e.preClose ? x / e.preClose - 1 : 0)).toFixed(2) + "%", e.offset - 3, A, e.offset - 3)
                        }
                        t.textAlign = "start"
                    }
                    for (v = 0, 2; u >= i && f < d && v < 100;) {
                        for (f >= e.slots[n].px + e.px.lbl.font / 2 && (oe(t, p, f, ae(u)), e.settings.grid && q(t, f, e.DASHED), b++), g = 0; g < 2; g++) S = t, void 0, void 0, C = fe(u - (g + 1) * s / 3, n), E = e.w - e.px.lbl.tick - e.px.lbl.w, le(w = S, k = E, T = C), ce(w, k + e.px.lbl.halftick, T);
                        f = fe(u -= s, n), v++
                    }
                    var w, k, T, S, C, E;
                    0 == b && oe(t, p, f = fe(u = i + r / 2, n), ae(u))
                } else {
                    var A;
                    oe(t, p, A = fe(o, n), o.toFixed(2))
                }
            }
        }

        function P(t, n, r, o, i, s) {
            if (void 0 !== r && r.hasOwnProperty("length") && r.length > 0) {
                var a, l, c, u, p, f = ve();
                if (!o) {
                    if (c = de(ye(f[1])), u = fe(i ? r[f[1]][4] : r[f[1] - f[0]], n), i) {
                        var d, h = [],
                            g = {};
                        for ((d = []).push(f[1]), c = de(ye(f[1])), u = fe(r[f[1]][4], n), g[f[1]] = [+c, +u], a = f[1] - 1; a >= f[0]; a--) c = de(ye(a)), u = fe(r[a][4], n), r[a + 1][4] <= r[a][4] ? d.push(a) : h.push(a), g[a] = [+c, +u];
                        for (p = r.length + 2, t.lineWidth = 1, t.strokeStyle = e.colors.stroke.fenshi || e.colors.stroke.down, t.beginPath(), l = 0; l < h.length; l++)(a = h[l]) < p - 1 && g.hasOwnProperty(a + 1) && le(t, g[a + 1][0], g[a + 1][1]), ce(t, g[a][0], g[a][1]), p = a;
                        for (t.stroke(), t.strokeStyle = e.colors.stroke.fenshi || e.colors.stroke.up, t.beginPath(), p = r.length + 2, a = 0; a < d.length; a++) d[a] < p - 1 && g.hasOwnProperty(d[a] + 1) && le(t, g[d[a] + 1][0], g[d[a] + 1][1]), ce(t, g[d[a]][0], g[d[a]][1]), p = d[a];
                        t.stroke(), r.length > 1 ? t.strokeStyle = r[1][4] <= r[0][4] ? e.colors.stroke.up : e.colors.stroke.down : t.strokeStyle = d, p = r[0][4]
                    } else {
                        var m = !1;
                        for (le(t, c, u), a = f[1] - f[0]; a >= 0; a--) c = de(ye(a + f[0])), (u = fe(r[a], n)) >= e.slots[n].px && u <= e.slots[n].px + e.slots[n].h ? m ? (m = !1, t.beginPath(), le(t, c, u)) : ce(t, c, u) : m || (t.stroke(), m = !0);
                        p = r[0], t.stroke()
                    }
                    t.lineWidth = 1, t.fillStyle = e.colors.fill.flags, t.textBaseline = "middle", t.font = e.font.labels, s && ie(t, n, p, ae(p))
                }
            }
        }

        function D(t, n, r, o) {
            if (void 0 !== r && r.hasOwnProperty("length") && r.length > 0) {
                var i, s, a = ve(),
                    l = [],
                    c = [];
                if (o)
                    for (i = 0; i <= a[1] - a[0]; i++) r[i] > 0 ? l.push([i, ye(i + a[0])]) : c.push([i, ye(i + a[0])]);
                else
                    for (i = 0; i <= a[1] - a[0]; i++) r && void 0 !== r[i] && (r[i][1] ? l.push([i, ye(i + a[0])]) : c.push([i, ye(i + a[0])]));
                for (t.strokeStyle = e.colors.stroke.down, t.fillStyle = e.colors.fill.down, t.beginPath(), i = 0; i < c.length; i++) L(t, n, c[i][1], o ? r[c[i][0]] : r[c[i][0]][0], !1);
                for (t.stroke(), t.strokeStyle = e.colors.stroke.up, t.fillStyle = e.colors.fill.up, t.beginPath(), i = 0; i < l.length; i++) L(t, n, l[i][1], o ? r[l[i][0]] : r[l[i][0]][0]);
                t.stroke(), o ? (s = r[0]) < 0 && (t.strokeStyle = e.colors.stroke.down) : (s = r[0][0], r[0][1] || (t.strokeStyle = e.colors.stroke.down)), t.lineWidth = 1, t.fillStyle = e.colors.fill.flags, t.textBaseline = "middle", t.font = e.font.labels, ie(t, n, s, ae(s)), t.stroke()
            }
        }

        function N(t, n, r) {
            if (r.hasOwnProperty("length") && r.length > 0) {
                var o, i, s, a = ve(),
                    l = e.slots[n].px + 3,
                    c = l + e.slots[n].h - 3;
                for (o = 0; o <= a[1] - a[0]; o++) i = de(ye(o + a[0])), (s = fe(r[o], n)) < l || s > c || pe(t, i - 1, s - 1, 2, 2)
            }
        }

        function O(t, n, r, o, i) {
            var s = fe(o[1], n),
                a = fe(o[2], n),
                l = fe(o[3], n),
                c = fe(o[4], n),
                u = Math.min(s, c),
                p = de(r);
            i ? 1 == mobile && ue(t, p - e.px.bar.dx + 1, u, e.px.bar.width - 2, Math.abs(c - s)) : e.colors.stroke.fillUp && ue(t, p - e.px.bar.dx + 1, Math.min(s, c), e.px.bar.width - 2, Math.abs(s - c)), pe(t, p - e.px.bar.dx, Math.min(s, c), e.px.bar.width - 1, Math.abs(s - c)), a < Math.min(s, c) && (le(t, p, a), ce(t, p, Math.min(s, c) - 1)), l > Math.max(s, c) && (le(t, p, l), ce(t, p, Math.max(s, c))), i && ue(t, p - e.px.bar.dx, u, e.px.bar.width - 1, Math.abs(c - s))
        }

        function I(t, n, r, o) {
            var i = fe(o[1], n),
                s = fe(o[2], n),
                a = fe(o[3], n),
                l = fe(o[4], n),
                c = de(r);
            le(t, c - e.px.bar.dx, i), ce(t, c, i), le(t, c, l), t.lineTo(.6 + (c + e.px.bar.dx | 0), .5 + (0 | l)), le(t, c, s), ce(t, c, a)
        }

        function M(t, n, r, o) {
            var i = fe(o[2], n),
                s = fe(o[3], n),
                a = fe(o[4], n),
                l = de(r);
            le(t, l, a), t.lineTo(.6 + (l + e.px.bar.dx | 0), .5 + (0 | a)), le(t, l, i), ce(t, l, s)
        }

        function L(t, n, r, o, i) {
            var s = fe(o, n),
                a = de(r),
                l = fe(0, n),
                c = Math.abs(l - s),
                u = Math.min(s, l);
            s < e.slots[n].px ? s = e.slots[n].px : s > e.slots[n].px + e.slots[n].h && (s = e.slots[n].px + e.slots[n].h), pe(t, a - e.px.bar.dx, u, e.px.bar.width - 1 <= 0 ? 0 : e.px.bar.width - 1, c), !1 === i ? ue(t, a - e.px.bar.dx + 1, u + 1, e.px.bar.width - 2 <= 0 ? 0 : e.px.bar.width - 2, c) : e.colors.stroke.fillUp && ue(t, a - e.px.bar.dx + 1, u + 1, e.px.bar.width - 2 <= 0 ? 0 : e.px.bar.width - 2, c)
        }

        function F(t, n) {
            t.lineWidth = mobile ? 2 : 1, t.strokeStyle = e.colors.stroke.border;
            var r = e.offset - 1,
                o = e.slots[n].px - 1,
                i = e.w - e.px.lbl.w - e.offset - e.px.lbl.tick,
                s = e.slots[n].h + 2;
            pe(t, r <= 0 ? 0 : r, o <= 0 ? 0 : o, i - (r <= 0 ? -r : 0), s - (o <= 0 ? -o : 0))
        }

        function B(e, t, n, r) {
            R(e, t, de(n), r)
        }

        function R(t, n, r, o) {
            var i, s = e.slots[n].px - 1,
                a = e.slots[n].px + e.slots[n].h;
            if (DEBUG && assert(a > s, "Invalid bounds on vertical line drawing. y0:" + s + ", y1:" + a), a > s && !(a < 0 || r < 0 || r > e.w || r > 25e3)) switch (le(t, r, s), i = s, o) {
                case e.DOTTED:
                    for (; i < a;) ce(t, r, ++i), le(t, r, ++i);
                    break;
                case e.DASHED:
                    for (; i < a;) ce(t, r, i = (i += 6) > a ? a : i), le(t, r, i += 2);
                    break;
                case e.DASHDOT:
                    for (; i < a && (ce(t, r, i = (i += 7) > a ? a : i), !((i += 4) >= a));) le(t, r, i), ce(t, r, i = (i += 2) > a ? a : i), le(t, r, i += 4);
                    break;
                case e.SOLID:
                default:
                    ce(t, r, a)
            }
        }

        function j(t, n, r, o) {
            var i = fe(r, n);
            i < e.slots[n].px || i > e.slots[n].px + e.slots[n].h || q(t, i, o)
        }

        function q(t, n, r) {
            var o, i = e.w - e.px.lbl.tick - e.px.lbl.w - 1,
                s = e.offset;
            if (DEBUG && assert(i > s, "Invalid bounds on line drawing. x0: " + i + ", x1: " + s), i > s) switch (le(t, i, n), o = i, r) {
                case e.DOTTED:
                    for (; o > s + 1;) ce(t, --o, n), le(t, --o, n);
                    break;
                case e.DASHED:
                    for (; o > s;) ce(t, o = (o -= 6) < s ? s : o, n), le(t, o -= 2, n);
                    break;
                case e.DASHDOT:
                    for (; o > s && (ce(t, o = (o -= 7) < s ? s : o, n), !((o -= 4) <= s));) le(t, o, n), ce(t, o = (o -= 2) < s ? s : o, n), le(t, o -= 4, n);
                    break;
                case e.SOLID:
                default:
                    ce(t, s, n)
            }
        }

        function U(t, n, r) {
            if (e.settings.crosshairs && !(t < e.offset)) {
                var o = e.canvas.i[0].getContext("2d"),
                    i = ge(t),
                    s = $e(t, n);
                if (!(null == s || s < 0)) {
                    var a, l, c, u, p, f, d, h, g, m, v, b = me(s, n),
                        y = be(i),
                        $ = de(i);
                    if (H(o), o.textBaseline = "middle", o.textAlign = "left", o.font = e.font.labels, o.lineWidth = 1, o.fillStyle = e.colors.fill.crosshair, o.strokeStyle = e.colors.stroke.crosshair, o.beginPath(), e.showMainCrosshairs)
                        for (e.crossHairH && q(o, n, e.SOLID), a = 0; a < e.slots.length; a++) R(o, a, $, e.SOLID);
                    if (o.stroke(), o.fillStyle = e.colors.fill.crosshair, e.crossHairH && (r && (b = e.bars.data[y] && e.bars.data[y][4] || 0), function(t, n, r, o) {
                            var i, s = e.w - e.px.lbl.tick - e.px.lbl.w - 3;
                            i = e.slots[n].px + 1 + Math.ceil(e.px.lbl.font / 2), r < i ? r = i : (i = e.slots[n].px + e.slots[n].h - Math.ceil(e.px.lbl.font / 2), r > i && (r = i));
                            se(t, s, r, o)
                        }(o, s, n, ae(b))), mobile && e.updateXFK && e.updateXFK(!0), y >= 0 && y < e.bars.data.length) {
                        ee(o, !0);
                        var x = z(e.bars.data[y][0], !1, Settings.localTime),
                            w = o.measureText(x).width,
                            k = o.fillStyle,
                            T = o.strokeStyle;
                        o.fillStyle = e.colors.fill.crosshair, o.strokeStyle = e.colors.stroke.crosshair, f = o, d = 0 | w, h = de(i), g = 0 | ne(h, d + 10), m = d / 2 + 5 | 0, v = ne(h, 7), f.beginPath(), le(f, g - m, e.h - 1), ce(f, g + m, e.h - 1), ce(f, g + m, e.h - e.px.lbl.h), ce(f, v + 3.5, e.h - e.px.lbl.h), ce(f, v, e.h - e.px.lbl.h - 4), ce(f, v - 3.5, e.h - e.px.lbl.h), ce(f, g - m, e.h - e.px.lbl.h), ce(f, g - m, e.h - 1), f.fill(), f.stroke(), o.fillStyle = k, o.strokeStyle = T, l = o, c = x, u = ne(de(i), w + 10), p = e.h - (e.px.lbl.h - e.px.lbl.font) / 2, l.fillText(c, u, p),
                            function(t) {
                                var n, r, o, i, s, a = e.canvas.lbl[0].getContext("2d"),
                                    l = ~~(1.25 * e.px.lbl.font),
                                    c = ve(),
                                    u = be(0),
                                    p = be(t),
                                    f = (e.colors.stroke.i, e.w - e.px.lbl.tick - e.px.lbl.w - 2);
                                c[0], c[1], u < 0 && (t += u), t < 0 && (t = -1), a.strokeStyle = e.colors.fill.blankBG, a.lineWidth = 1.5, a.fillStyle = e.colors.fill.slottext, a.textBaseline = "top", a.font = e.font.indicators;
                                var d = 3 + e.offset,
                                    h = 3 + e.offset;
                                for (a.clearRect(0, 0, e.w, e.h), n = 0; n < e.slots.length; n++)
                                    if (e.slots[n].hasOwnProperty("main")) {
                                        if (i = V(p), o = e.slots[n].px + 1, a.strokeText(i, h, o, f), a.fillText(i, h, o, f), h = 6 + e.offset + a.measureText(i).width, 1 == e.colors.stroke.priceShow) {
                                            var g = e.w - e.px.lbl.tick - e.px.lbl.w,
                                                m = e.canvas.base[0].getContext("2d"),
                                                v = g - m.measureText(ae(e.price.high)).width - 3;
                                            h = g - m.measureText(ae(e.price.low)).width - 3, a.clearRect(v, o, f, 13), a.strokeText(ae(e.price.high), v, o, f), a.fillText(ae(e.price.high), v, o, f);
                                            var b = e.slots[n].h - 14;
                                            a.strokeText(ae(e.price.low), h, b, f), a.fillText(ae(e.price.low), h, b, f)
                                        }
                                        for (r = 0; r < e.slots[n].u.length; r++)
                                            if ((s = e.slots[n].u[r].i).hasOwnProperty("label")) {
                                                if (o + l > e.slots[n].px + e.slots[n].h) break;
                                                1 != mobile ? (i = s.label(t), a.fillStyle = C(n, r, "u"), h + a.measureText(i).width + 2 > f && (o += l, h = 2), a.fillText(i, h, o, f), h += a.measureText(i).width + 2) : (i = s.label(t), a.fillStyle = C(n, r, "u"), a.fillText(i, d, o, f), o += l)
                                            }
                                        for (r = 0; r < e.slots[n].o.length; r++)
                                            if ((s = e.slots[n].o[r].i).hasOwnProperty("label")) {
                                                if ((o += l) + l > e.slots[n].px + e.slots[n].h) break;
                                                1 != mobile ? (i = s.label(t), a.fillStyle = C(n, r, "o"), h + a.measureText(i).width + 2 > f && (o += l, h = 2), a.fillText(i, h, 0, f), h += a.measureText(i).width + 2) : (i = s.label(t), a.fillStyle = C(n, r, "o"), a.fillText(i, d, o, f))
                                            }
                                        a.fillStyle = e.colors.fill.flagtext
                                    } else {
                                        if (!(s = e.slots[n].i).hasOwnProperty("label")) continue;
                                        i = s.label(t), o = e.slots[n].px + 1, a.fillText(i, d, o, f)
                                    }
                            }(i)
                    }
                    e.px.crosshairs.x = $, e.px.crosshairs.y = n, e.mouse.bar = i
                }
            }
        }

        function H(t) {
            if (e.settings.crosshairs) {
                var n = t || e.canvas.i[0].getContext("2d");
                n.clearRect(0, e.px.crosshairs.y - 30, e.w, 60), n.clearRect(e.px.crosshairs.x - 30, 0, 60, e.h), n.clearRect(0, e.h - e.px.lbl.h - 4, e.w, e.px.lbl.h + 4), e.mouse.bar = null, e.canvas.lbl[0].getContext("2d").clearRect(0, 0, e.w, e.h)
            }
        }

        function V(t) {
            var n, r;
            if (e.curIndex = t, n = t, e.mode.display != e.CANDLE && (r = n < 0 || n > e.bars.data.length ? [(new Date).getTime(), 0, 0, 0, 0, 0] : e.bars.data[n]) && ($("#time").text(new Date(r[0]).Format("hh:mm")), $("#price").text(r[4].toFixed(6)), $("#volume").text(r[5].toFixed(0)), $("#updown").text((0 == r[4] ? 0 : r[4] - e.preClose).toFixed(6)), $("#price").css("color", r[4] >= e.preClose ? "red" : "green"), $("#updown").css("color", r[4] >= e.preClose ? "red" : "green")), t < 0 || t >= e.bars.data.length) return "";
            if (0 != $e(e.mouse.x, e.mouse.y) && 1 != $e(e.mouse.x, e.mouse.y) && 2 != $e(e.mouse.x, e.mouse.y) && 3 != $e(e.mouse.x, e.mouse.y) || (e.curIndex = t, mobile && e.updateXFK && e.updateXFK(!1)), void 0 === e.bars.data[t]) return "";
            var o = e.bars.data[t][0],
                i = e.bars.data[t][1],
                s = e.bars.data[t][2],
                a = e.bars.data[t][3],
                l = e.bars.data[t][4],
                c = (e.bars.data[t][5], []),
                u = e.bars.data[t + 1];
            return c = [z(o, !1, Settings.localTime), "  ", " O:", ae(i), " H:", ae(s), " L:", ae(a), " C:", ae(l), " CHANGE:", (u ? 100 * (l - u[4]) / u[4] : 0).toFixed(2) + "%", " AMPLITUDE:", (u ? 100 * (s - a) / u[4] : 0).toFixed(2) + "%"], "cn" == localStorage.lang && (c = [z(o, !1, Settings.localTime), "  ", " 开:", ae(i), " 高:", ae(s), " 低:", ae(a), " 收:", ae(l), " 涨幅:", (u ? 100 * (l - u[4]) / u[4] : 0).toFixed(2) + "%", " 振幅:", (u ? 100 * (s - a) / u[4] : 0).toFixed(2) + "%"]), mobile ? "" : c.join("")
        }

        function z(e, t, n) {
            var r = new Date(e),
                o = "";
            return !0 === n ? (o = r.getFullYear() + "-", o += r.getMonth() + 1 < 10 ? "0" : "", o += r.getMonth() + 1 + "-", o += r.getDate() < 10 ? "0" : "", o += r.getDate() + " ", o += r.getHours() < 10 ? "0" : "", o += r.getHours() + ":", o += r.getMinutes() < 10 ? "0" : "", o += r.getMinutes(), t && (o += (r.getSeconds(), "0"), o += r.getSeconds())) : (o = r.getUTCFullYear() + "-", o += r.getUTCMonth() + 1 < 10 ? "0" : "", o += r.getUTCMonth() + 1 + "-", o += r.getUTCDate() < 10 ? "0" : "", o += r.getUTCDate() + " ", o += r.getUTCHours() < 10 ? "0" : "", o += r.getUTCHours() + ":", o += r.getUTCMinutes() < 10 ? "0" : "", o += r.getUTCMinutes(), t && (o += (r.getUTCSeconds(), "0"), o += r.getUTCSeconds())), o
        }
        Date.prototype.Format = function(e) {
            var t = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var n in t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
            return e
        };
        var W = [_("Jan"), _("Feb"), _("Mar"), _("Apr"), _("May"), _("Jun"), _("Jul"), _("Aug"), _("Sep"), _("Oct"), _("Nov"), _("Dec")];

        function G(e, t) {
            var n = new Date(e);
            return !0 === t ? n.getFullYear() : n.getUTCFullYear()
        }

        function Y(e, t) {
            var n = new Date(e);
            return !0 === t ? n.getMonth() + 1 : n.getUTCMonth() + 1
        }

        function K(e, t) {
            var n = new Date(e);
            return !0 === t ? W[n.getMonth()] : W[n.getUTCMonth()]
        }

        function Q(e, t, n) {
            var r = new Date(e),
                o = "";
            return !0 === n ? (t && (o = r.getFullYear() + "/"), o += r.getMonth() + 1 + "/", o += r.getDate()) : (t && (o = r.getUTCFullYear() + "/"), o += r.getUTCMonth() + 1 + "/", o += r.getUTCDate()), o
        }

        function X(e, t) {
            var n = new Date(e),
                r = "";
            return r += !0 === t ? n.getDate() : n.getUTCDate()
        }

        function J(e, t, n) {
            var r = new Date(e),
                o = "";
            return !0 === n ? (o = r.getHours() + ":", o += r.getMinutes() < 10 ? "0" : "", o += r.getMinutes(), t && (o += ":" + (r.getSeconds() < 10 ? "0" : ""), o += r.getSeconds())) : (o = r.getUTCHours() + ":", o += r.getUTCMinutes() < 10 ? "0" : "", o += r.getUTCMinutes(), t && (o += ":" + (r.getUTCSeconds() < 10 ? "0" : ""), o += r.getUTCSeconds())), o
        }

        function Z(e, t) {
            if (!0 === t) {
                var n = new Date(e);
                return 0 == n.getHours() && 0 == n.getMinutes() && 0 == n.getSeconds()
            }
            return e % 86400 == 0
        }

        function ee(t, n) {
            t.textBaseline = "bottom", t.textAlign = "center";
            var r = e.font.size + "px/" + e.font.lineHeight + "em " + e.font.face;
            n ? (r += " bold", t.fillStyle = e.colors.stroke.crosshair) : t.fillStyle = e.colors.fill.label, t.font = r
        }

        function te(t, n, r) {
            var o = e.h - (e.px.lbl.h - e.px.lbl.font) / 2,
                i = de(r);
            t.fillText(n, i, o)
        }

        function ne(t, n) {
            return t > e.w - e.px.lbl.w - e.px.lbl.tick - 1 - n / 2 ? e.w - e.px.lbl.w - e.px.lbl.tick - 1 - n / 2 : t < n / 2 ? n / 2 : t
        }

        function re(t, n, r, o) {
            var i = fe(r, n);
            oe(t, e.w - e.px.lbl.tick - e.px.lbl.w, i, o)
        }

        function oe(t, n, r, o) {
            le(t, n, r), ce(t, n + e.px.lbl.tick, r), t.fillText(o, n + e.px.lbl.tick + 2, r, e.px.lbl.w)
        }

        function ie(t, n, r, o) {
            if (1 != e.colors.stroke.opacity) {
                var i, s = fe(r, n),
                    a = e.w - e.px.lbl.tick - e.px.lbl.w - 3;
                s < (i = e.slots[n].px + 1 + Math.ceil(e.px.lbl.font / 2)) ? s = i : s > (i = e.slots[n].px + e.slots[n].h - Math.ceil(e.px.lbl.font / 2)) && (s = i), se(t, a, s, o)
            }
        }

        function se(t, n, r, o) {
            var i, s, a = e.px.lbl.font / 2;
            t.beginPath(), le(t, n, r), ce(t, i = n + ~~a, s = ~~(r - 1 - a)), i = n + e.px.lbl.w + e.px.lbl.tick + 1, t.lineTo(.6 + (0 | i), .5 + (0 | s)), le(t, i, s), ce(t, i, s = Math.ceil(r + 1 + a)), ce(t, i = n + ~~a, s), ce(t, n, r), t.fill(), t.stroke(), t.fillStyle = e.colors.fill.flagtext, t.fillText(o, n + e.px.lbl.tick + 5, r + 1)
        }

        function ae(e) {
            return e.toFixed(Data.qouteFixed || 8)
        }

        function le(e, t, n) {
            e.moveTo(.5 + (0 | t), .5 + (0 | n))
        }

        function ce(e, t, n) {
            e.lineTo(.5 + (0 | t), .5 + (0 | n))
        }

        function ue(e, t, n, r, o) {
            e.fillRect(0 | t, 0 | n, 0 | r, 0 | o)
        }

        function pe(e, t, n, r, o) {
            e.strokeRect(.5 + (0 | t), .5 + (0 | n), 0 | r, 0 | o)
        }

        function fe(t, n) {
            var r, o = null;
            if (e.slots[n].hasOwnProperty("main")) {
                if (o = [e.price.low, e.price.high], e.settings.logscale) return e.log.m * log10(t) + e.log.b;
                r = e.price.range
            } else o = e.slots[n].i.bounds(), r = Math.max(o[1] - o[0], 1e-8);
            var i = (o[1] - t) / r;
            return e.slots[n].px + Math.ceil(e.slots[n].h * i)
        }

        function de(t) {
            var n = ve();
            return e.bars.visible > e.bars.data.length ? he(t) - he(n[1]) + (e.px.bar.width + 1) / 2 : he(t)
        }

        function he(t) {
            return e.w - e.px.lbl.w - e.px.lbl.tick - 1 - (t + 1) * (e.px.bar.spacing + e.px.bar.width) + (e.px.bar.width + 1) / 2 | 0
        }

        function ge(t) {
            var n, r = ve();
            return e.bars.visible > e.bars.data.length ? r[1] - (t - (e.px.bar.spacing + e.px.bar.width) / 2) / (e.px.bar.spacing + e.px.bar.width) | 0 : (n = t, (e.w - e.px.lbl.w - e.px.lbl.tick - 1 - e.px.bar.spacing / 2 - n) / (e.px.bar.spacing + e.px.bar.width) | 0)
        }

        function me(t, n) {
            var r = null;
            if (e.slots[t].hasOwnProperty("main")) {
                if (e.settings.logscale) return Math.pow(10, (n - e.log.b) / e.log.m);
                r = [e.price.low, e.price.high]
            } else r = e.slots[t].i.bounds();
            var o = Math.max(r[1] - r[0], 1e-8),
                i = (n - e.slots[t].px) / e.slots[t].h;
            return r[1] - i * o
        }

        function ve() {
            return void 0 === e.bars.data || 0 == e.bars.data.length ? [0, -1] : [Math.max(0, be(0)), Math.min(e.bars.data.length - 1, be(e.bars.visible))]
        }

        function be(t) {
            return t + e.bars.offset - e.bars.blank
        }

        function ye(t) {
            return t - e.bars.offset + e.bars.blank
        }

        function $e(t, n) {
            if (t >= e.w - e.px.lbl.w - e.px.lbl.tick - 1) return null;
            if (t < e.offset) return null;
            if (n >= e.h - e.px.lbl.h - 1) return null;
            if (n <= e.slots[0].px + e.slots[0].h) return 0;
            for (var r = 1; r < e.slots.length; r++) {
                if (n < e.slots[r].px) return -r;
                if (n <= e.slots[r].px + e.slots[r].h) return r
            }
        }

        function xe(t, n) {
            return !(n < e.h - e.px.lbl.h) && (!(t > e.w - e.px.lbl.w) && !(t < e.offset))
        }

        function we() {
            e.settings.crosshairs && window.reqAnimFrame(function() {
                H()
            })
        }

        function ke(t, n, r, o, i, s, a) {
            var l = new Array(o, i),
                c = new Array(s, a);
            t.fillStyle = e.colors.stroke.arrow, t.strokeStyle = e.colors.stroke.arrow, t.beginPath(), t.translate(n, r, 0), t.moveTo(l[0], l[1]), t.lineTo(c[0], c[1]), t.fill(), t.stroke(), t.save(), t.translate(c[0], c[1]);
            var u = (c[0] - l[0]) / (c[1] - l[1]);
            u = Math.atan(u), c[1] - l[1] >= 0 ? t.rotate(-u) : t.rotate(Math.PI - u), t.lineTo(-5, -10), t.lineTo(0, -5), t.lineTo(5, -10), t.lineTo(0, 0), t.fill(), t.restore(), t.closePath()
        }
        var Te, Se, Ce, Ee = 0,
            Ae = 0;

        function Pe() {
            e.canvas.i.on({
                mousedown: function(t) {
                    if (!e.stopEvent && !mobile) {
                        e.mouse.origOffset = e.bars.offset, e.mouse.origOffsetBlank = e.bars.blank, e.mouse.origSpacing = e.px.bar.spacing, Ne(t), e.mouse.sx = e.mouse.x, e.mouse.sy = e.mouse.y, Se = t.offsetX, Ce = t.offsetY;
                        var n, r, o = $e(e.mouse.x, e.mouse.y);
                        if (null == o ? (xe(e.mouse.x, e.mouse.y) ? (e.canvas.i.css("cursor", "e-resize"), e.mouse.zoom = !0, e.mouse.w0 = +e.px.bar.width) : e.canvas.i.css("cursor", "default"), we()) : o < 0 ? (e.canvas.i.css("cursor", "n-resize"), e.mouse.resize = !0, e.mouse.re_slot = -o, e.mouse.re_slots.px0 = e.slots[e.mouse.re_slot - 1].px, e.mouse.re_slots.h0 = e.slots[e.mouse.re_slot - 1].h, e.mouse.re_slots.px1 = e.slots[e.mouse.re_slot].px, e.mouse.re_slots.h1 = e.slots[e.mouse.re_slot].h, we()) : (e.mouse.down = !0, we(), e.settings.crosshairs ? (e.canvas.i.css("cursor", "none"), window.reqAnimFrame(function() {
                                U(e.mouse.x, e.mouse.y)
                            })) : e.canvas.i.css("cursor", "crosshair")), e.settings.icontrols && o != e.mouse.slot)
                            for (null != o && o >= 0 && $(".control-" + o, e.element).show(), n = 0; n < e.slots.length; n++) n != o && ((r = $(".control-" + n, e.element)).data("popped") || r.hide());
                        e.mouse.slot = o, _e(t), t.preventDefault(), t.stopPropagation()
                    }
                },
                mouseup: function(t) {
                    e.stopEvent || mobile || (e.mouse.down = !1, e.mouse.resize = !1, e.mouse.zoom = !1, Math.abs(Se - t.offsetX) < 1 && Math.abs(Ce - t.offsetY) < 1 && (e.notClicked = !e.notClicked, $(e.element).focus(), v()), _e(t), xe(e.mouse.x, e.mouse.y) ? e.canvas.i.css("cursor", "e-resize") : e.canvas.i.css("cursor", "none"), t.ctrlKey && t.shiftKey && ($e(e.mouse.x, e.mouse.y) >= 0 && e.settings.crosshairs && (e.canvas.i.css("cursor", "none"), U(e.mouse.x, e.mouse.y)), Ge()))
                },
                contextmenu: function(t) {
                    return Ne(t), $e(e.mouse.x, e.mouse.y) >= 0 && e.settings.crosshairs && (e.canvas.i.css("cursor", "none"), U(e.mouse.x, e.mouse.y)), Ge(), t.stopPropagation(), t.preventDefault(), !1
                },
                mouseout: function(t) {
                    e.mouse.down = !1, e.mouse.resize = !1, e.mouse.zoom = !1, e.canvas.i.css("cursor", "none"), we(), e.mouse.slot = -1
                },
                mousemove: function(t) {
                    if (!mobile && ((e.mouse.down || e.mouse.resize || e.mouse.zoom) && (e.flags.recompute = !0, _e(t)), t.offsetY != Ee || t.offsetX != Ae)) {
                        Ee = t.offsetY, Ae = t.offsetX, Ne(t);
                        var n, r, o = $e(e.mouse.x, e.mouse.y);
                        e.canvas.i[0].getContext("2d");
                        if (null == o ? (xe(e.mouse.x, e.mouse.y) ? e.canvas.i.css("cursor", "e-resize") : e.canvas.i.css("cursor", "default"), we()) : o < 0 ? (e.canvas.i.css("cursor", "n-resize"), we()) : e.settings.crosshairs ? (e.canvas.i.css("cursor", "none"), window.reqAnimFrame(function() {
                                U(e.mouse.x, e.mouse.y)
                            })) : e.canvas.i.css("cursor", "crosshair"), e.settings.icontrols && o != e.mouse.slot)
                            for (null != o && o >= 0 && $(".control-" + o, e.element).show(), n = 0; n < e.slots.length; n++) n != o && ((r = $(".control-" + n, e.element)).data("popped") || r.hide());
                        e.mouse.slot = o, (e.mouse.down || e.mouse.resize || e.mouse.zoom) && (e.mouse.down || e.mouse.zoom ? $(e.canvas.i).css("cursor", "e-resize") : e.canvas.i.css("cursor", "n-resize"))
                    }
                },
                dblclick: function(t) {
                    e.stopEvent || (e.mode.display, e.CANDLE, e.mouse.down = !1)
                },
                touchstart: function(t) {
                    if (1 == t.originalEvent.touches.length && (timeOutEvent = setTimeout(function() {
                            Te = !0, Ie(t), $(".chartDetail").show(), $("html,body", parent.document).addClass("hidden")
                        }, 300)), e.mouse.origOffset = e.bars.offset, e.mouse.origSpacing = e.px.bar.spacing, t.originalEvent.touches[0].clientX) e.mouse.sx = t.originalEvent.touches[0].clientX, e.mouse.sy = t.originalEvent.touches[0].clientY;
                    else if (t.originalEvent.touches[0].pageX) {
                        var n = e.canvas.i.offset();
                        e.mouse.sx = t.originalEvent.touches[0].pageX - n.left, e.mouse.sy = t.originalEvent.touches[0].pageY - n.top
                    }
                    e.startTouchCoords = [];
                    for (var r = 0; r < t.originalEvent.touches.length; ++r) e.startTouchCoords.push([t.originalEvent.touches[r].clientX, t.originalEvent.touches[r].clientY])
                },
                touchmove: function(t) {
                    var n, r;
                    if (t.originalEvent.touches[0].clientX) n = t.originalEvent.touches[0].clientX, r = t.originalEvent.touches[0].clientY;
                    else if (t.originalEvent.touches[0].pageX) {
                        var o = e.canvas.i.offset();
                        n = t.originalEvent.touches[0].pageX - o.left, r = t.originalEvent.touches[0].pageY - o.top
                    }(Math.abs(e.mouse.sx - n) > 6 || Math.abs(e.mouse.sy - r) > 6) && clearTimeout(timeOutEvent), 0 != Te ? Ie(t) : function(t) {
                        if (e.bars.allowScale = !0, (new Date).getTime() - e.lastPinchTime < 1e3) return;
                        if (2 == t.originalEvent.touches.length && 2 == e.startTouchCoords.length) {
                            var n = Math.sqrt(Math.pow(e.startTouchCoords[0][0] - e.startTouchCoords[1][0], 2) + Math.pow(e.startTouchCoords[0][1] - e.startTouchCoords[1][1], 2)),
                                r = Math.sqrt(Math.pow(t.originalEvent.touches[0].clientX - t.originalEvent.touches[1].clientX, 2) + Math.pow(t.originalEvent.touches[0].clientY - t.originalEvent.touches[1].clientY, 2)),
                                o = r / n;
                            if (o > 1 && (o *= 1.3), o < 1 && (o *= .7), null != o) {
                                w = e.px.bar.width;
                                var i = Math.round(e.px.bar.width * o);
                                e.px.bar.width = i + (i + 1) % 2, e.px.bar.width < 2 && (e.px.bar.width = 2), e.px.bar.width > 51 && (e.px.bar.width = 51), e.px.bar.width != w && (Le(), v(), Me()), e.lastZoomTime = (new Date).getTime()
                            }
                            return
                        }
                        if (t.originalEvent.touches.length > 1) return;
                        if ((new Date).getTime() - e.lastZoomTime < 1e3) return;
                        e.flags.recompute = !0, e.bars.offset = e.mouse.origOffset + Math.round((t.originalEvent.touches[0].clientX - e.mouse.sx) / (e.px.bar.width + e.px.bar.spacing)), Le(), e.bars.offset != e.mouse.origOffset && (v(), Me());
                        e.canvas.i.css("cursor", "e-resize")
                    }(t)
                },
                touchend: function(t) {
                    clearTimeout(timeOutEvent), Te = !1, $(".chartDetail").hide(), $("html,body", parent.document).removeClass("hidden"),
                        function(t) {
                            if (e.bars.allowScale = !0, 1 == t.originalEvent.changedTouches.length && 1 == e.startTouchCoords.length && e.startTouchCoords[0][1] != t.originalEvent.changedTouches[0].clientY && Math.abs((e.startTouchCoords[0][0] - t.originalEvent.changedTouches[0].clientX) / (e.startTouchCoords[0][1] - t.originalEvent.changedTouches[0].clientY)) < .15) {
                                var n = $e(e.mouse.sx, e.mouse.sy),
                                    r = 0;
                                r = t.originalEvent.changedTouches[0].clientY > e.startTouchCoords[0][1] ? 1 : -1, 0 == n ? (e.currentOverlay = (e.currentOverlay + e.mobileOverlays.length + r) % e.mobileOverlays.length, function(t) {
                                    if (e.overlays.hasOwnProperty(t)) {
                                        for (; e.slots[0].u.length > 0;) h(e.slots[0].u.length - 1, "u", 0);
                                        f(t)
                                    }
                                }(e.mobileOverlays[e.currentOverlay])) : n > 0 && (e.currentIndicator = (e.currentIndicator + e.mobileIndicators.length + r) % e.mobileIndicators.length, function(t) {
                                    if (e.indicators.hasOwnProperty(t)) {
                                        for (; e.slots.length > 2;) g(e.slots.length - 1);
                                        d(t)
                                    }
                                }(e.mobileIndicators[e.currentIndicator]))
                            }
                        }(t), we()
                }
            }), e.canvas.i.bind("mousewheel", De), e.canvas.i.bind("pinch", Oe), RTBTC.handler("barclose", e.element, We)
        }

        function De(t, n, r, o) {
            if (!(e.stopEvent || e.notClicked || (stopEvent(t), isNaN(r) || isNaN(o)))) {
                if (0 != r && (e.mouse.origOffset = e.bars.offset, e.bars.offset -= r, Le(), e.bars.offset != e.mouse.origOffset && (v(), Me())), 0 != o) {
                    var i = e.px.bar.width;
                    e.px.bar.width += o, Fe(), e.px.bar.width < 2 && (e.px.bar.width = 2), e.px.bar.width > 51 && (e.px.bar.width = 51), e.px.bar.width != i && (Le(), v(), Me())
                }
                localStorage.barWidth = e.px.bar.width
            }
        }

        function Ne(t) {
            if (t.offsetX) e.mouse.x = t.offsetX, e.mouse.y = t.offsetY;
            else if (t.pageX) {
                var n = e.canvas.i.offset();
                e.mouse.x = t.pageX - n.left, e.mouse.y = t.pageY - n.top
            }
        }

        function Oe(t, n) {
            if (null != n.scale) {
                w = e.px.bar.width;
                var r = Math.round(e.px.bar.width * n.scale);
                e.px.bar.width = r + (r + 1) % 2, e.px.bar.width < 2 && (e.px.bar.width = 2), e.px.bar.width > 51 && (e.px.bar.width = 51), e.px.bar.width != w && (Le(), v(), Me()), e.lastPinchTime = (new Date).getTime()
            }
            n.originalEvent.preventDefault(), n.originalEvent.stopPropagation()
        }

        function Ie(t) {
            t.pageX = t.originalEvent.touches[0].pageX, t.pageY = t.originalEvent.touches[0].pageY, Ne(t);
            var n = $e(e.mouse.x, e.mouse.y);
            e.canvas.i[0].getContext("2d");
            null == n ? we() : n < 0 ? (e.canvas.i.css("cursor", "n-resize"), we()) : e.settings.crosshairs ? (e.canvas.i.css("cursor", "none"), window.reqAnimFrame(function() {
                U(e.mouse.x, e.mouse.y)
            })) : e.canvas.i.css("cursor", "crosshair"), e.mouse.slot = n, t.originalEvent.preventDefault(), t.originalEvent.stopPropagation()
        }

        function Me() {
            ve()[1] > -1 && e.bars.offset >= e.bars.data.length - e.bars.visible + e.bars.blank + e.bars.endpad - 3 && Data.loadPrev(Ue())
        }

        function _e(t) {
            if (Ne(t), e.mouse.down)
                if (t.ctrlKey) {
                    var n = e.px.bar.spacing;
                    e.px.bar.spacing = e.mouse.origSpacing + Math.round((e.mouse.sx - e.mouse.x) / 10), e.px.bar.spacing < 0 && (e.px.bar.spacing = 0), e.px.bar.spacing > 51 && (e.px.bar.spacing = 51), e.px.bar.spacing != n && (v(), Me())
                } else 0 == e.mouse.origOffsetBlank && (e.bars.offset = e.mouse.origOffset + Math.round((e.mouse.x - e.mouse.sx) / (e.px.bar.width + e.px.bar.spacing))), 0 == e.mouse.origOffset && (e.bars.blank = e.mouse.origOffsetBlank + Math.round((e.mouse.sx - e.mouse.x) / (e.px.bar.width + e.px.bar.spacing)), Fe()), Le(), e.bars.offset == e.mouse.origOffset && 0 != e.bars.offset || (v(), Me());
            else if (e.mouse.zoom) {
                var r = e.mouse.x - e.mouse.sx,
                    o = +e.px.bar.width;
                e.px.bar.width = e.mouse.w0 - 2 * (r / 10 | 0), e.px.bar.width < 3 && (e.px.bar.width = 3), e.px.bar.width > 51 && (e.px.bar.width = 51), e.px.bar.width != o && (Le(), v(), Me())
            } else if (e.mouse.resize) {
                var i = e.mouse.y - e.mouse.sy;
                if (e.slots[e.mouse.re_slot - 1].h = e.mouse.re_slots.h0 + i, e.slots[e.mouse.re_slot - 1].h < e.px.slotmin && (i = e.px.slotmin - e.mouse.re_slots.h0, e.slots[e.mouse.re_slot - 1].h = e.px.slotmin), e.slots[e.mouse.re_slot].h = e.mouse.re_slots.h1 - i, e.slots[e.mouse.re_slot].px = e.mouse.re_slots.px1 + i, e.slots[e.mouse.re_slot].h < e.px.slotmin && (i = e.mouse.re_slots.h1 - e.px.slotmin, e.slots[e.mouse.re_slot].h = e.px.slotmin, e.slots[e.mouse.re_slot].px = e.mouse.re_slots.px1 + i), e.slots[e.mouse.re_slot - 1].h = e.mouse.re_slots.h0 + i, e.slots[e.mouse.re_slot - 1].h < e.px.slotmin) {
                    var s = (e.slots[e.mouse.re_slot - 1].h + e.slots[e.mouse.re_slot].h) / 2;
                    e.slots[e.mouse.re_slot].h = s, e.slots[e.mouse.re_slot - 1].h = s, e.slots[e.mouse.re_slot].px = e.slots[e.mouse.re_slot - 1].px + e.slots[e.mouse.re_slot - 1].h + e.px.pad + 3
                }
                for (var a = 0; a < e.slots.length; a++) $(".control-" + a, e.element).css("top", e.slots[a].px + 3 + "px");
                v()
            }
        }

        function Le() {
            e.bars.offset > e.bars.data.length - e.bars.visible + e.bars.blank + e.bars.endpad && (e.bars.offset = e.bars.data.length - e.bars.visible + e.bars.blank + e.bars.endpad), e.bars.offset < 0 && (e.bars.offset = 0)
        }

        function Fe() {
            var t = e.bars.visible,
                n = 0;
            n = e.bars.data.length > t ? t / 2 : e.bars.data.length > t / 2 ? (e.bars.data.length - t / 2) / 2 : 0, n = parseInt(n), e.bars.blank > n && (e.bars.blank = n), e.bars.blank < 0 && (e.bars.blank = 0)
        }

        function Be() {
            e.resize.avail = e.h - (e.slots.length * (2 + e.px.pad) - e.px.pad - 1 + e.px.lbl.h), e.resize.slots = [], e.resize.pct = [];
            for (var t = 0; t < e.slots.length; t++) e.resize.slots.push(e.slots[t].h), e.resize.pct.push(e.slots[t].h / e.resize.avail);
            c()
        }

        function Re() {
            var n = $(e.element).width(),
                r = $(e.element).height();
            if (e.w != n || e.h != r) {
                e.w = n, e.h = r, DEBUG && t("@@@@@@@_P.w, h: " + e.w + ", " + e.h), $("canvas", e.element).each(function(t, n) {
                    $(n).attr("width", e.w + "px").attr("height", e.h + "px")
                }), $("canvas", e.element).attr("val", !1), je();
                e.canvas.i[0].getContext("2d");
                e.canvas.line[0].getContext("2d"), v()
            }
        }

        function je() {
            var t, n, r = (e.slots.length - 1) * (2 + e.px.pad) + 1 + e.px.lbl.h,
                o = e.h - r,
                i = -1,
                s = 0;
            for (t = 0; t < e.slots.length; t++) e.slots[t].h = e.resize.pct[t] * o | 0, e.slots[t].px = i, i += e.slots[t].h + 2 + e.px.pad, s += e.slots[t].h;
            for (t = 0; s < o;) {
                for (e.slots[t % e.slots.length].h += 1, s += 1, n = 1 + t % e.slots.length; n < e.slots.length; n++) e.slots[n].px += 1;
                t++
            }
            for (t = 0; s > o;) {
                for (e.slots[t % e.slots.length].h -= 1, s -= 1, n = 1 + t % e.slots.length; n < e.slots.length; n++) e.slots[n].px -= 1;
                t++
            }
            for (t = 0; t < e.slots.length; t++) $(".control-" + t, e.element).css("top", e.slots[t].px + 3 + "px")
        }

        function qe() {
            je(), v()
        }

        function Ue() {
            return e.period.avail[e.period.current]
        }

        function He() {
            switch (e.mode.current) {
                case e.TIME_BAR:
                    return Ve();
                case e.VOL_BAR:
                    return n = void 0 === t ? e.volume.avail[e.volume.current] : t, (n |= 0) < 1e3 ? "V" + n : n < 1e6 ? "V" + ~~(n / 1e3) + "K" : n < 1e9 ? "V" + ~~(n / 1e6) + "M" : "V" + ~~(n / 1e9) + "B";
                default:
                    return ""
            }
            var t, n
        }

        function Ve(t) {
            var n = void 0 === t ? e.period.avail[e.period.current] : t;
            return 0 == n ? "Ticks" : n < 60 ? "S" + n : n < 3600 ? "M" + (n / 60 | 0) : n < 86400 ? "H" + (n / 3600 | 0) : n < 604800 ? "D" + (n / 86400 | 0) : n < 2592e3 ? "W" + (n / 604800 | 0) : (n / 2592e3 | 0) + "M"
        }

        function ze() {
            var t = RTBTC.exchangeName() + " " + RTBTC.base() + "/" + RTBTC.quote() + ", " + He();
            e.module.setTitle(t)
        }

        function We(n) {
            void 0 === n && (n = Ue()), isNaN(+n) || e.mode.current == e.TIME_BAR && n == e.period.avail[e.period.current] && (DEBUG && t("handling bar close for period: " + n), e.bars.data = Data.data.bars[n], v())
        }

        function Ge() {
            if (!mobile) {
                var t, n, r, o, i, s, a = e.font.headingSize,
                    l = 1.25 * a,
                    c = 2.75 * l | 0,
                    u = $("<canvas/>").attr("width", e.w).attr("height", e.h + c),
                    p = u[0].getContext("2d"),
                    f = RTBTC.base() + "/" + RTBTC.quote(),
                    d = ", " + (0 == (s = void 0 === i ? e.period.avail[e.period.current] : i) ? _("Ticks") : s < 60 ? s + " NaN" : s < 3600 ? (s / 60 | 0) + " " + _("minute") : s < 86400 ? (s / 3600 | 0) + " " + _("hour") : s < 604800 ? (s / 86400 | 0) + " " + _("day") : s < 2592e3 ? (s / 604800 | 0) + " " + _("week") : (s / 2592e3 | 0) + " " + _("month")) + " " + _("bars"),
                    h = ve(),
                    g = Settings.localTime;
                if (p.fillStyle = e.colors.fill.blankBG, p.fillRect(0, c, e.w, e.h), p.fillStyle = e.colors.fill.bg, p.fillRect(0, 0, e.w, c), p.fillStyle = e.colors.stroke.crosshair, p.font = e.font.headingBold, p.textBaseline = "middle", r = p.measureText(f).width, t = p.measureText(e.watermark).width, n = e.w - t - a, h[1] >= h[0]) {
                    for (p.fillText(f, a / 2, l), p.font = e.font.heading, p.fillStyle = e.colors.fill.slottext, p.fillText(d, a / 2 + r, l, n - r), o = h[1]; o > h[0]; o--)
                        if (o < e.bars.data.length) {
                            d = Q(e.bars.data[o][0], !0, g) + " " + J(e.bars.data[o][0], g);
                            break
                        }
                    for (d += " - ", o = h[0]; o < h[1]; o++)
                        if (o >= 0) {
                            d += Q(e.bars.data[o][0], !0, g) + " " + J(e.bars.data[o][0], g);
                            break
                        }
                    p.fillText(d, a / 2, 2 * l, n - e.px.lbl.tick - e.px.lbl.w)
                } else p.fillText(f, a / 2, 2 * l), p.font = e.font.heading, p.fillStyle = e.colors.fill.slottext, p.fillText(d, a / 2 + r, 2 * l, n - r);
                p.fillText(e.watermark, e.w - t - a / 2 - e.px.lbl.tick - e.px.lbl.w, 2 * l), p.drawImage(e.canvas.base[0], 0, c), p.drawImage(e.canvas.bg[0], 0, c), p.drawImage(e.canvas.main[0], 0, c), p.drawImage(e.canvas.fg[0], 0, c), p.drawImage(e.canvas.orders[0], 0, c), p.drawImage(e.canvas.lbl[0], 0, c), p.drawImage(e.canvas.line[0], 0, c), p.drawImage(e.canvas.i[0], 0, c), p.strokeStyle = e.colors.stroke.border, p.lineWidth = 1, p.beginPath(), le(p, 0, c), ce(p, e.w - e.px.lbl.tick - e.px.lbl.w, c), p.stroke();
                var m = u[0].toDataURL("image/png");
                if (has_dataURI()) window.open(m, "_blank");
                else {
                    var v = window.open(BASE_URL + "blank.html");
                    v.data = '<img src="' + m + '"/>', v.document.write(v.data), v.focus()
                }
            }
        }
        return {
            build: function(n, o, i) {
                return e.element = n, e.parent = o, $(e.element).empty(), e.w = $(e.element).width(), e.h = $(e.element).height(), DEBUG && t("#######################_P.w, h: " + e.w + ", " + e.h), e.canvas.base = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 100), e.canvas.bg = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 101), e.canvas.main = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 102), e.canvas.fg = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 103), e.canvas.orders = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 104), e.canvas.lbl = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 105), e.canvas.line = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 106).attr("id", "line"), e.canvas.i = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 107), $(e.element).append(e.canvas.base).append(e.canvas.bg).append(e.canvas.main).append(e.canvas.fg).append(e.canvas.orders).append(e.canvas.lbl).append(e.canvas.line).append(e.canvas.i), e.canvas.line[0].getContext("2d"), Pe(), r(i),
                    function() {
                        var t, n, r;
                        for (t = 0; t < e.slots.length; t++) {
                            if (e.slots[t].hasOwnProperty("main")) {
                                for (n = 0; n < e.slots[t].u.length; n++) r = void 0 !== e.slots[t].u[n].c && null != e.slots[t].u[n].c ? e.slots[t].u[n].c : C(t), e.slots[t].u[n].i = (new Indicator).build(e.slots[t].u[n].t, e.slots[t].u[n].s).color(r);
                                for (n = 0; n < e.slots[t].o.length; n++) r = void 0 !== e.slots[t].o[n].c && null != e.slots[t].o[n].c ? e.slots[t].o[n].c : C(t), e.slots[t].o[n].i = (new Indicator).build(e.slots[t].o[n].t, e.slots[t].o[n].s).color(r)
                            } else e.slots[t].i = (new Indicator).build(e.slots[t].t, e.slots[t].s);
                            e.slots[t].control = a(t), $(e.element).append(e.slots[t].control)
                        }
                    }(), $(e.element).attr("tabindex", 0).keydown(function(t) {
                        if (37 == t.keyCode || 39 == t.keyCode) {
                            if (e.mouse.x < 0 && (e.mouse.x = 0), e.mouse.x > de(0) && (e.mouse.x = de(0)), 37 == t.keyCode) {
                                e.mode.display, e.CANDLE;
                                var n = e.mouse.x - e.px.bar.width - e.px.bar.spacing;
                                (r = ge(n < 0 ? 0 : n)) > e.bars.visible - 4 ? be(r) < e.bars.data.length && (e.bars.offset++, v()) : (e.mouse.x -= e.px.bar.width + e.px.bar.spacing, e.mouse.x < 0 && (e.mouse.x = 0))
                            } else if (39 == t.keyCode) {
                                var r;
                                0 == (r = ge(e.mouse.x + e.px.bar.width + e.px.bar.spacing)) && e.bars.offset > 0 ? (e.bars.offset--, v()) : e.mouse.x += e.px.bar.width + e.px.bar.spacing
                            }
                            e.bars.data[be(ge(e.mouse.x))] && (e.mouse.y = fe(e.bars.data[be(ge(e.mouse.x))][4], 0)), window.reqAnimFrame(function() {
                                U(e.mouse.x, e.mouse.y, !0)
                            })
                        }
                    }), s(), window.setTimeout(function() {
                        RTBTC.trigger("what-theme", null)
                    }, 100), $(e.element).on("mouseleave", function() {
                        ! function() {
                            var t, n;
                            for (t = 0; t < e.slots.length; t++)(n = $(".control-" + t, e.element)).data("popped") || n.hide()
                        }()
                    }), $(e.element).on("keydown", function(t) {
                        38 == t.keyCode && De(e.element, 0, 0, 1), 40 == t.keyCode && De(e.element, 0, 0, -1)
                    }), this
            },
            lblWidth: function() {
                return e.px.lbl.w
            },
            module: function(t) {
                return e.module = t, ze(), RTBTC.handler("barclose", e.module.id(), e.self.onBarClose), RTBTC.handler("theme", e.module.id(), e.self.onTheme), RTBTC.handler("trade", e.module.id(), e.self.onTrade), RTBTC.handler("bidask", e.module.id(), e.self.bidask), RTBTC.handler("orders", e.module.id(), x), RTBTC.handler("order-canceled", e.module.id(), y), this
            },
            self: function(t) {
                return e.self = t, this
            },
            settings: function() {
                return function() {
                    var t, n = [],
                        r = [],
                        o = [{
                            val: 0,
                            text: _("Indicator…")
                        }],
                        i = [{
                            val: 0,
                            text: _("Overlay…")
                        }];
                    for (t = 0; t < e.period.avail.length; t++) n.push({
                        val: e.period.avail[t],
                        text: Ve(e.period.avail[t])
                    });
                    for (t = 0; t < e.mode.avail_display.length; t++) r.push({
                        val: t,
                        text: e.mode.avail_display[t]
                    });
                    for (t in e.indicators) e.indicators.hasOwnProperty(t) && o.push({
                        val: t,
                        text: e.indicators[t]
                    });
                    for (t in e.overlays) e.overlays.hasOwnProperty(t) && i.push({
                        val: t,
                        text: e.overlays[t]
                    });
                    return [$("<p/>").append(RTBTC.select(e.period.avail[e.period.current], n, function(t) {
                        e.period.current = e.period.avail.indexOf(+t), ze(), v()
                    })).append($("<span/>").addClass("control-label").html(_("Time Period"))), $("<p/>").append(RTBTC.select(e.mode.display, r, function(t) {
                        e.mode.display = +t, v()
                    })).append($("<span/>").addClass("control-label").html(_("Draw Style"))), $("<p/>").append(RTBTC.toggle(e.settings.bidask, function() {
                        e.settings.bidask = !0
                    }, function() {
                        e.settings.bidask = !1
                    }, function() {
                        v()
                    })).append($("<span/>").addClass("control-label").html(_("Show Bid / Ask"))), $("<p/>").append(RTBTC.toggle(e.settings.crosshairs, function() {
                        e.settings.crosshairs = !0
                    }, function() {
                        e.settings.crosshairs = !1
                    }, function() {
                        v()
                    })).append($("<span/>").addClass("control-label").html(_("Show Crosshair"))), $("<p/>").append(RTBTC.toggle(e.settings.grid, function() {
                        e.settings.grid = !0
                    }, function() {
                        e.settings.grid = !1
                    }, function() {
                        v()
                    })).append($("<span/>").addClass("control-label").html(_("Show Grid"))), $("<p/>").append(RTBTC.toggle(e.settings.icontrols, function() {
                        e.settings.icontrols = !0
                    }, function() {
                        e.settings.icontrols = !1;
                        for (var t = 0; t < e.slots.length; t++) $(".control-" + t, e.element).hide().data("popped", !1)
                    }, function() {
                        v()
                    })).append($("<span/>").addClass("control-label").html(_("Show Indicator Controls"))), $("<p/>").append(RTBTC.toggle(e.settings.logscale, function() {
                        e.settings.logscale = !0
                    }, function() {
                        e.settings.logscale = !1
                    }, function() {
                        v()
                    })).append($("<span/>").addClass("control-label").html(_("Logarithmic Scale"))), $("<p/>").append(RTBTC.select(0, i, function(e) {
                        0 != +e && f(e)
                    }, !0)).append($("<span/>").addClass("control-label").html(_("Add Overlay"))), $("<p/>").append(RTBTC.select(0, o, function(e) {
                        0 != +e && d(e)
                    }, !0)).append($("<span/>").addClass("control-label").html(_("Add Indicator"))), $("<p/>").append(RTBTC.toggle(e.settings.userorders, function() {
                        e.settings.userorders = !0
                    }, function() {
                        e.settings.userorders = !1
                    }, function() {
                        v()
                    })).append($("<span/>").addClass("control-label").html(_("Show User Orders")))]
                }()
            },
            save: function() {
                return function() {
                    var t, n, r = {};
                    for (r.r = e.settings.repaint, r.g = e.settings.grid, r.c = e.settings.crosshairs, r.k = e.settings.icontrols, r.b = e.settings.bidask, r.l = e.settings.logscale, r.o = e.settings.userorders, r.m = +~~e.mode.current, r.d = +~~e.mode.display, r.t = +~~e.period.avail[e.period.current], r.w = +~~e.px.bar.width, r.s = +~~e.px.bar.spacing, r.i = [], t = 0; t < e.slots.length; t++)
                        if (e.slots[t].hasOwnProperty("main")) {
                            var o, i = [],
                                s = [];
                            for (n = 0; n < e.slots[t].o.length; n++) o = C(t, n, "o"), i.push({
                                t: e.slots[t].o[n].t,
                                s: e.slots[t].o[n].i.settings(),
                                c: o
                            });
                            for (n = 0; n < e.slots[t].u.length; n++) o = C(t, n, "u"), s.push({
                                t: e.slots[t].u[n].t,
                                s: e.slots[t].u[n].i.settings(),
                                c: o
                            });
                            r.i.push({
                                m: !0,
                                p: +~~e.slots[t].px,
                                h: +~~e.slots[t].h,
                                o: i,
                                u: s
                            })
                        } else r.i.push({
                            m: !1,
                            t: e.slots[t].t,
                            p: +~~e.slots[t].px,
                            h: +~~e.slots[t].h,
                            r: e.slots[t].i.settings()
                        });
                    return r
                }()
            },
            load: function(e) {
                r(e), v()
            },
            unload: function() {
                RTBTC.unregisterAll(e.module.id())
            },
            onBarClose: function(e) {
                We(e)
            },
            onTheme: function(t) {
                var n;
                n = t, Colors.hasOwnProperty(n) && (e.colors = Colors[n]), v()
            },
            setPreClose: function(t) {
                e.preClose = Number(t)
            },
            showDetail: function() {
                s()
            },
            onTrade: function(e) {
                v()
            },
            wheel: function(t) {
                De(e.element, 0, 0, -t)
            },
            loadTicks: function(n) {
                var r = e.bars.ticks;
                e.bars.ticks = [];
                for (var s = 0; s < n.length; s++) i(n[s]) && e.bars.ticks.push(n[s]);
                return 0 == e.bars.ticks.length ? (e.bars.ticks = r, t("Failed to load any new ticks!")) : (! function() {
                    var t;
                    if (e.bars.data = [], 0 != e.period.avail[e.period.current])
                        for (e.bars.data.push([e.bars.ticks[0][0], e.bars.ticks[0][1], e.bars.ticks[0][1], e.bars.ticks[0][1], e.bars.ticks[0][1], e.bars.ticks[0][2]]), t = 1; t < e.bars.ticks.length; t++) o(e.bars.ticks[t]);
                    else
                        for (t = 0; t < e.bars.ticks.length; t++) e.bars.splice(0, 0, [e.bars.ticks[t][0], e.bars.ticks[t][1], e.bars.ticks[t][1], e.bars.ticks[t][1], e.bars.ticks[t][1], e.bars.ticks[t][2]])
                }(), m()), this
            },
            loadBars: function(t) {
                var n, r, o = e.bars.ticks,
                    s = e.bars.data;
                if (t.length > 0) {
                    for (e.bars.ticks = [], n = t.length - 1; n >= 0; n--) i(r = [t[n][0], t[n][1], t[n][5] / 4]) && e.bars.ticks.push(r), i(r = [t[n][0], t[n][2], t[n][5] / 4]) && e.bars.ticks.push(r), i(r = [t[n][0], t[n][3], t[n][5] / 4]) && e.bars.ticks.push(r), i(r = [t[n][0], t[n][4], t[n][5] / 4]) && e.bars.ticks.push(r);
                    e.bars.ticks.length > 0 ? (e.bars.data = t, e.flags.redrawBG = !0, e.flags.recompute = !0, m()) : (e.bars.ticks = o, e.bars.data = s)
                }
                return this
            },
            tick: function(t) {
                var n = e.bars.data.length;
                i(t) && (e.bars.ticks.push([t[0], t[1], t[2]]), o(t), e.bars.data.length > n && (e.flags.redrawFG = !0), m())
            },
            bar: function(t) {
                e.bars.data.length;
                if (e.bars.data.length > 0) {
                    if (t[0] < e.bars.data[0][0]) return;
                    if (t[0] == e.bars.data[0][0] && t[5] <= e.bars.data[0][5]) return;
                    t[0] == e.bars.data[0][0] ? e.bars.data[0] = t : (e.bars.data.splice(0, 0, t), e.flags.redrawFG = !0)
                } else e.bars.data.splice(0, 0, t), e.flags.redrawFG = !0;
                e.flags.recompute = !0, m()
            },
            bidask: function(t) {
                var n = !1;
                return t.hasOwnProperty("bid") && e.price.bid != t.bid && (e.price.bid = t.bid, n = !0), t.hasOwnProperty("ask") && e.price.ask != t.ask && (e.price.ask = t.ask, n = !0), n && (e.flags.redraw.main = !0, m()), this
            },
            resize: function() {
                n(), Be(), window.reqAnimFrame(Re), qe()
            },
            drag: function(e) {
                switch (e) {
                    case "start":
                        c()
                }
            },
            widget: function(t) {
                return null == t || void 0 === t ? e.flags.widget : (e.flags.widget = t, this)
            },
            addIndicator: function(e) {
                return d(e), this
            },
            addOrUpdateIndicator: function(t, n) {
                return e.indicators.hasOwnProperty(t) ? d(t) : e.overlays.hasOwnProperty(t) && f(t, n), this
            },
            removeIndicator: function() {
                for (; e.slots.length > 2;) g(e.slots.length - 1);
                for (; e.slots[0].u.length > 1;) h(e.slots[0].u.length - 1, "u", 0);
                return this
            },
            addOverlay: function(e, t) {
                f(e, t)
            },
            removeIndicatorByname: function(t) {
                return t instanceof Array && t.forEach(function(t) {
                    for (var n = e.slots[0].u, r = n.length, o = 0; o < r; o++) n[o] && n[o].t == t && h(o, "u", 0);
                    for (var i = e.slots, s = 0; s < i.length; s++) i[s].t == t && g(s)
                }), this
            },
            setResolution: function(t) {
                return e.period.avail.indexOf(t) >= 0 && e.period.current != e.period.avail.indexOf(t) && (e.period.current = e.period.avail.indexOf(t), e.bars.offset = 0, e.bars.blank = 0), Data.setup(t), this
            },
            crossHairH: function(t) {
                e.crossHairH = t
            },
            fixTime: function(t) {
                e.bars.fixTime = t, e.offset = t ? 40 : 0, e.bars.offset = 0, e.settings.grid = !0
            },
            setBarwidth: function(t) {
                e.px.bar.width = t
            },
            setData: function(t) {
                e.data = t
            },
            clearData: function() {
                Data.data.bars[Ue()] = [], v()
            },
            setOffset: function(t) {
                e.offset = t
            },
            setShowRateOnLeft: function(t) {
                e.setShowRateOnLeft = t
            },
            setLastColorIndex: function(t) {
                e.lastColorIndex = t
            },
            setMode: function(t) {
                return e.mode.avail_display.indexOf(t) >= 0 && e.mode.display != e.mode.avail_display.indexOf(t) && (e.mode.display = e.mode.avail_display.indexOf(t)), $(".icontrol", e.element).css("left", e.offset + 2 + "px"), this
            },
            setCrossHair: function(t) {
                e.showMainCrosshairs = t, e.stopEvent = !t, t ? (e.canvas.i.removeClass("showHand"), 0 == $("#chartCtrlFixed").length && s()) : (e.canvas.i.addClass("showHand"), $("#chartCtrlFixed").remove())
            },
            getMode: function() {
                return e.mode.display
            },
            getInernal: function() {
                return e.yToVal = me, e.xToBar = ge, e.toPxX = de, e.barToIndex = be, e.toPxY = fe, e
            },
            getCurDay: function() {
                if (e.bars.data[e.curIndex]) return $("#chartCtrlFixed").hide(), e.bars.data[e.curIndex][0]
            },
            getPerClose: function() {
                if (e.bars.data[e.curIndex + 1]) return e.bars.data[e.curIndex + 1][4]
            },
            LblWidthChangeEvent: function(t) {
                e.LblWidthChange = t
            },
            showHighlowPriceAtAngles: function() {
                e.colors.stroke.priceShow = !0
            },
            setMainSlotHeightPercent: function(t) {
                e.mainSlotHeightPercent = t
            },
            redraw: function() {
                v()
            },
            isIndicator: function(t) {
                return !!e.indicators[t]
            },
            internals: (e.debug, function() {
                return e
            })
        }
    };
Date.prototype.get8Date = function() {
    var e = 6e4 * this.getTimezoneOffset(),
        t = this.getTime() + e;
    return new Date(t + 288e5)
};
var Currency = function() {
        var e = [],
            t = {
                AUD: {
                    symbol: "$",
                    before: !0,
                    digits: 2,
                    name: _("Australian dollar")
                },
                BTC: {
                    symbol: "BTC",
                    before: !1,
                    digits: 8,
                    name: _("Bitcoin")
                },
                USDT: {
                    symbol: "USDT",
                    before: !1,
                    digits: 2,
                    name: _("USDT")
                },
                ANS: {
                    symbol: "ANS",
                    before: !1,
                    digits: 8,
                    name: _("Antshares")
                },
                BNB: {
                    symbol: "BNB",
                    before: !1,
                    digits: 8,
                    name: _("Binance")
                },
                ETH: {
                    symbol: "ETH",
                    before: !1,
                    digits: 8,
                    name: _("Ethereum")
                },
                123: {
                    symbol: "123",
                    before: !1,
                    digits: 8,
                    name: _("123")
                },
                456: {
                    symbol: "456",
                    before: !1,
                    digits: 8,
                    name: _("456")
                },
                CAD: {
                    symbol: "$",
                    before: !0,
                    digits: 2,
                    name: _("Canadian dollar")
                },
                CHF: {
                    symbol: "S₣",
                    before: !1,
                    digits: 2,
                    name: _("Swiss franc")
                },
                CLP: {
                    symbol: "$",
                    before: !0,
                    digits: 2,
                    name: _("Chilean peso")
                },
                CNY: {
                    symbol: "CNY",
                    before: !1,
                    digits: 2,
                    name: _("Chinese yuan")
                },
                DKK: {
                    symbol: "kr",
                    before: !1,
                    digits: 2,
                    name: _("Danish krone")
                },
                EUR: {
                    symbol: "€",
                    before: !0,
                    digits: 2,
                    name: _("Euro")
                },
                GBP: {
                    symbol: "£",
                    before: !0,
                    digits: 2,
                    name: _("Pound sterling")
                },
                HKD: {
                    symbol: "圓",
                    before: !0,
                    digits: 2,
                    name: _("Hong Kong dollar")
                },
                JPY: {
                    symbol: "¥",
                    before: !0,
                    digits: 2,
                    name: _("Japanese yen")
                },
                FTC: {
                    symbol: "FTC",
                    before: !1,
                    digits: 8,
                    name: _("Feathercoin")
                },
                LTC: {
                    symbol: "Ł",
                    before: !0,
                    digits: 6,
                    name: _("Litecoin")
                },
                NMC: {
                    symbol: "ℕ",
                    before: !0,
                    digits: 8,
                    name: _("Namecoin")
                },
                NVC: {
                    symbol: "NVC",
                    before: !1,
                    digits: 8,
                    name: _("Novacoin")
                },
                NOK: {
                    symbol: "kr",
                    before: !1,
                    digits: 2,
                    name: _("Norwegian krone")
                },
                NZD: {
                    symbol: "$",
                    before: !0,
                    digits: 2,
                    name: _("New Zealand dollar")
                },
                PLN: {
                    symbol: "zł",
                    before: !1,
                    digits: 2,
                    name: _("Polish złoty")
                },
                PPC: {
                    symbol: "PPC",
                    before: !1,
                    digits: 8,
                    name: _("Peercoin")
                },
                RUB: {
                    symbol: "руб",
                    before: !1,
                    digits: 2,
                    name: _("Russian ruble")
                },
                SEK: {
                    symbol: "kr",
                    before: !1,
                    digits: 2,
                    name: _("Swedish krona")
                },
                SGD: {
                    symbol: "S",
                    before: !0,
                    digits: 2,
                    name: _("Singapore dollar")
                },
                THB: {
                    symbol: "฿",
                    before: !0,
                    digits: 2,
                    name: _("Thai baht")
                },
                TRC: {
                    symbol: "TRC",
                    before: !1,
                    digits: 8,
                    name: _("Terracoin")
                },
                USD: {
                    symbol: "$",
                    before: !0,
                    digits: 2,
                    name: _("United States dollar")
                },
                XPM: {
                    symbol: "Ψ",
                    before: !0,
                    digits: 8,
                    name: _("Primecoin")
                }
            };
        for (var n in t) t.hasOwnProperty(n) && e.push(n);
        return e.sort(), {
            list: function() {
                return e
            },
            before: function(e) {
                try {
                    return t[e].before
                } catch (e) {
                    return !0
                }
            },
            fullname: function(e) {
                try {
                    return t[e].name
                } catch (e) {
                    return _("Currency")
                }
            },
            format: function(e, n, r) {
                try {
                    null == r && (r = t[e].digits);
                    var o = numberWithCommas((n = parseFloat(n)).toFixed(r));
                    return t[e].before ? t[e].symbol + o : o + " " + t[e].symbol
                } catch (e) {
                    return "¤0.00"
                }
            },
            symbol: function(e) {
                try {
                    return t[e].symbol
                } catch (e) {
                    return "¤"
                }
            },
            valid: function(e) {
                return t.hasOwnProperty(e)
            }
        }
    }(),
    OrderBookDaemon = function() {
        var e = null;

        function t() {
            var e = {
                book: {
                    bid: {
                        price: [],
                        amount: []
                    },
                    ask: {
                        price: [],
                        amount: []
                    }
                }
            };
            return {
                book: e.book,
                sumToPrice: function(t, n) {
                    return function(t, n) {
                        var r = 0,
                            o = 0,
                            i = RTBTC.baseInt();
                        if (t *= RTBTC.quoteInt(), "bid" == n)
                            for (o = 0; o < e.book.bid.price.length && !(e.book.bid.price[o] < t); o++) r += e.book.bid.amount[o] / i;
                        else if ("ask" == n)
                            for (o = 0; o < e.book.ask.price.length && !(e.book.ask.price[o] > t); o++) r += e.book.ask.amount[o] / i;
                        return r
                    }(t, n)
                },
                loadBook: function(t, n, r) {
                    e.book.bid.price = [], e.book.bid.amount = [], e.book.ask.price = [], e.book.ask.amount = [];
                    var o = Object.keys(n).sort(function(e, t) {
                            return e - t
                        }).reverse(),
                        i = Object.keys(t).sort(function(e, t) {
                            return e - t
                        });
                    o.slice(0, r || 20).forEach(function(t) {
                        e.book.bid.price.push(parseFloat(t)), e.book.bid.amount.push(n[t])
                    }), i.slice(0, r || 20).forEach(function(n) {
                        e.book.ask.price.push(parseFloat(n)), e.book.ask.amount.push(t[n])
                    }), RTBTC.trigger("newbook", null)
                }
            }
        }
        return new function() {
            this.Build = function() {
                return null == e && ((e = new t).constructor = null), e
            }
        }
    }(),
    OBD = null,
    TWOPI = 2 * Math.PI,
    OBD = OrderBookDaemon.Build(),
    VisualDepth = function() {
        var e = {
                element: "",
                parent: null,
                module: null,
                self: null,
                canvas: {
                    bg: null,
                    bidFill: null,
                    askFill: null,
                    bid: null,
                    ask: null,
                    sweepFill: null,
                    sweep: null,
                    orders: null,
                    userOrders: null,
                    axes: null,
                    lbl: null,
                    i: null
                },
                w: 0,
                h: 0,
                price: {
                    low: 50,
                    high: 100,
                    range: 50,
                    scale: .1,
                    defaultScale: .1,
                    minScale: 1e-5,
                    maxScale: 1e5,
                    decimals: 4
                },
                volume: 100,
                volDecimals: 2,
                orders: [],
                orderDelay: 1250,
                userOrders: 0,
                yVals: [],
                allowScale: !1,
                sums: {
                    bid: [],
                    ask: []
                },
                log: {
                    m: 0,
                    b: 0,
                    b10: 0
                },
                px: {
                    pad: 5,
                    lbl: {
                        w: 65,
                        h: 16,
                        tick: 4,
                        halftick: 2,
                        font: 11
                    },
                    crosshairs: {
                        x: 0,
                        y: 0
                    }
                },
                flags: {
                    redraw: {
                        base: !0,
                        bid: !0,
                        ask: !0
                    },
                    recompute: !0,
                    widget: !1
                },
                interacted: !1,
                mouse: {
                    down: !1,
                    zoom: !1,
                    x: 0,
                    y: 0,
                    sx: 0,
                    sy: 0,
                    s0: null,
                    shift: !1
                },
                colors: Colors.c1,
                SOLID: 0,
                DOTTED: 1,
                DASHED: 2,
                DASHDOT: 3,
                font: {
                    precision: 6,
                    labels: '11px/1.0em Consolas, "Courier New", monospace',
                    size: 11,
                    lineHeight: 1,
                    face: 'Consolas, "Courier New", monospace',
                    overlays: "10px/1.0em Arial, sans-serif",
                    overlaySize: 10,
                    heading: "12px/1.0em Arial, sans-serif",
                    headingBold: "bold 12px/1.0em Arial, sans-serif",
                    headingSize: 12
                },
                watermark: "© RTBTC",
                settings: {
                    grid: !0,
                    fill: !0,
                    orders: !0
                },
                debug: RTBTC.isDebug()
            },
            t = RTBTC.debug,
            n = OBD.book;

        function r(t) {
            if (void 0 !== t) {
                var n = new Validator,
                    r = (new Validator).create(n.FLOAT),
                    o = (new Validator).create(n.BOOL);
                e.settings.grid = o.set(e.settings.grid).set(t.g).get(), e.settings.fill = o.set(e.settings.fill).set(t.f).get(), e.price.scale = r.set(e.price.scale).set(t.s).get()
            }
        }

        function o() {
            return [$("<p/>").append(RTBTC.toggle(e.settings.fill, function() {
                e.settings.fill = !0
            }, function() {
                e.settings.fill = !1, e.canvas.bidFill[0].getContext("2d").clearRect(0, 0, e.w, e.h), e.canvas.askFill[0].getContext("2d").clearRect(0, 0, e.w, e.h)
            }, function() {
                s()
            })).append($("<span/>").addClass("control-label").html(_("Fill the Chart"))), $("<p/>").append(RTBTC.toggle(e.settings.grid, function() {
                e.settings.grid = !0
            }, function() {
                e.settings.grid = !1
            }, function() {
                s()
            })).append($("<span/>").addClass("control-label").html(_("Show Grid")))]
        }

        function i() {
            var r, o, i = e.canvas.bg[0].getContext("2d"),
                s = e.canvas.bidFill[0].getContext("2d"),
                c = e.canvas.askFill[0].getContext("2d"),
                f = e.canvas.bid[0].getContext("2d"),
                g = e.canvas.ask[0].getContext("2d"),
                m = e.canvas.axes[0].getContext("2d"),
                $ = e.canvas.lbl[0].getContext("2d");
            if (e.flags.recompute && function(r) {
                    e.price.low, e.price.high;
                    var o = RTBTC.quoteInt(),
                        i = !1,
                        s = (n = OBD.book).bid.price,
                        a = n.ask.price;
                    if (0 == s.length && a.length > 0) n.bid.price = [a[0]], n.bid.amount = [n.ask.amount[0]];
                    else if (s.length > 0 && 0 == a.length) n.ask.price = [s[0]], n.ask.amount = [n.bid.amount[0]];
                    else if (0 == s.length && 0 == a.length) return;
                    if (n.bid.price.length > 0 && n.ask.price.length > 0) {
                        e.price.low < n.bid.price[n.bid.price.length - 1] / o && (i = !0, DEBUG && t("New low price: " + e.price.low)), e.price.high > n.ask.price[n.ask.price.length - 1] / o && (i = !0, DEBUG && t("New high price: " + e.price.high)), e.price.low > n.bid.price[n.bid.price.length - 1] / o && DEBUG && t("New low price: " + e.price.low), e.price.high < n.ask.price[n.ask.price.length - 1] / o && DEBUG && t("New high price: " + e.price.high);
                        var l = (n.ask.price[0] + n.bid.price[0]) / 2;
                        l * (1 - e.price.scale) > 0 && (e.price.high = l * (1 + e.price.scale), e.price.low = l * (1 - e.price.scale)), (0 == s.length || 1 == s.length && s[0] == a[0]) && a.length > 0 ? e.price.low < 0 && (e.price.low = 0) : s.length > 0 && (0 == a.length || 1 == a.length && (a[0], s[0])), e.allowScale ? e.allowScale = !1 : e.price.range = e.price.high - e.price.low, e.price.range = e.price.high - e.price.low, i && (DEBUG && t(e.price), e.price.range = e.price.high - e.price.low, e.price.range <= 0 && (e.price.range = 1), e.price.high < e.price.low && (e.price.high = e.price.low + 1 / RTBTC.quoteInt()), e.price.scale < e.price.minScale ? e.price.scale = e.price.minScale : e.price.scale > e.price.maxScale && (e.price.scale = e.price.maxScale), DEBUG && t("Scale: " + e.price.scale + ", range: " + e.price.range))
                    }
                    var c, u = 0;
                    for (e.sums.bid = [], c = 0; c < n.bid.amount.length && (u += n.bid.amount[c] / RTBTC.baseInt(), e.sums.bid[c] = u, !(n.bid.price[c] / o < e.price.low)); c++);
                    for (u = 0, e.sums.ask = [], c = 0; c < n.ask.amount.length && (u += n.ask.amount[c] / RTBTC.baseInt(), e.sums.ask[c] = u, !(n.ask.price[c] / o > e.price.high)); c++);
                    var p = 0,
                        f = 0;
                    p = n.ask.price[e.sums.ask.length - 1] > e.price.high ? e.sums.ask[e.sums.ask.length - 2] : e.sums.ask[e.sums.ask.length - 1];
                    f = n.bid.price[e.sums.bid.length - 1] < e.price.low ? e.sums.bid[e.sums.bid.length - 2] : e.sums.bid[e.sums.bid.length - 1];
                    e.volume = Math.max(p, f), e.volume *= 1.15, e.flags.recompute = !1, e.flags.redraw.base = !0, e.flags.redraw.bid = !0, e.flags.redraw.ask = !0, void 0 === e.asdf && (t(e), e.asdf = !0)
                }(), e.flags.redraw.base) {
                i.clearRect(0, 0, e.w, e.h),
                    function(t, n) {
                        void 0 === n && (n = !1);
                        var r = e.px.lbl.h + e.px.lbl.tick + 1,
                            o = e.h - r;
                        t.fillStyle = e.colors.fill.bg, i = t, s = 0, a = o, l = e.w, c = r, i.fillRect(0 | s, 0 | a, 0 | l, 0 | c), t.strokeStyle = e.colors.stroke.border, t.beginPath(), S(t, 0, o), C(t, e.w, o), t.stroke();
                        var i, s, a, l, c
                    }(i), m.clearRect(0, e.h - e.px.lbl.h - 2 * e.px.lbl.tick - 2, e.w, e.px.lbl.h + 2 * e.px.lbl.tick + 2), m.font = e.font.labels;
                var x = m.measureText(e.volume).width;
                m.clearRect(0, 0, e.px.lbl.tick + x + 5, e.h - e.px.lbl.h - e.px.lbl.tick - 1),
                    function(t, n) {
                        t.font = e.font.labels, t.fillStyle = e.colors.fill.label, t.strokeStyle = e.colors.stroke.border, t.textBaseline = "middle", t.textAlign = "center";
                        var r, o, i = 1 / RTBTC.quoteInt(),
                            s = 7,
                            a = 1.5 * e.font.size,
                            l = 0,
                            c = [1e-6, 2e-5, 1e-4, 2e-4, 5e-4, .001, .01, .5, 1, 2, 2.5, 5],
                            p = 1e-8,
                            f = !1;
                        for (i = 1e-8, r = 0; r < 15; r++) {
                            for (s = Math.max(Math.abs(Math.log(i) / Math.LN10) + 1, 2), o = 0; o < c.length; o++)
                                if (p = i * c[o], l = t.measureText(e.price.high.toFixed(s)).width, A(2 * p) - A(p) >= l + a) {
                                    f = !0;
                                    break
                                }
                            if (f) break;
                            i *= 10
                        }
                        e.price.decimals = s;
                        var d = Math.ceil(e.price.high / p) * p,
                            h = A(d),
                            g = "";
                        for (e.settings.grid && (n.strokeStyle = e.colors.stroke.grid, n.beginPath()), t.beginPath(); d >= e.price.low && !(h < 0);) g = d.toFixed(s), v(t, g, d), e.settings.grid && u(n, h, e.DOTTED), h = A(d -= p);
                        t.stroke(), e.settings.grid && n.stroke()
                    }(r = m, o = i),
                    function(t, n) {
                        t.font = e.font.labels, t.fillStyle = e.colors.fill.label, t.strokeStyle = e.colors.stroke.border, t.textBaseline = "middle", t.textAlign = "left";
                        var r, o, i = 1e-8,
                            s = 8,
                            a = .625 * e.font.size,
                            l = e.px.lbl.font,
                            c = [1, 2, 2.5, 5],
                            u = 1e-8,
                            f = !1;
                        for (r = 0; r < 20; r++) {
                            for (s = Math.max(Math.abs(Math.log(i) / Math.LN10) + 1, 2), o = 0; o < c.length; o++)
                                if (E(u = i * c[o]) - E(2 * u) >= l + a) {
                                    f = !0;
                                    break
                                }
                            if (f) break;
                            i *= 10
                        }
                        i >= 1 && (s = 0);
                        var d, h, g, m, v = u,
                            b = E(v),
                            $ = "";
                        for (e.settings.grid && (n.strokeStyle = e.colors.stroke.grid, n.beginPath()), t.beginPath(); v < e.volume;) $ = numberWithCommas(v.toFixed(s)), d = t, h = $, g = void 0, m = E(v), y(d, h, m, g), e.settings.grid && p(n, b, e.DOTTED), b = E(v += u);
                        t.stroke(), e.settings.grid && n.stroke()
                    }(r, o), e.flags.redraw.base = !1
            }
            var w = e.flags.redraw.bid || e.flags.redraw.ask;
            e.flags.redraw.bid && (! function(t, r) {
                t.clearRect(0, 0, e.w, e.h), t.strokeStyle = e.colors.stroke.bid, e.settings.fill && (r.clearRect(0, 0, e.w, e.h), r.fillStyle = e.colors.fill.down, l(r, e.sums.bid, n.bid.price, !0));
                var o = !1;
                if (e.interacted && n.bid.price.length > 0) {
                    var i = n.bid.price[0] / RTBTC.quoteInt();
                    e.px.crosshairs.x <= A(i) && (h(), o = !0)
                }
                a(t, e.sums.bid, n.bid.price, !0), o && d(e.mouse.x, e.mouse.y)
            }(f, s), e.flags.redraw.bid = !1), e.flags.redraw.ask && (! function(t, r) {
                t.clearRect(0, 0, e.w, e.h), t.strokeStyle = e.colors.stroke.ask, e.settings.fill && (r.clearRect(0, 0, e.w, e.h), r.fillStyle = e.colors.fill.up, l(r, e.sums.ask, n.ask.price, !1));
                var o = !1;
                if (e.interacted && n.ask.price.length > 0) {
                    var i = n.ask.price[0] / RTBTC.quoteInt();
                    e.px.crosshairs.x >= A(i) && (h(), o = !0)
                }
                a(t, e.sums.ask, n.ask.price, !1), o && d(e.mouse.x, e.mouse.y)
            }(g, c), e.flags.redraw.ask = !1), w && function(t) {
                t.clearRect(0, e.h - e.px.lbl.h - e.px.lbl.tick - 1, e.w, e.px.lbl.h + e.px.lbl.tick + 1), t.clearRect(0, 0, e.w, e.font.overlaySize + e.px.lbl.tick + 5);
                var r = 0,
                    o = 0;
                try {
                    r = n.bid.price.length, o = n.ask.price.length
                } catch (e) {
                    return
                }
                if (0 == r && 0 == o) return;
                var i = n.bid.price[0] / RTBTC.quoteInt(),
                    s = n.ask.price[0] / RTBTC.quoteInt(),
                    a = "",
                    l = 0,
                    c = 0,
                    u = s > 0 ? 100 * (s - i) / s : NaN;
                t.font = e.font.labels, t.lineWidth = 1, t.fillStyle = e.colors.fill.crosshair, t.textAlign = "center", t.textBaseline = "middle", s > e.price.low && s < e.price.high && (a = Currency.format(RTBTC.quote(), s), l = A(s), t.strokeStyle = e.colors.stroke.ask, T(t, l, t.measureText(a).width), t.fillStyle = e.colors.fill.flagtext, b(t, a, l));
                i > e.price.low && i < e.price.high && (t.fillStyle = e.colors.fill.crosshair, a = Currency.format(RTBTC.quote(), i), c = A(i), t.strokeStyle = e.colors.stroke.bid, T(t, c, t.measureText(a).width), t.fillStyle = e.colors.fill.flagtext, b(t, a, c));
                s > e.price.low && s < e.price.high && i > e.price.low && i < e.price.high && !isNaN(u) && (a = u.toFixed(2) + "%", t.fillStyle = e.colors.fill.ordertext, t.strokeStyle = e.colors.stroke.order, t.textAlign = "center", t.textBaseline = "top", t.font = e.font.overlays, t.fillText(a, (l + c) / 2, 1), t.beginPath(), S(t, c, e.font.overlaySize + e.px.lbl.tick + 3), C(t, c, e.font.overlaySize + 3), C(t, l, e.font.overlaySize + 3), C(t, l, e.font.overlaySize + e.px.lbl.tick + 3), t.stroke())
            }($), j()
        }

        function s(t) {
            e.flags.recompute = !0, t ? i() : window.reqAnimFrame(i)
        }

        function a(r, o, i, s, a) {
            if (0 != i.length) {
                var l, c, u, p = o.length,
                    f = RTBTC.quoteInt(),
                    d = A(i[p - 1] / f),
                    h = d,
                    g = E(o[p - 1]),
                    m = d,
                    v = void 0 !== a,
                    b = v ? A(a) : s ? e.w + 1 : -1;
                if (r.beginPath(), v)
                    for (m = d = b, l = p - 1; l >= 0; l--)
                        if (s && i[l] / f > a || !s && i[l] / f < a) {
                            p = l + 1;
                            break
                        }
                for (S(r, d, u = E(o[p - 1])), !v && d > 0 && (e.yVals[d] = u), l = p - 1; l >= 0; l--) {
                    if (d = A(i[l] / f), s && d > m || !s && d < m) {
                        if (u = E(o[l]), s && d > m + 1 && C(r, m + 1, u), !s && d < m - 1 && C(r, m - 1, u), C(r, d, u), !v && d > 0 && (e.yVals[d] = u), !v) {
                            if (s && d > m + 1)
                                for (c = m + 1; c < d; c++) e.yVals[c] = void 0;
                            if (!s && d < m - 1)
                                for (c = m - 1; c > d; c--) e.yVals[c] = void 0
                        }
                        m = d
                    }
                    if (d < -100 * e.w || d > 100 * e.w) {
                        DEBUG && t(n), DEBUG && t("n: " + p + ", curInt: " + f + ", prices[n-1]: " + i[p - 1] + ", x: " + d + ", xf: " + h + ", sums[n-1]: " + o[p - 1] + ", yf: " + g + ", ");
                        break
                    }
                }
                r.stroke()
            }
        }

        function l(t, n, r, o, i) {
            if (0 != r.length) {
                var s, a = n.length,
                    l = RTBTC.quoteInt(),
                    c = A(r[a - 1] / l),
                    u = c,
                    p = c,
                    f = 0,
                    d = E(0),
                    h = t.createLinearGradient(0, 0, 0, d),
                    g = void 0 !== i,
                    m = g ? A(i) : o ? e.w + 1 : -1;
                if (t.beginPath(), g)
                    for (c = m, p = m, u = m, s = a - 1; s >= 0; s--)
                        if (o && r[s] / l > i || !o && r[s] / l < i) {
                            a = s + 1;
                            break
                        }
                for (S(t, c, f = E(n[a - 1])), s = a - 1; s >= 0; s--) c = A(r[s] / l), (o && c > p || !o && c < p) && (f = E(n[s]), o && c > p + 1 && C(t, p + 1, f), !o && c < p - 1 && C(t, p - 1, f), C(t, c, f), p = c);
                C(t, p, d), C(t, u, d), t.closePath(), h.addColorStop(0, t.fillStyle), h.addColorStop(1, e.colors.fill.blankBG), t.fillStyle = h, t.fill()
            }
        }

        function c(t) {
            var n = e.canvas.orders[0].getContext("2d"),
                r = A(t.price / RTBTC.quoteInt());
            if (!(r < 0 || r > e.w)) {
                if (t.amount > 0) n.strokeStyle = e.colors.stroke.up;
                else {
                    if (!(t.amount < 0)) return;
                    n.strokeStyle = e.colors.stroke.down
                }
                var o;
                e.orders.length > r && r >= 0 && (n.beginPath(), S(n, r, e.h), C(n, r, e.h - e.px.lbl.h - e.px.lbl.tick), n.stroke(), void 0 === e.orders[r] ? e.orders[r] = 1 : e.orders[r]++), window.setTimeout((o = r, function() {
                    ! function(t) {
                        if (e.orders.length > t && t >= 0) {
                            if (void 0 === e.orders[t]) return;
                            if (--e.orders[t] > 0) return;
                            var n = e.canvas.orders[0].getContext("2d");
                            n.clearRect(t, e.h - e.px.lbl.h - e.px.lbl.tick, 1, e.px.lbl.h + e.px.lbl.tick)
                        }
                    }(o)
                }), e.orderDelay)
            }
        }

        function u(t, n, r) {
            var o, i = e.h - e.px.lbl.h - e.px.lbl.tick - 2;
            switch (S(t, n, 0), o = 0, r) {
                case e.DOTTED:
                    for (; o < i;) C(t, n, ++o), S(t, n, ++o);
                    break;
                case e.DASHED:
                    for (; o < i;) C(t, n, o = (o += 6) > i ? i : o), S(t, n, o += 2);
                    break;
                case e.DASHDOT:
                    for (; o < i && (C(t, n, o = (o += 7) > i ? i : o), !((o += 4) >= i));) S(t, n, o), C(t, n, o = (o += 2) > i ? i : o), S(t, n, o += 4);
                    break;
                case e.SOLID:
                default:
                    C(t, n, i)
            }
        }

        function p(t, n, r) {
            var o, i = e.w;
            switch (S(t, i, n), o = i, r) {
                case e.DOTTED:
                    for (; o > 1;) C(t, --o, n), S(t, --o, n);
                    break;
                case e.DASHED:
                    for (; o > 0;) C(t, o = (o -= 6) < 0 ? 0 : o, n), S(t, o -= 2, n);
                    break;
                case e.DASHDOT:
                    for (; o > 0 && (C(t, o = (o -= 7) < 0 ? 0 : o, n), !((o -= 4) <= 0));) S(t, o, n), C(t, o = (o -= 2) < 0 ? 0 : o, n), S(t, o -= 4, n);
                    break;
                case e.SOLID:
                default:
                    C(t, 0, n)
            }
        }

        function f(t) {
            var r = e.h - e.px.lbl.h - e.px.lbl.tick - 2;
            if (n.bid.price.length > 0 && n.ask.price.length > 0) {
                var o = n.bid.price[0] / RTBTC.quoteInt(),
                    i = n.ask.price[0] / RTBTC.quoteInt(),
                    s = A(o),
                    a = A(i);
                if (t > s && t < a) return r;
                if (void 0 !== e.yVals[t]) return e.yVals[t];
                e.price.high, e.price.low;
                var l = t;
                if (P(t) >= i)
                    for (; Math.ceil(1e6 * P(--l)) / 1e6 >= i;) {
                        if (void 0 !== e.yVals[l]) return e.yVals[l];
                        if (l <= 0) break
                    } else if (P(t) <= o)
                        for (; Math.floor(1e6 * P(++l)) / 1e6 <= o;) {
                            if (void 0 !== e.yVals[l]) return e.yVals[l];
                            if (l >= e.w) break
                        }
            }
            return r
        }

        function d(t, r) {
            var o, i, s, c, u, p;
            e.mouse.shift && (m(), o = t, i = e.canvas.sweep[0].getContext("2d"), s = e.canvas.sweepFill[0].getContext("2d"), c = P(o), u = n.bid.price[0] / RTBTC.quoteInt(), p = n.ask.price[0] / RTBTC.quoteInt(), i.clearRect(0, 0, e.w, e.h), i.strokeStyle = e.colors.stroke.order, s.clearRect(0, 0, e.w, e.h), s.fillStyle = e.colors.fill.ordertext, c >= p ? (l(s, e.sums.ask, n.ask.price, !1, c), a(i, e.sums.ask, n.ask.price, !1, c)) : c <= u && (l(s, e.sums.bid, n.bid.price, !0, c), a(i, e.sums.bid, n.bid.price, !0, c)));
            var d = e.canvas.i[0].getContext("2d");
            if (!D(t, r)) {
                var g = P(t),
                    v = f(t),
                    $ = (1 - v / (e.h - e.px.lbl.h - e.px.lbl.tick - 2)) * e.volume;
                h(d), d.font = e.font.labels, d.lineWidth = 1, d.fillStyle = e.colors.fill.crosshair, d.strokeStyle = e.colors.stroke.crosshair, d.beginPath(), d.arc(t + .5, v + .5, 2, 0, TWOPI, !1), d.stroke();
                var x, w, E, A, N, O = Currency.format(RTBTC.quote(), g),
                    I = $.toFixed(e.volDecimals);
                T(d, t, d.measureText(O).width), x = d, w = v, E = d.measureText(I).width, A = e.px.lbl.tick + 2 + E + 3, N = e.px.lbl.font / 2, w = k(w, e.px.lbl.font + 2), x.beginPath(), S(x, 0, w), C(x, N, w - 1 - N), x.lineTo(.6 + (0 | A), .5 + (w - 1 - N | 0)), S(x, A, w - 1 - N), C(x, A, w + 1 + N), C(x, N, w + 1 + N), C(x, 0, w), x.fill(), x.stroke(), d.fillStyle = e.colors.fill.flagtext, d.textAlign = "left", d.textBaseline = "middle", y(d, I, v, !0), d.textAlign = "center", b(d, O, t), e.px.crosshairs.x = t, e.px.crosshairs.y = r, e.interacted = !0
            }
        }

        function h(t, n) {
            e.interacted = !1;
            var r = t || e.canvas.i[0].getContext("2d");
            if (!0 !== n) {
                r.font = e.font.labels;
                var o = f(e.px.crosshairs.x),
                    i = r.measureText(Currency.format("CNY", e.volume, e.volDecimals)).width + e.px.lbl.tick + 6;
                r.clearRect(e.px.crosshairs.x - 4, o - 4, 8, 8), r.clearRect(0, e.h - e.px.lbl.h - e.px.lbl.tick - 1, e.w, e.px.lbl.h + e.px.lbl.tick + 1), r.clearRect(0, o - e.px.lbl.font - 3, i, 2 * e.px.lbl.font + 6)
            } else r.clearRect(0, 0, e.w, e.h)
        }

        function g() {
            window.reqAnimFrame(function() {
                h()
            })
        }

        function m() {
            var t = e.canvas.sweep[0].getContext("2d"),
                n = e.canvas.sweepFill[0].getContext("2d");
            t.clearRect(0, 0, e.w, e.h), n.clearRect(0, 0, e.w, e.h)
        }

        function v(t, n, r) {
            var o = e.h - (e.px.lbl.h - e.px.lbl.tick) / 2 - 2,
                i = A(r);
            S(t, i, e.h - e.px.lbl.h - 2 * e.px.lbl.tick - 1), C(t, i, e.h - e.px.lbl.h - .5 * e.px.lbl.tick), t.fillText(n, i, o)
        }

        function b(t, n, r) {
            var o = e.h - (e.px.lbl.h - e.px.lbl.tick) / 2 - 2;
            t.fillText(n, x(r, 10 + t.measureText(n).width), o)
        }

        function y(t, n, r, o) {
            !0 !== o && (S(t, 0, r), C(t, e.px.lbl.tick, r)), r = k(r, e.px.lbl.font + 2), t.save(), t.strokeStyle = e.colors.fill.blankBG, t.strokeText(n, e.px.lbl.tick + 2, r), t.restore(), t.fillText(n, e.px.lbl.tick + 2, r)
        }

        function x(t, n) {
            return t > e.w - n / 2 ? e.w - n / 2 : t < n / 2 ? n / 2 : t
        }

        function k(t, n) {
            var r = e.h - e.px.lbl.h - e.px.lbl.tick - 1 - n / 2;
            return t > r ? r : t < n / 2 ? n / 2 : t
        }

        function T(t, n, r) {
            var o = 0 | x(n, r + 10),
                i = r / 2 + 5 | 0,
                s = x(n, 7);
            t.beginPath(), S(t, o - i, e.h - 1), C(t, o + i, e.h - 1), C(t, o + i, e.h - e.px.lbl.h), C(t, s + 3.5, e.h - e.px.lbl.h), C(t, s, e.h - e.px.lbl.h - 4), C(t, s - 3.5, e.h - e.px.lbl.h), C(t, o - i, e.h - e.px.lbl.h), C(t, o - i, e.h - 1), t.fill(), t.stroke()
        }

        function S(e, t, n) {
            e.moveTo(.5 + (0 | t), .5 + (0 | n))
        }

        function C(e, t, n) {
            e.lineTo(.5 + (0 | t), .5 + (0 | n))
        }

        function E(t) {
            var n = 1 - t / e.volume;
            return (e.h - e.px.lbl.h - e.px.lbl.tick - 2) * n | 0
        }

        function A(t) {
            return e.w * (t - e.price.low) / e.price.range | 0
        }

        function P(t) {
            return e.price.low + t / e.w * e.price.range
        }

        function D(t, n) {
            return !(n < e.h - e.px.lbl.h - e.px.lbl.tick - 1)
        }

        function N() {
            e.canvas.i.on({
                mousedown: function(t) {
                    M(t), e.mouse.sx = e.mouse.x, e.mouse.sy = e.mouse.y, e.mouse.s0 = e.price.scale, e.mouse.down = !0, D(e.mouse.x, e.mouse.y) && (e.mouse.zoom = !0), stopEvent(t)
                },
                click: function(t) {
                    M(t), e.mouse.sx = e.mouse.x, e.mouse.sy = e.mouse.y, e.mouse.s0 = e.price.scale, d(e.mouse.x, e.mouse.y)
                },
                mouseup: function(t) {
                    e.mouse.down = !1, e.mouse.zoom = !1, t.ctrlKey && t.shiftKey || function(t) {
                        if (M(t), !D(e.mouse.x, e.mouse.y)) {
                            var r = +P(e.mouse.x).toFixed(e.price.decimals),
                                o = "",
                                i = 0,
                                s = {
                                    side: "",
                                    price: r
                                };
                            n.bid.price.length > 0 && r <= n.bid.price[0] / RTBTC.quoteInt() ? e.mouse.shift ? (o = "sell", i = OBD.sumToPrice(r, "bid"), s.amount = i) : o = "buy" : n.ask.price.length > 0 && r >= n.ask.price[0] / RTBTC.quoteInt() && (e.mouse.shift ? (o = "buy", i = OBD.sumToPrice(r, "ask"), s.amount = i) : o = "sell"), s.side = o, RTBTC.trigger("set-order-entry-" + o, s), e.mouse.shift && m()
                        }
                    }(t)
                },
                mouseout: function(t) {
                    e.mouse.down = !1, e.mouse.zoom = !1, g(), m()
                },
                mousemove: function(t) {
                    e.mouse.down ? (! function(t) {
                        if (M(t), e.mouse.zoom) {
                            var n = e.mouse.x - e.mouse.sx,
                                r = e.price.scale;
                            t.shiftKey ? e.price.scale = e.mouse.s0 * (1 - n / 1e3) : e.price.scale = e.mouse.s0 * (1 - n / 100), e.price.scale > e.price.maxScale && (e.price.scale = e.price.maxScale), e.price.scale < e.price.minScale && (e.price.scale = e.price.minScale), e.price.scale != r && s()
                        }
                    }(t), e.mouse.zoom && e.canvas.i.css("cursor", "e-resize")) : (e.mouse.shift && !t.shiftKey && m(), M(t), D(e.mouse.x, e.mouse.y) ? (g(), e.canvas.i.css("cursor", "e-resize")) : (d(e.mouse.x, e.mouse.y), e.canvas.i.css("cursor", "pointer")))
                },
                dblclick: function(t) {
                    e.mouse.down = !1, e.mouse.zoom = !1, e.price.scale != e.price.defaultScale && (e.price.scale = e.price.defaultScale, e.flags.recompute = !0, s(), stopEvent(t))
                }
            }), e.canvas.i.bind("pinch", I), e.canvas.i.bind("mousewheel", O), RTBTC.handler("newbook", e.element, R), RTBTC.handler("orders", e.element, j)
        }

        function O(t, n, r, o) {
            e.allowScale = !0, stopEvent(t);
            var i = 1;
            if (void 0 !== r || void 0 !== o) {
                0 != r ? i = 1 - .01 * r : 0 != o && (i = 1 - .1 * o);
                var a = e.price.scale;
                e.price.scale *= i, e.price.scale > e.price.maxScale && (e.price.scale = e.price.maxScale), e.price.scale < e.price.minScale && (e.price.scale = e.price.minScale), e.price.scale != a && s()
            }
        }

        function I(t, n) {
            if (null != n.scale) {
                w = e.px.bar.width;
                var r = e.price.scale;
                e.price.scale *= n.scale, e.price.scale > e.price.maxScale && (e.price.scale = e.price.maxScale), e.price.scale < e.price.minScale && (e.price.scale = e.price.minScale), e.price.scale != r && s()
            }
            n.originalEvent.preventDefault(), n.originalEvent.stopPropagation()
        }

        function M(t) {
            if (t.offsetX) e.mouse.x = t.offsetX, e.mouse.y = t.offsetY;
            else if (t.pageX) {
                var n = e.canvas.i.offset();
                e.mouse.x = t.pageX - n.left, e.mouse.y = t.pageY - n.top
            }
            e.mouse.shift = t.shiftKey
        }

        function L() {
            var t = $(e.element).width(),
                n = $(e.element).height();
            e.w == t && e.h == n || (e.w = t, e.h = n, $("canvas", e.element).each(function(t, n) {
                $(n).attr("width", e.w + "px").attr("height", e.h + "px")
            }), s(!0))
        }

        function F() {
            if (!isNaN(parseInt(e.w)) && (e.w = 0 | e.w, e.w >= 0)) {
                try {
                    e.orders = new Array(e.w + 1), e.yVals = new Array(e.w + 1)
                } catch (n) {
                    DEBUG && t("Exception on Array size");
                    try {
                        "console" in window && console.log("Warning: " + e.w)
                    } catch (e) {}
                }
                s()
            }
        }

        function B(t) {
            var r = t.price / RTBTC.quoteInt();
            ! function() {
                var t = n.bid.amount.length,
                    r = n.ask.amount.length,
                    o = RTBTC.quoteInt();
                if (n.bid.price[t - 1] / o < e.price.low && e.sums.bid.length > 0 && n.bid.price[e.sums.bid.length - 1] > e.price.low) return void(e.flags.recompute = !0);
                if (n.ask.price[r - 1] / o > e.price.high && e.sums.ask.length > 0 && n.ask.price[e.sums.ask.length - 1] < e.price.high) e.flags.recompute = !0
            }(), "bid" == t.location ? r >= e.price.low && (e.flags.redraw.bid = !0, i()) : "ask" == t.location && r <= e.price.high && (e.flags.redraw.ask = !0, i()), e.settings.orders && c(t)
        }

        function R() {
            e.flags.recompute = !0, e.flags.redraw.base = !0, e.flags.redraw.bid = !0, e.flags.redraw.ask = !0, h(null, !0), s(!0)
        }

        function j() {
            var t, n, r = UserAccount.orders(),
                o = null,
                i = 0;
            if (r.hasOwnProperty("BIJIE")) {
                r = r.BIJIE;
                for (t in r) r.hasOwnProperty(t) && (i++, null == o && ((o = e.canvas.userOrders[0].getContext("2d")).clearRect(0, 0, e.w, e.h), o.text = e.font.overlays, o.textBaseline = "bottom", o.strokeStyle = e.colors.stroke.order, o.fillStyle = e.colors.fill.ordertext, o.beginPath()), (n = r[t]).quote == RTBTC.quote() && q(o, n));
                null != o && (o.fill(), o.stroke()), 0 == i && e.userOrders > 0 && (o = e.canvas.userOrders[0].getContext("2d")).clearRect(0, 0, e.w, e.h), e.userOrders = i
            }
        }

        function q(t, n) {
            var r, o, i, s, a, l = A(n.price),
                c = "",
                u = n.quote;
            l < 0 || l > e.w || (S(t, l, r = f(l)), C(t, l - e.px.lbl.tick / 2, r - e.px.lbl.tick), i = t, s = l + e.px.lbl.tick / 2, a = r - e.px.lbl.tick, i.lineTo(.6 + (0 | s), .5 + (0 | a)), C(t, l, r), "buy" == n.action ? (c = _("BUY"), t.textAlign = "left", l -= e.px.lbl.tick / 2) : "sell" == n.action && (c = _("SELL"), t.textAlign = "right", l += e.px.lbl.tick / 2), o = Currency.format(u, n.price), c += " " + RTBTC.numFormatShort(n.amount, 8) + " @ " + o, t.fillText(c, l, r - 1.5 * e.px.lbl.tick))
        }
        return {
            build: function(t, n, o) {
                return e.element = t, e.parent = n,
                    function() {
                        e.parent.addClass("visualdepth"), e.element = $(".box-inner", e.parent), e.element.empty(), e.w = e.element.width(), e.h = e.element.height(), e.canvas.bg = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 100), e.canvas.bidFill = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 101), e.canvas.askFill = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 102), e.canvas.bid = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 103), e.canvas.sweepFill = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 104), e.canvas.sweep = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 105), e.canvas.ask = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 106), e.canvas.orders = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 107), e.canvas.userOrders = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 108), e.canvas.axes = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 109), e.canvas.lbl = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 110), e.canvas.i = $("<canvas/>").attr("width", e.w + "px").attr("height", e.h + "px").attr("z-index", 111), e.element.append(e.canvas.bg).append(e.canvas.bidFill).append(e.canvas.askFill).append(e.canvas.bid).append(e.canvas.ask).append(e.canvas.sweepFill).append(e.canvas.sweep).append(e.canvas.orders).append(e.canvas.userOrders).append(e.canvas.axes).append(e.canvas.lbl).append(e.canvas.i), e.defaultColors = deepCopy(e.colors);
                        var t = e.canvas.bg[0].getContext("2d");
                        t.font = e.font.labels, e.px.lbl.w = t.measureText("100.00").width + e.px.pad + 2
                    }(), N(), r(o), window.setTimeout(function() {
                        RTBTC.trigger("what-theme", null)
                    }, 100), this
            },
            module: function(t) {
                return e.module = t, e.module.setTitle(_("Visual Depth")), RTBTC.handler("newbook", e.module.id(), e.self.onBook), RTBTC.handler("depth", e.module.id(), e.self.onDepth), RTBTC.handler("theme", e.module.id(), e.self.onTheme), RTBTC.handler("orders", e.module.id(), j), RTBTC.handler("order-canceled", e.module.id(), j), this
            },
            self: function(t) {
                e.self = t
            },
            settings: function() {
                return o()
            },
            save: function() {
                return (t = {}).g = e.settings.grid, t.f = e.settings.fill, t.s = e.price.scale, t;
                var t
            },
            load: function(e) {
                r(e), s()
            },
            unload: function() {
                RTBTC.unregisterAll(e.module.id())
            },
            onDepth: function(e) {
                B(e)
            },
            onTheme: function(t) {
                var n;
                n = t, Colors.hasOwnProperty(n) && (e.colors = Colors[n], s())
            },
            onBook: function(e) {
                R()
            },
            resize: function(e) {
                window.reqAnimFrame(L), F()
            },
            resizeStop: function() {
                F()
            },
            drag: function(e) {
                e
            },
            widget: function(t) {
                return null == t || void 0 === t ? e.flags.widget : (e.flags.widget = t, this)
            },
            internals: e.debug ? function() {
                return e
            } : function() {
                return {}
            }
        }
    },
    custLine = function() {
        var e = {
                canvas: $("#line"),
                chart: null,
                w: 0,
                h: 0,
                objLines: [],
                curLine: null,
                points: [],
                selectDrawObj: null,
                LINES: 0,
                CIRCLE: 1,
                RECT: 2,
                ARROW: 3,
                mouse: {},
                mouseOri: {}
            },
            t = e.canvas[0].getContext("2d");

        function n() {
            window.reqAnimFrame(function() {
                ! function() {
                    e.canvas[0].getContext("2d").clearRect(0, 0, e.chart.w, e.chart.h);
                    for (var n = 0; n < e.objLines.length; n++) e.objLines[n].draw();
                    i = d(), t.globalCompositeOperation = "destination-out", t.fillStyle = "rgba(250,250,250,1)", t.beginPath(), t.rect(0, 0, e.chart.w, e.chart.h), r(t, i.x, i.y), o(t, i.x, i.y + i.h), o(t, i.x + i.w, i.y + i.h), o(t, i.x + i.w, i.y), o(t, i.x, i.y), t.closePath(), t.fill(), t.globalCompositeOperation = "source-over";
                    var i
                }()
            })
        }

        function r(e, t, n) {
            e.moveTo(.5 + (0 | t), .5 + (0 | n))
        }

        function o(e, t, n) {
            e.lineTo(.5 + (0 | t), .5 + (0 | n))
        }

        function i(n) {
            t.strokeStyle = C.line, t.lineWidth = 1, t.beginPath();
            for (var i = 0; i < n.points.length; i++) {
                var s = n.points[i];
                r(t, s[0], s[1]), o(t, s[2], s[3])
            }
            t.stroke(), t.fillStyle = C.text, t.textBaseline = "bottom", t.textAlign = "left", t.font = "12px Arial";
            var l = 0;
            if ("periodicLine" != n.name && "fibonacciSequence" != n.name || (l = 40), n.text.length > 0) {
                for (i = 0; i < n.points.length; i++) {
                    s = n.points[i];
                    t.fillText(n.text[i], s[0], s[1] + l)
                }
                t.stroke()
            }
            e.selectDrawObj && n.id == e.selectDrawObj.id && a(n)
        }

        function s(e) {
            t.fillStyle = t.strokeStyle = e.up ? C.upArrow : C.downArrow, t.lineWidth = 1, t.beginPath();
            var n = e.points[0];
            r(t, n[0], n[1]);
            for (var i = 0; i < e.points.length; i++) n = e.points[i], o(t, n[0], n[1]);
            t.stroke(), t.fill()
        }

        function a(e) {
            t.strokeStyle = C.pot, t.fillStyle = "black", t.lineWidth = 1;
            var n = 3;
            1 == e.large && (n = 5), e.pots.forEach(function(e) {
                t.beginPath(), t.arc(e[0] + .5, e[1] + .5, n, 0, 2 * Math.PI, !0), t.stroke(), t.beginPath(), t.arc(e[0] + .5, e[1] + .5, n - 1, 0, 2 * Math.PI, !0), t.fill()
            })
        }

        function l() {
            function e() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            }
            return e() + e() + "-" + e() + "-" + e()
        }

        function c(t) {
            var n = !1;
            return t.forEach(function(t) {
                var r = e.mouse.x,
                    o = e.mouse.y,
                    i = t[0],
                    s = t[1],
                    a = t[2],
                    l = t[3],
                    c = l - s,
                    u = i - a,
                    p = a * s - i * l,
                    f = c,
                    d = u,
                    h = p + 5 * Math.sqrt(c * c + u * u),
                    g = c,
                    m = u,
                    v = p - 5 * Math.sqrt(c * c + u * u);
                f * r + d * o + h > 0 && g * r + m * o + v < 0 && -u * r + c * o + (u * i - c * s) > 0 && -u * r + c * o + (u * a - c * l) < 0 && (n = !0)
            }), n
        }

        function u(t) {
            var n = !1;
            return t.pots.forEach(function(r, o) {
                var i = e.mouse.x,
                    s = e.mouse.y;
                Math.sqrt((i - r[0]) * (i - r[0]) + (s - r[1]) * (s - r[1])) <= 5 && (t.selectPotIndex = o, n = !0)
            }), n
        }

        function p() {
            e.chart.canvas.i.on({
                mousedown: function(t) {
                    0 == t.button && (f(t), e.mouseOri.x = e.mouse.x, e.mouseOri.y = e.mouse.y, e.mouseDown = !0, e.curLine ? (e.objLines.push(e.curLine), e.curLine.init(), e.selectDrawObj = e.curLine, e.curLine = null) : function() {
                        e.selectDrawObj = null;
                        for (var t = 0; t < e.objLines.length; t++) switch (drawType = e.objLines[t].drawType || e.LINES, drawType) {
                            case e.LINES:
                                var r = c(e.objLines[t].points),
                                    o = u(e.objLines[t]);
                                1 != r && 1 != o || (e.selectDrawObj = e.objLines[t], 0 == o && (e.selectDrawObj.selectPotIndex = null));
                                break;
                            case e.RECT:
                                var i = [];
                                e.objLines[t].points.forEach(function(e) {
                                    i.push([e[0], e[1], e[2], e[1]]), i.push([e[2], e[1], e[2], e[3]]), i.push([e[2], e[3], e[0], e[3]]), i.push([e[0], e[3], e[0], e[1]])
                                }), r = c(i), o = u(e.objLines[t]), 1 != r && 1 != o || (e.selectDrawObj = e.objLines[t], 0 == o && (e.selectDrawObj.selectPotIndex = null));
                                break;
                            case e.ARROW:
                                PtInPolygon([e.mouse.x, e.mouse.y], e.objLines[t].points) && (e.selectDrawObj = e.objLines[t])
                        }
                        n()
                    }(), n())
                },
                mousemove: function(t) {
                    f(t);
                    var r = !1;
                    if (e.selectDrawObj && 1 == e.mouseDown && (e.selectDrawObj.moving(), r = !0), e.selectDrawObj && 0 == e.mouseDown) {
                        var o = e.selectDrawObj.large,
                            i = u(e.selectDrawObj);
                        e.selectDrawObj.large = 1 == i
                    }
                    e.selectDrawObj && (r || o != e.selectDrawObj.large) && n()
                }
            }), $(document).on({
                mouseup: function(t) {
                    1 == e.mouseDown && (e.mouseDown = !1, e.objLines && e.objLines.forEach(function(e) {
                        e.selectPotIndex = null
                    }))
                },
                keydown: function(t) {
                    var r = t || window.event;
                    46 == (r.keyCode || r.which || r.charCode) && e.selectDrawObj && (e.objLines.forEach(function(t, n) {
                        t.name == e.selectDrawObj.name && t.id == e.selectDrawObj.id && (e.objLines.splice(n, 1), 0 == e.objLines.length && e.nullDrawObj && e.nullDrawObj())
                    }), n())
                }
            })
        }

        function f(t) {
            if (t.offsetX) e.mouse.x = t.offsetX, e.mouse.y = t.offsetY;
            else if (t.pageX) {
                var n = e.canvas.offset();
                e.mouse.x = t.pageX - n.left, e.mouse.y = t.pageY - n.top
            }
        }

        function d() {
            return {
                x: e.chart.offset,
                y: 0,
                w: e.chart.w - e.chart.offset - e.chart.px.lbl.w - e.chart.px.lbl.tick - 1,
                h: e.chart.slots[0].px + e.chart.slots[0].h
            }
        }

        function h() {
            this.name = "lineSegment", this.points = [], this.pots = [], this.text = [], this.id = l(), this.selectPotIndex = 1;
            var n = 0;
            this.init = function() {
                d();
                this.points = [];
                for (var t = e.chart.yToVal(0, e.mouse.y), n = e.chart.xToBar(e.mouse.x), r = e.chart.barToIndex(n), o = new Date(e.chart.bars.data[r][0]).Format("yyyy.MM.dd") + " " + t.toFixed(2), i = e.chart.toPxX(n), s = e.chart.toPxY(t, 0), a = 0; a < 1; a++) this.points.push([i, s, i, s]), this.text.push(o);
                return this.pots = [], this.pots.push([i, s]), this.pots.push([i, s]), this.points
            }, this.moving = function() {
                if (e.mouseDown) {
                    var t = e.mouse.y - e.mouseOri.y,
                        r = e.mouse.x - e.mouseOri.x;
                    n += r;
                    var o = parseInt(n / (e.chart.px.bar.spacing + e.chart.px.bar.width)) * (e.chart.px.bar.spacing + e.chart.px.bar.width);
                    null == this.selectPotIndex || 0 == t && 0 == o ? null != this.selectPotIndex || 0 == t && 0 == o || (this.points.forEach(function(e, n, r) {
                        e[0] += o, e[1] += t, e[2] += o, e[3] += t
                    }), this.pots.forEach(function(e, n, r) {
                        e[1] += t, e[0] += o
                    })) : 1 == this.selectPotIndex ? (this.points[0][2] += o, this.points[0][3] += t, this.pots[1][0] += o, this.pots[1][1] += t) : 0 == this.selectPotIndex && (this.points[0][0] += o, this.points[0][1] += t, this.pots[0][0] += o, this.pots[0][1] += t), this.text = [];
                    var i = this.points[0],
                        s = e.chart.yToVal(0, i[1]),
                        a = e.chart.xToBar(i[0]),
                        l = e.chart.barToIndex(a),
                        c = e.chart.bars.data[l] ? new Date(e.chart.bars.data[l][0]).Format("yyyy.MM.dd") : "";
                    this.text.push(c + " " + s.toFixed(2)), s = e.chart.yToVal(0, i[3]), a = e.chart.xToBar(i[2]), l = e.chart.barToIndex(a), c = e.chart.bars.data[l] ? new Date(e.chart.bars.data[l][0]).Format("yyyy.MM.dd") : "", this.text.push(c + " " + s.toFixed(2)), n %= e.chart.px.bar.spacing + e.chart.px.bar.width, e.mouseOri.y = e.mouse.y, e.mouseOri.x = e.mouse.x
                }
            }, this.draw = function() {
                ! function(n) {
                    t.strokeStyle = C.line, t.lineWidth = 1, t.beginPath();
                    for (var i = 0; i < n.points.length; i++) {
                        var s = n.points[i];
                        r(t, s[0], s[1]), o(t, s[2], s[3])
                    }
                    t.stroke(), t.fillStyle = C.text, t.textBaseline = "bottom", t.textAlign = "left", t.font = "12px Arial", s = n.points[0], t.fillText(n.text[0], s[0], s[1]), t.fillText(n.text[1], s[2], s[3]), t.stroke(), e.selectDrawObj && n.id == e.selectDrawObj.id && a(n)
                }(this)
            }
        }

        function g() {
            this.name = "rectLine", this.drawType = e.RECT, this.id = l(), this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
            var n = 0;
            this.init = function() {
                d();
                this.points = [];
                for (var t = e.chart.yToVal(0, e.mouse.y), n = e.chart.xToBar(e.mouse.x), r = e.chart.barToIndex(n), o = new Date(e.chart.bars.data[r][0]).Format("yyyy.MM.dd") + " " + t.toFixed(2), i = e.chart.toPxX(n), s = e.chart.toPxY(t, 0), a = 0; a < 1; a++) this.points.push([i, s, i, s]);
                return this.text.push(o), this.text.push(o), this.pots = [], this.pots.push([i, s]), this.pots.push([i, s]), this.points
            }, this.moving = function() {
                if (e.mouseDown) {
                    var t = e.mouse.y - e.mouseOri.y,
                        r = e.mouse.x - e.mouseOri.x;
                    n += r;
                    var o = parseInt(n / (e.chart.px.bar.spacing + e.chart.px.bar.width)) * (e.chart.px.bar.spacing + e.chart.px.bar.width);
                    null == this.selectPotIndex || 0 == t && 0 == o ? null != this.selectPotIndex || 0 == t && 0 == o || (this.points.forEach(function(e, n, r) {
                        e[0] += o, e[1] += t, e[2] += o, e[3] += t
                    }), this.pots.forEach(function(e, n, r) {
                        e[1] += t, e[0] += o
                    })) : 1 == this.selectPotIndex ? (this.points[0][2] += o, this.points[0][3] += t, this.pots[1][0] += o, this.pots[1][1] += t) : 0 == this.selectPotIndex && (this.points[0][0] += o, this.points[0][1] += t, this.pots[0][0] += o, this.pots[0][1] += t), this.text = [];
                    var i = this.points[0],
                        s = e.chart.yToVal(0, i[1]),
                        a = e.chart.xToBar(i[0]),
                        l = e.chart.barToIndex(a),
                        c = e.chart.bars.data[l] ? new Date(e.chart.bars.data[l][0]).Format("yyyy.MM.dd") : "";
                    this.text.push(c + " " + s.toFixed(2)), s = e.chart.yToVal(0, i[3]), a = e.chart.xToBar(i[2]), l = e.chart.barToIndex(a), c = e.chart.bars.data[l] ? new Date(e.chart.bars.data[l][0]).Format("yyyy.MM.dd") : "", this.text.push(c + " " + s.toFixed(2)), n %= e.chart.px.bar.spacing + e.chart.px.bar.width, e.mouseOri.y = e.mouse.y, e.mouseOri.x = e.mouse.x
                }
            }, this.draw = function() {
                ! function(n) {
                    t.strokeStyle = C.line, t.lineWidth = 1;
                    for (var r = 0; r < n.points.length; r++) {
                        var o = n.points[r];
                        i = t, s = o[0], l = o[1], c = o[2] - o[0], u = o[3] - o[1], i.strokeRect(.5 + (0 | s), .5 + (0 | l), 0 | c, 0 | u)
                    }
                    var i, s, l, c, u;
                    t.fillStyle = C.text, t.textBaseline = "bottom", t.textAlign = "left", t.font = "12px Arial", (o = n.points[0])[0] <= o[2] ? t.textAlign = "left" : t.textAlign = "right", t.fillText(n.text[0], o[0], o[1]), o[0] > o[2] ? t.textAlign = "left" : t.textAlign = "right", t.textBaseline = "top", t.fillText(n.text[1], o[2], o[3]), e.selectDrawObj && n.id == e.selectDrawObj.id && a(n)
                }(this)
            }
        }
        return {
            build: function() {
                return e.w = e.canvas.width(), e.h = e.canvas.height(), this
            },
            add: function(t, n) {
                switch (t) {
                    case "percentLine":
                        e.curLine = new function() {
                            this.name = "percentLine", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
                            var t = [0, 1 / 8, .25, 1 / 3, 3 / 8, .5, 5 / 8, 2 / 3, .75, 7 / 8, 1];
                            this.init = function() {
                                var n = d();
                                this.points = [];
                                for (var r = e.chart.yToVal(0, e.mouse.y), o = 0; o < 11; o++) this.points.push([n.x, e.mouse.y, n.w + n.x, e.mouse.y]), this.text.push((100 * t[o]).toFixed(2) + "% " + r.toFixed(2));
                                return this.pots = [], this.pots.push([e.w / 2, e.mouse.y, 0]), this.pots.push([e.w / 2, e.mouse.y, 10]), this.points
                            }, this.moving = function() {
                                if (e.mouseDown) {
                                    var n = e.mouse.y - e.mouseOri.y;
                                    null != this.selectPotIndex && 0 != n ? 1 == this.selectPotIndex ? (this.points.forEach(function(e, r, o) {
                                        e[1] = e[3] += n * t[r]
                                    }), this.pots.forEach(function(e, r, o) {
                                        e[1] += n * t[e[2]]
                                    })) : 0 == this.selectPotIndex && (this.points.forEach(function(e, r, o) {
                                        e[1] = e[3] += n * (1 - t[r])
                                    }), this.pots.forEach(function(e, r, o) {
                                        e[1] += n * (1 - t[e[2]])
                                    })) : null == this.selectPotIndex && 0 != n && (this.points.forEach(function(e, t, r) {
                                        e[1] = e[3] += n
                                    }), this.pots.forEach(function(e, t, r) {
                                        e[1] += n
                                    })), this.text = [];
                                    var r = this;
                                    this.points.forEach(function(n, o) {
                                        var i = e.chart.yToVal(0, n[1]);
                                        r.text.push((100 * t[o]).toFixed(2) + "% " + i.toFixed(2))
                                    }), e.mouseOri.y = e.mouse.y
                                }
                            }, this.draw = function() {
                                i(this)
                            }
                        };
                        break;
                    case "godPercentLine":
                        e.curLine = new function() {
                            this.name = "godPercentLines", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
                            var t = [0, .191, .382, .5, .618, 1, 1.191, 1.382, 1.5, 1.618, 2];
                            this.init = function() {
                                var n = d();
                                this.points = [];
                                for (var r = e.chart.yToVal(0, e.mouse.y), o = 0; o < 11; o++) this.points.push([n.x, e.mouse.y, n.w + n.x, e.mouse.y]), this.text.push((100 * t[o]).toFixed(2) + "% " + r.toFixed(2));
                                return this.pots = [], this.pots.push([e.w / 2, e.mouse.y, 0]), this.pots.push([e.w / 2, e.mouse.y, 5]), this.points
                            }, this.moving = function() {
                                if (e.mouseDown) {
                                    var n = e.mouse.y - e.mouseOri.y;
                                    null != this.selectPotIndex && 0 != n ? 1 == this.selectPotIndex ? (this.points.forEach(function(e, r, o) {
                                        e[1] = e[3] += n * t[r]
                                    }), this.pots.forEach(function(e, r, o) {
                                        e[1] += n * t[e[2]]
                                    })) : 0 == this.selectPotIndex && (this.points.forEach(function(e, r, o) {
                                        e[1] = e[3] += n * (1 - t[r])
                                    }), this.pots.forEach(function(e, r, o) {
                                        e[1] += n * (1 - t[e[2]])
                                    })) : null == this.selectPotIndex && 0 != n && (this.points.forEach(function(e, t, r) {
                                        e[1] = e[3] += n
                                    }), this.pots.forEach(function(e, t, r) {
                                        e[1] += n
                                    })), this.text = [];
                                    var r = this;
                                    this.points.forEach(function(n, o) {
                                        var i = e.chart.yToVal(0, n[1]);
                                        r.text.push((100 * t[o]).toFixed(2) + "% " + i.toFixed(2))
                                    }), e.mouseOri.y = e.mouse.y
                                }
                            }, this.draw = function() {
                                i(this)
                            }
                        };
                        break;
                    case "wavePercentLines":
                        e.curLine = new function() {
                            this.name = "wavePercentLines", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
                            var t = [0, .25, .333, .5, 1];
                            this.init = function() {
                                var n = d();
                                this.points = [];
                                for (var r = e.chart.yToVal(0, e.mouse.y), o = 0; o < 5; o++) this.points.push([n.x, e.mouse.y, n.w + n.x, e.mouse.y]), this.text.push((100 * t[o]).toFixed(2) + "% " + r.toFixed(2));
                                return this.pots = [], this.pots.push([e.w / 2, e.mouse.y, 0]), this.pots.push([e.w / 2, e.mouse.y, 4]), this.points
                            }, this.moving = function() {
                                if (e.mouseDown) {
                                    var n = e.mouse.y - e.mouseOri.y;
                                    null != this.selectPotIndex && 0 != n ? 1 == this.selectPotIndex ? (this.points.forEach(function(e, r, o) {
                                        e[1] = e[3] += n * t[r]
                                    }), this.pots.forEach(function(e, r) {
                                        e[1] += n * t[e[2]]
                                    })) : 0 == this.selectPotIndex && (this.points.forEach(function(e, r, o) {
                                        e[1] = e[3] += n * (1 - t[r])
                                    }), this.pots.forEach(function(e, r, o) {
                                        e[1] += n * (1 - t[e[2]])
                                    })) : null == this.selectPotIndex && 0 != n && (this.points.forEach(function(e, t, r) {
                                        e[1] = e[3] += n
                                    }), this.pots.forEach(function(e, t, r) {
                                        e[1] += n
                                    })), this.text = [];
                                    var r = this;
                                    this.points.forEach(function(n, o) {
                                        var i = e.chart.yToVal(0, n[1]);
                                        r.text.push((100 * t[o]).toFixed(2) + "% " + i.toFixed(2))
                                    }), e.mouseOri.y = e.mouse.y
                                }
                            }, this.draw = function() {
                                i(this)
                            }
                        };
                        break;
                    case "fibonacciSequence":
                        e.curLine = new function() {
                            this.name = "fibonacciSequence", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null;
                            var t = [];
                            this.id = l(), this.init = function() {
                                var n = d();
                                this.points = [], e.chart.yToVal(0, e.mouse.y);
                                for (var r = 0; r < 100; r++) 0 == r ? t.push(0) : t.push(r + t[r - 1]);
                                for (var o = e.chart.xToBar(e.mouse.x), i = 0; i < t.length; i++) {
                                    var s = e.chart.toPxX(o - t[i]);
                                    if (s > n.x + n.w) break;
                                    this.points.push([s, 0, s, n.h]), this.text.push(i)
                                }
                                return this.pots = [], this.pots.push([e.chart.toPxX(o), n.h / 2, 0]), this.points
                            }, this.moving = function() {
                                if (e.mouseDown) {
                                    var n = d();
                                    this.points = [], this.text = [];
                                    for (var r = e.chart.xToBar(e.mouse.x), o = 0; o < t.length; o++) {
                                        var i = e.chart.toPxX(r - t[o]);
                                        if (i > n.x + n.w) break;
                                        this.points.push([i, 0, i, n.h]), this.text.push(o)
                                    }
                                    this.pots.forEach(function(t, n, o) {
                                        t[0] = e.chart.toPxX(r)
                                    })
                                }
                            }, this.draw = function() {
                                i(this)
                            }
                        };
                        break;
                    case "periodicLine":
                        e.curLine = new function() {
                            this.name = "periodicLine", this.points = [], this.pots = [], this.text = [], this.id = l(), this.selectPotIndex = 1;
                            var t = 0;
                            this.init = function() {
                                var t = d();
                                this.points = [], e.chart.yToVal(0, e.mouse.y);
                                for (var n = e.chart.xToBar(e.mouse.x), r = 0; r < 300; r++) {
                                    var o = e.chart.toPxX(n - r);
                                    this.points.push([o, 0, o, t.h]), this.text.push(r)
                                }
                                return this.pots = [], this.pots.push([e.chart.toPxX(n), t.h / 2, 0]), this.pots.push([e.chart.toPxX(n - 1), t.h / 2, 0]), this.points
                            }, this.moving = function() {
                                if (e.mouseDown) {
                                    d();
                                    var n = e.mouse.x - e.mouseOri.x;
                                    if (null != this.selectPotIndex && 0 != n)
                                        if (0 == this.selectPotIndex) {
                                            t += n;
                                            for (var r = parseInt(t / (e.chart.px.bar.spacing + e.chart.px.bar.width)), o = 0; o < this.points.length; o++) this.points[o][0] = this.points[o][2] += r * (e.chart.px.bar.spacing + e.chart.px.bar.width);
                                            this.pots[1][0] += r * (e.chart.px.bar.spacing + e.chart.px.bar.width), this.pots[0][0] += r * (e.chart.px.bar.spacing + e.chart.px.bar.width), t %= e.chart.px.bar.spacing + e.chart.px.bar.width
                                        } else {
                                            for (t += n, r = parseInt(t / (e.chart.px.bar.spacing + e.chart.px.bar.width)), o = 0; o < this.points.length; o++) this.points[o][0] = this.points[o][2] += o * r * (e.chart.px.bar.spacing + e.chart.px.bar.width), this.text[o] += r * o;
                                            this.pots[1][0] += r * (e.chart.px.bar.spacing + e.chart.px.bar.width), t %= e.chart.px.bar.spacing + e.chart.px.bar.width
                                        }
                                    e.mouseOri.x = e.mouse.x
                                }
                            }, this.draw = function() {
                                i(this)
                            }
                        };
                        break;
                    case "lineSegment":
                        e.curLine = new h;
                        break;
                    case "regressionLine":
                        e.curLine = new function() {
                            this.name = "regressionLine", this.points = [], this.pots = [], this.text = [], this.id = l(), this.selectPotIndex = 1;
                            var t = 0;

                            function n(t, n) {
                                var r = e.chart.bars.data.slice(t, n + 1),
                                    o = r.length,
                                    i = (1 + o) / 2,
                                    s = 0,
                                    a = 0,
                                    l = 0;
                                r.forEach(function(e, t) {
                                    s += e[4], a += e[4] * (t + 1), l += (t + 1) * (t + 1)
                                });
                                var c, u, p = s / o,
                                    f = (a - o * i * p) / (l - o * i * i),
                                    d = p - f * i,
                                    h = d + 1 * f,
                                    g = d + f * o,
                                    m = 0,
                                    v = 0;
                                r.forEach(function(e, t) {
                                    var n;
                                    (n = (e[2] - (t + 1) * f - d) / Math.sqrt(d * d + f * f)) > m && (m = n, c = t), (n = (e[3] - (t + 1) * f - d) / Math.sqrt(d * d + f * f)) < v && (v = n, u = t)
                                });
                                var b = r[c || 0][2] - ((c || 0) + 1) * f,
                                    y = b + 1 * f,
                                    $ = b + f * o,
                                    x = r[u || 0][3] - ((u || 0) + 1) * f;
                                return [
                                    [h, g],
                                    [y, $],
                                    [x + 1 * f, x + f * o]
                                ]
                            }
                            this.init = function() {
                                var t = d();
                                this.points = [];
                                for (var n = e.chart.yToVal(0, e.mouse.y), r = e.chart.xToBar(e.mouse.x), o = (e.chart.barToIndex(r), e.chart.toPxX(r)), i = (e.chart.toPxY(n, 0), 0); i < 2; i++) this.points.push([o, 0, o, t.h]);
                                for (var s = 0; s < 3; s++) this.points.push([o, 0, o, 0]);
                                return this.pots = [], this.pots.push([o, t.h / 2]), this.pots.push([o, t.h / 2]), this.points
                            }, this.moving = function() {
                                if (e.mouseDown) {
                                    var r = e.mouse.y - e.mouseOri.y,
                                        o = e.mouse.x - e.mouseOri.x;
                                    t += o;
                                    var i, s = parseInt(t / (e.chart.px.bar.spacing + e.chart.px.bar.width)) * (e.chart.px.bar.spacing + e.chart.px.bar.width);
                                    null == this.selectPotIndex || 0 == r && 0 == s ? null != this.selectPotIndex || 0 == r && 0 == s || (this.points.forEach(function(e, t, n) {
                                        e[0] += s, e[2] += s
                                    }), this.pots.forEach(function(e, t, n) {
                                        e[0] += s
                                    })) : 1 == this.selectPotIndex ? (this.points[1][0] = this.points[1][2] += s, this.points[2][2] += s, this.points[3][2] += s, this.points[4][2] += s, this.pots[1][0] += s) : 0 == this.selectPotIndex && (this.points[0][0] = this.points[0][2] += s, this.points[2][0] += s, this.points[3][0] += s, this.points[4][0] += s, this.pots[0][0] += s), index1 = e.chart.barToIndex(e.chart.xToBar(this.points[0][0])), index2 = e.chart.barToIndex(e.chart.xToBar(this.points[1][0]));
                                    var a = 0,
                                        l = 0;
                                    index1 > index2 ? (i = n(index2, index1), a = e.chart.toPxY(i[0][0], 0), l = e.chart.toPxY(i[0][1], 0), y2 = e.chart.toPxY(i[1][0], 0), y3 = e.chart.toPxY(i[1][1], 0), y4 = e.chart.toPxY(i[2][0], 0), y5 = e.chart.toPxY(i[2][1], 0), this.points[2][3] = a, this.points[2][1] = l, this.points[3][3] = y2, this.points[3][1] = y3, this.points[4][3] = y4, this.points[4][1] = y5) : index1 < index2 ? (i = n(index1, index2), a = e.chart.toPxY(i[0][0], 0), l = e.chart.toPxY(i[0][1], 0), y2 = e.chart.toPxY(i[1][0], 0), y3 = e.chart.toPxY(i[1][1], 0), y4 = e.chart.toPxY(i[2][0], 0), y5 = e.chart.toPxY(i[2][1], 0), this.points[2][3] = l, this.points[2][1] = a, this.points[3][3] = y3, this.points[3][1] = y2, this.points[4][3] = y5, this.points[4][1] = y4) : (this.points[2][3] = 0, this.points[2][1] = 0, this.points[3][3] = 0, this.points[3][1] = 0, this.points[4][3] = 0, this.points[4][1] = 0), t %= e.chart.px.bar.spacing + e.chart.px.bar.width, e.mouseOri.y = e.mouse.y, e.mouseOri.x = e.mouse.x
                                }
                            }, this.draw = function() {
                                i(this)
                            }
                        };
                        break;
                    case "rectLine":
                        e.curLine = new g;
                        break;
                    case "singleLine":
                        e.curLine = new function() {
                            this.name = "singleLine", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null, this.init = function() {
                                var t = d();
                                this.points = [];
                                for (var n = e.chart.yToVal(0, e.mouse.y), r = 0; r < 1; r++) this.points.push([t.x, e.mouse.y, t.w + t.x, e.mouse.y]), this.text.push(n.toFixed(2));
                                return this.pots = [], this.pots.push([e.w / 2, e.mouse.y, 0]), this.points
                            }, this.moving = function() {
                                if (e.mouseDown) {
                                    var t = e.mouse.y - e.mouseOri.y;
                                    0 != t && (this.points.forEach(function(e, n, r) {
                                        e[1] = e[3] += t
                                    }), this.pots.forEach(function(e, n, r) {
                                        e[1] += t
                                    })), this.text = [];
                                    var n = this;
                                    this.points.forEach(function(t, r) {
                                        var o = e.chart.yToVal(0, t[1]);
                                        n.text.push(o.toFixed(2))
                                    }), e.mouseOri.y = e.mouse.y
                                }
                            }, this.draw = function() {
                                i(this)
                            }
                        };
                        break;
                    case "upArrow":
                        e.curLine = new function() {
                            this.name = "upArrow", this.up = !0, this.id = l(), this.drawType = e.ARROW, this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null;
                            var t = 0;
                            this.init = function() {
                                d(), this.points = [];
                                var t = e.chart.toPxX(e.chart.xToBar(e.mouse.x)),
                                    n = e.mouse.y;
                                return this.points.push([t, n]), this.points.push([t + 10, n + 10]), this.points.push([t + 10, n + 14]), this.points.push([t + 2, n + 6]), this.points.push([t + 2, n + 20]), this.points.push([t - 2, n + 20]), this.points.push([t - 2, n + 6]), this.points.push([t - 10, n + 14]), this.points.push([t - 10, n + 10]), this.points.push([t, n]), this.points
                            }, this.moving = function() {
                                if (e.mouseDown) {
                                    var n = e.mouse.x - e.mouseOri.x,
                                        r = e.mouse.y - e.mouseOri.y;
                                    t += n, 0 == r && 0 == n || this.points.forEach(function(n, o, i) {
                                        n[0] += t - t % (e.chart.px.bar.spacing + e.chart.px.bar.width), n[1] += r
                                    }), t %= e.chart.px.bar.spacing + e.chart.px.bar.width, e.mouseOri.x = e.mouse.x, e.mouseOri.y = e.mouse.y
                                }
                            }, this.draw = function() {
                                s(this)
                            }
                        };
                        break;
                    case "downArrow":
                        e.curLine = new function() {
                            this.name = "downArrow", this.up = !1, this.id = l(), this.drawType = e.ARROW, this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null;
                            var t = 0;
                            this.init = function() {
                                d(), this.points = [];
                                var t = e.chart.toPxX(e.chart.xToBar(e.mouse.x)),
                                    n = e.mouse.y;
                                return this.points.push([t, n]), this.points.push([t + 10, n - 10]), this.points.push([t + 10, n - 14]), this.points.push([t + 2, n - 6]), this.points.push([t + 2, n - 20]), this.points.push([t - 2, n - 20]), this.points.push([t - 2, n - 6]), this.points.push([t - 10, n - 14]), this.points.push([t - 10, n - 10]), this.points.push([t, n]), this.points
                            }, this.moving = function() {
                                if (e.mouseDown) {
                                    var n = e.mouse.x - e.mouseOri.x,
                                        r = e.mouse.y - e.mouseOri.y;
                                    t += n, 0 == r && 0 == n || this.points.forEach(function(n, o, i) {
                                        n[0] += t - t % (e.chart.px.bar.spacing + e.chart.px.bar.width), n[1] += r
                                    }), t %= e.chart.px.bar.spacing + e.chart.px.bar.width, e.mouseOri.x = e.mouse.x, e.mouseOri.y = e.mouse.y
                                }
                            }, this.draw = function() {
                                s(this)
                            }
                        }
                }
            },
            setType: function(t) {
                e._drawType = t
            },
            resize: function() {
                return e.w = e.canvas.width(), e.h = e.canvas.height(), this
            },
            setChartData: function(t) {
                e.chart = t, p()
            },
            ifNull: function(t) {
                e.nullDrawObj = t
            },
            clean: function() {
                e.objLines = [], e.curLine = null, e.selectDrawObj = null, t.clearRect(0, 0, e.w, e.h), e.nullDrawObj && e.nullDrawObj()
            },
            deleteLine: function() {
                e.selectDrawObj && (e.objLines.forEach(function(t, n) {
                    t.name == e.selectDrawObj.name && t.id == e.selectDrawObj.id && (e.objLines.splice(n, 1), 0 == e.objLines.length && e.nullDrawObj && e.nullDrawObj())
                }), n())
            }
        }
    },
    C = {
        upArrow: "#ff4056",
        downArrow: "#34ce6b",
        line: "#787878",
        text: "#20acea",
        pot: "#20acea"
    };

function PtInPolygon(e, t) {
    for (var n = 0, r = 0; r < t.length; r++) {
        if (p1 = t[r], p2 = t[(r + 1) % t.length], p1[1] != p2[1])
            if (!(e[1] < Math.min(p1[1], p2[1])))
                if (!(e[1] >= Math.max(p1[1], p2[1])))(e[1] - p1[1]) * (p2[0] - p1[0]) / (p2[1] - p1[1]) + p1[0] > e[0] && n++
    }
    return n % 2 == 1
}
Array.prototype.clone = function() {
    return JSON.parse(JSON.stringify(this))
};
var UserAccount_Class = function() {
        var e = null;

        function t() {
            var e = {
                orders: {}
            };

            function t(t) {
                if (null != t && void 0 !== t) {
                    var r = null;
                    t.hasOwnProperty("exch") ? (r = t.exch, t.hasOwnProperty("orders") && null != t.orders && t.orders.hasOwnProperty("length") && (! function(t, r) {
                        var o = "",
                            i = 0;
                        millitime();
                        for (o in e.orders[r]) e.orders[r].hasOwnProperty(o) && (e.orders[r][o], delete e.orders[r][o]);
                        for (i = 0; i < t.length; i++) n(t[i], r)
                    }(t.orders, r), RTBTC.trigger("orders"))) : DEBUG && _debug("No exchange sent with orders!", RTBTC.ERROR)
                } else _ordersFail()
            }

            function n(t, n) {
                var r = t.id,
                    o = millitime();
                null != n && void 0 !== n ? (e.orders[n] || (e.orders[n] = {}), e.orders[n].hasOwnProperty(r) ? e.orders[n][r].hasOwnProperty("added") && (e.orders[n][r].added = 0) : (e.orders[n][r] = {}, e.orders[n][r].added = o), e.orders[n][r].action = t.action, e.orders[n][r].amount = parseFloat(t.amount), e.orders[n][r].price = parseFloat(t.price), e.orders[n][r].base = t.base, e.orders[n][r].quote = t.quote, e.orders[n][r].status = t.status, "Unknown" == e.orders[n][r].status && (e.orders[n][r].status = "Open")) : DEBUG && _debug("Order triggered with no exchange!", RTBTC.ERROR)
            }
            return {
                orders: function() {
                    return e.orders
                },
                ordersAdd: function(e) {
                    t(e)
                }
            }
        }
        return new function() {
            this.Build = function() {
                return null == e && ((e = new t).constructor = null), e
            }
        }
    }(),
    UserAccount, timesList = [],
    timeLimit = 1e3,
    times = 7;

function chackRate() {
    var e = 0;
    for (timesList.length >= times && timesList.pop(), timesList.splice(0, 0, (new Date).getTime()), e = 0; e < timesList.length && !(timesList[e] + timeLimit < (new Date).getTime()); e++);
    return !(e >= times) || (console.log("@@@@@@按钮点击频率太快"), !1)
}
var app = angular.module("tradeApp", ["ngCookies", "pascalprecht.translate", "sly"]).config(["$httpProvider", "$translateProvider", function(e, t) {
        e.interceptors.push("myInterceptor")
    }]).controller("tradeController", ["$scope", "$rootScope", "$http", "$cookies", "$timeout", "streamer", "klineStreamer", "tradeStreamer", "trollboxStreamer", "mktdataStreamer", "userStreamer", "$translate", "$q", "$interval", "pageLoading1", "urlSearch", "SPA", "divLoading", function($scope, $rootScope, $http, $cookies, $timeout, streamer, klineStreamer, tradeStreamer, trollboxStreamer, mktdataStreamer, userStreamer, $translate, $q, $interval, pageLoading1, urlSearch, SPA, divLoading) {
        window.log = console.log, console.log = function() {}, SPA.UrlChange = function() {
            $scope.product = {}, $scope.product.oriSymbol = urlSearch.getUrlParam("symbol") || "BNB_BTC", $scope.product.symbol = $scope.product.oriSymbol.replace("_", ""), $scope.baseAsset = $scope.product.oriSymbol.split("_")[0], $scope.quoteAsset = $scope.product.oriSymbol.split("_")[1], $scope.buy_order.quantity = "", $scope.sell_order.sell_quantity = "", $scope.market_buy_order.quantity = "", $scope.market_sell_order.quantity = "", divLoading.loading("#chart"), RTBTC.instrument("Binance", $scope.product.symbol, $scope.quoteAsset), chart.setResolution(Number(periord[$scope.curIndex])), $scope.Islogin && ($scope.getCommission($scope.product.symbol), $scope.getDealOrders($scope.product.symbol), $scope.getUserAsset()), setCurProduct($scope.products), $scope.getStreamers(), $scope.getLocalProStatus()
        }, $rootScope.pageTitle = $translate.instant("zypro"), pageLoading1.loading(), $rootScope.curPage = "trade", $scope.callInfoArr = eval("(" + localStorage.callInfoArr + ")"), $scope.urlPath = encodeURIComponent(location.pathname + location.search), $scope.curIndex = 1 * localStorage.curIndexApp || 0;
        var periord = [60, 60, 300, 900, 1800, 3600, 7200, 14400, 21600, 43200, 86400, 604800],
            maxMessage, lastProcductclicktime;

        function changeChannel(e) {
            switch (e) {
                case "en":
                    $scope.trollboxChannel = "en";
                    break;
                case "cn":
                    $scope.trollboxChannel = "zh";
                    break;
                case "jp":
                    $scope.trollboxChannel = "jp"
            }
            window.channel = $scope.trollboxChannel
        }

        function setFavorite(e) {
            angular.forEach($scope.products, function(t, n) {
                -1 != jQuery.inArray(t.symbol, e) && ($scope.products[n].pro = !0)
            }), $scope.getProNum()
        }

        function setProducts(e) {
            setCurProduct(e), angular.forEach(e, function(e, t) {
                var n = Math.abs(Math.log10(e.tickSize)),
                    r = Math.abs(Math.log10(e.minTrade));
                e.priceTick = n, e.close = Number(e.close);
                var o, i = {};
                i.priceTick = n, i.qtyTick = r, $scope.productAccuracy[e.symbol] = i, o = null == e.close || 0 == e.close ? "--" : 100 * Number(e.close - e.open) / e.open, e.changeRate = o, e.pro = !1, $scope.products.push(e), $scope.twoAsset[e.symbol] = {
                    base: e.baseAsset,
                    quote: e.quoteAsset
                }, $scope.lastPrices[e.symbol] = e.close
            }), $scope.sortProducts = $scope.products, $scope.getTransToUSDT($scope.products), $scope.getTotalTradeMoney($scope.products), localStorage.orderKey ? ($scope.orderKey = localStorage.orderKey, $scope.orderDesc = "true" == localStorage.orderDesc, $scope.isSameKey = localStorage.isSameKey, $scope.sortByKey(localStorage.orderKey, 1)) : ($scope.orderKey = "baseAsset", $scope.isSameKey = "baseAsset", $scope.orderDesc = !0, $scope.sortByKey("baseAsset")), setTimeout(function() {
                $scope.changeMarket($scope.getQuoteAsset)
            }, 500)
        }

        function setCurProduct(e) {
            angular.forEach(e, function(e, t) {
                if (e.symbol == $scope.product.symbol) {
                    $scope.currentProduct = e, -1 == $scope.product.oriSymbol.indexOf("_") && location.replace("?symbol=" + $scope.currentProduct.baseAsset + "_" + $scope.currentProduct.quoteAsset), $scope.setInfoHref($scope.currentProduct.baseAsset, $scope.currentProduct.baseAssetName, window.localStorage.lang), Data.qouteFixed = $scope.currentProduct.priceTick = Math.abs(Math.log10($scope.currentProduct.tickSize)), Data.baseFixed = $scope.currentProduct.qtyTick = Math.abs(Math.log10($scope.currentProduct.minTrade)), chart.redraw(), $scope.currentProduct.amountTick = Math.abs(Math.log10($scope.currentProduct.tickSize * $scope.currentProduct.minTrade)), $scope.currentProduct.amountTick = Math.min($scope.currentProduct.amountTick, 8), $scope.depthMergeUnit = $scope.currentProduct.priceTick, $scope.depthUnits = $scope.depthUnits.filter(function(e) {
                        return !(e.value >= $scope.currentProduct.priceTick)
                    }), $scope.depthUnits = [];
                    for (var n = 3; n >= 0;) $scope.currentProduct.priceTick - n < 0 ? n-- : ($scope.depthUnits.push({
                        label: $scope.currentProduct.priceTick - n + " " + $translate.instant("decimal"),
                        value: $scope.currentProduct.priceTick - n
                    }), n--);
                    $scope.selecteDepthUnit = $scope.depthUnits[$scope.depthUnits.length - 1], $scope.sell_order.sell_price = $scope.buy_order.price = Number(e.close).toFixed($scope.currentProduct.priceTick)
                }
            })
        }
        $scope.loadTrollbox = function() {
            maxMessage = 30, null != $scope.trollboxStreamerInstance && ($scope.trollboxStreamerInstance.stopStream(), $scope.trollboxStreamerInstance = null), $scope.msgCount = maxMessage, $scope.connectTrollbox = function(e) {
                null == $scope.trollboxStreamerInstance && ($scope.trollboxStreamerInstance = new trollboxStreamer, $scope.trollboxStreamerInstance.startStream("trollbox_" + $scope.trollboxChannel, e, function(e) {
                    $scope.trollboxCallback(e)
                }))
            };
            $scope.getLast = function() {
                $http.get("/exchange/trollbox/last?channel=" + $scope.trollboxChannel).success(function(e) {
                    data = e.msg, data.reverse(), $(".trollbox-list").html("");
                    for (var t in data) d = {}, d.u = data[t].username.split("@")[0], d.m = data[t].message, d.d = data[t].datetime, d.id = data[t].id, d.to = data[t].toUserId, $scope.trollboxCallback(d)
                })
            }, $scope.getLast(), window.WebSocket ? $scope.trollboxUrl ? $scope.connectTrollbox($scope.trollboxUrl) : $http.get("/exchange/public/trollboxWssUrl").success(function(e) {
                $scope.trollboxUrl = e, $scope.connectTrollbox(e)
            }) : $interval(function() {
                $scope.getLast()
            }, 1e3), $scope.getTopMsg = function(e) {
                maxMessage = e, $scope.showTool = !1, $scope.msgCount != e && $scope.getLast(), $scope.msgCount = e
            }
        }, $rootScope.switching = function(e) {
            window.localStorage.lang = e, $scope.cur_lang = e, changeChannel(e), $scope.setInfoHref($scope.currentProduct.baseAsset, $scope.currentProduct.baseAssetName, e)
        }, $scope.cur_lang = window.localStorage.lang, window.channel = window.localStorage.lang, changeChannel(window.localStorage.lang), $scope.getUserAsset = function() {
            $http.post("/exchange/private/userAsset").success(function(e) {
                $scope.userAssets = e, angular.forEach(e, function(e, t) {
                    e.asset == $scope.quoteAsset ? $scope.qouteFree = 1 * e.free : e.asset == $scope.baseAsset && ($scope.baseFree = 1 * e.free)
                })
            })
        }, $scope.getCommission = function(e, t) {
            $http.get("/exchange/public/userTradeFee?symbol=" + e).success(function(e) {
                $scope.buyFee = e.buyMakerCommission, $scope.sellFee = e.sellMakerCommission
            })
        }, $scope.getCnyusd = function() {
            $http.get("/exchange/public/cnyusd").success(function(e) {
                $scope.cnyusdRate = e.rate
            })
        }, $scope.getCnyusd(), $scope.getTransToUSDT = function(e) {
            angular.forEach(e, function(e, t) {
                "USDT" == e.quoteAsset && ($scope.transToUSDT[e.baseAsset] = e.close)
            }), $scope.transToUSDT.USDT = 1
        }, $scope.changeProduct = function(e, t, n, r, o) {
            if (n.stopPropagation(), lastProcductclicktime) {
                if ((new Date).getTime() - lastProcductclicktime < 500) return
            } else lastProcductclicktime = (new Date).getTime();
            lastProcductclicktime = (new Date).getTime(), localStorage.ProStatus = e + t, localStorage.setStatus = e + "_" + t, localStorage.quoteAsset = t, localStorage.curMarket = r, localStorage.thisMarket = "" == r ? "Favorete" : t, SPA.setUrl("?symbol=" + e + "_" + t)
        }, $scope.getLocalProStatus = function() {
            void 0 !== localStorage.ProStatus && ($scope.proStatus = localStorage.ProStatus, window.location.search.indexOf("symbol") < 0 && (window.location.href = "/trade.html?symbol=" + localStorage.setStatus)), void 0 !== localStorage.quoteAsset ? void 0 !== localStorage.thisMarket && "Favorete" == localStorage.thisMarket ? ($scope.getQuoteAsset = "", $scope.curMarket = "", $scope.isPro = !0) : $scope.getQuoteAsset = localStorage.quoteAsset : $scope.getQuoteAsset = "BTC"
        }, $scope.infoLink = "", $scope.setInfoHref = function(e, t, n) {
            console.log(e, t), $.getJSON("https://info.binance.com/getInfo?name=" + t, function(t) {
                t.length > 0 ? t[0].name == e ? $scope.infoLink = "cn" == n ? "https://info.binance.com/cn/currencies/" + t[0].pathName : "https://info.binance.com/en/currencies/" + t[0].pathName : (console.log("没有匹配的币种"), $scope.infoLink = "") : $scope.infoLink = ""
            })
        }, $scope.localListData = [], $scope.favoriteFun = function(e, t, n) {
            if (e.stopPropagation(), n) $scope.Islogin ? $http.post("/exchange/private/deletePortfolio", $.param({
                symbol: t
            })).success(function(e) {
                for (var n = 0; n < $scope.sortProducts.length; n++)
                    if (t == $scope.sortProducts[n].symbol) {
                        $scope.sortProducts[n].pro = !1;
                        break
                    }
                $scope.getProNum()
            }) : (console.log("未登录，删除本地"), angular.forEach($scope.sortProducts, function(e, n) {
                t == e.symbol && (e.pro = !1)
            }), $scope.getProNum(), $scope.removeByValue($scope.localListData, t), localStorage.sortLists = JSON.stringify($scope.localListData), console.log(localStorage.sortLists));
            else if ($scope.Islogin) $http.post("/exchange/private/addPortfolio", $.param({
                symbol: t
            })).success(function(e) {
                for (var n = 0; n < $scope.sortProducts.length; n++) t == $scope.sortProducts[n].symbol && ($scope.sortProducts[n].pro = !0);
                $scope.getProNum()
            });
            else {
                console.log("未登录，添加到本地");
                for (var r = 0; r < $scope.sortProducts.length; r++) t == $scope.sortProducts[r].symbol && ($scope.sortProducts[r].pro = !0, $scope.localListData.push($scope.sortProducts[r].symbol));
                $scope.getProNum(), localStorage.sortLists = JSON.stringify($scope.localListData), console.log(JSON.parse(localStorage.sortLists).length)
            }
        }, $scope.removeByValue = function(e, t) {
            for (var n = 0; n < e.length; n++)
                if (e[n] == t) {
                    e.splice(n, 1);
                    break
                }
        }, $scope.noLoginFavoreteFun = function() {
            void 0 !== localStorage.sortLists && ($scope.localListData = JSON.parse(localStorage.sortLists));
            var e = $scope.localListData,
                t = $scope.sortProducts;
            angular.forEach(e, function(e) {
                angular.forEach(t, function(t) {
                    e == t.symbol && (t.pro = !0)
                })
            }), $scope.getProNum()
        }, $scope.getFocus = function() {
            $("#search-int").addClass("active")
        }, $scope.getBlur = function() {
            $("#search-int").removeClass("active"), $scope.marketsKeyWords = ""
        }, $scope.getFavorite = function() {
            $scope.Islogin ? $http.post("/exchange/private/portfolios").success(function(e) {
                setFavorite(e.data)
            }) : localStorage.sortLists && setFavorite(JSON.parse(localStorage.sortLists))
        }, $scope.getProNum = function() {
            var e = 0;
            angular.forEach($scope.products, function(t, n) {
                t.pro && e++
            }), e > 0 ? $scope.noPro = !1 : ($scope.noPro = !0, localStorage.thisMarket = "")
        }, $scope.isShowLegal = !1, $scope.showLegal = function(e, t, n, r) {
            $scope.isShowLegal = !0;
            var o, i = $(".market-con ul").eq(e).offset();
            o = "cn" != $scope.cur_lang ? "$" + (t * $scope.transToUSDT[r]).toFixed(2) : "￥" + (t * $scope.transToUSDT[r] * $scope.cnyusdRate).toFixed(2), $(".legal").css({
                position: "absolute",
                left: i.left,
                top: i.top
            }), $scope.legal = o, $scope.legalLink = "/trade.html?symbol=" + n + "_" + r
        }, $scope.hideLegal = function() {
            $scope.isShowLegal = !1
        }, $scope.product = {}, $scope.product.oriSymbol = urlSearch.getUrlParam("symbol") || "BNB_BTC", $scope.product.symbol = $scope.product.oriSymbol.replace("_", ""), $scope.baseAsset = $scope.product.oriSymbol.split("_")[0], $scope.quoteAsset = $scope.product.oriSymbol.split("_")[1], $scope.depthUnits = [], $scope.products = [], $scope.sortProducts = [], $scope.transToUSDT = {}, $scope.currentProduct = {}, $scope.getTradeLists = function() {
            $http.get("/exchange/public/product").success(function(e) {
                if (e.data.length) {
                    for (var t = e.data, n = !1, r = 0; r < t.length; r++) t[r].symbol == $scope.product.symbol && (n = !0);
                    n ? setProducts(t) : $http.get("/exchange/public/product?symbol=" + $scope.product.symbol).success(function(e) {
                        t.push(e.data[0]), setProducts(t)
                    })
                } else $scope.products = [];
                $scope.Islogin && $scope.getUserInfo(e.data)
            })
        }, $scope.twoAsset = {}, $scope.productAccuracy = {}, $scope.getTotalTradeMoney = function(e) {
            var t = {};
            $rootScope.totalTradeMoney = [], angular.forEach(e, function(e, n) {
                t[e.quoteAsset] || (t[e.quoteAsset] = 0), t[e.quoteAsset] += Number(e.tradedMoney)
            });
            for (var n in t) $rootScope.totalTradeMoney.push([n, t[n]]);
            console.log($rootScope.totalTradeMoney)
        }, localStorage.marketChange ? $scope.marketChange = localStorage.marketChange : $scope.marketChange = "changeRate", $scope.selectMarketKey = function() {
            localStorage.marketChange = $scope.marketChange
        };
        var root_url = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1",
            klineDataCach = {};
        $scope.cal = function(e, t, n) {
            var r = $(n.target).parent("span"),
                o = Math.pow(.1, e),
                i = r.siblings("input"),
                s = i.val();
            s ? t ? i.val((1 * s + o).toFixed(e)) : s > o && i.val((1 * s - o).toFixed(e)) : (s = o, i.val(s.toFixed(e))), i.trigger("input")
        }, $scope.changeMarket = function(e) {
            $scope.Islogin ? $scope.getFavorite() : $scope.noLoginFavoreteFun()
        }, $scope.changeZixuan = function() {
            $scope.Islogin ? $scope.getFavorite() : $scope.noLoginFavoreteFun()
        }, $scope.getLocalProStatus(), $scope.getTradeLists(), $scope.sortByKey = function(e, t) {
            $scope.orderKey = e, $scope.isSameKey != e ? ($scope.isSameKey = e, $scope.orderDesc = !0) : t || ($scope.orderDesc = !$scope.orderDesc), localStorage.orderKey = e, localStorage.orderDesc = $scope.orderDesc, localStorage.isSameKey = $scope.isSameKey
        };
        var translateResolution = function(e) {
                switch (e) {
                    case "0":
                    case "60":
                        return "1m";
                    case "180":
                        return "3m";
                    case "300":
                        return "5m";
                    case "900":
                        return "15m";
                    case "1800":
                        return "30m";
                    case "3600":
                        return "1h";
                    case "7200":
                        return "2h";
                    case "14400":
                        return "4h";
                    case "21600":
                        return "6h";
                    case "43200":
                        return "12h";
                    case "86400":
                        return "1d";
                    case "259200":
                        return "3d";
                    case "604800":
                        return "1w"
                }
                console.log("Error parsing resolution: " + e)
            },
            interval = "60",
            exchangeInterval = translateResolution(interval),
            settings = {
                t: Number(interval),
                icontrols: !0,
                i: [{
                    m: !0,
                    p: 0,
                    h: 50,
                    u: [],
                    o: []
                }, {
                    m: !1,
                    t: "vol",
                    i: null,
                    p: 5,
                    h: 10,
                    r: []
                }, {
                    m: !1,
                    t: "macd",
                    i: null,
                    p: 5,
                    h: 10,
                    r: []
                }]
            };
        window.chart = (new Chart).build("#chart", null, settings), chart.onTheme("chart-white2"), window.UserAccount = UserAccount_Class.Build(), RTBTC.instrument("BIJIE", $scope.product.symbol, $scope.quoteAsset);
        var depthChart = (new VisualDepth).build("#depth", $("#p"));

        function userOrdersOndepth(e) {
            if (e && e instanceof Array) {
                var t = {};
                t.exch = "BIJIE", t.orders = [], e.forEach(function(e) {
                    e.symbol == $scope.product.symbol && t.orders.push({
                        id: e.id || e.orderId,
                        action: e.side.toLowerCase(),
                        amount: e.origQty,
                        price: e.price,
                        base: e.symbol,
                        quote: $scope.quoteAsset,
                        status: "Open"
                    })
                }), UserAccount.ordersAdd(t)
            }
        }
        depthChart.onTheme("depth-white"), $scope.getOrders = function() {
            $http({
                method: "post",
                url: "/exchange/private/openOrders"
            }).success(function(e) {
                $scope.openOrders = e, userOrdersOndepth(e), setUserOrders($scope.asksTwenty, $scope.bidsTwenty, $scope.openOrders)
            })
        }, $scope.getTradeOrders = function() {
            var e = new Date,
                t = e.getTime(),
                n = e.setDate(e.getDate() - 1),
                r = $.param({
                    start: n,
                    end: t,
                    page: 1,
                    rows: 20
                });
            $http.post("/exchange/private/tradeOrders", r).success(function(e) {
                $scope.allOrders = e.data, angular.forEach($scope.allOrders, function(e, t) {
                    0 == e.statusCode && ($scope.allOrders[t].executedPrice = e.price)
                })
            })
        }, $scope.deleteOrder = function(e, t) {
            var n = {
                method: "post",
                url: "/exchange/private/deleteOrder",
                data: $.param({
                    orderId: e,
                    symbol: t
                })
            };
            $http(n).then(function(e) {
                layer.msg($translate.instant("cancelOrderSucceed"), {
                    icon: 1,
                    shift: 1,
                    time: 500
                })
            }, function(e) {
                layer.msg($translate.instant("cancelOrderFail") + e.data.msg, {
                    icon: 5,
                    shift: 1,
                    time: 500
                })
            })
        }, $scope.caculateNum = function(e) {
            var t = 0;
            return "All" == e ? t = $scope.openOrders.length : "Stop-Limit" == e ? angular.forEach($scope.openOrders, function(e, n) {
                e.stopPrice && (t += 1)
            }) : "Limit" == e && angular.forEach($scope.openOrders, function(e, n) {
                e.stopPrice || (t += 1)
            }), t
        }, $scope.deleteAllOrderAsk = function(e) {
            var t, n;
            "Limit" == e ? (n = $scope.caculateNum("Limit"), t = "Are you sure to cancel all Limit orders?") : "Stop-Limit" == e ? (n = $scope.caculateNum("Stop-Limit"), t = "Are you sure to cancel all Stop-Limit orders?") : "All" == e && (n = $scope.caculateNum("All"), t = "Are you sure you want to cancel all?"), n && layer.confirm($translate.instant(t), {
                closeBtn: 1,
                title: null,
                btn: [$translate.instant("Yes"), $translate.instant("No")]
            }, function() {
                angular.forEach($scope.openOrders, function(t) {
                    var n = {
                        method: "post",
                        url: "/exchange/private/deleteOrder",
                        data: $.param({
                            orderId: t.orderId,
                            symbol: t.symbol
                        })
                    };
                    "All" == e ? $http(n).then(function(e) {
                        layer.msg($translate.instant("cancelOrderSucceed"), {
                            icon: 1,
                            shift: 1,
                            time: 500
                        })
                    }, function(e) {
                        layer.msg($translate.instant("cancelFailed") + e.data.msg, {
                            icon: 2,
                            shift: 1,
                            time: 500
                        })
                    }) : "Limit" == e ? t.stopPrice || $http(n).then(function(e) {
                        layer.msg($translate.instant("cancelOrderSucceed"), {
                            icon: 1,
                            shift: 1,
                            time: 500
                        })
                    }, function(e) {
                        layer.msg($translate.instant("cancelFailed") + e.data.msg, {
                            icon: 2,
                            shift: 1,
                            time: 500
                        })
                    }) : "Stop-Limit" == e && t.stopPrice && $http(n).then(function(e) {
                        layer.msg($translate.instant("cancelOrderSucceed"), {
                            icon: 1,
                            shift: 1,
                            time: 500
                        })
                    }, function(e) {
                        layer.msg($translate.instant("cancelFailed") + e.data.msg, {
                            icon: 2,
                            shift: 1,
                            time: 500
                        })
                    })
                })
            }, function() {
                layer.close()
            })
        };
        var showAskCount = 5,
            showBidCount = 5;
        $scope.depthMergeUnit = 8;
        var initScroll = 0;
        $scope.trades = [], $scope.todayTrades = [], $scope.streamBids = {}, $scope.streamBidsKeys = [], $scope.streamAsks = {}, $scope.streamAsksKeys = [];
        var callback = function(e) {
            if ("depthUpdate" == e.eventType) {
                console.log(e.bids), filterDepth(e.bids, $scope.streamBids), filterDepth(e.asks, $scope.streamAsks), OBD.loadBook($scope.streamAsks, $scope.streamBids, 9999999), $scope.streamBidsKeys = Object.keys($scope.streamBids).sort(function(e, t) {
                    return e - t
                }).reverse(), $scope.streamAsksKeys = Object.keys($scope.streamAsks).sort(function(e, t) {
                    return e - t
                });
                var t = [],
                    n = [];
                GroupDepth($scope.streamBidsKeys, $scope.streamBids, t, floor), GroupDepth($scope.streamAsksKeys, $scope.streamAsks, n, ceil), t[0] && n[0] && !isNaN(Number(t[0][0])) && !isNaN(Number(n[0][0])) && Number(t[0][0]) >= Number(n[0][0]) && $scope.streamerInstance.RePull(), t.length > 100 && (t = t.slice(0, 100)), $scope.bidsTwenty = t, n.length > 100 && (n = n.slice(0, 100)), $scope.asksTwenty = n.reverse(), ($scope.bidsTwenty.length || $scope.asksTwenty.length) && computBarWidth($scope.bidsTwenty, $scope.asksTwenty), setUserOrders($scope.asksTwenty, $scope.bidsTwenty, $scope.openOrders), AddBlankDepth($scope.bidsTwenty), InsertBlankDepth($scope.asksTwenty);
                var r = Math.abs(document.getElementById("askScrollBox").scrollHeight - $("#askScrollBox").height() - document.getElementById("askScrollBox").scrollTop) < 1;
                "$apply" != (o = $scope.$root.$$phase) && "$digest" != o && $scope.$apply(), r && $timeout(function() {
                    document.getElementById("askScrollBox").scrollTop = document.getElementById("askScrollBox").scrollHeight
                })
            } else if ("trade" == e.eventType) {
                if (e.price = Number(e.price).toFixed(8), e.qty = Number(e.qty).toFixed(8), (0 == $scope.trades.length || $scope.trades[0].aggTradeId < e.aggTradeId) && $scope.trades.unshift(e), !$scope.currentProduct.lastAggTradeId || null == $scope.currentProduct.lastAggTradeId || $scope.currentProduct.lastAggTradeId >= e.aggTradeId) return;
                var o, i = Number(e.price);
                for (var s in $scope.products) $scope.products[s].symbol == e.symbol && ($scope.products[s].lastAggTradeId = e.aggTradeId, $scope.lastPrices[e.symbol] = i, $scope.products[s].close = i);
                "$apply" != (o = $scope.$root.$$phase) && "$digest" != o && $scope.$apply()
            } else "kline" == e.eventType ? e.kline.interval == exchangeInterval && Data.onBar([e.kline.time, Number(e.kline.open), Number(e.kline.high), Number(e.kline.low), Number(e.kline.close), Number(e.kline.volume), Number(e.kline.quoteVolume)], Number(interval)) : (console.log("Error! Bad data received:"), console.log(e))
        };

        function floor(e, t) {
            return Math.floor(new Big(e + "").times(new Big(Math.pow(10, t) + "")).toString()) / Math.pow(10, t)
        }

        function ceil(e, t) {
            return Math.ceil(new Big(e + "").times(new Big(Math.pow(10, t) + "")).toString()) / Math.pow(10, t)
        }

        function toOne(e, t) {
            return Math.atan(e) / Math.atan(t)
        }

        function GroupDepth(e, t, n, r) {
            angular.forEach(e, function(e) {
                if (8 != $scope.depthMergeUnit) {
                    var o = !1;
                    n.forEach(function(n) {
                        n[0] == r(Number(e), $scope.depthMergeUnit) && (n[1] += Number(t[e]), n[2] += Number(t[e] * e), o = !0)
                    }), o || n.push([r(Number(e), $scope.depthMergeUnit), Number(t[e]), Number(t[e]) * Number(e)])
                } else n.push([Number(e), Number(t[e]), Number(e) * Number(t[e])])
            })
        }

        function setUserOrders(e, t, n) {
            [e, t].forEach(function(e) {
                e && e.forEach(function(e) {
                    "--" != e[0] && (e[4] = !1, n && n.forEach(function(t) {
                        if (t.symbol == $scope.product.symbol) {
                            var n = t.price;
                            "SELL" == t.side ? n = ceil(n, $scope.depthMergeUnit) : "BUY" == t.side && (n = floor(n, $scope.depthMergeUnit)), e[0] == n && (e[4] = !0)
                        }
                    }))
                })
            })
        }
        $scope.depthMergeChange = function(e) {
            $scope.depthMergeUnit = e, callback({
                eventType: "depthUpdate"
            })
        };
        var depthDivWidth = 253;

        function computBarWidth(e, t) {
            var n = [],
                r = [];
            angular.forEach(e, function(e) {
                n.push(e)
            }), angular.forEach(t, function(e) {
                r.push(e)
            });
            var o = sortDepth.medianUnit(n, r, 48);
            angular.forEach(e, function(e) {
                e.push({
                    width: sortDepth.width(e[1], o) * depthDivWidth / 100
                })
            }), angular.forEach(t, function(e) {
                e.push({
                    width: sortDepth.width(e[1], o) * depthDivWidth / 100
                })
            })
        }

        function AddBlankDepth(e) {
            for (; e.length < 31;) e.push(["--", "--", {
                width: 0
            }])
        }

        function InsertBlankDepth(e) {
            for (; e.length < 31;) e.unshift(["--", "--", {
                width: 0
            }])
        }

        function filterDepth(e, t) {
            e && e.forEach(function(e) {
                var n = Number(e[0]),
                    r = Number(e[1]);
                0 != r ? t[n] = r : delete t[n]
            })
        }
        var isPreKLine = !0,
            isKLine = !0,
            setResolution = function(e, t) {
                chart.setCrossHair(!0), t ? (isPreKLine || (chart.fixTime(!1), chart.setBarwidth(5), chart.clearData(), chart.removeIndicatorByname(["avl"]), chart.addOrUpdateIndicator("ma", 7), chart.addOrUpdateIndicator("ma", 25), chart.addOrUpdateIndicator("ma", 99), chart.setMode("Candle"), isPreKLine = !0), exchangeInterval = translateResolution(interval = e), chart.setResolution(Number(e))) : (isPreKLine && (chart.fixTime(!1), chart.clearData(), chart.setLastColorIndex(0), chart.removeIndicatorByname(["ma", "ma", "ma"]), chart.addOrUpdateIndicator("avl"), chart.setMode("Line"), isPreKLine = !1), exchangeInterval = translateResolution(interval = "60"), chart.setResolution(60))
            };
        $scope.getByInterval = function(e, t) {
            firstLoad != t && (setResolution(e, !0), $scope.curIndex = t, firstLoad = t, localStorage.curIndexApp = t)
        }, $scope.setTimeLine = function(e) {
            firstLoad != e && (setResolution("60", !1), $scope.curIndex = e, localStorage.curIndexApp = e, firstLoad = e)
        }, parseInt($scope.curIndex) ? (isPreKLine = !1, chart.setLastColorIndex(1), $scope.getByInterval(periord[parseInt($scope.curIndex)] + "", parseInt($scope.curIndex))) : (isPreKLine = !0, $scope.setTimeLine($scope.curIndex)), $scope.chartLoaded = function() {
            $scope.klineStreamer && $scope.klineStreamer.stopStream(), $scope.loaded = !0, $http.get("/exchange/public/klineUrl").success(function(e) {
                $scope.connectToKlineStreamer(e)
            })
        };
        var firstLoad = "-1";

        function statChange(e) {
            $scope.depthWrong = e;
            var t = $scope.$root.$$phase;
            "$apply" != t && "$digest" != t && $scope.$apply()
        }
        Data.onLoaded(function() {
            divLoading.close("#chart"), $scope.chartLoaded()
        }), $scope.dealOrders = [], $scope.getDealOrders = function(e) {
            var t = new Date,
                n = t.getTime(),
                r = t.setDate(t.getDate() - 1),
                o = $.param({
                    page: 1,
                    rows: 40,
                    start: r,
                    end: n,
                    symbol: e
                });
            $http.post("/exchange/private/userTrades", o).success(function(e) {
                $scope.dealOrders = [], e.data ? ($scope.scrollLoading = !1, angular.forEach(e.data, function(e) {
                    -1 == $scope.dealOrders.indexOf(e) && $scope.dealOrders.push(e)
                })) : $scope.dealOrders = []
            })
        }, $scope.delayHide = function(e, t) {
            $scope[t] = $timeout(function() {
                $scope[e] = !1
            }, 500)
        }, $scope.clearTimer = function(e) {
            $timeout.cancel($scope[e])
        }, $scope.isLogin = function() {
            if ("y" == $cookies.logined) {
                $scope.Islogin = !0;
                $cookies.userId;
                return $scope.getOrders(), $scope.getTradeOrders(), $scope.getDealOrders($scope.product.symbol), $scope.getUserAsset($scope.product.symbol), $scope.getCommission($scope.product.symbol), !0
            }
            return $scope.Islogin = !1, !1
        }, $scope.isLogin(), $scope.disconnect = function() {
            $scope.streamerInstance.stopStream(), $scope.streamerInstance = null
        }, $scope.connectToSymbol = function(e) {
            null == $scope.streamerInstance ? $scope.streamerInstance = new streamer : $scope.streamerInstance.stopStream(), $scope.streamerInstance.startStream($scope.product.symbol, e, function(e) {
                e.clean && ($scope.streamBids = {}, $scope.streamAsks = {}), callback(e)
            }, statChange)
        }, $scope.connectToTradeStream = function(e) {
            divLoading.loading("#tradeHistory"), null == $scope.streamerTrade ? $scope.streamerTrade = new tradeStreamer : $scope.streamerTrade.stopStream(), $scope.streamerTrade.startStream($scope.product.symbol, e, function(e) {
                1 == e.clean && ($scope.trades = [], $scope.todayTrades = []), callback(e), divLoading.close("#tradeHistory")
            })
        }, $scope.connectToKlineStreamer = function(e) {
            null == $scope.klineStreamer ? $scope.klineStreamer = new klineStreamer : $scope.klineStreamer.stopStream(), $scope.klineStreamer.startStream($scope.product.symbol, e, translateResolution(interval), function(e) {
                callback(e)
            })
        }, $scope.lastPrices = {}, $scope.connectToMktdata = function(e) {
            null == $scope.streamerMktdata && ($scope.streamerMktdata = new mktdataStreamer, $scope.streamerMktdata.startStream(e, function(e) {
                e.forEach(function(e) {
                    if ("trade" == e.eventType) {
                        for (var t in $scope.products) $scope.products[t].symbol == e.symbol && ($scope.lastPrices[e.symbol] = $scope.products[t].close, $scope.products[t].close = Number(e.price), $scope.products[t].open = e.open, $scope.products[t].high = e.high, $scope.products[t].low = e.low, $scope.products[t].volume = Number(e.volume), $scope.products[t].changeRate = 100 * Number(1 * e.price - e.open) / e.open, $scope.products[t].tradedMoney = Number(e.quoteVolume));
                        $scope.getTransToUSDT($scope.products), $scope.getTotalTradeMoney($scope.products), $scope.sortByKey($scope.orderKey, 1)
                    }
                });
                var t = $scope.$root.$$phase;
                "$apply" != t && "$digest" != t && $scope.$apply()
            }))
        }, $scope.getStreamers = function() {
            $scope.connectToTradeStream($scope.wssUrl), $scope.connectToSymbol($scope.wssUrl)
        }, window.WebSocket ? ($http.get("/exchange/public/wssUrl").success(function(e) {
            $scope.wssUrl = e, $scope.connectToSymbol(e), $scope.connectToTradeStream(e)
        }), $http.get("/exchange/public/mktdataWssUrl").success(function(e) {
            $scope.connectToMktdata(e)
        })) : $interval(function() {
            $scope.getNewest(), $scope.getBestTwenty(), $scope.getTodayTrades(), $scope.getTradeLists()
        }, 1e3), $scope.userCallback = function(e) {
            "outboundAccountInfo" == e.eventType && e.balances.forEach(function(e) {
                var t;
                (e.asset == $scope.quoteAsset && ($scope.qouteFree = e.free), e.asset == $scope.baseAsset && ($scope.baseFree = e.free), $scope.userAssets instanceof Array) && ($scope.userAssets.forEach(function(n, r) {
                    n.asset == e.asset && (n.locked = e.locked, n.free = e.free, $scope.currentUserAsset = n.free, 0 == $scope.currentUserAsset ? $scope.takeDelivery = !1 : $scope.takeDelivery = !0, 0 == parseFloat(n.free).toFixed(2) && 0 == parseFloat(n.locked).toFixed(2) && 0 == parseFloat(n.freeze).toFixed(2) && 0 == parseFloat(n.ipoing).toFixed(2) && 0 == parseFloat(n.ipoable).toFixed(2) && 0 == parseFloat(n.storage).toFixed(2) && (t = r))
                }), void 0 !== t && $scope.userAssets.splice(t, 1))
            });
            if ("executionReport" == e.eventType) {
                var t = {};
                switch (t.time = e.time, t.symbol = e.symbol, t.side = e.side, t.type = e.orderType, t.orderType = $translate.instant(t.type), t.status = e.orderStatus, t.workingIndicator = e.workingIndicator, t.origQty = parseFloat(e.qty), t.price = parseFloat(e.price), t.stopPrice = parseFloat(e.stopPrice), t.executedQty = parseFloat(e.cummulativeQty), t.commissionAsset = e.commissionAsset, t.orderId = e.orderId, "STOP_LOSS_LIMIT" != t.type && "TAKE_PROFIT_LIMIT" != t.type || (t.orderType = $translate.instant("Stop-Limit")), e.orderStatus) {
                    case "NEW":
                        t.executedQty = 0, t.executedPrice = 0, console.log(t.symbol + " 委托" + t.origQty), "LIMIT" == t.type || "MARKET" == t.type ? ($scope.openOrders.splice(0, 0, t), $scope.IsopenOrdersNull = !1) : "STOP_LOSS_LIMIT" != t.type && "TAKE_PROFIT_LIMIT" != t.type || (t.workingIndicator ? angular.forEach($scope.openOrders, function(e, n) {
                            t.orderId == e.orderId && t.symbol == e.symbol && ($scope.openOrders[n].workingIndicator = t.workingIndicator)
                        }) : ($scope.openOrders.splice(0, 0, t), $scope.IsopenOrdersNull = !1));
                        break;
                    case "PARTIALLY_FILLED":
                        var n = parseFloat(e.lastQty),
                            r = parseFloat(e.lastPrice),
                            o = parseFloat(e.cummulativeQty);
                        $scope.openOrders instanceof Array && $scope.openOrders.forEach(function(e) {
                            e.symbol == t.symbol && e.orderId == t.orderId && (e.executedPrice = (e.executedQty * e.executedPrice + r * n) / o, e.executedQty = o, e.executedQuoteQty = e.executedPrice * e.executedQty, e.status = $translate.instant("PARTIALLY_FILLED"))
                        });
                        var i = {};
                        i.symbol = e.symbol, i.time = e.time, i.side = e.side, i.qty = e.lastQty, i.price = e.lastPrice, i.totalQuota = n * r, i.fee = parseFloat(e.commission), t.symbol == $scope.product.symbol && ($scope.dealOrders.splice(0, 0, i), $scope.dealBigTotalItems = $scope.dealOrders.length);
                        break;
                    case "FILLED":
                        var s = parseFloat(e.lastQty),
                            a = parseFloat(e.lastPrice),
                            l = parseFloat(e.cummulativeQty);
                        console.log(e), $scope.openOrders instanceof Array && $scope.openOrders.forEach(function(e) {
                            e.symbol == t.symbol && e.orderId == t.orderId && (e.executedPrice = (e.executedQty * e.executedPrice + a * s) / l, e.executedQty = l, e.status = $translate.instant("FILLED"), e.executedQuoteQty = e.executedPrice * e.executedQty, d = e)
                        });
                        var c = {};
                        c.symbol = t.symbol, c.time = t.time, c.side = t.side, c.qty = s, c.price = a;
                        var u, p = parseFloat(e.commission);
                        c.fee = p, c.totalQuota = s * a, t.symbol == $scope.product.symbol && ($scope.dealOrders.splice(0, 0, c), $scope.dealBigTotalItems = $scope.dealOrders.length), $scope.allOrders.splice(0, 0, d), $scope.openOrders.forEach(function(e, n) {
                            e.symbol == t.symbol && e.orderId == t.orderId && (u = n)
                        }), $scope.openOrders.splice(u, 1), 0 == $scope.openOrders.length ? $scope.IsopenOrdersNull = !0 : $scope.IsopenOrdersNull = !1;
                        break;
                    case "CANCELED":
                    case "EXPIRED":
                        var f, d;
                        s = parseFloat(e.lastQty), a = parseFloat(e.lastPrice), l = parseFloat(e.cummulativeQty);
                        $scope.openOrders.forEach(function(e, n) {
                            e.symbol == t.symbol && e.orderId == t.orderId && (f = n, 0 == l ? (e.executedPrice = t.price, e.status = $translate.instant("CANCELED"), "MARKET" == t.type && (e.status = $translate.instant("EXPIRED")), e.executedQuoteQty = 0) : (e.executedPrice = (e.executedQty * e.executedPrice + a * s) / l, e.executedQty = l, e.status = $translate.instant("PARTIALLY_FILLED"), e.executedQuoteQty = e.executedPrice * e.executedQty), d = e)
                        }), $scope.openOrders.splice(f, 1), 0 == $scope.openOrders.length ? $scope.IsopenOrdersNull = !0 : $scope.IsopenOrdersNull = !1, $scope.allOrders.splice(0, 0, d)
                }
            }
            userOrdersOndepth($scope.openOrders), setUserOrders($scope.asksTwenty, $scope.bidsTwenty, $scope.openOrders);
            var h = $scope.$root.$$phase;
            "$apply" != h && "$digest" != h && $scope.$apply()
        }, $scope.updatePosition = function(e, t, n, r) {
            var o;
            if ($scope.userAssets instanceof Array && $scope.userAssets.forEach(function(t, n) {
                    t.asset == e.symbol.substr(0, 3) && (o = t, n)
                }), !o && "BUY" == e.side) {
                var i = {};
                i.asset = e.symbol.replace(e.commissionAsset, ""), i.productName = e.productName, i.free = t, i.locked = 0, i.freeze = 0, i.withdrawing = 0, i.ipoing = 0, i.ipoable = 0, i.storage = 0, i.quoteAsset = e.commissionAsset, i.price = n, i.marketValue = t * n, i.profitLoss = -r, $scope.userAssets.splice(0, 0, i)
            }
            0 == $scope.userAssets.length && ($scope.totalMarketValue = 0, $scope.totalProfit = 0)
        }, $scope.getUserInfo = function(e) {
            var t = {};
            t.method = "post", t.url = "/exchange/private/startStream", $http(t).success(function(t) {
                $http.get("/exchange/public/wssUrl").success(function(n) {
                    var r = n + "/" + t.listenKey;
                    $interval(function() {
                        $http({
                            url: "/exchange/private/pingStream",
                            method: "post",
                            data: "listenKey=" + t.listenKey
                        }).success(function() {
                            console.log("pingStream success")
                        })
                    }, 18e5), null == $scope.userStreamerInstance && ($scope.userStreamerInstance = new userStreamer, $scope.userStreamerInstance.startStream(r, function(t) {
                        $scope.userCallback(t, e)
                    }))
                })
            })
        },/* $scope.trade = function(e) {
            isNaN(Number(e)) || ("limit" == $scope.orderType.v ? ($scope.buy_order.price = Number(e).toFixed($scope.currentProduct.priceTick), $scope.sell_order.sell_price = Number(e).toFixed($scope.currentProduct.priceTick)) : "stopLimit" == $scope.orderType.v && ($scope.stopBuy_order.stopPrice = Number(e).toFixed($scope.currentProduct.priceTick), $scope.stopBuy_order.price = Number(e).toFixed($scope.currentProduct.priceTick), $scope.stopSell_order.stopPrice = Number(e).toFixed($scope.currentProduct.priceTick), $scope.stopSell_order.curPrice = Number(e).toFixed($scope.currentProduct.priceTick)))
        },*/ /*$scope.tradeBuyVol = function(e) {
            for (var t = $scope.bidsTwenty.indexOf(e), n = 0, r = 0; r <= t; r++) n += Number($scope.bidsTwenty[r][1]);
            $scope.Islogin ? n < Number($scope.baseFree) ? $scope.sell_order.sell_quantity = floorToFixed(n, $scope.currentProduct.qtyTick) : $scope.sell_order.sell_quantity = floorToFixed($scope.baseFree, $scope.currentProduct.qtyTick) : $scope.sell_order.sell_quantity = floorToFixed(n, $scope.currentProduct.qtyTick)
        }, */$scope.tradeSellVol = function(e) {
            for (var t = $scope.asksTwenty.indexOf(e), n = 0, r = $scope.asksTwenty.length - 1; r >= t; r--) n += Number($scope.asksTwenty[r][1]);
            $scope.Islogin ? n < Number($scope.qouteFree / $scope.buy_order.price) ? $scope.buy_order.quantity = floorToFixed(n, $scope.currentProduct.qtyTick) : $scope.buy_order.quantity = floorToFixed($scope.qouteFree / $scope.buy_order.price, $scope.currentProduct.qtyTick) : $scope.buy_order.quantity = floorToFixed(n, $scope.currentProduct.qtyTick)
        };
        var floorToFixed = function(e, t) {
                return (Math.floor(new Big(e + "").times(new Big(Math.pow(10, t) + "")).toString()) / Math.pow(10, t)).toFixed(t)
            },
            sendToUserId;
        $scope.showerror = function(e, t, n) {
            angular.element("#" + t).text(n), angular.element("#" + e).addClass("ipterror")
        }, $scope.hideerror = function(e, t) {
            angular.element("#" + t).text(""), $(e.target).removeClass("ipterror")
        }, $scope.checkinput = function(e, t) {
            var n = $(e.target).val();
            if ("" == n || null == n) return !1;
            if (!new RegExp("^\\d+(\\.\\d{0," + t + "})?$").test(n) && ($(e.target).val(n.replace(/[^\d\.]/g, "")), -1 != n.indexOf("."))) {
                var r = n.toString().split(".")[1].length;
                r > t && $(e.target).val(n.slice(0, -(r - t)))
            }
            $(e.target).trigger("input"), $(e.target).trigger("change")
        }, $scope.loadMore = function(e) {
            "ask" == e ? showAskCount += showAskCount : showBidCount += showBidCount, callback({
                eventType: "depthUpdate",
                bids: [],
                asks: []
            })
        }, $scope.buy_order = {}, $scope.sell_order = {}, $scope.market_buy_order = {}, $scope.market_sell_order = {}, $scope.stopBuy_order = {}, $scope.stopSell_order = {}, $scope.orderPercent = function(e, t, n) {
            var r = {};
            if ($scope.userAssets) {
                for (var o = 0; o < $scope.userAssets.length; o++) r[$scope.userAssets[o].asset] = $scope.userAssets[o].free;
                "limit" == n ? "buy" == t && $scope.buy_order.price ? $scope.buy_order.quantity = floorToFixed(e * r[$scope.currentProduct.quoteAsset] / $scope.buy_order.price, $scope.currentProduct.qtyTick) : $scope.sell_order.sell_quantity = floorToFixed(e * r[$scope.currentProduct.baseAsset], $scope.currentProduct.qtyTick) : "market" == n ? "buy" == t ? $scope.market_buy_order.quantity = floorToFixed(e * r[$scope.currentProduct.quoteAsset] / $scope.currentProduct.close, $scope.currentProduct.qtyTick) : $scope.market_sell_order.quantity = floorToFixed(e * r[$scope.currentProduct.baseAsset], $scope.currentProduct.qtyTick) : "stopLimit" == n && ("buy" == t ? $scope.stopBuy_order.price && ($scope.stopBuy_order.quantity = floorToFixed(e * r[$scope.currentProduct.quoteAsset] / $scope.stopBuy_order.price, $scope.currentProduct.qtyTick)) : $scope.stopSell_order.quantity = floorToFixed(e * r[$scope.currentProduct.baseAsset], $scope.currentProduct.qtyTick))
            }
        },/* $scope.buy_submit = function() {
            var e = angular.element("#buyPrice").val(),
                t = angular.element("#buyQuanity").val(),
                n = e * t,
                r = $scope.currentProduct.qtyTick,
                o = $scope.currentProduct.priceTick,
                i = new RegExp("^\\d+(\\.\\d{0," + r + "}0*)?$"),
                s = new RegExp("^\\d+(\\.\\d{0," + o + "}0*)?$");
            if ("0" === e) return $scope.showerror("buyPrice", "buyform-error", $translate.instant("notBeZero")), !1;
            if ("" == e || null == e) return $scope.showerror("buyPrice", "buyform-error", $translate.instant("inputCrrectPrice")), !1;
            if ("0" === t) return $scope.showerror("buyQuanity", "buyform-error", $translate.instant("notBeZero")), !1;
            if ("" == t || null == t) return $scope.showerror("buyQuanity", "buyform-error", $translate.instant("inputVolume")), !1;
            if (!i.test(t)) return $scope.showerror("buyQuanity", "buyform-error", $translate.instant("inputCorrectbuyQuanity").replace("###", Number($scope.currentProduct.minTrade).toFixed($scope.currentProduct.qtyTick))), !1;
            if (n > Number($scope.qouteFree)) return $scope.showerror("buyQuanity", "buyform-error", $translate.instant("Your balance is not enough")), !1;
            if (!s.test(e)) return $scope.showerror("buyPrice", "buyform-error", $translate.instant("inputCrrectPrice")), !1;
            var a = {
                method: "post",
                url: "/exchange/private/order",
                data: $.param({
                    price: e,
                    quantity: t,
                    symbol: $scope.product.symbol,
                    side: "BUY",
                    type: "LIMIT"
                })
            };
            0 != $scope.currentProduct.close && (e - $scope.currentProduct.close) / $scope.currentProduct.close > .05 ? layer.confirm($translate.instant("buyorderConfirmTip"), {
                title: "",
                area: "320px",
                skin: "orderLayer",
                btn: [$translate.instant("Yes"), $translate.instant("No")]
            }, function() {
                $http(a).then(function(e) {
                    layer.msg($translate.instant("orderSucceed"), {
                        icon: 1,
                        shift: 1,
                        time: 500
                    }), $timeout(function() {
                        $scope.buy_order.quantity = ""
                    }, 500)
                }, function(e) {
                    layer.msg(e.data.msg, {
                        icon: 2,
                        shift: 1,
                        time: 2e3
                    })
                })
            }, function() {
                layer.closeAll()
            }) : $http(a).then(function(e) {
                layer.msg($translate.instant("orderSucceed"), {
                    icon: 1,
                    shift: 1,
                    time: 500
                }), $timeout(function() {
                    $scope.buy_order.quantity = ""
                }, 500)
            }, function(e) {
                layer.msg(e.data.msg, {
                    icon: 2,
                    shift: 1,
                    time: 2e3
                })
            })
        },*//* $scope.sell_submit = function() {
            var e = angular.element("#sellPrice").val(),
                t = angular.element("#sellQuanity").val(),
                n = t,
                r = new RegExp("^\\d+(\\.\\d{0," + $scope.currentProduct.qtyTick + "})?$"),
                o = new RegExp("^\\d+(\\.\\d{0," + $scope.currentProduct.priceTick + "})?$");
            if ("0" === e) return $scope.showerror("sellPrice", "sellform-error", $translate.instant("notBeZero")), !1;
            if ("" == e || null == e) return $scope.showerror("sellPrice", "sellform-error", $translate.instant("inputCrrectPrice")), !1;
            if ("0" === t) return $scope.showerror("sellQuanity", "sellform-error", $translate.instant("notBeZero")), !1;
            if ("" == t || null == t) return $scope.showerror("sellQuanity", "sellform-error", $translate.instant("inputSellVolume")), !1;
            if (!r.test(t)) return $scope.showerror("sellQuanity", "sellform-error", $translate.instant("inputCorrectsellQuanity").replace("###", Number($scope.currentProduct.minTrade).toFixed($scope.currentProduct.qtyTick))), !1;
            if (n > Number($scope.baseFree)) return $scope.showerror("sellQuanity", "sellform-error", $translate.instant("Your balance is not enough")), !1;
            if (!o.test(e)) return $scope.showerror("sellPrice", "sellform-error", $translate.instant("inputCrrectPrice")), !1;
            var i = {
                method: "post",
                url: "/exchange/private/order",
                data: $.param({
                    price: e,
                    quantity: t,
                    symbol: $scope.product.symbol,
                    side: "SELL",
                    type: "LIMIT"
                })
            };
            0 != $scope.currentProduct.close && ($scope.currentProduct.close - e) / $scope.currentProduct.close > .05 ? layer.confirm($translate.instant("sellorderConfirmTip"), {
                title: "",
                area: "320px",
                skin: "orderLayer",
                btn: [$translate.instant("Yes"), $translate.instant("No")]
            }, function() {
                $http(i).then(function(e) {
                    layer.msg($translate.instant("orderSucceed"), {
                        icon: 1,
                        shift: 1,
                        time: 500
                    }), $timeout(function() {
                        $scope.sell_order.sell_quantity = ""
                    }, 500)
                }, function(e) {
                    layer.msg(e.data.msg, {
                        icon: 2,
                        shift: 1,
                        time: 2e3
                    })
                })
            }, function() {
                layer.closeAll()
            }) : $http(i).then(function(e) {
                layer.msg($translate.instant("orderSucceed"), {
                    icon: 1,
                    shift: 1,
                    time: 500
                }), $timeout(function() {
                    $scope.sell_order.sell_quantity = ""
                }, 500)
            }, function(e) {
                layer.msg(e.data.msg, {
                    icon: 2,
                    shift: 1,
                    time: 2e3
                })
            })
        }, *//*$scope.market_buy_submit = function() {
            var e = angular.element("#market_buyQuanity").val(),
                t = $scope.currentProduct.qtyTick,
                n = new RegExp("^\\d+(\\.\\d{0," + t + "}0*)?$");
            if ("0" === e) return $scope.showerror("market_buyQuanity", "market_buyform-error", $translate.instant("notBeZero")), !1;
            if ("" == e || null == e) return $scope.showerror("market_buyQuanity", "market_buyform-error", $translate.instant("inputVolume")), !1;
            if (!n.test(e)) return $scope.showerror("market_buyQuanity", "market_buyform-error", $translate.instant("inputCorrectbuyQuanity").replace("###", Number($scope.currentProduct.minTrade).toFixed($scope.currentProduct.qtyTick))), !1;
            var r = {
                method: "post",
                url: "/exchange/private/order",
                data: $.param({
                    quantity: e,
                    symbol: $scope.product.symbol,
                    side: "BUY",
                    type: "MARKET"
                })
            };
            $http(r).then(function(e) {
                layer.msg($translate.instant("orderSucceed"), {
                    icon: 1,
                    shift: 1,
                    time: 500
                }), $timeout(function() {
                    $scope.market_buy_order.quantity = ""
                }, 500)
            }, function(e) {
                layer.msg(e.data.msg, {
                    icon: 2,
                    shift: 1,
                    time: 2e3
                })
            })
        }, *//*$scope.market_sell_submit = function() {
            var e = angular.element("#market_sellQuanity").val(),
                t = $scope.currentProduct.qtyTick,
                n = new RegExp("^\\d+(\\.\\d{0," + t + "}0*)?$");
            if ("0" === e) return $scope.showerror("market_sellQuanity", "market_sellform-error", $translate.instant("notBeZero")), !1;
            if ("" == e || null == e) return $scope.showerror("market_sellQuanity", "market_sellform-error", $translate.instant("inputVolume")), !1;
            if (!n.test(e)) return $scope.showerror("market_sellQuanity", "market_sellform-error", $translate.instant("inputCorrectbuyQuanity").replace("###", Number($scope.currentProduct.minTrade).toFixed($scope.currentProduct.qtyTick))), !1;
            var r = {
                method: "post",
                url: "/exchange/private/order",
                data: $.param({
                    quantity: e,
                    symbol: $scope.product.symbol,
                    side: "SELL",
                    type: "MARKET"
                })
            };
            $http(r).then(function(e) {
                layer.msg($translate.instant("orderSucceed"), {
                    icon: 1,
                    shift: 1,
                    time: 500
                }), $timeout(function() {
                    $scope.market_sell_order.quantity = ""
                }, 500)
            }, function(e) {
                layer.msg(e.data.msg, {
                    icon: 2,
                    shift: 1,
                    time: 2e3
                })
            })
        },*/ /*$scope.stopLimit_buy_submit = function() {
            var e, t, n = angular.element("#buy_stopPrice").val(),
                r = angular.element("#stop_curPrice").val(),
                o = angular.element("#stop_buyQuanity").val(),
                i = r * o,
                s = $scope.currentProduct.qtyTick,
                a = $scope.currentProduct.priceTick,
                l = new RegExp("^\\d+(\\.\\d{0," + s + "}0*)?$"),
                c = new RegExp("^\\d+(\\.\\d{0," + a + "}0*)?$");
            if ("0" === n) return $scope.showerror("buy_stopPrice", "stopBuyform-error", $translate.instant("notBeZero")), !1;
            if ("" == n || null == n) return $scope.showerror("buy_stopPrice", "stopBuyform-error", $translate.instant("inputCrrectPrice")), !1;
            if ("0" === r) return $scope.showerror("stop_curPrice", "stopBuyform-error", $translate.instant("notBeZero")), !1;
            if ("" == r || null == r) return $scope.showerror("stop_curPrice", "stopBuyform-error", $translate.instant("inputCrrectPrice")), !1;
            if ("0" === o) return $scope.showerror("stop_buyQuanity", "stopBuyform-error", $translate.instant("notBeZero")), !1;
            if ("" == o || null == o) return $scope.showerror("stop_buyQuanity", "stopBuyform-error", $translate.instant("inputVolume")), !1;
            if (!l.test(o)) return $scope.showerror("stop_buyQuanity", "stopBuyform-error", $translate.instant("inputCorrectbuyQuanity").replace("###", Number($scope.currentProduct.minTrade).toFixed($scope.currentProduct.qtyTick))), !1;
            if (i > Number($scope.qouteFree)) return $scope.showerror("stop_buyQuanity", "stopBuyform-error", $translate.instant("Your balance is not enough")), !1;
            if (!c.test(r)) return $scope.showerror("stop_curPrice", "stopBuyform-error", $translate.instant("inputCrrectPrice")), !1;
            if (!c.test(n)) return $scope.showerror("buy_stopPrice", "stopBuyform-error", $translate.instant("inputCrrectPrice")), !1;
            Number(n) >= Number($scope.currentProduct.close) ? (e = "STOP_LOSS_LIMIT", t = "cn" != $scope.cur_lang ? "If the last price rises to or above " + n + " " + $scope.currentProduct.quoteAsset + " ,an order to buy " + o + " " + $scope.currentProduct.baseAsset + " at a price of " + r + " " + $scope.currentProduct.quoteAsset + " will be placed." : "当价格上涨至或高于" + n + " " + $scope.currentProduct.quoteAsset + "时，则触发以" + r + " " + $scope.currentProduct.quoteAsset + "的价格买入" + o + " " + $scope.currentProduct.baseAsset + "的订单") : Number(n) < Number($scope.currentProduct.close) && (e = "TAKE_PROFIT_LIMIT", t = "cn" != $scope.cur_lang ? "If the last price drops to or below " + n + " " + $scope.currentProduct.quoteAsset + ", an order to buy" + o + " " + $scope.currentProduct.baseAsset + "at a price of" + r + " " + $scope.currentProduct.quoteAsset + "will be placed." : "当价格下跌至或低于" + n + " " + $scope.currentProduct.quoteAsset + "时，则触发以" + r + " " + $scope.currentProduct.quoteAsset + "的价格买入" + o + " " + $scope.currentProduct.baseAsset + "的订单");
            var u = {
                method: "post",
                url: "/exchange/private/order",
                data: $.param({
                    price: r,
                    quantity: o,
                    symbol: $scope.product.symbol,
                    side: "BUY",
                    stopPrice: n,
                    type: e
                })
            };
            layer.confirm(t, {
                title: "",
                area: "320px",
                skin: "orderLayer",
                btn: [$translate.instant("Yes"), $translate.instant("No")]
            }, function() {
                $http(u).then(function(e) {
                    layer.msg($translate.instant("orderSucceed"), {
                        icon: 1,
                        shift: 1,
                        time: 500
                    }), $timeout(function() {
                        $scope.stopBuy_order.quantity = ""
                    }, 500)
                }, function(e) {
                    "Order would trigger immediately." == e.data.msg ? layer.msg($translate.instant("orderFailed01"), {
                        icon: 2,
                        shift: 1,
                        time: 2e3
                    }) : layer.msg(e.data.msg, {
                        icon: 2,
                        shift: 1,
                        time: 2e3
                    })
                })
            }, function() {
                layer.closeAll()
            })
        },*/ /*$scope.stopLimit_sell_submit = function() {
            var e, t, n = angular.element("#stopSell_StopPrice").val(),
                r = angular.element("#stopSell_curPrice").val(),
                o = angular.element("#stopSell_Quanity").val(),
                i = o,
                s = new RegExp("^\\d+(\\.\\d{0," + $scope.currentProduct.qtyTick + "})?$"),
                a = new RegExp("^\\d+(\\.\\d{0," + $scope.currentProduct.priceTick + "})?$");
            if ("0" === n) return $scope.showerror("stopSell_StopPrice", "stopSellform-error", $translate.instant("notBeZero")), !1;
            if ("" == n || null == n) return $scope.showerror("stopSell_StopPrice", "stopSellform-error", $translate.instant("inputCrrectPrice")), !1;
            if ("0" === r) return $scope.showerror("stopSell_curPrice", "stopSellform-error", $translate.instant("notBeZero")), !1;
            if ("" == r || null == r) return $scope.showerror("stopSell_curPrice", "stopSellform-error", $translate.instant("inputCrrectPrice")), !1;
            if ("0" === o) return $scope.showerror("stopSell_Quanity", "stopSellform-error", $translate.instant("notBeZero")), !1;
            if ("" == o || null == o) return $scope.showerror("stopSell_Quanity", "stopSellform-error", $translate.instant("inputSellVolume")), !1;
            if (!s.test(o)) return $scope.showerror("stopSell_Quanity", "stopSellform-error", $translate.instant("inputCorrectsellQuanity").replace("###", Number($scope.currentProduct.minTrade).toFixed($scope.currentProduct.qtyTick))), !1;
            if (i > Number($scope.baseFree)) return $scope.showerror("stopSell_Quanity", "stopSellform-error", $translate.instant("Your balance is not enough")), !1;
            if (!a.test(n)) return $scope.showerror("stopSell_StopPrice", "stopSellform-error", $translate.instant("inputCrrectPrice")), !1;
            if (!a.test(r)) return $scope.showerror("stopSell_curPrice", "stopSellform-error", $translate.instant("inputCrrectPrice")), !1;
            Number(n) > Number($scope.currentProduct.close) ? (e = "TAKE_PROFIT_LIMIT", t = "cn" != $scope.cur_lang ? "If the last price rises to or above " + n + " " + $scope.currentProduct.quoteAsset + " ,an order to sell " + o + " " + $scope.currentProduct.baseAsset + " at a price of " + r + " " + $scope.currentProduct.quoteAsset + " will be placed." : "当价格上涨至或高于" + n + " " + $scope.currentProduct.quoteAsset + "时，则触发以" + r + " " + $scope.currentProduct.quoteAsset + "的价格卖出" + o + " " + $scope.currentProduct.baseAsset + "的订单") : Number(n) <= Number($scope.currentProduct.close) && (e = "STOP_LOSS_LIMIT", t = "cn" != $scope.cur_lang ? "If the last price drops to or below " + n + " " + $scope.currentProduct.quoteAsset + ", an order to sell" + o + " " + $scope.currentProduct.baseAsset + "at a price of" + r + " " + $scope.currentProduct.quoteAsset + "will be placed." : "当价格下跌至或低于" + n + " " + $scope.currentProduct.quoteAsset + "时，则触发以" + r + " " + $scope.currentProduct.quoteAsset + "的价格卖出" + o + " " + $scope.currentProduct.baseAsset);
            var l = {
                method: "post",
                url: "/exchange/private/order",
                data: $.param({
                    price: r,
                    quantity: o,
                    symbol: $scope.product.symbol,
                    side: "SELL",
                    stopPrice: n,
                    type: e
                })
            };
            layer.confirm(t, {
                title: "",
                area: "320px",
                skin: "orderLayer",
                btn: [$translate.instant("Yes"), $translate.instant("No")]
            }, function() {
                $http(l).then(function(e) {
                    layer.msg($translate.instant("orderSucceed"), {
                        icon: 1,
                        shift: 1,
                        time: 500
                    }), $timeout(function() {
                        $scope.stopSell_order.quantity = ""
                    }, 500)
                }, function(e) {
                    "Order would trigger immediately." == e.data.msg ? layer.msg($translate.instant("orderFailed01"), {
                        icon: 2,
                        shift: 1,
                        time: 2e3
                    }) : layer.msg(e.data.msg, {
                        icon: 2,
                        shift: 1,
                        time: 2e3
                    })
                })
            }, function() {
                layer.closeAll()
            })
        },*/ /*$scope.stopBubble = function(e) {
            e.stopPropagation()
        },*/ /*$scope.getPersonalMsg = function(e) {
            sendToUserId = e;
            var t = $q.defer();
            return $http.get("/exchange/trollbox/personal/last?channel=zh&userId=" + e).success(function(e) {
                $scope.personalMsg = e.msg
            }), t.promise
        }, *//*$scope.getPersonalMsg($cookies.userId), $scope.showPop = function() {
            $("body").css({
                overflow: "auto"
            }), $("#privateMsg").val(""), $scope.showPopUser = !1
        },*/ /*$scope.getUserBaseDetail = function() {
            var e = $q.defer();
            return $http({
                method: "post",
                url: "/user/basedetail.html"
            }).success(function(e) {
                $scope.userBaseInfo = e, e.pic || ($scope.userBaseInfo.pic = "/resources/img/header_tx.png")
            }), e.promise
        },*/ "y" == $cookies.logined && $scope.getUserBaseDetail(), $scope.connectTrollboxPrivate = function(e, t) {
            null != $scope.trollboxPrivateStreamerInstance && ($scope.trollboxPrivateStreamerInstance.stopStream(), $scope.trollboxPrivateStreamerInstance = null), $scope.trollboxPrivateStreamerInstance = new trollboxStreamer, $scope.trollboxPrivateStreamerInstance.startStream(t, e, function(e) {
                $scope.trollboxCallback(e)
            })
        }, $scope.trollboxCallback = function(e) {
            if (!($(".trollbox-list dl dt[cid=" + e.id + "]").length > 0)) {
                $(".trollbox-list").append("<dl>\t<dt uid=" + e.u + ' cid="' + e.id + '">' + e.u + " : " + (e.to ? "<span>Private</span>" : "") + "</dt>\t<dd>" + e.m + "</dd></dl>"), liSize = $(".trollbox-list dl").size(), liSize > maxMessage && $(".trollbox-list dl:lt(" + (liSize - maxMessage) + ")").remove(), $(".trollbox-list dt[cid=" + e.id + "]").click(function(e) {
                    $scope.getPersonalMsg($(e.target).attr("uid")).then(function() {
                        $scope.showPopUser = !0
                    })
                });
                var t = document.getElementById("trollbox-list");
                t.scrollHeight, t.clientHeight;
                t.scrollTop = t.scrollHeight - t.clientHeight
            }
        }, $scope.sendPrivateMsg = function() {
            if ($("#privateMsg").val())
                if ($scope.listenkey) {
                    var e = {
                        method: "post",
                        url: "/exchange/trollbox/send",
                        data: "message=" + $("#privateMsg").val() + "&channel=" + $scope.trollboxChannel + "&toUserId=" + sendToUserId
                    };
                    $http(e).success(function(e) {
                        $("#privateMsg").val(""), layer.msg("Send successfully", {
                            icon: 1,
                            shift: 1,
                            time: 600
                        })
                    })
                } else layer.msg("Please login first", {
                    icon: 5,
                    shift: 1,
                    time: 1500
                })
        }, $(window).load(function() {
            setTimeout(function() {
                pageLoading1.close()
            }, 200)
        }), $scope.isFull = !1;
        /*var klineCon = $("#kline-con"),
            chart_container = $("#chart"),
            depth_con = $(".box-inner");
        $scope.fullpage = function() {
            var e = angular.element(window).height();
            $scope.isFull = !0, klineCon.css({
                position: "fixed",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                "z-index": 9999
            }), chart_container.css({
                width: angular.element(window).width(),
                height: e - 22 + "px"
            }), depth_con.css({
                width: angular.element(window).width(),
                height: e - 22 + "px"
            }), chart.resize(), depthChart.resize()
        }, *//*$(window).keydown(function(e) {
            27 == e.keyCode && $scope.isFull && $scope.offFullpage()
        }), $scope.offFullpage = function() {
            $scope.isFull = !1, klineCon.css({
                position: "static"
            }), chart_container.css({
                width: "648px",
                height: "347px"
            }), depth_con.css({
                width: "648px",
                height: "347px"
            }), chart.resize(), depthChart.resize()
        };*/
        var scroll = document.getElementById("askScrollBox");
        scroll.addEventListener(getTransitionEvent().type, function() {
            document.getElementById("askScrollBox").scrollTop = document.getElementById("askScrollBox").scrollHeight
        });
        var scrollb = document.getElementById("bidScrollBox");
        scrollb.addEventListener(getTransitionEvent().type, function() {
            document.getElementById("bidScrollBox").scrollTop = 0
        })
    }]).controller("noticeCtrl", ["$scope", "$http", function(e, t) {
        e.getNotice = function() {
            t.post("/public/getNotice.html?page=1&rows=15").success(function(t) {
                e.notices = t.data
            })
        }, e.$watch("cur_lang", function() {
            e.getNotice()
        })
    }]).filter("reverse", function() {
        return function(e) {
            if (void 0 !== e) return e.slice().reverse()
        }
    }).filter("unique", function() {
        return function(e, t) {
            var n = [],
                r = [];
            return angular.forEach(e, function(e) {
                var o = e[t]; - 1 === r.indexOf(o) && (r.push(o), n.push(e))
            }), n
        }
    }).filter("filterol", function() {
        return function(e) {
            return e ? Number(e).toFixed(8) : "--"
        }
    }).filter("T", ["$translate", function(e) {
        return function(t) {
            if (t) return e.instant(t)
        }
    }]).filter("symbol", function() {
        return function(e) {
            return e = e || 0, Number(e) > 0 ? "+" + e : e
        }
    }).filter("FilterString", function() {
        return function(e) {
            var t = new Array(e.length + parseInt(e.length / 3, 10)),
                n = e.split("");
            t[t.length - 1] = n[n.length - 1];
            for (var r = n.length - 1, o = t.length - 1; o >= 0; o--)(t.length - o) % 4 == 0 ? t[o] = "/" : t[o] = n[r--];
            return 0 === t.indexOf("/") && t.splice(0, 1), t.join("")
        }
    }),
    sortDepth = new function() {
        this.sort = function(e) {
            return e.sort(function(e, t) {
                return e[1] - t[1]
            }), e
        }, this.median = function(e) {
            var t = Math.floor(e.length / 3 * 2);
            return e[t][1] < 1 ? 1 : e[t][1]
        }, this.medianUnit = function(e, t, n) {
            var r = new Array(e);
            r = r[0];
            var o = new Array(t);
            o = o[0], r = r.concat(o);
            var i = this.median(this.sort(r)) / n;
            return r = null, o = null, i
        }, this.width = function(e, t) {
            if (0 == t) return 1;
            var n = Math.round(Number(e) / t);
            return n <= 0 ? 1 : n > 160 ? 160 : n
        }
    },
/*    KlineDataConvert = new function() {
        var e = this;
        this.barCount = 23, this.setData = function(t, n, r) {
            e.max = 0, e.min = 1e9, e.Data = t, e.h = r, e.w = n;
            for (var o = 0; o < e.Data.length; o++) {
                var i = this.Data[o],
                    s = Number(i[4]);
                e.max < s && (e.max = s), e.min > s && (e.min = s)
            }
            e.max == e.min && (e.min = .9 * e.min, e.max = 1.1 * e.max)
        }, this.getY = function(t) {
            return e.h * (1 - (t - e.min) / (e.max - e.min))
        }, this.getX = function(t) {
            return e.w * (t / e.barCount)
        }, this.getPath = function() {
            var t = [];
            return e.Data.forEach(function(n, r) {
                0 == r ? t.push("M" + Math.round(e.getX(r)) + " " + Math.round(e.getY(n[4] || 1))) : t.push("L" + Math.round(e.getX(r)) + " " + Math.round(e.getY(n[4] || 1)))
            }), t.join(" ")
        }
    },*/
    /*getTransitionEvent = function() {
        var e, t, n = !1,
            r = document.createElement("fakeelement"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            };
        for (e in o)
            if (void 0 !== r.style[e]) {
                t = o[e], n = !0;
                break
            }
        return {
            type: t,
            supported: n
        }
    };*/
/*app.factory("streamer", ["$http", "$interval", function(e, t) {
    return function() {
        var t, n = {};
        return n.isRunning = !1, n.restart = !1, n.root_url = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1", n.startStream = function(e, t, r, o) {
            n.isRunning = !0, n.url = t, n.lastDepthId = -2, n.connectRightNow = !0, n.backedMsg = [], n.buildingState = !0, n.wsbuildingState = !0, n.restart = !0, n.lastConntectTime, n.callback = r, n.symbol = e, n.lowerCaseSymbol = e.toLowerCase(), n.stateChange = o || function() {}, n.stateChange(!0), n.ws && n.stopStream(), n.ws = n._makeStream()
        }, n.processData = function(e) {
            n._isDuplicate(e) || n.callback(e)
        }, n.stopStream = function() {
            n.restart = !1, n.ws && (n._clear(n.ws), n.ws.handClose = !0, n.ws.close()), n.lastDepthId = -2, n.connectRightNow = !0, n.backedMsg = [], n.buildingState = !0, n.wsbuildingState = !0, n.isRunning = !1
        }, n._rolloverStream = function() {
            console.log("Rolling over stream!"), n.backedMsg = [], n.buildingState = !0, n.wsbuildingState = !0, n.stateChange(!0), n.ws = n._makeStream()
        }, n._makeStream = function() {
            var r = new WebSocket(n.url + "/" + n.lowerCaseSymbol + "@depth.b10");
            return n._buildState(), r.onopen = function() {
                console.log("Socket has been opened for: " + n.symbol + "!"), n.lastConntectTime = new Date, n.wsbuildingState = !1, n.stateChange(!(0 == n.buildingState && 0 == n.wsbuildingState)), clearInterval(t)
            }, r.onclose = function(e) {
                console.log("Socket has been CLOSED for: " + n.symbol + "!"), n.wsbuildingState = !0, n.stateChange(!0), r.handClose ? (r.handClose = !1, console.log("Socket done!")) : (new Date).getTime() - n.lastConntectTime.getTime() < 12e4 ? setTimeout(function() {
                    console.log("streamer reconntect delay=========="), n._rolloverStream()
                }, 1e3) : (console.log("streamer reconntect now=========="), n._rolloverStream())
            }, r.onmessage = function(e) {
                if (r == n.ws) {
                    var t = JSON.parse(e.data);
                    console.log("WS recv: " + t), t = n.converter(t), n.buildingState ? (n.backedMsg.push(t), console.log("Adding msg to backlog: " + t)) : n._isLoss(t) ? (n.backedMsg = [], n.backedMsg.push(t), n.buildingState = !0, n.stateChange(n.buildingState), n._buildState()) : n.processData(t)
                }
            }, r.onerror = function(r) {
                n.wsbuildingState = !0, n.stateChange(!0), t || (t = setInterval(function() {
                    var t = {};
                    t.method = "get", t.url = n.root_url + "/depth", t.params = {
                        symbol: n.symbol,
                        limit: 100
                    }, e(t).success(function(e) {
                        var t = {};
                        t.eventType = "depthUpdate", t.updateId = e.lastUpdateId, t.bids = e.bids, t.asks = e.asks, n.processData(t)
                    })
                }, 3e3)), setTimeout(function() {
                    console.log("streamer reconntect now=========="), n.stopStream(), n._rolloverStream()
                }, 6e4)
            }, r
        }, n.RePull = function() {
            n.backedMsg = [], n.buildingState = !0, n.stateChange(n.buildingState), n._buildState()
        }, n._buildState = function() {
            var t = {};
            t.method = "get", t.url = n.root_url + "/depth", t.params = {
                symbol: n.symbol
            };
            var r = function() {
                e(t).success(function(e) {
                    n.lastDepthId = -1;
                    var t = {};
                    t.eventType = "depthUpdate", t.updateId = e.lastUpdateId, t.bids = e.bids, t.asks = e.asks, t.clean = !0, console.log("GET All Depth Success "), n.processData(t), console.log("Initial state set!"), console.log("Replaying " + n.backedMsg.length + " backed msgs!");
                    var o = !1;
                    if (n.backedMsg && n.backedMsg.length > 0) {
                        var i = n.backedMsg[0];
                        n._isLoss(i) && (o = !0, setTimeout(function() {
                            r()
                        }, 500))
                    }
                    o || n.backedMsg.forEach(function(e, t) {
                        n.processData(e), console.log("Replayed: " + e.eventType)
                    }), n.buildingState = !1, n.stateChange(!(0 == n.buildingState && 0 == n.wsbuildingState))
                })
            };
            r()
        }, n.converter = function(e) {
            var t = {};
            return t.eventType = e.e, t.eventTime = e.E, t.symbol = e.s, t.kline = e.k, "depthUpdate" == t.eventType ? (t.event = e.e, t.eventTime = e.E, t.symbol = e.s, t.updateId = e.u, t.fupdateId = e.U, t.bids = e.b, t.asks = e.a) : (console.log("Error! Bad data received:"), console.log(t)), t
        }, n._isDuplicate = function(e) {
            if ("depthUpdate" == e.eventType) {
                if (e.updateId > n.lastDepthId) return n.lastDepthId = e.updateId, !1
            } else console.log("Error! Bad data received:"), console.log(e);
            return !0
        }, n._isLoss = function(e) {
            if ("depthUpdate" == e.eventType) {
                if (e.fupdateId <= n.lastDepthId + 1) return !1
            } else console.log("Error! Has Loss data");
            return !0
        }, n._clear = function(e) {
            e.onopen = null, e.onmessage = null, e.onerror = null, e.onclose = null
        }, n
    }
}]),*/ /*app.factory("userStreamer", function() {
    return function() {
        var e = {};
        return e.isRunning = !1, e.restart = !1, e.lastConntectTime = new Date, e.startStream = function(t, n) {
            e.isRunning = !0, e.url = t, e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.restart = !0, e.callback = n, e.ws ? e.ws.close() : e.ws = e._makeStream()
        }, e.processData = function(t) {
            e._isDuplicate(t) || e.callback(t)
        }, e.stopStream = function() {
            e.restart = !1, e.ws && e.ws.close(), e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.isRunning = !1
        }, e._rolloverStream = function() {
            console.log("Rolling over stream!"), e.backedMsg = [], e.buildingState = !0, e.ws = e._makeStream()
        }, e._makeStream = function() {
            var t = new WebSocket(e.url);
            return t.onopen = function() {
                console.log("Socket has been opened for: market data!"), e.lastConntectTime = new Date, e._buildState()
            }, t.onclose = function(t) {
                console.log("Socket has been CLOSED for: market data!"), e.restart ? (new Date).getTime() - e.lastConntectTime.getTime() < 12e4 ? setTimeout(function() {
                    console.log("streamer reconntect delay=========="), e._rolloverStream()
                }, 1e3) : (console.log("streamer reconntect now=========="), e._rolloverStream()) : (delete e.ws, console.log("Socket done!"))
            }, t.onmessage = function(t) {
                var n = JSON.parse(t.data);
                n = e.converter(n), console.log("User data WS recv, eventType: " + n.eventType + ", eventTime: " + n.eventTime), e.buildingState ? (e.backedMsg.push(n), console.log("Adding msg to backlog: " + n.eventType)) : e.processData(n)
            }, t
        }, e._buildState = function() {
            e.buildingState = !1
        }, e.converter = function(e) {
            var t = {};
            return t.eventType = e.e, "outboundAccountInfo" == t.eventType ? (t.eventTime = e.E, t.makerCommission = e.m, t.takerCommission = e.t, t.buyerCommission = e.b, t.sellerCommission = e.s, t.isActive = e.a, t.balances = [], e.B && e.B.forEach(function(e) {
                t.balances.push({
                    asset: e.a,
                    free: e.f,
                    locked: e.l
                })
            }), t.leverage = e.l, t.positions = [], e.p && e.p.forEach(function(e) {
                t.positions.push({
                    symbol: e.s,
                    usedQty: e.u,
                    usedMargin: e.U,
                    avgQuotePrice: e.q,
                    pendingQtyBuy: e.b,
                    pendingMarginBuy: e.B,
                    pendingQtySell: e.a,
                    pendingMarginSell: e.A,
                    lockedProfitLoss: e.l
                })
            })) : "executionReport" == t.eventType && (t.event = e.e, t.eventTime = e.E, t.symbol = e.s, t.clOrdId = e.c, t.side = e.S, t.orderType = e.o, t.timeInForce = e.f, t.qty = e.q, t.price = e.p, t.stopPrice = e.P, t.maxFloor = e.F, t.originalClOrdId = e.C, t.executionType = e.x, t.orderStatus = e.X, t.orderRejectReason = e.r, t.orderId = e.i, t.lastQty = e.l, t.cummulativeQty = e.z, t.lastPrice = e.L, t.commission = e.n, t.commissionAsset = e.N, t.time = e.T, t.executionId = e.I, t.tradeId = e.t, t.workingIndicator = e.w, t.isMaker = e.m, t.commissionAsset = e.N), t
        }, e._isDuplicate = function(e) {
            return !1
        }, e
    }
}), app.factory("klineStreamer", ["$http", "$interval", "$rootScope", function(e, t, n) {
    return function() {
        var e = {};
        return e.isRunning = !1, e.restart = !1, e.lastTradeId = -1, e.root_url = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1", e.startStream = function(t, n, r, o) {
            e.isRunning = !0, e.url = n, e.interval = r, e.lastDepthId = -2, e.lastKlineId = -1, e.backedMsg = [], e.restart = !0, e.lastConntectTime = new Date, e.symbol = t, e.lowerCaseSymbol = t.toLowerCase(), e.callback = o, e.ws && e.stopStream(), e.ws = e._makeStream()
        }, e.processData = function(t) {
            e._isDuplicate(t) || e.callback(t)
        }, e.stopStream = function() {
            e.restart = !1, e.ws && (e._clear(e.ws), e.ws.HandClose = !0, e.ws.close()), e.lastDepthId = -1, e.lastKlineId = -1, e.backedMsg = [], e.isRunning = !1
        }, e._rolloverStream = function() {
            console.log("Rolling over stream!"), e.backedMsg = [], e.ws = e._makeStream()
        }, e._makeStream = function() {
            var t = new WebSocket(e.url + "/" + e.lowerCaseSymbol + "@kline_" + e.interval + ".b10");
            return n.websocketStatus = "connecting", t.onopen = function() {
                n.websocketStatus = "connected", console.log("Socket has been opened for: " + e.symbol + "!"), e.lastConntectTime = new Date
            }, t.onclose = function(r) {
                console.log("Socket has been CLOSED for: " + e.symbol + "!"), t.HandClose ? (t.HandClose = !0, console.log("Socket done!")) : (n.websocketStatus = "reconnecting", (new Date).getTime() - e.lastConntectTime.getTime() < 12e4 ? setTimeout(function() {
                    console.log("streamer reconntect delay=========="), e._rolloverStream()
                }, 1e3) : (console.log("streamer reconntect now=========="), e._rolloverStream()))
            }, t.onerror = function() {
                n.websocketStatus = "error"
            }, t.onmessage = function(t) {
                var n = JSON.parse(t.data);
                n = e.converter(n), console.log("WS recv: " + n), e.processData(n)
            }, t
        }, e.converter = function(e) {
            var t = {};
            return t.eventType = e.e, t.eventTime = e.E, t.symbol = e.s, t.kline = {}, t.kline.time = e.k.t, t.kline.closeTime = e.k.T, t.kline.symbol = e.k.s, t.kline.interval = e.k.i, t.kline.firstId = e.k.f, t.kline.lastId = e.k.L, t.kline.open = e.k.o, t.kline.close = e.k.c, t.kline.high = e.k.h, t.kline.low = e.k.l, t.kline.volume = e.k.v, t.kline.quoteVolume = e.k.q, t.kline.count = e.k.n, t.kline.closed = e.k.x, t
        }, e._isDuplicate = function(e) {
            return "kline" != e.eventType && (console.log("Error! Bad data received:"), console.log(e), !0)
        }, e._clear = function(e) {
            e.onopen = null, e.onmessage = null, e.onerror = null, e.onclose = null
        }, e
    }
}]);*/
var tradeSymbol = "";
/*app.factory("tradeStreamer", ["$http", "$interval", function(e, t) {
    return function() {
        var t = {};
        return t.isRunning = !1, t.restart = !1, t.lastAggTradeId = -2, t.root_url = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1", t.startStream = function(e, n, r) {
            t.isRunning = !0, t.lastDepthId = -2, t.lastKlineId = -1, t.backedMsg = [], t.buildingState = !0, t.restart = !0, t.lastConntectTime, t.symbol = e, tradeSymbol = e, t.lowerCaseSymbol = e.toLowerCase(), t.url = n, t.callback = r, t.ws && t.stopStream(), t.ws = t._makeStream()
        }, t.processData = function(e) {
            t._isDuplicate(e) || t.callback(e)
        }, t.stopStream = function() {
            t.restart = !1, t.ws && (t._clear(t.ws), t.ws.HandClose = !0, t.ws.close()), t.lastKlineId = -1, t.backedMsg = [], t.buildingState = !0, t.isRunning = !1
        }, t._rolloverStream = function() {
            console.log("Rolling over stream!"), t.backedMsg = [], t.buildingState = !0, t.ws = t._makeStream()
        }, t._makeStream = function() {
            var n = new WebSocket(t.url + "/" + t.lowerCaseSymbol + "@aggTrade.b10");
            return n.onopen = function() {
                console.log("Socket has been opened for: " + t.symbol + "!"), t.lastConntectTime = new Date, t._buildState(), clearInterval(void 0)
            }, n.onclose = function(e) {
                console.log("Socket has been CLOSED for: " + t.symbol + "!"), n.HandClose ? (n.HandClose = !1, console.log("Socket done!")) : (new Date).getTime() - t.lastConntectTime.getTime() < 12e4 ? setTimeout(function() {
                    console.log("streamer reconntect delay=========="), t._rolloverStream()
                }, 1e3) : (console.log("streamer reconntect now=========="), t._rolloverStream())
            }, n.onmessage = function(e) {
                var n = JSON.parse(e.data);
                console.log("WS recv: " + n), n = t.converter(n), t.buildingState ? (t.backedMsg.push(n), console.log("Adding msg to backlog: " + n)) : t.processData(n)
            }, n.onerror = function(n) {
                var r = {};
                r.method = "get", r.url = t.root_url + "/aggTrades", r.params = {
                    symbol: t.symbol,
                    limit: 40
                }, e(r).success(function(e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = {};
                        r.eventType = "trade", r.aggTradeId = e[n].a, r.firstTradeId = e[n].f, r.lastTradeId = e[n].l, r.price = e[n].p, r.qty = e[n].q, r.symbol = e[n].s, r.time = e[n].T, r.isBuyerMaker = e[n].m, r.buyerOrderId = -1, r.sellerOrderId = -1, t.processData(r)
                    }
                }), setTimeout(function() {
                    console.log("streamer reconntect now=========="), t.stopStream(), t._rolloverStream()
                }, 6e4)
            }, n
        }, t._buildState = function() {
            var n = {};
            n.method = "get", n.url = t.root_url + "/aggTrades", n.params = {
                symbol: t.symbol,
                limit: 40
            }, e(n).success(function(e) {
                if (console.log("Successfully Get Trades Second Time"), tradeSymbol == t.symbol) {
                    t.lastAggTradeId = -1;
                    var n = {};
                    n.clean = !0, 0 == e.length && (n.eventType = "trade", n.aggTradeId = 1, t.processData(n));
                    for (var r = 0; r < e.length; r++) n.eventType = "trade", n.aggTradeId = e[r].a, n.firstTradeId = e[r].f, n.lastTradeId = e[r].l, n.price = e[r].p, n.qty = e[r].q, n.symbol = e[r].s, n.time = e[r].T, n.isBuyerMaker = e[r].m, n.buyerOrderId = -1, n.sellerOrderId = -1, t.processData(n), n = {};
                    console.log("Initial state set!"), console.log("Replaying " + t.backedMsg.length + " backed msgs!");
                    for (var o = t.backedMsg.shift(); o;) t.processData(o), console.log("Replayed: " + o.eventType), o = t.backedMsg.shift();
                    if (t.buildingState = !1, console.log("Replaying DONE! " + t.backedMsg.length + " backed msgs remain."), 0 != t.backedMsg.length)
                        for (console.log("OMG!! ME SMASH!!! GIVE ME A REAL THREADING MODEL PLEASE!!"), o = t.backedMsg.shift(); o;) t.processData(o), o = t.backedMsg.shift()
                }
            })
        }, t._getLastTrade = function(n) {
            var r = {};
            r.method = "get", r.url = t.root_url + "/aggTrades", r.params = {
                symbol: t.symbol,
                limit: 40
            }, e(r).success(function(e) {
                n(e)
            })
        }, t.converterGets = function(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var r = {};
                r.eventType = "trade", r.aggTradeId = e[n].a, r.firstTradeId = e[n].f, r.lastTradeId = e[n].l, r.price = e[n].p, r.qty = e[n].q, r.symbol = e[n].s, r.time = e[n].T, r.isBuyerMaker = e[n].m, r.buyerOrderId = -1, r.sellerOrderId = -1, t.push(r)
            }
            return t
        }, t.converter = function(e) {
            var t = {};
            return t.eventType = "aggTrade" == e.e && "trade", t.eventTime = e.E, t.symbol = e.s, t.kline = e.k, "trade" == t.eventType ? (t.aggTradeId = e.a, t.event = e.e, t.eventTime = e.E, t.firstTradeId = e.f, t.lastTradeId = e.l, t.price = e.p, t.qty = e.q, t.symbol = e.s, t.time = e.T, t.isBuyerMaker = e.m) : (console.log("Error! Bad data received:"), console.log(t)), t
        }, t._isDuplicate = function(e) {
            if ("trade" == e.eventType) {
                if (e.aggTradeId > t.lastAggTradeId) return t.lastAggTradeId = e.aggTradeId, !1
            } else console.log("Error! Bad data received:"), console.log(e);
            return !0
        }, t._clear = function(e) {
            e.onopen = null, e.onmessage = null, e.onerror = null, e.onclose = null
        }, t
    }
}]),*/ /*app.factory("mktdataStreamer", ["$http", "$interval", "$rootScope", function(e, t, n) {
    return function() {
        var e = {};
        return e.isRunning = !1, e.restart = !1, e.startStream = function(t, n) {
            e.isRunning = !0, e.url = t, e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.restart = !0, e.callback = n, e.ws ? e.ws.close() : e.ws = e._makeStream()
        }, e.processData = function(t) {
            e.callback(t)
        }, e.stopStream = function() {
            e.restart = !1, e.ws && e.ws.close(), e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.isRunning = !1
        }, e._rolloverStream = function() {
            console.log("Rolling over stream!"), e.backedMsg = [], e.buildingState = !0, e.ws = e._makeStream()
        }, e._makeStream = function() {
            var t = new WebSocket(e.url + "/!miniTicker@arr@3000ms");
            return n.websocketStatus = "connecting", t.onopen = function() {
                n.websocketStatus = "connected", console.log("Socket has been opened for: market data!"), e.lastConntectTime = new Date, e._buildState()
            }, t.onclose = function(t) {
                console.log("Socket has been CLOSED for: market data!"), e.restart ? (n.websocketStatus = "reconnecting", (new Date).getTime() - e.lastConntectTime.getTime() < 12e4 ? setTimeout(function() {
                    console.log("streamer reconntect delay=========="), e._rolloverStream()
                }, 1e3) : (console.log("streamer reconntect now=========="), e._rolloverStream())) : (delete e.ws, console.log("Socket done!"))
            }, t.onerror = function() {
                n.websocketStatus = "error"
            }, t.onmessage = function(t) {
                var n = JSON.parse(t.data);
                n = e.converter(n), console.log("Market data WS recv, symbol: " + n.symbol + ", lastUpdateTime: " + n.lastUpdateTime), e.buildingState ? (e.backedMsg.push(n), console.log("Adding msg to backlog: " + n.eventType)) : e.processData(n)
            }, t
        }, e._buildState = function() {
            e.buildingState = !1
        }, e.converter = function(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var r = {},
                    o = e[n];
                r.eventType = "trade", r.symbol = o.s, r.price = o.c, r.open = o.o, r.high = o.h, r.low = o.l, r.volume = o.v, r.quoteVolume = o.q, t.push(r)
            }
            return t
        }, e._isDuplicate = function(t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                if ("trade" == r.eventType && (void 0 == e.lastTradeIds[r.symbol] || e.lastTradeIds[r.symbol] < r.tradeId)) return e.lastTradeIds[r.symbol] = r.tradeId, !1
            }
            return !0
        }, e
    }
}]), *//*app.factory("trollboxStreamer", ["$http", "$interval", function(e, t) {
    return function() {
        var e = {};
        return e.isRunning = !1, e.restart = !1, e.lastTradeId = -1, e.startStream = function(t, n, r) {
            e.isRunning = !0, e.url = n, e.lastDepthId = -2, e.lastKlineId = -1, e.backedMsg = [], e.buildingState = !0, e.restart = !0, e.lang = t, e.processData = function(t) {
                e._isDuplicate(t) || r(t)
            }, e.ws ? e.ws.close() : e.ws = e._makeStream()
        }, e.stopStream = function() {
            e.restart = !1, e.ws && e.ws.close(), e.lastDepthId = -1, e.lastKlineId = -1, e.backedMsg = [], e.buildingState = !0, e.isRunning = !1
        }, e._rolloverStream = function() {
            console.log("Rolling over stream!"), e.backedMsg = [], e.buildingState = !0, e.ws = e._makeStream()
        }, e._makeStream = function() {
            var t = new WebSocket(e.url.msg + "/" + e.lang + ".b10");
            return t.onopen = function() {
                console.log("Socket has been opened for: " + e.lang + "!"), e._buildState()
            }, t.onclose = function(t) {
                console.log("Socket has been CLOSED for: " + e.lang + "!"), e.restart ? e._rolloverStream() : (delete e.ws, console.log("Socket done!"))
            }, t.onmessage = function(t) {
                var n = JSON.parse(t.data);
                console.log("WS recv: " + n.eventType), e.buildingState ? (e.backedMsg.push(n), console.log("Adding msg to backlog: " + n.eventType)) : e.processData(n)
            }, t
        }, e._buildState = function() {
            console.log("Initial state set!"), console.log("Replaying " + e.backedMsg.length + " backed msgs!");
            for (var t = e.backedMsg.shift(); t;) e.processData(t), console.log("Replayed: " + t.eventType), t = e.backedMsg.shift();
            if (e.buildingState = !1, console.log("Replaying DONE! " + e.backedMsg.length + " backed msgs remain."), 0 != e.backedMsg.length)
                for (console.log("OMG!! ME SMASH!!! GIVE ME A REAL THREADING MODEL PLEASE!!"), t = e.backedMsg.shift(); t;) e.processData(t), t = e.backedMsg.shift()
        }, e._isDuplicate = function(e) {
            return !1
        }, e
    }
}]), *//*app.factory("myInterceptor", ["$q", "$cookies", function(e, t) {
    return {
        request: function(e) {
            return e.headers = {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                lang: localStorage.lang,
                clientType: "web"
            }, t.CSRFToken && (e.headers.CSRFToken = $.md5(t.CSRFToken)), e
        },
        response: function(e) {
            return e
        },
        requestError: function(t) {
            return e.reject(t)
        },
        responseError: function(t) {
            if (console.log(t), 401 == t.status) {
                var n = new Date;
                n.setTime(n.getTime() - 1e3), t = JSON.stringify(t), localStorage.setItem("temp2", t), localStorage.getItem("temp2"), localStorage.getItem("temp2"), localStorage.a = document.cookie, document.cookie = "logined=;path=/;expires=" + n.toGMTString(), location.href = "/login.html?callback=" + encodeURIComponent(location.pathname) + encodeURIComponent(location.search)
            }
            return e.reject(t)
        }
    }
}]),*/ /*app.factory("user", ["$http", "$cookies", "$translate", function(e, t, n) {
    var r = {};
    return r.logout = function() {
        e({
            method: "post",
            url: "/user/loginOut.html"
        }).success(function(e) {
            if (e.success) {
                var t = new Date;
                t.setTime(t.getTime() - 1e3), document.cookie = "logined=;path=/;expires=" + t.toGMTString(), window.location.reload()
            }
        })
    }, r.login = function() {
        setTimeout(function() {
            angular.element("#userId").focus()
        }), layer.open({
            type: 1,
            title: null,
            shade: [.85, "#000"],
            shadeClose: !0,
            shift: 1,
            closeBtn: 1,
            area: "auto",
            content: $("#login-box"),
            end: function() {}
        })
    }, r.gauth = function() {
        angular.element(".wrap").addClass("blur"), angular.element("#imageStream1").click(), layer.open({
            type: 1,
            title: n.instant("gauth"),
            shadeClose: !0,
            shift: 1,
            area: ["300px", "200px"],
            content: $("#gauth-box"),
            end: function() {
                angular.element(".wrap").removeClass("blur")
            }
        })
    }, r
}]),*/ /*app.factory("getRequest", function() {
    var e = location.search,
        t = new Object;
    if (-1 != e.indexOf("?"))
        for (var n = e.substr(1).split("&"), r = 0; r < n.length; r++) t[n[r].split("=")[0]] = unescape(n[r].split("=")[1]);
    return t
}),*/ /*app.factory("layout", function() {
    var e = {};
    return e.set = function() {
        var e = angular.element(".header").outerHeight(!0),
            t = angular.element(".tradelist-main-bottom").outerHeight(!0),
            n = angular.element(window).height();
        angular.element(".tradelist-main-top").css({
            height: n - e - t,
            "max-height": n - e - t
        }), angular.element(".list-table").css({
            height: n - e - t - 79,
            "max-height": n - e - t - 79
        })
    }, e
}),*/ /*app.factory("intro", ["$rootScope", function(e) {
    var t = {};
    return t.init = function() {
        e.ShouldAutoStart = !1, e.IntroOptions = {
            steps: [{
                element: "#step1",
                intro: '<img src="/exchange/resources/img/guide/step1.png"/>',
                position: "right"
            }, {
                element: "#step2",
                intro: '<img src="/exchange/resources/img/guide/step2.png"/>',
                position: "bottom"
            }, {
                element: "#step3",
                intro: '<img src="/exchange/resources/img/guide/step3.png"/>',
                position: "bottom"
            }, {
                element: "#step4",
                intro: '<img src="/exchange/resources/img/guide/step4.png"/>',
                position: "right"
            }, {
                element: "#step5",
                intro: '<img src="/exchange/resources/img/guide/step5.png"/>',
                position: "left"
            }, {
                element: "#step6",
                intro: '<img src="/exchange/resources/img/guide/step6.png"/><span class="start-btn" onclick="document.getElementsByClassName(\'introjs-overlay\')[0].click()">开始交易</span>',
                position: "left"
            }],
            showStepNumbers: !1,
            exitOnOverlayClick: !0,
            exitOnEsc: !0,
            keyboardNavigation: !0,
            showBullets: !1,
            overlayOpacity: 1,
            nextLabel: "<strong>下一步</strong>",
            prevLabel: '<span style="color:green">上一步</span>',
            skipLabel: '<i class="font font-close"></i>',
            doneLabel: '<i class="font font-close"></i>'
        }, e.showHelp = function() {
            angular.element("body").append('<div class="overlayer"></div>'), angular.element("#guide-box").show()
        }, e.hideHelp = function() {
            angular.element(".overlayer").remove(), angular.element("#guide-box").hide()
        }, e.startGuide = function() {
            e.hideHelp()
        }
    }, t
}]),*/ /*app.factory("scroll", function() {
    var e, t = {};
    return t.scrollTop = function(t) {
        var n = $(t),
            r = n.find("li"),
            o = "-" + r.height() + "px";
        r.length > 1 && (e = setInterval(function() {
            n.animate({
                top: o
            }, 500, function() {
                n.find("li:first").appendTo(n), n.css("top", 0)
            })
        }, 5e3))
    }, t.stop = function() {
        clearInterval(e)
    }, t
}),*//* app.factory("pageLoading", function() {
    var e = {};
    return e.loading = function() {
        var t = ['<div class="spinner">', '<div class="rect2"></div>', '<div class="rect3"></div>', '<div class="rect4"></div>', '<div class="rect5"></div>', "</div>"].join("");
        e.loading = layer.open({
            type: 1,
            title: null,
            closeBtn: !1,
            shade: .9,
            area: ["100%", "100%"],
            content: t
        })
    }, e.close = function() {
        layer.close(e.loading)
    }, e
}),*//* app.factory("pageLoading1", function() {
    var e = {};
    return e.loading = function() {
        if (!$("#pageLoading").html()) {
            var e = ['<div id="pageLoading">', '<div class="spinner">', '<div class="rect2"></div>', '<div class="rect3"></div>', '<div class="rect4"></div>', '<div class="rect5"></div>', "</div>", "</div>"].join("");
            $("body").append(e)
        }
    }, e.close = function() {
        $("#pageLoading").hide()
    }, e
}), app.factory("divLoading", function() {
    var e = {},
        t = {};
    return e.loading = function(e) {
        if ($(e + " #divLoading").html()) $(e + " #divLoading").show();
        else {
            var n = ['<div id="divLoading">', '<div class="spinner">', '<div class="rect2"></div>', '<div class="rect3"></div>', '<div class="rect4"></div>', '<div class="rect5"></div>', "</div>", "</div>"].join("");
            $(e).append(n)
        }
        t[e] || (t[e] = 0), t[e] += 1
    }, e.close = function(e, n) {
        n ? (t[e] -= 1, t[e] <= 0 && $(e + " #divLoading").hide()) : $(e + " #divLoading").hide()
    }, e
}), app.factory("T", ["$translate", function(e) {
    return {
        T: function(t) {
            return t ? e.instant(t) : t
        }
    }
}]),*/ /*app.factory("form", function() {
    var e, t = {};
    return t.validate = function(t, n, r, o) {
        return $(t).Validform({
            btnSubmit: n,
            showAllError: !1,
            datatype: {
                amount: /^(([1-9]\d{0,9})|0)(\.\d{1,8})?$/,
                pwd: /^(?=.*\d)(?=.*[A-Z])[\da-zA-Z~!@#$%^&*-_——\\\/]{8,}$/,
                mobile: /^[1]\d{10}$/
            },
            postonce: !1,
            ajaxPost: !0,
            tiptype: function(t, n, r) {
                if (n.obj.is("form")) e = layer.load("正在提交...", 3);
                else {
                    var o = n.obj.siblings(".Validform_checktip");
                    r(o, n.type), o.text(t)
                }
            },
            beforeSubmit: function(e) {
                $(this.btnSubmit).attr("disabled", !0), o && o()
            },
            callback: function(t) {
                layer.close(e), $(this.btnSubmit).attr("disabled", !1), r(t)
            }
        })
    }, t
}),*//* app.factory("mobile", ["$http", "$translate", function(e, t) {
    var n = {},
        r = null;
    return n.flag = !0, n.showError = function(e, t) {
        angular.element("#" + e).focus().siblings(".Validform_checktip").text(t).addClass("Validform_wrong")
    }, n.picVerifyCode = function(e, t) {
        angular.element("#" + e).val("").focus(), angular.element("#" + t).click()
    }, n.clearCountDown = function(e, o) {
        n.flag = !0, angular.element("#" + o).text(t.instant("Regain")).removeClass("btn-disabled"), clearInterval(r)
    }, n.countDown = function(e, o) {
        angular.element("#" + e).val(""), angular.element("#" + o).addClass("btn-disabled");
        var i = 60;
        r = setInterval(function() {
            angular.element("#" + o).text(t.instant("Regain") + "(" + i + ")"), -1 == --i && n.clearCountDown(e, o)
        }, 1e3)
    }, n.sendVerifyCode = function(t, r, o, i) {
        if (n.flag) {
            if (n.flag = !1, n.countDown(r, o), i) var s = $.param({
                mobile: i
            });
            else;
            e.post(t, s).then(function(e) {
                if (!e.data.success) return layer.msg(e.data.msg, {
                    icon: 2,
                    shift: 1,
                    time: 1500
                }), n.picVerifyCode("registerValiCode", "imageStream1"), n.flag = !0, n.clearCountDown(r, o), !1
            }, function(e) {
                layer.msg(e.data.msg, {
                    icon: 2,
                    shift: 1,
                    time: 1500
                }), n.clearCountDown(r, o)
            })
        }
    }, n
}]),*/ /*app.factory("urlSearch", function() {
    var e = {};
    return e.getUrlParam = function(e) {
        for (var t = location.search.substr(1).split("&"), n = 0; n < t.length; n++) {
            var r = t[n].split("=");
            if (e == r[0]) return r[1]
        }
    }, e
}),*/ /*app.factory("SPA", function() {
    var e = {};
    return e.setUrl = function(t) {
        history.replaceState(null, "", t), e.UrlChange && e.UrlChange()
    }, e
}),*/ /*app.filter("filterFloor", function() {
    return function(e) {
        return Math.floor(e)
    }
})*/.filter("marketPrice", function() {
    return function(e) {
        return -1 == e ? "市价" : e
    }
}).filter("filterol", function() {
    return function(e) {
        return null != e ? Number(e).toFixed(8) : "--"
    }
}).filter("filterProfitRatio", function() {
    return function(e) {
        return e > 9999 ? "+9999" : e
    }
}).filter("phone", function() {
    return function(e) {
        var t;
        return e && (t = e.substr(0, 3) + "****" + e.substr(e.length - 4)), t
    }
}).filter("filtermn", function() {
    return function(e) {
        return e >= 0 ? "+" + Number(e).toFixed(2) : Number(e).toFixed(2)
    }
}).filter("filtermnq", function() {
    return function(e) {
        var t;
        return 0 == e ? t = Number(e).toFixed(2) + "%" : e > 0 || e < 0 ? t = Number(e).toFixed(2) + "%" : "--" == e && (t = "--"), t
    }
}).filter("filtermns", function() {
    return function(e) {
        var t;
        return 0 == e ? t = Number(e).toFixed(2) : e > 0 || e < 0 ? t = Number(e).toFixed(2) : "--" == e && (t = "--"), t
    }
}).filter("get8Date", function() {
    return function(e) {
        var t = new Date(e),
            n = 6e4 * t.getTimezoneOffset(),
            r = t.getTime() + n;
        return new Date(r + 288e5)
    }
}).filter("T", ["$translate", function(e) {
    return function(t) {
        if (t) return e.instant(t)
    }
}]).filter("floor", function() {
    return function(e) {
        var t = Array.prototype.slice.call(arguments);
        return (Math.floor(Number(e) * Math.pow(10, Number(t[1]))) / Math.pow(10, Number(t[1]))).toFixed(t[1])
    }
}).filter("ifnull", function() {
    return function(e) {
        return e && 0 != Number(e) ? e : "--"
    }
}).filter("symbol", function() {
    return function(e) {
        return e = e || 0, Number(e) >= 0 ? "+" + e : e
    }
}).filter("sameGray", ["$sce", function(e) {
    return function(t, n, r) {
        var o;
        return t = t && (t + "").replace(",", ""), o = "<span>" + (o = n && t.substring(0, t.length - 2) == Number(n).toFixed(r).substring(0, t.length - 2) ? '<span class="gray">' + t.substring(0, t.length - 2) + "</span>" + t.substr(t.length - 2, 2) : Number(t).toFixed(r)) + "</span>", e.trustAsHtml(o)
    }
}]).filter("getDigit", function() {
    return function(e) {
        return (1 / Math.pow(10, e)).toFixed(e)
    }
}), Date.prototype.get8Date = function() {
    var e = 6e4 * this.getTimezoneOffset(),
        t = this.getTime() + e;
    return new Date(t + 288e5)
};