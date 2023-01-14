import "./Experience.css";

import CoderhouseLogo from "../../assets/works/coderhouse_logo.webp";
import CoderhouseWallpaper from "../../assets/works/coder.png";
import BoxCustodiaLogo from "../../assets/works/boxcustodia.jfif";
import BoxCustodiaWallpaper from "../../assets/works/box.png";
import LeadboxLogo from "../../assets/works/leadbox.jfif";
import LeadboxWallpaper from "../../assets/works/leadbox_wallpaper.png";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

const Projects = [
  {
    logo: CoderhouseLogo,
    wallpaper: CoderhouseWallpaper,
    title: "Tutor Vue.js",
    subtitle: "Coderhouse · Contrato temporal",
    date: "may. 2022 - actualidad · 9 meses",
    descriptions: [
      "Despejar dudas de los estudiantes durante la clase en vivo",
      "Participar de las clases sumando ejemplos, experiencias y haciendo de soporte al docente",
      "Tomar asistencia, corregir trabajos prácticos, entre otras tareas",
    ],
    links: {
      in: "https://www.linkedin.com/school/coderhouse/mycompany/",
      web: "https://www.coderhouse.com/",
    },
    technologies: [
      "Vue.Js",
      "Axios",
      "mockapi.io",
      "Tailwind CSS",
      "Bootstrap",
      "Javascript",
      "Typescript",
    ],
  },
  {
    logo: BoxCustodiaLogo,
    wallpaper: BoxCustodiaWallpaper,
    title: "Desarrollador Frontend",
    subtitle: "Box Custodia y Gestión Digital · Jornada completa",
    date: "oct. 2022 - dic. 2022 · 3 meses",
    descriptions: [
      "Desarrollar módulo de reportes comerciales, para un área interna de la empresa, la funcionalidad principal del módulo era buscar y manipular documentos, este módulo fue desarrollado con Angular 12 y Bootstrap",
      "Realizar proyectos de páginas estáticas, las cuales pertenecían a servicios brindados por la empresa, este proyecto fue desarrollado con NextJs 14 y Tailwind CSS",
    ],
    links: {
      in: "https://www.linkedin.com/company/boxcustodia/",
      web: "https://jornalya.boxcustodia.com/",
    },
    technologies: [
      "React.Js",
      "Next.Js",
      "Angular",
      "Jira",
      "Axios",
      "SCSS",
      "Tailwind CSS",
      "Bootstrap",
      "Typescript",
    ],
  },
  {
    logo: LeadboxLogo,
    wallpaper: LeadboxWallpaper,
    title: "Desarrollador Frontend",
    subtitle: "Leadbox · Jornada completa",
    date: "mar. 2021 - oct. 2022 · 1 año 8 meses",
    descriptions: [
      "Desarrollar sitios webs, utilizando Laravel 9/10, Vue.Js, Tailwind CSS y Figma para visualizar los diseños",
      "Realizar soporte de tickets utilizando el sistema de tickets Freshdesk",
      "Realizar mejoras y mantener componentes, plugins",
    ],
    links: {
      in: "https://www.linkedin.com/company/leadbox-inc/",
      web: "https://leadboxhq.com/",
    },
    technologies: [
      "VueJs",
      "Laravel 9/10",
      "Jira",
      "Axios",
      "SCSS",
      "Tailwind CSS",
      "Bootstrap",
      "Jquery",
      "Javascript",
    ],
  },
];

const ExperienceView = () => (
  <div className="mt-8 min-h-custom snap-center h-auto justify-start flex items-center flex-col max-w-screen-2xl mx-auto text-white">
    <div className="justify-center flex items-center flex-col title-section">
      <div className="text-center uppercase text-5xl md:text-6xl font-bold title">
        EXPERIENCIA
      </div>
      <hr className=" w-10 h-2 my-3 rounded-xl  bg-yellow-400" />
      <div className="text-center  lg:w-4/5 text-xl mx-auto subtitle">
        Aquí encontrarás más información sobre mi experiencias laborales, sobre
        todo actividades y tecnologías
      </div>
    </div>

    <div className="mt-14 gap-4 flex flex-col  content">
      {Projects.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </div>
  </div>
);
export default ExperienceView;
