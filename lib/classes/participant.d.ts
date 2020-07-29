import { Gender } from "../enums";
export declare class Participant {
    participantId: string;
    name: string;
    gender: Gender | null;
    host: boolean;
    constructor(participantId: string, name: string, gender: Gender | null, host: boolean);
    static fromMap(data: any): Participant;
    static fromFirestore(snap: any): Participant;
    toMap(): {
        participantId: string;
        name: string;
        gender: Gender | null;
        host: boolean;
    };
}
