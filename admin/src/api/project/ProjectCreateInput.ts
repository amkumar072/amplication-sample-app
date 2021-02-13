import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  endDate?: Date | null;
  name?: string | null;
  owner: UserWhereUniqueInput;
  startDate?: Date | null;
};
