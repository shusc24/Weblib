//#############################  jquery库 ############################################

/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";
    var c = [], d = a.document, e = Object.getPrototypeOf, f = c.slice, g = c.concat, h = c.push, i = c.indexOf, j = {},
        k = j.toString, l = j.hasOwnProperty, m = l.toString, n = m.call(Object), o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }

    var q = "3.1.1", r = function (a, b) {
        return new r.fn.init(a, b)
    }, s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t = /^-ms-/, u = /-([a-z])/g, v = function (a, b) {
        return b.toUpperCase()
    };
    r.fn = r.prototype = {
        jquery: q, constructor: r, length: 0, toArray: function () {
            return f.call(this)
        }, get: function (a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        }, pushStack: function (a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b
        }, each: function (a) {
            return r.each(this, a)
        }, map: function (a) {
            return this.pushStack(r.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(f.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: h, sort: c.sort, splice: c.splice
    }, r.extend = r.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === r.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        }, isPlainObject: function (a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            p(a)
        }, camelCase: function (a) {
            return a.replace(t, "ms-").replace(u, v)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)if (b.call(a[d], d, a[d]) === !1)break
            } else for (d in a)if (b.call(a[d], d, a[d]) === !1)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(s, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++)a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, e, f = 0, h = [];
            if (w(a))for (d = a.length; f < d; f++)e = b(a[f], f, c), null != e && h.push(e); else for (f in a)e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        }, guid: 1, proxy: function (a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a))return d = f.call(arguments, 2), e = function () {
                return a.apply(b || this, d.concat(f.call(arguments)))
            }, e.guid = a.guid = a.guid || r.guid++, e
        }, now: Date.now, support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });
    function w(a) {
        var b = !!a && "length" in a && a.length, c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    var x = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0,
            x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
                return a === b && (l = !0), 0
            }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++)if (a[c] === b)return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(N),
            U = new RegExp("^" + L + "$"), V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), aa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function (a, b) {
                return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            }, da = function () {
                m()
            }, ea = ta(function (a) {
                return a.disabled === !0 && ("form" in a || "label" in a)
            }, {dir: "parentNode", next: "legend"});
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w)return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))if (f = l[1]) {
                    if (9 === w) {
                        if (!(j = b.getElementById(f)))return d;
                        if (j.id === f)return d.push(j), d
                    } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)return d.push(j), d
                } else {
                    if (l[2])return G.apply(d, b.getElementsByTagName(a)), d;
                    if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName)return G.apply(d, b.getElementsByClassName(f)), d
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a; else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--)o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r)try {
                        return G.apply(d, s.querySelectorAll(r)), d
                    } catch (x) {
                    } finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"), e = c.length;
            while (e--)d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d)return d;
            if (c)while (c = c.nextSibling)if (c === b)return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return function (b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function pa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.filter.ID = function (a) {
                var b = a.replace(_, aa);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }, d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (d.filter.ID = function (a) {
                var b = a.replace(_, aa);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }, d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a)return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++])if (c = f.getAttributeNode("id"), c && c.value === a)return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                    if ("undefined" != typeof b.getElementsByClassName && p)return b.getElementsByClassName(a)
                }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)while (b = b.parentNode)if (b === a)return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b)return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b)return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f)return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f)return la(a, b);
                c = a;
                while (c = c.parentNode)g.unshift(c);
                c = b;
                while (c = c.parentNode)h.unshift(c);
                while (g[d] === h[d])d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function (a) {
            return (a + "").replace(ba, ca)
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])b === a[f] && (e = d.push(f));
                while (e--)a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
                } else if (3 === f || 4 === f)return a.nodeValue
            } else while (b = a[d++])c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [w, n, t];
                                    break
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)while (m = ++n && m && m[p] || (t = n = 0) || o.pop())if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b))break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [], c = [], d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }), contains: ia(function (a) {
                    return a = a.replace(_, aa), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ia(function (a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: oa(!1), disabled: oa(!0), checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return X.test(a.nodeName)
                }, input: function (a) {
                    return W.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: pa(function () {
                    return [0]
                }), last: pa(function (a, b) {
                    return [b - 1]
                }), eq: pa(function (a, b, c) {
                    return [c < 0 ? c + b : c]
                }), even: pa(function (a, b) {
                    for (var c = 0; c < b; c += 2)a.push(c);
                    return a
                }), odd: pa(function (a, b) {
                    for (var c = 1; c < b; c += 2)a.push(c);
                    return a
                }), lt: pa(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }), gt: pa(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = ma(b);
        for (b in{submit: !0, reset: !0})d.pseudos[b] = na(b);
        function ra() {
        }

        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)!(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c)break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };
        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++)d += a[b].value;
            return d
        }

        function ta(a, b, c) {
            var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = x++;
            return b.first ? function (b, c, e) {
                while (b = b[d])if (1 === b.nodeType || g)return a(b, c, e);
                return !1
            } : function (b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])if ((1 === b.nodeType || g) && a(b, c, i))return !0
                } else while (b = b[d])if (1 === b.nodeType || g)if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b; else {
                    if ((j = k[f]) && j[0] === w && j[1] === h)return m[2] = j[2];
                    if (k[f] = m, m[2] = a(b, c, i))return !0
                }
                return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++)ga(a, b[d], c);
            return c
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
                return a === b
            }, h, !0), l = ta(function (a) {
                return I(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; i < f; i++)if (c = d.relative[a[i].type]) m = [ta(ua(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; e < f; e++)if (d.relative[a[e].type])break;
                    return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                }
                m.push(c)
            }
            return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k),
                    y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                        while (q = a[o++])if (q(l, g || n, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--, f && t.push(l))
                }
                if (r += s, c && s !== r) {
                    o = 0;
                    while (q = b[o++])q(t, u, g, h);
                    if (f) {
                        if (r > 0)while (s--)t[s] || u[s] || (u[s] = E.call(i));
                        u = wa(u)
                    }
                    G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = y, j = v), t
            };
            return c ? ia(f) : f
        }

        return h = ga.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b)return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type])break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a)return G.apply(c, e), c;
                        break
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            if (!c)return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase())return a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function (a, b, c) {
            var d;
            if (!c)return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function (a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
                if (e && r(a).is(c))break;
                d.push(a)
            }
            return d
        }, z = function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }, A = r.expr.match.needsContext, B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;

    function D(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function (a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c
        }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }

    r.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, r.fn.extend({
        find: function (a) {
            var b, c, d = this.length, e = this;
            if ("string" != typeof a)return this.pushStack(r(a).filter(function () {
                for (b = 0; b < d; b++)if (r.contains(e[b], this))return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++)r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        }, filter: function (a) {
            return this.pushStack(D(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(D(this, a || [], !0))
        }, is: function (a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, G = r.fn.init = function (a, b, c) {
        var e, f;
        if (!a)return this;
        if (c = c || E, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b)return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b))for (e in b)r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
    };
    G.prototype = r.fn, E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/, I = {children: !0, contents: !0, next: !0, prev: !0};
    r.fn.extend({
        has: function (a) {
            var b = r(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; a < c; a++)if (r.contains(this, b[a]))return !0
            })
        }, closest: function (a, b) {
            var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a);
            if (!A.test(a))for (; d < e; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function J(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }

    r.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return y(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return y(a, "parentNode", c)
        }, next: function (a) {
            return J(a, "nextSibling")
        }, prev: function (a) {
            return J(a, "previousSibling")
        }, nextAll: function (a) {
            return y(a, "nextSibling")
        }, prevAll: function (a) {
            return y(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return y(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return y(a, "previousSibling", c)
        }, siblings: function (a) {
            return z((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return z(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || r.merge([], a.childNodes)
        }
    }, function (a, b) {
        r.fn[a] = function (c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var K = /[^\x20\t\r\n\f]+/g;

    function L(a) {
        var b = {};
        return r.each(a.match(K) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    r.Callbacks = function (a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function () {
            for (e = a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length)f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
            }
            a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
        }, j = {
            add: function () {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    r.each(b, function (b, c) {
                        r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                    })
                }(arguments), c && !b && i()), this
            }, remove: function () {
                return r.each(arguments, function (a, b) {
                    var c;
                    while ((c = r.inArray(b, f, c)) > -1)f.splice(c, 1), c <= h && h--
                }), this
            }, has: function (a) {
                return a ? r.inArray(a, f) > -1 : f.length > 0
            }, empty: function () {
                return f && (f = []), this
            }, disable: function () {
                return e = g = [], f = c = "", this
            }, disabled: function () {
                return !f
            }, lock: function () {
                return e = g = [], c || b || (f = c = ""), this
            }, locked: function () {
                return !!e
            }, fireWith: function (a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
            }, fire: function () {
                return j.fireWith(this, arguments), this
            }, fired: function () {
                return !!d
            }
        };
        return j
    };
    function M(a) {
        return a
    }

    function N(a) {
        throw a
    }

    function O(a, b, c) {
        var d;
        try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
        } catch (a) {
            c.call(void 0, a)
        }
    }

    r.extend({
        Deferred: function (b) {
            var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
                d = "pending", e = {
                    state: function () {
                        return d
                    }, always: function () {
                        return f.done(arguments).fail(arguments), this
                    }, "catch": function (a) {
                        return e.then(null, a)
                    }, pipe: function () {
                        var a = arguments;
                        return r.Deferred(function (b) {
                            r.each(c, function (c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function () {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, then: function (b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function () {
                                var h = this, i = arguments, j = function () {
                                    var a, j;
                                    if (!(b < f)) {
                                        if (a = d.apply(h, i), a === c.promise())throw new TypeError("Thenable self-resolution");
                                        j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                    }
                                }, k = e ? j : function () {
                                    try {
                                        j()
                                    } catch (a) {
                                        r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i))
                                    }
                                };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }

                        return r.Deferred(function (a) {
                            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N))
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? r.extend(a, e) : e
                    }
                }, f = {};
            return r.each(c, function (a, b) {
                var g = b[2], h = b[5];
                e[b[1]] = g.add, h && g.add(function () {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        }, when: function (a) {
            var b = arguments.length, c = b, d = Array(c), e = f.call(arguments), g = r.Deferred(), h = function (a) {
                return function (c) {
                    d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                }
            };
            if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then)))return g.then();
            while (c--)O(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, r.readyException = function (b) {
        a.setTimeout(function () {
            throw b
        })
    };
    var Q = r.Deferred();
    r.fn.ready = function (a) {
        return Q.then(a)["catch"](function (a) {
            r.readyException(a)
        }), this
    }, r.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? r.readyWait++ : r.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
        }
    }), r.ready.then = Q.then;
    function R() {
        d.removeEventListener("DOMContentLoaded", R),
            a.removeEventListener("load", R), r.ready()
    }

    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
    var S = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === r.type(c)) {
            e = !0;
            for (h in c)S(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(r(a), c)
            })), b))for (; h < i; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, T = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function U() {
        this.expando = r.expando + U.uid++
    }

    U.uid = 1, U.prototype = {
        cache: function (a) {
            var b = a[this.expando];
            return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        }, set: function (a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c; else for (d in b)e[r.camelCase(d)] = b[d];
            return e
        }, get: function (a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        }, access: function (a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;
                    while (c--)delete d[b[c]]
                }
                (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        }, hasData: function (a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var V = new U, W = new U, X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Y = /[A-Z]/g;

    function Z(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a)
    }

    function $(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = Z(c)
            } catch (e) {
            }
            W.set(a, b, c)
        } else c = void 0;
        return c
    }

    r.extend({
        hasData: function (a) {
            return W.hasData(a) || V.hasData(a)
        }, data: function (a, b, c) {
            return W.access(a, b, c)
        }, removeData: function (a, b) {
            W.remove(a, b)
        }, _data: function (a, b, c) {
            return V.access(a, b, c)
        }, _removeData: function (a, b) {
            V.remove(a, b)
        }
    }), r.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
                    V.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                W.set(this, a)
            }) : S(this, function (b) {
                var c;
                if (f && void 0 === b) {
                    if (c = W.get(f, a), void 0 !== c)return c;
                    if (c = $(f, a), void 0 !== c)return c
                } else this.each(function () {
                    W.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                W.remove(this, a)
            })
        }
    }), r.extend({
        queue: function (a, b, c) {
            var d;
            if (a)return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = r.queue(a, b), d = c.length, e = c.shift(), f = r._queueHooks(a, b), g = function () {
                r.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return V.get(a, c) || V.access(a, c, {
                    empty: r.Callbacks("once memory").add(function () {
                        V.remove(a, [b + "queue", c])
                    })
                })
        }
    }), r.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                r.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
        ba = ["Top", "Right", "Bottom", "Left"], ca = function (a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
        }, da = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b)g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)a.style[f] = g[f];
            return e
        };

    function ea(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function () {
                return d.cur()
            } : function () {
                return r.css(a, b, "")
            }, i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    var fa = {};

    function ga(a) {
        var b, c = a.ownerDocument, d = a.nodeName, e = fa[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e)
    }

    function ha(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++)d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
        for (f = 0; f < g; f++)null != e[f] && (a[f].style.display = e[f]);
        return a
    }

    r.fn.extend({
        show: function () {
            return ha(this, !0)
        }, hide: function () {
            return ha(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                ca(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ia = /^(?:checkbox|radio)$/i, ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ka = /^$|\/(?:java|ecma)script/i, la = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;
    function ma(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c
    }

    function na(a, b) {
        for (var c = 0, d = a.length; c < d; c++)V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"))
    }

    var oa = /<|&#?\w+;/;

    function pa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)if (f = a[n], f || 0 === f)if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f); else if (oa.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--)g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++])if (d && r.inArray(f, d) > -1) e && e.push(f); else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) {
            k = 0;
            while (f = g[k++])ka.test(f.type || "") && c.push(f)
        }
        return l
    }

    !function () {
        var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var qa = d.documentElement, ra = /^key/, sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ta = /^([^.]*)(?:\.(.+)|)/;

    function ua() {
        return !0
    }

    function va() {
        return !1
    }

    function wa() {
        try {
            return d.activeElement
        } catch (a) {
        }
    }

    function xa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b)xa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va; else if (!e)return a;
        return 1 === f && (g = e, e = function (a) {
            return r().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
            r.event.add(this, b, e, d, c)
        })
    }

    r.event = {
        global: {}, add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(K) || [""], j = b.length;
                while (j--)h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
            }
        }, remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;
                while (j--)if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--)k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                } else for (n in i)r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events")
            }
        }, dispatch: function (a) {
            var b = r.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++)i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result
            }
        }, handlers: function (a, b) {
            var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))for (; j !== this; j = j.parentNode || this)if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                for (f = [], g = {}, c = 0; c < i; c++)d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                f.length && h.push({elem: j, handlers: f})
            }
            return j = this, i < b.length && h.push({elem: j, handlers: b.slice(i)}), h
        }, addProp: function (a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function () {
                    if (this.originalEvent)return b(this.originalEvent)
                } : function () {
                    if (this.originalEvent)return this.originalEvent[a]
                },
                set: function (b) {
                    Object.defineProperty(this, a, {enumerable: !0, configurable: !0, writable: !0, value: b})
                }
            })
        }, fix: function (a) {
            return a[r.expando] ? a : new r.Event(a)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== wa() && this.focus)return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === wa() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && r.nodeName(this, "input"))return this.click(), !1
                }, _default: function (a) {
                    return r.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, r.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, r.Event = function (a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: va,
        isPropagationStopped: va,
        isImmediatePropagationStopped: va,
        isSimulated: !1,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({
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
        "char": !0,
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
        which: function (a) {
            var b = a.button;
            return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        r.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({
        on: function (a, b, c, d) {
            return xa(this, a, b, c, d)
        }, one: function (a, b, c, d) {
            return xa(this, a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function () {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        za = /<script|<style|<link/i, Aa = /checked\s*(?:[^=]|=\s*.checked.)/i, Ba = /^true\/(.*)/,
        Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Da(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function Ea(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Fa(a) {
        var b = Ba.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ga(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)for (c = 0, d = j[e].length; c < d; c++)r.event.add(b, e, j[e][c])
            }
            W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i))
        }
    }

    function Ha(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function Ia(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q))return a.each(function (e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d)
        });
        if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++)j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
            if (i)for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++)j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k))
        }
        return a
    }

    function Ja(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    r.extend({
        htmlPrefilter: function (a) {
            return a.replace(ya, "<$1></$2>")
        }, clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++)Ha(f[d], g[d]);
            if (b)if (c)for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++)Ga(f[d], g[d]); else Ga(a, h);
            return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h
        }, cleanData: function (a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)if (T(c)) {
                if (b = c[V.expando]) {
                    if (b.events)for (d in b.events)e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                    c[V.expando] = void 0
                }
                c[W.expando] && (c[W.expando] = void 0)
            }
        }
    }), r.fn.extend({
        detach: function (a) {
            return Ja(this, a, !0)
        }, remove: function (a) {
            return Ja(this, a)
        }, text: function (a) {
            return S(this, function (a) {
                return void 0 === a ? r.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return Ia(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return Ia(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return Ia(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return Ia(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return r.clone(this, a, b)
            })
        }, html: function (a) {
            return S(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
                if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++)b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = [];
            return Ia(this, arguments, function (b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        r.fn[a] = function (a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ka = /^margin/, La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"), Ma = function (b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    };
    !function () {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null
            }
        }

        var c, e, f, g, h = d.createElement("div"), i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function () {
                return b(), c
            }, boxSizingReliable: function () {
                return b(), e
            }, pixelMarginRight: function () {
                return b(), f
            }, reliableMarginLeft: function () {
                return b(), g
            }
        }))
    }();
    function Na(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Oa(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    var Pa = /^(none|table(?!-c[ea]).+)/, Qa = {position: "absolute", visibility: "hidden", display: "block"},
        Ra = {letterSpacing: "0", fontWeight: "400"}, Sa = ["Webkit", "Moz", "ms"], Ta = d.createElement("div").style;

    function Ua(a) {
        if (a in Ta)return a;
        var b = a[0].toUpperCase() + a.slice(1), c = Sa.length;
        while (c--)if (a = Sa[c] + b, a in Ta)return a
    }

    function Va(a, b, c) {
        var d = aa.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Wa(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2)"margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
        return g
    }

    function Xa(a, b, c) {
        var d, e = !0, f = Ma(a), g = "border-box" === r.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
            if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d))return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px"
    }

    r.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Na(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b), i = a.style;
                return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = r.camelCase(b);
            return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function (a, b) {
        r.cssHooks[b] = {
            get: function (a, c, d) {
                if (c)return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function () {
                    return Xa(a, b, d)
                })
            }, set: function (a, c, d) {
                var e, f = d && Ma(a), g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) {
        if (b)return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, {marginLeft: 0}, function () {
                return a.getBoundingClientRect().left
            })) + "px"
    }), r.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        r.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++)e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ka.test(a) || (r.cssHooks[a + b].set = Va)
    }), r.fn.extend({
        css: function (a, b) {
            return S(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (r.isArray(b)) {
                    for (d = Ma(a), e = b.length; g < e; g++)f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });
    function Ya(a, b, c, d, e) {
        return new Ya.prototype.init(a, b, c, d, e)
    }

    r.Tween = Ya, Ya.prototype = {
        constructor: Ya, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Ya.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ya.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Ya.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this
        }
    }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            }, set: function (a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, r.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }, _default: "swing"
    }, r.fx = Ya.prototype.init, r.fx.step = {};
    var Za, $a, _a = /^(?:toggle|show|hide)$/, ab = /queueHooks$/;

    function bb() {
        $a && (a.requestAnimationFrame(bb), r.fx.tick())
    }

    function cb() {
        return a.setTimeout(function () {
            Za = void 0
        }), Za = r.now()
    }

    function db(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; d < 4; d += 2 - b)c = ba[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function eb(a, b, c) {
        for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++)if (d = e[f].call(c, b, a))return d
    }

    function fb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style,
            p = a.nodeType && ca(a), q = V.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
            g.unqueued || h()
        }), g.unqueued++, m.always(function () {
            m.always(function () {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)if (e = b[d], _a.test(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d])continue;
                p = !0
            }
            n[d] = q && q[d] || r.style(a, d)
        }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n)i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", {display: j}), f && (q.hidden = !p), p && ha([a], !0), m.done(function () {
                p || ha([a]), V.remove(a, "fxshow");
                for (d in n)r.style(a, d, n[d])
            })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function gb(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function hb(a, b, c) {
        var d, e, f = 0, g = hb.prefilters.length, h = r.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return !1;
            for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: r.extend({}, b),
            opts: r.extend(!0, {specialEasing: {}, easing: r.easing._default}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Za || cb(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)return this;
                for (e = !0; c < d; c++)j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (gb(k, j.opts.specialEasing); f < g; f++)if (d = hb.prefilters[f].call(j, a, k, j.opts))return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    r.Animation = r.extend(hb, {
        tweeners: {
            "*": [function (a, b) {
                var c = this.createTween(a, b);
                return ea(c.elem, a, aa.exec(b), c), c
            }]
        }, tweener: function (a, b) {
            r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);
            for (var c, d = 0, e = a.length; d < e; d++)c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b)
        }, prefilters: [fb], prefilter: function (a, b) {
            b ? hb.prefilters.unshift(a) : hb.prefilters.push(a)
        }
    }), r.speed = function (a, b, c) {
        var e = a && "object" == typeof a ? r.extend({}, a) : {
            complete: c || !c && b || r.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !r.isFunction(b) && b
        };
        return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
            r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue)
        }, e
    }, r.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(ca).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = r.isEmptyObject(a), f = r.speed(b, c, d), g = function () {
                var b = hb(this, r.extend({}, a), f);
                (e || V.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = r.timers, g = V.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || r.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = V.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0;
                for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < g; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), r.each(["toggle", "show", "hide"], function (a, b) {
        var c = r.fn[b];
        r.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e)
        }
    }), r.each({
        slideDown: db("show"),
        slideUp: db("hide"),
        slideToggle: db("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        r.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), r.timers = [], r.fx.tick = function () {
        var a, b = 0, c = r.timers;
        for (Za = r.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || r.fx.stop(), Za = void 0
    }, r.fx.timer = function (a) {
        r.timers.push(a), a() ? r.fx.start() : r.timers.pop()
    }, r.fx.interval = 13, r.fx.start = function () {
        $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval))
    }, r.fx.stop = function () {
        a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null
    }, r.fx.speeds = {slow: 600, fast: 200, _default: 400}, r.fn.delay = function (b, c) {
        return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
                a.clearTimeout(e)
            }
        })
    }, function () {
        var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option"));
        a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
    }();
    var ib, jb = r.expr.attrHandle;
    r.fn.extend({
        attr: function (a, b) {
            return S(this, r.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                r.removeAttr(this, a)
            })
        }
    }), r.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)),
                void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d))
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }, removeAttr: function (a, b) {
            var c, d = 0, e = b && b.match(K);
            if (e && 1 === a.nodeType)while (c = e[d++])a.removeAttribute(c)
        }
    }), ib = {
        set: function (a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = jb[b] || r.find.attr;
        jb[b] = function (a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e
        }
    });
    var kb = /^(?:input|select|textarea|button)$/i, lb = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function (a, b) {
            return S(this, r.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[r.propFix[a] || a]
            })
        }
    }), r.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), o.optSelected || (r.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }, set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        r.propFix[this.toLowerCase()] = this
    });
    function mb(a) {
        var b = a.match(K) || [];
        return b.join(" ")
    }

    function nb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    r.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a))return this.each(function (b) {
                r(this).addClass(a.call(this, b, nb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                    g = 0;
                    while (f = b[g++])d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = mb(d), e !== h && c.setAttribute("class", h)
                }
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a))return this.each(function (b) {
                r(this).removeClass(a.call(this, b, nb(this)))
            });
            if (!arguments.length)return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                    g = 0;
                    while (f = b[g++])while (d.indexOf(" " + f + " ") > -1)d = d.replace(" " + f + " ", " ");
                    h = mb(d), e !== h && c.setAttribute("class", h)
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
                r(this).toggleClass(a.call(this, c, nb(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = r(this), f = a.match(K) || [];
                    while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""))
            })
        }, hasClass: function (a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1)return !0;
            return !1
        }
    });
    var ob = /\r/g;
    r.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)return d = r.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
                            return null == a ? "" : a + ""
                        })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e)return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : mb(r.text(a))
                }
            }, select: {
                get: function (a) {
                    var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                        if (b = r(c).val(), g)return b;
                        h.push(b)
                    }
                    return h
                }, set: function (a, b) {
                    var c, d, e = a.options, f = r.makeArray(b), g = e.length;
                    while (g--)d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function () {
        r.valHooks[this] = {
            set: function (a, b) {
                if (r.isArray(b))return a.checked = r.inArray(r(a).val(), b) > -1
            }
        }, o.checkOn || (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function (b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d], p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped())b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        }, simulate: function (a, b, c) {
            var d = r.extend(new r.Event, c, {type: a, isSimulated: !0});
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({
        trigger: function (a, b) {
            return this.each(function () {
                r.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            if (c)return r.event.trigger(a, b, c, !0)
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        r.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), r.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = V.access(d, b);
                e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b))
            }
        }
    });
    var qb = a.location, rb = r.now(), sb = /\?/;
    r.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b)return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
    };
    var tb = /\[\]$/, ub = /\r?\n/g, vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;

    function xb(a, b, c, d) {
        var e;
        if (r.isArray(b)) r.each(b, function (b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== r.type(b)) d(a, b); else for (e in b)xb(a + "[" + e + "]", b[e], c, d)
    }

    r.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            var c = r.isFunction(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
        };
        if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)xb(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({
        serialize: function () {
            return r.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a))
            }).map(function (a, b) {
                var c = r(this).val();
                return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
                    return {name: b.name, value: a.replace(ub, "\r\n")}
                }) : {name: b.name, value: c.replace(ub, "\r\n")}
            }).get()
        }
    });
    var yb = /%20/g, zb = /#.*$/, Ab = /([?&])_=[^&]*/, Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Db = /^(?:GET|HEAD)$/, Eb = /^\/\//, Fb = {},
        Gb = {}, Hb = "*/".concat("*"), Ib = d.createElement("a");
    Ib.href = qb.href;
    function Jb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(K) || [];
            if (r.isFunction(c))while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Kb(a, b, c, d) {
        var e = {}, f = a === Gb;

        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Lb(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a
    }

    function Mb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)for (e in h)if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f)return f !== i[0] && i.unshift(f), c[f]
    }

    function Nb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: Cb.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Hb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a)
        },
        ajaxPrefilter: Jb(Fb),
        ajaxTransport: Jb(Gb),
        ajax: function (b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(),
                t = r.Callbacks("once memory"), u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (k) {
                            if (!h) {
                                h = {};
                                while (b = Bb.exec(g))h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return k ? g : null
                    }, setRequestHeader: function (a, b) {
                        return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                    }, overrideMimeType: function (a) {
                        return null == k && (o.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a)if (k) y.always(a[y.status]); else for (b in a)u[b] = [u[b], a[b]];
                        return this
                    }, abort: function (a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this
                    }
                };
            if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k)return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers)y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k)return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(v, A)
                } catch (z) {
                    if (k)throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");
            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }

            return y
        },
        getJSON: function (a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return r.get(a, void 0, b, "script")
        }
    }), r.each(["get", "post"], function (a, b) {
        r[b] = function (a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }), r._evalUrl = function (a) {
        return r.ajax({url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, r.fn.extend({
        wrapAll: function (a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild)a = a.firstElementChild;
                return a
            }).append(this)), this
        }, wrapInner: function (a) {
            return r.isFunction(a) ? this.each(function (b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = r(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = r.isFunction(a);
            return this.each(function (c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function (a) {
            return this.parent(a).not("body").each(function () {
                r(this).replaceWith(this.childNodes)
            }), this
        }
    }), r.expr.pseudos.hidden = function (a) {
        return !r.expr.pseudos.visible(a)
    }, r.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, r.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    };
    var Ob = {0: 200, 1223: 204}, Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
        var c, d;
        if (o.cors || Pb && !b.crossDomain)return {
            send: function (e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)for (g in b.xhrFields)h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e)h.setRequestHeader(g, e[g]);
                c = function (a) {
                    return function () {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {binary: h.response} : {text: h.responseText}, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c)throw i
                }
            }, abort: function () {
                c && c()
            }
        }
    }), r.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1)
    }), r.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (a) {
                return r.globalEval(a), a
            }
        }
    }), r.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), r.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (e, f) {
                    b = r("<script>").prop({charset: a.scriptCharset, src: a.url}).on("load error", c = function (a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Qb = [], Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Qb.pop() || r.expando + "_" + rb++;
            return this[a] = !0, a
        }
    }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0])return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), o.createHTMLDocument = function () {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), r.parseHTML = function (a, b, c) {
        if ("string" != typeof a)return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
    }, r.fn.load = function (a, b, c) {
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
                g.each(function () {
                    c.apply(this, f || [a.responseText, b, a])
                })
            }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        r.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), r.expr.pseudos.animated = function (a) {
        return r.grep(r.timers, function (b) {
            return a === b.elem
        }).length
    };
    function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    r.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"), l = r(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f)return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, {
                top: d.top + c.pageYOffset - b.clientTop,
                left: d.left + c.pageXOffset - b.clientLeft
            }) : d) : {top: 0, left: 0}
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0)}
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position"))a = a.offsetParent;
                return a || qa
            })
        }
    }), r.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function (d) {
            return S(this, function (a, d, e) {
                var f = Sb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), r.each(["top", "left"], function (a, b) {
        r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) {
            if (c)return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c
        })
    }), r.each({Height: "height", Width: "width"}, function (a, b) {
        r.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            r.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return S(this, function (b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return r
    });
    var Tb = a.jQuery, Ub = a.$;
    return r.noConflict = function (b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r
    }, b || (a.jQuery = a.$ = r), r
});

