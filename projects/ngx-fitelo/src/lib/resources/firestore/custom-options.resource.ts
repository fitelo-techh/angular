import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root',
})
export class CustomOptionsResource {

  constructor(
    private firestore: AngularFirestore,
  ) {}

  async getAllMedicalCondtions(): Promise<CustomOption[]> {
    const mc: any = (await this.firestore.doc('customOptions/medicalConditions').get().toPromise()).data();
    return mc.value;
  }

  async saveAllMedicalCondtions(medicalConditions: CustomOption[]) {
    return this.firestore.doc('customOptions/medicalConditions').set({value: medicalConditions})
  }

}

export interface CustomOption {
  name: string
  isHidden: boolean
}
