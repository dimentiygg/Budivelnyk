const ResponsiveImage = () => {
  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet="
          ./../../public/images/desktop/new_catalog_desktop_image.jpg 1x,
          ./../../public/images/desktop/new_catalog_desktop_image@2x.jpg 2x"
        type="image/png"
      />
      <source
        media="(min-width: 834px)"
        srcSet="
          ./../../public/images/tablet/new_catalog_tablet_image.jpg 1x,
          ./../../public/images/tablet/new_catalog_tablet_image@2x.jpg 2x
        "
        type="image/png"
      />
      <source
        media="(max-width: 833px)"
        srcSet="
          ./../../public/images/mobile/new_catalog_image.jpg 1x,
          ./../../public/images/mobile/new_catalog_image@2x.jpg 2x
        "
        type="image/png"
      />
      <img
        className="object-cover mb-6 h-[286px] w-full md:absolute md:top-[0px] md:left-[554px] md:h-[475px] md:rounded-tl-[32px] md:rounded-bl-[32px] md:mb-0 md:w-[-webkit-fill-available] lg:top-[0px] lg:left-[833px] lg:h-[598px] "
        alt="Worker"
        src="./../../public/images/mobile/new_catalog_image.jpg"
      />
    </picture>
  );
};

export default ResponsiveImage;
