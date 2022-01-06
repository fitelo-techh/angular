export interface ExerciseDict {
  id?: number;
  name?: string;
  videoLink?: string | null;
  thumbnail?: string | null;
  duration?: string | null;
  caloriesBurn?: number | null;
  sets?: number;
  repsPerSet?: number;
}
