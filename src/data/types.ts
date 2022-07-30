export type AppData = {
  appTitle: string;
  appFooter: AppFooter;
  sections: Section[];
};

export type AppFooter = {
  fullName: string;
  email: string;
  notes: string;
  sourceCodeLink: string;
};

export type Section = {
  title: string;
  markdownContent: string;
};
