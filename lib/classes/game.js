'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Game = void 0;
var Game = /** @class */ (function () {
  function Game(gameId, name, url, thumbnail, description, filters) {
    this.gameId = gameId;
    this.name = name;
    this.url = url;
    this.thumbnail = thumbnail;
    this.description = description;
    this.filters = filters;
  }
  Game.fromMap = function (data) {
    return new Game(data.gameId, data.name, data.url, data.thumbnail, data.description, data.filters);
  };
  Game.fromFirestore = function (snap) {
    return Game.fromMap(__assign({ gameId: snap.id }, snap.data()));
  };
  Game.prototype.toMap = function () {
    var _a, _b, _c, _d, _e;
    return {
      gameId: (_a = this.gameId) !== null && _a !== void 0 ? _a : null,
      name: (_b = this.name) !== null && _b !== void 0 ? _b : null,
      url: this.url,
      thumbnail: (_c = this.thumbnail) !== null && _c !== void 0 ? _c : null,
      description: (_d = this.description) !== null && _d !== void 0 ? _d : null,
      filters: (_e = this.filters) !== null && _e !== void 0 ? _e : null,
    };
  };
  return Game;
})();
exports.Game = Game;
