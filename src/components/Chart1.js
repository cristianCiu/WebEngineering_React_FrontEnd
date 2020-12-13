import React from 'react';
import '../styles/App.css';
import { useQuery, gql } from '@apollo/client';
import NotFound from './NotFound';
import graphql2chartjs from 'graphql2chartjs';
import { Line, TimeSeries } from 'react-chartjs-2'
// create query
const FEED_QUERY = gql`
  {
    Country {
        data_x:name
        data_y:population
    }
  }
`;


function Chart1() {
    //run query
    const { data, error, loading } = useQuery(FEED_QUERY);

    if (loading) return <div>Loading...</div>;
    console.log(data.Country);
    if (error) return <p>{error}</p>//<NotFound />;

    const g2c = new graphql2chartjs(data, 'line');

    // const state = {
    //     labels: ['January', 'February', 'March',
    //         'April', 'May'],
    //     datasets: [
    //         {
    //             label: 'Rainfall',
    //             fill: false,
    //             lineTension: 0.5,
    //             backgroundColor: 'rgba(75,192,192,1)',
    //             borderColor: 'rgba(0,0,0,1)',
    //             borderWidth: 2,
    //             data: [65, 59, 80, 81, 56]
    //         }
    //     ]
    // }

    return (
        <div>
            <TimeSeries
                data={g2c.data}
                options={{
                    title: {
                        display: true,
                        text: 'Country population',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            /><p>from https://countries-274616.ew.r.appspot.com/</p>
        </div>
    );
}
export default Chart1;