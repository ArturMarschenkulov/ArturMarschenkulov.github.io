import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

type Account = {
  name: string;
  url: string;
};

type Project = {
  name: string;
  description: string;
  details: string;
};

const accounts: Account[] = [
  { name: "Github", url: "https://github.com/ArturMarschenkulov" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ArturMarschenkulov/",
  },
  { name: "Xing", url: "https://www.xing.com/profile/Artur_Marschenkulov/" },
  { name: "Leetcode", url: "https://leetcode.com/ArturMarschenkulov/" },
  {
    name: "Codewars",
    url: "https://www.codewars.com/users/ArturMarschenkulov",
  },
  { name: "Hackerrank", url: "https://www.hackerrank.com/ArturMarschals" },
];

const projects: Project[] = [
  {
    name: "JadeFrame",
    description: "Short description A",
    details:
      "Long details about Project A including goals, technology used, and outcomes.",
  },
  {
    name: "Project B",
    description: "Short description B",
    details:
      "Long details about Project B including goals, technology used, and outcomes.",
  },
  {
    name: "Project B",
    description: "Short description B",
    details:
      "Long details about Project B including goals, technology used, and outcomes.",
  },
  {
    name: "Project B",
    description: "Short description B",
    details:
      "Long details about Project B including goals, technology used, and outcomes.",
  },
  {
    name: "Project B",
    description: "Short description B",
    details:
      "Long details about Project B including goals, technology used, and outcomes.",
  },
  {
    name: "Project B",
    description: "Short description B",
    details:
      "Long details about Project B including goals, technology used, and outcomes.",
  },
];

type CardProps = {
  project: Project;
  expanded: boolean;
  onClick: () => void;
};

function Card(props: CardProps) {
  const cardAnimation = css`
    transition: transform 0.3s ease-out, opacity 0.3s ease,
      width 0.3s ease-in-out, height 0.3s ease-in-out, padding 0.3s ease-in-out,
      border-color 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
      border-color: red;
      border-width: 3px;
    }
  `;
  const ScCard = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    ${cardAnimation}
    ${({ expanded }: { expanded: boolean }) =>
      expanded
        ? `
    position: fixed;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    background-color: white;
    z-index: 10;
    overflow: auto;
    padding: 40px;
    transform: scale(1);
  `
        : `
    position: relative;
    width: calc(33.333% - 20px);
    height: 150px;
    border-radius: 10px
  `}
  `;
  const { project, expanded, onClick } = props;
  return (
    <ScCard onClick={onClick} expanded={expanded}>
      <h2>{project.name}</h2>
      <p>{expanded ? project.details : project.description}</p>
    </ScCard>
  );
}

type LinkProps = {
  text: string;
  linkTo: string;
};

function Link(props: LinkProps) {
  const { text, linkTo } = props;
  const ScLink = styled(RouterLink)`
    color: #1a1a1a;
    text-decoration: none;
    font-family: "Consolas", "Courier New", monospace;
    font-size: 16px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #555;
      text-decoration: underline;
    }
  `;
  return (
    <ScLink to={linkTo} target="_blank" rel="noopener noreferrer">
      {text}
    </ScLink>
  );
}

function Home() {
  const links = accounts.map((account, index) => (
    <Link key={index} text={account.name} linkTo={account.url} />
  ));

  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const handleCardClick = (projectName: string) => {
    if (expandedProject === projectName) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectName);
    }
  };

  const projectCards = projects.map((project) => (
    <Card
      project={project}
      expanded={expandedProject === project.name}
      onClick={() => handleCardClick(project.name)}
    />
  ));
  const ScProjectListing = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  const ScAccountListing = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    animation: ${fadeIn} 0.5s ease-out;
    padding: 20px;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    margin-top: 20px;
  `;

  return (
    <div>
      <p>
        This is the homepage of Artur Marschenkulov, specializing in low-level
        and graphics programming.
      </p>
      <ScAccountListing>{links}</ScAccountListing>
      <ScProjectListing>{projectCards}</ScProjectListing>
    </div>
  );
}

export default Home;
