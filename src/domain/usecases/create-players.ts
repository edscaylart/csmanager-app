import { Player } from '../models/player';

export interface CreatePlayers {
  add: (data: CreatePlayers.Body) => Promise<CreatePlayers.Model>;
}

export namespace CreatePlayers {
  export type Body = Omit<Player, 'id'>;
  export type Model = Player;
}
