import * as React from "react";
import * as Router from "react-router-dom";
//import * as Styled from "styled-components";
import styled from "styled-components";
import logo from "assets/logo.svg";
import { sideBarData, SideBarDataType } from "./SideBarData"

type ScLinkProps = {
  color: string,
  indent: number,
};

const ScLink = styled(Router.Link) <ScLinkProps>`
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
  padding-left: ${props => props.indent / 2 + 0.5}rem;
  //max-width: 100%;
  filter: brightness(1);
  &:hover {
    color: gold;
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

function getAmountOfChildren(x?: React.ReactNode[]): number {
  return (x !== undefined && x !== null)
    ? x?.length
    : 0
    ;
}

function NavItem(props: NavItemProps): JSX.Element {
  const [isClicked, setIsClicked] = React.useState(false);
  const color: string = (isClicked === true)
    ? "#272727"
    : props.color
    ;
  const amountOfChildren: number = getAmountOfChildren(props.children);

  if (amountOfChildren > 0 && isClicked === true) {

    return (
      <div>
        <ScLink
          to={props.to}
          color={color}
          indent={props.indent}
          onClick={() => setIsClicked(!isClicked)}
        >
          {props.text}
        </ScLink>
        {props.children}
      </div>
    );
  } else {
    return (
      <ScLink
        to={props.to}
        color={color}
        indent={props.indent}
        onClick={() => setIsClicked(!isClicked)}
      >
        {props.text}
      </ScLink>

    );

  }
}




function sideBarDataTypeToChildren(x: SideBarDataType[], props: SideBarProps, indent: number = 0): JSX.Element[] {
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

type SideBarProps = {
  color: string
};

export default function SideBar(props: SideBarProps) {

  const ScSideBar2 = styled("div") <SideBarProps>`
    margin: 0;
    padding: 0px;
    position: fixed;
    height: 100vh;
    background-color: ${props => props.color};
    align-items: center;
    display: flex;
    flex-direction: column;
  `;

  const ScSideBar = styled("div") <SideBarProps>`
    display: block;
    box-sizing: border-box;
    background-color: ${props => props.color};
    width: 300px;
    clip-path: inset(0px);
    //margin-top: 10px;
    z-index: auto;
    position: static;
    line-height: 26.4px;
    border-right: 1px solid #bb9696;
  `;

  return (
    <ScSideBar color={props.color}>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ width: 200 }}
      />
      <nav style={{ width: "100%" }}>
        {sideBarDataTypeToChildren(sideBarData, props)}
      </nav>
    </ScSideBar>
  );
}