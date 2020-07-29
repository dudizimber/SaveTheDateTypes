import { Participant } from './participant';
export class User {
    userId: string;
    name: string;
    email: string;

    constructor(
        userId: string,
        name: string,
        email: string
    ) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }

    static fromMap(data: any) {
        return new User(data.userId, data.name, data.email);
    }

    static fromFirestore(snap: any) {
        return User.fromMap({ userId: snap.id, ...snap.data() });
    }

    toMap() {
        return {
            userId: this.userId ?? null,
            name: this.name ?? null,
            email: this.email ?? null,
        }
    }

    toParticipant() {
        return new Participant(this.userId, this.name, null, false);
    }
}