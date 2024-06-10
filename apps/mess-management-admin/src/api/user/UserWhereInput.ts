import { BillingListRelationFilter } from "../billing/BillingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MealListRelationFilter } from "../meal/MealListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type UserWhereInput = {
  billings?: BillingListRelationFilter;
  email?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  meals?: MealListRelationFilter;
  payments?: PaymentListRelationFilter;
  username?: StringFilter;
};
