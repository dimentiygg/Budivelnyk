import PlayIcon from '../../assets/PlayIcon';
import AboutUsList from './AboutUsList';

export default function AboutUs() {
  return (
    <section className="container max-w-none md:pb-[46px] lg:flex lg:justify-around  lg:p-0">
      <div className="relative lg:mx-auto lg:w-[1280px] lg:px-24  ">
      <AboutUsList />
        <div className="lg:order-1 lg:mt-[112px]">
          <div className="relative z-10 rounded-b-[32px] bg-wht md:w-[513px] md:ml-6 lg:pb-[80px] lg:pr-10 lg:w-[534px] lg:ml-0 z-[51]">
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
                    Будівельник – ваш надійний партнер у будівництві з акцентом
                    на якісні інструменти. Ми пропонуємо найкращі будівельні
                    інструменти, матеріали та засоби для професіоналів і
                    аматорів.
                  </p>
                </li>
                <li>
                  <p>
                    Завдяки індивідуальному підходу до кожного клієнта, ви
                    завжди знайдете саме те, що потрібно. Будуйте з нами –
                    будуйте з впевненістю!
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <p className="absolute top-[159px] left-4 font-inter text-base text-grd font-semibold lg:top-[114px] lg:left-32 ">
              Промо ролик
            </p>
            <div className="absolute top-[169px] left-[157px] w-12 h-[3px] rounded-[60px] bg-[#d9d9d9] lg:top-[124px] lg:left-[261px] md:relative"></div>
            <div className="flex justify-center items-center -translate-y-6 relative z-0 min-w-[309px] min-h-[300px] rounded-[32px] bg-[#eaeaea] md:min-w-[489px] md:min-h-[360px] md:ml-[265px] md:-translate-y-[63px] lg:w-[591px]  lg:-translate-y-[108px] lg:ml-[369px] z-50">
              <button className=" translate-x-0 bottom-12 flex justify-center items-center w-20 h-20 mx-auto md:absolute md:bottom-[88px] md:-left-[33px]  lg:bottom-[88px]">
                <span className="animate-ping absolute  h-full w-full rounded-full bg-orn2-100 opacity-75"></span>
                <span className=" flex relative justify-center items-center rounded-[100px] w-20 h-20 bg-orn2-100">
                  <PlayIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
