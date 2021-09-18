import React from "react";
import RecursiveComponent from "./RecursiveComponent";
import useTimer from "../hooks/useTimer";
// zakomentowana część przedstawia pierwszą wersje zadania

//import styled from 'styled-components';


// export const One = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	background: orange;
// 	font-size: 1rem;
// `;

// export const Two = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	background: blue;
// 	font-size: 1rem;
// `;

// export const Three = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	background: yellow;
// 	font-size: 1rem;
// 	className= App-box;
// `;


const One = ({ children }) => <div>One{children}</div>;
const Two = ({ children }) => <div>Two{children}</div>;
const Three = ({ children }) => <div>Three{children}</div>;

const components = [One, Two, Three];

function Recursion() {
  const seconds = useTimer();

  return (
    <div className="App-wrapper">
      <div className="App-timer">{seconds} sekund </div>
      <RecursiveComponent components={components} />
    </div>
  );
}

Recursion.propTypes = {
  //
};

export default Recursion;
