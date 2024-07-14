import { Element } from 'react-scroll';
import House from '../../assets/House';
import ContactsForm from './ContatcsForm';

export default function Contacts() {
  const largerScreen = window.innerWidth >= 834;
  return (
    <section className="sm:pt-12 sm:pb-[131px] font-inter bg-orn2 md:pt-0 md:pb-8 lg:pb-[64px] lg:pt-0 ">
      <div className="sm:flex flex-col md:block relative lg:max-w-[1280px] lg:mx-auto">
        <ContactsForm />
        <div className="overflow-hidden flex flex-col md:flex-row md:gap-6 lg:mx-auto lg:w-[1280px] md:px-16 lg:px-24 md:pt-0 md:pb-[0px] md:-translate-y-0 lg:justify-between ">
          <div className="flex md:gap-6 lg:gap-[100px] md:translate-y-[178px] lg:translate-y-[128px]">
            {largerScreen && (
              <div className="w-[363px] min-w-[363px] h-[522px] lg:w-[535px] lg:min-w-[535px] "></div>
            )}
            <div className="relative lg:w-[455px] sm:px-4 order-2 md:mr-16 md:p-0  md:h-[268px] ">
              <div className="flex flex-col md:mb-[43px] lg:mb-[62px]">
                <Element name="contacts">
                  <p className="mb-6 font-semibold text-base tracking-small uppercase text-wht-80 lg:text-lg md:w-fit md:mb-0 lg:mb-[10px] ">
                    контакти
                  </p>
                </Element>

                <h2 className="mb-12 font-bold text-4xl leading-[125%] text-wht md:text-[40px] md:w-[224px] lg:text-[48px] md:mb-0  lg:w-[304px]">
                  Зв'яжіться з нами
                </h2>
              </div>

              <div className="absolute w-[3px] h-24 rounded-[60px] bg-wht-80"></div>
              <p className=" mb-16 ml-[43px] md:text-sm md:leading-[150%] text-wht-80 c lg:text-base md:w-full lg:min-w-[440px]">
                Ми завжди раді допомогти вам! Якщо у вас виникли питання щодо
                нашої продукції, послуг- заповніть форму зворотного зв'язку, і
                ми зв'яжемося з вами у найкоротші терміни.
              </p>
              {largerScreen && <House />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
