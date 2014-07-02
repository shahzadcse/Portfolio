/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
!
function (t, e)
{
	function n(t)
	{
		var e = t.length,
			n = ue.type(t);
		return ue.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
	}
	function i(t)
	{
		var e = Ce[t] =
		{
		};
		return ue.each(t.match(de) || [], function (t, n)
		{
			e[n] = !0
		}), e
	}
	function r(t, n, i, r)
	{
		if (ue.acceptData(t))
		{
			var s, o, a = ue.expando,
				l = t.nodeType,
				c = l ? ue.cache : t,
				u = l ? t[a] : t[a] && a;
			if (u && c[u] && (r || c[u].data) || i !== e || "string" != typeof n) return u || (u = l ? t[a] = ee.pop() || ue.guid++ : a), c[u] || (c[u] = l ? {
			} : {
				toJSON: ue.noop
			}), ("object" == typeof n || "function" == typeof n) && (r ? c[u] = ue.extend(c[u], n) : c[u].data = ue.extend(c[u].data, n)), o = c[u], r || (o.data || (o.data =
			{
			}), o = o.data), i !== e && (o[ue.camelCase(n)] = i), "string" == typeof n ? (s = o[n], null == s && (s = o[ue.camelCase(n)])) : s = o, s
		}
	}
	function s(t, e, n)
	{
		if (ue.acceptData(t))
		{
			var i, r, s = t.nodeType,
				o = s ? ue.cache : t,
				l = s ? t[ue.expando] : ue.expando;
			if (o[l])
			{
				if (e && (i = n ? o[l] : o[l].data))
				{
					ue.isArray(e) ? e = e.concat(ue.map(e, ue.camelCase)) : e in i ? e = [e] : (e = ue.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
					for (; r--;) delete i[e[r]];
					if (n ? !a(i) : !ue.isEmptyObject(i)) return
				}(n || (delete o[l].data, a(o[l]))) && (s ? ue.cleanData([t], !0) : ue.support.deleteExpando || o != o.window ? delete o[l] : o[l] = null)
			}
		}
	}
	function o(t, n, i)
	{
		if (i === e && 1 === t.nodeType)
		{
			var r = "data-" + n.replace(Ne, "-$1").toLowerCase();
			if (i = t.getAttribute(r), "string" == typeof i)
			{
				try
				{
					i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Te.test(i) ? ue.parseJSON(i) : i
				}
				catch (s)
				{
				}
				ue.data(t, n, i)
			}
			else i = e
		}
		return i
	}
	function a(t)
	{
		var e;
		for (e in t) if (("data" !== e || !ue.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
		return !0
	}
	function l()
	{
		return !0
	}
	function c()
	{
		return !1
	}
	function u()
	{
		try
		{
			return Q.activeElement
		}
		catch (t)
		{
		}
	}
	function h(t, e)
	{
		do t = t[e];
		while (t && 1 !== t.nodeType);
		return t
	}
	function d(t, e, n)
	{
		if (ue.isFunction(e)) return ue.grep(t, function (t, i)
		{
			return !!e.call(t, i, t) !== n
		});
		if (e.nodeType) return ue.grep(t, function (t)
		{
			return t === e !== n
		});
		if ("string" == typeof e)
		{
			if (qe.test(e)) return ue.filter(e, t, n);
			e = ue.filter(e, t)
		}
		return ue.grep(t, function (t)
		{
			return ue.inArray(t, e) >= 0 !== n
		})
	}
	function p(t)
	{
		var e = Ke.split("|"),
			n = t.createDocumentFragment();
		if (n.createElement) for (; e.length;) n.createElement(e.pop());
		return n
	}
	function f(t, e)
	{
		return ue.nodeName(t, "table") && ue.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}
	function g(t)
	{
		return t.type = (null !== ue.find.attr(t, "type")) + "/" + t.type, t
	}
	function m(t)
	{
		var e = sn.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}
	function v(t, e)
	{
		for (var n, i = 0; null != (n = t[i]); i++) ue._data(n, "globalEval", !e || ue._data(e[i], "globalEval"))
	}
	function y(t, e)
	{
		if (1 === e.nodeType && ue.hasData(t))
		{
			var n, i, r, s = ue._data(t),
				o = ue._data(e, s),
				a = s.events;
			if (a)
			{
				delete o.handle, o.events =
				{
				};
				for (n in a) for (i = 0, r = a[n].length; r > i; i++) ue.event.add(e, n, a[n][i])
			}
			o.data && (o.data = ue.extend(
			{
			}, o.data))
		}
	}
	function b(t, e)
	{
		var n, i, r;
		if (1 === e.nodeType)
		{
			if (n = e.nodeName.toLowerCase(), !ue.support.noCloneEvent && e[ue.expando])
			{
				r = ue._data(e);
				for (i in r.events) ue.removeEvent(e, i, r.handle);
				e.removeAttribute(ue.expando)
			}
			"script" === n && e.text !== t.text ? (g(e).text = t.text, m(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ue.support.html5Clone && t.innerHTML && !ue.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && en.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
		}
	}
	function _(t, n)
	{
		var i, r, s = 0,
			o = typeof t.getElementsByTagName !== U ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== U ? t.querySelectorAll(n || "*") : e;
		if (!o) for (o = [], i = t.childNodes || t; null != (r = i[s]); s++)!n || ue.nodeName(r, n) ? o.push(r) : ue.merge(o, _(r, n));
		return n === e || n && ue.nodeName(t, n) ? ue.merge([t], o) : o
	}
	function w(t)
	{
		en.test(t.type) && (t.defaultChecked = t.checked)
	}
	function x(t, e)
	{
		if (e in t) return e;
		for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = Cn.length; r--;) if (e = Cn[r] + n, e in t) return e;
		return i
	}
	function k(t, e)
	{
		return t = e || t, "none" === ue.css(t, "display") || !ue.contains(t.ownerDocument, t)
	}
	function D(t, e)
	{
		for (var n, i, r, s = [], o = 0, a = t.length; a > o; o++) i = t[o], i.style && (s[o] = ue._data(i, "olddisplay"), n = i.style.display, e ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && k(i) && (s[o] = ue._data(i, "olddisplay", S(i.nodeName)))) : s[o] || (r = k(i), (n && "none" !== n || !r) && ue._data(i, "olddisplay", r ? n : ue.css(i, "display"))));
		for (o = 0; a > o; o++) i = t[o], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[o] || "" : "none"));
		return t
	}
	function C(t, e, n)
	{
		var i = yn.exec(e);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
	}
	function T(t, e, n, i, r)
	{
		for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2)"margin" === n && (o += ue.css(t, n + Dn[s], !0, r)), i ? ("content" === n && (o -= ue.css(t, "padding" + Dn[s], !0, r)), "margin" !== n && (o -= ue.css(t, "border" + Dn[s] + "Width", !0, r))) : (o += ue.css(t, "padding" + Dn[s], !0, r), "padding" !== n && (o += ue.css(t, "border" + Dn[s] + "Width", !0, r)));
		return o
	}
	function N(t, e, n)
	{
		var i = !0,
			r = "width" === e ? t.offsetWidth : t.offsetHeight,
			s = hn(t),
			o = ue.support.boxSizing && "border-box" === ue.css(t, "boxSizing", !1, s);
		if (0 >= r || null == r)
		{
			if (r = dn(t, e, s), (0 > r || null == r) && (r = t.style[e]), bn.test(r)) return r;
			i = o && (ue.support.boxSizingReliable || r === t.style[e]), r = parseFloat(r) || 0
		}
		return r + T(t, e, n || (o ? "border" : "content"), i, s) + "px"
	}
	function S(t)
	{
		var e = Q,
			n = wn[t];
		return n || (n = M(t, e), "none" !== n && n || (un = (un || ue("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (un[0].contentWindow || un[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = M(t, e), un.detach()), wn[t] = n), n
	}
	function M(t, e)
	{
		var n = ue(e.createElement(t)).appendTo(e.body),
			i = ue.css(n[0], "display");
		return n.remove(), i
	}
	function I(t, e, n, i)
	{
		var r;
		if (ue.isArray(e)) ue.each(e, function (e, r)
		{
			n || Nn.test(t) ? i(t, r) : I(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
		});
		else if (n || "object" !== ue.type(e)) i(t, e);
		else for (r in e) I(t + "[" + r + "]", e[r], n, i)
	}
	function E(t)
	{
		return function (e, n)
		{
			"string" != typeof e && (n = e, e = "*");
			var i, r = 0,
				s = e.toLowerCase().match(de) || [];
			if (ue.isFunction(n)) for (; i = s[r++];)"+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
		}
	}
	function A(t, e, n, i)
	{
		function r(a)
		{
			var l;
			return s[a] = !0, ue.each(t[a] || [], function (t, a)
			{
				var c = a(e, n, i);
				return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
			}), l
		}
		var s =
		{
		},
			o = t === Bn;
		return r(e.dataTypes[0]) || !s["*"] && r("*")
	}
	function P(t, n)
	{
		var i, r, s = ue.ajaxSettings.flatOptions || {
		};
		for (r in n) n[r] !== e && ((s[r] ? t : i || (i =
		{
		}))[r] = n[r]);
		return i && ue.extend(!0, t, i), t
	}
	function j(t, n, i)
	{
		for (var r, s, o, a, l = t.contents, c = t.dataTypes;
		"*" === c[0];) c.shift(), s === e && (s = t.mimeType || n.getResponseHeader("Content-Type"));
		if (s) for (a in l) if (l[a] && l[a].test(s))
		{
			c.unshift(a);
			break
		}
		if (c[0] in i) o = c[0];
		else
		{
			for (a in i)
			{
				if (!c[0] || t.converters[a + " " + c[0]])
				{
					o = a;
					break
				}
				r || (r = a)
			}
			o = o || r
		}
		return o ? (o !== c[0] && c.unshift(o), i[o]) : void 0
	}
	function H(t, e, n, i)
	{
		var r, s, o, a, l, c =
		{
		},
			u = t.dataTypes.slice();
		if (u[1]) for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
		for (s = u.shift(); s;) if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift()) if ("*" === s) s = l;
		else if ("*" !== l && l !== s)
		{
			if (o = c[l + " " + s] || c["* " + s], !o) for (r in c) if (a = r.split(" "), a[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]]))
			{
				o === !0 ? o = c[r] : c[r] !== !0 && (s = a[0], u.unshift(a[1]));
				break
			}
			if (o !== !0) if (o && t["throws"]) e = o(e);
			else try
			{
				e = o(e)
			}
			catch (h)
			{
				return {
					state: "parsererror",
					error: o ? h : "No conversion from " + l + " to " + s
				}
			}
		}
		return {
			state: "success",
			data: e
		}
	}
	function F()
	{
		try
		{
			return new t.XMLHttpRequest
		}
		catch (e)
		{
		}
	}
	function L()
	{
		try
		{
			return new t.ActiveXObject("Microsoft.XMLHTTP")
		}
		catch (e)
		{
		}
	}
	function $()
	{
		return setTimeout(function ()
		{
			Zn = e
		}), Zn = ue.now()
	}
	function W(t, e, n)
	{
		for (var i, r = (si[e] || []).concat(si["*"]), s = 0, o = r.length; o > s; s++) if (i = r[s].call(n, e, t)) return i
	}
	function O(t, e, n)
	{
		var i, r, s = 0,
			o = ri.length,
			a = ue.Deferred().always(function ()
			{
				delete l.elem
			}),
			l = function ()
			{
				if (r) return !1;
				for (var e = Zn || $(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, s = 1 - i, o = 0, l = c.tweens.length; l > o; o++) c.tweens[o].run(s);
				return a.notifyWith(t, [c, s, n]), 1 > s && l ? n : (a.resolveWith(t, [c]), !1)
			},
			c = a.promise(
			{
				elem: t,
				props: ue.extend(
				{
				}, e),
				opts: ue.extend(!0, {
					specialEasing: {
					}
				}, n),
				originalProperties: e,
				originalOptions: n,
				startTime: Zn || $(),
				duration: n.duration,
				tweens: [],
				createTween: function (e, n)
				{
					var i = ue.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function (e)
				{
					var n = 0,
						i = e ? c.tweens.length : 0;
					if (r) return this;
					for (r = !0; i > n; n++) c.tweens[n].run(1);
					return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
				}
			}),
			u = c.props;
		for (R(u, c.opts.specialEasing); o > s; s++) if (i = ri[s].call(c, t, u, c.opts)) return i;
		return ue.map(u, W, c), ue.isFunction(c.opts.start) && c.opts.start.call(t, c), ue.fx.timer(ue.extend(l, {
			elem: t,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}
	function R(t, e)
	{
		var n, i, r, s, o;
		for (n in t) if (i = ue.camelCase(n), r = e[i], s = t[n], ue.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), o = ue.cssHooks[i], o && "expand" in o)
		{
			s = o.expand(s), delete t[i];
			for (n in s) n in t || (t[n] = s[n], e[n] = r)
		}
		else e[i] = r
	}
	function q(t, e, n)
	{
		var i, r, s, o, a, l, c = this,
			u =
			{
			},
			h = t.style,
			d = t.nodeType && k(t),
			p = ue._data(t, "fxshow");
		n.queue || (a = ue._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function ()
		{
			a.unqueued || l()
		}), a.unqueued++, c.always(function ()
		{
			c.always(function ()
			{
				a.unqueued--, ue.queue(t, "fx").length || a.empty.fire()
			})
		})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ue.css(t, "display") && "none" === ue.css(t, "float") && (ue.support.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ue.support.shrinkWrapBlocks || c.always(function ()
		{
			h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
		}));
		for (i in e) if (r = e[i], ei.exec(r))
		{
			if (delete e[i], s = s || "toggle" === r, r === (d ? "hide" : "show")) continue;
			u[i] = p && p[i] || ue.style(t, i)
		}
		if (!ue.isEmptyObject(u))
		{
			p ? "hidden" in p && (d = p.hidden) : p = ue._data(t, "fxshow", {
			}), s && (p.hidden = !d), d ? ue(t).show() : c.done(function ()
			{
				ue(t).hide()
			}), c.done(function ()
			{
				var e;
				ue._removeData(t, "fxshow");
				for (e in u) ue.style(t, e, u[e])
			});
			for (i in u) o = W(d ? p[i] : 0, i, c), i in p || (p[i] = o.start, d && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
		}
	}
	function Y(t, e, n, i, r)
	{
		return new Y.prototype.init(t, e, n, i, r)
	}
	function B(t, e)
	{
		var n, i =
		{
			height: t
		},
			r = 0;
		for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Dn[r], i["margin" + n] = i["padding" + n] = t;
		return e && (i.opacity = i.width = t), i
	}
	function z(t)
	{
		return ue.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
	}
	var K, X, U = typeof e,
		V = t.location,
		Q = t.document,
		J = Q.documentElement,
		G = t.jQuery,
		Z = t.$,
		te =
		{
		},
		ee = [],
		ne = "1.10.2",
		ie = ee.concat,
		re = ee.push,
		se = ee.slice,
		oe = ee.indexOf,
		ae = te.toString,
		le = te.hasOwnProperty,
		ce = ne.trim,
		ue = function (t, e)
		{
			return new ue.fn.init(t, e, X)
		},
		he = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		de = /\S+/g,
		pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ge = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		me = /^[\],:{}\s]*$/,
		ve = /(?:^|:|,)(?:\s*\[)+/g,
		ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		_e = /^-ms-/,
		we = /-([\da-z])/gi,
		xe = function (t, e)
		{
			return e.toUpperCase()
		},
		ke = function (t)
		{
			(Q.addEventListener || "load" === t.type || "complete" === Q.readyState) && (De(), ue.ready())
		},
		De = function ()
		{
			Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", ke, !1), t.removeEventListener("load", ke, !1)) : (Q.detachEvent("onreadystatechange", ke), t.detachEvent("onload", ke))
		};
	ue.fn = ue.prototype =
	{
		jquery: ne,
		constructor: ue,
		init: function (t, n, i)
		{
			var r, s;
			if (!t) return this;
			if ("string" == typeof t)
			{
				if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : fe.exec(t), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
				if (r[1])
				{
					if (n = n instanceof ue ? n[0] : n, ue.merge(this, ue.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : Q, !0)), ge.test(r[1]) && ue.isPlainObject(n)) for (r in n) ue.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
					return this
				}
				if (s = Q.getElementById(r[2]), s && s.parentNode)
				{
					if (s.id !== r[2]) return i.find(t);
					this.length = 1, this[0] = s
				}
				return this.context = Q, this.selector = t, this
			}
			return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ue.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ue.makeArray(t, this))
		},
		selector: "",
		length: 0,
		toArray: function ()
		{
			return se.call(this)
		},
		get: function (t)
		{
			return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
		},
		pushStack: function (t)
		{
			var e = ue.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function (t, e)
		{
			return ue.each(this, t, e)
		},
		ready: function (t)
		{
			return ue.ready.promise().done(t), this
		},
		slice: function ()
		{
			return this.pushStack(se.apply(this, arguments))
		},
		first: function ()
		{
			return this.eq(0)
		},
		last: function ()
		{
			return this.eq(-1)
		},
		eq: function (t)
		{
			var e = this.length,
				n = +t + (0 > t ? e : 0);
			return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
		},
		map: function (t)
		{
			return this.pushStack(ue.map(this, function (e, n)
			{
				return t.call(e, n, e)
			}))
		},
		end: function ()
		{
			return this.prevObject || this.constructor(null)
		},
		push: re,
		sort: [].sort,
		splice: [].splice
	}, ue.fn.init.prototype = ue.fn, ue.extend = ue.fn.extend = function ()
	{
		var t, n, i, r, s, o, a = arguments[0] || {
		},
			l = 1,
			c = arguments.length,
			u = !1;
		for ("boolean" == typeof a && (u = a, a = arguments[1] || {
		}, l = 2), "object" == typeof a || ue.isFunction(a) || (a =
		{
		}), c === l && (a = this, --l); c > l; l++) if (null != (s = arguments[l])) for (r in s) t = a[r], i = s[r], a !== i && (u && i && (ue.isPlainObject(i) || (n = ue.isArray(i))) ? (n ? (n = !1, o = t && ue.isArray(t) ? t : []) : o = t && ue.isPlainObject(t) ? t : {
		}, a[r] = ue.extend(u, o, i)) : i !== e && (a[r] = i));
		return a
	}, ue.extend(
	{
		expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
		noConflict: function (e)
		{
			return t.$ === ue && (t.$ = Z), e && t.jQuery === ue && (t.jQuery = G), ue
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function (t)
		{
			t ? ue.readyWait++ : ue.ready(!0)
		},
		ready: function (t)
		{
			if (t === !0 ? !--ue.readyWait : !ue.isReady)
			{
				if (!Q.body) return setTimeout(ue.ready);
				ue.isReady = !0, t !== !0 && --ue.readyWait > 0 || (K.resolveWith(Q, [ue]), ue.fn.trigger && ue(Q).trigger("ready").off("ready"))
			}
		},
		isFunction: function (t)
		{
			return "function" === ue.type(t)
		},
		isArray: Array.isArray ||
		function (t)
		{
			return "array" === ue.type(t)
		},
		isWindow: function (t)
		{
			return null != t && t == t.window
		},
		isNumeric: function (t)
		{
			return !isNaN(parseFloat(t)) && isFinite(t)
		},
		type: function (t)
		{
			return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? te[ae.call(t)] || "object" : typeof t
		},
		isPlainObject: function (t)
		{
			var n;
			if (!t || "object" !== ue.type(t) || t.nodeType || ue.isWindow(t)) return !1;
			try
			{
				if (t.constructor && !le.call(t, "constructor") && !le.call(t.constructor.prototype, "isPrototypeOf")) return !1
			}
			catch (i)
			{
				return !1
			}
			if (ue.support.ownLast) for (n in t) return le.call(t, n);
			for (n in t);
			return n === e || le.call(t, n)
		},
		isEmptyObject: function (t)
		{
			var e;
			for (e in t) return !1;
			return !0
		},
		error: function (t)
		{
			throw new Error(t)
		},
		parseHTML: function (t, e, n)
		{
			if (!t || "string" != typeof t) return null;
			"boolean" == typeof e && (n = e, e = !1), e = e || Q;
			var i = ge.exec(t),
				r = !n && [];
			return i ? [e.createElement(i[1])] : (i = ue.buildFragment([t], e, r), r && ue(r).remove(), ue.merge([], i.childNodes))
		},
		parseJSON: function (e)
		{
			return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = ue.trim(e), e && me.test(e.replace(ye, "@").replace(be, "]").replace(ve, ""))) ? new Function("return " + e)() : (ue.error("Invalid JSON: " + e), void 0)
		},
		parseXML: function (n)
		{
			var i, r;
			if (!n || "string" != typeof n) return null;
			try
			{
				t.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
			}
			catch (s)
			{
				i = e
			}
			return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ue.error("Invalid XML: " + n), i
		},
		noop: function ()
		{
		},
		globalEval: function (e)
		{
			e && ue.trim(e) && (t.execScript ||
			function (e)
			{
				t.eval.call(t, e)
			})(e)
		},
		camelCase: function (t)
		{
			return t.replace(_e, "ms-").replace(we, xe)
		},
		nodeName: function (t, e)
		{
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function (t, e, i)
		{
			var r, s = 0,
				o = t.length,
				a = n(t);
			if (i)
			{
				if (a) for (; o > s && (r = e.apply(t[s], i), r !== !1); s++);
				else for (s in t) if (r = e.apply(t[s], i), r === !1) break
			}
			else if (a) for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++);
			else for (s in t) if (r = e.call(t[s], s, t[s]), r === !1) break;
			return t
		},
		trim: ce && !ce.call("﻿ ") ?
		function (t)
		{
			return null == t ? "" : ce.call(t)
		} : function (t)
		{
			return null == t ? "" : (t + "").replace(pe, "")
		},
		makeArray: function (t, e)
		{
			var i = e || [];
			return null != t && (n(Object(t)) ? ue.merge(i, "string" == typeof t ? [t] : t) : re.call(i, t)), i
		},
		inArray: function (t, e, n)
		{
			var i;
			if (e)
			{
				if (oe) return oe.call(e, t, n);
				for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in e && e[n] === t) return n
			}
			return -1
		},
		merge: function (t, n)
		{
			var i = n.length,
				r = t.length,
				s = 0;
			if ("number" == typeof i) for (; i > s; s++) t[r++] = n[s];
			else for (; n[s] !== e;) t[r++] = n[s++];
			return t.length = r, t
		},
		grep: function (t, e, n)
		{
			var i, r = [],
				s = 0,
				o = t.length;
			for (n = !! n; o > s; s++) i = !! e(t[s], s), n !== i && r.push(t[s]);
			return r
		},
		map: function (t, e, i)
		{
			var r, s = 0,
				o = t.length,
				a = n(t),
				l = [];
			if (a) for (; o > s; s++) r = e(t[s], s, i), null != r && (l[l.length] = r);
			else for (s in t) r = e(t[s], s, i), null != r && (l[l.length] = r);
			return ie.apply([], l)
		},
		guid: 1,
		proxy: function (t, n)
		{
			var i, r, s;
			return "string" == typeof n && (s = t[n], n = t, t = s), ue.isFunction(t) ? (i = se.call(arguments, 2), r = function ()
			{
				return t.apply(n || this, i.concat(se.call(arguments)))
			}, r.guid = t.guid = t.guid || ue.guid++, r) : e
		},
		access: function (t, n, i, r, s, o, a)
		{
			var l = 0,
				c = t.length,
				u = null == i;
			if ("object" === ue.type(i))
			{
				s = !0;
				for (l in i) ue.access(t, n, l, i[l], !0, o, a)
			}
			else if (r !== e && (s = !0, ue.isFunction(r) || (a = !0), u && (a ? (n.call(t, r), n = null) : (u = n, n = function (t, e, n)
			{
				return u.call(ue(t), n)
			})), n)) for (; c > l; l++) n(t[l], i, a ? r : r.call(t[l], l, n(t[l], i)));
			return s ? t : u ? n.call(t) : c ? n(t[0], i) : o
		},
		now: function ()
		{
			return (new Date).getTime()
		},
		swap: function (t, e, n, i)
		{
			var r, s, o =
			{
			};
			for (s in e) o[s] = t.style[s], t.style[s] = e[s];
			r = n.apply(t, i || []);
			for (s in e) t.style[s] = o[s];
			return r
		}
	}), ue.ready.promise = function (e)
	{
		if (!K) if (K = ue.Deferred(), "complete" === Q.readyState) setTimeout(ue.ready);
		else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", ke, !1), t.addEventListener("load", ke, !1);
		else
		{
			Q.attachEvent("onreadystatechange", ke), t.attachEvent("onload", ke);
			var n = !1;
			try
			{
				n = null == t.frameElement && Q.documentElement
			}
			catch (i)
			{
			}
			n && n.doScroll &&
			function r()
			{
				if (!ue.isReady)
				{
					try
					{
						n.doScroll("left")
					}
					catch (t)
					{
						return setTimeout(r, 50)
					}
					De(), ue.ready()
				}
			}()
		}
		return K.promise(e)
	}, ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e)
	{
		te["[object " + e + "]"] = e.toLowerCase()
	}), X = ue(Q),
/*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */

	function (t, e)
	{
		function n(t, e, n, i)
		{
			var r, s, o, a, l, c, u, h, f, g;
			if ((e ? e.ownerDocument || e : O) !== A && E(e), e = e || A, n = n || [], !t || "string" != typeof t) return n;
			if (1 !== (a = e.nodeType) && 9 !== a) return [];
			if (j && !i)
			{
				if (r = be.exec(t)) if (o = r[1])
				{
					if (9 === a)
					{
						if (s = e.getElementById(o), !s || !s.parentNode) return n;
						if (s.id === o) return n.push(s), n
					}
					else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && $(e, s) && s.id === o) return n.push(s), n
				}
				else
				{
					if (r[2]) return te.apply(n, e.getElementsByTagName(t)), n;
					if ((o = r[3]) && k.getElementsByClassName && e.getElementsByClassName) return te.apply(n, e.getElementsByClassName(o)), n
				}
				if (k.qsa && (!H || !H.test(t)))
				{
					if (h = u = W, f = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase())
					{
						for (c = d(t), (u = e.getAttribute("id")) ? h = u.replace(xe, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + p(c[l]);
						f = pe.test(t) && e.parentNode || e, g = c.join(",")
					}
					if (g) try
					{
						return te.apply(n, f.querySelectorAll(g)), n
					}
					catch (m)
					{
					}
					finally
					{
						u || e.removeAttribute("id")
					}
				}
			}
			return w(t.replace(ce, "$1"), e, n, i)
		}
		function i()
		{
			function t(n, i)
			{
				return e.push(n += " ") > C.cacheLength && delete t[e.shift()], t[n] = i
			}
			var e = [];
			return t
		}
		function r(t)
		{
			return t[W] = !0, t
		}
		function s(t)
		{
			var e = A.createElement("div");
			try
			{
				return !!t(e)
			}
			catch (n)
			{
				return !1
			}
			finally
			{
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}
		function o(t, e)
		{
			for (var n = t.split("|"), i = t.length; i--;) C.attrHandle[n[i]] = e
		}
		function a(t, e)
		{
			var n = e && t,
				i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
			if (i) return i;
			if (n) for (; n = n.nextSibling;) if (n === e) return -1;
			return t ? 1 : -1
		}
		function l(t)
		{
			return function (e)
			{
				var n = e.nodeName.toLowerCase();
				return "input" === n && e.type === t
			}
		}
		function c(t)
		{
			return function (e)
			{
				var n = e.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && e.type === t
			}
		}
		function u(t)
		{
			return r(function (e)
			{
				return e = +e, r(function (n, i)
				{
					for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
				})
			})
		}
		function h()
		{
		}
		function d(t, e)
		{
			var i, r, s, o, a, l, c, u = B[t + " "];
			if (u) return e ? 0 : u.slice(0);
			for (a = t, l = [], c = C.preFilter; a;)
			{
				(!i || (r = he.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = de.exec(a)) && (i = r.shift(), s.push(
				{
					value: i,
					type: r[0].replace(ce, " ")
				}), a = a.slice(i.length));
				for (o in C.filter)!(r = ve[o].exec(a)) || c[o] && !(r = c[o](r)) || (i = r.shift(), s.push(
				{
					value: i,
					type: o,
					matches: r
				}), a = a.slice(i.length));
				if (!i) break
			}
			return e ? a.length : a ? n.error(t) : B(t, l).slice(0)
		}
		function p(t)
		{
			for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
			return i
		}
		function f(t, e, n)
		{
			var i = e.dir,
				r = n && "parentNode" === i,
				s = q++;
			return e.first ?
			function (e, n, s)
			{
				for (; e = e[i];) if (1 === e.nodeType || r) return t(e, n, s)
			} : function (e, n, o)
			{
				var a, l, c, u = R + " " + s;
				if (o)
				{
					for (; e = e[i];) if ((1 === e.nodeType || r) && t(e, n, o)) return !0
				}
				else for (; e = e[i];) if (1 === e.nodeType || r) if (c = e[W] || (e[W] =
				{
				}), (l = c[i]) && l[0] === u)
				{
					if ((a = l[1]) === !0 || a === D) return a === !0
				}
				else if (l = c[i] = [u], l[1] = t(e, n, o) || D, l[1] === !0) return !0
			}
		}
		function g(t)
		{
			return t.length > 1 ?
			function (e, n, i)
			{
				for (var r = t.length; r--;) if (!t[r](e, n, i)) return !1;
				return !0
			} : t[0]
		}
		function m(t, e, n, i, r)
		{
			for (var s, o = [], a = 0, l = t.length, c = null != e; l > a; a++)(s = t[a]) && (!n || n(s, i, r)) && (o.push(s), c && e.push(a));
			return o
		}
		function v(t, e, n, i, s, o)
		{
			return i && !i[W] && (i = v(i)), s && !s[W] && (s = v(s, o)), r(function (r, o, a, l)
			{
				var c, u, h, d = [],
					p = [],
					f = o.length,
					g = r || _(e || "*", a.nodeType ? [a] : a, []),
					v = !t || !r && e ? g : m(g, d, t, a, l),
					y = n ? s || (r ? t : f || i) ? [] : o : v;
				if (n && n(v, y, a, l), i) for (c = m(y, p), i(c, [], a, l), u = c.length; u--;)(h = c[u]) && (y[p[u]] = !(v[p[u]] = h));
				if (r)
				{
					if (s || t)
					{
						if (s)
						{
							for (c = [], u = y.length; u--;)(h = y[u]) && c.push(v[u] = h);
							s(null, y = [], c, l)
						}
						for (u = y.length; u--;)(h = y[u]) && (c = s ? ne.call(r, h) : d[u]) > -1 && (r[c] = !(o[c] = h))
					}
				}
				else y = m(y === o ? y.splice(f, y.length) : y), s ? s(null, o, y, l) : te.apply(o, y)
			})
		}
		function y(t)
		{
			for (var e, n, i, r = t.length, s = C.relative[t[0].type], o = s || C.relative[" "], a = s ? 1 : 0, l = f(function (t)
			{
				return t === e
			}, o, !0), c = f(function (t)
			{
				return ne.call(e, t) > -1
			}, o, !0), u = [function (t, n, i)
			{
				return !s && (i || n !== M) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i))}]; r > a; a++) if (n = C.relative[t[a].type]) u = [f(g(u), n)];
			else
			{
				if (n = C.filter[t[a].type].apply(null, t[a].matches), n[W])
				{
					for (i = ++a; r > i && !C.relative[t[i].type]; i++);
					return v(a > 1 && g(u), a > 1 && p(t.slice(0, a - 1).concat(
					{
						value: " " === t[a - 2].type ? "*" : ""
					})).replace(ce, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && p(t))
				}
				u.push(n)
			}
			return g(u)
		}
		function b(t, e)
		{
			var i = 0,
				s = e.length > 0,
				o = t.length > 0,
				a = function (r, a, l, c, u)
				{
					var h, d, p, f = [],
						g = 0,
						v = "0",
						y = r && [],
						b = null != u,
						_ = M,
						w = r || o && C.find.TAG("*", u && a.parentNode || a),
						x = R += null == _ ? 1 : Math.random() || .1;
					for (b && (M = a !== A && a, D = i); null != (h = w[v]); v++)
					{
						if (o && h)
						{
							for (d = 0; p = t[d++];) if (p(h, a, l))
							{
								c.push(h);
								break
							}
							b && (R = x, D = ++i)
						}
						s && ((h = !p && h) && g--, r && y.push(h))
					}
					if (g += v, s && v !== g)
					{
						for (d = 0; p = e[d++];) p(y, f, a, l);
						if (r)
						{
							if (g > 0) for (; v--;) y[v] || f[v] || (f[v] = G.call(c));
							f = m(f)
						}
						te.apply(c, f), b && !r && f.length > 0 && g + e.length > 1 && n.uniqueSort(c)
					}
					return b && (R = x, M = _), y
				};
			return s ? r(a) : a
		}
		function _(t, e, i)
		{
			for (var r = 0, s = e.length; s > r; r++) n(t, e[r], i);
			return i
		}
		function w(t, e, n, i)
		{
			var r, s, o, a, l, c = d(t);
			if (!i && 1 === c.length)
			{
				if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && k.getById && 9 === e.nodeType && j && C.relative[s[1].type])
				{
					if (e = (C.find.ID(o.matches[0].replace(ke, De), e) || [])[0], !e) return n;
					t = t.slice(s.shift().value.length)
				}
				for (r = ve.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !C.relative[a = o.type]);) if ((l = C.find[a]) && (i = l(o.matches[0].replace(ke, De), pe.test(s[0].type) && e.parentNode || e)))
				{
					if (s.splice(r, 1), t = i.length && p(s), !t) return te.apply(n, i), n;
					break
				}
			}
			return S(t, c)(i, e, !j, n, pe.test(t)), n
		}
		var x, k, D, C, T, N, S, M, I, E, A, P, j, H, F, L, $, W = "sizzle" + -new Date,
			O = t.document,
			R = 0,
			q = 0,
			Y = i(),
			B = i(),
			z = i(),
			K = !1,
			X = function (t, e)
			{
				return t === e ? (K = !0, 0) : 0
			},
			U = typeof e,
			V = 1 << 31,
			Q =
			{
			}.hasOwnProperty,
			J = [],
			G = J.pop,
			Z = J.push,
			te = J.push,
			ee = J.slice,
			ne = J.indexOf ||
			function (t)
			{
				for (var e = 0, n = this.length; n > e; e++) if (this[e] === t) return e;
				return -1
			},
			ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			re = "[\\x20\\t\\r\\n\\f]",
			se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			oe = se.replace("w", "w#"),
			ae = "\\[" + re + "*(" + se + ")" + re + "*(?:([*^$|!~]?=)" + re + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + re + "*\\]",
			le = ":(" + se + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
			ce = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
			he = new RegExp("^" + re + "*," + re + "*"),
			de = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
			pe = new RegExp(re + "*[+~]"),
			fe = new RegExp("=" + re + "*([^\\]'\"]*)" + re + "*\\]", "g"),
			ge = new RegExp(le),
			me = new RegExp("^" + oe + "$"),
			ve =
			{
				ID: new RegExp("^#(" + se + ")"),
				CLASS: new RegExp("^\\.(" + se + ")"),
				TAG: new RegExp("^(" + se.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + ae),
				PSEUDO: new RegExp("^" + le),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + ie + ")$", "i"),
				needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
			},
			ye = /^[^{]+\{\s*\[native \w/,
			be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			_e = /^(?:input|select|textarea|button)$/i,
			we = /^h\d$/i,
			xe = /'|\\/g,
			ke = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
			De = function (t, e, n)
			{
				var i = "0x" + e - 65536;
				return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
			};
		try
		{
			te.apply(J = ee.call(O.childNodes), O.childNodes), J[O.childNodes.length].nodeType
		}
		catch (Ce)
		{
			te =
			{
				apply: J.length ?
				function (t, e)
				{
					Z.apply(t, ee.call(e))
				} : function (t, e)
				{
					for (var n = t.length, i = 0; t[n++] = e[i++];);
					t.length = n - 1
				}
			}
		}
		N = n.isXML = function (t)
		{
			var e = t && (t.ownerDocument || t).documentElement;
			return e ? "HTML" !== e.nodeName : !1
		}, k = n.support =
		{
		}, E = n.setDocument = function (t)
		{
			var e = t ? t.ownerDocument || t : O,
				n = e.defaultView;
			return e !== A && 9 === e.nodeType && e.documentElement ? (A = e, P = e.documentElement, j = !N(e), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function ()
			{
				E()
			}), k.attributes = s(function (t)
			{
				return t.className = "i", !t.getAttribute("className")
			}), k.getElementsByTagName = s(function (t)
			{
				return t.appendChild(e.createComment("")), !t.getElementsByTagName("*").length
			}), k.getElementsByClassName = s(function (t)
			{
				return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
			}), k.getById = s(function (t)
			{
				return P.appendChild(t).id = W, !e.getElementsByName || !e.getElementsByName(W).length
			}), k.getById ? (C.find.ID = function (t, e)
			{
				if (typeof e.getElementById !== U && j)
				{
					var n = e.getElementById(t);
					return n && n.parentNode ? [n] : []
				}
			}, C.filter.ID = function (t)
			{
				var e = t.replace(ke, De);
				return function (t)
				{
					return t.getAttribute("id") === e
				}
			}) : (delete C.find.ID, C.filter.ID = function (t)
			{
				var e = t.replace(ke, De);
				return function (t)
				{
					var n = typeof t.getAttributeNode !== U && t.getAttributeNode("id");
					return n && n.value === e
				}
			}), C.find.TAG = k.getElementsByTagName ?
			function (t, e)
			{
				return typeof e.getElementsByTagName !== U ? e.getElementsByTagName(t) : void 0
			} : function (t, e)
			{
				var n, i = [],
					r = 0,
					s = e.getElementsByTagName(t);
				if ("*" === t)
				{
					for (; n = s[r++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return s
			}, C.find.CLASS = k.getElementsByClassName &&
			function (t, e)
			{
				return typeof e.getElementsByClassName !== U && j ? e.getElementsByClassName(t) : void 0
			}, F = [], H = [], (k.qsa = ye.test(e.querySelectorAll)) && (s(function (t)
			{
				t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || H.push("\\[" + re + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || H.push(":checked")
			}), s(function (t)
			{
				var n = e.createElement("input");
				n.setAttribute("type", "hidden"), t.appendChild(n).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && H.push("[*^$]=" + re + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
			})), (k.matchesSelector = ye.test(L = P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && s(function (t)
			{
				k.disconnectedMatch = L.call(t, "div"), L.call(t, "[s!='']:x"), F.push("!=", le)
			}), H = H.length && new RegExp(H.join("|")), F = F.length && new RegExp(F.join("|")), $ = ye.test(P.contains) || P.compareDocumentPosition ?
			function (t, e)
			{
				var n = 9 === t.nodeType ? t.documentElement : t,
					i = e && e.parentNode;
				return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
			} : function (t, e)
			{
				if (e) for (; e = e.parentNode;) if (e === t) return !0;
				return !1
			}, X = P.compareDocumentPosition ?
			function (t, n)
			{
				if (t === n) return K = !0, 0;
				var i = n.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(n);
				return i ? 1 & i || !k.sortDetached && n.compareDocumentPosition(t) === i ? t === e || $(O, t) ? -1 : n === e || $(O, n) ? 1 : I ? ne.call(I, t) - ne.call(I, n) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
			} : function (t, n)
			{
				var i, r = 0,
					s = t.parentNode,
					o = n.parentNode,
					l = [t],
					c = [n];
				if (t === n) return K = !0, 0;
				if (!s || !o) return t === e ? -1 : n === e ? 1 : s ? -1 : o ? 1 : I ? ne.call(I, t) - ne.call(I, n) : 0;
				if (s === o) return a(t, n);
				for (i = t; i = i.parentNode;) l.unshift(i);
				for (i = n; i = i.parentNode;) c.unshift(i);
				for (; l[r] === c[r];) r++;
				return r ? a(l[r], c[r]) : l[r] === O ? -1 : c[r] === O ? 1 : 0
			}, e) : A
		}, n.matches = function (t, e)
		{
			return n(t, null, null, e)
		}, n.matchesSelector = function (t, e)
		{
			if ((t.ownerDocument || t) !== A && E(t), e = e.replace(fe, "='$1']"), !(!k.matchesSelector || !j || F && F.test(e) || H && H.test(e))) try
			{
				var i = L.call(t, e);
				if (i || k.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
			}
			catch (r)
			{
			}
			return n(e, A, null, [t]).length > 0
		}, n.contains = function (t, e)
		{
			return (t.ownerDocument || t) !== A && E(t), $(t, e)
		}, n.attr = function (t, n)
		{
			(t.ownerDocument || t) !== A && E(t);
			var i = C.attrHandle[n.toLowerCase()],
				r = i && Q.call(C.attrHandle, n.toLowerCase()) ? i(t, n, !j) : e;
			return r === e ? k.attributes || !j ? t.getAttribute(n) : (r = t.getAttributeNode(n)) && r.specified ? r.value : null : r
		}, n.error = function (t)
		{
			throw new Error("Syntax error, unrecognized expression: " + t)
		}, n.uniqueSort = function (t)
		{
			var e, n = [],
				i = 0,
				r = 0;
			if (K = !k.detectDuplicates, I = !k.sortStable && t.slice(0), t.sort(X), K)
			{
				for (; e = t[r++];) e === t[r] && (i = n.push(r));
				for (; i--;) t.splice(n[i], 1)
			}
			return t
		}, T = n.getText = function (t)
		{
			var e, n = "",
				i = 0,
				r = t.nodeType;
			if (r)
			{
				if (1 === r || 9 === r || 11 === r)
				{
					if ("string" == typeof t.textContent) return t.textContent;
					for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
				}
				else if (3 === r || 4 === r) return t.nodeValue
			}
			else for (; e = t[i]; i++) n += T(e);
			return n
		}, C = n.selectors =
		{
			cacheLength: 50,
			createPseudo: r,
			match: ve,
			attrHandle: {
			},
			find: {
			},
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
				ATTR: function (t)
				{
					return t[1] = t[1].replace(ke, De), t[3] = (t[4] || t[5] || "").replace(ke, De), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
				},
				CHILD: function (t)
				{
					return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
				},
				PSEUDO: function (t)
				{
					var n, i = !t[5] && t[2];
					return ve.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : i && ge.test(i) && (n = d(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), t[2] = i.slice(0, n)), t.slice(0, 3))
				}
			},
			filter: {
				TAG: function (t)
				{
					var e = t.replace(ke, De).toLowerCase();
					return "*" === t ?
					function ()
					{
						return !0
					} : function (t)
					{
						return t.nodeName && t.nodeName.toLowerCase() === e
					}
				},
				CLASS: function (t)
				{
					var e = Y[t + " "];
					return e || (e = new RegExp("(^|" + re + ")" + t + "(" + re + "|$)")) && Y(t, function (t)
					{
						return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== U && t.getAttribute("class") || "")
					})
				},
				ATTR: function (t, e, i)
				{
					return function (r)
					{
						var s = n.attr(r, t);
						return null == s ? "!=" === e : e ? (s += "", "=" === e ? s === i : "!=" === e ? s !== i : "^=" === e ? i && 0 === s.indexOf(i) : "*=" === e ? i && s.indexOf(i) > -1 : "$=" === e ? i && s.slice(-i.length) === i : "~=" === e ? (" " + s + " ").indexOf(i) > -1 : "|=" === e ? s === i || s.slice(0, i.length + 1) === i + "-" : !1) : !0
					}
				},
				CHILD: function (t, e, n, i, r)
				{
					var s = "nth" !== t.slice(0, 3),
						o = "last" !== t.slice(-4),
						a = "of-type" === e;
					return 1 === i && 0 === r ?
					function (t)
					{
						return !!t.parentNode
					} : function (e, n, l)
					{
						var c, u, h, d, p, f, g = s !== o ? "nextSibling" : "previousSibling",
							m = e.parentNode,
							v = a && e.nodeName.toLowerCase(),
							y = !l && !a;
						if (m)
						{
							if (s)
							{
								for (; g;)
								{
									for (h = e; h = h[g];) if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
									f = g = "only" === t && !f && "nextSibling"
								}
								return !0
							}
							if (f = [o ? m.firstChild : m.lastChild], o && y)
							{
								for (u = m[W] || (m[W] =
								{
								}), c = u[t] || [], p = c[0] === R && c[1], d = c[0] === R && c[2], h = p && m.childNodes[p]; h = ++p && h && h[g] || (d = p = 0) || f.pop();) if (1 === h.nodeType && ++d && h === e)
								{
									u[t] = [R, p, d];
									break
								}
							}
							else if (y && (c = (e[W] || (e[W] =
							{
							}))[t]) && c[0] === R) d = c[1];
							else for (;
							(h = ++p && h && h[g] || (d = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[W] || (h[W] =
							{
							}))[t] = [R, d]), h !== e)););
							return d -= r, d === i || 0 === d % i && d / i >= 0
						}
					}
				},
				PSEUDO: function (t, e)
				{
					var i, s = C.pseudos[t] || C.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
					return s[W] ? s(e) : s.length > 1 ? (i = [t, t, "", e], C.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, n)
					{
						for (var i, r = s(t, e), o = r.length; o--;) i = ne.call(t, r[o]), t[i] = !(n[i] = r[o])
					}) : function (t)
					{
						return s(t, 0, i)
					}) : s
				}
			},
			pseudos: {
				not: r(function (t)
				{
					var e = [],
						n = [],
						i = S(t.replace(ce, "$1"));
					return i[W] ? r(function (t, e, n, r)
					{
						for (var s, o = i(t, null, r, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
					}) : function (t, r, s)
					{
						return e[0] = t, i(e, null, s, n), !n.pop()
					}
				}),
				has: r(function (t)
				{
					return function (e)
					{
						return n(t, e).length > 0
					}
				}),
				contains: r(function (t)
				{
					return function (e)
					{
						return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
					}
				}),
				lang: r(function (t)
				{
					return me.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(ke, De).toLowerCase(), function (e)
					{
						var n;
						do
						if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
						while ((e = e.parentNode) && 1 === e.nodeType);
						return !1
					}
				}),
				target: function (e)
				{
					var n = t.location && t.location.hash;
					return n && n.slice(1) === e.id
				},
				root: function (t)
				{
					return t === P
				},
				focus: function (t)
				{
					return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
				},
				enabled: function (t)
				{
					return t.disabled === !1
				},
				disabled: function (t)
				{
					return t.disabled === !0
				},
				checked: function (t)
				{
					var e = t.nodeName.toLowerCase();
					return "input" === e && !! t.checked || "option" === e && !! t.selected
				},
				selected: function (t)
				{
					return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
				},
				empty: function (t)
				{
					for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
					return !0
				},
				parent: function (t)
				{
					return !C.pseudos.empty(t)
				},
				header: function (t)
				{
					return we.test(t.nodeName)
				},
				input: function (t)
				{
					return _e.test(t.nodeName)
				},
				button: function (t)
				{
					var e = t.nodeName.toLowerCase();
					return "input" === e && "button" === t.type || "button" === e
				},
				text: function (t)
				{
					var e;
					return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
				},
				first: u(function ()
				{
					return [0]
				}),
				last: u(function (t, e)
				{
					return [e - 1]
				}),
				eq: u(function (t, e, n)
				{
					return [0 > n ? n + e : n]
				}),
				even: u(function (t, e)
				{
					for (var n = 0; e > n; n += 2) t.push(n);
					return t
				}),
				odd: u(function (t, e)
				{
					for (var n = 1; e > n; n += 2) t.push(n);
					return t
				}),
				lt: u(function (t, e, n)
				{
					for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
					return t
				}),
				gt: u(function (t, e, n)
				{
					for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
					return t
				})
			}
		}, C.pseudos.nth = C.pseudos.eq;
		for (x in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) C.pseudos[x] = l(x);
		for (x in {
			submit: !0,
			reset: !0
		}) C.pseudos[x] = c(x);
		h.prototype = C.filters = C.pseudos, C.setFilters = new h, S = n.compile = function (t, e)
		{
			var n, i = [],
				r = [],
				s = z[t + " "];
			if (!s)
			{
				for (e || (e = d(t)), n = e.length; n--;) s = y(e[n]), s[W] ? i.push(s) : r.push(s);
				s = z(t, b(r, i))
			}
			return s
		}, k.sortStable = W.split("").sort(X).join("") === W, k.detectDuplicates = K, E(), k.sortDetached = s(function (t)
		{
			return 1 & t.compareDocumentPosition(A.createElement("div"))
		}), s(function (t)
		{
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function (t, e, n)
		{
			return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), k.attributes && s(function (t)
		{
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || o("value", function (t, e, n)
		{
			return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
		}), s(function (t)
		{
			return null == t.getAttribute("disabled")
		}) || o(ie, function (t, e, n)
		{
			var i;
			return n ? void 0 : (i = t.getAttributeNode(e)) && i.specified ? i.value : t[e] === !0 ? e.toLowerCase() : null
		}), ue.find = n, ue.expr = n.selectors, ue.expr[":"] = ue.expr.pseudos, ue.unique = n.uniqueSort, ue.text = n.getText, ue.isXMLDoc = n.isXML, ue.contains = n.contains
	}(t);
	var Ce =
	{
	};
	ue.Callbacks = function (t)
	{
		t = "string" == typeof t ? Ce[t] || i(t) : ue.extend(
		{
		}, t);
		var n, r, s, o, a, l, c = [],
			u = !t.once && [],
			h = function (e)
			{
				for (r = t.memory && e, s = !0, a = l || 0, l = 0, o = c.length, n = !0; c && o > a; a++) if (c[a].apply(e[0], e[1]) === !1 && t.stopOnFalse)
				{
					r = !1;
					break
				}
				n = !1, c && (u ? u.length && h(u.shift()) : r ? c = [] : d.disable())
			},
			d =
			{
				add: function ()
				{
					if (c)
					{
						var e = c.length;
						!
						function i(e)
						{
							ue.each(e, function (e, n)
							{
								var r = ue.type(n);
								"function" === r ? t.unique && d.has(n) || c.push(n) : n && n.length && "string" !== r && i(n)
							})
						}(arguments), n ? o = c.length : r && (l = e, h(r))
					}
					return this
				},
				remove: function ()
				{
					return c && ue.each(arguments, function (t, e)
					{
						for (var i;
						(i = ue.inArray(e, c, i)) > -1;) c.splice(i, 1), n && (o >= i && o--, a >= i && a--)
					}), this
				},
				has: function (t)
				{
					return t ? ue.inArray(t, c) > -1 : !(!c || !c.length)
				},
				empty: function ()
				{
					return c = [], o = 0, this
				},
				disable: function ()
				{
					return c = u = r = e, this
				},
				disabled: function ()
				{
					return !c
				},
				lock: function ()
				{
					return u = e, r || d.disable(), this
				},
				locked: function ()
				{
					return !u
				},
				fireWith: function (t, e)
				{
					return !c || s && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? u.push(e) : h(e)), this
				},
				fire: function ()
				{
					return d.fireWith(this, arguments), this
				},
				fired: function ()
				{
					return !!s
				}
			};
		return d
	}, ue.extend(
	{
		Deferred: function (t)
		{
			var e = [["resolve", "done", ue.Callbacks("once memory"), "resolved"], ["reject", "fail", ue.Callbacks("once memory"), "rejected"], ["notify", "progress", ue.Callbacks("memory")]],
				n = "pending",
				i =
				{
					state: function ()
					{
						return n
					},
					always: function ()
					{
						return r.done(arguments).fail(arguments), this
					},
					then: function ()
					{
						var t = arguments;
						return ue.Deferred(function (n)
						{
							ue.each(e, function (e, s)
							{
								var o = s[0],
									a = ue.isFunction(t[e]) && t[e];
								r[s[1]](function ()
								{
									var t = a && a.apply(this, arguments);
									t && ue.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
								})
							}), t = null
						}).promise()
					},
					promise: function (t)
					{
						return null != t ? ue.extend(t, i) : i
					}
				},
				r =
				{
				};
			return i.pipe = i.then, ue.each(e, function (t, s)
			{
				var o = s[2],
					a = s[3];
				i[s[1]] = o.add, a && o.add(function ()
				{
					n = a
				}, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function ()
				{
					return r[s[0] + "With"](this === r ? i : this, arguments), this
				}, r[s[0] + "With"] = o.fireWith
			}), i.promise(r), t && t.call(r, r), r
		},
		when: function (t)
		{
			var e, n, i, r = 0,
				s = se.call(arguments),
				o = s.length,
				a = 1 !== o || t && ue.isFunction(t.promise) ? o : 0,
				l = 1 === a ? t : ue.Deferred(),
				c = function (t, n, i)
				{
					return function (r)
					{
						n[t] = this, i[t] = arguments.length > 1 ? se.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
					}
				};
			if (o > 1) for (e = new Array(o), n = new Array(o), i = new Array(o); o > r; r++) s[r] && ue.isFunction(s[r].promise) ? s[r].promise().done(c(r, i, s)).fail(l.reject).progress(c(r, n, e)) : --a;
			return a || l.resolveWith(i, s), l.promise()
		}
	}), ue.support = function (e)
	{
		var n, i, r, s, o, a, l, c, u, h = Q.createElement("div");
		if (h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = h.getElementsByTagName("*") || [], i = h.getElementsByTagName("a")[0], !i || !i.style || !n.length) return e;
		s = Q.createElement("select"), a = s.appendChild(Q.createElement("option")), r = h.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== h.className, e.leadingWhitespace = 3 === h.firstChild.nodeType, e.tbody = !h.getElementsByTagName("tbody").length, e.htmlSerialize = !! h.getElementsByTagName("link").length, e.style = /top/.test(i.getAttribute("style")), e.hrefNormalized = "/a" === i.getAttribute("href"), e.opacity = /^0.5/.test(i.style.opacity), e.cssFloat = !! i.style.cssFloat, e.checkOn = !! r.value, e.optSelected = a.selected, e.enctype = !! Q.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, r.checked = !0, e.noCloneChecked = r.cloneNode(!0).checked, s.disabled = !0, e.optDisabled = !a.disabled;
		try
		{
			delete h.test
		}
		catch (d)
		{
			e.deleteExpando = !1
		}
		r = Q.createElement("input"), r.setAttribute("value", ""), e.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), e.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), o = Q.createDocumentFragment(), o.appendChild(r), e.appendChecked = r.checked, e.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, h.attachEvent && (h.attachEvent("onclick", function ()
		{
			e.noCloneEvent = !1
		}), h.cloneNode(!0).click());
		for (u in {
			submit: !0,
			change: !0,
			focusin: !0
		}) h.setAttribute(l = "on" + u, "t"), e[u + "Bubbles"] = l in t || h.attributes[l].expando === !1;
		h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === h.style.backgroundClip;
		for (u in ue(e)) break;
		return e.ownLast = "0" !== u, ue(function ()
		{
			var n, i, r, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				o = Q.getElementsByTagName("body")[0];
			o && (n = Q.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(n).appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = h.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", e.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ue.swap(o, null != o.style.zoom ? {
				zoom: 1
			} : {
			}, function ()
			{
				e.boxSizing = 4 === h.offsetWidth
			}), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(h, null) || {
			}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(h, null) || {
				width: "4px"
			}).width, i = h.appendChild(Q.createElement("div")), i.style.cssText = h.style.cssText = s, i.style.marginRight = i.style.width = "0", h.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {
			}).marginRight)), typeof h.style.zoom !== U && (h.innerHTML = "", h.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== h.offsetWidth, e.inlineBlockNeedsLayout && (o.style.zoom = 1)), o.removeChild(n), n = h = r = i = null)
		}), n = s = o = a = i = r = null, e
	}(
	{
	});
	var Te = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		Ne = /([A-Z])/g;
	ue.extend(
	{
		cache: {
		},
		noData: {
			applet: !0,
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function (t)
		{
			return t = t.nodeType ? ue.cache[t[ue.expando]] : t[ue.expando], !! t && !a(t)
		},
		data: function (t, e, n)
		{
			return r(t, e, n)
		},
		removeData: function (t, e)
		{
			return s(t, e)
		},
		_data: function (t, e, n)
		{
			return r(t, e, n, !0)
		},
		_removeData: function (t, e)
		{
			return s(t, e, !0)
		},
		acceptData: function (t)
		{
			if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
			var e = t.nodeName && ue.noData[t.nodeName.toLowerCase()];
			return !e || e !== !0 && t.getAttribute("classid") === e
		}
	}), ue.fn.extend(
	{
		data: function (t, n)
		{
			var i, r, s = null,
				a = 0,
				l = this[0];
			if (t === e)
			{
				if (this.length && (s = ue.data(l), 1 === l.nodeType && !ue._data(l, "parsedAttrs")))
				{
					for (i = l.attributes; a < i.length; a++) r = i[a].name, 0 === r.indexOf("data-") && (r = ue.camelCase(r.slice(5)), o(l, r, s[r]));
					ue._data(l, "parsedAttrs", !0)
				}
				return s
			}
			return "object" == typeof t ? this.each(function ()
			{
				ue.data(this, t)
			}) : arguments.length > 1 ? this.each(function ()
			{
				ue.data(this, t, n)
			}) : l ? o(l, t, ue.data(l, t)) : null
		},
		removeData: function (t)
		{
			return this.each(function ()
			{
				ue.removeData(this, t)
			})
		}
	}), ue.extend(
	{
		queue: function (t, e, n)
		{
			var i;
			return t ? (e = (e || "fx") + "queue", i = ue._data(t, e), n && (!i || ue.isArray(n) ? i = ue._data(t, e, ue.makeArray(n)) : i.push(n)), i || []) : void 0
		},
		dequeue: function (t, e)
		{
			e = e || "fx";
			var n = ue.queue(t, e),
				i = n.length,
				r = n.shift(),
				s = ue._queueHooks(t, e),
				o = function ()
				{
					ue.dequeue(t, e)
				};
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire()
		},
		_queueHooks: function (t, e)
		{
			var n = e + "queueHooks";
			return ue._data(t, n) || ue._data(t, n, {
				empty: ue.Callbacks("once memory").add(function ()
				{
					ue._removeData(t, e + "queue"), ue._removeData(t, n)
				})
			})
		}
	}), ue.fn.extend(
	{
		queue: function (t, n)
		{
			var i = 2;
			return "string" != typeof t && (n = t, t = "fx", i--), arguments.length < i ? ue.queue(this[0], t) : n === e ? this : this.each(function ()
			{
				var e = ue.queue(this, t, n);
				ue._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ue.dequeue(this, t)
			})
		},
		dequeue: function (t)
		{
			return this.each(function ()
			{
				ue.dequeue(this, t)
			})
		},
		delay: function (t, e)
		{
			return t = ue.fx ? ue.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n)
			{
				var i = setTimeout(e, t);
				n.stop = function ()
				{
					clearTimeout(i)
				}
			})
		},
		clearQueue: function (t)
		{
			return this.queue(t || "fx", [])
		},
		promise: function (t, n)
		{
			var i, r = 1,
				s = ue.Deferred(),
				o = this,
				a = this.length,
				l = function ()
				{
					--r || s.resolveWith(o, [o])
				};
			for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;) i = ue._data(o[a], t + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
			return l(), s.promise(n)
		}
	});
	var Se, Me, Ie = /[\t\r\n\f]/g,
		Ee = /\r/g,
		Ae = /^(?:input|select|textarea|button|object)$/i,
		Pe = /^(?:a|area)$/i,
		je = /^(?:checked|selected)$/i,
		He = ue.support.getSetAttribute,
		Fe = ue.support.input;
	ue.fn.extend(
	{
		attr: function (t, e)
		{
			return ue.access(this, ue.attr, t, e, arguments.length > 1)
		},
		removeAttr: function (t)
		{
			return this.each(function ()
			{
				ue.removeAttr(this, t)
			})
		},
		prop: function (t, e)
		{
			return ue.access(this, ue.prop, t, e, arguments.length > 1)
		},
		removeProp: function (t)
		{
			return t = ue.propFix[t] || t, this.each(function ()
			{
				try
				{
					this[t] = e, delete this[t]
				}
				catch (n)
				{
				}
			})
		},
		addClass: function (t)
		{
			var e, n, i, r, s, o = 0,
				a = this.length,
				l = "string" == typeof t && t;
			if (ue.isFunction(t)) return this.each(function (e)
			{
				ue(this).addClass(t.call(this, e, this.className))
			});
			if (l) for (e = (t || "").match(de) || []; a > o; o++) if (n = this[o], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ie, " ") : " "))
			{
				for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
				n.className = ue.trim(i)
			}
			return this
		},
		removeClass: function (t)
		{
			var e, n, i, r, s, o = 0,
				a = this.length,
				l = 0 === arguments.length || "string" == typeof t && t;
			if (ue.isFunction(t)) return this.each(function (e)
			{

				ue(this).removeClass(t.call(this, e, this.className))
			});
			if (l) for (e = (t || "").match(de) || []; a > o; o++) if (n = this[o], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ie, " ") : ""))
			{
				for (s = 0; r = e[s++];) for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
				n.className = t ? ue.trim(i) : ""
			}
			return this
		},
		toggleClass: function (t, e)
		{
			var n = typeof t;
			return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ue.isFunction(t) ? this.each(function (n)
			{
				ue(this).toggleClass(t.call(this, n, this.className, e), e)
			}) : this.each(function ()
			{
				if ("string" === n) for (var e, i = 0, r = ue(this), s = t.match(de) || []; e = s[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
				else(n === U || "boolean" === n) && (this.className && ue._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ue._data(this, "__className__") || "")
			})
		},
		hasClass: function (t)
		{
			for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ie, " ").indexOf(e) >= 0) return !0;
			return !1
		},
		val: function (t)
		{
			var n, i, r, s = this[0];
			{
				if (arguments.length) return r = ue.isFunction(t), this.each(function (n)
				{
					var s;
					1 === this.nodeType && (s = r ? t.call(this, n, ue(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : ue.isArray(s) && (s = ue.map(s, function (t)
					{
						return null == t ? "" : t + ""
					})), i = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, s, "value") !== e || (this.value = s))
				});
				if (s) return i = ue.valHooks[s.type] || ue.valHooks[s.nodeName.toLowerCase()], i && "get" in i && (n = i.get(s, "value")) !== e ? n : (n = s.value, "string" == typeof n ? n.replace(Ee, "") : null == n ? "" : n)
			}
		}
	}), ue.extend(
	{
		valHooks: {
			option: {
				get: function (t)
				{
					var e = ue.find.attr(t, "value");
					return null != e ? e : t.text
				}
			},
			select: {
				get: function (t)
				{
					for (var e, n, i = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : i.length, l = 0 > r ? a : s ? r : 0; a > l; l++) if (n = i[l], !(!n.selected && l !== r || (ue.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ue.nodeName(n.parentNode, "optgroup")))
					{
						if (e = ue(n).val(), s) return e;
						o.push(e)
					}
					return o
				},
				set: function (t, e)
				{
					for (var n, i, r = t.options, s = ue.makeArray(e), o = r.length; o--;) i = r[o], (i.selected = ue.inArray(ue(i).val(), s) >= 0) && (n = !0);
					return n || (t.selectedIndex = -1), s
				}
			}
		},
		attr: function (t, n, i)
		{
			var r, s, o = t.nodeType;
			if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === U ? ue.prop(t, n, i) : (1 === o && ue.isXMLDoc(t) || (n = n.toLowerCase(), r = ue.attrHooks[n] || (ue.expr.match.bool.test(n) ? Me : Se)), i === e ? r && "get" in r && null !== (s = r.get(t, n)) ? s : (s = ue.find.attr(t, n), null == s ? e : s) : null !== i ? r && "set" in r && (s = r.set(t, i, n)) !== e ? s : (t.setAttribute(n, i + ""), i) : (ue.removeAttr(t, n), void 0))
		},
		removeAttr: function (t, e)
		{
			var n, i, r = 0,
				s = e && e.match(de);
			if (s && 1 === t.nodeType) for (; n = s[r++];) i = ue.propFix[n] || n, ue.expr.match.bool.test(n) ? Fe && He || !je.test(n) ? t[i] = !1 : t[ue.camelCase("default-" + n)] = t[i] = !1 : ue.attr(t, n, ""), t.removeAttribute(He ? n : i)
		},
		attrHooks: {
			type: {
				set: function (t, e)
				{
					if (!ue.support.radioValue && "radio" === e && ue.nodeName(t, "input"))
					{
						var n = t.value;
						return t.setAttribute("type", e), n && (t.value = n), e
					}
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function (t, n, i)
		{
			var r, s, o, a = t.nodeType;
			if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ue.isXMLDoc(t), o && (n = ue.propFix[n] || n, s = ue.propHooks[n]), i !== e ? s && "set" in s && (r = s.set(t, i, n)) !== e ? r : t[n] = i : s && "get" in s && null !== (r = s.get(t, n)) ? r : t[n]
		},
		propHooks: {
			tabIndex: {
				get: function (t)
				{
					var e = ue.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : Ae.test(t.nodeName) || Pe.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		}
	}), Me =
	{
		set: function (t, e, n)
		{
			return e === !1 ? ue.removeAttr(t, n) : Fe && He || !je.test(n) ? t.setAttribute(!He && ue.propFix[n] || n, n) : t[ue.camelCase("default-" + n)] = t[n] = !0, n
		}
	}, ue.each(ue.expr.match.bool.source.match(/\w+/g), function (t, n)
	{
		var i = ue.expr.attrHandle[n] || ue.find.attr;
		ue.expr.attrHandle[n] = Fe && He || !je.test(n) ?
		function (t, n, r)
		{
			var s = ue.expr.attrHandle[n],
				o = r ? e : (ue.expr.attrHandle[n] = e) != i(t, n, r) ? n.toLowerCase() : null;
			return ue.expr.attrHandle[n] = s, o
		} : function (t, n, i)
		{
			return i ? e : t[ue.camelCase("default-" + n)] ? n.toLowerCase() : null
		}
	}), Fe && He || (ue.attrHooks.value =
	{
		set: function (t, e, n)
		{
			return ue.nodeName(t, "input") ? (t.defaultValue = e, void 0) : Se && Se.set(t, e, n)
		}
	}), He || (Se =
	{
		set: function (t, n, i)
		{
			var r = t.getAttributeNode(i);
			return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
		}
	}, ue.expr.attrHandle.id = ue.expr.attrHandle.name = ue.expr.attrHandle.coords = function (t, n, i)
	{
		var r;
		return i ? e : (r = t.getAttributeNode(n)) && "" !== r.value ? r.value : null
	}, ue.valHooks.button =
	{
		get: function (t, n)
		{
			var i = t.getAttributeNode(n);
			return i && i.specified ? i.value : e
		},
		set: Se.set
	}, ue.attrHooks.contenteditable =
	{
		set: function (t, e, n)
		{
			Se.set(t, "" === e ? !1 : e, n)
		}
	}, ue.each(["width", "height"], function (t, e)
	{
		ue.attrHooks[e] =
		{
			set: function (t, n)
			{
				return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
			}
		}
	})), ue.support.hrefNormalized || ue.each(["href", "src"], function (t, e)
	{
		ue.propHooks[e] =
		{
			get: function (t)
			{
				return t.getAttribute(e, 4)
			}
		}
	}), ue.support.style || (ue.attrHooks.style =
	{
		get: function (t)
		{
			return t.style.cssText || e
		},
		set: function (t, e)
		{
			return t.style.cssText = e + ""
		}
	}), ue.support.optSelected || (ue.propHooks.selected =
	{
		get: function (t)
		{
			var e = t.parentNode;
			return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
		}
	}), ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function ()
	{
		ue.propFix[this.toLowerCase()] = this
	}), ue.support.enctype || (ue.propFix.enctype = "encoding"), ue.each(["radio", "checkbox"], function ()
	{
		ue.valHooks[this] =
		{
			set: function (t, e)
			{
				return ue.isArray(e) ? t.checked = ue.inArray(ue(t).val(), e) >= 0 : void 0
			}
		}, ue.support.checkOn || (ue.valHooks[this].get = function (t)
		{
			return null === t.getAttribute("value") ? "on" : t.value
		})
	});
	var Le = /^(?:input|select|textarea)$/i,
		$e = /^key/,
		We = /^(?:mouse|contextmenu)|click/,
		Oe = /^(?:focusinfocus|focusoutblur)$/,
		Re = /^([^.]*)(?:\.(.+)|)$/;
	ue.event =
	{
		global: {
		},
		add: function (t, n, i, r, s)
		{
			var o, a, l, c, u, h, d, p, f, g, m, v = ue._data(t);
			if (v)
			{
				for (i.handler && (c = i, i = c.handler, s = c.selector), i.guid || (i.guid = ue.guid++), (a = v.events) || (a = v.events =
				{
				}), (h = v.handle) || (h = v.handle = function (t)
				{
					return typeof ue === U || t && ue.event.triggered === t.type ? e : ue.event.dispatch.apply(h.elem, arguments)
				}, h.elem = t), n = (n || "").match(de) || [""], l = n.length; l--;) o = Re.exec(n[l]) || [], f = m = o[1], g = (o[2] || "").split(".").sort(), f && (u = ue.event.special[f] || {
				}, f = (s ? u.delegateType : u.bindType) || f, u = ue.event.special[f] || {
				}, d = ue.extend(
				{
					type: f,
					origType: m,
					data: r,
					handler: i,
					guid: i.guid,
					selector: s,
					needsContext: s && ue.expr.match.needsContext.test(s),
					namespace: g.join(".")
				}, c), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, u.setup && u.setup.call(t, r, g, h) !== !1 || (t.addEventListener ? t.addEventListener(f, h, !1) : t.attachEvent && t.attachEvent("on" + f, h))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), s ? p.splice(p.delegateCount++, 0, d) : p.push(d), ue.event.global[f] = !0);
				t = null
			}
		},
		remove: function (t, e, n, i, r)
		{
			var s, o, a, l, c, u, h, d, p, f, g, m = ue.hasData(t) && ue._data(t);
			if (m && (u = m.events))
			{
				for (e = (e || "").match(de) || [""], c = e.length; c--;) if (a = Re.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p)
				{
					for (h = ue.event.special[p] || {
					}, p = (i ? h.delegateType : h.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = d.length; s--;) o = d[s], !r && g !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (d.splice(s, 1), o.selector && d.delegateCount--, h.remove && h.remove.call(t, o));
					l && !d.length && (h.teardown && h.teardown.call(t, f, m.handle) !== !1 || ue.removeEvent(t, p, m.handle), delete u[p])
				}
				else for (p in u) ue.event.remove(t, p + e[c], n, i, !0);
				ue.isEmptyObject(u) && (delete m.handle, ue._removeData(t, "events"))
			}
		},
		trigger: function (n, i, r, s)
		{
			var o, a, l, c, u, h, d, p = [r || Q],
				f = le.call(n, "type") ? n.type : n,
				g = le.call(n, "namespace") ? n.namespace.split(".") : [];
			if (l = h = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !Oe.test(f + ue.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), a = f.indexOf(":") < 0 && "on" + f, n = n[ue.expando] ? n : new ue.Event(f, "object" == typeof n && n), n.isTrigger = s ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = r), i = null == i ? [n] : ue.makeArray(i, [n]), u = ue.event.special[f] || {
			}, s || !u.trigger || u.trigger.apply(r, i) !== !1))
			{
				if (!s && !u.noBubble && !ue.isWindow(r))
				{
					for (c = u.delegateType || f, Oe.test(c + f) || (l = l.parentNode); l; l = l.parentNode) p.push(l), h = l;
					h === (r.ownerDocument || Q) && p.push(h.defaultView || h.parentWindow || t)
				}
				for (d = 0;
				(l = p[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? c : u.bindType || f, o = (ue._data(l, "events") || {
				})[n.type] && ue._data(l, "handle"), o && o.apply(l, i), o = a && l[a], o && ue.acceptData(l) && o.apply && o.apply(l, i) === !1 && n.preventDefault();
				if (n.type = f, !s && !n.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), i) === !1) && ue.acceptData(r) && a && r[f] && !ue.isWindow(r))
				{
					h = r[a], h && (r[a] = null), ue.event.triggered = f;
					try
					{
						r[f]()
					}
					catch (m)
					{
					}
					ue.event.triggered = e, h && (r[a] = h)
				}
				return n.result
			}
		},
		dispatch: function (t)
		{
			t = ue.event.fix(t);
			var n, i, r, s, o, a = [],
				l = se.call(arguments),
				c = (ue._data(this, "events") || {
				})[t.type] || [],
				u = ue.event.special[t.type] || {
				};
			if (l[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1)
			{
				for (a = ue.event.handlers.call(this, t, c), n = 0;
				(s = a[n++]) && !t.isPropagationStopped();) for (t.currentTarget = s.elem, o = 0;
				(r = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, i = ((ue.event.special[r.origType] || {
				}).handle || r.handler).apply(s.elem, l), i !== e && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, t), t.result
			}
		},
		handlers: function (t, n)
		{
			var i, r, s, o, a = [],
				l = n.delegateCount,
				c = t.target;
			if (l && c.nodeType && (!t.button || "click" !== t.type)) for (; c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== t.type))
			{
				for (s = [], o = 0; l > o; o++) r = n[o], i = r.selector + " ", s[i] === e && (s[i] = r.needsContext ? ue(i, this).index(c) >= 0 : ue.find(i, this, null, [c]).length), s[i] && s.push(r);
				s.length && a.push(
				{
					elem: c,
					handlers: s
				})
			}
			return l < n.length && a.push(
			{
				elem: this,
				handlers: n.slice(l)
			}), a
		},
		fix: function (t)
		{
			if (t[ue.expando]) return t;
			var e, n, i, r = t.type,
				s = t,
				o = this.fixHooks[r];
			for (o || (this.fixHooks[r] = o = We.test(r) ? this.mouseHooks : $e.test(r) ? this.keyHooks : {
			}), i = o.props ? this.props.concat(o.props) : this.props, t = new ue.Event(s), e = i.length; e--;) n = i[e], t[n] = s[n];
			return t.target || (t.target = s.srcElement || Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !! t.metaKey, o.filter ? o.filter(t, s) : t
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {
		},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (t, e)
			{
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (t, n)
			{
				var i, r, s, o = n.button,
					a = n.fromElement;
				return null == t.pageX && null != n.clientX && (r = t.target.ownerDocument || Q, s = r.documentElement, i = r.body, t.pageX = n.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), t.which || o === e || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function ()
				{
					if (this !== u() && this.focus) try
					{
						return this.focus(), !1
					}
					catch (t)
					{
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function ()
				{
					return this === u() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function ()
				{
					return ue.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function (t)
				{
					return ue.nodeName(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (t)
				{
					t.result !== e && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function (t, e, n, i)
		{
			var r = ue.extend(new ue.Event, n, {
				type: t,
				isSimulated: !0,
				originalEvent: {
				}
			});
			i ? ue.event.trigger(r, null, e) : ue.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
		}
	}, ue.removeEvent = Q.removeEventListener ?
	function (t, e, n)
	{
		t.removeEventListener && t.removeEventListener(e, n, !1)
	} : function (t, e, n)
	{
		var i = "on" + e;
		t.detachEvent && (typeof t[i] === U && (t[i] = null), t.detachEvent(i, n))
	}, ue.Event = function (t, e)
	{
		return this instanceof ue.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : c) : this.type = t, e && ue.extend(this, e), this.timeStamp = t && t.timeStamp || ue.now(), this[ue.expando] = !0, void 0) : new ue.Event(t, e)
	}, ue.Event.prototype =
	{
		isDefaultPrevented: c,
		isPropagationStopped: c,
		isImmediatePropagationStopped: c,
		preventDefault: function ()
		{
			var t = this.originalEvent;
			this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
		},
		stopPropagation: function ()
		{
			var t = this.originalEvent;
			this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
		},
		stopImmediatePropagation: function ()
		{
			this.isImmediatePropagationStopped = l, this.stopPropagation()
		}
	}, ue.each(
	{
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function (t, e)
	{
		ue.event.special[t] =
		{
			delegateType: e,
			bindType: e,
			handle: function (t)
			{
				var n, i = this,
					r = t.relatedTarget,
					s = t.handleObj;
				return (!r || r !== i && !ue.contains(i, r)) && (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
			}
		}
	}), ue.support.submitBubbles || (ue.event.special.submit =
	{
		setup: function ()
		{
			return ue.nodeName(this, "form") ? !1 : (ue.event.add(this, "click._submit keypress._submit", function (t)
			{
				var n = t.target,
					i = ue.nodeName(n, "input") || ue.nodeName(n, "button") ? n.form : e;
				i && !ue._data(i, "submitBubbles") && (ue.event.add(i, "submit._submit", function (t)
				{
					t._submit_bubble = !0
				}), ue._data(i, "submitBubbles", !0))
			}), void 0)
		},
		postDispatch: function (t)
		{
			t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ue.event.simulate("submit", this.parentNode, t, !0))
		},
		teardown: function ()
		{
			return ue.nodeName(this, "form") ? !1 : (ue.event.remove(this, "._submit"), void 0)
		}
	}), ue.support.changeBubbles || (ue.event.special.change =
	{
		setup: function ()
		{
			return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ue.event.add(this, "propertychange._change", function (t)
			{
				"checked" === t.originalEvent.propertyName && (this._just_changed = !0)
			}), ue.event.add(this, "click._change", function (t)
			{
				this._just_changed && !t.isTrigger && (this._just_changed = !1), ue.event.simulate("change", this, t, !0)
			})), !1) : (ue.event.add(this, "beforeactivate._change", function (t)
			{
				var e = t.target;
				Le.test(e.nodeName) && !ue._data(e, "changeBubbles") && (ue.event.add(e, "change._change", function (t)
				{
					!this.parentNode || t.isSimulated || t.isTrigger || ue.event.simulate("change", this.parentNode, t, !0)
				}), ue._data(e, "changeBubbles", !0))
			}), void 0)
		},
		handle: function (t)
		{
			var e = t.target;
			return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function ()
		{
			return ue.event.remove(this, "._change"), !Le.test(this.nodeName)
		}
	}), ue.support.focusinBubbles || ue.each(
	{
		focus: "focusin",
		blur: "focusout"
	}, function (t, e)
	{
		var n = 0,
			i = function (t)
			{
				ue.event.simulate(e, t.target, ue.event.fix(t), !0)
			};
		ue.event.special[e] =
		{
			setup: function ()
			{
				0 === n++ && Q.addEventListener(t, i, !0)
			},
			teardown: function ()
			{
				0 === --n && Q.removeEventListener(t, i, !0)
			}
		}
	}), ue.fn.extend(
	{
		on: function (t, n, i, r, s)
		{
			var o, a;
			if ("object" == typeof t)
			{
				"string" != typeof n && (i = i || n, n = e);
				for (o in t) this.on(o, n, i, t[o], s);
				return this
			}
			if (null == i && null == r ? (r = n, i = n = e) : null == r && ("string" == typeof n ? (r = i, i = e) : (r = i, i = n, n = e)), r === !1) r = c;
			else if (!r) return this;
			return 1 === s && (a = r, r = function (t)
			{
				return ue().off(t), a.apply(this, arguments)
			}, r.guid = a.guid || (a.guid = ue.guid++)), this.each(function ()
			{
				ue.event.add(this, t, r, i, n)
			})
		},
		one: function (t, e, n, i)
		{
			return this.on(t, e, n, i, 1)
		},
		off: function (t, n, i)
		{
			var r, s;
			if (t && t.preventDefault && t.handleObj) return r = t.handleObj, ue(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof t)
			{
				for (s in t) this.off(s, n, t[s]);
				return this
			}
			return (n === !1 || "function" == typeof n) && (i = n, n = e), i === !1 && (i = c), this.each(function ()
			{
				ue.event.remove(this, t, i, n)
			})
		},
		trigger: function (t, e)
		{
			return this.each(function ()
			{
				ue.event.trigger(t, e, this)
			})
		},
		triggerHandler: function (t, e)
		{
			var n = this[0];
			return n ? ue.event.trigger(t, e, n, !0) : void 0
		}
	});
	var qe = /^.[^:#\[\.,]*$/,
		Ye = /^(?:parents|prev(?:Until|All))/,
		Be = ue.expr.match.needsContext,
		ze =
		{
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ue.fn.extend(
	{
		find: function (t)
		{
			var e, n = [],
				i = this,
				r = i.length;
			if ("string" != typeof t) return this.pushStack(ue(t).filter(function ()
			{
				for (e = 0; r > e; e++) if (ue.contains(i[e], this)) return !0
			}));
			for (e = 0; r > e; e++) ue.find(t, i[e], n);
			return n = this.pushStack(r > 1 ? ue.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
		},
		has: function (t)
		{
			var e, n = ue(t, this),
				i = n.length;
			return this.filter(function ()
			{
				for (e = 0; i > e; e++) if (ue.contains(this, n[e])) return !0
			})
		},
		not: function (t)
		{
			return this.pushStack(d(this, t || [], !0))
		},
		filter: function (t)
		{
			return this.pushStack(d(this, t || [], !1))
		},
		is: function (t)
		{
			return !!d(this, "string" == typeof t && Be.test(t) ? ue(t) : t || [], !1).length
		},
		closest: function (t, e)
		{
			for (var n, i = 0, r = this.length, s = [], o = Be.test(t) || "string" != typeof t ? ue(t, e || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ue.find.matchesSelector(n, t)))
			{
				n = s.push(n);
				break
			}
			return this.pushStack(s.length > 1 ? ue.unique(s) : s)
		},
		index: function (t)
		{
			return t ? "string" == typeof t ? ue.inArray(this[0], ue(t)) : ue.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (t, e)
		{
			var n = "string" == typeof t ? ue(t, e) : ue.makeArray(t && t.nodeType ? [t] : t),
				i = ue.merge(this.get(), n);
			return this.pushStack(ue.unique(i))
		},
		addBack: function (t)
		{
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), ue.each(
	{
		parent: function (t)
		{
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function (t)
		{
			return ue.dir(t, "parentNode")
		},
		parentsUntil: function (t, e, n)
		{
			return ue.dir(t, "parentNode", n)
		},
		next: function (t)
		{
			return h(t, "nextSibling")
		},
		prev: function (t)
		{
			return h(t, "previousSibling")
		},
		nextAll: function (t)
		{
			return ue.dir(t, "nextSibling")
		},
		prevAll: function (t)
		{
			return ue.dir(t, "previousSibling")
		},
		nextUntil: function (t, e, n)
		{
			return ue.dir(t, "nextSibling", n)
		},
		prevUntil: function (t, e, n)
		{
			return ue.dir(t, "previousSibling", n)
		},
		siblings: function (t)
		{
			return ue.sibling((t.parentNode || {
			}).firstChild, t)
		},
		children: function (t)
		{
			return ue.sibling(t.firstChild)
		},
		contents: function (t)
		{
			return ue.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ue.merge([], t.childNodes)
		}
	}, function (t, e)
	{
		ue.fn[t] = function (n, i)
		{
			var r = ue.map(this, e, n);
			return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ue.filter(i, r)), this.length > 1 && (ze[t] || (r = ue.unique(r)), Ye.test(t) && (r = r.reverse())), this.pushStack(r)
		}
	}), ue.extend(
	{
		filter: function (t, e, n)
		{
			var i = e[0];
			return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ue.find.matchesSelector(i, t) ? [i] : [] : ue.find.matches(t, ue.grep(e, function (t)
			{
				return 1 === t.nodeType
			}))
		},
		dir: function (t, n, i)
		{
			for (var r = [], s = t[n]; s && 9 !== s.nodeType && (i === e || 1 !== s.nodeType || !ue(s).is(i));) 1 === s.nodeType && r.push(s), s = s[n];
			return r
		},
		sibling: function (t, e)
		{
			for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
			return n
		}
	});
	var Ke = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Xe = / jQuery\d+="(?:null|\d+)"/g,
		Ue = new RegExp("<(?:" + Ke + ")[\\s/>]", "i"),
		Ve = /^\s+/,
		Qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Je = /<([\w:]+)/,
		Ge = /<tbody/i,
		Ze = /<|&#?\w+;/,
		tn = /<(?:script|style|link)/i,
		en = /^(?:checkbox|radio)$/i,
		nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rn = /^$|\/(?:java|ecma)script/i,
		sn = /^true\/(.*)/,
		on = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		an =
		{
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: ue.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		ln = p(Q),
		cn = ln.appendChild(Q.createElement("div"));
	an.optgroup = an.option, an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, an.th = an.td, ue.fn.extend(
	{
		text: function (t)
		{
			return ue.access(this, function (t)
			{
				return t === e ? ue.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(t))
			}, null, t, arguments.length)
		},
		append: function ()
		{
			return this.domManip(arguments, function (t)
			{
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType)
				{
					var e = f(this, t);
					e.appendChild(t)
				}
			})
		},
		prepend: function ()
		{
			return this.domManip(arguments, function (t)
			{
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType)
				{
					var e = f(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function ()
		{
			return this.domManip(arguments, function (t)
			{
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function ()
		{
			return this.domManip(arguments, function (t)
			{
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		remove: function (t, e)
		{
			for (var n, i = t ? ue.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || ue.cleanData(_(n)), n.parentNode && (e && ue.contains(n.ownerDocument, n) && v(_(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function ()
		{
			for (var t, e = 0; null != (t = this[e]); e++)
			{
				for (1 === t.nodeType && ue.cleanData(_(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
				t.options && ue.nodeName(t, "select") && (t.options.length = 0)
			}
			return this
		},
		clone: function (t, e)
		{
			return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function ()
			{
				return ue.clone(this, t, e)
			})
		},
		html: function (t)
		{
			return ue.access(this, function (t)
			{
				var n = this[0] || {
				},
					i = 0,
					r = this.length;
				if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(Xe, "") : e;
				if (!("string" != typeof t || tn.test(t) || !ue.support.htmlSerialize && Ue.test(t) || !ue.support.leadingWhitespace && Ve.test(t) || an[(Je.exec(t) || ["", ""])[1].toLowerCase()]))
				{
					t = t.replace(Qe, "<$1><$2>");
					try
					{
						for (; r > i; i++) n = this[i] || {
						}, 1 === n.nodeType && (ue.cleanData(_(n, !1)), n.innerHTML = t);
						n = 0
					}
					catch (s)
					{
					}
				}
				n && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function ()
		{
			var t = ue.map(this, function (t)
			{
				return [t.nextSibling, t.parentNode]
			}),
				e = 0;
			return this.domManip(arguments, function (n)
			{
				var i = t[e++],
					r = t[e++];
				r && (i && i.parentNode !== r && (i = this.nextSibling), ue(this).remove(), r.insertBefore(n, i))
			}, !0), e ? this : this.remove()
		},
		detach: function (t)
		{
			return this.remove(t, !0)
		},
		domManip: function (t, e, n)
		{
			t = ie.apply([], t);
			var i, r, s, o, a, l, c = 0,
				u = this.length,
				h = this,
				d = u - 1,
				p = t[0],
				f = ue.isFunction(p);
			if (f || !(1 >= u || "string" != typeof p || ue.support.checkClone) && nn.test(p)) return this.each(function (i)
			{
				var r = h.eq(i);
				f && (t[0] = p.call(this, i, r.html())), r.domManip(t, e, n)
			});
			if (u && (l = ue.buildFragment(t, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i))
			{
				for (o = ue.map(_(l, "script"), g), s = o.length; u > c; c++) r = l, c !== d && (r = ue.clone(r, !0, !0), s && ue.merge(o, _(r, "script"))), e.call(this[c], r, c);
				if (s) for (a = o[o.length - 1].ownerDocument, ue.map(o, m), c = 0; s > c; c++) r = o[c], rn.test(r.type || "") && !ue._data(r, "globalEval") && ue.contains(a, r) && (r.src ? ue._evalUrl(r.src) : ue.globalEval((r.text || r.textContent || r.innerHTML || "").replace(on, "")));
				l = i = null
			}
			return this
		}
	}), ue.each(
	{
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (t, e)
	{
		ue.fn[t] = function (t)
		{
			for (var n, i = 0, r = [], s = ue(t), o = s.length - 1; o >= i; i++) n = i === o ? this : this.clone(!0), ue(s[i])[e](n), re.apply(r, n.get());
			return this.pushStack(r)
		}
	}), ue.extend(
	{
		clone: function (t, e, n)
		{
			var i, r, s, o, a, l = ue.contains(t.ownerDocument, t);
			if (ue.support.html5Clone || ue.isXMLDoc(t) || !Ue.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (cn.innerHTML = t.outerHTML, cn.removeChild(s = cn.firstChild)), !(ue.support.noCloneEvent && ue.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ue.isXMLDoc(t))) for (i = _(s), a = _(t), o = 0; null != (r = a[o]); ++o) i[o] && b(r, i[o]);
			if (e) if (n) for (a = a || _(t), i = i || _(s), o = 0; null != (r = a[o]); o++) y(r, i[o]);
			else y(t, s);
			return i = _(s, "script"), i.length > 0 && v(i, !l && _(t, "script")), i = a = r = null, s
		},
		buildFragment: function (t, e, n, i)
		{
			for (var r, s, o, a, l, c, u, h = t.length, d = p(e), f = [], g = 0; h > g; g++) if (s = t[g], s || 0 === s) if ("object" === ue.type(s)) ue.merge(f, s.nodeType ? [s] : s);
			else if (Ze.test(s))
			{
				for (a = a || d.appendChild(e.createElement("div")), l = (Je.exec(s) || ["", ""])[1].toLowerCase(), u = an[l] || an._default, a.innerHTML = u[1] + s.replace(Qe, "<$1><$2>") + u[2], r = u[0]; r--;) a = a.lastChild;
				if (!ue.support.leadingWhitespace && Ve.test(s) && f.push(e.createTextNode(Ve.exec(s)[0])), !ue.support.tbody) for (s = "table" !== l || Ge.test(s) ? "<table>" !== u[1] || Ge.test(s) ? 0 : a : a.firstChild, r = s && s.childNodes.length; r--;) ue.nodeName(c = s.childNodes[r], "tbody") && !c.childNodes.length && s.removeChild(c);
				for (ue.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
				a = d.lastChild
			}
			else f.push(e.createTextNode(s));
			for (a && d.removeChild(a), ue.support.appendChecked || ue.grep(_(f, "input"), w), g = 0; s = f[g++];) if ((!i || -1 === ue.inArray(s, i)) && (o = ue.contains(s.ownerDocument, s), a = _(d.appendChild(s), "script"), o && v(a), n)) for (r = 0; s = a[r++];) rn.test(s.type || "") && n.push(s);
			return a = null, d
		},
		cleanData: function (t, e)
		{
			for (var n, i, r, s, o = 0, a = ue.expando, l = ue.cache, c = ue.support.deleteExpando, u = ue.event.special; null != (n = t[o]); o++) if ((e || ue.acceptData(n)) && (r = n[a], s = r && l[r]))
			{
				if (s.events) for (i in s.events) u[i] ? ue.event.remove(n, i) : ue.removeEvent(n, i, s.handle);
				l[r] && (delete l[r], c ? delete n[a] : typeof n.removeAttribute !== U ? n.removeAttribute(a) : n[a] = null, ee.push(r))
			}
		},
		_evalUrl: function (t)
		{
			return ue.ajax(
			{
				url: t,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}
	}), ue.fn.extend(
	{
		wrapAll: function (t)
		{
			if (ue.isFunction(t)) return this.each(function (e)
			{
				ue(this).wrapAll(t.call(this, e))
			});
			if (this[0])
			{
				var e = ue(t, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && e.insertBefore(this[0]), e.map(function ()
				{
					for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
					return t
				}).append(this)
			}
			return this
		},
		wrapInner: function (t)
		{
			return ue.isFunction(t) ? this.each(function (e)
			{
				ue(this).wrapInner(t.call(this, e))
			}) : this.each(function ()
			{
				var e = ue(this),
					n = e.contents();
				n.length ? n.wrapAll(t) : e.append(t)
			})
		},
		wrap: function (t)
		{
			var e = ue.isFunction(t);
			return this.each(function (n)
			{
				ue(this).wrapAll(e ? t.call(this, n) : t)
			})
		},
		unwrap: function ()
		{
			return this.parent().each(function ()
			{
				ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var un, hn, dn, pn = /alpha\([^)]*\)/i,
		fn = /opacity\s*=\s*([^)]*)/,
		gn = /^(top|right|bottom|left)$/,
		mn = /^(none|table(?!-c[ea]).+)/,
		vn = /^margin/,
		yn = new RegExp("^(" + he + ")(.*)$", "i"),
		bn = new RegExp("^(" + he + ")(?!px)[a-z%]+$", "i"),
		_n = new RegExp("^([+-])=(" + he + ")", "i"),
		wn =
		{
			BODY: "block"
		},
		xn =
		{
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		kn =
		{
			letterSpacing: 0,
			fontWeight: 400
		},
		Dn = ["Top", "Right", "Bottom", "Left"],
		Cn = ["Webkit", "O", "Moz", "ms"];
	ue.fn.extend(
	{
		css: function (t, n)
		{
			return ue.access(this, function (t, n, i)
			{
				var r, s, o =
				{
				},
					a = 0;
				if (ue.isArray(n))
				{
					for (s = hn(t), r = n.length; r > a; a++) o[n[a]] = ue.css(t, n[a], !1, s);
					return o
				}
				return i !== e ? ue.style(t, n, i) : ue.css(t, n)
			}, t, n, arguments.length > 1)
		},
		show: function ()
		{
			return D(this, !0)
		},
		hide: function ()
		{
			return D(this)
		},
		toggle: function (t)
		{
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function ()
			{
				k(this) ? ue(this).show() : ue(this).hide()
			})
		}
	}), ue.extend(
	{
		cssHooks: {
			opacity: {
				get: function (t, e)
				{
					if (e)
					{
						var n = dn(t, "opacity");
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
			"float": ue.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function (t, n, i, r)
		{
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style)
			{
				var s, o, a, l = ue.camelCase(n),
					c = t.style;
				if (n = ue.cssProps[l] || (ue.cssProps[l] = x(c, l)), a = ue.cssHooks[n] || ue.cssHooks[l], i === e) return a && "get" in a && (s = a.get(t, !1, r)) !== e ? s : c[n];
				if (o = typeof i, "string" === o && (s = _n.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(ue.css(t, n)), o = "number"), !(null == i || "number" === o && isNaN(i) || ("number" !== o || ue.cssNumber[l] || (i += "px"), ue.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), a && "set" in a && (i = a.set(t, i, r)) === e))) try
				{
					c[n] = i
				}
				catch (u)
				{
				}
			}
		},
		css: function (t, n, i, r)
		{
			var s, o, a, l = ue.camelCase(n);
			return n = ue.cssProps[l] || (ue.cssProps[l] = x(t.style, l)), a = ue.cssHooks[n] || ue.cssHooks[l], a && "get" in a && (o = a.get(t, !0, i)), o === e && (o = dn(t, n, r)), "normal" === o && n in kn && (o = kn[n]), "" === i || i ? (s = parseFloat(o), i === !0 || ue.isNumeric(s) ? s || 0 : o) : o
		}
	}), t.getComputedStyle ? (hn = function (e)
	{
		return t.getComputedStyle(e, null)
	}, dn = function (t, n, i)
	{
		var r, s, o, a = i || hn(t),
			l = a ? a.getPropertyValue(n) || a[n] : e,
			c = t.style;
		return a && ("" !== l || ue.contains(t.ownerDocument, t) || (l = ue.style(t, n)), bn.test(l) && vn.test(n) && (r = c.width, s = c.minWidth, o = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = r, c.minWidth = s, c.maxWidth = o)), l
	}) : Q.documentElement.currentStyle && (hn = function (t)
	{
		return t.currentStyle
	}, dn = function (t, n, i)
	{
		var r, s, o, a = i || hn(t),
			l = a ? a[n] : e,
			c = t.style;
		return null == l && c && c[n] && (l = c[n]), bn.test(l) && !gn.test(n) && (r = c.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = r, o && (s.left = o)), "" === l ? "auto" : l
	}), ue.each(["height", "width"], function (t, e)
	{
		ue.cssHooks[e] =
		{
			get: function (t, n, i)
			{
				return n ? 0 === t.offsetWidth && mn.test(ue.css(t, "display")) ? ue.swap(t, xn, function ()
				{
					return N(t, e, i)
				}) : N(t, e, i) : void 0
			},
			set: function (t, n, i)
			{
				var r = i && hn(t);
				return C(t, n, i ? T(t, e, i, ue.support.boxSizing && "border-box" === ue.css(t, "boxSizing", !1, r), r) : 0)
			}
		}
	}), ue.support.opacity || (ue.cssHooks.opacity =
	{
		get: function (t, e)
		{
			return fn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
		},
		set: function (t, e)
		{
			var n = t.style,
				i = t.currentStyle,
				r = ue.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
				s = i && i.filter || n.filter || "";
			n.zoom = 1, (e >= 1 || "" === e) && "" === ue.trim(s.replace(pn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = pn.test(s) ? s.replace(pn, r) : s + " " + r)
		}
	}), ue(function ()
	{
		ue.support.reliableMarginRight || (ue.cssHooks.marginRight =
		{
			get: function (t, e)
			{
				return e ? ue.swap(t, {
					display: "inline-block"
				}, dn, [t, "marginRight"]) : void 0
			}
		}), !ue.support.pixelPosition && ue.fn.position && ue.each(["top", "left"], function (t, e)
		{
			ue.cssHooks[e] =
			{
				get: function (t, n)
				{
					return n ? (n = dn(t, e), bn.test(n) ? ue(t).position()[e] + "px" : n) : void 0
				}
			}
		})
	}), ue.expr && ue.expr.filters && (ue.expr.filters.hidden = function (t)
	{
		return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ue.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ue.css(t, "display"))
	}, ue.expr.filters.visible = function (t)
	{
		return !ue.expr.filters.hidden(t)
	}), ue.each(
	{
		margin: "",
		padding: "",
		border: "Width"
	}, function (t, e)
	{
		ue.cssHooks[t + e] =
		{
			expand: function (n)
			{
				for (var i = 0, r =
				{
				}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Dn[i] + e] = s[i] || s[i - 2] || s[0];
				return r
			}
		}, vn.test(t) || (ue.cssHooks[t + e].set = C)
	});
	var Tn = /%20/g,
		Nn = /\[\]$/,
		Sn = /\r?\n/g,
		Mn = /^(?:submit|button|image|reset|file)$/i,
		In = /^(?:input|select|textarea|keygen)/i;
	ue.fn.extend(
	{
		serialize: function ()
		{
			return ue.param(this.serializeArray())
		},
		serializeArray: function ()
		{
			return this.map(function ()
			{
				var t = ue.prop(this, "elements");
				return t ? ue.makeArray(t) : this
			}).filter(function ()
			{
				var t = this.type;
				return this.name && !ue(this).is(":disabled") && In.test(this.nodeName) && !Mn.test(t) && (this.checked || !en.test(t))
			}).map(function (t, e)
			{
				var n = ue(this).val();
				return null == n ? null : ue.isArray(n) ? ue.map(n, function (t)
				{
					return {
						name: e.name,
						value: t.replace(Sn, "\r\n")
					}
				}) : {
					name: e.name,
					value: n.replace(Sn, "\r\n")
				}
			}).get()
		}
	}), ue.param = function (t, n)
	{
		var i, r = [],
			s = function (t, e)
			{
				e = ue.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
			};
		if (n === e && (n = ue.ajaxSettings && ue.ajaxSettings.traditional), ue.isArray(t) || t.jquery && !ue.isPlainObject(t)) ue.each(t, function ()
		{
			s(this.name, this.value)
		});
		else for (i in t) I(i, t[i], n, s);
		return r.join("&").replace(Tn, "+")
	}, ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e)
	{
		ue.fn[e] = function (t, n)
		{
			return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
		}
	}), ue.fn.extend(
	{
		hover: function (t, e)
		{
			return this.mouseenter(t).mouseleave(e || t)
		},
		bind: function (t, e, n)
		{
			return this.on(t, null, e, n)
		},
		unbind: function (t, e)
		{
			return this.off(t, null, e)
		},
		delegate: function (t, e, n, i)
		{
			return this.on(e, t, n, i)
		},
		undelegate: function (t, e, n)
		{
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
		}
	});
	var En, An, Pn = ue.now(),
		jn = /\?/,
		Hn = /#.*$/,
		Fn = /([?&])_=[^&]*/,
		Ln = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		$n = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Wn = /^(?:GET|HEAD)$/,
		On = /^\/\//,
		Rn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		qn = ue.fn.load,
		Yn =
		{
		},
		Bn =
		{
		},
		zn = "*/".concat("*");
	try
	{
		An = V.href
	}
	catch (Kn)
	{
		An = Q.createElement("a"), An.href = "", An = An.href
	}
	En = Rn.exec(An.toLowerCase()) || [], ue.fn.load = function (t, n, i)
	{
		if ("string" != typeof t && qn) return qn.apply(this, arguments);
		var r, s, o, a = this,
			l = t.indexOf(" ");
		return l >= 0 && (r = t.slice(l, t.length), t = t.slice(0, l)), ue.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (o = "POST"), a.length > 0 && ue.ajax(
		{
			url: t,
			type: o,
			dataType: "html",
			data: n
		}).done(function (t)
		{
			s = arguments, a.html(r ? ue("<div>").append(ue.parseHTML(t)).find(r) : t)
		}).complete(i &&
		function (t, e)
		{
			a.each(i, s || [t.responseText, e, t])
		}), this
	}, ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e)
	{
		ue.fn[e] = function (t)
		{
			return this.on(e, t)
		}
	}), ue.extend(
	{
		active: 0,
		lastModified: {
		},
		etag: {
		},
		ajaxSettings: {
			url: An,
			type: "GET",
			isLocal: $n.test(En[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": zn,
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
				"text json": ue.parseJSON,
				"text xml": ue.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (t, e)
		{
			return e ? P(P(t, ue.ajaxSettings), e) : P(ue.ajaxSettings, t)
		},
		ajaxPrefilter: E(Yn),
		ajaxTransport: E(Bn),
		ajax: function (t, n)
		{
			function i(t, n, i, r)
			{
				var s, h, y, b, w, k = n;
				2 !== _ && (_ = 2, l && clearTimeout(l), u = e, a = r || "", x.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (b = j(d, x, i)), b = H(d, b, x, s), s ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ue.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (ue.etag[o] = w)), 204 === t || "HEAD" === d.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state, h = b.data, y = b.error, s = !y)) : (y = k, (t || !k) && (k = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (n || k) + "", s ? g.resolveWith(p, [h, k, x]) : g.rejectWith(p, [x, k, y]), x.statusCode(v), v = e, c && f.trigger(s ? "ajaxSuccess" : "ajaxError", [x, d, s ? h : y]), m.fireWith(p, [x, k]), c && (f.trigger("ajaxComplete", [x, d]), --ue.active || ue.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (n = t, t = e), n = n || {
			};
			var r, s, o, a, l, c, u, h, d = ue.ajaxSetup(
			{
			}, n),
				p = d.context || d,
				f = d.context && (p.nodeType || p.jquery) ? ue(p) : ue.event,
				g = ue.Deferred(),
				m = ue.Callbacks("once memory"),
				v = d.statusCode || {
				},
				y =
				{
				},
				b =
				{
				},
				_ = 0,
				w = "canceled",
				x =
				{
					readyState: 0,
					getResponseHeader: function (t)
					{
						var e;
						if (2 === _)
						{
							if (!h) for (h =
							{
							}; e = Ln.exec(a);) h[e[1].toLowerCase()] = e[2];
							e = h[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function ()
					{
						return 2 === _ ? a : null
					},
					setRequestHeader: function (t, e)
					{
						var n = t.toLowerCase();
						return _ || (t = b[n] = b[n] || t, y[t] = e), this
					},
					overrideMimeType: function (t)
					{
						return _ || (d.mimeType = t), this
					},
					statusCode: function (t)
					{
						var e;
						if (t) if (2 > _) for (e in t) v[e] = [v[e], t[e]];
						else x.always(t[x.status]);
						return this
					},
					abort: function (t)
					{
						var e = t || w;
						return u && u.abort(e), i(0, e), this
					}
				};
			if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || An) + "").replace(Hn, "").replace(On, En[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ue.trim(d.dataType || "*").toLowerCase().match(de) || [""], null == d.crossDomain && (r = Rn.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === En[1] && r[2] === En[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (En[3] || ("http:" === En[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ue.param(d.data, d.traditional)), A(Yn, d, n, x), 2 === _) return x;
			c = d.global, c && 0 === ue.active++ && ue.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Wn.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (jn.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Fn.test(o) ? o.replace(Fn, "$1_=" + Pn++) : o + (jn.test(o) ? "&" : "?") + "_=" + Pn++)), d.ifModified && (ue.lastModified[o] && x.setRequestHeader("If-Modified-Since", ue.lastModified[o]), ue.etag[o] && x.setRequestHeader("If-None-Match", ue.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zn + "; q=0.01" : "") : d.accepts["*"]);
			for (s in d.headers) x.setRequestHeader(s, d.headers[s]);
			if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === _)) return x.abort();
			w = "abort";
			for (s in {
				success: 1,
				error: 1,
				complete: 1
			}) x[s](d[s]);
			if (u = A(Bn, d, n, x))
			{
				x.readyState = 1, c && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (l = setTimeout(function ()
				{
					x.abort("timeout")
				}, d.timeout));
				try
				{
					_ = 1, u.send(y, i)
				}
				catch (k)
				{
					if (!(2 > _)) throw k;
					i(-1, k)
				}
			}
			else i(-1, "No Transport");
			return x
		},
		getJSON: function (t, e, n)
		{
			return ue.get(t, e, n, "json")
		},
		getScript: function (t, n)
		{
			return ue.get(t, e, n, "script")
		}
	}), ue.each(["get", "post"], function (t, n)
	{
		ue[n] = function (t, i, r, s)
		{
			return ue.isFunction(i) && (s = s || r, r = i, i = e), ue.ajax(
			{
				url: t,
				type: n,
				dataType: s,
				data: i,
				success: r
			})
		}
	}), ue.ajaxSetup(
	{
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (t)
			{
				return ue.globalEval(t), t
			}
		}
	}), ue.ajaxPrefilter("script", function (t)
	{
		t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
	}), ue.ajaxTransport("script", function (t)
	{
		if (t.crossDomain)
		{
			var n, i = Q.head || ue("head")[0] || Q.documentElement;
			return {
				send: function (e, r)
				{
					n = Q.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function (t, e)
					{
						(e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || r(200, "success"))
					}, i.insertBefore(n, i.firstChild)
				},
				abort: function ()
				{
					n && n.onload(e, !0)
				}
			}
		}
	});
	var Xn = [],
		Un = /(=)\?(?=&|$)|\?\?/;
	ue.ajaxSetup(
	{
		jsonp: "callback",
		jsonpCallback: function ()
		{
			var t = Xn.pop() || ue.expando + "_" + Pn++;
			return this[t] = !0, t
		}
	}), ue.ajaxPrefilter("json jsonp", function (n, i, r)
	{
		var s, o, a, l = n.jsonp !== !1 && (Un.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Un.test(n.data) && "data");
		return l || "jsonp" === n.dataTypes[0] ? (s = n.jsonpCallback = ue.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Un, "$1" + s) : n.jsonp !== !1 && (n.url += (jn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function ()
		{
			return a || ue.error(s + " was not called"), a[0]
		}, n.dataTypes[0] = "json", o = t[s], t[s] = function ()
		{
			a = arguments
		}, r.always(function ()
		{
			t[s] = o, n[s] && (n.jsonpCallback = i.jsonpCallback, Xn.push(s)), a && ue.isFunction(o) && o(a[0]), a = o = e
		}), "script") : void 0
	});
	var Vn, Qn, Jn = 0,
		Gn = t.ActiveXObject &&
		function ()
		{
			var t;
			for (t in Vn) Vn[t](e, !0)
		};
	ue.ajaxSettings.xhr = t.ActiveXObject ?
	function ()
	{
		return !this.isLocal && F() || L()
	} : F, Qn = ue.ajaxSettings.xhr(), ue.support.cors = !! Qn && "withCredentials" in Qn, Qn = ue.support.ajax = !! Qn, Qn && ue.ajaxTransport(function (n)
	{
		if (!n.crossDomain || ue.support.cors)
		{
			var i;
			return {
				send: function (r, s)
				{
					var o, a, l = n.xhr();
					if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (a in n.xhrFields) l[a] = n.xhrFields[a];
					n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
					try
					{
						for (a in r) l.setRequestHeader(a, r[a])
					}
					catch (c)
					{
					}
					l.send(n.hasContent && n.data || null), i = function (t, r)
					{
						var a, c, u, h;
						try
						{
							if (i && (r || 4 === l.readyState)) if (i = e, o && (l.onreadystatechange = ue.noop, Gn && delete Vn[o]), r) 4 !== l.readyState && l.abort();
							else
							{
								h =
								{
								}, a = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (h.text = l.responseText);
								try
								{
									u = l.statusText
								}
								catch (d)
								{
									u = ""
								}
								a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
							}
						}
						catch (p)
						{
							r || s(-1, p)
						}
						h && s(a, u, h, c)
					}, n.async ? 4 === l.readyState ? setTimeout(i) : (o = ++Jn, Gn && (Vn || (Vn =
					{
					}, ue(t).unload(Gn)), Vn[o] = i), l.onreadystatechange = i) : i()
				},
				abort: function ()
				{
					i && i(e, !0)
				}
			}
		}
	});
	var Zn, ti, ei = /^(?:toggle|show|hide)$/,
		ni = new RegExp("^(?:([+-])=|)(" + he + ")([a-z%]*)$", "i"),
		ii = /queueHooks$/,
		ri = [q],
		si =
		{
			"*": [function (t, e)
			{
				var n = this.createTween(t, e),
					i = n.cur(),
					r = ni.exec(e),
					s = r && r[3] || (ue.cssNumber[t] ? "" : "px"),
					o = (ue.cssNumber[t] || "px" !== s && +i) && ni.exec(ue.css(n.elem, t)),
					a = 1,
					l = 20;
				if (o && o[3] !== s)
				{
					s = s || o[3], r = r || [], o = +i || 1;
					do a = a || ".5", o /= a, ue.style(n.elem, t, o + s);
					while (a !== (a = n.cur() / i) && 1 !== a && --l)
				}
				return r && (o = n.start = +o || +i || 0, n.unit = s, n.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), n}]
		};
	ue.Animation = ue.extend(O, {
		tweener: function (t, e)
		{
			ue.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
			for (var n, i = 0, r = t.length; r > i; i++) n = t[i], si[n] = si[n] || [], si[n].unshift(e)
		},
		prefilter: function (t, e)
		{
			e ? ri.unshift(t) : ri.push(t)
		}
	}), ue.Tween = Y, Y.prototype =
	{
		constructor: Y,
		init: function (t, e, n, i, r, s)
		{
			this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (ue.cssNumber[n] ? "" : "px")
		},
		cur: function ()
		{
			var t = Y.propHooks[this.prop];
			return t && t.get ? t.get(this) : Y.propHooks._default.get(this)
		},
		run: function (t)
		{
			var e, n = Y.propHooks[this.prop];
			return this.pos = e = this.options.duration ? ue.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Y.propHooks._default.set(this), this
		}
	}, Y.prototype.init.prototype = Y.prototype, Y.propHooks =
	{
		_default: {
			get: function (t)
			{
				var e;
				return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ue.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
			},
			set: function (t)
			{
				ue.fx.step[t.prop] ? ue.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ue.cssProps[t.prop]] || ue.cssHooks[t.prop]) ? ue.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
			}
		}
	}, Y.propHooks.scrollTop = Y.propHooks.scrollLeft =
	{
		set: function (t)
		{
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, ue.each(["toggle", "show", "hide"], function (t, e)
	{
		var n = ue.fn[e];
		ue.fn[e] = function (t, i, r)
		{
			return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(B(e, !0), t, i, r)
		}
	}), ue.fn.extend(
	{
		fadeTo: function (t, e, n, i)
		{
			return this.filter(k).css("opacity", 0).show().end().animate(
			{
				opacity: e
			}, t, n, i)
		},
		animate: function (t, e, n, i)
		{
			var r = ue.isEmptyObject(t),
				s = ue.speed(e, n, i),
				o = function ()
				{
					var e = O(this, ue.extend(
					{
					}, t), s);
					(r || ue._data(this, "finish")) && e.stop(!0)
				};
			return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
		},
		stop: function (t, n, i)
		{
			var r = function (t)
			{
				var e = t.stop;
				delete t.stop, e(i)
			};
			return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function ()
			{
				var e = !0,
					n = null != t && t + "queueHooks",
					s = ue.timers,
					o = ue._data(this);
				if (n) o[n] && o[n].stop && r(o[n]);
				else for (n in o) o[n] && o[n].stop && ii.test(n) && r(o[n]);
				for (n = s.length; n--;) s[n].elem !== this || null != t && s[n].queue !== t || (s[n].anim.stop(i), e = !1, s.splice(n, 1));
				(e || !i) && ue.dequeue(this, t)
			})
		},
		finish: function (t)
		{
			return t !== !1 && (t = t || "fx"), this.each(function ()
			{
				var e, n = ue._data(this),
					i = n[t + "queue"],
					r = n[t + "queueHooks"],
					s = ue.timers,
					o = i ? i.length : 0;
				for (n.finish = !0, ue.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
				for (e = 0; o > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
				delete n.finish
			})
		}
	}), ue.each(
	{
		slideDown: B("show"),
		slideUp: B("hide"),
		slideToggle: B("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (t, e)
	{
		ue.fn[t] = function (t, n, i)
		{
			return this.animate(e, t, n, i)
		}
	}), ue.speed = function (t, e, n)
	{
		var i = t && "object" == typeof t ? ue.extend(
		{
		}, t) : {
			complete: n || !n && e || ue.isFunction(t) && t,
			duration: t,
			easing: n && e || e && !ue.isFunction(e) && e
		};
		return i.duration = ue.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ue.fx.speeds ? ue.fx.speeds[i.duration] : ue.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function ()
		{
			ue.isFunction(i.old) && i.old.call(this), i.queue && ue.dequeue(this, i.queue)
		}, i
	}, ue.easing =
	{
		linear: function (t)
		{
			return t
		},
		swing: function (t)
		{
			return.5 - Math.cos(t * Math.PI) / 2
		}
	}, ue.timers = [], ue.fx = Y.prototype.init, ue.fx.tick = function ()
	{
		var t, n = ue.timers,
			i = 0;
		for (Zn = ue.now(); i < n.length; i++) t = n[i], t() || n[i] !== t || n.splice(i--, 1);
		n.length || ue.fx.stop(), Zn = e
	}, ue.fx.timer = function (t)
	{
		t() && ue.timers.push(t) && ue.fx.start()
	}, ue.fx.interval = 13, ue.fx.start = function ()
	{
		ti || (ti = setInterval(ue.fx.tick, ue.fx.interval))
	}, ue.fx.stop = function ()
	{
		clearInterval(ti), ti = null
	}, ue.fx.speeds =
	{
		slow: 600,
		fast: 200,
		_default: 400
	}, ue.fx.step =
	{
	}, ue.expr && ue.expr.filters && (ue.expr.filters.animated = function (t)
	{
		return ue.grep(ue.timers, function (e)
		{
			return t === e.elem
		}).length
	}), ue.fn.offset = function (t)
	{
		if (arguments.length) return t === e ? this : this.each(function (e)
		{
			ue.offset.setOffset(this, t, e)
		});
		var n, i, r =
		{
			top: 0,
			left: 0
		},
			s = this[0],
			o = s && s.ownerDocument;
		if (o) return n = o.documentElement, ue.contains(n, s) ? (typeof s.getBoundingClientRect !== U && (r = s.getBoundingClientRect()), i = z(o), {
			top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : r
	}, ue.offset =
	{
		setOffset: function (t, e, n)
		{
			var i = ue.css(t, "position");
			"static" === i && (t.style.position = "relative");
			var r, s, o = ue(t),
				a = o.offset(),
				l = ue.css(t, "top"),
				c = ue.css(t, "left"),
				u = ("absolute" === i || "fixed" === i) && ue.inArray("auto", [l, c]) > -1,
				h =
				{
				},
				d =
				{
				};
			u ? (d = o.position(), r = d.top, s = d.left) : (r = parseFloat(l) || 0, s = parseFloat(c) || 0), ue.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (h.top = e.top - a.top + r), null != e.left && (h.left = e.left - a.left + s), "using" in e ? e.using.call(t, h) : o.css(h)
		}
	}, ue.fn.extend(
	{
		position: function ()
		{
			if (this[0])
			{
				var t, e, n =
				{
					top: 0,
					left: 0
				},
					i = this[0];
				return "fixed" === ue.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ue.nodeName(t[0], "html") || (n = t.offset()), n.top += ue.css(t[0], "borderTopWidth", !0), n.left += ue.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - n.top - ue.css(i, "marginTop", !0),
					left: e.left - n.left - ue.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function ()
		{
			return this.map(function ()
			{
				for (var t = this.offsetParent || J; t && !ue.nodeName(t, "html") && "static" === ue.css(t, "position");) t = t.offsetParent;
				return t || J
			})
		}
	}), ue.each(
	{
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (t, n)
	{
		var i = /Y/.test(n);
		ue.fn[t] = function (r)
		{
			return ue.access(this, function (t, r, s)
			{
				var o = z(t);
				return s === e ? o ? n in o ? o[n] : o.document.documentElement[r] : t[r] : (o ? o.scrollTo(i ? ue(o).scrollLeft() : s, i ? s : ue(o).scrollTop()) : t[r] = s, void 0)
			}, t, r, arguments.length, null)
		}
	}), ue.each(
	{
		Height: "height",
		Width: "width"
	}, function (t, n)
	{
		ue.each(
		{
			padding: "inner" + t,
			content: n,
			"": "outer" + t
		}, function (i, r)
		{
			ue.fn[r] = function (r, s)
			{
				var o = arguments.length && (i || "boolean" != typeof r),
					a = i || (r === !0 || s === !0 ? "margin" : "border");
				return ue.access(this, function (n, i, r)
				{
					var s;
					return ue.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (s = n.documentElement, Math.max(n.body["scroll" + t], s["scroll" + t], n.body["offset" + t], s["offset" + t], s["client" + t])) : r === e ? ue.css(n, i, a) : ue.style(n, i, r, a)
				}, n, o ? r : e, o, null)
			}
		})
	}), ue.fn.size = function ()
	{
		return this.length
	}, ue.fn.andSelf = ue.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ue : (t.jQuery = t.$ = ue, "function" == typeof define && define.amd && define("jquery", [], function ()
	{
		return ue
	}))
}(window), function (t, e)
{
	t.rails !== e && t.error("jquery-ujs has already been loaded!");
	var n, i = t(document);
	t.rails = n =
	{
		linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
		buttonClickSelector: "button[data-remote]",
		inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
		formSubmitSelector: "form",
		formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
		disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
		enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
		requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
		fileInputSelector: "input[type=file]",
		linkDisableSelector: "a[data-disable-with]",
		CSRFProtection: function (e)
		{
			var n = t('meta[name="csrf-token"]').attr("content");
			n && e.setRequestHeader("X-CSRF-Token", n)
		},
		fire: function (e, n, i)
		{
			var r = t.Event(n);
			return e.trigger(r, i), r.result !== !1
		},
		confirm: function (t)
		{
			return confirm(t)
		},
		ajax: function (e)
		{
			return t.ajax(e)
		},
		href: function (t)
		{
			return t.attr("href")
		},
		handleRemote: function (i)
		{
			var r, s, o, a, l, c, u, h;
			if (n.fire(i, "ajax:before"))
			{
				if (a = i.data("cross-domain"), l = a === e ? null : a, c = i.data("with-credentials") || null, u = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form"))
				{
					r = i.attr("method"), s = i.attr("action"), o = i.serializeArray();
					var d = i.data("ujs:submit-button");
					d && (o.push(d), i.data("ujs:submit-button", null))
				}
				else i.is(n.inputChangeSelector) ? (r = i.data("method"), s = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", s = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : (r = i.data("method"), s = n.href(i), o = i.data("params") || null);
				h =
				{
					type: r || "GET",
					data: o,
					dataType: u,
					beforeSend: function (t, r)
					{
						return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r])
					},
					success: function (t, e, n)
					{
						i.trigger("ajax:success", [t, e, n])
					},
					complete: function (t, e)
					{
						i.trigger("ajax:complete", [t, e])
					},
					error: function (t, e, n)
					{
						i.trigger("ajax:error", [t, e, n])
					},
					crossDomain: l
				}, c && (h.xhrFields =
				{
					withCredentials: c
				}), s && (h.url = s);
				var p = n.ajax(h);
				return i.trigger("ajax:send", p), p
			}
			return !1
		},
		handleMethod: function (i)
		{
			var r = n.href(i),
				s = i.data("method"),
				o = i.attr("target"),
				a = t("meta[name=csrf-token]").attr("content"),
				l = t("meta[name=csrf-param]").attr("content"),
				c = t('<form method="post" action="../assets/2012/' + r + '"></form>'),
				u = '<input name="_method" value="' + s + '" type="hidden" />';
			l !== e && a !== e && (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'), o && c.attr("target", o), c.hide().append(u).appendTo("body"), c.submit()
		},
		disableFormElements: function (e)
		{
			e.find(n.disableSelector).each(function ()
			{
				var e = t(this),
					n = e.is("button") ? "html" : "val";
				e.data("ujs:enable-with", e[n]()), e[n](e.data("disable-with")), e.prop("disabled", !0)
			})
		},
		enableFormElements: function (e)
		{
			e.find(n.enableSelector).each(function ()
			{
				var e = t(this),
					n = e.is("button") ? "html" : "val";
				e.data("ujs:enable-with") && e[n](e.data("ujs:enable-with")), e.prop("disabled", !1)
			})
		},
		allowAction: function (t)
		{
			var e, i = t.data("confirm"),
				r = !1;
			return i ? (n.fire(t, "confirm") && (r = n.confirm(i), e = n.fire(t, "confirm:complete", [r])), r && e) : !0
		},
		blankInputs: function (e, n, i)
		{
			var r, s, o = t(),
				a = n || "input,textarea",
				l = e.find(a);
			return l.each(function ()
			{
				if (r = t(this), s = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !s == !i)
				{
					if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
					o = o.add(r)
				}
			}), o.length ? o : !1
		},
		nonBlankInputs: function (t, e)
		{
			return n.blankInputs(t, e, !0)
		},
		stopEverything: function (e)
		{
			return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
		},
		disableElement: function (t)
		{
			t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function (t)
			{
				return n.stopEverything(t)
			})
		},
		enableElement: function (t)
		{
			t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
		}
	}, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, i)
	{
		t.crossDomain || n.CSRFProtection(i)
	}), i.delegate(n.linkDisableSelector, "ajax:complete", function ()
	{
		n.enableElement(t(this))
	}), i.delegate(n.linkClickSelector, "click.rails", function (i)
	{
		var r = t(this),
			s = r.data("method"),
			o = r.data("params");
		if (!n.allowAction(r)) return n.stopEverything(i);
		if (r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== e)
		{
			if (!(!i.metaKey && !i.ctrlKey || s && "GET" !== s || o)) return !0;
			var a = n.handleRemote(r);
			return a === !1 ? n.enableElement(r) : a.error(function ()
			{
				n.enableElement(r)
			}), !1
		}
		return r.data("method") ? (n.handleMethod(r), !1) : void 0
	}), i.delegate(n.buttonClickSelector, "click.rails", function (e)
	{
		var i = t(this);
		return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
	}), i.delegate(n.inputChangeSelector, "change.rails", function (e)
	{
		var i = t(this);
		return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
	}), i.delegate(n.formSubmitSelector, "submit.rails", function (i)
	{
		var r = t(this),
			s = r.data("remote") !== e,
			o = n.blankInputs(r, n.requiredInputSelector),
			a = n.nonBlankInputs(r, n.fileInputSelector);
		if (!n.allowAction(r)) return n.stopEverything(i);
		if (o && r.attr("novalidate") == e && n.fire(r, "ajax:aborted:required", [o])) return n.stopEverything(i);
		if (s)
		{
			if (a)
			{
				setTimeout(function ()
				{
					n.disableFormElements(r)
				}, 13);
				var l = n.fire(r, "ajax:aborted:file", [a]);
				return l || setTimeout(function ()
				{
					n.enableFormElements(r)
				}, 13), l
			}
			return n.handleRemote(r), !1
		}
		setTimeout(function ()
		{
			n.disableFormElements(r)
		}, 13)
	}), i.delegate(n.formInputClickSelector, "click.rails", function (e)
	{
		var i = t(this);
		if (!n.allowAction(i)) return n.stopEverything(e);
		var r = i.attr("name"),
			s = r ? {
				name: r,
				value: i.val()
			} : null;
		i.closest("form").data("ujs:submit-button", s)
	}), i.delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function (e)
	{
		this == e.target && n.disableFormElements(t(this))
	}), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function (e)
	{
		this == e.target && n.enableFormElements(t(this))
	}), t(function ()
	{
		var e = t("meta[name=csrf-token]").attr("content"),
			n = t("meta[name=csrf-param]").attr("content");
		t('form input[name="' + n + '"]').val(e)
	}))
}(jQuery),
/*! jQuery UI - v1.10.3 - 2013-08-01
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.sortable.js, jquery.ui.datepicker.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

function (t, e)
{
	function n(e, n)
	{
		var r, s, o, a = e.nodeName.toLowerCase();
		return "area" === a ? (r = e.parentNode, s = r.name, e.href && s && "map" === r.nodeName.toLowerCase() ? (o = t("img[usemap=#" + s + "]")[0], !! o && i(o)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || n : n) && i(e)
	}
	function i(e)
	{
		return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function ()
		{
			return "hidden" === t.css(this, "visibility")
		}).length
	}
	var r = 0,
		s = /^ui-id-\d+$/;
	t.ui = t.ui || {
	}, t.extend(t.ui, {
		version: "1.10.3",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), t.fn.extend(
	{
		focus: function (e)
		{
			return function (n, i)
			{
				return "number" == typeof n ? this.each(function ()
				{
					var e = this;
					setTimeout(function ()
					{
						t(e).focus(), i && i.call(e)
					}, n)
				}) : e.apply(this, arguments)
			}
		}(t.fn.focus),
		scrollParent: function ()
		{
			var e;
			return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function ()
			{
				return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
			}).eq(0) : this.parents().filter(function ()
			{
				return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
			}).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
		},
		zIndex: function (n)
		{
			if (n !== e) return this.css("zIndex", n);
			if (this.length) for (var i, r, s = t(this[0]); s.length && s[0] !== document;)
			{
				if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(s.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return r;
				s = s.parent()
			}
			return 0
		},
		uniqueId: function ()
		{
			return this.each(function ()
			{
				this.id || (this.id = "ui-id-" + ++r)
			})
		},
		removeUniqueId: function ()
		{
			return this.each(function ()
			{
				s.test(this.id) && t(this).removeAttr("id")
			})
		}
	}), t.extend(t.expr[":"], {
		data: t.expr.createPseudo ? t.expr.createPseudo(function (e)
		{
			return function (n)
			{
				return !!t.data(n, e)
			}
		}) : function (e, n, i)
		{
			return !!t.data(e, i[3])
		},
		focusable: function (e)
		{
			return n(e, !isNaN(t.attr(e, "tabindex")))
		},
		tabbable: function (e)
		{
			var i = t.attr(e, "tabindex"),
				r = isNaN(i);
			return (r || i >= 0) && n(e, !r)
		}
	}), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (n, i)
	{
		function r(e, n, i, r)
		{
			return t.each(s, function ()
			{
				n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), r && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
			}), n
		}
		var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
			o = i.toLowerCase(),
			a =
			{
				innerWidth: t.fn.innerWidth,
				innerHeight: t.fn.innerHeight,
				outerWidth: t.fn.outerWidth,
				outerHeight: t.fn.outerHeight
			};
		t.fn["inner" + i] = function (n)
		{
			return n === e ? a["inner" + i].call(this) : this.each(function ()
			{
				t(this).css(o, r(this, n) + "px")
			})
		}, t.fn["outer" + i] = function (e, n)
		{
			return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function ()
			{
				t(this).css(o, r(this, e, !0, n) + "px")
			})
		}
	}), t.fn.addBack || (t.fn.addBack = function (t)
	{
		return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
	}), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e)
	{
		return function (n)
		{
			return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this)
		}
	}(t.fn.removeData)), t.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend(
	{
		disableSelection: function ()
		{
			return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (t)
			{
				t.preventDefault()
			})
		},
		enableSelection: function ()
		{
			return this.unbind(".ui-disableSelection")
		}
	}), t.extend(t.ui, {
		plugin: {
			add: function (e, n, i)
			{
				var r, s = t.ui[e].prototype;
				for (r in i) s.plugins[r] = s.plugins[r] || [], s.plugins[r].push([n, i[r]])
			},
			call: function (t, e, n)
			{
				var i, r = t.plugins[e];
				if (r && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType) for (i = 0; r.length > i; i++) t.options[r[i][0]] && r[i][1].apply(t.element, n)
			}
		},
		hasScroll: function (e, n)
		{
			if ("hidden" === t(e).css("overflow")) return !1;
			var i = n && "left" === n ? "scrollLeft" : "scrollTop",
				r = !1;
			return e[i] > 0 ? !0 : (e[i] = 1, r = e[i] > 0, e[i] = 0, r)
		}
	})
}(jQuery), function (t, e)
{
	var n = 0,
		i = Array.prototype.slice,
		r = t.cleanData;
	t.cleanData = function (e)
	{
		for (var n, i = 0; null != (n = e[i]); i++) try
		{
			t(n).triggerHandler("remove")
		}
		catch (s)
		{
		}
		r(e)
	}, t.widget = function (n, i, r)
	{
		var s, o, a, l, c =
		{
		},
			u = n.split(".")[0];
		n = n.split(".")[1], s = u + "-" + n, r || (r = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function (e)
		{
			return !!t.data(e, s)
		}, t[u] = t[u] || {
		}, o = t[u][n], a = t[u][n] = function (t, n)
		{
			return this._createWidget ? (arguments.length && this._createWidget(t, n), e) : new a(t, n)
		}, t.extend(a, o, {
			version: r.version,
			_proto: t.extend(
			{
			}, r),
			_childConstructors: []
		}), l = new i, l.options = t.widget.extend(
		{
		}, l.options), t.each(r, function (n, r)
		{
			return t.isFunction(r) ? (c[n] = function ()
			{
				var t = function ()
				{
					return i.prototype[n].apply(this, arguments)
				},
					e = function (t)
					{
						return i.prototype[n].apply(this, t)
					};
				return function ()
				{
					var n, i = this._super,
						s = this._superApply;
					return this._super = t, this._superApply = e, n = r.apply(this, arguments), this._super = i, this._superApply = s, n
				}
			}(), e) : (c[n] = r, e)
		}), a.prototype = t.widget.extend(l, {
			widgetEventPrefix: o ? l.widgetEventPrefix : n
		}, c, {
			constructor: a,
			namespace: u,
			widgetName: n,
			widgetFullName: s
		}), o ? (t.each(o._childConstructors, function (e, n)
		{
			var i = n.prototype;
			t.widget(i.namespace + "." + i.widgetName, a, n._proto)
		}), delete o._childConstructors) : i._childConstructors.push(a), t.widget.bridge(n, a)
	}, t.widget.extend = function (n)
	{
		for (var r, s, o = i.call(arguments, 1), a = 0, l = o.length; l > a; a++) for (r in o[a]) s = o[a][r], o[a].hasOwnProperty(r) && s !== e && (n[r] = t.isPlainObject(s) ? t.isPlainObject(n[r]) ? t.widget.extend(
		{
		}, n[r], s) : t.widget.extend(
		{
		}, s) : s);
		return n
	}, t.widget.bridge = function (n, r)
	{
		var s = r.prototype.widgetFullName || n;
		t.fn[n] = function (o)
		{
			var a = "string" == typeof o,
				l = i.call(arguments, 1),
				c = this;
			return o = !a && l.length ? t.widget.extend.apply(null, [o].concat(l)) : o, a ? this.each(function ()
			{
				var i, r = t.data(this, s);
				return r ? t.isFunction(r[o]) && "_" !== o.charAt(0) ? (i = r[o].apply(r, l), i !== r && i !== e ? (c = i && i.jquery ? c.pushStack(i.get()) : i, !1) : e) : t.error("no such method '" + o + "' for " + n + " widget instance") : t.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'")
			}) : this.each(function ()
			{
				var e = t.data(this, s);
				e ? e.option(o || {
				})._init() : t.data(this, s, new r(o, this))
			}), c
		}
	}, t.Widget = function ()
	{
	}, t.Widget._childConstructors = [], t.Widget.prototype =
	{
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function (e, i)
		{
			i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend(
			{
			}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function (t)
				{
					t.target === i && this.destroy()
				}
			}), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: t.noop,
		_getCreateEventData: t.noop,
		_create: t.noop,
		_init: t.noop,
		destroy: function ()
		{
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: t.noop,
		widget: function ()
		{
			return this.element
		},
		option: function (n, i)
		{
			var r, s, o, a = n;
			if (0 === arguments.length) return t.widget.extend(
			{
			}, this.options);
			if ("string" == typeof n) if (a =
			{
			}, r = n.split("."), n = r.shift(), r.length)
			{
				for (s = a[n] = t.widget.extend(
				{
				}, this.options[n]), o = 0; r.length - 1 > o; o++) s[r[o]] = s[r[o]] || {
				}, s = s[r[o]];
				if (n = r.pop(), i === e) return s[n] === e ? null : s[n];
				s[n] = i
			}
			else
			{
				if (i === e) return this.options[n] === e ? null : this.options[n];
				a[n] = i
			}
			return this._setOptions(a), this
		},
		_setOptions: function (t)
		{
			var e;
			for (e in t) this._setOption(e, t[e]);
			return this
		},
		_setOption: function (t, e)
		{
			return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
		},
		enable: function ()
		{
			return this._setOption("disabled", !1)
		},
		disable: function ()
		{
			return this._setOption("disabled", !0)
		},
		_on: function (n, i, r)
		{
			var s, o = this;
			"boolean" != typeof n && (r = i, i = n, n = !1), r ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, s = this.widget()), t.each(r, function (r, a)
			{
				function l()
				{
					return n || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : e
				}
				"string" != typeof a && (l.guid = a.guid = a.guid || l.guid || t.guid++);
				var c = r.match(/^(\w+)\s*(.*)$/),
					u = c[1] + o.eventNamespace,
					h = c[2];
				h ? s.delegate(h, u, l) : i.bind(u, l)
			})
		},
		_off: function (t, e)
		{
			e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
		},
		_delay: function (t, e)
		{
			function n()
			{
				return ("string" == typeof t ? i[t] : t).apply(i, arguments)
			}
			var i = this;
			return setTimeout(n, e || 0)
		},
		_hoverable: function (e)
		{
			this.hoverable = this.hoverable.add(e), this._on(e, {
				mouseenter: function (e)
				{
					t(e.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function (e)
				{
					t(e.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function (e)
		{
			this.focusable = this.focusable.add(e), this._on(e, {
				focusin: function (e)
				{
					t(e.currentTarget).addClass("ui-state-focus")
				},
				focusout: function (e)
				{
					t(e.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function (e, n, i)
		{
			var r, s, o = this.options[e];
			if (i = i || {
			}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], s = n.originalEvent) for (r in s) r in n || (n[r] = s[r]);
			return this.element.trigger(n, i), !(t.isFunction(o) && o.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
		}
	}, t.each(
	{
		show: "fadeIn",
		hide: "fadeOut"
	}, function (e, n)
	{
		t.Widget.prototype["_" + e] = function (i, r, s)
		{
			"string" == typeof r && (r =
			{
				effect: r
			});
			var o, a = r ? r === !0 || "number" == typeof r ? n : r.effect || n : e;
			r = r || {
			}, "number" == typeof r && (r =
			{
				duration: r
			}), o = !t.isEmptyObject(r), r.complete = s, r.delay && i.delay(r.delay), o && t.effects && t.effects.effect[a] ? i[e](r) : a !== e && i[a] ? i[a](r.duration, r.easing, s) : i.queue(function (n)
			{
				t(this)[e](), s && s.call(i[0]), n()
			})
		}
	})
}(jQuery), function (t)
{
	var e = !1;
	t(document).mouseup(function ()
	{
		e = !1
	}), t.widget("ui.mouse", {
		version: "1.10.3",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function ()
		{
			var e = this;
			this.element.bind("mousedown." + this.widgetName, function (t)
			{
				return e._mouseDown(t)
			}).bind("click." + this.widgetName, function (n)
			{
				return !0 === t.data(n.target, e.widgetName + ".preventClickEvent") ? (t.removeData(n.target, e.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
			}), this.started = !1
		},
		_mouseDestroy: function ()
		{
			this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function (n)
		{
			if (!e)
			{
				this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
				var i = this,
					r = 1 === n.which,
					s = "string" == typeof this.options.cancel && n.target.nodeName ? t(n.target).closest(this.options.cancel).length : !1;
				return r && !s && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function ()
				{
					i.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === t.data(n.target, this.widgetName + ".preventClickEvent") && t.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t)
				{
					return i._mouseMove(t)
				}, this._mouseUpDelegate = function (t)
				{
					return i._mouseUp(t)
				}, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), e = !0, !0)) : !0
			}
		},
		_mouseMove: function (e)
		{
			return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
		},
		_mouseUp: function (e)
		{
			return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
		},
		_mouseDistanceMet: function (t)
		{
			return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function ()
		{
			return this.mouseDelayMet
		},
		_mouseStart: function ()
		{
		},
		_mouseDrag: function ()
		{
		},
		_mouseStop: function ()
		{
		},
		_mouseCapture: function ()
		{
			return !0
		}
	})
}(jQuery), function (t, e)
{
	function n(t, e, n)
	{
		return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? n / 100 : 1)]
	}
	function i(e, n)
	{
		return parseInt(t.css(e, n), 10) || 0
	}
	function r(e)
	{
		var n = e[0];
		return 9 === n.nodeType ? {
			width: e.width(),
			height: e.height(),
			offset: {
				top: 0,
				left: 0
			}
		} : t.isWindow(n) ? {
			width: e.width(),
			height: e.height(),
			offset: {
				top: e.scrollTop(),
				left: e.scrollLeft()
			}
		} : n.preventDefault ? {
			width: 0,
			height: 0,
			offset: {
				top: n.pageY,
				left: n.pageX
			}
		} : {
			width: e.outerWidth(),
			height: e.outerHeight(),
			offset: e.offset()
		}
	}
	t.ui = t.ui || {
	};
	var s, o = Math.max,
		a = Math.abs,
		l = Math.round,
		c = /left|center|right/,
		u = /top|center|bottom/,
		h = /[\+\-]\d+(\.[\d]+)?%?/,
		d = /^\w+/,
		p = /%$/,
		f = t.fn.position;
	t.position =
	{
		scrollbarWidth: function ()
		{
			if (s !== e) return s;
			var n, i, r = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
				o = r.children()[0];
			return t("body").append(r), n = o.offsetWidth, r.css("overflow", "scroll"), i = o.offsetWidth, n === i && (i = r[0].clientWidth), r.remove(), s = n - i
		},
		getScrollInfo: function (e)
		{
			var n = e.isWindow ? "" : e.element.css("overflow-x"),
				i = e.isWindow ? "" : e.element.css("overflow-y"),
				r = "scroll" === n || "auto" === n && e.width < e.element[0].scrollWidth,
				s = "scroll" === i || "auto" === i && e.height < e.element[0].scrollHeight;
			return {
				width: s ? t.position.scrollbarWidth() : 0,
				height: r ? t.position.scrollbarWidth() : 0
			}
		},
		getWithinInfo: function (e)
		{
			var n = t(e || window),
				i = t.isWindow(n[0]);
			return {
				element: n,
				isWindow: i,
				offset: n.offset() || {
					left: 0,
					top: 0
				},
				scrollLeft: n.scrollLeft(),
				scrollTop: n.scrollTop(),
				width: i ? n.width() : n.outerWidth(),
				height: i ? n.height() : n.outerHeight()
			}
		}
	}, t.fn.position = function (e)
	{
		if (!e || !e.of) return f.apply(this, arguments);
		e = t.extend(
		{
		}, e);
		var s, p, g, m, v, y, b = t(e.of),
			_ = t.position.getWithinInfo(e.within),
			w = t.position.getScrollInfo(_),
			x = (e.collision || "flip").split(" "),
			k =
			{
			};
		return y = r(b), b[0].preventDefault && (e.at = "left top"), p = y.width, g = y.height, m = y.offset, v = t.extend(
		{
		}, m), t.each(["my", "at"], function ()
		{
			var t, n, i = (e[this] || "").split(" ");
			1 === i.length && (i = c.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = c.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), n = h.exec(i[1]), k[this] = [t ? t[0] : 0, n ? n[0] : 0], e[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
		}), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), s = n(k.at, p, g), v.left += s[0], v.top += s[1], this.each(function ()
		{
			var r, c, u = t(this),
				h = u.outerWidth(),
				d = u.outerHeight(),
				f = i(this, "marginLeft"),
				y = i(this, "marginTop"),
				D = h + f + i(this, "marginRight") + w.width,
				C = d + y + i(this, "marginBottom") + w.height,
				T = t.extend(
				{
				}, v),
				N = n(k.my, u.outerWidth(), u.outerHeight());
			"right" === e.my[0] ? T.left -= h : "center" === e.my[0] && (T.left -= h / 2), "bottom" === e.my[1] ? T.top -= d : "center" === e.my[1] && (T.top -= d / 2), T.left += N[0], T.top += N[1], t.support.offsetFractions || (T.left = l(T.left), T.top = l(T.top)), r =
			{
				marginLeft: f,
				marginTop: y
			}, t.each(["left", "top"], function (n, i)
			{
				t.ui.position[x[n]] && t.ui.position[x[n]][i](T, {
					targetWidth: p,
					targetHeight: g,
					elemWidth: h,
					elemHeight: d,
					collisionPosition: r,
					collisionWidth: D,
					collisionHeight: C,
					offset: [s[0] + N[0], s[1] + N[1]],
					my: e.my,
					at: e.at,
					within: _,
					elem: u
				})
			}), e.using && (c = function (t)
			{
				var n = m.left - T.left,
					i = n + p - h,
					r = m.top - T.top,
					s = r + g - d,
					l =
					{
						target: {
							element: b,
							left: m.left,
							top: m.top,
							width: p,
							height: g
						},
						element: {
							element: u,
							left: T.left,
							top: T.top,
							width: h,
							height: d
						},
						horizontal: 0 > i ? "left" : n > 0 ? "right" : "center",
						vertical: 0 > s ? "top" : r > 0 ? "bottom" : "middle"
					};
				h > p && p > a(n + i) && (l.horizontal = "center"), d > g && g > a(r + s) && (l.vertical = "middle"), l.important = o(a(n), a(i)) > o(a(r), a(s)) ? "horizontal" : "vertical", e.using.call(this, t, l)
			}), u.offset(t.extend(T, {
				using: c
			}))
		})
	}, t.ui.position =
	{
		fit: {
			left: function (t, e)
			{
				var n, i = e.within,
					r = i.isWindow ? i.scrollLeft : i.offset.left,
					s = i.width,
					a = t.left - e.collisionPosition.marginLeft,
					l = r - a,
					c = a + e.collisionWidth - s - r;
				e.collisionWidth > s ? l > 0 && 0 >= c ? (n = t.left + l + e.collisionWidth - s - r, t.left += l - n) : t.left = c > 0 && 0 >= l ? r : l > c ? r + s - e.collisionWidth : r : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = o(t.left - a, t.left)
			},
			top: function (t, e)
			{
				var n, i = e.within,
					r = i.isWindow ? i.scrollTop : i.offset.top,
					s = e.within.height,
					a = t.top - e.collisionPosition.marginTop,
					l = r - a,
					c = a + e.collisionHeight - s - r;
				e.collisionHeight > s ? l > 0 && 0 >= c ? (n = t.top + l + e.collisionHeight - s - r, t.top += l - n) : t.top = c > 0 && 0 >= l ? r : l > c ? r + s - e.collisionHeight : r : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = o(t.top - a, t.top)
			}
		},
		flip: {
			left: function (t, e)
			{
				var n, i, r = e.within,
					s = r.offset.left + r.scrollLeft,
					o = r.width,
					l = r.isWindow ? r.scrollLeft : r.offset.left,
					c = t.left - e.collisionPosition.marginLeft,
					u = c - l,
					h = c + e.collisionWidth - o - l,
					d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
					p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
					f = -2 * e.offset[0];
				0 > u ? (n = t.left + d + p + f + e.collisionWidth - o - s, (0 > n || a(u) > n) && (t.left += d + p + f)) : h > 0 && (i = t.left - e.collisionPosition.marginLeft + d + p + f - l, (i > 0 || h > a(i)) && (t.left += d + p + f))
			},
			top: function (t, e)
			{
				var n, i, r = e.within,
					s = r.offset.top + r.scrollTop,
					o = r.height,
					l = r.isWindow ? r.scrollTop : r.offset.top,
					c = t.top - e.collisionPosition.marginTop,
					u = c - l,
					h = c + e.collisionHeight - o - l,
					d = "top" === e.my[1],
					p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
					f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
					g = -2 * e.offset[1];
				0 > u ? (i = t.top + p + f + g + e.collisionHeight - o - s, t.top + p + f + g > u && (0 > i || a(u) > i) && (t.top += p + f + g)) : h > 0 && (n = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > h && (n > 0 || h > a(n)) && (t.top += p + f + g))
			}
		},
		flipfit: {
			left: function ()
			{
				t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
			},
			top: function ()
			{
				t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
			}
		}
	}, function ()
	{
		var e, n, i, r, s, o = document.getElementsByTagName("body")[0],
			a = document.createElement("div");
		e = document.createElement(o ? "div" : "body"), i =
		{
			visibility: "hidden",
			width: 0,
			height: 0,
			border: 0,
			margin: 0,
			background: "none"
		}, o && t.extend(i, {
			position: "absolute",
			left: "-1000px",
			top: "-1000px"
		});
		for (s in i) e.style[s] = i[s];
		e.appendChild(a), n = o || document.documentElement, n.insertBefore(e, n.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", r = t(a).offset().left, t.support.offsetFractions = r > 10 && 11 > r, e.innerHTML = "", n.removeChild(e)
	}()
}(jQuery), function (t)
{
	function e(t, e, n)
	{
		return t > e && e + n > t
	}
	function n(t)
	{
		return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
	}
	t.widget("ui.sortable", t.ui.mouse, {
		version: "1.10.3",
		widgetEventPrefix: "sort",
		ready: !1,
		options: {
			appendTo: "parent",
			axis: !1,
			connectWith: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			dropOnEmpty: !0,
			forcePlaceholderSize: !1,
			forceHelperSize: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			items: "> *",
			opacity: !1,
			placeholder: !1,
			revert: !1,
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1e3,
			activate: null,
			beforeStop: null,
			change: null,
			deactivate: null,
			out: null,
			over: null,
			receive: null,
			remove: null,
			sort: null,
			start: null,
			stop: null,
			update: null
		},
		_create: function ()
		{
			var t = this.options;
			this.containerCache =
			{
			}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || n(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
		},
		_destroy: function ()
		{
			this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
			for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
			return this
		},
		_setOption: function (e, n)
		{
			"disabled" === e ? (this.options[e] = n, this.widget().toggleClass("ui-sortable-disabled", !! n)) : t.Widget.prototype._setOption.apply(this, arguments)
		},
		_mouseCapture: function (e, n)
		{
			var i = null,
				r = !1,
				s = this;
			return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function ()
			{
				return t.data(this, s.widgetName + "-item") === s ? (i = t(this), !1) : void 0
			}), t.data(e.target, s.widgetName + "-item") === s && (i = t(e.target)), i ? !this.options.handle || n || (t(this.options.handle, i).find("*").addBack().each(function ()
			{
				this === e.target && (r = !0)
			}), r) ? (this.currentItem = i, this._removeCurrentsFromItems(), !0) : !1 : !1)
		},
		_mouseStart: function (e, n, i)
		{
			var r, s, o = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset =
			{
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			}, t.extend(this.offset, {
				click: {
					left: e.pageX - this.offset.left,
					top: e.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition =
			{
				prev: this.currentItem.prev()[0],
				parent: this.currentItem.parent()[0]
			}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (s = this.document.find("body"), this.storedCursor = s.css("cursor"), s.css("cursor", o.cursor), this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(s)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i) for (r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", e, this._uiHash(this));
			return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
		},
		_mouseDrag: function (e)
		{
			var n, i, r, s, o = this.options,
				a = !1;
			for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - t(document).scrollTop() < o.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - o.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < o.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + o.scrollSpeed)), e.pageX - t(document).scrollLeft() < o.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - o.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < o.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + o.scrollSpeed))), a !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n = this.items.length - 1; n >= 0; n--) if (i = this.items[n], r = i.item[0], s = this._intersectsWithPointer(i), s && i.instance === this.currentContainer && r !== this.currentItem[0] && this.placeholder[1 === s ? "next" : "prev"]()[0] !== r && !t.contains(this.placeholder[0], r) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], r) : !0))
			{
				if (this.direction = 1 === s ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
				this._rearrange(e, i), this._trigger("change", e, this._uiHash());
				break
			}
			return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
		},
		_mouseStop: function (e, n)
		{
			if (e)
			{
				if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert)
				{
					var i = this,
						r = this.placeholder.offset(),
						s = this.options.axis,
						o =
						{
						};
					s && "x" !== s || (o.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), s && "y" !== s || (o.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function ()
					{
						i._clear(e)
					})
				}
				else this._clear(e, n);
				return !1
			}
		},
		cancel: function ()
		{
			if (this.dragging)
			{
				this._mouseUp(
				{
					target: null
				}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
				helper: null,
				dragging: !1,
				reverting: !1,
				_noFinalSort: null
			}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
		},
		serialize: function (e)
		{
			var n = this._getItemsAsjQuery(e && e.connected),
				i = [];
			return e = e || {
			}, t(n).each(function ()
			{
				var n = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
				n && i.push((e.key || n[1] + "[]") + "=" + (e.key && e.expression ? n[1] : n[2]))
			}), !i.length && e.key && i.push(e.key + "="), i.join("&")
		},
		toArray: function (e)
		{
			var n = this._getItemsAsjQuery(e && e.connected),
				i = [];
			return e = e || {
			}, n.each(function ()
			{
				i.push(t(e.item || this).attr(e.attribute || "id") || "")
			}), i
		},
		_intersectsWith: function (t)
		{
			var e = this.positionAbs.left,
				n = e + this.helperProportions.width,
				i = this.positionAbs.top,
				r = i + this.helperProportions.height,
				s = t.left,
				o = s + t.width,
				a = t.top,
				l = a + t.height,
				c = this.offset.click.top,
				u = this.offset.click.left,
				h = "x" === this.options.axis || i + c > a && l > i + c,
				d = "y" === this.options.axis || e + u > s && o > e + u,
				p = h && d;
			return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > s && o > n - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > a && l > r - this.helperProportions.height / 2
		},
		_intersectsWithPointer: function (t)
		{
			var n = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
				i = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
				r = n && i,
				s = this._getDragVerticalDirection(),
				o = this._getDragHorizontalDirection();
			return r ? this.floating ? o && "right" === o || "down" === s ? 2 : 1 : s && ("down" === s ? 2 : 1) : !1
		},
		_intersectsWithSides: function (t)
		{
			var n = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
				i = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
				r = this._getDragVerticalDirection(),
				s = this._getDragHorizontalDirection();
			return this.floating && s ? "right" === s && i || "left" === s && !i : r && ("down" === r && n || "up" === r && !n)
		},
		_getDragVerticalDirection: function ()
		{
			var t = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 !== t && (t > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function ()
		{
			var t = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 !== t && (t > 0 ? "right" : "left")
		},
		refresh: function (t)
		{
			return this._refreshItems(t), this.refreshPositions(), this
		},
		_connectWith: function ()
		{
			var t = this.options;
			return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
		},
		_getItemsAsjQuery: function (e)
		{
			var n, i, r, s, o = [],
				a = [],
				l = this._connectWith();
			if (l && e) for (n = l.length - 1; n >= 0; n--) for (r = t(l[n]), i = r.length - 1; i >= 0; i--) s = t.data(r[i], this.widgetFullName), s && s !== this && !s.options.disabled && a.push([t.isFunction(s.options.items) ? s.options.items.call(s.element) : t(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s]);
			for (a.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
				options: this.options,
				item: this.currentItem
			}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = a.length - 1; n >= 0; n--) a[n][0].each(function ()
			{
				o.push(this)
			});
			return t(o)
		},
		_removeCurrentsFromItems: function ()
		{
			var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = t.grep(this.items, function (t)
			{
				for (var n = 0; e.length > n; n++) if (e[n] === t.item[0]) return !1;
				return !0
			})
		},
		_refreshItems: function (e)
		{
			this.items = [], this.containers = [this];
			var n, i, r, s, o, a, l, c, u = this.items,
				h = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
					item: this.currentItem
				}) : t(this.options.items, this.element), this]],
				d = this._connectWith();
			if (d && this.ready) for (n = d.length - 1; n >= 0; n--) for (r = t(d[n]), i = r.length - 1; i >= 0; i--) s = t.data(r[i], this.widgetFullName), s && s !== this && !s.options.disabled && (h.push([t.isFunction(s.options.items) ? s.options.items.call(s.element[0], e, {
				item: this.currentItem
			}) : t(s.options.items, s.element), s]), this.containers.push(s));
			for (n = h.length - 1; n >= 0; n--) for (o = h[n][1], a = h[n][0], i = 0, c = a.length; c > i; i++) l = t(a[i]), l.data(this.widgetName + "-item", o), u.push(
			{
				item: l,
				instance: o,
				width: 0,
				height: 0,
				left: 0,
				top: 0
			})
		},
		refreshPositions: function (e)
		{
			this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			var n, i, r, s;
			for (n = this.items.length - 1; n >= 0; n--) i = this.items[n], i.instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? t(this.options.toleranceElement, i.item) : i.item, e || (i.width = r.outerWidth(), i.height = r.outerHeight()), s = r.offset(), i.left = s.left, i.top = s.top);
			if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
			else for (n = this.containers.length - 1; n >= 0; n--) s = this.containers[n].element.offset(), this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
			return this
		},
		_createPlaceholder: function (e)
		{
			e = e || this;
			var n, i = e.options;
			i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder =
			{
				element: function ()
				{
					var i = e.currentItem[0].nodeName.toLowerCase(),
						r = t("<" + i + ">", e.document[0]).addClass(n || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
					return "tr" === i ? e.currentItem.children().each(function ()
					{
						t("<td> </td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(r)
					}) : "img" === i && r.attr("src", e.currentItem.attr("src")), n || r.css("visibility", "hidden"), r
				},
				update: function (t, r)
				{
					(!n || i.forcePlaceholderSize) && (r.height() || r.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), r.width() || r.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
				}
			}), e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), i.placeholder.update(e, e.placeholder)
		},
		_contactContainers: function (i)
		{
			var r, s, o, a, l, c, u, h, d, p, f = null,
				g = null;
			for (r = this.containers.length - 1; r >= 0; r--) if (!t.contains(this.currentItem[0], this.containers[r].element[0])) if (this._intersectsWith(this.containers[r].containerCache))
			{
				if (f && t.contains(this.containers[r].element[0], f.element[0])) continue;
				f = this.containers[r], g = r
			}
			else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", i, this._uiHash(this)), this.containers[r].containerCache.over = 0);
			if (f) if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", i, this._uiHash(this)), this.containers[g].containerCache.over = 1);
			else
			{
				for (o = 1e4, a = null, p = f.floating || n(this.currentItem), l = p ? "left" : "top", c = p ? "width" : "height", u = this.positionAbs[l] + this.offset.click[l], s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[g].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[s].top, this.items[s].height)) && (h = this.items[s].item.offset()[l], d = !1, Math.abs(h - u) > Math.abs(h + this.items[s][c] - u) && (d = !0, h += this.items[s][c]), o > Math.abs(h - u) && (o = Math.abs(h - u), a = this.items[s], this.direction = d ? "up" : "down"));
				if (!a && !this.options.dropOnEmpty) return;
				if (this.currentContainer === this.containers[g]) return;
				a ? this._rearrange(i, a, null, !0) : this._rearrange(i, null, this.containers[g].element, !0), this._trigger("change", i, this._uiHash()), this.containers[g]._trigger("change", i, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", i, this._uiHash(this)), this.containers[g].containerCache.over = 1
			}
		},
		_createHelper: function (e)
		{
			var n = this.options,
				i = t.isFunction(n.helper) ? t(n.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
			return i.parents("body").length || t("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS =
			{
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			}), (!i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), i
		},
		_adjustOffsetFromHelper: function (e)
		{
			"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e =
			{
				left: +e[0],
				top: +e[1] || 0
			}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset: function ()
		{
			this.offsetParent = this.helper.offsetParent();
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e =
			{
				top: 0,
				left: 0
			}), {
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function ()
		{
			if ("relative" === this.cssPosition)
			{
				var t = this.currentItem.position();
				return {
					top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function ()
		{
			this.margins =
			{
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function ()
		{
			this.helperProportions =
			{
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function ()
		{
			var e, n, i, r = this.options;
			"parent" === r.containment && (r.containment = this.helper[0].parentNode), ("document" === r.containment || "window" === r.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === r.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === r.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(r.containment) || (e = t(r.containment)[0], n = t(r.containment).offset(), i = "hidden" !== t(e).css("overflow"), this.containment = [n.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo: function (e, n)
		{
			n || (n = this.position);
			var i = "absolute" === e ? 1 : -1,
				r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				s = /(html|body)/i.test(r[0].tagName);
			return {
				top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : r.scrollTop()) * i,
				left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : r.scrollLeft()) * i
			}
		},
		_generatePosition: function (e)
		{
			var n, i, r = this.options,
				s = e.pageX,
				o = e.pageY,
				a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				l = /(html|body)/i.test(a[0].tagName);
			return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), r.grid && (n = this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1], o = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - r.grid[1] : n + r.grid[1] : n, i = this.originalPageX + Math.round((s - this.originalPageX) / r.grid[0]) * r.grid[0], s = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - r.grid[0] : i + r.grid[0] : i)), {
				top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
				left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
			}
		},
		_rearrange: function (t, e, n, i)
		{
			n ? n[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
			var r = this.counter;
			this._delay(function ()
			{
				r === this.counter && this.refreshPositions(!i)
			})
		},
		_clear: function (t, e)
		{
			this.reverting = !1;
			var n, i = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0])
			{
				for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			}
			else this.currentItem.show();
			for (this.fromOutside && !e && i.push(function (t)
			{
				this._trigger("receive", t, this._uiHash(this.fromOutside))
			}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || i.push(function (t)
			{
				this._trigger("update", t, this._uiHash())
			}), this !== this.currentContainer && (e || (i.push(function (t)
			{
				this._trigger("remove", t, this._uiHash())
			}), i.push(function (t)
			{
				return function (e)
				{
					t._trigger("receive", e, this._uiHash(this))
				}
			}.call(this, this.currentContainer)), i.push(function (t)
			{
				return function (e)
				{
					t._trigger("update", e, this._uiHash(this))
				}
			}.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || i.push(function (t)
			{
				return function (e)
				{
					t._trigger("deactivate", e, this._uiHash(this))
				}
			}.call(this, this.containers[n])), this.containers[n].containerCache.over && (i.push(function (t)
			{
				return function (e)
				{
					t._trigger("out", e, this._uiHash(this))
				}
			}.call(this, this.containers[n])), this.containers[n].containerCache.over = 0);
			if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval)
			{
				if (!e)
				{
					for (this._trigger("beforeStop", t, this._uiHash()), n = 0; i.length > n; n++) i[n].call(this, t);
					this._trigger("stop", t, this._uiHash())
				}
				return this.fromOutside = !1, !1
			}
			if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e)
			{
				for (n = 0; i.length > n; n++) i[n].call(this, t);
				this._trigger("stop", t, this._uiHash())
			}
			return this.fromOutside = !1, !0
		},
		_trigger: function ()
		{
			t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash: function (e)
		{
			var n = e || this;
			return {
				helper: n.helper,
				placeholder: n.placeholder || t([]),
				position: n.position,
				originalPosition: n.originalPosition,
				offset: n.positionAbs,
				item: n.currentItem,
				sender: e ? e.element : null
			}
		}
	})
}(jQuery), function (t, e)
{
	function n()
	{
		this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] =
		{
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		}, this._defaults =
		{
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {
			},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		}, t.extend(this._defaults, this.regional[""]), this.dpDiv = i(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
	}
	function i(e)
	{
		var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return e.delegate(n, "mouseout", function ()
		{
			t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
		}).delegate(n, "mouseover", function ()
		{
			t.datepicker._isDisabledDatepicker(s.inline ? e.parent()[0] : s.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
		})
	}
	function r(e, n)
	{
		t.extend(e, n);
		for (var i in n) null == n[i] && (e[i] = n[i]);
		return e
	}
	t.extend(t.ui, {
		datepicker: {
			version: "1.10.3"
		}

	});
	var s, o = "datepicker";
	t.extend(n.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		_widgetDatepicker: function ()
		{
			return this.dpDiv
		},
		setDefaults: function (t)
		{
			return r(this._defaults, t || {
			}), this
		},
		_attachDatepicker: function (e, n)
		{
			var i, r, s;
			i = e.nodeName.toLowerCase(), r = "div" === i || "span" === i, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), s = this._newInst(t(e), r), s.settings = t.extend(
			{
			}, n || {
			}), "input" === i ? this._connectDatepicker(e, s) : r && this._inlineDatepicker(e, s)
		},
		_newInst: function (e, n)
		{
			var r = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
			return {
				id: r,
				input: e,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: n,
				dpDiv: n ? i(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
			}
		},
		_connectDatepicker: function (e, n)
		{
			var i = t(e);
			n.append = t([]), n.trigger = t([]), i.hasClass(this.markerClassName) || (this._attachments(i, n), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(n), t.data(e, o, n), n.settings.disabled && this._disableDatepicker(e))
		},
		_attachments: function (e, n)
		{
			var i, r, s, o = this._get(n, "appendText"),
				a = this._get(n, "isRTL");
			n.append && n.append.remove(), o && (n.append = t("<span class='" + this._appendClass + "'>" + o + "</span>"), e[a ? "before" : "after"](n.append)), e.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), i = this._get(n, "showOn"), ("focus" === i || "both" === i) && e.focus(this._showDatepicker), ("button" === i || "both" === i) && (r = this._get(n, "buttonText"), s = this._get(n, "buttonImage"), n.trigger = t(this._get(n, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr(
			{
				src: s,
				alt: r,
				title: r
			}) : t("<button type='button'></button>").addClass(this._triggerClass).html(s ? t("<img/>").attr(
			{
				src: s,
				alt: r,
				title: r
			}) : r)), e[a ? "before" : "after"](n.trigger), n.trigger.click(function ()
			{
				return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
			}))
		},
		_autoSize: function (t)
		{
			if (this._get(t, "autoSize") && !t.inline)
			{
				var e, n, i, r, s = new Date(2009, 11, 20),
					o = this._get(t, "dateFormat");
				o.match(/[DM]/) && (e = function (t)
				{
					for (n = 0, i = 0, r = 0; t.length > r; r++) t[r].length > n && (n = t[r].length, i = r);
					return i
				}, s.setMonth(e(this._get(t, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(e(this._get(t, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), t.input.attr("size", this._formatDate(t, s).length)
			}
		},
		_inlineDatepicker: function (e, n)
		{
			var i = t(e);
			i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(n.dpDiv), t.data(e, o, n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(e), n.dpDiv.css("display", "block"))
		},
		_dialogDatepicker: function (e, n, i, s, a)
		{
			var l, c, u, h, d, p = this._dialogInst;
			return p || (this.uuid += 1, l = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + l + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings =
			{
			}, t.data(this._dialogInput[0], o, p)), r(p.settings, s || {
			}), n = n && n.constructor === Date ? this._formatDate(p, n) : n, this._dialogInput.val(n), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (c = document.documentElement.clientWidth, u = document.documentElement.clientHeight, h = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + h, u / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], o, p), this
		},
		_destroyDatepicker: function (e)
		{
			var n, i = t(e),
				r = t.data(e, o);
			i.hasClass(this.markerClassName) && (n = e.nodeName.toLowerCase(), t.removeData(e, o), "input" === n ? (r.append.remove(), r.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === n || "span" === n) && i.removeClass(this.markerClassName).empty())
		},
		_enableDatepicker: function (e)
		{
			var n, i, r = t(e),
				s = t.data(e, o);
			r.hasClass(this.markerClassName) && (n = e.nodeName.toLowerCase(), "input" === n ? (e.disabled = !1, s.trigger.filter("button").each(function ()
			{
				this.disabled = !1
			}).end().filter("img").css(
			{
				opacity: "1.0",
				cursor: ""
			})) : ("div" === n || "span" === n) && (i = r.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t)
			{
				return t === e ? null : t
			}))
		},
		_disableDatepicker: function (e)
		{
			var n, i, r = t(e),
				s = t.data(e, o);
			r.hasClass(this.markerClassName) && (n = e.nodeName.toLowerCase(), "input" === n ? (e.disabled = !0, s.trigger.filter("button").each(function ()
			{
				this.disabled = !0
			}).end().filter("img").css(
			{
				opacity: "0.5",
				cursor: "default"
			})) : ("div" === n || "span" === n) && (i = r.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t)
			{
				return t === e ? null : t
			}), this._disabledInputs[this._disabledInputs.length] = e)
		},
		_isDisabledDatepicker: function (t)
		{
			if (!t) return !1;
			for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0;
			return !1
		},
		_getInst: function (e)
		{
			try
			{
				return t.data(e, o)
			}
			catch (n)
			{
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function (n, i, s)
		{
			var o, a, l, c, u = this._getInst(n);
			return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend(
			{
			}, t.datepicker._defaults) : u ? "all" === i ? t.extend(
			{
			}, u.settings) : this._get(u, i) : null : (o = i || {
			}, "string" == typeof i && (o =
			{
			}, o[i] = s), u && (this._curInst === u && this._hideDatepicker(), a = this._getDateDatepicker(n, !0), l = this._getMinMaxDate(u, "min"), c = this._getMinMaxDate(u, "max"), r(u.settings, o), null !== l && o.dateFormat !== e && o.minDate === e && (u.settings.minDate = this._formatDate(u, l)), null !== c && o.dateFormat !== e && o.maxDate === e && (u.settings.maxDate = this._formatDate(u, c)), "disabled" in o && (o.disabled ? this._disableDatepicker(n) : this._enableDatepicker(n)), this._attachments(t(n), u), this._autoSize(u), this._setDate(u, a), this._updateAlternate(u), this._updateDatepicker(u)), e)
		},
		_changeDatepicker: function (t, e, n)
		{
			this._optionDatepicker(t, e, n)
		},
		_refreshDatepicker: function (t)
		{
			var e = this._getInst(t);
			e && this._updateDatepicker(e)
		},
		_setDateDatepicker: function (t, e)
		{
			var n = this._getInst(t);
			n && (this._setDate(n, e), this._updateDatepicker(n), this._updateAlternate(n))
		},
		_getDateDatepicker: function (t, e)
		{
			var n = this._getInst(t);
			return n && !n.inline && this._setDateFromField(n, e), n ? this._getDate(n) : null
		},
		_doKeyDown: function (e)
		{
			var n, i, r, s = t.datepicker._getInst(e.target),
				o = !0,
				a = s.dpDiv.is(".ui-datepicker-rtl");
			if (s._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode)
			{
			case 9:
				t.datepicker._hideDatepicker(), o = !1;
				break;
			case 13:
				return r = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", s.dpDiv), r[0] && t.datepicker._selectDay(e.target, s.selectedMonth, s.selectedYear, r[0]), n = t.datepicker._get(s, "onSelect"), n ? (i = t.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [i, s])) : t.datepicker._hideDatepicker(), !1;
			case 27:
				t.datepicker._hideDatepicker();
				break;
			case 33:
				t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(s, "stepBigMonths") : -t.datepicker._get(s, "stepMonths"), "M");
				break;
			case 34:
				t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(s, "stepBigMonths") : +t.datepicker._get(s, "stepMonths"), "M");
				break;
			case 35:
				(e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), o = e.ctrlKey || e.metaKey;
				break;
			case 36:
				(e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), o = e.ctrlKey || e.metaKey;
				break;
			case 37:
				(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), o = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(s, "stepBigMonths") : -t.datepicker._get(s, "stepMonths"), "M");
				break;
			case 38:
				(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), o = e.ctrlKey || e.metaKey;
				break;
			case 39:
				(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), o = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(s, "stepBigMonths") : +t.datepicker._get(s, "stepMonths"), "M");
				break;
			case 40:
				(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), o = e.ctrlKey || e.metaKey;
				break;
			default:
				o = !1
			}
			else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : o = !1;
			o && (e.preventDefault(), e.stopPropagation())
		},
		_doKeyPress: function (n)
		{
			var i, r, s = t.datepicker._getInst(n.target);
			return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), r = String.fromCharCode(null == n.charCode ? n.keyCode : n.charCode), n.ctrlKey || n.metaKey || " " > r || !i || i.indexOf(r) > -1) : e
		},
		_doKeyUp: function (e)
		{
			var n, i = t.datepicker._getInst(e.target);
			if (i.input.val() !== i.lastVal) try
			{
				n = t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)), n && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i))
			}
			catch (r)
			{
			}
			return !0
		},
		_showDatepicker: function (e)
		{
			if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e)
			{
				var n, i, s, o, a, l, c;
				n = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), i = t.datepicker._get(n, "beforeShow"), s = i ? i.apply(e, [e, n]) : {
				}, s !== !1 && (r(n.settings, s), n.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), o = !1, t(e).parents().each(function ()
				{
					return o |= "fixed" === t(this).css("position"), !o
				}), a =
				{
					left: t.datepicker._pos[0],
					top: t.datepicker._pos[1]
				}, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css(
				{
					position: "absolute",
					display: "block",
					top: "-1000px"
				}), t.datepicker._updateDatepicker(n), a = t.datepicker._checkOffset(n, a, o), n.dpDiv.css(
				{
					position: t.datepicker._inDialog && t.blockUI ? "static" : o ? "fixed" : "absolute",
					display: "none",
					left: a.left + "px",
					top: a.top + "px"
				}), n.inline || (l = t.datepicker._get(n, "showAnim"), c = t.datepicker._get(n, "duration"), n.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? n.dpDiv.show(l, t.datepicker._get(n, "showOptions"), c) : n.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(n) && n.input.focus(), t.datepicker._curInst = n))
			}
		},
		_updateDatepicker: function (e)
		{
			this.maxRows = 4, s = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
			var n, i = this._getNumberOfMonths(e),
				r = i[1],
				o = 17;
			e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), r > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + r).css("width", o * r + "em"), e.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (n = e.yearshtml, setTimeout(function ()
			{
				n === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), n = e.yearshtml = null
			}, 0))
		},
		_shouldFocusInput: function (t)
		{
			return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
		},
		_checkOffset: function (e, n, i)
		{
			var r = e.dpDiv.outerWidth(),
				s = e.dpDiv.outerHeight(),
				o = e.input ? e.input.outerWidth() : 0,
				a = e.input ? e.input.outerHeight() : 0,
				l = document.documentElement.clientWidth + (i ? 0 : t(document).scrollLeft()),
				c = document.documentElement.clientHeight + (i ? 0 : t(document).scrollTop());
			return n.left -= this._get(e, "isRTL") ? r - o : 0, n.left -= i && n.left === e.input.offset().left ? t(document).scrollLeft() : 0, n.top -= i && n.top === e.input.offset().top + a ? t(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + r > l && l > r ? Math.abs(n.left + r - l) : 0), n.top -= Math.min(n.top, n.top + s > c && c > s ? Math.abs(s + a) : 0), n
		},
		_findPos: function (e)
		{
			for (var n, i = this._getInst(e), r = this._get(i, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[r ? "previousSibling" : "nextSibling"];
			return n = t(e).offset(), [n.left, n.top]
		},
		_hideDatepicker: function (e)
		{
			var n, i, r, s, a = this._curInst;
			!a || e && a !== t.data(e, o) || this._datepickerShowing && (n = this._get(a, "showAnim"), i = this._get(a, "duration"), r = function ()
			{
				t.datepicker._tidyDialog(a)
			}, t.effects && (t.effects.effect[n] || t.effects[n]) ? a.dpDiv.hide(n, t.datepicker._get(a, "showOptions"), i, r) : a.dpDiv["slideDown" === n ? "slideUp" : "fadeIn" === n ? "fadeOut" : "hide"](n ? i : null, r), n || r(), this._datepickerShowing = !1, s = this._get(a, "onClose"), s && s.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css(
			{
				position: "absolute",
				left: "0",
				top: "-100px"
			}), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
		},
		_tidyDialog: function (t)
		{
			t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function (e)
		{
			if (t.datepicker._curInst)
			{
				var n = t(e.target),
					i = t.datepicker._getInst(n[0]);
				(n[0].id !== t.datepicker._mainDivId && 0 === n.parents("#" + t.datepicker._mainDivId).length && !n.hasClass(t.datepicker.markerClassName) && !n.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || n.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== i) && t.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function (e, n, i)
		{
			var r = t(e),
				s = this._getInst(r[0]);
			this._isDisabledDatepicker(r[0]) || (this._adjustInstDate(s, n + ("M" === i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
		},
		_gotoToday: function (e)
		{
			var n, i = t(e),
				r = this._getInst(i[0]);
			this._get(r, "gotoCurrent") && r.currentDay ? (r.selectedDay = r.currentDay, r.drawMonth = r.selectedMonth = r.currentMonth, r.drawYear = r.selectedYear = r.currentYear) : (n = new Date, r.selectedDay = n.getDate(), r.drawMonth = r.selectedMonth = n.getMonth(), r.drawYear = r.selectedYear = n.getFullYear()), this._notifyChange(r), this._adjustDate(i)
		},
		_selectMonthYear: function (e, n, i)
		{
			var r = t(e),
				s = this._getInst(r[0]);
			s["selected" + ("M" === i ? "Month" : "Year")] = s["draw" + ("M" === i ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(r)
		},
		_selectDay: function (e, n, i, r)
		{
			var s, o = t(e);
			t(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (s = this._getInst(o[0]), s.selectedDay = s.currentDay = t("a", r).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = i, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
		},
		_clearDate: function (e)
		{
			var n = t(e);
			this._selectDate(n, "")
		},
		_selectDate: function (e, n)
		{
			var i, r = t(e),
				s = this._getInst(r[0]);
			n = null != n ? n : this._formatDate(s), s.input && s.input.val(n), this._updateAlternate(s), i = this._get(s, "onSelect"), i ? i.apply(s.input ? s.input[0] : null, [n, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
		},
		_updateAlternate: function (e)
		{
			var n, i, r, s = this._get(e, "altField");
			s && (n = this._get(e, "altFormat") || this._get(e, "dateFormat"), i = this._getDate(e), r = this.formatDate(n, i, this._getFormatConfig(e)), t(s).each(function ()
			{
				t(this).val(r)
			}))
		},
		noWeekends: function (t)
		{
			var e = t.getDay();
			return [e > 0 && 6 > e, ""]
		},
		iso8601Week: function (t)
		{
			var e, n = new Date(t.getTime());
			return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), e = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((e - n) / 864e5) / 7) + 1
		},
		parseDate: function (n, i, r)
		{
			if (null == n || null == i) throw "Invalid arguments";
			if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
			var s, o, a, l, c = 0,
				u = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
				h = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10),
				d = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
				p = (r ? r.dayNames : null) || this._defaults.dayNames,
				f = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
				g = (r ? r.monthNames : null) || this._defaults.monthNames,
				m = -1,
				v = -1,
				y = -1,
				b = -1,
				_ = !1,
				w = function (t)
				{
					var e = n.length > s + 1 && n.charAt(s + 1) === t;
					return e && s++, e
				},
				x = function (t)
				{
					var e = w(t),
						n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
						r = RegExp("^\\d{1," + n + "}"),
						s = i.substring(c).match(r);
					if (!s) throw "Missing number at position " + c;
					return c += s[0].length, parseInt(s[0], 10)
				},
				k = function (n, r, s)
				{
					var o = -1,
						a = t.map(w(n) ? s : r, function (t, e)
						{
							return [[e, t]]
						}).sort(function (t, e)
						{
							return -(t[1].length - e[1].length)
						});
					if (t.each(a, function (t, n)
					{
						var r = n[1];
						return i.substr(c, r.length).toLowerCase() === r.toLowerCase() ? (o = n[0], c += r.length, !1) : e
					}), -1 !== o) return o + 1;
					throw "Unknown name at position " + c
				},
				D = function ()
				{
					if (i.charAt(c) !== n.charAt(s)) throw "Unexpected literal at position " + c;
					c++
				};
			for (s = 0; n.length > s; s++) if (_)"'" !== n.charAt(s) || w("'") ? D() : _ = !1;
			else switch (n.charAt(s))
			{
			case "d":
				y = x("d");
				break;
			case "D":
				k("D", d, p);
				break;
			case "o":
				b = x("o");
				break;
			case "m":
				v = x("m");
				break;
			case "M":
				v = k("M", f, g);
				break;
			case "y":
				m = x("y");
				break;
			case "@":
				l = new Date(x("@")), m = l.getFullYear(), v = l.getMonth() + 1, y = l.getDate();
				break;
			case "!":
				l = new Date((x("!") - this._ticksTo1970) / 1e4), m = l.getFullYear(), v = l.getMonth() + 1, y = l.getDate();
				break;
			case "'":
				w("'") ? D() : _ = !0;
				break;
			default:
				D()
			}
			if (i.length > c && (a = i.substr(c), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
			if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (h >= m ? 0 : -100)), b > -1) for (v = 1, y = b; o = this._getDaysInMonth(m, v - 1), !(o >= y);) v++, y -= o;
			if (l = this._daylightSavingAdjust(new Date(m, v - 1, y)), l.getFullYear() !== m || l.getMonth() + 1 !== v || l.getDate() !== y) throw "Invalid date";
			return l
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
		formatDate: function (t, e, n)
		{
			if (!e) return "";
			var i, r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
				s = (n ? n.dayNames : null) || this._defaults.dayNames,
				o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
				a = (n ? n.monthNames : null) || this._defaults.monthNames,
				l = function (e)
				{
					var n = t.length > i + 1 && t.charAt(i + 1) === e;
					return n && i++, n
				},
				c = function (t, e, n)
				{
					var i = "" + e;
					if (l(t)) for (; n > i.length;) i = "0" + i;
					return i
				},
				u = function (t, e, n, i)
				{
					return l(t) ? i[e] : n[e]
				},
				h = "",
				d = !1;
			if (e) for (i = 0; t.length > i; i++) if (d)"'" !== t.charAt(i) || l("'") ? h += t.charAt(i) : d = !1;
			else switch (t.charAt(i))
			{
			case "d":
				h += c("d", e.getDate(), 2);
				break;
			case "D":
				h += u("D", e.getDay(), r, s);
				break;
			case "o":
				h += c("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
				break;
			case "m":
				h += c("m", e.getMonth() + 1, 2);
				break;
			case "M":
				h += u("M", e.getMonth(), o, a);
				break;
			case "y":
				h += l("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
				break;
			case "@":
				h += e.getTime();
				break;
			case "!":
				h += 1e4 * e.getTime() + this._ticksTo1970;
				break;
			case "'":
				l("'") ? h += "'" : d = !0;
				break;
			default:
				h += t.charAt(i)
			}
			return h
		},
		_possibleChars: function (t)
		{
			var e, n = "",
				i = !1,
				r = function (n)
				{
					var i = t.length > e + 1 && t.charAt(e + 1) === n;
					return i && e++, i
				};
			for (e = 0; t.length > e; e++) if (i)"'" !== t.charAt(e) || r("'") ? n += t.charAt(e) : i = !1;
			else switch (t.charAt(e))
			{
			case "d":
			case "m":
			case "y":
			case "@":
				n += "0123456789";
				break;
			case "D":
			case "M":
				return null;
			case "'":
				r("'") ? n += "'" : i = !0;
				break;
			default:
				n += t.charAt(e)
			}
			return n
		},
		_get: function (t, n)
		{
			return t.settings[n] !== e ? t.settings[n] : this._defaults[n]
		},
		_setDateFromField: function (t, e)
		{
			if (t.input.val() !== t.lastVal)
			{
				var n = this._get(t, "dateFormat"),
					i = t.lastVal = t.input ? t.input.val() : null,
					r = this._getDefaultDate(t),
					s = r,
					o = this._getFormatConfig(t);
				try
				{
					s = this.parseDate(n, i, o) || r
				}
				catch (a)
				{
					i = e ? "" : i
				}
				t.selectedDay = s.getDate(), t.drawMonth = t.selectedMonth = s.getMonth(), t.drawYear = t.selectedYear = s.getFullYear(), t.currentDay = i ? s.getDate() : 0, t.currentMonth = i ? s.getMonth() : 0, t.currentYear = i ? s.getFullYear() : 0, this._adjustInstDate(t)
			}
		},
		_getDefaultDate: function (t)
		{
			return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
		},
		_determineDate: function (e, n, i)
		{
			var r = function (t)
			{
				var e = new Date;
				return e.setDate(e.getDate() + t), e
			},
				s = function (n)
				{
					try
					{
						return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), n, t.datepicker._getFormatConfig(e))
					}
					catch (i)
					{
					}
					for (var r = (n.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = r.getFullYear(), o = r.getMonth(), a = r.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = l.exec(n); c;)
					{
						switch (c[2] || "d")
						{
						case "d":
						case "D":
							a += parseInt(c[1], 10);
							break;
						case "w":
						case "W":
							a += 7 * parseInt(c[1], 10);
							break;
						case "m":
						case "M":
							o += parseInt(c[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o));
							break;
						case "y":
						case "Y":
							s += parseInt(c[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o))
						}
						c = l.exec(n)
					}
					return new Date(s, o, a)
				},
				o = null == n || "" === n ? i : "string" == typeof n ? s(n) : "number" == typeof n ? isNaN(n) ? i : r(n) : new Date(n.getTime());
			return o = o && "Invalid Date" == "" + o ? i : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
		},
		_daylightSavingAdjust: function (t)
		{
			return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
		},
		_setDate: function (t, e, n)
		{
			var i = !e,
				r = t.selectedMonth,
				s = t.selectedYear,
				o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
			t.selectedDay = t.currentDay = o.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(), t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(), r === t.selectedMonth && s === t.selectedYear || n || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(i ? "" : this._formatDate(t))
		},
		_getDate: function (t)
		{
			var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return e
		},
		_attachHandlers: function (e)
		{
			var n = this._get(e, "stepMonths"),
				i = "#" + e.id.replace(/\\\\/g, "\\");
			e.dpDiv.find("[data-handler]").map(function ()
			{
				var e =
				{
					prev: function ()
					{
						t.datepicker._adjustDate(i, -n, "M")
					},
					next: function ()
					{
						t.datepicker._adjustDate(i, +n, "M")
					},
					hide: function ()
					{
						t.datepicker._hideDatepicker()
					},
					today: function ()
					{
						t.datepicker._gotoToday(i)
					},
					selectDay: function ()
					{
						return t.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
					},
					selectMonth: function ()
					{
						return t.datepicker._selectMonthYear(i, this, "M"), !1
					},
					selectYear: function ()
					{
						return t.datepicker._selectMonthYear(i, this, "Y"), !1
					}
				};
				t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function (t)
		{
			var e, n, i, r, s, o, a, l, c, u, h, d, p, f, g, m, v, y, b, _, w, x, k, D, C, T, N, S, M, I, E, A, P, j, H, F, L, $, W, O = new Date,
				R = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
				q = this._get(t, "isRTL"),
				Y = this._get(t, "showButtonPanel"),
				B = this._get(t, "hideIfNoPrevNext"),
				z = this._get(t, "navigationAsDateFormat"),
				K = this._getNumberOfMonths(t),
				X = this._get(t, "showCurrentAtPos"),
				U = this._get(t, "stepMonths"),
				V = 1 !== K[0] || 1 !== K[1],
				Q = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
				J = this._getMinMaxDate(t, "min"),
				G = this._getMinMaxDate(t, "max"),
				Z = t.drawMonth - X,
				te = t.drawYear;
			if (0 > Z && (Z += 12, te--), G) for (e = this._daylightSavingAdjust(new Date(G.getFullYear(), G.getMonth() - K[0] * K[1] + 1, G.getDate())), e = J && J > e ? J : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
			for (t.drawMonth = Z, t.drawYear = te, n = this._get(t, "prevText"), n = z ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z - U, 1)), this._getFormatConfig(t)) : n, i = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + n + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + n + "</span></a>", r = this._get(t, "nextText"), r = z ? this.formatDate(r, this._daylightSavingAdjust(new Date(te, Z + U, 1)), this._getFormatConfig(t)) : r, s = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + r + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + r + "</span></a>", o = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? Q : R, o = z ? this.formatDate(o, a, this._getFormatConfig(t)) : o, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", c = Y ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (q ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (q ? "" : l) + "</div>" : "", u = parseInt(this._get(t, "firstDay"), 10), u = isNaN(u) ? 0 : u, h = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), _ = "", x = 0; K[0] > x; x++)
			{
				for (k = "", this.maxRows = 4, D = 0; K[1] > D; D++)
				{
					if (C = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), T = " ui-corner-all", N = "", V)
					{
						if (N += "<div class='ui-datepicker-group", K[1] > 1) switch (D)
						{
						case 0:
							N += " ui-datepicker-group-first", T = " ui-corner-" + (q ? "right" : "left");
							break;
						case K[1] - 1:
							N += " ui-datepicker-group-last", T = " ui-corner-" + (q ? "left" : "right");
							break;
						default:
							N += " ui-datepicker-group-middle", T = ""
						}
						N += "'>"
					}
					for (N += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? q ? s : i : "") + (/all|right/.test(T) && 0 === x ? q ? i : s : "") + this._generateMonthYearHeader(t, Z, te, J, G, x > 0 || D > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", S = h ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M = (w + u) % 7, S += "<th" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>";
					for (N += S + "</tr></thead><tbody>", I = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)), E = (this._getFirstDayOfMonth(te, Z) - u + 7) % 7, A = Math.ceil((E + I) / 7), P = V ? this.maxRows > A ? this.maxRows : A : A, this.maxRows = P, j = this._daylightSavingAdjust(new Date(te, Z, 1 - E)), H = 0; P > H; H++)
					{
						for (N += "<tr>", F = h ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(j) + "</td>" : "", w = 0; 7 > w; w++) L = m ? m.apply(t.input ? t.input[0] : null, [j]) : [!0, ""], $ = j.getMonth() !== Z, W = $ && !y || !L[0] || J && J > j || G && j > G, F += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + ($ ? " ui-datepicker-other-month" : "") + (j.getTime() === C.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === j.getTime() && b.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + ($ && !v ? "" : " " + L[1] + (j.getTime() === Q.getTime() ? " " + this._currentClass : "") + (j.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + ($ && !v || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + j.getMonth() + "' data-year='" + j.getFullYear() + "'") + ">" + ($ && !v ? " " : W ? "<span class='ui-state-default'>" + j.getDate() + "</span>" : "<a class='ui-state-default" + (j.getTime() === R.getTime() ? " ui-state-highlight" : "") + (j.getTime() === Q.getTime() ? " ui-state-active" : "") + ($ ? " ui-priority-secondary" : "") + "' href='#'>" + j.getDate() + "</a>") + "</td>", j.setDate(j.getDate() + 1), j = this._daylightSavingAdjust(j);
						N += F + "</tr>"
					}
					Z++, Z > 11 && (Z = 0, te++), N += "</tbody></table>" + (V ? "</div>" + (K[0] > 0 && D === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += N
				}
				_ += k
			}
			return _ += c, t._keyEvent = !1, _
		},
		_generateMonthYearHeader: function (t, e, n, i, r, s, o, a)
		{
			var l, c, u, h, d, p, f, g, m = this._get(t, "changeMonth"),
				v = this._get(t, "changeYear"),
				y = this._get(t, "showMonthAfterYear"),
				b = "<div class='ui-datepicker-title'>",
				_ = "";
			if (s || !m) _ += "<span class='ui-datepicker-month'>" + o[e] + "</span>";
			else
			{
				for (l = i && i.getFullYear() === n, c = r && r.getFullYear() === n, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!l || u >= i.getMonth()) && (!c || r.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + a[u] + "</option>");
				_ += "</select>"
			}
			if (y || (b += _ + (!s && m && v ? "" : " ")), !t.yearshtml) if (t.yearshtml = "", s || !v) b += "<span class='ui-datepicker-year'>" + n + "</span>";
			else
			{
				for (h = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t)
				{
					var e = t.match(/c[+\-].*/) ? n + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
					return isNaN(e) ? d : e
				}, f = p(h[0]), g = Math.max(f, p(h[1] || "")), f = i ? Math.max(f, i.getFullYear()) : f, g = r ? Math.min(g, r.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === n ? " selected='selected'" : "") + ">" + f + "</option>";
				t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
			}
			return b += this._get(t, "yearSuffix"), y && (b += (!s && m && v ? "" : " ") + _), b += "</div>"
		},
		_adjustInstDate: function (t, e, n)
		{
			var i = t.drawYear + ("Y" === n ? e : 0),
				r = t.drawMonth + ("M" === n ? e : 0),
				s = Math.min(t.selectedDay, this._getDaysInMonth(i, r)) + ("D" === n ? e : 0),
				o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(i, r, s)));
			t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), ("M" === n || "Y" === n) && this._notifyChange(t)
		},
		_restrictMinMax: function (t, e)
		{
			var n = this._getMinMaxDate(t, "min"),
				i = this._getMinMaxDate(t, "max"),
				r = n && n > e ? n : e;
			return i && r > i ? i : r
		},
		_notifyChange: function (t)
		{
			var e = this._get(t, "onChangeMonthYear");
			e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
		},
		_getNumberOfMonths: function (t)
		{
			var e = this._get(t, "numberOfMonths");
			return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
		},
		_getMinMaxDate: function (t, e)
		{
			return this._determineDate(t, this._get(t, e + "Date"), null)
		},
		_getDaysInMonth: function (t, e)
		{
			return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
		},
		_getFirstDayOfMonth: function (t, e)
		{
			return new Date(t, e, 1).getDay()
		},
		_canAdjustMonth: function (t, e, n, i)
		{
			var r = this._getNumberOfMonths(t),
				s = this._daylightSavingAdjust(new Date(n, i + (0 > e ? e : r[0] * r[1]), 1));
			return 0 > e && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(t, s)
		},
		_isInRange: function (t, e)
		{
			var n, i, r = this._getMinMaxDate(t, "min"),
				s = this._getMinMaxDate(t, "max"),
				o = null,
				a = null,
				l = this._get(t, "yearRange");
			return l && (n = l.split(":"), i = (new Date).getFullYear(), o = parseInt(n[0], 10), a = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += i), n[1].match(/[+\-].*/) && (a += i)), (!r || e.getTime() >= r.getTime()) && (!s || e.getTime() <= s.getTime()) && (!o || e.getFullYear() >= o) && (!a || a >= e.getFullYear())
		},
		_getFormatConfig: function (t)
		{
			var e = this._get(t, "shortYearCutoff");
			return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
				shortYearCutoff: e,
				dayNamesShort: this._get(t, "dayNamesShort"),
				dayNames: this._get(t, "dayNames"),
				monthNamesShort: this._get(t, "monthNamesShort"),
				monthNames: this._get(t, "monthNames")
			}
		},
		_formatDate: function (t, e, n, i)
		{
			e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
			var r = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(i, n, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return this.formatDate(this._get(t, "dateFormat"), r, this._getFormatConfig(t))
		}
	}), t.fn.datepicker = function (e)
	{
		if (!this.length) return this;
		t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
		var n = Array.prototype.slice.call(arguments, 1);
		return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(n)) : this.each(function ()
		{
			"string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(n)) : t.datepicker._attachDatepicker(this, e)
		}) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(n))
	}, t.datepicker = new n, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.3"
}(jQuery), $(document).ready(function ()
{
}), function (t)
{
	function e(t)
	{
		return "object" == typeof t ? t : {
			top: t,
			left: t
		}
	}
	var n = t.scrollTo = function (e, n, i)
	{
		t(window).scrollTo(e, n, i)
	};
	n.defaults =
	{
		axis: "xy",
		duration: parseFloat(t.fn.jquery) >= 1.3 ? 0 : 1,
		limit: !0
	}, n.window = function ()
	{
		return t(window)._scrollable()
	}, t.fn._scrollable = function ()
	{
		return this.map(function ()
		{
			var e = this,
				n = !e.nodeName || -1 != t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
			if (!n) return e;
			var i = (e.contentWindow || e).document || e.ownerDocument || e;
			return /webkit/i.test(navigator.userAgent) || "BackCompat" == i.compatMode ? i.body : i.documentElement
		})
	}, t.fn.scrollTo = function (i, r, s)
	{
		return "object" == typeof r && (s = r, r = 0), "function" == typeof s && (s =
		{
			onAfter: s
		}), "max" == i && (i = 9e9), s = t.extend(
		{
		}, n.defaults, s), r = r || s.duration, s.queue = s.queue && s.axis.length > 1, s.queue && (r /= 2), s.offset = e(s.offset), s.over = e(s.over), this._scrollable().each(function ()
		{
			function o(t)
			{
				c.animate(h, r, s.easing, t &&
				function ()
				{
					t.call(this, i, s)
				})
			}
			if (null != i)
			{
				var a, l = this,
					c = t(l),
					u = i,
					h =
					{
					},
					d = c.is("html,body");
				switch (typeof u)
				{
				case "number":
				case "string":
					if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(u))
					{
						u = e(u);
						break
					}
					if (u = t(u, this), !u.length) return;
				case "object":
					(u.is || u.style) && (a = (u = t(u)).offset())
				}
				t.each(s.axis.split(""), function (t, e)
				{
					var i = "x" == e ? "Left" : "Top",
						r = i.toLowerCase(),
						p = "scroll" + i,
						f = l[p],
						g = n.max(l, e);
					if (a) h[p] = a[r] + (d ? 0 : f - c.offset()[r]), s.margin && (h[p] -= parseInt(u.css("margin" + i)) || 0, h[p] -= parseInt(u.css("border" + i + "Width")) || 0), h[p] += s.offset[r] || 0, s.over[r] && (h[p] += u["x" == e ? "width" : "height"]() * s.over[r]);
					else
					{
						var m = u[r];
						h[p] = m.slice && "%" == m.slice(-1) ? parseFloat(m) / 100 * g : m
					}
					s.limit && /^\d+$/.test(h[p]) && (h[p] = h[p] <= 0 ? 0 : Math.min(h[p], g)), !t && s.queue && (f != h[p] && o(s.onAfterFirst), delete h[p])
				}), o(s.onAfter)
			}
		}).end()
	}, n.max = function (e, n)
	{
		var i = "x" == n ? "Width" : "Height",
			r = "scroll" + i;
		if (!t(e).is("html,body")) return e[r] - t(e)[i.toLowerCase()]();
		var s = "client" + i,
			o = e.ownerDocument.documentElement,
			a = e.ownerDocument.body;
		return Math.max(o[r], a[r]) - Math.min(o[s], a[s])
	}
}(jQuery), function (t)
{
	function e(e, n, i)
	{
		var r = n.hash.slice(1),
			s = document.getElementById(r) || document.getElementsByName(r)[0];
		if (s)
		{
			e && e.preventDefault();
			var o = t(i.target);
			if (!(i.lock && o.is(":animated") || i.onBefore && i.onBefore.call(i, e, s, o) === !1))
			{
				if (i.stop && o.stop(!0), i.hash)
				{
					var a = s.id == r ? "id" : "name",
						l = t("<a> </a>").attr(a, r).css(
						{
							position: "absolute",
							top: t(window).scrollTop(),
							left: t(window).scrollLeft()
						});
					s[a] = "", t("body").prepend(l), location = n.hash, l.remove(), s[a] = r
				}
				o.scrollTo(s, i).trigger("notify.serialScroll", [s])
			}
		}
	}
	var n = location.href.replace(/#.*/, ""),
		i = t.localScroll = function (e)
		{
			t("body").localScroll(e)
		};
	i.defaults =
	{
		duration: 1e3,
		axis: "y",
		event: "click",
		stop: !0,
		target: window,
		reset: !0
	}, i.hash = function (n)
	{
		if (location.hash)
		{
			if (n = t.extend(
			{
			}, i.defaults, n), n.hash = !1, n.reset)
			{
				var r = n.duration;
				delete n.duration, t(n.target).scrollTo(0, n), n.duration = r
			}
			e(0, location, n)
		}
	}, t.fn.localScroll = function (r)
	{
		function s()
		{
			return !(!this.href || !this.hash || this.href.replace(this.hash, "") != n || r.filter && !t(this).is(r.filter))
		}
		return r = t.extend(
		{
		}, i.defaults, r), r.lazy ? this.bind(r.event, function (n)
		{
			var i = t([n.target, n.target.parentNode]).filter(s)[0];
			i && e(n, i, r)
		}) : this.find("a,area").filter(s).bind(r.event, function (t)
		{
			e(t, this, r)
		}).end().end()
	}
}(jQuery), $(document).ready(function ()
{
	function t()
	{
		if (!o && !ie7)
		{
			var t = $(window).scrollTop(),
				e = $(window).height();
			$.each(c, function (n, i)
			{
				$(u, i);
				var r = $(i).offset().top,
					s = $(i).height(),
					o = r + s;
				if (r > t) $(i).removeClass("active-section").removeClass("below-section").removeClass("mid-section").addClass("above-section");
				else if (t >= r && o > t)
				{
					var a = $(i).attr("id"),
						l = a.replace("col", "bg");
					t + e >= o ? ($(i).removeClass("above-section").removeClass("below-section").removeClass("active-section").addClass("mid-section"), 1 == h && $("body").addClass(l), $("body").addClass(l + "-mid")) : ($(i).removeClass("above-section").removeClass("mid-section").removeClass("below-section").addClass("active-section"), $("body").attr("class"), $("body").hasClass(l) || ($("body").attr("class", ""), $("body").addClass(l)))
				}
				else $(i).removeClass("active-section").removeClass("mid-section").removeClass("above-section").addClass("below-section")
			}), h = !1
		}
	}
	function e(e)
	{
		1 == e ? l = setInterval(t, 50) : clearInterval(l)
	}
	function n()
	{
		var t = $(window).height(),
			e = .8 * t,
			n = t / 2 - e / 2,
			r = n + .011 * e,
			s = n + .1 * e;
		$(".day-header-wrap").css(
		{
			"font-size": e + "px"
		}), $(".content", p).css(
		{
			padding: r + "px 0 " + s + "px"
		}), $("#footer .content", p).css(
		{
			padding: r + "px 0 " + r + "px"
		}), $(".content", p).css(
		{
			"min-height": t - 2 * n + "px"
		}), $(".column", p).css(
		{
			"min-height": t + "px"
		});
		var a = .023 * t;
		16 >= a && (a = 16), $(".column .content").css(
		{
			"font-size": a + "px"
		});
		var l = $("#intro").height(),
			c = .3 * l,
			u = c + .6 * c,
			h = .55 * l - .5 * u;
		105 > h && (h = 105), $(".secondary").css(
		{
			"padding-top": h + "px",
			"font-size": c + "px"
		});
		var f = $(window).width();
		f - 200 < $(window).height() ? $("#main").addClass("narrow") : $("#main").removeClass("narrow");
		var g = $(".content").width() + $(".day-header-wrap").width();
		if (!o && !d && f >= 480) for (i = 0; g + 70 >= f && 5 >= i;)
		{
			var m = .9 * $(".day-header-wrap").css("font-size").replace("px", "");
			$(".day-header-wrap").css(
			{
				"font-size": m + "px"
			}), g = $(".content").width() + $(".day-header-wrap").width(), i += 1
		}
		d = !1
	}
	function r()
	{
		var t = $(window).scrollTop(),
			e = $("#footer").offset().top;
		t >= e && ($("body").removeClass(), $("body").addClass("bg-footer"));
		var n = $(window).height();
		t >= n ? ($("#page-wrap").addClass("below-intro"), $(".below-fold").addClass("on")) : ($("#page-wrap").removeClass("below-intro"), $(".below-fold").removeClass("on"))
	}
/*!
	 * isFontFaceSupported
	 * Copyright (c) Diego Perini
	 * via http://paulirish.com/2009/font-face-feature-detection/
	 * 
	 */
	var s = function ()
	{
		var t, e = document,
			n = e.head || e.getElementsByTagName("head")[0] || docElement,
			i = e.createElement("style"),
			r = e.implementation || {
				hasFeature: function ()
				{
					return !1
				}
			};
		i.type = "text/css", n.insertBefore(i, n.firstChild), t = i.sheet || i.styleSheet;
		var s = r.hasFeature("CSS2", "") ?
		function (e)
		{
			if (!t || !e) return !1;
			var n = !1;
			try
			{
				t.insertRule(e, 0), n = !/unknown/i.test(t.cssRules[0].cssText), t.deleteRule(t.cssRules.length - 1)
			}
			catch (i)
			{
			}
			return n
		} : function (e)
		{
			return t && e ? (t.cssText = e, 0 !== t.cssText.length && !/unknown/i.test(t.cssText) && 0 === t.cssText.replace(/\r+|\n+/g, "").indexOf(e.split(" ")[0])) : !1
		};
		return s('@font-face { font-family: "font"; src: "font.ttf"; }')
	}();
	s || ($("#page-wrap").addClass("no-ff"), $(".play-button").html("Play Video"));
	var o = navigator.userAgent.match(/iPad|iPhone|iPod/i),
		a = window.devicePixelRatio > 1 ? !0 : !1;
	a && $("#page-wrap").addClass("retina"), o && $("#page-wrap").addClass("ios");
	var l, c = $(".section-container"),
		u = ".day-header",
		h = !0,
		d = !0,
		p = $("#main");
	$(window).load(function ()
	{
		function e()
		{
			$("#intro .secondary, #logo-wrap, #enticer-wrap").fadeIn(500)
		}
		function i()
		{
			$("#intro-inner").fadeIn(500, function ()
			{
				e()
			})
		}
		n(), setTimeout(i, 300);
		var s = !0;
		$(".column-inner-wrap").fadeIn(300, function ()
		{
			if (t(), n(), 1 == s)
			{
				if (window.location.hash)
				{
					var e = window.location.hash;
					e = e.replace("_", ""), e = e.replace("#col", "#sub-nav .col"), $(e).trigger("click")
				}
				s = !1
			}
		}), $("#sub-nav a, #logo-small, #logo, #enticer").localScroll(
		{
			offset: {
				top: 1,
				left: 0
			},
			lazy: !0,
			duration: 1e3,
			hash: !0
		}), $(".date-picker").datepicker(
		{
			dateFormat: "yy-mm-dd"
		}), $("#page-wrap").addClass("loaded"), o || ($(window).scroll(function ()
		{
			r(), t()
		}), $(window).resize(function ()
		{
			n(), t()
		}))
	}), o || ($(".event").hover(function ()
	{
		$(this).addClass("hovering")
	}, function ()
	{
		$(this).removeClass("hovering")
	}), $(".play-button").hover(function ()
	{
		s && $(this).html("‹")
	}, function ()
	{
		s && $(this).html("›")
	})), $(".show-details, .event, .expand").click(function (t)
	{
		if ($(t.target).is("a"))
		{
			if (!$(this).hasClass("expand") && !$(this).hasClass("show-details")) return !0;
			t.preventDefault()
		}
		var n = getSelection().toString();
		if (!n)
		{
			var i, r;
			i = $(this).hasClass("event") ? $(this) : $(this).parents(".event");
			var s = $(this).parents(".content"),
				a = $(i).attr("id"); /*window.location.hash="#_"+a,*/
			a = "#" + a, r = ".full-details", $(i).addClass("expanding");
			var l = $(window).scrollTop();
			if ($(i).hasClass("expanded"))
			{
				if ($(".expand", i).html('More Details <span class="symbol">+</span>'), e(!0), $(i).offset().top < l)
				{
					var c = -1 * $(s).css("padding-top").replace("px", "");
					o || $.scrollTo(a, 500, {
						offset: {
							top: c,
							left: 0
						}
					})
				}
				$(i).removeClass("expanded").find(r).slideUp(500, function ()
				{
					e(!1), $(i).removeClass("expanding")
				})
			}
			else
			{
				$(".expand", i).html('Less Details <span class="symbol">-</span>'), e(!0), $(i).offset().top > l || $(i).offset().top > l;
				var c = -1 * $(s).css("padding-top").replace("px", "");
				o || $.scrollTo(a, 500, {
					offset: {
						top: c,
						left: 0
					}
				}), $(i).addClass("expanded").find(r).slideDown(500, function ()
				{
					e(!1), $(i).removeClass("expanding")
				})
			}
			return !1
		}
	}), $(".play-button").click(function (t)
	{
		return t.preventDefault(), $("#video-wrap").fadeIn(700, function ()
		{
			var t = $(window).height(),
				e = .7 * $(window).width(),
				n = .5625 * e,
				i = .45 * (t - n) + "px";
			0 > i && (i = 0), $("#video").css("margin-top", i), $("#video").html('<iframe src="http://player.vimeo.com/video/48161845?autoplay=1" width="' + e + '" height="' + n + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> <p><a href="http://vimeo.com/48161845">Design Week Portland</a> from <a href="http://vimeo.com/designweekportland">Design Week Portland</a> on <a href="http://vimeo.com">Vimeo</a>.</p>')
		}), !1
	}), $("#video-wrap").click(function ()
	{
		$(this).fadeOut(500, function ()
		{
			$("#video").html("")
		})
	}), $(".late-night").click(function ()
	{
		return s && ($("#page-wrap").hasClass("night-mode") ? ($("#page-wrap").removeClass("night-mode"), $(this).html("Party Mode")) : ($("#page-wrap").addClass("night-mode"), $(this).hasClass("switched") || $(".day-header .day-number").each(function ()
		{
			var t = $(this).html(),
				e = '<div class="night-day">' + t + "</div>";
			$(this).append(e)
		}), $(this).html("Day Mode")), $(this).addClass("switched")), !1
	}), $(".final-enter").keypress(function (t)
	{
		13 == t.which && (t.preventDefault(), $("form").submit())
	}), $(".event:last-child").addClass("last")
});