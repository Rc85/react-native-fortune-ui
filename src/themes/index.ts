import { colors } from '../constants';

interface Themes {
  background: string;
  foreground: string;
  text: string;
  subtitle: string;
  border: string;
  disabledButtonColor: string;
  disabledButtonTextColor: string;
}

interface ThemesTypes {
  [key: string]: Themes;
}

export const themes: ThemesTypes = {
  light: {
    background: colors.fadedGrey,
    foreground: colors.white,
    text: colors.black,
    subtitle: colors.grey,
    border: colors.lightGrey,
    disabledButtonColor: colors.lightGrey,
    disabledButtonTextColor: colors.white
  },
  dark: {
    background: colors.black,
    foreground: colors.darkGrey,
    text: colors.fadedGrey,
    subtitle: colors.lightGrey,
    border: colors.grey,
    disabledButtonColor: colors.darkGrey,
    disabledButtonTextColor: colors.grey
  }
};