//#############################  lodash库 ############################################

/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function () {
    function n(n, t) {
        return n.set(t[0], t[1]), n
    }

    function t(n, t) {
        return n.add(t), n
    }

    function r(n, t, r) {
        switch (r.length) {
            case 0:
                return n.call(t);
            case 1:
                return n.call(t, r[0]);
            case 2:
                return n.call(t, r[0], r[1]);
            case 3:
                return n.call(t, r[0], r[1], r[2])
        }
        return n.apply(t, r)
    }

    function e(n, t, r, e) {
        for (var u = -1, i = null == n ? 0 : n.length; ++u < i;) {
            var o = n[u];
            t(e, o, r(o), n)
        }
        return e
    }

    function u(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length; ++r < e && false !== t(n[r], r, n););
        return n
    }

    function i(n, t) {
        for (var r = null == n ? 0 : n.length; r-- && false !== t(n[r], r, n););
        return n
    }

    function o(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length; ++r < e;)if (!t(n[r], r, n))return false;
        return true
    }

    function f(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e;) {
            var o = n[r];
            t(o, r, n) && (i[u++] = o)
        }
        return i
    }

    function c(n, t) {
        return !(null == n || !n.length) && -1 < d(n, t, 0)
    }

    function a(n, t, r) {
        for (var e = -1, u = null == n ? 0 : n.length; ++e < u;)if (r(t, n[e]))return true;
        return false
    }

    function l(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e;)u[r] = t(n[r], r, n);
        return u
    }

    function s(n, t) {
        for (var r = -1, e = t.length, u = n.length; ++r < e;)n[u + r] = t[r];
        return n
    }

    function h(n, t, r, e) {
        var u = -1, i = null == n ? 0 : n.length;
        for (e && i && (r = n[++u]); ++u < i;)r = t(r, n[u], u, n);
        return r
    }

    function p(n, t, r, e) {
        var u = null == n ? 0 : n.length;
        for (e && u && (r = n[--u]); u--;)r = t(r, n[u], u, n);
        return r
    }

    function _(n, t) {
        for (var r = -1, e = null == n ? 0 : n.length; ++r < e;)if (t(n[r], r, n))return true;
        return false
    }

    function v(n, t, r) {
        var e;
        return r(n, function (n, r, u) {
            if (t(n, r, u))return e = r, false
        }), e
    }

    function g(n, t, r, e) {
        var u = n.length;
        for (r += e ? 1 : -1; e ? r-- : ++r < u;)if (t(n[r], r, n))return r;
        return -1
    }

    function d(n, t, r) {
        if (t === t)n:{
            --r;
            for (var e = n.length; ++r < e;)if (n[r] === t) {
                n = r;
                break n
            }
            n = -1
        } else n = g(n, b, r);
        return n
    }

    function y(n, t, r, e) {
        --r;
        for (var u = n.length; ++r < u;)if (e(n[r], t))return r;
        return -1
    }

    function b(n) {
        return n !== n
    }

    function x(n, t) {
        var r = null == n ? 0 : n.length;
        return r ? k(n, t) / r : P
    }

    function j(n) {
        return function (t) {
            return null == t ? F : t[n]
        }
    }

    function w(n) {
        return function (t) {
            return null == n ? F : n[t]
        }
    }

    function m(n, t, r, e, u) {
        return u(n, function (n, u, i) {
            r = e ? (e = false, n) : t(r, n, u, i)
        }), r
    }

    function A(n, t) {
        var r = n.length;
        for (n.sort(t); r--;)n[r] = n[r].c;
        return n
    }

    function k(n, t) {
        for (var r, e = -1, u = n.length; ++e < u;) {
            var i = t(n[e]);
            i !== F && (r = r === F ? i : r + i)
        }
        return r
    }

    function E(n, t) {
        for (var r = -1, e = Array(n); ++r < n;)e[r] = t(r);
        return e
    }

    function O(n, t) {
        return l(t, function (t) {
            return [t, n[t]]
        })
    }

    function S(n) {
        return function (t) {
            return n(t)
        }
    }

    function I(n, t) {
        return l(t, function (t) {
            return n[t]
        })
    }

    function R(n, t) {
        return n.has(t)
    }

    function z(n, t) {
        for (var r = -1, e = n.length; ++r < e && -1 < d(t, n[r], 0););
        return r
    }

    function W(n, t) {
        for (var r = n.length; r-- && -1 < d(t, n[r], 0););
        return r
    }

    function B(n) {
        return "\\" + Tn[n]
    }

    function L(n) {
        var t = -1, r = Array(n.size);
        return n.forEach(function (n, e) {
            r[++t] = [e, n]
        }), r
    }

    function U(n, t) {
        return function (r) {
            return n(t(r))
        }
    }

    function C(n, t) {
        for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
            var o = n[r];
            o !== t && "__lodash_placeholder__" !== o || (n[r] = "__lodash_placeholder__", i[u++] = r)
        }
        return i
    }

    function D(n) {
        var t = -1, r = Array(n.size);
        return n.forEach(function (n) {
            r[++t] = n
        }), r
    }

    function M(n) {
        var t = -1, r = Array(n.size);
        return n.forEach(function (n) {
            r[++t] = [n, n]
        }), r
    }

    function T(n) {
        if (Bn.test(n)) {
            for (var t = zn.lastIndex = 0; zn.test(n);)++t;
            n = t
        } else n = tt(n);
        return n
    }

    function $(n) {
        return Bn.test(n) ? n.match(zn) || [] : n.split("")
    }

    var F, N = 1 / 0, P = NaN,
        Z = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]],
        q = /\b__p\+='';/g, V = /\b(__p\+=)''\+/g, K = /(__e\(.*?\)|\b__t\))\+'';/g, G = /&(?:amp|lt|gt|quot|#39);/g,
        H = /[&<>"']/g, J = RegExp(G.source), Y = RegExp(H.source), Q = /<%-([\s\S]+?)%>/g, X = /<%([\s\S]+?)%>/g,
        nn = /<%=([\s\S]+?)%>/g, tn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, rn = /^\w*$/, en = /^\./,
        un = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        on = /[\\^$.*+?()[\]{}|]/g, fn = RegExp(on.source), cn = /^\s+|\s+$/g, an = /^\s+/, ln = /\s+$/,
        sn = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, hn = /\{\n\/\* \[wrapped with (.+)\] \*/, pn = /,? & /,
        _n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, vn = /\\(\\)?/g, gn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        dn = /\w*$/, yn = /^[-+]0x[0-9a-f]+$/i, bn = /^0b[01]+$/i, xn = /^\[object .+?Constructor\]$/,
        jn = /^0o[0-7]+$/i, wn = /^(?:0|[1-9]\d*)$/, mn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, An = /($^)/,
        kn = /['\n\r\u2028\u2029\\]/g,
        En = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",
        On = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + En,
        Sn = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",
        In = RegExp("['\u2019]", "g"), Rn = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"),
        zn = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + Sn + En, "g"),
        Wn = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)|\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)|\\d+", On].join("|"), "g"),
        Bn = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
        Ln = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        Un = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),
        Cn = {};
    Cn["[object Float32Array]"] = Cn["[object Float64Array]"] = Cn["[object Int8Array]"] = Cn["[object Int16Array]"] = Cn["[object Int32Array]"] = Cn["[object Uint8Array]"] = Cn["[object Uint8ClampedArray]"] = Cn["[object Uint16Array]"] = Cn["[object Uint32Array]"] = true, Cn["[object Arguments]"] = Cn["[object Array]"] = Cn["[object ArrayBuffer]"] = Cn["[object Boolean]"] = Cn["[object DataView]"] = Cn["[object Date]"] = Cn["[object Error]"] = Cn["[object Function]"] = Cn["[object Map]"] = Cn["[object Number]"] = Cn["[object Object]"] = Cn["[object RegExp]"] = Cn["[object Set]"] = Cn["[object String]"] = Cn["[object WeakMap]"] = false;
    var Dn = {};
    Dn["[object Arguments]"] = Dn["[object Array]"] = Dn["[object ArrayBuffer]"] = Dn["[object DataView]"] = Dn["[object Boolean]"] = Dn["[object Date]"] = Dn["[object Float32Array]"] = Dn["[object Float64Array]"] = Dn["[object Int8Array]"] = Dn["[object Int16Array]"] = Dn["[object Int32Array]"] = Dn["[object Map]"] = Dn["[object Number]"] = Dn["[object Object]"] = Dn["[object RegExp]"] = Dn["[object Set]"] = Dn["[object String]"] = Dn["[object Symbol]"] = Dn["[object Uint8Array]"] = Dn["[object Uint8ClampedArray]"] = Dn["[object Uint16Array]"] = Dn["[object Uint32Array]"] = true,
        Dn["[object Error]"] = Dn["[object Function]"] = Dn["[object WeakMap]"] = false;
    var Mn, Tn = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"}, $n = parseFloat,
        Fn = parseInt, Nn = typeof global == "object" && global && global.Object === Object && global,
        Pn = typeof self == "object" && self && self.Object === Object && self,
        Zn = Nn || Pn || Function("return this")(),
        qn = typeof exports == "object" && exports && !exports.nodeType && exports,
        Vn = qn && typeof module == "object" && module && !module.nodeType && module, Kn = Vn && Vn.exports === qn,
        Gn = Kn && Nn.process;
    n:{
        try {
            Mn = Gn && Gn.binding && Gn.binding("util");
            break n
        } catch (n) {
        }
        Mn = void 0
    }
    var Hn = Mn && Mn.isArrayBuffer, Jn = Mn && Mn.isDate, Yn = Mn && Mn.isMap, Qn = Mn && Mn.isRegExp,
        Xn = Mn && Mn.isSet, nt = Mn && Mn.isTypedArray, tt = j("length"), rt = w({
            "\xc0": "A",
            "\xc1": "A",
            "\xc2": "A",
            "\xc3": "A",
            "\xc4": "A",
            "\xc5": "A",
            "\xe0": "a",
            "\xe1": "a",
            "\xe2": "a",
            "\xe3": "a",
            "\xe4": "a",
            "\xe5": "a",
            "\xc7": "C",
            "\xe7": "c",
            "\xd0": "D",
            "\xf0": "d",
            "\xc8": "E",
            "\xc9": "E",
            "\xca": "E",
            "\xcb": "E",
            "\xe8": "e",
            "\xe9": "e",
            "\xea": "e",
            "\xeb": "e",
            "\xcc": "I",
            "\xcd": "I",
            "\xce": "I",
            "\xcf": "I",
            "\xec": "i",
            "\xed": "i",
            "\xee": "i",
            "\xef": "i",
            "\xd1": "N",
            "\xf1": "n",
            "\xd2": "O",
            "\xd3": "O",
            "\xd4": "O",
            "\xd5": "O",
            "\xd6": "O",
            "\xd8": "O",
            "\xf2": "o",
            "\xf3": "o",
            "\xf4": "o",
            "\xf5": "o",
            "\xf6": "o",
            "\xf8": "o",
            "\xd9": "U",
            "\xda": "U",
            "\xdb": "U",
            "\xdc": "U",
            "\xf9": "u",
            "\xfa": "u",
            "\xfb": "u",
            "\xfc": "u",
            "\xdd": "Y",
            "\xfd": "y",
            "\xff": "y",
            "\xc6": "Ae",
            "\xe6": "ae",
            "\xde": "Th",
            "\xfe": "th",
            "\xdf": "ss",
            "\u0100": "A",
            "\u0102": "A",
            "\u0104": "A",
            "\u0101": "a",
            "\u0103": "a",
            "\u0105": "a",
            "\u0106": "C",
            "\u0108": "C",
            "\u010a": "C",
            "\u010c": "C",
            "\u0107": "c",
            "\u0109": "c",
            "\u010b": "c",
            "\u010d": "c",
            "\u010e": "D",
            "\u0110": "D",
            "\u010f": "d",
            "\u0111": "d",
            "\u0112": "E",
            "\u0114": "E",
            "\u0116": "E",
            "\u0118": "E",
            "\u011a": "E",
            "\u0113": "e",
            "\u0115": "e",
            "\u0117": "e",
            "\u0119": "e",
            "\u011b": "e",
            "\u011c": "G",
            "\u011e": "G",
            "\u0120": "G",
            "\u0122": "G",
            "\u011d": "g",
            "\u011f": "g",
            "\u0121": "g",
            "\u0123": "g",
            "\u0124": "H",
            "\u0126": "H",
            "\u0125": "h",
            "\u0127": "h",
            "\u0128": "I",
            "\u012a": "I",
            "\u012c": "I",
            "\u012e": "I",
            "\u0130": "I",
            "\u0129": "i",
            "\u012b": "i",
            "\u012d": "i",
            "\u012f": "i",
            "\u0131": "i",
            "\u0134": "J",
            "\u0135": "j",
            "\u0136": "K",
            "\u0137": "k",
            "\u0138": "k",
            "\u0139": "L",
            "\u013b": "L",
            "\u013d": "L",
            "\u013f": "L",
            "\u0141": "L",
            "\u013a": "l",
            "\u013c": "l",
            "\u013e": "l",
            "\u0140": "l",
            "\u0142": "l",
            "\u0143": "N",
            "\u0145": "N",
            "\u0147": "N",
            "\u014a": "N",
            "\u0144": "n",
            "\u0146": "n",
            "\u0148": "n",
            "\u014b": "n",
            "\u014c": "O",
            "\u014e": "O",
            "\u0150": "O",
            "\u014d": "o",
            "\u014f": "o",
            "\u0151": "o",
            "\u0154": "R",
            "\u0156": "R",
            "\u0158": "R",
            "\u0155": "r",
            "\u0157": "r",
            "\u0159": "r",
            "\u015a": "S",
            "\u015c": "S",
            "\u015e": "S",
            "\u0160": "S",
            "\u015b": "s",
            "\u015d": "s",
            "\u015f": "s",
            "\u0161": "s",
            "\u0162": "T",
            "\u0164": "T",
            "\u0166": "T",
            "\u0163": "t",
            "\u0165": "t",
            "\u0167": "t",
            "\u0168": "U",
            "\u016a": "U",
            "\u016c": "U",
            "\u016e": "U",
            "\u0170": "U",
            "\u0172": "U",
            "\u0169": "u",
            "\u016b": "u",
            "\u016d": "u",
            "\u016f": "u",
            "\u0171": "u",
            "\u0173": "u",
            "\u0174": "W",
            "\u0175": "w",
            "\u0176": "Y",
            "\u0177": "y",
            "\u0178": "Y",
            "\u0179": "Z",
            "\u017b": "Z",
            "\u017d": "Z",
            "\u017a": "z",
            "\u017c": "z",
            "\u017e": "z",
            "\u0132": "IJ",
            "\u0133": "ij",
            "\u0152": "Oe",
            "\u0153": "oe",
            "\u0149": "'n",
            "\u017f": "s"
        }), et = w({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}),
        ut = w({"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'"}), it = function w(En) {
            function On(n) {
                if (bu(n) && !cf(n) && !(n instanceof Mn)) {
                    if (n instanceof zn)return n;
                    if (fi.call(n, "__wrapped__"))return Ne(n)
                }
                return new zn(n)
            }

            function Sn() {
            }

            function zn(n, t) {
                this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = F
            }

            function Mn(n) {
                this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1,
                    this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
            }

            function Tn(n) {
                var t = -1, r = null == n ? 0 : n.length;
                for (this.clear(); ++t < r;) {
                    var e = n[t];
                    this.set(e[0], e[1])
                }
            }

            function Nn(n) {
                var t = -1, r = null == n ? 0 : n.length;
                for (this.clear(); ++t < r;) {
                    var e = n[t];
                    this.set(e[0], e[1])
                }
            }

            function Pn(n) {
                var t = -1, r = null == n ? 0 : n.length;
                for (this.clear(); ++t < r;) {
                    var e = n[t];
                    this.set(e[0], e[1])
                }
            }

            function qn(n) {
                var t = -1, r = null == n ? 0 : n.length;
                for (this.__data__ = new Pn; ++t < r;)this.add(n[t])
            }

            function Vn(n) {
                this.size = (this.__data__ = new Nn(n)).size
            }

            function Gn(n, t) {
                var r, e = cf(n), u = !e && ff(n), i = !e && !u && lf(n), o = !e && !u && !i && vf(n),
                    u = (e = e || u || i || o) ? E(n.length, ti) : [], f = u.length;
                for (r in n)!t && !fi.call(n, r) || e && ("length" == r || i && ("offset" == r || "parent" == r) || o && ("buffer" == r || "byteLength" == r || "byteOffset" == r) || Se(r, f)) || u.push(r);
                return u
            }

            function tt(n) {
                var t = n.length;
                return t ? n[ar(0, t - 1)] : F
            }

            function ot(n, t) {
                return Me(Tr(n), dt(t, 0, n.length))
            }

            function ft(n) {
                return Me(Tr(n))
            }

            function ct(n, t, r, e) {
                return n === F || su(n, ui[r]) && !fi.call(e, r) ? t : n;
            }

            function at(n, t, r) {
                (r === F || su(n[t], r)) && (r !== F || t in n) || vt(n, t, r)
            }

            function lt(n, t, r) {
                var e = n[t];
                fi.call(n, t) && su(e, r) && (r !== F || t in n) || vt(n, t, r)
            }

            function st(n, t) {
                for (var r = n.length; r--;)if (su(n[r][0], t))return r;
                return -1
            }

            function ht(n, t, r, e) {
                return io(n, function (n, u, i) {
                    t(e, n, r(n), i)
                }), e
            }

            function pt(n, t) {
                return n && $r(t, Bu(t), n)
            }

            function _t(n, t) {
                return n && $r(t, Lu(t), n)
            }

            function vt(n, t, r) {
                "__proto__" == t && ki ? ki(n, t, {
                    configurable: true,
                    enumerable: true,
                    value: r,
                    writable: true
                }) : n[t] = r
            }

            function gt(n, t) {
                for (var r = -1, e = t.length, u = Gu(e), i = null == n; ++r < e;)u[r] = i ? F : zu(n, t[r]);
                return u
            }

            function dt(n, t, r) {
                return n === n && (r !== F && (n = n <= r ? n : r), t !== F && (n = n >= t ? n : t)), n
            }

            function yt(n, t, r, e, i, o) {
                var f, c = 1 & t, a = 2 & t, l = 4 & t;
                if (r && (f = i ? r(n, e, i, o) : r(n)), f !== F)return f;
                if (!yu(n))return n;
                if (e = cf(n)) {
                    if (f = Ae(n), !c)return Tr(n, f)
                } else {
                    var s = go(n), h = "[object Function]" == s || "[object GeneratorFunction]" == s;
                    if (lf(n))return Br(n, c);
                    if ("[object Object]" == s || "[object Arguments]" == s || h && !i) {
                        if (f = a || h ? {} : ke(n), !c)return a ? Nr(n, _t(f, n)) : Fr(n, pt(f, n))
                    } else {
                        if (!Dn[s])return i ? n : {};
                        f = Ee(n, s, yt, c)
                    }
                }
                if (o || (o = new Vn),
                        i = o.get(n))return i;
                o.set(n, f);
                var a = l ? a ? ge : ve : a ? Lu : Bu, p = e ? F : a(n);
                return u(p || n, function (e, u) {
                    p && (u = e, e = n[u]), lt(f, u, yt(e, t, r, u, n, o))
                }), f
            }

            function bt(n) {
                var t = Bu(n);
                return function (r) {
                    return xt(r, n, t)
                }
            }

            function xt(n, t, r) {
                var e = r.length;
                if (null == n)return !e;
                for (n = Xu(n); e--;) {
                    var u = r[e], i = t[u], o = n[u];
                    if (o === F && !(u in n) || !i(o))return false
                }
                return true
            }

            function jt(n, t, r) {
                if (typeof n != "function")throw new ri("Expected a function");
                return xo(function () {
                    n.apply(F, r)
                }, t)
            }

            function wt(n, t, r, e) {
                var u = -1, i = c, o = true, f = n.length, s = [], h = t.length;
                if (!f)return s;
                r && (t = l(t, S(r))), e ? (i = a, o = false) : 200 <= t.length && (i = R, o = false, t = new qn(t));
                n:for (; ++u < f;) {
                    var p = n[u], _ = null == r ? p : r(p), p = e || 0 !== p ? p : 0;
                    if (o && _ === _) {
                        for (var v = h; v--;)if (t[v] === _)continue n;
                        s.push(p)
                    } else i(t, _, e) || s.push(p)
                }
                return s
            }

            function mt(n, t) {
                var r = true;
                return io(n, function (n, e, u) {
                    return r = !!t(n, e, u)
                }), r
            }

            function At(n, t, r) {
                for (var e = -1, u = n.length; ++e < u;) {
                    var i = n[e], o = t(i);
                    if (null != o && (f === F ? o === o && !mu(o) : r(o, f)))var f = o, c = i
                }
                return c
            }

            function kt(n, t) {
                var r = [];
                return io(n, function (n, e, u) {
                    t(n, e, u) && r.push(n)
                }), r
            }

            function Et(n, t, r, e, u) {
                var i = -1, o = n.length;
                for (r || (r = Oe), u || (u = []); ++i < o;) {
                    var f = n[i];
                    0 < t && r(f) ? 1 < t ? Et(f, t - 1, r, e, u) : s(u, f) : e || (u[u.length] = f)
                }
                return u
            }

            function Ot(n, t) {
                return n && fo(n, t, Bu)
            }

            function St(n, t) {
                return n && co(n, t, Bu)
            }

            function It(n, t) {
                return f(t, function (t) {
                    return vu(n[t])
                })
            }

            function Rt(n, t) {
                t = zr(t, n);
                for (var r = 0, e = t.length; null != n && r < e;)n = n[Te(t[r++])];
                return r && r == e ? n : F
            }

            function zt(n, t, r) {
                return t = t(n), cf(n) ? t : s(t, r(n))
            }

            function Wt(n) {
                if (null == n)return n === F ? "[object Undefined]" : "[object Null]";
                n = Xu(n);
                var t;
                if (Ai && Ai in n) {
                    var r = fi.call(n, Ai), e = n[Ai];
                    try {
                        n[Ai] = F, t = true
                    } catch (n) {
                    }
                    var u = li.call(n);
                    t && (r ? n[Ai] = e : delete n[Ai]), t = u
                } else t = li.call(n);
                return t
            }

            function Bt(n, t) {
                return n > t
            }

            function Lt(n, t) {
                return null != n && fi.call(n, t)
            }

            function Ut(n, t) {
                return null != n && t in Xu(n)
            }

            function Ct(n, t, r) {
                for (var e = r ? a : c, u = n[0].length, i = n.length, o = i, f = Gu(i), s = 1 / 0, h = []; o--;) {
                    var p = n[o];
                    o && t && (p = l(p, S(t))), s = Di(p.length, s), f[o] = !r && (t || 120 <= u && 120 <= p.length) ? new qn(o && p) : F
                }
                var p = n[0], _ = -1, v = f[0];
                n:for (; ++_ < u && h.length < s;) {
                    var g = p[_], d = t ? t(g) : g, g = r || 0 !== g ? g : 0;
                    if (v ? !R(v, d) : !e(h, d, r)) {
                        for (o = i; --o;) {
                            var y = f[o];
                            if (y ? !R(y, d) : !e(n[o], d, r))continue n
                        }
                        v && v.push(d), h.push(g)
                    }
                }
                return h
            }

            function Dt(n, t, r) {
                var e = {};
                return Ot(n, function (n, u, i) {
                    t(e, r(n), u, i)
                }), e
            }

            function Mt(n, t, e) {
                return t = zr(t, n), n = 2 > t.length ? n : Rt(n, gr(t, 0, -1)), t = null == n ? n : n[Te(Ke(t))], null == t ? F : r(t, n, e)
            }

            function Tt(n) {
                return bu(n) && "[object Arguments]" == Wt(n)
            }

            function $t(n) {
                return bu(n) && "[object ArrayBuffer]" == Wt(n)
            }

            function Ft(n) {
                return bu(n) && "[object Date]" == Wt(n);
            }

            function Nt(n, t, r, e, u) {
                if (n === t) t = true; else if (null == n || null == t || !yu(n) && !bu(t)) t = n !== n && t !== t; else n:{
                    var i = cf(n), o = cf(t), f = "[object Array]", c = "[object Array]";
                    i || (f = go(n), f = "[object Arguments]" == f ? "[object Object]" : f), o || (c = go(t), c = "[object Arguments]" == c ? "[object Object]" : c);
                    var a = "[object Object]" == f, o = "[object Object]" == c;
                    if ((c = f == c) && lf(n)) {
                        if (!lf(t)) {
                            t = false;
                            break n
                        }
                        i = true, a = false
                    }
                    if (c && !a) u || (u = new Vn), t = i || vf(n) ? he(n, t, r, e, Nt, u) : pe(n, t, f, r, e, Nt, u); else {
                        if (!(1 & r) && (i = a && fi.call(n, "__wrapped__"), f = o && fi.call(t, "__wrapped__"),
                            i || f)) {
                            n = i ? n.value() : n, t = f ? t.value() : t, u || (u = new Vn), t = Nt(n, t, r, e, u);
                            break n
                        }
                        if (c)t:if (u || (u = new Vn), i = 1 & r, f = Bu(n), o = f.length, c = Bu(t).length, o == c || i) {
                            for (a = o; a--;) {
                                var l = f[a];
                                if (!(i ? l in t : fi.call(t, l))) {
                                    t = false;
                                    break t
                                }
                            }
                            if ((c = u.get(n)) && u.get(t)) t = c == t; else {
                                c = true, u.set(n, t), u.set(t, n);
                                for (var s = i; ++a < o;) {
                                    var l = f[a], h = n[l], p = t[l];
                                    if (e)var _ = i ? e(p, h, l, t, n, u) : e(h, p, l, n, t, u);
                                    if (_ === F ? h !== p && !Nt(h, p, r, e, u) : !_) {
                                        c = false;
                                        break
                                    }
                                    s || (s = "constructor" == l)
                                }
                                c && !s && (r = n.constructor, e = t.constructor, r != e && "constructor" in n && "constructor" in t && !(typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) && (c = false)),
                                    u.delete(n), u.delete(t), t = c
                            }
                        } else t = false; else t = false
                    }
                }
                return t
            }

            function Pt(n) {
                return bu(n) && "[object Map]" == go(n)
            }

            function Zt(n, t, r, e) {
                var u = r.length, i = u, o = !e;
                if (null == n)return !i;
                for (n = Xu(n); u--;) {
                    var f = r[u];
                    if (o && f[2] ? f[1] !== n[f[0]] : !(f[0] in n))return false
                }
                for (; ++u < i;) {
                    var f = r[u], c = f[0], a = n[c], l = f[1];
                    if (o && f[2]) {
                        if (a === F && !(c in n))return false
                    } else {
                        if (f = new Vn, e)var s = e(a, l, c, n, t, f);
                        if (s === F ? !Nt(l, a, 3, e, f) : !s)return false
                    }
                }
                return true
            }

            function qt(n) {
                return !(!yu(n) || ai && ai in n) && (vu(n) ? pi : xn).test($e(n))
            }

            function Vt(n) {
                return bu(n) && "[object RegExp]" == Wt(n)
            }

            function Kt(n) {
                return bu(n) && "[object Set]" == go(n)
            }

            function Gt(n) {
                return bu(n) && du(n.length) && !!Cn[Wt(n)]
            }

            function Ht(n) {
                return typeof n == "function" ? n : null == n ? Fu : typeof n == "object" ? cf(n) ? nr(n[0], n[1]) : Xt(n) : qu(n)
            }

            function Jt(n) {
                if (!We(n))return Ui(n);
                var t, r = [];
                for (t in Xu(n))fi.call(n, t) && "constructor" != t && r.push(t);
                return r
            }

            function Yt(n, t) {
                return n < t
            }

            function Qt(n, t) {
                var r = -1, e = hu(n) ? Gu(n.length) : [];
                return io(n, function (n, u, i) {
                    e[++r] = t(n, u, i)
                }), e
            }

            function Xt(n) {
                var t = je(n);
                return 1 == t.length && t[0][2] ? Be(t[0][0], t[0][1]) : function (r) {
                    return r === n || Zt(r, n, t)
                }
            }

            function nr(n, t) {
                return Re(n) && t === t && !yu(t) ? Be(Te(n), t) : function (r) {
                    var e = zu(r, n);
                    return e === F && e === t ? Wu(r, n) : Nt(t, e, 3)
                }
            }

            function tr(n, t, r, e, u) {
                n !== t && fo(t, function (i, o) {
                    if (yu(i)) {
                        u || (u = new Vn);
                        var f = u, c = n[o], a = t[o], l = f.get(a);
                        if (l) at(n, o, l); else {
                            var l = e ? e(c, a, o + "", n, t, f) : F, s = l === F;
                            if (s) {
                                var h = cf(a), p = !h && lf(a), _ = !h && !p && vf(a), l = a;
                                h || p || _ ? cf(c) ? l = c : pu(c) ? l = Tr(c) : p ? (s = false, l = Br(a, true)) : _ ? (s = false, l = Ur(a, true)) : l = [] : ju(a) || ff(a) ? (l = c,
                                    ff(c) ? l = Iu(c) : (!yu(c) || r && vu(c)) && (l = ke(a))) : s = false
                            }
                            s && (f.set(a, l), tr(l, a, r, e, f), f.delete(a)), at(n, o, l)
                        }
                    } else f = e ? e(n[o], i, o + "", n, t, u) : F, f === F && (f = i), at(n, o, f)
                }, Lu)
            }

            function rr(n, t) {
                var r = n.length;
                if (r)return t += 0 > t ? r : 0, Se(t, r) ? n[t] : F
            }

            function er(n, t, r) {
                var e = -1;
                return t = l(t.length ? t : [Fu], S(be())), n = Qt(n, function (n) {
                    return {
                        a: l(t, function (t) {
                            return t(n)
                        }), b: ++e, c: n
                    }
                }), A(n, function (n, t) {
                    var e;
                    n:{
                        e = -1;
                        for (var u = n.a, i = t.a, o = u.length, f = r.length; ++e < o;) {
                            var c = Cr(u[e], i[e]);
                            if (c) {
                                e = e >= f ? c : c * ("desc" == r[e] ? -1 : 1);
                                break n
                            }
                        }
                        e = n.b - t.b
                    }
                    return e
                })
            }

            function ur(n, t) {
                return n = Xu(n), ir(n, t, function (t, r) {
                    return Wu(n, r)
                })
            }

            function ir(n, t, r) {
                for (var e = -1, u = t.length, i = {}; ++e < u;) {
                    var o = t[e], f = Rt(n, o);
                    r(f, o) && _r(i, zr(o, n), f)
                }
                return i
            }

            function or(n) {
                return function (t) {
                    return Rt(t, n)
                }
            }

            function fr(n, t, r, e) {
                var u = e ? y : d, i = -1, o = t.length, f = n;
                for (n === t && (t = Tr(t)), r && (f = l(n, S(r))); ++i < o;)for (var c = 0, a = t[i], a = r ? r(a) : a; -1 < (c = u(f, a, c, e));)f !== n && ji.call(f, c, 1), ji.call(n, c, 1);
                return n
            }

            function cr(n, t) {
                for (var r = n ? t.length : 0, e = r - 1; r--;) {
                    var u = t[r];
                    if (r == e || u !== i) {
                        var i = u;
                        Se(u) ? ji.call(n, u, 1) : Ar(n, u)
                    }
                }
            }

            function ar(n, t) {
                return n + Ri($i() * (t - n + 1))
            }

            function lr(n, t) {
                var r = "";
                if (!n || 1 > t || 9007199254740991 < t)return r;
                do t % 2 && (r += n), (t = Ri(t / 2)) && (n += n); while (t);
                return r
            }

            function sr(n, t) {
                return jo(Ue(n, t, Fu), n + "")
            }

            function hr(n) {
                return tt(Cu(n))
            }

            function pr(n, t) {
                var r = Cu(n);
                return Me(r, dt(t, 0, r.length))
            }

            function _r(n, t, r, e) {
                if (!yu(n))return n;
                t = zr(t, n);
                for (var u = -1, i = t.length, o = i - 1, f = n; null != f && ++u < i;) {
                    var c = Te(t[u]), a = r;
                    if (u != o) {
                        var l = f[c], a = e ? e(l, c, f) : F;
                        a === F && (a = yu(l) ? l : Se(t[u + 1]) ? [] : {})
                    }
                    lt(f, c, a), f = f[c]
                }
                return n
            }

            function vr(n) {
                return Me(Cu(n))
            }

            function gr(n, t, r) {
                var e = -1, u = n.length;
                for (0 > t && (t = -t > u ? 0 : u + t), r = r > u ? u : r, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = Gu(u); ++e < u;)r[e] = n[e + t];
                return r
            }

            function dr(n, t) {
                var r;
                return io(n, function (n, e, u) {
                    return r = t(n, e, u), !r
                }), !!r
            }

            function yr(n, t, r) {
                var e = 0, u = null == n ? e : n.length;
                if (typeof t == "number" && t === t && 2147483647 >= u) {
                    for (; e < u;) {
                        var i = e + u >>> 1, o = n[i];
                        null !== o && !mu(o) && (r ? o <= t : o < t) ? e = i + 1 : u = i
                    }
                    return u
                }
                return br(n, t, Fu, r);
            }

            function br(n, t, r, e) {
                t = r(t);
                for (var u = 0, i = null == n ? 0 : n.length, o = t !== t, f = null === t, c = mu(t), a = t === F; u < i;) {
                    var l = Ri((u + i) / 2), s = r(n[l]), h = s !== F, p = null === s, _ = s === s, v = mu(s);
                    (o ? e || _ : a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : p || v ? 0 : e ? s <= t : s < t) ? u = l + 1 : i = l
                }
                return Di(i, 4294967294)
            }

            function xr(n, t) {
                for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
                    var o = n[r], f = t ? t(o) : o;
                    if (!r || !su(f, c)) {
                        var c = f;
                        i[u++] = 0 === o ? 0 : o
                    }
                }
                return i
            }

            function jr(n) {
                return typeof n == "number" ? n : mu(n) ? P : +n
            }

            function wr(n) {
                if (typeof n == "string")return n;
                if (cf(n))return l(n, wr) + "";
                if (mu(n))return eo ? eo.call(n) : "";
                var t = n + "";
                return "0" == t && 1 / n == -N ? "-0" : t
            }

            function mr(n, t, r) {
                var e = -1, u = c, i = n.length, o = true, f = [], l = f;
                if (r) o = false, u = a; else if (200 <= i) {
                    if (u = t ? null : ho(n))return D(u);
                    o = false, u = R, l = new qn
                } else l = t ? [] : f;
                n:for (; ++e < i;) {
                    var s = n[e], h = t ? t(s) : s, s = r || 0 !== s ? s : 0;
                    if (o && h === h) {
                        for (var p = l.length; p--;)if (l[p] === h)continue n;
                        t && l.push(h), f.push(s)
                    } else u(l, h, r) || (l !== f && l.push(h), f.push(s))
                }
                return f
            }

            function Ar(n, t) {
                return t = zr(t, n), n = 2 > t.length ? n : Rt(n, gr(t, 0, -1)),
                null == n || delete n[Te(Ke(t))]
            }

            function kr(n, t, r, e) {
                for (var u = n.length, i = e ? u : -1; (e ? i-- : ++i < u) && t(n[i], i, n););
                return r ? gr(n, e ? 0 : i, e ? i + 1 : u) : gr(n, e ? i + 1 : 0, e ? u : i)
            }

            function Er(n, t) {
                var r = n;
                return r instanceof Mn && (r = r.value()), h(t, function (n, t) {
                    return t.func.apply(t.thisArg, s([n], t.args))
                }, r)
            }

            function Or(n, t, r) {
                var e = n.length;
                if (2 > e)return e ? mr(n[0]) : [];
                for (var u = -1, i = Gu(e); ++u < e;)for (var o = n[u], f = -1; ++f < e;)f != u && (i[u] = wt(i[u] || o, n[f], t, r));
                return mr(Et(i, 1), t, r)
            }

            function Sr(n, t, r) {
                for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u;)r(o, n[e], e < i ? t[e] : F);
                return o
            }

            function Ir(n) {
                return pu(n) ? n : []
            }

            function Rr(n) {
                return typeof n == "function" ? n : Fu
            }

            function zr(n, t) {
                return cf(n) ? n : Re(n, t) ? [n] : wo(Ru(n))
            }

            function Wr(n, t, r) {
                var e = n.length;
                return r = r === F ? e : r, !t && r >= e ? n : gr(n, t, r)
            }

            function Br(n, t) {
                if (t)return n.slice();
                var r = n.length, r = di ? di(r) : new n.constructor(r);
                return n.copy(r), r
            }

            function Lr(n) {
                var t = new n.constructor(n.byteLength);
                return new gi(t).set(new gi(n)), t
            }

            function Ur(n, t) {
                return new n.constructor(t ? Lr(n.buffer) : n.buffer, n.byteOffset, n.length)
            }

            function Cr(n, t) {
                if (n !== t) {
                    var r = n !== F, e = null === n, u = n === n, i = mu(n), o = t !== F, f = null === t, c = t === t,
                        a = mu(t);
                    if (!f && !a && !i && n > t || i && o && c && !f && !a || e && o && c || !r && c || !u)return 1;
                    if (!e && !i && !a && n < t || a && r && u && !e && !i || f && r && u || !o && u || !c)return -1
                }
                return 0
            }

            function Dr(n, t, r, e) {
                var u = -1, i = n.length, o = r.length, f = -1, c = t.length, a = Ci(i - o, 0), l = Gu(c + a);
                for (e = !e; ++f < c;)l[f] = t[f];
                for (; ++u < o;)(e || u < i) && (l[r[u]] = n[u]);
                for (; a--;)l[f++] = n[u++];
                return l
            }

            function Mr(n, t, r, e) {
                var u = -1, i = n.length, o = -1, f = r.length, c = -1, a = t.length, l = Ci(i - f, 0), s = Gu(l + a);
                for (e = !e; ++u < l;)s[u] = n[u];
                for (l = u; ++c < a;)s[l + c] = t[c];
                for (; ++o < f;)(e || u < i) && (s[l + r[o]] = n[u++]);
                return s
            }

            function Tr(n, t) {
                var r = -1, e = n.length;
                for (t || (t = Gu(e)); ++r < e;)t[r] = n[r];
                return t
            }

            function $r(n, t, r, e) {
                var u = !r;
                r || (r = {});
                for (var i = -1, o = t.length; ++i < o;) {
                    var f = t[i], c = e ? e(r[f], n[f], f, r, n) : F;
                    c === F && (c = n[f]), u ? vt(r, f, c) : lt(r, f, c)
                }
                return r
            }

            function Fr(n, t) {
                return $r(n, _o(n), t)
            }

            function Nr(n, t) {
                return $r(n, vo(n), t)
            }

            function Pr(n, t) {
                return function (r, u) {
                    var i = cf(r) ? e : ht, o = t ? t() : {};
                    return i(r, n, be(u, 2), o);
                }
            }

            function Zr(n) {
                return sr(function (t, r) {
                    var e = -1, u = r.length, i = 1 < u ? r[u - 1] : F, o = 2 < u ? r[2] : F,
                        i = 3 < n.length && typeof i == "function" ? (u--, i) : F;
                    for (o && Ie(r[0], r[1], o) && (i = 3 > u ? F : i, u = 1), t = Xu(t); ++e < u;)(o = r[e]) && n(t, o, e, i);
                    return t
                })
            }

            function qr(n, t) {
                return function (r, e) {
                    if (null == r)return r;
                    if (!hu(r))return n(r, e);
                    for (var u = r.length, i = t ? u : -1, o = Xu(r); (t ? i-- : ++i < u) && false !== e(o[i], i, o););
                    return r
                }
            }

            function Vr(n) {
                return function (t, r, e) {
                    var u = -1, i = Xu(t);
                    e = e(t);
                    for (var o = e.length; o--;) {
                        var f = e[n ? o : ++u];
                        if (false === r(i[f], f, i))break;
                    }
                    return t
                }
            }

            function Kr(n, t, r) {
                function e() {
                    return (this && this !== Zn && this instanceof e ? i : n).apply(u ? r : this, arguments)
                }

                var u = 1 & t, i = Jr(n);
                return e
            }

            function Gr(n) {
                return function (t) {
                    t = Ru(t);
                    var r = Bn.test(t) ? $(t) : F, e = r ? r[0] : t.charAt(0);
                    return t = r ? Wr(r, 1).join("") : t.slice(1), e[n]() + t
                }
            }

            function Hr(n) {
                return function (t) {
                    return h(Tu(Mu(t).replace(In, "")), n, "")
                }
            }

            function Jr(n) {
                return function () {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return new n;
                        case 1:
                            return new n(t[0]);
                        case 2:
                            return new n(t[0], t[1]);
                        case 3:
                            return new n(t[0], t[1], t[2]);
                        case 4:
                            return new n(t[0], t[1], t[2], t[3]);
                        case 5:
                            return new n(t[0], t[1], t[2], t[3], t[4]);
                        case 6:
                            return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
                        case 7:
                            return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                    }
                    var r = uo(n.prototype), t = n.apply(r, t);
                    return yu(t) ? t : r
                }
            }

            function Yr(n, t, e) {
                function u() {
                    for (var o = arguments.length, f = Gu(o), c = o, a = ye(u); c--;)f[c] = arguments[c];
                    return c = 3 > o && f[0] !== a && f[o - 1] !== a ? [] : C(f, a), o -= c.length, o < e ? ce(n, t, ne, u.placeholder, F, f, c, F, F, e - o) : r(this && this !== Zn && this instanceof u ? i : n, this, f);
                }

                var i = Jr(n);
                return u
            }

            function Qr(n) {
                return function (t, r, e) {
                    var u = Xu(t);
                    if (!hu(t)) {
                        var i = be(r, 3);
                        t = Bu(t), r = function (n) {
                            return i(u[n], n, u)
                        }
                    }
                    return r = n(t, r, e), -1 < r ? u[i ? t[r] : r] : F
                }
            }

            function Xr(n) {
                return _e(function (t) {
                    var r = t.length, e = r, u = zn.prototype.thru;
                    for (n && t.reverse(); e--;) {
                        var i = t[e];
                        if (typeof i != "function")throw new ri("Expected a function");
                        if (u && !o && "wrapper" == de(i))var o = new zn([], true)
                    }
                    for (e = o ? e : r; ++e < r;)var i = t[e], u = de(i), f = "wrapper" == u ? po(i) : F, o = f && ze(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? o[de(f[0])].apply(o, f[3]) : 1 == i.length && ze(i) ? o[u]() : o.thru(i);
                    return function () {
                        var n = arguments, e = n[0];
                        if (o && 1 == n.length && cf(e) && 200 <= e.length)return o.plant(e).value();
                        for (var u = 0, n = r ? t[u].apply(this, n) : e; ++u < r;)n = t[u].call(this, n);
                        return n
                    }
                })
            }

            function ne(n, t, r, e, u, i, o, f, c, a) {
                function l() {
                    for (var d = arguments.length, y = Gu(d), b = d; b--;)y[b] = arguments[b];
                    if (_) {
                        var x, j = ye(l), b = y.length;
                        for (x = 0; b--;)y[b] === j && ++x
                    }
                    if (e && (y = Dr(y, e, u, _)), i && (y = Mr(y, i, o, _)), d -= x, _ && d < a)return j = C(y, j), ce(n, t, ne, l.placeholder, r, y, j, f, c, a - d);
                    if (j = h ? r : this, b = p ? j[n] : n, d = y.length, f) {
                        x = y.length;
                        for (var w = Di(f.length, x), m = Tr(y); w--;) {
                            var A = f[w];
                            y[w] = Se(A, x) ? m[A] : F
                        }
                    } else v && 1 < d && y.reverse();
                    return s && c < d && (y.length = c), this && this !== Zn && this instanceof l && (b = g || Jr(b)), b.apply(j, y)
                }

                var s = 128 & t, h = 1 & t, p = 2 & t, _ = 24 & t, v = 512 & t, g = p ? F : Jr(n);
                return l
            }

            function te(n, t) {
                return function (r, e) {
                    return Dt(r, n, t(e))
                }
            }

            function re(n, t) {
                return function (r, e) {
                    var u;
                    if (r === F && e === F)return t;
                    if (r !== F && (u = r), e !== F) {
                        if (u === F)return e;
                        typeof r == "string" || typeof e == "string" ? (r = wr(r), e = wr(e)) : (r = jr(r), e = jr(e)), u = n(r, e)
                    }
                    return u;
                }
            }

            function ee(n) {
                return _e(function (t) {
                    return t = l(t, S(be())), sr(function (e) {
                        var u = this;
                        return n(t, function (n) {
                            return r(n, u, e)
                        })
                    })
                })
            }

            function ue(n, t) {
                t = t === F ? " " : wr(t);
                var r = t.length;
                return 2 > r ? r ? lr(t, n) : t : (r = lr(t, Ii(n / T(t))), Bn.test(t) ? Wr($(r), 0, n).join("") : r.slice(0, n))
            }

            function ie(n, t, e, u) {
                function i() {
                    for (var t = -1, c = arguments.length, a = -1, l = u.length, s = Gu(l + c), h = this && this !== Zn && this instanceof i ? f : n; ++a < l;)s[a] = u[a];
                    for (; c--;)s[a++] = arguments[++t];
                    return r(h, o ? e : this, s)
                }

                var o = 1 & t, f = Jr(n);
                return i;
            }

            function oe(n) {
                return function (t, r, e) {
                    e && typeof e != "number" && Ie(t, r, e) && (r = e = F), t = ku(t), r === F ? (r = t, t = 0) : r = ku(r), e = e === F ? t < r ? 1 : -1 : ku(e);
                    var u = -1;
                    r = Ci(Ii((r - t) / (e || 1)), 0);
                    for (var i = Gu(r); r--;)i[n ? r : ++u] = t, t += e;
                    return i
                }
            }

            function fe(n) {
                return function (t, r) {
                    return typeof t == "string" && typeof r == "string" || (t = Su(t), r = Su(r)), n(t, r)
                }
            }

            function ce(n, t, r, e, u, i, o, f, c, a) {
                var l = 8 & t, s = l ? o : F;
                o = l ? F : o;
                var h = l ? i : F;
                return i = l ? F : i, t = (t | (l ? 32 : 64)) & ~(l ? 64 : 32), 4 & t || (t &= -4), u = [n, t, u, h, s, i, o, f, c, a], r = r.apply(F, u), ze(n) && bo(r, u),
                    r.placeholder = e, Ce(r, n, t)
            }

            function ae(n) {
                var t = Qu[n];
                return function (n, r) {
                    if (n = Su(n), r = Di(Eu(r), 292)) {
                        var e = (Ru(n) + "e").split("e"), e = t(e[0] + "e" + (+e[1] + r)), e = (Ru(e) + "e").split("e");
                        return +(e[0] + "e" + (+e[1] - r))
                    }
                    return t(n)
                }
            }

            function le(n) {
                return function (t) {
                    var r = go(t);
                    return "[object Map]" == r ? L(t) : "[object Set]" == r ? M(t) : O(t, n(t))
                }
            }

            function se(n, t, r, e, u, i, o, f) {
                var c = 2 & t;
                if (!c && typeof n != "function")throw new ri("Expected a function");
                var a = e ? e.length : 0;
                if (a || (t &= -97, e = u = F), o = o === F ? o : Ci(Eu(o), 0), f = f === F ? f : Eu(f),
                        a -= u ? u.length : 0, 64 & t) {
                    var l = e, s = u;
                    e = u = F
                }
                var h = c ? F : po(n);
                return i = [n, t, r, e, u, l, s, i, o, f], h && (r = i[1], n = h[1], t = r | n, e = 128 == n && 8 == r || 128 == n && 256 == r && i[7].length <= h[8] || 384 == n && h[7].length <= h[8] && 8 == r, 131 > t || e) && (1 & n && (i[2] = h[2], t |= 1 & r ? 0 : 4), (r = h[3]) && (e = i[3], i[3] = e ? Dr(e, r, h[4]) : r, i[4] = e ? C(i[3], "__lodash_placeholder__") : h[4]), (r = h[5]) && (e = i[5], i[5] = e ? Mr(e, r, h[6]) : r, i[6] = e ? C(i[5], "__lodash_placeholder__") : h[6]), (r = h[7]) && (i[7] = r), 128 & n && (i[8] = null == i[8] ? h[8] : Di(i[8], h[8])), null == i[9] && (i[9] = h[9]), i[0] = h[0],
                    i[1] = t), n = i[0], t = i[1], r = i[2], e = i[3], u = i[4], f = i[9] = null == i[9] ? c ? 0 : n.length : Ci(i[9] - a, 0), !f && 24 & t && (t &= -25), Ce((h ? ao : bo)(t && 1 != t ? 8 == t || 16 == t ? Yr(n, t, f) : 32 != t && 33 != t || u.length ? ne.apply(F, i) : ie(n, t, r, e) : Kr(n, t, r), i), n, t)
            }

            function he(n, t, r, e, u, i) {
                var o = 1 & r, f = n.length, c = t.length;
                if (f != c && !(o && c > f))return false;
                if ((c = i.get(n)) && i.get(t))return c == t;
                var c = -1, a = true, l = 2 & r ? new qn : F;
                for (i.set(n, t), i.set(t, n); ++c < f;) {
                    var s = n[c], h = t[c];
                    if (e)var p = o ? e(h, s, c, t, n, i) : e(s, h, c, n, t, i);
                    if (p !== F) {
                        if (p)continue;
                        a = false;
                        break
                    }
                    if (l) {
                        if (!_(t, function (n, t) {
                                if (!R(l, t) && (s === n || u(s, n, r, e, i)))return l.push(t)
                            })) {
                            a = false;
                            break
                        }
                    } else if (s !== h && !u(s, h, r, e, i)) {
                        a = false;
                        break
                    }
                }
                return i.delete(n), i.delete(t), a
            }

            function pe(n, t, r, e, u, i, o) {
                switch (r) {
                    case"[object DataView]":
                        if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset)break;
                        n = n.buffer, t = t.buffer;
                    case"[object ArrayBuffer]":
                        if (n.byteLength != t.byteLength || !i(new gi(n), new gi(t)))break;
                        return true;
                    case"[object Boolean]":
                    case"[object Date]":
                    case"[object Number]":
                        return su(+n, +t);
                    case"[object Error]":
                        return n.name == t.name && n.message == t.message;
                    case"[object RegExp]":
                    case"[object String]":
                        return n == t + "";
                    case"[object Map]":
                        var f = L;
                    case"[object Set]":
                        if (f || (f = D), n.size != t.size && !(1 & e))break;
                        return (r = o.get(n)) ? r == t : (e |= 2, o.set(n, t), t = he(f(n), f(t), e, u, i, o), o.delete(n), t);
                    case"[object Symbol]":
                        if (ro)return ro.call(n) == ro.call(t)
                }
                return false
            }

            function _e(n) {
                return jo(Ue(n, F, qe), n + "")
            }

            function ve(n) {
                return zt(n, Bu, _o)
            }

            function ge(n) {
                return zt(n, Lu, vo)
            }

            function de(n) {
                for (var t = n.name + "", r = Hi[t], e = fi.call(Hi, t) ? r.length : 0; e--;) {
                    var u = r[e], i = u.func;
                    if (null == i || i == n)return u.name
                }
                return t
            }

            function ye(n) {
                return (fi.call(On, "placeholder") ? On : n).placeholder
            }

            function be() {
                var n = On.iteratee || Nu, n = n === Nu ? Ht : n;
                return arguments.length ? n(arguments[0], arguments[1]) : n
            }

            function xe(n, t) {
                var r = n.__data__, e = typeof t;
                return ("string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
            }

            function je(n) {
                for (var t = Bu(n), r = t.length; r--;) {
                    var e = t[r], u = n[e];
                    t[r] = [e, u, u === u && !yu(u)]
                }
                return t;
            }

            function we(n, t) {
                var r = null == n ? F : n[t];
                return qt(r) ? r : F
            }

            function me(n, t, r) {
                t = zr(t, n);
                for (var e = -1, u = t.length, i = false; ++e < u;) {
                    var o = Te(t[e]);
                    if (!(i = null != n && r(n, o)))break;
                    n = n[o]
                }
                return i || ++e != u ? i : (u = null == n ? 0 : n.length, !!u && du(u) && Se(o, u) && (cf(n) || ff(n)))
            }

            function Ae(n) {
                var t = n.length, r = n.constructor(t);
                return t && "string" == typeof n[0] && fi.call(n, "index") && (r.index = n.index, r.input = n.input), r
            }

            function ke(n) {
                return typeof n.constructor != "function" || We(n) ? {} : uo(yi(n))
            }

            function Ee(r, e, u, i) {
                var o = r.constructor;
                switch (e) {
                    case"[object ArrayBuffer]":
                        return Lr(r);
                    case"[object Boolean]":
                    case"[object Date]":
                        return new o(+r);
                    case"[object DataView]":
                        return e = i ? Lr(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.byteLength);
                    case"[object Float32Array]":
                    case"[object Float64Array]":
                    case"[object Int8Array]":
                    case"[object Int16Array]":
                    case"[object Int32Array]":
                    case"[object Uint8Array]":
                    case"[object Uint8ClampedArray]":
                    case"[object Uint16Array]":
                    case"[object Uint32Array]":
                        return Ur(r, i);
                    case"[object Map]":
                        return e = i ? u(L(r), 1) : L(r),
                            h(e, n, new r.constructor);
                    case"[object Number]":
                    case"[object String]":
                        return new o(r);
                    case"[object RegExp]":
                        return e = new r.constructor(r.source, dn.exec(r)), e.lastIndex = r.lastIndex, e;
                    case"[object Set]":
                        return e = i ? u(D(r), 1) : D(r), h(e, t, new r.constructor);
                    case"[object Symbol]":
                        return ro ? Xu(ro.call(r)) : {}
                }
            }

            function Oe(n) {
                return cf(n) || ff(n) || !!(wi && n && n[wi])
            }

            function Se(n, t) {
                return t = null == t ? 9007199254740991 : t, !!t && (typeof n == "number" || wn.test(n)) && -1 < n && 0 == n % 1 && n < t
            }

            function Ie(n, t, r) {
                if (!yu(r))return false;
                var e = typeof t;
                return !!("number" == e ? hu(r) && Se(t, r.length) : "string" == e && t in r) && su(r[t], n)
            }

            function Re(n, t) {
                if (cf(n))return false;
                var r = typeof n;
                return !("number" != r && "symbol" != r && "boolean" != r && null != n && !mu(n)) || (rn.test(n) || !tn.test(n) || null != t && n in Xu(t))
            }

            function ze(n) {
                var t = de(n), r = On[t];
                return typeof r == "function" && t in Mn.prototype && (n === r || (t = po(r), !!t && n === t[0]))
            }

            function We(n) {
                var t = n && n.constructor;
                return n === (typeof t == "function" && t.prototype || ui)
            }

            function Be(n, t) {
                return function (r) {
                    return null != r && (r[n] === t && (t !== F || n in Xu(r)));
                }
            }

            function Le(n, t, r, e, u, i) {
                return yu(n) && yu(t) && (i.set(t, n), tr(n, t, F, Le, i), i.delete(t)), n
            }

            function Ue(n, t, e) {
                return t = Ci(t === F ? n.length - 1 : t, 0), function () {
                    for (var u = arguments, i = -1, o = Ci(u.length - t, 0), f = Gu(o); ++i < o;)f[i] = u[t + i];
                    for (i = -1, o = Gu(t + 1); ++i < t;)o[i] = u[i];
                    return o[t] = e(f), r(n, this, o)
                }
            }

            function Ce(n, t, r) {
                var e = t + "";
                t = jo;
                var u, i = Fe;
                return u = (u = e.match(hn)) ? u[1].split(pn) : [], r = i(u, r), (i = r.length) && (u = i - 1, r[u] = (1 < i ? "& " : "") + r[u], r = r.join(2 < i ? ", " : " "), e = e.replace(sn, "{\n/* [wrapped with " + r + "] */\n")),
                    t(n, e)
            }

            function De(n) {
                var t = 0, r = 0;
                return function () {
                    var e = Mi(), u = 16 - (e - r);
                    if (r = e, 0 < u) {
                        if (800 <= ++t)return arguments[0]
                    } else t = 0;
                    return n.apply(F, arguments)
                }
            }

            function Me(n, t) {
                var r = -1, e = n.length, u = e - 1;
                for (t = t === F ? e : t; ++r < t;) {
                    var e = ar(r, u), i = n[e];
                    n[e] = n[r], n[r] = i
                }
                return n.length = t, n
            }

            function Te(n) {
                if (typeof n == "string" || mu(n))return n;
                var t = n + "";
                return "0" == t && 1 / n == -N ? "-0" : t
            }

            function $e(n) {
                if (null != n) {
                    try {
                        return oi.call(n)
                    } catch (n) {
                    }
                    return n + ""
                }
                return ""
            }

            function Fe(n, t) {
                return u(Z, function (r) {
                    var e = "_." + r[0];
                    t & r[1] && !c(n, e) && n.push(e)
                }), n.sort()
            }

            function Ne(n) {
                if (n instanceof Mn)return n.clone();
                var t = new zn(n.__wrapped__, n.__chain__);
                return t.__actions__ = Tr(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t
            }

            function Pe(n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (r = null == r ? 0 : Eu(r), 0 > r && (r = Ci(e + r, 0)), g(n, be(t, 3), r)) : -1
            }

            function Ze(n, t, r) {
                var e = null == n ? 0 : n.length;
                if (!e)return -1;
                var u = e - 1;
                return r !== F && (u = Eu(r), u = 0 > r ? Ci(e + u, 0) : Di(u, e - 1)), g(n, be(t, 3), u, true)
            }

            function qe(n) {
                return (null == n ? 0 : n.length) ? Et(n, 1) : [];
            }

            function Ve(n) {
                return n && n.length ? n[0] : F
            }

            function Ke(n) {
                var t = null == n ? 0 : n.length;
                return t ? n[t - 1] : F
            }

            function Ge(n, t) {
                return n && n.length && t && t.length ? fr(n, t) : n
            }

            function He(n) {
                return null == n ? n : Fi.call(n)
            }

            function Je(n) {
                if (!n || !n.length)return [];
                var t = 0;
                return n = f(n, function (n) {
                    if (pu(n))return t = Ci(n.length, t), true
                }), E(t, function (t) {
                    return l(n, j(t))
                })
            }

            function Ye(n, t) {
                if (!n || !n.length)return [];
                var e = Je(n);
                return null == t ? e : l(e, function (n) {
                    return r(t, F, n)
                })
            }

            function Qe(n) {
                return n = On(n), n.__chain__ = true, n;
            }

            function Xe(n, t) {
                return t(n)
            }

            function nu() {
                return this
            }

            function tu(n, t) {
                return (cf(n) ? u : io)(n, be(t, 3))
            }

            function ru(n, t) {
                return (cf(n) ? i : oo)(n, be(t, 3))
            }

            function eu(n, t) {
                return (cf(n) ? l : Qt)(n, be(t, 3))
            }

            function uu(n, t, r) {
                return t = r ? F : t, t = n && null == t ? n.length : t, se(n, 128, F, F, F, F, t)
            }

            function iu(n, t) {
                var r;
                if (typeof t != "function")throw new ri("Expected a function");
                return n = Eu(n), function () {
                    return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = F), r
                }
            }

            function ou(n, t, r) {
                return t = r ? F : t, n = se(n, 8, F, F, F, F, F, t), n.placeholder = ou.placeholder,
                    n
            }

            function fu(n, t, r) {
                return t = r ? F : t, n = se(n, 16, F, F, F, F, F, t), n.placeholder = fu.placeholder, n
            }

            function cu(n, t, r) {
                function e(t) {
                    var r = c, e = a;
                    return c = a = F, _ = t, s = n.apply(e, r)
                }

                function u(n) {
                    var r = n - p;
                    return n -= _, p === F || r >= t || 0 > r || g && n >= l
                }

                function i() {
                    var n = Ho();
                    if (u(n))return o(n);
                    var r, e = xo;
                    r = n - _, n = t - (n - p), r = g ? Di(n, l - r) : n, h = e(i, r)
                }

                function o(n) {
                    return h = F, d && c ? e(n) : (c = a = F, s)
                }

                function f() {
                    var n = Ho(), r = u(n);
                    if (c = arguments, a = this, p = n, r) {
                        if (h === F)return _ = n = p, h = xo(i, t), v ? e(n) : s;
                        if (g)return h = xo(i, t), e(p)
                    }
                    return h === F && (h = xo(i, t)),
                        s
                }

                var c, a, l, s, h, p, _ = 0, v = false, g = false, d = true;
                if (typeof n != "function")throw new ri("Expected a function");
                return t = Su(t) || 0, yu(r) && (v = !!r.leading, l = (g = "maxWait" in r) ? Ci(Su(r.maxWait) || 0, t) : l, d = "trailing" in r ? !!r.trailing : d), f.cancel = function () {
                    h !== F && so(h), _ = 0, c = p = a = h = F
                }, f.flush = function () {
                    return h === F ? s : o(Ho())
                }, f
            }

            function au(n, t) {
                function r() {
                    var e = arguments, u = t ? t.apply(this, e) : e[0], i = r.cache;
                    return i.has(u) ? i.get(u) : (e = n.apply(this, e), r.cache = i.set(u, e) || i, e)
                }

                if (typeof n != "function" || null != t && typeof t != "function")throw new ri("Expected a function");
                return r.cache = new (au.Cache || Pn), r
            }

            function lu(n) {
                if (typeof n != "function")throw new ri("Expected a function");
                return function () {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return !n.call(this);
                        case 1:
                            return !n.call(this, t[0]);
                        case 2:
                            return !n.call(this, t[0], t[1]);
                        case 3:
                            return !n.call(this, t[0], t[1], t[2])
                    }
                    return !n.apply(this, t)
                }
            }

            function su(n, t) {
                return n === t || n !== n && t !== t
            }

            function hu(n) {
                return null != n && du(n.length) && !vu(n)
            }

            function pu(n) {
                return bu(n) && hu(n)
            }

            function _u(n) {
                if (!bu(n))return false;
                var t = Wt(n);
                return "[object Error]" == t || "[object DOMException]" == t || typeof n.message == "string" && typeof n.name == "string" && !ju(n);
            }

            function vu(n) {
                return !!yu(n) && (n = Wt(n), "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n)
            }

            function gu(n) {
                return typeof n == "number" && n == Eu(n)
            }

            function du(n) {
                return typeof n == "number" && -1 < n && 0 == n % 1 && 9007199254740991 >= n
            }

            function yu(n) {
                var t = typeof n;
                return null != n && ("object" == t || "function" == t)
            }

            function bu(n) {
                return null != n && typeof n == "object"
            }

            function xu(n) {
                return typeof n == "number" || bu(n) && "[object Number]" == Wt(n)
            }

            function ju(n) {
                return !(!bu(n) || "[object Object]" != Wt(n)) && (n = yi(n),
                    null === n || (n = fi.call(n, "constructor") && n.constructor, typeof n == "function" && n instanceof n && oi.call(n) == si))
            }

            function wu(n) {
                return typeof n == "string" || !cf(n) && bu(n) && "[object String]" == Wt(n)
            }

            function mu(n) {
                return typeof n == "symbol" || bu(n) && "[object Symbol]" == Wt(n)
            }

            function Au(n) {
                if (!n)return [];
                if (hu(n))return wu(n) ? $(n) : Tr(n);
                if (mi && n[mi]) {
                    n = n[mi]();
                    for (var t, r = []; !(t = n.next()).done;)r.push(t.value);
                    return r
                }
                return t = go(n), ("[object Map]" == t ? L : "[object Set]" == t ? D : Cu)(n)
            }

            function ku(n) {
                return n ? (n = Su(n),
                    n === N || n === -N ? 1.7976931348623157e308 * (0 > n ? -1 : 1) : n === n ? n : 0) : 0 === n ? n : 0
            }

            function Eu(n) {
                n = ku(n);
                var t = n % 1;
                return n === n ? t ? n - t : n : 0
            }

            function Ou(n) {
                return n ? dt(Eu(n), 0, 4294967295) : 0
            }

            function Su(n) {
                if (typeof n == "number")return n;
                if (mu(n))return P;
                if (yu(n) && (n = typeof n.valueOf == "function" ? n.valueOf() : n, n = yu(n) ? n + "" : n), typeof n != "string")return 0 === n ? n : +n;
                n = n.replace(cn, "");
                var t = bn.test(n);
                return t || jn.test(n) ? Fn(n.slice(2), t ? 2 : 8) : yn.test(n) ? P : +n
            }

            function Iu(n) {
                return $r(n, Lu(n))
            }

            function Ru(n) {
                return null == n ? "" : wr(n);
            }

            function zu(n, t, r) {
                return n = null == n ? F : Rt(n, t), n === F ? r : n
            }

            function Wu(n, t) {
                return null != n && me(n, t, Ut)
            }

            function Bu(n) {
                return hu(n) ? Gn(n) : Jt(n)
            }

            function Lu(n) {
                if (hu(n)) n = Gn(n, true); else if (yu(n)) {
                    var t, r = We(n), e = [];
                    for (t in n)("constructor" != t || !r && fi.call(n, t)) && e.push(t);
                    n = e
                } else {
                    if (t = [], null != n)for (r in Xu(n))t.push(r);
                    n = t
                }
                return n
            }

            function Uu(n, t) {
                if (null == n)return {};
                var r = l(ge(n), function (n) {
                    return [n]
                });
                return t = be(t), ir(n, r, function (n, r) {
                    return t(n, r[0])
                })
            }

            function Cu(n) {
                return null == n ? [] : I(n, Bu(n));
            }

            function Du(n) {
                return Ff(Ru(n).toLowerCase())
            }

            function Mu(n) {
                return (n = Ru(n)) && n.replace(mn, rt).replace(Rn, "")
            }

            function Tu(n, t, r) {
                return n = Ru(n), t = r ? F : t, t === F ? Ln.test(n) ? n.match(Wn) || [] : n.match(_n) || [] : n.match(t) || []
            }

            function $u(n) {
                return function () {
                    return n
                }
            }

            function Fu(n) {
                return n
            }

            function Nu(n) {
                return Ht(typeof n == "function" ? n : yt(n, 1))
            }

            function Pu(n, t, r) {
                var e = Bu(t), i = It(t, e);
                null != r || yu(t) && (i.length || !e.length) || (r = t, t = n, n = this, i = It(t, Bu(t)));
                var o = !(yu(r) && "chain" in r && !r.chain), f = vu(n);
                return u(i, function (r) {
                    var e = t[r];
                    n[r] = e, f && (n.prototype[r] = function () {
                        var t = this.__chain__;
                        if (o || t) {
                            var r = n(this.__wrapped__);
                            return (r.__actions__ = Tr(this.__actions__)).push({
                                func: e,
                                args: arguments,
                                thisArg: n
                            }), r.__chain__ = t, r
                        }
                        return e.apply(n, s([this.value()], arguments))
                    })
                }), n
            }

            function Zu() {
            }

            function qu(n) {
                return Re(n) ? j(Te(n)) : or(n)
            }

            function Vu() {
                return []
            }

            function Ku() {
                return false
            }

            En = null == En ? Zn : it.defaults(Zn.Object(), En, it.pick(Zn, Un));
            var Gu = En.Array, Hu = En.Date, Ju = En.Error, Yu = En.Function, Qu = En.Math, Xu = En.Object, ni = En.RegExp,
                ti = En.String, ri = En.TypeError, ei = Gu.prototype, ui = Xu.prototype, ii = En["__core-js_shared__"],
                oi = Yu.prototype.toString, fi = ui.hasOwnProperty, ci = 0, ai = function () {
                    var n = /[^.]+$/.exec(ii && ii.keys && ii.keys.IE_PROTO || "");
                    return n ? "Symbol(src)_1." + n : ""
                }(), li = ui.toString, si = oi.call(Xu), hi = Zn._,
                pi = ni("^" + oi.call(fi).replace(on, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                _i = Kn ? En.Buffer : F, vi = En.Symbol, gi = En.Uint8Array, di = _i ? _i.f : F,
                yi = U(Xu.getPrototypeOf, Xu), bi = Xu.create, xi = ui.propertyIsEnumerable, ji = ei.splice,
                wi = vi ? vi.isConcatSpreadable : F, mi = vi ? vi.iterator : F, Ai = vi ? vi.toStringTag : F,
                ki = function () {
                    try {
                        var n = we(Xu, "defineProperty");
                        return n({}, "", {}), n
                    } catch (n) {
                    }
                }(), Ei = En.clearTimeout !== Zn.clearTimeout && En.clearTimeout,
                Oi = Hu && Hu.now !== Zn.Date.now && Hu.now, Si = En.setTimeout !== Zn.setTimeout && En.setTimeout,
                Ii = Qu.ceil, Ri = Qu.floor, zi = Xu.getOwnPropertySymbols, Wi = _i ? _i.isBuffer : F, Bi = En.isFinite,
                Li = ei.join, Ui = U(Xu.keys, Xu), Ci = Qu.max, Di = Qu.min, Mi = Hu.now, Ti = En.parseInt, $i = Qu.random,
                Fi = ei.reverse, Ni = we(En, "DataView"), Pi = we(En, "Map"), Zi = we(En, "Promise"), qi = we(En, "Set"),
                Vi = we(En, "WeakMap"), Ki = we(Xu, "create"), Gi = Vi && new Vi, Hi = {}, Ji = $e(Ni), Yi = $e(Pi),
                Qi = $e(Zi), Xi = $e(qi), no = $e(Vi), to = vi ? vi.prototype : F, ro = to ? to.valueOf : F,
                eo = to ? to.toString : F, uo = function () {
                    function n() {
                    }

                    return function (t) {
                        return yu(t) ? bi ? bi(t) : (n.prototype = t, t = new n, n.prototype = F, t) : {}
                    }
                }();
            On.templateSettings = {
                escape: Q,
                evaluate: X,
                interpolate: nn,
                variable: "",
                imports: {_: On}
            }, On.prototype = Sn.prototype, On.prototype.constructor = On, zn.prototype = uo(Sn.prototype), zn.prototype.constructor = zn, Mn.prototype = uo(Sn.prototype), Mn.prototype.constructor = Mn, Tn.prototype.clear = function () {
                this.__data__ = Ki ? Ki(null) : {}, this.size = 0
            }, Tn.prototype.delete = function (n) {
                return n = this.has(n) && delete this.__data__[n],
                    this.size -= n ? 1 : 0, n
            }, Tn.prototype.get = function (n) {
                var t = this.__data__;
                return Ki ? (n = t[n], "__lodash_hash_undefined__" === n ? F : n) : fi.call(t, n) ? t[n] : F
            }, Tn.prototype.has = function (n) {
                var t = this.__data__;
                return Ki ? t[n] !== F : fi.call(t, n)
            }, Tn.prototype.set = function (n, t) {
                var r = this.__data__;
                return this.size += this.has(n) ? 0 : 1, r[n] = Ki && t === F ? "__lodash_hash_undefined__" : t, this
            }, Nn.prototype.clear = function () {
                this.__data__ = [], this.size = 0
            }, Nn.prototype.delete = function (n) {
                var t = this.__data__;
                return n = st(t, n), !(0 > n) && (n == t.length - 1 ? t.pop() : ji.call(t, n, 1),
                    --this.size, true)
            }, Nn.prototype.get = function (n) {
                var t = this.__data__;
                return n = st(t, n), 0 > n ? F : t[n][1]
            }, Nn.prototype.has = function (n) {
                return -1 < st(this.__data__, n)
            }, Nn.prototype.set = function (n, t) {
                var r = this.__data__, e = st(r, n);
                return 0 > e ? (++this.size, r.push([n, t])) : r[e][1] = t, this
            }, Pn.prototype.clear = function () {
                this.size = 0, this.__data__ = {hash: new Tn, map: new (Pi || Nn), string: new Tn}
            }, Pn.prototype.delete = function (n) {
                return n = xe(this, n).delete(n), this.size -= n ? 1 : 0, n
            }, Pn.prototype.get = function (n) {
                return xe(this, n).get(n);
            }, Pn.prototype.has = function (n) {
                return xe(this, n).has(n)
            }, Pn.prototype.set = function (n, t) {
                var r = xe(this, n), e = r.size;
                return r.set(n, t), this.size += r.size == e ? 0 : 1, this
            }, qn.prototype.add = qn.prototype.push = function (n) {
                return this.__data__.set(n, "__lodash_hash_undefined__"), this
            }, qn.prototype.has = function (n) {
                return this.__data__.has(n)
            }, Vn.prototype.clear = function () {
                this.__data__ = new Nn, this.size = 0
            }, Vn.prototype.delete = function (n) {
                var t = this.__data__;
                return n = t.delete(n), this.size = t.size, n
            }, Vn.prototype.get = function (n) {
                return this.__data__.get(n)
            }, Vn.prototype.has = function (n) {
                return this.__data__.has(n)
            }, Vn.prototype.set = function (n, t) {
                var r = this.__data__;
                if (r instanceof Nn) {
                    var e = r.__data__;
                    if (!Pi || 199 > e.length)return e.push([n, t]), this.size = ++r.size, this;
                    r = this.__data__ = new Pn(e)
                }
                return r.set(n, t), this.size = r.size, this
            };
            var io = qr(Ot), oo = qr(St, true), fo = Vr(), co = Vr(true), ao = Gi ? function (n, t) {
                return Gi.set(n, t), n
            } : Fu, lo = ki ? function (n, t) {
                return ki(n, "toString", {configurable: true, enumerable: false, value: $u(t), writable: true})
            } : Fu, so = Ei || function (n) {
                    return Zn.clearTimeout(n)
                }, ho = qi && 1 / D(new qi([, -0]))[1] == N ? function (n) {
                return new qi(n)
            } : Zu, po = Gi ? function (n) {
                return Gi.get(n)
            } : Zu, _o = zi ? U(zi, Xu) : Vu, vo = zi ? function (n) {
                for (var t = []; n;)s(t, _o(n)), n = yi(n);
                return t
            } : Vu, go = Wt;
            (Ni && "[object DataView]" != go(new Ni(new ArrayBuffer(1))) || Pi && "[object Map]" != go(new Pi) || Zi && "[object Promise]" != go(Zi.resolve()) || qi && "[object Set]" != go(new qi) || Vi && "[object WeakMap]" != go(new Vi)) && (go = function (n) {
                var t = Wt(n);
                if (n = (n = "[object Object]" == t ? n.constructor : F) ? $e(n) : "")switch (n) {
                    case Ji:
                        return "[object DataView]";
                    case Yi:
                        return "[object Map]";
                    case Qi:
                        return "[object Promise]";
                    case Xi:
                        return "[object Set]";
                    case no:
                        return "[object WeakMap]"
                }
                return t
            });
            var yo = ii ? vu : Ku, bo = De(ao), xo = Si || function (n, t) {
                    return Zn.setTimeout(n, t)
                }, jo = De(lo), wo = function (n) {
                n = au(n, function (n) {
                    return 500 === t.size && t.clear(), n
                });
                var t = n.cache;
                return n
            }(function (n) {
                var t = [];
                return en.test(n) && t.push(""), n.replace(un, function (n, r, e, u) {
                    t.push(e ? u.replace(vn, "$1") : r || n)
                }), t
            }), mo = sr(function (n, t) {
                return pu(n) ? wt(n, Et(t, 1, pu, true)) : [];
            }), Ao = sr(function (n, t) {
                var r = Ke(t);
                return pu(r) && (r = F), pu(n) ? wt(n, Et(t, 1, pu, true), be(r, 2)) : []
            }), ko = sr(function (n, t) {
                var r = Ke(t);
                return pu(r) && (r = F), pu(n) ? wt(n, Et(t, 1, pu, true), F, r) : []
            }), Eo = sr(function (n) {
                var t = l(n, Ir);
                return t.length && t[0] === n[0] ? Ct(t) : []
            }), Oo = sr(function (n) {
                var t = Ke(n), r = l(n, Ir);
                return t === Ke(r) ? t = F : r.pop(), r.length && r[0] === n[0] ? Ct(r, be(t, 2)) : []
            }), So = sr(function (n) {
                var t = Ke(n), r = l(n, Ir);
                return (t = typeof t == "function" ? t : F) && r.pop(), r.length && r[0] === n[0] ? Ct(r, F, t) : []
            }), Io = sr(Ge), Ro = _e(function (n, t) {
                var r = null == n ? 0 : n.length, e = gt(n, t);
                return cr(n, l(t, function (n) {
                    return Se(n, r) ? +n : n
                }).sort(Cr)), e
            }), zo = sr(function (n) {
                return mr(Et(n, 1, pu, true))
            }), Wo = sr(function (n) {
                var t = Ke(n);
                return pu(t) && (t = F), mr(Et(n, 1, pu, true), be(t, 2))
            }), Bo = sr(function (n) {
                var t = Ke(n), t = typeof t == "function" ? t : F;
                return mr(Et(n, 1, pu, true), F, t)
            }), Lo = sr(function (n, t) {
                return pu(n) ? wt(n, t) : []
            }), Uo = sr(function (n) {
                return Or(f(n, pu))
            }), Co = sr(function (n) {
                var t = Ke(n);
                return pu(t) && (t = F), Or(f(n, pu), be(t, 2))
            }), Do = sr(function (n) {
                var t = Ke(n), t = typeof t == "function" ? t : F;
                return Or(f(n, pu), F, t)
            }), Mo = sr(Je), To = sr(function (n) {
                var t = n.length, t = 1 < t ? n[t - 1] : F, t = typeof t == "function" ? (n.pop(), t) : F;
                return Ye(n, t)
            }), $o = _e(function (n) {
                function t(t) {
                    return gt(t, n)
                }

                var r = n.length, e = r ? n[0] : 0, u = this.__wrapped__;
                return !(1 < r || this.__actions__.length) && u instanceof Mn && Se(e) ? (u = u.slice(e, +e + (r ? 1 : 0)), u.__actions__.push({
                    func: Xe,
                    args: [t],
                    thisArg: F
                }), new zn(u, this.__chain__).thru(function (n) {
                    return r && !n.length && n.push(F), n
                })) : this.thru(t)
            }), Fo = Pr(function (n, t, r) {
                fi.call(n, r) ? ++n[r] : vt(n, r, 1);
            }), No = Qr(Pe), Po = Qr(Ze), Zo = Pr(function (n, t, r) {
                fi.call(n, r) ? n[r].push(t) : vt(n, r, [t])
            }), qo = sr(function (n, t, e) {
                var u = -1, i = typeof t == "function", o = hu(n) ? Gu(n.length) : [];
                return io(n, function (n) {
                    o[++u] = i ? r(t, n, e) : Mt(n, t, e)
                }), o
            }), Vo = Pr(function (n, t, r) {
                vt(n, r, t)
            }), Ko = Pr(function (n, t, r) {
                n[r ? 0 : 1].push(t)
            }, function () {
                return [[], []]
            }), Go = sr(function (n, t) {
                if (null == n)return [];
                var r = t.length;
                return 1 < r && Ie(n, t[0], t[1]) ? t = [] : 2 < r && Ie(t[0], t[1], t[2]) && (t = [t[0]]), er(n, Et(t, 1), [])
            }), Ho = Oi || function () {
                    return Zn.Date.now();
                }, Jo = sr(function (n, t, r) {
                var e = 1;
                if (r.length)var u = C(r, ye(Jo)), e = 32 | e;
                return se(n, e, t, r, u)
            }), Yo = sr(function (n, t, r) {
                var e = 3;
                if (r.length)var u = C(r, ye(Yo)), e = 32 | e;
                return se(t, e, n, r, u)
            }), Qo = sr(function (n, t) {
                return jt(n, 1, t)
            }), Xo = sr(function (n, t, r) {
                return jt(n, Su(t) || 0, r)
            });
            au.Cache = Pn;
            var nf = sr(function (n, t) {
                    t = 1 == t.length && cf(t[0]) ? l(t[0], S(be())) : l(Et(t, 1), S(be()));
                    var e = t.length;
                    return sr(function (u) {
                        for (var i = -1, o = Di(u.length, e); ++i < o;)u[i] = t[i].call(this, u[i]);
                        return r(n, this, u)
                    })
                }), tf = sr(function (n, t) {
                    return se(n, 32, F, t, C(t, ye(tf)))
                }), rf = sr(function (n, t) {
                    return se(n, 64, F, t, C(t, ye(rf)))
                }), ef = _e(function (n, t) {
                    return se(n, 256, F, F, F, t)
                }), uf = fe(Bt), of = fe(function (n, t) {
                    return n >= t
                }), ff = Tt(function () {
                    return arguments
                }()) ? Tt : function (n) {
                    return bu(n) && fi.call(n, "callee") && !xi.call(n, "callee")
                }, cf = Gu.isArray, af = Hn ? S(Hn) : $t, lf = Wi || Ku, sf = Jn ? S(Jn) : Ft, hf = Yn ? S(Yn) : Pt,
                pf = Qn ? S(Qn) : Vt, _f = Xn ? S(Xn) : Kt, vf = nt ? S(nt) : Gt, gf = fe(Yt), df = fe(function (n, t) {
                    return n <= t
                }), yf = Zr(function (n, t) {
                    if (We(t) || hu(t)) $r(t, Bu(t), n); else for (var r in t)fi.call(t, r) && lt(n, r, t[r]);
                }), bf = Zr(function (n, t) {
                    $r(t, Lu(t), n)
                }), xf = Zr(function (n, t, r, e) {
                    $r(t, Lu(t), n, e)
                }), jf = Zr(function (n, t, r, e) {
                    $r(t, Bu(t), n, e)
                }), wf = _e(gt), mf = sr(function (n) {
                    return n.push(F, ct), r(xf, F, n)
                }), Af = sr(function (n) {
                    return n.push(F, Le), r(If, F, n)
                }), kf = te(function (n, t, r) {
                    n[t] = r
                }, $u(Fu)), Ef = te(function (n, t, r) {
                    fi.call(n, t) ? n[t].push(r) : n[t] = [r]
                }, be), Of = sr(Mt), Sf = Zr(function (n, t, r) {
                    tr(n, t, r)
                }), If = Zr(function (n, t, r, e) {
                    tr(n, t, r, e)
                }), Rf = _e(function (n, t) {
                    var r = {};
                    if (null == n)return r;
                    var e = false;
                    t = l(t, function (t) {
                        return t = zr(t, n),
                        e || (e = 1 < t.length), t
                    }), $r(n, ge(n), r), e && (r = yt(r, 7));
                    for (var u = t.length; u--;)Ar(r, t[u]);
                    return r
                }), zf = _e(function (n, t) {
                    return null == n ? {} : ur(n, t)
                }), Wf = le(Bu), Bf = le(Lu), Lf = Hr(function (n, t, r) {
                    return t = t.toLowerCase(), n + (r ? Du(t) : t)
                }), Uf = Hr(function (n, t, r) {
                    return n + (r ? "-" : "") + t.toLowerCase()
                }), Cf = Hr(function (n, t, r) {
                    return n + (r ? " " : "") + t.toLowerCase()
                }), Df = Gr("toLowerCase"), Mf = Hr(function (n, t, r) {
                    return n + (r ? "_" : "") + t.toLowerCase()
                }), Tf = Hr(function (n, t, r) {
                    return n + (r ? " " : "") + Ff(t)
                }), $f = Hr(function (n, t, r) {
                    return n + (r ? " " : "") + t.toUpperCase()
                }), Ff = Gr("toUpperCase"), Nf = sr(function (n, t) {
                    try {
                        return r(n, F, t)
                    } catch (n) {
                        return _u(n) ? n : new Ju(n)
                    }
                }), Pf = _e(function (n, t) {
                    return u(t, function (t) {
                        t = Te(t), vt(n, t, Jo(n[t], n))
                    }), n
                }), Zf = Xr(), qf = Xr(true), Vf = sr(function (n, t) {
                    return function (r) {
                        return Mt(r, n, t)
                    }
                }), Kf = sr(function (n, t) {
                    return function (r) {
                        return Mt(n, r, t)
                    }
                }), Gf = ee(l), Hf = ee(o), Jf = ee(_), Yf = oe(), Qf = oe(true), Xf = re(function (n, t) {
                    return n + t
                }, 0), nc = ae("ceil"), tc = re(function (n, t) {
                    return n / t
                }, 1), rc = ae("floor"), ec = re(function (n, t) {
                    return n * t
                }, 1), uc = ae("round"), ic = re(function (n, t) {
                    return n - t
                }, 0);
            return On.after = function (n, t) {
                if (typeof t != "function")throw new ri("Expected a function");
                return n = Eu(n), function () {
                    if (1 > --n)return t.apply(this, arguments)
                }
            }, On.ary = uu, On.assign = yf, On.assignIn = bf, On.assignInWith = xf, On.assignWith = jf, On.at = wf, On.before = iu, On.bind = Jo, On.bindAll = Pf, On.bindKey = Yo, On.castArray = function () {
                if (!arguments.length)return [];
                var n = arguments[0];
                return cf(n) ? n : [n]
            }, On.chain = Qe, On.chunk = function (n, t, r) {
                if (t = (r ? Ie(n, t, r) : t === F) ? 1 : Ci(Eu(t), 0),
                        r = null == n ? 0 : n.length, !r || 1 > t)return [];
                for (var e = 0, u = 0, i = Gu(Ii(r / t)); e < r;)i[u++] = gr(n, e, e += t);
                return i
            }, On.compact = function (n) {
                for (var t = -1, r = null == n ? 0 : n.length, e = 0, u = []; ++t < r;) {
                    var i = n[t];
                    i && (u[e++] = i)
                }
                return u
            }, On.concat = function () {
                var n = arguments.length;
                if (!n)return [];
                for (var t = Gu(n - 1), r = arguments[0]; n--;)t[n - 1] = arguments[n];
                return s(cf(r) ? Tr(r) : [r], Et(t, 1))
            }, On.cond = function (n) {
                var t = null == n ? 0 : n.length, e = be();
                return n = t ? l(n, function (n) {
                    if ("function" != typeof n[1])throw new ri("Expected a function");
                    return [e(n[0]), n[1]]
                }) : [], sr(function (e) {
                    for (var u = -1; ++u < t;) {
                        var i = n[u];
                        if (r(i[0], this, e))return r(i[1], this, e)
                    }
                })
            }, On.conforms = function (n) {
                return bt(yt(n, 1))
            }, On.constant = $u, On.countBy = Fo, On.create = function (n, t) {
                var r = uo(n);
                return null == t ? r : pt(r, t)
            }, On.curry = ou, On.curryRight = fu, On.debounce = cu, On.defaults = mf, On.defaultsDeep = Af, On.defer = Qo, On.delay = Xo, On.difference = mo, On.differenceBy = Ao, On.differenceWith = ko, On.drop = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (t = r || t === F ? 1 : Eu(t), gr(n, 0 > t ? 0 : t, e)) : [];
            }, On.dropRight = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (t = r || t === F ? 1 : Eu(t), t = e - t, gr(n, 0, 0 > t ? 0 : t)) : []
            }, On.dropRightWhile = function (n, t) {
                return n && n.length ? kr(n, be(t, 3), true, true) : []
            }, On.dropWhile = function (n, t) {
                return n && n.length ? kr(n, be(t, 3), true) : []
            }, On.fill = function (n, t, r, e) {
                var u = null == n ? 0 : n.length;
                if (!u)return [];
                for (r && typeof r != "number" && Ie(n, t, r) && (r = 0, e = u), u = n.length, r = Eu(r), 0 > r && (r = -r > u ? 0 : u + r), e = e === F || e > u ? u : Eu(e), 0 > e && (e += u), e = r > e ? 0 : Ou(e); r < e;)n[r++] = t;
                return n
            }, On.filter = function (n, t) {
                return (cf(n) ? f : kt)(n, be(t, 3))
            }, On.flatMap = function (n, t) {
                return Et(eu(n, t), 1)
            }, On.flatMapDeep = function (n, t) {
                return Et(eu(n, t), N)
            }, On.flatMapDepth = function (n, t, r) {
                return r = r === F ? 1 : Eu(r), Et(eu(n, t), r)
            }, On.flatten = qe, On.flattenDeep = function (n) {
                return (null == n ? 0 : n.length) ? Et(n, N) : []
            }, On.flattenDepth = function (n, t) {
                return null != n && n.length ? (t = t === F ? 1 : Eu(t), Et(n, t)) : []
            }, On.flip = function (n) {
                return se(n, 512)
            }, On.flow = Zf, On.flowRight = qf, On.fromPairs = function (n) {
                for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r;) {
                    var u = n[t];
                    e[u[0]] = u[1]
                }
                return e
            }, On.functions = function (n) {
                return null == n ? [] : It(n, Bu(n))
            }, On.functionsIn = function (n) {
                return null == n ? [] : It(n, Lu(n))
            }, On.groupBy = Zo, On.initial = function (n) {
                return (null == n ? 0 : n.length) ? gr(n, 0, -1) : []
            }, On.intersection = Eo, On.intersectionBy = Oo, On.intersectionWith = So, On.invert = kf, On.invertBy = Ef, On.invokeMap = qo, On.iteratee = Nu, On.keyBy = Vo, On.keys = Bu, On.keysIn = Lu, On.map = eu, On.mapKeys = function (n, t) {
                var r = {};
                return t = be(t, 3), Ot(n, function (n, e, u) {
                    vt(r, t(n, e, u), n)
                }), r
            }, On.mapValues = function (n, t) {
                var r = {};
                return t = be(t, 3), Ot(n, function (n, e, u) {
                    vt(r, e, t(n, e, u))
                }), r
            }, On.matches = function (n) {
                return Xt(yt(n, 1))
            }, On.matchesProperty = function (n, t) {
                return nr(n, yt(t, 1))
            }, On.memoize = au, On.merge = Sf, On.mergeWith = If, On.method = Vf, On.methodOf = Kf, On.mixin = Pu, On.negate = lu, On.nthArg = function (n) {
                return n = Eu(n), sr(function (t) {
                    return rr(t, n)
                })
            }, On.omit = Rf, On.omitBy = function (n, t) {
                return Uu(n, lu(be(t)))
            }, On.once = function (n) {
                return iu(2, n)
            }, On.orderBy = function (n, t, r, e) {
                return null == n ? [] : (cf(t) || (t = null == t ? [] : [t]),
                    r = e ? F : r, cf(r) || (r = null == r ? [] : [r]), er(n, t, r))
            }, On.over = Gf, On.overArgs = nf, On.overEvery = Hf, On.overSome = Jf, On.partial = tf, On.partialRight = rf, On.partition = Ko, On.pick = zf, On.pickBy = Uu, On.property = qu, On.propertyOf = function (n) {
                return function (t) {
                    return null == n ? F : Rt(n, t)
                }
            }, On.pull = Io, On.pullAll = Ge, On.pullAllBy = function (n, t, r) {
                return n && n.length && t && t.length ? fr(n, t, be(r, 2)) : n
            }, On.pullAllWith = function (n, t, r) {
                return n && n.length && t && t.length ? fr(n, t, F, r) : n
            }, On.pullAt = Ro, On.range = Yf, On.rangeRight = Qf, On.rearg = ef, On.reject = function (n, t) {
                return (cf(n) ? f : kt)(n, lu(be(t, 3)))
            }, On.remove = function (n, t) {
                var r = [];
                if (!n || !n.length)return r;
                var e = -1, u = [], i = n.length;
                for (t = be(t, 3); ++e < i;) {
                    var o = n[e];
                    t(o, e, n) && (r.push(o), u.push(e))
                }
                return cr(n, u), r
            }, On.rest = function (n, t) {
                if (typeof n != "function")throw new ri("Expected a function");
                return t = t === F ? t : Eu(t), sr(n, t)
            }, On.reverse = He,On.sampleSize = function (n, t, r) {
                return t = (r ? Ie(n, t, r) : t === F) ? 1 : Eu(t), (cf(n) ? ot : pr)(n, t)
            },On.set = function (n, t, r) {
                return null == n ? n : _r(n, t, r)
            },On.setWith = function (n, t, r, e) {
                return e = typeof e == "function" ? e : F,
                    null == n ? n : _r(n, t, r, e)
            },On.shuffle = function (n) {
                return (cf(n) ? ft : vr)(n)
            },On.slice = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (r && typeof r != "number" && Ie(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : Eu(t), r = r === F ? e : Eu(r)), gr(n, t, r)) : []
            },On.sortBy = Go,On.sortedUniq = function (n) {
                return n && n.length ? xr(n) : []
            },On.sortedUniqBy = function (n, t) {
                return n && n.length ? xr(n, be(t, 2)) : []
            },On.split = function (n, t, r) {
                return r && typeof r != "number" && Ie(n, t, r) && (t = r = F), r = r === F ? 4294967295 : r >>> 0, r ? (n = Ru(n)) && (typeof t == "string" || null != t && !pf(t)) && (t = wr(t),
                !t && Bn.test(n)) ? Wr($(n), 0, r) : n.split(t, r) : []
            },On.spread = function (n, t) {
                if (typeof n != "function")throw new ri("Expected a function");
                return t = t === F ? 0 : Ci(Eu(t), 0), sr(function (e) {
                    var u = e[t];
                    return e = Wr(e, 0, t), u && s(e, u), r(n, this, e)
                })
            },On.tail = function (n) {
                var t = null == n ? 0 : n.length;
                return t ? gr(n, 1, t) : []
            },On.take = function (n, t, r) {
                return n && n.length ? (t = r || t === F ? 1 : Eu(t), gr(n, 0, 0 > t ? 0 : t)) : []
            },On.takeRight = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (t = r || t === F ? 1 : Eu(t), t = e - t, gr(n, 0 > t ? 0 : t, e)) : []
            },On.takeRightWhile = function (n, t) {
                return n && n.length ? kr(n, be(t, 3), false, true) : []
            },On.takeWhile = function (n, t) {
                return n && n.length ? kr(n, be(t, 3)) : []
            },On.tap = function (n, t) {
                return t(n), n
            },On.throttle = function (n, t, r) {
                var e = true, u = true;
                if (typeof n != "function")throw new ri("Expected a function");
                return yu(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), cu(n, t, {
                    leading: e,
                    maxWait: t,
                    trailing: u
                })
            },On.thru = Xe,On.toArray = Au,On.toPairs = Wf,On.toPairsIn = Bf,On.toPath = function (n) {
                return cf(n) ? l(n, Te) : mu(n) ? [n] : Tr(wo(Ru(n)))
            },On.toPlainObject = Iu,
                On.transform = function (n, t, r) {
                    var e = cf(n), i = e || lf(n) || vf(n);
                    if (t = be(t, 4), null == r) {
                        var o = n && n.constructor;
                        r = i ? e ? new o : [] : yu(n) && vu(o) ? uo(yi(n)) : {}
                    }
                    return (i ? u : Ot)(n, function (n, e, u) {
                        return t(r, n, e, u)
                    }), r
                },On.unary = function (n) {
                return uu(n, 1)
            },On.union = zo,On.unionBy = Wo,On.unionWith = Bo,On.uniq = function (n) {
                return n && n.length ? mr(n) : []
            },On.uniqBy = function (n, t) {
                return n && n.length ? mr(n, be(t, 2)) : []
            },On.uniqWith = function (n, t) {
                return t = typeof t == "function" ? t : F, n && n.length ? mr(n, F, t) : []
            },On.unset = function (n, t) {
                return null == n || Ar(n, t);
            },On.unzip = Je,On.unzipWith = Ye,On.update = function (n, t, r) {
                return null == n ? n : _r(n, t, Rr(r)(Rt(n, t)), void 0)
            },On.updateWith = function (n, t, r, e) {
                return e = typeof e == "function" ? e : F, null != n && (n = _r(n, t, Rr(r)(Rt(n, t)), e)), n
            },On.values = Cu,On.valuesIn = function (n) {
                return null == n ? [] : I(n, Lu(n))
            },On.without = Lo,On.words = Tu,On.wrap = function (n, t) {
                return tf(Rr(t), n)
            },On.xor = Uo,On.xorBy = Co,On.xorWith = Do,On.zip = Mo,On.zipObject = function (n, t) {
                return Sr(n || [], t || [], lt)
            },On.zipObjectDeep = function (n, t) {
                return Sr(n || [], t || [], _r);
            },On.zipWith = To,On.entries = Wf,On.entriesIn = Bf,On.extend = bf,On.extendWith = xf,Pu(On, On),On.add = Xf,On.attempt = Nf,On.camelCase = Lf,On.capitalize = Du,On.ceil = nc,On.clamp = function (n, t, r) {
                return r === F && (r = t, t = F), r !== F && (r = Su(r), r = r === r ? r : 0), t !== F && (t = Su(t), t = t === t ? t : 0), dt(Su(n), t, r)
            },On.clone = function (n) {
                return yt(n, 4)
            },On.cloneDeep = function (n) {
                return yt(n, 5)
            },On.cloneDeepWith = function (n, t) {
                return t = typeof t == "function" ? t : F, yt(n, 5, t)
            },On.cloneWith = function (n, t) {
                return t = typeof t == "function" ? t : F, yt(n, 4, t)
            },
                On.conformsTo = function (n, t) {
                    return null == t || xt(n, t, Bu(t))
                },On.deburr = Mu,On.defaultTo = function (n, t) {
                return null == n || n !== n ? t : n
            },On.divide = tc,On.endsWith = function (n, t, r) {
                n = Ru(n), t = wr(t);
                var e = n.length, e = r = r === F ? e : dt(Eu(r), 0, e);
                return r -= t.length, 0 <= r && n.slice(r, e) == t
            },On.eq = su,On.escape = function (n) {
                return (n = Ru(n)) && Y.test(n) ? n.replace(H, et) : n
            },On.escapeRegExp = function (n) {
                return (n = Ru(n)) && fn.test(n) ? n.replace(on, "\\$&") : n
            },On.every = function (n, t, r) {
                var e = cf(n) ? o : mt;
                return r && Ie(n, t, r) && (t = F), e(n, be(t, 3));
            },On.find = No,On.findIndex = Pe,On.findKey = function (n, t) {
                return v(n, be(t, 3), Ot)
            },On.findLast = Po,On.findLastIndex = Ze,On.findLastKey = function (n, t) {
                return v(n, be(t, 3), St)
            },On.floor = rc,On.forEach = tu,On.forEachRight = ru,On.forIn = function (n, t) {
                return null == n ? n : fo(n, be(t, 3), Lu)
            },On.forInRight = function (n, t) {
                return null == n ? n : co(n, be(t, 3), Lu)
            },On.forOwn = function (n, t) {
                return n && Ot(n, be(t, 3))
            },On.forOwnRight = function (n, t) {
                return n && St(n, be(t, 3))
            },On.get = zu,On.gt = uf,On.gte = of,On.has = function (n, t) {
                return null != n && me(n, t, Lt);
            },On.hasIn = Wu,On.head = Ve,On.identity = Fu,On.includes = function (n, t, r, e) {
                return n = hu(n) ? n : Cu(n), r = r && !e ? Eu(r) : 0, e = n.length, 0 > r && (r = Ci(e + r, 0)), wu(n) ? r <= e && -1 < n.indexOf(t, r) : !!e && -1 < d(n, t, r)
            },On.indexOf = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                return e ? (r = null == r ? 0 : Eu(r), 0 > r && (r = Ci(e + r, 0)), d(n, t, r)) : -1
            },On.inRange = function (n, t, r) {
                return t = ku(t), r === F ? (r = t, t = 0) : r = ku(r), n = Su(n), n >= Di(t, r) && n < Ci(t, r)
            },On.invoke = Of,On.isArguments = ff,On.isArray = cf,On.isArrayBuffer = af,On.isArrayLike = hu,On.isArrayLikeObject = pu,
                On.isBoolean = function (n) {
                    return true === n || false === n || bu(n) && "[object Boolean]" == Wt(n)
                },On.isBuffer = lf,On.isDate = sf,On.isElement = function (n) {
                return bu(n) && 1 === n.nodeType && !ju(n)
            },On.isEmpty = function (n) {
                if (null == n)return true;
                if (hu(n) && (cf(n) || typeof n == "string" || typeof n.splice == "function" || lf(n) || vf(n) || ff(n)))return !n.length;
                var t = go(n);
                if ("[object Map]" == t || "[object Set]" == t)return !n.size;
                if (We(n))return !Jt(n).length;
                for (var r in n)if (fi.call(n, r))return false;
                return true
            },On.isEqual = function (n, t) {
                return Nt(n, t);
            },On.isEqualWith = function (n, t, r) {
                var e = (r = typeof r == "function" ? r : F) ? r(n, t) : F;
                return e === F ? Nt(n, t, F, r) : !!e
            },On.isError = _u,On.isFinite = function (n) {
                return typeof n == "number" && Bi(n)
            },On.isFunction = vu,On.isInteger = gu,On.isLength = du,On.isMap = hf,On.isMatch = function (n, t) {
                return n === t || Zt(n, t, je(t))
            },On.isMatchWith = function (n, t, r) {
                return r = typeof r == "function" ? r : F, Zt(n, t, je(t), r)
            },On.isNaN = function (n) {
                return xu(n) && n != +n
            },On.isNative = function (n) {
                if (yo(n))throw new Ju("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                return qt(n)
            },On.isNil = function (n) {
                return null == n
            },On.isNull = function (n) {
                return null === n
            },On.isNumber = xu,On.isObject = yu,On.isObjectLike = bu,On.isPlainObject = ju,On.isRegExp = pf,On.isSafeInteger = function (n) {
                return gu(n) && -9007199254740991 <= n && 9007199254740991 >= n
            },On.isSet = _f,On.isString = wu,On.isSymbol = mu,On.isTypedArray = vf,On.isUndefined = function (n) {
                return n === F
            },On.isWeakMap = function (n) {
                return bu(n) && "[object WeakMap]" == go(n)
            },On.isWeakSet = function (n) {
                return bu(n) && "[object WeakSet]" == Wt(n)
            },On.join = function (n, t) {
                return null == n ? "" : Li.call(n, t)
            },On.kebabCase = Uf,On.last = Ke,On.lastIndexOf = function (n, t, r) {
                var e = null == n ? 0 : n.length;
                if (!e)return -1;
                var u = e;
                if (r !== F && (u = Eu(r), u = 0 > u ? Ci(e + u, 0) : Di(u, e - 1)), t === t) {
                    for (r = u + 1; r-- && n[r] !== t;);
                    n = r
                } else n = g(n, b, u, true);
                return n
            },On.lowerCase = Cf,On.lowerFirst = Df,On.lt = gf,On.lte = df,On.max = function (n) {
                return n && n.length ? At(n, Fu, Bt) : F
            },On.maxBy = function (n, t) {
                return n && n.length ? At(n, be(t, 2), Bt) : F
            },On.mean = function (n) {
                return x(n, Fu)
            },On.meanBy = function (n, t) {
                return x(n, be(t, 2))
            },On.min = function (n) {
                return n && n.length ? At(n, Fu, Yt) : F
            },On.minBy = function (n, t) {
                return n && n.length ? At(n, be(t, 2), Yt) : F
            },On.stubArray = Vu,On.stubFalse = Ku,On.stubObject = function () {
                return {}
            },On.stubString = function () {
                return ""
            },On.stubTrue = function () {
                return true
            },On.multiply = ec,On.nth = function (n, t) {
                return n && n.length ? rr(n, Eu(t)) : F
            },On.noConflict = function () {
                return Zn._ === this && (Zn._ = hi), this
            },On.noop = Zu,On.now = Ho,On.pad = function (n, t, r) {
                n = Ru(n);
                var e = (t = Eu(t)) ? T(n) : 0;
                return !t || e >= t ? n : (t = (t - e) / 2, ue(Ri(t), r) + n + ue(Ii(t), r))
            },On.padEnd = function (n, t, r) {
                n = Ru(n);
                var e = (t = Eu(t)) ? T(n) : 0;
                return t && e < t ? n + ue(t - e, r) : n
            },On.padStart = function (n, t, r) {
                n = Ru(n);
                var e = (t = Eu(t)) ? T(n) : 0;
                return t && e < t ? ue(t - e, r) + n : n
            },On.parseInt = function (n, t, r) {
                return r || null == t ? t = 0 : t && (t = +t), Ti(Ru(n).replace(an, ""), t || 0)
            },On.random = function (n, t, r) {
                if (r && typeof r != "boolean" && Ie(n, t, r) && (t = r = F), r === F && (typeof t == "boolean" ? (r = t, t = F) : typeof n == "boolean" && (r = n, n = F)), n === F && t === F ? (n = 0, t = 1) : (n = ku(n), t === F ? (t = n, n = 0) : t = ku(t)), n > t) {
                    var e = n;
                    n = t, t = e
                }
                return r || n % 1 || t % 1 ? (r = $i(), Di(n + r * (t - n + $n("1e-" + ((r + "").length - 1))), t)) : ar(n, t);
            },On.reduce = function (n, t, r) {
                var e = cf(n) ? h : m, u = 3 > arguments.length;
                return e(n, be(t, 4), r, u, io)
            },On.reduceRight = function (n, t, r) {
                var e = cf(n) ? p : m, u = 3 > arguments.length;
                return e(n, be(t, 4), r, u, oo)
            },On.repeat = function (n, t, r) {
                return t = (r ? Ie(n, t, r) : t === F) ? 1 : Eu(t), lr(Ru(n), t)
            },On.replace = function () {
                var n = arguments, t = Ru(n[0]);
                return 3 > n.length ? t : t.replace(n[1], n[2])
            },On.result = function (n, t, r) {
                t = zr(t, n);
                var e = -1, u = t.length;
                for (u || (u = 1, n = F); ++e < u;) {
                    var i = null == n ? F : n[Te(t[e])];
                    i === F && (e = u, i = r), n = vu(i) ? i.call(n) : i;
                }
                return n
            },On.round = uc,On.runInContext = w,On.sample = function (n) {
                return (cf(n) ? tt : hr)(n)
            },On.size = function (n) {
                if (null == n)return 0;
                if (hu(n))return wu(n) ? T(n) : n.length;
                var t = go(n);
                return "[object Map]" == t || "[object Set]" == t ? n.size : Jt(n).length
            },On.snakeCase = Mf,On.some = function (n, t, r) {
                var e = cf(n) ? _ : dr;
                return r && Ie(n, t, r) && (t = F), e(n, be(t, 3))
            },On.sortedIndex = function (n, t) {
                return yr(n, t)
            },On.sortedIndexBy = function (n, t, r) {
                return br(n, t, be(r, 2))
            },On.sortedIndexOf = function (n, t) {
                var r = null == n ? 0 : n.length;
                if (r) {
                    var e = yr(n, t);
                    if (e < r && su(n[e], t))return e
                }
                return -1
            },On.sortedLastIndex = function (n, t) {
                return yr(n, t, true)
            },On.sortedLastIndexBy = function (n, t, r) {
                return br(n, t, be(r, 2), true)
            },On.sortedLastIndexOf = function (n, t) {
                if (null == n ? 0 : n.length) {
                    var r = yr(n, t, true) - 1;
                    if (su(n[r], t))return r
                }
                return -1
            },On.startCase = Tf,On.startsWith = function (n, t, r) {
                return n = Ru(n), r = dt(Eu(r), 0, n.length), t = wr(t), n.slice(r, r + t.length) == t
            },On.subtract = ic,On.sum = function (n) {
                return n && n.length ? k(n, Fu) : 0
            },On.sumBy = function (n, t) {
                return n && n.length ? k(n, be(t, 2)) : 0;
            },On.template = function (n, t, r) {
                var e = On.templateSettings;
                r && Ie(n, t, r) && (t = F), n = Ru(n), t = xf({}, t, e, ct), r = xf({}, t.imports, e.imports, ct);
                var u, i, o = Bu(r), f = I(r, o), c = 0;
                r = t.interpolate || An;
                var a = "__p+='";
                r = ni((t.escape || An).source + "|" + r.source + "|" + (r === nn ? gn : An).source + "|" + (t.evaluate || An).source + "|$", "g");
                var l = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";
                if (n.replace(r, function (t, r, e, o, f, l) {
                        return e || (e = o), a += n.slice(c, l).replace(kn, B), r && (u = true, a += "'+__e(" + r + ")+'"), f && (i = true, a += "';" + f + ";\n__p+='"),
                        e && (a += "'+((__t=(" + e + "))==null?'':__t)+'"), c = l + t.length, t
                    }), a += "';", (t = t.variable) || (a = "with(obj){" + a + "}"), a = (i ? a.replace(q, "") : a).replace(V, "$1").replace(K, "$1;"), a = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (u ? ",__e=_.escape" : "") + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + a + "return __p}", t = Nf(function () {
                        return Yu(o, l + "return " + a).apply(F, f)
                    }), t.source = a, _u(t))throw t;
                return t
            },On.times = function (n, t) {
                if (n = Eu(n), 1 > n || 9007199254740991 < n)return [];
                var r = 4294967295, e = Di(n, 4294967295);
                for (t = be(t), n -= 4294967295, e = E(e, t); ++r < n;)t(r);
                return e
            },On.toFinite = ku,On.toInteger = Eu,On.toLength = Ou,On.toLower = function (n) {
                return Ru(n).toLowerCase()
            },On.toNumber = Su,On.toSafeInteger = function (n) {
                return dt(Eu(n), -9007199254740991, 9007199254740991)
            },On.toString = Ru,On.toUpper = function (n) {
                return Ru(n).toUpperCase()
            },On.trim = function (n, t, r) {
                return (n = Ru(n)) && (r || t === F) ? n.replace(cn, "") : n && (t = wr(t)) ? (n = $(n), r = $(t), t = z(n, r), r = W(n, r) + 1, Wr(n, t, r).join("")) : n
            },On.trimEnd = function (n, t, r) {
                return (n = Ru(n)) && (r || t === F) ? n.replace(ln, "") : n && (t = wr(t)) ? (n = $(n), t = W(n, $(t)) + 1, Wr(n, 0, t).join("")) : n
            },On.trimStart = function (n, t, r) {
                return (n = Ru(n)) && (r || t === F) ? n.replace(an, "") : n && (t = wr(t)) ? (n = $(n), t = z(n, $(t)), Wr(n, t).join("")) : n
            },On.truncate = function (n, t) {
                var r = 30, e = "...";
                if (yu(t))var u = "separator" in t ? t.separator : u, r = "length" in t ? Eu(t.length) : r,
                    e = "omission" in t ? wr(t.omission) : e;
                n = Ru(n);
                var i = n.length;
                if (Bn.test(n))var o = $(n), i = o.length;
                if (r >= i)return n;
                if (i = r - T(e), 1 > i)return e;
                if (r = o ? Wr(o, 0, i).join("") : n.slice(0, i),
                    u === F)return r + e;
                if (o && (i += r.length - i), pf(u)) {
                    if (n.slice(i).search(u)) {
                        var f = r;
                        for (u.global || (u = ni(u.source, Ru(dn.exec(u)) + "g")), u.lastIndex = 0; o = u.exec(f);)var c = o.index;
                        r = r.slice(0, c === F ? i : c)
                    }
                } else n.indexOf(wr(u), i) != i && (u = r.lastIndexOf(u), -1 < u && (r = r.slice(0, u)));
                return r + e
            },On.unescape = function (n) {
                return (n = Ru(n)) && J.test(n) ? n.replace(G, ut) : n
            },On.uniqueId = function (n) {
                var t = ++ci;
                return Ru(n) + t
            },On.upperCase = $f,On.upperFirst = Ff,On.each = tu,On.eachRight = ru,On.first = Ve,Pu(On, function () {
                var n = {};
                return Ot(On, function (t, r) {
                    fi.call(On.prototype, r) || (n[r] = t)
                }), n
            }(), {chain: false}),On.VERSION = "4.17.2",u("bind bindKey curry curryRight partial partialRight".split(" "), function (n) {
                On[n].placeholder = On
            }),u(["drop", "take"], function (n, t) {
                Mn.prototype[n] = function (r) {
                    var e = this.__filtered__;
                    if (e && !t)return new Mn(this);
                    r = r === F ? 1 : Ci(Eu(r), 0);
                    var u = this.clone();
                    return e ? u.__takeCount__ = Di(r, u.__takeCount__) : u.__views__.push({
                        size: Di(r, 4294967295),
                        type: n + (0 > u.__dir__ ? "Right" : "")
                    }), u
                }, Mn.prototype[n + "Right"] = function (t) {
                    return this.reverse()[n](t).reverse();
                }
            }),u(["filter", "map", "takeWhile"], function (n, t) {
                var r = t + 1, e = 1 == r || 3 == r;
                Mn.prototype[n] = function (n) {
                    var t = this.clone();
                    return t.__iteratees__.push({iteratee: be(n, 3), type: r}), t.__filtered__ = t.__filtered__ || e, t
                }
            }),u(["head", "last"], function (n, t) {
                var r = "take" + (t ? "Right" : "");
                Mn.prototype[n] = function () {
                    return this[r](1).value()[0]
                }
            }),u(["initial", "tail"], function (n, t) {
                var r = "drop" + (t ? "" : "Right");
                Mn.prototype[n] = function () {
                    return this.__filtered__ ? new Mn(this) : this[r](1)
                }
            }),Mn.prototype.compact = function () {
                return this.filter(Fu)
            },Mn.prototype.find = function (n) {
                return this.filter(n).head()
            },Mn.prototype.findLast = function (n) {
                return this.reverse().find(n)
            },Mn.prototype.invokeMap = sr(function (n, t) {
                return typeof n == "function" ? new Mn(this) : this.map(function (r) {
                    return Mt(r, n, t)
                })
            }),Mn.prototype.reject = function (n) {
                return this.filter(lu(be(n)))
            },Mn.prototype.slice = function (n, t) {
                n = Eu(n);
                var r = this;
                return r.__filtered__ && (0 < n || 0 > t) ? new Mn(r) : (0 > n ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== F && (t = Eu(t), r = 0 > t ? r.dropRight(-t) : r.take(t - n)),
                    r)
            },Mn.prototype.takeRightWhile = function (n) {
                return this.reverse().takeWhile(n).reverse()
            },Mn.prototype.toArray = function () {
                return this.take(4294967295)
            },Ot(Mn.prototype, function (n, t) {
                var r = /^(?:filter|find|map|reject)|While$/.test(t), e = /^(?:head|last)$/.test(t),
                    u = On[e ? "take" + ("last" == t ? "Right" : "") : t], i = e || /^find/.test(t);
                u && (On.prototype[t] = function () {
                    function t(n) {
                        return n = u.apply(On, s([n], f)), e && h ? n[0] : n
                    }

                    var o = this.__wrapped__, f = e ? [1] : arguments, c = o instanceof Mn, a = f[0], l = c || cf(o);
                    l && r && typeof a == "function" && 1 != a.length && (c = l = false);
                    var h = this.__chain__, p = !!this.__actions__.length, a = i && !h, c = c && !p;
                    return !i && l ? (o = c ? o : new Mn(this), o = n.apply(o, f), o.__actions__.push({
                        func: Xe,
                        args: [t],
                        thisArg: F
                    }), new zn(o, h)) : a && c ? n.apply(this, f) : (o = this.thru(t), a ? e ? o.value()[0] : o.value() : o)
                })
            }),u("pop push shift sort splice unshift".split(" "), function (n) {
                var t = ei[n], r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", e = /^(?:pop|shift)$/.test(n);
                On.prototype[n] = function () {
                    var n = arguments;
                    if (e && !this.__chain__) {
                        var u = this.value();
                        return t.apply(cf(u) ? u : [], n);
                    }
                    return this[r](function (r) {
                        return t.apply(cf(r) ? r : [], n)
                    })
                }
            }),Ot(Mn.prototype, function (n, t) {
                var r = On[t];
                if (r) {
                    var e = r.name + "";
                    (Hi[e] || (Hi[e] = [])).push({name: t, func: r})
                }
            }),Hi[ne(F, 2).name] = [{name: "wrapper", func: F}],Mn.prototype.clone = function () {
                var n = new Mn(this.__wrapped__);
                return n.__actions__ = Tr(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Tr(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Tr(this.__views__), n
            },Mn.prototype.reverse = function () {
                if (this.__filtered__) {
                    var n = new Mn(this);
                    n.__dir__ = -1, n.__filtered__ = true
                } else n = this.clone(), n.__dir__ *= -1;
                return n
            },Mn.prototype.value = function () {
                var n, t = this.__wrapped__.value(), r = this.__dir__, e = cf(t), u = 0 > r, i = e ? t.length : 0;
                n = i;
                for (var o = this.__views__, f = 0, c = -1, a = o.length; ++c < a;) {
                    var l = o[c], s = l.size;
                    switch (l.type) {
                        case"drop":
                            f += s;
                            break;
                        case"dropRight":
                            n -= s;
                            break;
                        case"take":
                            n = Di(n, f + s);
                            break;
                        case"takeRight":
                            f = Ci(f, n - s)
                    }
                }
                if (n = {
                        start: f,
                        end: n
                    }, o = n.start, f = n.end, n = f - o, u = u ? f : o - 1, o = this.__iteratees__, f = o.length,
                        c = 0, a = Di(n, this.__takeCount__), !e || 200 > i || i == n && a == n)return Er(t, this.__actions__);
                e = [];
                n:for (; n-- && c < a;) {
                    for (u += r, i = -1, l = t[u]; ++i < f;) {
                        var h = o[i], s = h.type, h = (0, h.iteratee)(l);
                        if (2 == s) l = h; else if (!h) {
                            if (1 == s)continue n;
                            break n
                        }
                    }
                    e[c++] = l
                }
                return e
            },On.prototype.at = $o,On.prototype.chain = function () {
                return Qe(this)
            },On.prototype.commit = function () {
                return new zn(this.value(), this.__chain__)
            },On.prototype.next = function () {
                this.__values__ === F && (this.__values__ = Au(this.value()));
                var n = this.__index__ >= this.__values__.length;
                return {done: n, value: n ? F : this.__values__[this.__index__++]}
            },On.prototype.plant = function (n) {
                for (var t, r = this; r instanceof Sn;) {
                    var e = Ne(r);
                    e.__index__ = 0, e.__values__ = F, t ? u.__wrapped__ = e : t = e;
                    var u = e, r = r.__wrapped__
                }
                return u.__wrapped__ = n, t
            },On.prototype.reverse = function () {
                var n = this.__wrapped__;
                return n instanceof Mn ? (this.__actions__.length && (n = new Mn(this)), n = n.reverse(), n.__actions__.push({
                    func: Xe,
                    args: [He],
                    thisArg: F
                }), new zn(n, this.__chain__)) : this.thru(He)
            },On.prototype.toJSON = On.prototype.valueOf = On.prototype.value = function () {
                return Er(this.__wrapped__, this.__actions__)
            },On.prototype.first = On.prototype.head,mi && (On.prototype[mi] = nu),On
        }();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (Zn._ = it, define(function () {
        return it
    })) : Vn ? ((Vn.exports = it)._ = it, qn._ = it) : Zn._ = it
}).call(this);
//#############################  Class ############################################

