import { RecipeDict } from "../recipe/recipe.dict";

export interface MealDict {
  id?: number;
  time?: string;
  mealTaken?: boolean;
  mealNote?: string;
  recipeDicts?: RecipeDict[];
}
