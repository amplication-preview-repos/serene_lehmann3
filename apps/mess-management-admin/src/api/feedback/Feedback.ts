import { User } from "../user/User";

export type Feedback = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
