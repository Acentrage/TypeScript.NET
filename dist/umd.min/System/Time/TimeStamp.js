/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e,t){if("object"==typeof module&&"object"==typeof module.exports){var o=t(require,exports);void 0!==o&&(module.exports=o)}else"function"==typeof define&&define.amd&&define(e,t)}(["require","exports","./HowMany"],function(e,t){var o=(e("./HowMany"),function(){function e(e,t,o,i,n,r,s,d){void 0===o&&(o=1),void 0===i&&(i=0),void 0===n&&(n=0),void 0===r&&(r=0),void 0===s&&(s=0),void 0===d&&(d=0),this.year=e,this.month=t,this.day=o,this.hour=i,this.minute=n,this.second=r,this.millisecond=s,this.tick=d,Object.freeze(this)}return e.prototype.toJsDate=function(){var e=this;return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond+e.tick/1e4)},e.from=function(t){if("toJsDate"in t&&(t=t.toJsDate()),t instanceof Date)return new e(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds());throw Error("Invalid date type.")},e}());Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o});
//# sourceMappingURL=TimeStamp.js.map
