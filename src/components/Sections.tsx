import * as React from "react";
import { Section as SectionType } from "../data/types";
import { FlatList, StyleSheet, View } from "react-native";
import { Section } from "../components/Section";

export function Sections({
  sections,
  footer,
}: {
  sections: SectionType[];
  footer: React.ReactElement | null | undefined;
}) {
  return (
    <FlatList
      data={sections}
      renderItem={Item}
      keyExtractor={(section) => section.title}
      style={styles.container}
      ListFooterComponent={footer}
    />
  );
}

function Item({ item }: { item: SectionType }) {
  return (
    <View style={styles.item}>
      <Section section={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
