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
exports.Participant = void 0;
var Participant = /** @class */ (function () {
  function Participant(participantId, name, gender, host, peerId) {
    this.participantId = participantId;
    this.name = name;
    this.gender = gender;
    this.host = host;
    this.peerId = peerId;
  }
  Participant.fromMap = function (data) {
    return new Participant(data.participantId, data.name, data.gender, data.host, data.peerId);
  };
  Participant.fromFirestore = function (snap) {
    return Participant.fromMap(__assign({ participantId: snap.id }, snap.data()));
  };
  Participant.prototype.toMap = function () {
    var _a, _b, _c, _d, _e;
    return {
      participantId: (_a = this.participantId) !== null && _a !== void 0 ? _a : null,
      name: (_b = this.name) !== null && _b !== void 0 ? _b : null,
      gender: (_c = this.gender) !== null && _c !== void 0 ? _c : null,
      host: (_d = this.host) !== null && _d !== void 0 ? _d : false,
      peerId: (_e = this.peerId) !== null && _e !== void 0 ? _e : null,
    };
  };
  return Participant;
})();
exports.Participant = Participant;
