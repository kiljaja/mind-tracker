import React from 'react';

import './TestChart.scss';
import { createZeroHourDate } from '../../utils/helper-functions';

import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

const mockData = [
  { date: '2020-06-17', userName: 'demoUser', entries: 13 },
  { date: '2020-06-17', userName: 'demoUser', entries: 15 },
  { date: '2020-06-19', userName: 'demoUser', entries: 27 },
  { date: '2020-06-20', userName: 'demoUser', entries: 20 },
  { date: '2020-06-21', userName: 'demoUser', entries: 1 },
  { date: '2020-06-22', userName: 'demoUser', entries: 23 },
  { date: '2020-06-23', userName: 'demoUser', entries: 6 },
];

export const TestChart = () => {
  const newData = mockData.map((e) => ({
    t: createZeroHourDate(e.date),
    y: e.entries,
  }));

  const data = {
    // labels: labelsTest,
    datasets: [
      {
        label: 'Meditation',
        fill: 'origin',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 5,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: newData,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'day',
          },
        },
      ],

      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  return (
    <div style={{ height: '100%', width: '90%' }}>
      <h1>chart test</h1>
      <Line data={data} options={options} />
    </div>
  );
};
