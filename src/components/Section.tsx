import * as React from "react";
import { Section as SectionType } from "../data/types";
import { Linking } from "react-native";
import { Title, Card, useTheme } from "react-native-paper";
import { MarkdownView } from "react-native-markdown-view";

export function Section({ section }: { section: SectionType }) {
  const { colors } = useTheme();
  const cardStyle = {
    borderColor: colors.primary,
    maxWidth: 1000,
  };
  const markdownStyles = {
    hr: {
      marginVertical: 10,
      blockQuote: {
        marginBottom: 20,
      },
    },
    list: {
      margin: 0,
      marginBottom: 8,
    },
    listItemBullet: {
      marginLeft: 2,
      minWidth: 13,
    },
    link: {
      color: colors.primary,
    },
    imageWrapper: {
      padding: 0,
    },
  };
  return (
    <Card mode={"outlined"} style={cardStyle}>
      <Card.Content>
        <Title>{section.title}</Title>
        <MarkdownView
          styles={markdownStyles}
          onLinkPress={(url: string) => {
            Linking.openURL(url).catch((error) =>
              console.warn("An error occurred: ", error)
            );
          }}
        >
          {section.markdownContent}
        </MarkdownView>
      </Card.Content>
    </Card>
  );
}
