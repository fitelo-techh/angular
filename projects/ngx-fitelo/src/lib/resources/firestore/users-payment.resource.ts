import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import moment from "moment";

@Injectable({
  providedIn: 'root',
})
export class UsersPaymentResource {

  constructor(
    private firestore: AngularFirestore,
  ) {}

  doc(uid: string) {
    return this.firestore.doc(`usersPayment/${uid}`);
  }

  async getUserPayment(uid: string) {
    return <{data: {date: string, orderId: string, paymentId: string, planId: string}[], uid: string}> (await this.doc(uid).get().toPromise()).data();
  }

  async updatePayment(uid, plan, request) {
    let userPayment: any = (await this.doc(uid).get().toPromise()).data();
    if (!userPayment) {
      userPayment = {
        uid: uid,
        data: []
      }
    };
    userPayment.data.push({
      date: moment().format('YYYY-MM-DD HH:mm:ss'),
      paymentId: request['paymentId'],
      orderId: request['orderId'],
      planId: plan.id,
    })
    return this.doc(uid).set(userPayment);
  }

}
