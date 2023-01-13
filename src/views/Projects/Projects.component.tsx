import "./Projects.css";

import MRLogo from "../../assets/projects/MonsterRolodexLogo.png";
import MR from "../../assets/projects/MonsterRolodex.png";
import CGLogo from "../../assets/projects/GreydiveLogo.png";
import CG from "../../assets/projects/Form.png";
import JSLogo from "../../assets/projects/JemersoftLogo.svg";
import JS from "../../assets/projects/Pokedex.png";
import BCLogo from "../../assets/projects/BoxCustodiaLogo.ico";
import BC from "../../assets/projects/JornalYa.png";
import WebIcon from "../../assets/web.png";

const Projects = [
  {
    logo: JSLogo,
    wallpaper: JS,
    title: "Challenge Jemersoft",
    date: "Junio 2022",
    description:
      "Challenge de Jemersoft que consistia en realizar una app,en la cual consumiendo la PokeAPI, obtendremos los pokemones y se visualizaran en la home, pero teniendo en cuenta la performance, ya que son muchos pokemones los que existen,tambien poder visualizar cada en detalle",
    links: {
      web: "https://jemersoft-challenge.onrender.com/#/",
      github: "https://github.com/Gigena-Cod/Challenge-Jemersoft",
    },
  },
  {
    logo: MRLogo,
    wallpaper: MR,
    title: "MONSTERS ROLODEX",
    date: "Septiembre 2022",
    description:
      "Mi primer proyecto en React Js, en el cual pude entender los conceptos basicos de manera formidable Para el estado utilizo el hook useState, para los efectos secundarios el hook useEffect.\n   Utilizo la desestructuración de objetos para pasar los props",
    links: {
      web: "https://rolodex-react.web.app/",
      github: "https://www.github.com/Gigena-Cod/Monsters-Rolodex",
    },
  },
  {
    logo: BCLogo,
    wallpaper: BC,
    title: "Challenge Box Custodia",
    date: "Septiembre 2022",
    description:
      "Challenge de Box Custodia, tiene como obejtivo iniciar sesion,poder visualizar un listado de documentos(PDF) en el cual podemos buscar, y ver en detalle los mismos atraves de un modal ",
    links: {
      web: "https://box-custodia-challenge-jornalya.onrender.com/#/",
      github: "https://github.com/Gigena-Cod/Box-Custodia-Challenge-JornalYa",
    },
  },
  {
    logo: CGLogo,
    wallpaper: CG,
    title: "Challenge Greydive",
    date: "Enero 2023",
    description:
      "Challenge de Greydrive que consistia en realizar una app en ReactJs que obtuviera de un archivo JSON elementos ya sean input de tipo texto, checkbox o select y que con ellos generara una interfaz de app de encuesta (como Google Forms). Las respuestas de la encuesta tenian que ser enviadas a una base de datos de Firebase.Por último, traer las respuestas de la base de datos y mostralas en la misma app pero en otra ruta. Al presionar “enviar” en el formulario tenia que aparecer un mensaje y el acceso a la ruta donde se visualizaban las respuestas. ",
    links: {
      web: "https://greydive-challenge.onrender.com/",
      github: "https://github.com/Gigena-Cod/Greydive-Challenge",
    },
  },
];

const ProjectsComponent = () => (
  <div className="mt-8 min-h-custom snap-center h-auto justify-start flex items-center flex-col max-w-screen-2xl mx-auto text-white">
    <div className="justify-center flex items-center flex-col title-section">
      <div className="text-center uppercase text-5xl md:text-6xl font-bold title">
        PROYECTOS
      </div>
      <hr className=" w-10 h-2 my-3 rounded-xl  bg-yellow-400" />
      <div className="text-center  lg:w-4/5 text-xl mx-auto subtitle">
        Una mirada a mis trabajos, inspiración de diseño y creaciones
        cuestionables.
      </div>
    </div>

    <div className="mt-14 gap-4 flex flex-col  content">
      {Projects.map((Project, index) => (
        <div key={index} className=" max-w-5xl flex card">
          <div className="mt-20 mx-12 line">&nbsp;</div>
          <div className="flex gap-x-8 w-full content-card">
            <div className="w-full lg:w-2/3  flex flex-col gap-x-4 decription">
              <div className="relative mb-4 title">
                <div className=" absolute title_logo">
                  <img
                    src={Project.logo}
                    alt=""
                    className="w-16 h-16 border border-primary shadow shadow-slate-100  bg-gray-300 rounded-full"
                  />
                </div>
                <div className="text-4xl uppercase pt-3 font-bold title_text">
                  {Project.title}
                </div>
                <div className=" italic subtitle">{Project.date}</div>
              </div>
              <div className="flex flex-col gap-y-4 text">
                {Project.description}
              </div>
              <div className="mt-6 gap-x-4  flex links">
                <a
                  target="_blank"
                  className="rounded-full p-1 border border-white cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 git"
                  href={Project.links.web}
                >
                  <img
                    src={WebIcon}
                    alt=""
                    className="rounded-full bg-white w-6 h-6"
                  />
                </a>
                <a
                  target="_blank"
                  className="rounded-full  p-1 border border-white cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 git"
                  href={Project.links.github}
                >
                  <svg
                    className="rounded-full  w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="hidden lg:flex py-8 w-1/3 image">
              <img
                src={Project.wallpaper}
                alt=""
                className=" shadow rounded "
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default ProjectsComponent;
