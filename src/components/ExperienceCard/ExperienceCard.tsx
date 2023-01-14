import "./ExperienceCard.css";
import WebIcon from "../../assets/web.png";
import InIcon from "../../assets/linkedin.png";

interface Work {
  logo: string;
  wallpaper: string;
  title: string;
  subtitle: string;
  date: string;
  descriptions: string[];
  links: Links;
  technologies: string[];
}

interface Links {
  in: string;
  web: string;
}

const ExperienceCard = ({
  logo,
  wallpaper,
  title,
  subtitle,
  date,
  descriptions,
  links,
  technologies,
}: Work) => {
  return (
    <div className=" max-w-7xl flex card">
      <div className="mt-20 mx-12 line">&nbsp;</div>
      <div className="flex gap-x-8 w-full pb-8 content-card">
        <div className="w-full lg:w-3/5  flex flex-col gap-x-4 decription">
          <div className="relative title">
            <div className=" absolute title_logo">
              <img
                src={logo}
                alt=""
                className="w-16 h-16 border border-primary shadow shadow-yellow-400  bg-gray-300 rounded-full"
              />
            </div>
            <div className="text-4xl uppercase pt-3 font-semibold title_text">
              {title}
            </div>
            <div className="title_text">{subtitle}</div>
            <div className="text-gray-300 italic subtitle">{date}</div>
          </div>
          <div className="mt-5 mb-8 descriptions">
            {descriptions.map((description, index) => (
              <div key={index} className="description">
                <span className="mr-2">-</span> {description}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 technologies">
            {technologies.map((technology, index) => (
              <span
                key={index}
                className="p-2 select-none rounded bg-gray-400 bg-opacity-20 description"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-6 gap-x-4  flex links">
            <a
              target="_blank"
              className="rounded-full p-1 border border-white cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 git"
              href={links.web}
            >
              <img
                src={WebIcon}
                alt="Web Icon"
                className="rounded-full bg-white w-6 h-6"
              />
            </a>
            <a
              target="_blank"
              className="rounded-full  p-1 border border-white cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 git"
              href={links.in}
            >
              <img
                src={InIcon}
                alt="Linkedin Icon"
                className="rounded-full bg-white w-6 h-6"
              />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center  py-8 w-2/5 image">
          <img src={wallpaper} alt="" className=" shadow-md shadow-yellow-400 rounded " />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
