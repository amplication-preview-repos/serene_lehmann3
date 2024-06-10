import { StringFilter } from "../../util/StringFilter";
import { MealListRelationFilter } from "../meal/MealListRelationFilter";

export type MenuWhereInput = {
  id?: StringFilter;
  meals?: MealListRelationFilter;
};
