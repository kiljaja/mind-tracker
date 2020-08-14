import React, { FC } from 'react';
import './TestChart.scss';
import { Line } from 'react-chartjs-2';
import { Meditation } from '../../context/app-context';
import moment from 'moment';

interface ChartData {
  habitEntries: Meditation[];
}

export const TestChart: FC<ChartData> = ({ habitEntries }) => {
  const newData = habitEntries.map((e: Meditation) => ({
    t: moment(e.postingDate).add(1, 'd'),
    y: e.awarenessPoints,
  }));

  const data = {
    // labels: labelsTest,
    datasets: [
      {
        label: 'Meditation',
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
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
          distribution: 'linear',
          time: {
            unit: 'day',
          },
        },
      ],
    },
    layout: {
      padding: {
        left: 5,
        right: 20,
        top: 5,
        bottom: 5,
      },
    },
  };

  return (
    <div className="trend-chart">
      <h1>Trend Chart</h1>

      <div
        className="chart-container"
        style={{ height: '100%', width: '100%' }}
      >
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

// more mock data
