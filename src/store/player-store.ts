import { create } from 'zustand';

import { Player } from '@/domain/models';

type State = {
  players: Player[];
  appendPlayer: (player: Player) => void;
  setPlayer: (player: Player) => void;
};

export const usePlayerStore = create<State>((set, get) => ({
  players: [],
  appendPlayer: (player: Player) => {
    set({ players: [...get().players, player] });
  },
  setPlayer: (player: Player) => {
    set({
      players: get().players.map(o => {
        if (o.id === player.id) return player;
        return o;
      }),
    });
  },
}));
