import { Game } from "./game";

export class GameInstance {
    gameInstanceId: string;
    game: Game;
    startDate: Date;
    endDate: Date | null;

    
    constructor(
        gameInstanceId: string,
        game: Game,
        startDate: Date,
        endDate: Date | null,
    ) {
        this.gameInstanceId = gameInstanceId;
        this.game = game;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    static fromMap(data: any) {
        return new GameInstance(data.gameInstanceId, Game.fromMap(data.game), data.startDate, data.endDate);
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
        return GameInstance.fromMap({ gameInstanceId: snap.id, ...snap.data(), startDate, endDate });
    }

    toMap() {
        return {
            gameInstanceId: this.gameInstanceId ?? null,
            startDate: this.startDate ?? null,
            endDate: this.endDate ?? null,
            game: this.game ? this.game.toMap() : null,
        }
    }
}