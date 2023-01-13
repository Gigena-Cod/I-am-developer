import { FC } from "react";
import { Link } from "react-router-dom";

interface MainComponent {
  showMain: boolean;
}

const MainComponent: FC<MainComponent> = ({ showMain }) => {
  const links = [
    { name: "Inicio", url: "/" },
    { name: "Sobre mi", url: "/about" },
    { name: "Proyectos", url: "/projects" },
    { name: "Contacto", url: "/contact" },
  ];

  const style = showMain
    ? { transitionProperty: "right", right: 0 }
    : { transitionProperty: "right", right: "-100%" };

  return (
    <div
      style={style}
      className="w-full md:w-auto transition ease-in-out duration-5000 mt-20 md:mt-0 fixed md:static top-0 bg-primary container__main"
    >
      <ul className="md:flex md:gap-4 links__container">
        {links.map((link, index) => (
          <li key={index}  className="font-bold  md:border-0 rounded transition ease-in-out duration-500 border-t border-b hover:bg-yellow-400 hover:text-primary border-white uppercase text-white  cursor-pointer">
            <Link className="md:h-12 h-16 flex items-center px-4" to={link.url}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainComponent;
