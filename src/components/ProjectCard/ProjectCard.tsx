import FolderIcon from "../Icons/Folder";
import LinkIcon from "../Icons/Link";

interface ProjectCardProps {
  title: string;
  description: string;
  links: {
    web: string;
    github: string;
  };
  technologies: string[];
}
const ProjectCard = ({
  links,
  technologies,
  description,
  title,
}: ProjectCardProps) => {
  return (
    <div className=" transition-all duration-300 ease-in-out bg-zinc-800 bg-opacity-60 hover:shadow hover:shadow-yellow-400 rounded-lg p-6 project">
      <div className="flex justify-between  icons">
        <a target={links.web ? '_blank' : ""} href={links.web ? links.web : "#"}>
          <FolderIcon />
        </a>
        <a target="_blank" href={links.github}>
          <LinkIcon />
        </a>
      </div>
      <div className="font-bold mt-2 text-xl uppercase title">{title}</div>
      <div className="mt-3 mb-5 description">{description}</div>
      <div className="flex gap-2 flex-wrap tecnology">
        {technologies.map((tech, index) => (
          <span key="index" className="italic text-sm ">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
