import React from 'react';
import { Line } from '@ant-design/charts';
import '../styles/chart.css'

const Page = () => {
    const data = [
        { name: 'views', week: '1', value: 3 },
        { name: 'views', week: '2', value: 8 },
        { name: 'views', week: '3', value: 2 },
        { name: 'apply', week: '1', value: 2 },
        { name: 'apply', week: '2', value: 5 },
        { name: 'apply', week: '3', value: 1 },
        { name: 'views', week: '4', value: 3 },
        { name: 'views', week: '5', value: 8 },
        { name: 'views', week: '6', value: 2 },
        { name: 'apply', week: '4', value: 2 },
        { name: 'apply', week: '5', value: 5 },
        { name: 'apply', week: '6', value: 1 },
    ];

    const config = {
        data,
        xField: 'week',
        yField: 'value',
        seriesField: 'name',
        lineStyle: {
            lineDash: [4, 4],
            opacity: 1,
        },
        // yAxis: {
        //   label: {
        //     formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
        //   },
        // },
        legend: {
            position: 'bottom',
        },
        // smooth: true,
        animation: {
            appear: {
                // animation: 'path-in',
                duration: 2000,
            }
        },
    };

    return (
        <div className='chart-container'>
            <Line {...config} />
        </div>
    );
};
export default Page;
