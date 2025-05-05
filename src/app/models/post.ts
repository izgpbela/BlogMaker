export interface Author {
  name: string;
  imageUrl?: string;
}

export interface Theme {
  name: string;
}

export interface Post {
  id: number | string;
  title: string;
  summary: string;
  content: string;
  imageUrl?: string;
  createdAt: Date;
  likes: number;
  comments: number;
  author: Author;
  theme: Theme;
}
