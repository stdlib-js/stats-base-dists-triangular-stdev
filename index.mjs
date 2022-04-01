// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";var e=s,r=t;var a=function(s,t,a){return e(s)||e(t)||e(a)||!(s<=a&&a<=t)?NaN:r((s*s+t*t+a*a-s*t-s*a-t*a)/18)};export{a as default};
//# sourceMappingURL=index.mjs.map
