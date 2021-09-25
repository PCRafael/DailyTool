(self.webpackChunkdaily_scrum = self.webpackChunkdaily_scrum || []).push([
  [179],
  {
    8255: (Ue) => {
      function le(j) {
        return Promise.resolve().then(() => {
          var b = new Error("Cannot find module '" + j + "'");
          throw ((b.code = "MODULE_NOT_FOUND"), b);
        });
      }
      (le.keys = () => []),
        (le.resolve = le),
        (le.id = 8255),
        (Ue.exports = le);
    },
    8583: (Ue, le, j) => {
      "use strict";
      j.d(le, {
        mr: () => Me,
        ez: () => Bi,
        K0: () => de,
        Do: () => Ee,
        V_: () => W,
        Ye: () => mt,
        S$: () => ae,
        mk: () => Dr,
        sg: () => Wn,
        O5: () => En,
        PC: () => At,
        tP: () => Dn,
        b0: () => gt,
        lw: () => re,
        EM: () => Mr,
        JF: () => ks,
        NF: () => Hr,
        w_: () => ne,
        bD: () => Ar,
        q: () => fe,
        Mx: () => Be,
        HT: () => ie,
      });
      var b = j(3018);
      let N = null;
      function fe() {
        return N;
      }
      function ie(E) {
        N || (N = E);
      }
      class ne {}
      const de = new b.OlP("DocumentToken");
      let re = (() => {
        class E {
          historyGo(D) {
            throw new Error("Not implemented");
          }
        }
        return (
          (E.ɵfac = function (D) {
            return new (D || E)();
          }),
          (E.ɵprov = (0, b.Yz7)({
            factory: Q,
            token: E,
            providedIn: "platform",
          })),
          E
        );
      })();
      function Q() {
        return (0, b.LFG)(G);
      }
      const W = new b.OlP("Location Initialized");
      let G = (() => {
        class E extends re {
          constructor(D) {
            super(), (this._doc = D), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return fe().getBaseHref(this._doc);
          }
          onPopState(D) {
            const O = fe().getGlobalEventTarget(this._doc, "window");
            return (
              O.addEventListener("popstate", D, !1),
              () => O.removeEventListener("popstate", D)
            );
          }
          onHashChange(D) {
            const O = fe().getGlobalEventTarget(this._doc, "window");
            return (
              O.addEventListener("hashchange", D, !1),
              () => O.removeEventListener("hashchange", D)
            );
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(D) {
            this.location.pathname = D;
          }
          pushState(D, O, B) {
            J() ? this._history.pushState(D, O, B) : (this.location.hash = B);
          }
          replaceState(D, O, B) {
            J()
              ? this._history.replaceState(D, O, B)
              : (this.location.hash = B);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(D = 0) {
            this._history.go(D);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (E.ɵfac = function (D) {
            return new (D || E)(b.LFG(de));
          }),
          (E.ɵprov = (0, b.Yz7)({
            factory: Z,
            token: E,
            providedIn: "platform",
          })),
          E
        );
      })();
      function J() {
        return !!window.history.pushState;
      }
      function Z() {
        return new G((0, b.LFG)(de));
      }
      function be(E, T) {
        if (0 == E.length) return T;
        if (0 == T.length) return E;
        let D = 0;
        return (
          E.endsWith("/") && D++,
          T.startsWith("/") && D++,
          2 == D ? E + T.substring(1) : 1 == D ? E + T : E + "/" + T
        );
      }
      function De(E) {
        const T = E.match(/#|\?|$/),
          D = (T && T.index) || E.length;
        return E.slice(0, D - ("/" === E[D - 1] ? 1 : 0)) + E.slice(D);
      }
      function pe(E) {
        return E && "?" !== E[0] ? "?" + E : E;
      }
      let ae = (() => {
        class E {
          historyGo(D) {
            throw new Error("Not implemented");
          }
        }
        return (
          (E.ɵfac = function (D) {
            return new (D || E)();
          }),
          (E.ɵprov = (0, b.Yz7)({ factory: $e, token: E, providedIn: "root" })),
          E
        );
      })();
      function $e(E) {
        const T = (0, b.LFG)(de).location;
        return new gt((0, b.LFG)(re), (T && T.origin) || "");
      }
      const Me = new b.OlP("appBaseHref");
      let gt = (() => {
          class E extends ae {
            constructor(D, O) {
              if (
                (super(),
                (this._platformLocation = D),
                (this._removeListenerFns = []),
                null == O && (O = this._platformLocation.getBaseHrefFromDOM()),
                null == O)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              this._baseHref = O;
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(D) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(D),
                this._platformLocation.onHashChange(D)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(D) {
              return be(this._baseHref, D);
            }
            path(D = !1) {
              const O =
                  this._platformLocation.pathname +
                  pe(this._platformLocation.search),
                B = this._platformLocation.hash;
              return B && D ? `${O}${B}` : O;
            }
            pushState(D, O, B, Y) {
              const oe = this.prepareExternalUrl(B + pe(Y));
              this._platformLocation.pushState(D, O, oe);
            }
            replaceState(D, O, B, Y) {
              const oe = this.prepareExternalUrl(B + pe(Y));
              this._platformLocation.replaceState(D, O, oe);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(D = 0) {
              var O, B;
              null === (B = (O = this._platformLocation).historyGo) ||
                void 0 === B ||
                B.call(O, D);
            }
          }
          return (
            (E.ɵfac = function (D) {
              return new (D || E)(b.LFG(re), b.LFG(Me, 8));
            }),
            (E.ɵprov = b.Yz7({ token: E, factory: E.ɵfac })),
            E
          );
        })(),
        Ee = (() => {
          class E extends ae {
            constructor(D, O) {
              super(),
                (this._platformLocation = D),
                (this._baseHref = ""),
                (this._removeListenerFns = []),
                null != O && (this._baseHref = O);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(D) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(D),
                this._platformLocation.onHashChange(D)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(D = !1) {
              let O = this._platformLocation.hash;
              return null == O && (O = "#"), O.length > 0 ? O.substring(1) : O;
            }
            prepareExternalUrl(D) {
              const O = be(this._baseHref, D);
              return O.length > 0 ? "#" + O : O;
            }
            pushState(D, O, B, Y) {
              let oe = this.prepareExternalUrl(B + pe(Y));
              0 == oe.length && (oe = this._platformLocation.pathname),
                this._platformLocation.pushState(D, O, oe);
            }
            replaceState(D, O, B, Y) {
              let oe = this.prepareExternalUrl(B + pe(Y));
              0 == oe.length && (oe = this._platformLocation.pathname),
                this._platformLocation.replaceState(D, O, oe);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(D = 0) {
              var O, B;
              null === (B = (O = this._platformLocation).historyGo) ||
                void 0 === B ||
                B.call(O, D);
            }
          }
          return (
            (E.ɵfac = function (D) {
              return new (D || E)(b.LFG(re), b.LFG(Me, 8));
            }),
            (E.ɵprov = b.Yz7({ token: E, factory: E.ɵfac })),
            E
          );
        })(),
        mt = (() => {
          class E {
            constructor(D, O) {
              (this._subject = new b.vpe()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = D);
              const B = this._platformStrategy.getBaseHref();
              (this._platformLocation = O),
                (this._baseHref = De(rr(B))),
                this._platformStrategy.onPopState((Y) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: Y.state,
                    type: Y.type,
                  });
                });
            }
            path(D = !1) {
              return this.normalize(this._platformStrategy.path(D));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(D, O = "") {
              return this.path() == this.normalize(D + pe(O));
            }
            normalize(D) {
              return E.stripTrailingSlash(
                (function (E, T) {
                  return E && T.startsWith(E) ? T.substring(E.length) : T;
                })(this._baseHref, rr(D))
              );
            }
            prepareExternalUrl(D) {
              return (
                D && "/" !== D[0] && (D = "/" + D),
                this._platformStrategy.prepareExternalUrl(D)
              );
            }
            go(D, O = "", B = null) {
              this._platformStrategy.pushState(B, "", D, O),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(D + pe(O)),
                  B
                );
            }
            replaceState(D, O = "", B = null) {
              this._platformStrategy.replaceState(B, "", D, O),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(D + pe(O)),
                  B
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            historyGo(D = 0) {
              var O, B;
              null === (B = (O = this._platformStrategy).historyGo) ||
                void 0 === B ||
                B.call(O, D);
            }
            onUrlChange(D) {
              this._urlChangeListeners.push(D),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((O) => {
                    this._notifyUrlChangeListeners(O.url, O.state);
                  }));
            }
            _notifyUrlChangeListeners(D = "", O) {
              this._urlChangeListeners.forEach((B) => B(D, O));
            }
            subscribe(D, O, B) {
              return this._subject.subscribe({
                next: D,
                error: O,
                complete: B,
              });
            }
          }
          return (
            (E.ɵfac = function (D) {
              return new (D || E)(b.LFG(ae), b.LFG(re));
            }),
            (E.normalizeQueryParams = pe),
            (E.joinWithSlash = be),
            (E.stripTrailingSlash = De),
            (E.ɵprov = (0, b.Yz7)({
              factory: Oe,
              token: E,
              providedIn: "root",
            })),
            E
          );
        })();
      function Oe() {
        return new mt((0, b.LFG)(ae), (0, b.LFG)(re));
      }
      function rr(E) {
        return E.replace(/\/index.html$/, "");
      }
      var yt = (() => (
        ((yt = yt || {})[(yt.Zero = 0)] = "Zero"),
        (yt[(yt.One = 1)] = "One"),
        (yt[(yt.Two = 2)] = "Two"),
        (yt[(yt.Few = 3)] = "Few"),
        (yt[(yt.Many = 4)] = "Many"),
        (yt[(yt.Other = 5)] = "Other"),
        yt
      ))();
      const xt = b.kL8;
      class Zt {}
      let os = (() => {
        class E extends Zt {
          constructor(D) {
            super(), (this.locale = D);
          }
          getPluralCategory(D, O) {
            switch (xt(O || this.locale)(D)) {
              case yt.Zero:
                return "zero";
              case yt.One:
                return "one";
              case yt.Two:
                return "two";
              case yt.Few:
                return "few";
              case yt.Many:
                return "many";
              default:
                return "other";
            }
          }
        }
        return (
          (E.ɵfac = function (D) {
            return new (D || E)(b.LFG(b.soG));
          }),
          (E.ɵprov = b.Yz7({ token: E, factory: E.ɵfac })),
          E
        );
      })();
      function Be(E, T) {
        T = encodeURIComponent(T);
        for (const D of E.split(";")) {
          const O = D.indexOf("="),
            [B, Y] = -1 == O ? [D, ""] : [D.slice(0, O), D.slice(O + 1)];
          if (B.trim() === T) return decodeURIComponent(Y);
        }
        return null;
      }
      let Dr = (() => {
        class E {
          constructor(D, O, B, Y) {
            (this._iterableDiffers = D),
              (this._keyValueDiffers = O),
              (this._ngEl = B),
              (this._renderer = Y),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(D) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                "string" == typeof D ? D.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(D) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = "string" == typeof D ? D.split(/\s+/) : D),
              this._rawClass &&
                ((0, b.sIi)(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const D = this._iterableDiffer.diff(this._rawClass);
              D && this._applyIterableChanges(D);
            } else if (this._keyValueDiffer) {
              const D = this._keyValueDiffer.diff(this._rawClass);
              D && this._applyKeyValueChanges(D);
            }
          }
          _applyKeyValueChanges(D) {
            D.forEachAddedItem((O) => this._toggleClass(O.key, O.currentValue)),
              D.forEachChangedItem((O) =>
                this._toggleClass(O.key, O.currentValue)
              ),
              D.forEachRemovedItem((O) => {
                O.previousValue && this._toggleClass(O.key, !1);
              });
          }
          _applyIterableChanges(D) {
            D.forEachAddedItem((O) => {
              if ("string" != typeof O.item)
                throw new Error(
                  `NgClass can only toggle CSS classes expressed as strings, got ${(0,
                  b.AaK)(O.item)}`
                );
              this._toggleClass(O.item, !0);
            }),
              D.forEachRemovedItem((O) => this._toggleClass(O.item, !1));
          }
          _applyClasses(D) {
            D &&
              (Array.isArray(D) || D instanceof Set
                ? D.forEach((O) => this._toggleClass(O, !0))
                : Object.keys(D).forEach((O) => this._toggleClass(O, !!D[O])));
          }
          _removeClasses(D) {
            D &&
              (Array.isArray(D) || D instanceof Set
                ? D.forEach((O) => this._toggleClass(O, !1))
                : Object.keys(D).forEach((O) => this._toggleClass(O, !1)));
          }
          _toggleClass(D, O) {
            (D = D.trim()) &&
              D.split(/\s+/g).forEach((B) => {
                O
                  ? this._renderer.addClass(this._ngEl.nativeElement, B)
                  : this._renderer.removeClass(this._ngEl.nativeElement, B);
              });
          }
        }
        return (
          (E.ɵfac = function (D) {
            return new (D || E)(
              b.Y36(b.ZZ4),
              b.Y36(b.aQg),
              b.Y36(b.SBq),
              b.Y36(b.Qsj)
            );
          }),
          (E.ɵdir = b.lG2({
            type: E,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
          })),
          E
        );
      })();
      class dn {
        constructor(T, D, O, B) {
          (this.$implicit = T),
            (this.ngForOf = D),
            (this.index = O),
            (this.count = B);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let Wn = (() => {
        class E {
          constructor(D, O, B) {
            (this._viewContainer = D),
              (this._template = O),
              (this._differs = B),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(D) {
            (this._ngForOf = D), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(D) {
            this._trackByFn = D;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(D) {
            D && (this._template = D);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const D = this._ngForOf;
              if (!this._differ && D)
                try {
                  this._differ = this._differs
                    .find(D)
                    .create(this.ngForTrackBy);
                } catch (O) {
                  throw new Error(
                    `Cannot find a differ supporting object '${D}' of type '${(function (
                      E
                    ) {
                      return E.name || typeof E;
                    })(
                      D
                    )}'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            if (this._differ) {
              const D = this._differ.diff(this._ngForOf);
              D && this._applyChanges(D);
            }
          }
          _applyChanges(D) {
            const O = [];
            D.forEachOperation((B, Y, oe) => {
              if (null == B.previousIndex) {
                const v = this._viewContainer.createEmbeddedView(
                    this._template,
                    new dn(null, this._ngForOf, -1, -1),
                    null === oe ? void 0 : oe
                  ),
                  _ = new Lt(B, v);
                O.push(_);
              } else if (null == oe)
                this._viewContainer.remove(null === Y ? void 0 : Y);
              else if (null !== Y) {
                const v = this._viewContainer.get(Y);
                this._viewContainer.move(v, oe);
                const _ = new Lt(B, v);
                O.push(_);
              }
            });
            for (let B = 0; B < O.length; B++)
              this._perViewChange(O[B].view, O[B].record);
            for (let B = 0, Y = this._viewContainer.length; B < Y; B++) {
              const oe = this._viewContainer.get(B);
              (oe.context.index = B),
                (oe.context.count = Y),
                (oe.context.ngForOf = this._ngForOf);
            }
            D.forEachIdentityChange((B) => {
              this._viewContainer.get(B.currentIndex).context.$implicit =
                B.item;
            });
          }
          _perViewChange(D, O) {
            D.context.$implicit = O.item;
          }
          static ngTemplateContextGuard(D, O) {
            return !0;
          }
        }
        return (
          (E.ɵfac = function (D) {
            return new (D || E)(b.Y36(b.s_b), b.Y36(b.Rgc), b.Y36(b.ZZ4));
          }),
          (E.ɵdir = b.lG2({
            type: E,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          E
        );
      })();
      class Lt {
        constructor(T, D) {
          (this.record = T), (this.view = D);
        }
      }
      let En = (() => {
        class E {
          constructor(D, O) {
            (this._viewContainer = D),
              (this._context = new fn()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = O);
          }
          set ngIf(D) {
            (this._context.$implicit = this._context.ngIf = D),
              this._updateView();
          }
          set ngIfThen(D) {
            ft("ngIfThen", D),
              (this._thenTemplateRef = D),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(D) {
            ft("ngIfElse", D),
              (this._elseTemplateRef = D),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(D, O) {
            return !0;
          }
        }
        return (
          (E.ɵfac = function (D) {
            return new (D || E)(b.Y36(b.s_b), b.Y36(b.Rgc));
          }),
          (E.ɵdir = b.lG2({
            type: E,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
          })),
          E
        );
      })();
      class fn {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function ft(E, T) {
        if (T && !T.createEmbeddedView)
          throw new Error(
            `${E} must be a TemplateRef, but received '${(0, b.AaK)(T)}'.`
          );
      }
      let At = (() => {
          class E {
            constructor(D, O, B) {
              (this._ngEl = D),
                (this._differs = O),
                (this._renderer = B),
                (this._ngStyle = null),
                (this._differ = null);
            }
            set ngStyle(D) {
              (this._ngStyle = D),
                !this._differ &&
                  D &&
                  (this._differ = this._differs.find(D).create());
            }
            ngDoCheck() {
              if (this._differ) {
                const D = this._differ.diff(this._ngStyle);
                D && this._applyChanges(D);
              }
            }
            _setStyle(D, O) {
              const [B, Y] = D.split(".");
              null != (O = null != O && Y ? `${O}${Y}` : O)
                ? this._renderer.setStyle(this._ngEl.nativeElement, B, O)
                : this._renderer.removeStyle(this._ngEl.nativeElement, B);
            }
            _applyChanges(D) {
              D.forEachRemovedItem((O) => this._setStyle(O.key, null)),
                D.forEachAddedItem((O) =>
                  this._setStyle(O.key, O.currentValue)
                ),
                D.forEachChangedItem((O) =>
                  this._setStyle(O.key, O.currentValue)
                );
            }
          }
          return (
            (E.ɵfac = function (D) {
              return new (D || E)(b.Y36(b.SBq), b.Y36(b.aQg), b.Y36(b.Qsj));
            }),
            (E.ɵdir = b.lG2({
              type: E,
              selectors: [["", "ngStyle", ""]],
              inputs: { ngStyle: "ngStyle" },
            })),
            E
          );
        })(),
        Dn = (() => {
          class E {
            constructor(D) {
              (this._viewContainerRef = D),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null);
            }
            ngOnChanges(D) {
              if (D.ngTemplateOutlet) {
                const O = this._viewContainerRef;
                this._viewRef && O.remove(O.indexOf(this._viewRef)),
                  (this._viewRef = this.ngTemplateOutlet
                    ? O.createEmbeddedView(
                        this.ngTemplateOutlet,
                        this.ngTemplateOutletContext
                      )
                    : null);
              } else
                this._viewRef &&
                  D.ngTemplateOutletContext &&
                  this.ngTemplateOutletContext &&
                  (this._viewRef.context = this.ngTemplateOutletContext);
            }
          }
          return (
            (E.ɵfac = function (D) {
              return new (D || E)(b.Y36(b.s_b));
            }),
            (E.ɵdir = b.lG2({
              type: E,
              selectors: [["", "ngTemplateOutlet", ""]],
              inputs: {
                ngTemplateOutletContext: "ngTemplateOutletContext",
                ngTemplateOutlet: "ngTemplateOutlet",
              },
              features: [b.TTD],
            })),
            E
          );
        })(),
        Bi = (() => {
          class E {}
          return (
            (E.ɵfac = function (D) {
              return new (D || E)();
            }),
            (E.ɵmod = b.oAB({ type: E })),
            (E.ɵinj = b.cJS({ providers: [{ provide: Zt, useClass: os }] })),
            E
          );
        })();
      const Ar = "browser";
      function Hr(E) {
        return E === Ar;
      }
      let Mr = (() => {
        class E {}
        return (
          (E.ɵprov = (0, b.Yz7)({
            token: E,
            providedIn: "root",
            factory: () => new Ir((0, b.LFG)(de), window),
          })),
          E
        );
      })();
      class Ir {
        constructor(T, D) {
          (this.document = T), (this.window = D), (this.offset = () => [0, 0]);
        }
        setOffset(T) {
          this.offset = Array.isArray(T) ? () => T : T;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(T) {
          this.supportsScrolling() && this.window.scrollTo(T[0], T[1]);
        }
        scrollToAnchor(T) {
          if (!this.supportsScrolling()) return;
          const D = (function (E, T) {
            const D = E.getElementById(T) || E.getElementsByName(T)[0];
            if (D) return D;
            if (
              "function" == typeof E.createTreeWalker &&
              E.body &&
              (E.body.createShadowRoot || E.body.attachShadow)
            ) {
              const O = E.createTreeWalker(E.body, NodeFilter.SHOW_ELEMENT);
              let B = O.currentNode;
              for (; B; ) {
                const Y = B.shadowRoot;
                if (Y) {
                  const oe =
                    Y.getElementById(T) || Y.querySelector(`[name="${T}"]`);
                  if (oe) return oe;
                }
                B = O.nextNode();
              }
            }
            return null;
          })(this.document, T);
          D && (this.scrollToElement(D), this.attemptFocus(D));
        }
        setHistoryScrollRestoration(T) {
          if (this.supportScrollRestoration()) {
            const D = this.window.history;
            D && D.scrollRestoration && (D.scrollRestoration = T);
          }
        }
        scrollToElement(T) {
          const D = T.getBoundingClientRect(),
            O = D.left + this.window.pageXOffset,
            B = D.top + this.window.pageYOffset,
            Y = this.offset();
          this.window.scrollTo(O - Y[0], B - Y[1]);
        }
        attemptFocus(T) {
          return T.focus(), this.document.activeElement === T;
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const T =
              Gr(this.window.history) ||
              Gr(Object.getPrototypeOf(this.window.history));
            return !(!T || (!T.writable && !T.set));
          } catch (T) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch (T) {
            return !1;
          }
        }
      }
      function Gr(E) {
        return Object.getOwnPropertyDescriptor(E, "scrollRestoration");
      }
      class ks {}
    },
    3018: (Ue, le, j) => {
      "use strict";
      j.d(le, {
        deG: () => Cs,
        tb: () => u_,
        AFp: () => o_,
        ip1: () => lf,
        CZH: () => rl,
        hGG: () => SA,
        z2F: () => Xl,
        sBO: () => _w,
        Sil: () => Jl,
        _Vd: () => Ka,
        EJc: () => d_,
        SBq: () => Oi,
        qLn: () => Aa,
        vpe: () => Pi,
        gxx: () => Oa,
        tBr: () => wo,
        XFs: () => Ae,
        OlP: () => Ct,
        zs3: () => Ut,
        ZZ4: () => xu,
        aQg: () => Vu,
        soG: () => qu,
        YKP: () => qm,
        v3s: () => sA,
        h0i: () => ea,
        PXZ: () => JS,
        R0b: () => Xr,
        FiY: () => yn,
        Lbi: () => l_,
        g9A: () => a_,
        Qsj: () => rw,
        FYo: () => Fu,
        JOm: () => Ti,
        Tiy: () => xd,
        q3G: () => Xt,
        tp0: () => Zr,
        EAV: () => lA,
        Rgc: () => jl,
        dDg: () => g_,
        DyG: () => Ea,
        GfV: () => Bm,
        s_b: () => Bu,
        ifc: () => Tt,
        eFA: () => E_,
        G48: () => WS,
        Gpc: () => pe,
        f3M: () => We,
        _c5: () => _A,
        VLi: () => GS,
        c2e: () => c_,
        zSh: () => Ml,
        wAp: () => je,
        vHH: () => gt,
        EiD: () => Xf,
        mCW: () => vl,
        qzn: () => Sa,
        JVY: () => fC,
        pB0: () => mC,
        eBb: () => pC,
        L6k: () => hC,
        LAX: () => gC,
        cg1: () => Ad,
        Tjo: () => mA,
        kL8: () => am,
        yhl: () => Wf,
        dqk: () => Re,
        sIi: () => Nl,
        CqO: () => yd,
        QGY: () => md,
        F4k: () => fg,
        RDi: () => D,
        AaK: () => Z,
        z3N: () => io,
        qOj: () => sd,
        TTD: () => Hr,
        _Bn: () => Fm,
        xp6: () => Lh,
        uIk: () => ad,
        Tol: () => xg,
        ekj: () => Dd,
        Suo: () => Ly,
        Xpm: () => Er,
        lG2: () => ar,
        Yz7: () => wt,
        cJS: () => Un,
        oAB: () => Ot,
        Yjl: () => xr,
        Y36: () => Pl,
        _UZ: () => ag,
        GkF: () => cg,
        qZA: () => gd,
        TgZ: () => pd,
        EpF: () => dg,
        n5z: () => C,
        Ikx: () => Sd,
        LFG: () => ye,
        $8M: () => R,
        NdJ: () => _d,
        CRH: () => By,
        oxw: () => mg,
        ALo: () => Oy,
        lcZ: () => Py,
        Hsn: () => _g,
        F$t: () => yg,
        Q6J: () => fd,
        DdM: () => Ey,
        VKq: () => Dy,
        WLB: () => by,
        kEZ: () => wy,
        l5B: () => Sy,
        qbA: () => Ay,
        iGM: () => Vy,
        MAs: () => Kp,
        evT: () => fh,
        CHM: () => oa,
        LSH: () => mc,
        kYT: () => Ht,
        Udp: () => Ed,
        YNc: () => Yp,
        _uU: () => $g,
        Oqu: () => wd,
        hij: () => Tu,
        Gf: () => ky,
      });
      var b = j(9765),
        N = j(5319),
        fe = j(7574),
        he = j(6682),
        ie = j(2441);
      var re = j(1307);
      function Q() {
        return new b.xQ();
      }
      function G(e) {
        for (let t in e) if (e[t] === G) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function J(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function Z(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(Z).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function be(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const De = G({ __forward_ref__: G });
      function pe(e) {
        return (
          (e.__forward_ref__ = pe),
          (e.toString = function () {
            return Z(this());
          }),
          e
        );
      }
      function ae(e) {
        return $e(e) ? e() : e;
      }
      function $e(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(De) &&
          e.__forward_ref__ === pe
        );
      }
      class gt extends Error {
        constructor(t, n) {
          super(
            (function (e, t) {
              return `${e ? `NG0${e}: ` : ""}${t}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function Oe(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function Kt(e) {
        return "function" == typeof e
          ? e.name || e.toString()
          : "object" == typeof e && null != e && "function" == typeof e.type
          ? e.type.name || e.type.toString()
          : Oe(e);
      }
      function yt(e, t) {
        const n = t ? ` in ${t}` : "";
        throw new gt("201", `No provider for ${Kt(e)} found${n}`);
      }
      function Nt(e, t) {
        null == e &&
          (function (e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, "!=");
      }
      function wt(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function Un(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function xt(e) {
        return ts(e, ze) || ts(e, Rs);
      }
      function ts(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function li(e) {
        return e && (e.hasOwnProperty(_n) || e.hasOwnProperty(nn))
          ? e[_n]
          : null;
      }
      const ze = G({ ɵprov: G }),
        _n = G({ ɵinj: G }),
        Rs = G({ ngInjectableDef: G }),
        nn = G({ ngInjectorDef: G });
      var Ae = (() => (
        ((Ae = Ae || {})[(Ae.Default = 0)] = "Default"),
        (Ae[(Ae.Host = 1)] = "Host"),
        (Ae[(Ae.Self = 2)] = "Self"),
        (Ae[(Ae.SkipSelf = 4)] = "SkipSelf"),
        (Ae[(Ae.Optional = 8)] = "Optional"),
        Ae
      ))();
      let sr;
      function Cn(e) {
        const t = sr;
        return (sr = e), t;
      }
      function ht(e, t, n) {
        const r = xt(e);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & Ae.Optional
          ? null
          : void 0 !== t
          ? t
          : void yt(Z(e), "Injector");
      }
      function xe(e) {
        return { toString: e }.toString();
      }
      var an = (() => (
          ((an = an || {})[(an.OnPush = 0)] = "OnPush"),
          (an[(an.Default = 1)] = "Default"),
          an
        ))(),
        Tt = (() => (
          ((Tt = Tt || {})[(Tt.Emulated = 0)] = "Emulated"),
          (Tt[(Tt.None = 2)] = "None"),
          (Tt[(Tt.ShadowDom = 3)] = "ShadowDom"),
          Tt
        ))();
      const Tn = "undefined" != typeof globalThis && globalThis,
        Pr = "undefined" != typeof window && window,
        pt =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        ns = "undefined" != typeof global && global,
        Re = Tn || ns || Pr || pt,
        Mn = {},
        ve = [],
        rs = G({ ɵcmp: G }),
        In = G({ ɵdir: G }),
        Cr = G({ ɵpipe: G }),
        or = G({ ɵmod: G }),
        ui = G({ ɵloc: G }),
        Hn = G({ ɵfac: G }),
        vr = G({ __NG_ELEMENT_ID__: G });
      let ln = 0;
      function Er(e) {
        return xe(() => {
          const n = {},
            r = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: n,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === an.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: e.selectors || ve,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || Tt.Emulated,
              id: "c",
              styles: e.styles || ve,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            s = e.directives,
            i = e.features,
            a = e.pipes;
          return (
            (r.id += ln++),
            (r.inputs = vn(e.inputs, n)),
            (r.outputs = vn(e.outputs)),
            i && i.forEach((u) => u(r)),
            (r.directiveDefs = s
              ? () => ("function" == typeof s ? s() : s).map(Fr)
              : null),
            (r.pipeDefs = a
              ? () => ("function" == typeof a ? a() : a).map(ss)
              : null),
            r
          );
        });
      }
      function Fr(e) {
        return (
          St(e) ||
          (function (e) {
            return e[In] || null;
          })(e)
        );
      }
      function ss(e) {
        return (function (e) {
          return e[Cr] || null;
        })(e);
      }
      const Vt = {};
      function Ot(e) {
        return xe(() => {
          const t = {
            type: e.type,
            bootstrap: e.bootstrap || ve,
            declarations: e.declarations || ve,
            imports: e.imports || ve,
            exports: e.exports || ve,
            transitiveCompileScopes: null,
            schemas: e.schemas || null,
            id: e.id || null,
          };
          return null != e.id && (Vt[e.id] = e.type), t;
        });
      }
      function Ht(e, t) {
        return xe(() => {
          const n = Gt(e, !0);
          (n.declarations = t.declarations || ve),
            (n.imports = t.imports || ve),
            (n.exports = t.exports || ve);
        });
      }
      function vn(e, t) {
        if (null == e) return Mn;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let s = e[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])),
              (n[s] = r),
              t && (t[s] = i);
          }
        return n;
      }
      const ar = Er;
      function xr(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function St(e) {
        return e[rs] || null;
      }
      function Gt(e, t) {
        const n = e[or] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${Z(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function hn(e) {
        return Array.isArray(e) && "object" == typeof e[1];
      }
      function nt(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function zn(e) {
        return 0 != (8 & e.flags);
      }
      function Vn(e) {
        return 2 == (2 & e.flags);
      }
      function pn(e) {
        return 1 == (1 & e.flags);
      }
      function Jt(e) {
        return null !== e.template;
      }
      function qn(e) {
        return 0 != (512 & e[2]);
      }
      function dr(e, t) {
        return e.hasOwnProperty(Hn) ? e[Hn] : null;
      }
      class $r {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Hr() {
        return Tr;
      }
      function Tr(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = ji), ds;
      }
      function ds() {
        const e = Mr(this),
          t = null == e ? void 0 : e.current;
        if (t) {
          const n = e.previous;
          if (n === Mn) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function ji(e, t, n, r) {
        const s =
            Mr(e) ||
            (function (e, t) {
              return (e[Ui] = t);
            })(e, { previous: Mn, current: null }),
          i = s.current || (s.current = {}),
          a = s.previous,
          u = this.declaredInputs[n],
          h = a[u];
        (i[u] = new $r(h && h.currentValue, t, a === Mn)), (e[r] = t);
      }
      Hr.ngInherit = !0;
      const Ui = "__ngSimpleChanges__";
      function Mr(e) {
        return e[Ui] || null;
      }
      let T;
      function D(e) {
        T = e;
      }
      function Y(e) {
        return !!e.listen;
      }
      const v = {
        createRenderer: (e, t) =>
          void 0 !== T ? T : "undefined" != typeof document ? document : void 0,
      };
      function g(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function ge(e, t) {
        return g(t[e]);
      }
      function we(e, t) {
        return g(t[e.index]);
      }
      function vt(e, t) {
        return e.data[t];
      }
      function Ft(e, t) {
        return e[t];
      }
      function Et(e, t) {
        const n = t[e];
        return hn(n) ? n : n[0];
      }
      function bn(e) {
        return 4 == (4 & e[2]);
      }
      function Yn(e) {
        return 128 == (128 & e[2]);
      }
      function kn(e, t) {
        return null == t ? null : e[t];
      }
      function $i(e) {
        e[18] = 0;
      }
      function Io(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (
          ;
          null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (r[5] += t), (n = r), (r = r[3]);
      }
      const Le = {
        lFrame: ua(null),
        bindingsEnabled: !0,
        isInCheckNoChangesMode: !1,
      };
      function pi() {
        return Le.bindingsEnabled;
      }
      function se() {
        return Le.lFrame.lView;
      }
      function st() {
        return Le.lFrame.tView;
      }
      function oa(e) {
        return (Le.lFrame.contextLView = e), e[8];
      }
      function Wt() {
        let e = po();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function po() {
        return Le.lFrame.currentTNode;
      }
      function Nn(e, t) {
        const n = Le.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function gi() {
        return Le.lFrame.isParent;
      }
      function Wr() {
        Le.lFrame.isParent = !1;
      }
      function Ls() {
        return Le.isInCheckNoChangesMode;
      }
      function ps(e) {
        Le.isInCheckNoChangesMode = e;
      }
      function wn() {
        const e = Le.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function _i() {
        return Le.lFrame.bindingIndex++;
      }
      function fr(e) {
        const t = Le.lFrame,
          n = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + e), n;
      }
      function Oo(e, t) {
        const n = Le.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), Po(t);
      }
      function Po(e) {
        Le.lFrame.currentDirectiveIndex = e;
      }
      function la() {
        return Le.lFrame.currentQueryIndex;
      }
      function Fo(e) {
        Le.lFrame.currentQueryIndex = e;
      }
      function xo(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function dl(e, t, n) {
        if (n & Ae.SkipSelf) {
          let s = t,
            i = e;
          for (
            ;
            !((s = s.parent),
            null !== s ||
              n & Ae.Host ||
              ((s = xo(i)), null === s || ((i = i[15]), 10 & s.type)));

          );
          if (null === s) return !1;
          (t = s), (e = i);
        }
        const r = (Le.lFrame = fl());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function yo(e) {
        const t = fl(),
          n = e[1];
        (Le.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function fl() {
        const e = Le.lFrame,
          t = null === e ? null : e.child;
        return null === t ? ua(e) : t;
      }
      function ua(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Vo() {
        const e = Le.lFrame;
        return (
          (Le.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const ca = Vo;
      function Bs() {
        const e = Vo();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function gn() {
        return Le.lFrame.selectedIndex;
      }
      function gs(e) {
        Le.lFrame.selectedIndex = e;
      }
      function Mt() {
        const e = Le.lFrame;
        return vt(e.tView, e.selectedIndex);
      }
      function zi(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const i = e.data[n].type.prototype,
            {
              ngAfterContentInit: a,
              ngAfterContentChecked: u,
              ngAfterViewInit: h,
              ngAfterViewChecked: y,
              ngOnDestroy: A,
            } = i;
          a && (e.contentHooks || (e.contentHooks = [])).push(-n, a),
            u &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, u),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, u)),
            h && (e.viewHooks || (e.viewHooks = [])).push(-n, h),
            y &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, y),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, y)),
            null != A && (e.destroyHooks || (e.destroyHooks = [])).push(n, A);
        }
      }
      function js(e, t, n) {
        Us(e, t, 3, n);
      }
      function qi(e, t, n, r) {
        (3 & e[2]) === n && Us(e, t, n, r);
      }
      function Bo(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function Us(e, t, n, r) {
        const i = null != r ? r : -1,
          a = t.length - 1;
        let u = 0;
        for (let h = void 0 !== r ? 65535 & e[18] : 0; h < a; h++)
          if ("number" == typeof t[h + 1]) {
            if (((u = t[h]), null != r && u >= r)) break;
          } else
            t[h] < 0 && (e[18] += 65536),
              (u < i || -1 == i) &&
                (pa(e, n, t, h), (e[18] = (4294901760 & e[18]) + h + 2)),
              h++;
      }
      function pa(e, t, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          u = e[s ? -n[r] : n[r]];
        if (s) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              i.call(u);
            } finally {
            }
          }
        } else
          try {
            i.call(u);
          } finally {
          }
      }
      class mn {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function zr(e, t, n) {
        const r = Y(e);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ("number" == typeof i) {
            if (0 !== i) break;
            s++;
            const a = n[s++],
              u = n[s++],
              h = n[s++];
            r ? e.setAttribute(t, u, h, a) : t.setAttributeNS(a, u, h);
          } else {
            const a = i,
              u = n[++s];
            _o(a)
              ? r && e.setProperty(t, a, u)
              : r
              ? e.setAttribute(t, a, u)
              : t.setAttribute(a, u),
              s++;
          }
        }
        return s;
      }
      function Hs(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function _o(e) {
        return 64 === e.charCodeAt(0);
      }
      function Yi(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const s = t[r];
              "number" == typeof s
                ? (n = s)
                : 0 === n ||
                  Ki(e, n, s, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function Ki(e, t, n, r, s) {
        let i = 0,
          a = e.length;
        if (-1 === t) a = -1;
        else
          for (; i < e.length; ) {
            const u = e[i++];
            if ("number" == typeof u) {
              if (u === t) {
                a = -1;
                break;
              }
              if (u > t) {
                a = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const u = e[i];
          if ("number" == typeof u) break;
          if (u === n) {
            if (null === r) return void (null !== s && (e[i + 1] = s));
            if (r === e[i + 1]) return void (e[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== a && (e.splice(a, 0, t), (i = a + 1)),
          e.splice(i++, 0, n),
          null !== r && e.splice(i++, 0, r),
          null !== s && e.splice(i++, 0, s);
      }
      function Qi(e) {
        return -1 !== e;
      }
      function vi(e) {
        return 32767 & e;
      }
      function Qn(e, t) {
        let n = (function (e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let Co = !0;
      function Ei(e) {
        const t = Co;
        return (Co = e), t;
      }
      let Eo = 0;
      function Zi(e, t) {
        const n = Go(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Ji(r.data, e),
          Ji(t, null),
          Ji(r.blueprint, null));
        const s = Do(e, t),
          i = e.injectorIndex;
        if (Qi(s)) {
          const a = vi(s),
            u = Qn(s, t),
            h = u[1].data;
          for (let y = 0; y < 8; y++) t[i + y] = u[a + y] | h[a + y];
        }
        return (t[i + 8] = s), i;
      }
      function Ji(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function Go(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Do(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          s = t;
        for (; null !== s; ) {
          const i = s[1],
            a = i.type;
          if (((r = 2 === a ? i.declTNode : 1 === a ? s[6] : null), null === r))
            return -1;
          if ((n++, (s = s[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function Xi(e, t, n) {
        !(function (e, t, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(vr) && (r = n[vr]),
            null == r && (r = n[vr] = Eo++);
          const s = 255 & r;
          t.data[e + (s >> 5)] |= 1 << s;
        })(e, t, n);
      }
      function ya(e, t, n) {
        if (n & Ae.Optional) return e;
        yt(t, "NodeInjector");
      }
      function _a(e, t, n, r) {
        if (
          (n & Ae.Optional && void 0 === r && (r = null),
          0 == (n & (Ae.Self | Ae.Host)))
        ) {
          const s = e[9],
            i = Cn(void 0);
          try {
            return s ? s.get(t, r, n & Ae.Optional) : ht(t, r, n & Ae.Optional);
          } finally {
            Cn(i);
          }
        }
        return ya(r, t, n);
      }
      function zo(e, t, n, r = Ae.Default, s) {
        if (null !== e) {
          const i = (function (e) {
            if ("string" == typeof e) return e.charCodeAt(0) || 0;
            const t = e.hasOwnProperty(vr) ? e[vr] : void 0;
            return "number" == typeof t ? (t >= 0 ? 255 & t : ml) : t;
          })(n);
          if ("function" == typeof i) {
            if (!dl(t, e, r)) return r & Ae.Host ? ya(s, n, r) : _a(t, n, r, s);
            try {
              const a = i(r);
              if (null != a || r & Ae.Optional) return a;
              yt(n);
            } finally {
              ca();
            }
          } else if ("number" == typeof i) {
            let a = null,
              u = Go(e, t),
              h = -1,
              y = r & Ae.Host ? t[16][6] : null;
            for (
              (-1 === u || r & Ae.SkipSelf) &&
              ((h = -1 === u ? Do(e, t) : t[u + 8]),
              -1 !== h && d(r, !1)
                ? ((a = t[1]), (u = vi(h)), (t = Qn(h, t)))
                : (u = -1));
              -1 !== u;

            ) {
              const A = t[1];
              if (p(i, u, A.data)) {
                const P = Ca(u, t, n, a, r, y);
                if (P !== bo) return P;
              }
              (h = t[u + 8]),
                -1 !== h && d(r, t[1].data[u + 8] === y) && p(i, u, t)
                  ? ((a = A), (u = vi(h)), (t = Qn(h, t)))
                  : (u = -1);
            }
          }
        }
        return _a(t, n, r, s);
      }
      const bo = {};
      function ml() {
        return new c(Wt(), se());
      }
      function Ca(e, t, n, r, s, i) {
        const a = t[1],
          u = a.data[e + 8],
          A = Gs(
            u,
            a,
            n,
            null == r ? Vn(u) && Co : r != a && 0 != (3 & u.type),
            s & Ae.Host && i === u
          );
        return null !== A ? Di(t, a, A, u) : bo;
      }
      function Gs(e, t, n, r, s) {
        const i = e.providerIndexes,
          a = t.data,
          u = 1048575 & i,
          h = e.directiveStart,
          A = i >> 20,
          F = s ? u + A : e.directiveEnd;
        for (let L = r ? u : u + A; L < F; L++) {
          const $ = a[L];
          if ((L < h && n === $) || (L >= h && $.type === n)) return L;
        }
        if (s) {
          const L = a[h];
          if (L && Jt(L) && L.type === n) return h;
        }
        return null;
      }
      function Di(e, t, n, r) {
        let s = e[n];
        const i = t.data;
        if (
          (function (e) {
            return e instanceof mn;
          })(s)
        ) {
          const a = s;
          a.resolving &&
            (function (e, t) {
              throw new gt(
                "200",
                `Circular dependency in DI detected for ${e}`
              );
            })(Kt(i[n]));
          const u = Ei(a.canSeeViewProviders);
          a.resolving = !0;
          const h = a.injectImpl ? Cn(a.injectImpl) : null;
          dl(e, r, Ae.Default);
          try {
            (s = e[n] = a.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function (e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: s,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    const a = Tr(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, a),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, a);
                  }
                  s &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== h && Cn(h), Ei(u), (a.resolving = !1), ca();
          }
        }
        return s;
      }
      function p(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function d(e, t) {
        return !(e & Ae.Self || (e & Ae.Host && t));
      }
      class c {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n) {
          return zo(this._tNode, this._lView, t, void 0, n);
        }
      }
      function C(e) {
        return xe(() => {
          const t = e.prototype.constructor,
            n = t[Hn] || S(t),
            r = Object.prototype;
          let s = Object.getPrototypeOf(e.prototype).constructor;
          for (; s && s !== r; ) {
            const i = s[Hn] || S(s);
            if (i && i !== n) return i;
            s = Object.getPrototypeOf(s);
          }
          return (i) => new i();
        });
      }
      function S(e) {
        return $e(e)
          ? () => {
              const t = S(ae(e));
              return t && t();
            }
          : dr(e);
      }
      function R(e) {
        return (function (e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let s = 0;
            for (; s < r; ) {
              const i = n[s];
              if (Hs(i)) break;
              if (0 === i) s += 2;
              else if ("number" == typeof i)
                for (s++; s < r && "string" == typeof n[s]; ) s++;
              else {
                if (i === t) return n[s + 1];
                s += 2;
              }
            }
          }
          return null;
        })(Wt(), e);
      }
      const U = "__parameters__";
      function Te(e, t, n) {
        return xe(() => {
          const r = (function (e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const s in r) this[s] = r[s];
              }
            };
          })(t);
          function s(...i) {
            if (this instanceof s) return r.apply(this, i), this;
            const a = new s(...i);
            return (u.annotation = a), u;
            function u(h, y, A) {
              const P = h.hasOwnProperty(U)
                ? h[U]
                : Object.defineProperty(h, U, { value: [] })[U];
              for (; P.length <= A; ) P.push(null);
              return (P[A] = P[A] || []).push(a), h;
            }
          }
          return (
            n && (s.prototype = Object.create(n.prototype)),
            (s.prototype.ngMetadataName = e),
            (s.annotationCls = s),
            s
          );
        });
      }
      class Ct {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = wt({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory,
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const Cs = new Ct("AnalyzeForEntryComponents"),
        Ea = Function;
      function hr(e, t) {
        void 0 === t && (t = e);
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          Array.isArray(r)
            ? (t === e && (t = e.slice(0, n)), hr(r, t))
            : t !== e && t.push(r);
        }
        return t;
      }
      function vs(e, t) {
        e.forEach((n) => (Array.isArray(n) ? vs(n, t) : t(n)));
      }
      function _l(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function eo(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function to(e, t) {
        const n = [];
        for (let r = 0; r < e; r++) n.push(t);
        return n;
      }
      function x(e, t, n) {
        let r = H(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function (e, t, n, r) {
                let s = e.length;
                if (s == t) e.push(n, r);
                else if (1 === s) e.push(r, e[0]), (e[0] = n);
                else {
                  for (s--, e.push(e[s - 1], e[s]); s > t; )
                    (e[s] = e[s - 2]), s--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function k(e, t) {
        const n = H(e, t);
        if (n >= 0) return e[1 | n];
      }
      function H(e, t) {
        return (function (e, t, n) {
          let r = 0,
            s = e.length >> n;
          for (; s !== r; ) {
            const i = r + ((s - r) >> 1),
              a = e[i << n];
            if (t === a) return i << n;
            a > t ? (s = i) : (r = i + 1);
          }
          return ~(s << n);
        })(e, t, 1);
      }
      const zt = {},
        bi = "__NG_DI_FLAG__",
        Ln = "ngTempTokenPath",
        Ws = /\n/gm,
        Kr = "__source",
        no = G({ provide: String, useValue: G });
      let Qr;
      function ro(e) {
        const t = Qr;
        return (Qr = e), t;
      }
      function au(e, t = Ae.Default) {
        if (void 0 === Qr)
          throw new Error("inject() must be called from an injection context");
        return null === Qr
          ? ht(e, void 0, t)
          : Qr.get(e, t & Ae.Optional ? null : void 0, t);
      }
      function ye(e, t = Ae.Default) {
        return (sr || au)(ae(e), t);
      }
      const We = ye;
      function tt(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = ae(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error("Arguments array must have arguments.");
            let s,
              i = Ae.Default;
            for (let a = 0; a < r.length; a++) {
              const u = r[a],
                h = Es(u);
              "number" == typeof h
                ? -1 === h
                  ? (s = u.token)
                  : (i |= h)
                : (s = u);
            }
            t.push(ye(s, i));
          } else t.push(ye(r));
        }
        return t;
      }
      function jt(e, t) {
        return (e[bi] = t), (e.prototype[bi] = t), e;
      }
      function Es(e) {
        return e[bi];
      }
      function Jn(e, t, n, r) {
        const s = e[Ln];
        throw (
          (t[Kr] && s.unshift(t[Kr]),
          (e.message = (function (e, t, n, r = null) {
            e =
              e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                ? e.substr(2)
                : e;
            let s = Z(t);
            if (Array.isArray(t)) s = t.map(Z).join(" -> ");
            else if ("object" == typeof t) {
              let i = [];
              for (let a in t)
                if (t.hasOwnProperty(a)) {
                  let u = t[a];
                  i.push(
                    a + ":" + ("string" == typeof u ? JSON.stringify(u) : Z(u))
                  );
                }
              s = `{${i.join(", ")}}`;
            }
            return `${n}${r ? "(" + r + ")" : ""}[${s}]: ${e.replace(
              Ws,
              "\n  "
            )}`;
          })("\n" + e.message, s, n, r)),
          (e.ngTokenPath = s),
          (e[Ln] = null),
          e)
        );
      }
      const wo = jt(
          Te("Inject", (e) => ({ token: e })),
          -1
        ),
        yn = jt(Te("Optional"), 8),
        Zr = jt(Te("SkipSelf"), 4);
      let uu;
      function wa(e) {
        var t;
        return (
          (null ===
            (t = (function () {
              if (void 0 === uu && ((uu = null), Re.trustedTypes))
                try {
                  uu = Re.trustedTypes.createPolicy("angular", {
                    createHTML: (e) => e,
                    createScript: (e) => e,
                    createScriptURL: (e) => e,
                  });
                } catch (e) {}
              return uu;
            })()) || void 0 === t
            ? void 0
            : t.createHTML(e)) || e
        );
      }
      class Qo {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      class aC extends Qo {
        getTypeName() {
          return "HTML";
        }
      }
      class lC extends Qo {
        getTypeName() {
          return "Style";
        }
      }
      class uC extends Qo {
        getTypeName() {
          return "Script";
        }
      }
      class cC extends Qo {
        getTypeName() {
          return "URL";
        }
      }
      class dC extends Qo {
        getTypeName() {
          return "ResourceURL";
        }
      }
      function io(e) {
        return e instanceof Qo ? e.changingThisBreaksApplicationSecurity : e;
      }
      function Sa(e, t) {
        const n = Wf(e);
        if (null != n && n !== t) {
          if ("ResourceURL" === n && "URL" === t) return !0;
          throw new Error(
            `Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`
          );
        }
        return n === t;
      }
      function Wf(e) {
        return (e instanceof Qo && e.getTypeName()) || null;
      }
      function fC(e) {
        return new aC(e);
      }
      function hC(e) {
        return new lC(e);
      }
      function pC(e) {
        return new uC(e);
      }
      function gC(e) {
        return new cC(e);
      }
      function mC(e) {
        return new dC(e);
      }
      class yC {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = "<body><remove></remove>" + t;
          try {
            const n = new window.DOMParser().parseFromString(
              wa(t),
              "text/html"
            ).body;
            return null === n
              ? this.inertDocumentHelper.getInertBodyElement(t)
              : (n.removeChild(n.firstChild), n);
          } catch (n) {
            return null;
          }
        }
      }
      class _C {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument(
                "sanitization-inert"
              )),
            null == this.inertDocument.body)
          ) {
            const n = this.inertDocument.createElement("html");
            this.inertDocument.appendChild(n);
            const r = this.inertDocument.createElement("body");
            n.appendChild(r);
          }
        }
        getInertBodyElement(t) {
          const n = this.inertDocument.createElement("template");
          if ("content" in n) return (n.innerHTML = wa(t)), n;
          const r = this.inertDocument.createElement("body");
          return (
            (r.innerHTML = wa(t)),
            this.defaultDoc.documentMode && this.stripCustomNsAttrs(r),
            r
          );
        }
        stripCustomNsAttrs(t) {
          const n = t.attributes;
          for (let s = n.length - 1; 0 < s; s--) {
            const a = n.item(s).name;
            ("xmlns:ns1" === a || 0 === a.indexOf("ns1:")) &&
              t.removeAttribute(a);
          }
          let r = t.firstChild;
          for (; r; )
            r.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(r),
              (r = r.nextSibling);
        }
      }
      const vC =
          /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        EC =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function vl(e) {
        return (e = String(e)).match(vC) || e.match(EC) ? e : "unsafe:" + e;
      }
      function Si(e) {
        const t = {};
        for (const n of e.split(",")) t[n] = !0;
        return t;
      }
      function El(...e) {
        const t = {};
        for (const n of e)
          for (const r in n) n.hasOwnProperty(r) && (t[r] = !0);
        return t;
      }
      const Yf = Si("area,br,col,hr,img,wbr"),
        Kf = Si("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        Qf = Si("rp,rt"),
        fc = El(
          Yf,
          El(
            Kf,
            Si(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
            )
          ),
          El(
            Qf,
            Si(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
            )
          ),
          El(Qf, Kf)
        ),
        hc = Si("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        pc = Si("srcset"),
        Zf = El(
          hc,
          pc,
          Si(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
          ),
          Si(
            "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
          )
        ),
        DC = Si("script,style,template");
      class bC {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let n = t.firstChild,
            r = !0;
          for (; n; )
            if (
              (n.nodeType === Node.ELEMENT_NODE
                ? (r = this.startElement(n))
                : n.nodeType === Node.TEXT_NODE
                ? this.chars(n.nodeValue)
                : (this.sanitizedSomething = !0),
              r && n.firstChild)
            )
              n = n.firstChild;
            else
              for (; n; ) {
                n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                let s = this.checkClobberedElement(n, n.nextSibling);
                if (s) {
                  n = s;
                  break;
                }
                n = this.checkClobberedElement(n, n.parentNode);
              }
          return this.buf.join("");
        }
        startElement(t) {
          const n = t.nodeName.toLowerCase();
          if (!fc.hasOwnProperty(n))
            return (this.sanitizedSomething = !0), !DC.hasOwnProperty(n);
          this.buf.push("<"), this.buf.push(n);
          const r = t.attributes;
          for (let s = 0; s < r.length; s++) {
            const i = r.item(s),
              a = i.name,
              u = a.toLowerCase();
            if (!Zf.hasOwnProperty(u)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let h = i.value;
            hc[u] && (h = vl(h)),
              pc[u] &&
                ((e = h),
                (h = (e = String(e))
                  .split(",")
                  .map((t) => vl(t.trim()))
                  .join(", "))),
              this.buf.push(" ", a, '="', Jf(h), '"');
          }
          var e;
          return this.buf.push(">"), !0;
        }
        endElement(t) {
          const n = t.nodeName.toLowerCase();
          fc.hasOwnProperty(n) &&
            !Yf.hasOwnProperty(n) &&
            (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
        }
        chars(t) {
          this.buf.push(Jf(t));
        }
        checkClobberedElement(t, n) {
          if (
            n &&
            (t.compareDocumentPosition(n) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`
            );
          return n;
        }
      }
      const wC = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        SC = /([^\#-~ |!])/g;
      function Jf(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(wC, function (t) {
            return (
              "&#" +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ";"
            );
          })
          .replace(SC, function (t) {
            return "&#" + t.charCodeAt(0) + ";";
          })
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      let du;
      function Xf(e, t) {
        let n = null;
        try {
          du =
            du ||
            (function (e) {
              const t = new _C(e);
              return (function () {
                try {
                  return !!new window.DOMParser().parseFromString(
                    wa(""),
                    "text/html"
                  );
                } catch (e) {
                  return !1;
                }
              })()
                ? new yC(t)
                : t;
            })(e);
          let r = t ? String(t) : "";
          n = du.getInertBodyElement(r);
          let s = 5,
            i = r;
          do {
            if (0 === s)
              throw new Error(
                "Failed to sanitize html because the input is unstable"
              );
            s--, (r = i), (i = n.innerHTML), (n = du.getInertBodyElement(r));
          } while (r !== i);
          return wa(new bC().sanitizeChildren(gc(n) || n));
        } finally {
          if (n) {
            const r = gc(n) || n;
            for (; r.firstChild; ) r.removeChild(r.firstChild);
          }
        }
      }
      function gc(e) {
        return "content" in e &&
          (function (e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      var Xt = (() => (
        ((Xt = Xt || {})[(Xt.NONE = 0)] = "NONE"),
        (Xt[(Xt.HTML = 1)] = "HTML"),
        (Xt[(Xt.STYLE = 2)] = "STYLE"),
        (Xt[(Xt.SCRIPT = 3)] = "SCRIPT"),
        (Xt[(Xt.URL = 4)] = "URL"),
        (Xt[(Xt.RESOURCE_URL = 5)] = "RESOURCE_URL"),
        Xt
      ))();
      function mc(e) {
        const t = (function () {
          const e = se();
          return e && e[12];
        })();
        return t
          ? t.sanitize(Xt.URL, e) || ""
          : Sa(e, "URL")
          ? io(e)
          : vl(Oe(e));
      }
      const nh = "__ngContext__";
      function Xn(e, t) {
        e[nh] = t;
      }
      function _c(e) {
        const t = (function (e) {
          return e[nh] || null;
        })(e);
        return t ? (Array.isArray(t) ? t : t.lView) : null;
      }
      function fu(e) {
        return e.ngOriginalError;
      }
      function HC(e, ...t) {
        e.error(...t);
      }
      class Aa {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t),
            r = this._findContext(t),
            s = ((e = t) && e.ngErrorLogger) || HC;
          var e;
          s(this._console, "ERROR", t),
            n && s(this._console, "ORIGINAL ERROR", n),
            r && s(this._console, "ERROR CONTEXT", r);
        }
        _findContext(t) {
          return t ? t.ngDebugContext || this._findContext(fu(t)) : null;
        }
        _findOriginalError(t) {
          let n = t && fu(t);
          for (; n && fu(n); ) n = fu(n);
          return n || null;
        }
      }
      const dh = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(Re))();
      function fh(e) {
        return e.ownerDocument;
      }
      function Ai(e) {
        return e instanceof Function ? e() : e;
      }
      var Ti = (() => (
        ((Ti = Ti || {})[(Ti.Important = 1)] = "Important"),
        (Ti[(Ti.DashCase = 2)] = "DashCase"),
        Ti
      ))();
      function Ec(e, t) {
        return undefined(e, t);
      }
      function wl(e) {
        const t = e[3];
        return nt(t) ? t[3] : t;
      }
      function Dc(e) {
        return yh(e[13]);
      }
      function bc(e) {
        return yh(e[4]);
      }
      function yh(e) {
        for (; null !== e && !nt(e); ) e = e[4];
        return e;
      }
      function Ma(e, t, n, r, s) {
        if (null != r) {
          let i,
            a = !1;
          nt(r) ? (i = r) : hn(r) && ((a = !0), (r = r[0]));
          const u = g(r);
          0 === e && null !== n
            ? null == s
              ? bh(t, n, u)
              : Zo(t, n, u, s || null, !0)
            : 1 === e && null !== n
            ? Zo(t, n, u, s || null, !0)
            : 2 === e
            ? (function (e, t, n) {
                const r = pu(e, t);
                r &&
                  (function (e, t, n, r) {
                    Y(e) ? e.removeChild(t, n, r) : t.removeChild(n);
                  })(e, r, t, n);
              })(t, u, a)
            : 3 === e && t.destroyNode(u),
            null != i &&
              (function (e, t, n, r, s) {
                const i = n[7];
                i !== g(n) && Ma(t, e, r, i, s);
                for (let u = 10; u < n.length; u++) {
                  const h = n[u];
                  Sl(h[1], h, e, t, r, i);
                }
              })(t, e, i, n, s);
        }
      }
      function Sc(e, t, n) {
        return Y(e)
          ? e.createElement(t, n)
          : null === n
          ? e.createElement(t)
          : e.createElementNS(n, t);
      }
      function Ch(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          s = t[3];
        1024 & t[2] && ((t[2] &= -1025), Io(s, -1)), n.splice(r, 1);
      }
      function Ac(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const s = r[17];
          null !== s && s !== e && Ch(s, r), t > 0 && (e[n - 1][4] = r[4]);
          const i = eo(e, 10 + t);
          !(function (e, t) {
            Sl(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(r[1], r);
          const a = i[19];
          null !== a && a.detachView(i[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        return r;
      }
      function vh(e, t) {
        if (!(256 & t[2])) {
          const n = t[11];
          Y(n) && n.destroyNode && Sl(e, t, n, 3, null, null),
            (function (e) {
              let t = e[13];
              if (!t) return Tc(e[1], e);
              for (; t; ) {
                let n = null;
                if (hn(t)) n = t[13];
                else {
                  const r = t[10];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    hn(t) && Tc(t[1], t), (t = t[3]);
                  null === t && (t = e), hn(t) && Tc(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Tc(e, t) {
        if (!(256 & t[2])) {
          (t[2] &= -129),
            (t[2] |= 256),
            (function (e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const s = t[n[r]];
                  if (!(s instanceof mn)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let a = 0; a < i.length; a += 2) {
                        const u = s[i[a]],
                          h = i[a + 1];
                        try {
                          h.call(u);
                        } finally {
                        }
                      }
                    else
                      try {
                        i.call(s);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function (e, t) {
              const n = e.cleanup,
                r = t[7];
              let s = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    const a = n[i + 1],
                      u = "function" == typeof a ? a(t) : g(t[a]),
                      h = r[(s = n[i + 2])],
                      y = n[i + 3];
                    "boolean" == typeof y
                      ? u.removeEventListener(n[i], h, y)
                      : y >= 0
                      ? r[(s = y)]()
                      : r[(s = -y)].unsubscribe(),
                      (i += 2);
                  } else {
                    const a = r[(s = n[i + 1])];
                    n[i].call(a);
                  }
              if (null !== r) {
                for (let i = s + 1; i < r.length; i++) r[i]();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && Y(t[11]) && t[11].destroy();
          const n = t[17];
          if (null !== n && nt(t[3])) {
            n !== t[3] && Ch(n, t);
            const r = t[19];
            null !== r && r.detachView(e);
          }
        }
      }
      function Eh(e, t, n) {
        return (function (e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[0];
          if (2 & r.flags) {
            const s = e.data[r.directiveStart].encapsulation;
            if (s === Tt.None || s === Tt.Emulated) return null;
          }
          return we(r, n);
        })(e, t.parent, n);
      }
      function Zo(e, t, n, r, s) {
        Y(e) ? e.insertBefore(t, n, r, s) : t.insertBefore(n, r, s);
      }
      function bh(e, t, n) {
        Y(e) ? e.appendChild(t, n) : t.appendChild(n);
      }
      function wh(e, t, n, r, s) {
        null !== r ? Zo(e, t, n, r, s) : bh(e, t, n);
      }
      function pu(e, t) {
        return Y(e) ? e.parentNode(t) : t.parentNode;
      }
      function Sh(e, t, n) {
        return Th(e, t, n);
      }
      let Th = function (e, t, n) {
        return 40 & e.type ? we(e, n) : null;
      };
      function gu(e, t, n, r) {
        const s = Eh(e, r, t),
          i = t[11],
          u = Sh(r.parent || t[6], r, t);
        if (null != s)
          if (Array.isArray(n))
            for (let h = 0; h < n.length; h++) wh(i, s, n[h], u, !1);
          else wh(i, s, n, u, !1);
      }
      function mu(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return we(t, e);
          if (4 & n) return Ic(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return mu(e, r);
            {
              const s = e[t.index];
              return nt(s) ? Ic(-1, s) : g(s);
            }
          }
          if (32 & n) return Ec(t, e)() || g(e[t.index]);
          {
            const r = Ih(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : mu(wl(e[16]), r)
              : mu(e, t.next);
          }
        }
        return null;
      }
      function Ih(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function Ic(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const r = t[n],
            s = r[1].firstChild;
          if (null !== s) return mu(r, s);
        }
        return t[7];
      }
      function Rc(e, t, n, r, s, i, a) {
        for (; null != n; ) {
          const u = r[n.index],
            h = n.type;
          if (
            (a && 0 === t && (u && Xn(g(u), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & h) Rc(e, t, n.child, r, s, i, !1), Ma(t, e, s, u, i);
            else if (32 & h) {
              const y = Ec(n, r);
              let A;
              for (; (A = y()); ) Ma(t, e, s, A, i);
              Ma(t, e, s, u, i);
            } else 16 & h ? Nh(e, t, r, n, s, i) : Ma(t, e, s, u, i);
          n = a ? n.projectionNext : n.next;
        }
      }
      function Sl(e, t, n, r, s, i) {
        Rc(n, r, e.firstChild, t, s, i, !1);
      }
      function Nh(e, t, n, r, s, i) {
        const a = n[16],
          h = a[6].projection[r.projection];
        if (Array.isArray(h))
          for (let y = 0; y < h.length; y++) Ma(t, e, s, h[y], i);
        else Rc(e, t, h, a[3], s, i, !0);
      }
      function Oh(e, t, n) {
        Y(e) ? e.setAttribute(t, "style", n) : (t.style.cssText = n);
      }
      function Nc(e, t, n) {
        Y(e)
          ? "" === n
            ? e.removeAttribute(t, "class")
            : e.setAttribute(t, "class", n)
          : (t.className = n);
      }
      function Ph(e, t, n) {
        let r = e.length;
        for (;;) {
          const s = e.indexOf(t, n);
          if (-1 === s) return s;
          if (0 === s || e.charCodeAt(s - 1) <= 32) {
            const i = t.length;
            if (s + i === r || e.charCodeAt(s + i) <= 32) return s;
          }
          n = s + 1;
        }
      }
      const Fh = "ng-template";
      function pv(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let s = e[r++];
          if (n && "class" === s) {
            if (((s = e[r]), -1 !== Ph(s.toLowerCase(), t, 0))) return !0;
          } else if (1 === s) {
            for (; r < e.length && "string" == typeof (s = e[r++]); )
              if (s.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function xh(e) {
        return 4 === e.type && e.value !== Fh;
      }
      function gv(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Fh);
      }
      function mv(e, t, n) {
        let r = 4;
        const s = e.attrs || [],
          i = (function (e) {
            for (let t = 0; t < e.length; t++) if (Hs(e[t])) return t;
            return e.length;
          })(s);
        let a = !1;
        for (let u = 0; u < t.length; u++) {
          const h = t[u];
          if ("number" != typeof h) {
            if (!a)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== h && !gv(e, h, n)) || ("" === h && 1 === t.length))
                ) {
                  if (Ys(r)) return !1;
                  a = !0;
                }
              } else {
                const y = 8 & r ? h : t[++u];
                if (8 & r && null !== e.attrs) {
                  if (!pv(e.attrs, y, n)) {
                    if (Ys(r)) return !1;
                    a = !0;
                  }
                  continue;
                }
                const P = yv(8 & r ? "class" : h, s, xh(e), n);
                if (-1 === P) {
                  if (Ys(r)) return !1;
                  a = !0;
                  continue;
                }
                if ("" !== y) {
                  let F;
                  F = P > i ? "" : s[P + 1].toLowerCase();
                  const L = 8 & r ? F : null;
                  if ((L && -1 !== Ph(L, y, 0)) || (2 & r && y !== F)) {
                    if (Ys(r)) return !1;
                    a = !0;
                  }
                }
              }
          } else {
            if (!a && !Ys(r) && !Ys(h)) return !1;
            if (a && Ys(h)) continue;
            (a = !1), (r = h | (1 & r));
          }
        }
        return Ys(r) || a;
      }
      function Ys(e) {
        return 0 == (1 & e);
      }
      function yv(e, t, n, r) {
        if (null === t) return -1;
        let s = 0;
        if (r || !n) {
          let i = !1;
          for (; s < t.length; ) {
            const a = t[s];
            if (a === e) return s;
            if (3 === a || 6 === a) i = !0;
            else {
              if (1 === a || 2 === a) {
                let u = t[++s];
                for (; "string" == typeof u; ) u = t[++s];
                continue;
              }
              if (4 === a) break;
              if (0 === a) {
                s += 4;
                continue;
              }
            }
            s += i ? 1 : 2;
          }
          return -1;
        }
        return (function (e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ("number" == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function Vh(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (mv(e, t[r], n)) return !0;
        return !1;
      }
      function Ev(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let s = 0; s < e.length; s++) if (e[s] !== r[s]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function kh(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function Dv(e) {
        let t = e[0],
          n = 1,
          r = 2,
          s = "",
          i = !1;
        for (; n < e.length; ) {
          let a = e[n];
          if ("string" == typeof a)
            if (2 & r) {
              const u = e[++n];
              s += "[" + a + (u.length > 0 ? '="' + u + '"' : "") + "]";
            } else 8 & r ? (s += "." + a) : 4 & r && (s += " " + a);
          else
            "" !== s && !Ys(a) && ((t += kh(i, s)), (s = "")),
              (r = a),
              (i = i || !Ys(r));
          n++;
        }
        return "" !== s && (t += kh(i, s)), t;
      }
      const Qe = {};
      function Lh(e) {
        Bh(st(), se(), gn() + e, Ls());
      }
      function Bh(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const i = e.preOrderCheckHooks;
            null !== i && js(t, i, n);
          } else {
            const i = e.preOrderHooks;
            null !== i && qi(t, i, 0, n);
          }
        gs(n);
      }
      function yu(e, t) {
        return (e << 17) | (t << 2);
      }
      function Ks(e) {
        return (e >> 17) & 32767;
      }
      function Oc(e) {
        return 2 | e;
      }
      function oo(e) {
        return (131068 & e) >> 2;
      }
      function Pc(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function Fc(e) {
        return 1 | e;
      }
      function Kh(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const a = e.data[i];
              Fo(s), a.contentQueries(2, t[i], i);
            }
          }
      }
      function Al(e, t, n, r, s, i, a, u, h, y) {
        const A = t.blueprint.slice();
        return (
          (A[0] = s),
          (A[2] = 140 | r),
          $i(A),
          (A[3] = A[15] = e),
          (A[8] = n),
          (A[10] = a || (e && e[10])),
          (A[11] = u || (e && e[11])),
          (A[12] = h || (e && e[12]) || null),
          (A[9] = y || (e && e[9]) || null),
          (A[6] = i),
          (A[16] = 2 == t.type ? e[16] : A),
          A
        );
      }
      function Ia(e, t, n, r, s) {
        let i = e.data[t];
        if (null === i)
          (i = (function (e, t, n, r, s) {
            const i = po(),
              a = gi(),
              h = (e.data[t] = (function (e, t, n, r, s, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: s,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, a ? i : i && i.parent, n, t, r, s));
            return (
              null === e.firstChild && (e.firstChild = h),
              null !== i &&
                (a
                  ? null == i.child && null !== h.parent && (i.child = h)
                  : null === i.next && (i.next = h)),
              h
            );
          })(e, t, n, r, s)),
            Le.lFrame.inI18n && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = s);
          const a = (function () {
            const e = Le.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === a ? -1 : a.injectorIndex;
        }
        return Nn(i, !0), i;
      }
      function Ra(e, t, n, r) {
        if (0 === n) return -1;
        const s = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return s;
      }
      function Tl(e, t, n) {
        yo(t);
        try {
          const r = e.viewQuery;
          null !== r && Qc(1, r, n);
          const s = e.template;
          null !== s && Qh(e, t, s, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && Kh(e, t),
            e.staticViewQueries && Qc(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function (e, t) {
              for (let n = 0; n < t.length; n++) tE(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[2] &= -5), Bs();
        }
      }
      function Na(e, t, n, r) {
        const s = t[2];
        if (256 == (256 & s)) return;
        yo(t);
        const i = Ls();
        try {
          $i(t),
            (function (e) {
              Le.lFrame.bindingIndex = e;
            })(e.bindingStartIndex),
            null !== n && Qh(e, t, n, 2, r);
          const a = 3 == (3 & s);
          if (!i)
            if (a) {
              const y = e.preOrderCheckHooks;
              null !== y && js(t, y, null);
            } else {
              const y = e.preOrderHooks;
              null !== y && qi(t, y, 0, null), Bo(t, 0);
            }
          if (
            ((function (e) {
              for (let t = Dc(e); null !== t; t = bc(t)) {
                if (!t[2]) continue;
                const n = t[9];
                for (let r = 0; r < n.length; r++) {
                  const s = n[r],
                    i = s[3];
                  0 == (1024 & s[2]) && Io(i, 1), (s[2] |= 1024);
                }
              }
            })(t),
            (function (e) {
              for (let t = Dc(e); null !== t; t = bc(t))
                for (let n = 10; n < t.length; n++) {
                  const r = t[n],
                    s = r[1];
                  Yn(r) && Na(s, r, s.template, r[8]);
                }
            })(t),
            null !== e.contentQueries && Kh(e, t),
            !i)
          )
            if (a) {
              const y = e.contentCheckHooks;
              null !== y && js(t, y);
            } else {
              const y = e.contentHooks;
              null !== y && qi(t, y, 1), Bo(t, 1);
            }
          !(function (e, t) {
            const n = e.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let r = 0; r < n.length; r++) {
                  const s = n[r];
                  if (s < 0) gs(~s);
                  else {
                    const i = s,
                      a = n[++r],
                      u = n[++r];
                    Oo(a, i), u(2, t[i]);
                  }
                }
              } finally {
                gs(-1);
              }
          })(e, t);
          const u = e.components;
          null !== u &&
            (function (e, t) {
              for (let n = 0; n < t.length; n++) eE(e, t[n]);
            })(t, u);
          const h = e.viewQuery;
          if ((null !== h && Qc(2, h, r), !i))
            if (a) {
              const y = e.viewCheckHooks;
              null !== y && js(t, y);
            } else {
              const y = e.viewHooks;
              null !== y && qi(t, y, 2), Bo(t, 2);
            }
          !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
            i || (t[2] &= -73),
            1024 & t[2] && ((t[2] &= -1025), Io(t[3], -1));
        } finally {
          Bs();
        }
      }
      function xv(e, t, n, r) {
        const s = t[10],
          i = !Ls(),
          a = bn(t);
        try {
          i && !a && s.begin && s.begin(), a && Tl(e, t, r), Na(e, t, n, r);
        } finally {
          i && !a && s.end && s.end();
        }
      }
      function Qh(e, t, n, r, s) {
        const i = gn(),
          a = 2 & r;
        try {
          gs(-1), a && t.length > 20 && Bh(e, t, 20, Ls()), n(r, s);
        } finally {
          gs(i);
        }
      }
      function Zh(e, t, n) {
        if (zn(t)) {
          const s = t.directiveEnd;
          for (let i = t.directiveStart; i < s; i++) {
            const a = e.data[i];
            a.contentQueries && a.contentQueries(1, n[i], i);
          }
        }
      }
      function $c(e, t, n) {
        !pi() ||
          ((function (e, t, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            e.firstCreatePass || Zi(n, t), Xn(r, t);
            const a = n.initialInputs;
            for (let u = s; u < i; u++) {
              const h = e.data[u],
                y = Jt(h);
              y && Kv(t, n, h);
              const A = Di(t, e, u, n);
              Xn(A, t),
                null !== a && Qv(0, u - s, A, h, 0, a),
                y && (Et(n.index, t)[8] = A);
            }
          })(e, t, n, we(n, t)),
          128 == (128 & n.flags) &&
            (function (e, t, n) {
              const r = n.directiveStart,
                s = n.directiveEnd,
                a = n.index,
                u = Le.lFrame.currentDirectiveIndex;
              try {
                gs(a);
                for (let h = r; h < s; h++) {
                  const y = e.data[h],
                    A = t[h];
                  Po(h),
                    (null !== y.hostBindings ||
                      0 !== y.hostVars ||
                      null !== y.hostAttrs) &&
                      ip(y, A);
                }
              } finally {
                gs(-1), Po(u);
              }
            })(e, t, n));
      }
      function Hc(e, t, n = we) {
        const r = t.localNames;
        if (null !== r) {
          let s = t.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const a = r[i + 1],
              u = -1 === a ? n(t, e) : e[a];
            e[s++] = u;
          }
        }
      }
      function Jh(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = vu(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function vu(e, t, n, r, s, i, a, u, h, y) {
        const A = 20 + r,
          P = A + s,
          F = (function (e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : Qe);
            return n;
          })(A, P),
          L = "function" == typeof y ? y() : y;
        return (F[1] = {
          type: e,
          blueprint: F,
          template: n,
          queries: null,
          viewQuery: u,
          declTNode: t,
          data: F.slice().fill(null, A),
          bindingStartIndex: A,
          expandoStartIndex: P,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof a ? a() : a,
          firstChild: null,
          schemas: h,
          consts: L,
          incompleteFirstPass: !1,
        });
      }
      function tp(e, t, n, r) {
        const s = dp(t);
        null === n
          ? s.push(r)
          : (s.push(n), e.firstCreatePass && fp(e).push(r, s.length - 1));
      }
      function np(e, t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r)) {
            const s = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(t, s)
              : (n[r] = [t, s]);
          }
        return n;
      }
      function Jr(e, t, n, r, s, i, a, u) {
        const h = we(t, n);
        let A,
          y = t.inputs;
        !u && null != y && (A = y[r])
          ? (gp(e, n, A, r, s),
            Vn(t) &&
              (function (e, t) {
                const n = Et(t, e);
                16 & n[2] || (n[2] |= 64);
              })(n, t.index))
          : 3 & t.type &&
            ((r = (function (e) {
              return "class" === e
                ? "className"
                : "for" === e
                ? "htmlFor"
                : "formaction" === e
                ? "formAction"
                : "innerHtml" === e
                ? "innerHTML"
                : "readonly" === e
                ? "readOnly"
                : "tabindex" === e
                ? "tabIndex"
                : e;
            })(r)),
            (s = null != a ? a(s, t.value || "", r) : s),
            Y(i)
              ? i.setProperty(h, r, s)
              : _o(r) || (h.setProperty ? h.setProperty(r, s) : (h[r] = s)));
      }
      function Gc(e, t, n, r) {
        let s = !1;
        if (pi()) {
          const i = (function (e, t, n) {
              const r = e.directiveRegistry;
              let s = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const a = r[i];
                  Vh(n, a.selectors, !1) &&
                    (s || (s = []),
                    Xi(Zi(n, t), e, a.type),
                    Jt(a) ? (op(e, n), s.unshift(a)) : s.push(a));
                }
              return s;
            })(e, t, n),
            a = null === r ? null : { "": -1 };
          if (null !== i) {
            (s = !0), ap(n, e.data.length, i.length);
            for (let A = 0; A < i.length; A++) {
              const P = i[A];
              P.providersResolver && P.providersResolver(P);
            }
            let u = !1,
              h = !1,
              y = Ra(e, t, i.length, null);
            for (let A = 0; A < i.length; A++) {
              const P = i[A];
              (n.mergedAttrs = Yi(n.mergedAttrs, P.hostAttrs)),
                lp(e, n, t, y, P),
                Yv(y, P, a),
                null !== P.contentQueries && (n.flags |= 8),
                (null !== P.hostBindings ||
                  null !== P.hostAttrs ||
                  0 !== P.hostVars) &&
                  (n.flags |= 128);
              const F = P.type.prototype;
              !u &&
                (F.ngOnChanges || F.ngOnInit || F.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
                (u = !0)),
                !h &&
                  (F.ngOnChanges || F.ngDoCheck) &&
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (h = !0)),
                y++;
            }
            !(function (e, t) {
              const r = t.directiveEnd,
                s = e.data,
                i = t.attrs,
                a = [];
              let u = null,
                h = null;
              for (let y = t.directiveStart; y < r; y++) {
                const A = s[y],
                  P = A.inputs,
                  F = null === i || xh(t) ? null : Zv(P, i);
                a.push(F), (u = np(P, y, u)), (h = np(A.outputs, y, h));
              }
              null !== u &&
                (u.hasOwnProperty("class") && (t.flags |= 16),
                u.hasOwnProperty("style") && (t.flags |= 32)),
                (t.initialInputs = a),
                (t.inputs = u),
                (t.outputs = h);
            })(e, n);
          }
          a &&
            (function (e, t, n) {
              if (t) {
                const r = (e.localNames = []);
                for (let s = 0; s < t.length; s += 2) {
                  const i = n[t[s + 1]];
                  if (null == i)
                    throw new gt(
                      "301",
                      `Export of name '${t[s + 1]}' not found!`
                    );
                  r.push(t[s], i);
                }
              }
            })(n, r, a);
        }
        return (n.mergedAttrs = Yi(n.mergedAttrs, n.attrs)), s;
      }
      function sp(e, t, n, r, s, i) {
        const a = i.hostBindings;
        if (a) {
          let u = e.hostBindingOpCodes;
          null === u && (u = e.hostBindingOpCodes = []);
          const h = ~t.index;
          (function (e) {
            let t = e.length;
            for (; t > 0; ) {
              const n = e[--t];
              if ("number" == typeof n && n < 0) return n;
            }
            return 0;
          })(u) != h && u.push(h),
            u.push(r, s, a);
        }
      }
      function ip(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function op(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function Yv(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          Jt(t) && (n[""] = e);
        }
      }
      function ap(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function lp(e, t, n, r, s) {
        e.data[r] = s;
        const i = s.factory || (s.factory = dr(s.type)),
          a = new mn(i, Jt(s), null);
        (e.blueprint[r] = a),
          (n[r] = a),
          sp(e, t, 0, r, Ra(e, n, s.hostVars, Qe), s);
      }
      function Kv(e, t, n) {
        const r = we(t, e),
          s = Jh(n),
          i = e[10],
          a = Eu(
            e,
            Al(
              e,
              s,
              null,
              n.onPush ? 64 : 16,
              r,
              t,
              i,
              i.createRenderer(r, n),
              null,
              null
            )
          );
        e[t.index] = a;
      }
      function Mi(e, t, n, r, s, i) {
        const a = we(e, t);
        !(function (e, t, n, r, s, i, a) {
          if (null == i)
            Y(e) ? e.removeAttribute(t, s, n) : t.removeAttribute(s);
          else {
            const u = null == a ? Oe(i) : a(i, r || "", s);
            Y(e)
              ? e.setAttribute(t, s, u, n)
              : n
              ? t.setAttributeNS(n, s, u)
              : t.setAttribute(s, u);
          }
        })(t[11], a, i, e.value, n, r, s);
      }
      function Qv(e, t, n, r, s, i) {
        const a = i[t];
        if (null !== a) {
          const u = r.setInput;
          for (let h = 0; h < a.length; ) {
            const y = a[h++],
              A = a[h++],
              P = a[h++];
            null !== u ? r.setInput(n, P, y, A) : (n[A] = P);
          }
        }
      }
      function Zv(e, t) {
        let n = null,
          r = 0;
        for (; r < t.length; ) {
          const s = t[r];
          if (0 !== s)
            if (5 !== s) {
              if ("number" == typeof s) break;
              e.hasOwnProperty(s) &&
                (null === n && (n = []), n.push(s, e[s], t[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function up(e, t, n, r) {
        return new Array(e, !0, !1, t, null, 0, r, n, null, null);
      }
      function eE(e, t) {
        const n = Et(t, e);
        if (Yn(n)) {
          const r = n[1];
          80 & n[2] ? Na(r, n, r.template, n[8]) : n[5] > 0 && zc(n);
        }
      }
      function zc(e) {
        for (let r = Dc(e); null !== r; r = bc(r))
          for (let s = 10; s < r.length; s++) {
            const i = r[s];
            if (1024 & i[2]) {
              const a = i[1];
              Na(a, i, a.template, i[8]);
            } else i[5] > 0 && zc(i);
          }
        const n = e[1].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const s = Et(n[r], e);
            Yn(s) && s[5] > 0 && zc(s);
          }
      }
      function tE(e, t) {
        const n = Et(t, e),
          r = n[1];
        (function (e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          Tl(r, n, n[8]);
      }
      function Eu(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function qc(e) {
        for (; e; ) {
          e[2] |= 64;
          const t = wl(e);
          if (qn(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Kc(e, t, n) {
        const r = t[10];
        r.begin && r.begin();
        try {
          Na(e, t, e.template, n);
        } catch (s) {
          throw (pp(t, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function cp(e) {
        !(function (e) {
          for (let t = 0; t < e.components.length; t++) {
            const n = e.components[t],
              r = _c(n),
              s = r[1];
            xv(s, r, s.template, n);
          }
        })(e[8]);
      }
      function Qc(e, t, n) {
        Fo(0), t(e, n);
      }
      const oE = (() => Promise.resolve(null))();
      function dp(e) {
        return e[7] || (e[7] = []);
      }
      function fp(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function pp(e, t) {
        const n = e[9],
          r = n ? n.get(Aa, null) : null;
        r && r.handleError(t);
      }
      function gp(e, t, n, r, s) {
        for (let i = 0; i < n.length; ) {
          const a = n[i++],
            u = n[i++],
            h = t[a],
            y = e.data[a];
          null !== y.setInput ? y.setInput(h, s, r, u) : (h[u] = s);
        }
      }
      function lo(e, t, n) {
        const r = ge(t, e);
        !(function (e, t, n) {
          Y(e) ? e.setValue(t, n) : (t.textContent = n);
        })(e[11], r, n);
      }
      function Du(e, t, n) {
        let r = n ? e.styles : null,
          s = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let a = 0; a < t.length; a++) {
            const u = t[a];
            "number" == typeof u
              ? (i = u)
              : 1 == i
              ? (s = be(s, u))
              : 2 == i && (r = be(r, u + ": " + t[++a] + ";"));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = s) : (e.classesWithoutHost = s);
      }
      const Oa = new Ct("INJECTOR", -1);
      class mp {
        get(t, n = zt) {
          if (n === zt) {
            const r = new Error(`NullInjectorError: No provider for ${Z(t)}!`);
            throw ((r.name = "NullInjectorError"), r);
          }
          return n;
        }
      }
      const Ml = new Ct("Set Injector scope."),
        Il = {},
        uE = {};
      let Zc;
      function yp() {
        return void 0 === Zc && (Zc = new mp()), Zc;
      }
      function _p(e, t = null, n = null, r) {
        return new dE(e, n, t || yp(), r);
      }
      class dE {
        constructor(t, n, r, s = null) {
          (this.parent = r),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const i = [];
          n && vs(n, (u) => this.processProvider(u, t, n)),
            vs([t], (u) => this.processInjectorType(u, [], i)),
            this.records.set(Oa, Pa(void 0, this));
          const a = this.records.get(Ml);
          (this.scope = null != a ? a.value : null),
            (this.source = s || ("object" == typeof t ? null : Z(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, n = zt, r = Ae.Default) {
          this.assertNotDestroyed();
          const s = ro(this),
            i = Cn(void 0);
          try {
            if (!(r & Ae.SkipSelf)) {
              let u = this.records.get(t);
              if (void 0 === u) {
                const h =
                  ("function" == typeof (e = t) ||
                    ("object" == typeof e && e instanceof Ct)) &&
                  xt(t);
                (u = h && this.injectableDefInScope(h) ? Pa(Jc(t), Il) : null),
                  this.records.set(t, u);
              }
              if (null != u) return this.hydrate(t, u);
            }
            return (r & Ae.Self ? yp() : this.parent).get(
              t,
              (n = r & Ae.Optional && n === zt ? null : n)
            );
          } catch (a) {
            if ("NullInjectorError" === a.name) {
              if (((a[Ln] = a[Ln] || []).unshift(Z(t)), s)) throw a;
              return Jn(a, t, "R3InjectorError", this.source);
            }
            throw a;
          } finally {
            Cn(i), ro(s);
          }
          var e;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((r, s) => t.push(Z(s))),
            `R3Injector[${t.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error("Injector has already been destroyed.");
        }
        processInjectorType(t, n, r) {
          if (!(t = ae(t))) return !1;
          let s = li(t);
          const i = (null == s && t.ngModule) || void 0,
            a = void 0 === i ? t : i,
            u = -1 !== r.indexOf(a);
          if ((void 0 !== i && (s = li(i)), null == s)) return !1;
          if (null != s.imports && !u) {
            let A;
            r.push(a);
            try {
              vs(s.imports, (P) => {
                this.processInjectorType(P, n, r) &&
                  (void 0 === A && (A = []), A.push(P));
              });
            } finally {
            }
            if (void 0 !== A)
              for (let P = 0; P < A.length; P++) {
                const { ngModule: F, providers: L } = A[P];
                vs(L, ($) => this.processProvider($, F, L || ve));
              }
          }
          this.injectorDefTypes.add(a);
          const h = dr(a) || (() => new a());
          this.records.set(a, Pa(h, Il));
          const y = s.providers;
          if (null != y && !u) {
            const A = t;
            vs(y, (P) => this.processProvider(P, A, y));
          }
          return void 0 !== i && void 0 !== t.providers;
        }
        processProvider(t, n, r) {
          let s = Fa((t = ae(t))) ? t : ae(t && t.provide);
          const i = vp((e = t)) ? Pa(void 0, e.useValue) : Pa(Cp(e), Il);
          var e;
          if (Fa(t) || !0 !== t.multi) this.records.get(s);
          else {
            let a = this.records.get(s);
            a ||
              ((a = Pa(void 0, Il, !0)),
              (a.factory = () => tt(a.multi)),
              this.records.set(s, a)),
              (s = t),
              a.multi.push(t);
          }
          this.records.set(s, i);
        }
        hydrate(t, n) {
          return (
            n.value === Il && ((n.value = uE), (n.value = n.factory())),
            "object" == typeof n.value &&
              n.value &&
              null !== (e = n.value) &&
              "object" == typeof e &&
              "function" == typeof e.ngOnDestroy &&
              this.onDestroy.add(n.value),
            n.value
          );
          var e;
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = ae(t.providedIn);
          return "string" == typeof n
            ? "any" === n || n === this.scope
            : this.injectorDefTypes.has(n);
        }
      }
      function Jc(e) {
        const t = xt(e),
          n = null !== t ? t.factory : dr(e);
        if (null !== n) return n;
        if (e instanceof Ct)
          throw new Error(`Token ${Z(e)} is missing a \u0275prov definition.`);
        if (e instanceof Function)
          return (function (e) {
            const t = e.length;
            if (t > 0) {
              const r = to(t, "?");
              throw new Error(
                `Can't resolve all parameters for ${Z(e)}: (${r.join(", ")}).`
              );
            }
            const n = (function (e) {
              const t = e && (e[ze] || e[Rs]);
              if (t) {
                const n = (function (e) {
                  if (e.hasOwnProperty("name")) return e.name;
                  const t = ("" + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? "" : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new Error("unreachable");
      }
      function Cp(e, t, n) {
        let r;
        if (Fa(e)) {
          const s = ae(e);
          return dr(s) || Jc(s);
        }
        if (vp(e)) r = () => ae(e.useValue);
        else if (
          (function (e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...tt(e.deps || []));
        else if (
          (function (e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => ye(ae(e.useExisting));
        else {
          const s = ae(e && (e.useClass || e.provide));
          if (
            !(function (e) {
              return !!e.deps;
            })(e)
          )
            return dr(s) || Jc(s);
          r = () => new s(...tt(e.deps));
        }
        return r;
      }
      function Pa(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function vp(e) {
        return null !== e && "object" == typeof e && no in e;
      }
      function Fa(e) {
        return "function" == typeof e;
      }
      const Ep = function (e, t, n) {
        return (function (e, t = null, n = null, r) {
          const s = _p(e, t, n, r);
          return s._resolveInjectorDefTypes(), s;
        })({ name: n }, t, e, n);
      };
      let Ut = (() => {
        class e {
          static create(n, r) {
            return Array.isArray(n)
              ? Ep(n, r, "")
              : Ep(n.providers, n.parent, n.name || "");
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = zt),
          (e.NULL = new mp()),
          (e.ɵprov = wt({
            token: e,
            providedIn: "any",
            factory: () => ye(Oa),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function OE(e, t) {
        zi(_c(e)[1], Wt());
      }
      function sd(e) {
        let t = (function (e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let s;
          if (Jt(e)) s = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new Error("Directives cannot inherit Components");
            s = t.ɵdir;
          }
          if (s) {
            if (n) {
              r.push(s);
              const a = e;
              (a.inputs = id(e.inputs)),
                (a.declaredInputs = id(e.declaredInputs)),
                (a.outputs = id(e.outputs));
              const u = s.hostBindings;
              u && VE(e, u);
              const h = s.viewQuery,
                y = s.contentQueries;
              if (
                (h && FE(e, h),
                y && xE(e, y),
                J(e.inputs, s.inputs),
                J(e.declaredInputs, s.declaredInputs),
                J(e.outputs, s.outputs),
                Jt(s) && s.data.animation)
              ) {
                const A = e.data;
                A.animation = (A.animation || []).concat(s.data.animation);
              }
            }
            const i = s.features;
            if (i)
              for (let a = 0; a < i.length; a++) {
                const u = i[a];
                u && u.ngInherit && u(e), u === sd && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function (e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const s = e[r];
            (s.hostVars = t += s.hostVars),
              (s.hostAttrs = Yi(s.hostAttrs, (n = Yi(n, s.hostAttrs))));
          }
        })(r);
      }
      function id(e) {
        return e === Mn ? {} : e === ve ? [] : e;
      }
      function FE(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, s) => {
              t(r, s), n(r, s);
            }
          : t;
      }
      function xE(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, s, i) => {
              t(r, s, i), n(r, s, i);
            }
          : t;
      }
      function VE(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, s) => {
              t(r, s), n(r, s);
            }
          : t;
      }
      let bu = null;
      function xa() {
        if (!bu) {
          const e = Re.Symbol;
          if (e && e.iterator) bu = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const r = t[n];
              "entries" !== r &&
                "size" !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (bu = r);
            }
          }
        }
        return bu;
      }
      class Zs {
        constructor(t) {
          this.wrapped = t;
        }
        static wrap(t) {
          return new Zs(t);
        }
        static unwrap(t) {
          return Zs.isWrapped(t) ? t.wrapped : t;
        }
        static isWrapped(t) {
          return t instanceof Zs;
        }
      }
      function Nl(e) {
        return (
          !!od(e) && (Array.isArray(e) || (!(e instanceof Map) && xa() in e))
        );
      }
      function od(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function Ii(e, t, n) {
        return (e[t] = n);
      }
      function Ol(e, t) {
        return e[t];
      }
      function er(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Jo(e, t, n, r) {
        const s = er(e, t, n);
        return er(e, t + 1, r) || s;
      }
      function bs(e, t, n, r, s, i) {
        const a = Jo(e, t, n, r);
        return Jo(e, t + 2, s, i) || a;
      }
      function ad(e, t, n, r) {
        const s = se();
        return er(s, _i(), t) && (st(), Mi(Mt(), s, e, t, n, r)), ad;
      }
      function Yp(e, t, n, r, s, i, a, u) {
        const h = se(),
          y = st(),
          A = e + 20,
          P = y.firstCreatePass
            ? (function (e, t, n, r, s, i, a, u, h) {
                const y = t.consts,
                  A = Ia(t, e, 4, a || null, kn(y, u));
                Gc(t, n, A, kn(y, h)), zi(t, A);
                const P = (A.tViews = vu(
                  2,
                  A,
                  r,
                  s,
                  i,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  y
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, A),
                    (P.queries = t.queries.embeddedTView(A))),
                  A
                );
              })(A, y, h, t, n, r, s, i, a)
            : y.data[A];
        Nn(P, !1);
        const F = h[11].createComment("");
        gu(y, h, F, P),
          Xn(F, h),
          Eu(h, (h[A] = up(F, h, F, P))),
          pn(P) && $c(y, h, P),
          null != a && Hc(h, P, u);
      }
      function Kp(e) {
        return Ft(Le.lFrame.contextLView, 20 + e);
      }
      function Pl(e, t = Ae.Default) {
        const n = se();
        return null === n ? ye(e, t) : zo(Wt(), n, ae(e), t);
      }
      function fd(e, t, n) {
        const r = se();
        return er(r, _i(), t) && Jr(st(), Mt(), r, e, t, r[11], n, !1), fd;
      }
      function hd(e, t, n, r, s) {
        const a = s ? "class" : "style";
        gp(e, n, t.inputs[a], a, r);
      }
      function pd(e, t, n, r) {
        const s = se(),
          i = st(),
          a = 20 + e,
          u = s[11],
          h = (s[a] = Sc(u, t, Le.lFrame.currentNamespace)),
          y = i.firstCreatePass
            ? (function (e, t, n, r, s, i, a) {
                const u = t.consts,
                  y = Ia(t, e, 2, s, kn(u, i));
                return (
                  Gc(t, n, y, kn(u, a)),
                  null !== y.attrs && Du(y, y.attrs, !1),
                  null !== y.mergedAttrs && Du(y, y.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, y),
                  y
                );
              })(a, i, s, 0, t, n, r)
            : i.data[a];
        Nn(y, !0);
        const A = y.mergedAttrs;
        null !== A && zr(u, h, A);
        const P = y.classes;
        null !== P && Nc(u, h, P);
        const F = y.styles;
        null !== F && Oh(u, h, F),
          64 != (64 & y.flags) && gu(i, s, h, y),
          0 === Le.lFrame.elementDepthCount && Xn(h, s),
          Le.lFrame.elementDepthCount++,
          pn(y) && ($c(i, s, y), Zh(i, y, s)),
          null !== r && Hc(s, y);
      }
      function gd() {
        let e = Wt();
        gi() ? Wr() : ((e = e.parent), Nn(e, !1));
        const t = e;
        Le.lFrame.elementDepthCount--;
        const n = st();
        n.firstCreatePass && (zi(n, e), zn(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function (e) {
              return 0 != (16 & e.flags);
            })(t) &&
            hd(n, t, se(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function (e) {
              return 0 != (32 & e.flags);
            })(t) &&
            hd(n, t, se(), t.stylesWithoutHost, !1);
      }
      function ag(e, t, n, r) {
        pd(e, t, n, r), gd();
      }
      function cg(e, t, n) {
        (function (e, t, n) {
          const r = se(),
            s = st(),
            i = e + 20,
            a = s.firstCreatePass
              ? (function (e, t, n, r, s) {
                  const i = t.consts,
                    a = kn(i, r),
                    u = Ia(t, e, 8, "ng-container", a);
                  return (
                    null !== a && Du(u, a, !0),
                    Gc(t, n, u, kn(i, s)),
                    null !== t.queries && t.queries.elementStart(t, u),
                    u
                  );
                })(i, s, r, t, n)
              : s.data[i];
          Nn(a, !0);
          const u = (r[i] = r[11].createComment(""));
          gu(s, r, u, a),
            Xn(u, r),
            pn(a) && ($c(s, r, a), Zh(s, a, r)),
            null != n && Hc(r, a);
        })(e, t, n),
          (function () {
            let e = Wt();
            const t = st();
            gi() ? Wr() : ((e = e.parent), Nn(e, !1)),
              t.firstCreatePass && (zi(t, e), zn(e) && t.queries.elementEnd(e));
          })();
      }
      function dg() {
        return se();
      }
      function md(e) {
        return !!e && "function" == typeof e.then;
      }
      function fg(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      const yd = fg;
      function _d(e, t, n, r) {
        const s = se(),
          i = st(),
          a = Wt();
        return (
          (function (e, t, n, r, s, i, a, u) {
            const h = pn(r),
              A = e.firstCreatePass && fp(e),
              P = t[8],
              F = dp(t);
            let L = !0;
            if (3 & r.type || u) {
              const q = we(r, t),
                ue = u ? u(q) : q,
                te = F.length,
                Ne = u ? (He) => u(g(He[r.index])) : r.index;
              if (Y(n)) {
                let He = null;
                if (
                  (!u &&
                    h &&
                    (He = (function (e, t, n, r) {
                      const s = e.cleanup;
                      if (null != s)
                        for (let i = 0; i < s.length - 1; i += 2) {
                          const a = s[i];
                          if (a === n && s[i + 1] === r) {
                            const u = t[7],
                              h = s[i + 2];
                            return u.length > h ? u[h] : null;
                          }
                          "string" == typeof a && (i += 2);
                        }
                      return null;
                    })(e, t, s, r.index)),
                  null !== He)
                )
                  ((He.__ngLastListenerFn__ || He).__ngNextListenerFn__ = i),
                    (He.__ngLastListenerFn__ = i),
                    (L = !1);
                else {
                  i = Cd(r, t, P, i, !1);
                  const at = n.listen(ue, s, i);
                  F.push(i, at), A && A.push(s, Ne, te, te + 1);
                }
              } else
                (i = Cd(r, t, P, i, !0)),
                  ue.addEventListener(s, i, a),
                  F.push(i),
                  A && A.push(s, Ne, te, a);
            } else i = Cd(r, t, P, i, !1);
            const $ = r.outputs;
            let K;
            if (L && null !== $ && (K = $[s])) {
              const q = K.length;
              if (q)
                for (let ue = 0; ue < q; ue += 2) {
                  const An = t[K[ue]][K[ue + 1]].subscribe(i),
                    As = F.length;
                  F.push(i, An), A && A.push(s, r.index, As, -(As + 1));
                }
            }
          })(i, s, s[11], a, e, t, !!n, r),
          _d
        );
      }
      function gg(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (s) {
          return pp(e, s), !1;
        }
      }
      function Cd(e, t, n, r, s) {
        return function i(a) {
          if (a === Function) return r;
          const u = 2 & e.flags ? Et(e.index, t) : t;
          0 == (32 & t[2]) && qc(u);
          let h = gg(t, 0, r, a),
            y = i.__ngNextListenerFn__;
          for (; y; ) (h = gg(t, 0, y, a) && h), (y = y.__ngNextListenerFn__);
          return s && !1 === h && (a.preventDefault(), (a.returnValue = !1)), h;
        };
      }
      function mg(e = 1) {
        return (function (e) {
          return (Le.lFrame.contextLView = (function (e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, Le.lFrame.contextLView))[8];
        })(e);
      }
      function mD(e, t) {
        let n = null;
        const r = (function (e) {
          const t = e.attrs;
          if (null != t) {
            const n = t.indexOf(5);
            if (0 == (1 & n)) return t[n + 1];
          }
          return null;
        })(e);
        for (let s = 0; s < t.length; s++) {
          const i = t[s];
          if ("*" !== i) {
            if (null === r ? Vh(e, i, !0) : Ev(r, i)) return s;
          } else n = s;
        }
        return n;
      }
      function yg(e) {
        const t = se()[16][6];
        if (!t.projection) {
          const r = (t.projection = to(e ? e.length : 1, null)),
            s = r.slice();
          let i = t.child;
          for (; null !== i; ) {
            const a = e ? mD(i, e) : 0;
            null !== a &&
              (s[a] ? (s[a].projectionNext = i) : (r[a] = i), (s[a] = i)),
              (i = i.next);
          }
        }
      }
      function _g(e, t = 0, n) {
        const r = se(),
          s = st(),
          i = Ia(s, 20 + e, 16, null, n || null);
        null === i.projection && (i.projection = t),
          Wr(),
          64 != (64 & i.flags) &&
            (function (e, t, n) {
              Nh(t[11], 0, t, n, Eh(e, n, t), Sh(n.parent || t[6], n, t));
            })(s, r, i);
      }
      function Mg(e, t, n, r, s) {
        const i = e[n + 1],
          a = null === t;
        let u = r ? Ks(i) : oo(i),
          h = !1;
        for (; 0 !== u && (!1 === h || a); ) {
          const A = e[u + 1];
          CD(e[u], t) && ((h = !0), (e[u + 1] = r ? Fc(A) : Oc(A))),
            (u = r ? Ks(A) : oo(A));
        }
        h && (e[n + 1] = r ? Oc(i) : Fc(i));
      }
      function CD(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && H(e, t) >= 0)
        );
      }
      const Sn = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function Ig(e) {
        return e.substring(Sn.key, Sn.keyEnd);
      }
      function Rg(e, t) {
        const n = Sn.textEnd;
        return n === t
          ? -1
          : ((t = Sn.keyEnd =
              (function (e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32; ) t++;
                return t;
              })(e, (Sn.key = t), n)),
            za(e, t, n));
      }
      function za(e, t, n) {
        for (; t < n && e.charCodeAt(t) <= 32; ) t++;
        return t;
      }
      function Ed(e, t, n) {
        return Js(e, t, n, !1), Ed;
      }
      function Dd(e, t) {
        return Js(e, t, null, !0), Dd;
      }
      function xg(e) {
        !(function (e, t, n, r) {
          const s = st(),
            i = fr(2);
          s.firstUpdatePass && kg(s, null, i, r);
          const a = se();
          if (n !== Qe && er(a, i, n)) {
            const u = s.data[gn()];
            if (Ug(u, r) && !Vg(s, i)) {
              let h = r ? u.classesWithoutHost : u.stylesWithoutHost;
              null !== h && (n = be(h, n || "")), hd(s, u, a, n, r);
            } else
              !(function (e, t, n, r, s, i, a, u) {
                s === Qe && (s = ve);
                let h = 0,
                  y = 0,
                  A = 0 < s.length ? s[0] : null,
                  P = 0 < i.length ? i[0] : null;
                for (; null !== A || null !== P; ) {
                  const F = h < s.length ? s[h + 1] : void 0,
                    L = y < i.length ? i[y + 1] : void 0;
                  let K,
                    $ = null;
                  A === P
                    ? ((h += 2), (y += 2), F !== L && (($ = P), (K = L)))
                    : null === P || (null !== A && A < P)
                    ? ((h += 2), ($ = A))
                    : ((y += 2), ($ = P), (K = L)),
                    null !== $ && Bg(e, t, n, r, $, K, a, u),
                    (A = h < s.length ? s[h] : null),
                    (P = y < i.length ? i[y] : null);
                }
              })(
                s,
                u,
                a,
                a[11],
                a[i + 1],
                (a[i + 1] = (function (e, t, n) {
                  if (null == n || "" === n) return ve;
                  const r = [],
                    s = io(n);
                  if (Array.isArray(s))
                    for (let i = 0; i < s.length; i++) e(r, s[i], !0);
                  else if ("object" == typeof s)
                    for (const i in s) s.hasOwnProperty(i) && e(r, i, s[i]);
                  else "string" == typeof s && t(r, s);
                  return r;
                })(e, t, n)),
                r,
                i
              );
          }
        })(x, Ni, e, !0);
      }
      function Ni(e, t) {
        for (
          let n = (function (e) {
            return (
              (function (e) {
                (Sn.key = 0),
                  (Sn.keyEnd = 0),
                  (Sn.value = 0),
                  (Sn.valueEnd = 0),
                  (Sn.textEnd = e.length);
              })(e),
              Rg(e, za(e, 0, Sn.textEnd))
            );
          })(t);
          n >= 0;
          n = Rg(t, n)
        )
          x(e, Ig(t), !0);
      }
      function Js(e, t, n, r) {
        const s = se(),
          i = st(),
          a = fr(2);
        i.firstUpdatePass && kg(i, e, a, r),
          t !== Qe &&
            er(s, a, t) &&
            Bg(
              i,
              i.data[gn()],
              s,
              s[11],
              e,
              (s[a + 1] = (function (e, t) {
                return (
                  null == e ||
                    ("string" == typeof t
                      ? (e += t)
                      : "object" == typeof e && (e = Z(io(e)))),
                  e
                );
              })(t, n)),
              r,
              a
            );
      }
      function Vg(e, t) {
        return t >= e.expandoStartIndex;
      }
      function kg(e, t, n, r) {
        const s = e.data;
        if (null === s[n + 1]) {
          const i = s[gn()],
            a = Vg(e, n);
          Ug(i, r) && null === t && !a && (t = !1),
            (t = (function (e, t, n, r) {
              const s = (function (e) {
                const t = Le.lFrame.currentDirectiveIndex;
                return -1 === t ? null : e[t];
              })(e);
              let i = r ? t.residualClasses : t.residualStyles;
              if (null === s)
                0 === (r ? t.classBindings : t.styleBindings) &&
                  ((n = Fl((n = bd(null, e, t, n, r)), t.attrs, r)),
                  (i = null));
              else {
                const a = t.directiveStylingLast;
                if (-1 === a || e[a] !== s)
                  if (((n = bd(s, e, t, n, r)), null === i)) {
                    let h = (function (e, t, n) {
                      const r = n ? t.classBindings : t.styleBindings;
                      if (0 !== oo(r)) return e[Ks(r)];
                    })(e, t, r);
                    void 0 !== h &&
                      Array.isArray(h) &&
                      ((h = bd(null, e, t, h[1], r)),
                      (h = Fl(h, t.attrs, r)),
                      (function (e, t, n, r) {
                        e[Ks(n ? t.classBindings : t.styleBindings)] = r;
                      })(e, t, r, h));
                  } else
                    i = (function (e, t, n) {
                      let r;
                      const s = t.directiveEnd;
                      for (let i = 1 + t.directiveStylingLast; i < s; i++)
                        r = Fl(r, e[i].hostAttrs, n);
                      return Fl(r, t.attrs, n);
                    })(e, t, r);
              }
              return (
                void 0 !== i &&
                  (r ? (t.residualClasses = i) : (t.residualStyles = i)),
                n
              );
            })(s, i, t, r)),
            (function (e, t, n, r, s, i) {
              let a = i ? t.classBindings : t.styleBindings,
                u = Ks(a),
                h = oo(a);
              e[r] = n;
              let A,
                y = !1;
              if (Array.isArray(n)) {
                const P = n;
                (A = P[1]), (null === A || H(P, A) > 0) && (y = !0);
              } else A = n;
              if (s)
                if (0 !== h) {
                  const F = Ks(e[u + 1]);
                  (e[r + 1] = yu(F, u)),
                    0 !== F && (e[F + 1] = Pc(e[F + 1], r)),
                    (e[u + 1] = (function (e, t) {
                      return (131071 & e) | (t << 17);
                    })(e[u + 1], r));
                } else
                  (e[r + 1] = yu(u, 0)),
                    0 !== u && (e[u + 1] = Pc(e[u + 1], r)),
                    (u = r);
              else
                (e[r + 1] = yu(h, 0)),
                  0 === u ? (u = r) : (e[h + 1] = Pc(e[h + 1], r)),
                  (h = r);
              y && (e[r + 1] = Oc(e[r + 1])),
                Mg(e, A, r, !0),
                Mg(e, A, r, !1),
                (function (e, t, n, r, s) {
                  const i = s ? e.residualClasses : e.residualStyles;
                  null != i &&
                    "string" == typeof t &&
                    H(i, t) >= 0 &&
                    (n[r + 1] = Fc(n[r + 1]));
                })(t, A, e, r, i),
                (a = yu(u, h)),
                i ? (t.classBindings = a) : (t.styleBindings = a);
            })(s, i, t, n, a, r);
        }
      }
      function bd(e, t, n, r, s) {
        let i = null;
        const a = n.directiveEnd;
        let u = n.directiveStylingLast;
        for (
          -1 === u ? (u = n.directiveStart) : u++;
          u < a && ((i = t[u]), (r = Fl(r, i.hostAttrs, s)), i !== e);

        )
          u++;
        return null !== e && (n.directiveStylingLast = u), r;
      }
      function Fl(e, t, n) {
        const r = n ? 1 : 2;
        let s = -1;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const a = t[i];
            "number" == typeof a
              ? (s = a)
              : s === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                x(e, a, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function Bg(e, t, n, r, s, i, a, u) {
        if (!(3 & t.type)) return;
        const h = e.data,
          y = h[u + 1];
        Au(
          (function (e) {
            return 1 == (1 & e);
          })(y)
            ? jg(h, t, n, s, oo(y), a)
            : void 0
        ) ||
          (Au(i) ||
            ((function (e) {
              return 2 == (2 & e);
            })(y) &&
              (i = jg(h, null, n, s, u, a))),
          (function (e, t, n, r, s) {
            const i = Y(e);
            if (t)
              s
                ? i
                  ? e.addClass(n, r)
                  : n.classList.add(r)
                : i
                ? e.removeClass(n, r)
                : n.classList.remove(r);
            else {
              let a = -1 === r.indexOf("-") ? void 0 : Ti.DashCase;
              if (null == s)
                i ? e.removeStyle(n, r, a) : n.style.removeProperty(r);
              else {
                const u = "string" == typeof s && s.endsWith("!important");
                u && ((s = s.slice(0, -10)), (a |= Ti.Important)),
                  i
                    ? e.setStyle(n, r, s, a)
                    : n.style.setProperty(r, s, u ? "important" : "");
              }
            }
          })(r, a, ge(gn(), n), s, i));
      }
      function jg(e, t, n, r, s, i) {
        const a = null === t;
        let u;
        for (; s > 0; ) {
          const h = e[s],
            y = Array.isArray(h),
            A = y ? h[1] : h,
            P = null === A;
          let F = n[s + 1];
          F === Qe && (F = P ? ve : void 0);
          let L = P ? k(F, r) : A === r ? F : void 0;
          if ((y && !Au(L) && (L = k(h, r)), Au(L) && ((u = L), a))) return u;
          const $ = e[s + 1];
          s = a ? Ks($) : oo($);
        }
        if (null !== t) {
          let h = i ? t.residualClasses : t.residualStyles;
          null != h && (u = k(h, r));
        }
        return u;
      }
      function Au(e) {
        return void 0 !== e;
      }
      function Ug(e, t) {
        return 0 != (e.flags & (t ? 16 : 32));
      }
      function $g(e, t = "") {
        const n = se(),
          r = st(),
          s = e + 20,
          i = r.firstCreatePass ? Ia(r, s, 1, t, null) : r.data[s],
          a = (n[s] = (function (e, t) {
            return Y(e) ? e.createText(t) : e.createTextNode(t);
          })(n[11], t));
        gu(r, n, a, i), Nn(i, !1);
      }
      function wd(e) {
        return Tu("", e, ""), wd;
      }
      function Tu(e, t, n) {
        const r = se(),
          s = (function (e, t, n, r) {
            return er(e, _i(), n) ? t + Oe(n) + r : Qe;
          })(r, e, t, n);
        return s !== Qe && lo(r, gn(), s), Tu;
      }
      function Sd(e, t, n) {
        const r = se();
        return er(r, _i(), t) && Jr(st(), Mt(), r, e, t, r[11], n, !0), Sd;
      }
      const Xo = void 0;
      var XD = [
        "en",
        [["a", "p"], ["AM", "PM"], Xo],
        [["AM", "PM"], Xo, Xo],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        Xo,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
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
          [
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
        ],
        Xo,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", Xo, "{1} 'at' {0}", Xo],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function (e) {
          const t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === t && 0 === n ? 1 : 5;
        },
      ];
      let qa = {};
      function Ad(e) {
        const t = (function (e) {
          return e.toLowerCase().replace(/_/g, "-");
        })(e);
        let n = lm(t);
        if (n) return n;
        const r = t.split("-")[0];
        if (((n = lm(r)), n)) return n;
        if ("en" === r) return XD;
        throw new Error(`Missing locale data for the locale "${e}".`);
      }
      function am(e) {
        return Ad(e)[je.PluralCase];
      }
      function lm(e) {
        return (
          e in qa ||
            (qa[e] =
              Re.ng &&
              Re.ng.common &&
              Re.ng.common.locales &&
              Re.ng.common.locales[e]),
          qa[e]
        );
      }
      var je = (() => (
        ((je = je || {})[(je.LocaleId = 0)] = "LocaleId"),
        (je[(je.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
        (je[(je.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
        (je[(je.DaysFormat = 3)] = "DaysFormat"),
        (je[(je.DaysStandalone = 4)] = "DaysStandalone"),
        (je[(je.MonthsFormat = 5)] = "MonthsFormat"),
        (je[(je.MonthsStandalone = 6)] = "MonthsStandalone"),
        (je[(je.Eras = 7)] = "Eras"),
        (je[(je.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
        (je[(je.WeekendRange = 9)] = "WeekendRange"),
        (je[(je.DateFormat = 10)] = "DateFormat"),
        (je[(je.TimeFormat = 11)] = "TimeFormat"),
        (je[(je.DateTimeFormat = 12)] = "DateTimeFormat"),
        (je[(je.NumberSymbols = 13)] = "NumberSymbols"),
        (je[(je.NumberFormats = 14)] = "NumberFormats"),
        (je[(je.CurrencyCode = 15)] = "CurrencyCode"),
        (je[(je.CurrencySymbol = 16)] = "CurrencySymbol"),
        (je[(je.CurrencyName = 17)] = "CurrencyName"),
        (je[(je.Currencies = 18)] = "Currencies"),
        (je[(je.Directionality = 19)] = "Directionality"),
        (je[(je.PluralCase = 20)] = "PluralCase"),
        (je[(je.ExtraData = 21)] = "ExtraData"),
        je
      ))();
      const Mu = "en-US";
      let um = Mu;
      function Td(e) {
        Nt(e, "Expected localeId to be defined"),
          "string" == typeof e && (um = e.toLowerCase().replace(/_/g, "-"));
      }
      function Rd(e, t, n, r, s) {
        if (((e = ae(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) Rd(e[i], t, n, r, s);
        else {
          const i = st(),
            a = se();
          let u = Fa(e) ? e : ae(e.provide),
            h = Cp(e);
          const y = Wt(),
            A = 1048575 & y.providerIndexes,
            P = y.directiveStart,
            F = y.providerIndexes >> 20;
          if (Fa(e) || !e.multi) {
            const L = new mn(h, s, Pl),
              $ = Od(u, t, s ? A : A + F, P);
            -1 === $
              ? (Xi(Zi(y, a), i, u),
                Nd(i, e, t.length),
                t.push(u),
                y.directiveStart++,
                y.directiveEnd++,
                s && (y.providerIndexes += 1048576),
                n.push(L),
                a.push(L))
              : ((n[$] = L), (a[$] = L));
          } else {
            const L = Od(u, t, A + F, P),
              $ = Od(u, t, A, A + F),
              K = L >= 0 && n[L],
              q = $ >= 0 && n[$];
            if ((s && !q) || (!s && !K)) {
              Xi(Zi(y, a), i, u);
              const ue = (function (e, t, n, r, s) {
                const i = new mn(e, n, Pl);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  Pm(i, s, r && !n),
                  i
                );
              })(s ? Qb : Kb, n.length, s, r, h);
              !s && q && (n[$].providerFactory = ue),
                Nd(i, e, t.length, 0),
                t.push(u),
                y.directiveStart++,
                y.directiveEnd++,
                s && (y.providerIndexes += 1048576),
                n.push(ue),
                a.push(ue);
            } else Nd(i, e, L > -1 ? L : $, Pm(n[s ? $ : L], h, !s && r));
            !s && r && q && n[$].componentProviders++;
          }
        }
      }
      function Nd(e, t, n, r) {
        const s = Fa(t);
        if (
          s ||
          (function (e) {
            return !!e.useClass;
          })(t)
        ) {
          const a = (t.useClass || t).prototype.ngOnDestroy;
          if (a) {
            const u = e.destroyHooks || (e.destroyHooks = []);
            if (!s && t.multi) {
              const h = u.indexOf(n);
              -1 === h ? u.push(n, [r, a]) : u[h + 1].push(r, a);
            } else u.push(n, a);
          }
        }
      }
      function Pm(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function Od(e, t, n, r) {
        for (let s = n; s < r; s++) if (t[s] === e) return s;
        return -1;
      }
      function Kb(e, t, n, r) {
        return Pd(this.multi, []);
      }
      function Qb(e, t, n, r) {
        const s = this.multi;
        let i;
        if (this.providerFactory) {
          const a = this.providerFactory.componentProviders,
            u = Di(n, n[1], this.providerFactory.index, r);
          (i = u.slice(0, a)), Pd(s, i);
          for (let h = a; h < u.length; h++) i.push(u[h]);
        } else (i = []), Pd(s, i);
        return i;
      }
      function Pd(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function Fm(e, t = []) {
        return (n) => {
          n.providersResolver = (r, s) =>
            (function (e, t, n) {
              const r = st();
              if (r.firstCreatePass) {
                const s = Jt(e);
                Rd(n, r.data, r.blueprint, s, !0),
                  Rd(t, r.data, r.blueprint, s, !1);
              }
            })(r, s ? s(e) : e, t);
        };
      }
      class xm {}
      const km = "ngComponent";
      class Xb {
        resolveComponentFactory(t) {
          throw (function (e) {
            const t = Error(
              `No component factory found for ${Z(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t[km] = e), t;
          })(t);
        }
      }
      let Ka = (() => {
        class e {}
        return (e.NULL = new Xb()), e;
      })();
      function Pu(...e) {}
      function Qa(e, t) {
        return new Oi(we(e, t));
      }
      const nw = function () {
        return Qa(Wt(), se());
      };
      let Oi = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = nw), e;
      })();
      function Lm(e) {
        return e instanceof Oi ? e.nativeElement : e;
      }
      class Fu {}
      let rw = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => iw()), e;
      })();
      const iw = function () {
        const e = se(),
          n = Et(Wt().index, e);
        return (function (e) {
          return e[11];
        })(hn(n) ? n : e);
      };
      let xd = (() => {
        class e {}
        return (
          (e.ɵprov = wt({ token: e, providedIn: "root", factory: () => null })),
          e
        );
      })();
      class Bm {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const jm = new Bm("12.2.6");
      class Um {
        constructor() {}
        supports(t) {
          return Nl(t);
        }
        create(t) {
          return new uw(t);
        }
      }
      const lw = (e, t) => t;
      class uw {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || lw);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            s = 0,
            i = null;
          for (; n || r; ) {
            const a = !r || (n && n.currentIndex < Hm(r, s, i)) ? n : r,
              u = Hm(a, s, i),
              h = a.currentIndex;
            if (a === r) s--, (r = r._nextRemoved);
            else if (((n = n._next), null == a.previousIndex)) s++;
            else {
              i || (i = []);
              const y = u - s,
                A = h - s;
              if (y != A) {
                for (let F = 0; F < y; F++) {
                  const L = F < i.length ? i[F] : (i[F] = 0),
                    $ = L + F;
                  A <= $ && $ < y && (i[F] = L + 1);
                }
                i[a.previousIndex] = A - y;
              }
            }
            u !== h && t(a, u, h);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !Nl(t)))
            throw new Error(
              `Error trying to diff '${Z(
                t
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let s,
            i,
            a,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let u = 0; u < this.length; u++)
              (i = t[u]),
                (a = this._trackByFn(u, i)),
                null !== n && Object.is(n.trackById, a)
                  ? (r && (n = this._verifyReinsertion(n, i, a, u)),
                    Object.is(n.item, i) || this._addIdentityChange(n, i))
                  : ((n = this._mismatch(n, i, a, u)), (r = !0)),
                (n = n._next);
          } else
            (s = 0),
              (function (e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[xa()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (u) => {
                (a = this._trackByFn(s, u)),
                  null !== n && Object.is(n.trackById, a)
                    ? (r && (n = this._verifyReinsertion(n, u, a, s)),
                      Object.is(n.item, u) || this._addIdentityChange(n, u))
                    : ((n = this._mismatch(n, u, a, s)), (r = !0)),
                  (n = n._next),
                  s++;
              }),
              (this.length = s);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, s) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, i, s))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, s))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, s))
              : (t = this._addAfter(new cw(n, r), i, s)),
            t
          );
        }
        _verifyReinsertion(t, n, r, s) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, s))
              : t.currentIndex != s &&
                ((t.currentIndex = s), this._addToMoves(t, s)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const s = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === s ? (this._removalsHead = i) : (s._nextRemoved = i),
            null === i ? (this._removalsTail = s) : (i._prevRemoved = s),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const s = null === n ? this._itHead : n._next;
          return (
            (t._next = s),
            (t._prev = n),
            null === s ? (this._itTail = t) : (s._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new $m()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new $m()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class cw {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class dw {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class $m {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new dw()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const s = this.map.get(t);
          return s ? s.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Hm(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + t + s;
      }
      class Gm {
        constructor() {}
        supports(t) {
          return t instanceof Map || od(t);
        }
        create() {
          return new fw();
        }
      }
      class fw {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || od(t)))
              throw new Error(
                `Error trying to diff '${Z(
                  t
                )}'. Only maps and objects are allowed`
              );
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, s) => {
              if (n && n.key === s)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const i = this._getOrCreateRecordForKey(s, r);
                n = this._insertBeforeOrAppend(n, i);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const s = this._records.get(t);
            this._maybeAddToChanges(s, n);
            const i = s._prev,
              a = s._next;
            return (
              i && (i._next = a),
              a && (a._prev = i),
              (s._next = null),
              (s._prev = null),
              s
            );
          }
          const r = new hw(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class hw {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Wm() {
        return new xu([new Um()]);
      }
      let xu = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const s = r.factories.slice();
              n = n.concat(s);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || Wm()),
              deps: [[e, new Zr(), new yn()]],
            };
          }
          find(n) {
            const r = this.factories.find((s) => s.supports(n));
            if (null != r) return r;
            throw new Error(
              `Cannot find a differ supporting object '${n}' of type '${(function (
                e
              ) {
                return e.name || typeof e;
              })(n)}'`
            );
          }
        }
        return (e.ɵprov = wt({ token: e, providedIn: "root", factory: Wm })), e;
      })();
      function zm() {
        return new Vu([new Gm()]);
      }
      let Vu = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const s = r.factories.slice();
              n = n.concat(s);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || zm()),
              deps: [[e, new Zr(), new yn()]],
            };
          }
          find(n) {
            const r = this.factories.find((s) => s.supports(n));
            if (r) return r;
            throw new Error(`Cannot find a differ supporting object '${n}'`);
          }
        }
        return (e.ɵprov = wt({ token: e, providedIn: "root", factory: zm })), e;
      })();
      function ku(e, t, n, r, s = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          if ((null !== i && r.push(g(i)), nt(i)))
            for (let u = 10; u < i.length; u++) {
              const h = i[u],
                y = h[1].firstChild;
              null !== y && ku(h[1], h, y, r);
            }
          const a = n.type;
          if (8 & a) ku(e, t, n.child, r);
          else if (32 & a) {
            const u = Ec(n, t);
            let h;
            for (; (h = u()); ) r.push(h);
          } else if (16 & a) {
            const u = Ih(t, n);
            if (Array.isArray(u)) r.push(...u);
            else {
              const h = wl(t[16]);
              ku(h[1], h, u, r, !0);
            }
          }
          n = s ? n.projectionNext : n.next;
        }
        return r;
      }
      class Bl {
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return ku(n, t, n.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (nt(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (Ac(t, r), eo(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          vh(this._lView[1], this._lView);
        }
        onDestroy(t) {
          tp(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          qc(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          Kc(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (e, t, n) {
            ps(!0);
            try {
              Kc(e, t, n);
            } finally {
              ps(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef() {
          if (this._appRef)
            throw new Error(
              "This view is already attached directly to the ApplicationRef!"
            );
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null),
            Sl(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer)
            throw new Error(
              "This view is already attached to a ViewContainer!"
            );
          this._appRef = t;
        }
      }
      class gw extends Bl {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          cp(this._view);
        }
        checkNoChanges() {
          !(function (e) {
            ps(!0);
            try {
              cp(e);
            } finally {
              ps(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      const yw = function (e) {
        return (function (e, t, n) {
          if (Vn(e) && !n) {
            const r = Et(e.index, t);
            return new Bl(r, r);
          }
          return 47 & e.type ? new Bl(t[16], t) : null;
        })(Wt(), se(), 16 == (16 & e));
      };
      let _w = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = yw), e;
      })();
      const Ew = [new Gm()],
        bw = new xu([new Um()]),
        ww = new Vu(Ew),
        Aw = function () {
          return Lu(Wt(), se());
        };
      let jl = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = Aw), e;
      })();
      const Tw = jl,
        Mw = class extends Tw {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t) {
            const n = this._declarationTContainer.tViews,
              r = Al(
                this._declarationLView,
                n,
                t,
                16,
                null,
                n.declTNode,
                null,
                null,
                null,
                null
              );
            r[17] = this._declarationLView[this._declarationTContainer.index];
            const i = this._declarationLView[19];
            return (
              null !== i && (r[19] = i.createEmbeddedView(n)),
              Tl(n, r, t),
              new Bl(r)
            );
          }
        };
      function Lu(e, t) {
        return 4 & e.type ? new Mw(t, e, Qa(e, t)) : null;
      }
      class ea {}
      class qm {}
      const Nw = function () {
        return Qm(Wt(), se());
      };
      let Bu = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = Nw), e;
      })();
      const Pw = Bu,
        Ym = class extends Pw {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return Qa(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new c(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Do(this._hostTNode, this._hostLView);
            if (Qi(t)) {
              const n = Qn(t, this._hostLView),
                r = vi(t);
              return new c(n[1].data[r + 8], n);
            }
            return new c(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = Km(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, r) {
            const s = t.createEmbeddedView(n || {});
            return this.insert(s, r), s;
          }
          createComponent(t, n, r, s, i) {
            const a = r || this.parentInjector;
            if (!i && null == t.ngModule && a) {
              const h = a.get(ea, null);
              h && (i = h);
            }
            const u = t.create(a, s, void 0, i);
            return this.insert(u.hostView, n), u;
          }
          insert(t, n) {
            const r = t._lView,
              s = r[1];
            if (nt(r[3])) {
              const A = this.indexOf(t);
              if (-1 !== A) this.detach(A);
              else {
                const P = r[3],
                  F = new Ym(P, P[6], P[3]);
                F.detach(F.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              a = this._lContainer;
            !(function (e, t, n, r) {
              const s = 10 + r,
                i = n.length;
              r > 0 && (n[s - 1][4] = t),
                r < i - 10
                  ? ((t[4] = n[s]), _l(n, 10 + r, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const a = t[17];
              null !== a &&
                n !== a &&
                (function (e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(a, t);
              const u = t[19];
              null !== u && u.insertView(e), (t[2] |= 128);
            })(s, r, a, i);
            const u = Ic(i, a),
              h = r[11],
              y = pu(h, a[7]);
            return (
              null !== y &&
                (function (e, t, n, r, s, i) {
                  (r[0] = s), (r[6] = t), Sl(e, r, n, 1, s, i);
                })(s, a[6], h, r, y, u),
              t.attachToViewContainerRef(),
              _l(Vd(a), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = Km(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = Ac(this._lContainer, n);
            r && (eo(Vd(this._lContainer), n), vh(r[1], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = Ac(this._lContainer, n);
            return r && null != eo(Vd(this._lContainer), n) ? new Bl(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return null == t ? this.length + n : t;
          }
        };
      function Km(e) {
        return e[8];
      }
      function Vd(e) {
        return e[8] || (e[8] = []);
      }
      function Qm(e, t) {
        let n;
        const r = t[e.index];
        if (nt(r)) n = r;
        else {
          let s;
          if (8 & e.type) s = g(r);
          else {
            const i = t[11];
            s = i.createComment("");
            const a = we(e, t);
            Zo(
              i,
              pu(i, a),
              s,
              (function (e, t) {
                return Y(e) ? e.nextSibling(t) : t.nextSibling;
              })(i, a),
              !1
            );
          }
          (t[e.index] = n = up(r, t, s, e)), Eu(t, n);
        }
        return new Ym(n, e, t);
      }
      const el = {};
      class my extends Ka {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = St(t);
          return new _y(n, this.ngModule);
        }
      }
      function yy(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      const I0 = new Ct("SCHEDULER_TOKEN", {
        providedIn: "root",
        factory: () => dh,
      });
      class _y extends xm {
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(Dv).join(",")),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        get inputs() {
          return yy(this.componentDef.inputs);
        }
        get outputs() {
          return yy(this.componentDef.outputs);
        }
        create(t, n, r, s) {
          const i = (s = s || this.ngModule)
              ? (function (e, t) {
                  return {
                    get: (n, r, s) => {
                      const i = e.get(n, el, s);
                      return i !== el || r === el ? i : t.get(n, r, s);
                    },
                  };
                })(t, s.injector)
              : t,
            a = i.get(Fu, v),
            u = i.get(xd, null),
            h = a.createRenderer(null, this.componentDef),
            y = this.componentDef.selectors[0][0] || "div",
            A = r
              ? (function (e, t, n) {
                  if (Y(e)) return e.selectRootElement(t, n === Tt.ShadowDom);
                  let r = "string" == typeof t ? e.querySelector(t) : t;
                  return (r.textContent = ""), r;
                })(h, r, this.componentDef.encapsulation)
              : Sc(
                  a.createRenderer(null, this.componentDef),
                  y,
                  (function (e) {
                    const t = e.toLowerCase();
                    return "svg" === t
                      ? "http://www.w3.org/2000/svg"
                      : "math" === t
                      ? "http://www.w3.org/1998/MathML/"
                      : null;
                  })(y)
                ),
            P = this.componentDef.onPush ? 576 : 528,
            F = (function (e, t) {
              return {
                components: [],
                scheduler: e || dh,
                clean: oE,
                playerHandler: t || null,
                flags: 0,
              };
            })(),
            L = vu(0, null, null, 1, 0, null, null, null, null, null),
            $ = Al(null, L, F, P, null, null, a, h, u, i);
          let K, q;
          yo($);
          try {
            const ue = (function (e, t, n, r, s, i) {
              const a = n[1];
              n[20] = e;
              const h = Ia(a, 20, 2, "#host", null),
                y = (h.mergedAttrs = t.hostAttrs);
              null !== y &&
                (Du(h, y, !0),
                null !== e &&
                  (zr(s, e, y),
                  null !== h.classes && Nc(s, e, h.classes),
                  null !== h.styles && Oh(s, e, h.styles)));
              const A = r.createRenderer(e, t),
                P = Al(
                  n,
                  Jh(t),
                  null,
                  t.onPush ? 64 : 16,
                  n[20],
                  h,
                  r,
                  A,
                  i || null,
                  null
                );
              return (
                a.firstCreatePass &&
                  (Xi(Zi(h, n), a, t.type), op(a, h), ap(h, n.length, 1)),
                Eu(n, P),
                (n[20] = P)
              );
            })(A, this.componentDef, $, a, h);
            if (A)
              if (r) zr(h, A, ["ng-version", jm.full]);
              else {
                const { attrs: te, classes: Ne } = (function (e) {
                  const t = [],
                    n = [];
                  let r = 1,
                    s = 2;
                  for (; r < e.length; ) {
                    let i = e[r];
                    if ("string" == typeof i)
                      2 === s
                        ? "" !== i && t.push(i, e[++r])
                        : 8 === s && n.push(i);
                    else {
                      if (!Ys(s)) break;
                      s = i;
                    }
                    r++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                te && zr(h, A, te),
                  Ne && Ne.length > 0 && Nc(h, A, Ne.join(" "));
              }
            if (((q = vt(L, 20)), void 0 !== n)) {
              const te = (q.projection = []);
              for (let Ne = 0; Ne < this.ngContentSelectors.length; Ne++) {
                const He = n[Ne];
                te.push(null != He ? Array.from(He) : null);
              }
            }
            (K = (function (e, t, n, r, s) {
              const i = n[1],
                a = (function (e, t, n) {
                  const r = Wt();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    lp(e, r, t, Ra(e, t, 1, null), n));
                  const s = Di(t, e, r.directiveStart, r);
                  Xn(s, t);
                  const i = we(r, t);
                  return i && Xn(i, t), s;
                })(i, n, t);
              if (
                (r.components.push(a),
                (e[8] = a),
                s && s.forEach((h) => h(a, t)),
                t.contentQueries)
              ) {
                const h = Wt();
                t.contentQueries(1, a, h.directiveStart);
              }
              const u = Wt();
              return (
                !i.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (gs(u.index),
                  sp(n[1], u, 0, u.directiveStart, u.directiveEnd, t),
                  ip(t, a)),
                a
              );
            })(ue, this.componentDef, $, F, [OE])),
              Tl(L, $, null);
          } finally {
            Bs();
          }
          return new O0(this.componentType, K, Qa(q, $), $, q);
        }
      }
      class O0 extends class {} {
        constructor(t, n, r, s, i) {
          super(),
            (this.location = r),
            (this._rootLView = s),
            (this._tNode = i),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new gw(s)),
            (this.componentType = t);
        }
        get injector() {
          return new c(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      const tl = new Map();
      class x0 extends ea {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new my(this));
          const r = Gt(t),
            s = t[ui] || null;
          s && Td(s),
            (this._bootstrapComponents = Ai(r.bootstrap)),
            (this._r3Injector = _p(
              t,
              n,
              [
                { provide: ea, useValue: this },
                { provide: Ka, useValue: this.componentFactoryResolver },
              ],
              Z(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, n = Ut.THROW_IF_NOT_FOUND, r = Ae.Default) {
          return t === Ut || t === ea || t === Oa
            ? this
            : this._r3Injector.get(t, n, r);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Kd extends qm {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== Gt(t) &&
              (function (e) {
                const t = new Set();
                !(function n(r) {
                  const s = Gt(r, !0),
                    i = s.id;
                  null !== i &&
                    ((function (e, t, n) {
                      if (t && t !== n)
                        throw new Error(
                          `Duplicate module registered for ${e} - ${Z(
                            t
                          )} vs ${Z(t.name)}`
                        );
                    })(i, tl.get(i), r),
                    tl.set(i, r));
                  const a = Ai(s.imports);
                  for (const u of a) t.has(u) || (t.add(u), n(u));
                })(e);
              })(t);
        }
        create(t) {
          return new x0(this.moduleType, t);
        }
      }
      function Ey(e, t, n) {
        const r = wn() + e,
          s = se();
        return s[r] === Qe ? Ii(s, r, n ? t.call(n) : t()) : Ol(s, r);
      }
      function Dy(e, t, n, r) {
        return Ty(se(), wn(), e, t, n, r);
      }
      function by(e, t, n, r, s) {
        return (function (e, t, n, r, s, i, a) {
          const u = t + n;
          return Jo(e, u, s, i)
            ? Ii(e, u + 2, a ? r.call(a, s, i) : r(s, i))
            : Yl(e, u + 2);
        })(se(), wn(), e, t, n, r, s);
      }
      function wy(e, t, n, r, s, i) {
        return (function (e, t, n, r, s, i, a, u) {
          const h = t + n;
          return (function (e, t, n, r, s) {
            const i = Jo(e, t, n, r);
            return er(e, t + 2, s) || i;
          })(e, h, s, i, a)
            ? Ii(e, h + 3, u ? r.call(u, s, i, a) : r(s, i, a))
            : Yl(e, h + 3);
        })(se(), wn(), e, t, n, r, s, i);
      }
      function Sy(e, t, n, r, s, i, a) {
        return (function (e, t, n, r, s, i, a, u, h) {
          const y = t + n;
          return bs(e, y, s, i, a, u)
            ? Ii(e, y + 4, h ? r.call(h, s, i, a, u) : r(s, i, a, u))
            : Yl(e, y + 4);
        })(se(), wn(), e, t, n, r, s, i, a);
      }
      function Ay(e, t, n, r, s, i, a, u) {
        const h = wn() + e,
          y = se(),
          A = bs(y, h, n, r, s, i);
        return er(y, h + 4, a) || A
          ? Ii(y, h + 5, u ? t.call(u, n, r, s, i, a) : t(n, r, s, i, a))
          : Ol(y, h + 5);
      }
      function Yl(e, t) {
        const n = e[t];
        return n === Qe ? void 0 : n;
      }
      function Ty(e, t, n, r, s, i) {
        const a = t + n;
        return er(e, a, s)
          ? Ii(e, a + 1, i ? r.call(i, s) : r(s))
          : Yl(e, a + 1);
      }
      function Oy(e, t) {
        const n = st();
        let r;
        const s = e + 20;
        n.firstCreatePass
          ? ((r = (function (e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const r = t[n];
                  if (e === r.name) return r;
                }
              throw new gt("302", `The pipe '${e}' could not be found!`);
            })(t, n.pipeRegistry)),
            (n.data[s] = r),
            r.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy))
          : (r = n.data[s]);
        const i = r.factory || (r.factory = dr(r.type)),
          a = Cn(Pl);
        try {
          const u = Ei(!1),
            h = i();
          return (
            Ei(u),
            (function (e, t, n, r) {
              n >= e.data.length &&
                ((e.data[n] = null), (e.blueprint[n] = null)),
                (t[n] = r);
            })(n, se(), s, h),
            h
          );
        } finally {
          Cn(a);
        }
      }
      function Py(e, t, n) {
        const r = e + 20,
          s = se(),
          i = Ft(s, r);
        return (function (e, t) {
          Zs.isWrapped(t) &&
            ((t = Zs.unwrap(t)), (e[Le.lFrame.bindingIndex] = Qe));
          return t;
        })(
          s,
          (function (e, t) {
            return e[1].data[t].pure;
          })(s, r)
            ? Ty(s, wn(), t, i.transform, n, i)
            : i.transform(n)
        );
      }
      function Qd(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const Pi = class extends b.xQ {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          var s, i, a;
          let u = t,
            h = n || (() => null),
            y = r;
          if (t && "object" == typeof t) {
            const P = t;
            (u = null === (s = P.next) || void 0 === s ? void 0 : s.bind(P)),
              (h = null === (i = P.error) || void 0 === i ? void 0 : i.bind(P)),
              (y =
                null === (a = P.complete) || void 0 === a ? void 0 : a.bind(P));
          }
          this.__isAsync && ((h = Qd(h)), u && (u = Qd(u)), y && (y = Qd(y)));
          const A = super.subscribe({ next: u, error: h, complete: y });
          return t instanceof N.w && t.add(A), A;
        }
      };
      function z0() {
        return this._results[xa()]();
      }
      class Gu {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = xa(),
            r = Gu.prototype;
          r[n] || (r[n] = z0);
        }
        get changes() {
          return this._changes || (this._changes = new Pi());
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const s = hr(t);
          (this._changesDetected = !(function (e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let s = e[r],
                i = t[r];
              if ((n && ((s = n(s)), (i = n(i))), i !== s)) return !1;
            }
            return !0;
          })(r._results, s, n)) &&
            ((r._results = s),
            (r.length = s.length),
            (r.last = s[this.length - 1]),
            (r.first = s[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      Symbol;
      class Zd {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Zd(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Jd {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              s = [];
            for (let i = 0; i < r; i++) {
              const a = n.getByIndex(i);
              s.push(this.queries[a.indexInDeclarationView].clone());
            }
            return new Jd(s);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== $y(t, n).matches && this.queries[n].setDirty();
        }
      }
      class Fy {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class Xd {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const s = null !== n ? n.length : 0,
              i = this.getByIndex(r).embeddedTView(t, s);
            i &&
              ((i.indexInDeclarationView = r),
              null !== n ? n.push(i) : (n = [i]));
          }
          return null !== n ? new Xd(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class ef {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new ef(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let s = 0; s < r.length; s++) {
              const i = r[s];
              this.matchTNodeWithReadOption(t, n, K0(n, i)),
                this.matchTNodeWithReadOption(t, n, Gs(n, t, i, !1, !1));
            }
          else
            r === jl
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, Gs(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const s = this.metadata.read;
            if (null !== s)
              if (s === Oi || s === Bu || (s === jl && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const i = Gs(n, t, s, !1, !1);
                null !== i && this.addMatch(n.index, i);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function K0(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function Z0(e, t, n, r) {
        return -1 === n
          ? (function (e, t) {
              return 11 & e.type ? Qa(e, t) : 4 & e.type ? Lu(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function (e, t, n) {
              return n === Oi
                ? Qa(t, e)
                : n === jl
                ? Lu(t, e)
                : n === Bu
                ? Qm(t, e)
                : void 0;
            })(e, t, r)
          : Di(e, e[1], n, t);
      }
      function xy(e, t, n, r) {
        const s = t[19].queries[r];
        if (null === s.matches) {
          const i = e.data,
            a = n.matches,
            u = [];
          for (let h = 0; h < a.length; h += 2) {
            const y = a[h];
            u.push(y < 0 ? null : Z0(t, i[y], a[h + 1], n.metadata.read));
          }
          s.matches = u;
        }
        return s.matches;
      }
      function tf(e, t, n, r) {
        const s = e.queries.getByIndex(n),
          i = s.matches;
        if (null !== i) {
          const a = xy(e, t, s, n);
          for (let u = 0; u < i.length; u += 2) {
            const h = i[u];
            if (h > 0) r.push(a[u / 2]);
            else {
              const y = i[u + 1],
                A = t[-h];
              for (let P = 10; P < A.length; P++) {
                const F = A[P];
                F[17] === F[3] && tf(F[1], F, y, r);
              }
              if (null !== A[9]) {
                const P = A[9];
                for (let F = 0; F < P.length; F++) {
                  const L = P[F];
                  tf(L[1], L, y, r);
                }
              }
            }
          }
        }
        return r;
      }
      function Vy(e) {
        const t = se(),
          n = st(),
          r = la();
        Fo(r + 1);
        const s = $y(n, r);
        if (e.dirty && bn(t) === (2 == (2 & s.metadata.flags))) {
          if (null === s.matches) e.reset([]);
          else {
            const i = s.crossesNgTemplate ? tf(n, t, r, []) : xy(n, t, s, r);
            e.reset(i, Lm), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function ky(e, t, n) {
        const r = st();
        r.firstCreatePass &&
          (Uy(r, new Fy(e, t, n), -1),
          2 == (2 & t) && (r.staticViewQueries = !0)),
          jy(r, se(), t);
      }
      function Ly(e, t, n, r) {
        const s = st();
        if (s.firstCreatePass) {
          const i = Wt();
          Uy(s, new Fy(t, n, r), i.index),
            (function (e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(s, e),
            2 == (2 & n) && (s.staticContentQueries = !0);
        }
        jy(s, se(), n);
      }
      function By() {
        return (e = se()), (t = la()), e[19].queries[t].queryList;
        var e, t;
      }
      function jy(e, t, n) {
        const r = new Gu(4 == (4 & n));
        tp(e, t, r, r.destroy),
          null === t[19] && (t[19] = new Jd()),
          t[19].queries.push(new Zd(r));
      }
      function Uy(e, t, n) {
        null === e.queries && (e.queries = new Xd()),
          e.queries.track(new ef(t, n));
      }
      function $y(e, t) {
        return e.queries.getByIndex(t);
      }
      const lf = new Ct("Application Initializer");
      let rl = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = Pu),
              (this.reject = Pu),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, s) => {
                (this.resolve = r), (this.reject = s);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let s = 0; s < this.appInits.length; s++) {
                const i = this.appInits[s]();
                if (md(i)) n.push(i);
                else if (yd(i)) {
                  const a = new Promise((u, h) => {
                    i.subscribe({ complete: u, error: h });
                  });
                  n.push(a);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((s) => {
                this.reject(s);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(ye(lf, 8));
          }),
          (e.ɵprov = wt({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const o_ = new Ct("AppId"),
        MS = {
          provide: o_,
          useFactory: function () {
            return `${uf()}${uf()}${uf()}`;
          },
          deps: [],
        };
      function uf() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const a_ = new Ct("Platform Initializer"),
        l_ = new Ct("Platform ID"),
        u_ = new Ct("appBootstrapListener");
      let c_ = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = wt({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const qu = new Ct("LocaleId"),
        d_ = new Ct("DefaultCurrencyCode");
      class RS {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      const cf = function (e) {
          return new Kd(e);
        },
        NS = cf,
        OS = function (e) {
          return Promise.resolve(cf(e));
        },
        f_ = function (e) {
          const t = cf(e),
            r = Ai(Gt(e).declarations).reduce((s, i) => {
              const a = St(i);
              return a && s.push(new _y(a)), s;
            }, []);
          return new RS(t, r);
        },
        PS = f_,
        FS = function (e) {
          return Promise.resolve(f_(e));
        };
      let Jl = (() => {
        class e {
          constructor() {
            (this.compileModuleSync = NS),
              (this.compileModuleAsync = OS),
              (this.compileModuleAndAllComponentsSync = PS),
              (this.compileModuleAndAllComponentsAsync = FS);
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = wt({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const kS = (() => Promise.resolve(0))();
      function df(e) {
        "undefined" == typeof Zone
          ? kS.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class Xr {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Pi(!1)),
            (this.onMicrotaskEmpty = new Pi(!1)),
            (this.onStable = new Pi(!1)),
            (this.onError = new Pi(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched();
          const s = this;
          (s._nesting = 0),
            (s._outer = s._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
            (s.shouldCoalesceEventChangeDetection = !r && n),
            (s.shouldCoalesceRunChangeDetection = r),
            (s.lastRequestAnimationFrameId = -1),
            (s.nativeRequestAnimationFrame = (function () {
              let e = Re.requestAnimationFrame,
                t = Re.cancelAnimationFrame;
              if ("undefined" != typeof Zone && e && t) {
                const n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                const r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function (e) {
              const t = () => {
                !(function (e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(Re, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                hf(e),
                                (e.isCheckStableRunning = !0),
                                ff(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    hf(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, s, i, a, u) => {
                  try {
                    return h_(e), n.invokeTask(s, i, a, u);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      p_(e);
                  }
                },
                onInvoke: (n, r, s, i, a, u, h) => {
                  try {
                    return h_(e), n.invoke(s, i, a, u, h);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), p_(e);
                  }
                },
                onHasTask: (n, r, s, i) => {
                  n.hasTask(s, i),
                    r === s &&
                      ("microTask" == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          hf(e),
                          ff(e))
                        : "macroTask" == i.change &&
                          (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (n, r, s, i) => (
                  n.handleError(s, i),
                  e.runOutsideAngular(() => e.onError.emit(i)),
                  !1
                ),
              });
            })(s);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!Xr.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (Xr.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, s) {
          const i = this._inner,
            a = i.scheduleEventTask("NgZoneEvent: " + s, t, BS, Pu, Pu);
          try {
            return i.runTask(a, n, r);
          } finally {
            i.cancelTask(a);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const BS = {};
      function ff(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function hf(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function h_(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function p_(e) {
        e._nesting--, ff(e);
      }
      class $S {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Pi()),
            (this.onMicrotaskEmpty = new Pi()),
            (this.onStable = new Pi()),
            (this.onError = new Pi());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, s) {
          return t.apply(n, r);
        }
      }
      let g_ = (() => {
          class e {
            constructor(n) {
              (this._ngZone = n),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Xr.assertNotInAngularZone(),
                        df(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                df(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, s) {
              let i = -1;
              r &&
                r > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (a) => a.timeoutId !== i
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: s });
            }
            whenStable(n, r, s) {
              if (s && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, s), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(n, r, s) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(ye(Xr));
            }),
            (e.ɵprov = wt({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        m_ = (() => {
          class e {
            constructor() {
              (this._applications = new Map()), pf.addToWindow(this);
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return pf.findTestabilityInTree(this, n, r);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = wt({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      class HS {
        addToWindow(t) {}
        findTestabilityInTree(t, n, r) {
          return null;
        }
      }
      function GS(e) {
        pf = e;
      }
      let pf = new HS(),
        y_ = !0,
        __ = !1;
      function WS() {
        if (__)
          throw new Error("Cannot enable prod mode after platform setup.");
        y_ = !1;
      }
      let ni;
      const v_ = new Ct("AllowMultipleToken");
      class JS {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function E_(e, t, n = []) {
        const r = `Platform: ${t}`,
          s = new Ct(r);
        return (i = []) => {
          let a = D_();
          if (!a || a.injector.get(v_, !1))
            if (e) e(n.concat(i).concat({ provide: s, useValue: !0 }));
            else {
              const u = n
                .concat(i)
                .concat(
                  { provide: s, useValue: !0 },
                  { provide: Ml, useValue: "platform" }
                );
              !(function (e) {
                if (ni && !ni.destroyed && !ni.injector.get(v_, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                ni = e.get(b_);
                const t = e.get(a_, null);
                t && t.forEach((n) => n());
              })(Ut.create({ providers: u, name: r }));
            }
          return (function (e) {
            const t = D_();
            if (!t) throw new Error("No platform exists!");
            if (!t.injector.get(e, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return t;
          })(s);
        };
      }
      function D_() {
        return ni && !ni.destroyed ? ni : null;
      }
      let b_ = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const u = (function (e, t) {
                let n;
                return (
                  (n =
                    "noop" === e
                      ? new $S()
                      : ("zone.js" === e ? void 0 : e) ||
                        new Xr({
                          enableLongStackTrace: ((__ = !0), y_),
                          shouldCoalesceEventChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneEventCoalescing),
                          shouldCoalesceRunChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneRunCoalescing),
                        })),
                  n
                );
              })(r ? r.ngZone : void 0, {
                ngZoneEventCoalescing: (r && r.ngZoneEventCoalescing) || !1,
                ngZoneRunCoalescing: (r && r.ngZoneRunCoalescing) || !1,
              }),
              h = [{ provide: Xr, useValue: u }];
            return u.run(() => {
              const y = Ut.create({
                  providers: h,
                  parent: this.injector,
                  name: n.moduleType.name,
                }),
                A = n.create(y),
                P = A.injector.get(Aa, null);
              if (!P)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?"
                );
              return (
                u.runOutsideAngular(() => {
                  const F = u.onError.subscribe({
                    next: (L) => {
                      P.handleError(L);
                    },
                  });
                  A.onDestroy(() => {
                    gf(this._modules, A), F.unsubscribe();
                  });
                }),
                (function (e, t, n) {
                  try {
                    const r = n();
                    return md(r)
                      ? r.catch((s) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(s)), s)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(P, u, () => {
                  const F = A.injector.get(rl);
                  return (
                    F.runInitializers(),
                    F.donePromise.then(
                      () => (
                        Td(A.injector.get(qu, Mu) || Mu),
                        this._moduleDoBootstrap(A),
                        A
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const s = w_({}, r);
            return (function (e, t, n) {
              const r = new Kd(n);
              return Promise.resolve(r);
            })(0, 0, n).then((i) => this.bootstrapModuleFactory(i, s));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(Xl);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach((s) => r.bootstrap(s));
            else {
              if (!n.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${Z(
                    n.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach((n) => n.destroy()),
              this._destroyListeners.forEach((n) => n()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(ye(Ut));
          }),
          (e.ɵprov = wt({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function w_(e, t) {
        return Array.isArray(t)
          ? t.reduce(w_, e)
          : Object.assign(Object.assign({}, e), t);
      }
      let Xl = (() => {
        class e {
          constructor(n, r, s, i, a) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = s),
              (this._componentFactoryResolver = i),
              (this._initStatus = a),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const u = new fe.y((y) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    y.next(this._stable), y.complete();
                  });
              }),
              h = new fe.y((y) => {
                let A;
                this._zone.runOutsideAngular(() => {
                  A = this._zone.onStable.subscribe(() => {
                    Xr.assertNotInAngularZone(),
                      df(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), y.next(!0));
                      });
                  });
                });
                const P = this._zone.onUnstable.subscribe(() => {
                  Xr.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        y.next(!1);
                      }));
                });
                return () => {
                  A.unsubscribe(), P.unsubscribe();
                };
              });
            this.isStable = (0, he.T)(
              u,
              h.pipe((e) =>
                (0, re.x)()(
                  (function (e, t) {
                    return function (r) {
                      let s;
                      s =
                        "function" == typeof e
                          ? e
                          : function () {
                              return e;
                            };
                      const i = Object.create(r, ie.N);
                      return (i.source = r), (i.subjectFactory = s), i;
                    };
                  })(Q)(e)
                )
              )
            );
          }
          bootstrap(n, r) {
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            let s;
            (s =
              n instanceof xm
                ? n
                : this._componentFactoryResolver.resolveComponentFactory(n)),
              this.componentTypes.push(s.componentType);
            const i = (function (e) {
                return e.isBoundToModule;
              })(s)
                ? void 0
                : this._injector.get(ea),
              u = s.create(Ut.NULL, [], r || s.selector, i),
              h = u.location.nativeElement,
              y = u.injector.get(g_, null),
              A = y && u.injector.get(m_);
            return (
              y && A && A.registerApplication(h, y),
              u.onDestroy(() => {
                this.detachView(u.hostView),
                  gf(this.components, u),
                  A && A.unregisterApplication(h);
              }),
              this._loadComponent(u),
              u
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            gf(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(u_, [])
                .concat(this._bootstrapListeners)
                .forEach((s) => s(n));
          }
          ngOnDestroy() {
            this._views.slice().forEach((n) => n.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(ye(Xr), ye(Ut), ye(Aa), ye(Ka), ye(rl));
          }),
          (e.ɵprov = wt({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function gf(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      class sA {}
      class oA {}
      const aA = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" };
      let lA = (() => {
        class e {
          constructor(n, r) {
            (this._compiler = n), (this._config = r || aA);
          }
          load(n) {
            return this.loadAndCompile(n);
          }
          loadAndCompile(n) {
            let [r, s] = n.split("#");
            return (
              void 0 === s && (s = "default"),
              j(8255)(r)
                .then((i) => i[s])
                .then((i) => M_(i, r, s))
                .then((i) => this._compiler.compileModuleAsync(i))
            );
          }
          loadFactory(n) {
            let [r, s] = n.split("#"),
              i = "NgFactory";
            return (
              void 0 === s && ((s = "default"), (i = "")),
              j(8255)(
                this._config.factoryPathPrefix +
                  r +
                  this._config.factoryPathSuffix
              )
                .then((a) => a[s + i])
                .then((a) => M_(a, r, s))
            );
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(ye(Jl), ye(oA, 8));
          }),
          (e.ɵprov = wt({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function M_(e, t, n) {
        if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
        return e;
      }
      const mA = function (e) {
          return null;
        },
        _A = E_(null, "core", [
          { provide: l_, useValue: "unknown" },
          { provide: b_, deps: [Ut] },
          { provide: m_, deps: [] },
          { provide: c_, deps: [] },
        ]),
        bA = [
          { provide: Xl, useClass: Xl, deps: [Xr, Ut, Aa, Ka, rl] },
          {
            provide: I0,
            deps: [Xr],
            useFactory: function (e) {
              let t = [];
              return (
                e.onStable.subscribe(() => {
                  for (; t.length; ) t.pop()();
                }),
                function (n) {
                  t.push(n);
                }
              );
            },
          },
          { provide: rl, useClass: rl, deps: [[new yn(), lf]] },
          { provide: Jl, useClass: Jl, deps: [] },
          MS,
          {
            provide: xu,
            useFactory: function () {
              return bw;
            },
            deps: [],
          },
          {
            provide: Vu,
            useFactory: function () {
              return ww;
            },
            deps: [],
          },
          {
            provide: qu,
            useFactory: function (e) {
              return (
                Td(
                  (e =
                    e ||
                    ("undefined" != typeof $localize && $localize.locale) ||
                    Mu)
                ),
                e
              );
            },
            deps: [[new wo(qu), new yn(), new Zr()]],
          },
          { provide: d_, useValue: "USD" },
        ];
      let SA = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(ye(Xl));
          }),
          (e.ɵmod = Ot({ type: e })),
          (e.ɵinj = Un({ providers: bA })),
          e
        );
      })();
    },
    665: (Ue, le, j) => {
      "use strict";
      j.d(le, {
        Wl: () => be,
        Fj: () => $e,
        u5: () => D,
        qQ: () => Ar,
        JU: () => J,
        JJ: () => Rs,
        On: () => En,
        wV: () => as,
      });
      var b = j(3018),
        N = j(8583),
        fe = j(7574),
        he = j(9796),
        ie = j(8002),
        ne = j(1555),
        de = j(4402);
      function Q(v, _) {
        return new fe.y((g) => {
          const I = v.length;
          if (0 === I) return void g.complete();
          const z = new Array(I);
          let ge = 0,
            we = 0;
          for (let it = 0; it < I; it++) {
            const vt = (0, de.D)(v[it]);
            let Ft = !1;
            g.add(
              vt.subscribe({
                next: (Et) => {
                  Ft || ((Ft = !0), we++), (z[it] = Et);
                },
                error: (Et) => g.error(Et),
                complete: () => {
                  ge++,
                    (ge === I || !Ft) &&
                      (we === I &&
                        g.next(
                          _
                            ? _.reduce(
                                (Et, bn, Yn) => ((Et[bn] = z[Yn]), Et),
                                {}
                              )
                            : z
                        ),
                      g.complete());
                },
              })
            );
          }
        });
      }
      let W = (() => {
          class v {
            constructor(g, I) {
              (this._renderer = g),
                (this._elementRef = I),
                (this.onChange = (z) => {}),
                (this.onTouched = () => {});
            }
            setProperty(g, I) {
              this._renderer.setProperty(this._elementRef.nativeElement, g, I);
            }
            registerOnTouched(g) {
              this.onTouched = g;
            }
            registerOnChange(g) {
              this.onChange = g;
            }
            setDisabledState(g) {
              this.setProperty("disabled", g);
            }
          }
          return (
            (v.ɵfac = function (g) {
              return new (g || v)(b.Y36(b.Qsj), b.Y36(b.SBq));
            }),
            (v.ɵdir = b.lG2({ type: v })),
            v
          );
        })(),
        G = (() => {
          class v extends W {}
          return (
            (v.ɵfac = (function () {
              let _;
              return function (I) {
                return (_ || (_ = b.n5z(v)))(I || v);
              };
            })()),
            (v.ɵdir = b.lG2({ type: v, features: [b.qOj] })),
            v
          );
        })();
      const J = new b.OlP("NgValueAccessor"),
        Z = { provide: J, useExisting: (0, b.Gpc)(() => be), multi: !0 };
      let be = (() => {
        class v extends G {
          writeValue(g) {
            this.setProperty("checked", g);
          }
        }
        return (
          (v.ɵfac = (function () {
            let _;
            return function (I) {
              return (_ || (_ = b.n5z(v)))(I || v);
            };
          })()),
          (v.ɵdir = b.lG2({
            type: v,
            selectors: [
              ["input", "type", "checkbox", "formControlName", ""],
              ["input", "type", "checkbox", "formControl", ""],
              ["input", "type", "checkbox", "ngModel", ""],
            ],
            hostBindings: function (g, I) {
              1 & g &&
                b.NdJ("change", function (ge) {
                  return I.onChange(ge.target.checked);
                })("blur", function () {
                  return I.onTouched();
                });
            },
            features: [b._Bn([Z]), b.qOj],
          })),
          v
        );
      })();
      const De = { provide: J, useExisting: (0, b.Gpc)(() => $e), multi: !0 },
        ae = new b.OlP("CompositionEventMode");
      let $e = (() => {
        class v extends W {
          constructor(g, I, z) {
            super(g, I),
              (this._compositionMode = z),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function () {
                  const v = (0, N.q)() ? (0, N.q)().getUserAgent() : "";
                  return /android (\d+)/.test(v.toLowerCase());
                })());
          }
          writeValue(g) {
            this.setProperty("value", null == g ? "" : g);
          }
          _handleInput(g) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(g);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(g) {
            (this._composing = !1), this._compositionMode && this.onChange(g);
          }
        }
        return (
          (v.ɵfac = function (g) {
            return new (g || v)(b.Y36(b.Qsj), b.Y36(b.SBq), b.Y36(ae, 8));
          }),
          (v.ɵdir = b.lG2({
            type: v,
            selectors: [
              ["input", "formControlName", "", 3, "type", "checkbox"],
              ["textarea", "formControlName", ""],
              ["input", "formControl", "", 3, "type", "checkbox"],
              ["textarea", "formControl", ""],
              ["input", "ngModel", "", 3, "type", "checkbox"],
              ["textarea", "ngModel", ""],
              ["", "ngDefaultControl", ""],
            ],
            hostBindings: function (g, I) {
              1 & g &&
                b.NdJ("input", function (ge) {
                  return I._handleInput(ge.target.value);
                })("blur", function () {
                  return I.onTouched();
                })("compositionstart", function () {
                  return I._compositionStart();
                })("compositionend", function (ge) {
                  return I._compositionEnd(ge.target.value);
                });
            },
            features: [b._Bn([De]), b.qOj],
          })),
          v
        );
      })();
      function Me(v) {
        return null == v || 0 === v.length;
      }
      const Ee = new b.OlP("NgValidators"),
        mt = new b.OlP("NgAsyncValidators");
      function Je(v) {
        return null;
      }
      function yr(v) {
        return null != v;
      }
      function jn(v) {
        const _ = (0, b.QGY)(v) ? (0, de.D)(v) : v;
        return (0, b.CqO)(_), _;
      }
      function Ms(v) {
        let _ = {};
        return (
          v.forEach((g) => {
            _ = null != g ? Object.assign(Object.assign({}, _), g) : _;
          }),
          0 === Object.keys(_).length ? null : _
        );
      }
      function es(v, _) {
        return _.map((g) => g(v));
      }
      function fo(v) {
        return v.map((_) =>
          (function (v) {
            return !v.validate;
          })(_)
            ? _
            : (g) => _.validate(g)
        );
      }
      function Or(v) {
        return null != v
          ? (function (v) {
              if (!v) return null;
              const _ = v.filter(yr);
              return 0 == _.length
                ? null
                : function (g) {
                    return Ms(es(g, _));
                  };
            })(fo(v))
          : null;
      }
      function Xe(v) {
        return null != v
          ? (function (v) {
              if (!v) return null;
              const _ = v.filter(yr);
              return 0 == _.length
                ? null
                : function (g) {
                    return (function (...v) {
                      if (1 === v.length) {
                        const _ = v[0];
                        if ((0, he.k)(_)) return Q(_, null);
                        if (
                          (0, ne.K)(_) &&
                          Object.getPrototypeOf(_) === Object.prototype
                        ) {
                          const g = Object.keys(_);
                          return Q(
                            g.map((I) => _[I]),
                            g
                          );
                        }
                      }
                      if ("function" == typeof v[v.length - 1]) {
                        const _ = v.pop();
                        return Q(
                          (v = 1 === v.length && (0, he.k)(v[0]) ? v[0] : v),
                          null
                        ).pipe((0, ie.U)((g) => _(...g)));
                      }
                      return Q(v, null);
                    })(es(g, _).map(jn)).pipe((0, ie.U)(Ms));
                  };
            })(fo(v))
          : null;
      }
      function Qt(v, _) {
        return null === v ? [_] : Array.isArray(v) ? [...v, _] : [v, _];
      }
      function wt(v) {
        return v ? (Array.isArray(v) ? v : [v]) : [];
      }
      function Fi(v, _) {
        return Array.isArray(v) ? v.includes(_) : v === _;
      }
      function Un(v, _) {
        const g = wt(_);
        return (
          wt(v).forEach((z) => {
            Fi(g, z) || g.push(z);
          }),
          g
        );
      }
      function xt(v, _) {
        return wt(_).filter((g) => !Fi(v, g));
      }
      let ts = (() => {
          class v {
            constructor() {
              (this._rawValidators = []),
                (this._rawAsyncValidators = []),
                (this._onDestroyCallbacks = []);
            }
            get value() {
              return this.control ? this.control.value : null;
            }
            get valid() {
              return this.control ? this.control.valid : null;
            }
            get invalid() {
              return this.control ? this.control.invalid : null;
            }
            get pending() {
              return this.control ? this.control.pending : null;
            }
            get disabled() {
              return this.control ? this.control.disabled : null;
            }
            get enabled() {
              return this.control ? this.control.enabled : null;
            }
            get errors() {
              return this.control ? this.control.errors : null;
            }
            get pristine() {
              return this.control ? this.control.pristine : null;
            }
            get dirty() {
              return this.control ? this.control.dirty : null;
            }
            get touched() {
              return this.control ? this.control.touched : null;
            }
            get status() {
              return this.control ? this.control.status : null;
            }
            get untouched() {
              return this.control ? this.control.untouched : null;
            }
            get statusChanges() {
              return this.control ? this.control.statusChanges : null;
            }
            get valueChanges() {
              return this.control ? this.control.valueChanges : null;
            }
            get path() {
              return null;
            }
            _setValidators(g) {
              (this._rawValidators = g || []),
                (this._composedValidatorFn = Or(this._rawValidators));
            }
            _setAsyncValidators(g) {
              (this._rawAsyncValidators = g || []),
                (this._composedAsyncValidatorFn = Xe(this._rawAsyncValidators));
            }
            get validator() {
              return this._composedValidatorFn || null;
            }
            get asyncValidator() {
              return this._composedAsyncValidatorFn || null;
            }
            _registerOnDestroy(g) {
              this._onDestroyCallbacks.push(g);
            }
            _invokeOnDestroyCallbacks() {
              this._onDestroyCallbacks.forEach((g) => g()),
                (this._onDestroyCallbacks = []);
            }
            reset(g) {
              this.control && this.control.reset(g);
            }
            hasError(g, I) {
              return !!this.control && this.control.hasError(g, I);
            }
            getError(g, I) {
              return this.control ? this.control.getError(g, I) : null;
            }
          }
          return (
            (v.ɵfac = function (g) {
              return new (g || v)();
            }),
            (v.ɵdir = b.lG2({ type: v })),
            v
          );
        })(),
        $t = (() => {
          class v extends ts {
            get formDirective() {
              return null;
            }
            get path() {
              return null;
            }
          }
          return (
            (v.ɵfac = (function () {
              let _;
              return function (I) {
                return (_ || (_ = b.n5z(v)))(I || v);
              };
            })()),
            (v.ɵdir = b.lG2({ type: v, features: [b.qOj] })),
            v
          );
        })();
      class $n extends ts {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      let Rs = (() => {
        class v extends class {
          constructor(_) {
            this._cd = _;
          }
          is(_) {
            var g, I, z;
            return "submitted" === _
              ? !!(null === (g = this._cd) || void 0 === g
                  ? void 0
                  : g.submitted)
              : !!(null ===
                  (z =
                    null === (I = this._cd) || void 0 === I
                      ? void 0
                      : I.control) || void 0 === z
                  ? void 0
                  : z[_]);
          }
        } {
          constructor(g) {
            super(g);
          }
        }
        return (
          (v.ɵfac = function (g) {
            return new (g || v)(b.Y36($n, 2));
          }),
          (v.ɵdir = b.lG2({
            type: v,
            selectors: [
              ["", "formControlName", ""],
              ["", "ngModel", ""],
              ["", "formControl", ""],
            ],
            hostVars: 14,
            hostBindings: function (g, I) {
              2 & g &&
                b.ekj("ng-untouched", I.is("untouched"))(
                  "ng-touched",
                  I.is("touched")
                )("ng-pristine", I.is("pristine"))("ng-dirty", I.is("dirty"))(
                  "ng-valid",
                  I.is("valid")
                )("ng-invalid", I.is("invalid"))("ng-pending", I.is("pending"));
            },
            features: [b.qOj],
          })),
          v
        );
      })();
      function pt(v, _) {
        (function (v, _) {
          const g = (function (v) {
            return v._rawValidators;
          })(v);
          null !== _.validator
            ? v.setValidators(Qt(g, _.validator))
            : "function" == typeof g && v.setValidators([g]);
          const I = (function (v) {
            return v._rawAsyncValidators;
          })(v);
          null !== _.asyncValidator
            ? v.setAsyncValidators(Qt(I, _.asyncValidator))
            : "function" == typeof I && v.setAsyncValidators([I]);
          const z = () => v.updateValueAndValidity();
          Re(_._rawValidators, z), Re(_._rawAsyncValidators, z);
        })(v, _),
          _.valueAccessor.writeValue(v.value),
          (function (v, _) {
            _.valueAccessor.registerOnChange((g) => {
              (v._pendingValue = g),
                (v._pendingChange = !0),
                (v._pendingDirty = !0),
                "change" === v.updateOn && In(v, _);
            });
          })(v, _),
          (function (v, _) {
            const g = (I, z) => {
              _.valueAccessor.writeValue(I), z && _.viewToModelUpdate(I);
            };
            v.registerOnChange(g),
              _._registerOnDestroy(() => {
                v._unregisterOnChange(g);
              });
          })(v, _),
          (function (v, _) {
            _.valueAccessor.registerOnTouched(() => {
              (v._pendingTouched = !0),
                "blur" === v.updateOn && v._pendingChange && In(v, _),
                "submit" !== v.updateOn && v.markAsTouched();
            });
          })(v, _),
          (function (v, _) {
            if (_.valueAccessor.setDisabledState) {
              const g = (I) => {
                _.valueAccessor.setDisabledState(I);
              };
              v.registerOnDisabledChange(g),
                _._registerOnDestroy(() => {
                  v._unregisterOnDisabledChange(g);
                });
            }
          })(v, _);
      }
      function Re(v, _) {
        v.forEach((g) => {
          g.registerOnValidatorChange && g.registerOnValidatorChange(_);
        });
      }
      function In(v, _) {
        v._pendingDirty && v.markAsDirty(),
          v.setValue(v._pendingValue, { emitModelToViewChange: !1 }),
          _.viewToModelUpdate(v._pendingValue),
          (v._pendingChange = !1);
      }
      function ss(v, _) {
        const g = v.indexOf(_);
        g > -1 && v.splice(g, 1);
      }
      const Ot = "VALID",
        Ht = "INVALID",
        vn = "PENDING",
        ar = "DISABLED";
      function St(v) {
        return (is(v) ? v.validators : v) || null;
      }
      function Rn(v) {
        return Array.isArray(v) ? Or(v) : v || null;
      }
      function Gn(v, _) {
        return (is(_) ? _.asyncValidators : v) || null;
      }
      function Gt(v) {
        return Array.isArray(v) ? Xe(v) : v || null;
      }
      function is(v) {
        return null != v && !Array.isArray(v) && "object" == typeof v;
      }
      class kt {
        constructor(_, g) {
          (this._hasOwnPendingAsyncValidator = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = _),
            (this._rawAsyncValidators = g),
            (this._composedValidatorFn = Rn(this._rawValidators)),
            (this._composedAsyncValidatorFn = Gt(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(_) {
          this._rawValidators = this._composedValidatorFn = _;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(_) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = _;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === Ot;
        }
        get invalid() {
          return this.status === Ht;
        }
        get pending() {
          return this.status == vn;
        }
        get disabled() {
          return this.status === ar;
        }
        get enabled() {
          return this.status !== ar;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(_) {
          (this._rawValidators = _), (this._composedValidatorFn = Rn(_));
        }
        setAsyncValidators(_) {
          (this._rawAsyncValidators = _),
            (this._composedAsyncValidatorFn = Gt(_));
        }
        addValidators(_) {
          this.setValidators(Un(_, this._rawValidators));
        }
        addAsyncValidators(_) {
          this.setAsyncValidators(Un(_, this._rawAsyncValidators));
        }
        removeValidators(_) {
          this.setValidators(xt(_, this._rawValidators));
        }
        removeAsyncValidators(_) {
          this.setAsyncValidators(xt(_, this._rawAsyncValidators));
        }
        hasValidator(_) {
          return Fi(this._rawValidators, _);
        }
        hasAsyncValidator(_) {
          return Fi(this._rawAsyncValidators, _);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(_ = {}) {
          (this.touched = !0),
            this._parent && !_.onlySelf && this._parent.markAsTouched(_);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((_) => _.markAllAsTouched());
        }
        markAsUntouched(_ = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((g) => {
              g.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !_.onlySelf && this._parent._updateTouched(_);
        }
        markAsDirty(_ = {}) {
          (this.pristine = !1),
            this._parent && !_.onlySelf && this._parent.markAsDirty(_);
        }
        markAsPristine(_ = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((g) => {
              g.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !_.onlySelf && this._parent._updatePristine(_);
        }
        markAsPending(_ = {}) {
          (this.status = vn),
            !1 !== _.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !_.onlySelf && this._parent.markAsPending(_);
        }
        disable(_ = {}) {
          const g = this._parentMarkedDirty(_.onlySelf);
          (this.status = ar),
            (this.errors = null),
            this._forEachChild((I) => {
              I.disable(Object.assign(Object.assign({}, _), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== _.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors(
              Object.assign(Object.assign({}, _), { skipPristineCheck: g })
            ),
            this._onDisabledChange.forEach((I) => I(!0));
        }
        enable(_ = {}) {
          const g = this._parentMarkedDirty(_.onlySelf);
          (this.status = Ot),
            this._forEachChild((I) => {
              I.enable(Object.assign(Object.assign({}, _), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: _.emitEvent,
            }),
            this._updateAncestors(
              Object.assign(Object.assign({}, _), { skipPristineCheck: g })
            ),
            this._onDisabledChange.forEach((I) => I(!1));
        }
        _updateAncestors(_) {
          this._parent &&
            !_.onlySelf &&
            (this._parent.updateValueAndValidity(_),
            _.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(_) {
          this._parent = _;
        }
        updateValueAndValidity(_ = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === Ot || this.status === vn) &&
                this._runAsyncValidator(_.emitEvent)),
            !1 !== _.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !_.onlySelf &&
              this._parent.updateValueAndValidity(_);
        }
        _updateTreeValidity(_ = { emitEvent: !0 }) {
          this._forEachChild((g) => g._updateTreeValidity(_)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: _.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? ar : Ot;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(_) {
          if (this.asyncValidator) {
            (this.status = vn), (this._hasOwnPendingAsyncValidator = !0);
            const g = jn(this.asyncValidator(this));
            this._asyncValidationSubscription = g.subscribe((I) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(I, { emitEvent: _ });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(_, g = {}) {
          (this.errors = _), this._updateControlsErrors(!1 !== g.emitEvent);
        }
        get(_) {
          return (function (v, _, g) {
            if (
              null == _ ||
              (Array.isArray(_) || (_ = _.split(".")),
              Array.isArray(_) && 0 === _.length)
            )
              return null;
            let I = v;
            return (
              _.forEach((z) => {
                I =
                  I instanceof _e
                    ? I.controls.hasOwnProperty(z)
                      ? I.controls[z]
                      : null
                    : (I instanceof ut && I.at(z)) || null;
              }),
              I
            );
          })(this, _);
        }
        getError(_, g) {
          const I = g ? this.get(g) : this;
          return I && I.errors ? I.errors[_] : null;
        }
        hasError(_, g) {
          return !!this.getError(_, g);
        }
        get root() {
          let _ = this;
          for (; _._parent; ) _ = _._parent;
          return _;
        }
        _updateControlsErrors(_) {
          (this.status = this._calculateStatus()),
            _ && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(_);
        }
        _initObservables() {
          (this.valueChanges = new b.vpe()), (this.statusChanges = new b.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? ar
            : this.errors
            ? Ht
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(vn)
            ? vn
            : this._anyControlsHaveStatus(Ht)
            ? Ht
            : Ot;
        }
        _anyControlsHaveStatus(_) {
          return this._anyControls((g) => g.status === _);
        }
        _anyControlsDirty() {
          return this._anyControls((_) => _.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((_) => _.touched);
        }
        _updatePristine(_ = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !_.onlySelf && this._parent._updatePristine(_);
        }
        _updateTouched(_ = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !_.onlySelf && this._parent._updateTouched(_);
        }
        _isBoxedValue(_) {
          return (
            "object" == typeof _ &&
            null !== _ &&
            2 === Object.keys(_).length &&
            "value" in _ &&
            "disabled" in _
          );
        }
        _registerOnCollectionChange(_) {
          this._onCollectionChange = _;
        }
        _setUpdateStrategy(_) {
          is(_) && null != _.updateOn && (this._updateOn = _.updateOn);
        }
        _parentMarkedDirty(_) {
          return (
            !_ &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
      }
      class ce extends kt {
        constructor(_ = null, g, I) {
          super(St(g), Gn(I, g)),
            (this._onChange = []),
            this._applyFormState(_),
            this._setUpdateStrategy(g),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        setValue(_, g = {}) {
          (this.value = this._pendingValue = _),
            this._onChange.length &&
              !1 !== g.emitModelToViewChange &&
              this._onChange.forEach((I) =>
                I(this.value, !1 !== g.emitViewToModelChange)
              ),
            this.updateValueAndValidity(g);
        }
        patchValue(_, g = {}) {
          this.setValue(_, g);
        }
        reset(_ = null, g = {}) {
          this._applyFormState(_),
            this.markAsPristine(g),
            this.markAsUntouched(g),
            this.setValue(this.value, g),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(_) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(_) {
          this._onChange.push(_);
        }
        _unregisterOnChange(_) {
          ss(this._onChange, _);
        }
        registerOnDisabledChange(_) {
          this._onDisabledChange.push(_);
        }
        _unregisterOnDisabledChange(_) {
          ss(this._onDisabledChange, _);
        }
        _forEachChild(_) {}
        _syncPendingControls() {
          return !(
            "submit" !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(_) {
          this._isBoxedValue(_)
            ? ((this.value = this._pendingValue = _.value),
              _.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = _);
        }
      }
      class _e extends kt {
        constructor(_, g, I) {
          super(St(g), Gn(I, g)),
            (this.controls = _),
            this._initObservables(),
            this._setUpdateStrategy(g),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(_, g) {
          return this.controls[_]
            ? this.controls[_]
            : ((this.controls[_] = g),
              g.setParent(this),
              g._registerOnCollectionChange(this._onCollectionChange),
              g);
        }
        addControl(_, g, I = {}) {
          this.registerControl(_, g),
            this.updateValueAndValidity({ emitEvent: I.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(_, g = {}) {
          this.controls[_] &&
            this.controls[_]._registerOnCollectionChange(() => {}),
            delete this.controls[_],
            this.updateValueAndValidity({ emitEvent: g.emitEvent }),
            this._onCollectionChange();
        }
        setControl(_, g, I = {}) {
          this.controls[_] &&
            this.controls[_]._registerOnCollectionChange(() => {}),
            delete this.controls[_],
            g && this.registerControl(_, g),
            this.updateValueAndValidity({ emitEvent: I.emitEvent }),
            this._onCollectionChange();
        }
        contains(_) {
          return this.controls.hasOwnProperty(_) && this.controls[_].enabled;
        }
        setValue(_, g = {}) {
          this._checkAllValuesPresent(_),
            Object.keys(_).forEach((I) => {
              this._throwIfControlMissing(I),
                this.controls[I].setValue(_[I], {
                  onlySelf: !0,
                  emitEvent: g.emitEvent,
                });
            }),
            this.updateValueAndValidity(g);
        }
        patchValue(_, g = {}) {
          null != _ &&
            (Object.keys(_).forEach((I) => {
              this.controls[I] &&
                this.controls[I].patchValue(_[I], {
                  onlySelf: !0,
                  emitEvent: g.emitEvent,
                });
            }),
            this.updateValueAndValidity(g));
        }
        reset(_ = {}, g = {}) {
          this._forEachChild((I, z) => {
            I.reset(_[z], { onlySelf: !0, emitEvent: g.emitEvent });
          }),
            this._updatePristine(g),
            this._updateTouched(g),
            this.updateValueAndValidity(g);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (_, g, I) => (
              (_[I] = g instanceof ce ? g.value : g.getRawValue()), _
            )
          );
        }
        _syncPendingControls() {
          let _ = this._reduceChildren(
            !1,
            (g, I) => !!I._syncPendingControls() || g
          );
          return _ && this.updateValueAndValidity({ onlySelf: !0 }), _;
        }
        _throwIfControlMissing(_) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[_])
            throw new Error(`Cannot find form control with name: ${_}.`);
        }
        _forEachChild(_) {
          Object.keys(this.controls).forEach((g) => {
            const I = this.controls[g];
            I && _(I, g);
          });
        }
        _setUpControls() {
          this._forEachChild((_) => {
            _.setParent(this),
              _._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(_) {
          for (const g of Object.keys(this.controls)) {
            const I = this.controls[g];
            if (this.contains(g) && _(I)) return !0;
          }
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (_, g, I) => ((g.enabled || this.disabled) && (_[I] = g.value), _)
          );
        }
        _reduceChildren(_, g) {
          let I = _;
          return (
            this._forEachChild((z, ge) => {
              I = g(I, z, ge);
            }),
            I
          );
        }
        _allControlsDisabled() {
          for (const _ of Object.keys(this.controls))
            if (this.controls[_].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(_) {
          this._forEachChild((g, I) => {
            if (void 0 === _[I])
              throw new Error(
                `Must supply a value for form control with name: '${I}'.`
              );
          });
        }
      }
      class ut extends kt {
        constructor(_, g, I) {
          super(St(g), Gn(I, g)),
            (this.controls = _),
            this._initObservables(),
            this._setUpdateStrategy(g),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        at(_) {
          return this.controls[_];
        }
        push(_, g = {}) {
          this.controls.push(_),
            this._registerControl(_),
            this.updateValueAndValidity({ emitEvent: g.emitEvent }),
            this._onCollectionChange();
        }
        insert(_, g, I = {}) {
          this.controls.splice(_, 0, g),
            this._registerControl(g),
            this.updateValueAndValidity({ emitEvent: I.emitEvent });
        }
        removeAt(_, g = {}) {
          this.controls[_] &&
            this.controls[_]._registerOnCollectionChange(() => {}),
            this.controls.splice(_, 1),
            this.updateValueAndValidity({ emitEvent: g.emitEvent });
        }
        setControl(_, g, I = {}) {
          this.controls[_] &&
            this.controls[_]._registerOnCollectionChange(() => {}),
            this.controls.splice(_, 1),
            g && (this.controls.splice(_, 0, g), this._registerControl(g)),
            this.updateValueAndValidity({ emitEvent: I.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(_, g = {}) {
          this._checkAllValuesPresent(_),
            _.forEach((I, z) => {
              this._throwIfControlMissing(z),
                this.at(z).setValue(I, {
                  onlySelf: !0,
                  emitEvent: g.emitEvent,
                });
            }),
            this.updateValueAndValidity(g);
        }
        patchValue(_, g = {}) {
          null != _ &&
            (_.forEach((I, z) => {
              this.at(z) &&
                this.at(z).patchValue(I, {
                  onlySelf: !0,
                  emitEvent: g.emitEvent,
                });
            }),
            this.updateValueAndValidity(g));
        }
        reset(_ = [], g = {}) {
          this._forEachChild((I, z) => {
            I.reset(_[z], { onlySelf: !0, emitEvent: g.emitEvent });
          }),
            this._updatePristine(g),
            this._updateTouched(g),
            this.updateValueAndValidity(g);
        }
        getRawValue() {
          return this.controls.map((_) =>
            _ instanceof ce ? _.value : _.getRawValue()
          );
        }
        clear(_ = {}) {
          this.controls.length < 1 ||
            (this._forEachChild((g) => g._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: _.emitEvent }));
        }
        _syncPendingControls() {
          let _ = this.controls.reduce(
            (g, I) => !!I._syncPendingControls() || g,
            !1
          );
          return _ && this.updateValueAndValidity({ onlySelf: !0 }), _;
        }
        _throwIfControlMissing(_) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(_))
            throw new Error(`Cannot find form control at index ${_}`);
        }
        _forEachChild(_) {
          this.controls.forEach((g, I) => {
            _(g, I);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((_) => _.enabled || this.disabled)
            .map((_) => _.value);
        }
        _anyControls(_) {
          return this.controls.some((g) => g.enabled && _(g));
        }
        _setUpControls() {
          this._forEachChild((_) => this._registerControl(_));
        }
        _checkAllValuesPresent(_) {
          this._forEachChild((g, I) => {
            if (void 0 === _[I])
              throw new Error(
                `Must supply a value for form control at index: ${I}.`
              );
          });
        }
        _allControlsDisabled() {
          for (const _ of this.controls) if (_.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(_) {
          _.setParent(this),
            _._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const Wn = { provide: $n, useExisting: (0, b.Gpc)(() => En) },
        br = (() => Promise.resolve(null))();
      let En = (() => {
        class v extends $n {
          constructor(g, I, z, ge) {
            super(),
              (this.control = new ce()),
              (this._registered = !1),
              (this.update = new b.vpe()),
              (this._parent = g),
              this._setValidators(I),
              this._setAsyncValidators(z),
              (this.valueAccessor = (function (v, _) {
                if (!_) return null;
                let g, I, z;
                return (
                  Array.isArray(_),
                  _.forEach((ge) => {
                    ge.constructor === $e
                      ? (g = ge)
                      : (function (v) {
                          return Object.getPrototypeOf(v.constructor) === G;
                        })(ge)
                      ? (I = ge)
                      : (z = ge);
                  }),
                  z || I || g || null
                );
              })(0, ge));
          }
          ngOnChanges(g) {
            this._checkForErrors(),
              this._registered || this._setUpControl(),
              "isDisabled" in g && this._updateDisabled(g),
              (function (v, _) {
                if (!v.hasOwnProperty("model")) return !1;
                const g = v.model;
                return !!g.isFirstChange() || !Object.is(_, g.currentValue);
              })(g, this.viewModel) &&
                (this._updateValue(this.model), (this.viewModel = this.model));
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          get path() {
            return this._parent
              ? (function (v, _) {
                  return [..._.path, v];
                })(this.name, this._parent)
              : [this.name];
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          viewToModelUpdate(g) {
            (this.viewModel = g), this.update.emit(g);
          }
          _setUpControl() {
            this._setUpdateStrategy(),
              this._isStandalone()
                ? this._setUpStandalone()
                : this.formDirective.addControl(this),
              (this._registered = !0);
          }
          _setUpdateStrategy() {
            this.options &&
              null != this.options.updateOn &&
              (this.control._updateOn = this.options.updateOn);
          }
          _isStandalone() {
            return (
              !this._parent || !(!this.options || !this.options.standalone)
            );
          }
          _setUpStandalone() {
            pt(this.control, this),
              this.control.updateValueAndValidity({ emitEvent: !1 });
          }
          _checkForErrors() {
            this._isStandalone() || this._checkParentType(), this._checkName();
          }
          _checkParentType() {}
          _checkName() {
            this.options &&
              this.options.name &&
              (this.name = this.options.name),
              this._isStandalone();
          }
          _updateValue(g) {
            br.then(() => {
              this.control.setValue(g, { emitViewToModelChange: !1 });
            });
          }
          _updateDisabled(g) {
            const I = g.isDisabled.currentValue,
              z = "" === I || (I && "false" !== I);
            br.then(() => {
              z && !this.control.disabled
                ? this.control.disable()
                : !z && this.control.disabled && this.control.enable();
            });
          }
        }
        return (
          (v.ɵfac = function (g) {
            return new (g || v)(
              b.Y36($t, 9),
              b.Y36(Ee, 10),
              b.Y36(mt, 10),
              b.Y36(J, 10)
            );
          }),
          (v.ɵdir = b.lG2({
            type: v,
            selectors: [
              [
                "",
                "ngModel",
                "",
                3,
                "formControlName",
                "",
                3,
                "formControl",
                "",
              ],
            ],
            inputs: {
              name: "name",
              isDisabled: ["disabled", "isDisabled"],
              model: ["ngModel", "model"],
              options: ["ngModelOptions", "options"],
            },
            outputs: { update: "ngModelChange" },
            exportAs: ["ngModel"],
            features: [b._Bn([Wn]), b.qOj, b.TTD],
          })),
          v
        );
      })();
      const ft = { provide: J, useExisting: (0, b.Gpc)(() => as), multi: !0 };
      let as = (() => {
          class v extends G {
            writeValue(g) {
              this.setProperty("value", null == g ? "" : g);
            }
            registerOnChange(g) {
              this.onChange = (I) => {
                g("" == I ? null : parseFloat(I));
              };
            }
          }
          return (
            (v.ɵfac = (function () {
              let _;
              return function (I) {
                return (_ || (_ = b.n5z(v)))(I || v);
              };
            })()),
            (v.ɵdir = b.lG2({
              type: v,
              selectors: [
                ["input", "type", "number", "formControlName", ""],
                ["input", "type", "number", "formControl", ""],
                ["input", "type", "number", "ngModel", ""],
              ],
              hostBindings: function (g, I) {
                1 & g &&
                  b.NdJ("input", function (ge) {
                    return I.onChange(ge.target.value);
                  })("blur", function () {
                    return I.onTouched();
                  });
              },
              features: [b._Bn([ft]), b.qOj],
            })),
            v
          );
        })(),
        Ns = (() => {
          class v {}
          return (
            (v.ɵfac = function (g) {
              return new (g || v)();
            }),
            (v.ɵmod = b.oAB({ type: v })),
            (v.ɵinj = b.cJS({})),
            v
          );
        })(),
        cr = (() => {
          class v {
            constructor() {
              this._validator = Je;
            }
            handleChanges(g) {
              if (this.inputName in g) {
                const I = this.normalizeInput(g[this.inputName].currentValue);
                (this._validator = this.createValidator(I)),
                  this._onChange && this._onChange();
              }
            }
            validate(g) {
              return this._validator(g);
            }
            registerOnValidatorChange(g) {
              this._onChange = g;
            }
          }
          return (
            (v.ɵfac = function (g) {
              return new (g || v)();
            }),
            (v.ɵdir = b.lG2({ type: v })),
            v
          );
        })();
      const Bi = { provide: Ee, useExisting: (0, b.Gpc)(() => Ar), multi: !0 };
      let Ar = (() => {
          class v extends cr {
            constructor() {
              super(...arguments),
                (this.inputName = "min"),
                (this.normalizeInput = (g) => parseFloat(g)),
                (this.createValidator = (g) =>
                  (function (v) {
                    return (_) => {
                      if (Me(_.value) || Me(v)) return null;
                      const g = parseFloat(_.value);
                      return !isNaN(g) && g < v
                        ? { min: { min: v, actual: _.value } }
                        : null;
                    };
                  })(g));
            }
            ngOnChanges(g) {
              this.handleChanges(g);
            }
          }
          return (
            (v.ɵfac = (function () {
              let _;
              return function (I) {
                return (_ || (_ = b.n5z(v)))(I || v);
              };
            })()),
            (v.ɵdir = b.lG2({
              type: v,
              selectors: [
                ["input", "type", "number", "min", "", "formControlName", ""],
                ["input", "type", "number", "min", "", "formControl", ""],
                ["input", "type", "number", "min", "", "ngModel", ""],
              ],
              hostVars: 1,
              hostBindings: function (g, I) {
                if (2 & g) {
                  let z;
                  b.uIk("min", null !== (z = I.min) && void 0 !== z ? z : null);
                }
              },
              inputs: { min: "min" },
              features: [b._Bn([Bi]), b.qOj, b.TTD],
            })),
            v
          );
        })(),
        T = (() => {
          class v {}
          return (
            (v.ɵfac = function (g) {
              return new (g || v)();
            }),
            (v.ɵmod = b.oAB({ type: v })),
            (v.ɵinj = b.cJS({ imports: [[Ns]] })),
            v
          );
        })(),
        D = (() => {
          class v {}
          return (
            (v.ɵfac = function (g) {
              return new (g || v)();
            }),
            (v.ɵmod = b.oAB({ type: v })),
            (v.ɵinj = b.cJS({ imports: [T] })),
            v
          );
        })();
    },
    9736: (Ue, le, j) => {
      "use strict";
      j.d(le, { Bz: () => Ji, lC: () => Ki });
      var b = j(8583),
        N = j(3018),
        fe = j(4869),
        he = j(9796),
        ie = j(7393);
      class ne extends ie.L {
        notifyNext(d, c, C, S, R) {
          this.destination.next(c);
        }
        notifyError(d, c) {
          this.destination.error(d);
        }
        notifyComplete(d) {
          this.destination.complete();
        }
      }
      class de extends ie.L {
        constructor(d, c, C) {
          super(),
            (this.parent = d),
            (this.outerValue = c),
            (this.outerIndex = C),
            (this.index = 0);
        }
        _next(d) {
          this.parent.notifyNext(
            this.outerValue,
            d,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(d) {
          this.parent.notifyError(d, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      var re = j(7444),
        Q = j(7574);
      function W(p, d, c, C, S = new de(p, c, C)) {
        if (!S.closed)
          return d instanceof Q.y ? d.subscribe(S) : (0, re.s)(d)(S);
      }
      var G = j(6693);
      const J = {};
      class be {
        constructor(d) {
          this.resultSelector = d;
        }
        call(d, c) {
          return c.subscribe(new De(d, this.resultSelector));
        }
      }
      class De extends ne {
        constructor(d, c) {
          super(d),
            (this.resultSelector = c),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(d) {
          this.values.push(J), this.observables.push(d);
        }
        _complete() {
          const d = this.observables,
            c = d.length;
          if (0 === c) this.destination.complete();
          else {
            (this.active = c), (this.toRespond = c);
            for (let C = 0; C < c; C++) this.add(W(this, d[C], void 0, C));
          }
        }
        notifyComplete(d) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(d, c, C) {
          const S = this.values,
            V = this.toRespond
              ? S[C] === J
                ? --this.toRespond
                : this.toRespond
              : 0;
          (S[C] = c),
            0 === V &&
              (this.resultSelector
                ? this._tryResultSelector(S)
                : this.destination.next(S.slice()));
        }
        _tryResultSelector(d) {
          let c;
          try {
            c = this.resultSelector.apply(this, d);
          } catch (C) {
            return void this.destination.error(C);
          }
          this.destination.next(c);
        }
      }
      const ae = (() => {
        function p() {
          return (
            Error.call(this),
            (this.message = "no elements in sequence"),
            (this.name = "EmptyError"),
            this
          );
        }
        return (p.prototype = Object.create(Error.prototype)), p;
      })();
      var $e = j(4402),
        Me = j(9193);
      function gt(p) {
        return new Q.y((d) => {
          let c;
          try {
            c = p();
          } catch (S) {
            return void d.error(S);
          }
          return (c ? (0, $e.D)(c) : (0, Me.c)()).subscribe(d);
        });
      }
      var Ee = j(5917),
        mt = j(6215),
        Oe = j(8071),
        Kt = j(2441),
        rr = j(9765);
      function Ts(p, d) {
        let c = !1;
        return (
          arguments.length >= 2 && (c = !0),
          function (S) {
            return S.lift(new tn(p, d, c));
          }
        );
      }
      class tn {
        constructor(d, c, C = !1) {
          (this.accumulator = d), (this.seed = c), (this.hasSeed = C);
        }
        call(d, c) {
          return c.subscribe(
            new yt(d, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class yt extends ie.L {
        constructor(d, c, C, S) {
          super(d),
            (this.accumulator = c),
            (this._seed = C),
            (this.hasSeed = S),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(d) {
          (this.hasSeed = !0), (this._seed = d);
        }
        _next(d) {
          if (this.hasSeed) return this._tryNext(d);
          (this.seed = d), this.destination.next(d);
        }
        _tryNext(d) {
          const c = this.index++;
          let C;
          try {
            C = this.accumulator(this.seed, d, c);
          } catch (S) {
            this.destination.error(S);
          }
          (this.seed = C), this.destination.next(C);
        }
      }
      var Ge = j(5345);
      function Ve(p) {
        return function (c) {
          const C = new ct(p),
            S = c.lift(C);
          return (C.caught = S);
        };
      }
      class ct {
        constructor(d) {
          this.selector = d;
        }
        call(d, c) {
          return c.subscribe(new Ie(d, this.selector, this.caught));
        }
      }
      class Ie extends Ge.Ds {
        constructor(d, c, C) {
          super(d), (this.selector = c), (this.caught = C);
        }
        error(d) {
          if (!this.isStopped) {
            let c;
            try {
              c = this.selector(d, this.caught);
            } catch (R) {
              return void super.error(R);
            }
            this._unsubscribeAndRecycle();
            const C = new Ge.IY(this);
            this.add(C);
            const S = (0, Ge.ft)(c, C);
            S !== C && this.add(S);
          }
        }
      }
      var Je = j(9773);
      function yr(p, d) {
        return (0, Je.zg)(p, d, 1);
      }
      var jn = j(5435),
        Ms = j(7108);
      function es(p) {
        return function (c) {
          return 0 === p ? (0, Me.c)() : c.lift(new ii(p));
        };
      }
      class ii {
        constructor(d) {
          if (((this.total = d), this.total < 0)) throw new Ms.W();
        }
        call(d, c) {
          return c.subscribe(new fo(d, this.total));
        }
      }
      class fo extends ie.L {
        constructor(d, c) {
          super(d),
            (this.total = c),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(d) {
          const c = this.ring,
            C = this.total,
            S = this.count++;
          c.length < C ? c.push(d) : (c[S % C] = d);
        }
        _complete() {
          const d = this.destination;
          let c = this.count;
          if (c > 0) {
            const C = this.count >= this.total ? this.total : this.count,
              S = this.ring;
            for (let R = 0; R < C; R++) {
              const V = c++ % C;
              d.next(S[V]);
            }
          }
          d.complete();
        }
      }
      function oi(p = Xe) {
        return (d) => d.lift(new Or(p));
      }
      class Or {
        constructor(d) {
          this.errorFactory = d;
        }
        call(d, c) {
          return c.subscribe(new Nt(d, this.errorFactory));
        }
      }
      class Nt extends ie.L {
        constructor(d, c) {
          super(d), (this.errorFactory = c), (this.hasValue = !1);
        }
        _next(d) {
          (this.hasValue = !0), this.destination.next(d);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let d;
            try {
              d = this.errorFactory();
            } catch (c) {
              d = c;
            }
            this.destination.error(d);
          }
        }
      }
      function Xe() {
        return new ae();
      }
      function Qt(p = null) {
        return (d) => d.lift(new ai(p));
      }
      class ai {
        constructor(d) {
          this.defaultValue = d;
        }
        call(d, c) {
          return c.subscribe(new Is(d, this.defaultValue));
        }
      }
      class Is extends ie.L {
        constructor(d, c) {
          super(d), (this.defaultValue = c), (this.isEmpty = !0);
        }
        _next(d) {
          (this.isEmpty = !1), this.destination.next(d);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      var wt = j(4487),
        Un = j(5257);
      function xt(p, d) {
        const c = arguments.length >= 2;
        return (C) =>
          C.pipe(
            p ? (0, jn.h)((S, R) => p(S, R, C)) : wt.y,
            (0, Un.q)(1),
            c ? Qt(d) : oi(() => new ae())
          );
      }
      var ts = j(5319);
      class $n {
        constructor(d) {
          this.callback = d;
        }
        call(d, c) {
          return c.subscribe(new li(d, this.callback));
        }
      }
      class li extends ie.L {
        constructor(d, c) {
          super(d), this.add(new ts.w(c));
        }
      }
      var ze = j(8002),
        _n = j(3190),
        Rs = j(9761),
        nn = j(3342),
        Ae = j(1307),
        sr = j(3282);
      class rn {
        constructor(d, c) {
          (this.id = d), (this.url = c);
        }
      }
      class Cn extends rn {
        constructor(d, c, C = "imperative", S = null) {
          super(d, c), (this.navigationTrigger = C), (this.restoredState = S);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class ht extends rn {
        constructor(d, c, C) {
          super(d, c), (this.urlAfterRedirects = C);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Pe extends rn {
        constructor(d, c, C) {
          super(d, c), (this.reason = C);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class xe extends rn {
        constructor(d, c, C) {
          super(d, c), (this.error = C);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class an extends rn {
        constructor(d, c, C, S) {
          super(d, c), (this.urlAfterRedirects = C), (this.state = S);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class xi extends rn {
        constructor(d, c, C, S) {
          super(d, c), (this.urlAfterRedirects = C), (this.state = S);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class _r extends rn {
        constructor(d, c, C, S, R) {
          super(d, c),
            (this.urlAfterRedirects = C),
            (this.state = S),
            (this.shouldActivate = R);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Tt extends rn {
        constructor(d, c, C, S) {
          super(d, c), (this.urlAfterRedirects = C), (this.state = S);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Tn extends rn {
        constructor(d, c, C, S) {
          super(d, c), (this.urlAfterRedirects = C), (this.state = S);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Pr {
        constructor(d) {
          this.route = d;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class pt {
        constructor(d) {
          this.route = d;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class ns {
        constructor(d) {
          this.snapshot = d;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Re {
        constructor(d) {
          this.snapshot = d;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class ho {
        constructor(d) {
          this.snapshot = d;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class ir {
        constructor(d) {
          this.snapshot = d;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Mn {
        constructor(d, c, C) {
          (this.routerEvent = d), (this.position = c), (this.anchor = C);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      const ve = "primary";
      class rs {
        constructor(d) {
          this.params = d || {};
        }
        has(d) {
          return Object.prototype.hasOwnProperty.call(this.params, d);
        }
        get(d) {
          if (this.has(d)) {
            const c = this.params[d];
            return Array.isArray(c) ? c[0] : c;
          }
          return null;
        }
        getAll(d) {
          if (this.has(d)) {
            const c = this.params[d];
            return Array.isArray(c) ? c : [c];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function In(p) {
        return new rs(p);
      }
      const Cr = "ngNavigationCancelingError";
      function or(p) {
        const d = Error("NavigationCancelingError: " + p);
        return (d[Cr] = !0), d;
      }
      function Hn(p, d, c) {
        const C = c.path.split("/");
        if (
          C.length > p.length ||
          ("full" === c.pathMatch && (d.hasChildren() || C.length < p.length))
        )
          return null;
        const S = {};
        for (let R = 0; R < C.length; R++) {
          const V = C[R],
            U = p[R];
          if (V.startsWith(":")) S[V.substring(1)] = U;
          else if (V !== U.path) return null;
        }
        return { consumed: p.slice(0, C.length), posParams: S };
      }
      function ln(p, d) {
        const c = p ? Object.keys(p) : void 0,
          C = d ? Object.keys(d) : void 0;
        if (!c || !C || c.length != C.length) return !1;
        let S;
        for (let R = 0; R < c.length; R++)
          if (((S = c[R]), !Er(p[S], d[S]))) return !1;
        return !0;
      }
      function Er(p, d) {
        if (Array.isArray(p) && Array.isArray(d)) {
          if (p.length !== d.length) return !1;
          const c = [...p].sort(),
            C = [...d].sort();
          return c.every((S, R) => C[R] === S);
        }
        return p === d;
      }
      function ci(p) {
        return Array.prototype.concat.apply([], p);
      }
      function Fr(p) {
        return p.length > 0 ? p[p.length - 1] : null;
      }
      function Vt(p, d) {
        for (const c in p) p.hasOwnProperty(c) && d(p[c], c);
      }
      function Ot(p) {
        return (0, N.CqO)(p)
          ? p
          : (0, N.QGY)(p)
          ? (0, $e.D)(Promise.resolve(p))
          : (0, Ee.of)(p);
      }
      const vn = {
          exact: function Rn(p, d, c) {
            if (
              !cn(p.segments, d.segments) ||
              !kt(p.segments, d.segments, c) ||
              p.numberOfChildren !== d.numberOfChildren
            )
              return !1;
            for (const C in d.children)
              if (!p.children[C] || !Rn(p.children[C], d.children[C], c))
                return !1;
            return !0;
          },
          subset: Gt,
        },
        ar = {
          exact: function (p, d) {
            return ln(p, d);
          },
          subset: function (p, d) {
            return (
              Object.keys(d).length <= Object.keys(p).length &&
              Object.keys(d).every((c) => Er(p[c], d[c]))
            );
          },
          ignored: () => !0,
        };
      function xr(p, d, c) {
        return (
          vn[c.paths](p.root, d.root, c.matrixParams) &&
          ar[c.queryParams](p.queryParams, d.queryParams) &&
          !("exact" === c.fragment && p.fragment !== d.fragment)
        );
      }
      function Gt(p, d, c) {
        return is(p, d, d.segments, c);
      }
      function is(p, d, c, C) {
        if (p.segments.length > c.length) {
          const S = p.segments.slice(0, c.length);
          return !(!cn(S, c) || d.hasChildren() || !kt(S, c, C));
        }
        if (p.segments.length === c.length) {
          if (!cn(p.segments, c) || !kt(p.segments, c, C)) return !1;
          for (const S in d.children)
            if (!p.children[S] || !Gt(p.children[S], d.children[S], C))
              return !1;
          return !0;
        }
        {
          const S = c.slice(0, p.segments.length),
            R = c.slice(p.segments.length);
          return (
            !!(cn(p.segments, S) && kt(p.segments, S, C) && p.children[ve]) &&
            is(p.children[ve], d, R, C)
          );
        }
      }
      function kt(p, d, c) {
        return d.every((C, S) => ar[c](p[S].parameters, C.parameters));
      }
      class ce {
        constructor(d, c, C) {
          (this.root = d), (this.queryParams = c), (this.fragment = C);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = In(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return os.serialize(this);
        }
      }
      class _e {
        constructor(d, c) {
          (this.segments = d),
            (this.children = c),
            (this.parent = null),
            Vt(c, (C, S) => (C.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return lr(this);
        }
      }
      class ut {
        constructor(d, c) {
          (this.path = d), (this.parameters = c);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = In(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return En(this);
        }
      }
      function cn(p, d) {
        return p.length === d.length && p.every((c, C) => c.path === d[C].path);
      }
      class Zt {}
      class dt {
        parse(d) {
          const c = new wr(d);
          return new ce(
            c.parseRootSegment(),
            c.parseQueryParams(),
            c.parseFragment()
          );
        }
        serialize(d) {
          var p;
          return `${`/${Be(d.root, !0)}`}${(function (p) {
            const d = Object.keys(p)
              .map((c) => {
                const C = p[c];
                return Array.isArray(C)
                  ? C.map((S) => `${xn(c)}=${xn(S)}`).join("&")
                  : `${xn(c)}=${xn(C)}`;
              })
              .filter((c) => !!c);
            return d.length ? `?${d.join("&")}` : "";
          })(d.queryParams)}${
            "string" == typeof d.fragment
              ? `#${((p = d.fragment), encodeURI(p))}`
              : ""
          }`;
        }
      }
      const os = new dt();
      function lr(p) {
        return p.segments.map((d) => En(d)).join("/");
      }
      function Be(p, d) {
        if (!p.hasChildren()) return lr(p);
        if (d) {
          const c = p.children[ve] ? Be(p.children[ve], !1) : "",
            C = [];
          return (
            Vt(p.children, (S, R) => {
              R !== ve && C.push(`${R}:${Be(S, !1)}`);
            }),
            C.length > 0 ? `${c}(${C.join("//")})` : c
          );
        }
        {
          const c = (function (p, d) {
            let c = [];
            return (
              Vt(p.children, (C, S) => {
                S === ve && (c = c.concat(d(C, S)));
              }),
              Vt(p.children, (C, S) => {
                S !== ve && (c = c.concat(d(C, S)));
              }),
              c
            );
          })(p, (C, S) =>
            S === ve ? [Be(p.children[ve], !1)] : [`${S}:${Be(C, !1)}`]
          );
          return 1 === Object.keys(p.children).length && null != p.children[ve]
            ? `${lr(p)}/${c[0]}`
            : `${lr(p)}/(${c.join("//")})`;
        }
      }
      function Dr(p) {
        return encodeURIComponent(p)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function xn(p) {
        return Dr(p).replace(/%3B/gi, ";");
      }
      function Wn(p) {
        return Dr(p)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function Lt(p) {
        return decodeURIComponent(p);
      }
      function br(p) {
        return Lt(p.replace(/\+/g, "%20"));
      }
      function En(p) {
        return `${Wn(p.path)}${(function (p) {
          return Object.keys(p)
            .map((d) => `;${Wn(d)}=${Wn(p[d])}`)
            .join("");
        })(p.parameters)}`;
      }
      const as = /^[^\/()?;=#]+/;
      function Vr(p) {
        const d = p.match(as);
        return d ? d[0] : "";
      }
      const di = /^[^=?&#]+/,
        Os = /^[^?&#]+/;
      class wr {
        constructor(d) {
          (this.url = d), (this.remaining = d);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new _e([], {})
              : new _e([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const d = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(d);
            } while (this.consumeOptional("&"));
          return d;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const d = [];
          for (
            this.peekStartsWith("(") || d.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), d.push(this.parseSegment());
          let c = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (c = this.parseParens(!0)));
          let C = {};
          return (
            this.peekStartsWith("(") && (C = this.parseParens(!1)),
            (d.length > 0 || Object.keys(c).length > 0) &&
              (C[ve] = new _e(d, c)),
            C
          );
        }
        parseSegment() {
          const d = Vr(this.remaining);
          if ("" === d && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(d), new ut(Lt(d), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const d = {};
          for (; this.consumeOptional(";"); ) this.parseParam(d);
          return d;
        }
        parseParam(d) {
          const c = Vr(this.remaining);
          if (!c) return;
          this.capture(c);
          let C = "";
          if (this.consumeOptional("=")) {
            const S = Vr(this.remaining);
            S && ((C = S), this.capture(C));
          }
          d[Lt(c)] = Lt(C);
        }
        parseQueryParam(d) {
          const c = (function (p) {
            const d = p.match(di);
            return d ? d[0] : "";
          })(this.remaining);
          if (!c) return;
          this.capture(c);
          let C = "";
          if (this.consumeOptional("=")) {
            const V = (function (p) {
              const d = p.match(Os);
              return d ? d[0] : "";
            })(this.remaining);
            V && ((C = V), this.capture(C));
          }
          const S = br(c),
            R = br(C);
          if (d.hasOwnProperty(S)) {
            let V = d[S];
            Array.isArray(V) || ((V = [V]), (d[S] = V)), V.push(R);
          } else d[S] = R;
        }
        parseParens(d) {
          const c = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const C = Vr(this.remaining),
              S = this.remaining[C.length];
            if ("/" !== S && ")" !== S && ";" !== S)
              throw new Error(`Cannot parse url '${this.url}'`);
            let R;
            C.indexOf(":") > -1
              ? ((R = C.substr(0, C.indexOf(":"))),
                this.capture(R),
                this.capture(":"))
              : d && (R = ve);
            const V = this.parseChildren();
            (c[R] = 1 === Object.keys(V).length ? V[ve] : new _e([], V)),
              this.consumeOptional("//");
          }
          return c;
        }
        peekStartsWith(d) {
          return this.remaining.startsWith(d);
        }
        consumeOptional(d) {
          return (
            !!this.peekStartsWith(d) &&
            ((this.remaining = this.remaining.substring(d.length)), !0)
          );
        }
        capture(d) {
          if (!this.consumeOptional(d)) throw new Error(`Expected "${d}".`);
        }
      }
      class At {
        constructor(d) {
          this._root = d;
        }
        get root() {
          return this._root.value;
        }
        parent(d) {
          const c = this.pathFromRoot(d);
          return c.length > 1 ? c[c.length - 2] : null;
        }
        children(d) {
          const c = Dn(d, this._root);
          return c ? c.children.map((C) => C.value) : [];
        }
        firstChild(d) {
          const c = Dn(d, this._root);
          return c && c.children.length > 0 ? c.children[0].value : null;
        }
        siblings(d) {
          const c = hn(d, this._root);
          return c.length < 2
            ? []
            : c[c.length - 2].children
                .map((S) => S.value)
                .filter((S) => S !== d);
        }
        pathFromRoot(d) {
          return hn(d, this._root).map((c) => c.value);
        }
      }
      function Dn(p, d) {
        if (p === d.value) return d;
        for (const c of d.children) {
          const C = Dn(p, c);
          if (C) return C;
        }
        return null;
      }
      function hn(p, d) {
        if (p === d.value) return [d];
        for (const c of d.children) {
          const C = hn(p, c);
          if (C.length) return C.unshift(d), C;
        }
        return [];
      }
      class nt {
        constructor(d, c) {
          (this.value = d), (this.children = c);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function zn(p) {
        const d = {};
        return p && p.children.forEach((c) => (d[c.value.outlet] = c)), d;
      }
      class Vn extends At {
        constructor(d, c) {
          super(d), (this.snapshot = c), us(this, d);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function pn(p, d) {
        const c = (function (p, d) {
            const V = new Bt([], {}, {}, "", {}, ve, d, null, p.root, -1, {});
            return new Ps("", new nt(V, []));
          })(p, d),
          C = new mt.X([new ut("", {})]),
          S = new mt.X({}),
          R = new mt.X({}),
          V = new mt.X({}),
          U = new mt.X(""),
          X = new qn(C, S, V, U, R, ve, d, c.root);
        return (X.snapshot = c.root), new Vn(new nt(X, []), c);
      }
      class qn {
        constructor(d, c, C, S, R, V, U, X) {
          (this.url = d),
            (this.params = c),
            (this.queryParams = C),
            (this.fragment = S),
            (this.data = R),
            (this.outlet = V),
            (this.component = U),
            (this._futureSnapshot = X);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe((0, ze.U)((d) => In(d)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, ze.U)((d) => In(d))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function Lr(p, d = "emptyOnly") {
        const c = p.pathFromRoot;
        let C = 0;
        if ("always" !== d)
          for (C = c.length - 1; C >= 1; ) {
            const S = c[C],
              R = c[C - 1];
            if (S.routeConfig && "" === S.routeConfig.path) C--;
            else {
              if (R.component) break;
              C--;
            }
          }
        return (function (p) {
          return p.reduce(
            (d, c) => ({
              params: Object.assign(Object.assign({}, d.params), c.params),
              data: Object.assign(Object.assign({}, d.data), c.data),
              resolve: Object.assign(
                Object.assign({}, d.resolve),
                c._resolvedData
              ),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(c.slice(C));
      }
      class Bt {
        constructor(d, c, C, S, R, V, U, X, Ce, rt, Te) {
          (this.url = d),
            (this.params = c),
            (this.queryParams = C),
            (this.fragment = S),
            (this.data = R),
            (this.outlet = V),
            (this.component = U),
            (this.routeConfig = X),
            (this._urlSegment = Ce),
            (this._lastPathIndex = rt),
            (this._resolve = Te);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = In(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = In(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((C) => C.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class Ps extends At {
        constructor(d, c) {
          super(c), (this.url = d), us(this, c);
        }
        toString() {
          return Vi(this._root);
        }
      }
      function us(p, d) {
        (d.value._routerState = p), d.children.forEach((c) => us(p, c));
      }
      function Vi(p) {
        const d =
          p.children.length > 0 ? ` { ${p.children.map(Vi).join(", ")} } ` : "";
        return `${p.value}${d}`;
      }
      function cs(p) {
        if (p.snapshot) {
          const d = p.snapshot,
            c = p._futureSnapshot;
          (p.snapshot = c),
            ln(d.queryParams, c.queryParams) ||
              p.queryParams.next(c.queryParams),
            d.fragment !== c.fragment && p.fragment.next(c.fragment),
            ln(d.params, c.params) || p.params.next(c.params),
            (function (p, d) {
              if (p.length !== d.length) return !1;
              for (let c = 0; c < p.length; ++c) if (!ln(p[c], d[c])) return !1;
              return !0;
            })(d.url, c.url) || p.url.next(c.url),
            ln(d.data, c.data) || p.data.next(c.data);
        } else
          (p.snapshot = p._futureSnapshot), p.data.next(p._futureSnapshot.data);
      }
      function Fs(p, d) {
        return (
          ln(p.params, d.params) &&
          (function (p, d) {
            return (
              cn(p, d) && p.every((c, C) => ln(c.parameters, d[C].parameters))
            );
          })(p.url, d.url) &&
          !(!p.parent != !d.parent) &&
          (!p.parent || Fs(p.parent, d.parent))
        );
      }
      function fi(p, d, c) {
        if (c && p.shouldReuseRoute(d.value, c.value.snapshot)) {
          const C = c.value;
          C._futureSnapshot = d.value;
          const S = (function (p, d, c) {
            return d.children.map((C) => {
              for (const S of c.children)
                if (p.shouldReuseRoute(C.value, S.value.snapshot))
                  return fi(p, C, S);
              return fi(p, C);
            });
          })(p, d, c);
          return new nt(C, S);
        }
        {
          if (p.shouldAttach(d.value)) {
            const R = p.retrieve(d.value);
            if (null !== R) {
              const V = R.route;
              return xs(d, V), V;
            }
          }
          const C = (function (p) {
              return new qn(
                new mt.X(p.url),
                new mt.X(p.params),
                new mt.X(p.queryParams),
                new mt.X(p.fragment),
                new mt.X(p.data),
                p.outlet,
                p.component,
                p
              );
            })(d.value),
            S = d.children.map((R) => fi(p, R));
          return new nt(C, S);
        }
      }
      function xs(p, d) {
        if (p.value.routeConfig !== d.value.routeConfig)
          throw new Error(
            "Cannot reattach ActivatedRouteSnapshot created from a different route"
          );
        if (p.children.length !== d.children.length)
          throw new Error(
            "Cannot reattach ActivatedRouteSnapshot with a different number of children"
          );
        d.value._futureSnapshot = p.value;
        for (let c = 0; c < p.children.length; ++c)
          xs(p.children[c], d.children[c]);
      }
      function jr(p) {
        return (
          "object" == typeof p && null != p && !p.outlets && !p.segmentPath
        );
      }
      function ur(p) {
        return "object" == typeof p && null != p && p.outlets;
      }
      function cr(p, d, c, C, S) {
        let R = {};
        return (
          C &&
            Vt(C, (V, U) => {
              R[U] = Array.isArray(V) ? V.map((X) => `${X}`) : `${V}`;
            }),
          new ce(c.root === p ? d : Ur(c.root, p, d), R, S)
        );
      }
      function Ur(p, d, c) {
        const C = {};
        return (
          Vt(p.children, (S, R) => {
            C[R] = S === d ? c : Ur(S, d, c);
          }),
          new _e(p.segments, C)
        );
      }
      class Sr {
        constructor(d, c, C) {
          if (
            ((this.isAbsolute = d),
            (this.numberOfDoubleDots = c),
            (this.commands = C),
            d && C.length > 0 && jr(C[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const S = C.find(ur);
          if (S && S !== Fr(C))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class Ar {
        constructor(d, c, C) {
          (this.segmentGroup = d), (this.processChildren = c), (this.index = C);
        }
      }
      function Hr(p, d, c) {
        if (
          (p || (p = new _e([], {})),
          0 === p.segments.length && p.hasChildren())
        )
          return Tr(p, d, c);
        const C = (function (p, d, c) {
            let C = 0,
              S = d;
            const R = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; S < p.segments.length; ) {
              if (C >= c.length) return R;
              const V = p.segments[S],
                U = c[C];
              if (ur(U)) break;
              const X = `${U}`,
                Ce = C < c.length - 1 ? c[C + 1] : null;
              if (S > 0 && void 0 === X) break;
              if (X && Ce && "object" == typeof Ce && void 0 === Ce.outlets) {
                if (!Ir(X, Ce, V)) return R;
                C += 2;
              } else {
                if (!Ir(X, {}, V)) return R;
                C++;
              }
              S++;
            }
            return { match: !0, pathIndex: S, commandIndex: C };
          })(p, d, c),
          S = c.slice(C.commandIndex);
        if (C.match && C.pathIndex < p.segments.length) {
          const R = new _e(p.segments.slice(0, C.pathIndex), {});
          return (
            (R.children[ve] = new _e(
              p.segments.slice(C.pathIndex),
              p.children
            )),
            Tr(R, 0, S)
          );
        }
        return C.match && 0 === S.length
          ? new _e(p.segments, {})
          : C.match && !p.hasChildren()
          ? ji(p, d, c)
          : C.match
          ? Tr(p, 0, S)
          : ji(p, d, c);
      }
      function Tr(p, d, c) {
        if (0 === c.length) return new _e(p.segments, {});
        {
          const C = (function (p) {
              return ur(p[0]) ? p[0].outlets : { [ve]: p };
            })(c),
            S = {};
          return (
            Vt(C, (R, V) => {
              "string" == typeof R && (R = [R]),
                null !== R && (S[V] = Hr(p.children[V], d, R));
            }),
            Vt(p.children, (R, V) => {
              void 0 === C[V] && (S[V] = R);
            }),
            new _e(p.segments, S)
          );
        }
      }
      function ji(p, d, c) {
        const C = p.segments.slice(0, d);
        let S = 0;
        for (; S < c.length; ) {
          const R = c[S];
          if (ur(R)) {
            const X = Ui(R.outlets);
            return new _e(C, X);
          }
          if (0 === S && jr(c[0])) {
            C.push(new ut(p.segments[d].path, Mr(c[0]))), S++;
            continue;
          }
          const V = ur(R) ? R.outlets[ve] : `${R}`,
            U = S < c.length - 1 ? c[S + 1] : null;
          V && U && jr(U)
            ? (C.push(new ut(V, Mr(U))), (S += 2))
            : (C.push(new ut(V, {})), S++);
        }
        return new _e(C, {});
      }
      function Ui(p) {
        const d = {};
        return (
          Vt(p, (c, C) => {
            "string" == typeof c && (c = [c]),
              null !== c && (d[C] = ji(new _e([], {}), 0, c));
          }),
          d
        );
      }
      function Mr(p) {
        const d = {};
        return Vt(p, (c, C) => (d[C] = `${c}`)), d;
      }
      function Ir(p, d, c) {
        return p == c.path && ln(d, c.parameters);
      }
      class fs {
        constructor(d, c, C, S) {
          (this.routeReuseStrategy = d),
            (this.futureState = c),
            (this.currState = C),
            (this.forwardEvent = S);
        }
        activate(d) {
          const c = this.futureState._root,
            C = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(c, C, d),
            cs(this.futureState.root),
            this.activateChildRoutes(c, C, d);
        }
        deactivateChildRoutes(d, c, C) {
          const S = zn(c);
          d.children.forEach((R) => {
            const V = R.value.outlet;
            this.deactivateRoutes(R, S[V], C), delete S[V];
          }),
            Vt(S, (R, V) => {
              this.deactivateRouteAndItsChildren(R, C);
            });
        }
        deactivateRoutes(d, c, C) {
          const S = d.value,
            R = c ? c.value : null;
          if (S === R)
            if (S.component) {
              const V = C.getContext(S.outlet);
              V && this.deactivateChildRoutes(d, c, V.children);
            } else this.deactivateChildRoutes(d, c, C);
          else R && this.deactivateRouteAndItsChildren(c, C);
        }
        deactivateRouteAndItsChildren(d, c) {
          this.routeReuseStrategy.shouldDetach(d.value.snapshot)
            ? this.detachAndStoreRouteSubtree(d, c)
            : this.deactivateRouteAndOutlet(d, c);
        }
        detachAndStoreRouteSubtree(d, c) {
          const C = c.getContext(d.value.outlet);
          if (C && C.outlet) {
            const S = C.outlet.detach(),
              R = C.children.onOutletDeactivated();
            this.routeReuseStrategy.store(d.value.snapshot, {
              componentRef: S,
              route: d,
              contexts: R,
            });
          }
        }
        deactivateRouteAndOutlet(d, c) {
          const C = c.getContext(d.value.outlet),
            S = C && d.value.component ? C.children : c,
            R = zn(d);
          for (const V of Object.keys(R))
            this.deactivateRouteAndItsChildren(R[V], S);
          C &&
            C.outlet &&
            (C.outlet.deactivate(),
            C.children.onOutletDeactivated(),
            (C.attachRef = null),
            (C.resolver = null),
            (C.route = null));
        }
        activateChildRoutes(d, c, C) {
          const S = zn(c);
          d.children.forEach((R) => {
            this.activateRoutes(R, S[R.value.outlet], C),
              this.forwardEvent(new ir(R.value.snapshot));
          }),
            d.children.length && this.forwardEvent(new Re(d.value.snapshot));
        }
        activateRoutes(d, c, C) {
          const S = d.value,
            R = c ? c.value : null;
          if ((cs(S), S === R))
            if (S.component) {
              const V = C.getOrCreateContext(S.outlet);
              this.activateChildRoutes(d, c, V.children);
            } else this.activateChildRoutes(d, c, C);
          else if (S.component) {
            const V = C.getOrCreateContext(S.outlet);
            if (this.routeReuseStrategy.shouldAttach(S.snapshot)) {
              const U = this.routeReuseStrategy.retrieve(S.snapshot);
              this.routeReuseStrategy.store(S.snapshot, null),
                V.children.onOutletReAttached(U.contexts),
                (V.attachRef = U.componentRef),
                (V.route = U.route.value),
                V.outlet && V.outlet.attach(U.componentRef, U.route.value),
                Pt(U.route);
            } else {
              const U = (function (p) {
                  for (let d = p.parent; d; d = d.parent) {
                    const c = d.routeConfig;
                    if (c && c._loadedConfig) return c._loadedConfig;
                    if (c && c.component) return null;
                  }
                  return null;
                })(S.snapshot),
                X = U ? U.module.componentFactoryResolver : null;
              (V.attachRef = null),
                (V.route = S),
                (V.resolver = X),
                V.outlet && V.outlet.activateWith(S, X),
                this.activateChildRoutes(d, null, V.children);
            }
          } else this.activateChildRoutes(d, null, C);
        }
      }
      function Pt(p) {
        cs(p.value), p.children.forEach(Pt);
      }
      class E {
        constructor(d, c) {
          (this.routes = d), (this.module = c);
        }
      }
      function T(p) {
        return "function" == typeof p;
      }
      function O(p) {
        return p instanceof ce;
      }
      const _ = Symbol("INITIAL_VALUE");
      function g() {
        return (0, _n.w)((p) =>
          (function (...p) {
            let d, c;
            return (
              (0, fe.K)(p[p.length - 1]) && (c = p.pop()),
              "function" == typeof p[p.length - 1] && (d = p.pop()),
              1 === p.length && (0, he.k)(p[0]) && (p = p[0]),
              (0, G.n)(p, c).lift(new be(d))
            );
          })(p.map((d) => d.pipe((0, Un.q)(1), (0, Rs.O)(_)))).pipe(
            Ts((d, c) => {
              let C = !1;
              return c.reduce(
                (S, R, V) =>
                  S !== _
                    ? S
                    : (R === _ && (C = !0),
                      C || (!1 !== R && V !== c.length - 1 && !O(R)) ? S : R),
                d
              );
            }, _),
            (0, jn.h)((d) => d !== _),
            (0, ze.U)((d) => (O(d) ? d : !0 === d)),
            (0, Un.q)(1)
          )
        );
      }
      let I = (() => {
        class p {}
        return (
          (p.ɵfac = function (c) {
            return new (c || p)();
          }),
          (p.ɵcmp = N.Xpm({
            type: p,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (c, C) {
              1 & c && N._UZ(0, "router-outlet");
            },
            directives: function () {
              return [Ki];
            },
            encapsulation: 2,
          })),
          p
        );
      })();
      function z(p, d = "") {
        for (let c = 0; c < p.length; c++) {
          const C = p[c];
          ge(C, we(d, C));
        }
      }
      function ge(p, d) {
        p.children && z(p.children, d);
      }
      function we(p, d) {
        return d
          ? p || d.path
            ? p && !d.path
              ? `${p}/`
              : !p && d.path
              ? d.path
              : `${p}/${d.path}`
            : ""
          : p;
      }
      function it(p) {
        const d = p.children && p.children.map(it),
          c = d
            ? Object.assign(Object.assign({}, p), { children: d })
            : Object.assign({}, p);
        return (
          !c.component &&
            (d || c.loadChildren) &&
            c.outlet &&
            c.outlet !== ve &&
            (c.component = I),
          c
        );
      }
      function vt(p) {
        return p.outlet || ve;
      }
      function Ft(p, d) {
        const c = p.filter((C) => vt(C) === d);
        return c.push(...p.filter((C) => vt(C) !== d)), c;
      }
      const Et = {
        matched: !1,
        consumedSegments: [],
        lastChild: 0,
        parameters: {},
        positionalParamSegments: {},
      };
      function bn(p, d, c) {
        var C;
        if ("" === d.path)
          return "full" === d.pathMatch && (p.hasChildren() || c.length > 0)
            ? Object.assign({}, Et)
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                parameters: {},
                positionalParamSegments: {},
              };
        const R = (d.matcher || Hn)(c, p, d);
        if (!R) return Object.assign({}, Et);
        const V = {};
        Vt(R.posParams, (X, Ce) => {
          V[Ce] = X.path;
        });
        const U =
          R.consumed.length > 0
            ? Object.assign(
                Object.assign({}, V),
                R.consumed[R.consumed.length - 1].parameters
              )
            : V;
        return {
          matched: !0,
          consumedSegments: R.consumed,
          lastChild: R.consumed.length,
          parameters: U,
          positionalParamSegments:
            null !== (C = R.posParams) && void 0 !== C ? C : {},
        };
      }
      function Yn(p, d, c, C, S = "corrected") {
        if (
          c.length > 0 &&
          (function (p, d, c) {
            return c.some((C) => Le(p, d, C) && vt(C) !== ve);
          })(p, c, C)
        ) {
          const V = new _e(
            d,
            (function (p, d, c, C) {
              const S = {};
              (S[ve] = C),
                (C._sourceSegment = p),
                (C._segmentIndexShift = d.length);
              for (const R of c)
                if ("" === R.path && vt(R) !== ve) {
                  const V = new _e([], {});
                  (V._sourceSegment = p),
                    (V._segmentIndexShift = d.length),
                    (S[vt(R)] = V);
                }
              return S;
            })(p, d, C, new _e(c, p.children))
          );
          return (
            (V._sourceSegment = p),
            (V._segmentIndexShift = d.length),
            { segmentGroup: V, slicedSegments: [] }
          );
        }
        if (
          0 === c.length &&
          (function (p, d, c) {
            return c.some((C) => Le(p, d, C));
          })(p, c, C)
        ) {
          const V = new _e(
            p.segments,
            (function (p, d, c, C, S, R) {
              const V = {};
              for (const U of C)
                if (Le(p, c, U) && !S[vt(U)]) {
                  const X = new _e([], {});
                  (X._sourceSegment = p),
                    (X._segmentIndexShift =
                      "legacy" === R ? p.segments.length : d.length),
                    (V[vt(U)] = X);
                }
              return Object.assign(Object.assign({}, S), V);
            })(p, d, c, C, p.children, S)
          );
          return (
            (V._sourceSegment = p),
            (V._segmentIndexShift = d.length),
            { segmentGroup: V, slicedSegments: c }
          );
        }
        const R = new _e(p.segments, p.children);
        return (
          (R._sourceSegment = p),
          (R._segmentIndexShift = d.length),
          { segmentGroup: R, slicedSegments: c }
        );
      }
      function Le(p, d, c) {
        return (
          (!(p.hasChildren() || d.length > 0) || "full" !== c.pathMatch) &&
          "" === c.path
        );
      }
      function ul(p, d, c, C) {
        return (
          !!(vt(p) === C || (C !== ve && Le(d, c, p))) &&
          ("**" === p.path || bn(d, p, c).matched)
        );
      }
      function Hi(p, d, c) {
        return 0 === d.length && !p.children[c];
      }
      class hs {
        constructor(d) {
          this.segmentGroup = d || null;
        }
      }
      class Ro {
        constructor(d) {
          this.urlTree = d;
        }
      }
      function pi(p) {
        return new Q.y((d) => d.error(new hs(p)));
      }
      function ia(p) {
        return new Q.y((d) => d.error(new Ro(p)));
      }
      function No(p) {
        return new Q.y((d) =>
          d.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${p}'`
            )
          )
        );
      }
      class oa {
        constructor(d, c, C, S, R) {
          (this.configLoader = c),
            (this.urlSerializer = C),
            (this.urlTree = S),
            (this.config = R),
            (this.allowRedirects = !0),
            (this.ngModule = d.get(N.h0i));
        }
        apply() {
          const d = Yn(this.urlTree.root, [], [], this.config).segmentGroup,
            c = new _e(d.segments, d.children);
          return this.expandSegmentGroup(this.ngModule, this.config, c, ve)
            .pipe(
              (0, ze.U)((R) =>
                this.createUrlTree(
                  po(R),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              Ve((R) => {
                if (R instanceof Ro)
                  return (this.allowRedirects = !1), this.match(R.urlTree);
                throw R instanceof hs ? this.noMatchError(R) : R;
              })
            );
        }
        match(d) {
          return this.expandSegmentGroup(this.ngModule, this.config, d.root, ve)
            .pipe(
              (0, ze.U)((S) =>
                this.createUrlTree(po(S), d.queryParams, d.fragment)
              )
            )
            .pipe(
              Ve((S) => {
                throw S instanceof hs ? this.noMatchError(S) : S;
              })
            );
        }
        noMatchError(d) {
          return new Error(
            `Cannot match any routes. URL Segment: '${d.segmentGroup}'`
          );
        }
        createUrlTree(d, c, C) {
          const S = d.segments.length > 0 ? new _e([], { [ve]: d }) : d;
          return new ce(S, c, C);
        }
        expandSegmentGroup(d, c, C, S) {
          return 0 === C.segments.length && C.hasChildren()
            ? this.expandChildren(d, c, C).pipe((0, ze.U)((R) => new _e([], R)))
            : this.expandSegment(d, C, c, C.segments, S, !0);
        }
        expandChildren(d, c, C) {
          const S = [];
          for (const R of Object.keys(C.children))
            "primary" === R ? S.unshift(R) : S.push(R);
          return (0, $e.D)(S).pipe(
            yr((R) => {
              const V = C.children[R],
                U = Ft(c, R);
              return this.expandSegmentGroup(d, U, V, R).pipe(
                (0, ze.U)((X) => ({ segment: X, outlet: R }))
              );
            }),
            Ts((R, V) => ((R[V.outlet] = V.segment), R), {}),
            (function (p, d) {
              const c = arguments.length >= 2;
              return (C) =>
                C.pipe(
                  p ? (0, jn.h)((S, R) => p(S, R, C)) : wt.y,
                  es(1),
                  c ? Qt(d) : oi(() => new ae())
                );
            })()
          );
        }
        expandSegment(d, c, C, S, R, V) {
          return (0, $e.D)(C).pipe(
            yr((U) =>
              this.expandSegmentAgainstRoute(d, c, C, U, S, R, V).pipe(
                Ve((Ce) => {
                  if (Ce instanceof hs) return (0, Ee.of)(null);
                  throw Ce;
                })
              )
            ),
            xt((U) => !!U),
            Ve((U, X) => {
              if (U instanceof ae || "EmptyError" === U.name) {
                if (Hi(c, S, R)) return (0, Ee.of)(new _e([], {}));
                throw new hs(c);
              }
              throw U;
            })
          );
        }
        expandSegmentAgainstRoute(d, c, C, S, R, V, U) {
          return ul(S, c, R, V)
            ? void 0 === S.redirectTo
              ? this.matchSegmentAgainstRoute(d, c, S, R, V)
              : U && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(d, c, C, S, R, V)
              : pi(c)
            : pi(c);
        }
        expandSegmentAgainstRouteUsingRedirect(d, c, C, S, R, V) {
          return "**" === S.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(d, C, S, V)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                d,
                c,
                C,
                S,
                R,
                V
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(d, c, C, S) {
          const R = this.applyRedirectCommands([], C.redirectTo, {});
          return C.redirectTo.startsWith("/")
            ? ia(R)
            : this.lineralizeSegments(C, R).pipe(
                (0, Je.zg)((V) => {
                  const U = new _e(V, {});
                  return this.expandSegment(d, U, c, V, S, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(d, c, C, S, R, V) {
          const {
            matched: U,
            consumedSegments: X,
            lastChild: Ce,
            positionalParamSegments: rt,
          } = bn(c, S, R);
          if (!U) return pi(c);
          const Te = this.applyRedirectCommands(X, S.redirectTo, rt);
          return S.redirectTo.startsWith("/")
            ? ia(Te)
            : this.lineralizeSegments(S, Te).pipe(
                (0, Je.zg)((Dt) =>
                  this.expandSegment(d, c, C, Dt.concat(R.slice(Ce)), V, !1)
                )
              );
        }
        matchSegmentAgainstRoute(d, c, C, S, R) {
          if ("**" === C.path)
            return C.loadChildren
              ? (C._loadedConfig
                  ? (0, Ee.of)(C._loadedConfig)
                  : this.configLoader.load(d.injector, C)
                ).pipe(
                  (0, ze.U)((Dt) => ((C._loadedConfig = Dt), new _e(S, {})))
                )
              : (0, Ee.of)(new _e(S, {}));
          const { matched: V, consumedSegments: U, lastChild: X } = bn(c, C, S);
          if (!V) return pi(c);
          const Ce = S.slice(X);
          return this.getChildConfig(d, C, S).pipe(
            (0, Je.zg)((Te) => {
              const Dt = Te.module,
                lt = Te.routes,
                { segmentGroup: qr, slicedSegments: _s } = Yn(c, U, Ce, lt),
                Nr = new _e(qr.segments, qr.children);
              if (0 === _s.length && Nr.hasChildren())
                return this.expandChildren(Dt, lt, Nr).pipe(
                  (0, ze.U)((va) => new _e(U, va))
                );
              if (0 === lt.length && 0 === _s.length)
                return (0, Ee.of)(new _e(U, {}));
              const Ct = vt(C) === R;
              return this.expandSegment(Dt, Nr, lt, _s, Ct ? ve : R, !0).pipe(
                (0, ze.U)((Yr) => new _e(U.concat(Yr.segments), Yr.children))
              );
            })
          );
        }
        getChildConfig(d, c, C) {
          return c.children
            ? (0, Ee.of)(new E(c.children, d))
            : c.loadChildren
            ? void 0 !== c._loadedConfig
              ? (0, Ee.of)(c._loadedConfig)
              : this.runCanLoadGuards(d.injector, c, C).pipe(
                  (0, Je.zg)((S) => {
                    return S
                      ? this.configLoader
                          .load(d.injector, c)
                          .pipe((0, ze.U)((R) => ((c._loadedConfig = R), R)))
                      : ((p = c),
                        new Q.y((d) =>
                          d.error(
                            or(
                              `Cannot load children because the guard of the route "path: '${p.path}'" returned false`
                            )
                          )
                        ));
                    var p;
                  })
                )
            : (0, Ee.of)(new E([], d));
        }
        runCanLoadGuards(d, c, C) {
          const S = c.canLoad;
          if (!S || 0 === S.length) return (0, Ee.of)(!0);
          const R = S.map((V) => {
            const U = d.get(V);
            let X;
            if ((p = U) && T(p.canLoad)) X = U.canLoad(c, C);
            else {
              if (!T(U)) throw new Error("Invalid CanLoad guard");
              X = U(c, C);
            }
            var p;
            return Ot(X);
          });
          return (0, Ee.of)(R).pipe(
            g(),
            (0, nn.b)((V) => {
              if (!O(V)) return;
              const U = or(
                `Redirecting to "${this.urlSerializer.serialize(V)}"`
              );
              throw ((U.url = V), U);
            }),
            (0, ze.U)((V) => !0 === V)
          );
        }
        lineralizeSegments(d, c) {
          let C = [],
            S = c.root;
          for (;;) {
            if (((C = C.concat(S.segments)), 0 === S.numberOfChildren))
              return (0, Ee.of)(C);
            if (S.numberOfChildren > 1 || !S.children[ve])
              return No(d.redirectTo);
            S = S.children[ve];
          }
        }
        applyRedirectCommands(d, c, C) {
          return this.applyRedirectCreatreUrlTree(
            c,
            this.urlSerializer.parse(c),
            d,
            C
          );
        }
        applyRedirectCreatreUrlTree(d, c, C, S) {
          const R = this.createSegmentGroup(d, c.root, C, S);
          return new ce(
            R,
            this.createQueryParams(c.queryParams, this.urlTree.queryParams),
            c.fragment
          );
        }
        createQueryParams(d, c) {
          const C = {};
          return (
            Vt(d, (S, R) => {
              if ("string" == typeof S && S.startsWith(":")) {
                const U = S.substring(1);
                C[R] = c[U];
              } else C[R] = S;
            }),
            C
          );
        }
        createSegmentGroup(d, c, C, S) {
          const R = this.createSegments(d, c.segments, C, S);
          let V = {};
          return (
            Vt(c.children, (U, X) => {
              V[X] = this.createSegmentGroup(d, U, C, S);
            }),
            new _e(R, V)
          );
        }
        createSegments(d, c, C, S) {
          return c.map((R) =>
            R.path.startsWith(":")
              ? this.findPosParam(d, R, S)
              : this.findOrReturn(R, C)
          );
        }
        findPosParam(d, c, C) {
          const S = C[c.path.substring(1)];
          if (!S)
            throw new Error(
              `Cannot redirect to '${d}'. Cannot find '${c.path}'.`
            );
          return S;
        }
        findOrReturn(d, c) {
          let C = 0;
          for (const S of c) {
            if (S.path === d.path) return c.splice(C), S;
            C++;
          }
          return d;
        }
      }
      function po(p) {
        const d = {};
        for (const C of Object.keys(p.children)) {
          const R = po(p.children[C]);
          (R.segments.length > 0 || R.hasChildren()) && (d[C] = R);
        }
        return (function (p) {
          if (1 === p.numberOfChildren && p.children[ve]) {
            const d = p.children[ve];
            return new _e(p.segments.concat(d.segments), d.children);
          }
          return p;
        })(new _e(p.segments, d));
      }
      class Nn {
        constructor(d) {
          (this.path = d), (this.route = this.path[this.path.length - 1]);
        }
      }
      class gi {
        constructor(d, c) {
          (this.component = d), (this.route = c);
        }
      }
      function Wr(p, d, c) {
        const C = p._root;
        return ps(C, d ? d._root : null, c, [C.value]);
      }
      function mi(p, d, c) {
        const C = (function (p) {
          if (!p) return null;
          for (let d = p.parent; d; d = d.parent) {
            const c = d.routeConfig;
            if (c && c._loadedConfig) return c._loadedConfig;
          }
          return null;
        })(d);
        return (C ? C.module.injector : c).get(p);
      }
      function ps(
        p,
        d,
        c,
        C,
        S = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const R = zn(d);
        return (
          p.children.forEach((V) => {
            (function (
              p,
              d,
              c,
              C,
              S = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const R = p.value,
                V = d ? d.value : null,
                U = c ? c.getContext(p.value.outlet) : null;
              if (V && R.routeConfig === V.routeConfig) {
                const X = (function (p, d, c) {
                  if ("function" == typeof c) return c(p, d);
                  switch (c) {
                    case "pathParamsChange":
                      return !cn(p.url, d.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !cn(p.url, d.url) || !ln(p.queryParams, d.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !Fs(p, d) || !ln(p.queryParams, d.queryParams);
                    case "paramsChange":
                    default:
                      return !Fs(p, d);
                  }
                })(V, R, R.routeConfig.runGuardsAndResolvers);
                X
                  ? S.canActivateChecks.push(new Nn(C))
                  : ((R.data = V.data), (R._resolvedData = V._resolvedData)),
                  ps(p, d, R.component ? (U ? U.children : null) : c, C, S),
                  X &&
                    U &&
                    U.outlet &&
                    U.outlet.isActivated &&
                    S.canDeactivateChecks.push(new gi(U.outlet.component, V));
              } else
                V && yi(d, U, S),
                  S.canActivateChecks.push(new Nn(C)),
                  ps(p, null, R.component ? (U ? U.children : null) : c, C, S);
            })(V, R[V.value.outlet], c, C.concat([V.value]), S),
              delete R[V.value.outlet];
          }),
          Vt(R, (V, U) => yi(V, c.getContext(U), S)),
          S
        );
      }
      function yi(p, d, c) {
        const C = zn(p),
          S = p.value;
        Vt(C, (R, V) => {
          yi(R, S.component ? (d ? d.children.getContext(V) : null) : d, c);
        }),
          c.canDeactivateChecks.push(
            new gi(
              S.component && d && d.outlet && d.outlet.isActivated
                ? d.outlet.component
                : null,
              S
            )
          );
      }
      class la {}
      function Fo(p) {
        return new Q.y((d) => d.error(p));
      }
      class dl {
        constructor(d, c, C, S, R, V) {
          (this.rootComponentType = d),
            (this.config = c),
            (this.urlTree = C),
            (this.url = S),
            (this.paramsInheritanceStrategy = R),
            (this.relativeLinkResolution = V);
        }
        recognize() {
          const d = Yn(
              this.urlTree.root,
              [],
              [],
              this.config.filter((V) => void 0 === V.redirectTo),
              this.relativeLinkResolution
            ).segmentGroup,
            c = this.processSegmentGroup(this.config, d, ve);
          if (null === c) return null;
          const C = new Bt(
              [],
              Object.freeze({}),
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              ve,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            ),
            S = new nt(C, c),
            R = new Ps(this.url, S);
          return this.inheritParamsAndData(R._root), R;
        }
        inheritParamsAndData(d) {
          const c = d.value,
            C = Lr(c, this.paramsInheritanceStrategy);
          (c.params = Object.freeze(C.params)),
            (c.data = Object.freeze(C.data)),
            d.children.forEach((S) => this.inheritParamsAndData(S));
        }
        processSegmentGroup(d, c, C) {
          return 0 === c.segments.length && c.hasChildren()
            ? this.processChildren(d, c)
            : this.processSegment(d, c, c.segments, C);
        }
        processChildren(d, c) {
          const C = [];
          for (const R of Object.keys(c.children)) {
            const V = c.children[R],
              U = Ft(d, R),
              X = this.processSegmentGroup(U, V, R);
            if (null === X) return null;
            C.push(...X);
          }
          const S = Vo(C);
          return (
            S.sort((d, c) =>
              d.value.outlet === ve
                ? -1
                : c.value.outlet === ve
                ? 1
                : d.value.outlet.localeCompare(c.value.outlet)
            ),
            S
          );
        }
        processSegment(d, c, C, S) {
          for (const R of d) {
            const V = this.processSegmentAgainstRoute(R, c, C, S);
            if (null !== V) return V;
          }
          return Hi(c, C, S) ? [] : null;
        }
        processSegmentAgainstRoute(d, c, C, S) {
          if (d.redirectTo || !ul(d, c, C, S)) return null;
          let R,
            V = [],
            U = [];
          if ("**" === d.path) {
            const lt = C.length > 0 ? Fr(C).parameters : {};
            R = new Bt(
              C,
              lt,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              da(d),
              vt(d),
              d.component,
              d,
              Bs(c),
              ko(c) + C.length,
              gn(d)
            );
          } else {
            const lt = bn(c, d, C);
            if (!lt.matched) return null;
            (V = lt.consumedSegments),
              (U = C.slice(lt.lastChild)),
              (R = new Bt(
                V,
                lt.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                da(d),
                vt(d),
                d.component,
                d,
                Bs(c),
                ko(c) + V.length,
                gn(d)
              ));
          }
          const X = (p = d).children
              ? p.children
              : p.loadChildren
              ? p._loadedConfig.routes
              : [],
            { segmentGroup: Ce, slicedSegments: rt } = Yn(
              c,
              V,
              U,
              X.filter((lt) => void 0 === lt.redirectTo),
              this.relativeLinkResolution
            );
          var p;
          if (0 === rt.length && Ce.hasChildren()) {
            const lt = this.processChildren(X, Ce);
            return null === lt ? null : [new nt(R, lt)];
          }
          if (0 === X.length && 0 === rt.length) return [new nt(R, [])];
          const Te = vt(d) === S,
            Dt = this.processSegment(X, Ce, rt, Te ? ve : S);
          return null === Dt ? null : [new nt(R, Dt)];
        }
      }
      function ua(p) {
        const d = p.value.routeConfig;
        return d && "" === d.path && void 0 === d.redirectTo;
      }
      function Vo(p) {
        const d = [],
          c = new Set();
        for (const C of p) {
          if (!ua(C)) {
            d.push(C);
            continue;
          }
          const S = d.find((R) => C.value.routeConfig === R.value.routeConfig);
          void 0 !== S ? (S.children.push(...C.children), c.add(S)) : d.push(C);
        }
        for (const C of c) {
          const S = Vo(C.children);
          d.push(new nt(C.value, S));
        }
        return d.filter((C) => !c.has(C));
      }
      function Bs(p) {
        let d = p;
        for (; d._sourceSegment; ) d = d._sourceSegment;
        return d;
      }
      function ko(p) {
        let d = p,
          c = d._segmentIndexShift ? d._segmentIndexShift : 0;
        for (; d._sourceSegment; )
          (d = d._sourceSegment),
            (c += d._segmentIndexShift ? d._segmentIndexShift : 0);
        return c - 1;
      }
      function da(p) {
        return p.data || {};
      }
      function gn(p) {
        return p.resolve || {};
      }
      function Lo(p) {
        return (0, _n.w)((d) => {
          const c = p(d);
          return c ? (0, $e.D)(c).pipe((0, ze.U)(() => d)) : (0, Ee.of)(d);
        });
      }
      class zi extends class {
        shouldDetach(d) {
          return !1;
        }
        store(d, c) {}
        shouldAttach(d) {
          return !1;
        }
        retrieve(d) {
          return null;
        }
        shouldReuseRoute(d, c) {
          return d.routeConfig === c.routeConfig;
        }
      } {}
      const js = new N.OlP("ROUTES");
      class qi {
        constructor(d, c, C, S) {
          (this.loader = d),
            (this.compiler = c),
            (this.onLoadStartListener = C),
            (this.onLoadEndListener = S);
        }
        load(d, c) {
          if (c._loader$) return c._loader$;
          this.onLoadStartListener && this.onLoadStartListener(c);
          const S = this.loadModuleFactory(c.loadChildren).pipe(
            (0, ze.U)((R) => {
              this.onLoadEndListener && this.onLoadEndListener(c);
              const V = R.create(d);
              return new E(
                ci(V.injector.get(js, void 0, N.XFs.Self | N.XFs.Optional)).map(
                  it
                ),
                V
              );
            }),
            Ve((R) => {
              throw ((c._loader$ = void 0), R);
            })
          );
          return (
            (c._loader$ = new Kt.c(S, () => new rr.xQ()).pipe((0, Ae.x)())),
            c._loader$
          );
        }
        loadModuleFactory(d) {
          return "string" == typeof d
            ? (0, $e.D)(this.loader.load(d))
            : Ot(d()).pipe(
                (0, Je.zg)((c) =>
                  c instanceof N.YKP
                    ? (0, Ee.of)(c)
                    : (0, $e.D)(this.compiler.compileModuleAsync(c))
                )
              );
        }
      }
      class Bo {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new Us()),
            (this.attachRef = null);
        }
      }
      class Us {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(d, c) {
          const C = this.getOrCreateContext(d);
          (C.outlet = c), this.contexts.set(d, C);
        }
        onChildOutletDestroyed(d) {
          const c = this.getContext(d);
          c && (c.outlet = null);
        }
        onOutletDeactivated() {
          const d = this.contexts;
          return (this.contexts = new Map()), d;
        }
        onOutletReAttached(d) {
          this.contexts = d;
        }
        getOrCreateContext(d) {
          let c = this.getContext(d);
          return c || ((c = new Bo()), this.contexts.set(d, c)), c;
        }
        getContext(d) {
          return this.contexts.get(d) || null;
        }
      }
      class ms {
        shouldProcessUrl(d) {
          return !0;
        }
        extract(d) {
          return d;
        }
        merge(d, c) {
          return d;
        }
      }
      function mn(p) {
        throw p;
      }
      function jo(p, d, c) {
        return d.parse("/");
      }
      function Ci(p, d) {
        return (0, Ee.of)(null);
      }
      const $s = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact",
        },
        Uo = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset",
        };
      let On = (() => {
        class p {
          constructor(c, C, S, R, V, U, X, Ce) {
            (this.rootComponentType = c),
              (this.urlSerializer = C),
              (this.rootContexts = S),
              (this.location = R),
              (this.config = Ce),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.disposed = !1),
              (this.lastLocationChangeInfo = null),
              (this.navigationId = 0),
              (this.currentPageId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new rr.xQ()),
              (this.errorHandler = mn),
              (this.malformedUriErrorHandler = jo),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.hooks = {
                beforePreactivation: Ci,
                afterPreactivation: Ci,
              }),
              (this.urlHandlingStrategy = new ms()),
              (this.routeReuseStrategy = new zi()),
              (this.onSameUrlNavigation = "ignore"),
              (this.paramsInheritanceStrategy = "emptyOnly"),
              (this.urlUpdateStrategy = "deferred"),
              (this.relativeLinkResolution = "corrected"),
              (this.canceledNavigationResolution = "replace"),
              (this.ngModule = V.get(N.h0i)),
              (this.console = V.get(N.c2e));
            const Dt = V.get(N.R0b);
            (this.isNgZoneEnabled =
              Dt instanceof N.R0b && N.R0b.isInAngularZone()),
              this.resetConfig(Ce),
              (this.currentUrlTree = new ce(new _e([], {}), {}, null)),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.configLoader = new qi(
                U,
                X,
                (lt) => this.triggerEvent(new Pr(lt)),
                (lt) => this.triggerEvent(new pt(lt))
              )),
              (this.routerState = pn(
                this.currentUrlTree,
                this.rootComponentType
              )),
              (this.transitions = new mt.X({
                id: 0,
                targetPageId: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                urlAfterRedirects: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: "imperative",
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          get browserPageId() {
            var c;
            return null === (c = this.location.getState()) || void 0 === c
              ? void 0
              : c.ɵrouterPageId;
          }
          setupNavigations(c) {
            const C = this.events;
            return c.pipe(
              (0, jn.h)((S) => 0 !== S.id),
              (0, ze.U)((S) =>
                Object.assign(Object.assign({}, S), {
                  extractedUrl: this.urlHandlingStrategy.extract(S.rawUrl),
                })
              ),
              (0, _n.w)((S) => {
                let R = !1,
                  V = !1;
                return (0, Ee.of)(S).pipe(
                  (0, nn.b)((U) => {
                    this.currentNavigation = {
                      id: U.id,
                      initialUrl: U.currentRawUrl,
                      extractedUrl: U.extractedUrl,
                      trigger: U.source,
                      extras: U.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? Object.assign(
                            Object.assign({}, this.lastSuccessfulNavigation),
                            { previousNavigation: null }
                          )
                        : null,
                    };
                  }),
                  (0, _n.w)((U) => {
                    const X = this.browserUrlTree.toString(),
                      Ce =
                        !this.navigated ||
                        U.extractedUrl.toString() !== X ||
                        X !== this.currentUrlTree.toString();
                    if (
                      ("reload" === this.onSameUrlNavigation || Ce) &&
                      this.urlHandlingStrategy.shouldProcessUrl(U.rawUrl)
                    )
                      return (
                        Ho(U.source) && (this.browserUrlTree = U.extractedUrl),
                        (0, Ee.of)(U).pipe(
                          (0, _n.w)((Te) => {
                            const Dt = this.transitions.getValue();
                            return (
                              C.next(
                                new Cn(
                                  Te.id,
                                  this.serializeUrl(Te.extractedUrl),
                                  Te.source,
                                  Te.restoredState
                                )
                              ),
                              Dt !== this.transitions.getValue()
                                ? Me.E
                                : Promise.resolve(Te)
                            );
                          }),
                          (function (p, d, c, C) {
                            return (0, _n.w)((S) =>
                              (function (p, d, c, C, S) {
                                return new oa(p, d, c, C, S).apply();
                              })(p, d, c, S.extractedUrl, C).pipe(
                                (0, ze.U)((R) =>
                                  Object.assign(Object.assign({}, S), {
                                    urlAfterRedirects: R,
                                  })
                                )
                              )
                            );
                          })(
                            this.ngModule.injector,
                            this.configLoader,
                            this.urlSerializer,
                            this.config
                          ),
                          (0, nn.b)((Te) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: Te.urlAfterRedirects }
                            );
                          }),
                          (function (p, d, c, C, S) {
                            return (0, Je.zg)((R) =>
                              (function (
                                p,
                                d,
                                c,
                                C,
                                S = "emptyOnly",
                                R = "legacy"
                              ) {
                                try {
                                  const V = new dl(
                                    p,
                                    d,
                                    c,
                                    C,
                                    S,
                                    R
                                  ).recognize();
                                  return null === V
                                    ? Fo(new la())
                                    : (0, Ee.of)(V);
                                } catch (V) {
                                  return Fo(V);
                                }
                              })(
                                p,
                                d,
                                R.urlAfterRedirects,
                                c(R.urlAfterRedirects),
                                C,
                                S
                              ).pipe(
                                (0, ze.U)((V) =>
                                  Object.assign(Object.assign({}, R), {
                                    targetSnapshot: V,
                                  })
                                )
                              )
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            (Te) => this.serializeUrl(Te),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          (0, nn.b)((Te) => {
                            "eager" === this.urlUpdateStrategy &&
                              (Te.extras.skipLocationChange ||
                                this.setBrowserUrl(Te.urlAfterRedirects, Te),
                              (this.browserUrlTree = Te.urlAfterRedirects));
                            const Dt = new an(
                              Te.id,
                              this.serializeUrl(Te.extractedUrl),
                              this.serializeUrl(Te.urlAfterRedirects),
                              Te.targetSnapshot
                            );
                            C.next(Dt);
                          })
                        )
                      );
                    if (
                      Ce &&
                      this.rawUrlTree &&
                      this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                    ) {
                      const {
                          id: Dt,
                          extractedUrl: lt,
                          source: qr,
                          restoredState: _s,
                          extras: Nr,
                        } = U,
                        Ct = new Cn(Dt, this.serializeUrl(lt), qr, _s);
                      C.next(Ct);
                      const Cs = pn(lt, this.rootComponentType).snapshot;
                      return (0, Ee.of)(
                        Object.assign(Object.assign({}, U), {
                          targetSnapshot: Cs,
                          urlAfterRedirects: lt,
                          extras: Object.assign(Object.assign({}, Nr), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })
                      );
                    }
                    return (
                      (this.rawUrlTree = U.rawUrl),
                      (this.browserUrlTree = U.urlAfterRedirects),
                      U.resolve(null),
                      Me.E
                    );
                  }),
                  Lo((U) => {
                    const {
                      targetSnapshot: X,
                      id: Ce,
                      extractedUrl: rt,
                      rawUrl: Te,
                      extras: { skipLocationChange: Dt, replaceUrl: lt },
                    } = U;
                    return this.hooks.beforePreactivation(X, {
                      navigationId: Ce,
                      appliedUrlTree: rt,
                      rawUrlTree: Te,
                      skipLocationChange: !!Dt,
                      replaceUrl: !!lt,
                    });
                  }),
                  (0, nn.b)((U) => {
                    const X = new xi(
                      U.id,
                      this.serializeUrl(U.extractedUrl),
                      this.serializeUrl(U.urlAfterRedirects),
                      U.targetSnapshot
                    );
                    this.triggerEvent(X);
                  }),
                  (0, ze.U)((U) =>
                    Object.assign(Object.assign({}, U), {
                      guards: Wr(
                        U.targetSnapshot,
                        U.currentSnapshot,
                        this.rootContexts
                      ),
                    })
                  ),
                  (function (p, d) {
                    return (0, Je.zg)((c) => {
                      const {
                        targetSnapshot: C,
                        currentSnapshot: S,
                        guards: {
                          canActivateChecks: R,
                          canDeactivateChecks: V,
                        },
                      } = c;
                      return 0 === V.length && 0 === R.length
                        ? (0, Ee.of)(
                            Object.assign(Object.assign({}, c), {
                              guardsResult: !0,
                            })
                          )
                        : (function (p, d, c, C) {
                            return (0, $e.D)(p).pipe(
                              (0, Je.zg)((S) =>
                                (function (p, d, c, C, S) {
                                  const R =
                                    d && d.routeConfig
                                      ? d.routeConfig.canDeactivate
                                      : null;
                                  if (!R || 0 === R.length)
                                    return (0, Ee.of)(!0);
                                  const V = R.map((U) => {
                                    const X = mi(U, d, S);
                                    let Ce;
                                    if (
                                      (function (p) {
                                        return p && T(p.canDeactivate);
                                      })(X)
                                    )
                                      Ce = Ot(X.canDeactivate(p, d, c, C));
                                    else {
                                      if (!T(X))
                                        throw new Error(
                                          "Invalid CanDeactivate guard"
                                        );
                                      Ce = Ot(X(p, d, c, C));
                                    }
                                    return Ce.pipe(xt());
                                  });
                                  return (0, Ee.of)(V).pipe(g());
                                })(S.component, S.route, c, d, C)
                              ),
                              xt((S) => !0 !== S, !0)
                            );
                          })(V, C, S, p).pipe(
                            (0, Je.zg)((U) =>
                              U &&
                              (function (p) {
                                return "boolean" == typeof p;
                              })(U)
                                ? (function (p, d, c, C) {
                                    return (0, $e.D)(d).pipe(
                                      yr((S) =>
                                        (0, Oe.z)(
                                          (function (p, d) {
                                            return (
                                              null !== p && d && d(new ns(p)),
                                              (0, Ee.of)(!0)
                                            );
                                          })(S.route.parent, C),
                                          (function (p, d) {
                                            return (
                                              null !== p && d && d(new ho(p)),
                                              (0, Ee.of)(!0)
                                            );
                                          })(S.route, C),
                                          (function (p, d, c) {
                                            const C = d[d.length - 1],
                                              R = d
                                                .slice(0, d.length - 1)
                                                .reverse()
                                                .map((V) =>
                                                  (function (p) {
                                                    const d = p.routeConfig
                                                      ? p.routeConfig
                                                          .canActivateChild
                                                      : null;
                                                    return d && 0 !== d.length
                                                      ? { node: p, guards: d }
                                                      : null;
                                                  })(V)
                                                )
                                                .filter((V) => null !== V)
                                                .map((V) =>
                                                  gt(() => {
                                                    const U = V.guards.map(
                                                      (X) => {
                                                        const Ce = mi(
                                                          X,
                                                          V.node,
                                                          c
                                                        );
                                                        let rt;
                                                        if (
                                                          (function (p) {
                                                            return (
                                                              p &&
                                                              T(
                                                                p.canActivateChild
                                                              )
                                                            );
                                                          })(Ce)
                                                        )
                                                          rt = Ot(
                                                            Ce.canActivateChild(
                                                              C,
                                                              p
                                                            )
                                                          );
                                                        else {
                                                          if (!T(Ce))
                                                            throw new Error(
                                                              "Invalid CanActivateChild guard"
                                                            );
                                                          rt = Ot(Ce(C, p));
                                                        }
                                                        return rt.pipe(xt());
                                                      }
                                                    );
                                                    return (0, Ee.of)(U).pipe(
                                                      g()
                                                    );
                                                  })
                                                );
                                            return (0, Ee.of)(R).pipe(g());
                                          })(p, S.path, c),
                                          (function (p, d, c) {
                                            const C = d.routeConfig
                                              ? d.routeConfig.canActivate
                                              : null;
                                            if (!C || 0 === C.length)
                                              return (0, Ee.of)(!0);
                                            const S = C.map((R) =>
                                              gt(() => {
                                                const V = mi(R, d, c);
                                                let U;
                                                if (
                                                  (function (p) {
                                                    return (
                                                      p && T(p.canActivate)
                                                    );
                                                  })(V)
                                                )
                                                  U = Ot(V.canActivate(d, p));
                                                else {
                                                  if (!T(V))
                                                    throw new Error(
                                                      "Invalid CanActivate guard"
                                                    );
                                                  U = Ot(V(d, p));
                                                }
                                                return U.pipe(xt());
                                              })
                                            );
                                            return (0, Ee.of)(S).pipe(g());
                                          })(p, S.route, c)
                                        )
                                      ),
                                      xt((S) => !0 !== S, !0)
                                    );
                                  })(C, R, p, d)
                                : (0, Ee.of)(U)
                            ),
                            (0, ze.U)((U) =>
                              Object.assign(Object.assign({}, c), {
                                guardsResult: U,
                              })
                            )
                          );
                    });
                  })(this.ngModule.injector, (U) => this.triggerEvent(U)),
                  (0, nn.b)((U) => {
                    if (O(U.guardsResult)) {
                      const Ce = or(
                        `Redirecting to "${this.serializeUrl(U.guardsResult)}"`
                      );
                      throw ((Ce.url = U.guardsResult), Ce);
                    }
                    const X = new _r(
                      U.id,
                      this.serializeUrl(U.extractedUrl),
                      this.serializeUrl(U.urlAfterRedirects),
                      U.targetSnapshot,
                      !!U.guardsResult
                    );
                    this.triggerEvent(X);
                  }),
                  (0, jn.h)(
                    (U) =>
                      !!U.guardsResult ||
                      (this.restoreHistory(U),
                      this.cancelNavigationTransition(U, ""),
                      !1)
                  ),
                  Lo((U) => {
                    if (U.guards.canActivateChecks.length)
                      return (0, Ee.of)(U).pipe(
                        (0, nn.b)((X) => {
                          const Ce = new Tt(
                            X.id,
                            this.serializeUrl(X.extractedUrl),
                            this.serializeUrl(X.urlAfterRedirects),
                            X.targetSnapshot
                          );
                          this.triggerEvent(Ce);
                        }),
                        (0, _n.w)((X) => {
                          let Ce = !1;
                          return (0, Ee.of)(X).pipe(
                            (function (p, d) {
                              return (0, Je.zg)((c) => {
                                const {
                                  targetSnapshot: C,
                                  guards: { canActivateChecks: S },
                                } = c;
                                if (!S.length) return (0, Ee.of)(c);
                                let R = 0;
                                return (0, $e.D)(S).pipe(
                                  yr((V) =>
                                    (function (p, d, c, C) {
                                      return (function (p, d, c, C) {
                                        const S = Object.keys(p);
                                        if (0 === S.length)
                                          return (0, Ee.of)({});
                                        const R = {};
                                        return (0, $e.D)(S).pipe(
                                          (0, Je.zg)((V) =>
                                            (function (p, d, c, C) {
                                              const S = mi(p, d, C);
                                              return Ot(
                                                S.resolve
                                                  ? S.resolve(d, c)
                                                  : S(d, c)
                                              );
                                            })(p[V], d, c, C).pipe(
                                              (0, nn.b)((U) => {
                                                R[V] = U;
                                              })
                                            )
                                          ),
                                          es(1),
                                          (0, Je.zg)(() =>
                                            Object.keys(R).length === S.length
                                              ? (0, Ee.of)(R)
                                              : Me.E
                                          )
                                        );
                                      })(p._resolve, p, d, C).pipe(
                                        (0, ze.U)(
                                          (R) => (
                                            (p._resolvedData = R),
                                            (p.data = Object.assign(
                                              Object.assign({}, p.data),
                                              Lr(p, c).resolve
                                            )),
                                            null
                                          )
                                        )
                                      );
                                    })(V.route, C, p, d)
                                  ),
                                  (0, nn.b)(() => R++),
                                  es(1),
                                  (0, Je.zg)((V) =>
                                    R === S.length ? (0, Ee.of)(c) : Me.E
                                  )
                                );
                              });
                            })(
                              this.paramsInheritanceStrategy,
                              this.ngModule.injector
                            ),
                            (0, nn.b)({
                              next: () => (Ce = !0),
                              complete: () => {
                                Ce ||
                                  (this.restoreHistory(X),
                                  this.cancelNavigationTransition(
                                    X,
                                    "At least one route resolver didn't emit any value."
                                  ));
                              },
                            })
                          );
                        }),
                        (0, nn.b)((X) => {
                          const Ce = new Tn(
                            X.id,
                            this.serializeUrl(X.extractedUrl),
                            this.serializeUrl(X.urlAfterRedirects),
                            X.targetSnapshot
                          );
                          this.triggerEvent(Ce);
                        })
                      );
                  }),
                  Lo((U) => {
                    const {
                      targetSnapshot: X,
                      id: Ce,
                      extractedUrl: rt,
                      rawUrl: Te,
                      extras: { skipLocationChange: Dt, replaceUrl: lt },
                    } = U;
                    return this.hooks.afterPreactivation(X, {
                      navigationId: Ce,
                      appliedUrlTree: rt,
                      rawUrlTree: Te,
                      skipLocationChange: !!Dt,
                      replaceUrl: !!lt,
                    });
                  }),
                  (0, ze.U)((U) => {
                    const X = (function (p, d, c) {
                      const C = fi(p, d._root, c ? c._root : void 0);
                      return new Vn(C, d);
                    })(
                      this.routeReuseStrategy,
                      U.targetSnapshot,
                      U.currentRouterState
                    );
                    return Object.assign(Object.assign({}, U), {
                      targetRouterState: X,
                    });
                  }),
                  (0, nn.b)((U) => {
                    (this.currentUrlTree = U.urlAfterRedirects),
                      (this.rawUrlTree = this.urlHandlingStrategy.merge(
                        U.urlAfterRedirects,
                        U.rawUrl
                      )),
                      (this.routerState = U.targetRouterState),
                      "deferred" === this.urlUpdateStrategy &&
                        (U.extras.skipLocationChange ||
                          this.setBrowserUrl(this.rawUrlTree, U),
                        (this.browserUrlTree = U.urlAfterRedirects));
                  }),
                  ((p, d, c) =>
                    (0, ze.U)(
                      (C) => (
                        new fs(
                          d,
                          C.targetRouterState,
                          C.currentRouterState,
                          c
                        ).activate(p),
                        C
                      )
                    ))(this.rootContexts, this.routeReuseStrategy, (U) =>
                    this.triggerEvent(U)
                  ),
                  (0, nn.b)({
                    next() {
                      R = !0;
                    },
                    complete() {
                      R = !0;
                    },
                  }),
                  (function (p) {
                    return (d) => d.lift(new $n(p));
                  })(() => {
                    if (!R && !V) {
                      const U = `Navigation ID ${S.id} is not equal to the current navigation id ${this.navigationId}`;
                      "replace" === this.canceledNavigationResolution
                        ? (this.restoreHistory(S),
                          this.cancelNavigationTransition(S, U))
                        : this.cancelNavigationTransition(S, U);
                    }
                    this.currentNavigation = null;
                  }),
                  Ve((U) => {
                    if (
                      ((V = !0),
                      (function (p) {
                        return p && p[Cr];
                      })(U))
                    ) {
                      const X = O(U.url);
                      X || ((this.navigated = !0), this.restoreHistory(S, !0));
                      const Ce = new Pe(
                        S.id,
                        this.serializeUrl(S.extractedUrl),
                        U.message
                      );
                      C.next(Ce),
                        X
                          ? setTimeout(() => {
                              const rt = this.urlHandlingStrategy.merge(
                                  U.url,
                                  this.rawUrlTree
                                ),
                                Te = {
                                  skipLocationChange:
                                    S.extras.skipLocationChange,
                                  replaceUrl:
                                    "eager" === this.urlUpdateStrategy ||
                                    Ho(S.source),
                                };
                              this.scheduleNavigation(
                                rt,
                                "imperative",
                                null,
                                Te,
                                {
                                  resolve: S.resolve,
                                  reject: S.reject,
                                  promise: S.promise,
                                }
                              );
                            }, 0)
                          : S.resolve(!1);
                    } else {
                      this.restoreHistory(S, !0);
                      const X = new xe(
                        S.id,
                        this.serializeUrl(S.extractedUrl),
                        U
                      );
                      C.next(X);
                      try {
                        S.resolve(this.errorHandler(U));
                      } catch (Ce) {
                        S.reject(Ce);
                      }
                    }
                    return Me.E;
                  })
                );
              })
            );
          }
          resetRootComponentType(c) {
            (this.rootComponentType = c),
              (this.routerState.root.component = this.rootComponentType);
          }
          getTransition() {
            const c = this.transitions.value;
            return (c.urlAfterRedirects = this.browserUrlTree), c;
          }
          setTransition(c) {
            this.transitions.next(
              Object.assign(Object.assign({}, this.getTransition()), c)
            );
          }
          initialNavigation() {
            this.setUpLocationChangeListener(),
              0 === this.navigationId &&
                this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
          }
          setUpLocationChangeListener() {
            this.locationSubscription ||
              (this.locationSubscription = this.location.subscribe((c) => {
                const C = this.extractLocationChangeInfoFromEvent(c);
                this.shouldScheduleNavigation(this.lastLocationChangeInfo, C) &&
                  setTimeout(() => {
                    const { source: S, state: R, urlTree: V } = C,
                      U = { replaceUrl: !0 };
                    if (R) {
                      const X = Object.assign({}, R);
                      delete X.navigationId,
                        delete X.ɵrouterPageId,
                        0 !== Object.keys(X).length && (U.state = X);
                    }
                    this.scheduleNavigation(V, S, R, U);
                  }, 0),
                  (this.lastLocationChangeInfo = C);
              }));
          }
          extractLocationChangeInfoFromEvent(c) {
            var C;
            return {
              source: "popstate" === c.type ? "popstate" : "hashchange",
              urlTree: this.parseUrl(c.url),
              state: (
                null === (C = c.state) || void 0 === C ? void 0 : C.navigationId
              )
                ? c.state
                : null,
              transitionId: this.getTransition().id,
            };
          }
          shouldScheduleNavigation(c, C) {
            if (!c) return !0;
            const S = C.urlTree.toString() === c.urlTree.toString();
            return (
              C.transitionId !== c.transitionId ||
              !S ||
              !(
                ("hashchange" === C.source && "popstate" === c.source) ||
                ("popstate" === C.source && "hashchange" === c.source)
              )
            );
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.currentNavigation;
          }
          triggerEvent(c) {
            this.events.next(c);
          }
          resetConfig(c) {
            z(c),
              (this.config = c.map(it)),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.transitions.complete(),
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0)),
              (this.disposed = !0);
          }
          createUrlTree(c, C = {}) {
            const {
                relativeTo: S,
                queryParams: R,
                fragment: V,
                queryParamsHandling: U,
                preserveFragment: X,
              } = C,
              Ce = S || this.routerState.root,
              rt = X ? this.currentUrlTree.fragment : V;
            let Te = null;
            switch (U) {
              case "merge":
                Te = Object.assign(
                  Object.assign({}, this.currentUrlTree.queryParams),
                  R
                );
                break;
              case "preserve":
                Te = this.currentUrlTree.queryParams;
                break;
              default:
                Te = R || null;
            }
            return (
              null !== Te && (Te = this.removeEmptyProps(Te)),
              (function (p, d, c, C, S) {
                if (0 === c.length) return cr(d.root, d.root, d, C, S);
                const R = (function (p) {
                  if ("string" == typeof p[0] && 1 === p.length && "/" === p[0])
                    return new Sr(!0, 0, p);
                  let d = 0,
                    c = !1;
                  const C = p.reduce((S, R, V) => {
                    if ("object" == typeof R && null != R) {
                      if (R.outlets) {
                        const U = {};
                        return (
                          Vt(R.outlets, (X, Ce) => {
                            U[Ce] = "string" == typeof X ? X.split("/") : X;
                          }),
                          [...S, { outlets: U }]
                        );
                      }
                      if (R.segmentPath) return [...S, R.segmentPath];
                    }
                    return "string" != typeof R
                      ? [...S, R]
                      : 0 === V
                      ? (R.split("/").forEach((U, X) => {
                          (0 == X && "." === U) ||
                            (0 == X && "" === U
                              ? (c = !0)
                              : ".." === U
                              ? d++
                              : "" != U && S.push(U));
                        }),
                        S)
                      : [...S, R];
                  }, []);
                  return new Sr(c, d, C);
                })(c);
                if (R.toRoot()) return cr(d.root, new _e([], {}), d, C, S);
                const V = (function (p, d, c) {
                    if (p.isAbsolute) return new Ar(d.root, !0, 0);
                    if (-1 === c.snapshot._lastPathIndex) {
                      const R = c.snapshot._urlSegment;
                      return new Ar(R, R === d.root, 0);
                    }
                    const C = jr(p.commands[0]) ? 0 : 1;
                    return (function (p, d, c) {
                      let C = p,
                        S = d,
                        R = c;
                      for (; R > S; ) {
                        if (((R -= S), (C = C.parent), !C))
                          throw new Error("Invalid number of '../'");
                        S = C.segments.length;
                      }
                      return new Ar(C, !1, S - R);
                    })(
                      c.snapshot._urlSegment,
                      c.snapshot._lastPathIndex + C,
                      p.numberOfDoubleDots
                    );
                  })(R, d, p),
                  U = V.processChildren
                    ? Tr(V.segmentGroup, V.index, R.commands)
                    : Hr(V.segmentGroup, V.index, R.commands);
                return cr(V.segmentGroup, U, d, C, S);
              })(Ce, this.currentUrlTree, c, Te, null != rt ? rt : null)
            );
          }
          navigateByUrl(c, C = { skipLocationChange: !1 }) {
            const S = O(c) ? c : this.parseUrl(c),
              R = this.urlHandlingStrategy.merge(S, this.rawUrlTree);
            return this.scheduleNavigation(R, "imperative", null, C);
          }
          navigate(c, C = { skipLocationChange: !1 }) {
            return (
              (function (p) {
                for (let d = 0; d < p.length; d++) {
                  const c = p[d];
                  if (null == c)
                    throw new Error(
                      `The requested path contains ${c} segment at index ${d}`
                    );
                }
              })(c),
              this.navigateByUrl(this.createUrlTree(c, C), C)
            );
          }
          serializeUrl(c) {
            return this.urlSerializer.serialize(c);
          }
          parseUrl(c) {
            let C;
            try {
              C = this.urlSerializer.parse(c);
            } catch (S) {
              C = this.malformedUriErrorHandler(S, this.urlSerializer, c);
            }
            return C;
          }
          isActive(c, C) {
            let S;
            if (
              ((S =
                !0 === C
                  ? Object.assign({}, $s)
                  : !1 === C
                  ? Object.assign({}, Uo)
                  : C),
              O(c))
            )
              return xr(this.currentUrlTree, c, S);
            const R = this.parseUrl(c);
            return xr(this.currentUrlTree, R, S);
          }
          removeEmptyProps(c) {
            return Object.keys(c).reduce((C, S) => {
              const R = c[S];
              return null != R && (C[S] = R), C;
            }, {});
          }
          processNavigations() {
            this.navigations.subscribe(
              (c) => {
                (this.navigated = !0),
                  (this.lastSuccessfulId = c.id),
                  (this.currentPageId = c.targetPageId),
                  this.events.next(
                    new ht(
                      c.id,
                      this.serializeUrl(c.extractedUrl),
                      this.serializeUrl(this.currentUrlTree)
                    )
                  ),
                  (this.lastSuccessfulNavigation = this.currentNavigation),
                  c.resolve(!0);
              },
              (c) => {
                this.console.warn(`Unhandled Navigation Error: ${c}`);
              }
            );
          }
          scheduleNavigation(c, C, S, R, V) {
            var U, X;
            if (this.disposed) return Promise.resolve(!1);
            const Ce = this.getTransition(),
              rt = Ho(C) && Ce && !Ho(Ce.source),
              lt =
                (this.lastSuccessfulId === Ce.id || this.currentNavigation
                  ? Ce.rawUrl
                  : Ce.urlAfterRedirects
                ).toString() === c.toString();
            if (rt && lt) return Promise.resolve(!0);
            let qr, _s, Nr;
            V
              ? ((qr = V.resolve), (_s = V.reject), (Nr = V.promise))
              : (Nr = new Promise((Yr, va) => {
                  (qr = Yr), (_s = va);
                }));
            const Ct = ++this.navigationId;
            let Cs;
            return (
              "computed" === this.canceledNavigationResolution
                ? (0 === this.currentPageId && (S = this.location.getState()),
                  (Cs =
                    S && S.ɵrouterPageId
                      ? S.ɵrouterPageId
                      : R.replaceUrl || R.skipLocationChange
                      ? null !== (U = this.browserPageId) && void 0 !== U
                        ? U
                        : 0
                      : (null !== (X = this.browserPageId) && void 0 !== X
                          ? X
                          : 0) + 1))
                : (Cs = 0),
              this.setTransition({
                id: Ct,
                targetPageId: Cs,
                source: C,
                restoredState: S,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: c,
                extras: R,
                resolve: qr,
                reject: _s,
                promise: Nr,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              Nr.catch((Yr) => Promise.reject(Yr))
            );
          }
          setBrowserUrl(c, C) {
            const S = this.urlSerializer.serialize(c),
              R = Object.assign(
                Object.assign({}, C.extras.state),
                this.generateNgRouterState(C.id, C.targetPageId)
              );
            this.location.isCurrentPathEqualTo(S) || C.extras.replaceUrl
              ? this.location.replaceState(S, "", R)
              : this.location.go(S, "", R);
          }
          restoreHistory(c, C = !1) {
            var S, R;
            if ("computed" === this.canceledNavigationResolution) {
              const V = this.currentPageId - c.targetPageId;
              ("popstate" !== c.source &&
                "eager" !== this.urlUpdateStrategy &&
                this.currentUrlTree !==
                  (null === (S = this.currentNavigation) || void 0 === S
                    ? void 0
                    : S.finalUrl)) ||
              0 === V
                ? this.currentUrlTree ===
                    (null === (R = this.currentNavigation) || void 0 === R
                      ? void 0
                      : R.finalUrl) &&
                  0 === V &&
                  (this.resetState(c),
                  (this.browserUrlTree = c.currentUrlTree),
                  this.resetUrlToCurrentUrlTree())
                : this.location.historyGo(V);
            } else
              "replace" === this.canceledNavigationResolution &&
                (C && this.resetState(c), this.resetUrlToCurrentUrlTree());
          }
          resetState(c) {
            (this.routerState = c.currentRouterState),
              (this.currentUrlTree = c.currentUrlTree),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                this.currentUrlTree,
                c.rawUrl
              ));
          }
          resetUrlToCurrentUrlTree() {
            this.location.replaceState(
              this.urlSerializer.serialize(this.rawUrlTree),
              "",
              this.generateNgRouterState(
                this.lastSuccessfulId,
                this.currentPageId
              )
            );
          }
          cancelNavigationTransition(c, C) {
            const S = new Pe(c.id, this.serializeUrl(c.extractedUrl), C);
            this.triggerEvent(S), c.resolve(!1);
          }
          generateNgRouterState(c, C) {
            return "computed" === this.canceledNavigationResolution
              ? { navigationId: c, ɵrouterPageId: C }
              : { navigationId: c };
          }
        }
        return (
          (p.ɵfac = function (c) {
            return new (c || p)(
              N.LFG(N.DyG),
              N.LFG(Zt),
              N.LFG(Us),
              N.LFG(b.Ye),
              N.LFG(N.zs3),
              N.LFG(N.v3s),
              N.LFG(N.Sil),
              N.LFG(void 0)
            );
          }),
          (p.ɵprov = N.Yz7({ token: p, factory: p.ɵfac })),
          p
        );
      })();
      function Ho(p) {
        return "imperative" !== p;
      }
      let Ki = (() => {
        class p {
          constructor(c, C, S, R, V) {
            (this.parentContexts = c),
              (this.location = C),
              (this.resolver = S),
              (this.changeDetector = V),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new N.vpe()),
              (this.deactivateEvents = new N.vpe()),
              (this.name = R || ve),
              c.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const c = this.parentContexts.getContext(this.name);
              c &&
                c.route &&
                (c.attachRef
                  ? this.attach(c.attachRef, c.route)
                  : this.activateWith(c.route, c.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new Error("Outlet is not activated");
            this.location.detach();
            const c = this.activated;
            return (this.activated = null), (this._activatedRoute = null), c;
          }
          attach(c, C) {
            (this.activated = c),
              (this._activatedRoute = C),
              this.location.insert(c.hostView);
          }
          deactivate() {
            if (this.activated) {
              const c = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(c);
            }
          }
          activateWith(c, C) {
            if (this.isActivated)
              throw new Error("Cannot activate an already activated outlet");
            this._activatedRoute = c;
            const V = (C = C || this.resolver).resolveComponentFactory(
                c._futureSnapshot.routeConfig.component
              ),
              U = this.parentContexts.getOrCreateContext(this.name).children,
              X = new Qi(c, U, this.location.injector);
            (this.activated = this.location.createComponent(
              V,
              this.location.length,
              X
            )),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (p.ɵfac = function (c) {
            return new (c || p)(
              N.Y36(Us),
              N.Y36(N.s_b),
              N.Y36(N._Vd),
              N.$8M("name"),
              N.Y36(N.sBO)
            );
          }),
          (p.ɵdir = N.lG2({
            type: p,
            selectors: [["router-outlet"]],
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
            },
            exportAs: ["outlet"],
          })),
          p
        );
      })();
      class Qi {
        constructor(d, c, C) {
          (this.route = d), (this.childContexts = c), (this.parent = C);
        }
        get(d, c) {
          return d === qn
            ? this.route
            : d === Us
            ? this.childContexts
            : this.parent.get(d, c);
        }
      }
      class vi {}
      class Qn {
        preload(d, c) {
          return (0, Ee.of)(null);
        }
      }
      let Co = (() => {
          class p {
            constructor(c, C, S, R, V) {
              (this.router = c),
                (this.injector = R),
                (this.preloadingStrategy = V),
                (this.loader = new qi(
                  C,
                  S,
                  (Ce) => c.triggerEvent(new Pr(Ce)),
                  (Ce) => c.triggerEvent(new pt(Ce))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  (0, jn.h)((c) => c instanceof ht),
                  yr(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const c = this.injector.get(N.h0i);
              return this.processRoutes(c, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(c, C) {
              const S = [];
              for (const R of C)
                if (R.loadChildren && !R.canLoad && R._loadedConfig) {
                  const V = R._loadedConfig;
                  S.push(this.processRoutes(V.module, V.routes));
                } else
                  R.loadChildren && !R.canLoad
                    ? S.push(this.preloadConfig(c, R))
                    : R.children && S.push(this.processRoutes(c, R.children));
              return (0, $e.D)(S).pipe(
                (0, sr.J)(),
                (0, ze.U)((R) => {})
              );
            }
            preloadConfig(c, C) {
              return this.preloadingStrategy.preload(C, () =>
                (C._loadedConfig
                  ? (0, Ee.of)(C._loadedConfig)
                  : this.loader.load(c.injector, C)
                ).pipe(
                  (0, Je.zg)(
                    (R) => (
                      (C._loadedConfig = R),
                      this.processRoutes(R.module, R.routes)
                    )
                  )
                )
              );
            }
          }
          return (
            (p.ɵfac = function (c) {
              return new (c || p)(
                N.LFG(On),
                N.LFG(N.v3s),
                N.LFG(N.Sil),
                N.LFG(N.zs3),
                N.LFG(vi)
              );
            }),
            (p.ɵprov = N.Yz7({ token: p, factory: p.ɵfac })),
            p
          );
        })(),
        Ei = (() => {
          class p {
            constructor(c, C, S = {}) {
              (this.router = c),
                (this.viewportScroller = C),
                (this.options = S),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (S.scrollPositionRestoration =
                  S.scrollPositionRestoration || "disabled"),
                (S.anchorScrolling = S.anchorScrolling || "disabled");
            }
            init() {
              "disabled" !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration("manual"),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((c) => {
                c instanceof Cn
                  ? ((this.store[this.lastId] =
                      this.viewportScroller.getScrollPosition()),
                    (this.lastSource = c.navigationTrigger),
                    (this.restoredId = c.restoredState
                      ? c.restoredState.navigationId
                      : 0))
                  : c instanceof ht &&
                    ((this.lastId = c.id),
                    this.scheduleScrollEvent(
                      c,
                      this.router.parseUrl(c.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((c) => {
                c instanceof Mn &&
                  (c.position
                    ? "top" === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : "enabled" === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(c.position)
                    : c.anchor && "enabled" === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(c.anchor)
                    : "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(c, C) {
              this.router.triggerEvent(
                new Mn(
                  c,
                  "popstate" === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  C
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (p.ɵfac = function (c) {
              return new (c || p)(N.LFG(On), N.LFG(b.EM), N.LFG(void 0));
            }),
            (p.ɵprov = N.Yz7({ token: p, factory: p.ɵfac })),
            p
          );
        })();
      const ys = new N.OlP("ROUTER_CONFIGURATION"),
        vo = new N.OlP("ROUTER_FORROOT_GUARD"),
        ma = [
          b.Ye,
          { provide: Zt, useClass: dt },
          {
            provide: On,
            useFactory: function (p, d, c, C, S, R, V, U = {}, X, Ce) {
              const rt = new On(null, p, d, c, C, S, R, ci(V));
              return (
                X && (rt.urlHandlingStrategy = X),
                Ce && (rt.routeReuseStrategy = Ce),
                (function (p, d) {
                  p.errorHandler && (d.errorHandler = p.errorHandler),
                    p.malformedUriErrorHandler &&
                      (d.malformedUriErrorHandler = p.malformedUriErrorHandler),
                    p.onSameUrlNavigation &&
                      (d.onSameUrlNavigation = p.onSameUrlNavigation),
                    p.paramsInheritanceStrategy &&
                      (d.paramsInheritanceStrategy =
                        p.paramsInheritanceStrategy),
                    p.relativeLinkResolution &&
                      (d.relativeLinkResolution = p.relativeLinkResolution),
                    p.urlUpdateStrategy &&
                      (d.urlUpdateStrategy = p.urlUpdateStrategy);
                })(U, rt),
                U.enableTracing &&
                  rt.events.subscribe((Te) => {
                    var Dt, lt;
                    null === (Dt = console.group) ||
                      void 0 === Dt ||
                      Dt.call(console, `Router Event: ${Te.constructor.name}`),
                      console.log(Te.toString()),
                      console.log(Te),
                      null === (lt = console.groupEnd) ||
                        void 0 === lt ||
                        lt.call(console);
                  }),
                rt
              );
            },
            deps: [
              Zt,
              Us,
              b.Ye,
              N.zs3,
              N.v3s,
              N.Sil,
              js,
              ys,
              [class {}, new N.FiY()],
              [class {}, new N.FiY()],
            ],
          },
          Us,
          {
            provide: qn,
            useFactory: function (p) {
              return p.routerState.root;
            },
            deps: [On],
          },
          { provide: N.v3s, useClass: N.EAV },
          Co,
          Qn,
          class {
            preload(d, c) {
              return c().pipe(Ve(() => (0, Ee.of)(null)));
            }
          },
          { provide: ys, useValue: { enableTracing: !1 } },
        ];
      function Zi() {
        return new N.PXZ("Router", On);
      }
      let Ji = (() => {
        class p {
          constructor(c, C) {}
          static forRoot(c, C) {
            return {
              ngModule: p,
              providers: [
                ma,
                Wo(c),
                {
                  provide: vo,
                  useFactory: Xi,
                  deps: [[On, new N.FiY(), new N.tp0()]],
                },
                { provide: ys, useValue: C || {} },
                {
                  provide: b.S$,
                  useFactory: Do,
                  deps: [b.lw, [new N.tBr(b.mr), new N.FiY()], ys],
                },
                { provide: Ei, useFactory: Go, deps: [On, b.EM, ys] },
                {
                  provide: vi,
                  useExisting:
                    C && C.preloadingStrategy ? C.preloadingStrategy : Qn,
                },
                { provide: N.PXZ, multi: !0, useFactory: Zi },
                [
                  bo,
                  { provide: N.ip1, multi: !0, useFactory: ml, deps: [bo] },
                  { provide: Gs, useFactory: Ca, deps: [bo] },
                  { provide: N.tb, multi: !0, useExisting: Gs },
                ],
              ],
            };
          }
          static forChild(c) {
            return { ngModule: p, providers: [Wo(c)] };
          }
        }
        return (
          (p.ɵfac = function (c) {
            return new (c || p)(N.LFG(vo, 8), N.LFG(On, 8));
          }),
          (p.ɵmod = N.oAB({ type: p })),
          (p.ɵinj = N.cJS({})),
          p
        );
      })();
      function Go(p, d, c) {
        return c.scrollOffset && d.setOffset(c.scrollOffset), new Ei(p, d, c);
      }
      function Do(p, d, c = {}) {
        return c.useHash ? new b.Do(p, d) : new b.b0(p, d);
      }
      function Xi(p) {
        return "guarded";
      }
      function Wo(p) {
        return [
          { provide: N.deG, multi: !0, useValue: p },
          { provide: js, multi: !0, useValue: p },
        ];
      }
      let bo = (() => {
        class p {
          constructor(c) {
            (this.injector = c),
              (this.initNavigation = !1),
              (this.destroyed = !1),
              (this.resultOfPreactivationDone = new rr.xQ());
          }
          appInitializer() {
            return this.injector.get(b.V_, Promise.resolve(null)).then(() => {
              if (this.destroyed) return Promise.resolve(!0);
              let C = null;
              const S = new Promise((U) => (C = U)),
                R = this.injector.get(On),
                V = this.injector.get(ys);
              return (
                "disabled" === V.initialNavigation
                  ? (R.setUpLocationChangeListener(), C(!0))
                  : "enabled" === V.initialNavigation ||
                    "enabledBlocking" === V.initialNavigation
                  ? ((R.hooks.afterPreactivation = () =>
                      this.initNavigation
                        ? (0, Ee.of)(null)
                        : ((this.initNavigation = !0),
                          C(!0),
                          this.resultOfPreactivationDone)),
                    R.initialNavigation())
                  : C(!0),
                S
              );
            });
          }
          bootstrapListener(c) {
            const C = this.injector.get(ys),
              S = this.injector.get(Co),
              R = this.injector.get(Ei),
              V = this.injector.get(On),
              U = this.injector.get(N.z2F);
            c === U.components[0] &&
              (("enabledNonBlocking" === C.initialNavigation ||
                void 0 === C.initialNavigation) &&
                V.initialNavigation(),
              S.setUpPreloading(),
              R.init(),
              V.resetRootComponentType(U.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          ngOnDestroy() {
            this.destroyed = !0;
          }
        }
        return (
          (p.ɵfac = function (c) {
            return new (c || p)(N.LFG(N.zs3));
          }),
          (p.ɵprov = N.Yz7({ token: p, factory: p.ɵfac })),
          p
        );
      })();
      function ml(p) {
        return p.appInitializer.bind(p);
      }
      function Ca(p) {
        return p.bootstrapListener.bind(p);
      }
      const Gs = new N.OlP("Router Initializer");
    },
    6215: (Ue, le, j) => {
      "use strict";
      j.d(le, { X: () => fe });
      var b = j(9765),
        N = j(7971);
      class fe extends b.xQ {
        constructor(ie) {
          super(), (this._value = ie);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(ie) {
          const ne = super._subscribe(ie);
          return ne && !ne.closed && ie.next(this._value), ne;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new N.N();
          return this._value;
        }
        next(ie) {
          super.next((this._value = ie));
        }
      }
    },
    7574: (Ue, le, j) => {
      "use strict";
      j.d(le, { y: () => G });
      var b = j(7393),
        fe = j(9181),
        he = j(6490),
        ne = j(6554),
        de = j(4487);
      var W = j(2494);
      let G = (() => {
        class Z {
          constructor(De) {
            (this._isScalar = !1), De && (this._subscribe = De);
          }
          lift(De) {
            const pe = new Z();
            return (pe.source = this), (pe.operator = De), pe;
          }
          subscribe(De, pe, ae) {
            const { operator: $e } = this,
              Me = (function (Z, be, De) {
                if (Z) {
                  if (Z instanceof b.L) return Z;
                  if (Z[fe.b]) return Z[fe.b]();
                }
                return Z || be || De ? new b.L(Z, be, De) : new b.L(he.c);
              })(De, pe, ae);
            if (
              (Me.add(
                $e
                  ? $e.call(Me, this.source)
                  : this.source ||
                    (W.v.useDeprecatedSynchronousErrorHandling &&
                      !Me.syncErrorThrowable)
                  ? this._subscribe(Me)
                  : this._trySubscribe(Me)
              ),
              W.v.useDeprecatedSynchronousErrorHandling &&
                Me.syncErrorThrowable &&
                ((Me.syncErrorThrowable = !1), Me.syncErrorThrown))
            )
              throw Me.syncErrorValue;
            return Me;
          }
          _trySubscribe(De) {
            try {
              return this._subscribe(De);
            } catch (pe) {
              W.v.useDeprecatedSynchronousErrorHandling &&
                ((De.syncErrorThrown = !0), (De.syncErrorValue = pe)),
                (function (Z) {
                  for (; Z; ) {
                    const { closed: be, destination: De, isStopped: pe } = Z;
                    if (be || pe) return !1;
                    Z = De && De instanceof b.L ? De : null;
                  }
                  return !0;
                })(De)
                  ? De.error(pe)
                  : console.warn(pe);
            }
          }
          forEach(De, pe) {
            return new (pe = J(pe))((ae, $e) => {
              let Me;
              Me = this.subscribe(
                (gt) => {
                  try {
                    De(gt);
                  } catch (Ee) {
                    $e(Ee), Me && Me.unsubscribe();
                  }
                },
                $e,
                ae
              );
            });
          }
          _subscribe(De) {
            const { source: pe } = this;
            return pe && pe.subscribe(De);
          }
          [ne.L]() {
            return this;
          }
          pipe(...De) {
            return 0 === De.length
              ? this
              : (function (Z) {
                  return 0 === Z.length
                    ? de.y
                    : 1 === Z.length
                    ? Z[0]
                    : function (De) {
                        return Z.reduce((pe, ae) => ae(pe), De);
                      };
                })(De)(this);
          }
          toPromise(De) {
            return new (De = J(De))((pe, ae) => {
              let $e;
              this.subscribe(
                (Me) => ($e = Me),
                (Me) => ae(Me),
                () => pe($e)
              );
            });
          }
        }
        return (Z.create = (be) => new Z(be)), Z;
      })();
      function J(Z) {
        if ((Z || (Z = W.v.Promise || Promise), !Z))
          throw new Error("no Promise impl found");
        return Z;
      }
    },
    6490: (Ue, le, j) => {
      "use strict";
      j.d(le, { c: () => fe });
      var b = j(2494),
        N = j(4449);
      const fe = {
        closed: !0,
        next(he) {},
        error(he) {
          if (b.v.useDeprecatedSynchronousErrorHandling) throw he;
          (0, N.z)(he);
        },
        complete() {},
      };
    },
    9765: (Ue, le, j) => {
      "use strict";
      j.d(le, { Yc: () => de, xQ: () => re });
      var b = j(7574),
        N = j(7393),
        fe = j(5319),
        he = j(7971),
        ie = j(8858),
        ne = j(9181);
      class de extends N.L {
        constructor(G) {
          super(G), (this.destination = G);
        }
      }
      let re = (() => {
        class W extends b.y {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [ne.b]() {
            return new de(this);
          }
          lift(J) {
            const Z = new Q(this, this);
            return (Z.operator = J), Z;
          }
          next(J) {
            if (this.closed) throw new he.N();
            if (!this.isStopped) {
              const { observers: Z } = this,
                be = Z.length,
                De = Z.slice();
              for (let pe = 0; pe < be; pe++) De[pe].next(J);
            }
          }
          error(J) {
            if (this.closed) throw new he.N();
            (this.hasError = !0), (this.thrownError = J), (this.isStopped = !0);
            const { observers: Z } = this,
              be = Z.length,
              De = Z.slice();
            for (let pe = 0; pe < be; pe++) De[pe].error(J);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new he.N();
            this.isStopped = !0;
            const { observers: J } = this,
              Z = J.length,
              be = J.slice();
            for (let De = 0; De < Z; De++) be[De].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(J) {
            if (this.closed) throw new he.N();
            return super._trySubscribe(J);
          }
          _subscribe(J) {
            if (this.closed) throw new he.N();
            return this.hasError
              ? (J.error(this.thrownError), fe.w.EMPTY)
              : this.isStopped
              ? (J.complete(), fe.w.EMPTY)
              : (this.observers.push(J), new ie.W(this, J));
          }
          asObservable() {
            const J = new b.y();
            return (J.source = this), J;
          }
        }
        return (W.create = (G, J) => new Q(G, J)), W;
      })();
      class Q extends re {
        constructor(G, J) {
          super(), (this.destination = G), (this.source = J);
        }
        next(G) {
          const { destination: J } = this;
          J && J.next && J.next(G);
        }
        error(G) {
          const { destination: J } = this;
          J && J.error && this.destination.error(G);
        }
        complete() {
          const { destination: G } = this;
          G && G.complete && this.destination.complete();
        }
        _subscribe(G) {
          const { source: J } = this;
          return J ? this.source.subscribe(G) : fe.w.EMPTY;
        }
      }
    },
    8858: (Ue, le, j) => {
      "use strict";
      j.d(le, { W: () => N });
      var b = j(5319);
      class N extends b.w {
        constructor(he, ie) {
          super(),
            (this.subject = he),
            (this.subscriber = ie),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const he = this.subject,
            ie = he.observers;
          if (
            ((this.subject = null),
            !ie || 0 === ie.length || he.isStopped || he.closed)
          )
            return;
          const ne = ie.indexOf(this.subscriber);
          -1 !== ne && ie.splice(ne, 1);
        }
      }
    },
    7393: (Ue, le, j) => {
      "use strict";
      j.d(le, { L: () => de });
      var b = j(9105),
        N = j(6490),
        fe = j(5319),
        he = j(9181),
        ie = j(2494),
        ne = j(4449);
      class de extends fe.w {
        constructor(W, G, J) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = N.c;
              break;
            case 1:
              if (!W) {
                this.destination = N.c;
                break;
              }
              if ("object" == typeof W) {
                W instanceof de
                  ? ((this.syncErrorThrowable = W.syncErrorThrowable),
                    (this.destination = W),
                    W.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new re(this, W)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new re(this, W, G, J));
          }
        }
        [he.b]() {
          return this;
        }
        static create(W, G, J) {
          const Z = new de(W, G, J);
          return (Z.syncErrorThrowable = !1), Z;
        }
        next(W) {
          this.isStopped || this._next(W);
        }
        error(W) {
          this.isStopped || ((this.isStopped = !0), this._error(W));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(W) {
          this.destination.next(W);
        }
        _error(W) {
          this.destination.error(W), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: W } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = W),
            this
          );
        }
      }
      class re extends de {
        constructor(W, G, J, Z) {
          super(), (this._parentSubscriber = W);
          let be,
            De = this;
          (0, b.m)(G)
            ? (be = G)
            : G &&
              ((be = G.next),
              (J = G.error),
              (Z = G.complete),
              G !== N.c &&
                ((De = Object.create(G)),
                (0, b.m)(De.unsubscribe) && this.add(De.unsubscribe.bind(De)),
                (De.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = De),
            (this._next = be),
            (this._error = J),
            (this._complete = Z);
        }
        next(W) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: G } = this;
            ie.v.useDeprecatedSynchronousErrorHandling && G.syncErrorThrowable
              ? this.__tryOrSetError(G, this._next, W) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, W);
          }
        }
        error(W) {
          if (!this.isStopped) {
            const { _parentSubscriber: G } = this,
              { useDeprecatedSynchronousErrorHandling: J } = ie.v;
            if (this._error)
              J && G.syncErrorThrowable
                ? (this.__tryOrSetError(G, this._error, W), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, W), this.unsubscribe());
            else if (G.syncErrorThrowable)
              J
                ? ((G.syncErrorValue = W), (G.syncErrorThrown = !0))
                : (0, ne.z)(W),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), J)) throw W;
              (0, ne.z)(W);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: W } = this;
            if (this._complete) {
              const G = () => this._complete.call(this._context);
              ie.v.useDeprecatedSynchronousErrorHandling && W.syncErrorThrowable
                ? (this.__tryOrSetError(W, G), this.unsubscribe())
                : (this.__tryOrUnsub(G), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(W, G) {
          try {
            W.call(this._context, G);
          } catch (J) {
            if (
              (this.unsubscribe(), ie.v.useDeprecatedSynchronousErrorHandling)
            )
              throw J;
            (0, ne.z)(J);
          }
        }
        __tryOrSetError(W, G, J) {
          if (!ie.v.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            G.call(this._context, J);
          } catch (Z) {
            return ie.v.useDeprecatedSynchronousErrorHandling
              ? ((W.syncErrorValue = Z), (W.syncErrorThrown = !0), !0)
              : ((0, ne.z)(Z), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: W } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            W.unsubscribe();
        }
      }
    },
    5319: (Ue, le, j) => {
      "use strict";
      j.d(le, { w: () => ne });
      var b = j(9796),
        N = j(1555),
        fe = j(9105);
      const ie = (() => {
        function re(Q) {
          return (
            Error.call(this),
            (this.message = Q
              ? `${Q.length} errors occurred during unsubscription:\n${Q.map(
                  (W, G) => `${G + 1}) ${W.toString()}`
                ).join("\n  ")}`
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = Q),
            this
          );
        }
        return (re.prototype = Object.create(Error.prototype)), re;
      })();
      class ne {
        constructor(Q) {
          (this.closed = !1),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            Q && ((this._ctorUnsubscribe = !0), (this._unsubscribe = Q));
        }
        unsubscribe() {
          let Q;
          if (this.closed) return;
          let {
            _parentOrParents: W,
            _ctorUnsubscribe: G,
            _unsubscribe: J,
            _subscriptions: Z,
          } = this;
          if (
            ((this.closed = !0),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            W instanceof ne)
          )
            W.remove(this);
          else if (null !== W)
            for (let be = 0; be < W.length; ++be) W[be].remove(this);
          if ((0, fe.m)(J)) {
            G && (this._unsubscribe = void 0);
            try {
              J.call(this);
            } catch (be) {
              Q = be instanceof ie ? de(be.errors) : [be];
            }
          }
          if ((0, b.k)(Z)) {
            let be = -1,
              De = Z.length;
            for (; ++be < De; ) {
              const pe = Z[be];
              if ((0, N.K)(pe))
                try {
                  pe.unsubscribe();
                } catch (ae) {
                  (Q = Q || []),
                    ae instanceof ie
                      ? (Q = Q.concat(de(ae.errors)))
                      : Q.push(ae);
                }
            }
          }
          if (Q) throw new ie(Q);
        }
        add(Q) {
          let W = Q;
          if (!Q) return ne.EMPTY;
          switch (typeof Q) {
            case "function":
              W = new ne(Q);
            case "object":
              if (W === this || W.closed || "function" != typeof W.unsubscribe)
                return W;
              if (this.closed) return W.unsubscribe(), W;
              if (!(W instanceof ne)) {
                const Z = W;
                (W = new ne()), (W._subscriptions = [Z]);
              }
              break;
            default:
              throw new Error(
                "unrecognized teardown " + Q + " added to Subscription."
              );
          }
          let { _parentOrParents: G } = W;
          if (null === G) W._parentOrParents = this;
          else if (G instanceof ne) {
            if (G === this) return W;
            W._parentOrParents = [G, this];
          } else {
            if (-1 !== G.indexOf(this)) return W;
            G.push(this);
          }
          const J = this._subscriptions;
          return null === J ? (this._subscriptions = [W]) : J.push(W), W;
        }
        remove(Q) {
          const W = this._subscriptions;
          if (W) {
            const G = W.indexOf(Q);
            -1 !== G && W.splice(G, 1);
          }
        }
      }
      var re;
      function de(re) {
        return re.reduce(
          (Q, W) => Q.concat(W instanceof ie ? W.errors : W),
          []
        );
      }
      ne.EMPTY = (((re = new ne()).closed = !0), re);
    },
    2494: (Ue, le, j) => {
      "use strict";
      j.d(le, { v: () => N });
      let b = !1;
      const N = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(fe) {
          if (fe) {
            const he = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                he.stack
            );
          } else
            b &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          b = fe;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return b;
        },
      };
    },
    5345: (Ue, le, j) => {
      "use strict";
      j.d(le, { IY: () => he, Ds: () => ne, ft: () => re });
      var b = j(7393),
        N = j(7574),
        fe = j(7444);
      class he extends b.L {
        constructor(W) {
          super(), (this.parent = W);
        }
        _next(W) {
          this.parent.notifyNext(W);
        }
        _error(W) {
          this.parent.notifyError(W), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class ne extends b.L {
        notifyNext(W) {
          this.destination.next(W);
        }
        notifyError(W) {
          this.destination.error(W);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function re(Q, W) {
        if (W.closed) return;
        if (Q instanceof N.y) return Q.subscribe(W);
        let G;
        try {
          G = (0, fe.s)(Q)(W);
        } catch (J) {
          W.error(J);
        }
        return G;
      }
    },
    2441: (Ue, le, j) => {
      "use strict";
      j.d(le, { c: () => ie, N: () => ne });
      var b = j(9765),
        N = j(7574),
        fe = j(5319),
        he = j(1307);
      class ie extends N.y {
        constructor(G, J) {
          super(),
            (this.source = G),
            (this.subjectFactory = J),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(G) {
          return this.getSubject().subscribe(G);
        }
        getSubject() {
          const G = this._subject;
          return (
            (!G || G.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let G = this._connection;
          return (
            G ||
              ((this._isComplete = !1),
              (G = this._connection = new fe.w()),
              G.add(this.source.subscribe(new de(this.getSubject(), this))),
              G.closed && ((this._connection = null), (G = fe.w.EMPTY))),
            G
          );
        }
        refCount() {
          return (0, he.x)()(this);
        }
      }
      const ne = (() => {
        const W = ie.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: W._subscribe },
          _isComplete: { value: W._isComplete, writable: !0 },
          getSubject: { value: W.getSubject },
          connect: { value: W.connect },
          refCount: { value: W.refCount },
        };
      })();
      class de extends b.Yc {
        constructor(G, J) {
          super(G), (this.connectable = J);
        }
        _error(G) {
          this._unsubscribe(), super._error(G);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const G = this.connectable;
          if (G) {
            this.connectable = null;
            const J = G._connection;
            (G._refCount = 0),
              (G._subject = null),
              (G._connection = null),
              J && J.unsubscribe();
          }
        }
      }
    },
    8071: (Ue, le, j) => {
      "use strict";
      j.d(le, { z: () => he });
      var b = j(5917),
        N = j(3282);
      function he(...ie) {
        return (0, N.J)(1)((0, b.of)(...ie));
      }
    },
    9193: (Ue, le, j) => {
      "use strict";
      j.d(le, { E: () => N, c: () => fe });
      var b = j(7574);
      const N = new b.y((ie) => ie.complete());
      function fe(ie) {
        return ie
          ? (function (ie) {
              return new b.y((ne) => ie.schedule(() => ne.complete()));
            })(ie)
          : N;
      }
    },
    4402: (Ue, le, j) => {
      "use strict";
      j.d(le, { D: () => De });
      var b = j(7574),
        N = j(7444),
        fe = j(5319),
        he = j(6554),
        de = j(4087),
        re = j(377),
        G = j(4072),
        J = j(9489);
      function De(pe, ae) {
        return ae
          ? (function (pe, ae) {
              if (null != pe) {
                if (
                  (function (pe) {
                    return pe && "function" == typeof pe[he.L];
                  })(pe)
                )
                  return (function (pe, ae) {
                    return new b.y(($e) => {
                      const Me = new fe.w();
                      return (
                        Me.add(
                          ae.schedule(() => {
                            const gt = pe[he.L]();
                            Me.add(
                              gt.subscribe({
                                next(Ee) {
                                  Me.add(ae.schedule(() => $e.next(Ee)));
                                },
                                error(Ee) {
                                  Me.add(ae.schedule(() => $e.error(Ee)));
                                },
                                complete() {
                                  Me.add(ae.schedule(() => $e.complete()));
                                },
                              })
                            );
                          })
                        ),
                        Me
                      );
                    });
                  })(pe, ae);
                if ((0, G.t)(pe))
                  return (function (pe, ae) {
                    return new b.y(($e) => {
                      const Me = new fe.w();
                      return (
                        Me.add(
                          ae.schedule(() =>
                            pe.then(
                              (gt) => {
                                Me.add(
                                  ae.schedule(() => {
                                    $e.next(gt),
                                      Me.add(ae.schedule(() => $e.complete()));
                                  })
                                );
                              },
                              (gt) => {
                                Me.add(ae.schedule(() => $e.error(gt)));
                              }
                            )
                          )
                        ),
                        Me
                      );
                    });
                  })(pe, ae);
                if ((0, J.z)(pe)) return (0, de.r)(pe, ae);
                if (
                  (function (pe) {
                    return pe && "function" == typeof pe[re.hZ];
                  })(pe) ||
                  "string" == typeof pe
                )
                  return (function (pe, ae) {
                    if (!pe) throw new Error("Iterable cannot be null");
                    return new b.y(($e) => {
                      const Me = new fe.w();
                      let gt;
                      return (
                        Me.add(() => {
                          gt && "function" == typeof gt.return && gt.return();
                        }),
                        Me.add(
                          ae.schedule(() => {
                            (gt = pe[re.hZ]()),
                              Me.add(
                                ae.schedule(function () {
                                  if ($e.closed) return;
                                  let Ee, mt;
                                  try {
                                    const Oe = gt.next();
                                    (Ee = Oe.value), (mt = Oe.done);
                                  } catch (Oe) {
                                    return void $e.error(Oe);
                                  }
                                  mt
                                    ? $e.complete()
                                    : ($e.next(Ee), this.schedule());
                                })
                              );
                          })
                        ),
                        Me
                      );
                    });
                  })(pe, ae);
              }
              throw new TypeError(
                ((null !== pe && typeof pe) || pe) + " is not observable"
              );
            })(pe, ae)
          : pe instanceof b.y
          ? pe
          : new b.y((0, N.s)(pe));
      }
    },
    6693: (Ue, le, j) => {
      "use strict";
      j.d(le, { n: () => he });
      var b = j(7574),
        N = j(5015),
        fe = j(4087);
      function he(ie, ne) {
        return ne ? (0, fe.r)(ie, ne) : new b.y((0, N.V)(ie));
      }
    },
    6682: (Ue, le, j) => {
      "use strict";
      j.d(le, { T: () => ie });
      var b = j(7574),
        N = j(4869),
        fe = j(3282),
        he = j(6693);
      function ie(...ne) {
        let de = Number.POSITIVE_INFINITY,
          re = null,
          Q = ne[ne.length - 1];
        return (
          (0, N.K)(Q)
            ? ((re = ne.pop()),
              ne.length > 1 &&
                "number" == typeof ne[ne.length - 1] &&
                (de = ne.pop()))
            : "number" == typeof Q && (de = ne.pop()),
          null === re && 1 === ne.length && ne[0] instanceof b.y
            ? ne[0]
            : (0, fe.J)(de)((0, he.n)(ne, re))
        );
      }
    },
    5917: (Ue, le, j) => {
      "use strict";
      j.d(le, { of: () => he });
      var b = j(4869),
        N = j(6693),
        fe = j(4087);
      function he(...ie) {
        let ne = ie[ie.length - 1];
        return (0, b.K)(ne) ? (ie.pop(), (0, fe.r)(ie, ne)) : (0, N.n)(ie);
      }
    },
    5435: (Ue, le, j) => {
      "use strict";
      j.d(le, { h: () => N });
      var b = j(7393);
      function N(ie, ne) {
        return function (re) {
          return re.lift(new fe(ie, ne));
        };
      }
      class fe {
        constructor(ne, de) {
          (this.predicate = ne), (this.thisArg = de);
        }
        call(ne, de) {
          return de.subscribe(new he(ne, this.predicate, this.thisArg));
        }
      }
      class he extends b.L {
        constructor(ne, de, re) {
          super(ne),
            (this.predicate = de),
            (this.thisArg = re),
            (this.count = 0);
        }
        _next(ne) {
          let de;
          try {
            de = this.predicate.call(this.thisArg, ne, this.count++);
          } catch (re) {
            return void this.destination.error(re);
          }
          de && this.destination.next(ne);
        }
      }
    },
    8002: (Ue, le, j) => {
      "use strict";
      j.d(le, { U: () => N });
      var b = j(7393);
      function N(ie, ne) {
        return function (re) {
          if ("function" != typeof ie)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return re.lift(new fe(ie, ne));
        };
      }
      class fe {
        constructor(ne, de) {
          (this.project = ne), (this.thisArg = de);
        }
        call(ne, de) {
          return de.subscribe(new he(ne, this.project, this.thisArg));
        }
      }
      class he extends b.L {
        constructor(ne, de, re) {
          super(ne),
            (this.project = de),
            (this.count = 0),
            (this.thisArg = re || this);
        }
        _next(ne) {
          let de;
          try {
            de = this.project.call(this.thisArg, ne, this.count++);
          } catch (re) {
            return void this.destination.error(re);
          }
          this.destination.next(de);
        }
      }
    },
    3282: (Ue, le, j) => {
      "use strict";
      j.d(le, { J: () => fe });
      var b = j(9773),
        N = j(4487);
      function fe(he = Number.POSITIVE_INFINITY) {
        return (0, b.zg)(N.y, he);
      }
    },
    9773: (Ue, le, j) => {
      "use strict";
      j.d(le, { zg: () => he });
      var b = j(8002),
        N = j(4402),
        fe = j(5345);
      function he(re, Q, W = Number.POSITIVE_INFINITY) {
        return "function" == typeof Q
          ? (G) =>
              G.pipe(
                he(
                  (J, Z) =>
                    (0, N.D)(re(J, Z)).pipe(
                      (0, b.U)((be, De) => Q(J, be, Z, De))
                    ),
                  W
                )
              )
          : ("number" == typeof Q && (W = Q), (G) => G.lift(new ie(re, W)));
      }
      class ie {
        constructor(Q, W = Number.POSITIVE_INFINITY) {
          (this.project = Q), (this.concurrent = W);
        }
        call(Q, W) {
          return W.subscribe(new ne(Q, this.project, this.concurrent));
        }
      }
      class ne extends fe.Ds {
        constructor(Q, W, G = Number.POSITIVE_INFINITY) {
          super(Q),
            (this.project = W),
            (this.concurrent = G),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(Q) {
          this.active < this.concurrent
            ? this._tryNext(Q)
            : this.buffer.push(Q);
        }
        _tryNext(Q) {
          let W;
          const G = this.index++;
          try {
            W = this.project(Q, G);
          } catch (J) {
            return void this.destination.error(J);
          }
          this.active++, this._innerSub(W);
        }
        _innerSub(Q) {
          const W = new fe.IY(this),
            G = this.destination;
          G.add(W);
          const J = (0, fe.ft)(Q, W);
          J !== W && G.add(J);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(Q) {
          this.destination.next(Q);
        }
        notifyComplete() {
          const Q = this.buffer;
          this.active--,
            Q.length > 0
              ? this._next(Q.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
    },
    1307: (Ue, le, j) => {
      "use strict";
      j.d(le, { x: () => N });
      var b = j(7393);
      function N() {
        return function (ne) {
          return ne.lift(new fe(ne));
        };
      }
      class fe {
        constructor(ne) {
          this.connectable = ne;
        }
        call(ne, de) {
          const { connectable: re } = this;
          re._refCount++;
          const Q = new he(ne, re),
            W = de.subscribe(Q);
          return Q.closed || (Q.connection = re.connect()), W;
        }
      }
      class he extends b.L {
        constructor(ne, de) {
          super(ne), (this.connectable = de);
        }
        _unsubscribe() {
          const { connectable: ne } = this;
          if (!ne) return void (this.connection = null);
          this.connectable = null;
          const de = ne._refCount;
          if (de <= 0) return void (this.connection = null);
          if (((ne._refCount = de - 1), de > 1))
            return void (this.connection = null);
          const { connection: re } = this,
            Q = ne._connection;
          (this.connection = null), Q && (!re || Q === re) && Q.unsubscribe();
        }
      }
    },
    9761: (Ue, le, j) => {
      "use strict";
      j.d(le, { O: () => fe });
      var b = j(8071),
        N = j(4869);
      function fe(...he) {
        const ie = he[he.length - 1];
        return (0, N.K)(ie)
          ? (he.pop(), (ne) => (0, b.z)(he, ne, ie))
          : (ne) => (0, b.z)(he, ne);
      }
    },
    3190: (Ue, le, j) => {
      "use strict";
      j.d(le, { w: () => he });
      var b = j(8002),
        N = j(4402),
        fe = j(5345);
      function he(de, re) {
        return "function" == typeof re
          ? (Q) =>
              Q.pipe(
                he((W, G) =>
                  (0, N.D)(de(W, G)).pipe((0, b.U)((J, Z) => re(W, J, G, Z)))
                )
              )
          : (Q) => Q.lift(new ie(de));
      }
      class ie {
        constructor(re) {
          this.project = re;
        }
        call(re, Q) {
          return Q.subscribe(new ne(re, this.project));
        }
      }
      class ne extends fe.Ds {
        constructor(re, Q) {
          super(re), (this.project = Q), (this.index = 0);
        }
        _next(re) {
          let Q;
          const W = this.index++;
          try {
            Q = this.project(re, W);
          } catch (G) {
            return void this.destination.error(G);
          }
          this._innerSub(Q);
        }
        _innerSub(re) {
          const Q = this.innerSubscription;
          Q && Q.unsubscribe();
          const W = new fe.IY(this),
            G = this.destination;
          G.add(W),
            (this.innerSubscription = (0, fe.ft)(re, W)),
            this.innerSubscription !== W && G.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: re } = this;
          (!re || re.closed) && super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(re) {
          this.destination.next(re);
        }
      }
    },
    5257: (Ue, le, j) => {
      "use strict";
      j.d(le, { q: () => he });
      var b = j(7393),
        N = j(7108),
        fe = j(9193);
      function he(de) {
        return (re) => (0 === de ? (0, fe.c)() : re.lift(new ie(de)));
      }
      class ie {
        constructor(re) {
          if (((this.total = re), this.total < 0)) throw new N.W();
        }
        call(re, Q) {
          return Q.subscribe(new ne(re, this.total));
        }
      }
      class ne extends b.L {
        constructor(re, Q) {
          super(re), (this.total = Q), (this.count = 0);
        }
        _next(re) {
          const Q = this.total,
            W = ++this.count;
          W <= Q &&
            (this.destination.next(re),
            W === Q && (this.destination.complete(), this.unsubscribe()));
        }
      }
    },
    3342: (Ue, le, j) => {
      "use strict";
      j.d(le, { b: () => he });
      var b = j(7393);
      function N() {}
      var fe = j(9105);
      function he(de, re, Q) {
        return function (G) {
          return G.lift(new ie(de, re, Q));
        };
      }
      class ie {
        constructor(re, Q, W) {
          (this.nextOrObserver = re), (this.error = Q), (this.complete = W);
        }
        call(re, Q) {
          return Q.subscribe(
            new ne(re, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class ne extends b.L {
        constructor(re, Q, W, G) {
          super(re),
            (this._tapNext = N),
            (this._tapError = N),
            (this._tapComplete = N),
            (this._tapError = W || N),
            (this._tapComplete = G || N),
            (0, fe.m)(Q)
              ? ((this._context = this), (this._tapNext = Q))
              : Q &&
                ((this._context = Q),
                (this._tapNext = Q.next || N),
                (this._tapError = Q.error || N),
                (this._tapComplete = Q.complete || N));
        }
        _next(re) {
          try {
            this._tapNext.call(this._context, re);
          } catch (Q) {
            return void this.destination.error(Q);
          }
          this.destination.next(re);
        }
        _error(re) {
          try {
            this._tapError.call(this._context, re);
          } catch (Q) {
            return void this.destination.error(Q);
          }
          this.destination.error(re);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (re) {
            return void this.destination.error(re);
          }
          return this.destination.complete();
        }
      }
    },
    4087: (Ue, le, j) => {
      "use strict";
      j.d(le, { r: () => fe });
      var b = j(7574),
        N = j(5319);
      function fe(he, ie) {
        return new b.y((ne) => {
          const de = new N.w();
          let re = 0;
          return (
            de.add(
              ie.schedule(function () {
                re !== he.length
                  ? (ne.next(he[re++]), ne.closed || de.add(this.schedule()))
                  : ne.complete();
              })
            ),
            de
          );
        });
      }
    },
    377: (Ue, le, j) => {
      "use strict";
      j.d(le, { hZ: () => N });
      const N =
        "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
    },
    6554: (Ue, le, j) => {
      "use strict";
      j.d(le, { L: () => b });
      const b =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    9181: (Ue, le, j) => {
      "use strict";
      j.d(le, { b: () => b });
      const b =
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random();
    },
    7108: (Ue, le, j) => {
      "use strict";
      j.d(le, { W: () => N });
      const N = (() => {
        function fe() {
          return (
            Error.call(this),
            (this.message = "argument out of range"),
            (this.name = "ArgumentOutOfRangeError"),
            this
          );
        }
        return (fe.prototype = Object.create(Error.prototype)), fe;
      })();
    },
    7971: (Ue, le, j) => {
      "use strict";
      j.d(le, { N: () => N });
      const N = (() => {
        function fe() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (fe.prototype = Object.create(Error.prototype)), fe;
      })();
    },
    4449: (Ue, le, j) => {
      "use strict";
      function b(N) {
        setTimeout(() => {
          throw N;
        }, 0);
      }
      j.d(le, { z: () => b });
    },
    4487: (Ue, le, j) => {
      "use strict";
      function b(N) {
        return N;
      }
      j.d(le, { y: () => b });
    },
    9796: (Ue, le, j) => {
      "use strict";
      j.d(le, { k: () => b });
      const b = Array.isArray || ((N) => N && "number" == typeof N.length);
    },
    9489: (Ue, le, j) => {
      "use strict";
      j.d(le, { z: () => b });
      const b = (N) =>
        N && "number" == typeof N.length && "function" != typeof N;
    },
    9105: (Ue, le, j) => {
      "use strict";
      function b(N) {
        return "function" == typeof N;
      }
      j.d(le, { m: () => b });
    },
    1555: (Ue, le, j) => {
      "use strict";
      function b(N) {
        return null !== N && "object" == typeof N;
      }
      j.d(le, { K: () => b });
    },
    4072: (Ue, le, j) => {
      "use strict";
      function b(N) {
        return (
          !!N && "function" != typeof N.subscribe && "function" == typeof N.then
        );
      }
      j.d(le, { t: () => b });
    },
    4869: (Ue, le, j) => {
      "use strict";
      function b(N) {
        return N && "function" == typeof N.schedule;
      }
      j.d(le, { K: () => b });
    },
    7444: (Ue, le, j) => {
      "use strict";
      j.d(le, { s: () => G });
      var b = j(5015),
        N = j(4449),
        he = j(377),
        ne = j(6554),
        re = j(9489),
        Q = j(4072),
        W = j(1555);
      const G = (J) => {
        if (J && "function" == typeof J[ne.L])
          return ((J) => (Z) => {
            const be = J[ne.L]();
            if ("function" != typeof be.subscribe)
              throw new TypeError(
                "Provided object does not correctly implement Symbol.observable"
              );
            return be.subscribe(Z);
          })(J);
        if ((0, re.z)(J)) return (0, b.V)(J);
        if ((0, Q.t)(J))
          return (
            (J) => (Z) =>
              J.then(
                (be) => {
                  Z.closed || (Z.next(be), Z.complete());
                },
                (be) => Z.error(be)
              ).then(null, N.z),
              Z
          )(J);
        if (J && "function" == typeof J[he.hZ])
          return ((J) => (Z) => {
            const be = J[he.hZ]();
            for (;;) {
              let De;
              try {
                De = be.next();
              } catch (pe) {
                return Z.error(pe), Z;
              }
              if (De.done) {
                Z.complete();
                break;
              }
              if ((Z.next(De.value), Z.closed)) break;
            }
            return (
              "function" == typeof be.return &&
                Z.add(() => {
                  be.return && be.return();
                }),
              Z
            );
          })(J);
        {
          const be = `You provided ${
            (0, W.K)(J) ? "an invalid object" : `'${J}'`
          } where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;
          throw new TypeError(be);
        }
      };
    },
    5015: (Ue, le, j) => {
      "use strict";
      j.d(le, { V: () => b });
      const b = (N) => (fe) => {
        for (let he = 0, ie = N.length; he < ie && !fe.closed; he++)
          fe.next(N[he]);
        fe.complete();
      };
    },
    2320: (Ue, le, j) => {
      "use strict";
      var b = j(8583),
        N = j(3018);
      class fe extends b.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class he extends fe {
        static makeCurrent() {
          (0, b.HT)(new he());
        }
        onAndCancel(o, l, f) {
          return (
            o.addEventListener(l, f, !1),
            () => {
              o.removeEventListener(l, f, !1);
            }
          );
        }
        dispatchEvent(o, l) {
          o.dispatchEvent(l);
        }
        remove(o) {
          o.parentNode && o.parentNode.removeChild(o);
        }
        createElement(o, l) {
          return (l = l || this.getDefaultDocument()).createElement(o);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(o) {
          return o.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(o) {
          return o instanceof DocumentFragment;
        }
        getGlobalEventTarget(o, l) {
          return "window" === l
            ? window
            : "document" === l
            ? o
            : "body" === l
            ? o.body
            : null;
        }
        getBaseHref(o) {
          const l =
            ((ie = ie || document.querySelector("base")),
            ie ? ie.getAttribute("href") : null);
          return null == l
            ? null
            : (function (m) {
                (de = de || document.createElement("a")),
                  de.setAttribute("href", m);
                const o = de.pathname;
                return "/" === o.charAt(0) ? o : `/${o}`;
              })(l);
        }
        resetBaseElement() {
          ie = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(o) {
          return (0, b.Mx)(document.cookie, o);
        }
      }
      let de,
        ie = null;
      const Q = new N.OlP("TRANSITION_ID"),
        G = [
          {
            provide: N.ip1,
            useFactory: function (m, o, l) {
              return () => {
                l.get(N.CZH).donePromise.then(() => {
                  const f = (0, b.q)(),
                    w = o.querySelectorAll(`style[ng-transition="${m}"]`);
                  for (let M = 0; M < w.length; M++) f.remove(w[M]);
                });
              };
            },
            deps: [Q, b.K0, N.zs3],
            multi: !0,
          },
        ];
      class J {
        static init() {
          (0, N.VLi)(new J());
        }
        addToWindow(o) {
          (N.dqk.getAngularTestability = (f, w = !0) => {
            const M = o.findTestabilityInTree(f, w);
            if (null == M)
              throw new Error("Could not find testability for element.");
            return M;
          }),
            (N.dqk.getAllAngularTestabilities = () => o.getAllTestabilities()),
            (N.dqk.getAllAngularRootElements = () => o.getAllRootElements()),
            N.dqk.frameworkStabilizers || (N.dqk.frameworkStabilizers = []),
            N.dqk.frameworkStabilizers.push((f) => {
              const w = N.dqk.getAllAngularTestabilities();
              let M = w.length,
                x = !1;
              const k = function (H) {
                (x = x || H), M--, 0 == M && f(x);
              };
              w.forEach(function (H) {
                H.whenStable(k);
              });
            });
        }
        findTestabilityInTree(o, l, f) {
          if (null == l) return null;
          const w = o.getTestability(l);
          return null != w
            ? w
            : f
            ? (0, b.q)().isShadowRoot(l)
              ? this.findTestabilityInTree(o, l.host, !0)
              : this.findTestabilityInTree(o, l.parentElement, !0)
            : null;
        }
      }
      let Z = (() => {
        class m {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (m.ɵfac = function (l) {
            return new (l || m)();
          }),
          (m.ɵprov = N.Yz7({ token: m, factory: m.ɵfac })),
          m
        );
      })();
      const Ge = new N.OlP("EventManagerPlugins");
      let Ve = (() => {
        class m {
          constructor(l, f) {
            (this._zone = f),
              (this._eventNameToPlugin = new Map()),
              l.forEach((w) => (w.manager = this)),
              (this._plugins = l.slice().reverse());
          }
          addEventListener(l, f, w) {
            return this._findPluginFor(f).addEventListener(l, f, w);
          }
          addGlobalEventListener(l, f, w) {
            return this._findPluginFor(f).addGlobalEventListener(l, f, w);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(l) {
            const f = this._eventNameToPlugin.get(l);
            if (f) return f;
            const w = this._plugins;
            for (let M = 0; M < w.length; M++) {
              const x = w[M];
              if (x.supports(l)) return this._eventNameToPlugin.set(l, x), x;
            }
            throw new Error(`No event manager plugin found for event ${l}`);
          }
        }
        return (
          (m.ɵfac = function (l) {
            return new (l || m)(N.LFG(Ge), N.LFG(N.R0b));
          }),
          (m.ɵprov = N.Yz7({ token: m, factory: m.ɵfac })),
          m
        );
      })();
      class ct {
        constructor(o) {
          this._doc = o;
        }
        addGlobalEventListener(o, l, f) {
          const w = (0, b.q)().getGlobalEventTarget(this._doc, o);
          if (!w)
            throw new Error(`Unsupported event target ${w} for event ${l}`);
          return this.addEventListener(w, l, f);
        }
      }
      let Ie = (() => {
          class m {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(l) {
              const f = new Set();
              l.forEach((w) => {
                this._stylesSet.has(w) || (this._stylesSet.add(w), f.add(w));
              }),
                this.onStylesAdded(f);
            }
            onStylesAdded(l) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (m.ɵfac = function (l) {
              return new (l || m)();
            }),
            (m.ɵprov = N.Yz7({ token: m, factory: m.ɵfac })),
            m
          );
        })(),
        Je = (() => {
          class m extends Ie {
            constructor(l) {
              super(),
                (this._doc = l),
                (this._hostNodes = new Map()),
                this._hostNodes.set(l.head, []);
            }
            _addStylesToHost(l, f, w) {
              l.forEach((M) => {
                const x = this._doc.createElement("style");
                (x.textContent = M), w.push(f.appendChild(x));
              });
            }
            addHost(l) {
              const f = [];
              this._addStylesToHost(this._stylesSet, l, f),
                this._hostNodes.set(l, f);
            }
            removeHost(l) {
              const f = this._hostNodes.get(l);
              f && f.forEach(yr), this._hostNodes.delete(l);
            }
            onStylesAdded(l) {
              this._hostNodes.forEach((f, w) => {
                this._addStylesToHost(l, w, f);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((l) => l.forEach(yr));
            }
          }
          return (
            (m.ɵfac = function (l) {
              return new (l || m)(N.LFG(b.K0));
            }),
            (m.ɵprov = N.Yz7({ token: m, factory: m.ɵfac })),
            m
          );
        })();
      function yr(m) {
        (0, b.q)().remove(m);
      }
      const jn = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        Ms = /%COMP%/g;
      function Xe(m, o, l) {
        for (let f = 0; f < o.length; f++) {
          let w = o[f];
          Array.isArray(w) ? Xe(m, w, l) : ((w = w.replace(Ms, m)), l.push(w));
        }
        return l;
      }
      function Qt(m) {
        return (o) => {
          if ("__ngUnwrap__" === o) return m;
          !1 === m(o) && (o.preventDefault(), (o.returnValue = !1));
        };
      }
      let Is = (() => {
        class m {
          constructor(l, f, w) {
            (this.eventManager = l),
              (this.sharedStylesHost = f),
              (this.appId = w),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new wt(l));
          }
          createRenderer(l, f) {
            if (!l || !f) return this.defaultRenderer;
            switch (f.encapsulation) {
              case N.ifc.Emulated: {
                let w = this.rendererByCompId.get(f.id);
                return (
                  w ||
                    ((w = new ts(
                      this.eventManager,
                      this.sharedStylesHost,
                      f,
                      this.appId
                    )),
                    this.rendererByCompId.set(f.id, w)),
                  w.applyToHost(l),
                  w
                );
              }
              case 1:
              case N.ifc.ShadowDom:
                return new $t(this.eventManager, this.sharedStylesHost, l, f);
              default:
                if (!this.rendererByCompId.has(f.id)) {
                  const w = Xe(f.id, f.styles, []);
                  this.sharedStylesHost.addStyles(w),
                    this.rendererByCompId.set(f.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (m.ɵfac = function (l) {
            return new (l || m)(N.LFG(Ve), N.LFG(Je), N.LFG(N.AFp));
          }),
          (m.ɵprov = N.Yz7({ token: m, factory: m.ɵfac })),
          m
        );
      })();
      class wt {
        constructor(o) {
          (this.eventManager = o), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(o, l) {
          return l
            ? document.createElementNS(jn[l] || l, o)
            : document.createElement(o);
        }
        createComment(o) {
          return document.createComment(o);
        }
        createText(o) {
          return document.createTextNode(o);
        }
        appendChild(o, l) {
          o.appendChild(l);
        }
        insertBefore(o, l, f) {
          o && o.insertBefore(l, f);
        }
        removeChild(o, l) {
          o && o.removeChild(l);
        }
        selectRootElement(o, l) {
          let f = "string" == typeof o ? document.querySelector(o) : o;
          if (!f)
            throw new Error(`The selector "${o}" did not match any elements`);
          return l || (f.textContent = ""), f;
        }
        parentNode(o) {
          return o.parentNode;
        }
        nextSibling(o) {
          return o.nextSibling;
        }
        setAttribute(o, l, f, w) {
          if (w) {
            l = w + ":" + l;
            const M = jn[w];
            M ? o.setAttributeNS(M, l, f) : o.setAttribute(l, f);
          } else o.setAttribute(l, f);
        }
        removeAttribute(o, l, f) {
          if (f) {
            const w = jn[f];
            w ? o.removeAttributeNS(w, l) : o.removeAttribute(`${f}:${l}`);
          } else o.removeAttribute(l);
        }
        addClass(o, l) {
          o.classList.add(l);
        }
        removeClass(o, l) {
          o.classList.remove(l);
        }
        setStyle(o, l, f, w) {
          w & (N.JOm.DashCase | N.JOm.Important)
            ? o.style.setProperty(l, f, w & N.JOm.Important ? "important" : "")
            : (o.style[l] = f);
        }
        removeStyle(o, l, f) {
          f & N.JOm.DashCase ? o.style.removeProperty(l) : (o.style[l] = "");
        }
        setProperty(o, l, f) {
          o[l] = f;
        }
        setValue(o, l) {
          o.nodeValue = l;
        }
        listen(o, l, f) {
          return "string" == typeof o
            ? this.eventManager.addGlobalEventListener(o, l, Qt(f))
            : this.eventManager.addEventListener(o, l, Qt(f));
        }
      }
      class ts extends wt {
        constructor(o, l, f, w) {
          super(o), (this.component = f);
          const M = Xe(w + "-" + f.id, f.styles, []);
          l.addStyles(M),
            (this.contentAttr = "_ngcontent-%COMP%".replace(
              Ms,
              w + "-" + f.id
            )),
            (this.hostAttr = "_nghost-%COMP%".replace(Ms, w + "-" + f.id));
        }
        applyToHost(o) {
          super.setAttribute(o, this.hostAttr, "");
        }
        createElement(o, l) {
          const f = super.createElement(o, l);
          return super.setAttribute(f, this.contentAttr, ""), f;
        }
      }
      class $t extends wt {
        constructor(o, l, f, w) {
          super(o),
            (this.sharedStylesHost = l),
            (this.hostEl = f),
            (this.shadowRoot = f.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const M = Xe(w.id, w.styles, []);
          for (let x = 0; x < M.length; x++) {
            const k = document.createElement("style");
            (k.textContent = M[x]), this.shadowRoot.appendChild(k);
          }
        }
        nodeOrShadowRoot(o) {
          return o === this.hostEl ? this.shadowRoot : o;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(o, l) {
          return super.appendChild(this.nodeOrShadowRoot(o), l);
        }
        insertBefore(o, l, f) {
          return super.insertBefore(this.nodeOrShadowRoot(o), l, f);
        }
        removeChild(o, l) {
          return super.removeChild(this.nodeOrShadowRoot(o), l);
        }
        parentNode(o) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(o))
          );
        }
      }
      let $n = (() => {
        class m extends ct {
          constructor(l) {
            super(l);
          }
          supports(l) {
            return !0;
          }
          addEventListener(l, f, w) {
            return (
              l.addEventListener(f, w, !1),
              () => this.removeEventListener(l, f, w)
            );
          }
          removeEventListener(l, f, w) {
            return l.removeEventListener(f, w);
          }
        }
        return (
          (m.ɵfac = function (l) {
            return new (l || m)(N.LFG(b.K0));
          }),
          (m.ɵprov = N.Yz7({ token: m, factory: m.ɵfac })),
          m
        );
      })();
      const ht = ["alt", "control", "meta", "shift"],
        xe = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        an = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        Pr = {
          alt: (m) => m.altKey,
          control: (m) => m.ctrlKey,
          meta: (m) => m.metaKey,
          shift: (m) => m.shiftKey,
        };
      let pt = (() => {
        class m extends ct {
          constructor(l) {
            super(l);
          }
          supports(l) {
            return null != m.parseEventName(l);
          }
          addEventListener(l, f, w) {
            const M = m.parseEventName(f),
              x = m.eventCallback(M.fullKey, w, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, b.q)().onAndCancel(l, M.domEventName, x)
              );
          }
          static parseEventName(l) {
            const f = l.toLowerCase().split("."),
              w = f.shift();
            if (0 === f.length || ("keydown" !== w && "keyup" !== w))
              return null;
            const M = m._normalizeKey(f.pop());
            let x = "";
            if (
              (ht.forEach((H) => {
                const ee = f.indexOf(H);
                ee > -1 && (f.splice(ee, 1), (x += H + "."));
              }),
              (x += M),
              0 != f.length || 0 === M.length)
            )
              return null;
            const k = {};
            return (k.domEventName = w), (k.fullKey = x), k;
          }
          static getEventFullKey(l) {
            let f = "",
              w = (function (m) {
                let o = m.key;
                if (null == o) {
                  if (((o = m.keyIdentifier), null == o)) return "Unidentified";
                  o.startsWith("U+") &&
                    ((o = String.fromCharCode(parseInt(o.substring(2), 16))),
                    3 === m.location && an.hasOwnProperty(o) && (o = an[o]));
                }
                return xe[o] || o;
              })(l);
            return (
              (w = w.toLowerCase()),
              " " === w ? (w = "space") : "." === w && (w = "dot"),
              ht.forEach((M) => {
                M != w && Pr[M](l) && (f += M + ".");
              }),
              (f += w),
              f
            );
          }
          static eventCallback(l, f, w) {
            return (M) => {
              m.getEventFullKey(M) === l && w.runGuarded(() => f(M));
            };
          }
          static _normalizeKey(l) {
            switch (l) {
              case "esc":
                return "escape";
              default:
                return l;
            }
          }
        }
        return (
          (m.ɵfac = function (l) {
            return new (l || m)(N.LFG(b.K0));
          }),
          (m.ɵprov = N.Yz7({ token: m, factory: m.ɵfac })),
          m
        );
      })();
      const vr = (0, N.eFA)(N._c5, "browser", [
          { provide: N.Lbi, useValue: b.bD },
          {
            provide: N.g9A,
            useValue: function () {
              he.makeCurrent(), J.init();
            },
            multi: !0,
          },
          {
            provide: b.K0,
            useFactory: function () {
              return (0, N.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        ln = [
          [],
          { provide: N.zSh, useValue: "root" },
          {
            provide: N.qLn,
            useFactory: function () {
              return new N.qLn();
            },
            deps: [],
          },
          { provide: Ge, useClass: $n, multi: !0, deps: [b.K0, N.R0b, N.Lbi] },
          { provide: Ge, useClass: pt, multi: !0, deps: [b.K0] },
          [],
          { provide: Is, useClass: Is, deps: [Ve, Je, N.AFp] },
          { provide: N.FYo, useExisting: Is },
          { provide: Ie, useExisting: Je },
          { provide: Je, useClass: Je, deps: [b.K0] },
          { provide: N.dDg, useClass: N.dDg, deps: [N.R0b] },
          { provide: Ve, useClass: Ve, deps: [Ge, N.R0b] },
          { provide: b.JF, useClass: Z, deps: [] },
          [],
        ];
      let Er = (() => {
        class m {
          constructor(l) {
            if (l)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(l) {
            return {
              ngModule: m,
              providers: [
                { provide: N.AFp, useValue: l.appId },
                { provide: Q, useExisting: N.AFp },
                G,
              ],
            };
          }
        }
        return (
          (m.ɵfac = function (l) {
            return new (l || m)(N.LFG(m, 12));
          }),
          (m.ɵmod = N.oAB({ type: m })),
          (m.ɵinj = N.cJS({ providers: ln, imports: [b.ez, N.hGG] })),
          m
        );
      })();
      "undefined" != typeof window && window;
      var Zt = j(665),
        dt = j(9736);
      const os = [
        {
          path: "",
          loadChildren: () =>
            j
              .e(826)
              .then(j.bind(j, 3826))
              .then((m) => m.PublicModule),
        },
      ];
      let lr = (() => {
          class m {}
          return (
            (m.ɵfac = function (l) {
              return new (l || m)();
            }),
            (m.ɵmod = N.oAB({ type: m })),
            (m.ɵinj = N.cJS({ imports: [[dt.Bz.forRoot(os)], dt.Bz] })),
            m
          );
        })(),
        Be = (() => {
          class m {
            constructor() {
              this.title = "daily-scrum";
            }
          }
          return (
            (m.ɵfac = function (l) {
              return new (l || m)();
            }),
            (m.ɵcmp = N.Xpm({
              type: m,
              selectors: [["app-root"]],
              decls: 1,
              vars: 0,
              template: function (l, f) {
                1 & l && N._UZ(0, "router-outlet");
              },
              directives: [dt.lC],
              styles: [""],
            })),
            m
          );
        })();
      class Dr {}
      const dn = "*";
      function En(m, o = null) {
        return { type: 2, steps: m, options: o };
      }
      function fn(m) {
        return { type: 6, styles: m, offset: null };
      }
      function At(m) {
        Promise.resolve(null).then(m);
      }
      class Dn {
        constructor(o = 0, l = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._position = 0),
            (this.parentPlayer = null),
            (this.totalTime = o + l);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((o) => o()),
            (this._onDoneFns = []));
        }
        onStart(o) {
          this._onStartFns.push(o);
        }
        onDone(o) {
          this._onDoneFns.push(o);
        }
        onDestroy(o) {
          this._onDestroyFns.push(o);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          At(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach((o) => o()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((o) => o()),
            (this._onDestroyFns = []));
        }
        reset() {
          this._started = !1;
        }
        setPosition(o) {
          this._position = this.totalTime ? o * this.totalTime : 1;
        }
        getPosition() {
          return this.totalTime ? this._position / this.totalTime : 1;
        }
        triggerCallback(o) {
          const l = "start" == o ? this._onStartFns : this._onDoneFns;
          l.forEach((f) => f()), (l.length = 0);
        }
      }
      class hn {
        constructor(o) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = o);
          let l = 0,
            f = 0,
            w = 0;
          const M = this.players.length;
          0 == M
            ? At(() => this._onFinish())
            : this.players.forEach((x) => {
                x.onDone(() => {
                  ++l == M && this._onFinish();
                }),
                  x.onDestroy(() => {
                    ++f == M && this._onDestroy();
                  }),
                  x.onStart(() => {
                    ++w == M && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (x, k) => Math.max(x, k.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((o) => o()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach((o) => o.init());
        }
        onStart(o) {
          this._onStartFns.push(o);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((o) => o()),
            (this._onStartFns = []));
        }
        onDone(o) {
          this._onDoneFns.push(o);
        }
        onDestroy(o) {
          this._onDestroyFns.push(o);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((o) => o.play());
        }
        pause() {
          this.players.forEach((o) => o.pause());
        }
        restart() {
          this.players.forEach((o) => o.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach((o) => o.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((o) => o.destroy()),
            this._onDestroyFns.forEach((o) => o()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach((o) => o.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(o) {
          const l = o * this.totalTime;
          this.players.forEach((f) => {
            const w = f.totalTime ? Math.min(1, l / f.totalTime) : 1;
            f.setPosition(w);
          });
        }
        getPosition() {
          const o = this.players.reduce(
            (l, f) => (null === l || f.totalTime > l.totalTime ? f : l),
            null
          );
          return null != o ? o.getPosition() : 0;
        }
        beforeDestroy() {
          this.players.forEach((o) => {
            o.beforeDestroy && o.beforeDestroy();
          });
        }
        triggerCallback(o) {
          const l = "start" == o ? this._onStartFns : this._onDoneFns;
          l.forEach((f) => f()), (l.length = 0);
        }
      }
      function zn() {
        return "undefined" != typeof window && void 0 !== window.document;
      }
      function Vn() {
        return (
          "undefined" != typeof process &&
          "[object process]" === {}.toString.call(process)
        );
      }
      function pn(m) {
        switch (m.length) {
          case 0:
            return new Dn();
          case 1:
            return m[0];
          default:
            return new hn(m);
        }
      }
      function Jt(m, o, l, f, w = {}, M = {}) {
        const x = [],
          k = [];
        let H = -1,
          ee = null;
        if (
          (f.forEach((me) => {
            const Se = me.offset,
              qe = Se == H,
              ot = (qe && ee) || {};
            Object.keys(me).forEach((ke) => {
              let Ye = ke,
                et = me[ke];
              if ("offset" !== ke)
                switch (((Ye = o.normalizePropertyName(Ye, x)), et)) {
                  case "!":
                    et = w[ke];
                    break;
                  case dn:
                    et = M[ke];
                    break;
                  default:
                    et = o.normalizeStyleValue(ke, Ye, et, x);
                }
              ot[Ye] = et;
            }),
              qe || k.push(ot),
              (ee = ot),
              (H = Se);
          }),
          x.length)
        ) {
          const me = "\n - ";
          throw new Error(
            `Unable to animate due to the following errors:${me}${x.join(me)}`
          );
        }
        return k;
      }
      function qn(m, o, l, f) {
        switch (o) {
          case "start":
            m.onStart(() => f(l && Lr(l, "start", m)));
            break;
          case "done":
            m.onDone(() => f(l && Lr(l, "done", m)));
            break;
          case "destroy":
            m.onDestroy(() => f(l && Lr(l, "destroy", m)));
        }
      }
      function Lr(m, o, l) {
        const f = l.totalTime,
          M = ls(
            m.element,
            m.triggerName,
            m.fromState,
            m.toState,
            o || m.phaseName,
            null == f ? m.totalTime : f,
            !!l.disabled
          ),
          x = m._data;
        return null != x && (M._data = x), M;
      }
      function ls(m, o, l, f, w = "", M = 0, x) {
        return {
          element: m,
          triggerName: o,
          fromState: l,
          toState: f,
          phaseName: w,
          totalTime: M,
          disabled: !!x,
        };
      }
      function Bt(m, o, l) {
        let f;
        return (
          m instanceof Map
            ? ((f = m.get(o)), f || m.set(o, (f = l)))
            : ((f = m[o]), f || (f = m[o] = l)),
          f
        );
      }
      function Ps(m) {
        const o = m.indexOf(":");
        return [m.substring(1, o), m.substr(o + 1)];
      }
      let us = (m, o) => !1,
        cs = (m, o) => !1,
        ki = (m, o, l) => [];
      const xs = Vn();
      (xs || "undefined" != typeof Element) &&
        ((us = zn()
          ? (m, o) => {
              for (; o && o !== document.documentElement; ) {
                if (o === m) return !0;
                o = o.parentNode || o.host;
              }
              return !1;
            }
          : (m, o) => m.contains(o)),
        (cs = (() => {
          if (xs || Element.prototype.matches) return (m, o) => m.matches(o);
          {
            const m = Element.prototype,
              o =
                m.matchesSelector ||
                m.mozMatchesSelector ||
                m.msMatchesSelector ||
                m.oMatchesSelector ||
                m.webkitMatchesSelector;
            return o ? (l, f) => o.apply(l, [f]) : cs;
          }
        })()),
        (ki = (m, o, l) => {
          let f = [];
          if (l) {
            const w = m.querySelectorAll(o);
            for (let M = 0; M < w.length; M++) f.push(w[M]);
          } else {
            const w = m.querySelector(o);
            w && f.push(w);
          }
          return f;
        }));
      let Br = null,
        Vs = !1;
      function jr(m) {
        Br ||
          ((Br = ("undefined" != typeof document ? document.body : null) || {}),
          (Vs = !!Br.style && "WebkitAppearance" in Br.style));
        let o = !0;
        return (
          Br.style &&
            !(function (m) {
              return "ebkit" == m.substring(1, 6);
            })(m) &&
            ((o = m in Br.style),
            !o &&
              Vs &&
              (o =
                "Webkit" + m.charAt(0).toUpperCase() + m.substr(1) in
                Br.style)),
          o
        );
      }
      const cr = cs,
        Ur = us,
        Sr = ki;
      function Bi(m) {
        const o = {};
        return (
          Object.keys(m).forEach((l) => {
            const f = l.replace(/([a-z])([A-Z])/g, "$1-$2");
            o[f] = m[l];
          }),
          o
        );
      }
      let Ar = (() => {
          class m {
            validateStyleProperty(l) {
              return jr(l);
            }
            matchesElement(l, f) {
              return cr(l, f);
            }
            containsElement(l, f) {
              return Ur(l, f);
            }
            query(l, f, w) {
              return Sr(l, f, w);
            }
            computeStyle(l, f, w) {
              return w || "";
            }
            animate(l, f, w, M, x, k = [], H) {
              return new Dn(w, M);
            }
          }
          return (
            (m.ɵfac = function (l) {
              return new (l || m)();
            }),
            (m.ɵprov = N.Yz7({ token: m, factory: m.ɵfac })),
            m
          );
        })(),
        hi = (() => {
          class m {}
          return (m.NOOP = new Ar()), m;
        })();
      const Tr = "ng-enter",
        ds = "ng-leave",
        Mr = "ng-trigger",
        Ir = ".ng-trigger",
        Gr = "ng-animating",
        fs = ".ng-animating";
      function Pt(m) {
        if ("number" == typeof m) return m;
        const o = m.match(/^(-?[\.\d]+)(m?s)/);
        return !o || o.length < 2 ? 0 : ks(parseFloat(o[1]), o[2]);
      }
      function ks(m, o) {
        switch (o) {
          case "s":
            return 1e3 * m;
          default:
            return m;
        }
      }
      function E(m, o, l) {
        return m.hasOwnProperty("duration")
          ? m
          : (function (m, o, l) {
              let w,
                M = 0,
                x = "";
              if ("string" == typeof m) {
                const k = m.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === k)
                  return (
                    o.push(`The provided timing value "${m}" is invalid.`),
                    { duration: 0, delay: 0, easing: "" }
                  );
                w = ks(parseFloat(k[1]), k[2]);
                const H = k[3];
                null != H && (M = ks(parseFloat(H), k[4]));
                const ee = k[5];
                ee && (x = ee);
              } else w = m;
              if (!l) {
                let k = !1,
                  H = o.length;
                w < 0 &&
                  (o.push(
                    "Duration values below 0 are not allowed for this animation step."
                  ),
                  (k = !0)),
                  M < 0 &&
                    (o.push(
                      "Delay values below 0 are not allowed for this animation step."
                    ),
                    (k = !0)),
                  k &&
                    o.splice(
                      H,
                      0,
                      `The provided timing value "${m}" is invalid.`
                    );
              }
              return { duration: w, delay: M, easing: x };
            })(m, o, l);
      }
      function D(m, o = {}) {
        return (
          Object.keys(m).forEach((l) => {
            o[l] = m[l];
          }),
          o
        );
      }
      function B(m, o, l = {}) {
        if (o) for (let f in m) l[f] = m[f];
        else D(m, l);
        return l;
      }
      function Y(m, o, l) {
        return l ? o + ":" + l + ";" : "";
      }
      function oe(m) {
        let o = "";
        for (let l = 0; l < m.style.length; l++) {
          const f = m.style.item(l);
          o += Y(0, f, m.style.getPropertyValue(f));
        }
        for (const l in m.style)
          m.style.hasOwnProperty(l) &&
            !l.startsWith("_") &&
            (o += Y(0, Et(l), m.style[l]));
        m.setAttribute("style", o);
      }
      function v(m, o, l) {
        m.style &&
          (Object.keys(o).forEach((f) => {
            const w = Ft(f);
            l && !l.hasOwnProperty(f) && (l[f] = m.style[w]),
              (m.style[w] = o[f]);
          }),
          Vn() && oe(m));
      }
      function _(m, o) {
        m.style &&
          (Object.keys(o).forEach((l) => {
            const f = Ft(l);
            m.style[f] = "";
          }),
          Vn() && oe(m));
      }
      function g(m) {
        return Array.isArray(m) ? (1 == m.length ? m[0] : En(m)) : m;
      }
      const z = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function ge(m) {
        let o = [];
        if ("string" == typeof m) {
          let l;
          for (; (l = z.exec(m)); ) o.push(l[1]);
          z.lastIndex = 0;
        }
        return o;
      }
      function we(m, o, l) {
        const f = m.toString(),
          w = f.replace(z, (M, x) => {
            let k = o[x];
            return (
              o.hasOwnProperty(x) ||
                (l.push(`Please provide a value for the animation param ${x}`),
                (k = "")),
              k.toString()
            );
          });
        return w == f ? m : w;
      }
      function it(m) {
        const o = [];
        let l = m.next();
        for (; !l.done; ) o.push(l.value), (l = m.next());
        return o;
      }
      const vt = /-+([a-z0-9])/g;
      function Ft(m) {
        return m.replace(vt, (...o) => o[1].toUpperCase());
      }
      function Et(m) {
        return m.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function bn(m, o) {
        return 0 === m || 0 === o;
      }
      function Yn(m, o, l) {
        const f = Object.keys(l);
        if (f.length && o.length) {
          let M = o[0],
            x = [];
          if (
            (f.forEach((k) => {
              M.hasOwnProperty(k) || x.push(k), (M[k] = l[k]);
            }),
            x.length)
          )
            for (var w = 1; w < o.length; w++) {
              let k = o[w];
              x.forEach(function (H) {
                k[H] = kn(m, H);
              });
            }
        }
        return o;
      }
      function sn(m, o, l) {
        switch (o.type) {
          case 7:
            return m.visitTrigger(o, l);
          case 0:
            return m.visitState(o, l);
          case 1:
            return m.visitTransition(o, l);
          case 2:
            return m.visitSequence(o, l);
          case 3:
            return m.visitGroup(o, l);
          case 4:
            return m.visitAnimate(o, l);
          case 5:
            return m.visitKeyframes(o, l);
          case 6:
            return m.visitStyle(o, l);
          case 8:
            return m.visitReference(o, l);
          case 9:
            return m.visitAnimateChild(o, l);
          case 10:
            return m.visitAnimateRef(o, l);
          case 11:
            return m.visitQuery(o, l);
          case 12:
            return m.visitStagger(o, l);
          default:
            throw new Error(
              `Unable to resolve animation metadata node #${o.type}`
            );
        }
      }
      function kn(m, o) {
        return window.getComputedStyle(m)[o];
      }
      function Io(m, o) {
        const l = [];
        return (
          "string" == typeof m
            ? m.split(/\s*,\s*/).forEach((f) =>
                (function (m, o, l) {
                  if (":" == m[0]) {
                    const H = (function (m, o) {
                      switch (m) {
                        case ":enter":
                          return "void => *";
                        case ":leave":
                          return "* => void";
                        case ":increment":
                          return (l, f) => parseFloat(f) > parseFloat(l);
                        case ":decrement":
                          return (l, f) => parseFloat(f) < parseFloat(l);
                        default:
                          return (
                            o.push(
                              `The transition alias value "${m}" is not supported`
                            ),
                            "* => *"
                          );
                      }
                    })(m, l);
                    if ("function" == typeof H) return void o.push(H);
                    m = H;
                  }
                  const f = m.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == f || f.length < 4)
                    return (
                      l.push(
                        `The provided transition expression "${m}" is not supported`
                      ),
                      o
                    );
                  const w = f[1],
                    M = f[2],
                    x = f[3];
                  o.push(Ro(w, x));
                  "<" == M[0] && !("*" == w && "*" == x) && o.push(Ro(x, w));
                })(f, l, o)
              )
            : l.push(m),
          l
        );
      }
      const Hi = new Set(["true", "1"]),
        hs = new Set(["false", "0"]);
      function Ro(m, o) {
        const l = Hi.has(m) || hs.has(m),
          f = Hi.has(o) || hs.has(o);
        return (w, M) => {
          let x = "*" == m || m == w,
            k = "*" == o || o == M;
          return (
            !x && l && "boolean" == typeof w && (x = w ? Hi.has(m) : hs.has(m)),
            !k && f && "boolean" == typeof M && (k = M ? Hi.has(o) : hs.has(o)),
            x && k
          );
        };
      }
      const ia = new RegExp("s*:selfs*,?", "g");
      function No(m, o, l) {
        return new st(m).build(o, l);
      }
      class st {
        constructor(o) {
          this._driver = o;
        }
        build(o, l) {
          const f = new po(l);
          return this._resetContextStyleTimingState(f), sn(this, g(o), f);
        }
        _resetContextStyleTimingState(o) {
          (o.currentQuerySelector = ""),
            (o.collectedStyles = {}),
            (o.collectedStyles[""] = {}),
            (o.currentTime = 0);
        }
        visitTrigger(o, l) {
          let f = (l.queryCount = 0),
            w = (l.depCount = 0);
          const M = [],
            x = [];
          return (
            "@" == o.name.charAt(0) &&
              l.errors.push(
                "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
              ),
            o.definitions.forEach((k) => {
              if ((this._resetContextStyleTimingState(l), 0 == k.type)) {
                const H = k,
                  ee = H.name;
                ee
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((me) => {
                    (H.name = me), M.push(this.visitState(H, l));
                  }),
                  (H.name = ee);
              } else if (1 == k.type) {
                const H = this.visitTransition(k, l);
                (f += H.queryCount), (w += H.depCount), x.push(H);
              } else
                l.errors.push(
                  "only state() and transition() definitions can sit inside of a trigger()"
                );
            }),
            {
              type: 7,
              name: o.name,
              states: M,
              transitions: x,
              queryCount: f,
              depCount: w,
              options: null,
            }
          );
        }
        visitState(o, l) {
          const f = this.visitStyle(o.styles, l),
            w = (o.options && o.options.params) || null;
          if (f.containsDynamicStyles) {
            const M = new Set(),
              x = w || {};
            if (
              (f.styles.forEach((k) => {
                if (Nn(k)) {
                  const H = k;
                  Object.keys(H).forEach((ee) => {
                    ge(H[ee]).forEach((me) => {
                      x.hasOwnProperty(me) || M.add(me);
                    });
                  });
                }
              }),
              M.size)
            ) {
              const k = it(M.values());
              l.errors.push(
                `state("${
                  o.name
                }", ...) must define default values for all the following style substitutions: ${k.join(
                  ", "
                )}`
              );
            }
          }
          return {
            type: 0,
            name: o.name,
            style: f,
            options: w ? { params: w } : null,
          };
        }
        visitTransition(o, l) {
          (l.queryCount = 0), (l.depCount = 0);
          const f = sn(this, g(o.animation), l);
          return {
            type: 1,
            matchers: Io(o.expr, l.errors),
            animation: f,
            queryCount: l.queryCount,
            depCount: l.depCount,
            options: Wr(o.options),
          };
        }
        visitSequence(o, l) {
          return {
            type: 2,
            steps: o.steps.map((f) => sn(this, f, l)),
            options: Wr(o.options),
          };
        }
        visitGroup(o, l) {
          const f = l.currentTime;
          let w = 0;
          const M = o.steps.map((x) => {
            l.currentTime = f;
            const k = sn(this, x, l);
            return (w = Math.max(w, l.currentTime)), k;
          });
          return (
            (l.currentTime = w), { type: 3, steps: M, options: Wr(o.options) }
          );
        }
        visitAnimate(o, l) {
          const f = (function (m, o) {
            let l = null;
            if (m.hasOwnProperty("duration")) l = m;
            else if ("number" == typeof m) return aa(E(m, o).duration, 0, "");
            const f = m;
            if (
              f
                .split(/\s+/)
                .some((M) => "{" == M.charAt(0) && "{" == M.charAt(1))
            ) {
              const M = aa(0, 0, "");
              return (M.dynamic = !0), (M.strValue = f), M;
            }
            return (l = l || E(f, o)), aa(l.duration, l.delay, l.easing);
          })(o.timings, l.errors);
          l.currentAnimateTimings = f;
          let w,
            M = o.styles ? o.styles : fn({});
          if (5 == M.type) w = this.visitKeyframes(M, l);
          else {
            let x = o.styles,
              k = !1;
            if (!x) {
              k = !0;
              const ee = {};
              f.easing && (ee.easing = f.easing), (x = fn(ee));
            }
            l.currentTime += f.duration + f.delay;
            const H = this.visitStyle(x, l);
            (H.isEmptyStep = k), (w = H);
          }
          return (
            (l.currentAnimateTimings = null),
            { type: 4, timings: f, style: w, options: null }
          );
        }
        visitStyle(o, l) {
          const f = this._makeStyleAst(o, l);
          return this._validateStyleAst(f, l), f;
        }
        _makeStyleAst(o, l) {
          const f = [];
          Array.isArray(o.styles)
            ? o.styles.forEach((x) => {
                "string" == typeof x
                  ? x == dn
                    ? f.push(x)
                    : l.errors.push(
                        `The provided style string value ${x} is not allowed.`
                      )
                  : f.push(x);
              })
            : f.push(o.styles);
          let w = !1,
            M = null;
          return (
            f.forEach((x) => {
              if (Nn(x)) {
                const k = x,
                  H = k.easing;
                if ((H && ((M = H), delete k.easing), !w))
                  for (let ee in k)
                    if (k[ee].toString().indexOf("{{") >= 0) {
                      w = !0;
                      break;
                    }
              }
            }),
            {
              type: 6,
              styles: f,
              easing: M,
              offset: o.offset,
              containsDynamicStyles: w,
              options: null,
            }
          );
        }
        _validateStyleAst(o, l) {
          const f = l.currentAnimateTimings;
          let w = l.currentTime,
            M = l.currentTime;
          f && M > 0 && (M -= f.duration + f.delay),
            o.styles.forEach((x) => {
              "string" != typeof x &&
                Object.keys(x).forEach((k) => {
                  if (!this._driver.validateStyleProperty(k))
                    return void l.errors.push(
                      `The provided animation property "${k}" is not a supported CSS property for animations`
                    );
                  const H = l.collectedStyles[l.currentQuerySelector],
                    ee = H[k];
                  let me = !0;
                  ee &&
                    (M != w &&
                      M >= ee.startTime &&
                      w <= ee.endTime &&
                      (l.errors.push(
                        `The CSS property "${k}" that exists between the times of "${ee.startTime}ms" and "${ee.endTime}ms" is also being animated in a parallel animation between the times of "${M}ms" and "${w}ms"`
                      ),
                      (me = !1)),
                    (M = ee.startTime)),
                    me && (H[k] = { startTime: M, endTime: w }),
                    l.options &&
                      (function (m, o, l) {
                        const f = o.params || {},
                          w = ge(m);
                        w.length &&
                          w.forEach((M) => {
                            f.hasOwnProperty(M) ||
                              l.push(
                                `Unable to resolve the local animation param ${M} in the given list of values`
                              );
                          });
                      })(x[k], l.options, l.errors);
                });
            });
        }
        visitKeyframes(o, l) {
          const f = { type: 5, styles: [], options: null };
          if (!l.currentAnimateTimings)
            return (
              l.errors.push(
                "keyframes() must be placed inside of a call to animate()"
              ),
              f
            );
          let M = 0;
          const x = [];
          let k = !1,
            H = !1,
            ee = 0;
          const me = o.steps.map((It) => {
            const Rt = this._makeStyleAst(It, l);
            let Zn =
                null != Rt.offset
                  ? Rt.offset
                  : (function (m) {
                      if ("string" == typeof m) return null;
                      let o = null;
                      if (Array.isArray(m))
                        m.forEach((l) => {
                          if (Nn(l) && l.hasOwnProperty("offset")) {
                            const f = l;
                            (o = parseFloat(f.offset)), delete f.offset;
                          }
                        });
                      else if (Nn(m) && m.hasOwnProperty("offset")) {
                        const l = m;
                        (o = parseFloat(l.offset)), delete l.offset;
                      }
                      return o;
                    })(Rt.styles),
              zt = 0;
            return (
              null != Zn && (M++, (zt = Rt.offset = Zn)),
              (H = H || zt < 0 || zt > 1),
              (k = k || zt < ee),
              (ee = zt),
              x.push(zt),
              Rt
            );
          });
          H &&
            l.errors.push(
              "Please ensure that all keyframe offsets are between 0 and 1"
            ),
            k &&
              l.errors.push(
                "Please ensure that all keyframe offsets are in order"
              );
          const Se = o.steps.length;
          let qe = 0;
          M > 0 && M < Se
            ? l.errors.push(
                "Not all style() steps within the declared keyframes() contain offsets"
              )
            : 0 == M && (qe = 1 / (Se - 1));
          const ot = Se - 1,
            ke = l.currentTime,
            Ye = l.currentAnimateTimings,
            et = Ye.duration;
          return (
            me.forEach((It, Rt) => {
              const Zn = qe > 0 ? (Rt == ot ? 1 : qe * Rt) : x[Rt],
                zt = Zn * et;
              (l.currentTime = ke + Ye.delay + zt),
                (Ye.duration = zt),
                this._validateStyleAst(It, l),
                (It.offset = Zn),
                f.styles.push(It);
            }),
            f
          );
        }
        visitReference(o, l) {
          return {
            type: 8,
            animation: sn(this, g(o.animation), l),
            options: Wr(o.options),
          };
        }
        visitAnimateChild(o, l) {
          return l.depCount++, { type: 9, options: Wr(o.options) };
        }
        visitAnimateRef(o, l) {
          return {
            type: 10,
            animation: this.visitReference(o.animation, l),
            options: Wr(o.options),
          };
        }
        visitQuery(o, l) {
          const f = l.currentQuerySelector,
            w = o.options || {};
          l.queryCount++, (l.currentQuery = o);
          const [M, x] = (function (m) {
            const o = !!m.split(/\s*,\s*/).find((l) => ":self" == l);
            return (
              o && (m = m.replace(ia, "")),
              [
                (m = m
                  .replace(/@\*/g, Ir)
                  .replace(/@\w+/g, (l) => Ir + "-" + l.substr(1))
                  .replace(/:animating/g, fs)),
                o,
              ]
            );
          })(o.selector);
          (l.currentQuerySelector = f.length ? f + " " + M : M),
            Bt(l.collectedStyles, l.currentQuerySelector, {});
          const k = sn(this, g(o.animation), l);
          return (
            (l.currentQuery = null),
            (l.currentQuerySelector = f),
            {
              type: 11,
              selector: M,
              limit: w.limit || 0,
              optional: !!w.optional,
              includeSelf: x,
              animation: k,
              originalSelector: o.selector,
              options: Wr(o.options),
            }
          );
        }
        visitStagger(o, l) {
          l.currentQuery ||
            l.errors.push("stagger() can only be used inside of query()");
          const f =
            "full" === o.timings
              ? { duration: 0, delay: 0, easing: "full" }
              : E(o.timings, l.errors, !0);
          return {
            type: 12,
            animation: sn(this, g(o.animation), l),
            timings: f,
            options: null,
          };
        }
      }
      class po {
        constructor(o) {
          (this.errors = o),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        }
      }
      function Nn(m) {
        return !Array.isArray(m) && "object" == typeof m;
      }
      function Wr(m) {
        return (
          m
            ? (m = D(m)).params &&
              (m.params = (function (m) {
                return m ? D(m) : null;
              })(m.params))
            : (m = {}),
          m
        );
      }
      function aa(m, o, l) {
        return { duration: m, delay: o, easing: l };
      }
      function mi(m, o, l, f, w, M, x = null, k = !1) {
        return {
          type: 1,
          element: m,
          keyframes: o,
          preStyleProps: l,
          postStyleProps: f,
          duration: w,
          delay: M,
          totalTime: w + M,
          easing: x,
          subTimeline: k,
        };
      }
      class Ls {
        constructor() {
          this._map = new Map();
        }
        consume(o) {
          let l = this._map.get(o);
          return l ? this._map.delete(o) : (l = []), l;
        }
        append(o, l) {
          let f = this._map.get(o);
          f || this._map.set(o, (f = [])), f.push(...l);
        }
        has(o) {
          return this._map.has(o);
        }
        clear() {
          this._map.clear();
        }
      }
      const Rr = new RegExp(":enter", "g"),
        _i = new RegExp(":leave", "g");
      function fr(m, o, l, f, w, M = {}, x = {}, k, H, ee = []) {
        return new cl().buildKeyframes(m, o, l, f, w, M, x, k, H, ee);
      }
      class cl {
        buildKeyframes(o, l, f, w, M, x, k, H, ee, me = []) {
          ee = ee || new Ls();
          const Se = new Oo(o, l, ee, w, M, me, []);
          (Se.options = H),
            Se.currentTimeline.setStyles([x], null, Se.errors, H),
            sn(this, f, Se);
          const qe = Se.timelines.filter((ot) => ot.containsAnimation());
          if (qe.length && Object.keys(k).length) {
            const ot = qe[qe.length - 1];
            ot.allowOnlyTimelineStyles() ||
              ot.setStyles([k], null, Se.errors, H);
          }
          return qe.length
            ? qe.map((ot) => ot.buildKeyframes())
            : [mi(l, [], [], [], 0, 0, "", !1)];
        }
        visitTrigger(o, l) {}
        visitState(o, l) {}
        visitTransition(o, l) {}
        visitAnimateChild(o, l) {
          const f = l.subInstructions.consume(l.element);
          if (f) {
            const w = l.createSubContext(o.options),
              M = l.currentTimeline.currentTime,
              x = this._visitSubInstructions(f, w, w.options);
            M != x && l.transformIntoNewTimeline(x);
          }
          l.previousNode = o;
        }
        visitAnimateRef(o, l) {
          const f = l.createSubContext(o.options);
          f.transformIntoNewTimeline(),
            this.visitReference(o.animation, f),
            l.transformIntoNewTimeline(f.currentTimeline.currentTime),
            (l.previousNode = o);
        }
        _visitSubInstructions(o, l, f) {
          let M = l.currentTimeline.currentTime;
          const x = null != f.duration ? Pt(f.duration) : null,
            k = null != f.delay ? Pt(f.delay) : null;
          return (
            0 !== x &&
              o.forEach((H) => {
                const ee = l.appendInstructionToTimeline(H, x, k);
                M = Math.max(M, ee.duration + ee.delay);
              }),
            M
          );
        }
        visitReference(o, l) {
          l.updateOptions(o.options, !0),
            sn(this, o.animation, l),
            (l.previousNode = o);
        }
        visitSequence(o, l) {
          const f = l.subContextCount;
          let w = l;
          const M = o.options;
          if (
            M &&
            (M.params || M.delay) &&
            ((w = l.createSubContext(M)),
            w.transformIntoNewTimeline(),
            null != M.delay)
          ) {
            6 == w.previousNode.type &&
              (w.currentTimeline.snapshotCurrentStyles(),
              (w.previousNode = Wi));
            const x = Pt(M.delay);
            w.delayNextStep(x);
          }
          o.steps.length &&
            (o.steps.forEach((x) => sn(this, x, w)),
            w.currentTimeline.applyStylesToKeyframe(),
            w.subContextCount > f && w.transformIntoNewTimeline()),
            (l.previousNode = o);
        }
        visitGroup(o, l) {
          const f = [];
          let w = l.currentTimeline.currentTime;
          const M = o.options && o.options.delay ? Pt(o.options.delay) : 0;
          o.steps.forEach((x) => {
            const k = l.createSubContext(o.options);
            M && k.delayNextStep(M),
              sn(this, x, k),
              (w = Math.max(w, k.currentTimeline.currentTime)),
              f.push(k.currentTimeline);
          }),
            f.forEach((x) => l.currentTimeline.mergeTimelineCollectedStyles(x)),
            l.transformIntoNewTimeline(w),
            (l.previousNode = o);
        }
        _visitTiming(o, l) {
          if (o.dynamic) {
            const f = o.strValue;
            return E(l.params ? we(f, l.params, l.errors) : f, l.errors);
          }
          return { duration: o.duration, delay: o.delay, easing: o.easing };
        }
        visitAnimate(o, l) {
          const f = (l.currentAnimateTimings = this._visitTiming(o.timings, l)),
            w = l.currentTimeline;
          f.delay && (l.incrementTime(f.delay), w.snapshotCurrentStyles());
          const M = o.style;
          5 == M.type
            ? this.visitKeyframes(M, l)
            : (l.incrementTime(f.duration),
              this.visitStyle(M, l),
              w.applyStylesToKeyframe()),
            (l.currentAnimateTimings = null),
            (l.previousNode = o);
        }
        visitStyle(o, l) {
          const f = l.currentTimeline,
            w = l.currentAnimateTimings;
          !w && f.getCurrentStyleProperties().length && f.forwardFrame();
          const M = (w && w.easing) || o.easing;
          o.isEmptyStep
            ? f.applyEmptyStep(M)
            : f.setStyles(o.styles, M, l.errors, l.options),
            (l.previousNode = o);
        }
        visitKeyframes(o, l) {
          const f = l.currentAnimateTimings,
            w = l.currentTimeline.duration,
            M = f.duration,
            k = l.createSubContext().currentTimeline;
          (k.easing = f.easing),
            o.styles.forEach((H) => {
              k.forwardTime((H.offset || 0) * M),
                k.setStyles(H.styles, H.easing, l.errors, l.options),
                k.applyStylesToKeyframe();
            }),
            l.currentTimeline.mergeTimelineCollectedStyles(k),
            l.transformIntoNewTimeline(w + M),
            (l.previousNode = o);
        }
        visitQuery(o, l) {
          const f = l.currentTimeline.currentTime,
            w = o.options || {},
            M = w.delay ? Pt(w.delay) : 0;
          M &&
            (6 === l.previousNode.type ||
              (0 == f &&
                l.currentTimeline.getCurrentStyleProperties().length)) &&
            (l.currentTimeline.snapshotCurrentStyles(), (l.previousNode = Wi));
          let x = f;
          const k = l.invokeQuery(
            o.selector,
            o.originalSelector,
            o.limit,
            o.includeSelf,
            !!w.optional,
            l.errors
          );
          l.currentQueryTotal = k.length;
          let H = null;
          k.forEach((ee, me) => {
            l.currentQueryIndex = me;
            const Se = l.createSubContext(o.options, ee);
            M && Se.delayNextStep(M),
              ee === l.element && (H = Se.currentTimeline),
              sn(this, o.animation, Se),
              Se.currentTimeline.applyStylesToKeyframe(),
              (x = Math.max(x, Se.currentTimeline.currentTime));
          }),
            (l.currentQueryIndex = 0),
            (l.currentQueryTotal = 0),
            l.transformIntoNewTimeline(x),
            H &&
              (l.currentTimeline.mergeTimelineCollectedStyles(H),
              l.currentTimeline.snapshotCurrentStyles()),
            (l.previousNode = o);
        }
        visitStagger(o, l) {
          const f = l.parentContext,
            w = l.currentTimeline,
            M = o.timings,
            x = Math.abs(M.duration),
            k = x * (l.currentQueryTotal - 1);
          let H = x * l.currentQueryIndex;
          switch (M.duration < 0 ? "reverse" : M.easing) {
            case "reverse":
              H = k - H;
              break;
            case "full":
              H = f.currentStaggerTime;
          }
          const me = l.currentTimeline;
          H && me.delayNextStep(H);
          const Se = me.currentTime;
          sn(this, o.animation, l),
            (l.previousNode = o),
            (f.currentStaggerTime =
              w.currentTime - Se + (w.startTime - f.currentTimeline.startTime));
        }
      }
      const Wi = {};
      class Oo {
        constructor(o, l, f, w, M, x, k, H) {
          (this._driver = o),
            (this.element = l),
            (this.subInstructions = f),
            (this._enterClassName = w),
            (this._leaveClassName = M),
            (this.errors = x),
            (this.timelines = k),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = Wi),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = H || new go(this._driver, l, 0)),
            k.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(o, l) {
          if (!o) return;
          const f = o;
          let w = this.options;
          null != f.duration && (w.duration = Pt(f.duration)),
            null != f.delay && (w.delay = Pt(f.delay));
          const M = f.params;
          if (M) {
            let x = w.params;
            x || (x = this.options.params = {}),
              Object.keys(M).forEach((k) => {
                (!l || !x.hasOwnProperty(k)) &&
                  (x[k] = we(M[k], x, this.errors));
              });
          }
        }
        _copyOptions() {
          const o = {};
          if (this.options) {
            const l = this.options.params;
            if (l) {
              const f = (o.params = {});
              Object.keys(l).forEach((w) => {
                f[w] = l[w];
              });
            }
          }
          return o;
        }
        createSubContext(o = null, l, f) {
          const w = l || this.element,
            M = new Oo(
              this._driver,
              w,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(w, f || 0)
            );
          return (
            (M.previousNode = this.previousNode),
            (M.currentAnimateTimings = this.currentAnimateTimings),
            (M.options = this._copyOptions()),
            M.updateOptions(o),
            (M.currentQueryIndex = this.currentQueryIndex),
            (M.currentQueryTotal = this.currentQueryTotal),
            (M.parentContext = this),
            this.subContextCount++,
            M
          );
        }
        transformIntoNewTimeline(o) {
          return (
            (this.previousNode = Wi),
            (this.currentTimeline = this.currentTimeline.fork(this.element, o)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(o, l, f) {
          const w = {
              duration: null != l ? l : o.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != f ? f : 0) +
                o.delay,
              easing: "",
            },
            M = new Po(
              this._driver,
              o.element,
              o.keyframes,
              o.preStyleProps,
              o.postStyleProps,
              w,
              o.stretchStartingKeyframe
            );
          return this.timelines.push(M), w;
        }
        incrementTime(o) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + o);
        }
        delayNextStep(o) {
          o > 0 && this.currentTimeline.delayNextStep(o);
        }
        invokeQuery(o, l, f, w, M, x) {
          let k = [];
          if ((w && k.push(this.element), o.length > 0)) {
            o = (o = o.replace(Rr, "." + this._enterClassName)).replace(
              _i,
              "." + this._leaveClassName
            );
            let ee = this._driver.query(this.element, o, 1 != f);
            0 !== f &&
              (ee =
                f < 0 ? ee.slice(ee.length + f, ee.length) : ee.slice(0, f)),
              k.push(...ee);
          }
          return (
            !M &&
              0 == k.length &&
              x.push(
                `\`query("${l}")\` returned zero elements. (Use \`query("${l}", { optional: true })\` if you wish to allow this.)`
              ),
            k
          );
        }
      }
      class go {
        constructor(o, l, f, w) {
          (this._driver = o),
            (this.element = l),
            (this.startTime = f),
            (this._elementTimelineStylesLookup = w),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles =
              this._elementTimelineStylesLookup.get(l)),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                l,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(o) {
          const l =
            1 == this._keyframes.size &&
            Object.keys(this._pendingStyles).length;
          this.duration || l
            ? (this.forwardTime(this.currentTime + o),
              l && this.snapshotCurrentStyles())
            : (this.startTime += o);
        }
        fork(o, l) {
          return (
            this.applyStylesToKeyframe(),
            new go(
              this._driver,
              o,
              l || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(o) {
          this.applyStylesToKeyframe(),
            (this.duration = o),
            this._loadKeyframe();
        }
        _updateStyle(o, l) {
          (this._localTimelineStyles[o] = l),
            (this._globalTimelineStyles[o] = l),
            (this._styleSummary[o] = { time: this.currentTime, value: l });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(o) {
          o && (this._previousKeyframe.easing = o),
            Object.keys(this._globalTimelineStyles).forEach((l) => {
              (this._backFill[l] = this._globalTimelineStyles[l] || dn),
                (this._currentKeyframe[l] = dn);
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(o, l, f, w) {
          l && (this._previousKeyframe.easing = l);
          const M = (w && w.params) || {},
            x = (function (m, o) {
              const l = {};
              let f;
              return (
                m.forEach((w) => {
                  "*" === w
                    ? ((f = f || Object.keys(o)),
                      f.forEach((M) => {
                        l[M] = dn;
                      }))
                    : B(w, !1, l);
                }),
                l
              );
            })(o, this._globalTimelineStyles);
          Object.keys(x).forEach((k) => {
            const H = we(x[k], M, f);
            (this._pendingStyles[k] = H),
              this._localTimelineStyles.hasOwnProperty(k) ||
                (this._backFill[k] = this._globalTimelineStyles.hasOwnProperty(
                  k
                )
                  ? this._globalTimelineStyles[k]
                  : dn),
              this._updateStyle(k, H);
          });
        }
        applyStylesToKeyframe() {
          const o = this._pendingStyles,
            l = Object.keys(o);
          0 != l.length &&
            ((this._pendingStyles = {}),
            l.forEach((f) => {
              this._currentKeyframe[f] = o[f];
            }),
            Object.keys(this._localTimelineStyles).forEach((f) => {
              this._currentKeyframe.hasOwnProperty(f) ||
                (this._currentKeyframe[f] = this._localTimelineStyles[f]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach((o) => {
            const l = this._localTimelineStyles[o];
            (this._pendingStyles[o] = l), this._updateStyle(o, l);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const o = [];
          for (let l in this._currentKeyframe) o.push(l);
          return o;
        }
        mergeTimelineCollectedStyles(o) {
          Object.keys(o._styleSummary).forEach((l) => {
            const f = this._styleSummary[l],
              w = o._styleSummary[l];
            (!f || w.time > f.time) && this._updateStyle(l, w.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const o = new Set(),
            l = new Set(),
            f = 1 === this._keyframes.size && 0 === this.duration;
          let w = [];
          this._keyframes.forEach((k, H) => {
            const ee = B(k, !0);
            Object.keys(ee).forEach((me) => {
              const Se = ee[me];
              "!" == Se ? o.add(me) : Se == dn && l.add(me);
            }),
              f || (ee.offset = H / this.duration),
              w.push(ee);
          });
          const M = o.size ? it(o.values()) : [],
            x = l.size ? it(l.values()) : [];
          if (f) {
            const k = w[0],
              H = D(k);
            (k.offset = 0), (H.offset = 1), (w = [k, H]);
          }
          return mi(
            this.element,
            w,
            M,
            x,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class Po extends go {
        constructor(o, l, f, w, M, x, k = !1) {
          super(o, l, x.delay),
            (this.keyframes = f),
            (this.preStyleProps = w),
            (this.postStyleProps = M),
            (this._stretchStartingKeyframe = k),
            (this.timings = {
              duration: x.duration,
              delay: x.delay,
              easing: x.easing,
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let o = this.keyframes,
            { delay: l, duration: f, easing: w } = this.timings;
          if (this._stretchStartingKeyframe && l) {
            const M = [],
              x = f + l,
              k = l / x,
              H = B(o[0], !1);
            (H.offset = 0), M.push(H);
            const ee = B(o[0], !1);
            (ee.offset = mo(k)), M.push(ee);
            const me = o.length - 1;
            for (let Se = 1; Se <= me; Se++) {
              let qe = B(o[Se], !1);
              (qe.offset = mo((l + qe.offset * f) / x)), M.push(qe);
            }
            (f = x), (l = 0), (w = ""), (o = M);
          }
          return mi(
            this.element,
            o,
            this.preStyleProps,
            this.postStyleProps,
            f,
            l,
            w,
            !0
          );
        }
      }
      function mo(m, o = 3) {
        const l = Math.pow(10, o - 1);
        return Math.round(m * l) / l;
      }
      class xo {}
      class yo extends xo {
        normalizePropertyName(o, l) {
          return Ft(o);
        }
        normalizeStyleValue(o, l, f, w) {
          let M = "";
          const x = f.toString().trim();
          if (ua[l] && 0 !== f && "0" !== f)
            if ("number" == typeof f) M = "px";
            else {
              const k = f.match(/^[+-]?[\d\.]+([a-z]*)$/);
              k &&
                0 == k[1].length &&
                w.push(`Please provide a CSS unit value for ${o}:${f}`);
            }
          return x + M;
        }
      }
      const ua = (() =>
        (function (m) {
          const o = {};
          return m.forEach((l) => (o[l] = !0)), o;
        })(
          "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(
            ","
          )
        ))();
      function ca(m, o, l, f, w, M, x, k, H, ee, me, Se, qe) {
        return {
          type: 0,
          element: m,
          triggerName: o,
          isRemovalTransition: w,
          fromState: l,
          fromStyles: M,
          toState: f,
          toStyles: x,
          timelines: k,
          queriedElements: H,
          preStyleProps: ee,
          postStyleProps: me,
          totalTime: Se,
          errors: qe,
        };
      }
      const Bs = {};
      class ko {
        constructor(o, l, f) {
          (this._triggerName = o), (this.ast = l), (this._stateStyles = f);
        }
        match(o, l, f, w) {
          return (function (m, o, l, f, w) {
            return m.some((M) => M(o, l, f, w));
          })(this.ast.matchers, o, l, f, w);
        }
        buildStyles(o, l, f) {
          const w = this._stateStyles["*"],
            M = this._stateStyles[o],
            x = w ? w.buildStyles(l, f) : {};
          return M ? M.buildStyles(l, f) : x;
        }
        build(o, l, f, w, M, x, k, H, ee, me) {
          const Se = [],
            qe = (this.ast.options && this.ast.options.params) || Bs,
            ke = this.buildStyles(f, (k && k.params) || Bs, Se),
            Ye = (H && H.params) || Bs,
            et = this.buildStyles(w, Ye, Se),
            It = new Set(),
            Rt = new Map(),
            Zn = new Map(),
            zt = "void" === w,
            bi = { params: Object.assign(Object.assign({}, qe), Ye) },
            Ln = me
              ? []
              : fr(o, l, this.ast.animation, M, x, ke, et, bi, ee, Se);
          let Bn = 0;
          if (
            (Ln.forEach((zs) => {
              Bn = Math.max(zs.duration + zs.delay, Bn);
            }),
            Se.length)
          )
            return ca(
              l,
              this._triggerName,
              f,
              w,
              zt,
              ke,
              et,
              [],
              [],
              Rt,
              Zn,
              Bn,
              Se
            );
          Ln.forEach((zs) => {
            const Kr = zs.element,
              lc = Bt(Rt, Kr, {});
            zs.preStyleProps.forEach((Qr) => (lc[Qr] = !0));
            const no = Bt(Zn, Kr, {});
            zs.postStyleProps.forEach((Qr) => (no[Qr] = !0)),
              Kr !== l && It.add(Kr);
          });
          const Ws = it(It.values());
          return ca(l, this._triggerName, f, w, zt, ke, et, Ln, Ws, Rt, Zn, Bn);
        }
      }
      class gn {
        constructor(o, l, f) {
          (this.styles = o), (this.defaultParams = l), (this.normalizer = f);
        }
        buildStyles(o, l) {
          const f = {},
            w = D(this.defaultParams);
          return (
            Object.keys(o).forEach((M) => {
              const x = o[M];
              null != x && (w[M] = x);
            }),
            this.styles.styles.forEach((M) => {
              if ("string" != typeof M) {
                const x = M;
                Object.keys(x).forEach((k) => {
                  let H = x[k];
                  H.length > 1 && (H = we(H, w, l));
                  const ee = this.normalizer.normalizePropertyName(k, l);
                  (H = this.normalizer.normalizeStyleValue(k, ee, H, l)),
                    (f[ee] = H);
                });
              }
            }),
            f
          );
        }
      }
      class Mt {
        constructor(o, l, f) {
          (this.name = o),
            (this.ast = l),
            (this._normalizer = f),
            (this.transitionFactories = []),
            (this.states = {}),
            l.states.forEach((w) => {
              this.states[w.name] = new gn(
                w.style,
                (w.options && w.options.params) || {},
                f
              );
            }),
            fa(this.states, "true", "1"),
            fa(this.states, "false", "0"),
            l.transitions.forEach((w) => {
              this.transitionFactories.push(new ko(o, w, this.states));
            }),
            (this.fallbackTransition = (function (m, o, l) {
              return new ko(
                m,
                {
                  type: 1,
                  animation: { type: 2, steps: [], options: null },
                  matchers: [(x, k) => !0],
                  options: null,
                  queryCount: 0,
                  depCount: 0,
                },
                o
              );
            })(o, this.states));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(o, l, f, w) {
          return (
            this.transitionFactories.find((x) => x.match(o, l, f, w)) || null
          );
        }
        matchStyles(o, l, f) {
          return this.fallbackTransition.buildStyles(o, l, f);
        }
      }
      function fa(m, o, l) {
        m.hasOwnProperty(o)
          ? m.hasOwnProperty(l) || (m[l] = m[o])
          : m.hasOwnProperty(l) && (m[o] = m[l]);
      }
      const pl = new Ls();
      class Lo {
        constructor(o, l, f) {
          (this.bodyNode = o),
            (this._driver = l),
            (this._normalizer = f),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(o, l) {
          const f = [],
            w = No(this._driver, l, f);
          if (f.length)
            throw new Error(
              `Unable to build the animation due to the following errors: ${f.join(
                "\n"
              )}`
            );
          this._animations[o] = w;
        }
        _buildPlayer(o, l, f) {
          const w = o.element,
            M = Jt(0, this._normalizer, 0, o.keyframes, l, f);
          return this._driver.animate(
            w,
            M,
            o.duration,
            o.delay,
            o.easing,
            [],
            !0
          );
        }
        create(o, l, f = {}) {
          const w = [],
            M = this._animations[o];
          let x;
          const k = new Map();
          if (
            (M
              ? ((x = fr(this._driver, l, M, Tr, ds, {}, {}, f, pl, w)),
                x.forEach((me) => {
                  const Se = Bt(k, me.element, {});
                  me.postStyleProps.forEach((qe) => (Se[qe] = null));
                }))
              : (w.push(
                  "The requested animation doesn't exist or has already been destroyed"
                ),
                (x = [])),
            w.length)
          )
            throw new Error(
              `Unable to create the animation due to the following errors: ${w.join(
                "\n"
              )}`
            );
          k.forEach((me, Se) => {
            Object.keys(me).forEach((qe) => {
              me[qe] = this._driver.computeStyle(Se, qe, dn);
            });
          });
          const ee = pn(
            x.map((me) => {
              const Se = k.get(me.element);
              return this._buildPlayer(me, {}, Se);
            })
          );
          return (
            (this._playersById[o] = ee),
            ee.onDestroy(() => this.destroy(o)),
            this.players.push(ee),
            ee
          );
        }
        destroy(o) {
          const l = this._getPlayer(o);
          l.destroy(), delete this._playersById[o];
          const f = this.players.indexOf(l);
          f >= 0 && this.players.splice(f, 1);
        }
        _getPlayer(o) {
          const l = this._playersById[o];
          if (!l)
            throw new Error(
              `Unable to find the timeline player referenced by ${o}`
            );
          return l;
        }
        listen(o, l, f, w) {
          const M = ls(l, "", "", "");
          return qn(this._getPlayer(o), f, M, w), () => {};
        }
        command(o, l, f, w) {
          if ("register" == f) return void this.register(o, w[0]);
          if ("create" == f) return void this.create(o, l, w[0] || {});
          const M = this._getPlayer(o);
          switch (f) {
            case "play":
              M.play();
              break;
            case "pause":
              M.pause();
              break;
            case "reset":
              M.reset();
              break;
            case "restart":
              M.restart();
              break;
            case "finish":
              M.finish();
              break;
            case "init":
              M.init();
              break;
            case "setPosition":
              M.setPosition(parseFloat(w[0]));
              break;
            case "destroy":
              this.destroy(o);
          }
        }
      }
      const ha = "ng-animate-queued",
        zi = "ng-animate-disabled",
        js = ".ng-animate-disabled",
        Us = [],
        pa = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        ms = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        },
        mn = "__ng_removed";
      class jo {
        constructor(o, l = "") {
          this.namespaceId = l;
          const f = o && o.hasOwnProperty("value");
          if (((this.value = null != (m = f ? o.value : o) ? m : null), f)) {
            const M = D(o);
            delete M.value, (this.options = M);
          } else this.options = {};
          var m;
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(o) {
          const l = o.params;
          if (l) {
            const f = this.options.params;
            Object.keys(l).forEach((w) => {
              null == f[w] && (f[w] = l[w]);
            });
          }
        }
      }
      const Ci = "void",
        $s = new jo(Ci);
      class Uo {
        constructor(o, l, f) {
          (this.id = o),
            (this.hostElement = l),
            (this._engine = f),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = "ng-tns-" + o),
            Kn(l, this._hostClassName);
        }
        listen(o, l, f, w) {
          if (!this._triggers.hasOwnProperty(l))
            throw new Error(
              `Unable to listen on the animation trigger event "${f}" because the animation trigger "${l}" doesn't exist!`
            );
          if (null == f || 0 == f.length)
            throw new Error(
              `Unable to listen on the animation trigger "${l}" because the provided event is undefined!`
            );
          if ("start" != (m = f) && "done" != m)
            throw new Error(
              `The provided animation trigger event "${f}" for the animation trigger "${l}" is not supported!`
            );
          var m;
          const M = Bt(this._elementListeners, o, []),
            x = { name: l, phase: f, callback: w };
          M.push(x);
          const k = Bt(this._engine.statesByElement, o, {});
          return (
            k.hasOwnProperty(l) ||
              (Kn(o, Mr), Kn(o, Mr + "-" + l), (k[l] = $s)),
            () => {
              this._engine.afterFlush(() => {
                const H = M.indexOf(x);
                H >= 0 && M.splice(H, 1), this._triggers[l] || delete k[l];
              });
            }
          );
        }
        register(o, l) {
          return !this._triggers[o] && ((this._triggers[o] = l), !0);
        }
        _getTrigger(o) {
          const l = this._triggers[o];
          if (!l)
            throw new Error(
              `The provided animation trigger "${o}" has not been registered!`
            );
          return l;
        }
        trigger(o, l, f, w = !0) {
          const M = this._getTrigger(l),
            x = new $o(this.id, l, o);
          let k = this._engine.statesByElement.get(o);
          k ||
            (Kn(o, Mr),
            Kn(o, Mr + "-" + l),
            this._engine.statesByElement.set(o, (k = {})));
          let H = k[l];
          const ee = new jo(f, this.id);
          if (
            (!(f && f.hasOwnProperty("value")) &&
              H &&
              ee.absorbOptions(H.options),
            (k[l] = ee),
            H || (H = $s),
            ee.value !== Ci && H.value === ee.value)
          ) {
            if (
              !(function (m, o) {
                const l = Object.keys(m),
                  f = Object.keys(o);
                if (l.length != f.length) return !1;
                for (let w = 0; w < l.length; w++) {
                  const M = l[w];
                  if (!o.hasOwnProperty(M) || m[M] !== o[M]) return !1;
                }
                return !0;
              })(H.params, ee.params)
            ) {
              const Ye = [],
                et = M.matchStyles(H.value, H.params, Ye),
                It = M.matchStyles(ee.value, ee.params, Ye);
              Ye.length
                ? this._engine.reportError(Ye)
                : this._engine.afterFlush(() => {
                    _(o, et), v(o, It);
                  });
            }
            return;
          }
          const qe = Bt(this._engine.playersByElement, o, []);
          qe.forEach((Ye) => {
            Ye.namespaceId == this.id &&
              Ye.triggerName == l &&
              Ye.queued &&
              Ye.destroy();
          });
          let ot = M.matchTransition(H.value, ee.value, o, ee.params),
            ke = !1;
          if (!ot) {
            if (!w) return;
            (ot = M.fallbackTransition), (ke = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: o,
              triggerName: l,
              transition: ot,
              fromState: H,
              toState: ee,
              player: x,
              isFallbackTransition: ke,
            }),
            ke ||
              (Kn(o, ha),
              x.onStart(() => {
                Qn(o, ha);
              })),
            x.onDone(() => {
              let Ye = this.players.indexOf(x);
              Ye >= 0 && this.players.splice(Ye, 1);
              const et = this._engine.playersByElement.get(o);
              if (et) {
                let It = et.indexOf(x);
                It >= 0 && et.splice(It, 1);
              }
            }),
            this.players.push(x),
            qe.push(x),
            x
          );
        }
        deregister(o) {
          delete this._triggers[o],
            this._engine.statesByElement.forEach((l, f) => {
              delete l[o];
            }),
            this._elementListeners.forEach((l, f) => {
              this._elementListeners.set(
                f,
                l.filter((w) => w.name != o)
              );
            });
        }
        clearElementCache(o) {
          this._engine.statesByElement.delete(o),
            this._elementListeners.delete(o);
          const l = this._engine.playersByElement.get(o);
          l &&
            (l.forEach((f) => f.destroy()),
            this._engine.playersByElement.delete(o));
        }
        _signalRemovalForInnerTriggers(o, l) {
          const f = this._engine.driver.query(o, Ir, !0);
          f.forEach((w) => {
            if (w[mn]) return;
            const M = this._engine.fetchNamespacesByElement(w);
            M.size
              ? M.forEach((x) => x.triggerLeaveAnimation(w, l, !1, !0))
              : this.clearElementCache(w);
          }),
            this._engine.afterFlushAnimationsDone(() =>
              f.forEach((w) => this.clearElementCache(w))
            );
        }
        triggerLeaveAnimation(o, l, f, w) {
          const M = this._engine.statesByElement.get(o);
          if (M) {
            const x = [];
            if (
              (Object.keys(M).forEach((k) => {
                if (this._triggers[k]) {
                  const H = this.trigger(o, k, Ci, w);
                  H && x.push(H);
                }
              }),
              x.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, o, !0, l),
                f && pn(x).onDone(() => this._engine.processLeaveNode(o)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(o) {
          const l = this._elementListeners.get(o),
            f = this._engine.statesByElement.get(o);
          if (l && f) {
            const w = new Set();
            l.forEach((M) => {
              const x = M.name;
              if (w.has(x)) return;
              w.add(x);
              const H = this._triggers[x].fallbackTransition,
                ee = f[x] || $s,
                me = new jo(Ci),
                Se = new $o(this.id, x, o);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: o,
                  triggerName: x,
                  transition: H,
                  fromState: ee,
                  toState: me,
                  player: Se,
                  isFallbackTransition: !0,
                });
            });
          }
        }
        removeNode(o, l) {
          const f = this._engine;
          if (
            (o.childElementCount && this._signalRemovalForInnerTriggers(o, l),
            this.triggerLeaveAnimation(o, l, !0))
          )
            return;
          let w = !1;
          if (f.totalAnimations) {
            const M = f.players.length ? f.playersByQueriedElement.get(o) : [];
            if (M && M.length) w = !0;
            else {
              let x = o;
              for (; (x = x.parentNode); )
                if (f.statesByElement.get(x)) {
                  w = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(o), w))
            f.markElementAsRemoved(this.id, o, !1, l);
          else {
            const M = o[mn];
            (!M || M === pa) &&
              (f.afterFlush(() => this.clearElementCache(o)),
              f.destroyInnerAnimations(o),
              f._onRemovalComplete(o, l));
          }
        }
        insertNode(o, l) {
          Kn(o, this._hostClassName);
        }
        drainQueuedTransitions(o) {
          const l = [];
          return (
            this._queue.forEach((f) => {
              const w = f.player;
              if (w.destroyed) return;
              const M = f.element,
                x = this._elementListeners.get(M);
              x &&
                x.forEach((k) => {
                  if (k.name == f.triggerName) {
                    const H = ls(
                      M,
                      f.triggerName,
                      f.fromState.value,
                      f.toState.value
                    );
                    (H._data = o), qn(f.player, k.phase, H, k.callback);
                  }
                }),
                w.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      w.destroy();
                    })
                  : l.push(f);
            }),
            (this._queue = []),
            l.sort((f, w) => {
              const M = f.transition.ast.depCount,
                x = w.transition.ast.depCount;
              return 0 == M || 0 == x
                ? M - x
                : this._engine.driver.containsElement(f.element, w.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(o) {
          this.players.forEach((l) => l.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, o);
        }
        elementContainsData(o) {
          let l = !1;
          return (
            this._elementListeners.has(o) && (l = !0),
            (l = !!this._queue.find((f) => f.element === o) || l),
            l
          );
        }
      }
      class On {
        constructor(o, l, f) {
          (this.bodyNode = o),
            (this.driver = l),
            (this._normalizer = f),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (w, M) => {});
        }
        _onRemovalComplete(o, l) {
          this.onRemovalComplete(o, l);
        }
        get queuedPlayers() {
          const o = [];
          return (
            this._namespaceList.forEach((l) => {
              l.players.forEach((f) => {
                f.queued && o.push(f);
              });
            }),
            o
          );
        }
        createNamespace(o, l) {
          const f = new Uo(o, l, this);
          return (
            this.bodyNode && this.driver.containsElement(this.bodyNode, l)
              ? this._balanceNamespaceList(f, l)
              : (this.newHostElements.set(l, f), this.collectEnterElement(l)),
            (this._namespaceLookup[o] = f)
          );
        }
        _balanceNamespaceList(o, l) {
          const f = this._namespaceList.length - 1;
          if (f >= 0) {
            let w = !1;
            for (let M = f; M >= 0; M--)
              if (
                this.driver.containsElement(
                  this._namespaceList[M].hostElement,
                  l
                )
              ) {
                this._namespaceList.splice(M + 1, 0, o), (w = !0);
                break;
              }
            w || this._namespaceList.splice(0, 0, o);
          } else this._namespaceList.push(o);
          return this.namespacesByHostElement.set(l, o), o;
        }
        register(o, l) {
          let f = this._namespaceLookup[o];
          return f || (f = this.createNamespace(o, l)), f;
        }
        registerTrigger(o, l, f) {
          let w = this._namespaceLookup[o];
          w && w.register(l, f) && this.totalAnimations++;
        }
        destroy(o, l) {
          if (!o) return;
          const f = this._fetchNamespace(o);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(f.hostElement),
              delete this._namespaceLookup[o];
            const w = this._namespaceList.indexOf(f);
            w >= 0 && this._namespaceList.splice(w, 1);
          }),
            this.afterFlushAnimationsDone(() => f.destroy(l));
        }
        _fetchNamespace(o) {
          return this._namespaceLookup[o];
        }
        fetchNamespacesByElement(o) {
          const l = new Set(),
            f = this.statesByElement.get(o);
          if (f) {
            const w = Object.keys(f);
            for (let M = 0; M < w.length; M++) {
              const x = f[w[M]].namespaceId;
              if (x) {
                const k = this._fetchNamespace(x);
                k && l.add(k);
              }
            }
          }
          return l;
        }
        trigger(o, l, f, w) {
          if (zr(l)) {
            const M = this._fetchNamespace(o);
            if (M) return M.trigger(l, f, w), !0;
          }
          return !1;
        }
        insertNode(o, l, f, w) {
          if (!zr(l)) return;
          const M = l[mn];
          if (M && M.setForRemoval) {
            (M.setForRemoval = !1), (M.setForMove = !0);
            const x = this.collectedLeaveElements.indexOf(l);
            x >= 0 && this.collectedLeaveElements.splice(x, 1);
          }
          if (o) {
            const x = this._fetchNamespace(o);
            x && x.insertNode(l, f);
          }
          w && this.collectEnterElement(l);
        }
        collectEnterElement(o) {
          this.collectedEnterElements.push(o);
        }
        markElementAsDisabled(o, l) {
          l
            ? this.disabledNodes.has(o) ||
              (this.disabledNodes.add(o), Kn(o, zi))
            : this.disabledNodes.has(o) &&
              (this.disabledNodes.delete(o), Qn(o, zi));
        }
        removeNode(o, l, f, w) {
          if (zr(l)) {
            const M = o ? this._fetchNamespace(o) : null;
            if (
              (M ? M.removeNode(l, w) : this.markElementAsRemoved(o, l, !1, w),
              f)
            ) {
              const x = this.namespacesByHostElement.get(l);
              x && x.id !== o && x.removeNode(l, w);
            }
          } else this._onRemovalComplete(l, w);
        }
        markElementAsRemoved(o, l, f, w) {
          this.collectedLeaveElements.push(l),
            (l[mn] = {
              namespaceId: o,
              setForRemoval: w,
              hasAnimation: f,
              removedBeforeQueried: !1,
            });
        }
        listen(o, l, f, w, M) {
          return zr(l) ? this._fetchNamespace(o).listen(l, f, w, M) : () => {};
        }
        _buildInstruction(o, l, f, w, M) {
          return o.transition.build(
            this.driver,
            o.element,
            o.fromState.value,
            o.toState.value,
            f,
            w,
            o.fromState.options,
            o.toState.options,
            l,
            M
          );
        }
        destroyInnerAnimations(o) {
          let l = this.driver.query(o, Ir, !0);
          l.forEach((f) => this.destroyActiveAnimationsForElement(f)),
            0 != this.playersByQueriedElement.size &&
              ((l = this.driver.query(o, fs, !0)),
              l.forEach((f) => this.finishActiveQueriedAnimationOnElement(f)));
        }
        destroyActiveAnimationsForElement(o) {
          const l = this.playersByElement.get(o);
          l &&
            l.forEach((f) => {
              f.queued ? (f.markedForDestroy = !0) : f.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(o) {
          const l = this.playersByQueriedElement.get(o);
          l && l.forEach((f) => f.finish());
        }
        whenRenderingDone() {
          return new Promise((o) => {
            if (this.players.length) return pn(this.players).onDone(() => o());
            o();
          });
        }
        processLeaveNode(o) {
          const l = o[mn];
          if (l && l.setForRemoval) {
            if (((o[mn] = pa), l.namespaceId)) {
              this.destroyInnerAnimations(o);
              const f = this._fetchNamespace(l.namespaceId);
              f && f.clearElementCache(o);
            }
            this._onRemovalComplete(o, l.setForRemoval);
          }
          this.driver.matchesElement(o, js) &&
            this.markElementAsDisabled(o, !1),
            this.driver.query(o, js, !0).forEach((f) => {
              this.markElementAsDisabled(f, !1);
            });
        }
        flush(o = -1) {
          let l = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((f, w) =>
                this._balanceNamespaceList(f, w)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let f = 0; f < this.collectedEnterElements.length; f++)
              Kn(this.collectedEnterElements[f], "ng-star-inserted");
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const f = [];
            try {
              l = this._flushAnimations(f, o);
            } finally {
              for (let w = 0; w < f.length; w++) f[w]();
            }
          } else
            for (let f = 0; f < this.collectedLeaveElements.length; f++)
              this.processLeaveNode(this.collectedLeaveElements[f]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((f) => f()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const f = this._whenQuietFns;
            (this._whenQuietFns = []),
              l.length
                ? pn(l).onDone(() => {
                    f.forEach((w) => w());
                  })
                : f.forEach((w) => w());
          }
        }
        reportError(o) {
          throw new Error(
            `Unable to process animations due to the following failed trigger transitions\n ${o.join(
              "\n"
            )}`
          );
        }
        _flushAnimations(o, l) {
          const f = new Ls(),
            w = [],
            M = new Map(),
            x = [],
            k = new Map(),
            H = new Map(),
            ee = new Map(),
            me = new Set();
          this.disabledNodes.forEach((ye) => {
            me.add(ye);
            const Fe = this.driver.query(ye, ".ng-animate-queued", !0);
            for (let We = 0; We < Fe.length; We++) me.add(Fe[We]);
          });
          const Se = this.bodyNode,
            qe = Array.from(this.statesByElement.keys()),
            ot = Ki(qe, this.collectedEnterElements),
            ke = new Map();
          let Ye = 0;
          ot.forEach((ye, Fe) => {
            const We = Tr + Ye++;
            ke.set(Fe, We), ye.forEach((tt) => Kn(tt, We));
          });
          const et = [],
            It = new Set(),
            Rt = new Set();
          for (let ye = 0; ye < this.collectedLeaveElements.length; ye++) {
            const Fe = this.collectedLeaveElements[ye],
              We = Fe[mn];
            We &&
              We.setForRemoval &&
              (et.push(Fe),
              It.add(Fe),
              We.hasAnimation
                ? this.driver
                    .query(Fe, ".ng-star-inserted", !0)
                    .forEach((tt) => It.add(tt))
                : Rt.add(Fe));
          }
          const Zn = new Map(),
            zt = Ki(qe, Array.from(It));
          zt.forEach((ye, Fe) => {
            const We = ds + Ye++;
            Zn.set(Fe, We), ye.forEach((tt) => Kn(tt, We));
          }),
            o.push(() => {
              ot.forEach((ye, Fe) => {
                const We = ke.get(Fe);
                ye.forEach((tt) => Qn(tt, We));
              }),
                zt.forEach((ye, Fe) => {
                  const We = Zn.get(Fe);
                  ye.forEach((tt) => Qn(tt, We));
                }),
                et.forEach((ye) => {
                  this.processLeaveNode(ye);
                });
            });
          const bi = [],
            Ln = [];
          for (let ye = this._namespaceList.length - 1; ye >= 0; ye--)
            this._namespaceList[ye].drainQueuedTransitions(l).forEach((We) => {
              const tt = We.player,
                jt = We.element;
              if ((bi.push(tt), this.collectedEnterElements.length)) {
                const yn = jt[mn];
                if (yn && yn.setForMove) return void tt.destroy();
              }
              const Es = !Se || !this.driver.containsElement(Se, jt),
                Jn = Zn.get(jt),
                qs = ke.get(jt),
                qt = this._buildInstruction(We, f, qs, Jn, Es);
              if (qt.errors && qt.errors.length) Ln.push(qt);
              else {
                if (Es)
                  return (
                    tt.onStart(() => _(jt, qt.fromStyles)),
                    tt.onDestroy(() => v(jt, qt.toStyles)),
                    void w.push(tt)
                  );
                if (We.isFallbackTransition)
                  return (
                    tt.onStart(() => _(jt, qt.fromStyles)),
                    tt.onDestroy(() => v(jt, qt.toStyles)),
                    void w.push(tt)
                  );
                qt.timelines.forEach((yn) => (yn.stretchStartingKeyframe = !0)),
                  f.append(jt, qt.timelines),
                  x.push({ instruction: qt, player: tt, element: jt }),
                  qt.queriedElements.forEach((yn) => Bt(k, yn, []).push(tt)),
                  qt.preStyleProps.forEach((yn, wi) => {
                    const Zr = Object.keys(yn);
                    if (Zr.length) {
                      let so = H.get(wi);
                      so || H.set(wi, (so = new Set())),
                        Zr.forEach((Da) => so.add(Da));
                    }
                  }),
                  qt.postStyleProps.forEach((yn, wi) => {
                    const Zr = Object.keys(yn);
                    let so = ee.get(wi);
                    so || ee.set(wi, (so = new Set())),
                      Zr.forEach((Da) => so.add(Da));
                  });
              }
            });
          if (Ln.length) {
            const ye = [];
            Ln.forEach((Fe) => {
              ye.push(`@${Fe.triggerName} has failed due to:\n`),
                Fe.errors.forEach((We) => ye.push(`- ${We}\n`));
            }),
              bi.forEach((Fe) => Fe.destroy()),
              this.reportError(ye);
          }
          const Bn = new Map(),
            Ws = new Map();
          x.forEach((ye) => {
            const Fe = ye.element;
            f.has(Fe) &&
              (Ws.set(Fe, Fe),
              this._beforeAnimationBuild(
                ye.player.namespaceId,
                ye.instruction,
                Bn
              ));
          }),
            w.forEach((ye) => {
              const Fe = ye.element;
              this._getPreviousPlayers(
                Fe,
                !1,
                ye.namespaceId,
                ye.triggerName,
                null
              ).forEach((tt) => {
                Bt(Bn, Fe, []).push(tt), tt.destroy();
              });
            });
          const zs = et.filter((ye) => vo(ye, H, ee)),
            Kr = new Map();
          Yi(Kr, this.driver, Rt, ee, dn).forEach((ye) => {
            vo(ye, H, ee) && zs.push(ye);
          });
          const no = new Map();
          ot.forEach((ye, Fe) => {
            Yi(no, this.driver, new Set(ye), H, "!");
          }),
            zs.forEach((ye) => {
              const Fe = Kr.get(ye),
                We = no.get(ye);
              Kr.set(ye, Object.assign(Object.assign({}, Fe), We));
            });
          const Qr = [],
            ro = [],
            au = {};
          x.forEach((ye) => {
            const { element: Fe, player: We, instruction: tt } = ye;
            if (f.has(Fe)) {
              if (me.has(Fe))
                return (
                  We.onDestroy(() => v(Fe, tt.toStyles)),
                  (We.disabled = !0),
                  We.overrideTotalTime(tt.totalTime),
                  void w.push(We)
                );
              let jt = au;
              if (Ws.size > 1) {
                let Jn = Fe;
                const qs = [];
                for (; (Jn = Jn.parentNode); ) {
                  const qt = Ws.get(Jn);
                  if (qt) {
                    jt = qt;
                    break;
                  }
                  qs.push(Jn);
                }
                qs.forEach((qt) => Ws.set(qt, jt));
              }
              const Es = this._buildAnimation(
                We.namespaceId,
                tt,
                Bn,
                M,
                no,
                Kr
              );
              if ((We.setRealPlayer(Es), jt === au)) Qr.push(We);
              else {
                const Jn = this.playersByElement.get(jt);
                Jn && Jn.length && (We.parentPlayer = pn(Jn)), w.push(We);
              }
            } else
              _(Fe, tt.fromStyles),
                We.onDestroy(() => v(Fe, tt.toStyles)),
                ro.push(We),
                me.has(Fe) && w.push(We);
          }),
            ro.forEach((ye) => {
              const Fe = M.get(ye.element);
              if (Fe && Fe.length) {
                const We = pn(Fe);
                ye.setRealPlayer(We);
              }
            }),
            w.forEach((ye) => {
              ye.parentPlayer
                ? ye.syncPlayerEvents(ye.parentPlayer)
                : ye.destroy();
            });
          for (let ye = 0; ye < et.length; ye++) {
            const Fe = et[ye],
              We = Fe[mn];
            if ((Qn(Fe, ds), We && We.hasAnimation)) continue;
            let tt = [];
            if (k.size) {
              let Es = k.get(Fe);
              Es && Es.length && tt.push(...Es);
              let Jn = this.driver.query(Fe, fs, !0);
              for (let qs = 0; qs < Jn.length; qs++) {
                let qt = k.get(Jn[qs]);
                qt && qt.length && tt.push(...qt);
              }
            }
            const jt = tt.filter((Es) => !Es.destroyed);
            jt.length ? Co(this, Fe, jt) : this.processLeaveNode(Fe);
          }
          return (
            (et.length = 0),
            Qr.forEach((ye) => {
              this.players.push(ye),
                ye.onDone(() => {
                  ye.destroy();
                  const Fe = this.players.indexOf(ye);
                  this.players.splice(Fe, 1);
                }),
                ye.play();
            }),
            Qr
          );
        }
        elementContainsData(o, l) {
          let f = !1;
          const w = l[mn];
          return (
            w && w.setForRemoval && (f = !0),
            this.playersByElement.has(l) && (f = !0),
            this.playersByQueriedElement.has(l) && (f = !0),
            this.statesByElement.has(l) && (f = !0),
            this._fetchNamespace(o).elementContainsData(l) || f
          );
        }
        afterFlush(o) {
          this._flushFns.push(o);
        }
        afterFlushAnimationsDone(o) {
          this._whenQuietFns.push(o);
        }
        _getPreviousPlayers(o, l, f, w, M) {
          let x = [];
          if (l) {
            const k = this.playersByQueriedElement.get(o);
            k && (x = k);
          } else {
            const k = this.playersByElement.get(o);
            if (k) {
              const H = !M || M == Ci;
              k.forEach((ee) => {
                ee.queued || (!H && ee.triggerName != w) || x.push(ee);
              });
            }
          }
          return (
            (f || w) &&
              (x = x.filter(
                (k) => !((f && f != k.namespaceId) || (w && w != k.triggerName))
              )),
            x
          );
        }
        _beforeAnimationBuild(o, l, f) {
          const M = l.element,
            x = l.isRemovalTransition ? void 0 : o,
            k = l.isRemovalTransition ? void 0 : l.triggerName;
          for (const H of l.timelines) {
            const ee = H.element,
              me = ee !== M,
              Se = Bt(f, ee, []);
            this._getPreviousPlayers(ee, me, x, k, l.toState).forEach((ot) => {
              const ke = ot.getRealPlayer();
              ke.beforeDestroy && ke.beforeDestroy(), ot.destroy(), Se.push(ot);
            });
          }
          _(M, l.fromStyles);
        }
        _buildAnimation(o, l, f, w, M, x) {
          const k = l.triggerName,
            H = l.element,
            ee = [],
            me = new Set(),
            Se = new Set(),
            qe = l.timelines.map((ke) => {
              const Ye = ke.element;
              me.add(Ye);
              const et = Ye[mn];
              if (et && et.removedBeforeQueried)
                return new Dn(ke.duration, ke.delay);
              const It = Ye !== H,
                Rt = (function (m) {
                  const o = [];
                  return iu(m, o), o;
                })((f.get(Ye) || Us).map((Bn) => Bn.getRealPlayer())).filter(
                  (Bn) => !!Bn.element && Bn.element === Ye
                ),
                Zn = M.get(Ye),
                zt = x.get(Ye),
                bi = Jt(0, this._normalizer, 0, ke.keyframes, Zn, zt),
                Ln = this._buildPlayer(ke, bi, Rt);
              if ((ke.subTimeline && w && Se.add(Ye), It)) {
                const Bn = new $o(o, k, Ye);
                Bn.setRealPlayer(Ln), ee.push(Bn);
              }
              return Ln;
            });
          ee.forEach((ke) => {
            Bt(this.playersByQueriedElement, ke.element, []).push(ke),
              ke.onDone(() =>
                (function (m, o, l) {
                  let f;
                  if (m instanceof Map) {
                    if (((f = m.get(o)), f)) {
                      if (f.length) {
                        const w = f.indexOf(l);
                        f.splice(w, 1);
                      }
                      0 == f.length && m.delete(o);
                    }
                  } else if (((f = m[o]), f)) {
                    if (f.length) {
                      const w = f.indexOf(l);
                      f.splice(w, 1);
                    }
                    0 == f.length && delete m[o];
                  }
                  return f;
                })(this.playersByQueriedElement, ke.element, ke)
              );
          }),
            me.forEach((ke) => Kn(ke, Gr));
          const ot = pn(qe);
          return (
            ot.onDestroy(() => {
              me.forEach((ke) => Qn(ke, Gr)), v(H, l.toStyles);
            }),
            Se.forEach((ke) => {
              Bt(w, ke, []).push(ot);
            }),
            ot
          );
        }
        _buildPlayer(o, l, f) {
          return l.length > 0
            ? this.driver.animate(
                o.element,
                l,
                o.duration,
                o.delay,
                o.easing,
                f
              )
            : new Dn(o.duration, o.delay);
        }
      }
      class $o {
        constructor(o, l, f) {
          (this.namespaceId = o),
            (this.triggerName = l),
            (this.element = f),
            (this._player = new Dn()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(o) {
          this._containsRealPlayer ||
            ((this._player = o),
            Object.keys(this._queuedCallbacks).forEach((l) => {
              this._queuedCallbacks[l].forEach((f) => qn(o, l, void 0, f));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(o.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(o) {
          this.totalTime = o;
        }
        syncPlayerEvents(o) {
          const l = this._player;
          l.triggerCallback && o.onStart(() => l.triggerCallback("start")),
            o.onDone(() => this.finish()),
            o.onDestroy(() => this.destroy());
        }
        _queueEvent(o, l) {
          Bt(this._queuedCallbacks, o, []).push(l);
        }
        onDone(o) {
          this.queued && this._queueEvent("done", o), this._player.onDone(o);
        }
        onStart(o) {
          this.queued && this._queueEvent("start", o), this._player.onStart(o);
        }
        onDestroy(o) {
          this.queued && this._queueEvent("destroy", o),
            this._player.onDestroy(o);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(o) {
          this.queued || this._player.setPosition(o);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(o) {
          const l = this._player;
          l.triggerCallback && l.triggerCallback(o);
        }
      }
      function zr(m) {
        return m && 1 === m.nodeType;
      }
      function _o(m, o) {
        const l = m.style.display;
        return (m.style.display = null != o ? o : "none"), l;
      }
      function Yi(m, o, l, f, w) {
        const M = [];
        l.forEach((H) => M.push(_o(H)));
        const x = [];
        f.forEach((H, ee) => {
          const me = {};
          H.forEach((Se) => {
            const qe = (me[Se] = o.computeStyle(ee, Se, w));
            (!qe || 0 == qe.length) && ((ee[mn] = ms), x.push(ee));
          }),
            m.set(ee, me);
        });
        let k = 0;
        return l.forEach((H) => _o(H, M[k++])), x;
      }
      function Ki(m, o) {
        const l = new Map();
        if ((m.forEach((k) => l.set(k, [])), 0 == o.length)) return l;
        const w = new Set(o),
          M = new Map();
        function x(k) {
          if (!k) return 1;
          let H = M.get(k);
          if (H) return H;
          const ee = k.parentNode;
          return (H = l.has(ee) ? ee : w.has(ee) ? 1 : x(ee)), M.set(k, H), H;
        }
        return (
          o.forEach((k) => {
            const H = x(k);
            1 !== H && l.get(H).push(k);
          }),
          l
        );
      }
      const Qi = "$$classes";
      function Kn(m, o) {
        if (m.classList) m.classList.add(o);
        else {
          let l = m[Qi];
          l || (l = m[Qi] = {}), (l[o] = !0);
        }
      }
      function Qn(m, o) {
        if (m.classList) m.classList.remove(o);
        else {
          let l = m[Qi];
          l && delete l[o];
        }
      }
      function Co(m, o, l) {
        pn(l).onDone(() => m.processLeaveNode(o));
      }
      function iu(m, o) {
        for (let l = 0; l < m.length; l++) {
          const f = m[l];
          f instanceof hn ? iu(f.players, o) : o.push(f);
        }
      }
      function vo(m, o, l) {
        const f = l.get(m);
        if (!f) return !1;
        let w = o.get(m);
        return w ? f.forEach((M) => w.add(M)) : o.set(m, f), l.delete(m), !0;
      }
      class Eo {
        constructor(o, l, f) {
          (this.bodyNode = o),
            (this._driver = l),
            (this._normalizer = f),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (w, M) => {}),
            (this._transitionEngine = new On(o, l, f)),
            (this._timelineEngine = new Lo(o, l, f)),
            (this._transitionEngine.onRemovalComplete = (w, M) =>
              this.onRemovalComplete(w, M));
        }
        registerTrigger(o, l, f, w, M) {
          const x = o + "-" + w;
          let k = this._triggerCache[x];
          if (!k) {
            const H = [],
              ee = No(this._driver, M, H);
            if (H.length)
              throw new Error(
                `The animation trigger "${w}" has failed to build due to the following errors:\n - ${H.join(
                  "\n - "
                )}`
              );
            (k = (function (m, o, l) {
              return new Mt(m, o, l);
            })(w, ee, this._normalizer)),
              (this._triggerCache[x] = k);
          }
          this._transitionEngine.registerTrigger(l, w, k);
        }
        register(o, l) {
          this._transitionEngine.register(o, l);
        }
        destroy(o, l) {
          this._transitionEngine.destroy(o, l);
        }
        onInsert(o, l, f, w) {
          this._transitionEngine.insertNode(o, l, f, w);
        }
        onRemove(o, l, f, w) {
          this._transitionEngine.removeNode(o, l, w || !1, f);
        }
        disableAnimations(o, l) {
          this._transitionEngine.markElementAsDisabled(o, l);
        }
        process(o, l, f, w) {
          if ("@" == f.charAt(0)) {
            const [M, x] = Ps(f);
            this._timelineEngine.command(M, l, x, w);
          } else this._transitionEngine.trigger(o, l, f, w);
        }
        listen(o, l, f, w, M) {
          if ("@" == f.charAt(0)) {
            const [x, k] = Ps(f);
            return this._timelineEngine.listen(x, l, k, M);
          }
          return this._transitionEngine.listen(o, l, f, w, M);
        }
        flush(o = -1) {
          this._transitionEngine.flush(o);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      function ma(m, o) {
        let l = null,
          f = null;
        return (
          Array.isArray(o) && o.length
            ? ((l = Ji(o[0])), o.length > 1 && (f = Ji(o[o.length - 1])))
            : o && (l = Ji(o)),
          l || f ? new Zi(m, l, f) : null
        );
      }
      let Zi = (() => {
        class m {
          constructor(l, f, w) {
            (this._element = l),
              (this._startStyles = f),
              (this._endStyles = w),
              (this._state = 0);
            let M = m.initialStylesByElement.get(l);
            M || m.initialStylesByElement.set(l, (M = {})),
              (this._initialStyles = M);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                v(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (v(this._element, this._initialStyles),
                this._endStyles &&
                  (v(this._element, this._endStyles), (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (m.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (_(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (_(this._element, this._endStyles), (this._endStyles = null)),
                v(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (m.initialStylesByElement = new WeakMap()), m;
      })();
      function Ji(m) {
        let o = null;
        const l = Object.keys(m);
        for (let f = 0; f < l.length; f++) {
          const w = l[f];
          Go(w) && ((o = o || {}), (o[w] = m[w]));
        }
        return o;
      }
      function Go(m) {
        return "display" === m || "position" === m;
      }
      const Xi = "animation",
        Wo = "animationend";
      class _a {
        constructor(o, l, f, w, M, x, k) {
          (this._element = o),
            (this._name = l),
            (this._duration = f),
            (this._delay = w),
            (this._easing = M),
            (this._fillMode = x),
            (this._onDoneFn = k),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = (H) => this._handleCallback(H));
        }
        apply() {
          (function (m, o) {
            const l = p(m, "").trim();
            let f = 0;
            l.length &&
              ((function (m, o) {
                let l = 0;
                for (let f = 0; f < m.length; f++) "," === m.charAt(f) && l++;
                return l;
              })(l) + 1,
              (o = `${l}, ${o}`)),
              qo(m, "", o);
          })(
            this._element,
            `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
          ),
            Di(this._element, this._eventFn, !1),
            (this._startTime = Date.now());
        }
        pause() {
          zo(this._element, this._name, "paused");
        }
        resume() {
          zo(this._element, this._name, "running");
        }
        setPosition(o) {
          const l = Ca(this._element, this._name);
          (this._position = o * this._duration),
            qo(this._element, "Delay", `-${this._position}ms`, l);
        }
        getPosition() {
          return this._position;
        }
        _handleCallback(o) {
          const l = o._ngTestManualTimestamp || Date.now(),
            f = 1e3 * parseFloat(o.elapsedTime.toFixed(3));
          o.animationName == this._name &&
            Math.max(l - this._startTime, 0) >= this._delay &&
            f >= this._duration &&
            this.finish();
        }
        finish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFn(),
            Di(this._element, this._eventFn, !0));
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.finish(),
            (function (m, o) {
              const f = p(m, "").split(","),
                w = Gs(f, o);
              w >= 0 && (f.splice(w, 1), qo(m, "", f.join(",")));
            })(this._element, this._name));
        }
      }
      function zo(m, o, l) {
        qo(m, "PlayState", l, Ca(m, o));
      }
      function Ca(m, o) {
        const l = p(m, "");
        return l.indexOf(",") > 0 ? Gs(l.split(","), o) : Gs([l], o);
      }
      function Gs(m, o) {
        for (let l = 0; l < m.length; l++) if (m[l].indexOf(o) >= 0) return l;
        return -1;
      }
      function Di(m, o, l) {
        l ? m.removeEventListener(Wo, o) : m.addEventListener(Wo, o);
      }
      function qo(m, o, l, f) {
        const w = Xi + o;
        if (null != f) {
          const M = m.style[w];
          if (M.length) {
            const x = M.split(",");
            (x[f] = l), (l = x.join(","));
          }
        }
        m.style[w] = l;
      }
      function p(m, o) {
        return m.style[Xi + o] || "";
      }
      class S {
        constructor(o, l, f, w, M, x, k, H) {
          (this.element = o),
            (this.keyframes = l),
            (this.animationName = f),
            (this._duration = w),
            (this._delay = M),
            (this._finalStyles = k),
            (this._specialStyles = H),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this.currentSnapshot = {}),
            (this._state = 0),
            (this.easing = x || "linear"),
            (this.totalTime = w + M),
            this._buildStyler();
        }
        onStart(o) {
          this._onStartFns.push(o);
        }
        onDone(o) {
          this._onDoneFns.push(o);
        }
        onDestroy(o) {
          this._onDestroyFns.push(o);
        }
        destroy() {
          this.init(),
            !(this._state >= 4) &&
              ((this._state = 4),
              this._styler.destroy(),
              this._flushStartFns(),
              this._flushDoneFns(),
              this._specialStyles && this._specialStyles.destroy(),
              this._onDestroyFns.forEach((o) => o()),
              (this._onDestroyFns = []));
        }
        _flushDoneFns() {
          this._onDoneFns.forEach((o) => o()), (this._onDoneFns = []);
        }
        _flushStartFns() {
          this._onStartFns.forEach((o) => o()), (this._onStartFns = []);
        }
        finish() {
          this.init(),
            !(this._state >= 3) &&
              ((this._state = 3),
              this._styler.finish(),
              this._flushStartFns(),
              this._specialStyles && this._specialStyles.finish(),
              this._flushDoneFns());
        }
        setPosition(o) {
          this._styler.setPosition(o);
        }
        getPosition() {
          return this._styler.getPosition();
        }
        hasStarted() {
          return this._state >= 2;
        }
        init() {
          this._state >= 1 ||
            ((this._state = 1),
            this._styler.apply(),
            this._delay && this._styler.pause());
        }
        play() {
          this.init(),
            this.hasStarted() ||
              (this._flushStartFns(),
              (this._state = 2),
              this._specialStyles && this._specialStyles.start()),
            this._styler.resume();
        }
        pause() {
          this.init(), this._styler.pause();
        }
        restart() {
          this.reset(), this.play();
        }
        reset() {
          (this._state = 0),
            this._styler.destroy(),
            this._buildStyler(),
            this._styler.apply();
        }
        _buildStyler() {
          this._styler = new _a(
            this.element,
            this.animationName,
            this._duration,
            this._delay,
            this.easing,
            "forwards",
            () => this.finish()
          );
        }
        triggerCallback(o) {
          const l = "start" == o ? this._onStartFns : this._onDoneFns;
          l.forEach((f) => f()), (l.length = 0);
        }
        beforeDestroy() {
          this.init();
          const o = {};
          if (this.hasStarted()) {
            const l = this._state >= 3;
            Object.keys(this._finalStyles).forEach((f) => {
              "offset" != f &&
                (o[f] = l ? this._finalStyles[f] : kn(this.element, f));
            });
          }
          this.currentSnapshot = o;
        }
      }
      class R extends Dn {
        constructor(o, l) {
          super(),
            (this.element = o),
            (this._startingStyles = {}),
            (this.__initialized = !1),
            (this._styles = Bi(l));
        }
        init() {
          this.__initialized ||
            !this._startingStyles ||
            ((this.__initialized = !0),
            Object.keys(this._styles).forEach((o) => {
              this._startingStyles[o] = this.element.style[o];
            }),
            super.init());
        }
        play() {
          !this._startingStyles ||
            (this.init(),
            Object.keys(this._styles).forEach((o) =>
              this.element.style.setProperty(o, this._styles[o])
            ),
            super.play());
        }
        destroy() {
          !this._startingStyles ||
            (Object.keys(this._startingStyles).forEach((o) => {
              const l = this._startingStyles[o];
              l
                ? this.element.style.setProperty(o, l)
                : this.element.style.removeProperty(o);
            }),
            (this._startingStyles = null),
            super.destroy());
        }
      }
      class X {
        constructor() {
          this._count = 0;
        }
        validateStyleProperty(o) {
          return jr(o);
        }
        matchesElement(o, l) {
          return cr(o, l);
        }
        containsElement(o, l) {
          return Ur(o, l);
        }
        query(o, l, f) {
          return Sr(o, l, f);
        }
        computeStyle(o, l, f) {
          return window.getComputedStyle(o)[l];
        }
        buildKeyframeElement(o, l, f) {
          f = f.map((k) => Bi(k));
          let w = `@keyframes ${l} {\n`,
            M = "";
          f.forEach((k) => {
            M = " ";
            const H = parseFloat(k.offset);
            (w += `${M}${100 * H}% {\n`),
              (M += " "),
              Object.keys(k).forEach((ee) => {
                const me = k[ee];
                switch (ee) {
                  case "offset":
                    return;
                  case "easing":
                    return void (
                      me && (w += `${M}animation-timing-function: ${me};\n`)
                    );
                  default:
                    return void (w += `${M}${ee}: ${me};\n`);
                }
              }),
              (w += `${M}}\n`);
          }),
            (w += "}\n");
          const x = document.createElement("style");
          return (x.textContent = w), x;
        }
        animate(o, l, f, w, M, x = [], k) {
          const H = x.filter((et) => et instanceof S),
            ee = {};
          bn(f, w) &&
            H.forEach((et) => {
              let It = et.currentSnapshot;
              Object.keys(It).forEach((Rt) => (ee[Rt] = It[Rt]));
            });
          const me = (function (m) {
            let o = {};
            return (
              m &&
                (Array.isArray(m) ? m : [m]).forEach((f) => {
                  Object.keys(f).forEach((w) => {
                    "offset" == w || "easing" == w || (o[w] = f[w]);
                  });
                }),
              o
            );
          })((l = Yn(o, l, ee)));
          if (0 == f) return new R(o, me);
          const Se = "gen_css_kf_" + this._count++,
            qe = this.buildKeyframeElement(o, Se, l);
          (function (m) {
            var o;
            const l =
              null === (o = m.getRootNode) || void 0 === o ? void 0 : o.call(m);
            return "undefined" != typeof ShadowRoot && l instanceof ShadowRoot
              ? l
              : document.head;
          })(o).appendChild(qe);
          const ke = ma(o, l),
            Ye = new S(o, l, Se, f, w, M, me, ke);
          return (
            Ye.onDestroy(() => {
              var m;
              (m = qe).parentNode.removeChild(m);
            }),
            Ye
          );
        }
      }
      class qr {
        constructor(o, l, f, w) {
          (this.element = o),
            (this.keyframes = l),
            (this.options = f),
            (this._specialStyles = w),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = f.duration),
            (this._delay = f.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((o) => o()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const o = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            o,
            this.options
          )),
            (this._finalKeyframe = o.length ? o[o.length - 1] : {}),
            this.domPlayer.addEventListener("finish", () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(o, l, f) {
          return o.animate(l, f);
        }
        onStart(o) {
          this._onStartFns.push(o);
        }
        onDone(o) {
          this._onDoneFns.push(o);
        }
        onDestroy(o) {
          this._onDestroyFns.push(o);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((o) => o()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((o) => o()),
            (this._onDestroyFns = []));
        }
        setPosition(o) {
          void 0 === this.domPlayer && this.init(),
            (this.domPlayer.currentTime = o * this.time);
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const o = {};
          this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach((l) => {
              "offset" != l &&
                (o[l] = this._finished
                  ? this._finalKeyframe[l]
                  : kn(this.element, l));
            }),
            (this.currentSnapshot = o);
        }
        triggerCallback(o) {
          const l = "start" == o ? this._onStartFns : this._onDoneFns;
          l.forEach((f) => f()), (l.length = 0);
        }
      }
      class _s {
        constructor() {
          (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
            Ct().toString()
          )),
            (this._cssKeyframesDriver = new X());
        }
        validateStyleProperty(o) {
          return jr(o);
        }
        matchesElement(o, l) {
          return cr(o, l);
        }
        containsElement(o, l) {
          return Ur(o, l);
        }
        query(o, l, f) {
          return Sr(o, l, f);
        }
        computeStyle(o, l, f) {
          return window.getComputedStyle(o)[l];
        }
        overrideWebAnimationsSupport(o) {
          this._isNativeImpl = o;
        }
        animate(o, l, f, w, M, x = [], k) {
          if (!k && !this._isNativeImpl)
            return this._cssKeyframesDriver.animate(o, l, f, w, M, x);
          const me = {
            duration: f,
            delay: w,
            fill: 0 == w ? "both" : "forwards",
          };
          M && (me.easing = M);
          const Se = {},
            qe = x.filter((ke) => ke instanceof qr);
          bn(f, w) &&
            qe.forEach((ke) => {
              let Ye = ke.currentSnapshot;
              Object.keys(Ye).forEach((et) => (Se[et] = Ye[et]));
            });
          const ot = ma(o, (l = Yn(o, (l = l.map((ke) => B(ke, !1))), Se)));
          return new qr(o, l, me, ot);
        }
      }
      function Ct() {
        return (zn() && Element.prototype.animate) || {};
      }
      let Cs = (() => {
        class m extends Dr {
          constructor(l, f) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = l.createRenderer(f.body, {
                id: "0",
                encapsulation: N.ifc.None,
                styles: [],
                data: { animation: [] },
              }));
          }
          build(l) {
            const f = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const w = Array.isArray(l) ? En(l) : l;
            return (
              sc(this._renderer, null, f, "register", [w]),
              new Yr(f, this._renderer)
            );
          }
        }
        return (
          (m.ɵfac = function (l) {
            return new (l || m)(N.LFG(N.FYo), N.LFG(b.K0));
          }),
          (m.ɵprov = N.Yz7({ token: m, factory: m.ɵfac })),
          m
        );
      })();
      class Yr extends class {} {
        constructor(o, l) {
          super(), (this._id = o), (this._renderer = l);
        }
        create(o, l) {
          return new va(this._id, o, l || {}, this._renderer);
        }
      }
      class va {
        constructor(o, l, f, w) {
          (this.id = o),
            (this.element = l),
            (this._renderer = w),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command("create", f);
        }
        _listen(o, l) {
          return this._renderer.listen(this.element, `@@${this.id}:${o}`, l);
        }
        _command(o, ...l) {
          return sc(this._renderer, this.element, this.id, o, l);
        }
        onDone(o) {
          this._listen("done", o);
        }
        onStart(o) {
          this._listen("start", o);
        }
        onDestroy(o) {
          this._listen("destroy", o);
        }
        init() {
          this._command("init");
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command("play"), (this._started = !0);
        }
        pause() {
          this._command("pause");
        }
        restart() {
          this._command("restart");
        }
        finish() {
          this._command("finish");
        }
        destroy() {
          this._command("destroy");
        }
        reset() {
          this._command("reset"), (this._started = !1);
        }
        setPosition(o) {
          this._command("setPosition", o);
        }
        getPosition() {
          var o, l;
          return null !==
            (l =
              null === (o = this._renderer.engine.players[+this.id]) ||
              void 0 === o
                ? void 0
                : o.getPosition()) && void 0 !== l
            ? l
            : 0;
        }
      }
      function sc(m, o, l, f, w) {
        return m.setProperty(o, `@@${l}:${f}`, w);
      }
      const ic = "@.disabled";
      let xf = (() => {
        class m {
          constructor(l, f, w) {
            (this.delegate = l),
              (this.engine = f),
              (this._zone = w),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (f.onRemovalComplete = (M, x) => {
                x && x.parentNode(M) && x.removeChild(M.parentNode, M);
              });
          }
          createRenderer(l, f) {
            const M = this.delegate.createRenderer(l, f);
            if (!(l && f && f.data && f.data.animation)) {
              let me = this._rendererCache.get(M);
              return (
                me ||
                  ((me = new oc("", M, this.engine)),
                  this._rendererCache.set(M, me)),
                me
              );
            }
            const x = f.id,
              k = f.id + "-" + this._currentId;
            this._currentId++, this.engine.register(k, l);
            const H = (me) => {
              Array.isArray(me)
                ? me.forEach(H)
                : this.engine.registerTrigger(x, k, l, me.name, me);
            };
            return f.data.animation.forEach(H), new Vf(this, k, M, this.engine);
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            this.promise.then(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(l, f, w) {
            l >= 0 && l < this._microtaskId
              ? this._zone.run(() => f(w))
              : (0 == this._animationCallbacksBuffer.length &&
                  Promise.resolve(null).then(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach((M) => {
                        const [x, k] = M;
                        x(k);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([f, w]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
        }
        return (
          (m.ɵfac = function (l) {
            return new (l || m)(N.LFG(N.FYo), N.LFG(Eo), N.LFG(N.R0b));
          }),
          (m.ɵprov = N.Yz7({ token: m, factory: m.ɵfac })),
          m
        );
      })();
      class oc {
        constructor(o, l, f) {
          (this.namespaceId = o),
            (this.delegate = l),
            (this.engine = f),
            (this.destroyNode = this.delegate.destroyNode
              ? (w) => l.destroyNode(w)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy();
        }
        createElement(o, l) {
          return this.delegate.createElement(o, l);
        }
        createComment(o) {
          return this.delegate.createComment(o);
        }
        createText(o) {
          return this.delegate.createText(o);
        }
        appendChild(o, l) {
          this.delegate.appendChild(o, l),
            this.engine.onInsert(this.namespaceId, l, o, !1);
        }
        insertBefore(o, l, f, w = !0) {
          this.delegate.insertBefore(o, l, f),
            this.engine.onInsert(this.namespaceId, l, o, w);
        }
        removeChild(o, l, f) {
          this.engine.onRemove(this.namespaceId, l, this.delegate, f);
        }
        selectRootElement(o, l) {
          return this.delegate.selectRootElement(o, l);
        }
        parentNode(o) {
          return this.delegate.parentNode(o);
        }
        nextSibling(o) {
          return this.delegate.nextSibling(o);
        }
        setAttribute(o, l, f, w) {
          this.delegate.setAttribute(o, l, f, w);
        }
        removeAttribute(o, l, f) {
          this.delegate.removeAttribute(o, l, f);
        }
        addClass(o, l) {
          this.delegate.addClass(o, l);
        }
        removeClass(o, l) {
          this.delegate.removeClass(o, l);
        }
        setStyle(o, l, f, w) {
          this.delegate.setStyle(o, l, f, w);
        }
        removeStyle(o, l, f) {
          this.delegate.removeStyle(o, l, f);
        }
        setProperty(o, l, f) {
          "@" == l.charAt(0) && l == ic
            ? this.disableAnimations(o, !!f)
            : this.delegate.setProperty(o, l, f);
        }
        setValue(o, l) {
          this.delegate.setValue(o, l);
        }
        listen(o, l, f) {
          return this.delegate.listen(o, l, f);
        }
        disableAnimations(o, l) {
          this.engine.disableAnimations(o, l);
        }
      }
      class Vf extends oc {
        constructor(o, l, f, w) {
          super(l, f, w), (this.factory = o), (this.namespaceId = l);
        }
        setProperty(o, l, f) {
          "@" == l.charAt(0)
            ? "." == l.charAt(1) && l == ic
              ? this.disableAnimations(o, (f = void 0 === f || !!f))
              : this.engine.process(this.namespaceId, o, l.substr(1), f)
            : this.delegate.setProperty(o, l, f);
        }
        listen(o, l, f) {
          if ("@" == l.charAt(0)) {
            const w = (function (m) {
              switch (m) {
                case "body":
                  return document.body;
                case "document":
                  return document;
                case "window":
                  return window;
                default:
                  return m;
              }
            })(o);
            let M = l.substr(1),
              x = "";
            return (
              "@" != M.charAt(0) &&
                ([M, x] = (function (m) {
                  const o = m.indexOf(".");
                  return [m.substring(0, o), m.substr(o + 1)];
                })(M)),
              this.engine.listen(this.namespaceId, w, M, x, (k) => {
                this.factory.scheduleListenerCallback(k._data || -1, f, k);
              })
            );
          }
          return this.delegate.listen(o, l, f);
        }
      }
      let Yo = (() => {
        class m extends Eo {
          constructor(l, f, w) {
            super(l.body, f, w);
          }
          ngOnDestroy() {
            this.flush();
          }
        }
        return (
          (m.ɵfac = function (l) {
            return new (l || m)(N.LFG(b.K0), N.LFG(hi), N.LFG(xo));
          }),
          (m.ɵprov = N.Yz7({ token: m, factory: m.ɵfac })),
          m
        );
      })();
      const Ko = new N.OlP("AnimationModuleType"),
        ac = [
          { provide: Dr, useClass: Cs },
          {
            provide: xo,
            useFactory: function () {
              return new yo();
            },
          },
          { provide: Eo, useClass: Yo },
          {
            provide: N.FYo,
            useFactory: function (m, o, l) {
              return new xf(m, o, l);
            },
            deps: [Is, Eo, N.R0b],
          },
        ],
        ou = [
          {
            provide: hi,
            useFactory: function () {
              return "function" == typeof Ct() ? new _s() : new X();
            },
          },
          { provide: Ko, useValue: "BrowserAnimations" },
          ...ac,
        ],
        hr = [
          { provide: hi, useClass: Ar },
          { provide: Ko, useValue: "NoopAnimations" },
          ...ac,
        ];
      let vs = (() => {
          class m {
            static withConfig(l) {
              return { ngModule: m, providers: l.disableAnimations ? hr : ou };
            }
          }
          return (
            (m.ɵfac = function (l) {
              return new (l || m)();
            }),
            (m.ɵmod = N.oAB({ type: m })),
            (m.ɵinj = N.cJS({ providers: ou, imports: [Er] })),
            m
          );
        })(),
        eo = (() => {
          class m {}
          return (
            (m.ɵfac = function (l) {
              return new (l || m)();
            }),
            (m.ɵmod = N.oAB({ type: m, bootstrap: [Be] })),
            (m.ɵinj = N.cJS({ providers: [], imports: [[Er, Zt.u5, lr, vs]] })),
            m
          );
        })();
      (0, N.G48)(),
        vr()
          .bootstrapModule(eo)
          .catch((m) => console.error(m));
    },
  },
  (Ue) => {
    Ue((Ue.s = 2320));
  },
]);
