import * as React from "react";
import * as Router from "react-router-dom";

import MainBody from "./MainBody";
import SideBar from "./SideBar";


export default class Design0 extends React.Component {
  render(): JSX.Element {
    const menuWidthPercentage = 10;
    return (
      <Router.BrowserRouter>
        <SideBar width={menuWidthPercentage} color={"#181818"} />
        <MainBody pageStart={(menuWidthPercentage)}/>
      </Router.BrowserRouter>
    );
  }
}