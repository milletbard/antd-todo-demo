export interface ITodo {
  id?: string;
  name: string;
  completed?: boolean;
}

export type IStatue = "idle" | "loading" | "failed";
