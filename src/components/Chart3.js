import React, { useState } from 'react';
import '../styles/App.css';
import { useQuery, gql } from '@apollo/client';
import Plotly from 'react-plotly.js';

import { Button } from 'react-bootstrap';
// create query

const FEED_QUERY = gql`
  {
    InfectionData {
        BezirksInformationen {
          AnzEinwohner
          Bezirksname
          AusgangsInformationen
          {
              AnzahlGeheiltTaeglich
              AnzahlTotTaeglich
            }
          FallInformationen
          {AnzahlFaelle}
        }
        Time
  }}
`;

function Chart3() {

    const [dataTimestamp, setdataTimestamp] = useState([]);
    const [dataAnzahlEinwohner, setDataAnzahlEinwohner] = useState([]);
    const [dataAnzahlFaelle, setdataAnzahlFaelle] = useState([]);
    const [dataAnzahlGeheiltTaeglich, setDataAnzahlGeheiltTaeglich] = useState([]);
    const [dataAnzahlTotTaeglich, setDataAnzahlTotTaeglich] = useState([]);
    const [per100k, setPer100k] = useState([]);
    const [dropdownSelected, setDropdownSelected] = useState([]);

    //run query
    const { data, error, loading } = useQuery(FEED_QUERY);


    if (loading) return <div>Loading...</div>;
    if (error) return <p>error</p>//<NotFound />;
    // console.log(data);

    var dataDropdown = [], myList;

    fillDropdown();

    function prepareData(bezirk = 'Wien') {

        console.log("data prepared");
        // dataBezirksname = []; 
        let tempDataTimestamp = [];
        let tempDataAnzahlFaelle = [];
        let tempDataAnzahlGeheiltTaeglich = [];
        let tempDataAnzahlTotTaeglich = [];



        for (var i in data.InfectionData) {
            if (data.InfectionData === undefined) {
                console.warn("Data is null");
            } else {
                if (data.InfectionData[i].BezirksInformationen.Bezirksname === bezirk) {
                    setDataAnzahlEinwohner(data.InfectionData[i].BezirksInformationen.AnzEinwohner)

                    if (per100k) {
                        tempDataAnzahlFaelle.push(((data.InfectionData[i].BezirksInformationen.FallInformationen.AnzahlFaelle) / dataAnzahlEinwohner) * 100000);
                        tempDataAnzahlGeheiltTaeglich.push(((data.InfectionData[i].BezirksInformationen.AusgangsInformationen.AnzahlGeheiltTaeglich) / dataAnzahlEinwohner) * 100000);
                        tempDataAnzahlTotTaeglich.push(((data.InfectionData[i].BezirksInformationen.AusgangsInformationen.AnzahlTotTaeglich) / dataAnzahlEinwohner) * 100000);

                    } else {
                        tempDataAnzahlFaelle.push((data.InfectionData[i].BezirksInformationen.FallInformationen.AnzahlFaelle));
                        tempDataAnzahlGeheiltTaeglich.push((data.InfectionData[i].BezirksInformationen.AusgangsInformationen.AnzahlGeheiltTaeglich));
                        tempDataAnzahlTotTaeglich.push((data.InfectionData[i].BezirksInformationen.AusgangsInformationen.AnzahlTotTaeglich));
                    }

                    tempDataTimestamp.push(new Date(parseInt(data.InfectionData[i].Time)).toDateString());
                }
            }
        }
        setdataAnzahlFaelle(tempDataAnzahlFaelle);
        setdataTimestamp(tempDataTimestamp);
        setDataAnzahlGeheiltTaeglich(tempDataAnzahlGeheiltTaeglich);
        setDataAnzahlTotTaeglich(tempDataAnzahlTotTaeglich);
    }

    function fillDropdown() {
        console.log("Dropdown filled");
        let tempList = [];
        for (var i in data.InfectionData) {
            tempList.push(data.InfectionData[i].BezirksInformationen.Bezirksname);
        }
        dataDropdown = tempList.filter(onlyUnique);

        myList = dataDropdown.length > 0
            && dataDropdown.map((item, i) => {
                return (
                    <option key={i} value={item}>{item}</option>
                )
            }, this);
    }
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    function handlerDropdownSelected(e) {
        prepareData(e.target.value);
        setDropdownSelected(e.target.value);
    }

    function per100kButton() {
        setPer100k(per100k ? false : true);
        prepareData(dropdownSelected);
    }

    return (
        <div>
            <h1>Diagramm nach Bezirk</h1>
            <div>
                <select onChange={handlerDropdownSelected} onSelect={handlerDropdownSelected} style={{ width: "300px" }} >
                    {myList}

                </select></div>
            <h2>{dropdownSelected}</h2>
            <h2>{dataAnzahlEinwohner} Einwohner</h2>
            <Plotly
                data={
                    [
                        {
                            // labels: dataBezirksname,
                            x: dataTimestamp,
                            y: dataAnzahlFaelle,
                            type: 'line',
                            mode: 'lines+markers',
                            marker: { color: 'blue' },
                            name: "Anzahl Fälle"
                        },
                        {
                            type: 'bar',
                            x: dataTimestamp,
                            y: dataAnzahlGeheiltTaeglich,
                            marker: { color: 'green' },
                            name: "Genesene Personen"
                        },
                        {
                            type: 'bar',
                            x: dataTimestamp,
                            y: dataAnzahlTotTaeglich,
                            marker: { color: 'red' },
                            name: "Tote Personen"
                        }
                    ]
                }
                layout={
                    {

                        width: 1200,
                        height: 600,
                        title: 'Bitte wählen Sie den Bezirk aus der Dropdown Liste aus.',
                        xaxis: {
                            rangeslider: {}
                        }
                    }}
            /> <Button variant="outline-dark" onClick={per100kButton}>per 100k</Button>
        </div>
    );
}
export default Chart3;