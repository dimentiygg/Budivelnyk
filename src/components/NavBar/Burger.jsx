import { useState } from 'react';
import BurgerIcon from '../../assets/BurgerIcon.jsx';
import MobileModal from './MobileModal.jsx';
import PhoneIcon from '../../assets/PhoneIcon.jsx';
import DesktopPhoneIcon from '../../assets/DesktopPhoneIcon.jsx';

export default function Burger() {
  let [isOpen, setIsOpen] = useState(false);

  const screenWidth = window.innerWidth;
  let ButtonComponent;

  if (screenWidth >= 1440) {
    ButtonComponent = DesktopPhoneIcon;
  } else if (screenWidth >= 834) {
    ButtonComponent = PhoneIcon;
  } else {
    ButtonComponent = BurgerIcon;
  }

  const onClickHandler = () => {
    if (window.innerWidth >= 834) {
      setIsOpen(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <button
        onClick={onClickHandler}
        className="absolute md:relative flex justify-center items-center right-4 top-0 w-16 h-[88px] bg-orn rounded-b-3xl md:w-32 md:h-28 md:right-0 lg:w-48 lg:h-32 md:rounded-b-[32px] lg:rounded-b-[32px] z-[50]"
      >
        <ButtonComponent />
      </button>
      <div className="flex flex-col justify-between absolute top-0 left-0 w-80 h-screen min-h-full bg-white transition-transform duration-500 transform -translate-x-full p-6 z-50 bg-orn"></div>
      <MobileModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
