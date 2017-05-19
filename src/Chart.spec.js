export default {

  $schema: 'https://vega.github.io/schema/vega/v3.0.json',
  width: 282,
  height: 196,
  padding: { left: 5, right: 5, top: 5, bottom: 5 },

  data: [{ name: 'activity' }],
  scales: [
    {
      name: 'x',
      type: 'time',
      domain: { data: 'activity', field: 'datestamp' },
      range: 'width',
    },
    {
      name: 'y',
      domain: { data: 'activity', field: 'job' },
      nice: true,
      range: 'height',
    },
  ],

  axes: [
    { type: 'x', scale: 'x', title: 'date', format: '%m/%d', formatType: 'string', grid: true, layer: 'back', orient: 'bottom' },
    { type: 'y', scale: 'y', title: 'jobs', orient: 'left', grid: true, layer: 'back' },
  ],

  marks: [
    {
      type: 'line',
      from: { data: 'activity' },
      properties: {
          enter: {
            x: { scale: 'x', field: 'datestamp' },
            width: { scale: 'x' },
            y: { scale: 'y', field: 'job' },
            stroke: { 'value': '#5357a1' },
            strokeWidth: { 'value': 2 }
          },
          update: {
            fill: { value: 'steelblue' },
            },
        }
      }
  ],
};

