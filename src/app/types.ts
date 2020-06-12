export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Post {
  title: string;
  body: string;
  userId: number;
  id: number;
}
