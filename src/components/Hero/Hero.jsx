import ArrowRight from '../../assets/ArrowRight';
import AboutUsList from '../AboutUs/AboutUsList';
export default function Hero() {
  return (
    <section className="block bg-hero-bg-m md:bg-hero-bg-t lg:bg-hero-bg-d retina:bg-hero-bg-m2x md:retina:bg-hero-bg-t2x lg:retina:bg-hero-bg-d2x min-w-[344px] min-h-[563px] md:min-w-[834px] md:min-h-[600px] lg:min-w-[1440px]bg-no-repeat bg-cover lg:pl-0">
      <div className="lg:mx-auto lg:w-[1280px] lg:px-24  pt-[229px] mx-4 md:pt-[259px] md:mx-16">
        <h1 className="mb-6 md:mb-8 lg:mb-10 font-extrabold text-5xl text-wht font-inter uppercase max-w-[631px] md:text-[64px] ">
          будуємо завтра сьогодні
        </h1>
        <button className="flex justify-center gap-2.5 items-center w-[198px]  h-14 bg-orn rounded-2xl text-xl text-wht font-bold fontinter ">
          <span className="h-8">До каталогу</span>
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
