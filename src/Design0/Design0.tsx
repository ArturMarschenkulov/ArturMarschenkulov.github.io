import * as React from "react";
import * as Router from "react-router-dom";
import styled from "styled-components";

import MainBody from "./MainBody";
import SideBar from "./SideBar";

function TopBar(): JSX.Element {
  const ScTopBar = styled.nav`
    display: flex;
    width: 100%;
    color: white;
    background-color: #000000;
    position: sticky;

    //padding: 0px;
    //height: 10px;
    //top: 0;

    z-index: 2;

    flex-direction: row;
  `;
  return <ScTopBar>Top Bar</ScTopBar>;
}

function Footer(): JSX.Element {
  const ScFooter = styled.footer`
    display: block;
    box-sizing: border-box;
    background-color: #2b7495;
    padding: 10 10;
    height: 100%;
  `;

  return <ScFooter>Footer</ScFooter>;
}
export default class Design0 extends React.Component {
  render(): JSX.Element {
    const ScMainBackground = styled.div`
      background-color: #f35dec; // NOTE: Mainly for debugging. Maybe remove
    `;
    const ScDiv = styled.div`
      display: flex;
    `;

    const ScMain = styled.div`
      //display: flex;
      //flex-direction: column;
      //min-height: 100%;
      //box-sizing: border-box;
    `;
    return (
      <Router.BrowserRouter>
        <ScMain>
          <TopBar />
          <ScDiv>
            <SideBar color={"#37282E"} />
            <MainBody />
          </ScDiv>
          <Footer />
        </ScMain>
      </Router.BrowserRouter>
    );
  }
}
