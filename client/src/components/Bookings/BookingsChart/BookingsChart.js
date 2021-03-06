import React from 'react';
import {Bar as BarChart} from 'react-chartjs';

const BOOKINGS_BUCKETS = {
    Cheap: {
        min: 0,
        max : 0
    },
    Normal: {
        min : 100,
        max : 200
    },
    Expensive: {
        min: 200,
        max : 1000000
    }
};

const bookingsChart = props => {
    const chartData = {labels: [], datasets: []};
    for (const bucket in BOOKINGS_BUCKETS){
        const filteredBookingsCount = props.bookings.reduce((prev, current) => {
            if(current.event.price > BOOKINGS_BUCKETS[bucket].min && current.event.price < BOOKINGS_BUCKETS[bucket].max)
            {
                return prev + 1

            }
            else
            {
                return prev;
            }
        }, 0)
        chartData.labels.push(bucket);
        chartData.datasets.push({
            label: "My first dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            hightlightStroke: "rgba(220,220,220,1)",
            data: [filteredBookingsCount]
        });
    }
     
    console.log(chartData);
    return <BarChart data={chartData} />
} 

export default bookingsChart;