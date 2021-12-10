import * as Router from "react-router-dom";
import styled from "styled-components";

import Home  from "./pages/Home";


type MainPageProps = {
  pageStart: number;
}

export default function MainPage(props: MainPageProps) {
 
  const SC_MainPage = styled.div`
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
      <Router.Route  path='/' element={<Home/>} />
      <Router.Route  path='/home' element={<Home/>} />
      <Router.Route  path='/proj' element={<Home/>} />
      <Router.Route  path='/about' element={<Home/>} />
    </Router.Routes>
  );
}