import House from '../../assets/House';
import ContactsForm from './ContatcsForm';

export default function Contacts() {
  const largerScreen = window.innerWidth >= 834;
  return (
    <section className="pt-12 pb-[131px] font-inter bg-orn2 md:flex md:justify-around md:gap-6 md:pt-0 md:pb-[0px] ">
      <div className="order-2 md:w-[319px] md:mr-16 md:p-0 md:mt-[178px] md:h-[268px]">
        <div className="  flex flex-col  md:mb-[43px]">
          <h2 className="mb-6 font-semibold text-base tracking-small uppercase text-wht-80 lg:text-lg md:w-fit md:mb-0 ">
            контакти
          </h2>
          <p className="mb-12 font-bold text-4xl leading-[125%] text-wht md:text-[40px] md:w-[224px] lg:text-[48px] md:mb-0">
            Зв'яжіться з нами
          </p>
        </div>

        <div className="relative md:w-[319px]">
          <div className="absolute w-[3px] h-24 rounded-[60px] bg-wht-80"></div>
          <p className=" mb-16 ml-[43px] md:text-sm md:leading-[150%] text-wht-80 c lg:text-base lg:w-[440px]">
            Ми завжди раді допомогти вам! Якщо у вас виникли питання щодо нашої
            продукції, послуг- заповніть форму зворотного зв'язку, і ми
            зв'яжемося з вами у найкоротші терміни.
          </p>
        </div>
        {/* {largerScreen && (
          <House className="absolute top-[20px] right-[135px] rotate-[21deg]" />
        )} */}
      </div>
      <ContactsForm />
    </section>
  );
}
