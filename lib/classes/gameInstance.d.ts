import { Game } from './game';
export declare class GameInstance {
  gameInstanceId: string;
  game: Game;
  startDate: Date;
  endDate: Date | null;
  constructor(gameInstanceId: string, game: Game, startDate: Date, endDate: Date | null);
  static fromMap(data: any): GameInstance;
  static fromFirestore(snap: any): GameInstance;
  toMap(): {
    gameInstanceId: string;
    startDate: Date;
    endDate: Date | null;
    game: {
      gameId: string;
      name: string;
      url: string;
      thumbnail: string;
      description: string;
      filters: import('..').Filters;
    } | null;
  };
}
