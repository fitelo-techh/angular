import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxFiteloComponent } from './ngx-fitelo.component';
import { NgxFiteloConfig, ngxFiteloConfig } from './tokens';

@NgModule({
  declarations: [
    NgxFiteloComponent
  ],
  imports: [
  ],
  exports: [
    NgxFiteloComponent
  ]
})
export class NgxFiteloModule {
  static forRoot(config: NgxFiteloConfig): ModuleWithProviders<NgxFiteloModule> {
    return {
      ngModule: NgxFiteloModule,
      providers: [ {provide: ngxFiteloConfig, useValue: config}]
    };
  }
}
