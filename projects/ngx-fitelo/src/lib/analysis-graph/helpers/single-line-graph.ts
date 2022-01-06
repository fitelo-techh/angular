import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

export function singleLineGraph(id, entries) {
  let chart = am4core.create(id, am4charts.XYChart);
  chart.paddingLeft = 0;

  chart.data = entries;

  // Create axes
  let dateAxis: any = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.fontSize = 10;
  dateAxis.minZoomCount = 5;
  dateAxis.renderer.grid.template.location = 0;
  dateAxis.renderer.minGridDistance = 45;
  dateAxis.dateFormats.setKey('day', 'dd MMM');
  dateAxis.tooltip.fontSize = 12;

  // Create value axis
  let valueAxis: any = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.fontSize = 10;
  valueAxis.extraTooltipPrecision = 2;
  valueAxis.tooltip.fontSize = 12;

  // Create series
  let lineSeries = chart.series.push(new am4charts.LineSeries());
  lineSeries.dataFields.valueY = 'value';
  lineSeries.dataFields.dateX = 'date';
  lineSeries.fontSize = 10;
  lineSeries.strokeWidth = 1.5;
  lineSeries.strokeDasharray = '4';
  lineSeries.stroke = am4core.color('#E55F3B');

  // Add simple bullet
  let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
  // bullet.disabled = true;
  // bullet.propertyFields.disabled = "disabled";
  bullet.circle.strokeWidth = 0;
  bullet.circle.radius = 2;
  bullet.circle.fill = am4core.color('#6270DD');

  let secondCircle = bullet.createChild(am4core.Circle);
  secondCircle.radius = 3;
  secondCircle.fill = am4core.color('#6270DD');
  secondCircle.strokeWidth = 0;

  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = 'none';
  chart.cursor.xAxis = dateAxis;
  chart.cursor.snapToSeries = lineSeries;
}
