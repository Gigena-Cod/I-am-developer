import { FC } from "react";
import { Link } from "react-router-dom";

const HomeComponent: FC = () => (
  <div
    className="min-h-custom snap-center justify-center flex items-center flex-col max-w-screen-2xl mx-auto text-white"
  >
    <div className="text-center uppercase text-5xl md:text-6xl font-bold title">
      hola, soy christian gigena
    </div>
    <div className="text-center mt-8 lg:w-1/2 text-xl mx-auto subtitle">
      Un desarrollador web enfocado en el frontend que construye aplicaciones
      web que conducen al éxito del producto en general
    </div>
    <Link to="/projects" className="mx-auto w-44 h-12  mt-12 transition ease-in-out duration-500 hover:-translate-y-1 hover:shadow flex justify-center text-center uppercase font-bold items-center rounded text-primary bg-yellow-400 cursor-pointer button">
      Proyectos
    </Link>
  </div>
);
export default HomeComponent;
