import * as React from "react";
import { Appbar } from "react-native-paper";
import { appData } from "../data/appData";
import { Sections } from "../components/Sections";
import { Footer } from "../components/Footer";

export function MainScreen() {
  const sections = appData.sections;
  const title = appData.appTitle;
  const footer = appData.appFooter;
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title={title} />
      </Appbar.Header>
      <Sections sections={sections} footer={<Footer footer={footer} />} />
    </>
  );
}
