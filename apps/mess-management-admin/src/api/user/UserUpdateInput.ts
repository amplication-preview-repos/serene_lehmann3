import { BillingUpdateManyWithoutUsersInput } from "./BillingUpdateManyWithoutUsersInput";
import { FeedbackUpdateManyWithoutUsersInput } from "./FeedbackUpdateManyWithoutUsersInput";
import { MealUpdateManyWithoutUsersInput } from "./MealUpdateManyWithoutUsersInput";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  billings?: BillingUpdateManyWithoutUsersInput;
  email?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  meals?: MealUpdateManyWithoutUsersInput;
  password?: string;
  payments?: PaymentUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
