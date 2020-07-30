import { Gender } from "../enums";

export class Participant {
    participantId: string;
    name: string;
    gender: Gender | null;
    host: boolean;
    peerId: string | null;

    constructor(
        participantId: string,
        name: string,
        gender: Gender | null,
        host: boolean,
        peerId: string | null,
    ) {
        this.participantId = participantId;
        this.name = name;
        this.gender = gender;
        this.host = host;
        this.peerId = peerId;
    }

    static fromMap(data: any) {
        return new Participant(data.participantId, data.name, data.gender, data.host, data.peerId);
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
            peerId: this.peerId ?? null
        }
    }
}