import { DailyWorkoutDict } from "../dailyworkout/daily-workout.dict";

export interface WeeklyWorkoutDict {
  id?: number;
  name?: string;
  bmi?: string | null;
  level?: string | null;
  ageGroup?: string | null;
  target?: string | null;
  type?: string | null;
  equipment?: string | null;
  submittedBy?: number | null;
  approvedBy?: number | null;
  status?: string | null;
  dailyWorkoutDicts?: DailyWorkoutDict[] | null;
}
