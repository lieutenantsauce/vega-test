export default {

  $schema: 'https://vega.github.io/schema/vega/v3.0.json',
  width: 275,
  height: 175,
  padding: { top: 10, left: 70, bottom: 50, right: 10},
  data: [{ name: 'activity' }],
  title: 'jobs',
  scales: [
    {
      name: 'x',
      type: 'time',
      domain: { data: 'activity', field: 'datestamp' },
      clamp:true,
      range: 'width',
    },
    {
      name: 'y',
      domain: { data: 'activity', field: 'job' },
      nice: true,
      clamp: true,
      range: 'height',
    },
  ],

  axes: [
    { type: 'x', scale: 'x',  grid: true, layer: 'back', orient: 'bottom',  ticks: 4, subdivide: 6, tickSizeEnd: 0, tickSizeMinor: 5, tickPadding: 4, tickSizeMajor: 10} ,
    { type: 'y', scale: 'y',  title: 'jobs', layer: 'back', orient: 'left', tickSizeMajor: 5, tickPadding: 5, grid: true, labels: true },
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
      }
    }],
};
