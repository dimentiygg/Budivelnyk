import ProductList from './ProductsList';

export default function Products() {
  return (
    <section className="relative  sm:-translate-y-[45px] pb-[35px] font-inter md:pl-10 md:max-w-none ">
      <div className="absolute bg-blbg h-[1337px] w-full z-[-1]  md:h-[792px]  lg:h-[948px]"></div>
      <div className=" pt-[90px]  md:pl-6 md:pr-16 md:pt-[96px] lg:px-0 lg:pl-24 lg:pr-[176px] lg:pt-[171px]">
        <div className="md:flex mb-16 md:mb-12 lg:justify-around  lg:gap-20 lg:mx-auto lg:mb-16">
          <div className="lg:flex lg:flex-col gap-[30px]">
            <h2 className="mb-6 font-semibold text-base tracking-small uppercase text-orn2 md:mb-0 lg:text-lg lg:mb-[0px]">
              Продукція
            </h2>
            <p className="w-[328px] mb-12 font-bold text-4xl leading-[125%] text-wht lg:text-[48px] lg:w-[554px]">
              Широка добірка товарів
            </p>
          </div>
          <ul className="flex flex-col gap-6 font-normal text-sm leading-[150%] text-wht-80 md:mt-[36px] lg:w-[440px] lg:text-base lg:mt-[66px] ">
            <li>
              <p>
                У нашому асортименті ви знайдете все необхідне для вашого
                будівельного проекту. Ми пропонуємо широкий вибір інструментів,
                обладнання, будівельних матеріалів та засобів, які відповідають
                найвищим стандартам якості. Наші категорії товарів охоплюють всі
                потреби будівельників – від професіоналів до аматорів.
              </p>
            </li>
            <li>
              <p>
                Ознайомтесь з нашими ключовими категоріями товарів та оберіть
                те, що вам потрібно для реалізації ваших проектів. Ми гарантуємо
                надійність і довговічність нашої продукції.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 md:top-[435px] md:left-16 md:right-16 md:gap-5 lg:max-w-[1088px] lg:mx-auto">
          <ProductList />
        </div>
      </div>
    </section>
  );
}
