import { SortOrder } from "../../util/SortOrder";

export type MealOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  menuId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
