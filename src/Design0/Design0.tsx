import * as React from "react";
import * as Router from "react-router-dom";

import MainBody from "./MainBody";
import SideBar from "./SideBar";

function TopBar(): JSX.Element {
  return (
    <nav className="flex w-full text-white bg-black sticky top-0 z-10">
      Top Bar
    </nav>
  );
}

function Footer(): JSX.Element {
  return (
    <footer className="block box-border bg-[#2b7495] p-2.5 h-full">
      Footer
    </footer>
  );
}
export default class Design0 extends React.Component {
  render(): JSX.Element {
    return (
      <Router.BrowserRouter>
        <div className="bg-[#f35dec]">
          {" "}
          {/* Debugging background */}
          <TopBar />
          <div className="flex">
            <SideBar color={"#37282E"} />
            <MainBody />
          </div>
          <Footer />
        </div>
      </Router.BrowserRouter>
    );
  }
}
