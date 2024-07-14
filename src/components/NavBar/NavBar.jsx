import MobileHeaderLogo from '../../assets/MobileHeaderLogo.jsx';
import TabletHeaderLogo from '../../assets/TabletHeaderLogo.jsx';
import DesktopHeaderLogo from '../../assets/DesktopHeaderLogo.jsx';
import Burger from './Burger.jsx';
import { Link } from 'react-scroll';

export default function NavBar() {
  const screenWidth = window.innerWidth;
  const largeScreen = screenWidth >= 834;
  let LogoComponent;

  if (screenWidth >= 1440) {
    LogoComponent = DesktopHeaderLogo;
  } else if (screenWidth >= 834) {
    LogoComponent = TabletHeaderLogo;
  } else {
    LogoComponent = MobileHeaderLogo;
  }

  return (
    <header className="sm:container sm:max-w-none w-full flex justify-between max-w-none pt-8 pb-4 md:p-0 md:pl-12 lg:pl-20 lg:max-w-[1440px] lg:mx-auto">
      <a href="" className="lg:mt-8">
        <LogoComponent />
      </a>
      <div className="md:flex md:flex-row md:items-center md:justify-end  md:gap-10 md:mb-4 lg:mb-0 lg:gap-16">
        {largeScreen && (
          <div className="md:flex md:flex-col md:gap-5 lg:gap-[24.5px]">
            <ul className="flex justify-end items-center gap-4 text-grl font-normal text-xs font-inter ">
              <li>
                <a href="mailto:info@budivelnyk.ua">info@budivelnyk.ua</a>
              </li>
              <li>
                <div className="w-px h-2.5 bg-[#d9d9d9]"></div>
              </li>
              <li>
                <a href="tel:+380970504169">+380970504169</a>
              </li>
            </ul>
            <ul className="flex flex-row gap-6 items-center font-semibold text-grd text-base uppercase tracking-small font-inter md:font-bold lg:text-xl">
              <li>
                <Link
                  className="cursor-pointer"
                  to="catalog"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  каталог товару
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer"
                  to="aboutUs"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  про нас
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer"
                  to="contacts"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  контакти
                </Link>
              </li>
            </ul>
          </div>
        )}
        <Burger />
      </div>
    </header>
  );
}
