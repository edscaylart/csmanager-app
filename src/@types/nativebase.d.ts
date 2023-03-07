import { theme } from '@/styles';

type CustomThemeType = typeof theme;

declare module 'native-base' {
  interface ITheme extends CustomThemeType {}
}
