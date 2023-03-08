import { create } from 'zustand';

import gamesJson from '@/assets/games.json';
import mapsJson from '@/assets/maps.json';

type GameType = {
  value: string;
  text: string;
  shortText: string;
};

type MapType = {
  value: string;
  text: string;
};

type State = {
  gamesType: GameType[];
  mapsType: MapType[];
};

export const useStore = create<State>(set => ({
  gamesType: gamesJson.map(game => ({
    value: game.id,
    text: game.name,
    shortText: game.shortName,
  })),
  mapsType: mapsJson.map(map => ({ value: map.id, text: map.name['pt-BR'] })),
}));
