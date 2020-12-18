import { render } from '@testing-library/react';
import React from 'react';
import '../styles/App.css';
import '../styles/Slider.css';

class Slider extends React.Component {
    // data-slider-ticks-labels='["short", "medium", "long"]'
    // data-slider-value="3"
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var myslider = document.getElementById("myRange");
        // var output = document.getElementById("demo");
        // var sliderValue = slider.value; // Display the default slider value
        console.log(myslider.value);
    }
    render() {

        // <input id="slider1" type="text"
        // data-provide="slider"
        // data-slider-ticks={props.ticks}
        // data-slider-min={props.min}
        // data-slider-max={props.max}
        // data-slider-step="1"
        // data-slider-tooltip="show" />
        // console.log(props.slider.value);

        // Update the current slider value (each time you drag the slider handle)
        // slider.oninput = function () {
        //     output.innerHTML = this.value;
        // }

        return (

            <div class="slidecontainer">
                <input type="range" min={this.props.min} max={this.props.max} value="50" class="slider" id="myRange" />
            </div>
        );

    }
}
export default Slider;