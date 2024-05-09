import { FC } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const ScLink = styled(RouterLink)`
  color: #61dafb;
  text-decoration: none;
`;

const ScAccountListing = styled.div`
  display: grid;
`;

type LinkProps = {
  text: string;
  linkTo: string;
};

const Link: FC<LinkProps> = ({ text, linkTo }) => (
  <ScLink to={linkTo} target="_blank" rel="noopener noreferrer">
    {text}
  </ScLink>
);

type Account = {
  name: string;
  url: string;
};

const accounts: Account[] = [
  { name: "Github", url: "https://github.com/ArturMarschenkulov" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/artur-marschenkulov-a8a8b8b4/",
  },
  { name: "Xing", url: "https://www.xing.com/profile/Artur_Marschenkulov/" },
  { name: "Leetcode", url: "https://leetcode.com/ArturMarschenkulov/" },
  {
    name: "Codewars",
    url: "https://www.codewars.com/users/ArturMarschenkulov",
  },
  { name: "Hackerrank", url: "https://www.hackerrank.com/ArturMarschals" },
];

const Home: FC = () => {
  const links = accounts.map((account, index) => (
    <Link key={index} text={account.name} linkTo={account.url} />
  ));

  return (
    <div>
      <p>This is the homepage of Artur Marschenkulov.</p>
      <ScAccountListing>{links}</ScAccountListing>
    </div>
  );
};

export default Home;
