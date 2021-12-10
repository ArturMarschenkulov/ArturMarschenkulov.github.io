import * as React from "react";
import * as Router from "react-router-dom";

import SC from "styled-components";

import MainPage from "./MainPage";

import './App.css';


export default class Design0 extends React.Component {
  render(): JSX.Element {
    const menuWidthPercentage = 10;
    return (
      <Router.BrowserRouter>
        <MainPage pageStart={(menuWidthPercentage)}/>
      </Router.BrowserRouter>
    );
  }
}