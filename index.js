// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";function e(e){return e!=e}var t=Math.sqrt;return function(n,o,f){return e(n)||e(o)||e(f)||!(n<=f&&f<=o)?NaN:t((n*n+o*o+f*f-n*o-n*f-o*f)/18)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).stdev=t();
//# sourceMappingURL=index.js.map
