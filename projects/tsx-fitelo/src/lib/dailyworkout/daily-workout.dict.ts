import { WorkoutDict } from "./workout.dict";

export interface DailyWorkoutDict {
  id?: number;
  name?: string;
  day?: number; // 1 for monday
  submittedBy?: number | null;
  approvedBy?: number | null;
  status?: string | null;
  workoutDicts?: WorkoutDict[] | null;
}
