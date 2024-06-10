import { User } from "../user/User";

export type Payment = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
