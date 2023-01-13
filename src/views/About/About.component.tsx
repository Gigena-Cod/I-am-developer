import { FC } from "react";
import { Link } from "react-router-dom";
import SkillComponent from "./components/Skills.component";

const AboutComponent: FC = () => (
  <div className="mt-8 min-h-custom snap-center h-auto justify-start flex items-center flex-col max-w-screen-2xl mx-auto text-white">
    <div className="justify-center flex items-center flex-col title-section">
      <div className="text-center uppercase text-5xl md:text-6xl font-bold title">
        SOBRE MI
      </div>
      <hr className=" w-10 h-2 my-3 rounded-xl  bg-yellow-400" />
      <div className="text-center  lg:w-4/5 text-xl mx-auto subtitle">
        Aquí encontrarás más información sobre mí, lo que hago, y mis actuales
        habilidades sobre todo en términos de programación y tecnología
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16  mt-16 content">
      <div className="know-me">
        <div className="title text-3xl uppercase font-bold ">¡Conóceme!</div>
        <div className="flex flex-col mt-8  gap-4 content__know-me">
          <div className="section__content">
            Soy un desarrollador web enfocado en el frontend que construye
            aplicaciones web que conducen al éxito del producto en general. Echa
            un vistazo a algunos de mis trabajos en la sección de Proyectos.
          </div>

          <div className="section__content">
            También me gusta compartir contenido relacionado con las cosas que
            he aprendido a lo largo de los años en el Desarrollo Web para que
            pueda ayudar a otras personas de la Comunidad Dev. Siéntete libre de
            Conectar o Seguirme en mi Linkedin donde publico contenido útil
            relacionado con el Desarrollo Web y la Programación
          </div>
          <div className="section__content">
            Estoy abierto a oportunidades de trabajo donde pueda contribuir,
            aprender y crecer. Si tiene una buena oportunidad que se ajuste a
            mis habilidades y experiencia no dudes en contactarme.
          </div>
          <Link
            to="/contact"
            className=" w-44 h-12  mt-8 transition ease-in-out duration-500 hover:-translate-y-1 hover:shadow flex justify-center text-center uppercase font-bold items-center rounded text-primary bg-yellow-400 cursor-pointer button"
          >
            contáctame
          </Link>
        </div>
      </div>
      <SkillComponent />
    </div>
  </div>
);
export default AboutComponent;
