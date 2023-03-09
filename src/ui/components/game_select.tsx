import { Select } from 'native-base';

import { useStore } from '@/store';

type Props = {
  placeholder?: string;
  value?: string;
  onValueChange?: (itemValue: string) => void;
};

export function GameSelect({ placeholder, value, onValueChange }: Props) {
  const gamesType = useStore(state => state.gamesType);

  return (
    <Select
      selectedValue={value}
      accessibilityLabel={placeholder}
      placeholder={placeholder}
      onValueChange={onValueChange}>
      {gamesType.map(game => (
        <Select.Item key={game.value} label={game.text} value={game.value} />
      ))}
    </Select>
  );
}
