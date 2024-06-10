import { User } from "../user/User";

export type Billing = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
