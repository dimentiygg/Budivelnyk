export default function ProductsListItem({ title, text }) {
  return (
    <>
      <h4 className="font-bold text-xl uppercase text-wht">{title}</h4>
      <p className="font-semibold text-base text-wht-60">{text}</p>
      <div className="absolute top-[33px] -right-[39px] w-[200px] h-[200px] bg-wht-20 rounded-full"></div>
    </>
  );
}
