interface Image {
  uri: string;
}

interface Category {
  name: string;
}

interface Expert {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
}

interface ContentCardEdge {
  __typename: string;
  name: string;
  image: Image;
  categories: Category[];
  experts: Expert[];
}

export interface GetContentCardsData {
  contentCards: {
    edges: ContentCardEdge[];
  };
}

export interface GetContentCardsVars {
  keywords: string;
}
