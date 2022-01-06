import { ExerciseDict } from "../exercise/exercise.dict";
import { RecipeDict } from "../recipe/recipe.dict";

export interface WorkoutDict {
  id?: number;
  time?: string;
  workoutDone?: boolean;
  exerciseDicts?: ExerciseDict[];
}
