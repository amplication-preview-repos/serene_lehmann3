import { Meal } from "../meal/Meal";

export type Menu = {
  createdAt: Date;
  id: string;
  meals?: Array<Meal>;
  updatedAt: Date;
};
