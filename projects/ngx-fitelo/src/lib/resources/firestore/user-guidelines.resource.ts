import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';

interface Guideline {
  dos?: string[],
  donts?: string[],
  instructions?: string[]
}

@Injectable({
  providedIn: 'root',
})
export class UserGuidelinesResource {

  constructor(private afs: AngularFirestore) {}

  async getGuidelines(uid: string) {
    let data: any = null;
    try {
      data = (await this.afs.doc(`userGuidelines/${uid}`).get().toPromise()).data()
    }
    catch (e) {

    }
    return data;
  }

}
