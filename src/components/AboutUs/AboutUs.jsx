import PlayIcon from '../../assets/PlayIcon';
import MedalIcon from '../../assets/MedalIcon';
import BagIcon from '../../assets/BagIcon';
import MessageIcon from '../../assets/MessageIcon';
import HeartIcon from '../../assets/HeartIcon';

export default function AboutUs() {
  return (
    <section className="container max-w-none">
      <ul className="flex flex-col mb-12 mx-auto w-min-[312px] font-inter -translate-y-4 shadow-abt rounded-[32px]  md:flex-row  ">
        <li className="flex-1">
          <div className="bg-wht p-8 rounded-t-[32px] md:p-4 md:rounded-none md:rounded-l-[32px] h-full">
            <div className="flex flex-row gap-2 items-start md:flex-col ">
              <MedalIcon />
              <h2 className="mb-4 font-semibold text-grd text-xl md:text-base">
                Висока якість та надійність
              </h2>
            </div>
            <p className="font-normal text-base text-grl md:text-xs">
              Ми обираємо тільки найкращі матеріали та інструменти, які
              відповідають найвищим стандартам якості.
            </p>
          </div>
        </li>
        <li className="flex-1">
          <div className="bg-orn2 p-8 md:p-4 h-full">
            <div className="flex flex-row gap-2 items-start md:flex-col ">
              <BagIcon />
              <h2 className="mb-4 font-semibold text-wht text-xl md:text-base">
                Широкий асортимент
              </h2>
            </div>
            <p className="font-normal text-base text-wht-70 md:text-xs">
              Пропонуємо товари від провідних виробників для будь-яких потреб.
            </p>
          </div>
        </li>
        <li className="flex-1">
          <div className="bg-orn2 p-8 md:p-4 h-full">
            <div className="flex flex-row items-start gap-2 md:flex-col ">
              <MessageIcon />
              <h2 className="mb-4 font-semibold text-wht text-xl md:text-base">
                Професійна підтримка
              </h2>
            </div>
            <p className="font-normal text-base text-wht-70 md:text-xs">
              Наші фахівці завжди готові надати професійні консультації та
              допомогти з вибором оптимальних рішень для ваших проектів.
            </p>
          </div>
        </li>
        <li className="flex-1">
          <div className="bg-orn2 p-8 rounded-b-[32px] md:p-4 md:rounded-none md:rounded-r-[32px] h-full">
            <div className="flex flex-row gap-2 items-start md:flex-col ">
              <HeartIcon />
              <h2 className="mb-4 font-semibold text-wht text-xl md:text-base">
                Індивідуальний підхід
              </h2>
            </div>
            <p className="font-normal text-base text-wht-70 md:text-xs">
              Ми цінуємо кожного клієнта та пропонуємо індивідуальні рішення.
            </p>
          </div>
        </li>
      </ul>

      <div className="relative z-10 rounded-b-[32px] bg-wht">
        <p className="font-semibold text-base uppercase tracking-small text-orn2 mb-6 font-inter">
          про нас
        </p>
        <h2 className="mb-12 font-bold text-4xl tracking-small text-grd leading-[125%] font-inter">
          Інструменти для ваших найсміливіших ідей
        </h2>
        <div className="relative flex flex-row items-start gap-4">
          <div className=" absolute top-0 w-[3px] h-24 rounded-[60px] bg-orn2"></div>
          <ul className="flex flex-col gap-4 pb-12 pl-[43px] pr-10 font-inter font-normal text-sm leading-[150%] text-grl">
            <li>
              <p>
                Будівельник – ваш надійний партнер у будівництві з акцентом на
                якісні інструменти. Ми пропонуємо найкращі будівельні
                інструменти, матеріали та засоби для професіоналів і аматорів.
              </p>
            </li>
            <li>
              <p>
                Завдяки індивідуальному підходу до кожного клієнта, ви завжди
                знайдете саме те, що потрібно. Будуйте з нами – будуйте з
                впевненістю!
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center -translate-y-6 relative z-0 min-w-[309px] min-h-[300px] rounded-[32px] bg-[#eaeaea]">
        <button className=" translate-x-0 bottom-12 flex justify-center items-center w-24 h-24 mx-auto">
          <span className="animate-ping absolute  h-full w-full rounded-full bg-orn2-100 opacity-75"></span>
          <span className=" flex relative justify-center items-center rounded-[100px] w-24 h-24 bg-orn2-100">
            <PlayIcon />
          </span>
        </button>
      </div>
    </section>
  );
}
