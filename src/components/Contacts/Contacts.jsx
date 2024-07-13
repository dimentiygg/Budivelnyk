import House from '../../assets/House';
import ContactsForm from './ContatcsForm';

export default function Contacts() {
  const largerScreen = window.innerWidth >= 834;
  return (
    <section className="sm:pt-12 relative font-inter bg-orn2 lg:pb-[58px]">
      <div className="absolute w-full h-full top-0 overflow-hidden">
        {largerScreen && (
          <House className="absolute top-[20px] right-[135px] rotate-[21deg]" />
        )}
      </div>
      <div className="lg:mx-auto lg:w-[1280px] md:mx-16 lg:px-24 md:flex md:justify-around md:gap-6 md:pt-0 md:pb-[0px] lg:justify-between lg:-translate-y-16 ">
        <div className="sm:px-4 order-2 md:mr-16 md:p-0 md:mt-[178px] md:h-[268px]  lg:w-[455px]">
          <div className="  flex flex-col md:mb-[43px] lg:mb-[62px]">
            <h2 className="mb-6 font-semibold text-base tracking-small uppercase text-wht-80 lg:text-lg md:w-fit md:mb-0 lg:mb-[20px] ">
              контакти
            </h2>
            <p className="mb-12 font-bold text-4xl leading-[125%] text-wht md:text-[40px] md:w-[224px] lg:text-[48px] md:mb-0  lg:w-[304px]">
              Зв'яжіться з нами
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-[3px] h-24 rounded-[60px] bg-wht-80"></div>
            <p className=" mb-16 ml-[43px] md:text-sm md:leading-[150%] text-wht-80 c lg:text-base md:w-full">
              Ми завжди раді допомогти вам! Якщо у вас виникли питання щодо
              нашої продукції, послуг- заповніть форму зворотного зв'язку, і ми
              зв'яжемося з вами у найкоротші терміни.
            </p>
          </div>
        </div>
        <ContactsForm />
      </div>
    </section>
  );
}
