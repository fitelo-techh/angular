import { MealDict } from './meal.dict';

export interface DailyDietDict {
  id?: number;
  name?: string;
  day?: number; // 1 for monday
  submittedBy?: number | null;
  approvedBy?: number | null;
  status?: string | null;
  mealDicts?: MealDict[] | null;
}
