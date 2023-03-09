import { Select } from 'native-base';

import { useStore } from '@/store';

type Props = {
  placeholder?: string;
  value?: string;
  onValueChange?: (itemValue: string) => void;
};

export function MapSelect({ placeholder, value, onValueChange }: Props) {
  const mapsType = useStore(state => state.mapsType);

  return (
    <Select
      selectedValue={value}
      accessibilityLabel={placeholder}
      placeholder={placeholder}
      onValueChange={onValueChange}>
      {mapsType.map(map => (
        <Select.Item key={map.value} label={map.text} value={map.value} />
      ))}
    </Select>
  );
}
