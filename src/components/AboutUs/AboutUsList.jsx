import BagIcon from '../../assets/BagIcon';
import HeartIcon from '../../assets/HeartIcon';
import MedalIcon from '../../assets/MedalIcon';
import MessageIcon from '../../assets/MessageIcon';

export default function AboutUsList({ set, elementId }) {
  return (
    <ul className="mb-12 mx-auto w-min-[312px] font-inter -translate-y-0 shadow-abt rounded-[32px] md:flex-row lg:flex-col lg:w-[360px] lg:-translate-y-[400px] lg:mb-0 lg:mx-0 lg:h-[861px] lg:right-24 lg:absolute flex flex-col lg:order-2">
      <li
        id="1"
        onMouseEnter={() => set(1)}
        className={`flex-1 p-8 rounded-t-[32px] md:p-4 md:rounded-none md:rounded-l-[32px] lg:px-12 lg:py-10 lg:rounded-t-[32px] lg:rounded-bl-[0px] h-auto lg:h-[220px] ease-in-out duration-200 ${
          elementId === 1 ? 'bg-wht' : 'bg-orn2'
        }`}
      >
        <div className="flex flex-row gap-2 items-start md:flex-col lg:flex-row ">
          <MedalIcon elementId={elementId} />
          <h3
            className={`mb-4 font-semibold text-xl md:text-base lg:text-xl lg:w-[170px] lg:leading-[125%] ease-in-out duration-200 ${
              elementId === 1 ? 'text-grd' : 'text-wht'
            }`}
          >
            Висока якість та надійність
          </h3>
        </div>
        <p
          className={`font-normal text-base md:text-xs lg:text-base lg:w-[264px] lg:leading-[125%] ease-in-out duration-200 ${
            elementId === 1 ? 'text-grd' : 'text-wht-70'
          }`}
        >
          Ми обираємо тільки найкращі матеріали та інструменти, які відповідають
          найвищим стандартам якості.
        </p>
      </li>
      <li
        id="2"
        onMouseEnter={() => set(2)}
        className={`flex-1 p-8 md:p-4  lg:px-12 lg:py-10 h-auto lg:h-[201px] ease-in-out duration-200  ${
          elementId === 2 ? 'bg-wht' : 'bg-orn2'
        }`}
      >
        <div className="flex flex-row gap-2 items-start md:flex-col lg:flex-row  ">
          <BagIcon elementId={elementId} />
          <h3
            className={`mb-4 font-semibold  text-xl md:text-base lg:text-xl lg:w-36 lg:leading-[125%] ease-in-out duration-200 ${
              elementId === 2 ? 'text-grd' : 'text-wht'
            }`}
          >
            Широкий асортимент
          </h3>
        </div>
        <p
          className={`font-normal text-base md:text-xs lg:text-base lg:leading-[125%] ease-in-out duration-200 ${
            elementId === 2 ? 'text-grl' : 'text-wht-70'
          }`}
        >
          Пропонуємо товари від провідних виробників для будь-яких потреб.
        </p>
      </li>
      <li
        id="3"
        onMouseEnter={() => set(3)}
        className={`flex-1 p-8 md:p-4 lg:px-12 lg:py-10 h-auto lg:h-[239px] ease-in-out duration-200 ${
          elementId === 3 ? 'bg-wht' : 'bg-orn2'
        }`}
      >
        <div className="flex flex-row items-start gap-2 md:flex-col lg:flex-row ">
          <MessageIcon elementId={elementId} />
          <h3
            className={`mb-4 font-semibold text-xl md:text-base lg:text-xl lg:leading-[125%] ease-in-out duration-200 ${
              elementId === 3 ? 'text-grd' : 'text-wht'
            }`}
          >
            Професійна підтримка
          </h3>
        </div>
        <p
          className={`font-normal text-base md:text-xs lg:text-base lg:leading-[125%] ease-in-out duration-200 ${
            elementId === 3 ? 'text-grl' : 'text-wht-70'
          }`}
        >
          Наші фахівці завжди готові надати професійні консультації та допомогти
          з вибором оптимальних рішень для ваших проектів.
        </p>
      </li>
      <li
        id="4"
        onMouseEnter={() => set(4)}
        className={`flex-1 p-8 rounded-b-[32px] md:p-4 md:rounded-none md:rounded-r-[32px] lg:h-[201px] lg:px-12 lg:py-10 lg:rounded-r-[0px] lg:rounded-b-[32px] lg:rounded-br-[32px] h-auto ease-in-out duration-200  ${
          elementId === 4 ? 'bg-wht' : 'bg-orn2'
        }`}
      >
        <div className="flex flex-row gap-2 items-start md:flex-col lg:flex-row">
          <HeartIcon elementId={elementId} />
          <h3
            className={`mb-4 font-semibold text-xl md:text-base lg:text-xl lg:leading-[125%] ease-in-out duration-200  ${
              elementId === 4 ? 'text-grd' : 'text-wht'
            }`}
          >
            Індивідуальний підхід
          </h3>
        </div>
        <p
          className={`font-normal text-base md:text-xs lg:text-base lg:leading-[125%] ease-in-out duration-200  ${
            elementId === 4 ? 'text-grl' : 'text-wht-70'
          }`}
        >
          Ми цінуємо кожного клієнта та пропонуємо індивідуальні рішення.
        </p>
      </li>
    </ul>
  );
}
