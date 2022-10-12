import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Cell, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const data = useLoaderData();
    // const { id, name, total } = data.data;
    // console.log(data.data)

    return (
        <div className='chart text-center'>

            <LineChart className='line-chart' width={800} height={400} data={data.data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis dataKey='total' />
                <Tooltip />
            </LineChart>

        </div>
    );
};

export default Statistics;