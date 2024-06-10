import { StringFilter } from "../../util/StringFilter";
import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MealWhereInput = {
  id?: StringFilter;
  menu?: MenuWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
