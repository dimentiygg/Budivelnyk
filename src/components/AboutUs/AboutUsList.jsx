import BagIcon from '../../assets/BagIcon';
import HeartIcon from '../../assets/HeartIcon';
import MedalIcon from '../../assets/MedalIcon';
import MessageIcon from '../../assets/MessageIcon';

export default function AboutUsList() {
  return (
    <ul className="mb-12 mx-auto w-min-[312px] font-inter -translate-y-4 shadow-abt rounded-[32px] md:flex-row lg:flex-col lg:w-[360px] lg:-translate-y-[400px] lg:mb-0 lg:mx-0 lg:h-[861px] lg:right-24 lg:absolute flex flex-col lg:order-2">
      <li className="flex-1">
        <div className="bg-wht p-8 rounded-t-[32px] md:p-4 md:rounded-none md:rounded-l-[32px] lg:px-12 lg:py-10 lg:rounded-t-[32px] lg:rounded-bl-[0px] h-full lg:h-[220px]">
          <div className="flex flex-row gap-2 items-start md:flex-col lg:flex-row ">
            <MedalIcon />
            <h2 className="mb-4 font-semibold text-grd text-xl md:text-base lg:text-xl lg:w-[170px] lg:leading-[125%]">
              Висока якість та надійність
            </h2>
          </div>
          <p className="font-normal text-base text-grl md:text-xs lg:text-base lg:w-[264px] lg:leading-[125%]">
            Ми обираємо тільки найкращі матеріали та інструменти, які
            відповідають найвищим стандартам якості.
          </p>
        </div>
      </li>
      <li className="flex-1">
        <div className="bg-orn2 p-8 md:p-4  lg:px-12 lg:py-10 h-full  lg:h-[201px]">
          <div className="flex flex-row gap-2 items-start md:flex-col lg:flex-row  ">
            <BagIcon />
            <h2 className="mb-4 font-semibold text-wht text-xl md:text-base lg:text-xl lg:w-36 lg:leading-[125%]">
              Широкий асортимент
            </h2>
          </div>
          <p className="font-normal text-base text-wht-70 md:text-xs lg:text-base lg:leading-[125%]">
            Пропонуємо товари від провідних виробників для будь-яких потреб.
          </p>
        </div>
      </li>
      <li className="flex-1">
        <div className="bg-orn2 p-8 md:p-4  lg:px-12 lg:py-10 h-full  lg:h-[239px]">
          <div className="flex flex-row items-start gap-2 md:flex-col lg:flex-row ">
            <MessageIcon />
            <h2 className="mb-4 font-semibold text-wht text-xl md:text-base lg:text-xl lg:leading-[125%]">
              Професійна підтримка
            </h2>
          </div>
          <p className="font-normal text-base text-wht-70 md:text-xs lg:text-base lg:leading-[125%]">
            Наші фахівці завжди готові надати професійні консультації та
            допомогти з вибором оптимальних рішень для ваших проектів.
          </p>
        </div>
      </li>
      <li className="flex-1">
        <div className="bg-orn2 p-8 rounded-b-[32px] md:p-4 md:rounded-none md:rounded-r-[32px] lg:h-[201px] lg:px-12 lg:py-10 lg:rounded-r-[0px] lg:rounded-b-[32px] lg:rounded-br-[32px] h-full">
          <div className="flex flex-row gap-2 items-start md:flex-col lg:flex-row">
            <HeartIcon />
            <h2 className="mb-4 font-semibold text-wht text-xl md:text-base lg:text-xl lg:leading-[125%]">
              Індивідуальний підхід
            </h2>
          </div>
          <p className="font-normal text-base text-wht-70 md:text-xs lg:text-base lg:leading-[125%]">
            Ми цінуємо кожного клієнта та пропонуємо індивідуальні рішення.
          </p>
        </div>
      </li>
    </ul>
  );
}
