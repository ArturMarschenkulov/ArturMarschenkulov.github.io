import * as Router from "react-router-dom";
import styled from "styled-components";

type LinkProps = {
  text: string;
  link: string;
};
function Link(props: LinkProps) {
  const ScLink = styled.a`
    color: #61dafb;
    text-decoration: none;
  `;
  return (
    <ScLink
      className="App-link"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.text}
    </ScLink>
  );
}

export default function Home() {
  const ScAccountListing = styled.div`
    display: grid;
    /* flex-direction: column; */
    //align-content: normal;
    //justify-content: start;
  `;

  const accounts: [string, string][] = [
    ["Github", "https://github.com/ArturMarschenkulov"],
    ["LinkedIn", "https://www.linkedin.com/in/artur-marschenkulov-a8a8b8b4/"],
    ["Xing", "https://www.xing.com/profile/Artur_Marschenkulov/"],
    ["Leetcode", "https://leetcode.com/ArturMarschenkulov/"],
    ["Codewars", "https://www.codewars.com/users/ArturMarschenkulov"],
    ["Hackerrank", "https://www.hackerrank.com/ArturMarschals"],
  ];

  let links: JSX.Element[] = [];
  for (let i = 0; i < accounts.length; i++) {
    links.push(<Link text={accounts[i][0]} link={accounts[i][1]} />);
  }
  return (
    <div>
      <p>This is the homepage of Artur Marschenkulov.</p>
      <ScAccountListing>{links}</ScAccountListing>
    </div>
  );
}
