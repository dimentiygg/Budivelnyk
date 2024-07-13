const ResponsiveImage = () => {
  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet="
          /images/desktop/new_catalog_desktop_image.jpg 1x,
          /images/desktop/new_catalog_desktop_image@2x.jpg 2x"
        type="image/png"
      />
      <source
        media="(min-width: 834px)"
        srcSet="
          /images/tablet/new_catalog_tablet_image.jpg 1x,
          /images/tablet/new_catalog_tablet_image@2x.jpg 2x
        "
        type="image/png"
      />
      <source
        media="(max-width: 833px)"
        srcSet="
          /images/mobile/new_catalog_image.jpg 1x,
          /images/mobile/new_catalog_image@2x.jpg 2x
        "
        type="image/png"
      />
      <img
        className="object-cover w-full h-full md:rounded-tl-[32px] md:rounded-bl-[32px]"
        alt="Worker"
        src="/images/mobile/new_catalog_image.jpg"
      />
    </picture>
  );
};

export default ResponsiveImage;
