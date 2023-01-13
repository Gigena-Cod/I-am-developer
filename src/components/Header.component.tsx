import { FC, useState } from "react";
import profile from "../assets/logo.svg";
import ButtonMainComponent from "./ButtonMain.component";
import MainComponent from "./Main.component";

const HeaderComponent: FC = () => {
  const [show, setShow] = useState(false);

  const onHandleToggle = () => {
    setShow(!show);
  };

  return (
    <div className="md:px-4 md:mx-auto max-w-screen-2xl w-full  md:flex md:items-center bg-primary   container__header">
      <div className="flex z-10  top-0 sticky items-center  mr-auto justify-between h-20 p-4 content__header">
        <div className="flex items-center gap-x-2 cursor-pointer homelink__content">
          <div className="rounded-full w-24 h-24 picture">
            <img src={profile} alt="Nahuel Gigena" className="rounded-full " />
          </div>
        </div>
        <div className="md:hidden cursor-pointer button">
          <ButtonMainComponent onHandleToggle={onHandleToggle} />
        </div>
      </div>
      <MainComponent showMain={show} onHandleToggle={onHandleToggle} />
    </div>
  );
};

export default HeaderComponent;
