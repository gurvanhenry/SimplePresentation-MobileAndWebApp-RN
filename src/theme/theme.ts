import { DefaultTheme as DefaultTheme } from "react-native-paper";

const customColors = {
  green: "#74ac00",
  greenLight: "#eaf3d8",
  grey: "#eee",
  black: "black",
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: customColors.green,
    secondary: customColors.greenLight,
  },
};
