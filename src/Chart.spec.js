export default {

  $schema: 'https://vega.github.io/schema/vega/v3.0.json',
  name: 'lineChart',
  width: 265,
  height: 186,
  padding: { top: 10, left: 70, bottom: 50, right: 10},
  autosize: 'fit',
  data: [{ name: 'activity' }],
  scales: [
    {
      name: 'x',
      type: 'time',
      domain: { data: 'activity', field: 'datestamp' },
      clamp:true,
      round: true,
      zero: false,
      range: 'width',
    },
    {
      name: 'y',
      domain: { data: 'activity', field: 'job' },
      type: 'linear',
      nice: true,
      zero: false, 
      range: 'height',
    },
  ],

  axes: [
    { type: 'x', orient: 'bottom', scale: 'x', grid: true, formatType: 'time', ticks: 8, tickSizeEnd: 0, tickSizeMinor: 5, tickPadding: 4, tickSizeMajor: 10, 
      properties: { axis: { strokeOpacity: { 'value': 0.15 }}, majorTicks: {strokeOpacity: { 'value': 0.15 }}, minorTicks: {strokeOpacity: { 'value': 0.15 }, labels: {strokeOpacity: { 'value': 0.15 }}}}},
    { type: 'y', orient: 'left', scale: 'y', grid: true, tickSizeEnd: 0,  labels: true,
      properties: { axis: { strokeOpacity: { 'value': 0.15 }},  majorTicks: {strokeOpacity: { 'value': 0.0 }, labels: {strokeOpacity: { 'value': 0.15 }}}}},
  ],

  marks: [
    {
      type: 'line',
      from: { data: 'activity' },
      properties: {
          enter: {
            x: { scale: 'x', field: 'datestamp' },
            y: { scale: 'y', field: 'job' },
            stroke: { 'value': '#5357a1' }, 
            strokeWidth: { 'value': 2 }
          },
      },
    },
  ],
};
