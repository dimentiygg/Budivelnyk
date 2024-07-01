import CloseButton from '../../assets/CloseButton.jsx';
import PhoneIcon from '../../assets/PhoneIcon.jsx';

export default function MobileModal({ isOpen, setIsOpen }) {
  return (
    <>
      {console.log(isOpen, 1)};
      <div
        className={`flex justify-center flex-col gap-12 fixed top-0 right-0 w-full h-full bg-orn translate-x-[100%] transition ease-out delay-150 ${
          isOpen ? ' translate-x-[0px]' : ''
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
            <a href="">каталог товару</a>
          </li>
          <li>
            <a href="">про нас</a>
          </li>
          <li>
            <a href="">контакти</a>
          </li>
        </ul>
        <ul className="flex justify-center items-center gap-4 text-wht-80 font-normal text-xs font-inter ">
          <li>info@budivelnyk.ua</li>
          <li>
            <div className="w-px h-2.5 bg-wht-30"></div>
          </li>
          <li>+380970504169</li>
        </ul>
        <button className="absolute left-1/2 -translate-x-1/2 bottom-12 flex justify-center items-center w-24 h-24 mx-auto">
          <span className="animate-ping absolute  h-full w-full rounded-full bg-orn2-100 opacity-75"></span>
          <span className=" flex relative justify-center items-center rounded-[100px] w-24 h-24 bg-orn2-100">
            <PhoneIcon />
          </span>
        </button>
      </div>
    </>
  );
}
//
