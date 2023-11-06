import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const FontStyles = styled.div`
  font-family: 'Agbalumo', 'Signika Negative', sans-serif;
`;
function SimpleCounter(props) {
  return (
    <div>
        <FontStyles><h1 className="Title">Simple Counter</h1></FontStyles>
        <div className="bigCounter">
        <div className="calendar">
            <FontAwesomeIcon icon={faClock} style={{ color: "#00e1ff" }} />
        </div>
        <div className="four">{props.digitFour % 10}</div>
        <div className="three">{props.digitThree % 10}</div>
        <div className="two">{props.digitTwo % 10}</div>
        <div className="one">{props.digitOne % 10}</div>
        </div>
    </div>);
};
SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,

}

let counter = 0;

setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(four, three, two, one);
    
    counter++;
    ReactDOM.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, 
        document.querySelector("#app"));
 },1000);



