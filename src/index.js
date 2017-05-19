import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './Chart';
import spec1 from './Chart.spec'


import dl from 'datalib';
import { activityData } from './mock.json';

const parseTime = dl.format.time('%Y-%m-%d');

const formatData = () => {
  const getDate = activityData.datestamp.slice(1).slice(-30);
  const getJob = activityData.jobs.slice(1).slice(-30);
  const activity = [];
  for (let jx = 0; jx < getDate.length; jx += 1) {
    activity.push({
      datestamp: parseTime(getDate[jx]),
      job: getJob[jx],
    });
  }
  return { activity };
};

ReactDOM.render(
  <Chart data={formatData(activityData)} spec={spec1} />,
  document.getElementById('root')
);
