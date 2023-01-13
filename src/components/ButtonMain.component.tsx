import { FC } from "react";

interface ButtonMainProps {
  showMain: boolean;
  onHandleToggle: () => void;
}
const ButtonMainComponent: FC<ButtonMainProps> = ({
  onHandleToggle,
  showMain,
}) =>
  !showMain ? (
    <svg
      onClick={onHandleToggle}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFF"
      className="feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  ) : (
    <svg
      onClick={onHandleToggle}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFF"
      className="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

export default ButtonMainComponent;
