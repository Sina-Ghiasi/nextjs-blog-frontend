export type CommentType = {
  _id: string;
  createdAt: string;
  user: { _id: string; name: string; avatar: string; avatarUrl: string };
  content: {
    text: string;
  };
  status: number;
  openToComment: boolean;
  answers: CommentType[];
};
