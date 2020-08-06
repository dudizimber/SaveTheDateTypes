import { Participant } from "./participant";

export class Meeting {
    meetingId: string;
    startDate: Date;
    endDate: Date | null;
    participants: Participant[];
    gameInstanceId: string | null;
    meetingInfo: any | null;
    host: Participant;

    constructor(
        meetingId: string,
        startDate: Date,
        endDate: Date | null,
        participants: Participant[],
        gameInstanceId: string | null,
        meetingInfo: any | null,
        host: Participant,
    ) {
        this.meetingId = meetingId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.participants = participants;
        this.gameInstanceId = gameInstanceId;
        this.meetingInfo = meetingInfo;
        this.host = host;
    }

    static fromMap(data: any) {
        return new Meeting(data.meetingId, data.startDate, data.endDate, data.participants, data.gameInstanceId, data.meetingInfo, Participant.fromMap(data.host));
    }

    static fromFirestore(snap: any) {
        let startDate;
        let endDate;
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
        return Meeting.fromMap({ meetingId: snap.id, ...snap.data(), startDate, endDate });
    }

    toMap() {
        return {
            meetingId: this.meetingId ?? null,
            startDate: this.startDate ?? null,
            endDate: this.endDate ?? null,
            participants: this.participants ?? null,
            gameInstanceId: this.gameInstanceId ?? null,
            meetingInfo: this.meetingInfo ?? null,
            host: this.host ? this.host.toMap() : null,
        }
    }
}