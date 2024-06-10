import { MealCreateNestedManyWithoutMenusInput } from "./MealCreateNestedManyWithoutMenusInput";

export type MenuCreateInput = {
  meals?: MealCreateNestedManyWithoutMenusInput;
};
