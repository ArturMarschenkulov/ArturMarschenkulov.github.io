import * as React from "react";
import RouterLink from "next/link";
// import logo from "../assets/logo";
import { sideBarData, SideBarDataType } from "./SideBarData";

type NavItemProps = {
  //isOpen: boolean;
  text: string;
  to: string;
  color: string;
  indent: number;
  children?: React.ReactNode[];
};

function getAmountOfChildren(x?: React.ReactNode[]): number {
  return x !== undefined && x !== null ? x?.length : 0;
}

function NavItem(props: NavItemProps): JSX.Element {
  const [isClicked, setIsClicked] = React.useState(false);
  const color: string = isClicked === true ? "#272727" : props.color;
  const amountOfChildren: number = getAmountOfChildren(props.children);

  return (
    <div>
      <RouterLink
        href={props.to}
        className={`block w-full text-white border-b border-gray-800 py-2 px-${
          props.indent / 2 + 2
        } transition duration-300 ease-in-out hover:text-gold hover:brightness-150 ${color}`}
        onClick={() => setIsClicked(!isClicked)}
      >
        {props.text}
      </RouterLink>
      {isClicked && props.children}
    </div>
  );
}

function sideBarDataTypeToChildren(
  x: SideBarDataType[],
  props: SideBarProps,
  indent: number = 0
): JSX.Element[] {
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
  color: string;
};

export default function SideBar(props: SideBarProps) {
  const bgColorClass = `bg-${props.color}`; // Construct a dynamic background color class

  return (
    <div
      className={`fixed h-full w-300 ${bgColorClass} flex flex-col items-center z-auto`}
    >
      {/* <img src={logo} alt="logo" className="w-50 mb-4" /> */}
      <nav className="w-full">
        {sideBarDataTypeToChildren(sideBarData, props)}
      </nav>
    </div>
  );
}
