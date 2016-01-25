"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PlotGenerator = require("./PlotGenerator");

var _CharacterGenerator = require("./CharacterGenerator");

var _CatchPhraseGenerator = require("./CatchPhraseGenerator");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Generator = function () {
  function Generator() {
    _classCallCheck(this, Generator);

    this.needs = [];
    this.genre = "";
  }

  _createClass(Generator, [{
    key: "addNeed",
    value: function addNeed(need) {
      this.needs.push(need);
    }
  }, {
    key: "chooseGenre",
    value: function chooseGenre(genre) {
      this.genre = genre;
    }
  }, {
    key: "compileResults",
    value: function compileResults() {}
  }]);

  return Generator;
}();
//# sourceMappingURL=Generator.js.map