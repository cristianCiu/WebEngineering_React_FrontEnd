import React, { Component } from 'react';
import '../App.css';
//import {Subscription} from 'react-apollo';
//import gql from 'graphql-tag';
//import graphql2chartjs from 'graphql2chartjs';
//import {Bar} from 'react-chartjs-2';

class Chart1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    componentDidMount() {

        // API CALL DEFINITION
        const url = "";
        const response = fetch(url);
        const data = response.json();
        this.setState({ loading: false });


    }

    render() {
        return (
            <div>
                {this.state.loading ? <div>loading chart...</div> : <div>blabla</div>}
            </div>
        );
    }
}
export default Chart1;