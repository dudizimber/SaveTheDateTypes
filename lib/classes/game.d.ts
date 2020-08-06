import { Filters } from '../interfaces/filters';
export declare class Game {
  gameId: string;
  name: string;
  url: string;
  thumbnail: string;
  description: string;
  filters: Filters;
  constructor(gameId: string, name: string, url: string, thumbnail: string, description: string, filters: Filters);
  static fromMap(data: any): Game;
  static fromFirestore(snap: any): Game;
  toMap(): {
    gameId: string;
    name: string;
    url: string;
    thumbnail: string;
    description: string;
    filters: Filters;
  };
}
