import { MealDict } from '../daily-diet/meal.dict';
import { WorkoutDict } from '../dailyworkout/workout.dict';

export interface RoutineDict {
  id?: number;
  date?: string;
  userId?: number;
  mealDicts?: MealDict[];
  workoutDicts?: WorkoutDict[];
}
