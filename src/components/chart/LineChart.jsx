import React from 'react'
import './chart.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const LineChart = ({type}) => {

  
  let appearance;

  switch (type) {
    case "student":
      appearance = {
        maintitle: "Main Title",
        title1: "Students Joined",
        title2: "Students Left",
        background: "grad-black",
      }
      break;

    case "fee":
      appearance = {
        maintitle: "Main Title",
        title1: "Fee Collected",
        title2: "Fee Pending",
        background: "grad-red",
      }
      break;

    case "performance":
      appearance = {
        maintitle: "Main Title",
        title1: "Improved",
        title2: "Weak",
        background: "grad-green",
      }
      break;

    default:
      break;
  }

  let data = {
    labels: ["March", "April", "May", "June", "July", "August"],
    datasets: [
      {
        label: "Title 1",
        data: [50, 27, 128, 362, 280, 95],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: '#7DCE13',
        color: "#FFFFFF",
      },
      {
        label: "Title 2",
        data: [63, 98, 158, 342, 240, 195],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: '#839AA8',
        color: "#FFFFFF",
      },
    ]
  }

  const chartoptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
          labels: {
            color: '#FFF',
          }
      },
      title: {
        display: true,
        text: appearance.maintitle,
        color: '#FFF',
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "rgba(220,220,220,0.25)",
        },
        ticks: {
          color: "#FFF",
        }
      },
      y: {
        grid: {
          display: true,
          color: "rgba(220,220,220,0.25)",
        },
        ticks: {
          color: "#FFF",
        }
      }
    }    
  }


  return (
    <div className={ appearance.background } id="chart">
      <Line 
      data={data}
      options={chartoptions}
      />
    </div>
  )
}

export default LineChart