import MRLogo from "../../assets/projects/MonsterRolodexLogo.png";
import MR from "../../assets/projects/MonsterRolodex.png";
import CGLogo from "../../assets/projects/GreydiveLogo.png";
import CG from "../../assets/projects/Form.png";
import JSLogo from "../../assets/projects/JemersoftLogo.svg";
import JS from "../../assets/projects/Pokedex.png";
import BCLogo from "../../assets/projects/BoxCustodiaLogo.ico";
import BC from "../../assets/projects/JornalYa.png";
import ProjectCardHighlighted from "../../components/ProjectCard/ProjectCardHighlighted";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectsHighlighted = [
  {
    id: 1,
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
    technologies: ["VueJs", "Axios", "SCSS", "Tailwind CSS", "Javascript"],
  },
  {
    id: 2,
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
    technologies: ["ReactJs", "SCSS", "Tailwind CSS", "Javascript"],
  },
  {
    id: 3,
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
    technologies: ["VueJs", "Axios", "Tailwind CSS", "Javascript"],
  },
];

const Projects = [
  {
    title: "I Am Developer",
    description:
      "Web en la cual puende ver mi proyectos personales, tecnologias que uso como profesional y sobre todo mi experiencia laboral",
    links: {
      web: "https://christian-gigena.onrender.com/",
      github: "https://github.com/Gigena-Cod/I-am-developer",
    },
    technologies: ["ReactJs", "Tailwind CSS", "Typescript", "React Router"],
  },
  {
    title: "Form Firebase | Challenge Greydive",
    description:
      "Challenge de Greydrive que consistia en realizar una app en ReactJs que obtuviera de un archivo JSON elementos ya sean input de tipo texto, checkbox o select y que con ellos generara una interfaz de app de encuesta (como Google Forms). Las respuestas de la encuesta tenian que ser enviadas a una base de datos de Firebase.Por último, traer las respuestas de la base de datos y mostralas en la misma app pero en otra ruta.",
    links: {
      web: "https://greydive-challenge.onrender.com/",
      github: "https://github.com/Gigena-Cod/Greydive-Challenge",
    },
    technologies: ["ReactJs", "Tailwind CSS", "Typescript", "Firebase"],
  },
  {
    title: "Chat App | Challenge Torum",
    description:
      "Chatter es una app de mensajes, muy parecida a WhatsApp u otras aplicaciones de mensajería. Dentro de ella, existen usuarios capaces de ser registrados, iniciar sesión y a su vez mandar mensajes a distintas personas. El objetivo de esta evaluación es construir por encima de un maquetado establecido y conectar el cliente con una API REST.",
    links: {
      web: "",
      github: "https://github.com/Gigena-Cod/chatter_frontend",
    },
    technologies: [
      "NextJs",
      "Socket.IO",
      "Redux Toolkit",
      "Typescript",
      "Bootstrap",
    ],
  },
];

const ProjectsView = () => {
  return (
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

      {/* PROYECTOS DESTACADOS  */}
      <div className=" max-w-5xl w-full flex flex-col my-20 gap-12 md:gap-20 experience__container">
        {ProjectsHighlighted.map((Project, index) => (
          <ProjectCardHighlighted {...Project} key={index} />
        ))}
      </div>

      <div className="mb-6 text-4xl font-bold title">OTROS PROYECTOS</div>

      {/* OTROS PROYECTOS  */}
      <div className=" max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 experience__container">
        {Projects.map((Project, index) => (
          <ProjectCard key={index} {...Project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;
