import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { MainScreen } from "./src/screens/MainScreen";
import { theme } from "./src/theme/theme";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <MainScreen />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
