"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameInstance = void 0;
var game_1 = require("./game");
var GameInstance = /** @class */ (function () {
    function GameInstance(gameInstanceId, game, startDate, endDate) {
        this.gameInstanceId = gameInstanceId;
        this.game = game;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    GameInstance.fromMap = function (data) {
        return new GameInstance(data.gameInstanceId, game_1.Game.fromMap(data.game), data.startDate, data.endDate);
    };
    GameInstance.fromFirestore = function (snap) {
        var startDate;
        var endDate;
        try {
            startDate = snap.data().startDate.toDate();
        }
        catch (error) {
            startDate = snap.data().startDate;
        }
        try {
            endDate = snap.data().endDate.toDate();
        }
        catch (error) {
            endDate = snap.data().endDate;
        }
        return GameInstance.fromMap(__assign(__assign({ gameInstanceId: snap.id }, snap.data()), { startDate: startDate, endDate: endDate }));
    };
    GameInstance.prototype.toMap = function () {
        var _a, _b, _c;
        return {
            gameInstanceId: (_a = this.gameInstanceId) !== null && _a !== void 0 ? _a : null,
            startDate: (_b = this.startDate) !== null && _b !== void 0 ? _b : null,
            endDate: (_c = this.endDate) !== null && _c !== void 0 ? _c : null,
            game: this.game ? this.game.toMap() : null,
        };
    };
    return GameInstance;
}());
exports.GameInstance = GameInstance;
