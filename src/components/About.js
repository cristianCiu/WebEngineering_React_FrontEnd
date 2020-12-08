import React from 'react';
import '../styles/App.css';
import ReactComponentExplained from './ReactComponentExplained';

function About() {

    return (
        <div className="">
            <p>This is how the React components are working. When developing in React, every Component follows a cycle from when it’s created and mounted on the DOM to when it is unmounted and destroyed. This is what we refer to as the Component lifecycle. React provides hooks, methods that get called automatically at each point in the lifecycle, that give you good control of what happens at the point it is invoked. A good understanding of these hooks will give you the power to effectively control and manipulate what goes on in a component throughout its lifetime.</p>
            <ReactComponentExplained />
        </div>
    );
}

export default About;