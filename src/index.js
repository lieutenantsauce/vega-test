import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './Chart';
import spec1 from './Chart.spec';

import { activityData } from './mock.json';


const formatData = () => {
  const jobDates = activityData.datestamp.slice(1).slice(-30);
  const jobIds = activityData.jobs.slice(1).slice(-30);
  const activity = [];
  for (let idx = 0; idx < jobDates.length; idx += 1) {
    activity.push({
      datestamp: Date.parse(jobDates[idx]),
      job:  jobIds[idx],
    });
  }
  return { activity };
};

ReactDOM.render(
  <Chart data={formatData(activityData)} spec={spec1} renderer="svg" />,
  document.getElementById('root')
);
