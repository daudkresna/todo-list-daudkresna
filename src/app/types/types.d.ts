export type TodoResponse = {
  status: number;
  data: Todo[];
};

export type Todo = {
  id: string;
  title: string;
  tag: string;
  content: string;
  completed: boolean;
  completedAt: Date | null;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
};
