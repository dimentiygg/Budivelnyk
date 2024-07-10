import PingButton from './PingButton';
import ResponsiveImage from './ResponsiveImage';

export default function NewCatalog() {
  const largerScreen = window.innerWidth >= 834;
  return (
    <section className="relative pt-[20px] pb-12 font-inter md:flex md:flex-row md:justify-between md:pb-0 md:mb-24 md:h-[475px] lg:h-[598px] lg:mb-[144px]  lg:pt-[48px]">
      <div className="order-2">
        <ResponsiveImage />
        {largerScreen ? <PingButton /> : ''}
      </div>
      <div className="container max-w-none md:w-[474px] md:ml-6 order-1 lg:p-0 lg:ml-[176px]">
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
            продукти, які допоможуть вам досягти кращих результатів. Перегляньте
            нові надходження та оберіть те, що підходить саме вам.
          </p>
        </div>
      </div>
    </section>
  );
}
