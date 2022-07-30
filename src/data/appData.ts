import { AppData } from "./types";

export const appData: AppData = {
  appTitle: "🎸 App Title 🎸",
  appFooter: {
    fullName: "Gurvan Henry",
    email: "gurvan@hojopa.com",
    notes: "Developed with Expo and react-native-web",
    sourceCodeLink:
      "https://github.com/gurvanhenry/SimplePresentation-MobileAndWebApp-RN",
  },
  sections: [
    {
      title: "Section 1 title",
      markdownContent: `
# header

## sub header

**This is some bold text!**
          `,
    },
    {
      title: "section 2",
      markdownContent: `
This is normal text
With a link to [inaturalist website](https://www.gurvanhenry.com)

And image:
![random image](https://picsum.photos/200 =100x100)

* list item 1
* list __item 2__
          `,
    },
    {
      title: "section 3",
      markdownContent: `
...
          `,
    },
  ],
};
