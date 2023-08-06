(()=>{"use strict";var n={372:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n\n/* Document\n   ========================================================================== */\n\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n    line-height: 1.15;\n    /* 1 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n\n\n/* Sections\n     ========================================================================== */\n\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n    margin: 0;\n}\n\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n    display: block;\n}\n\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n\n/* Grouping content\n     ========================================================================== */\n\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n}\n\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n\n/* Text-level semantics\n     ========================================================================== */\n\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n    background-color: transparent;\n}\n\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */\n}\n\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n    font-size: 80%;\n}\n\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n\n/* Embedded content\n     ========================================================================== */\n\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n    border-style: none;\n}\n\n\n/* Forms\n     ========================================================================== */\n\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n}\n\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n    /* 1 */\n    overflow: visible;\n}\n\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n    /* 1 */\n    text-transform: none;\n}\n\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n    -webkit-appearance: button;\n}\n\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */\n}\n\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n    vertical-align: baseline;\n}\n\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n    overflow: auto;\n}\n\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type="checkbox"],\n[type="radio"] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 0;\n    /* 2 */\n}\n\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type="search"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n\n/* Interactive\n     ========================================================================== */\n\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n    display: block;\n}\n\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n    display: list-item;\n}\n\n\n/* Misc\n     ========================================================================== */\n\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n    display: none;\n}\n\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n    display: none;\n}',""]);const s=a},890:(n,e,t)=>{t.d(e,{Z:()=>b});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),s=t(372),c=t(667),l=t.n(c),p=new URL(t(750),t.b),d=new URL(t(690),t.b),u=new URL(t(461),t.b),m=a()(r());m.i(s.Z);var f=l()(p),h=l()(d),g=l()(u);m.push([n.id,`body {\n  background-color: #fff;\n  font: normal 16px "Source Sans Pro", sans-serif, Arial;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nbutton {\n  font-family: "Oswald", sans-serif;\n}\n\nmain {\n  background-color: #f9f9f9;\n}\n\n#app-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative;\n}\n\n.app-section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.app-logo {\n  width: 64px;\n  height: 64px;\n  object-fit: contain;\n}\n\n.app-logo--small {\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n}\n\n.app-title {\n  font-size: 3.25rem;\n  line-height: 3.2rem;\n  text-align: center;\n}\n\n.app-subtitle {\n  font-size: 1.5rem;\n  line-height: 1.625rem;\n  font-weight: 300;\n  text-align: center;\n  font-family: "Source Sans Pro", sans-serif, Arial;\n}\n\n.app-section__button {\n  background-color: #55c2d8;\n  border: none;\n  color: white;\n  cursor: pointer;\n  outline: none;\n}\n\n.app-header {\n  background-color: transparent;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 64px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 0.5fr 1fr 0.5fr;\n  padding: 0 140px;\n}\n\n.app-header__logo {\n  color: white;\n  justify-self: flex-start;\n  align-self: flex-end;\n  font-size: initial;\n  letter-spacing: 2.4px;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n\n.app-header__nav {\n  display: inline-block;\n}\n\n.app-header__nav-list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 32px;\n  justify-items: center;\n  padding: 0;\n  margin: 55px 0 0 0;\n  list-style: none;\n}\n\n.app-header__nav-list-item {\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 2.4px;\n}\n\n.app-header__nav-list-item a:hover {\n  text-decoration: underline;\n}\n\n.app-header__nav-list-item a {\n  color: white;\n  text-decoration: none;\n}\n\n.app-header__nav-menu-button {\n  display: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-sizing: content-box;\n  color: white;\n  cursor: pointer;\n  font-size: 0;\n  transition: all 0.25s ease-out;\n  outline: none;\n  padding: 6px;\n  position: relative;\n  user-select: none;\n}\n\n.app-header__nav-menu-button-icon {\n  width: 28px;\n  height: 18px;\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n}\n\n.app-header__nav-menu-button-icon span {\n  background-color: white;\n  position: absolute;\n  border-radius: 2px;\n  transition: transform 0.5s ease-in-out;\n  width: 100%;\n  height: 2px;\n  left: 0;\n  transform: rotate(0);\n}\n\n.app-header__nav-menu-button-icon span:nth-child(1) {\n  top: 0;\n}\n\n.app-header__nav-menu-button-icon span:nth-child(2) {\n  top: 8px;\n  visibility: visible;\n}\n\n.app-header__nav-menu-button-icon span:nth-child(3) {\n  bottom: 0;\n}\n\n.app-section--image-peak {\n  background: linear-gradient(\n      to top,\n      rgba(65, 65, 65, 0.5),\n      rgba(65, 65, 65, 0.5)\n    ),\n    url(${f}) no-repeat center/cover;\n  height: 800px;\n  max-width: 100%;\n  color: white;\n}\n\n.app-section__article {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 90px;\n  margin: 0 140px;\n}\n\n.app-section__button--read-more {\n  border-radius: 26px;\n  font-size: 14px;\n  height: 46px;\n  letter-spacing: 1.2px;\n  margin: 60px auto 108px;\n  text-transform: uppercase;\n  width: 135px;\n}\n\n.app-section--image-culture {\n  background: linear-gradient(\n      to top,\n      rgba(65, 65, 65, 0.7),\n      rgba(65, 65, 65, 0.7)\n    ),\n    url(${h}) no-repeat center/cover;\n  height: 698px;\n  max-width: 100%;\n  color: white;\n}\n\n.app-section__button--our-culture {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin: 64px auto;\n  padding: 0;\n  font-size: 4rem;\n}\n\n.app-footer {\n  background-color: #3b3d40;\n  color: white;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 0 0;\n  grid-template-areas: "logo logo address address . . ." ". . email email rights rights rights";\n  align-items: flex-start;\n  padding: 42px 140px 0;\n  min-height: 148px;\n}\n\n.app-footer__logo {\n  grid-area: logo;\n  display: flex;\n  align-items: center;\n  text-transform: uppercase;\n}\n\n.app-footer__address {\n  grid-area: address;\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.app-footer__email {\n  grid-area: email;\n  color: rgba(255, 255, 255, 0.3);\n  text-decoration: none;\n}\n\n.app-footer__rights {\n  grid-area: rights;\n  justify-self: flex-end;\n  color: rgba(255, 255, 255, 0.3);\n  letter-spacing: 0.75px;\n  margin: 0;\n}\n\n@media only screen and (max-width: 768px) {\n  .app-header {\n    grid-template-columns: 1fr 1fr;\n    padding: 0 32px;\n  }\n  .app-header__nav-menu-button {\n    display: inline-block;\n    justify-self: flex-end;\n    align-self: flex-end;\n  }\n  .app-header__nav {\n    display: none;\n  }\n  .app-section--image-peak {\n    height: 648px;\n  }\n  .app-section--image-culture {\n    height: 698px;\n  }\n  .app-section__button--our-culture {\n    width: 70px;\n    height: 70px;\n    margin: 32px auto;\n    font-size: 2rem;\n  }\n  .app-section__article {\n    grid-template-columns: 1fr;\n    gap: 0 0;\n    margin: 0 16px;\n  }\n  .app-section__button--read-more {\n    margin: 24px auto 48px;\n  }\n  .app-footer {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(9, 1fr);\n    grid-template-areas: "." "logo" "." "address" "address" "email" "." "." "rights";\n    align-content: center;\n    justify-content: center;\n    padding: 0 32px 0;\n  }\n  .app-footer__rights {\n    justify-self: flex-start;\n  }\n}\n\n.app-section--image-join {\n  background: linear-gradient(\n      to top,\n      rgba(65, 65, 65, 0.4),\n      rgba(65, 65, 65, 0.4)\n    ),\n    url(${g}) no-repeat\n      top/cover;\n  height: 500px;\n  max-width: 100%;\n  color: white;\n}\n\n/* form */\n\n.subscribe__form {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 60px;\n  width: 100%;\n}\n.subscribe__form--input-field {\n  width: 30%;\n}\n.subscribe__form--input-field > input {\n  border: none;\n  /* background-color: transparent; */\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 30px;\n  color: #fff;\n  width: 75%;\n  padding: 10px 30px;\n}\n.subscribe__form--input-field input::placeholder {\n  color: #fff;\n}\n\n.form__btn {\n  font-size: 15px;\n  font-weight: 400;\n  color: #fff;\n  background-color: #55c2d8;\n  border: none;\n  border-radius: 30px;\n  padding: 10px 30px;\n}\n`,""]);const b=m},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var p=t(i[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},461:(n,e,t)=>{n.exports=t.p+"aac8e4527c9262529b91.jpeg"},750:(n,e,t)=>{n.exports=t.p+"96b0499d27f45e1d11c5.jpg"},690:(n,e,t)=>{n.exports=t.p+"c445e404adb98d4f7754.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=["gmail.com","outlook.com","yandex.ru"];class e{constructor(n,e,t){this.title=n,this.subtitle=e,this.buttonText=t}createSection(){const n=document.createElement("section");n.className="app-section app-section--image-join";const e=document.createElement("h2");e.className="app-title",e.textContent=this.title;const t=document.createElement("h3");t.className="app-subtitle",t.innerHTML=this.subtitle;const o=document.createElement("form");o.className="subscribe__form";const r=document.createElement("div");r.className="subscribe__form--input-field";const i=document.createElement("label");i.setAttribute("for","email");const a=document.createElement("input");a.id="email",a.className="input-field",a.name="email",a.type="email",a.placeholder="Email";const s=document.createElement("button");return s.className="form__btn",s.textContent=this.buttonText,r.appendChild(i),r.appendChild(a),o.appendChild(r),o.appendChild(s),n.appendChild(e),n.appendChild(t),n.appendChild(o),n}}const o={standard:{title:"Join Our Program",subtitle:"Sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.",buttonText:"SUBSCRIBE"},advanced:{title:"Join Our Advanced Program",subtitle:"Sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.",buttonText:"Subscribe to Advanced Program"}};function r(n,e){localStorage.setItem("subscriptionEmail",n),localStorage.setItem("isSubscribed",e)}function i(){const n=localStorage.getItem("subscriptionEmail"),e="true"===localStorage.getItem("isSubscribed"),t=document.getElementById("email");t&&(n&&(t.value=n),t.addEventListener("input",s)),a(e)}function a(n){const e=document.getElementById("email"),t=document.querySelector(".form__btn");e&&t&&(n?(e.style.display="none",t.textContent="Unsubscribe"):(e.style.display="block",t.textContent="Subscribe"))}function s(n){r(n.target.value,!1)}function c(e){e.preventDefault();const t=document.getElementById("email").value,o=function(e){const t=`(${n.join("|")})$`;return new RegExp(`^[a-zA-Z0-9._%+-]+@${t}`,"i").test(e)}(t);if(o){const n="true"===localStorage.getItem("isSubscribed");n?(localStorage.removeItem("subscriptionEmail"),localStorage.removeItem("isSubscribed")):r(t,!0),i(),a(!n)}}var l=t(379),p=t.n(l),d=t(795),u=t.n(d),m=t(569),f=t.n(m),h=t(565),g=t.n(h),b=t(216),x=t.n(b),v=t(589),y=t.n(v),w=t(890),_={};_.styleTagTransform=y(),_.setAttributes=g(),_.insert=f().bind(null,"head"),_.domAPI=u(),_.insertStyleElement=x();p()(w.Z,_);w.Z&&w.Z.locals&&w.Z.locals;!function(n){console.log(n);const t=o[n];if(!t)throw new Error("Invalid program type.");const r=new e(t.title,t.subtitle,t.buttonText).createSection();document.getElementById("events-task").appendChild(r)}("standard"),document.addEventListener("DOMContentLoaded",(function(){const n=document.getElementById("email");n&&n.addEventListener("input",s);const e=document.querySelector(".form__btn");e&&e.addEventListener("click",c),i()}))})()})();