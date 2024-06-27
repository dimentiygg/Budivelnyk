import { useState } from 'react';
import BurgerIcon from '../../assets/BurgerIcon.jsx';
import MobileModal from './MobileModal.jsx';

export default function Burger() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {' '}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute flex justify-center items-center right-4 top-0 w-16 h-[88px] bg-orn rounded-b-3xl"
      >
        <BurgerIcon className="fill-red-400" />
      </button>
      <div className="flex flex-col justify-between absolute top-0 left-0 w-80 h-screen min-h-full bg-white transition-transform duration-500 transform -translate-x-full p-6 z-50 bg-orn"></div>
      {isOpen && <MobileModal isOpen={isOpen} />}
    </>
  );
}
