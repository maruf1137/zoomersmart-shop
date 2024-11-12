import React from "react";
import ImageLink from "@/Components/Widgets/ImageLink";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import { ImagePath } from "@/Utils/Constants";

const banner = {
  status: true,
  image_url: "/assets/images/theme/fashion_one/fashion_one_5.png",
  redirect_link: {
    link: 19,
    link_type: "product",
    product_ids: 19,
  },
};

const FullBanner = () => {
  return (
    <div>
      {banner?.status && (
        <WrapperComponent
          classes={{ sectionClass: "p-0 banner-sale overflow-hidden" }}
          noRowCol={true}>
          <ImageLink
            imgUrl={banner}
            placeholder={`${ImagePath}/full_column_banner.png`}
            height={587}
            width={1905}
          />
        </WrapperComponent>
      )}
    </div>
  );
};

export default FullBanner;
