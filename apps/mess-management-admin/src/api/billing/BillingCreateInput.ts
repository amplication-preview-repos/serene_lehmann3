import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BillingCreateInput = {
  user?: UserWhereUniqueInput | null;
};
