import * as Router from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tetris from "./pages/tetris/Tetris";

type MainBodyProps = {
  //pageStart: number;
};

export default function MainBody(props: MainBodyProps) {
  return (
    // <ScApp>
    <div className="bg-e3e0dd w-full">
      <Router.Routes>
        <Router.Route path="/" element={<Home />} />
        <Router.Route path="/home" element={<Home />} />
        <Router.Route path="/projects" element={<Projects />} />
        <Router.Route path="/projects/games/tetris" element={<Tetris />} />
        <Router.Route path="/about" element={<Home />} />
      </Router.Routes>
    </div>
    // </ScApp>
  );
}
