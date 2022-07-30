import * as React from "react";
import { StyleSheet, View, Text, Linking } from "react-native";
import { Chip, useTheme } from "react-native-paper";
import { AppFooter } from "../data/types";

export function Footer({ footer }: { footer: AppFooter }) {
  const { colors } = useTheme();
  const { fullName, email, notes, sourceCodeLink } = footer;
  return (
    <View style={[styles.container, { backgroundColor: colors.secondary }]}>
      <Text style={styles.textFullName}>{fullName}</Text>
      <Chip
        icon="email"
        mode="outlined"
        style={styles.chipEmail}
        onPress={() => Linking.openURL(`mailto:${email}`)}
      >
        {email}
      </Chip>
      <Text style={styles.textDevelopBy}>{notes}</Text>
      <Text
        style={[styles.textSourcecode, { color: colors.primary }]}
        onPress={() => Linking.openURL(sourceCodeLink)}
      >
        see source code
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textFullName: {
    marginBottom: 10,
  },
  chipEmail: {
    height: 40,
    marginBottom: 10,
  },
  textDevelopBy: {
    marginBottom: 10,
  },
  textSourcecode: {
    marginBottom: 10,
  },
});
