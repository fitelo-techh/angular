import { InjectionToken } from "@angular/core";

export interface NgxFiteloConfig {
  API_URL: string
}

export const ngxFiteloConfig = new InjectionToken<NgxFiteloConfig>('ngxFiteloConfig');
