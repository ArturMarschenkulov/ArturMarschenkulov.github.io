import * as Router from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tetris from "./pages/tetris/Tetris";

type MainBodyProps = {
  //pageStart: number;
};

export default function MainBody(props: MainBodyProps) {
  const ScApp = styled.div`
    text-align: center;
  `;
  const ScMainBody2 = styled.div`
    /* Position of the Body */
    text-align: center;
    margin: 0px;
    border: 0px solid black;
    padding: 0px;
    position: absolute;
    height: 100%;
    /* Content */
    display: flex;
    flex-grow: 1;
    text-rendering: optimizeLegibility;
    /* justify-content: center; */
    /* justify-items: center;  */
    color: white;
    background-color: #2f2f2f;
    font-size: calc(10px + 2vmin);
  `;
  const ScMainBody = styled.div`
    //background-color: #f10000;
    background-color: #e3e0dd;
    width: 100%;
  `;
  return (
    // <ScApp>
    <ScMainBody>
      <Router.Routes>
        <Router.Route path="/" element={<Home />} />
        <Router.Route path="/home" element={<Home />} />
        <Router.Route path="/projects" element={<Projects />} />
        <Router.Route path="/projects/games/tetris" element={<Tetris />} />
        <Router.Route path="/about" element={<Home />} />
      </Router.Routes>
    </ScMainBody>
    // </ScApp>
  );
}
