import React from 'react';
import * as SC from "styled-components";
import logo from './logo.svg';
import './App.css';
import Test from './Test2/Test2';

/** Contventions
 * Styles Components always have the "SC_" prefix.
 *
 */

const SC_GlobalCSS = SC.createGlobalStyle`
  body {
    margin: 0;
    font-family: "Times New Roman";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: Georgia, serif;
  }
`
function App() {
  return (
    <div className="App">
      <SC_GlobalCSS/>
      <Test/>
    </div>
  );
}

export default App;
