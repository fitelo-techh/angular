import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserDiaryResource {

  constructor(
    private firestore: AngularFirestore
  ) {}

  doc(uid: string) {
    return this.firestore.doc(`usersDiary/${uid}`);
  }

  async fetchUserDiaryData(uid: string) {
    return (await this.doc(uid).get().toPromise()).data();
  }

  updateUserDiary(uid: string, userDiaryData: any) {
    return this.doc(uid).set(userDiaryData);
  }

}
