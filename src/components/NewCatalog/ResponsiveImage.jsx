const ResponsiveImage = () => {
  return (
    <picture>
      {/* 
        <source
          media="(min-width: 1440px)"
          srcSet=""
          type="image/png"
        /> 
      */}
      <source
        media="(min-width: 834px)"
        srcSet="
          ./img/others/desktop/interior.png    1x,
          ./img/others/desktop/interior@2x.png 2x
        "
        type="image/png"
      />
      <source
        media="(max-width: 833px)"
        srcSet="
          ../../../public/images/mobile/new_catalog_image.jpg 1x,
          ../../../public/images/mobile/new_catalog_image@2x.jpg 2x
        "
        type="image/png"
      />
      <img
        className="mb-6 h-[286px] w-full object-cover "
        alt="comfortable sofa"
        src="../../../public/images/mobile/new_catalog_image.jpg"
      />
    </picture>
  );
};

export default ResponsiveImage;
