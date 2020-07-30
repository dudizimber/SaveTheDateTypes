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
exports.User = void 0;
var participant_1 = require("./participant");
var User = /** @class */ (function () {
    function User(userId, name, email) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }
    User.fromMap = function (data) {
        return new User(data.userId, data.name, data.email);
    };
    User.fromFirestore = function (snap) {
        return User.fromMap(__assign({ userId: snap.id }, snap.data()));
    };
    User.prototype.toMap = function () {
        var _a, _b, _c;
        return {
            userId: (_a = this.userId) !== null && _a !== void 0 ? _a : null,
            name: (_b = this.name) !== null && _b !== void 0 ? _b : null,
            email: (_c = this.email) !== null && _c !== void 0 ? _c : null,
        };
    };
    User.prototype.toParticipant = function (isHost) {
        return new participant_1.Participant(this.userId, this.name, null, isHost === true, null);
    };
    return User;
}());
exports.User = User;
