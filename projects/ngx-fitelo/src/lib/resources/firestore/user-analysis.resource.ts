import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class UserAnalysisResource {

  constructor(
    private firestore: AngularFirestore,
  ) {}

  async getUserAnalysis(uid: string) {
    let userAnalysis: any = null;
    try {
      userAnalysis = (await this.firestore.doc(`usersanalysis/${uid}`).get().toPromise()).data();
    }
    catch(e) {}
    return userAnalysis;
  }

  async getLatestEntry(uid: string, type: 'weight' | 'measurement' | 'water' | 'sleep') {
    const userAnalysis = await this.getUserAnalysis(uid);
    return this.findLatestEntry(userAnalysis, type);
  }

  findLatestEntry(userAnalysis, type: 'weight' | 'measurement' | 'water' | 'sleep') {
    if (!userAnalysis) {
      if (type == 'measurement') return defaultMeasurement;
      if (type == 'sleep') return defaultSleep;
      return 0;
    }

    let latestEntry: any = 0;
    if (type == 'measurement') latestEntry = defaultMeasurement;
    if (type == 'sleep') latestEntry = defaultSleep;

    Object.keys(userAnalysis.data).sort().forEach((date: string) => {
      const entry = userAnalysis.data[date];
      if (entry[type]) latestEntry = entry[type];
    })
    return latestEntry;
  }

  async getLatestEntries(uid: string, type: 'weight' | 'measurement' | 'water' | 'sleep', howMany = 7) {
    const userAnalysis = await this.getUserAnalysis(uid);
    return this.findLatestEntries(userAnalysis, type, howMany);
  }

  findLatestEntries(userAnalysis, type: 'weight' | 'measurement' | 'water' | 'sleep', howMany = 7) {
    if (!userAnalysis || !userAnalysis.data) {
      return [];
    }

    let latestEntries: any[] = [];

    Object.keys(userAnalysis.data).sort().forEach((date: string) => {
      const entry = userAnalysis.data[date];
      if (entry[type]) latestEntries.push({date: date, value: entry[type]});
    })

    return latestEntries.sort((a,b) => a.date > b.date ? -1 : 1).slice(0,howMany).sort((a,b) => a.date < b.date ? -1 : 1);
  }

  async saveWeightAndMeasurement(uid, date, weight, measurement) {
    let newUserAnalysis: any = {};
    const userAnalysis = await this.getUserAnalysis(uid);
    if (!userAnalysis) {
      newUserAnalysis = {
        data: {
          [date]: {
            measurement: measurement,
            weight: weight
          }
        },
        uid: uid,
      }
    }
    else {
      newUserAnalysis = userAnalysis;
      if (!newUserAnalysis.data[date]) newUserAnalysis.data[date] = {};
      newUserAnalysis.data[date]['measurement'] = measurement;
      newUserAnalysis.data[date]['weight'] = weight;
    }
    return this.firestore.doc(`usersanalysis/${uid}`).set(newUserAnalysis);
  }

  async saveWater(uid, date, water) {
    let newUserAnalysis: any = {};
    const userAnalysis = await this.getUserAnalysis(uid);
    if (!userAnalysis) {
      newUserAnalysis = {
        data: {
          [date]: {
            water: water
          }
        },
        uid: uid,
      }
    }
    else {
      newUserAnalysis = userAnalysis;
      if (!newUserAnalysis.data[date]) newUserAnalysis.data[date] = {};
      newUserAnalysis.data[date]['water'] = water;
    }
    return this.firestore.doc(`usersanalysis/${uid}`).set(newUserAnalysis);
  }

  async saveSleep(uid, date, sleep) {
    let newUserAnalysis: any = {};
    const userAnalysis = await this.getUserAnalysis(uid);
    if (!userAnalysis) {
      newUserAnalysis = {
        data: {
          [date]: {
            sleep: sleep
          }
        },
        uid: uid,
      }
    }
    else {
      newUserAnalysis = userAnalysis;
      if (!newUserAnalysis.data[date]) newUserAnalysis.data[date] = {};
      newUserAnalysis.data[date]['sleep'] = sleep;
    }
    return this.firestore.doc(`usersanalysis/${uid}`).set(newUserAnalysis);
  }

}

export const defaultMeasurement = {
  arm: 0,
  chest: 0,
  hips: 0,
  stomach: 0,
  thigh: 0,
  waist: 0,
}

export const defaultSleep = {
  sleepHrs: 8,
  sleepTime: '22:00',
  wakeupTime: '06:00'
}
