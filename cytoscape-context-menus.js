!function (e, t) {'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == typeof exports ? exports.cytoscapeContextMenus = t() : e.cytoscapeContextMenus = t()}(this, (() => (() => {
  var e = {
    70: (e, t, n) => {
      'use strict';


      function i (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i
      }


      function o (e, t) {
        var n = {};
        for (var i in e) n[i] = e[i];
        for (var o in t) n[o] instanceof Array ? n[o] = n[o].concat(t[o]) : n[o] = t[o];
        return n
      }


      function r (e) {
        for (var t = '', n = 0; n < e.length; n++) t += e[n], n !== e.length - 1 && (t += ' ');
        return t
      }


      function u (e, t, n) {n ? e.setAttribute(t, '') : e.removeAttribute(t)}


      function s (e, t, n) {void 0 === customElements.get(e) && customElements.define(e, t, { extends: n })}


      n.r(t), n.d(t, { contextMenus: () => j });
      var a = 'cy-context-menus-divider', c = 'cy-context-menus-submenu-indicator', l = {
        evtType: 'cxttap',
        menuItems: [],
        menuItemClasses: ['cy-context-menus-cxt-menuitem'],
        contextMenuClasses: ['cy-context-menus-cxt-menu'],
        submenuIndicator: { src: 'assets/submenu-indicator-default.svg', width: 12, height: 12 }
      };


      function f (e) {return f = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {return typeof e} : function (e) {return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e}, f(e)}


      function d (e, t) {
        var n = 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
        if (!n) {
          if (Array.isArray(e) || (n = function (e, t) {
            if (e) {
              if ('string' == typeof e) return h(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0
            }
          }(e)) || t && e && 'number' == typeof e.length) {
            n && (e = n);
            var i = 0, o = function () {};
            return {
              s: o,
              n: function () {return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] }},
              e: function (e) {throw e},
              f: o
            }
          }
          throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
        }
        var r, u = !0, s = !1;
        return {
          s: function () {n = n.call(e)},
          n: function () {
            var e = n.next();
            return u = e.done, e
          },
          e: function (e) {s = !0, r = e},
          f: function () {try {u || null == n.return || n.return()} finally {if (s) throw r}}
        }
      }


      function h (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i
      }


      function m (e, t) {if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')}


      function v (e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, p(i.key), i)
        }
      }


      function y (e, t, n) {return t && v(e.prototype, t), n && v(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e}


      function p (e) {
        var t = function (e) {
          if ('object' != f(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, 'string');
            if ('object' != f(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return String(e)
        }(e);
        return 'symbol' == f(t) ? t : t + ''
      }


      function b (e, t, n) {
        return t = k(t), function (e, t) {
          if (t && ('object' == f(t) || 'function' == typeof t)) return t;
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined');
          return function (e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
          }(e)
        }(e, I() ? Reflect.construct(t, n || [], k(e).constructor) : t.apply(e, n))
      }


      function g (e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, 'prototype', { writable: !1 }), t && M(e, t)
      }


      function w (e, t, n, i) {
        var o = x(k(1 & i ? e.prototype : e), t, n);
        return 2 & i && 'function' == typeof o ? function (e) {return o.apply(n, e)} : o
      }


      function x () {
        return x = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, n) {
          var i = function (e, t) {
            for (; !{}.hasOwnProperty.call(e, t) && null !== (e = k(e));) ;
            return e
          }(e, t);
          if (i) {
            var o = Object.getOwnPropertyDescriptor(i, t);
            return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value
          }
        }, x.apply(null, arguments)
      }


      function C (e) {
        var t = 'function' == typeof Map ? new Map : void 0;
        return C = function (e) {
          if (null === e || !function (e) {try {return -1 !== Function.toString.call(e).indexOf('[native code]')} catch (t) {return 'function' == typeof e}}(e)) return e;
          if ('function' != typeof e) throw new TypeError('Super expression must either be null or a function');
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
          }


          function n () {
            return function (e, t, n) {
              if (I()) return Reflect.construct.apply(null, arguments);
              var i = [null];
              i.push.apply(i, t);
              var o = new (e.bind.apply(e, i));
              return n && M(o, n.prototype), o
            }(e, arguments, k(this).constructor)
          }


          return n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), M(n, e)
        }, C(e)
      }


      function I () {
        try {var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {})))} catch (e) {}
        return (I = function () {return !!e})()
      }


      function M (e, t) {return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {return e.__proto__ = t, e}, M(e, t)}


      function k (e) {return k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {return e.__proto__ || Object.getPrototypeOf(e)}, k(e)}


      function E (e) {e.preventDefault(), e.stopPropagation()}


      var S = function (e) {
        function t (e, n, i) {
          var o, r;
          m(this, t), w(t, 'setAttribute', r = b(this, t), 3)(['id', e.id]);
          var s = r._getMenuItemClassStr(i.cxtMenuItemClasses, e.hasTrailingDivider);
          if (w(t, 'setAttribute', r, 3)(['class', s]), w(t, 'setAttribute', r, 3)(['title', null !== (o = e.tooltipText) && void 0 !== o ? o : '']), e.disabled && u(r, 'disabled', !0), e.image) {
            var a = document.createElement('img');
            a.src = e.image.src, a.width = e.image.width, a.height = e.image.height, a.style.position = 'absolute', a.style.top = e.image.y + 'px', a.style.left = e.image.x + 'px', w(t, 'appendChild', r, 3)([a])
          }
          if (r.innerHTML += e.content, r.onMenuItemClick = n, r.data = {}, r.clickFns = [], r.selector = e.selector, r.hasTrailingDivider = e.hasTrailingDivider, r.show = void 0 === e.show || e.show, r.coreAsWell = e.coreAsWell || !1, r.scratchpad = i, void 0 === e.onClickFunction && void 0 === e.submenu) throw new Error('A menu item must either have click function or a submenu or both');
          return r.onClickFunction = e.onClickFunction, e.submenu instanceof Array && r._createSubmenu(e.submenu), w(t, 'addEventListener', r, 3)(['mousedown', E]), w(t, 'addEventListener', r, 3)(['mouseup', E]), w(t, 'addEventListener', r, 3)(['touchstart', E]), w(t, 'addEventListener', r, 3)(['touchend', E]), r
        }


        return g(t, e), y(t, [{
          key: 'bindOnClickFunction',
          value: function (e) {this.clickFns.push(e), w(t, 'addEventListener', this, 3)(['click', e])}
        }, {
          key: 'unbindOnClickFunctions', value: function () {
            var e, n = d(this.clickFns);
            try {
              for (n.s(); !(e = n.n()).done;) {
                var i = e.value;
                w(t, 'removeEventListener', this, 3)(['click', i])
              }
            } catch (e) {n.e(e)} finally {n.f()}
            this.clickFns = []
          }
        }, {
          key: 'enable',
          value: function () {u(this, 'disabled', !1), this.hasSubmenu() && this.addEventListener('mouseenter', this.mouseEnterHandler)}
        }, {
          key: 'disable',
          value: function () {u(this, 'disabled', !0), this.hasSubmenu() && this.removeEventListener('mouseenter', this.mouseEnterHandler)}
        }, {
          key: 'hide',
          value: function () {this.show = !1, this.style.display = 'none'}
        }, {
          key: 'getHasTrailingDivider',
          value: function () {return !!this.hasTrailingDivider}
        }, { key: 'setHasTrailingDivider', value: function (e) {this.hasTrailingDivider = e} }, {
          key: 'hasSubmenu',
          value: function () {return this.submenu instanceof T}
        }, {
          key: 'appendSubmenuItem',
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            this.hasSubmenu() || this._createSubmenu(), this.submenu.appendMenuItem(e, t)
          }
        }, { key: 'isClickable', value: function () {return void 0 !== this.onClickFunction} }, {
          key: 'display',
          value: function () {this.show = !0, this.style.display = 'block'}
        }, {
          key: 'isVisible',
          value: function () {return !0 === this.show && 'none' !== this.style.display}
        }, {
          key: 'removeSubmenu',
          value: function () {this.hasSubmenu() && (this.submenu.removeAllMenuItems(), this.detachSubmenu())}
        }, {
          key: 'detachSubmenu',
          value: function () {this.hasSubmenu() && (this.removeChild(this.submenu), this.removeChild(this.indicator), this.removeEventListener('mouseenter', this.mouseEnterHandler), this.removeEventListener('mouseleave', this.mouseLeaveHandler), this.submenu = void 0, this.indicator = void 0)}
        }, {
          key: '_onMouseEnter', value: function (e) {
            var n = this.getBoundingClientRect(), i = function (e) {
              e.style.opacity = '0', e.style.display = 'block';
              var t = e.getBoundingClientRect();
              return e.style.opacity = '1', e.style.display = 'none', t
            }(this.submenu), o = n.right + i.width > window.innerWidth, r = n.top + i.height > window.innerHeight;
            o || r ? o && !r ? (this.submenu.style.right = this.clientWidth + 'px', this.submenu.style.top = '0px', this.submenu.style.left = 'auto', this.submenu.style.bottom = 'auto') : o && r ? (this.submenu.style.right = this.clientWidth + 'px', this.submenu.style.bottom = '0px', this.submenu.style.top = 'auto', this.submenu.style.left = 'auto') : (this.submenu.style.left = this.clientWidth + 'px', this.submenu.style.bottom = '0px', this.submenu.style.right = 'auto', this.submenu.style.top = 'auto') : (this.submenu.style.left = this.clientWidth + 'px', this.submenu.style.top = '0px', this.submenu.style.right = 'auto', this.submenu.style.bottom = 'auto'), this.submenu.display();
            var u = Array.from(this.submenu.children).filter((function (e) {if (e instanceof t) return e.isVisible()})),
              s = u.length;
            u.forEach((function (e, n) {e instanceof t && (n < s - 1 && e.getHasTrailingDivider() ? e.classList.add(a) : e.getHasTrailingDivider() && e.classList.remove(a))}))
          }
        }, {
          key: '_onMouseLeave', value: function (e) {
            var t, n, i, o, r;
            t = {
              x: e.clientX,
              y: e.clientY
            }, n = this.submenu, o = t.y, (i = t.x) >= (r = n.getBoundingClientRect()).left && i <= r.right && o >= r.top && o <= r.bottom || this.submenu.hide()
          }
        }, {
          key: '_createSubmenu',
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            this.indicator = this.scratchpad.submenuIndicatorGen(), this.submenu = new T(this.onMenuItemClick, this.scratchpad), this.appendChild(this.indicator), this.appendChild(this.submenu);
            var n, i = d(e);
            try {
              for (i.s(); !(n = i.n()).done;) {
                var o = new t(n.value, this.onMenuItemClick, this.scratchpad);
                this.submenu.appendMenuItem(o)
              }
            } catch (e) {i.e(e)} finally {i.f()}
            this.mouseEnterHandler = this._onMouseEnter.bind(this), this.mouseLeaveHandler = this._onMouseLeave.bind(this), this.addEventListener('mouseenter', this.mouseEnterHandler), this.addEventListener('mouseleave', this.mouseLeaveHandler)
          }
        }, { key: '_getMenuItemClassStr', value: function (e, t) {return t ? e + ' ' + a : e} }], [{
          key: 'define',
          value: function () {s('ctx-menu-item', t, 'button')}
        }])
      }(C(HTMLButtonElement)), T = function (e) {
        function t (e, n) {
          var i;
          return m(this, t), w(t, 'setAttribute', i = b(this, t), 3)(['class', n.cxtMenuClasses]), i.style.position = 'absolute', i.onMenuItemClick = e, i.scratchpad = n, i
        }


        return g(t, e), y(t, [{
          key: 'hide',
          value: function () {this.isVisible() && (this.hideSubmenus(), this.style.display = 'none')}
        }, { key: 'display', value: function () {this.style.display = 'block'} }, {
          key: 'isVisible',
          value: function () {return 'none' !== this.style.display}
        }, {
          key: 'hideMenuItems', value: function () {
            var e, t = d(this.children);
            try {
              for (t.s(); !(e = t.n()).done;) {
                var n = e.value;
                n instanceof HTMLElement ? n.style.display = 'none' : console.warn(''.concat(n, ' is not a HTMLElement'))
              }
            } catch (e) {t.e(e)} finally {t.f()}
          }
        }, {
          key: 'hideSubmenus', value: function () {
            var e, t = d(this.children);
            try {
              for (t.s(); !(e = t.n()).done;) {
                var n = e.value;
                n instanceof S && n.submenu && n.submenu.hide()
              }
            } catch (e) {t.e(e)} finally {t.f()}
          }
        }, {
          key: 'appendMenuItem',
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            if (void 0 !== t) {
              if (t.parentNode !== this) throw new Error('The item with id=\''.concat(t.id, '\' is not a child of the context menu'));
              this.insertBefore(e, t)
            } else this.appendChild(e);
            e.isClickable() && this._performBindings(e)
          }
        }, {
          key: 'moveBefore',
          value: function (e, t) {
            if (e.parentNode !== this) throw new Error('The item with id=\''.concat(e.id, '\' is not a child of context menu'));
            if (t.parentNode !== this) throw new Error('The item with id=\''.concat(t.id, '\' is not a child of context menu'));
            this.removeChild(e), this.insertBefore(e, t)
          }
        }, {
          key: 'removeAllMenuItems', value: function () {
            for (; this.firstChild;) {
              var e = this.lastChild;
              e instanceof S ? this._removeImmediateMenuItem(e) : (console.warn('Found non menu item in the context menu: ', e), this.removeChild(e))
            }
          }
        }, {
          key: '_removeImmediateMenuItem',
          value: function (e) {
            if (!this._detachImmediateMenuItem(e)) throw new Error('menu item(id='.concat(e.id, ') is not in the context menu'));
            e.detachSubmenu(), e.unbindOnClickFunctions()
          }
        }, {
          key: '_detachImmediateMenuItem',
          value: function (e) {
            if (e.parentNode === this) {
              if (this.removeChild(e), this.children.length <= 0) {
                var t = this.parentNode;
                t instanceof S && t.detachSubmenu()
              }
              return !0
            }
            return !1
          }
        }, {
          key: '_performBindings', value: function (e) {
            var t = this._bindOnClick(e.onClickFunction);
            e.bindOnClickFunction(t), e.bindOnClickFunction(this.onMenuItemClick)
          }
        }, {
          key: '_bindOnClick', value: function (e) {
            var t = this;
            return function () {
              var n = t.scratchpad.currentCyEvent;
              e(n)
            }
          }
        }], [{ key: 'define', value: function () {s('menu-item-list', t, 'div')} }])
      }(C(HTMLDivElement)), A = function (e) {
        function t (e, n) {
          var i;
          return m(this, t), (i = b(this, t, [e, n])).onMenuItemClick = function (t) {E(t), i.hide(), e()}, i
        }


        return g(t, e), y(t, [{
          key: 'removeMenuItem', value: function (e) {
            var t = e.parentElement;
            t instanceof T && this.contains(t) && t._removeImmediateMenuItem(e)
          }
        }, {
          key: 'appendMenuItem',
          value: function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            this.ensureDoesntContain(e.id), w(t, 'appendMenuItem', this, 3)([e, n])
          }
        }, {
          key: 'insertMenuItem',
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.before, i = t.parent;
            if (this.ensureDoesntContain(e.id), void 0 !== n) {
              if (!this.contains(n)) throw new Error('before(id='.concat(n.id, ') is not in the context menu'));
              var o = n.parentNode;
              if (!(o instanceof T)) throw new Error('Parent of before(id='.concat(n.id, ') is not a submenu'));
              o.appendMenuItem(e, n)
            } else if (void 0 !== i) {
              if (!this.contains(i)) throw new Error('parent(id='.concat(i.id, ') is not a descendant of the context menu'));
              i.appendSubmenuItem(e)
            } else this.appendMenuItem(e)
          }
        }, {
          key: 'moveBefore', value: function (e, t) {
            var n = e.parentElement;
            if (!this.contains(n)) throw new Error('parent(id='.concat(n.id, ') is not in the contex menu'));
            if (!this.contains(t)) throw new Error('before(id='.concat(t.id, ') is not in the context menu'));
            n.removeChild(e), this.insertMenuItem(e, { before: t })
          }
        }, {
          key: 'moveToSubmenu',
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, i = e.parentElement;
            if (!(i instanceof T)) throw new Error('current parent(id='.concat(i.id, ') is not a submenu'));
            if (!this.contains(i)) throw new Error('parent of the menu item(id='.concat(i.id, ') is not in the context menu'));
            if (null !== t) {
              if (!this.contains(t)) throw new Error('parent(id='.concat(t.id, ') is not in the context menu'));
              i._detachImmediateMenuItem(e), t.appendSubmenuItem(e)
            } else null !== n && (e.selector = n.selector, e.coreAsWell = n.coreAsWell), i._detachImmediateMenuItem(e), this.appendMenuItem(e)
          }
        }, {
          key: 'ensureDoesntContain', value: function (e) {
            var t = document.getElementById(e);
            if (void 0 !== t && this.contains(t)) throw new Error('There is already an element with id='.concat(e, ' in the context menu'))
          }
        }, {
          key: 'ensureContains', value: function (e) {
            var t = document.getElementById(e);
            if (null == t || null == t || !this.contains(t)) throw new Error('An element with id \''.concat(e, '\' does not exist!'))
          }
        }], [{ key: 'define', value: function () {s('ctx-menu', t, 'div')} }])
      }(T);


      function O (e, t) {
        var n = 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
        if (!n) {
          if (Array.isArray(e) || (n = function (e, t) {
            if (e) {
              if ('string' == typeof e) return L(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? L(e, t) : void 0
            }
          }(e)) || t && e && 'number' == typeof e.length) {
            n && (e = n);
            var i = 0, o = function () {};
            return {
              s: o,
              n: function () {return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] }},
              e: function (e) {throw e},
              f: o
            }
          }
          throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
        }
        var r, u = !0, s = !1;
        return {
          s: function () {n = n.call(e)},
          n: function () {
            var e = n.next();
            return u = e.done, e
          },
          e: function (e) {s = !0, r = e},
          f: function () {try {u || null == n.return || n.return()} finally {if (s) throw r}}
        }
      }


      function L (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i
      }


      function j (e) {
        var t = this;
        t.scratch('cycontextmenus') || t.scratch('cycontextmenus', {});
        var n, u, s = function (e) {return t.scratch('cycontextmenus')[e]},
          f = function (e, n) {return t.scratch('cycontextmenus')[e] = n}, d = s('options'), h = s('cxtMenu'),
          m = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, n = y(e);
            if (void 0 !== t) {
              var i = b(t);
              h.insertMenuItem(n, { parent: i })
            } else h.insertMenuItem(n)
          },
          v = function (e) {for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, n = 0; n < e.length; n++) m(e[n], t)},
          y = function (e) {
            var n = t.scratch('cycontextmenus');
            return new S(e, h.onMenuItemClick, n)
          },
          p = function () {s('active') && (h.removeAllMenuItems(), t.off('tapstart', s('eventCyTapStart')), t.off(d.evtType, s('onCxttap')), t.off('viewport', s('onViewport')), document.removeEventListener('mouseup', s('hideOnNonCyClick')), h.parentNode.removeChild(h), h = void 0, f('cxtMenu', void 0), f('active', !1), f('anyVisibleChild', !1), f('onCxttap', void 0), f('onViewport', void 0), f('hideOnNonCyClick', void 0))},
          b = function (e) {
            var t = document.getElementById(e);
            if (t instanceof S) return t;
            throw new Error('The item with id='.concat(e, ' is not a menu item'))
          }, g = function () {
            var e, t = !1, n = O(h.children);
            try {
              for (n.s(); !(e = n.n()).done;) {
                var i = e.value;
                if (i instanceof S && i.show && 'none' != i.style.display) {
                  t = !0;
                  break
                }
              }
            } catch (e) {n.e(e)} finally {n.f()}
            t ? h.display() : h.hide()
          };
        if ('get' !== e) {
          S.define(), T.define(), A.define(), d = o(l, e), f('options', d), s('active') && p(), f('active', !0), f('submenuIndicatorGen', function (e) {
            var t = document.createElement('img');
            return t.src = e.src, t.width = e.width, t.height = e.height, t.classList.add(c), t
          }.bind(void 0, d.submenuIndicator));
          var w = r(d.contextMenuClasses);
          f('cxtMenuClasses', w);
          var x = t.scratch('cycontextmenus');
          h = new A((function () {return f('cxtMenuPosition', void 0)}), x), f('cxtMenu', h), t.container().appendChild(h), f('cxtMenuItemClasses', r(d.menuItemClasses));
          var C = d.menuItems;
          v(C), u = function (e) {
            f('currentCyEvent', e), function (e) {
              var n, i = t.container(), o = s('cxtMenuPosition'), r = e.position || e.cyPosition;
              if (o != r) {
                h.hideMenuItems(), f('anyVisibleChild', !1), f('cxtMenuPosition', r);
                var u = { top: (n = i.getBoundingClientRect()).top, left: n.left },
                  a = e.renderedPosition || e.cyRenderedPosition, c = getComputedStyle(i)['border-width'],
                  l = parseInt(c.replace('px', '')) || 0;
                l > 0 && (u.top += l, u.left += l);
                var d = i.clientHeight, m = i.clientWidth, v = d / 2, y = m / 2;
                a.y > v && a.x <= y ? (h.style.left = a.x + 'px', h.style.bottom = d - a.y + 'px', h.style.right = 'auto', h.style.top = 'auto') : a.y > v && a.x > y ? (h.style.right = m - a.x + 'px', h.style.bottom = d - a.y + 'px', h.style.left = 'auto', h.style.top = 'auto') : a.y <= v && a.x <= y ? (h.style.left = a.x + 'px', h.style.top = a.y + 'px', h.style.right = 'auto', h.style.bottom = 'auto') : (h.style.right = m - a.x + 'px', h.style.top = a.y + 'px', h.style.left = 'auto', h.style.bottom = 'auto')
              }
            }(e);
            var n, i = e.target || e.cyTarget, o = O(h.children);
            try {
              for (o.s(); !(n = o.n()).done;) {
                var r = n.value;
                if (r instanceof S) {
                  console.log('johnha: test menu display');
                  var u = 'function' == typeof i.is ? function (e) {return i.is(e)} : function () {return !1};
                  (i === t ? r.coreAsWell : u(r.selector)) && r.show && (h.display(), f('anyVisibleChild', !0), r.display())
                }
              }
            } catch (e) {o.e(e)} finally {o.f()}
            var c = Array.from(h.children).filter((function (e) {if (e instanceof S) return e.isVisible()})),
              l = c.length;
            c.forEach((function (e, t) {e instanceof S && (t < l - 1 && e.getHasTrailingDivider() ? e.classList.add(a) : e.getHasTrailingDivider() && e.classList.remove(a))})), !s('anyVisibleChild') && !function (e) {return e.offsetWidth <= 0 && e.offsetHeight <= 0 || e.style && e.style.display || getComputedStyle(e).display}(h) && h.hide()
          }, t.on(d.evtType, u), f('onCxttap', u), function () {
            var e = function (e) {
              if (h.contains(e.originalEvent.target)) return !1;
              h.hide(), f('cxtMenuPosition', void 0), f('currentCyEvent', void 0)
            };
            t.on('tapstart', e), f('eventCyTapStart', e);
            var n = function () {h.hide()};
            t.on('viewport', n), f('onViewport', n)
          }(), n = function (e) {t.container().contains(e.target) || h.contains(e.target) || (h.hide(), f('cxtMenuPosition', void 0))}, document.addEventListener('mouseup', n), f('hideOnNonCyClick', n), function () {
            var e, t = function (e, t) {
              var n = 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
              if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                  if (e) {
                    if ('string' == typeof e) return i(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                  }
                }(e)) || t && e && 'number' == typeof e.length) {
                  n && (e = n);
                  var o = 0, r = function () {};
                  return {
                    s: r,
                    n: function () {return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }},
                    e: function (e) {throw e},
                    f: r
                  }
                }
                throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
              }
              var u, s = !0, a = !1;
              return {
                s: function () {n = n.call(e)},
                n: function () {
                  var e = n.next();
                  return s = e.done, e
                },
                e: function (e) {a = !0, u = e},
                f: function () {try {s || null == n.return || n.return()} finally {if (a) throw u}}
              }
            }(document.getElementsByClassName('cy-context-menus-cxt-menu'));
            try {for (t.s(); !(e = t.n()).done;) e.value.addEventListener('contextmenu', (function (e) {return e.preventDefault()}))} catch (e) {t.e(e)} finally {t.f()}
          }()
        }
        return function (e) {
          var t = {
            isActive: function () {return s('active')},
            appendMenuItem: function (t) {return m(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0), e},
            appendMenuItems: function (t) {return v(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0), e},
            removeMenuItem: function (t) {
              var n = b(t);
              return h.removeMenuItem(n), e
            },
            setTrailingDivider: function (t, n) {
              var i = b(t);
              return i.setHasTrailingDivider(n), n ? i.classList.add(a) : i.classList.remove(a), e
            },
            insertBeforeMenuItem: function (t, n) {
              var i = y(t), o = b(n);
              return h.insertMenuItem(i, { before: o }), e
            },
            moveToSubmenu: function (t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = b(t);
              if (null === n) h.moveToSubmenu(i); else if ('string' == typeof n) {
                var o = b(n.toString());
                h.moveToSubmenu(i, o)
              } else void 0 !== n.coreAsWell || void 0 !== n.selector ? h.moveToSubmenu(i, null, n) : console.warn('options neither has coreAsWell nor selector property but it is an object. Are you sure that this is what you want to do?');
              return e
            },
            moveBeforeOtherMenuItem: function (t, n) {
              var i = b(t), o = b(n);
              return h.moveBefore(i, o), e
            },
            disableMenuItem: function (t) {return b(t).disable(), e},
            enableMenuItem: function (t) {return b(t).enable(), e},
            hideMenuItem: function (t) {return b(t).hide(), g(), e},
            showMenuItem: function (t) {return b(t).display(), g(), e},
            destroy: function () {return p(), e},
            getOptions: function () {return o(l, d)},
            swapItems: function (e, t) {
              h.ensureContains(e), h.ensureContains(t);
              var n = document.getElementById(e), i = document.getElementById(t), o = n.nextSibling, r = i.nextSibling,
                u = n.parentNode, s = i.parentNode;
              if (!u.isSameNode(s)) throw new Error('To swap, the items should have the same parent!');
              o && o.isSameNode(i) ? u.insertBefore(i, n) : r && r.isSameNode(n) ? u.insertBefore(n, i) : (u.insertBefore(i, n), u.insertBefore(n, r))
            }
          };
          return t
        }(this)
      }
    }, 497: (e, t, n) => {
      var i = n(70).contextMenus, o = function (e) {e && e('core', 'contextMenus', i)};
      'undefined' != typeof cytoscape && o(cytoscape), e.exports = o
    }
  }, t = {};


  function n (i) {
    var o = t[i];
    if (void 0 !== o) return o.exports;
    var r = t[i] = { exports: {} };
    return e[i](r, r.exports, n), r.exports
  }


  return n.d = (e, t) => {
    for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
      enumerable: !0,
      get: t[i]
    })
  }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 })}, n(497)
})()));
