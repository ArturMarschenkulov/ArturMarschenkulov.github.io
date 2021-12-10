import * as React from "react";
import * as Router from "react-router-dom";

import styled from "styled-components";

import MainPage from "./MainPage";
import SideBar from "./SideBar";

import './App.css';


export default class Design0 extends React.Component {
  render(): JSX.Element {
    const menuWidthPercentage = 10;
    return (
      <Router.BrowserRouter>
        <SideBar width={menuWidthPercentage} color={"#181818"} />
        <MainPage pageStart={(menuWidthPercentage)}/>
      </Router.BrowserRouter>
    );
  }
}