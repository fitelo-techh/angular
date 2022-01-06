import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxFiteloConfig, ngxFiteloConfig } from "../../tokens";

@Injectable({
  providedIn: 'root',
})
export class PlansResource {

  constructor(
    private http: HttpClient,
    @Inject(ngxFiteloConfig) private config: NgxFiteloConfig,
  ) {}

  getPlans(): Promise<any> {
    const url = `${this.config.API_URL}/plans`;
    return this.http.get(url).toPromise();
  }
}
