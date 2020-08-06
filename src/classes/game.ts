import { Filters } from "../interfaces/filters";

export class Game {
    gameId: string;
    name: string;
    url: string;
    thumbnail: string;
    description: string;
    filters: Filters;

    constructor(
        gameId: string,
        name: string,
        url: string,
        thumbnail: string,
        description: string,
        filters: Filters,
    ) {
        this.gameId = gameId;
        this.name = name;
        this.url = url;
        this.thumbnail = thumbnail;
        this.description = description;
        this.filters = filters;
    }

    static fromMap(data: any) {
        return new Game(data.gameId, data.name, data.url, data.thumbnail, data.description, data.filters);
    }

    static fromFirestore(snap: any) {
        return Game.fromMap({ gameId: snap.id, ...snap.data() });
    }

    toMap() {
        return {
            gameId: this.gameId ?? null,
            name: this.name ?? null,
            url: this.url,
            thumbnail: this.thumbnail ?? null,
            description: this.description ?? null,
            filters: this.filters ?? null,
        }
    }
}