/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype

var Class = (function () {

    //initializing是为了解决我们之前说的继承导致原型有多余参数的问题。当我们直接将父类的实例赋值给子类原型时。是会调用一次父类的构造函数的。所以这边会把真正的构造流程放到init函数里面，通过initializing来表示当前是不是处于构造原型阶段，为true的话就不会调用init。
    //fnTest用来匹配代码里面有没有使用super关键字。对于一些浏览器`function(){xyz;}`会生成个字符串，并且会把里面的代码弄出来，有的浏览器就不会。`/xyz/.test(function(){xyz;})`为true代表浏览器支持看到函数的内部代码，所以用`/\b_super\b/`来匹配。如果不行，就不管三七二十一。所有的函数都算有super关键字，于是就是个必定匹配的正则。
    var initializing = false,
        fnTest = /xyz/.test(function () {
            xyz;
        }) ? /\b_super\b/ : /.*/;

    // The base Class implementation (does nothing)
    // 超级父类
    this.Class = function () {
    };

    // Create a new Class that inherits from this class
    // 生成一个类，这个类会具有extend方法用于继续继承下去
    Class.extend = function (prop) {
        //保留当前类，一般是父类的原型
        //this指向父类。初次时指向Class超级父类
        var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        //开关 用来使原型赋值时不调用真正的构成流程
        initializing = true;
        var prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (var name in prop) {
            // Check if we're overwriting an existing function
            //这边其实就是很简单的将prop的属性混入到子类的原型上。如果是函数我们就要做一些特殊处理
            prototype[name] = typeof prop[name] == "function" &&
            typeof _super[name] == "function" && fnTest.test(prop[name]) ?
                (function (name, fn) {
                    //通过闭包，返回一个新的操作函数.在外面包一层，这样我们可以做些额外的处理
                    return function () {
                        var tmp = this._super;

                        // Add a new ._super() method that is the same method
                        // but on the super-class
                        // 调用一个函数时，会给this注入一个_super方法用来调用父类的同名方法
                        this._super = _super[name];

                        // The method only need to be bound temporarily, so we
                        // remove it when we're done executing
                        //因为上面的赋值，是的这边的fn里面可以通过_super调用到父类同名方法
                        var ret = fn.apply(this, arguments);
                        //离开时 保存现场环境，恢复值。
                        this._super = tmp;

                        return ret;
                    };
                })(name, prop[name]) :
                prop[name];
        }

        // 这边是返回的类，其实就是我们返回的子类
        function Class() {
            // All construction is actually done in the init method
            if (!initializing && this.init)
                this.init.apply(this, arguments);
        }

        // 赋值原型链，完成继承
        Class.prototype = prototype;

        // 改变constructor引用
        Class.prototype.constructor = Class;

        // 为子类也添加extend方法
        Class.extend = arguments.callee;

        return Class;

    }

    return Class;

})()

