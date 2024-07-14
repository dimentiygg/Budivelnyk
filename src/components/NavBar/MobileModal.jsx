import { Link } from 'react-scroll';
import CloseButton from '../../assets/CloseButton.jsx';
import PhoneIcon from '../../assets/PhoneIcon.jsx';

export default function MobileModal({ isOpen, setIsOpen }) {
  return (
    <>
      <div
        className={`flex justify-center flex-col gap-12 fixed top-0 right-0 w-full h-full bg-orn transition ease-out delay-150 z-[999] ${
          isOpen ? ' translate-x-[0px]' : ' translate-x-[100%]'
        } `}
      >
        <button
          className="absolute top-8 right-8"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CloseButton />
        </button>
        <ul className="flex flex-col gap-7 items-center font-semibold text-wht text-base uppercase tracking-small font-inter">
          <li>
            <Link
              to="catalog"
              onClick={() => setIsOpen(false)}
              smooth={true}
              duration={500}
              offset={-65}
            >
              каталог товару
            </Link>
          </li>
          <li>
            <Link
              to="aboutUs"
              onClick={() => setIsOpen(false)}
              smooth={true}
              duration={500}
              offset={-40}
            >
              про нас
            </Link>
          </li>
          <li>
            <Link
              to="contacts"
              onClick={() => setIsOpen(false)}
              smooth={true}
              duration={500}
              offset={-45}
            >
              контакти
            </Link>
          </li>
        </ul>
        <ul className="flex justify-center items-center gap-4 text-wht-80 font-normal text-xs font-inter mb-[26px] lg:hidden">
          <li>
            <a href="mailto:info@budivelnyk.ua">info@budivelnyk.ua</a>
          </li>
          <li>
            <div className="w-px h-2.5 bg-wht-30"></div>
          </li>
          <li>
            <a href="tel:+380970504169">+380970504169</a>
          </li>
        </ul>
        <a
          href="tel:+380970504169"
          className="absolute -translate-x-1/2 bottom-12 left-[50%] flex justify-center items-center w-24 h-24 mx-auto"
        >
          <span className="animate-ping absolute  h-full w-full rounded-full bg-orn2-100 opacity-75 md:hidden"></span>
          <span className=" flex relative justify-center items-center rounded-[100px] w-24 h-24 bg-orn2-100">
            <PhoneIcon />
          </span>
        </a>
      </div>
    </>
  );
}
//
