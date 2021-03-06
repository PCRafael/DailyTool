"use strict";
(self.webpackChunkdaily_scrum = self.webpackChunkdaily_scrum || []).push([
  [826],
  {
    3826: (zs, Me, g) => {
      g.r(Me), g.d(Me, { PublicModule: () => Hs });
      var p = g(8583),
        x = g(665),
        Oe = g(9736),
        r = g(3018);

      function C(n) {
        return null != n && "false" != `${n}`;
      }

      function R(n, t = 0) {
        return (function (n) {
          return !isNaN(parseFloat(n)) && !isNaN(Number(n));
        })(n)
          ? Number(n)
          : t;
      }

      function b(n) {
        return n instanceof r.SBq ? n.nativeElement : n;
      }
      var f = g(9765),
        H = g(5917),
        S = g(7574),
        Ae = g(9796),
        Zt = g(9105),
        Re = g(8002);

      function ae(n, t, e, i) {
        return (
          (0, Zt.m)(e) && ((i = e), (e = void 0)),
          i
            ? ae(n, t, e).pipe(
                (0, Re.U)((s) => ((0, Ae.k)(s) ? i(...s) : i(s)))
              )
            : new S.y((s) => {
                ke(
                  n,
                  t,
                  function (a) {
                    s.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : a
                    );
                  },
                  s,
                  e
                );
              })
        );
      }

      function ke(n, t, e, i, s) {
        let o;
        if (
          (function (n) {
            return (
              n &&
              "function" == typeof n.addEventListener &&
              "function" == typeof n.removeEventListener
            );
          })(n)
        ) {
          const a = n;
          n.addEventListener(t, e, s),
            (o = () => a.removeEventListener(t, e, s));
        } else if (
          (function (n) {
            return n && "function" == typeof n.on && "function" == typeof n.off;
          })(n)
        ) {
          const a = n;
          n.on(t, e), (o = () => a.off(t, e));
        } else if (
          (function (n) {
            return (
              n &&
              "function" == typeof n.addListener &&
              "function" == typeof n.removeListener
            );
          })(n)
        ) {
          const a = n;
          n.addListener(t, e), (o = () => a.removeListener(t, e));
        } else {
          if (!n || !n.length) throw new TypeError("Invalid event target");
          for (let a = 0, l = n.length; a < l; a++) ke(n[a], t, e, i, s);
        }
        i.add(o);
      }
      var M = g(5319);
      class jt extends M.w {
        constructor(t, e) {
          super();
        }
        schedule(t, e = 0) {
          return this;
        }
      }
      class $ extends jt {
        constructor(t, e) {
          super(t, e),
            (this.scheduler = t),
            (this.work = e),
            (this.pending = !1);
        }
        schedule(t, e = 0) {
          if (this.closed) return this;
          this.state = t;
          const i = this.id,
            s = this.scheduler;
          return (
            null != i && (this.id = this.recycleAsyncId(s, i, e)),
            (this.pending = !0),
            (this.delay = e),
            (this.id = this.id || this.requestAsyncId(s, this.id, e)),
            this
          );
        }
        requestAsyncId(t, e, i = 0) {
          return setInterval(t.flush.bind(t, this), i);
        }
        recycleAsyncId(t, e, i = 0) {
          if (null !== i && this.delay === i && !1 === this.pending) return e;
          clearInterval(e);
        }
        execute(t, e) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          const i = this._execute(t, e);
          if (i) return i;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(t, e) {
          let s,
            i = !1;
          try {
            this.work(t);
          } catch (o) {
            (i = !0), (s = (!!o && o) || new Error(o));
          }
          if (i) return this.unsubscribe(), s;
        }
        _unsubscribe() {
          const t = this.id,
            e = this.scheduler,
            i = e.actions,
            s = i.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== s && i.splice(s, 1),
            null != t && (this.id = this.recycleAsyncId(e, t, null)),
            (this.delay = null);
        }
      }
      let Le = (() => {
        class n {
          constructor(e, i = n.now) {
            (this.SchedulerAction = e), (this.now = i);
          }
          schedule(e, i = 0, s) {
            return new this.SchedulerAction(this, e).schedule(s, i);
          }
        }
        return (n.now = () => Date.now()), n;
      })();
      class P extends Le {
        constructor(t, e = Le.now) {
          super(t, () =>
            P.delegate && P.delegate !== this ? P.delegate.now() : e()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(t, e = 0, i) {
          return P.delegate && P.delegate !== this
            ? P.delegate.schedule(t, e, i)
            : super.schedule(t, e, i);
        }
        flush(t) {
          const { actions: e } = this;
          if (this.active) return void e.push(t);
          let i;
          this.active = !0;
          do {
            if ((i = t.execute(t.state, t.delay))) break;
          } while ((t = e.shift()));
          if (((this.active = !1), i)) {
            for (; (t = e.shift()); ) t.unsubscribe();
            throw i;
          }
        }
      }
      const Fe = new (class extends P {
        flush(t) {
          (this.active = !0), (this.scheduled = void 0);
          const { actions: e } = this;
          let i,
            s = -1,
            o = e.length;
          t = t || e.shift();
          do {
            if ((i = t.execute(t.state, t.delay))) break;
          } while (++s < o && (t = e.shift()));
          if (((this.active = !1), i)) {
            for (; ++s < o && (t = e.shift()); ) t.unsubscribe();
            throw i;
          }
        }
      })(
        class extends $ {
          constructor(t, e) {
            super(t, e), (this.scheduler = t), (this.work = e);
          }
          requestAsyncId(t, e, i = 0) {
            return null !== i && i > 0
              ? super.requestAsyncId(t, e, i)
              : (t.actions.push(this),
                t.scheduled ||
                  (t.scheduled = requestAnimationFrame(() => t.flush(null))));
          }
          recycleAsyncId(t, e, i = 0) {
            if ((null !== i && i > 0) || (null === i && this.delay > 0))
              return super.recycleAsyncId(t, e, i);
            0 === t.actions.length &&
              (cancelAnimationFrame(e), (t.scheduled = void 0));
          }
        }
      );
      let $t = 1;
      const Xt = Promise.resolve(),
        X = {};

      function Ne(n) {
        return n in X && (delete X[n], !0);
      }
      const Be = {
        setImmediate(n) {
          const t = $t++;
          return (X[t] = !0), Xt.then(() => Ne(t) && n()), t;
        },
        clearImmediate(n) {
          Ne(n);
        },
      };
      new (class extends P {
        flush(t) {
          (this.active = !0), (this.scheduled = void 0);
          const { actions: e } = this;
          let i,
            s = -1,
            o = e.length;
          t = t || e.shift();
          do {
            if ((i = t.execute(t.state, t.delay))) break;
          } while (++s < o && (t = e.shift()));
          if (((this.active = !1), i)) {
            for (; ++s < o && (t = e.shift()); ) t.unsubscribe();
            throw i;
          }
        }
      })(
        class extends $ {
          constructor(t, e) {
            super(t, e), (this.scheduler = t), (this.work = e);
          }
          requestAsyncId(t, e, i = 0) {
            return null !== i && i > 0
              ? super.requestAsyncId(t, e, i)
              : (t.actions.push(this),
                t.scheduled ||
                  (t.scheduled = Be.setImmediate(t.flush.bind(t, null))));
          }
          recycleAsyncId(t, e, i = 0) {
            if ((null !== i && i > 0) || (null === i && this.delay > 0))
              return super.recycleAsyncId(t, e, i);
            0 === t.actions.length &&
              (Be.clearImmediate(e), (t.scheduled = void 0));
          }
        }
      );
      g(7393);
      const z = new P($);
      var L = g(5345);
      class oi {
        constructor(t) {
          this.durationSelector = t;
        }
        call(t, e) {
          return e.subscribe(new ai(t, this.durationSelector));
        }
      }
      class ai extends L.Ds {
        constructor(t, e) {
          super(t), (this.durationSelector = e), (this.hasValue = !1);
        }
        _next(t) {
          if (((this.value = t), (this.hasValue = !0), !this.throttled)) {
            let e;
            try {
              const { durationSelector: s } = this;
              e = s(t);
            } catch (s) {
              return this.destination.error(s);
            }
            const i = (0, L.ft)(e, new L.IY(this));
            !i || i.closed
              ? this.clearThrottle()
              : this.add((this.throttled = i));
          }
        }
        clearThrottle() {
          const { value: t, hasValue: e, throttled: i } = this;
          i && (this.remove(i), (this.throttled = void 0), i.unsubscribe()),
            e &&
              ((this.value = void 0),
              (this.hasValue = !1),
              this.destination.next(t));
        }
        notifyNext() {
          this.clearThrottle();
        }
        notifyComplete() {
          this.clearThrottle();
        }
      }

      function le(n) {
        return !(0, Ae.k)(n) && n - parseFloat(n) + 1 >= 0;
      }
      var Ue = g(4869);

      function ci(n) {
        const { index: t, period: e, subscriber: i } = n;
        if ((i.next(t), !i.closed)) {
          if (-1 === e) return i.complete();
          (n.index = t + 1), this.schedule(n, e);
        }
      }

      function ce(n, t = z) {
        return (function (n) {
          return function (e) {
            return e.lift(new oi(n));
          };
        })(() =>
          (function (n = 0, t, e) {
            let i = -1;
            return (
              le(t)
                ? (i = Number(t) < 1 ? 1 : Number(t))
                : (0, Ue.K)(t) && (e = t),
              (0, Ue.K)(e) || (e = z),
              new S.y((s) => {
                const o = le(n) ? n : +n - e.now();
                return e.schedule(ci, o, {
                  index: 0,
                  period: i,
                  subscriber: s,
                });
              })
            );
          })(n, t)
        );
      }
      var di = g(5435);

      function O(n) {
        return (t) => t.lift(new hi(n));
      }
      class hi {
        constructor(t) {
          this.notifier = t;
        }
        call(t, e) {
          const i = new ui(t),
            s = (0, L.ft)(this.notifier, new L.IY(i));
          return s && !i.seenValue ? (i.add(s), e.subscribe(i)) : i;
        }
      }
      class ui extends L.Ds {
        constructor(t) {
          super(t), (this.seenValue = !1);
        }
        notifyNext() {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
      var G = g(9761),
        ze = g(3190);
      new (class extends P {})(
        class extends $ {
          constructor(t, e) {
            super(t, e), (this.scheduler = t), (this.work = e);
          }
          schedule(t, e = 0) {
            return e > 0
              ? super.schedule(t, e)
              : ((this.delay = e),
                (this.state = t),
                this.scheduler.flush(this),
                this);
          }
          execute(t, e) {
            return e > 0 || this.closed
              ? super.execute(t, e)
              : this._execute(t, e);
          }
          requestAsyncId(t, e, i = 0) {
            return (null !== i && i > 0) || (null === i && this.delay > 0)
              ? super.requestAsyncId(t, e, i)
              : t.flush(this);
          }
        }
      );
      var vi = g(9193);
      class T {
        constructor(t, e, i) {
          (this.kind = t),
            (this.value = e),
            (this.error = i),
            (this.hasValue = "N" === t);
        }
        observe(t) {
          switch (this.kind) {
            case "N":
              return t.next && t.next(this.value);
            case "E":
              return t.error && t.error(this.error);
            case "C":
              return t.complete && t.complete();
          }
        }
        do(t, e, i) {
          switch (this.kind) {
            case "N":
              return t && t(this.value);
            case "E":
              return e && e(this.error);
            case "C":
              return i && i();
          }
        }
        accept(t, e, i) {
          return t && "function" == typeof t.next
            ? this.observe(t)
            : this.do(t, e, i);
        }
        toObservable() {
          switch (this.kind) {
            case "N":
              return (0, H.of)(this.value);
            case "E":
              return (n = this.error), new S.y((e) => e.error(n));
            case "C":
              return (0, vi.c)();
          }
          var n;
          throw new Error("unexpected notification kind value");
        }
        static createNext(t) {
          return void 0 !== t ? new T("N", t) : T.undefinedValueNotification;
        }
        static createError(t) {
          return new T("E", void 0, t);
        }
        static createComplete() {
          return T.completeNotification;
        }
      }
      let de;
      (T.completeNotification = new T("C")),
        (T.undefinedValueNotification = new T("N", void 0)),
        g(7971),
        g(8858);
      try {
        de = "undefined" != typeof Intl && Intl.v8BreakIterator;
      } catch (n) {
        de = !1;
      }
      let W,
        he,
        E = (() => {
          class n {
            constructor(e) {
              (this._platformId = e),
                (this.isBrowser = this._platformId
                  ? (0, p.NF)(this._platformId)
                  : "object" == typeof document && !!document),
                (this.EDGE =
                  this.isBrowser && /(edge)/i.test(navigator.userAgent)),
                (this.TRIDENT =
                  this.isBrowser &&
                  /(msie|trident)/i.test(navigator.userAgent)),
                (this.BLINK =
                  this.isBrowser &&
                  !(!window.chrome && !de) &&
                  "undefined" != typeof CSS &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.WEBKIT =
                  this.isBrowser &&
                  /AppleWebKit/i.test(navigator.userAgent) &&
                  !this.BLINK &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.IOS =
                  this.isBrowser &&
                  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !("MSStream" in window)),
                (this.FIREFOX =
                  this.isBrowser &&
                  /(firefox|minefield)/i.test(navigator.userAgent)),
                (this.ANDROID =
                  this.isBrowser &&
                  /android/i.test(navigator.userAgent) &&
                  !this.TRIDENT),
                (this.SAFARI =
                  this.isBrowser &&
                  /safari/i.test(navigator.userAgent) &&
                  this.WEBKIT);
            }
          }
          return (
            (n.??fac = function (e) {
              return new (e || n)(r.LFG(r.Lbi));
            }),
            (n.??prov = r.Yz7({
              factory: function () {
                return new n(r.LFG(r.Lbi));
              },
              token: n,
              providedIn: "root",
            })),
            n
          );
        })();

      function K(n) {
        return (function () {
          if (null == W && "undefined" != typeof window)
            try {
              window.addEventListener(
                "test",
                null,
                Object.defineProperty({}, "passive", { get: () => (W = !0) })
              );
            } finally {
              W = W || !1;
            }
          return W;
        })()
          ? n
          : !!n.capture;
      }

      function ue(n) {
        if (
          (function () {
            if (null == he) {
              const n = "undefined" != typeof document ? document.head : null;
              he = !(!n || (!n.createShadowRoot && !n.attachShadow));
            }
            return he;
          })()
        ) {
          const t = n.getRootNode ? n.getRootNode() : null;
          if (
            "undefined" != typeof ShadowRoot &&
            ShadowRoot &&
            t instanceof ShadowRoot
          )
            return t;
        }
        return null;
      }

      function D(n) {
        return n.composedPath ? n.composedPath()[0] : n.target;
      }
      const Ze = new r.OlP("cdk-dir-doc", {
        providedIn: "root",
        factory: function () {
          return (0, r.f3M)(p.K0);
        },
      });
      let q = (() => {
          class n {
            constructor(e) {
              if (((this.value = "ltr"), (this.change = new r.vpe()), e)) {
                const s = e.documentElement ? e.documentElement.dir : null,
                  o = (e.body ? e.body.dir : null) || s;
                this.value = "ltr" === o || "rtl" === o ? o : "ltr";
              }
            }
            ngOnDestroy() {
              this.change.complete();
            }
          }
          return (
            (n.??fac = function (e) {
              return new (e || n)(r.LFG(Ze, 8));
            }),
            (n.??prov = r.Yz7({
              factory: function () {
                return new n(r.LFG(Ze, 8));
              },
              token: n,
              providedIn: "root",
            })),
            n
          );
        })(),
        pe = (() => {
          class n {
            constructor(e, i, s) {
              (this._ngZone = e),
                (this._platform = i),
                (this._scrolled = new f.xQ()),
                (this._globalSubscription = null),
                (this._scrolledCount = 0),
                (this.scrollContainers = new Map()),
                (this._document = s);
            }
            register(e) {
              this.scrollContainers.has(e) ||
                this.scrollContainers.set(
                  e,
                  e.elementScrolled().subscribe(() => this._scrolled.next(e))
                );
            }
            deregister(e) {
              const i = this.scrollContainers.get(e);
              i && (i.unsubscribe(), this.scrollContainers.delete(e));
            }
            scrolled(e = 20) {
              return this._platform.isBrowser
                ? new S.y((i) => {
                    this._globalSubscription || this._addGlobalListener();
                    const s =
                      e > 0
                        ? this._scrolled.pipe(ce(e)).subscribe(i)
                        : this._scrolled.subscribe(i);
                    return (
                      this._scrolledCount++,
                      () => {
                        s.unsubscribe(),
                          this._scrolledCount--,
                          this._scrolledCount || this._removeGlobalListener();
                      }
                    );
                  })
                : (0, H.of)();
            }
            ngOnDestroy() {
              this._removeGlobalListener(),
                this.scrollContainers.forEach((e, i) => this.deregister(i)),
                this._scrolled.complete();
            }
            ancestorScrolled(e, i) {
              const s = this.getAncestorScrollContainers(e);
              return this.scrolled(i).pipe(
                (0, di.h)((o) => !o || s.indexOf(o) > -1)
              );
            }
            getAncestorScrollContainers(e) {
              const i = [];
              return (
                this.scrollContainers.forEach((s, o) => {
                  this._scrollableContainsElement(o, e) && i.push(o);
                }),
                i
              );
            }
            _getWindow() {
              return this._document.defaultView || window;
            }
            _scrollableContainsElement(e, i) {
              let s = b(i),
                o = e.getElementRef().nativeElement;
              do {
                if (s == o) return !0;
              } while ((s = s.parentElement));
              return !1;
            }
            _addGlobalListener() {
              this._globalSubscription = this._ngZone.runOutsideAngular(() =>
                ae(this._getWindow().document, "scroll").subscribe(() =>
                  this._scrolled.next()
                )
              );
            }
            _removeGlobalListener() {
              this._globalSubscription &&
                (this._globalSubscription.unsubscribe(),
                (this._globalSubscription = null));
            }
          }
          return (
            (n.??fac = function (e) {
              return new (e || n)(r.LFG(r.R0b), r.LFG(E), r.LFG(p.K0, 8));
            }),
            (n.??prov = r.Yz7({
              factory: function () {
                return new n(r.LFG(r.R0b), r.LFG(E), r.LFG(p.K0, 8));
              },
              token: n,
              providedIn: "root",
            })),
            n
          );
        })(),
        fe = (() => {
          class n {
            constructor(e, i, s) {
              (this._platform = e),
                (this._change = new f.xQ()),
                (this._changeListener = (o) => {
                  this._change.next(o);
                }),
                (this._document = s),
                i.runOutsideAngular(() => {
                  if (e.isBrowser) {
                    const o = this._getWindow();
                    o.addEventListener("resize", this._changeListener),
                      o.addEventListener(
                        "orientationchange",
                        this._changeListener
                      );
                  }
                  this.change().subscribe(() => (this._viewportSize = null));
                });
            }
            ngOnDestroy() {
              if (this._platform.isBrowser) {
                const e = this._getWindow();
                e.removeEventListener("resize", this._changeListener),
                  e.removeEventListener(
                    "orientationchange",
                    this._changeListener
                  );
              }
              this._change.complete();
            }
            getViewportSize() {
              this._viewportSize || this._updateViewportSize();
              const e = {
                width: this._viewportSize.width,
                height: this._viewportSize.height,
              };
              return this._platform.isBrowser || (this._viewportSize = null), e;
            }
            getViewportRect() {
              const e = this.getViewportScrollPosition(),
                { width: i, height: s } = this.getViewportSize();
              return {
                top: e.top,
                left: e.left,
                bottom: e.top + s,
                right: e.left + i,
                height: s,
                width: i,
              };
            }
            getViewportScrollPosition() {
              if (!this._platform.isBrowser) return { top: 0, left: 0 };
              const e = this._document,
                i = this._getWindow(),
                s = e.documentElement,
                o = s.getBoundingClientRect();
              return {
                top:
                  -o.top || e.body.scrollTop || i.scrollY || s.scrollTop || 0,
                left:
                  -o.left ||
                  e.body.scrollLeft ||
                  i.scrollX ||
                  s.scrollLeft ||
                  0,
              };
            }
            change(e = 20) {
              return e > 0 ? this._change.pipe(ce(e)) : this._change;
            }
            _getWindow() {
              return this._document.defaultView || window;
            }
            _updateViewportSize() {
              const e = this._getWindow();
              this._viewportSize = this._platform.isBrowser
                ? { width: e.innerWidth, height: e.innerHeight }
                : { width: 0, height: 0 };
            }
          }
          return (
            (n.??fac = function (e) {
              return new (e || n)(r.LFG(E), r.LFG(r.R0b), r.LFG(p.K0, 8));
            }),
            (n.??prov = r.Yz7({
              factory: function () {
                return new n(r.LFG(E), r.LFG(r.R0b), r.LFG(p.K0, 8));
              },
              token: n,
              providedIn: "root",
            })),
            n
          );
        })(),
        ge = (() => {
          class n {}
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??mod = r.oAB({ type: n })),
            (n.??inj = r.cJS({})),
            n
          );
        })();
      g(6215);
      var me = g(5257);

      function Rn(n) {
        const { subscriber: t, counter: e, period: i } = n;
        t.next(e),
          this.schedule({ subscriber: t, counter: e + 1, period: i }, i);
      }
      "undefined" != typeof Element && Element;
      var pt = g(6682),
        kn = g(3342);

      function ve(n, t, e) {
        for (let i in t)
          if (t.hasOwnProperty(i)) {
            const s = t[i];
            s
              ? n.setProperty(
                  i,
                  s,
                  (null == e ? void 0 : e.has(i)) ? "important" : ""
                )
              : n.removeProperty(i);
          }
        return n;
      }

      function B(n, t) {
        const e = t ? "" : "none";
        ve(n.style, {
          "touch-action": t ? "" : "none",
          "-webkit-user-drag": t ? "" : "none",
          "-webkit-tap-highlight-color": t ? "" : "transparent",
          "user-select": e,
          "-ms-user-select": e,
          "-webkit-user-select": e,
          "-moz-user-select": e,
        });
      }

      function ft(n, t, e) {
        ve(
          n.style,
          {
            position: t ? "" : "fixed",
            top: t ? "" : "0",
            opacity: t ? "" : "0",
            left: t ? "" : "-999em",
          },
          e
        );
      }

      function ne(n, t) {
        return t && "none" != t ? n + " " + t : n;
      }

      function gt(n) {
        const t = n.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
        return parseFloat(n) * t;
      }

      function ye(n, t) {
        return n
          .getPropertyValue(t)
          .split(",")
          .map((i) => i.trim());
      }

      function Ce(n) {
        const t = n.getBoundingClientRect();
        return {
          top: t.top,
          right: t.right,
          bottom: t.bottom,
          left: t.left,
          width: t.width,
          height: t.height,
        };
      }

      function Se(n, t, e) {
        const { top: i, bottom: s, left: o, right: a } = n;
        return e >= i && e <= s && t >= o && t <= a;
      }

      function j(n, t, e) {
        (n.top += t),
          (n.bottom = n.top + n.height),
          (n.left += e),
          (n.right = n.left + n.width);
      }

      function mt(n, t, e, i) {
        const { top: s, right: o, bottom: a, left: l, width: c, height: d } = n,
          h = c * t,
          u = d * t;
        return i > s - u && i < a + u && e > l - h && e < o + h;
      }
      class _t {
        constructor(t, e) {
          (this._document = t),
            (this._viewportRuler = e),
            (this.positions = new Map());
        }
        clear() {
          this.positions.clear();
        }
        cache(t) {
          this.clear(),
            this.positions.set(this._document, {
              scrollPosition: this._viewportRuler.getViewportScrollPosition(),
            }),
            t.forEach((e) => {
              this.positions.set(e, {
                scrollPosition: { top: e.scrollTop, left: e.scrollLeft },
                clientRect: Ce(e),
              });
            });
        }
        handleScroll(t) {
          const e = D(t),
            i = this.positions.get(e);
          if (!i) return null;
          const s = e === this._document ? e.documentElement : e,
            o = i.scrollPosition;
          let a, l;
          if (e === this._document) {
            const h = this._viewportRuler.getViewportScrollPosition();
            (a = h.top), (l = h.left);
          } else (a = e.scrollTop), (l = e.scrollLeft);
          const c = o.top - a,
            d = o.left - l;
          return (
            this.positions.forEach((h, u) => {
              h.clientRect && e !== u && s.contains(u) && j(h.clientRect, c, d);
            }),
            (o.top = a),
            (o.left = l),
            { top: c, left: d }
          );
        }
      }

      function bt(n) {
        const t = n.cloneNode(!0),
          e = t.querySelectorAll("[id]"),
          i = n.nodeName.toLowerCase();
        t.removeAttribute("id");
        for (let s = 0; s < e.length; s++) e[s].removeAttribute("id");
        return (
          "canvas" === i
            ? Ct(n, t)
            : ("input" === i || "select" === i || "textarea" === i) && yt(n, t),
          vt("canvas", n, t, Ct),
          vt("input, textarea, select", n, t, yt),
          t
        );
      }

      function vt(n, t, e, i) {
        const s = t.querySelectorAll(n);
        if (s.length) {
          const o = e.querySelectorAll(n);
          for (let a = 0; a < s.length; a++) i(s[a], o[a]);
        }
      }
      let Fn = 0;

      function yt(n, t) {
        "file" !== t.type && (t.value = n.value),
          "radio" === t.type &&
            t.name &&
            (t.name = `mat-clone-${t.name}-${Fn++}`);
      }

      function Ct(n, t) {
        const e = t.getContext("2d");
        if (e)
          try {
            e.drawImage(n, 0, 0);
          } catch (i) {}
      }
      const St = K({ passive: !0 }),
        Tt = K({ passive: !1 }),
        Te = new Set(["position"]);
      class Bn {
        constructor(t, e, i, s, o, a) {
          (this._config = e),
            (this._document = i),
            (this._ngZone = s),
            (this._viewportRuler = o),
            (this._dragDropRegistry = a),
            (this._passiveTransform = { x: 0, y: 0 }),
            (this._activeTransform = { x: 0, y: 0 }),
            (this._hasStartedDragging = !1),
            (this._moveEvents = new f.xQ()),
            (this._pointerMoveSubscription = M.w.EMPTY),
            (this._pointerUpSubscription = M.w.EMPTY),
            (this._scrollSubscription = M.w.EMPTY),
            (this._resizeSubscription = M.w.EMPTY),
            (this._boundaryElement = null),
            (this._nativeInteractionsEnabled = !0),
            (this._handles = []),
            (this._disabledHandles = new Set()),
            (this._direction = "ltr"),
            (this.dragStartDelay = 0),
            (this._disabled = !1),
            (this.beforeStarted = new f.xQ()),
            (this.started = new f.xQ()),
            (this.released = new f.xQ()),
            (this.ended = new f.xQ()),
            (this.entered = new f.xQ()),
            (this.exited = new f.xQ()),
            (this.dropped = new f.xQ()),
            (this.moved = this._moveEvents),
            (this._pointerDown = (l) => {
              if ((this.beforeStarted.next(), this._handles.length)) {
                const c = this._handles.find((d) => {
                  const h = D(l);
                  return !!h && (h === d || d.contains(h));
                });
                c &&
                  !this._disabledHandles.has(c) &&
                  !this.disabled &&
                  this._initializeDragSequence(c, l);
              } else
                this.disabled ||
                  this._initializeDragSequence(this._rootElement, l);
            }),
            (this._pointerMove = (l) => {
              const c = this._getPointerPositionOnPage(l);
              if (!this._hasStartedDragging) {
                if (
                  Math.abs(c.x - this._pickupPositionOnPage.x) +
                    Math.abs(c.y - this._pickupPositionOnPage.y) >=
                  this._config.dragStartThreshold
                ) {
                  const y =
                      Date.now() >=
                      this._dragStartTime + this._getDragStartDelay(l),
                    I = this._dropContainer;
                  if (!y) return void this._endDragSequence(l);
                  (!I || (!I.isDragging() && !I.isReceiving())) &&
                    (l.preventDefault(),
                    (this._hasStartedDragging = !0),
                    this._ngZone.run(() => this._startDragSequence(l)));
                }
                return;
              }
              this._boundaryElement &&
                (!this._previewRect ||
                  (!this._previewRect.width && !this._previewRect.height)) &&
                (this._previewRect = (
                  this._preview || this._rootElement
                ).getBoundingClientRect()),
                l.preventDefault();
              const d = this._getConstrainedPointerPosition(c);
              if (
                ((this._hasMoved = !0),
                (this._lastKnownPointerPosition = c),
                this._updatePointerDirectionDelta(d),
                this._dropContainer)
              )
                this._updateActiveDropContainer(d, c);
              else {
                const h = this._activeTransform;
                (h.x =
                  d.x -
                  this._pickupPositionOnPage.x +
                  this._passiveTransform.x),
                  (h.y =
                    d.y -
                    this._pickupPositionOnPage.y +
                    this._passiveTransform.y),
                  this._applyRootElementTransform(h.x, h.y),
                  "undefined" != typeof SVGElement &&
                    this._rootElement instanceof SVGElement &&
                    this._rootElement.setAttribute(
                      "transform",
                      `translate(${h.x} ${h.y})`
                    );
              }
              this._moveEvents.observers.length &&
                this._ngZone.run(() => {
                  this._moveEvents.next({
                    source: this,
                    pointerPosition: d,
                    event: l,
                    distance: this._getDragDistance(d),
                    delta: this._pointerDirectionDelta,
                  });
                });
            }),
            (this._pointerUp = (l) => {
              this._endDragSequence(l);
            }),
            this.withRootElement(t).withParent(e.parentDragRef || null),
            (this._parentPositions = new _t(i, o)),
            a.registerDragItem(this);
        }
        get disabled() {
          return (
            this._disabled ||
            !(!this._dropContainer || !this._dropContainer.disabled)
          );
        }
        set disabled(t) {
          const e = C(t);
          e !== this._disabled &&
            ((this._disabled = e),
            this._toggleNativeDragInteractions(),
            this._handles.forEach((i) => B(i, e)));
        }
        getPlaceholderElement() {
          return this._placeholder;
        }
        getRootElement() {
          return this._rootElement;
        }
        getVisibleElement() {
          return this.isDragging()
            ? this.getPlaceholderElement()
            : this.getRootElement();
        }
        withHandles(t) {
          (this._handles = t.map((i) => b(i))),
            this._handles.forEach((i) => B(i, this.disabled)),
            this._toggleNativeDragInteractions();
          const e = new Set();
          return (
            this._disabledHandles.forEach((i) => {
              this._handles.indexOf(i) > -1 && e.add(i);
            }),
            (this._disabledHandles = e),
            this
          );
        }
        withPreviewTemplate(t) {
          return (this._previewTemplate = t), this;
        }
        withPlaceholderTemplate(t) {
          return (this._placeholderTemplate = t), this;
        }
        withRootElement(t) {
          const e = b(t);
          return (
            e !== this._rootElement &&
              (this._rootElement &&
                this._removeRootElementListeners(this._rootElement),
              this._ngZone.runOutsideAngular(() => {
                e.addEventListener("mousedown", this._pointerDown, Tt),
                  e.addEventListener("touchstart", this._pointerDown, St);
              }),
              (this._initialTransform = void 0),
              (this._rootElement = e)),
            "undefined" != typeof SVGElement &&
              this._rootElement instanceof SVGElement &&
              (this._ownerSVGElement = this._rootElement.ownerSVGElement),
            this
          );
        }
        withBoundaryElement(t) {
          return (
            (this._boundaryElement = t ? b(t) : null),
            this._resizeSubscription.unsubscribe(),
            t &&
              (this._resizeSubscription = this._viewportRuler
                .change(10)
                .subscribe(() => this._containInsideBoundaryOnResize())),
            this
          );
        }
        withParent(t) {
          return (this._parentDragRef = t), this;
        }
        dispose() {
          this._removeRootElementListeners(this._rootElement),
            this.isDragging() && re(this._rootElement),
            re(this._anchor),
            this._destroyPreview(),
            this._destroyPlaceholder(),
            this._dragDropRegistry.removeDragItem(this),
            this._removeSubscriptions(),
            this.beforeStarted.complete(),
            this.started.complete(),
            this.released.complete(),
            this.ended.complete(),
            this.entered.complete(),
            this.exited.complete(),
            this.dropped.complete(),
            this._moveEvents.complete(),
            (this._handles = []),
            this._disabledHandles.clear(),
            (this._dropContainer = void 0),
            this._resizeSubscription.unsubscribe(),
            this._parentPositions.clear(),
            (this._boundaryElement =
              this._rootElement =
              this._ownerSVGElement =
              this._placeholderTemplate =
              this._previewTemplate =
              this._anchor =
              this._parentDragRef =
                null);
        }
        isDragging() {
          return (
            this._hasStartedDragging && this._dragDropRegistry.isDragging(this)
          );
        }
        reset() {
          (this._rootElement.style.transform = this._initialTransform || ""),
            (this._activeTransform = { x: 0, y: 0 }),
            (this._passiveTransform = { x: 0, y: 0 });
        }
        disableHandle(t) {
          !this._disabledHandles.has(t) &&
            this._handles.indexOf(t) > -1 &&
            (this._disabledHandles.add(t), B(t, !0));
        }
        enableHandle(t) {
          this._disabledHandles.has(t) &&
            (this._disabledHandles.delete(t), B(t, this.disabled));
        }
        withDirection(t) {
          return (this._direction = t), this;
        }
        _withDropContainer(t) {
          this._dropContainer = t;
        }
        getFreeDragPosition() {
          const t = this.isDragging()
            ? this._activeTransform
            : this._passiveTransform;
          return { x: t.x, y: t.y };
        }
        setFreeDragPosition(t) {
          return (
            (this._activeTransform = { x: 0, y: 0 }),
            (this._passiveTransform.x = t.x),
            (this._passiveTransform.y = t.y),
            this._dropContainer || this._applyRootElementTransform(t.x, t.y),
            this
          );
        }
        withPreviewContainer(t) {
          return (this._previewContainer = t), this;
        }
        _sortFromLastPointerPosition() {
          const t = this._lastKnownPointerPosition;
          t &&
            this._dropContainer &&
            this._updateActiveDropContainer(
              this._getConstrainedPointerPosition(t),
              t
            );
        }
        _removeSubscriptions() {
          this._pointerMoveSubscription.unsubscribe(),
            this._pointerUpSubscription.unsubscribe(),
            this._scrollSubscription.unsubscribe();
        }
        _destroyPreview() {
          this._preview && re(this._preview),
            this._previewRef && this._previewRef.destroy(),
            (this._preview = this._previewRef = null);
        }
        _destroyPlaceholder() {
          this._placeholder && re(this._placeholder),
            this._placeholderRef && this._placeholderRef.destroy(),
            (this._placeholder = this._placeholderRef = null);
        }
        _endDragSequence(t) {
          if (
            this._dragDropRegistry.isDragging(this) &&
            (this._removeSubscriptions(),
            this._dragDropRegistry.stopDragging(this),
            this._toggleNativeDragInteractions(),
            this._handles &&
              (this._rootElement.style.webkitTapHighlightColor =
                this._rootElementTapHighlight),
            this._hasStartedDragging)
          )
            if ((this.released.next({ source: this }), this._dropContainer))
              this._dropContainer._stopScrolling(),
                this._animatePreviewToPlaceholder().then(() => {
                  this._cleanupDragArtifacts(t),
                    this._cleanupCachedDimensions(),
                    this._dragDropRegistry.stopDragging(this);
                });
            else {
              this._passiveTransform.x = this._activeTransform.x;
              const e = this._getPointerPositionOnPage(t);
              (this._passiveTransform.y = this._activeTransform.y),
                this._ngZone.run(() => {
                  this.ended.next({
                    source: this,
                    distance: this._getDragDistance(e),
                    dropPoint: e,
                  });
                }),
                this._cleanupCachedDimensions(),
                this._dragDropRegistry.stopDragging(this);
            }
        }
        _startDragSequence(t) {
          Q(t) && (this._lastTouchEventTime = Date.now()),
            this._toggleNativeDragInteractions();
          const e = this._dropContainer;
          if (e) {
            const i = this._rootElement,
              s = i.parentNode,
              o = (this._placeholder = this._createPlaceholderElement()),
              a = (this._anchor =
                this._anchor || this._document.createComment("")),
              l = this._getShadowRoot();
            s.insertBefore(a, i),
              (this._initialTransform = i.style.transform || ""),
              (this._preview = this._createPreviewElement()),
              ft(i, !1, Te),
              this._document.body.appendChild(s.replaceChild(o, i)),
              this._getPreviewInsertionPoint(s, l).appendChild(this._preview),
              this.started.next({ source: this }),
              e.start(),
              (this._initialContainer = e),
              (this._initialIndex = e.getItemIndex(this));
          } else
            this.started.next({ source: this }),
              (this._initialContainer = this._initialIndex = void 0);
          this._parentPositions.cache(e ? e.getScrollableParents() : []);
        }
        _initializeDragSequence(t, e) {
          this._parentDragRef && e.stopPropagation();
          const i = this.isDragging(),
            s = Q(e),
            o = !s && 0 !== e.button,
            a = this._rootElement,
            l = D(e),
            c =
              !s &&
              this._lastTouchEventTime &&
              this._lastTouchEventTime + 800 > Date.now(),
            d = s
              ? (function (n) {
                  const t =
                    (n.touches && n.touches[0]) ||
                    (n.changedTouches && n.changedTouches[0]);
                  return !(
                    !t ||
                    -1 !== t.identifier ||
                    (null != t.radiusX && 1 !== t.radiusX) ||
                    (null != t.radiusY && 1 !== t.radiusY)
                  );
                })(e)
              : 0 === (n = e).offsetX && 0 === n.offsetY;
          var n;
          if (
            (l && l.draggable && "mousedown" === e.type && e.preventDefault(),
            i || o || c || d)
          )
            return;
          this._handles.length &&
            ((this._rootElementTapHighlight =
              a.style.webkitTapHighlightColor || ""),
            (a.style.webkitTapHighlightColor = "transparent")),
            (this._hasStartedDragging = this._hasMoved = !1),
            this._removeSubscriptions(),
            (this._pointerMoveSubscription =
              this._dragDropRegistry.pointerMove.subscribe(this._pointerMove)),
            (this._pointerUpSubscription =
              this._dragDropRegistry.pointerUp.subscribe(this._pointerUp)),
            (this._scrollSubscription = this._dragDropRegistry
              .scrolled(this._getShadowRoot())
              .subscribe((_) => this._updateOnScroll(_))),
            this._boundaryElement &&
              (this._boundaryRect = Ce(this._boundaryElement));
          const h = this._previewTemplate;
          this._pickupPositionInElement =
            h && h.template && !h.matchSize
              ? { x: 0, y: 0 }
              : this._getPointerPositionInElement(t, e);
          const u =
            (this._pickupPositionOnPage =
            this._lastKnownPointerPosition =
              this._getPointerPositionOnPage(e));
          (this._pointerDirectionDelta = { x: 0, y: 0 }),
            (this._pointerPositionAtLastDirectionChange = { x: u.x, y: u.y }),
            (this._dragStartTime = Date.now()),
            this._dragDropRegistry.startDragging(this, e);
        }
        _cleanupDragArtifacts(t) {
          ft(this._rootElement, !0, Te),
            this._anchor.parentNode.replaceChild(
              this._rootElement,
              this._anchor
            ),
            this._destroyPreview(),
            this._destroyPlaceholder(),
            (this._boundaryRect =
              this._previewRect =
              this._initialTransform =
                void 0),
            this._ngZone.run(() => {
              const e = this._dropContainer,
                i = e.getItemIndex(this),
                s = this._getPointerPositionOnPage(t),
                o = this._getDragDistance(s),
                a = e._isOverContainer(s.x, s.y);
              this.ended.next({ source: this, distance: o, dropPoint: s }),
                this.dropped.next({
                  item: this,
                  currentIndex: i,
                  previousIndex: this._initialIndex,
                  container: e,
                  previousContainer: this._initialContainer,
                  isPointerOverContainer: a,
                  distance: o,
                  dropPoint: s,
                }),
                e.drop(
                  this,
                  i,
                  this._initialIndex,
                  this._initialContainer,
                  a,
                  o,
                  s
                ),
                (this._dropContainer = this._initialContainer);
            });
        }
        _updateActiveDropContainer({ x: t, y: e }, { x: i, y: s }) {
          let o = this._initialContainer._getSiblingContainerFromPosition(
            this,
            t,
            e
          );
          !o &&
            this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(t, e) &&
            (o = this._initialContainer),
            o &&
              o !== this._dropContainer &&
              this._ngZone.run(() => {
                this.exited.next({
                  item: this,
                  container: this._dropContainer,
                }),
                  this._dropContainer.exit(this),
                  (this._dropContainer = o),
                  this._dropContainer.enter(
                    this,
                    t,
                    e,
                    o === this._initialContainer && o.sortingDisabled
                      ? this._initialIndex
                      : void 0
                  ),
                  this.entered.next({
                    item: this,
                    container: o,
                    currentIndex: o.getItemIndex(this),
                  });
              }),
            this.isDragging() &&
              (this._dropContainer._startScrollingIfNecessary(i, s),
              this._dropContainer._sortItem(
                this,
                t,
                e,
                this._pointerDirectionDelta
              ),
              this._applyPreviewTransform(
                t - this._pickupPositionInElement.x,
                e - this._pickupPositionInElement.y
              ));
        }
        _createPreviewElement() {
          const t = this._previewTemplate,
            e = this.previewClass,
            i = t ? t.template : null;
          let s;
          if (i && t) {
            const o = t.matchSize
                ? this._rootElement.getBoundingClientRect()
                : null,
              a = t.viewContainer.createEmbeddedView(i, t.context);
            a.detectChanges(),
              (s = wt(a, this._document)),
              (this._previewRef = a),
              t.matchSize
                ? Pt(s, o)
                : (s.style.transform = se(
                    this._pickupPositionOnPage.x,
                    this._pickupPositionOnPage.y
                  ));
          } else {
            const o = this._rootElement;
            (s = bt(o)),
              Pt(s, o.getBoundingClientRect()),
              this._initialTransform &&
                (s.style.transform = this._initialTransform);
          }
          return (
            ve(
              s.style,
              {
                "pointer-events": "none",
                margin: "0",
                position: "fixed",
                top: "0",
                left: "0",
                "z-index": `${this._config.zIndex || 1e3}`,
              },
              Te
            ),
            B(s, !1),
            s.classList.add("cdk-drag-preview"),
            s.setAttribute("dir", this._direction),
            e &&
              (Array.isArray(e)
                ? e.forEach((o) => s.classList.add(o))
                : s.classList.add(e)),
            s
          );
        }
        _animatePreviewToPlaceholder() {
          if (!this._hasMoved) return Promise.resolve();
          const t = this._placeholder.getBoundingClientRect();
          this._preview.classList.add("cdk-drag-animating"),
            this._applyPreviewTransform(t.left, t.top);
          const e = (function (n) {
            const t = getComputedStyle(n),
              e = ye(t, "transition-property"),
              i = e.find((l) => "transform" === l || "all" === l);
            if (!i) return 0;
            const s = e.indexOf(i),
              o = ye(t, "transition-duration"),
              a = ye(t, "transition-delay");
            return gt(o[s]) + gt(a[s]);
          })(this._preview);
          return 0 === e
            ? Promise.resolve()
            : this._ngZone.runOutsideAngular(
                () =>
                  new Promise((i) => {
                    const s = (a) => {
                        (!a ||
                          (D(a) === this._preview &&
                            "transform" === a.propertyName)) &&
                          (this._preview.removeEventListener(
                            "transitionend",
                            s
                          ),
                          i(),
                          clearTimeout(o));
                      },
                      o = setTimeout(s, 1.5 * e);
                    this._preview.addEventListener("transitionend", s);
                  })
              );
        }
        _createPlaceholderElement() {
          const t = this._placeholderTemplate,
            e = t ? t.template : null;
          let i;
          return (
            e
              ? ((this._placeholderRef = t.viewContainer.createEmbeddedView(
                  e,
                  t.context
                )),
                this._placeholderRef.detectChanges(),
                (i = wt(this._placeholderRef, this._document)))
              : (i = bt(this._rootElement)),
            i.classList.add("cdk-drag-placeholder"),
            i
          );
        }
        _getPointerPositionInElement(t, e) {
          const i = this._rootElement.getBoundingClientRect(),
            s = t === this._rootElement ? null : t,
            o = s ? s.getBoundingClientRect() : i,
            a = Q(e) ? e.targetTouches[0] : e,
            l = this._getViewportScrollPosition();
          return {
            x: o.left - i.left + (a.pageX - o.left - l.left),
            y: o.top - i.top + (a.pageY - o.top - l.top),
          };
        }
        _getPointerPositionOnPage(t) {
          const e = this._getViewportScrollPosition(),
            i = Q(t)
              ? t.touches[0] || t.changedTouches[0] || { pageX: 0, pageY: 0 }
              : t,
            s = i.pageX - e.left,
            o = i.pageY - e.top;
          if (this._ownerSVGElement) {
            const a = this._ownerSVGElement.getScreenCTM();
            if (a) {
              const l = this._ownerSVGElement.createSVGPoint();
              return (l.x = s), (l.y = o), l.matrixTransform(a.inverse());
            }
          }
          return { x: s, y: o };
        }
        _getConstrainedPointerPosition(t) {
          const e = this._dropContainer ? this._dropContainer.lockAxis : null;
          let { x: i, y: s } = this.constrainPosition
            ? this.constrainPosition(t, this)
            : t;
          if (
            ("x" === this.lockAxis || "x" === e
              ? (s = this._pickupPositionOnPage.y)
              : ("y" === this.lockAxis || "y" === e) &&
                (i = this._pickupPositionOnPage.x),
            this._boundaryRect)
          ) {
            const { x: o, y: a } = this._pickupPositionInElement,
              l = this._boundaryRect,
              c = this._previewRect,
              d = l.top + a,
              h = l.bottom - (c.height - a);
            (i = Et(i, l.left + o, l.right - (c.width - o))), (s = Et(s, d, h));
          }
          return { x: i, y: s };
        }
        _updatePointerDirectionDelta(t) {
          const { x: e, y: i } = t,
            s = this._pointerDirectionDelta,
            o = this._pointerPositionAtLastDirectionChange,
            a = Math.abs(e - o.x),
            l = Math.abs(i - o.y);
          return (
            a > this._config.pointerDirectionChangeThreshold &&
              ((s.x = e > o.x ? 1 : -1), (o.x = e)),
            l > this._config.pointerDirectionChangeThreshold &&
              ((s.y = i > o.y ? 1 : -1), (o.y = i)),
            s
          );
        }
        _toggleNativeDragInteractions() {
          if (!this._rootElement || !this._handles) return;
          const t = this._handles.length > 0 || !this.isDragging();
          t !== this._nativeInteractionsEnabled &&
            ((this._nativeInteractionsEnabled = t), B(this._rootElement, t));
        }
        _removeRootElementListeners(t) {
          t.removeEventListener("mousedown", this._pointerDown, Tt),
            t.removeEventListener("touchstart", this._pointerDown, St);
        }
        _applyRootElementTransform(t, e) {
          const i = se(t, e);
          null == this._initialTransform &&
            (this._initialTransform =
              this._rootElement.style.transform &&
              "none" != this._rootElement.style.transform
                ? this._rootElement.style.transform
                : ""),
            (this._rootElement.style.transform = ne(i, this._initialTransform));
        }
        _applyPreviewTransform(t, e) {
          var i;
          const s = (
              null === (i = this._previewTemplate) || void 0 === i
                ? void 0
                : i.template
            )
              ? void 0
              : this._initialTransform,
            o = se(t, e);
          this._preview.style.transform = ne(o, s);
        }
        _getDragDistance(t) {
          const e = this._pickupPositionOnPage;
          return e ? { x: t.x - e.x, y: t.y - e.y } : { x: 0, y: 0 };
        }
        _cleanupCachedDimensions() {
          (this._boundaryRect = this._previewRect = void 0),
            this._parentPositions.clear();
        }
        _containInsideBoundaryOnResize() {
          let { x: t, y: e } = this._passiveTransform;
          if (
            (0 === t && 0 === e) ||
            this.isDragging() ||
            !this._boundaryElement
          )
            return;
          const i = this._boundaryElement.getBoundingClientRect(),
            s = this._rootElement.getBoundingClientRect();
          if (
            (0 === i.width && 0 === i.height) ||
            (0 === s.width && 0 === s.height)
          )
            return;
          const o = i.left - s.left,
            a = s.right - i.right,
            l = i.top - s.top,
            c = s.bottom - i.bottom;
          i.width > s.width ? (o > 0 && (t += o), a > 0 && (t -= a)) : (t = 0),
            i.height > s.height
              ? (l > 0 && (e += l), c > 0 && (e -= c))
              : (e = 0),
            (t !== this._passiveTransform.x ||
              e !== this._passiveTransform.y) &&
              this.setFreeDragPosition({ y: e, x: t });
        }
        _getDragStartDelay(t) {
          const e = this.dragStartDelay;
          return "number" == typeof e ? e : Q(t) ? e.touch : e ? e.mouse : 0;
        }
        _updateOnScroll(t) {
          const e = this._parentPositions.handleScroll(t);
          if (e) {
            const i = D(t);
            this._boundaryRect &&
              (i === this._document ||
                (i !== this._boundaryElement &&
                  i.contains(this._boundaryElement))) &&
              j(this._boundaryRect, e.top, e.left),
              (this._pickupPositionOnPage.x += e.left),
              (this._pickupPositionOnPage.y += e.top),
              this._dropContainer ||
                ((this._activeTransform.x -= e.left),
                (this._activeTransform.y -= e.top),
                this._applyRootElementTransform(
                  this._activeTransform.x,
                  this._activeTransform.y
                ));
          }
        }
        _getViewportScrollPosition() {
          const t = this._parentPositions.positions.get(this._document);
          return t
            ? t.scrollPosition
            : this._viewportRuler.getViewportScrollPosition();
        }
        _getShadowRoot() {
          return (
            void 0 === this._cachedShadowRoot &&
              (this._cachedShadowRoot = ue(this._rootElement)),
            this._cachedShadowRoot
          );
        }
        _getPreviewInsertionPoint(t, e) {
          const i = this._previewContainer || "global";
          if ("parent" === i) return t;
          if ("global" === i) {
            const s = this._document;
            return (
              e ||
              s.fullscreenElement ||
              s.webkitFullscreenElement ||
              s.mozFullScreenElement ||
              s.msFullscreenElement ||
              s.body
            );
          }
          return b(i);
        }
      }

      function se(n, t) {
        return `translate3d(${Math.round(n)}px, ${Math.round(t)}px, 0)`;
      }

      function Et(n, t, e) {
        return Math.max(t, Math.min(e, n));
      }

      function re(n) {
        n && n.parentNode && n.parentNode.removeChild(n);
      }

      function Q(n) {
        return "t" === n.type[0];
      }

      function wt(n, t) {
        const e = n.rootNodes;
        if (1 === e.length && e[0].nodeType === t.ELEMENT_NODE) return e[0];
        const i = t.createElement("div");
        return e.forEach((s) => i.appendChild(s)), i;
      }

      function Pt(n, t) {
        (n.style.width = `${t.width}px`),
          (n.style.height = `${t.height}px`),
          (n.style.transform = se(t.left, t.top));
      }

      function It(n, t, e) {
        const i = J(t, n.length - 1),
          s = J(e, n.length - 1);
        if (i === s) return;
        const o = n[i],
          a = s < i ? -1 : 1;
        for (let l = i; l !== s; l += a) n[l] = n[l + a];
        n[s] = o;
      }

      function J(n, t) {
        return Math.max(0, Math.min(t, n));
      }
      class Vn {
        constructor(t, e, i, s, o) {
          (this._dragDropRegistry = e),
            (this._ngZone = s),
            (this._viewportRuler = o),
            (this.disabled = !1),
            (this.sortingDisabled = !1),
            (this.autoScrollDisabled = !1),
            (this.autoScrollStep = 2),
            (this.enterPredicate = () => !0),
            (this.sortPredicate = () => !0),
            (this.beforeStarted = new f.xQ()),
            (this.entered = new f.xQ()),
            (this.exited = new f.xQ()),
            (this.dropped = new f.xQ()),
            (this.sorted = new f.xQ()),
            (this._isDragging = !1),
            (this._itemPositions = []),
            (this._previousSwap = { drag: null, delta: 0, overlaps: !1 }),
            (this._draggables = []),
            (this._siblings = []),
            (this._orientation = "vertical"),
            (this._activeSiblings = new Set()),
            (this._direction = "ltr"),
            (this._viewportScrollSubscription = M.w.EMPTY),
            (this._verticalScrollDirection = 0),
            (this._horizontalScrollDirection = 0),
            (this._stopScrollTimers = new f.xQ()),
            (this._cachedShadowRoot = null),
            (this._startScrollInterval = () => {
              this._stopScrolling(),
                (function (n = 0, t = z) {
                  return (
                    (!le(n) || n < 0) && (n = 0),
                    (!t || "function" != typeof t.schedule) && (t = z),
                    new S.y(
                      (e) => (
                        e.add(
                          t.schedule(Rn, n, {
                            subscriber: e,
                            counter: 0,
                            period: n,
                          })
                        ),
                        e
                      )
                    )
                  );
                })(0, Fe)
                  .pipe(O(this._stopScrollTimers))
                  .subscribe(() => {
                    const a = this._scrollNode,
                      l = this.autoScrollStep;
                    1 === this._verticalScrollDirection
                      ? Mt(a, -l)
                      : 2 === this._verticalScrollDirection && Mt(a, l),
                      1 === this._horizontalScrollDirection
                        ? Ot(a, -l)
                        : 2 === this._horizontalScrollDirection && Ot(a, l);
                  });
            }),
            (this.element = b(t)),
            (this._document = i),
            this.withScrollableParents([this.element]),
            e.registerDropContainer(this),
            (this._parentPositions = new _t(i, o));
        }
        dispose() {
          this._stopScrolling(),
            this._stopScrollTimers.complete(),
            this._viewportScrollSubscription.unsubscribe(),
            this.beforeStarted.complete(),
            this.entered.complete(),
            this.exited.complete(),
            this.dropped.complete(),
            this.sorted.complete(),
            this._activeSiblings.clear(),
            (this._scrollNode = null),
            this._parentPositions.clear(),
            this._dragDropRegistry.removeDropContainer(this);
        }
        isDragging() {
          return this._isDragging;
        }
        start() {
          this._draggingStarted(), this._notifyReceivingSiblings();
        }
        enter(t, e, i, s) {
          let o;
          this._draggingStarted(),
            null == s
              ? ((o = this.sortingDisabled ? this._draggables.indexOf(t) : -1),
                -1 === o &&
                  (o = this._getItemIndexFromPointerPosition(t, e, i)))
              : (o = s);
          const a = this._activeDraggables,
            l = a.indexOf(t),
            c = t.getPlaceholderElement();
          let d = a[o];
          if (
            (d === t && (d = a[o + 1]),
            l > -1 && a.splice(l, 1),
            d && !this._dragDropRegistry.isDragging(d))
          ) {
            const h = d.getRootElement();
            h.parentElement.insertBefore(c, h), a.splice(o, 0, t);
          } else if (this._shouldEnterAsFirstChild(e, i)) {
            const h = a[0].getRootElement();
            h.parentNode.insertBefore(c, h), a.unshift(t);
          } else b(this.element).appendChild(c), a.push(t);
          (c.style.transform = ""),
            this._cacheItemPositions(),
            this._cacheParentPositions(),
            this._notifyReceivingSiblings(),
            this.entered.next({
              item: t,
              container: this,
              currentIndex: this.getItemIndex(t),
            });
        }
        exit(t) {
          this._reset(), this.exited.next({ item: t, container: this });
        }
        drop(t, e, i, s, o, a, l) {
          this._reset(),
            this.dropped.next({
              item: t,
              currentIndex: e,
              previousIndex: i,
              container: this,
              previousContainer: s,
              isPointerOverContainer: o,
              distance: a,
              dropPoint: l,
            });
        }
        withItems(t) {
          const e = this._draggables;
          return (
            (this._draggables = t),
            t.forEach((i) => i._withDropContainer(this)),
            this.isDragging() &&
              (e.filter((s) => s.isDragging()).every((s) => -1 === t.indexOf(s))
                ? this._reset()
                : this._cacheItems()),
            this
          );
        }
        withDirection(t) {
          return (this._direction = t), this;
        }
        connectedTo(t) {
          return (this._siblings = t.slice()), this;
        }
        withOrientation(t) {
          return (this._orientation = t), this;
        }
        withScrollableParents(t) {
          const e = b(this.element);
          return (
            (this._scrollableElements =
              -1 === t.indexOf(e) ? [e, ...t] : t.slice()),
            this
          );
        }
        getScrollableParents() {
          return this._scrollableElements;
        }
        getItemIndex(t) {
          return this._isDragging
            ? Ee(
                "horizontal" === this._orientation && "rtl" === this._direction
                  ? this._itemPositions.slice().reverse()
                  : this._itemPositions,
                (i) => i.drag === t
              )
            : this._draggables.indexOf(t);
        }
        isReceiving() {
          return this._activeSiblings.size > 0;
        }
        _sortItem(t, e, i, s) {
          if (
            this.sortingDisabled ||
            !this._clientRect ||
            !mt(this._clientRect, 0.05, e, i)
          )
            return;
          const o = this._itemPositions,
            a = this._getItemIndexFromPointerPosition(t, e, i, s);
          if (-1 === a && o.length > 0) return;
          const l = "horizontal" === this._orientation,
            c = Ee(o, (w) => w.drag === t),
            d = o[a],
            u = d.clientRect,
            _ = c > a ? 1 : -1,
            y = this._getItemOffsetPx(o[c].clientRect, u, _),
            I = this._getSiblingOffsetPx(c, o, _),
            V = o.slice();
          It(o, c, a),
            this.sorted.next({
              previousIndex: c,
              currentIndex: a,
              container: this,
              item: t,
            }),
            o.forEach((w, Us) => {
              if (V[Us] === w) return;
              const Ut = w.drag === t,
                xe = Ut ? y : I,
                zt = Ut ? t.getPlaceholderElement() : w.drag.getRootElement();
              (w.offset += xe),
                l
                  ? ((zt.style.transform = ne(
                      `translate3d(${Math.round(w.offset)}px, 0, 0)`,
                      w.initialTransform
                    )),
                    j(w.clientRect, 0, xe))
                  : ((zt.style.transform = ne(
                      `translate3d(0, ${Math.round(w.offset)}px, 0)`,
                      w.initialTransform
                    )),
                    j(w.clientRect, xe, 0));
            }),
            (this._previousSwap.overlaps = Se(u, e, i)),
            (this._previousSwap.drag = d.drag),
            (this._previousSwap.delta = l ? s.x : s.y);
        }
        _startScrollingIfNecessary(t, e) {
          if (this.autoScrollDisabled) return;
          let i,
            s = 0,
            o = 0;
          if (
            (this._parentPositions.positions.forEach((a, l) => {
              l === this._document ||
                !a.clientRect ||
                i ||
                (mt(a.clientRect, 0.05, t, e) &&
                  (([s, o] = (function (n, t, e, i) {
                    const s = At(t, i),
                      o = Rt(t, e);
                    let a = 0,
                      l = 0;
                    if (s) {
                      const c = n.scrollTop;
                      1 === s
                        ? c > 0 && (a = 1)
                        : n.scrollHeight - c > n.clientHeight && (a = 2);
                    }
                    if (o) {
                      const c = n.scrollLeft;
                      1 === o
                        ? c > 0 && (l = 1)
                        : n.scrollWidth - c > n.clientWidth && (l = 2);
                    }
                    return [a, l];
                  })(l, a.clientRect, t, e)),
                  (s || o) && (i = l)));
            }),
            !s && !o)
          ) {
            const { width: a, height: l } =
                this._viewportRuler.getViewportSize(),
              c = { width: a, height: l, top: 0, right: a, bottom: l, left: 0 };
            (s = At(c, e)), (o = Rt(c, t)), (i = window);
          }
          i &&
            (s !== this._verticalScrollDirection ||
              o !== this._horizontalScrollDirection ||
              i !== this._scrollNode) &&
            ((this._verticalScrollDirection = s),
            (this._horizontalScrollDirection = o),
            (this._scrollNode = i),
            (s || o) && i
              ? this._ngZone.runOutsideAngular(this._startScrollInterval)
              : this._stopScrolling());
        }
        _stopScrolling() {
          this._stopScrollTimers.next();
        }
        _draggingStarted() {
          const t = b(this.element).style;
          this.beforeStarted.next(),
            (this._isDragging = !0),
            (this._initialScrollSnap =
              t.msScrollSnapType || t.scrollSnapType || ""),
            (t.scrollSnapType = t.msScrollSnapType = "none"),
            this._cacheItems(),
            this._viewportScrollSubscription.unsubscribe(),
            this._listenToScrollEvents();
        }
        _cacheParentPositions() {
          const t = b(this.element);
          this._parentPositions.cache(this._scrollableElements),
            (this._clientRect =
              this._parentPositions.positions.get(t).clientRect);
        }
        _cacheItemPositions() {
          const t = "horizontal" === this._orientation;
          this._itemPositions = this._activeDraggables
            .map((e) => {
              const i = e.getVisibleElement();
              return {
                drag: e,
                offset: 0,
                initialTransform: i.style.transform || "",
                clientRect: Ce(i),
              };
            })
            .sort((e, i) =>
              t
                ? e.clientRect.left - i.clientRect.left
                : e.clientRect.top - i.clientRect.top
            );
        }
        _reset() {
          this._isDragging = !1;
          const t = b(this.element).style;
          (t.scrollSnapType = t.msScrollSnapType = this._initialScrollSnap),
            this._activeDraggables.forEach((e) => {
              var i;
              const s = e.getRootElement();
              if (s) {
                const o =
                  null ===
                    (i = this._itemPositions.find((a) => a.drag === e)) ||
                  void 0 === i
                    ? void 0
                    : i.initialTransform;
                s.style.transform = o || "";
              }
            }),
            this._siblings.forEach((e) => e._stopReceiving(this)),
            (this._activeDraggables = []),
            (this._itemPositions = []),
            (this._previousSwap.drag = null),
            (this._previousSwap.delta = 0),
            (this._previousSwap.overlaps = !1),
            this._stopScrolling(),
            this._viewportScrollSubscription.unsubscribe(),
            this._parentPositions.clear();
        }
        _getSiblingOffsetPx(t, e, i) {
          const s = "horizontal" === this._orientation,
            o = e[t].clientRect,
            a = e[t + -1 * i];
          let l = o[s ? "width" : "height"] * i;
          if (a) {
            const c = s ? "left" : "top",
              d = s ? "right" : "bottom";
            -1 === i
              ? (l -= a.clientRect[c] - o[d])
              : (l += o[c] - a.clientRect[d]);
          }
          return l;
        }
        _getItemOffsetPx(t, e, i) {
          const s = "horizontal" === this._orientation;
          let o = s ? e.left - t.left : e.top - t.top;
          return (
            -1 === i && (o += s ? e.width - t.width : e.height - t.height), o
          );
        }
        _shouldEnterAsFirstChild(t, e) {
          if (!this._activeDraggables.length) return !1;
          const i = this._itemPositions,
            s = "horizontal" === this._orientation;
          if (i[0].drag !== this._activeDraggables[0]) {
            const a = i[i.length - 1].clientRect;
            return s ? t >= a.right : e >= a.bottom;
          }
          {
            const a = i[0].clientRect;
            return s ? t <= a.left : e <= a.top;
          }
        }
        _getItemIndexFromPointerPosition(t, e, i, s) {
          const o = "horizontal" === this._orientation,
            a = Ee(this._itemPositions, ({ drag: l, clientRect: c }, d, h) => {
              if (l === t) return h.length < 2;
              if (s) {
                const u = o ? s.x : s.y;
                if (
                  l === this._previousSwap.drag &&
                  this._previousSwap.overlaps &&
                  u === this._previousSwap.delta
                )
                  return !1;
              }
              return o
                ? e >= Math.floor(c.left) && e < Math.floor(c.right)
                : i >= Math.floor(c.top) && i < Math.floor(c.bottom);
            });
          return -1 !== a && this.sortPredicate(a, t, this) ? a : -1;
        }
        _cacheItems() {
          (this._activeDraggables = this._draggables.slice()),
            this._cacheItemPositions(),
            this._cacheParentPositions();
        }
        _isOverContainer(t, e) {
          return null != this._clientRect && Se(this._clientRect, t, e);
        }
        _getSiblingContainerFromPosition(t, e, i) {
          return this._siblings.find((s) => s._canReceive(t, e, i));
        }
        _canReceive(t, e, i) {
          if (
            !this._clientRect ||
            !Se(this._clientRect, e, i) ||
            !this.enterPredicate(t, this)
          )
            return !1;
          const s = this._getShadowRoot().elementFromPoint(e, i);
          if (!s) return !1;
          const o = b(this.element);
          return s === o || o.contains(s);
        }
        _startReceiving(t, e) {
          const i = this._activeSiblings;
          !i.has(t) &&
            e.every(
              (s) =>
                this.enterPredicate(s, this) || this._draggables.indexOf(s) > -1
            ) &&
            (i.add(t),
            this._cacheParentPositions(),
            this._listenToScrollEvents());
        }
        _stopReceiving(t) {
          this._activeSiblings.delete(t),
            this._viewportScrollSubscription.unsubscribe();
        }
        _listenToScrollEvents() {
          this._viewportScrollSubscription = this._dragDropRegistry
            .scrolled(this._getShadowRoot())
            .subscribe((t) => {
              if (this.isDragging()) {
                const e = this._parentPositions.handleScroll(t);
                e &&
                  (this._itemPositions.forEach(({ clientRect: i }) => {
                    j(i, e.top, e.left);
                  }),
                  this._itemPositions.forEach(({ drag: i }) => {
                    this._dragDropRegistry.isDragging(i) &&
                      i._sortFromLastPointerPosition();
                  }));
              } else this.isReceiving() && this._cacheParentPositions();
            });
        }
        _getShadowRoot() {
          if (!this._cachedShadowRoot) {
            const t = ue(b(this.element));
            this._cachedShadowRoot = t || this._document;
          }
          return this._cachedShadowRoot;
        }
        _notifyReceivingSiblings() {
          const t = this._activeDraggables.filter((e) => e.isDragging());
          this._siblings.forEach((e) => e._startReceiving(this, t));
        }
      }

      function Ee(n, t) {
        for (let e = 0; e < n.length; e++) if (t(n[e], e, n)) return e;
        return -1;
      }

      function Mt(n, t) {
        n === window ? n.scrollBy(0, t) : (n.scrollTop += t);
      }

      function Ot(n, t) {
        n === window ? n.scrollBy(t, 0) : (n.scrollLeft += t);
      }

      function At(n, t) {
        const { top: e, bottom: i, height: s } = n,
          o = 0.05 * s;
        return t >= e - o && t <= e + o ? 1 : t >= i - o && t <= i + o ? 2 : 0;
      }

      function Rt(n, t) {
        const { left: e, right: i, width: s } = n,
          o = 0.05 * s;
        return t >= e - o && t <= e + o ? 1 : t >= i - o && t <= i + o ? 2 : 0;
      }
      const oe = K({ passive: !1, capture: !0 });
      let kt = (() => {
        class n {
          constructor(e, i) {
            (this._ngZone = e),
              (this._dropInstances = new Set()),
              (this._dragInstances = new Set()),
              (this._activeDragInstances = []),
              (this._globalListeners = new Map()),
              (this._draggingPredicate = (s) => s.isDragging()),
              (this.pointerMove = new f.xQ()),
              (this.pointerUp = new f.xQ()),
              (this.scroll = new f.xQ()),
              (this._preventDefaultWhileDragging = (s) => {
                this._activeDragInstances.length > 0 && s.preventDefault();
              }),
              (this._persistentTouchmoveListener = (s) => {
                this._activeDragInstances.length > 0 &&
                  (this._activeDragInstances.some(this._draggingPredicate) &&
                    s.preventDefault(),
                  this.pointerMove.next(s));
              }),
              (this._document = i);
          }
          registerDropContainer(e) {
            this._dropInstances.has(e) || this._dropInstances.add(e);
          }
          registerDragItem(e) {
            this._dragInstances.add(e),
              1 === this._dragInstances.size &&
                this._ngZone.runOutsideAngular(() => {
                  this._document.addEventListener(
                    "touchmove",
                    this._persistentTouchmoveListener,
                    oe
                  );
                });
          }
          removeDropContainer(e) {
            this._dropInstances.delete(e);
          }
          removeDragItem(e) {
            this._dragInstances.delete(e),
              this.stopDragging(e),
              0 === this._dragInstances.size &&
                this._document.removeEventListener(
                  "touchmove",
                  this._persistentTouchmoveListener,
                  oe
                );
          }
          startDragging(e, i) {
            if (
              !(this._activeDragInstances.indexOf(e) > -1) &&
              (this._activeDragInstances.push(e),
              1 === this._activeDragInstances.length)
            ) {
              const s = i.type.startsWith("touch");
              this._globalListeners
                .set(s ? "touchend" : "mouseup", {
                  handler: (o) => this.pointerUp.next(o),
                  options: !0,
                })
                .set("scroll", {
                  handler: (o) => this.scroll.next(o),
                  options: !0,
                })
                .set("selectstart", {
                  handler: this._preventDefaultWhileDragging,
                  options: oe,
                }),
                s ||
                  this._globalListeners.set("mousemove", {
                    handler: (o) => this.pointerMove.next(o),
                    options: oe,
                  }),
                this._ngZone.runOutsideAngular(() => {
                  this._globalListeners.forEach((o, a) => {
                    this._document.addEventListener(a, o.handler, o.options);
                  });
                });
            }
          }
          stopDragging(e) {
            const i = this._activeDragInstances.indexOf(e);
            i > -1 &&
              (this._activeDragInstances.splice(i, 1),
              0 === this._activeDragInstances.length &&
                this._clearGlobalListeners());
          }
          isDragging(e) {
            return this._activeDragInstances.indexOf(e) > -1;
          }
          scrolled(e) {
            const i = [this.scroll];
            return (
              e &&
                e !== this._document &&
                i.push(
                  new S.y((s) =>
                    this._ngZone.runOutsideAngular(() => {
                      const a = (l) => {
                        this._activeDragInstances.length && s.next(l);
                      };
                      return (
                        e.addEventListener("scroll", a, !0),
                        () => {
                          e.removeEventListener("scroll", a, !0);
                        }
                      );
                    })
                  )
                ),
              (0, pt.T)(...i)
            );
          }
          ngOnDestroy() {
            this._dragInstances.forEach((e) => this.removeDragItem(e)),
              this._dropInstances.forEach((e) => this.removeDropContainer(e)),
              this._clearGlobalListeners(),
              this.pointerMove.complete(),
              this.pointerUp.complete();
          }
          _clearGlobalListeners() {
            this._globalListeners.forEach((e, i) => {
              this._document.removeEventListener(i, e.handler, e.options);
            }),
              this._globalListeners.clear();
          }
        }
        return (
          (n.??fac = function (e) {
            return new (e || n)(r.LFG(r.R0b), r.LFG(p.K0));
          }),
          (n.??prov = r.Yz7({
            factory: function () {
              return new n(r.LFG(r.R0b), r.LFG(p.K0));
            },
            token: n,
            providedIn: "root",
          })),
          n
        );
      })();
      const Un = { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
      let we = (() => {
        class n {
          constructor(e, i, s, o) {
            (this._document = e),
              (this._ngZone = i),
              (this._viewportRuler = s),
              (this._dragDropRegistry = o);
          }
          createDrag(e, i = Un) {
            return new Bn(
              e,
              i,
              this._document,
              this._ngZone,
              this._viewportRuler,
              this._dragDropRegistry
            );
          }
          createDropList(e) {
            return new Vn(
              e,
              this._dragDropRegistry,
              this._document,
              this._ngZone,
              this._viewportRuler
            );
          }
        }
        return (
          (n.??fac = function (e) {
            return new (e || n)(
              r.LFG(p.K0),
              r.LFG(r.R0b),
              r.LFG(fe),
              r.LFG(kt)
            );
          }),
          (n.??prov = r.Yz7({
            factory: function () {
              return new n(r.LFG(p.K0), r.LFG(r.R0b), r.LFG(fe), r.LFG(kt));
            },
            token: n,
            providedIn: "root",
          })),
          n
        );
      })();
      const Pe = new r.OlP("CDK_DRAG_PARENT"),
        Ie = new r.OlP("CdkDropListGroup"),
        Lt = new r.OlP("CDK_DRAG_CONFIG");
      let zn = 0;
      const Ft = new r.OlP("CdkDropList");
      let Wn = (() => {
        class n {
          constructor(e, i, s, o, a, l, c) {
            (this.element = e),
              (this._changeDetectorRef = s),
              (this._scrollDispatcher = o),
              (this._dir = a),
              (this._group = l),
              (this._destroyed = new f.xQ()),
              (this.connectedTo = []),
              (this.id = "cdk-drop-list-" + zn++),
              (this.enterPredicate = () => !0),
              (this.sortPredicate = () => !0),
              (this.dropped = new r.vpe()),
              (this.entered = new r.vpe()),
              (this.exited = new r.vpe()),
              (this.sorted = new r.vpe()),
              (this._unsortedItems = new Set()),
              (this._dropListRef = i.createDropList(e)),
              (this._dropListRef.data = this),
              c && this._assignDefaults(c),
              (this._dropListRef.enterPredicate = (d, h) =>
                this.enterPredicate(d.data, h.data)),
              (this._dropListRef.sortPredicate = (d, h, u) =>
                this.sortPredicate(d, h.data, u.data)),
              this._setupInputSyncSubscription(this._dropListRef),
              this._handleEvents(this._dropListRef),
              n._dropLists.push(this),
              l && l._items.add(this);
          }
          get disabled() {
            return this._disabled || (!!this._group && this._group.disabled);
          }
          set disabled(e) {
            this._dropListRef.disabled = this._disabled = C(e);
          }
          addItem(e) {
            this._unsortedItems.add(e),
              this._dropListRef.isDragging() && this._syncItemsWithRef();
          }
          removeItem(e) {
            this._unsortedItems.delete(e),
              this._dropListRef.isDragging() && this._syncItemsWithRef();
          }
          getSortedItems() {
            return Array.from(this._unsortedItems).sort((e, i) =>
              e._dragRef
                .getVisibleElement()
                .compareDocumentPosition(i._dragRef.getVisibleElement()) &
              Node.DOCUMENT_POSITION_FOLLOWING
                ? -1
                : 1
            );
          }
          ngOnDestroy() {
            const e = n._dropLists.indexOf(this);
            e > -1 && n._dropLists.splice(e, 1),
              this._group && this._group._items.delete(this),
              this._unsortedItems.clear(),
              this._dropListRef.dispose(),
              this._destroyed.next(),
              this._destroyed.complete();
          }
          _setupInputSyncSubscription(e) {
            this._dir &&
              this._dir.change
                .pipe((0, G.O)(this._dir.value), O(this._destroyed))
                .subscribe((i) => e.withDirection(i)),
              e.beforeStarted.subscribe(() => {
                const i = (function (n) {
                  return Array.isArray(n) ? n : [n];
                })(this.connectedTo).map((s) =>
                  "string" == typeof s
                    ? n._dropLists.find((a) => a.id === s)
                    : s
                );
                if (
                  (this._group &&
                    this._group._items.forEach((s) => {
                      -1 === i.indexOf(s) && i.push(s);
                    }),
                  !this._scrollableParentsResolved)
                ) {
                  const s = this._scrollDispatcher
                    .getAncestorScrollContainers(this.element)
                    .map((o) => o.getElementRef().nativeElement);
                  this._dropListRef.withScrollableParents(s),
                    (this._scrollableParentsResolved = !0);
                }
                (e.disabled = this.disabled),
                  (e.lockAxis = this.lockAxis),
                  (e.sortingDisabled = C(this.sortingDisabled)),
                  (e.autoScrollDisabled = C(this.autoScrollDisabled)),
                  (e.autoScrollStep = R(this.autoScrollStep, 2)),
                  e
                    .connectedTo(
                      i
                        .filter((s) => s && s !== this)
                        .map((s) => s._dropListRef)
                    )
                    .withOrientation(this.orientation);
              });
          }
          _handleEvents(e) {
            e.beforeStarted.subscribe(() => {
              this._syncItemsWithRef(), this._changeDetectorRef.markForCheck();
            }),
              e.entered.subscribe((i) => {
                this.entered.emit({
                  container: this,
                  item: i.item.data,
                  currentIndex: i.currentIndex,
                });
              }),
              e.exited.subscribe((i) => {
                this.exited.emit({ container: this, item: i.item.data }),
                  this._changeDetectorRef.markForCheck();
              }),
              e.sorted.subscribe((i) => {
                this.sorted.emit({
                  previousIndex: i.previousIndex,
                  currentIndex: i.currentIndex,
                  container: this,
                  item: i.item.data,
                });
              }),
              e.dropped.subscribe((i) => {
                this.dropped.emit({
                  previousIndex: i.previousIndex,
                  currentIndex: i.currentIndex,
                  previousContainer: i.previousContainer.data,
                  container: i.container.data,
                  item: i.item.data,
                  isPointerOverContainer: i.isPointerOverContainer,
                  distance: i.distance,
                  dropPoint: i.dropPoint,
                }),
                  this._changeDetectorRef.markForCheck();
              });
          }
          _assignDefaults(e) {
            const {
              lockAxis: i,
              draggingDisabled: s,
              sortingDisabled: o,
              listAutoScrollDisabled: a,
              listOrientation: l,
            } = e;
            (this.disabled = null != s && s),
              (this.sortingDisabled = null != o && o),
              (this.autoScrollDisabled = null != a && a),
              (this.orientation = l || "vertical"),
              i && (this.lockAxis = i);
          }
          _syncItemsWithRef() {
            this._dropListRef.withItems(
              this.getSortedItems().map((e) => e._dragRef)
            );
          }
        }
        return (
          (n.??fac = function (e) {
            return new (e || n)(
              r.Y36(r.SBq),
              r.Y36(we),
              r.Y36(r.sBO),
              r.Y36(pe),
              r.Y36(q, 8),
              r.Y36(Ie, 12),
              r.Y36(Lt, 8)
            );
          }),
          (n.??dir = r.lG2({
            type: n,
            selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
            hostAttrs: [1, "cdk-drop-list"],
            hostVars: 7,
            hostBindings: function (e, i) {
              2 & e &&
                (r.uIk("id", i.id),
                r.ekj("cdk-drop-list-disabled", i.disabled)(
                  "cdk-drop-list-dragging",
                  i._dropListRef.isDragging()
                )("cdk-drop-list-receiving", i._dropListRef.isReceiving()));
            },
            inputs: {
              connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
              id: "id",
              enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
              sortPredicate: ["cdkDropListSortPredicate", "sortPredicate"],
              disabled: ["cdkDropListDisabled", "disabled"],
              sortingDisabled: [
                "cdkDropListSortingDisabled",
                "sortingDisabled",
              ],
              autoScrollDisabled: [
                "cdkDropListAutoScrollDisabled",
                "autoScrollDisabled",
              ],
              orientation: ["cdkDropListOrientation", "orientation"],
              lockAxis: ["cdkDropListLockAxis", "lockAxis"],
              data: ["cdkDropListData", "data"],
              autoScrollStep: ["cdkDropListAutoScrollStep", "autoScrollStep"],
            },
            outputs: {
              dropped: "cdkDropListDropped",
              entered: "cdkDropListEntered",
              exited: "cdkDropListExited",
              sorted: "cdkDropListSorted",
            },
            exportAs: ["cdkDropList"],
            features: [
              r._Bn([
                { provide: Ie, useValue: void 0 },
                { provide: Ft, useExisting: n },
              ]),
            ],
          })),
          (n._dropLists = []),
          n
        );
      })();
      const De = new r.OlP("CdkDragHandle"),
        Nt = new r.OlP("CdkDragPlaceholder");
      let Zn = (() => {
        class n {
          constructor(e) {
            this.templateRef = e;
          }
        }
        return (
          (n.??fac = function (e) {
            return new (e || n)(r.Y36(r.Rgc));
          }),
          (n.??dir = r.lG2({
            type: n,
            selectors: [["ng-template", "cdkDragPlaceholder", ""]],
            inputs: { data: "data" },
            features: [r._Bn([{ provide: Nt, useExisting: n }])],
          })),
          n
        );
      })();
      const Bt = new r.OlP("CdkDragPreview");
      let Yn = (() => {
        class n {
          constructor(e, i, s, o, a, l, c, d, h, u, _) {
            (this.element = e),
              (this.dropContainer = i),
              (this._ngZone = o),
              (this._viewContainerRef = a),
              (this._dir = c),
              (this._changeDetectorRef = h),
              (this._selfHandle = u),
              (this._parentDrag = _),
              (this._destroyed = new f.xQ()),
              (this.started = new r.vpe()),
              (this.released = new r.vpe()),
              (this.ended = new r.vpe()),
              (this.entered = new r.vpe()),
              (this.exited = new r.vpe()),
              (this.dropped = new r.vpe()),
              (this.moved = new S.y((y) => {
                const I = this._dragRef.moved
                  .pipe(
                    (0, Re.U)((V) => ({
                      source: this,
                      pointerPosition: V.pointerPosition,
                      event: V.event,
                      delta: V.delta,
                      distance: V.distance,
                    }))
                  )
                  .subscribe(y);
                return () => {
                  I.unsubscribe();
                };
              })),
              (this._dragRef = d.createDrag(e, {
                dragStartThreshold:
                  l && null != l.dragStartThreshold ? l.dragStartThreshold : 5,
                pointerDirectionChangeThreshold:
                  l && null != l.pointerDirectionChangeThreshold
                    ? l.pointerDirectionChangeThreshold
                    : 5,
                zIndex: null == l ? void 0 : l.zIndex,
              })),
              (this._dragRef.data = this),
              n._dragInstances.push(this),
              l && this._assignDefaults(l),
              i &&
                (this._dragRef._withDropContainer(i._dropListRef),
                i.addItem(this)),
              this._syncInputs(this._dragRef),
              this._handleEvents(this._dragRef);
          }
          get disabled() {
            return (
              this._disabled ||
              (this.dropContainer && this.dropContainer.disabled)
            );
          }
          set disabled(e) {
            (this._disabled = C(e)), (this._dragRef.disabled = this._disabled);
          }
          getPlaceholderElement() {
            return this._dragRef.getPlaceholderElement();
          }
          getRootElement() {
            return this._dragRef.getRootElement();
          }
          reset() {
            this._dragRef.reset();
          }
          getFreeDragPosition() {
            return this._dragRef.getFreeDragPosition();
          }
          ngAfterViewInit() {
            this._ngZone.runOutsideAngular(() => {
              this._ngZone.onStable
                .pipe((0, me.q)(1), O(this._destroyed))
                .subscribe(() => {
                  this._updateRootElement(),
                    this._setupHandlesListener(),
                    this.freeDragPosition &&
                      this._dragRef.setFreeDragPosition(this.freeDragPosition);
                });
            });
          }
          ngOnChanges(e) {
            const i = e.rootElementSelector,
              s = e.freeDragPosition;
            i && !i.firstChange && this._updateRootElement(),
              s &&
                !s.firstChange &&
                this.freeDragPosition &&
                this._dragRef.setFreeDragPosition(this.freeDragPosition);
          }
          ngOnDestroy() {
            this.dropContainer && this.dropContainer.removeItem(this);
            const e = n._dragInstances.indexOf(this);
            e > -1 && n._dragInstances.splice(e, 1),
              this._ngZone.runOutsideAngular(() => {
                this._destroyed.next(),
                  this._destroyed.complete(),
                  this._dragRef.dispose();
              });
          }
          _updateRootElement() {
            const e = this.element.nativeElement,
              i = this.rootElementSelector
                ? Vt(e, this.rootElementSelector)
                : e;
            this._dragRef.withRootElement(i || e);
          }
          _getBoundaryElement() {
            const e = this.boundaryElement;
            return e
              ? "string" == typeof e
                ? Vt(this.element.nativeElement, e)
                : b(e)
              : null;
          }
          _syncInputs(e) {
            e.beforeStarted.subscribe(() => {
              if (!e.isDragging()) {
                const i = this._dir,
                  s = this.dragStartDelay,
                  o = this._placeholderTemplate
                    ? {
                        template: this._placeholderTemplate.templateRef,
                        context: this._placeholderTemplate.data,
                        viewContainer: this._viewContainerRef,
                      }
                    : null,
                  a = this._previewTemplate
                    ? {
                        template: this._previewTemplate.templateRef,
                        context: this._previewTemplate.data,
                        matchSize: this._previewTemplate.matchSize,
                        viewContainer: this._viewContainerRef,
                      }
                    : null;
                (e.disabled = this.disabled),
                  (e.lockAxis = this.lockAxis),
                  (e.dragStartDelay = "object" == typeof s && s ? s : R(s)),
                  (e.constrainPosition = this.constrainPosition),
                  (e.previewClass = this.previewClass),
                  e
                    .withBoundaryElement(this._getBoundaryElement())
                    .withPlaceholderTemplate(o)
                    .withPreviewTemplate(a)
                    .withPreviewContainer(this.previewContainer || "global"),
                  i && e.withDirection(i.value);
              }
            }),
              e.beforeStarted.pipe((0, me.q)(1)).subscribe(() => {
                var i, s;
                if (this._parentDrag)
                  return void e.withParent(this._parentDrag._dragRef);
                let o = this.element.nativeElement.parentElement;
                for (; o; ) {
                  if (
                    null === (i = o.classList) || void 0 === i
                      ? void 0
                      : i.contains("cdk-drag")
                  ) {
                    e.withParent(
                      (null ===
                        (s = n._dragInstances.find(
                          (a) => a.element.nativeElement === o
                        )) || void 0 === s
                        ? void 0
                        : s._dragRef) || null
                    );
                    break;
                  }
                  o = o.parentElement;
                }
              });
          }
          _handleEvents(e) {
            e.started.subscribe(() => {
              this.started.emit({ source: this }),
                this._changeDetectorRef.markForCheck();
            }),
              e.released.subscribe(() => {
                this.released.emit({ source: this });
              }),
              e.ended.subscribe((i) => {
                this.ended.emit({
                  source: this,
                  distance: i.distance,
                  dropPoint: i.dropPoint,
                }),
                  this._changeDetectorRef.markForCheck();
              }),
              e.entered.subscribe((i) => {
                this.entered.emit({
                  container: i.container.data,
                  item: this,
                  currentIndex: i.currentIndex,
                });
              }),
              e.exited.subscribe((i) => {
                this.exited.emit({ container: i.container.data, item: this });
              }),
              e.dropped.subscribe((i) => {
                this.dropped.emit({
                  previousIndex: i.previousIndex,
                  currentIndex: i.currentIndex,
                  previousContainer: i.previousContainer.data,
                  container: i.container.data,
                  isPointerOverContainer: i.isPointerOverContainer,
                  item: this,
                  distance: i.distance,
                  dropPoint: i.dropPoint,
                });
              });
          }
          _assignDefaults(e) {
            const {
              lockAxis: i,
              dragStartDelay: s,
              constrainPosition: o,
              previewClass: a,
              boundaryElement: l,
              draggingDisabled: c,
              rootElementSelector: d,
              previewContainer: h,
            } = e;
            (this.disabled = null != c && c),
              (this.dragStartDelay = s || 0),
              i && (this.lockAxis = i),
              o && (this.constrainPosition = o),
              a && (this.previewClass = a),
              l && (this.boundaryElement = l),
              d && (this.rootElementSelector = d),
              h && (this.previewContainer = h);
          }
          _setupHandlesListener() {
            this._handles.changes
              .pipe(
                (0, G.O)(this._handles),
                (0, kn.b)((e) => {
                  const i = e
                    .filter((s) => s._parentDrag === this)
                    .map((s) => s.element);
                  this._selfHandle &&
                    this.rootElementSelector &&
                    i.push(this.element),
                    this._dragRef.withHandles(i);
                }),
                (0, ze.w)((e) =>
                  (0, pt.T)(...e.map((i) => i._stateChanges.pipe((0, G.O)(i))))
                ),
                O(this._destroyed)
              )
              .subscribe((e) => {
                const i = this._dragRef,
                  s = e.element.nativeElement;
                e.disabled ? i.disableHandle(s) : i.enableHandle(s);
              });
          }
        }
        return (
          (n.??fac = function (e) {
            return new (e || n)(
              r.Y36(r.SBq),
              r.Y36(Ft, 12),
              r.Y36(p.K0),
              r.Y36(r.R0b),
              r.Y36(r.s_b),
              r.Y36(Lt, 8),
              r.Y36(q, 8),
              r.Y36(we),
              r.Y36(r.sBO),
              r.Y36(De, 10),
              r.Y36(Pe, 12)
            );
          }),
          (n.??dir = r.lG2({
            type: n,
            selectors: [["", "cdkDrag", ""]],
            contentQueries: function (e, i, s) {
              if (
                (1 & e && (r.Suo(s, Bt, 5), r.Suo(s, Nt, 5), r.Suo(s, De, 5)),
                2 & e)
              ) {
                let o;
                r.iGM((o = r.CRH())) && (i._previewTemplate = o.first),
                  r.iGM((o = r.CRH())) && (i._placeholderTemplate = o.first),
                  r.iGM((o = r.CRH())) && (i._handles = o);
              }
            },
            hostAttrs: [1, "cdk-drag"],
            hostVars: 4,
            hostBindings: function (e, i) {
              2 & e &&
                r.ekj("cdk-drag-disabled", i.disabled)(
                  "cdk-drag-dragging",
                  i._dragRef.isDragging()
                );
            },
            inputs: {
              disabled: ["cdkDragDisabled", "disabled"],
              dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
              lockAxis: ["cdkDragLockAxis", "lockAxis"],
              constrainPosition: [
                "cdkDragConstrainPosition",
                "constrainPosition",
              ],
              previewClass: ["cdkDragPreviewClass", "previewClass"],
              boundaryElement: ["cdkDragBoundary", "boundaryElement"],
              rootElementSelector: [
                "cdkDragRootElement",
                "rootElementSelector",
              ],
              previewContainer: ["cdkDragPreviewContainer", "previewContainer"],
              data: ["cdkDragData", "data"],
              freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"],
            },
            outputs: {
              started: "cdkDragStarted",
              released: "cdkDragReleased",
              ended: "cdkDragEnded",
              entered: "cdkDragEntered",
              exited: "cdkDragExited",
              dropped: "cdkDragDropped",
              moved: "cdkDragMoved",
            },
            exportAs: ["cdkDrag"],
            features: [r._Bn([{ provide: Pe, useExisting: n }]), r.TTD],
          })),
          (n._dragInstances = []),
          n
        );
      })();

      function Vt(n, t) {
        let e = n.parentElement;
        for (; e; ) {
          if (e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e;
          e = e.parentElement;
        }
        return null;
      }
      let qn = (() => {
          class n {}
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??mod = r.oAB({ type: n })),
            (n.??inj = r.cJS({ providers: [we], imports: [ge] })),
            n
          );
        })(),
        jn = (() => {
          class n {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??cmp = r.Xpm({
              type: n,
              selectors: [["app-header"]],
              decls: 14,
              vars: 0,
              consts: [
                [1, "logo"],
                [1, "instuction"],
                [1, "detail"],
              ],
              template: function (e, i) {
                1 & e &&
                  (r.TgZ(0, "header"),
                  r.TgZ(1, "div", 0),
                  r.TgZ(2, "h1"),
                  r._uU(3, "Daily Scrum"),
                  r.qZA(),
                  r.qZA(),
                  r.TgZ(4, "div", 1),
                  r.TgZ(5, "div", 2),
                  r.TgZ(6, "h6"),
                  r._uU(7, "Play / Pause"),
                  r.TgZ(8, "span"),
                  r._uU(9, "Space"),
                  r.qZA(),
                  r.qZA(),
                  r.TgZ(10, "h6"),
                  r._uU(11, "participent done / finish daily"),
                  r.TgZ(12, "span"),
                  r._uU(13, "Enter"),
                  r.qZA(),
                  r.qZA(),
                  r.qZA(),
                  r.qZA(),
                  r.qZA());
              },
              styles: [
                '@font-face{font-family:"Montserrat";src:url(Montserrat-Regular.3cd786652b8a2e9d41f2.ttf);src:url(Montserrat-Regular.3cd786652b8a2e9d41f2.ttf) format("truetype")}input[_ngcontent-%COMP%]{outline:none}body[_ngcontent-%COMP%]::-webkit-scrollbar{border-radius:4px;width:4px}body[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #0000004d}body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:1px solid slategrey}*[_ngcontent-%COMP%]{box-sizing:border-box}img[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{vertical-align:top}a[_ngcontent-%COMP%]{display:inline-block;text-decoration:none}.loader[_ngcontent-%COMP%]{position:fixed;width:100%;display:flex;justify-content:center;align-items:center;height:100%;top:0;left:0;z-index:1099;background-color:#69696980}.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px}._btn-primary[_ngcontent-%COMP%]{background:#007bff;color:#fff;border-radius:4px}.loader-section[_ngcontent-%COMP%]{margin:0;padding:0;background:rgba(52,73,94,.5);height:100%;width:100%;display:flex;align-items:center;justify-content:center;font-family:"montserrat",sans-serif;position:fixed;top:0;left:0;z-index:1500}.loading[_ngcontent-%COMP%]{width:200px;height:200px;box-sizing:border-box;border-radius:50%;border-top:10px solid #2a2a2a;position:relative;animation:a1 2s linear infinite}.loading[_ngcontent-%COMP%]:before, .loading[_ngcontent-%COMP%]:after{content:"";width:200px;height:200px;position:absolute;left:0;top:-10px;box-sizing:border-box;border-radius:50%}.loading[_ngcontent-%COMP%]:before{border-top:10px solid #01aef0;transform:rotate(120deg)}.loading[_ngcontent-%COMP%]:after{border-top:10px solid #72b645;transform:rotate(240deg)}.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;width:200px;height:200px;color:#fff;text-align:center;line-height:200px;animation:a2 2s linear infinite}@keyframes a1{to{transform:rotate(360deg)}}@keyframes a2{to{transform:rotate(-360deg)}}.warningInput[_ngcontent-%COMP%]{border:1px solid #ff0000!important}.warningSpan[_ngcontent-%COMP%]{margin-bottom:0!important}.warningInputBorder[_ngcontent-%COMP%]     .mat-form-field-underline{background-color:red}.option-warning[_ngcontent-%COMP%]{border-bottom:1px solid #ff0000}.radioNull[_ngcontent-%COMP%]     .mat-radio-outer-circle{border:1px solid #ff0000}@media (max-width: 767.9px){  .wa-get-started-button{bottom:115px!important}}body[_ngcontent-%COMP%]{margin:0;padding:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,"Helvetica Neue",sans-serif}header[_ngcontent-%COMP%]{width:100%;background:#ffffff;padding:5px 20px;display:flex;align-items:center;justify-content:space-between}@media (max-width: 767.9px){header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}}header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:"Montserrat";font-size:20px;font-weight:bold;margin:0}@media (max-width: 767.9px){header[_ngcontent-%COMP%]   .instuction[_ngcontent-%COMP%]{text-align:right;width:100%}}header[_ngcontent-%COMP%]   .instuction[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-family:"Montserrat";font-size:12px;font-weight:bold;margin:0 0 2px;text-align:right}header[_ngcontent-%COMP%]   .instuction[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;padding:5px;border-radius:4px;font-size:10px;margin-left:10px;background:#3F51B5;color:#fff}',
              ],
            })),
            n
          );
        })(),
        m = (() => {
          class n {
            static addClass(e, i) {
              e.classList ? e.classList.add(i) : (e.className += " " + i);
            }
            static addMultipleClasses(e, i) {
              if (e.classList) {
                let s = i.trim().split(" ");
                for (let o = 0; o < s.length; o++) e.classList.add(s[o]);
              } else {
                let s = i.split(" ");
                for (let o = 0; o < s.length; o++) e.className += " " + s[o];
              }
            }
            static removeClass(e, i) {
              e.classList
                ? e.classList.remove(i)
                : (e.className = e.className.replace(
                    new RegExp(
                      "(^|\\b)" + i.split(" ").join("|") + "(\\b|$)",
                      "gi"
                    ),
                    " "
                  ));
            }
            static hasClass(e, i) {
              return e.classList
                ? e.classList.contains(i)
                : new RegExp("(^| )" + i + "( |$)", "gi").test(e.className);
            }
            static siblings(e) {
              return Array.prototype.filter.call(
                e.parentNode.children,
                function (i) {
                  return i !== e;
                }
              );
            }
            static find(e, i) {
              return Array.from(e.querySelectorAll(i));
            }
            static findSingle(e, i) {
              return e ? e.querySelector(i) : null;
            }
            static index(e) {
              let i = e.parentNode.childNodes,
                s = 0;
              for (var o = 0; o < i.length; o++) {
                if (i[o] == e) return s;
                1 == i[o].nodeType && s++;
              }
              return -1;
            }
            static indexWithinGroup(e, i) {
              let s = e.parentNode ? e.parentNode.childNodes : [],
                o = 0;
              for (var a = 0; a < s.length; a++) {
                if (s[a] == e) return o;
                s[a].attributes &&
                  s[a].attributes[i] &&
                  1 == s[a].nodeType &&
                  o++;
              }
              return -1;
            }
            static relativePosition(e, i) {
              let s = e.offsetParent
                ? { width: e.offsetWidth, height: e.offsetHeight }
                : this.getHiddenElementDimensions(e);
              const o = i.offsetHeight,
                a = i.getBoundingClientRect(),
                l = this.getViewport();
              let c, d;
              a.top + o + s.height > l.height
                ? ((c = -1 * s.height),
                  (e.style.transformOrigin = "bottom"),
                  a.top + c < 0 && (c = -1 * a.top))
                : ((c = o), (e.style.transformOrigin = "top")),
                (d =
                  s.width > l.width
                    ? -1 * a.left
                    : a.left + s.width > l.width
                    ? -1 * (a.left + s.width - l.width)
                    : 0),
                (e.style.top = c + "px"),
                (e.style.left = d + "px");
            }
            static absolutePosition(e, i) {
              let y,
                I,
                s = e.offsetParent
                  ? { width: e.offsetWidth, height: e.offsetHeight }
                  : this.getHiddenElementDimensions(e),
                o = s.height,
                a = s.width,
                l = i.offsetHeight,
                c = i.offsetWidth,
                d = i.getBoundingClientRect(),
                h = this.getWindowScrollTop(),
                u = this.getWindowScrollLeft(),
                _ = this.getViewport();
              d.top + l + o > _.height
                ? ((y = d.top + h - o),
                  (e.style.transformOrigin = "bottom"),
                  y < 0 && (y = h))
                : ((y = l + d.top + h), (e.style.transformOrigin = "top")),
                (I =
                  d.left + a > _.width
                    ? Math.max(0, d.left + u + c - a)
                    : d.left + u),
                (e.style.top = y + "px"),
                (e.style.left = I + "px");
            }
            static getParents(e, i = []) {
              return null === e.parentNode
                ? i
                : this.getParents(e.parentNode, i.concat([e.parentNode]));
            }
            static getScrollableParents(e) {
              let i = [];
              if (e) {
                let s = this.getParents(e);
                const o = /(auto|scroll)/,
                  a = (l) => {
                    let c = window.getComputedStyle(l, null);
                    return (
                      o.test(c.getPropertyValue("overflow")) ||
                      o.test(c.getPropertyValue("overflowX")) ||
                      o.test(c.getPropertyValue("overflowY"))
                    );
                  };
                for (let l of s) {
                  let c = 1 === l.nodeType && l.dataset.scrollselectors;
                  if (c) {
                    let d = c.split(",");
                    for (let h of d) {
                      let u = this.findSingle(l, h);
                      u && a(u) && i.push(u);
                    }
                  }
                  9 !== l.nodeType && a(l) && i.push(l);
                }
              }
              return i;
            }
            static getHiddenElementOuterHeight(e) {
              (e.style.visibility = "hidden"), (e.style.display = "block");
              let i = e.offsetHeight;
              return (
                (e.style.display = "none"), (e.style.visibility = "visible"), i
              );
            }
            static getHiddenElementOuterWidth(e) {
              (e.style.visibility = "hidden"), (e.style.display = "block");
              let i = e.offsetWidth;
              return (
                (e.style.display = "none"), (e.style.visibility = "visible"), i
              );
            }
            static getHiddenElementDimensions(e) {
              let i = {};
              return (
                (e.style.visibility = "hidden"),
                (e.style.display = "block"),
                (i.width = e.offsetWidth),
                (i.height = e.offsetHeight),
                (e.style.display = "none"),
                (e.style.visibility = "visible"),
                i
              );
            }
            static scrollInView(e, i) {
              let s = getComputedStyle(e).getPropertyValue("borderTopWidth"),
                o = s ? parseFloat(s) : 0,
                a = getComputedStyle(e).getPropertyValue("paddingTop"),
                l = a ? parseFloat(a) : 0,
                c = e.getBoundingClientRect(),
                h =
                  i.getBoundingClientRect().top +
                  document.body.scrollTop -
                  (c.top + document.body.scrollTop) -
                  o -
                  l,
                u = e.scrollTop,
                _ = e.clientHeight,
                y = this.getOuterHeight(i);
              h < 0
                ? (e.scrollTop = u + h)
                : h + y > _ && (e.scrollTop = u + h - _ + y);
            }
            static fadeIn(e, i) {
              e.style.opacity = 0;
              let s = +new Date(),
                o = 0,
                a = function () {
                  (o =
                    +e.style.opacity.replace(",", ".") +
                    (new Date().getTime() - s) / i),
                    (e.style.opacity = o),
                    (s = +new Date()),
                    +o < 1 &&
                      ((window.requestAnimationFrame &&
                        requestAnimationFrame(a)) ||
                        setTimeout(a, 16));
                };
              a();
            }
            static fadeOut(e, i) {
              var s = 1,
                l = 50 / i;
              let c = setInterval(() => {
                (s -= l) <= 0 && ((s = 0), clearInterval(c)),
                  (e.style.opacity = s);
              }, 50);
            }
            static getWindowScrollTop() {
              let e = document.documentElement;
              return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
            }
            static getWindowScrollLeft() {
              let e = document.documentElement;
              return (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0);
            }
            static matches(e, i) {
              var s = Element.prototype;
              return (
                s.matches ||
                s.webkitMatchesSelector ||
                s.mozMatchesSelector ||
                s.msMatchesSelector ||
                function (a) {
                  return (
                    -1 !== [].indexOf.call(document.querySelectorAll(a), this)
                  );
                }
              ).call(e, i);
            }
            static getOuterWidth(e, i) {
              let s = e.offsetWidth;
              if (i) {
                let o = getComputedStyle(e);
                s += parseFloat(o.marginLeft) + parseFloat(o.marginRight);
              }
              return s;
            }
            static getHorizontalPadding(e) {
              let i = getComputedStyle(e);
              return parseFloat(i.paddingLeft) + parseFloat(i.paddingRight);
            }
            static getHorizontalMargin(e) {
              let i = getComputedStyle(e);
              return parseFloat(i.marginLeft) + parseFloat(i.marginRight);
            }
            static innerWidth(e) {
              let i = e.offsetWidth,
                s = getComputedStyle(e);
              return (
                (i += parseFloat(s.paddingLeft) + parseFloat(s.paddingRight)), i
              );
            }
            static width(e) {
              let i = e.offsetWidth,
                s = getComputedStyle(e);
              return (
                (i -= parseFloat(s.paddingLeft) + parseFloat(s.paddingRight)), i
              );
            }
            static getInnerHeight(e) {
              let i = e.offsetHeight,
                s = getComputedStyle(e);
              return (
                (i += parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)), i
              );
            }
            static getOuterHeight(e, i) {
              let s = e.offsetHeight;
              if (i) {
                let o = getComputedStyle(e);
                s += parseFloat(o.marginTop) + parseFloat(o.marginBottom);
              }
              return s;
            }
            static getHeight(e) {
              let i = e.offsetHeight,
                s = getComputedStyle(e);
              return (
                (i -=
                  parseFloat(s.paddingTop) +
                  parseFloat(s.paddingBottom) +
                  parseFloat(s.borderTopWidth) +
                  parseFloat(s.borderBottomWidth)),
                i
              );
            }
            static getWidth(e) {
              let i = e.offsetWidth,
                s = getComputedStyle(e);
              return (
                (i -=
                  parseFloat(s.paddingLeft) +
                  parseFloat(s.paddingRight) +
                  parseFloat(s.borderLeftWidth) +
                  parseFloat(s.borderRightWidth)),
                i
              );
            }
            static getViewport() {
              let e = window,
                i = document,
                s = i.documentElement,
                o = i.getElementsByTagName("body")[0];
              return {
                width: e.innerWidth || s.clientWidth || o.clientWidth,
                height: e.innerHeight || s.clientHeight || o.clientHeight,
              };
            }
            static getOffset(e) {
              var i = e.getBoundingClientRect();
              return {
                top:
                  i.top +
                  (window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    0),
                left:
                  i.left +
                  (window.pageXOffset ||
                    document.documentElement.scrollLeft ||
                    document.body.scrollLeft ||
                    0),
              };
            }
            static replaceElementWith(e, i) {
              let s = e.parentNode;
              if (!s) throw "Can't replace element";
              return s.replaceChild(i, e);
            }
            static getUserAgent() {
              return navigator.userAgent;
            }
            static isIE() {
              var e = window.navigator.userAgent;
              return (
                e.indexOf("MSIE ") > 0 ||
                (e.indexOf("Trident/") > 0
                  ? (e.indexOf("rv:"), !0)
                  : e.indexOf("Edge/") > 0)
              );
            }
            static isIOS() {
              return (
                /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
              );
            }
            static isAndroid() {
              return /(android)/i.test(navigator.userAgent);
            }
            static appendChild(e, i) {
              if (this.isElement(i)) i.appendChild(e);
              else {
                if (!i.el || !i.el.nativeElement)
                  throw "Cannot append " + i + " to " + e;
                i.el.nativeElement.appendChild(e);
              }
            }
            static removeChild(e, i) {
              if (this.isElement(i)) i.removeChild(e);
              else {
                if (!i.el || !i.el.nativeElement)
                  throw "Cannot remove " + e + " from " + i;
                i.el.nativeElement.removeChild(e);
              }
            }
            static removeElement(e) {
              "remove" in Element.prototype
                ? e.remove()
                : e.parentNode.removeChild(e);
            }
            static isElement(e) {
              return "object" == typeof HTMLElement
                ? e instanceof HTMLElement
                : e &&
                    "object" == typeof e &&
                    null !== e &&
                    1 === e.nodeType &&
                    "string" == typeof e.nodeName;
            }
            static calculateScrollbarWidth(e) {
              if (e) {
                let i = getComputedStyle(e);
                return (
                  e.offsetWidth -
                  e.clientWidth -
                  parseFloat(i.borderLeftWidth) -
                  parseFloat(i.borderRightWidth)
                );
              }
              {
                if (null !== this.calculatedScrollbarWidth)
                  return this.calculatedScrollbarWidth;
                let i = document.createElement("div");
                (i.className = "p-scrollbar-measure"),
                  document.body.appendChild(i);
                let s = i.offsetWidth - i.clientWidth;
                return (
                  document.body.removeChild(i),
                  (this.calculatedScrollbarWidth = s),
                  s
                );
              }
            }
            static calculateScrollbarHeight() {
              if (null !== this.calculatedScrollbarHeight)
                return this.calculatedScrollbarHeight;
              let e = document.createElement("div");
              (e.className = "p-scrollbar-measure"),
                document.body.appendChild(e);
              let i = e.offsetHeight - e.clientHeight;
              return (
                document.body.removeChild(e),
                (this.calculatedScrollbarWidth = i),
                i
              );
            }
            static invokeElementMethod(e, i, s) {
              e[i].apply(e, s);
            }
            static clearSelection() {
              if (window.getSelection)
                window.getSelection().empty
                  ? window.getSelection().empty()
                  : window.getSelection().removeAllRanges &&
                    window.getSelection().rangeCount > 0 &&
                    window.getSelection().getRangeAt(0).getClientRects()
                      .length > 0 &&
                    window.getSelection().removeAllRanges();
              else if (document.selection && document.selection.empty)
                try {
                  document.selection.empty();
                } catch (e) {}
            }
            static getBrowser() {
              if (!this.browser) {
                let e = this.resolveUserAgent();
                (this.browser = {}),
                  e.browser &&
                    ((this.browser[e.browser] = !0),
                    (this.browser.version = e.version)),
                  this.browser.chrome
                    ? (this.browser.webkit = !0)
                    : this.browser.webkit && (this.browser.safari = !0);
              }
              return this.browser;
            }
            static resolveUserAgent() {
              let e = navigator.userAgent.toLowerCase(),
                i =
                  /(chrome)[ \/]([\w.]+)/.exec(e) ||
                  /(webkit)[ \/]([\w.]+)/.exec(e) ||
                  /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
                  /(msie) ([\w.]+)/.exec(e) ||
                  (e.indexOf("compatible") < 0 &&
                    /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)) ||
                  [];
              return { browser: i[1] || "", version: i[2] || "0" };
            }
            static isInteger(e) {
              return Number.isInteger
                ? Number.isInteger(e)
                : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
            }
            static isHidden(e) {
              return null === e.offsetParent;
            }
            static getFocusableElements(e) {
              let i = n.find(
                  e,
                  'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'
                ),
                s = [];
              for (let o of i)
                "none" != getComputedStyle(o).display &&
                  "hidden" != getComputedStyle(o).visibility &&
                  s.push(o);
              return s;
            }
            static generateZIndex() {
              return (this.zindex = this.zindex || 999), ++this.zindex;
            }
          }
          return (
            (n.zindex = 1e3),
            (n.calculatedScrollbarWidth = null),
            (n.calculatedScrollbarHeight = null),
            n
          );
        })(),
        v = (() => {
          class n {}
          return (
            (n.STARTS_WITH = "startsWith"),
            (n.CONTAINS = "contains"),
            (n.NOT_CONTAINS = "notContains"),
            (n.ENDS_WITH = "endsWith"),
            (n.EQUALS = "equals"),
            (n.NOT_EQUALS = "notEquals"),
            (n.IN = "in"),
            (n.LESS_THAN = "lt"),
            (n.LESS_THAN_OR_EQUAL_TO = "lte"),
            (n.GREATER_THAN = "gt"),
            (n.GREATER_THAN_OR_EQUAL_TO = "gte"),
            (n.BETWEEN = "between"),
            (n.IS = "is"),
            (n.IS_NOT = "isNot"),
            (n.BEFORE = "before"),
            (n.AFTER = "after"),
            (n.DATE_IS = "dateIs"),
            (n.DATE_IS_NOT = "dateIsNot"),
            (n.DATE_BEFORE = "dateBefore"),
            (n.DATE_AFTER = "dateAfter"),
            n
          );
        })(),
        Qn = (() => {
          class n {
            constructor() {
              (this.ripple = !1),
                (this.filterMatchModeOptions = {
                  text: [
                    v.STARTS_WITH,
                    v.CONTAINS,
                    v.NOT_CONTAINS,
                    v.ENDS_WITH,
                    v.EQUALS,
                    v.NOT_EQUALS,
                  ],
                  numeric: [
                    v.EQUALS,
                    v.NOT_EQUALS,
                    v.LESS_THAN,
                    v.LESS_THAN_OR_EQUAL_TO,
                    v.GREATER_THAN,
                    v.GREATER_THAN_OR_EQUAL_TO,
                  ],
                  date: [v.DATE_IS, v.DATE_IS_NOT, v.DATE_BEFORE, v.DATE_AFTER],
                }),
                (this.translation = {
                  startsWith: "Starts with",
                  contains: "Contains",
                  notContains: "Not contains",
                  endsWith: "Ends with",
                  equals: "Equals",
                  notEquals: "Not equals",
                  noFilter: "No Filter",
                  lt: "Less than",
                  lte: "Less than or equal to",
                  gt: "Greater than",
                  gte: "Greater than or equal to",
                  is: "Is",
                  isNot: "Is not",
                  before: "Before",
                  after: "After",
                  dateIs: "Date is",
                  dateIsNot: "Date is not",
                  dateBefore: "Date is before",
                  dateAfter: "Date is after",
                  clear: "Clear",
                  apply: "Apply",
                  matchAll: "Match All",
                  matchAny: "Match Any",
                  addRule: "Add Rule",
                  removeRule: "Remove Rule",
                  accept: "Yes",
                  reject: "No",
                  choose: "Choose",
                  upload: "Upload",
                  cancel: "Cancel",
                  dayNames: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  dayNamesShort: [
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                  ],
                  dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                  monthNames: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ],
                  monthNamesShort: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                  dateFormat: "mm/dd/yy",
                  today: "Today",
                  weekHeader: "Wk",
                  weak: "Weak",
                  medium: "Medium",
                  strong: "Strong",
                  passwordPrompt: "Enter a password",
                  emptyMessage: "No results found",
                  emptyFilterMessage: "No results found",
                }),
                (this.zIndex = {
                  modal: 1100,
                  overlay: 1e3,
                  menu: 1e3,
                  tooltip: 1100,
                }),
                (this.translationSource = new f.xQ()),
                (this.translationObserver =
                  this.translationSource.asObservable());
            }
            getTranslation(e) {
              return this.translation[e];
            }
            setTranslation(e) {
              (this.translation = Object.assign(
                Object.assign({}, this.translation),
                e
              )),
                this.translationSource.next(this.translation);
            }
          }
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??prov = r.Yz7({
              token: n,
              factory: n.??fac,
              providedIn: "root",
            })),
            n
          );
        })(),
        Jn = (() => {
          class n {
            constructor(e) {
              this.template = e;
            }
            getType() {
              return this.name;
            }
          }
          return (
            (n.??fac = function (e) {
              return new (e || n)(r.Y36(r.Rgc));
            }),
            (n.??dir = r.lG2({
              type: n,
              selectors: [["", "pTemplate", ""]],
              inputs: { type: "type", name: ["pTemplate", "name"] },
            })),
            n
          );
        })(),
        $n = (() => {
          class n {}
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??mod = r.oAB({ type: n })),
            (n.??inj = r.cJS({ imports: [[p.ez]] })),
            n
          );
        })(),
        Xn = (() => {
          class n {
            constructor(e, i, s) {
              (this.el = e), (this.zone = i), (this.config = s);
            }
            ngAfterViewInit() {
              this.config &&
                this.config.ripple &&
                this.zone.runOutsideAngular(() => {
                  this.create(),
                    (this.mouseDownListener = this.onMouseDown.bind(this)),
                    this.el.nativeElement.addEventListener(
                      "mousedown",
                      this.mouseDownListener
                    );
                });
            }
            onMouseDown(e) {
              let i = this.getInk();
              if (!i || "none" === getComputedStyle(i, null).display) return;
              if (
                (m.removeClass(i, "p-ink-active"),
                !m.getHeight(i) && !m.getWidth(i))
              ) {
                let l = Math.max(
                  m.getOuterWidth(this.el.nativeElement),
                  m.getOuterHeight(this.el.nativeElement)
                );
                (i.style.height = l + "px"), (i.style.width = l + "px");
              }
              let s = m.getOffset(this.el.nativeElement),
                o =
                  e.pageX -
                  s.left +
                  document.body.scrollTop -
                  m.getWidth(i) / 2,
                a =
                  e.pageY -
                  s.top +
                  document.body.scrollLeft -
                  m.getHeight(i) / 2;
              (i.style.top = a + "px"),
                (i.style.left = o + "px"),
                m.addClass(i, "p-ink-active");
            }
            getInk() {
              for (let e = 0; e < this.el.nativeElement.children.length; e++)
                if (
                  -1 !==
                  this.el.nativeElement.children[e].className.indexOf("p-ink")
                )
                  return this.el.nativeElement.children[e];
              return null;
            }
            resetInk() {
              let e = this.getInk();
              e && m.removeClass(e, "p-ink-active");
            }
            onAnimationEnd(e) {
              m.removeClass(e.currentTarget, "p-ink-active");
            }
            create() {
              let e = document.createElement("span");
              (e.className = "p-ink"),
                this.el.nativeElement.appendChild(e),
                (this.animationListener = this.onAnimationEnd.bind(this)),
                e.addEventListener("animationend", this.animationListener);
            }
            remove() {
              let e = this.getInk();
              e &&
                (this.el.nativeElement.removeEventListener(
                  "mousedown",
                  this.mouseDownListener
                ),
                e.removeEventListener("animationend", this.animationListener),
                m.removeElement(e));
            }
            ngOnDestroy() {
              this.config && this.config.ripple && this.remove();
            }
          }
          return (
            (n.??fac = function (e) {
              return new (e || n)(r.Y36(r.SBq), r.Y36(r.R0b), r.Y36(Qn, 8));
            }),
            (n.??dir = r.lG2({
              type: n,
              selectors: [["", "pRipple", ""]],
              hostAttrs: [1, "p-ripple", "p-element"],
            })),
            n
          );
        })(),
        es = (() => {
          class n {}
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??mod = r.oAB({ type: n })),
            (n.??inj = r.cJS({ imports: [[p.ez]] })),
            n
          );
        })();

      function ts(n, t) {
        1 & n && r.GkF(0);
      }
      const is = function (n, t, e, i) {
        return {
          "p-button-icon": !0,
          "p-button-icon-left": n,
          "p-button-icon-right": t,
          "p-button-icon-top": e,
          "p-button-icon-bottom": i,
        };
      };

      function ns(n, t) {
        if ((1 & n && r._UZ(0, "span", 4), 2 & n)) {
          const e = r.oxw();
          r.Tol(e.loading ? "p-button-loading-icon " + e.loadingIcon : e.icon),
            r.Q6J(
              "ngClass",
              r.l5B(
                4,
                is,
                "left" === e.iconPos && e.label,
                "right" === e.iconPos && e.label,
                "top" === e.iconPos && e.label,
                "bottom" === e.iconPos && e.label
              )
            ),
            r.uIk("aria-hidden", !0);
        }
      }

      function ss(n, t) {
        if ((1 & n && (r.TgZ(0, "span", 5), r._uU(1), r.qZA()), 2 & n)) {
          const e = r.oxw();
          r.uIk("aria-hidden", e.icon && !e.label),
            r.xp6(1),
            r.Oqu(e.label || "\xa0");
        }
      }

      function rs(n, t) {
        if ((1 & n && (r.TgZ(0, "span", 4), r._uU(1), r.qZA()), 2 & n)) {
          const e = r.oxw();
          r.Tol(e.badgeClass),
            r.Q6J("ngClass", e.badgeStyleClass()),
            r.xp6(1),
            r.Oqu(e.badge);
        }
      }
      const os = function (n, t, e, i, s) {
          return {
            "p-button p-component": !0,
            "p-button-icon-only": n,
            "p-button-vertical": t,
            "p-disabled": e,
            "p-button-loading": i,
            "p-button-loading-label-only": s,
          };
        },
        as = ["*"];
      let ls = (() => {
          class n {
            constructor(e) {
              (this.el = e),
                (this.iconPos = "left"),
                (this.loadingIcon = "pi pi-spinner pi-spin"),
                (this._loading = !1);
            }
            ngAfterViewInit() {
              (this._initialStyleClass = this.el.nativeElement.className),
                m.addMultipleClasses(
                  this.el.nativeElement,
                  this.getStyleClass()
                ),
                this.icon && this.createIconEl();
              let e = document.createElement("span");
              this.icon && !this.label && e.setAttribute("aria-hidden", "true"),
                (e.className = "p-button-label"),
                this.label
                  ? e.appendChild(document.createTextNode(this.label))
                  : (e.innerHTML = "&nbsp;"),
                this.el.nativeElement.appendChild(e),
                (this.initialized = !0);
            }
            getStyleClass() {
              let e = "p-button p-component";
              return (
                this.icon && !this.label && (e += " p-button-icon-only"),
                this.loading &&
                  ((e += " p-disabled p-button-loading"),
                  !this.icon &&
                    this.label &&
                    (e += " p-button-loading-label-only")),
                e
              );
            }
            setStyleClass() {
              let e = this.getStyleClass();
              this.el.nativeElement.className =
                e + " " + this._initialStyleClass;
            }
            createIconEl() {
              let e = document.createElement("span");
              (e.className = "p-button-icon"),
                e.setAttribute("aria-hidden", "true");
              let i = this.label ? "p-button-icon-" + this.iconPos : null;
              i && m.addClass(e, i),
                m.addMultipleClasses(e, this.getIconClass());
              let s = m.findSingle(this.el.nativeElement, ".p-button-label");
              s
                ? this.el.nativeElement.insertBefore(e, s)
                : this.el.nativeElement.appendChild(e);
            }
            getIconClass() {
              return this.loading
                ? "p-button-loading-icon " + this.loadingIcon
                : this._icon;
            }
            setIconClass() {
              let e = m.findSingle(this.el.nativeElement, ".p-button-icon");
              e
                ? (e.className = this.iconPos
                    ? "p-button-icon p-button-icon-" +
                      this.iconPos +
                      " " +
                      this.getIconClass()
                    : "p-button-icon " + this.getIconClass())
                : this.createIconEl();
            }
            removeIconElement() {
              let e = m.findSingle(this.el.nativeElement, ".p-button-icon");
              this.el.nativeElement.removeChild(e);
            }
            get label() {
              return this._label;
            }
            set label(e) {
              (this._label = e),
                this.initialized &&
                  ((m.findSingle(
                    this.el.nativeElement,
                    ".p-button-label"
                  ).textContent = this._label || "&nbsp;"),
                  this.setIconClass(),
                  this.setStyleClass());
            }
            get icon() {
              return this._icon;
            }
            set icon(e) {
              (this._icon = e),
                this.initialized && (this.setIconClass(), this.setStyleClass());
            }
            get loading() {
              return this._loading;
            }
            set loading(e) {
              (this._loading = e),
                this.initialized &&
                  (this.loading || this.icon
                    ? this.setIconClass()
                    : this.removeIconElement(),
                  this.setStyleClass());
            }
            ngOnDestroy() {
              this.initialized = !1;
            }
          }
          return (
            (n.??fac = function (e) {
              return new (e || n)(r.Y36(r.SBq));
            }),
            (n.??dir = r.lG2({
              type: n,
              selectors: [["", "pButton", ""]],
              hostAttrs: [1, "p-element"],
              inputs: {
                iconPos: "iconPos",
                loadingIcon: "loadingIcon",
                label: "label",
                icon: "icon",
                loading: "loading",
              },
            })),
            n
          );
        })(),
        cs = (() => {
          class n {
            constructor() {
              (this.type = "button"),
                (this.iconPos = "left"),
                (this.loading = !1),
                (this.loadingIcon = "pi pi-spinner pi-spin"),
                (this.onClick = new r.vpe()),
                (this.onFocus = new r.vpe()),
                (this.onBlur = new r.vpe());
            }
            ngAfterContentInit() {
              this.templates.forEach((e) => {
                switch (e.getType()) {
                  case "content":
                  default:
                    this.contentTemplate = e.template;
                }
              });
            }
            badgeStyleClass() {
              return {
                "p-badge p-component": !0,
                "p-badge-no-gutter":
                  this.badge && 1 === String(this.badge).length,
              };
            }
          }
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??cmp = r.Xpm({
              type: n,
              selectors: [["p-button"]],
              contentQueries: function (e, i, s) {
                if ((1 & e && r.Suo(s, Jn, 4), 2 & e)) {
                  let o;
                  r.iGM((o = r.CRH())) && (i.templates = o);
                }
              },
              hostAttrs: [1, "p-element"],
              inputs: {
                type: "type",
                iconPos: "iconPos",
                icon: "icon",
                badge: "badge",
                label: "label",
                disabled: "disabled",
                loading: "loading",
                loadingIcon: "loadingIcon",
                style: "style",
                styleClass: "styleClass",
                badgeClass: "badgeClass",
              },
              outputs: {
                onClick: "onClick",
                onFocus: "onFocus",
                onBlur: "onBlur",
              },
              ngContentSelectors: as,
              decls: 6,
              vars: 16,
              consts: [
                [
                  "pRipple",
                  "",
                  3,
                  "ngStyle",
                  "disabled",
                  "ngClass",
                  "click",
                  "focus",
                  "blur",
                ],
                [4, "ngTemplateOutlet"],
                [3, "ngClass", "class", 4, "ngIf"],
                ["class", "p-button-label", 4, "ngIf"],
                [3, "ngClass"],
                [1, "p-button-label"],
              ],
              template: function (e, i) {
                1 & e &&
                  (r.F$t(),
                  r.TgZ(0, "button", 0),
                  r.NdJ("click", function (o) {
                    return i.onClick.emit(o);
                  })("focus", function (o) {
                    return i.onFocus.emit(o);
                  })("blur", function (o) {
                    return i.onBlur.emit(o);
                  }),
                  r.Hsn(1),
                  r.YNc(2, ts, 1, 0, "ng-container", 1),
                  r.YNc(3, ns, 1, 9, "span", 2),
                  r.YNc(4, ss, 2, 2, "span", 3),
                  r.YNc(5, rs, 2, 4, "span", 2),
                  r.qZA()),
                  2 & e &&
                    (r.Tol(i.styleClass),
                    r.Q6J("ngStyle", i.style)(
                      "disabled",
                      i.disabled || i.loading
                    )(
                      "ngClass",
                      r.qbA(
                        10,
                        os,
                        i.icon && !i.label,
                        ("top" === i.iconPos || "bottom" === i.iconPos) &&
                          i.label,
                        i.disabled || i.loading,
                        i.loading,
                        i.loading && !i.icon && i.label
                      )
                    ),
                    r.uIk("type", i.type),
                    r.xp6(2),
                    r.Q6J("ngTemplateOutlet", i.contentTemplate),
                    r.xp6(1),
                    r.Q6J("ngIf", !i.contentTemplate && (i.icon || i.loading)),
                    r.xp6(1),
                    r.Q6J("ngIf", !i.contentTemplate),
                    r.xp6(1),
                    r.Q6J("ngIf", !i.contentTemplate && i.badge));
              },
              directives: [Xn, p.PC, p.mk, p.tP, p.O5],
              encapsulation: 2,
              changeDetection: 0,
            })),
            n
          );
        })(),
        ds = (() => {
          class n {}
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??mod = r.oAB({ type: n })),
            (n.??inj = r.cJS({ imports: [[p.ez, es]] })),
            n
          );
        })(),
        hs = (() => {
          class n {
            constructor(e, i) {
              (this.el = e), (this.ngModel = i);
            }
            ngDoCheck() {
              this.updateFilledState();
            }
            onInput(e) {
              this.updateFilledState();
            }
            updateFilledState() {
              this.filled =
                (this.el.nativeElement.value &&
                  this.el.nativeElement.value.length) ||
                (this.ngModel && this.ngModel.model);
            }
          }
          return (
            (n.??fac = function (e) {
              return new (e || n)(r.Y36(r.SBq), r.Y36(x.On, 8));
            }),
            (n.??dir = r.lG2({
              type: n,
              selectors: [["", "pInputText", ""]],
              hostAttrs: [1, "p-inputtext", "p-component", "p-element"],
              hostVars: 2,
              hostBindings: function (e, i) {
                1 & e &&
                  r.NdJ("input", function (o) {
                    return i.onInput(o);
                  }),
                  2 & e && r.ekj("p-filled", i.filled);
              },
            })),
            n
          );
        })(),
        us = (() => {
          class n {}
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??mod = r.oAB({ type: n })),
            (n.??inj = r.cJS({ imports: [[p.ez]] })),
            n
          );
        })();

      function ps(n, t) {
        1 & n && (r.TgZ(0, "small", 33), r._uU(1, "Name is missing"), r.qZA());
      }

      function fs(n, t) {
        1 & n && r._UZ(0, "div", 37);
      }

      function gs(n, t) {
        if (1 & n) {
          const e = r.EpF();
          r.TgZ(0, "button", 38),
            r.NdJ("click", function () {
              r.CHM(e);
              const s = r.oxw().index;
              return r.oxw().participants.splice(s, 1);
            }),
            r.qZA();
        }
        if (2 & n) {
          const e = r.oxw().$implicit;
          r.Q6J("disabled", "pending" != e.status);
        }
      }
      const ms = function (n, t) {
        return { playing: n, played: t };
      };

      function _s(n, t) {
        if (
          (1 & n &&
            (r.TgZ(0, "div", 34),
            r.YNc(1, fs, 1, 0, "div", 35),
            r._uU(2),
            r.YNc(3, gs, 1, 1, "button", 36),
            r.qZA()),
          2 & n)
        ) {
          const e = t.$implicit,
            i = r.oxw();
          r.Q6J(
            "ngClass",
            r.WLB(3, ms, "playing" == e.status, "played" == e.status)
          ),
            r.xp6(2),
            r.hij(" ", e.name, " "),
            r.xp6(1),
            r.Q6J("ngIf", !i.isPlayDisabled);
        }
      }

      function bs(n, t) {
        if (1 & n) {
          const e = r.EpF();
          r.TgZ(0, "p-button", 39),
            r.NdJ("click", function () {
              return r.CHM(e), r.oxw().participantDone();
            }),
            r.qZA();
        }
      }

      function vs(n, t) {
        if (1 & n) {
          const e = r.EpF();
          r.TgZ(0, "p-button", 40),
            r.NdJ("click", function () {
              return r.CHM(e), r.oxw().finish();
            }),
            r.qZA();
        }
      }

      function ys(n, t) {
        if (
          (1 & n &&
            (r.TgZ(0, "h6", 33), r._uU(1), r.ALo(2, "formatTime"), r.qZA()),
          2 & n)
        ) {
          const e = r.oxw();
          r.xp6(1), r.Oqu(r.lcZ(2, 1, e.participantCounter));
        }
      }
      const Ht = function (n) {
          return { active: n };
        },
        Cs = function (n) {
          return { error: n };
        },
        Ss = function () {
          return { standalone: !0 };
        };
      let Ts = (() => {
          class n {
            constructor() {
              (this.scrumStarted = !1),
                (this.participantName = ""),
                (this.participants = []),
                (this.participantTime = 1),
                (this.playSound = !0),
                (this.addParticipant = !1),
                (this.isPlayDisabled = !1),
                (this.showError = !1),
                (this.overallScrumTime = 0),
                (this.playingParticipantIndex = 0),
                (this.runningParticipantName = ""),
                (this.participantTimerMax = 60 * this.participantTime),
                (this.participantTimerVal = 0),
                (this.participantCounter = this.participantTimerMax);
            }
            handleKeyboardEvent(e) {
              " " == e.key
                ? this.isPlayDisabled
                  ? this.pause()
                  : this.play()
                : "Enter" == e.key &&
                  (this.isPlayDisabled &&
                  "Allignments" == this.runningParticipantName
                    ? this.finish()
                    : this.scrumStarted && this.participantDone());
            }
            ngOnInit() {}
            dropFunction(e) {
              this.isPlayDisabled ||
                It(this.participants, e.previousIndex, e.currentIndex);
            }
            addParticipants() {
              this.participantName
                ? ((this.showError = !1),
                  this.participants.push({
                    name: this.participantName,
                    status: "pending",
                  }),
                  (this.participantName = ""))
                : (this.showError = !0);
            }
            play() {
              if (this.participants.length > 0)
                if (((this.isPlayDisabled = !0), this.scrumStarted)) {
                  var e = this;
                  this.participantTimer = setInterval(function () {
                    (e.participantTimerVal += 1),
                      (e.participantCounter =
                        e.participantTimerMax - e.participantTimerVal),
                      e.participantCounter <= 0 &&
                        (clearInterval(e.participantTimer),
                        (e.participants[e.playingParticipantIndex].status =
                          "played"),
                        (e.playingParticipantIndex += 1),
                        e.playingParticipantIndex < e.participants.length
                          ? e.changeParticipant()
                          : (e.playAudio(),
                            (e.runningParticipantName = "Allignments")));
                  }, 1e3);
                } else
                  (this.scrumStarted = !0),
                    (this.startTime = new Date().getTime()),
                    (this.scrumInterval = setInterval(() => {
                      var i = (new Date().getTime() - this.startTime) / 1e3;
                      (i = Math.floor(i)), (this.overallScrumTime = i);
                    }, 1e3)),
                    this.changeParticipant();
            }
            onTimeChange() {
              (this.participantTimerMax = 60 * this.participantTime),
                (this.participantCounter = this.participantTimerMax);
            }
            changeParticipant() {
              this.playAudio(),
                (this.participantTimerVal = 0),
                (this.participantCounter = this.participantTimerMax);
              var e = this.participants[this.playingParticipantIndex];
              (this.runningParticipantName = e.name), (e.status = "playing");
              var i = this;
              this.participantTimer = setInterval(function () {
                (i.participantTimerVal += 1),
                  (i.participantCounter =
                    i.participantTimerMax - i.participantTimerVal),
                  i.participantCounter <= 0 &&
                    (clearInterval(i.participantTimer),
                    (e.status = "played"),
                    (i.playingParticipantIndex += 1),
                    i.playingParticipantIndex < i.participants.length
                      ? i.changeParticipant()
                      : (i.playAudio(),
                        (i.runningParticipantName = "Allignments")));
              }, 1e3);
            }
            pause() {
              (this.isPlayDisabled = !1), clearInterval(this.participantTimer);
            }
            reset() {
              clearInterval(this.participantTimer),
                (this.overallScrumTime = 0),
                this.finish();
            }
            finish() {
              (this.scrumStarted = !1),
                clearInterval(this.scrumInterval),
                this.participants.forEach(function (e) {
                  e.status = "pending";
                }),
                (this.runningParticipantName = ""),
                (this.isPlayDisabled = !1),
                (this.playingParticipantIndex = 0),
                (this.participantTimerVal = 0),
                (this.participantCounter = this.participantTimerMax);
            }
            participantDone() {
              clearInterval(this.participantTimer),
                (this.participants[this.playingParticipantIndex].status =
                  "played"),
                (this.playingParticipantIndex += 1),
                this.playingParticipantIndex < this.participants.length
                  ? this.changeParticipant()
                  : (this.playAudio(),
                    (this.runningParticipantName = "Allignments"));
            }
            playAudio() {
              if (this.playSound) {
                let e = new Audio();
                (e.src = "assets/"), e.load(), e.play();
              }
            }
          }
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??cmp = r.Xpm({
              type: n,
              selectors: [["app-public"]],
              hostBindings: function (e, i) {
                1 & e &&
                  r.NdJ(
                    "keyup",
                    function (o) {
                      return i.handleKeyboardEvent(o);
                    },
                    !1,
                    r.evT
                  );
              },
              decls: 50,
              vars: 31,
              consts: [
                [1, "main-container"],
                [1, "content"],
                [1, "row", "mx-0"],
                [1, "col-lg-3", "col-md-4", "col-12"],
                [1, "card", "participent"],
                [1, "card-header"],
                [3, "icon", "click"],
                [1, "card-body"],
                [1, "not-active", 3, "ngClass"],
                [1, "fiels-box", "p-3"],
                [2, "display", "flex"],
                [
                  "type",
                  "text",
                  "pInputText",
                  "",
                  "placeholder",
                  "Name",
                  1,
                  "mr-2",
                  3,
                  "disabled",
                  "ngClass",
                  "ngModel",
                  "ngModelChange",
                ],
                ["label", "Add", 3, "disabled", "click"],
                ["class", "text-danger", 4, "ngIf"],
                [1, "numb-input"],
                [1, "p-float-label"],
                [
                  "type",
                  "number",
                  "min",
                  "1",
                  "pInputText",
                  "",
                  "placeholder",
                  "1",
                  "width",
                  "50px",
                  3,
                  "disabled",
                  "ngModel",
                  "ngModelChange",
                  "change",
                ],
                ["for", "float-input", 1, "m-0", 2, "left", "0.5rem"],
                [1, "p-field-checkbox", "d-flex", "align-items-center"],
                [
                  "type",
                  "checkbox",
                  2,
                  "width",
                  "unset",
                  "margin-left",
                  "10px",
                  "margin-right",
                  "0px",
                  3,
                  "disabled",
                  "ngModel",
                  "ngModelOptions",
                  "ngModelChange",
                ],
                ["for", "ps", 1, "text-nowrap"],
                [
                  "cdkDropList",
                  "",
                  1,
                  "example-list",
                  3,
                  "ngClass",
                  "cdkDropListDropped",
                ],
                [
                  "class",
                  "example-box",
                  "cdkDrag",
                  "",
                  3,
                  "ngClass",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                [1, "col-lg-9", "col-md-8", "col-12"],
                [1, "action-container"],
                [1, "action-button"],
                [
                  "pButton",
                  "",
                  "pRipple",
                  "",
                  "label",
                  "Play Daily",
                  "icon",
                  "pi pi-play",
                  1,
                  "p-button-primary",
                  3,
                  "disabled",
                  "click",
                ],
                [
                  "pButton",
                  "",
                  "pRipple",
                  "",
                  "label",
                  "Pause Daily",
                  "icon",
                  "pi pi-pause",
                  1,
                  "p-button-danger",
                  3,
                  "disabled",
                  "click",
                ],
                [
                  "pButton",
                  "",
                  "pRipple",
                  "",
                  "label",
                  "Reset Daily ",
                  "icon",
                  "pi pi-sliders-h",
                  1,
                  "p-button-warning",
                  3,
                  "click",
                ],
                [1, "card", "participent", "current", "mt-2"],
                ["label", "Done", "icon", "pi pi-check", 3, "click", 4, "ngIf"],
                [
                  "label",
                  "Finish",
                  "icon",
                  "pi pi-check-circle",
                  3,
                  "click",
                  4,
                  "ngIf",
                ],
                [1, "current-participant"],
                [1, "text-danger"],
                ["cdkDrag", "", 1, "example-box", 3, "ngClass"],
                [
                  "class",
                  "example-custom-placeholder",
                  4,
                  "cdkDragPlaceholder",
                ],
                [
                  "icon",
                  "pi pi-trash",
                  "pButton",
                  "",
                  "pRipple",
                  "",
                  "class",
                  "p-button-danger p-button-sm ",
                  "style",
                  "padding: 5px 8px; width: unset;",
                  3,
                  "disabled",
                  "click",
                  4,
                  "ngIf",
                ],
                [1, "example-custom-placeholder"],
                [
                  "icon",
                  "pi pi-trash",
                  "pButton",
                  "",
                  "pRipple",
                  "",
                  1,
                  "p-button-danger",
                  "p-button-sm",
                  2,
                  "padding",
                  "5px 8px",
                  "width",
                  "unset",
                  3,
                  "disabled",
                  "click",
                ],
                ["label", "Done", "icon", "pi pi-check", 3, "click"],
                ["label", "Finish", "icon", "pi pi-check-circle", 3, "click"],
              ],
              template: function (e, i) {
                1 & e &&
                  (r.TgZ(0, "div", 0),
                  r._UZ(1, "app-header"),
                  r.TgZ(2, "div", 1),
                  r.TgZ(3, "div", 2),
                  r.TgZ(4, "div", 3),
                  r.TgZ(5, "div", 4),
                  r.TgZ(6, "div", 5),
                  r.TgZ(7, "h1"),
                  r._uU(8),
                  r.qZA(),
                  r.TgZ(9, "p-button", 6),
                  r.NdJ("click", function () {
                    return (i.addParticipant = !i.addParticipant);
                  }),
                  r.qZA(),
                  r.qZA(),
                  r.TgZ(10, "div", 7),
                  r.TgZ(11, "div", 8),
                  r.TgZ(12, "div", 9),
                  r.TgZ(13, "div", 10),
                  r.TgZ(14, "input", 11),
                  r.NdJ("ngModelChange", function (o) {
                    return (i.participantName = o);
                  }),
                  r.qZA(),
                  r.TgZ(15, "p-button", 12),
                  r.NdJ("click", function () {
                    return i.addParticipants();
                  }),
                  r.qZA(),
                  r.qZA(),
                  r.YNc(16, ps, 2, 0, "small", 13),
                  r.TgZ(17, "div", 14),
                  r.TgZ(18, "span", 15),
                  r.TgZ(19, "input", 16),
                  r.NdJ("ngModelChange", function (o) {
                    return (i.participantTime = o);
                  })("change", function () {
                    return i.onTimeChange();
                  }),
                  r.qZA(),
                  r.TgZ(20, "label", 17),
                  r._uU(21, "Time"),
                  r.qZA(),
                  r.qZA(),
                  r.TgZ(22, "div", 18),
                  r.TgZ(23, "input", 19),
                  r.NdJ("ngModelChange", function (o) {
                    return (i.playSound = o);
                  }),
                  r.qZA(),
                  r.TgZ(24, "label", 20),
                  r._uU(25, "Play Sound"),
                  r.qZA(),
                  r.qZA(),
                  r.qZA(),
                  r.qZA(),
                  r.qZA(),
                  r.TgZ(26, "div", 21),
                  r.NdJ("cdkDropListDropped", function (o) {
                    return i.dropFunction(o);
                  }),
                  r.YNc(27, _s, 4, 6, "div", 22),
                  r.qZA(),
                  r.qZA(),
                  r.qZA(),
                  r.qZA(),
                  r.TgZ(28, "div", 23),
                  r.TgZ(29, "div", 24),
                  r.TgZ(30, "div", 25),
                  r.TgZ(31, "button", 26),
                  r.NdJ("click", function () {
                    return i.play();
                  }),
                  r.qZA(),
                  r.TgZ(32, "button", 27),
                  r.NdJ("click", function () {
                    return i.pause();
                  }),
                  r.qZA(),
                  r.TgZ(33, "button", 28),
                  r.NdJ("click", function () {
                    return i.reset();
                  }),
                  r.qZA(),
                  r.qZA(),
                  r.TgZ(34, "h6"),
                  r._uU(35, "Total scrum time : "),
                  r.TgZ(36, "span"),
                  r._uU(37),
                  r.ALo(38, "formatTime"),
                  r.qZA(),
                  r.qZA(),
                  r.qZA(),
                  r.TgZ(39, "div", 29),
                  r.TgZ(40, "div", 5),
                  r.TgZ(41, "h1"),
                  r._uU(42, "Current Participant"),
                  r.qZA(),
                  r.YNc(43, bs, 1, 0, "p-button", 30),
                  r.YNc(44, vs, 1, 0, "p-button", 31),
                  r.qZA(),
                  r.TgZ(45, "div", 7),
                  r.TgZ(46, "div", 32),
                  r.TgZ(47, "h6"),
                  r._uU(48),
                  r.qZA(),
                  r.YNc(49, ys, 3, 3, "h6", 13),
                  r.qZA(),
                  r.qZA(),
                  r.qZA(),
                  r.qZA(),
                  r.qZA(),
                  r.qZA(),
                  r.qZA()),
                  2 & e &&
                    (r.xp6(8),
                    r.hij("Participants (", i.participants.length, ")"),
                    r.xp6(1),
                    r.Q6J(
                      "icon",
                      i.addParticipant ? "pi pi-minus" : "pi pi-plus"
                    ),
                    r.xp6(2),
                    r.Q6J("ngClass", r.VKq(24, Ht, i.addParticipant)),
                    r.xp6(3),
                    r.Q6J("disabled", i.isPlayDisabled)(
                      "ngClass",
                      r.VKq(26, Cs, i.showError && !i.participantName)
                    )("ngModel", i.participantName),
                    r.xp6(1),
                    r.Q6J("disabled", i.isPlayDisabled),
                    r.xp6(1),
                    r.Q6J("ngIf", i.showError && !i.participantName),
                    r.xp6(3),
                    r.Q6J("disabled", i.isPlayDisabled)(
                      "ngModel",
                      i.participantTime
                    ),
                    r.xp6(4),
                    r.Q6J("disabled", i.isPlayDisabled)("ngModel", i.playSound)(
                      "ngModelOptions",
                      r.DdM(28, Ss)
                    ),
                    r.xp6(3),
                    r.Q6J("ngClass", r.VKq(29, Ht, i.addParticipant)),
                    r.xp6(1),
                    r.Q6J("ngForOf", i.participants),
                    r.xp6(4),
                    r.Q6J("disabled", i.isPlayDisabled),
                    r.xp6(1),
                    r.Q6J("disabled", !i.isPlayDisabled),
                    r.xp6(5),
                    r.Oqu(r.lcZ(38, 22, i.overallScrumTime)),
                    r.xp6(6),
                    r.Q6J(
                      "ngIf",
                      i.isPlayDisabled &&
                        i.runningParticipantName &&
                        "Allignments" != i.runningParticipantName
                    ),
                    r.xp6(1),
                    r.Q6J(
                      "ngIf",
                      i.isPlayDisabled &&
                        "Allignments" == i.runningParticipantName
                    ),
                    r.xp6(4),
                    r.Oqu(i.runningParticipantName),
                    r.xp6(1),
                    r.Q6J(
                      "ngIf",
                      i.runningParticipantName &&
                        "Allignments" != i.runningParticipantName
                    ));
              },
              directives: function () {
                return [
                  jn,
                  cs,
                  p.mk,
                  x.Fj,
                  hs,
                  x.JJ,
                  x.On,
                  p.O5,
                  x.qQ,
                  x.wV,
                  x.Wl,
                  Wn,
                  p.sg,
                  ls,
                  Yn,
                  Zn,
                ];
              },
              pipes: function () {
                return [Es];
              },
              styles: [
                '@font-face{font-family:"Montserrat";src:url(Montserrat-Regular.3cd786652b8a2e9d41f2.ttf);src:url(Montserrat-Regular.3cd786652b8a2e9d41f2.ttf) format("truetype")}input[_ngcontent-%COMP%]{outline:none}body[_ngcontent-%COMP%]::-webkit-scrollbar{border-radius:4px;width:4px}body[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #0000004d}body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:1px solid slategrey}*[_ngcontent-%COMP%]{box-sizing:border-box}img[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{vertical-align:top}a[_ngcontent-%COMP%]{display:inline-block;text-decoration:none}.loader[_ngcontent-%COMP%]{position:fixed;width:100%;display:flex;justify-content:center;align-items:center;height:100%;top:0;left:0;z-index:1099;background-color:#69696980}.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px}._btn-primary[_ngcontent-%COMP%]{background:#007bff;color:#fff;border-radius:4px}.loader-section[_ngcontent-%COMP%]{margin:0;padding:0;background:rgba(52,73,94,.5);height:100%;width:100%;display:flex;align-items:center;justify-content:center;font-family:"montserrat",sans-serif;position:fixed;top:0;left:0;z-index:1500}.loading[_ngcontent-%COMP%]{width:200px;height:200px;box-sizing:border-box;border-radius:50%;border-top:10px solid #2a2a2a;position:relative;animation:a1 2s linear infinite}.loading[_ngcontent-%COMP%]:before, .loading[_ngcontent-%COMP%]:after{content:"";width:200px;height:200px;position:absolute;left:0;top:-10px;box-sizing:border-box;border-radius:50%}.loading[_ngcontent-%COMP%]:before{border-top:10px solid #01aef0;transform:rotate(120deg)}.loading[_ngcontent-%COMP%]:after{border-top:10px solid #72b645;transform:rotate(240deg)}.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;width:200px;height:200px;color:#fff;text-align:center;line-height:200px;animation:a2 2s linear infinite}@keyframes a1{to{transform:rotate(360deg)}}@keyframes a2{to{transform:rotate(-360deg)}}.warningInput[_ngcontent-%COMP%]{border:1px solid #ff0000!important}.warningSpan[_ngcontent-%COMP%]{margin-bottom:0!important}.warningInputBorder[_ngcontent-%COMP%]     .mat-form-field-underline{background-color:red}.option-warning[_ngcontent-%COMP%]{border-bottom:1px solid #ff0000}.radioNull[_ngcontent-%COMP%]     .mat-radio-outer-circle{border:1px solid #ff0000}@media (max-width: 767.9px){  .wa-get-started-button{bottom:115px!important}}body[_ngcontent-%COMP%]{margin:0;padding:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,"Helvetica Neue",sans-serif}.main-container[_ngcontent-%COMP%]{width:100%;min-height:100vh;background:#1c1e21}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:20px}@media (max-width: 812px){.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:10px}}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .participent[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background:#3F51B5;border-bottom:1px solid #fff}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .participent[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:16px;font-weight:bold;margin:0;font-family:"Montserrat";color:#fff}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .participent[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]     .p-button{padding:5px 10px;width:unset;background:#ffffff;color:#3f51b5}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .participent[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:0;background:#1c1e21}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .participent[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .not-active[_ngcontent-%COMP%]{overflow:hidden;background:#fff;max-height:0;border-bottom:1px solid rgba(0,0,0,.12)}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .participent[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .not-active[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:7px 10px;width:100%;font-family:"Montserrat";font-size:13px;margin-right:10px}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .participent[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .not-active[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-family:"Montserrat"}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .participent[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .not-active[_ngcontent-%COMP%]   .numb-input[_ngcontent-%COMP%]{margin-top:15px;display:flex;align-items:center}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .participent[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .not-active[_ngcontent-%COMP%]   .numb-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:80px;text-align:center;margin-right:20px}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .participent[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .not-active[_ngcontent-%COMP%]   .numb-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:"Montserrat";font-size:13px;margin-left:10px}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .participent[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .not-active.active[_ngcontent-%COMP%]{max-height:135px!important}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .participent.current[_ngcontent-%COMP%]{min-height:calc(100vh - 179px)}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .participent.current[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}@media (max-width: 812px){.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}}@media (max-width: 767.9px){.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%]{margin-top:10px}}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#fff!important;font-size:16px;font-weight:bold;margin:0;font-family:"Montserrat";text-transform:capitalize}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:25px}@media (max-width: 812px){.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-top:10px}}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]{display:flex;align-items:center}@media (max-width: 767.9px){.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]{flex-wrap:wrap}}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]     .p-button{padding:10px;margin-right:10px;width:unset;color:#3f51b5;font-family:"Montserrat";font-size:14px;color:#fff;border:1px solid #fff}@media (max-width: 767.9px){.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .action-container[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]     .p-button{margin-top:10px}}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .current-participant[_ngcontent-%COMP%]{padding:20px}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .current-participant[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#fff;font-size:100px;font-weight:bold;text-align:center;padding:20px;margin:0;font-family:"Montserrat";text-transform:uppercase;line-height:35px}@media (max-width: 812px){.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .current-participant[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:25px}}.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .current-participant[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]:last-child{font-size:100px;margin-top:20px}@media (max-width: 812px){.main-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .current-participant[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]:last-child{font-size:40px}}  .example-list{width:500px;max-width:100%;min-height:60px;display:block;background:white;border-radius:0;overflow:hidden;overflow-y:auto;max-height:calc(100vh - 180px)}  .example-list.active{max-height:calc(100vh - 294px)!important}  .example-box{padding:10px;border-bottom:solid 1px #ccc;color:#fff;background:#1c1e21;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;font-size:14px;font-family:"Montserrat";font-weight:600;text-transform:uppercase}  .cdk-drag-preview{box-sizing:border-box;border-radius:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}  .cdk-drag-placeholder{opacity:0}  .cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}  .example-box:last-child{border:none}  .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#3F51B5}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#3F51B5}.error[_ngcontent-%COMP%]{border:1px solid #dc3545}.playing[_ngcontent-%COMP%]{background:#28a745!important}.played[_ngcontent-%COMP%]{background:#d2d6db!important}.p-button[_ngcontent-%COMP%]:disabled{background-color:#a5a5a5!important;color:#fff!important}',
              ],
            })),
            n
          );
        })(),
        Es = (() => {
          class n {
            transform(e) {
              const i = Math.floor((e % 3600) / 60);
              return (
                ("00" + i).slice(-2) +
                ":" +
                ("00" + Math.floor(e - 60 * i)).slice(-2)
              );
            }
          }
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??pipe = r.Yjl({ name: "formatTime", type: n, pure: !0 })),
            n
          );
        })();
      const ws = [{ path: "", component: Ts }];
      let Ps = (() => {
          class n {}
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??mod = r.oAB({ type: n })),
            (n.??inj = r.cJS({ imports: [[Oe.Bz.forChild(ws)], Oe.Bz] })),
            n
          );
        })(),
        Os = (() => {
          class n {}
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??mod = r.oAB({ type: n })),
            (n.??inj = r.cJS({ imports: [[p.ez], $n] })),
            n
          );
        })();
      const As = ["cb"],
        Rs = function (n, t, e) {
          return {
            "p-checkbox-label": !0,
            "p-checkbox-label-active": n,
            "p-disabled": t,
            "p-checkbox-label-focus": e,
          };
        };

      function ks(n, t) {
        if (1 & n) {
          const e = r.EpF();
          r.TgZ(0, "label", 7),
            r.NdJ("click", function (s) {
              r.CHM(e);
              const o = r.oxw(),
                a = r.MAs(3);
              return o.onClick(s, a, !0);
            }),
            r._uU(1),
            r.qZA();
        }
        if (2 & n) {
          const e = r.oxw();
          r.Tol(e.labelStyleClass),
            r.Q6J("ngClass", r.kEZ(5, Rs, e.checked, e.disabled, e.focused)),
            r.uIk("for", e.inputId),
            r.xp6(1),
            r.Oqu(e.label);
        }
      }
      const Ls = function (n, t, e) {
          return {
            "p-checkbox p-component": !0,
            "p-checkbox-checked": n,
            "p-checkbox-disabled": t,
            "p-checkbox-focused": e,
          };
        },
        Fs = function (n, t, e) {
          return { "p-highlight": n, "p-disabled": t, "p-focus": e };
        },
        Ns = { provide: x.JU, useExisting: (0, r.Gpc)(() => Bs), multi: !0 };
      let Bs = (() => {
          class n {
            constructor(e) {
              (this.cd = e),
                (this.checkboxIcon = "pi pi-check"),
                (this.onChange = new r.vpe()),
                (this.onModelChange = () => {}),
                (this.onModelTouched = () => {}),
                (this.focused = !1),
                (this.checked = !1);
            }
            onClick(e, i, s) {
              e.preventDefault(),
                !this.disabled &&
                  !this.readonly &&
                  ((this.checked = !this.checked),
                  this.updateModel(e),
                  s && i.focus());
            }
            updateModel(e) {
              this.binary
                ? this.onModelChange(this.checked)
                : (this.checked ? this.addValue() : this.removeValue(),
                  this.onModelChange(this.model),
                  this.formControl && this.formControl.setValue(this.model)),
                this.onChange.emit({ checked: this.checked, originalEvent: e });
            }
            handleChange(e) {
              this.readonly ||
                ((this.checked = e.target.checked), this.updateModel(e));
            }
            isChecked() {
              return this.binary
                ? this.model
                : this.model && this.model.indexOf(this.value) > -1;
            }
            removeValue() {
              this.model = this.model.filter((e) => e !== this.value);
            }
            addValue() {
              this.model = this.model
                ? [...this.model, this.value]
                : [this.value];
            }
            onFocus() {
              this.focused = !0;
            }
            onBlur() {
              (this.focused = !1), this.onModelTouched();
            }
            focus() {
              this.inputViewChild.nativeElement.focus();
            }
            writeValue(e) {
              (this.model = e),
                (this.checked = this.isChecked()),
                this.cd.markForCheck();
            }
            registerOnChange(e) {
              this.onModelChange = e;
            }
            registerOnTouched(e) {
              this.onModelTouched = e;
            }
            setDisabledState(e) {
              (this.disabled = e), this.cd.markForCheck();
            }
          }
          return (
            (n.??fac = function (e) {
              return new (e || n)(r.Y36(r.sBO));
            }),
            (n.??cmp = r.Xpm({
              type: n,
              selectors: [["p-checkbox"]],
              viewQuery: function (e, i) {
                if ((1 & e && r.Gf(As, 5), 2 & e)) {
                  let s;
                  r.iGM((s = r.CRH())) && (i.inputViewChild = s.first);
                }
              },
              hostAttrs: [1, "p-element"],
              inputs: {
                value: "value",
                name: "name",
                disabled: "disabled",
                binary: "binary",
                label: "label",
                ariaLabelledBy: "ariaLabelledBy",
                ariaLabel: "ariaLabel",
                tabindex: "tabindex",
                inputId: "inputId",
                style: "style",
                styleClass: "styleClass",
                labelStyleClass: "labelStyleClass",
                formControl: "formControl",
                checkboxIcon: "checkboxIcon",
                readonly: "readonly",
                required: "required",
              },
              outputs: { onChange: "onChange" },
              features: [r._Bn([Ns])],
              decls: 7,
              vars: 26,
              consts: [
                [3, "ngStyle", "ngClass"],
                [1, "p-hidden-accessible"],
                [
                  "type",
                  "checkbox",
                  3,
                  "readonly",
                  "value",
                  "checked",
                  "disabled",
                  "focus",
                  "blur",
                  "change",
                ],
                ["cb", ""],
                [1, "p-checkbox-box", 3, "ngClass", "click"],
                [1, "p-checkbox-icon", 3, "ngClass"],
                [3, "class", "ngClass", "click", 4, "ngIf"],
                [3, "ngClass", "click"],
              ],
              template: function (e, i) {
                if (1 & e) {
                  const s = r.EpF();
                  r.TgZ(0, "div", 0),
                    r.TgZ(1, "div", 1),
                    r.TgZ(2, "input", 2, 3),
                    r.NdJ("focus", function () {
                      return i.onFocus();
                    })("blur", function () {
                      return i.onBlur();
                    })("change", function (a) {
                      return i.handleChange(a);
                    }),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(4, "div", 4),
                    r.NdJ("click", function (a) {
                      r.CHM(s);
                      const l = r.MAs(3);
                      return i.onClick(a, l, !0);
                    }),
                    r._UZ(5, "span", 5),
                    r.qZA(),
                    r.qZA(),
                    r.YNc(6, ks, 2, 9, "label", 6);
                }
                2 & e &&
                  (r.Tol(i.styleClass),
                  r.Q6J("ngStyle", i.style)(
                    "ngClass",
                    r.kEZ(18, Ls, i.checked, i.disabled, i.focused)
                  ),
                  r.xp6(2),
                  r.Q6J("readonly", i.readonly)("value", i.value)(
                    "checked",
                    i.checked
                  )("disabled", i.disabled),
                  r.uIk("id", i.inputId)("name", i.name)(
                    "tabindex",
                    i.tabindex
                  )("aria-labelledby", i.ariaLabelledBy)(
                    "aria-label",
                    i.ariaLabel
                  )("aria-checked", i.checked)("required", i.required),
                  r.xp6(2),
                  r.Q6J(
                    "ngClass",
                    r.kEZ(22, Fs, i.checked, i.disabled, i.focused)
                  ),
                  r.xp6(1),
                  r.Q6J("ngClass", i.checked ? i.checkboxIcon : null),
                  r.xp6(1),
                  r.Q6J("ngIf", i.label));
              },
              directives: [p.PC, p.mk, p.O5],
              styles: [
                ".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;vertical-align:bottom}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}",
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            n
          );
        })(),
        Vs = (() => {
          class n {}
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??mod = r.oAB({ type: n })),
            (n.??inj = r.cJS({ imports: [[p.ez]] })),
            n
          );
        })(),
        Hs = (() => {
          class n {}
          return (
            (n.??fac = function (e) {
              return new (e || n)();
            }),
            (n.??mod = r.oAB({ type: n })),
            (n.??inj = r.cJS({
              imports: [[p.ez, x.u5, Ps, Os, ds, us, Vs, qn]],
            })),
            n
          );
        })();
    },
  },
]);
