import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root',
})
export class PlansResource {

  constructor(
    private firestore: AngularFirestore,
  ) {}

  async mget(planIds: string[]) {
    const planIdsDict = {};
    planIds.forEach(id => planIdsDict[id] = 0);
    const uPlanIds = Object.keys(planIdsDict);
    let dbPlans: any[] =  [];
    const chunked = chunkArray(uPlanIds, 10);
    for (let i = 0; i < chunked.length; i++) {
      dbPlans = dbPlans.concat((await this.firestore.collection('plans', q => q.where('id', 'in', chunked[i])).get().toPromise()).docs.map(d => d.data()))
    }
    const plans: any[] = [];
    planIds.forEach(planId => {
      plans.push(Object.assign({}, dbPlans.find(p => p.id == planId)));
    });
    return plans;
  }

}

function chunkArray(array, size) {
  let result: any[] = []
  for (let i = 0; i < array.length; i += size) {
      let chunk = array.slice(i, i + size)
      result.push(chunk)
  }
  return result
}
