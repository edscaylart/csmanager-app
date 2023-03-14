import { Player } from '../models/player';

export interface UpsertPlayers {
  set: (data: UpsertPlayers.Body) => Promise<UpsertPlayers.Model>;
}

export namespace UpsertPlayers {
  export type Body = Partial<Player>;
  export type Model = Player;
}
