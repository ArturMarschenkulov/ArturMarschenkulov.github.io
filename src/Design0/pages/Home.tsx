import * as Router from "react-router-dom";
import styled from "styled-components";


import logo from './../../logo.svg'


type LinkProps = {
  text: string;
  link: string;
}

function Link(props: LinkProps) {
  const SC_Link = styled.a`
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
  const SC_App = styled.div`
    text-align: center;
  `;
  const SC_AppHeader = styled.header`
    background-color: #5c5956;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
  const SC_AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
  `;

  return (
    <SC_App>
      <SC_AppHeader>
        <SC_AppLogo src={logo} className="App-logo" alt="logo"/>
        <p> 
          This is the homepage of Artur Marschenkulov.
        </p>
        <Link 
          text="Github"
          link="https://github.com/ArturMarschenkulov"
        />
        <Link 
          text="LinkedIn"
          link="https://www.linkedin.com/in/artur-marschenkulov-9897b3210/"
        />
        <Link 
          text="Xing"
          link="https://www.xing.com/profile/Artur_Marschenkulov"
        />
      </SC_AppHeader>
    </SC_App>
  );
}