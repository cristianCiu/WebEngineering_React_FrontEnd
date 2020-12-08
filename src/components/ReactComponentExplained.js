import React from 'react';
import '../styles/App.css';
import Iframe from 'react-iframe';

function ReactComponentExplained() {

    return (
        <div className="">
            <Iframe url="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"
                width="1024px"
                height="650px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />
        </div>
    );
}

export default ReactComponentExplained;


