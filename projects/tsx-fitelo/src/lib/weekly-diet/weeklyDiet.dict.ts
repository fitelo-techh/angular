import { DailyDietDict } from "../daily-diet/daily-diet.dict";

export interface WeeklyDietDict {
  id?: number;
  name?: string;
  conditions?: string[] | null;
  dietPreference?: string | null;
  firstMajorFood?: string | null;
  secondMajorFood?: string | null;
  target?: string | null;
  portionSize?: string | null;
  residenceType?: string | null;
  submittedBy?: number | null;
  approvedBy?: number | null;
  status?: string | null;
  dailyDietDicts?: DailyDietDict[] | null;
}
