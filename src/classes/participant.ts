import { Gender } from "../enums";

export class Participant {
    participantId: string;
    name: string;
    gender: Gender | null;
    host: boolean;

    constructor(
        participantId: string,
        name: string,
        gender: Gender | null,
        host: boolean,
    ) {
        this.participantId = participantId;
        this.name = name;
        this.gender = gender;
        this.host = host;
    }

    static fromMap(data: any) {
        return new Participant(data.participantId, data.name, data.gender, data.host);
    }

    static fromFirestore(snap: any) {
        return Participant.fromMap({ participantId: snap.id, ...snap.data() });
    }

    toMap() {
        return {
            participantId: this.participantId ?? null,
            name: this.name ?? null,
            gender: this.gender ?? null,
            host: this.host ?? false,
        }
    }
}