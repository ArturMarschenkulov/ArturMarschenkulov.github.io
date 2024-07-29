import { useState } from "react";
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
  const { project, expanded, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`relative p-2.5 m-2.5 cursor-pointer border ${
        expanded
          ? "fixed top-10 left-10 right-10 bottom-10 bg-white z-10 overflow-auto p-10 transform scale-100"
          : "w-[calc(33.333%-20px)] h-37.5 border rounded-lg"
      } transition-transform duration-300 ease-out 
        transition-opacity duration-300 ease-in-out 
        transition-width duration-300 ease-in-out 
        transition-height duration-300 ease-in-out 
        transition-padding duration-300 ease-in-out 
        transition-border-color duration-300 ease-in-out
        hover:transform-scale-105 hover:border-red-500 hover:border-3`}
    >
      <h2>{project.name}</h2>
      <p>{expanded ? project.details : project.description}</p>
    </div>
  );
}

type LinkProps = {
  text: string;
  linkTo: string;
};

function Link(props: LinkProps) {
  const { text, linkTo } = props;
  return (
    <RouterLink
      to={linkTo}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black no-underline font-mono text-lg transition-colors duration-300 hover:text-gray-500 hover:underline"
    >
      {text}
    </RouterLink>
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

  return (
    <div>
      <p>
        This is the homepage of Artur Marschenkulov, specializing in low-level
        and graphics programming.
      </p>
      <div className="grid grid-cols-3 gap-5 p-5 border-t-2 border-b-2 border-gray-300 mt-5 animate-fadeIn">
        {links}
      </div>
      <div className="flex flex-wrap">{projectCards}</div>
    </div>
  );
}

export default Home;
