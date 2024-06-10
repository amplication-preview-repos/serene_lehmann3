import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
