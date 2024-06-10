import { Menu } from "../menu/Menu";
import { User } from "../user/User";

export type Meal = {
  createdAt: Date;
  id: string;
  menu?: Menu | null;
  updatedAt: Date;
  user?: User | null;
};
