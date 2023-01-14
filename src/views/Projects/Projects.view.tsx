import MRLogo from "../../assets/projects/MonsterRolodexLogo.png";
import MR from "../../assets/projects/MonsterRolodex.png";
import CGLogo from "../../assets/projects/GreydiveLogo.png";
import CG from "../../assets/projects/Form.png";
import JSLogo from "../../assets/projects/JemersoftLogo.svg";
import JS from "../../assets/projects/Pokedex.png";
import BCLogo from "../../assets/projects/BoxCustodiaLogo.ico";
import BC from "../../assets/projects/JornalYa.png";

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
      <div className="experience__container">
        <div className="experience"></div>
      </div>
    </div>
  );
};

export default ProjectsView;
