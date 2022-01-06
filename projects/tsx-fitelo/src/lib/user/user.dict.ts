import { Subscription } from "./subscription.dict";

export interface UserDict {
  id?: number;
  uid?: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  photoURL?: string | null;
  gender?: string | null;
  age?: number | null;
  height?: number | null;
  dob?: string | null;
  country?: string | null;
  dietitianId?: number | null;
  salesPersonId?: number | null;
  relationManagerId?: number | null;
  subscription_duration?: number | null;
  subscription_status?: string;
  subscription_endDate?: string | null;
  subscription_planPauseDate?: string | null;
  subscription_extensionEndDate?: string | null;
  subscription?: Subscription | null;
  counselling_date?: string | null;
  counselling_time?: string | null;
  counselling_status?: string | null;
  followup_dt?: string[] | null;
  followup_sp?: string[] | null;
  followup_rm?: string[] | null;
  dietDays?: string[] | null;
  pinnedBy?: number[] | null;
  rosterPinnedBy?: number[] | null;
  customFields?: { [key: string]: any } | null;
}
