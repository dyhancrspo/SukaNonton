!(function (n) {
	var t = {};
	function e(o) {
		if (t[o]) return t[o].exports;
		var r = (t[o] = { i: o, l: !1, exports: {} });
		return n[o].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
	}
	(e.m = n),
		(e.c = t),
		(e.d = function (n, t, o) {
			e.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: o });
		}),
		(e.r = function (n) {
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(n, "__esModule", { value: !0 });
		}),
		(e.t = function (n, t) {
			if ((1 & t && (n = e(n)), 8 & t)) return n;
			if (4 & t && "object" == typeof n && n && n.__esModule) return n;
			var o = Object.create(null);
			if (
				(e.r(o),
				Object.defineProperty(o, "default", { enumerable: !0, value: n }),
				2 & t && "string" != typeof n)
			)
				for (var r in n)
					e.d(
						o,
						r,
						function (t) {
							return n[t];
						}.bind(null, r)
					);
			return o;
		}),
		(e.n = function (n) {
			var t =
				n && n.__esModule
					? function () {
							return n.default;
					  }
					: function () {
							return n;
					  };
			return e.d(t, "a", t), t;
		}),
		(e.o = function (n, t) {
			return Object.prototype.hasOwnProperty.call(n, t);
		}),
		(e.p = ""),
		e((e.s = 7));
})([
	function (n, t, e) {
		var o = e(1),
			r = e(2);
		"string" == typeof (r = r.__esModule ? r.default : r) &&
			(r = [[n.i, r, ""]]);
		var i = { insert: "head", singleton: !1 },
			c = (o(r, i), r.locals ? r.locals : {});
		n.exports = c;
	},
	function (n, t, e) {
		"use strict";
		var o,
			r = function () {
				return (
					void 0 === o &&
						(o = Boolean(window && document && document.all && !window.atob)),
					o
				);
			},
			i = (function () {
				var n = {};
				return function (t) {
					if (void 0 === n[t]) {
						var e = document.querySelector(t);
						if (
							window.HTMLIFrameElement &&
							e instanceof window.HTMLIFrameElement
						)
							try {
								e = e.contentDocument.head;
							} catch (n) {
								e = null;
							}
						n[t] = e;
					}
					return n[t];
				};
			})(),
			c = [];
		function a(n) {
			for (var t = -1, e = 0; e < c.length; e++)
				if (c[e].identifier === n) {
					t = e;
					break;
				}
			return t;
		}
		function u(n, t) {
			for (var e = {}, o = [], r = 0; r < n.length; r++) {
				var i = n[r],
					u = t.base ? i[0] + t.base : i[0],
					l = e[u] || 0,
					f = "".concat(u, " ").concat(l);
				e[u] = l + 1;
				var s = a(f),
					p = { css: i[1], media: i[2], sourceMap: i[3] };
				-1 !== s
					? (c[s].references++, c[s].updater(p))
					: c.push({ identifier: f, updater: b(p, t), references: 1 }),
					o.push(f);
			}
			return o;
		}
		function l(n) {
			var t = document.createElement("style"),
				o = n.attributes || {};
			if (void 0 === o.nonce) {
				var r = e.nc;
				r && (o.nonce = r);
			}
			if (
				(Object.keys(o).forEach(function (n) {
					t.setAttribute(n, o[n]);
				}),
				"function" == typeof n.insert)
			)
				n.insert(t);
			else {
				var c = i(n.insert || "head");
				if (!c)
					throw new Error(
						"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
					);
				c.appendChild(t);
			}
			return t;
		}
		var f,
			s =
				((f = []),
				function (n, t) {
					return (f[n] = t), f.filter(Boolean).join("\n");
				});
		function p(n, t, e, o) {
			var r = e
				? ""
				: o.media
				? "@media ".concat(o.media, " {").concat(o.css, "}")
				: o.css;
			if (n.styleSheet) n.styleSheet.cssText = s(t, r);
			else {
				var i = document.createTextNode(r),
					c = n.childNodes;
				c[t] && n.removeChild(c[t]),
					c.length ? n.insertBefore(i, c[t]) : n.appendChild(i);
			}
		}
		function d(n, t, e) {
			var o = e.css,
				r = e.media,
				i = e.sourceMap;
			if (
				(r ? n.setAttribute("media", r) : n.removeAttribute("media"),
				i &&
					btoa &&
					(o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
						btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
						" */"
					)),
				n.styleSheet)
			)
				n.styleSheet.cssText = o;
			else {
				for (; n.firstChild; ) n.removeChild(n.firstChild);
				n.appendChild(document.createTextNode(o));
			}
		}
		var h = null,
			y = 0;
		function b(n, t) {
			var e, o, r;
			if (t.singleton) {
				var i = y++;
				(e = h || (h = l(t))),
					(o = p.bind(null, e, i, !1)),
					(r = p.bind(null, e, i, !0));
			} else
				(e = l(t)),
					(o = d.bind(null, e, t)),
					(r = function () {
						!(function (n) {
							if (null === n.parentNode) return !1;
							n.parentNode.removeChild(n);
						})(e);
					});
			return (
				o(n),
				function (t) {
					if (t) {
						if (
							t.css === n.css &&
							t.media === n.media &&
							t.sourceMap === n.sourceMap
						)
							return;
						o((n = t));
					} else r();
				}
			);
		}
		n.exports = function (n, t) {
			(t = t || {}).singleton ||
				"boolean" == typeof t.singleton ||
				(t.singleton = r());
			var e = u((n = n || []), t);
			return function (n) {
				if (
					((n = n || []),
					"[object Array]" === Object.prototype.toString.call(n))
				) {
					for (var o = 0; o < e.length; o++) {
						var r = a(e[o]);
						c[r].references--;
					}
					for (var i = u(n, t), l = 0; l < e.length; l++) {
						var f = a(e[l]);
						0 === c[f].references && (c[f].updater(), c.splice(f, 1));
					}
					e = i;
				}
			};
		};
	},
	function (n, t, e) {
		(t = e(3)(!1)).push([
			n.i,
			"@import url(https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap);",
		]),
			t.push([
				n.i,
				'* {\n\tmargin: 0px;\n\tpadding: 0px;\n\tbox-sizing: border-box;\n\tscroll-behavior: smooth;\n\tfont-family: "Poppins", sans-serif;\n}\n\nheader {\n\tdisplay: flex;\n\twidth: 90%;\n\theight: 10vh;\n\tmargin: auto;\n\talign-items: center;\n\tanimation: drop 1s ease-in;\n}\n\nnav {\n\tdisplay: flex;\n\toverflow-x: hidden;\n}\n\nmain {\n\twidth: 90%;\n\tmax-width: 800px;\n\tmargin: 32px auto;\n}\n\nmovie-list {\n\tdisplay: block;\n\tmargin-top: 32px;\n\twidth: 100%;\n\tpadding: 16px;\n}\n\nfooter {\n\tborder-top: 1px solid #6f6f89;\n\tmargin-top: 10vh;\n\tjustify-content: center;\n\talign-items: center;\n\tdisplay: flex;\n\theight: 20vh;\n\tfont-weight: 700;\n\tfont-size: 22px;\n\tcolor: #6f6f89;\n}\n\n/* Tablet / Ipad  / Mobile */\n@media screen and (max-width: 660px) {\n\tbody {\n\t\toverflow-x: hidden;\n\t}\n\n\tfooter .container {\n\t\tfont-size: 12px;\n\t\tjustify-content: center;\n\t\tdisplay: flex;\n\t}\n}\n',
				"",
			]),
			(n.exports = t);
	},
	function (n, t, e) {
		"use strict";
		n.exports = function (n) {
			var t = [];
			return (
				(t.toString = function () {
					return this.map(function (t) {
						var e = (function (n, t) {
							var e = n[1] || "",
								o = n[3];
							if (!o) return e;
							if (t && "function" == typeof btoa) {
								var r =
										((c = o),
										(a = btoa(unescape(encodeURIComponent(JSON.stringify(c))))),
										(u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
											a
										)),
										"/*# ".concat(u, " */")),
									i = o.sources.map(function (n) {
										return "/*# sourceURL="
											.concat(o.sourceRoot || "")
											.concat(n, " */");
									});
								return [e].concat(i).concat([r]).join("\n");
							}
							var c, a, u;
							return [e].join("\n");
						})(t, n);
						return t[2] ? "@media ".concat(t[2], " {").concat(e, "}") : e;
					}).join("");
				}),
				(t.i = function (n, e, o) {
					"string" == typeof n && (n = [[null, n, ""]]);
					var r = {};
					if (o)
						for (var i = 0; i < this.length; i++) {
							var c = this[i][0];
							null != c && (r[c] = !0);
						}
					for (var a = 0; a < n.length; a++) {
						var u = [].concat(n[a]);
						(o && r[u[0]]) ||
							(e &&
								(u[2]
									? (u[2] = "".concat(e, " and ").concat(u[2]))
									: (u[2] = e)),
							t.push(u));
					}
				}),
				t
			);
		};
	},
	function (n, t) {
		function e(n) {
			return (e =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (n) {
							return typeof n;
					  }
					: function (n) {
							return n &&
								"function" == typeof Symbol &&
								n.constructor === Symbol &&
								n !== Symbol.prototype
								? "symbol"
								: typeof n;
					  })(n);
		}
		function o(n, t) {
			for (var e = 0; e < t.length; e++) {
				var o = t[e];
				(o.enumerable = o.enumerable || !1),
					(o.configurable = !0),
					"value" in o && (o.writable = !0),
					Object.defineProperty(n, o.key, o);
			}
		}
		function r(n, t) {
			return !t || ("object" !== e(t) && "function" != typeof t)
				? (function (n) {
						if (void 0 === n)
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called"
							);
						return n;
				  })(n)
				: t;
		}
		function i(n) {
			var t = "function" == typeof Map ? new Map() : void 0;
			return (i = function (n) {
				if (
					null === n ||
					((e = n), -1 === Function.toString.call(e).indexOf("[native code]"))
				)
					return n;
				var e;
				if ("function" != typeof n)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				if (void 0 !== t) {
					if (t.has(n)) return t.get(n);
					t.set(n, o);
				}
				function o() {
					return c(n, arguments, l(this).constructor);
				}
				return (
					(o.prototype = Object.create(n.prototype, {
						constructor: {
							value: o,
							enumerable: !1,
							writable: !0,
							configurable: !0,
						},
					})),
					u(o, n)
				);
			})(n);
		}
		function c(n, t, e) {
			return (c = a()
				? Reflect.construct
				: function (n, t, e) {
						var o = [null];
						o.push.apply(o, t);
						var r = new (Function.bind.apply(n, o))();
						return e && u(r, e.prototype), r;
				  }).apply(null, arguments);
		}
		function a() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return (
					Date.prototype.toString.call(
						Reflect.construct(Date, [], function () {})
					),
					!0
				);
			} catch (n) {
				return !1;
			}
		}
		function u(n, t) {
			return (u =
				Object.setPrototypeOf ||
				function (n, t) {
					return (n.__proto__ = t), n;
				})(n, t);
		}
		function l(n) {
			return (l = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function (n) {
						return n.__proto__ || Object.getPrototypeOf(n);
				  })(n);
		}
		var f = (function (n) {
			!(function (n, t) {
				if ("function" != typeof t && null !== t)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				(n.prototype = Object.create(t && t.prototype, {
					constructor: { value: n, writable: !0, configurable: !0 },
				})),
					t && u(n, t);
			})(s, n);
			var t,
				e,
				i,
				c,
				f =
					((t = s),
					function () {
						var n,
							e = l(t);
						if (a()) {
							var o = l(this).constructor;
							n = Reflect.construct(e, arguments, o);
						} else n = e.apply(this, arguments);
						return r(this, n);
					});
			function s() {
				var n;
				return (
					(function (n, t) {
						if (!(n instanceof t))
							throw new TypeError("Cannot call a class as a function");
					})(this, s),
					((n = f.call(this)).shadowDOM = n.attachShadow({ mode: "open" })),
					n
				);
			}
			return (
				(e = s),
				(i = [
					{
						key: "connectedCallback",
						value: function () {
							this.render();
						},
					},
					{
						key: "render",
						value: function () {
							this.shadowDOM.innerHTML =
								'\n        \n        <style>\n        * {\n            margin: 0px;\n            padding: 0px;\n            box-sizing: border-box;\n            scroll-behavior: smooth;\n            font-family: \'Poppins\', sans-serif;\n        }\n\n        :host {\n            width: 100%;\n            background-color: #fffff;\n            color: #EA4C89;\n            display: flex;\n            border-bottom: 1px solid gray;\n        }\n        h2 {\n            font-size: 30px;\n            display: flex;\n            justify-content: center;\n\n            .span {\n                color: #585772;\n            }\n        }\n\n        \n        .nav-links {\n            list-style: none;\n            display: flex;\n            margin-left: 45em;\n        }\n        \n        .nav-li {\n            color: #ea4c89;\n            font-size: 20px;\n            font-weight: 500;\n            text-decoration: none;\n            margin: 20px;\n        }\n        \n        .nav-li:hover {\n            color: #585772;\n        }\n\n        .gray {\n            color: #3C4F76;\n        }\n        \n\n        </style>\n\n        <h2>Suka<span class="gray">Nonton</span>.</h2>\n        \n        <nav>\n        <ul class="nav-links">\n          <li><a class="nav-li" href="#search-bar">Cari Tontonan</a></li>\n          <li><a class="nav-li" href="#">About</a></li>\n        </ul>\n      </nav>';
						},
					},
				]) && o(e.prototype, i),
				c && o(e, c),
				s
			);
		})(i(HTMLElement));
		customElements.define("app-bar", f);
	},
	function (n, t) {
		function e(n) {
			return (e =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (n) {
							return typeof n;
					  }
					: function (n) {
							return n &&
								"function" == typeof Symbol &&
								n.constructor === Symbol &&
								n !== Symbol.prototype
								? "symbol"
								: typeof n;
					  })(n);
		}
		function o(n, t) {
			for (var e = 0; e < t.length; e++) {
				var o = t[e];
				(o.enumerable = o.enumerable || !1),
					(o.configurable = !0),
					"value" in o && (o.writable = !0),
					Object.defineProperty(n, o.key, o);
			}
		}
		function r(n, t) {
			return !t || ("object" !== e(t) && "function" != typeof t)
				? (function (n) {
						if (void 0 === n)
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called"
							);
						return n;
				  })(n)
				: t;
		}
		function i(n) {
			var t = "function" == typeof Map ? new Map() : void 0;
			return (i = function (n) {
				if (
					null === n ||
					((e = n), -1 === Function.toString.call(e).indexOf("[native code]"))
				)
					return n;
				var e;
				if ("function" != typeof n)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				if (void 0 !== t) {
					if (t.has(n)) return t.get(n);
					t.set(n, o);
				}
				function o() {
					return c(n, arguments, l(this).constructor);
				}
				return (
					(o.prototype = Object.create(n.prototype, {
						constructor: {
							value: o,
							enumerable: !1,
							writable: !0,
							configurable: !0,
						},
					})),
					u(o, n)
				);
			})(n);
		}
		function c(n, t, e) {
			return (c = a()
				? Reflect.construct
				: function (n, t, e) {
						var o = [null];
						o.push.apply(o, t);
						var r = new (Function.bind.apply(n, o))();
						return e && u(r, e.prototype), r;
				  }).apply(null, arguments);
		}
		function a() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return (
					Date.prototype.toString.call(
						Reflect.construct(Date, [], function () {})
					),
					!0
				);
			} catch (n) {
				return !1;
			}
		}
		function u(n, t) {
			return (u =
				Object.setPrototypeOf ||
				function (n, t) {
					return (n.__proto__ = t), n;
				})(n, t);
		}
		function l(n) {
			return (l = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function (n) {
						return n.__proto__ || Object.getPrototypeOf(n);
				  })(n);
		}
		var f = (function (n) {
			!(function (n, t) {
				if ("function" != typeof t && null !== t)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				(n.prototype = Object.create(t && t.prototype, {
					constructor: { value: n, writable: !0, configurable: !0 },
				})),
					t && u(n, t);
			})(s, n);
			var t,
				e,
				i,
				c,
				f =
					((t = s),
					function () {
						var n,
							e = l(t);
						if (a()) {
							var o = l(this).constructor;
							n = Reflect.construct(e, arguments, o);
						} else n = e.apply(this, arguments);
						return r(this, n);
					});
			function s() {
				var n;
				return (
					(function (n, t) {
						if (!(n instanceof t))
							throw new TypeError("Cannot call a class as a function");
					})(this, s),
					((n = f.call(this)).shadowDOM = n.attachShadow({ mode: "open" })),
					n
				);
			}
			return (
				(e = s),
				(i = [
					{
						key: "render",
						value: function () {
							this.shadowDOM.innerHTML = "\n        <style>\n        * {\n            margin : 0;\n            padding : 0;\n            box-sizing : border-box;\n        }\n\n        \n        :host {\n            display: flex;\n            margin: 20px 0px;\n            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);\n            border-radius: 8px;\n            overflow: hidden;\n        }\n\n        .fan-art-movie {\n            width: 40%;\n            object-fit: cover;\n            object-position: center;\n        }\n\n        .movie-info {\n            width: 60%;\n            padding: 20px;\n        }\n        \n        .movie-info > h2 {\n            font-family: 'Poppins', serif;\n            font-weight: bolder;\n            color: #EA4C89;       \n        }\n        \n        .movie-info > p {\n            font-family: 'Roboto', sans-serif;\n            margin-top: 10px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            display: -webkit-box;\n            -webkit-box-orient: horizontal;\n            -webkit-line-clamp: 3;\n        }\n\n        .movie-info > p:hover{\n            overflow: visible;\n            -webkit-line-clamp: 12;\n        }\n        </style>\n        <img class=\"fan-art-movie\" src=\""
								.concat("https://image.tmdb.org/t/p/w500/", ".")
								.concat(
									this._movie.backdrop_path,
									'" alt="Fan Art">\n            <div class="movie-info">\n            <h2>'
								)
								.concat(
									this._movie.title,
									"</h2>\n            <p>Tanggal Rilis : "
								)
								.concat(
									this._movie.release_date,
									"</p>\n            <p>Nilai : "
								)
								.concat(
									this._movie.vote_average,
									"</p>\n            <p>Tentang :</br></br>"
								)
								.concat(this._movie.overview, "</p>\n        </div>");
						},
					},
					{
						key: "movie",
						set: function (n) {
							(this._movie = n), this.render();
						},
					},
				]) && o(e.prototype, i),
				c && o(e, c),
				s
			);
		})(i(HTMLElement));
		customElements.define("movie-item", f);
	},
	function (n, t) {
		function e(n) {
			return (e =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (n) {
							return typeof n;
					  }
					: function (n) {
							return n &&
								"function" == typeof Symbol &&
								n.constructor === Symbol &&
								n !== Symbol.prototype
								? "symbol"
								: typeof n;
					  })(n);
		}
		function o(n, t) {
			for (var e = 0; e < t.length; e++) {
				var o = t[e];
				(o.enumerable = o.enumerable || !1),
					(o.configurable = !0),
					"value" in o && (o.writable = !0),
					Object.defineProperty(n, o.key, o);
			}
		}
		function r(n, t) {
			return !t || ("object" !== e(t) && "function" != typeof t)
				? (function (n) {
						if (void 0 === n)
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called"
							);
						return n;
				  })(n)
				: t;
		}
		function i(n) {
			var t = "function" == typeof Map ? new Map() : void 0;
			return (i = function (n) {
				if (
					null === n ||
					((e = n), -1 === Function.toString.call(e).indexOf("[native code]"))
				)
					return n;
				var e;
				if ("function" != typeof n)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				if (void 0 !== t) {
					if (t.has(n)) return t.get(n);
					t.set(n, o);
				}
				function o() {
					return c(n, arguments, l(this).constructor);
				}
				return (
					(o.prototype = Object.create(n.prototype, {
						constructor: {
							value: o,
							enumerable: !1,
							writable: !0,
							configurable: !0,
						},
					})),
					u(o, n)
				);
			})(n);
		}
		function c(n, t, e) {
			return (c = a()
				? Reflect.construct
				: function (n, t, e) {
						var o = [null];
						o.push.apply(o, t);
						var r = new (Function.bind.apply(n, o))();
						return e && u(r, e.prototype), r;
				  }).apply(null, arguments);
		}
		function a() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return (
					Date.prototype.toString.call(
						Reflect.construct(Date, [], function () {})
					),
					!0
				);
			} catch (n) {
				return !1;
			}
		}
		function u(n, t) {
			return (u =
				Object.setPrototypeOf ||
				function (n, t) {
					return (n.__proto__ = t), n;
				})(n, t);
		}
		function l(n) {
			return (l = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function (n) {
						return n.__proto__ || Object.getPrototypeOf(n);
				  })(n);
		}
		var f = (function (n) {
			!(function (n, t) {
				if ("function" != typeof t && null !== t)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				(n.prototype = Object.create(t && t.prototype, {
					constructor: { value: n, writable: !0, configurable: !0 },
				})),
					t && u(n, t);
			})(s, n);
			var t,
				e,
				i,
				c,
				f =
					((t = s),
					function () {
						var n,
							e = l(t);
						if (a()) {
							var o = l(this).constructor;
							n = Reflect.construct(e, arguments, o);
						} else n = e.apply(this, arguments);
						return r(this, n);
					});
			function s() {
				var n;
				return (
					(function (n, t) {
						if (!(n instanceof t))
							throw new TypeError("Cannot call a class as a function");
					})(this, s),
					((n = f.call(this)).shadowDOM = n.attachShadow({ mode: "open" })),
					n
				);
			}
			return (
				(e = s),
				(i = [
					{
						key: "connectedCallback",
						value: function () {
							this.render();
						},
					},
					{
						key: "render",
						value: function () {
							(this.shadowDOM.innerHTML =
								'\n        <style>\n        .search-container {\n            max-width: 800px;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            padding: 16px;\n            border-radius: 5px;\n            display: flex;\n            position: sticky;\n            top: 10px;\n            background-color: white;\n        }\n        \n        .search-container > input {\n            width: 75%;\n            padding: 16px;\n            border: 0;\n            border-bottom: 1px solid #EA4C89;\n            font-weight: bold;\n        }\n        \n        .search-container > input:focus {\n            outline: 0;\n            border-bottom: 2px solid #3C4F76;\n        }\n        \n        .search-container > input:focus::placeholder {\n            color: #EA4C89;\n        }\n        \n        .search-container >  input::placeholder {\n            color: #3C4F76;\n            font-weight: normal;\n            font-family: \'Poppins\', serif;\n        }\n        \n        .search-container > button {\n            width: 25%;\n            cursor: pointer;\n            margin-left: auto;\n            padding: 16px;\n            background-color: #EA4C89;\n            color: white;\n            border: 0;\n            border-radius: 10px;\n            font-family: \'Poppins\', serif;\n        }\n        \n        .search-container > button:hover {\n            background-color: #3C4F76;\n            color: #EA4C89;\n      \n        \n\n        @media screen and (max-width: 550px){\n            .search-container {\n                flex-direction: column;\n                position: static;\n            }\n        \n            .search-container > input {\n                width: 100%;\n                margin-bottom: 12px;\n            }\n        \n            .search-container > button {\n                width: 100%;\n            }\n        }\n        </style>\n        <div id="search-container" class="search-container">\n            <input placeholder="Ketik Judul yang ingin dicari   .  .  .  .  ." id="searchElement" type="search">\n            <button id="searchButtonElement" type="submit">Cari Tontonan</button>\n        </div>\n        '),
								this.shadowDOM
									.querySelector("#searchButtonElement")
									.addEventListener("click", this._clickEvent);
						},
					},
					{
						key: "clickEvent",
						set: function (n) {
							(this._clickEvent = n), this.render();
						},
					},
					{
						key: "value",
						get: function () {
							return this.shadowDOM.querySelector("#searchElement").value;
						},
					},
				]) && o(e.prototype, i),
				c && o(e, c),
				s
			);
		})(i(HTMLElement));
		customElements.define("search-bar", f);
	},
	function (n, t, e) {
		"use strict";
		e.r(t);
		e(0), e(4), e(5);
		function o(n) {
			return (o =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (n) {
							return typeof n;
					  }
					: function (n) {
							return n &&
								"function" == typeof Symbol &&
								n.constructor === Symbol &&
								n !== Symbol.prototype
								? "symbol"
								: typeof n;
					  })(n);
		}
		function r(n, t) {
			for (var e = 0; e < t.length; e++) {
				var o = t[e];
				(o.enumerable = o.enumerable || !1),
					(o.configurable = !0),
					"value" in o && (o.writable = !0),
					Object.defineProperty(n, o.key, o);
			}
		}
		function i(n, t) {
			return !t || ("object" !== o(t) && "function" != typeof t)
				? (function (n) {
						if (void 0 === n)
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called"
							);
						return n;
				  })(n)
				: t;
		}
		function c(n) {
			var t = "function" == typeof Map ? new Map() : void 0;
			return (c = function (n) {
				if (
					null === n ||
					((e = n), -1 === Function.toString.call(e).indexOf("[native code]"))
				)
					return n;
				var e;
				if ("function" != typeof n)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				if (void 0 !== t) {
					if (t.has(n)) return t.get(n);
					t.set(n, o);
				}
				function o() {
					return a(n, arguments, f(this).constructor);
				}
				return (
					(o.prototype = Object.create(n.prototype, {
						constructor: {
							value: o,
							enumerable: !1,
							writable: !0,
							configurable: !0,
						},
					})),
					l(o, n)
				);
			})(n);
		}
		function a(n, t, e) {
			return (a = u()
				? Reflect.construct
				: function (n, t, e) {
						var o = [null];
						o.push.apply(o, t);
						var r = new (Function.bind.apply(n, o))();
						return e && l(r, e.prototype), r;
				  }).apply(null, arguments);
		}
		function u() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return (
					Date.prototype.toString.call(
						Reflect.construct(Date, [], function () {})
					),
					!0
				);
			} catch (n) {
				return !1;
			}
		}
		function l(n, t) {
			return (l =
				Object.setPrototypeOf ||
				function (n, t) {
					return (n.__proto__ = t), n;
				})(n, t);
		}
		function f(n) {
			return (f = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function (n) {
						return n.__proto__ || Object.getPrototypeOf(n);
				  })(n);
		}
		var s = (function (n) {
			!(function (n, t) {
				if ("function" != typeof t && null !== t)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				(n.prototype = Object.create(t && t.prototype, {
					constructor: { value: n, writable: !0, configurable: !0 },
				})),
					t && l(n, t);
			})(s, n);
			var t,
				e,
				o,
				c,
				a =
					((t = s),
					function () {
						var n,
							e = f(t);
						if (u()) {
							var o = f(this).constructor;
							n = Reflect.construct(e, arguments, o);
						} else n = e.apply(this, arguments);
						return i(this, n);
					});
			function s() {
				var n;
				return (
					(function (n, t) {
						if (!(n instanceof t))
							throw new TypeError("Cannot call a class as a function");
					})(this, s),
					((n = a.call(this)).shadowDOM = n.attachShadow({ mode: "open" })),
					n
				);
			}
			return (
				(e = s),
				(o = [
					{
						key: "render",
						value: function () {
							var n = this;
							(this.shadowDOM.innerHTML = ""),
								this._movies.forEach(function (t) {
									var e = document.createElement("movie-item");
									(e.movie = t), n.shadowDOM.appendChild(e);
								});
						},
					},
					{
						key: "renderError",
						value: function (n) {
							(this.shadowDOM.innerHTML =
								"\n        <style>\n            .placeholder {\n                font-weight: lighter;\n                color: rgba(0, 0, 0, 0.5);\n                -webkit-user-select: none;\n                -moz-user-select: none;\n                -ms-user-select: none;\n                user-select: none;\n        }\n        </style>"),
								(this.shadowDOM.innerHTML += '<h2 class="placeholder">'.concat(
									n,
									"</h2>"
								));
						},
					},
					{
						key: "movies",
						set: function (n) {
							(this._movies = n), this.render();
						},
					},
				]) && r(e.prototype, o),
				c && r(e, c),
				s
			);
		})(c(HTMLElement));
		customElements.define("movie-list", s);
		e(6);
		function p(n, t) {
			for (var e = 0; e < t.length; e++) {
				var o = t[e];
				(o.enumerable = o.enumerable || !1),
					(o.configurable = !0),
					"value" in o && (o.writable = !0),
					Object.defineProperty(n, o.key, o);
			}
		}
		var d = (function () {
				function n() {
					!(function (n, t) {
						if (!(n instanceof t))
							throw new TypeError("Cannot call a class as a function");
					})(this, n);
				}
				var t, e, o;
				return (
					(t = n),
					(o = [
						{
							key: "searchMovie",
							value: function (n) {
								return fetch(
									""
										.concat(
											"https://api.themoviedb.org/3/search/movie?api_key=69eb843bb60cb822d37592963da063e6&language=en-US&query="
										)
										.concat(n)
								)
									.then(function (n) {
										return n.json();
									})
									.then(function (t) {
										return t.results
											? Promise.resolve(t.results)
											: Promise.reject("".concat(n, " is not found"));
									});
							},
						},
					]),
					(e = null) && p(t.prototype, e),
					o && p(t, o),
					n
				);
			})(),
			h = function () {
				var n = document.querySelector("search-bar"),
					t = document.querySelector("movie-list"),
					e = function (n) {
						t.movies = n;
					},
					o = function (n) {
						t.renderError(n);
					};
				n.clickEvent = function () {
					d.searchMovie(n.value).then(e).catch(o);
				};
			};
		document.addEventListener("DOMContentLoaded", h);
	},
]);
