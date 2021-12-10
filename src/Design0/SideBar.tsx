import * as React from "react";
import * as Router from "react-router-dom";
//import * as Styled from "styled-components";
import styled from "styled-components";
import logo from "./../logo.svg";
import {sideBarData, SideBarDataType} from "./SideBarData"

type StyledLinkProps = {
  color: string,
  indent: number,
};

const StyledLink = styled(Router.Link) <StyledLinkProps>`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  line-height: 2rem;
  color: white;
  display: block;
  border-bottom: 1px solid #282828;
  background-color: ${props => props.color};
  box-sizing: border-box;
  width: 100%;
  transition: filter 300ms;
  transition: color 300ms;
  text-align: left;
  padding-left: ${props => props.indent/2 + 0.5}rem;
  //max-width: 100%;
  filter: brightness(1);
  &:hover {
    color: green;
    filter: brightness(1.5);
  }
`;

type NavItemProps = {
  //isOpen: boolean;
  text: string;
  to: string;
  color: string;
  indent: number;
  children?: React.ReactNode[];
}
function NavItem(props: NavItemProps) {
  const [isClicked, setIsClicked] = React.useState(false);
  const color
    = (isClicked === true)
      ? "#272727"
      : props.color
    ;
  const amountOfChildren
    = (props.children !== undefined && props.children !== null)
      ? props.children?.length
      : 0
    ;

  if (amountOfChildren > 0 && isClicked === true) {
    return (
      <div>
        <StyledLink
          to={props.to}
          color={color}
          indent={props.indent}
          onClick={() => setIsClicked(!isClicked)}
        >
          {props.text}
        </StyledLink>
        {props.children}
      </div>
    );
  } else {
    return (
      <StyledLink
        to={props.to}
        color={color}
        indent={props.indent}
        onClick={() => setIsClicked(!isClicked)}
      >
        {props.text}
      </StyledLink>

    );

  }
}

type SideBarProps = {
  width: number;
  color: string
};
const StyledSideBar = styled("div") <SideBarProps>`
  margin: 0;
  border: 0;
  padding: 0px;
  position: fixed;
  width: ${props => props.width}%;
  height: 100vh;
  background-color: ${props => props.color};
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 0px 10px black;
`;


function sideBarDataTypeToChildren(x: SideBarDataType[], props: any, indent: number = 0): JSX.Element[] {
  let result: Array<JSX.Element> = [];

  for (let i = 0; i < x.length; i++) {
    let kidds: JSX.Element[] | undefined = undefined;
    if (x[i].subdata !== undefined) {
      kidds = sideBarDataTypeToChildren(x[i].subdata!, props, indent + 1);
    }
    
    result.push(
      <NavItem 
        indent={indent} 
        text={x[i].text} 
        to={x[i].path} 
        color={props.color} 
        children={kidds} 
      />
    );

  }

  return result;
}
export default function SideBar(props: SideBarProps) {
  return (
    <StyledSideBar width={props.width} color={props.color}>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ width: 200 }}
      />
      <nav style={{ width: "100%" }}>
        {sideBarDataTypeToChildren(sideBarData, props)}
      </nav>
    </StyledSideBar>
  );
}