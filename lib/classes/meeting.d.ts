import { Participant } from "./participant";
export declare class Meeting {
    meetingId: string;
    startDate: Date;
    endDate: Date | null;
    participants: Participant[];
    gameInstanceId: string | null;
    constructor(meetingId: string, startDate: Date, endDate: Date | null, participants: Participant[], gameInstanceId: string | null);
    static fromMap(data: any): Meeting;
    static fromFirestore(snap: any): Meeting;
    toMap(): {
        meetingId: string;
        startDate: Date;
        endDate: Date | null;
        participants: Participant[];
        gameInstanceId: string | null;
    };
}
