import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BillingWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
