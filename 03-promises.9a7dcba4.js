!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},u=n.parcelRequired7c6;null==u&&((u=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var u={id:e,exports:{}};return t[e]=u,n.call(u.exports,u,u.exports),u.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=u);var r=u("iU1Pc"),i=document.querySelector('[type="submit"]'),c=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]');i.addEventListener("click",(function(n){if(n.preventDefault(),l.value<=0)return e(r).Notify.failure("❌ Amount can't be lower than 1"),!1;setTimeout((function(){for(var n=function(n){var t=n+1,o=a.value*n+Number(c.value);setTimeout((function(){new Promise((function(e,n){Math.random()>.3?e("success"):n("failure")})).then((function(){e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(){e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}),o)},t=0;t<l.value;t++)n(t)}),c.value)}))}();
//# sourceMappingURL=03-promises.9a7dcba4.js.map