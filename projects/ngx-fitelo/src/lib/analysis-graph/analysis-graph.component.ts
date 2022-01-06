import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { UserAnalysisResource } from '../resources/firestore/user-analysis.resource';
import { multiLineGraph } from './helpers/multi-line-graph';
import { singleLineGraph } from './helpers/single-line-graph';

@Component({
  selector: 'fit-analysis-graph',
  templateUrl: './analysis-graph.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalysisGraphComponent implements OnChanges {

  @Input()
  uid: string

  @Input()
  type: 'weight' | 'measurement' | 'water' | 'sleep'

  @Input()
  showSpinner = true

  id;

  entries: any = null

  isLoading = true;

  constructor(
    private uar: UserAnalysisResource,
    private cdr: ChangeDetectorRef,
  ) { }

  async ngOnChanges() {
    this.entries = null;
    this.id = `fit-{{${this.type}}}-graph`;
    if (!this.uid) return;
    this.isLoading = true;
    this.entries = await this.uar.getLatestEntries(this.uid, this.type, 7)
    this.isLoading = false;
    this.renderGraph(this.entries);
    this.cdr.detectChanges();
  }

  renderGraph(entries) {
    if (!document.getElementById(this.id)) {
      setTimeout(() => {this.renderGraph(entries)}, 50);
      return;
    }
    if (this.type == 'measurement') {
      entries.forEach((e,idx) => entries[idx] = Object.assign({date: e.date}, e.value));
      multiLineGraph(this.id, entries);
    }
    else {
      if (this.type == 'sleep') {
        entries.forEach((e,idx) => entries[idx] = Object.assign({date: e.date, value: e.value.sleepHrs}));
      }
      singleLineGraph(this.id, entries);
    }
  }

}
