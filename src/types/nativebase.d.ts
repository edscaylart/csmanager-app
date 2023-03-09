import { theme } from '@/ui/styles';

type CustomThemeType = typeof theme;

declare module 'native-base' {
  interface ITheme extends CustomThemeType {}
}
