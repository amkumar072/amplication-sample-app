import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  test: TaskWhereUniqueInput | null;
  updatedAt: Date;
  username: string;
};
