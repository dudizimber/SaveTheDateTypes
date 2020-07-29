import { Participant } from "./participant";
import { Meeting as AWSMeeting } from 'aws-sdk/clients/chime';
export declare class Meeting {
    meetingId: string;
    startDate: Date;
    endDate: Date | null;
    participants: Participant[];
    gameInstanceId: string | null;
    meetingInfo: AWSMeeting | null;
    host: Participant;
    constructor(meetingId: string, startDate: Date, endDate: Date | null, participants: Participant[], gameInstanceId: string | null, meetingInfo: AWSMeeting | null, host: Participant);
    static fromMap(data: any): Meeting;
    static fromFirestore(snap: any): Meeting;
    toMap(): {
        meetingId: string;
        startDate: Date;
        endDate: Date | null;
        participants: Participant[];
        gameInstanceId: string | null;
        meetingInfo: AWSMeeting | null;
        host: Participant;
    };
}
