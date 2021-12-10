import * as React from "react";
import * as Router from "react-router-dom";
import logo from './../logo.svg';


function MainPage() {
  return(
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload. Test test
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
  );
}

export default class Test2 extends React.Component {
  render() {
    return (
      <Router.BrowserRouter>
        <MainPage/>
      </Router.BrowserRouter>

    );
  }
}