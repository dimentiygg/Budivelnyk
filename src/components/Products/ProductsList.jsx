import { ListData } from './ListData';
import ProductsListItem from './ProductsListItem';

export default function ProductList() {
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row  md:gap-5 lg:gap-6">
        <ul className="flex flex-1 flex-col gap-4 md:gap-5 lg:gap-6">
          {ListData.map(({ id, title, text, big }) => {
            if (id <= 2) {
              return (
                <li
                  className={`relative overflow-hidden h-[159px] px-6 pt-8 border-2 border-solid border-wht-20 rounded-[24px] bg-orn2 md:h-[180px] md:px-8 md:pt-10 md:rounded-[16px] lg:pt-[56px] lg:px-12
            ${big ? 'md:h-[220px] ' : ''} 
            ${id == 1 ? 'md:rounded-tl-[40px] ' : ''}
           
          `}
                  key={id}
                >
                  <ProductsListItem title={title} text={text} />
                </li>
              );
            }
            return null;
          })}
        </ul>
        <ul className="flex flex-1 flex-col gap-4 md:gap-5 lg:gap-6">
          {ListData.map(({ id, title, text, big }) => {
            if (id >= 3 && id < 5) {
              return (
                <li
                  className={`relative overflow-hidden h-[159px] px-6 pt-8 border-2 border-solid border-wht-20 rounded-[24px] bg-orn2 md:h-[180px] md:px-8 md:pt-10 md:rounded-[16px] lg:pt-[56px] lg:px-12 
            ${big ? 'md:h-[220px] ' : ''} 
            ${id == 3 ? 'md:rounded-tr-[40px]' : ''} 
          `}
                  key={id}
                >
                  <ProductsListItem title={title} text={text} />
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 md:flex-row">
        <ul className="flex flex-1 flex-col gap-4 md:gap-5 lg:gap-6">
          {ListData.map(({ id, title, text, big }) => {
            if (id > 4 && id < 7) {
              return (
                <li
                  className={`relative overflow-hidden h-[159px] px-6 pt-8 border-2 border-solid border-wht-20 rounded-[24px] bg-orn2 md:h-[180px] md:px-8 md:pt-10 md:rounded-[16px] lg:pt-[56px] lg:px-12
            ${big ? 'md:h-[220px] ' : ''} 
            ${id == 6 ? 'md:rounded-bl-[40px]' : ''} 
          `}
                  key={id}
                >
                  <ProductsListItem title={title} text={text} />
                </li>
              );
            }
            return null;
          })}
        </ul>
        <ul className="flex flex-1 flex-col gap-4 md:gap-5 lg:gap-6">
          {ListData.map(({ id, title, text, big }) => {
            if (id > 6) {
              return (
                <li
                  className={`relative overflow-hidden h-[159px] px-6 pt-8 border-2 border-solid border-wht-20 rounded-[24px] bg-orn2 md:h-[180px] md:px-8 md:pt-10 md:rounded-[16px] lg:pt-[56px] lg:px-12 
            ${big ? 'md:h-[220px] ' : ''} 
            ${id == 8 ? 'md:rounded-br-[40px]' : ''} 
          `}
                  key={id}
                >
                  <ProductsListItem title={title} text={text} />
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </>
  );
}
