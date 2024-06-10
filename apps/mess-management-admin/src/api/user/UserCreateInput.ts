import { BillingCreateNestedManyWithoutUsersInput } from "./BillingCreateNestedManyWithoutUsersInput";
import { FeedbackCreateNestedManyWithoutUsersInput } from "./FeedbackCreateNestedManyWithoutUsersInput";
import { MealCreateNestedManyWithoutUsersInput } from "./MealCreateNestedManyWithoutUsersInput";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  billings?: BillingCreateNestedManyWithoutUsersInput;
  email?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  meals?: MealCreateNestedManyWithoutUsersInput;
  password: string;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
