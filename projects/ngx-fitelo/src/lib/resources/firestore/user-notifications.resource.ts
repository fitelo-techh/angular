import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root',
})
export class UserNotificationsResource {

  constructor(
    private firestore: AngularFirestore,
  ) {}

  doc(uid: string) {
    return this.firestore.doc(`userNotifications/${uid}`);
  }

  async getUserRemindersDict(uid: string): Promise<RemindersDict|null> {
    let un: any = (await this.doc(uid).get().toPromise()).data()
    if (!un || !un.remindersDict) return null;
    return un.remindersDict;
  }

  async getUserReminderDict(uid: string, type: 'weight'|'water'|'sleep'): Promise<ReminderDict|null> {
    let un: any = (await this.doc(uid).get().toPromise()).data()
    if (!un || !un.remindersDict) return null;
    return type ? un.remindersDict[type + 'ReminderDict'] : un.remindersDict;
  }

  async saveUserReminderDict(uid: string, type: 'weight'|'water'|'sleep', reminderDict: ReminderDict) {
    let un: any = (await this.doc(uid).get().toPromise()).data()
    if (!un) un = {};
    if (!un.remindersDict) un.remindersDict = {}
    un.remindersDict[type + 'ReminderDict'] = reminderDict;
    return this.doc(uid).set(un);
  }

  async getUserMedicineReminderDict(uid: string, idx: number): Promise<ReminderDict|null> {
    let un: any = (await this.doc(uid).get().toPromise()).data()
    if (!un || !un.remindersDict) return null;
    return un.remindersDict['medicineReminderDicts'][idx];
  }

  async saveUserMedicineReminder(uid: string, idx: number|null, reminderDict: ReminderDict) {
    let un: any = (await this.doc(uid).get().toPromise()).data()
    if (!un) un = {};
    if (!un.remindersDict) un.remindersDict = {}
    if (!un.remindersDict.medicineReminderDicts) un.remindersDict.medicineReminderDicts = [];
    if (idx === null)
      un.remindersDict.medicineReminderDicts.push(reminderDict);
    else
      un.remindersDict.medicineReminderDicts[idx] = reminderDict;
    return this.doc(uid).set(un);
  }

}

export type ReminderType = 'weight' | 'water' | 'sleep' | 'medicine';
export interface ReminderDict {
  type: ReminderType,
  freqDict: FreqDict,
  isActive: boolean,
  name?: string,
  idx?: number,
}
export interface RemindersDict {
  weightReminderDict: ReminderDict,
  waterReminderDict: ReminderDict,
  sleepReminderDict: ReminderDict,
  medicineReminderDicts: ReminderDict[],
}
export interface FreqDict {
  type: string,
  value: string[],
}
