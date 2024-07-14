import MobileFooterLogo from '../../assets/MobileFooterLogo.jsx';
import TabletFooterLogo from '../../assets/TabletFooterLogo.jsx';
import DesktopFooterLogo from '../../assets/DesktopFooterLogo.jsx';
import SocialList from './SocialList.jsx';

export default function Footer() {
  const screenWidth = window.innerWidth;
  let LogoComponent;

  if (screenWidth >= 1440) {
    LogoComponent = DesktopFooterLogo;
  } else if (screenWidth >= 834) {
    LogoComponent = TabletFooterLogo;
  } else {
    LogoComponent = MobileFooterLogo;
  }
  return (
    <footer className="relative py-10 px-4 bg-blbg z-[10] font-inter md:px-10 md:pt-12 md:pb-[53px] lg:px-0 ">
      <div className="flex flex-col gap-6 md:gap-0 lg:mx-auto lg:w-[1280px] ">
        <div className="md:flex gap-[54px] lg:justify-between">
          <div className="">
            <a href="">
              <LogoComponent />
            </a>
            <p className="mb-8 mt-6 font-normal text-xs leading-[150%] text-footgr md:mb-24 lg:mb-[66px]">
              Lorem ipsum dolor sit amet consectetur.{' '}
            </p>
            <SocialList />
          </div>
          <div className="flex flex-wrap gap-6 md:gap-10 lg:mt-[29px] lg:gap-20 lg:pr-24">
            <ul className="flex flex-col gap-2 font-normal text-xs leading-[150%] text-footgr2 ">
              <li>
                <h4 className="mb-2 font-bold text-sm text-footgr">
                  Наша адреса
                </h4>
              </li>
              <li>
                <p>Пров. Квітки Цісик, 40</p>
              </li>
              <li>
                <p>Кременчук, 36900</p>
              </li>
              <li>
                <p>( Зупинка Гвардійська )</p>
              </li>
            </ul>
            <ul className="flex flex-col gap-2 font-normal text-xs leading-[150%] text-footgr2">
              <li>
                <h4 className="mb-2 font-bold text-sm text-footgr">Контакти</h4>
              </li>
              <li>
                <a href="tel:+380961353955">+38 (096) 135 39 55</a>
              </li>
              <li>
                <a href="mailto:info@budivelnik.ua">info@budivelnik.ua</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2 mb-4 font-normal text-xs leading-[150%] text-footgr2">
              <li>
                <h4 className="mb-2 font-bold text-sm text-footgr">
                  Наші товари
                </h4>
              </li>
              <li>
                <p>Категорія</p>
              </li>
              <li>
                <p>Категорія</p>
              </li>
              <li>
                <p>Категорія</p>
              </li>
              <li>
                <p>Категорія</p>
              </li>
              <li>
                <p>Категорія</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-footbr2 md:flex flex-row justify-between items-center md:pt-8">
          <ul className="flex gap-4 mt-8 mb-4 font-normal text-[10px] text-footgr md:mt-0 md:mb-0">
            <li>
              <a href="">Правила та умови</a>
            </li>
            <li>
              <a href="">Політика конфіденційності</a>
            </li>
            <li>
              <a href="">Файли cookies</a>
            </li>
          </ul>
          <p className="font-normal text-[10px] text-footgr2">
            @ 2024 Будівельник. Всі права захищені. Вироблено студією{' '}
            <span>
              <a
                className="font-medium underline text-decoration-skip-ink-none"
                href=""
              >
                KOSH
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
