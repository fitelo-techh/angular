import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { NgxFiteloConfig, ngxFiteloConfig } from "../../tokens";

@Injectable({
  providedIn: 'root',
})
export class PaymentsResource {

  constructor(
    private httpClient: HttpClient,
    @Inject(ngxFiteloConfig) private config: NgxFiteloConfig,
  ) {}

  createOrder(plan) {
    return this.httpClient.post(`${this.config.API_URL}/payments/createorder`, {"amount" : plan.price*100},).toPromise()
  }

  verify(requestBody) {
    return this.httpClient.post<boolean>(`${this.config.API_URL}/payments/verify`, requestBody).toPromise()
  }

}
