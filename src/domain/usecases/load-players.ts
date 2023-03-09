import { Player } from '../models/player';

export interface LoadPlayers {
  list: () => Promise<LoadPlayers.Model[]>;
}

export namespace LoadPlayers {
  export type Model = Player;
}
