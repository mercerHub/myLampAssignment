// useChartData.js
import { useState } from 'react';

const generateData = (count, yrange) => {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = (i + 1).toString();
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({ x, y });
    i++;
  }
  return series;
};

const useChartData = () => {
  const [chartState, setChartState] = useState({
    series: [
      { name: 'Metric1', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric2', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric3', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric4', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric5', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric6', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric7', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric8', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric9', data: generateData(18, { min: 0, max: 90 }) }
    ],
    options: {
      chart: { height: 350, type: 'heatmap' },
      dataLabels: { enabled: false },
      colors: ["#008FFB"],
      title: { text: 'HeatMap Chart (Single color)' }
    },
  });

  return chartState;
};

export default useChartData;
