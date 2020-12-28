import React from 'react';
import '../styles/App.css';
import { useQuery, gql } from '@apollo/client';
import Plot from 'react-plotly.js';
// import Slider from './Slider';
//import NotFound from './NotFound';
//import graphql2chartjs from 'graphql2chartjs';
// import { Line } from 'react-chartjs-2'

// create query

const FEED_QUERY = gql`
  {
    Country {
        name
        population
        populationDensity
        gini
        currencies
        {code}
    }
  }
`;


function Chart2() {
    //run query
    const { data, error, loading } = useQuery(FEED_QUERY);
    // console.log(data);
    if (loading) return <div>Loading...</div>;

    if (error) return <p>error</p>//<NotFound />;

    // const g2c = new graphql2chartjs(data, 'line');

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
    var dataNames = [], dataPopulation = [], dataPopulationDensity = [], dataGini = [], dataCurrency = [];
    for (var i in data.Country) {
        if (data.Country === undefined) {
            console.warn("Data is null");
        } else {
            dataNames.push(data.Country[i].name);
            dataPopulation.push(data.Country[i].population);
            dataPopulationDensity.push(data.Country[i].populationDensity);
            dataGini.push(data.Country[i].gini);
            dataCurrency.push(data.Country[i].currencies.code);
        }
        // console.log(data.Country[i].name);
        // console.log(data.Country[i].population);
        //  x += "<h1>" + data.Country[i].name + "</h1>";
        // for (j in myObj.cars[i].models) {
        //   x += myObj.cars[i].models[j];
        // }
    }



    return (
        <div>
            <h1>This chart is displayed with Plotly.</h1>

            <Plot
                data={
                    [
                        {
                            labels: dataNames,
                            x: dataNames,
                            y: dataPopulation,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                            name: "Population"
                        },
                        {
                            type: 'bar',
                            x: dataNames,
                            y: dataPopulationDensity,
                            marker: { color: 'blue' },
                            name: "Population Density"
                        },
                        {
                            type: 'bar',
                            x: dataNames,
                            y: dataGini,
                            marker: { color: 'green' },
                            name: "Gini"
                        },
                        {
                            type: 'bar',
                            x: dataNames,
                            y: dataCurrency,
                            marker: { color: 'black' },
                            name: "Currency"
                        }
                    ]
                }
                layout={{ width: 1200, height: 600, title: 'A Fancy Plot' }}
            />

        </div>
    );
}
export default Chart2;