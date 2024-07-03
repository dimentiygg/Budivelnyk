import PlayIcon from '../../assets/PlayIcon';
import MedalIcon from '../../assets/MedalIcon';
import BagIcon from '../../assets/BagIcon';
import MessageIcon from '../../assets/MessageIcon';
import HeartIcon from '../../assets/HeartIcon';

export default function AboutUs() {
  const largerScreen = window.innerWidth >= 834;
  return (
    <section className="container max-w-none relative">
      <ul className="flex flex-col mb-12 mx-auto w-min-[312px] font-inter -translate-y-4 shadow-abt rounded-[32px] md:flex-row lg:flex-col lg:w-[360px] lg: lg:-translate-y-[400px] lg:mb-0 lg:mr-24 ">
        <li className="flex-1">
          <div className="bg-wht p-8 rounded-t-[32px] md:p-4 md:rounded-none md:rounded-l-[32px]  lg:px-12 lg:py-10 lg:rounded-t-[32px] lg:rounded-bl-[0px] h-full">
            <div className="flex flex-row gap-2 items-start md:flex-col lg:flex-row ">
              <MedalIcon />
              <h2 className="mb-4 font-semibold text-grd text-xl md:text-base lg:text-xl">
                Висока якість та надійність
              </h2>
            </div>
            <p className="font-normal text-base text-grl md:text-xs lg:text-base">
              Ми обираємо тільки найкращі матеріали та інструменти, які
              відповідають найвищим стандартам якості.
            </p>
          </div>
        </li>
        <li className="flex-1">
          <div className="bg-orn2 p-8 md:p-4  lg:px-12 lg:py-10 h-full">
            <div className="flex flex-row gap-2 items-start md:flex-col lg:flex-row  ">
              <BagIcon />
              <h2 className="mb-4 font-semibold text-wht text-xl md:text-base lg:text-xl lg:w-36">
                Широкий асортимент
              </h2>
            </div>
            <p className="font-normal text-base text-wht-70 md:text-xs lg:text-base">
              Пропонуємо товари від провідних виробників для будь-яких потреб.
            </p>
          </div>
        </li>
        <li className="flex-1">
          <div className="bg-orn2 p-8 md:p-4  lg:px-12 lg:py-10 h-full">
            <div className="flex flex-row items-start gap-2 md:flex-col lg:flex-row ">
              <MessageIcon />
              <h2 className="mb-4 font-semibold text-wht text-xl md:text-base lg:text-xl">
                Професійна підтримка
              </h2>
            </div>
            <p className="font-normal text-base text-wht-70 md:text-xs lg:text-base">
              Наші фахівці завжди готові надати професійні консультації та
              допомогти з вибором оптимальних рішень для ваших проектів.
            </p>
          </div>
        </li>
        <li className="flex-1">
          <div className="bg-orn2 p-8 rounded-b-[32px] md:p-4 md:rounded-none md:rounded-r-[32px] lg:px-12 lg:py-10 lg:rounded-r-[0px] lg:rounded-b-[32px] lg:rounded-br-[32px] h-full">
            <div className="flex flex-row gap-2 items-start md:flex-col lg:flex-row">
              <HeartIcon />
              <h2 className="mb-4 font-semibold text-wht text-xl md:text-base lg:text-xl">
                Індивідуальний підхід
              </h2>
            </div>
            <p className="font-normal text-base text-wht-70 md:text-xs lg:text-base">
              Ми цінуємо кожного клієнта та пропонуємо індивідуальні рішення.
            </p>
          </div>
        </li>
      </ul>

      <div className="lg:absolute lg:top-[112px] lg:ml-24 ">
        <div className="relative z-10 rounded-b-[32px] bg-wht md:w-[513px] md:ml-6 lg:pb-[80px] lg:pr-10 lg:w-[534px] lg:ml-0">
          <p className="font-semibold text-base uppercase tracking-small text-orn2 mb-6 font-inter lg:text-lg lg:mb-[30px]">
            про нас
          </p>
          <h2 className="mb-12 font-bold text-4xl tracking-small text-grd leading-[125%] font-inter md:text-[40px] lg:text-[48px] lg:mb-20 lg:tracking-[0px] ">
            Інструменти
            <span className="block">для ваших</span>
            найсміливіших ідей
          </h2>
          <div className="  relative flex flex-row items-start gap-4 ">
            <div className=" absolute top-0 w-[3px] h-24 rounded-[60px] bg-orn2"></div>
            <ul className="flex flex-col gap-4 mb-12 pl-[43px] pr-10 font-inter font-normal text-sm leading-[150%] text-grl lg:text-base lg:mb-0 lg:pr-[0px]">
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
        <div className="relative">
          <p className="absolute top-[159px] left-4 font-inter text-base text-grd font-semibold lg:top-[114px] lg:left-32 ">
            Промо ролик
          </p>
          <div className="absolute top-[169px] left-[157px] w-12 h-[3px] rounded-[60px] bg-[#d9d9d9] lg:top-[124px]  lg:left-[261px] "></div>
          <div className="flex justify-center items-center -translate-y-6 relative z-0 min-w-[309px] min-h-[300px] rounded-[32px] bg-[#eaeaea] md:min-w-[489px] md:min-h-[360px] md:ml-[265px] md:-translate-y-[63px] lg:w-[591px]  lg:-translate-y-[108px] lg:ml-[369px]">
            <button className=" translate-x-0 bottom-12 flex justify-center items-center w-20 h-20 mx-auto md:absolute md:bottom-[88px] md:-left-[33px]  lg:bottom-[88px]">
              <span className="animate-ping absolute  h-full w-full rounded-full bg-orn2-100 opacity-75"></span>
              <span className=" flex relative justify-center items-center rounded-[100px] w-20 h-20 bg-orn2-100">
                <PlayIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
