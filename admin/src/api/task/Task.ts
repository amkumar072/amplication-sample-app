import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type Task = {
  assignedTo: UserWhereUniqueInput | null;
  createdAt: Date;
  description: string | null;
  estimation: number | null;
  id: string;
  project: ProjectWhereUniqueInput;
  startDate: Date;
  status: "new" | "pending" | "onHold" | "ongoing" | "done";
  title: string;
  updatedAt: Date;
};
