(()=>{"use strict";var o,t,n,e,r={75:(o,t)=>{t.__esModule=!0,t.Animal=void 0;var n=function(){function o(o){this.name=o}return o.prototype.move=function(o){void 0===o&&(o=0),console.log(this.name+" moved "+o+"m.")},o}();t.Animal=n},493:function(o,t,n){var e,r=this&&this.__extends||(e=function(o,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])})(o,t)},function(o,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0,t.Horse=void 0;var i=function(o){function t(t){return o.call(this,t)||this}return r(t,o),t.prototype.move=function(t){void 0===t&&(t=45),console.log("Galloping..."),o.prototype.move.call(this,t)},t}(n(75).Animal);t.Horse=i},95:function(o,t,n){var e,r=this&&this.__extends||(e=function(o,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])})(o,t)},function(o,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0,t.Snake=void 0;var i=function(o){function t(t){return o.call(this,t)||this}return r(t,o),t.prototype.move=function(t){void 0===t&&(t=5),console.log("Slithering..."),o.prototype.move.call(this,t)},t}(n(75).Animal);t.Snake=i}},i={};function c(o){var t=i[o];if(void 0!==t)return t.exports;var n=i[o]={exports:{}};return r[o].call(n.exports,n,n.exports,c),n.exports}o=c(95),t=c(493),n=new o.Snake("Sammy the Python"),e=new t.Horse("Tommy the Palomino"),n.move(),e.move(34)})();