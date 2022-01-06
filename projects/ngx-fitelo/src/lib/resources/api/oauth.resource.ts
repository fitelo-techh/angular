import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { RoutineDict, UserDict } from "tsx-fitelo";
import moment from "moment";
import { NgxFiteloConfig, ngxFiteloConfig } from "../../tokens";

@Injectable({
  providedIn: 'root',
})
export class OauthResource {

  constructor(
    @Inject(ngxFiteloConfig) private config: NgxFiteloConfig,
    private httpClient: HttpClient,
  ) {}

  async registerUser(credentials) {
    return this.httpClient.post(`${this.config.API_URL}/oauth/register`, credentials).toPromise()
  }

  async getUser(accessToken: string): Promise<UserDict> {
    const ud = await this.httpClient.get<UserDict>(`${this.config.API_URL}/oauth/self`, {headers: {'accesstoken': accessToken}}).toPromise()
    return ud;
  }

  async updateUser(accessToken: string, userDict: UserDict): Promise<UserDict> {
    const ud = await this.httpClient.post<UserDict>(`${this.config.API_URL}/oauth/updateuser`, userDict, {headers: {'accesstoken': accessToken}}).toPromise();
    return ud;
  }

  async forgotPassword(email: string) {
    return this.httpClient.post(`${this.config.API_URL}/oauth/forgot-password`,{email: email}).toPromise();
  }

  async resetPassword(email: string, code: number, password: string) {
    return this.httpClient.post(`${this.config.API_URL}/oauth/reset-password`,{email: email, code: code, password: password}).toPromise();
  }

  async getRoutine(accessToken: string, id: number, date) {
    let data;
    try {
      data = await this.httpClient.get<RoutineDict>(`${this.config.API_URL}/oauth/routines/${id}/${date}`, {headers: {'accesstoken': accessToken}}).toPromise();
    }
    catch (e) {
      data = null;
    }
    return data;
  }

  async updateRoutine(accessToken: string, userId: number, date: string, mealId: number, value: boolean) {
    date = moment(date).format('YYYY-MM-DD');
    const url = `${this.config.API_URL}/oauth/routines/${userId}/${date}/mealtaken/${mealId}`;
    return this.httpClient.put(url, {mealTaken: value}, {headers: {'accesstoken': accessToken}}).toPromise();
  }

  async getGroceries(accessToken: string, userId: number) {
    let fiterparam = new HttpParams().set('filters', JSON.stringify(this.getFilersArray()));
    const res = await this.httpClient.get<Routines>(`${this.config.API_URL}/oauth/routines/${userId}`,{params: fiterparam, headers: {'accesstoken': accessToken}}).toPromise();

    let routine: any = res.data
    let newgroceriesDict: any = {};
    routine.forEach((val) => {
      val.mealDicts.forEach((meal) => {
        meal.recipeDicts.forEach((recipe) => {
          if(recipe.groceryDicts) {
            recipe.groceryDicts.forEach((grocery) => {
              newgroceriesDict[grocery.id] = grocery;
            })
          }
        })
      })
    })

    return Object.values(newgroceriesDict);
  }

  getFilersArray() {
    const today = moment().format("YYYYMMDD");

    let filersArray = [
      {
        "field": "date",
        "operator": ">=",
        "value": today,
      },
      {
        "field": "date",
        "operator": "<=",
        "value": moment().add(7,'day').format("YYYYMMDD")
      }
    ]

    return filersArray;
  }

}

interface Routines {
  data?: RoutineDict[],
  paging?: any
}