//组件框架
var Base = (function () {

    var _indexOf = function (array, key) {
        if (array === null) return -1
        var i = 0,
            length = array.length
        for (; i < length; i++)
            if (array[i] === item) return i
        return -1
    }
    //事件处理
    var Event = Class.extend({
        //添加监听
        on: function (key, listener) {
            //this.__events存储所有的处理函数
            if (!this.__events) {
                this.__events = {}
            }
            if (!this.__events[key]) {
                this.__events[key] = []
            }


            if (_indexOf(this.__events, listener) === -1 && typeof listener === 'function') {
                this.__events[key].push(listener)
            }

            return this
        },
        //触发一个事件，也就是通知
        fire: function (key) {

            if (!this.__events || !this.__events[key]) return

            //Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组
            // args 作用为 传递入 以事件为名的方法中
            var args = Array.prototype.slice.call(arguments, 1) || []
            var listeners = this.__events[key] //obj
            var i = 0
            var l = listeners.length //集合中的 方法数量

            for (i; i < l; i++) {
                listeners[i].apply(this, args)
            }

            return this
        },
        //取消监听
        off: function (key, listener) {

            if (!key && !listener) {
                this.__events = {}
            }
            //不传监听函数，就去掉当前key下面的所有的监听函数
            if (key && !listener) {
                delete this.__events[key]
            }

            if (key && listener) {
                var listeners = this.__events[key]
                var index = _indexOf(listeners, listener)

                    (index > -1) && listeners.splice(index, 1)
            }

            return this;
        }
    })

    var Base = Event.extend({
        defaults: {},
        item: {},
        init: function (config) {
            //自动保存配置项
            this._config = _.extend(this.defaults, config);
            this.$autoWatch();
            this.initialize();
        },
        initialize: function () {

        },
        get: function (key) {
            return this._config[key]
        },
        set: function (key, value) {
            this._config[key] = value;
        },
        bind: function () {

        },
        render: function () {

        },
        destroy: function () {

        },
        $autoWatch: function () {
            var Datas = this._config;
            var num = 1;
            var self = this

            _.each(Datas, function (item, index) {
                this.item = item;
                var Fn = {};
                var tempArr = [];
                var fnString = (_.template([
                    "var Arr = {",
                    '<%= index%> : this.item,',
                    '_<%= index%> : this.item',
                    '};return Arr'
                ].join(" ")))({
                    index: index
                });
                var WatchFnString = (_.template([
                    'var _this = this;',
                    'Object.defineProperty(this,"<%= index%>",{',
                    'set:function(Val){',
                    'if(Val != this._<%= index%>){',
                    'this._<%= index%> = Val;',
                    '_this.fire("change:<%= index%>",Val);',
                    '}else{return}},',
                    'get:function(){',
                    'return this._<%= index%>',
                    '}})'
                ].join(" ")))({
                    index: index
                })
                //执行监视过程
                tempArr = new Function(fnString).bind(this)();
                _.extend(this, tempArr);
                (new Function(WatchFnString)).apply(this);
                num++;
            }.bind(this))
        }
    })

    return Base

})()
