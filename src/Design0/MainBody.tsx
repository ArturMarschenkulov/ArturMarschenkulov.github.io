import { type } from "os";
import * as Router from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tetris from "./pages/tetris/Tetris";


type MainBodyProps = {
  pageStart: number;
}

export default function MainBody(props: MainBodyProps) {

  const ScApp = styled.div`
    text-align: center;
  `;
  const ScMainBody = styled.div`
    /* Position of the Body */
    margin: 0px;
    border: 0px solid black;
    padding: 0px;
    position: absolute;
    left: ${props.pageStart}%;
    height: 100%;
    width: ${100 - props.pageStart}%;
    
    /* Content */
    justify-content: center;
    justify-items: center; 
    display: flex;
    color: white;
    background-color: #2f2f2f;
    font-size: calc(10px + 2vmin);
  `;


  // const ScAppHeader = styled.header`
  //   background-color: #363631;
  //   min-height: 100vh;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: start;
  //   justify-content: start;
  //   font-size: calc(10px + 2vmin);
  //   color: white;
  // `;	
  // const ScAppLogo = styled.img`
  //   height: 40vmin;
  //   pointer-events: none;
  // `;
  return (
    <ScApp>
      <ScMainBody>
        {/* <ScAppHeader> */}
          <Router.Routes>
            <Router.Route path='/' element={<Home />} />
            <Router.Route path='/home' element={<Home />} />
            <Router.Route path='/projects' element={<Projects />} />
            <Router.Route path='/projects/games/tetris' element={<Tetris />} />
            <Router.Route path='/about' element={<Home />} />
          </Router.Routes>
        {/* </ScAppHeader> */}
      </ScMainBody>
    </ScApp>
  );
}