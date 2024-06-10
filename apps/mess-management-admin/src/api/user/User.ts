import { Billing } from "../billing/Billing";
import { Feedback } from "../feedback/Feedback";
import { Meal } from "../meal/Meal";
import { Payment } from "../payment/Payment";
import { JsonValue } from "type-fest";

export type User = {
  billings?: Array<Billing>;
  createdAt: Date;
  email: string | null;
  feedbacks?: Array<Feedback>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  meals?: Array<Meal>;
  payments?: Array<Payment>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
