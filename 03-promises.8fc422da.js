function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var u=o("eWCmQ");const l=document.querySelector('[type="submit"]'),a=document.querySelector('[name="delay"]'),d=document.querySelector('[name="step"]'),s=document.querySelector('[name="amount"]');l.addEventListener("click",(t=>{t.preventDefault(),setTimeout((()=>{for(i=0;i<s.value;i++){let t=i+1,r=d.value*i+Number(a.value);setTimeout((()=>{new Promise(((e,t)=>{Math.random()>.3?e("success"):t("failure")})).then((()=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${r}ms`)})).catch((()=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${r}ms`)}))}),r)}}),a.value)}));
//# sourceMappingURL=03-promises.8fc422da.js.map
