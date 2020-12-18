import React, { useState } from 'react';
import '../styles/App.css';
import { useQuery, gql } from '@apollo/client';
import Plot from 'react-plotly.js';
import Slider from './Slider';

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

function Chart3() {
    //run query
    const { data, error, loading } = useQuery(FEED_QUERY);
    // const [layout, figure, frames, config] = useState();
    // console.log(data);
    if (loading) return <div>Loading...</div>;

    if (error) return <p>error</p>//<NotFound />;


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

    }
    let myList = dataNames.length > 0
        && dataNames.map((item, i) => {
            return (
                <option key={i} value={item}>{item}</option>
            )
        }, this);

    function handlerCheckBoxSelected(e) {
        alert(e.target.value);
    }
    return (
        <div>
            <h1>This chart is displayed with Plotly.</h1>
            {/* <Plot
                data={this.state.data}
                // layout={this.state.layout}
                frames={this.state.frames}
                config={this.state.config}
                onInitialized={(figure) => this.setState(figure)}
                onUpdate={(figure) => this.setState(figure)}
            /> */}

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
            /><div>
                <select onChange={handlerCheckBoxSelected} onSelect={handlerCheckBoxSelected} style={{ width: "300px" }} >
                    {myList}

                </select></div>
            <Slider min={dataNames[0]} max={dataNames[dataNames.length - 1]} ticks={dataNames} />
        </div>
    );
}
export default Chart3;