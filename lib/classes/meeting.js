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
exports.Meeting = void 0;
var participant_1 = require('./participant');
var Meeting = /** @class */ (function () {
  function Meeting(meetingId, startDate, endDate, participants, gameInstanceId, meetingInfo, host) {
    this.meetingId = meetingId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.participants = participants;
    this.gameInstanceId = gameInstanceId;
    this.meetingInfo = meetingInfo;
    this.host = host;
  }
  Meeting.fromMap = function (data) {
    return new Meeting(
      data.meetingId,
      data.startDate,
      data.endDate,
      data.participants,
      data.gameInstanceId,
      data.meetingInfo,
      participant_1.Participant.fromMap(data.host),
    );
  };
  Meeting.fromFirestore = function (snap) {
    var startDate;
    var endDate;
    try {
      startDate = snap.data().startDate.toDate();
    } catch (error) {
      startDate = snap.data().startDate;
    }
    try {
      endDate = snap.data().endDate.toDate();
    } catch (error) {
      endDate = snap.data().endDate;
    }
    return Meeting.fromMap(
      __assign(__assign({ meetingId: snap.id }, snap.data()), { startDate: startDate, endDate: endDate }),
    );
  };
  Meeting.prototype.toMap = function () {
    var _a, _b, _c, _d, _e, _f;
    return {
      meetingId: (_a = this.meetingId) !== null && _a !== void 0 ? _a : null,
      startDate: (_b = this.startDate) !== null && _b !== void 0 ? _b : null,
      endDate: (_c = this.endDate) !== null && _c !== void 0 ? _c : null,
      participants: (_d = this.participants) !== null && _d !== void 0 ? _d : null,
      gameInstanceId: (_e = this.gameInstanceId) !== null && _e !== void 0 ? _e : null,
      meetingInfo: (_f = this.meetingInfo) !== null && _f !== void 0 ? _f : null,
      host: this.host ? this.host.toMap() : null,
    };
  };
  return Meeting;
})();
exports.Meeting = Meeting;
