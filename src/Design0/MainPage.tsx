import * as Router from "react-router-dom";
import SC from "styled-components";

import Home  from "./pages/Home";


export default function MainPage(props: {pageStart: number;}) {
 
  const SC_MainPage = SC.div`
    margin: 0;
    border: 0;
    padding: 0px;
    position: absolute;
    left: ${props.pageStart}%;
    height: 100%;
    width: 100%;

    background-color: #fafafa;
  `;
  return(
    <Router.Routes>
      {/* <SC_MainPage> */}
        <Router.Route  path='/' element={<Home/>} />
      {/* </SC_MainPage> */}
    </Router.Routes>
  );
}