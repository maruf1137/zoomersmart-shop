import React from "react";
import HomeSlider from "@/Components/Themes/Widgets/HomeSlider";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";

const bannerData = {
  banners: [
    {
      status: true,
      image_url: "/assets/images/theme/fashion_one/fashion_one_9.png",
      redirect_link: {
        link: "fashion",
        link_type: "collection",
      },
    },
    {
      status: true,
      image_url: "/assets/images/theme/fashion_one/fashion_one_2.png",
      redirect_link: {
        link: "fashion",
        link_type: "collection",
      },
    },
  ],
};

const Hero = () => {
  return (
    <WrapperComponent
      classes={{
        sectionClass: "p-0 overflow-hidden position-relative",
        fluidClass: "slide-1 home-slider",
      }}>
      <HomeSlider bannerData={bannerData} height={650} width={1920} />
    </WrapperComponent>
  );
};

export default Hero;
