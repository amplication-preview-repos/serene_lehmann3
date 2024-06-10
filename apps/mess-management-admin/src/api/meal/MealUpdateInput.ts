import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MealUpdateInput = {
  menu?: MenuWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
