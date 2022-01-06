import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root',
})
export class PushNotificationsResource {

  constructor(
    private firestore: AngularFirestore,
  ) {}

  async getAll(): Promise<PushNotificationDict[]> {
    return (await this.firestore.collection<PushNotificationDict>('pushNotifications', q => q.orderBy('timestamp', 'desc')).get().toPromise()).docs.map(d => d.data());
  }

}

export interface PushNotificationDict {
  title: string
  text: string
  timestamp: Date
  customData: {[key:string]: string}
}
