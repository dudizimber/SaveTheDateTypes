import { Participant } from "./participant";

export class Meeting {
    meetingId: string;
    startDate: Date;
    endDate: Date | null;
    participants: Participant[];
    gameInstanceId: string | null;

    constructor(
        meetingId: string,
        startDate: Date,
        endDate: Date | null,
        participants: Participant[],
        gameInstanceId: string | null,
    ) {
        this.meetingId = meetingId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.participants = participants;
        this.gameInstanceId = gameInstanceId;
    }

    static fromMap(data: any) {
        return new Meeting(data.meetingId, data.startDate, data.endDate, data.participants, data.gameInstanceId);
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
        }
    }
}