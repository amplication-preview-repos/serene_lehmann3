import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MealCreateInput = {
  menu?: MenuWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
