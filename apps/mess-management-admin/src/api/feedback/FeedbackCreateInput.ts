import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackCreateInput = {
  user?: UserWhereUniqueInput | null;
};
