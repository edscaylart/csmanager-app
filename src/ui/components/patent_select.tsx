import { Select } from 'native-base';
import { useMemo } from 'react';

import rankingsCsGo from '@/assets/cs-go/rankings.json';

type Props = {
  placeholder?: string;
  value?: string;
  onValueChange?: (itemValue: string) => void;
};

type ItemData = {
  text: string;
  value: string;
};

export function PatentSelect({ placeholder, value, onValueChange }: Props) {
  const items = useMemo<ItemData[]>(() => {
    const competitive = rankingsCsGo.find(rank => rank.type === 'competitive');
    return (
      competitive?.items.map(item => ({
        value: item.id,
        text: item.name['pt-BR'],
      })) ?? []
    );
  }, []);

  return (
    <Select
      selectedValue={value}
      accessibilityLabel={placeholder}
      placeholder={placeholder}
      onValueChange={onValueChange}>
      {items.map(item => (
        <Select.Item key={item.value} label={item.text} value={item.value} />
      ))}
    </Select>
  );
}
