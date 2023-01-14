import GithubIcon from "../Icons/Github";
import LinkIcon from "../Icons/Link";

interface Project {
  id: number;
  wallpaper: string;
  title: string;
  description: string;
  links: Links;
  technologies: string[];
}

interface Links {
  web: string;
  github: string;
}

const ProjectCardHighlighted  = ({
  id,
  wallpaper,
  title,
  description,
  links,
  technologies,
}: Project) => {
  const position = id % 2;
  return (
    <div
      className={`w-full relative md:flex ${
        position ? "justify-start" : "justify-end"
      } overflow-hidden rounded project`}
    >
      {/* CONTENT  */}
      <div className="z-20 relative w-full md:w-3/5 rounded p-4 content__project">
        <div
          className={` ${
            position ? "text-left" : "text-right"
          } font-semibold text-yellow-400 subtitle`}
        >
          Proyecto destacado
        </div>
        <div
          className={` ${
            position ? "text-left" : "text-right"
          } text-3xl uppercase  mb-5 font-semibold subtitle`}
        >
          {title}
        </div>
        <div
          className={` ${
            position ? "text-left" : "text-right"
          } mb-8 md:p-6 md:rounded lg:bg-opacity-90 md:bg-zinc-800 description`}
        >
          {description}
        </div>
        <div
          className={` ${
            position ? "mr-auto justify-start" : "ml-auto justify-end"
          } flex mb-6 flex-wrap gap-2 md:w-1/2 technologies`}
        >
          {technologies.map((technology, index) => (
            <span
              key={index}
              className="p-2 select-none rounded bg-gray-400 bg-opacity-20 description"
            >
              {technology}
            </span>
          ))}
        </div>
        <div
          className={` ${
            position ? "justify-start" : "justify-end"
          } flex flex-wrap gap-4  links`}
        >
          <a target="_blank" href={links.web}>
            <LinkIcon />
          </a>
          <a target="_blank" href={links.github}>
            <GithubIcon />
          </a>
        </div>
      </div>
      {/* WALLPAPER  */}
      <a target="_blank" href={links.web}
        className={`z-10 absolute md:w-3/5 rounded-lg top-0 ${
          position ? "md:right-0" : "md:left-0"
        } w-full h-full wallpaper`}
      >
        <img
          className="rounded-lg transition-all w-full h-fit flex  duration-300 ease-in-out opacity-10 md:opacity-60 hover:lg:opacity-100"
          src={wallpaper}
          alt={`${title} wallpaper`}
        />
      </a>
    </div>
  );
};

export default ProjectCardHighlighted ;
