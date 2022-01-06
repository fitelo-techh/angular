import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisGraphComponent } from './analysis-graph.component';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  declarations: [AnalysisGraphComponent],
  imports: [
    CommonModule,
    SpinnerModule,
  ],
  exports: [AnalysisGraphComponent]
})
export class AnalysisGraphModule { }
