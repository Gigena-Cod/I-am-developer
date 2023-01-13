import { FC } from "react";
import { Link } from "react-router-dom";

interface MainComponent {
  showMain: boolean;
  onHandleToggle: () => void;
}

const MainComponent: FC<MainComponent> = ({ showMain, onHandleToggle }) => {
  const links = [
    { name: "Inicio", url: "/" },
    { name: "Sobre mi", url: "/about" },
    { name: "Proyectos", url: "/projects" },
    { name: "Contacto", url: "/contact" },
  ];

  const style = showMain
    ? { transitionProperty: "left", left: 0 }
    : { transitionProperty: "left", left: "-100%" };

  return (
    <>
      <div
        style={style}
        className="w-3/4 z-40 md:w-auto h-screen transition ease-in-out duration-5000  md:mt-0 fixed md:static top-0 bg-primary container__main"
      >
        <ul className="md:flex md:gap-4 links__container">
          {links.map((link, index) => (
            <li
              key={index}
              onClick={onHandleToggle}
              className="font-bold  md:border-0 rounded transition ease-in-out duration-500 border-t border-b hover:bg-yellow-400 hover:text-primary border-white uppercase text-white  cursor-pointer"
            >
              <Link
                className="md:h-12 h-16 flex items-center px-4"
                to={link.url}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={onHandleToggle}
        className={`fixed z-30 bg-white bg-opacity-10 left-0  top-0 h-screen w-full bg-custom md:hidden ${
          showMain ? " visible" : "invisible"
        }`}
      ></div>
    </>
  );
};

export default MainComponent;
