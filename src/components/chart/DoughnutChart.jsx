import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DoughnutChart = () => {
  let data = {
    labels: ['Fine', 'Fee', 'Salary'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [5000, 54000, 36000],
        backgroundColor: [
          '#EB1D36',
          '#3273f5',
          '#CA955C'
        ],
        hoverOffset: 8,
      }
    ],
  };

  let options = {
    cutout: 100,
    layout: {
      padding: {
        bottom: 20,
      },
    },
    borderRadius: 12,
  }

  return (
    <div className='doughnutChart'>
        <Doughnut 
        data={data}
        options={options}
        />
    </div>
  )
}

export default DoughnutChart