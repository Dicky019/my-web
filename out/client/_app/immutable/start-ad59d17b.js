var Je = Object.defineProperty;
var Ge = (n, e, t) =>
	e in n ? Je(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (n[e] = t);
var ue = (n, e, t) => (Ge(n, typeof e != 'symbol' ? e + '' : e, t), t);
import {
	S as He,
	i as We,
	s as Me,
	a as xe,
	e as V,
	c as Xe,
	b as G,
	g as re,
	t as B,
	d as ae,
	f as z,
	h as K,
	j as Ye,
	o as me,
	k as Qe,
	l as Ze,
	m as et,
	n as de,
	p as C,
	q as tt,
	r as nt,
	u as rt,
	v as W,
	w as ye,
	x as M,
	y as x,
	z as De
} from './chunks/index-7d11cbb7.js';
import {
	g as Te,
	f as Ce,
	s as J,
	a as _e,
	b as at,
	i as st
} from './chunks/singletons-b35baa5a.js';
const ot = (function () {
		const e = document.createElement('link').relList;
		return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
	})(),
	it = function (n, e) {
		return new URL(n, e).href;
	},
	Ne = {},
	ee = function (e, t, o) {
		return !t || t.length === 0
			? e()
			: Promise.all(
					t.map((s) => {
						if (((s = it(s, o)), s in Ne)) return;
						Ne[s] = !0;
						const u = s.endsWith('.css'),
							r = u ? '[rel="stylesheet"]' : '';
						if (document.querySelector(`link[href="${s}"]${r}`)) return;
						const l = document.createElement('link');
						if (
							((l.rel = u ? 'stylesheet' : ot),
							u || ((l.as = 'script'), (l.crossOrigin = '')),
							(l.href = s),
							document.head.appendChild(l),
							u)
						)
							return new Promise((p, h) => {
								l.addEventListener('load', p),
									l.addEventListener('error', () => h(new Error(`Unable to preload CSS for ${s}`)));
							});
					})
			  ).then(() => e());
	};
class te {
	constructor(e, t) {
		ue(this, 'name', 'HttpError');
		ue(this, 'stack');
		(this.status = e), (this.message = t != null ? t : `Error: ${e}`);
	}
	toString() {
		return this.message;
	}
}
class qe {
	constructor(e, t) {
		(this.status = e), (this.location = t);
	}
}
function lt(n, e) {
	return n === '/' || e === 'ignore'
		? n
		: e === 'never'
		? n.endsWith('/')
			? n.slice(0, -1)
			: n
		: e === 'always' && !n.endsWith('/')
		? n + '/'
		: n;
}
function ct(n) {
	for (const e in n)
		n[e] = n[e]
			.replace(/%23/g, '#')
			.replace(/%3[Bb]/g, ';')
			.replace(/%2[Cc]/g, ',')
			.replace(/%2[Ff]/g, '/')
			.replace(/%3[Ff]/g, '?')
			.replace(/%3[Aa]/g, ':')
			.replace(/%40/g, '@')
			.replace(/%26/g, '&')
			.replace(/%3[Dd]/g, '=')
			.replace(/%2[Bb]/g, '+')
			.replace(/%24/g, '$');
	return n;
}
const ft = ['href', 'pathname', 'search', 'searchParams', 'toString', 'toJSON'];
function ut(n, e) {
	const t = new URL(n);
	for (const o of ft) {
		let s = t[o];
		Object.defineProperty(t, o, {
			get() {
				return e(), s;
			},
			enumerable: !0,
			configurable: !0
		});
	}
	return (t[Symbol.for('nodejs.util.inspect.custom')] = (o, s, u) => u(n, s)), dt(t), t;
}
function dt(n) {
	Object.defineProperty(n, 'hash', {
		get() {
			throw new Error(
				'Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead'
			);
		}
	});
}
function ht(n) {
	let e = 5381,
		t = n.length;
	if (typeof n == 'string') for (; t; ) e = (e * 33) ^ n.charCodeAt(--t);
	else for (; t; ) e = (e * 33) ^ n[--t];
	return (e >>> 0).toString(36);
}
const be = window.fetch;
window.fetch = (n, e) => {
	if ((n instanceof Request ? n.method : (e == null ? void 0 : e.method) || 'GET') !== 'GET') {
		const o = new URL(n instanceof Request ? n.url : n.toString(), document.baseURI).href;
		ne.delete(o);
	}
	return be(n, e);
};
const ne = new Map();
function pt(n, e, t) {
	let s = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
		typeof n == 'string' ? n : n.url
	)}]`;
	t && typeof t.body == 'string' && (s += `[data-hash="${ht(t.body)}"]`);
	const u = document.querySelector(s);
	if (u != null && u.textContent) {
		const { body: r, ...l } = JSON.parse(u.textContent),
			p = u.getAttribute('data-ttl');
		return (
			p && ne.set(e, { body: r, init: l, ttl: 1e3 * Number(p) }),
			Promise.resolve(new Response(r, l))
		);
	}
	return be(n, t);
}
function mt(n, e) {
	const t = ne.get(n);
	if (t) {
		if (performance.now() < t.ttl) return new Response(t.body, t.init);
		ne.delete(n);
	}
	return be(n, e);
}
const _t = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;
function gt(n) {
	const e = [],
		t = [];
	let o = !0;
	if (/\]\[/.test(n)) throw new Error(`Invalid route ${n} \u2014 parameters must be separated`);
	if (Ve('[', n) !== Ve(']', n))
		throw new Error(`Invalid route ${n} \u2014 brackets are unbalanced`);
	return {
		pattern:
			n === ''
				? /^\/$/
				: new RegExp(
						`^${n
							.split(/(?:\/|$)/)
							.filter(wt)
							.map((u, r, l) => {
								const p = decodeURIComponent(u),
									h = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(p);
								if (h) return e.push(h[1]), t.push(h[2]), '(?:/(.*))?';
								const b = r === l.length - 1;
								return (
									p &&
									'/' +
										p
											.split(/\[(.+?)\]/)
											.map((S, R) => {
												if (R % 2) {
													const F = _t.exec(S);
													if (!F)
														throw new Error(
															`Invalid param: ${S}. Params and matcher names can only have underscores and alphanumeric characters.`
														);
													const [, O, T, N] = F;
													return e.push(T), t.push(N), O ? '(.*?)' : '([^/]+?)';
												}
												return (
													b && S.includes('.') && (o = !1),
													S.normalize()
														.replace(/%5[Bb]/g, '[')
														.replace(/%5[Dd]/g, ']')
														.replace(/#/g, '%23')
														.replace(/\?/g, '%3F')
														.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
												);
											})
											.join('')
								);
							})
							.join('')}${o ? '/?' : ''}$`
				  ),
		names: e,
		types: t
	};
}
function wt(n) {
	return !/^\([^)]+\)$/.test(n);
}
function yt(n, e, t, o) {
	const s = {};
	for (let u = 0; u < e.length; u += 1) {
		const r = e[u],
			l = t[u],
			p = n[u + 1] || '';
		if (l) {
			const h = o[l];
			if (!h) throw new Error(`Missing "${l}" param matcher`);
			if (!h(p)) return;
		}
		s[r] = p;
	}
	return s;
}
function Ve(n, e) {
	let t = 0;
	for (let o = 0; o < e.length; o += 1) e[o] === n && (t += 1);
	return t;
}
function bt(n, e, t, o) {
	const s = new Set(e);
	return Object.entries(t).map(([l, [p, h, b]]) => {
		const { pattern: S, names: R, types: F } = gt(l),
			O = {
				id: l,
				exec: (T) => {
					const N = S.exec(T);
					if (N) return yt(N, R, F, o);
				},
				errors: [1, ...(b || [])].map((T) => n[T]),
				layouts: [0, ...(h || [])].map(r),
				leaf: u(p)
			};
		return (O.errors.length = O.layouts.length = Math.max(O.errors.length, O.layouts.length)), O;
	});
	function u(l) {
		const p = l < 0;
		return p && (l = ~l), [p, n[l]];
	}
	function r(l) {
		return l === void 0 ? l : [s.has(l), n[l]];
	}
}
function vt(n, e) {
	return new te(n, e);
}
function kt(n) {
	let e, t, o;
	var s = n[0][0];
	function u(r) {
		return { props: { data: r[1], errors: r[3] } };
	}
	return (
		s && (e = new s(u(n))),
		{
			c() {
				e && W(e.$$.fragment), (t = V());
			},
			l(r) {
				e && ye(e.$$.fragment, r), (t = V());
			},
			m(r, l) {
				e && M(e, r, l), G(r, t, l), (o = !0);
			},
			p(r, l) {
				const p = {};
				if ((l & 2 && (p.data = r[1]), l & 8 && (p.errors = r[3]), s !== (s = r[0][0]))) {
					if (e) {
						re();
						const h = e;
						B(h.$$.fragment, 1, 0, () => {
							x(h, 1);
						}),
							ae();
					}
					s
						? ((e = new s(u(r))), W(e.$$.fragment), z(e.$$.fragment, 1), M(e, t.parentNode, t))
						: (e = null);
				} else s && e.$set(p);
			},
			i(r) {
				o || (e && z(e.$$.fragment, r), (o = !0));
			},
			o(r) {
				e && B(e.$$.fragment, r), (o = !1);
			},
			d(r) {
				r && K(t), e && x(e, r);
			}
		}
	);
}
function Et(n) {
	let e, t, o;
	var s = n[0][0];
	function u(r) {
		return { props: { data: r[1], errors: r[3], $$slots: { default: [Rt] }, $$scope: { ctx: r } } };
	}
	return (
		s && (e = new s(u(n))),
		{
			c() {
				e && W(e.$$.fragment), (t = V());
			},
			l(r) {
				e && ye(e.$$.fragment, r), (t = V());
			},
			m(r, l) {
				e && M(e, r, l), G(r, t, l), (o = !0);
			},
			p(r, l) {
				const p = {};
				if (
					(l & 2 && (p.data = r[1]),
					l & 8 && (p.errors = r[3]),
					l & 525 && (p.$$scope = { dirty: l, ctx: r }),
					s !== (s = r[0][0]))
				) {
					if (e) {
						re();
						const h = e;
						B(h.$$.fragment, 1, 0, () => {
							x(h, 1);
						}),
							ae();
					}
					s
						? ((e = new s(u(r))), W(e.$$.fragment), z(e.$$.fragment, 1), M(e, t.parentNode, t))
						: (e = null);
				} else s && e.$set(p);
			},
			i(r) {
				o || (e && z(e.$$.fragment, r), (o = !0));
			},
			o(r) {
				e && B(e.$$.fragment, r), (o = !1);
			},
			d(r) {
				r && K(t), e && x(e, r);
			}
		}
	);
}
function Rt(n) {
	let e, t, o;
	var s = n[0][1];
	function u(r) {
		return { props: { data: r[2], errors: r[3] } };
	}
	return (
		s && (e = new s(u(n))),
		{
			c() {
				e && W(e.$$.fragment), (t = V());
			},
			l(r) {
				e && ye(e.$$.fragment, r), (t = V());
			},
			m(r, l) {
				e && M(e, r, l), G(r, t, l), (o = !0);
			},
			p(r, l) {
				const p = {};
				if ((l & 4 && (p.data = r[2]), l & 8 && (p.errors = r[3]), s !== (s = r[0][1]))) {
					if (e) {
						re();
						const h = e;
						B(h.$$.fragment, 1, 0, () => {
							x(h, 1);
						}),
							ae();
					}
					s
						? ((e = new s(u(r))), W(e.$$.fragment), z(e.$$.fragment, 1), M(e, t.parentNode, t))
						: (e = null);
				} else s && e.$set(p);
			},
			i(r) {
				o || (e && z(e.$$.fragment, r), (o = !0));
			},
			o(r) {
				e && B(e.$$.fragment, r), (o = !1);
			},
			d(r) {
				r && K(t), e && x(e, r);
			}
		}
	);
}
function Be(n) {
	let e,
		t = n[5] && ze(n);
	return {
		c() {
			(e = Qe('div')), t && t.c(), this.h();
		},
		l(o) {
			e = Ze(o, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var s = et(e);
			t && t.l(s), s.forEach(K), this.h();
		},
		h() {
			de(e, 'id', 'svelte-announcer'),
				de(e, 'aria-live', 'assertive'),
				de(e, 'aria-atomic', 'true'),
				C(e, 'position', 'absolute'),
				C(e, 'left', '0'),
				C(e, 'top', '0'),
				C(e, 'clip', 'rect(0 0 0 0)'),
				C(e, 'clip-path', 'inset(50%)'),
				C(e, 'overflow', 'hidden'),
				C(e, 'white-space', 'nowrap'),
				C(e, 'width', '1px'),
				C(e, 'height', '1px');
		},
		m(o, s) {
			G(o, e, s), t && t.m(e, null);
		},
		p(o, s) {
			o[5] ? (t ? t.p(o, s) : ((t = ze(o)), t.c(), t.m(e, null))) : t && (t.d(1), (t = null));
		},
		d(o) {
			o && K(e), t && t.d();
		}
	};
}
function ze(n) {
	let e;
	return {
		c() {
			e = tt(n[6]);
		},
		l(t) {
			e = nt(t, n[6]);
		},
		m(t, o) {
			G(t, e, o);
		},
		p(t, o) {
			o & 64 && rt(e, t[6]);
		},
		d(t) {
			t && K(e);
		}
	};
}
function St(n) {
	let e, t, o, s, u;
	const r = [Et, kt],
		l = [];
	function p(b, S) {
		return b[0][1] ? 0 : 1;
	}
	(e = p(n)), (t = l[e] = r[e](n));
	let h = n[4] && Be(n);
	return {
		c() {
			t.c(), (o = xe()), h && h.c(), (s = V());
		},
		l(b) {
			t.l(b), (o = Xe(b)), h && h.l(b), (s = V());
		},
		m(b, S) {
			l[e].m(b, S), G(b, o, S), h && h.m(b, S), G(b, s, S), (u = !0);
		},
		p(b, [S]) {
			let R = e;
			(e = p(b)),
				e === R
					? l[e].p(b, S)
					: (re(),
					  B(l[R], 1, 1, () => {
							l[R] = null;
					  }),
					  ae(),
					  (t = l[e]),
					  t ? t.p(b, S) : ((t = l[e] = r[e](b)), t.c()),
					  z(t, 1),
					  t.m(o.parentNode, o)),
				b[4]
					? h
						? h.p(b, S)
						: ((h = Be(b)), h.c(), h.m(s.parentNode, s))
					: h && (h.d(1), (h = null));
		},
		i(b) {
			u || (z(t), (u = !0));
		},
		o(b) {
			B(t), (u = !1);
		},
		d(b) {
			l[e].d(b), b && K(o), h && h.d(b), b && K(s);
		}
	};
}
function Lt(n, e, t) {
	let { stores: o } = e,
		{ page: s } = e,
		{ components: u } = e,
		{ data_0: r = null } = e,
		{ data_1: l = null } = e,
		{ errors: p } = e;
	Ye(o.page.notify);
	let h = !1,
		b = !1,
		S = null;
	return (
		me(() => {
			const R = o.page.subscribe(() => {
				h && (t(5, (b = !0)), t(6, (S = document.title || 'untitled page')));
			});
			return t(4, (h = !0)), R;
		}),
		(n.$$set = (R) => {
			'stores' in R && t(7, (o = R.stores)),
				'page' in R && t(8, (s = R.page)),
				'components' in R && t(0, (u = R.components)),
				'data_0' in R && t(1, (r = R.data_0)),
				'data_1' in R && t(2, (l = R.data_1)),
				'errors' in R && t(3, (p = R.errors));
		}),
		(n.$$.update = () => {
			n.$$.dirty & 384 && o.page.set(s);
		}),
		[u, r, l, p, h, b, S, o, s]
	);
}
class $t extends He {
	constructor(e) {
		super(),
			We(this, e, Lt, St, Me, {
				stores: 7,
				page: 8,
				components: 0,
				data_0: 1,
				data_1: 2,
				errors: 3
			});
	}
}
const Pt = {},
	se = [
		() =>
			ee(
				() => import('./chunks/0-5e789d49.js'),
				[
					'chunks/0-5e789d49.js',
					'components/pages/_layout.svelte-87040038.js',
					'assets/_layout-0d875880.css',
					'chunks/index-7d11cbb7.js'
				],
				import.meta.url
			),
		() =>
			ee(
				() => import('./chunks/1-e4608b28.js'),
				[
					'chunks/1-e4608b28.js',
					'components/error.svelte-98a1e9db.js',
					'chunks/index-7d11cbb7.js',
					'chunks/singletons-b35baa5a.js'
				],
				import.meta.url
			),
		() =>
			ee(
				() => import('./chunks/2-65f16659.js'),
				[
					'chunks/2-65f16659.js',
					'components/pages/_page.svelte-64f3bdb6.js',
					'chunks/index-7d11cbb7.js'
				],
				import.meta.url
			)
	],
	Ot = [],
	Ut = { '': [2] },
	jt = '/__data.js',
	Fe = 'sveltekit:scroll',
	q = 'sveltekit:index',
	he = bt(se, Ot, Ut, Pt),
	ge = se[0],
	we = se[1];
ge();
we();
let Y = {};
try {
	Y = JSON.parse(sessionStorage[Fe]);
} catch {}
function pe(n) {
	Y[n] = _e();
}
function At({ target: n, base: e, trailing_slash: t }) {
	var Ue;
	const o = [],
		s = { id: null, promise: null },
		u = { before_navigate: [], after_navigate: [] };
	let r = { branch: [], error: null, session_id: 0, url: null },
		l = !1,
		p = !0,
		h = !1,
		b = 1,
		S = null,
		R = !1,
		F,
		O = (Ue = history.state) == null ? void 0 : Ue[q];
	O || ((O = Date.now()), history.replaceState({ ...history.state, [q]: O }, '', location.href));
	const T = Y[O];
	T && ((history.scrollRestoration = 'manual'), scrollTo(T.x, T.y));
	let N = !1,
		H,
		ve;
	function ke() {
		return (
			S ||
				(S = Promise.resolve().then(async () => {
					await Se(new URL(location.href), []), (S = null), (R = !1);
				})),
			S
		);
	}
	async function Ee(
		a,
		{ noscroll: c = !1, replaceState: d = !1, keepfocus: i = !1, state: f = {} },
		v
	) {
		return (
			typeof a == 'string' && (a = new URL(a, Te(document))),
			le({
				url: a,
				scroll: c ? _e() : null,
				keepfocus: i,
				redirect_chain: v,
				details: { state: f, replaceState: d },
				accepted: () => {},
				blocked: () => {}
			})
		);
	}
	async function Re(a) {
		const c = Oe(a);
		if (!c) throw new Error('Attempted to prefetch a URL that does not belong to this app');
		return (s.promise = Pe(c)), (s.id = c.id), s.promise;
	}
	async function Se(a, c, d, i) {
		var E, k;
		const f = Oe(a),
			v = (ve = {});
		let w = f && (await Pe(f));
		if (
			(!w &&
				a.origin === location.origin &&
				a.pathname === location.pathname &&
				(w = await Z({
					status: 404,
					error: new Error(`Not found: ${a.pathname}`),
					url: a,
					routeId: null
				})),
			!w)
		)
			return await X(a), !1;
		if (((a = (f == null ? void 0 : f.url) || a), ve !== v)) return !1;
		if (((o.length = 0), w.type === 'redirect'))
			if (c.length > 10 || c.includes(a.pathname))
				w = await Z({ status: 500, error: new Error('Redirect loop'), url: a, routeId: null });
			else return Ee(new URL(w.location, a).href, {}, [...c, a.pathname]), !1;
		else
			((k = (E = w.props) == null ? void 0 : E.page) == null ? void 0 : k.status) >= 400 &&
				(await J.updated.check()) &&
				(await X(a));
		if (((h = !0), d && d.details)) {
			const { details: _ } = d,
				y = _.replaceState ? 0 : 1;
			(_.state[q] = O += y), history[_.replaceState ? 'replaceState' : 'pushState'](_.state, '', a);
		}
		if ((l ? ((r = w.state), w.props.page && (w.props.page.url = a), F.$set(w.props)) : Le(w), d)) {
			const { scroll: _, keepfocus: y } = d;
			if (!y) {
				const P = document.body,
					A = P.getAttribute('tabindex');
				(P.tabIndex = -1),
					P.focus({ preventScroll: !0 }),
					setTimeout(() => {
						var $;
						($ = getSelection()) == null || $.removeAllRanges();
					}),
					A !== null ? P.setAttribute('tabindex', A) : P.removeAttribute('tabindex');
			}
			if ((await De(), p)) {
				const P = a.hash && document.getElementById(a.hash.slice(1));
				_ ? scrollTo(_.x, _.y) : P ? P.scrollIntoView() : scrollTo(0, 0);
			}
		} else await De();
		(s.promise = null),
			(s.id = null),
			(p = !0),
			w.props.page && (H = w.props.page),
			i && i(),
			(h = !1);
	}
	function Le(a) {
		r = a.state;
		const c = document.querySelector('style[data-sveltekit]');
		c && c.remove(),
			(H = a.props.page),
			(F = new $t({ target: n, props: { ...a.props, stores: J }, hydrate: !0 }));
		const d = { from: null, to: new URL(location.href) };
		u.after_navigate.forEach((i) => i(d)), (l = !0);
	}
	async function Q({
		url: a,
		params: c,
		branch: d,
		status: i,
		error: f,
		routeId: v,
		validation_errors: w
	}) {
		var A;
		const E = d.filter(Boolean),
			k = {
				type: 'loaded',
				state: { url: a, params: c, branch: d, error: f, session_id: b },
				props: { components: E.map(($) => $.node.component), errors: w }
			};
		let _ = {},
			y = !H;
		for (let $ = 0; $ < E.length; $ += 1) {
			const U = E[$];
			(_ = { ..._, ...U.data }),
				(y || !r.branch.some((m) => m === U)) &&
					((k.props[`data_${$}`] = _),
					(y = y || Object.keys((A = U.data) != null ? A : {}).length > 0));
		}
		if (
			(y || (y = Object.keys(H.data).length !== Object.keys(_).length),
			!r.url || a.href !== r.url.href || r.error !== f || y)
		) {
			k.props.page = { error: f, params: c, routeId: v, status: i, url: a, data: y ? _ : H.data };
			const $ = (U, m) => {
				Object.defineProperty(k.props.page, U, {
					get: () => {
						throw new Error(`$page.${U} has been replaced by $page.url.${m}`);
					}
				});
			};
			$('origin', 'origin'), $('path', 'pathname'), $('query', 'searchParams');
		}
		return k;
	}
	async function oe({ loader: a, parent: c, url: d, params: i, routeId: f, server_data_node: v }) {
		var _, y, P, A, $;
		let w = null;
		const E = { dependencies: new Set(), params: new Set(), parent: !1, url: !1 },
			k = await a();
		if ((_ = k.shared) != null && _.load) {
			let U = function (...g) {
				for (const L of g) {
					const { href: I } = new URL(L, d);
					E.dependencies.add(I);
				}
			};
			const m = {};
			for (const g in i)
				Object.defineProperty(m, g, {
					get() {
						return E.params.add(g), i[g];
					},
					enumerable: !0
				});
			const j = {
				routeId: f,
				params: m,
				data: (y = v == null ? void 0 : v.data) != null ? y : null,
				url: ut(d, () => {
					E.url = !0;
				}),
				async fetch(g, L) {
					let I;
					typeof g == 'string'
						? (I = g)
						: ((I = g.url),
						  (L = {
								body: g.method === 'GET' || g.method === 'HEAD' ? void 0 : await g.blob(),
								cache: g.cache,
								credentials: g.credentials,
								headers: g.headers,
								integrity: g.integrity,
								keepalive: g.keepalive,
								method: g.method,
								mode: g.mode,
								redirect: g.redirect,
								referrer: g.referrer,
								referrerPolicy: g.referrerPolicy,
								signal: g.signal,
								...L
						  }));
					const D = new URL(I, d).href;
					return U(D), l ? mt(D, L) : pt(I, D, L);
				},
				setHeaders: () => {},
				depends: U,
				parent() {
					return (E.parent = !0), c();
				}
			};
			Object.defineProperties(j, {
				props: {
					get() {
						throw new Error(
							'@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693'
						);
					},
					enumerable: !1
				},
				session: {
					get() {
						throw new Error(
							'session is no longer available. See https://github.com/sveltejs/kit/discussions/5883'
						);
					},
					enumerable: !1
				},
				stuff: {
					get() {
						throw new Error(
							'@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693'
						);
					},
					enumerable: !1
				}
			}),
				(w = (P = await k.shared.load.call(null, j)) != null ? P : null);
		}
		return {
			node: k,
			loader: a,
			server: v,
			shared: (A = k.shared) != null && A.load ? { type: 'data', data: w, uses: E } : null,
			data: ($ = w != null ? w : v == null ? void 0 : v.data) != null ? $ : null
		};
	}
	function $e(a, c, d) {
		if (R) return !0;
		if (!d) return !1;
		if ((d.parent && c) || (a.url && d.url)) return !0;
		for (const i of a.params) if (d.params.has(i)) return !0;
		for (const i of d.dependencies) if (o.some((f) => f(new URL(i)))) return !0;
		return !1;
	}
	function ie(a, c) {
		var d, i;
		return (a == null ? void 0 : a.type) === 'data'
			? {
					type: 'data',
					data: a.data,
					uses: {
						dependencies: new Set((d = a.uses.dependencies) != null ? d : []),
						params: new Set((i = a.uses.params) != null ? i : []),
						parent: !!a.uses.parent,
						url: !!a.uses.url
					}
			  }
			: (a == null ? void 0 : a.type) === 'skip' && c != null
			? c
			: null;
	}
	async function Pe({ id: a, url: c, params: d, route: i }) {
		if (s.id === a && s.promise) return s.promise;
		const { errors: f, layouts: v, leaf: w } = i,
			E = r.url && {
				url: a !== r.url.pathname + r.url.search,
				params: Object.keys(d).filter((m) => r.params[m] !== d[m])
			},
			k = [...v, w];
		f.forEach((m) => (m == null ? void 0 : m().catch(() => {}))),
			k.forEach((m) => (m == null ? void 0 : m[1]().catch(() => {})));
		let _ = null;
		const y = k.reduce((m, j, g) => {
			var D;
			const L = r.branch[g],
				I =
					!!(j != null && j[0]) &&
					((L == null ? void 0 : L.loader) !== j[1] ||
						$e(E, m.some(Boolean), (D = L.server) == null ? void 0 : D.uses));
			return m.push(I), m;
		}, []);
		if (y.some(Boolean)) {
			try {
				_ = await Ke(c, y);
			} catch (m) {
				return Z({ status: 500, error: m, url: c, routeId: i.id });
			}
			if (_.type === 'redirect') return _;
		}
		const P = _ == null ? void 0 : _.nodes;
		let A = !1;
		const $ = k.map(async (m, j) => {
			var ce, je;
			if (!m) return;
			const g = r.branch[j],
				L = (ce = P == null ? void 0 : P[j]) != null ? ce : null;
			if (
				(!L || L.type === 'skip') &&
				m[1] === (g == null ? void 0 : g.loader) &&
				!$e(E, A, (je = g.shared) == null ? void 0 : je.uses)
			)
				return g;
			if (((A = !0), (L == null ? void 0 : L.type) === 'error'))
				throw L.httperror ? vt(L.httperror.status, L.httperror.message) : L.error;
			return oe({
				loader: m[1],
				url: c,
				params: d,
				routeId: i.id,
				parent: async () => {
					var Ie;
					const Ae = {};
					for (let fe = 0; fe < j; fe += 1)
						Object.assign(Ae, (Ie = await $[fe]) == null ? void 0 : Ie.data);
					return Ae;
				},
				server_data_node: ie(L, g == null ? void 0 : g.server)
			});
		});
		for (const m of $) m.catch(() => {});
		const U = [];
		for (let m = 0; m < k.length; m += 1)
			if (k[m])
				try {
					U.push(await $[m]);
				} catch (j) {
					const g = j;
					if (g instanceof qe) return { type: 'redirect', location: g.location };
					const L = j instanceof te ? j.status : 500;
					for (; m--; )
						if (f[m]) {
							let I,
								D = m;
							for (; !U[D]; ) D -= 1;
							try {
								return (
									(I = { node: await f[m](), loader: f[m], data: {}, server: null, shared: null }),
									await Q({
										url: c,
										params: d,
										branch: U.slice(0, D + 1).concat(I),
										status: L,
										error: g,
										routeId: i.id
									})
								);
							} catch {
								continue;
							}
						}
					await X(c);
					return;
				}
			else U.push(void 0);
		return await Q({ url: c, params: d, branch: U, status: 200, error: null, routeId: i.id });
	}
	async function Z({ status: a, error: c, url: d, routeId: i }) {
		var _;
		const f = {},
			v = await ge();
		let w = null;
		if (v.server)
			try {
				const y = await Ke(d, [!0]);
				if (y.type !== 'data' || (y.nodes[0] && y.nodes[0].type !== 'data')) throw 0;
				w = (_ = y.nodes[0]) != null ? _ : null;
			} catch {
				await X(d);
				return;
			}
		const E = await oe({
				loader: ge,
				url: d,
				params: f,
				routeId: i,
				parent: () => Promise.resolve({}),
				server_data_node: ie(w)
			}),
			k = { node: await we(), loader: we, shared: null, server: null, data: null };
		return await Q({ url: d, params: f, branch: [E, k], status: a, error: c, routeId: i });
	}
	function Oe(a) {
		if (a.origin !== location.origin || !a.pathname.startsWith(e)) return;
		const c = decodeURI(a.pathname.slice(e.length) || '/');
		for (const d of he) {
			const i = d.exec(c);
			if (i) {
				const f = new URL(a.origin + lt(a.pathname, t) + a.search + a.hash);
				return { id: f.pathname + f.search, route: d, params: ct(i), url: f };
			}
		}
	}
	async function le({
		url: a,
		scroll: c,
		keepfocus: d,
		redirect_chain: i,
		details: f,
		accepted: v,
		blocked: w
	}) {
		const E = r.url;
		let k = !1;
		const _ = { from: E, to: a, cancel: () => (k = !0) };
		if ((u.before_navigate.forEach((y) => y(_)), k)) {
			w();
			return;
		}
		pe(O),
			v(),
			l && J.navigating.set({ from: r.url, to: a }),
			await Se(a, i, { scroll: c, keepfocus: d, details: f }, () => {
				const y = { from: E, to: a };
				u.after_navigate.forEach((P) => P(y)), J.navigating.set(null);
			});
	}
	function X(a) {
		return (location.href = a.href), new Promise(() => {});
	}
	return {
		after_navigate: (a) => {
			me(
				() => (
					u.after_navigate.push(a),
					() => {
						const c = u.after_navigate.indexOf(a);
						u.after_navigate.splice(c, 1);
					}
				)
			);
		},
		before_navigate: (a) => {
			me(
				() => (
					u.before_navigate.push(a),
					() => {
						const c = u.before_navigate.indexOf(a);
						u.before_navigate.splice(c, 1);
					}
				)
			);
		},
		disable_scroll_handling: () => {
			(h || !l) && (p = !1);
		},
		goto: (a, c = {}) => Ee(a, c, []),
		invalidate: (a) => {
			if (a === void 0)
				throw new Error(
					'`invalidate()` (with no arguments) has been replaced by `invalidateAll()`'
				);
			if (typeof a == 'function') o.push(a);
			else {
				const { href: c } = new URL(a, location.href);
				o.push((d) => d.href === c);
			}
			return ke();
		},
		invalidateAll: () => ((R = !0), ke()),
		prefetch: async (a) => {
			const c = new URL(a, Te(document));
			await Re(c);
		},
		prefetch_routes: async (a) => {
			const d = (a ? he.filter((i) => a.some((f) => i.exec(f))) : he).map((i) =>
				Promise.all([...i.layouts, i.leaf].map((f) => (f == null ? void 0 : f[1]())))
			);
			await Promise.all(d);
		},
		_start_router: () => {
			(history.scrollRestoration = 'manual'),
				addEventListener('beforeunload', (i) => {
					let f = !1;
					const v = { from: r.url, to: null, cancel: () => (f = !0) };
					u.before_navigate.forEach((w) => w(v)),
						f ? (i.preventDefault(), (i.returnValue = '')) : (history.scrollRestoration = 'auto');
				}),
				addEventListener('visibilitychange', () => {
					if (document.visibilityState === 'hidden') {
						pe(O);
						try {
							sessionStorage[Fe] = JSON.stringify(Y);
						} catch {}
					}
				});
			const a = (i) => {
				const { url: f, options: v } = Ce(i);
				f && v.prefetch === '' && Re(f);
			};
			let c;
			const d = (i) => {
				clearTimeout(c),
					(c = setTimeout(() => {
						var f;
						(f = i.target) == null ||
							f.dispatchEvent(new CustomEvent('sveltekit:trigger_prefetch', { bubbles: !0 }));
					}, 20));
			};
			addEventListener('touchstart', a),
				addEventListener('mousemove', d),
				addEventListener('sveltekit:trigger_prefetch', a),
				addEventListener('click', (i) => {
					if (
						i.button ||
						i.which !== 1 ||
						i.metaKey ||
						i.ctrlKey ||
						i.shiftKey ||
						i.altKey ||
						i.defaultPrevented
					)
						return;
					const { a: f, url: v, options: w } = Ce(i);
					if (!f || !v) return;
					const E = f instanceof SVGAElement;
					if (!E && !(v.protocol === 'https:' || v.protocol === 'http:')) return;
					const k = (f.getAttribute('rel') || '').split(/\s+/);
					if (
						f.hasAttribute('download') ||
						k.includes('external') ||
						w.reload === '' ||
						(E ? f.target.baseVal : f.target)
					)
						return;
					const [_, y] = v.href.split('#');
					if (y !== void 0 && _ === location.href.split('#')[0]) {
						(N = !0), pe(O), J.page.set({ ...H, url: v }), J.page.notify();
						return;
					}
					le({
						url: v,
						scroll: w.noscroll === '' ? _e() : null,
						keepfocus: !1,
						redirect_chain: [],
						details: { state: {}, replaceState: v.href === location.href },
						accepted: () => i.preventDefault(),
						blocked: () => i.preventDefault()
					});
				}),
				addEventListener('popstate', (i) => {
					if (i.state) {
						if (i.state[q] === O) return;
						le({
							url: new URL(location.href),
							scroll: Y[i.state[q]],
							keepfocus: !1,
							redirect_chain: [],
							details: null,
							accepted: () => {
								O = i.state[q];
							},
							blocked: () => {
								const f = O - i.state[q];
								history.go(f);
							}
						});
					}
				}),
				addEventListener('hashchange', () => {
					N && ((N = !1), history.replaceState({ ...history.state, [q]: ++O }, '', location.href));
				});
			for (const i of document.querySelectorAll('link')) i.rel === 'icon' && (i.href = i.href);
			addEventListener('pageshow', (i) => {
				i.persisted && J.navigating.set(null);
			});
		},
		_hydrate: async ({
			status: a,
			error: c,
			node_ids: d,
			params: i,
			routeId: f,
			data: v,
			errors: w
		}) => {
			const E = new URL(location.href);
			let k;
			try {
				const _ = d.map(async (y, P) => {
					const A = v[P];
					return oe({
						loader: se[y],
						url: E,
						params: i,
						routeId: f,
						parent: async () => {
							const $ = {};
							for (let U = 0; U < P; U += 1) Object.assign($, (await _[U]).data);
							return $;
						},
						server_data_node: ie(A)
					});
				});
				k = await Q({
					url: E,
					params: i,
					branch: await Promise.all(_),
					status: a,
					error: c != null && c.__is_http_error ? new te(c.status, c.message) : c,
					validation_errors: w,
					routeId: f
				});
			} catch (_) {
				const y = _;
				if (y instanceof qe) {
					await X(new URL(_.location, location.href));
					return;
				}
				k = await Z({ status: y instanceof te ? y.status : 500, error: y, url: E, routeId: f });
			}
			Le(k);
		}
	};
}
let It = 1;
async function Ke(n, e) {
	const t = new URL(n);
	(t.pathname = n.pathname.replace(/\/$/, '') + jt),
		t.searchParams.set('__invalid', e.map((s) => (s ? 'y' : 'n')).join('')),
		t.searchParams.set('__id', String(It++)),
		await ee(() => import(t.href), [], import.meta.url);
	const o = window.__sveltekit_data;
	return delete window.__sveltekit_data, o;
}
async function Nt({ env: n, hydrate: e, paths: t, target: o, trailing_slash: s }) {
	at(t);
	const u = At({ target: o, base: t.base, trailing_slash: s });
	st({ client: u }),
		e ? await u._hydrate(e) : u.goto(location.href, { replaceState: !0 }),
		u._start_router();
}
export { Nt as start };
