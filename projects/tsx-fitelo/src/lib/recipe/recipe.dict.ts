import { GroceryDict } from '../grocery/grocery.dict';
import { Macro } from './macro';

export interface RecipeDict {
  id?: number;
  name?: string;
  conditions?: string[] | null;
  calories?: number | null;
  blogLink?: string | null;
  groceryDicts?: GroceryDict[] | null;
  macros?: Macro[] | null;
}
