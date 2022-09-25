import {React, useEffect, useRef} from 'react';
import './table.scss';
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

const Table = () => {
    const wrapperRef = useRef(null);

    const grid = new Grid({
        search: true,
        sort: true,
        pagination: {
          enabled: false,
          limit: 10,
          summary: false
        },
        columns: [
          {
            name: 'Name',
            formatter: (cell) => html(`<a href='/'>${cell}</a>`),
          },

          'Email', 'Passing School', 'Grade', 'D.o.A'
        ],
        data: [
        ['John', 'john@example.com', 'Guru Nanak School', '8', '07-02-2022'],
        ['Mark', 'mark@gmail.com',  'Sanatan Dharm School', '3', '10-05-2022'],
        ],
    });

    useEffect(() => {
        grid.render(wrapperRef.current);
    });

  return (
    <div className='table' ref={wrapperRef}></div>
  )
}


const AttendanceTable = () => {
    const wrapperRef = useRef(null);

    const grid = new Grid({
        search: true,
        sort: true,
        pagination: {
          enabled: false,
          limit: 10,
          summary: false
        },
        columns: [
          {
            name: 'Name',
            formatter: (cell) => html(`<a href='/'>${cell}</a>`),
          },

          'Time', 'Designation', 'Grade', 'Total'
        ],
        data: [
        ['John', '07:53', 'Student', '8', '54%'],
        ['Mark', '08:12',  'Principal', 'N A', '36%'],
        ],
    });

    useEffect(() => {
        grid.render(wrapperRef.current);
    });

  return (
    <div className='table' ref={wrapperRef}></div>
  )
}

export default Table
export {AttendanceTable}