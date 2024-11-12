import React from "react";
import { Row } from "reactstrap";
import ImageLink from "@/Components/Widgets/ImageLink";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import { ImagePath } from "@/Utils/Constants";

const OfferBannerData = {
  banner_1: {
    status: true,
    image_url: "/assets/images/theme/fashion_one/fashion_one_8.png",
    redirect_link: {
      link: "fashion",
      link_type: "collection",
    },
  },
  banner_2: {
    status: true,
    image_url: "/assets/images/theme/fashion_one/fashion_one_7.png",
    redirect_link: {
      link: "fashion",
      link_type: "collection",
    },
  },
};

const OfferBanners = () => {
  return (
    <WrapperComponent
      classes={{
        sectionClass: "pb-0 ratio2_1 banner-section",
        fluidClass: "container",
      }}>
      <Row className="g-sm-4 g-3">
        {OfferBannerData?.banner_1?.status && (
          <div
            className={OfferBannerData?.banner_1?.status ? "col-6" : "col-12"}>
            <div className="position-relative">
              <ImageLink
                imgUrl={OfferBannerData?.banner_1}
                placeholder={`${ImagePath}/two_column_banner.png`}
                height={338}
                width={676}
              />
              <div className="banner-skeleton">
                <div className="skeleton-content">
                  <p className="card-text placeholder-glow row g-lg-3 g-0">
                    <span className="col-lg-7 col-9">
                      <span className="placeholder"></span>
                    </span>
                    <span className="col-lg-9 col-12">
                      <span className="placeholder"></span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {OfferBannerData?.banner_2?.status && (
          <div
            className={OfferBannerData?.banner_2?.status ? "col-6" : "col-12"}>
            <div className="position-relative">
              <ImageLink
                imgUrl={OfferBannerData?.banner_2}
                placeholder={`${ImagePath}/two_column_banner.png`}
                height={338}
                width={676}
              />
              <div className="banner-skeleton">
                <div className="skeleton-content">
                  <p className="card-text placeholder-glow row g-lg-3 g-0">
                    <span className="col-lg-7 col-9">
                      <span className="placeholder"></span>
                    </span>
                    <span className="col-lg-9 col-12">
                      <span className="placeholder"></span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Row>
    </WrapperComponent>
  );
};

export default OfferBanners;
