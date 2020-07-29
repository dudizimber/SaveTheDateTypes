import { Participant } from './participant';
export declare class User {
    userId: string;
    name: string;
    email: string;
    constructor(userId: string, name: string, email: string);
    static fromMap(data: any): User;
    static fromFirestore(snap: any): User;
    toMap(): {
        userId: string;
        name: string;
        email: string;
    };
    toParticipant(isHost: boolean): Participant;
}
