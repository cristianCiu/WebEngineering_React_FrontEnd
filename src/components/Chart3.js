import React from 'react';
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
    InfectionData {
        BezirksInformationen {
          Bezirksname
          FallInformationen
          {AnzahlFaelle}
        }
        Time
  }}
`;

function Chart3() {
    //run query
    const { data, error, loading } = useQuery(FEED_QUERY);
    // const [layout, figure, frames, config] = useState();
    // console.log(data);
    if (loading) return <div>Loading...</div>;

    if (error) return <p>error</p>//<NotFound />;
    console.log(data);

    var dataBezirksname = [], dataTime = [], dataAnzahlFaelle = [];//, dataPopulationDensity = [], dataGini = [], dataCurrency = [];
    prepareData();
    function prepareData(bezirk = 'Wien') {
        dataBezirksname = []; dataTime = [];
        for (var i in data.InfectionData) {
            if (data.InfectionData === undefined) {
                console.warn("Data is null");
            } else {
                if (data.InfectionData[i].BezirksInformationen.Bezirksname === bezirk) {
                    dataBezirksname.push(data.InfectionData[i].BezirksInformationen.Bezirksname);
                    // dataTime.push(data.InfectionData[i].Time);
                    dataAnzahlFaelle.push(data.InfectionData[i].BezirksInformationen.FallInformationen.AnzahlFaelle);

                    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
                    d.setUTCSeconds(data.InfectionData[i].Time);
                    d.toLocaleDateString("en-US");

                    dataTime.push(d);
                }
            }
        }
    }
    console.log(dataBezirksname);
    console.log(dataTime);
    console.log(dataAnzahlFaelle);

    var myList = dataBezirksname.length > 0
        && dataBezirksname.map((item, i) => {
            return (
                <option key={i} value={item}>{item}</option>
            )
        }, this);



    function handlerCheckBoxSelected(e) {
        prepareData(e.target.value);
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
                            labels: dataBezirksname,
                            x: dataTime,
                            y: dataAnzahlFaelle,
                            type: 'line',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                            name: "Faelle"
                        },
                        {
                            type: 'bar',
                            x: dataTime,
                            y: dataAnzahlFaelle,
                            marker: { color: 'blue' },
                            name: "Population Density"
                        },
                        // {
                        //     type: 'bar',
                        //     x: dataNames,
                        //     y: dataGini,
                        //     marker: { color: 'green' },
                        //     name: "Gini"
                        // },
                        // {
                        //     type: 'bar',
                        //     x: dataNames,
                        //     y: dataCurrency,
                        //     marker: { color: 'black' },
                        //     name: "Currency"
                        // }
                    ]
                }
                layout={{ width: 1200, height: 600, title: 'A Fancy Plot' }}
            /><div>
                <select onChange={handlerCheckBoxSelected} onSelect={handlerCheckBoxSelected} style={{ width: "300px" }} >
                    {myList}

                </select></div>
            <Slider min={[0]} max={dataBezirksname[dataBezirksname.length - 1]} ticks={dataBezirksname} />
        </div>
    );
}
export default Chart3;