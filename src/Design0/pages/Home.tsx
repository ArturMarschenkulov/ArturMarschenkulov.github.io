import * as Router from "react-router-dom";
import SC from "styled-components";


import logo from './../../logo.svg'


type LinkProps = {
  text: string;
  link: string;
}

function Link(props: LinkProps) {
  const SC_Link = SC.a`
    color: #61dafb;
    text-decoration: none;
  `;
  return (
    <SC_Link
      className="App-link"
      href= {props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.text}
    </SC_Link>
  );
}


export default function Home() {
  const SC_App = SC.div`
    text-align: center;
  `;
  const SC_AppHeader = SC.header`
    background-color: #7b8574;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
  const SC_AppLogo = SC.img`
    height: 40vmin;
    pointer-events: none;
  `;
  
  return (
    <SC_App>
      <SC_AppHeader>
        <SC_AppLogo src={logo} className="App-logo" alt="logo"/>
        <p> 
          This is the <code>beginning</code>.
        </p>
        <Link 
          text="Learn React + Typescript"
          link="https://github.com/ArturMarschenkulov"
        />
      </SC_AppHeader>
    </SC_App>
  );
}