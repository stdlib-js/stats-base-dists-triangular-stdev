// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";function e(e,i,n){return s(e)||s(i)||s(n)||!(e<=n&&n<=i)?NaN:t((e*e+i*i+n*n-e*i-e*n-i*n)/18)}export{e as default};
//# sourceMappingURL=index.mjs.map
