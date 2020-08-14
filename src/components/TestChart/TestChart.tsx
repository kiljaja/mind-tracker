import React, { FC } from 'react';
import './TestChart.scss';
import { Line } from 'react-chartjs-2';
import { Meditation } from '../../context/app-context';
import moment from 'moment';

interface ChartData {
  habitEntries: Meditation[];
}

export const TestChart: FC<ChartData> = ({ habitEntries }) => {
  const labelsX: string[] = [];
  const dataY: number[] = [];
  habitEntries.forEach((e) => {
    labelsX.unshift(moment(e.postingDate).add(1, 'd').format('MM-DD'));
    dataY.unshift(e.awarenessPoints);
  });

  //No Longer used due to missing first and last x axis label
  const newData = habitEntries.map((e: Meditation) => ({
    t: moment(e.postingDate).add(1, 'd').toDate(),
    y: e.awarenessPoints,
  }));

  const data = {
    labels: labelsX,
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
        data: dataY,
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

          ticks: {
            labelOffset: 0,
            padding: 5,
          },
        },
      ],
      yAxes:[{
        ticks:{
          beginAtZero: true,
          stepSize: 1
        }
      }]
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
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
