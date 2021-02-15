import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type UserWhereInput = {
  createdAt?: Date;
  firstName?: string | null;
  id?: string;
  lastName?: string | null;
  test?: TaskWhereUniqueInput | null;
  updatedAt?: Date;
  username?: string;
};
