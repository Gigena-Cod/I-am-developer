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
    <div className=" z-10 sticky top-0 bg-primary  w-full  container__header">
      <div className="flex items-center w-full max-w-screen-2xl mx-auto justify-between h-20 p-4 content__header">
        <div className="flex items-center gap-x-2 cursor-pointer homelink__content">
          <div className="rounded-full w-24 h-24 picture">
            <img src={profile} alt="Nahuel Gigena" className="rounded-full " />
          </div>
          
        </div>
        <div className="md:hidden cursor-pointer button">
          <ButtonMainComponent
            showMain={show}
            onHandleToggle={onHandleToggle}
          />
        </div>
        <MainComponent showMain={show} />
      </div>
    </div>
  );
};




export default HeaderComponent;
