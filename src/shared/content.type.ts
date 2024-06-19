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

export interface ContentCardEdge {
  __typename: string;
  name: string;
  length: number;
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
