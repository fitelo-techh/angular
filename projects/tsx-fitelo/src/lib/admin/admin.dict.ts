import { UserDict } from '../user/user.dict';

export interface AdminDict {
  id?: number;
  uid?: string;
  name?: string | null;
  displayName?: string | null;
  email?: string | null;
  phone?: string | null;
  emergencyPhone?: string | null;
  personalEmail?: string | null;
  photoURL?: string | null;
  joiningDate?: string | null;
  reportingManager?: number | null;
  address?: string | null;
  experience?: string | null;
  city?: string | null;
  code?: string | null;
  skillSet?: string | null;
  specialSkill?: string | null;
  status?: string;
  reportsPinnedBy?: number[] | null;
  roleId?: number;
  teamId?: number;
}
