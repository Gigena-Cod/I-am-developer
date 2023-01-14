import FolderIcon from "../Icons/Folder";
import LinkIcon from "../Icons/Link";

const ProjectCard = () => {
  return (
    <div className=" transition-all duration-300 ease-in-out bg-zinc-800 bg-opacity-60 hover:shadow hover:shadow-yellow-400 rounded-lg p-6 project">
      <div className="flex justify-between  icons">
        <FolderIcon />

        <a href="#">
          <LinkIcon />
        </a>
      </div>
      <div className="font-bold mt-2 text-xl title">
        Integrating Algolia Search with WordPress Multisite
      </div>
      <div className="mt-3 mb-5 description">
        Find out how we built a custom headless CMS with Node, Express, and
        Firebase for a project at Upstatement
      </div>
      <div className="flex gap-2 flex-wrap tecnology">
        <span className="italic text-sm ">Node</span>
        <span className="italic text-sm ">Express</span>
        <span className="italic text-sm ">Firebase</span>
        <span className="italic text-sm ">VueJs</span>
      </div>
    </div>
  );
};

export default ProjectCard;
