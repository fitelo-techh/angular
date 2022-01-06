import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

export function multiLineGraph(id, entries) {
  let chart = am4core.create(id, am4charts.XYChart);
  chart.paddingLeft = 0;

  // Add data
  chart.data = entries;

  chart.data.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) return -1;
    if (new Date(a.date) > new Date(b.date)) return 1;
    return 0;
  });

  // Create axes
  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.fontSize = 10;
  dateAxis.minZoomCount = 5;
  dateAxis.renderer.grid.template.location = 0;
  dateAxis.renderer.minGridDistance = 45;
  dateAxis.dateFormats.setKey('day', 'dd MMM');

  // Create value axis
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.fontSize = 10;

  // Create Series function
  function createSeries(field) {
    var lineSeries: any = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = `${field}`;
    lineSeries.dataFields.dateX = 'date';
    lineSeries.fontSize = 10;
    lineSeries.strokeWidth = 1;
    // lineSeries.strokeDasharray = "";
    lineSeries.name = `${field}`;
    // lineSeries.tensionX = 0.77;

    lineSeries.tooltipText = `${field}: {valueY} inch(es)`;
    lineSeries.tooltip.fontSize = 12;

    var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    // bullet.disabled = true;
    // bullet.propertyFields.disabled = "disabled";
    bullet.circle.strokeWidth = 0;
    bullet.circle.radius = 2;
    bullet.circle.fill = am4core.color('#6270DD');

    return lineSeries;
  }

  var arm = createSeries('arm');

  var chest = createSeries('chest');

  var stomach = createSeries('stomach');

  var thigh = createSeries('thigh');

  var waist = createSeries('waist');

  var hips = createSeries('hips');

  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = 'none';
  chart.cursor.xAxis = dateAxis;
  chart.cursor.snapToSeries = [arm, chest, waist, stomach, thigh, hips];

  chart.legend = new am4charts.Legend();
  chart.legend.position = 'bottom';
}
