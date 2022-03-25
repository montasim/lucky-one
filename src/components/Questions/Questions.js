import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Questions = () => {
    return (
        <div className='mx-5 my-5'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How React Works?</Accordion.Header>
                    <Accordion.Body>
                        React makes a clone of the browser DOM to display changes quickly. When any state changes on browser React quickly understand and identify the changes using diffing algorithm. Then React very quickly re-render the Virtual DOM to display the changes.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Difference between Props vs State? </Accordion.Header>
                    <Accordion.Body>
                        1. Props are immutable while State is mutable.
                        <br />
                        2. Props used to pass data to child components while State is not accessible from child components.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How React Use States Works? </Accordion.Header>
                    <Accordion.Body>
                        In React all components has a state object where current state is stored. When any changes occurs on any component values, then the previously stored state value changes. Then React re-render the components to display the changes.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Questions;