import * as Router from "react-router-dom";
import styled from "styled-components";

type LinkProps = {
  text: string;
  link: string;
}
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
    align-content: normal;
    justify-content: start;
  `;
  return (
    <div>
      <p>
        This is the homepage of Artur Marschenkulov.
      </p>
      <ScAccountListing>
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
      </ScAccountListing>
    </div>
  );
}