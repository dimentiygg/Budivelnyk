export default function AboutUsBgChanger({ elementId }) {
  let bg = 'bg-hero-bg-m retina:bg-hero-bg-m2x';

  if (elementId === 1) {
    bg =
      'bg-hero-bg-m retina:bg-hero-bg-m2x md:bg-hero-bg-t md:retina:bg-hero-bg-t2x lg:bg-hero-bg-d lg:retina:bg-hero-bg-d2x';
  } else if (elementId === 2) {
    bg = 'bg-orn';
  } else if (elementId === 3) {
    bg = 'bg-grd';
  } else {
    bg = 'bg-grl';
  }

  return (
    <div
      className={`absolute w-full h-[563px] bg-cover md:h-[600px] ${bg}`}
    ></div>
  );
}
