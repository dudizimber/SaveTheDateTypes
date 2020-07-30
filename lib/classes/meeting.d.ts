import { Participant } from "./participant";
export declare class Meeting {
    meetingId: string;
    startDate: Date;
    endDate: Date | null;
    participants: Participant[];
    gameInstanceId: string | null;
    meetingInfo: any | null;
    host: Participant;
    constructor(meetingId: string, startDate: Date, endDate: Date | null, participants: Participant[], gameInstanceId: string | null, meetingInfo: any | null, host: Participant);
    static fromMap(data: any): Meeting;
    static fromFirestore(snap: any): Meeting;
    toMap(): {
        meetingId: string;
        startDate: Date;
        endDate: Date | null;
        participants: Participant[];
        gameInstanceId: string | null;
        meetingInfo: any;
        host: {
            participantId: string;
            name: string;
            gender: import("..").Gender | null;
            host: boolean;
            peerId: string | null;
        } | null;
    };
}
