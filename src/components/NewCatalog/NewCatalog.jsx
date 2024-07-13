import PingButton from './PingButton';
import ResponsiveImage from './ResponsiveImage';

export default function NewCatalog() {
  const largerScreen = window.innerWidth >= 834;
  return (
    <section className="relative pt-[20px] pb-12 font-inter md:pb-0 md:mb-24 md:h-[475px] lg:h-[598px] lg:mb-[144px]  lg:pt-[48px]">
      <div className="sm:px-4 lg:mx-auto lg:w-[1280px] lg:px-24 ">
        <div className="mb-6 h-[286px] w-full md:absolute md:top-[0px] md:left-[554px] md:h-[475px]  md:mb-0 md:w-[-webkit-fill-available] lg:top-[0px] lg:left-[53vw] lg:h-[598px] order-2">
          <ResponsiveImage />
          {largerScreen ? <PingButton /> : ''}
        </div>
        <div className=" max-w-none md:w-[474px] md:ml-6 order-1 lg:p-0 ">
          <h2 className="mb-6 font-semibold text-base tracking-small uppercase text-orn2 lg:text-lg">
            новинки
          </h2>
          <p className="mb-12 font-bold text-4xl leading-[125%] text-grd md:text-[40px] md:w-[451px] lg:text-[48px]">
            Ознайомся з оновленим каталогом
          </p>
          <div className="relative">
            <div className="absolute w-[3px] h-24 rounded-[60px] bg-orn2"></div>
            <p className="ml-[43px] text-grl md:text-sm md:leading-[150%] md:w-[431px] lg:text-base lg:w-[440px]">
              Відкрийте для себе останні новинки в нашому каталозі – інноваційні
              продукти, які допоможуть вам досягти кращих результатів.
              Перегляньте нові надходження та оберіть те, що підходить саме вам.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
