import ArrowRight40 from '../../assets/ArrowRight40';

export default function PingButton() {
  return (
    <div className="absolute w-[364px] top-[315px] flex items-center gap-6 lg:left-0 -translate-x-[300px] lg:top-[438px]">
      <p className="font-inter text-base text-grd font-semibold lg:top-[114px] lg:left-32 ">
        Переглянути каталог
      </p>
      <div className="w-12 h-[3px] bg-[#d9d9d9] rounded-[60px]"></div>
      <button className="relative flex justify-center items-center w-20 h-20">
        <span className="animate-ping absolute h-full w-full rounded-full bg-orn2-100 opacity-75"></span>
        <span className="flex relative justify-center items-center rounded-[100px] w-20 h-20 bg-orn2-100 md:justify-center ">
          <ArrowRight40 />
        </span>
      </button>
    </div>
  );
}
