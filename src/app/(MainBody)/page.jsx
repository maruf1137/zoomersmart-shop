"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import { ImagePath } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect } from "react";
import { Container, Row } from "reactstrap";
import HomeBlog from "@/Components/Themes/Widgets/HomeBlog";
import HomeBrand from "@/Components/Themes/Widgets/HomeBrand";
import HomeProductTab from "@/Components/Themes/Widgets/HomeProductTab";
import HomeProduct from "@/Components/Themes/Widgets/HomeProduct";
import HomeServices from "@/Components/Themes/Widgets/HomeService";
import HomeSlider from "@/Components/Themes/Widgets/HomeSlider";
import HomeSocialMedia from "@/Components/Themes/Widgets/HomeSocialMedia";
import HomeTitle from "@/Components/Themes/Widgets/HomeTitle";
import Hero from "@/Components/Pages/home/hero";
import OfferBanners from "@/Components/Pages/home/offerBanners";
import FullBanner from "@/Components/Pages/home/fullBanner";
import Services from "@/Components/Pages/home/services";
import {
  brandsData,
  socialData,
  spacialProduct,
} from "@/Components/mockData/home";

const Home = () => {
  const { data, isLoading, refetch, fetchStatus } = useCustomDataQuery({
    params: "fashion_one",
  });
  const { setGetProductIds, isRefetching: productLoad } =
    useContext(ProductIdsContext);
  // const { setGetBrandIds, isLoading: brandLoading } =
  //   useContext(BrandIdsContext);
  // const { setGetBlogIds, isLoading: blogLoading } = useContext(BlogIdsContext);

  useEffect(() => {
    if (data?.products_ids?.length > 0) {
      setGetProductIds({
        ids: Array.from(new Set(data?.products_ids))?.join(","),
      });
    }
    // if (data?.brands?.brand_ids?.length > 0) {
    //   setGetBrandIds({
    //     ids: Array.from(new Set(data?.brands?.brand_ids))?.join(","),
    //   });
    // }
  }, [data]);

  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  // useEffect(() => {
  //   console.log(data?.products_list);
  // }, [data]);

  useSkeletonLoader2([productLoad]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Banner */}
      <Hero />

      {/* Offer Banners */}
      <OfferBanners />

      {/* Products Slider */}
      {spacialProduct?.status && (
        <>
          <HomeTitle title={spacialProduct} type="basic" />
          <WrapperComponent
            classes={{
              sectionClass: "section-b-space pt-0",
              fluidClass: "container",
            }}>
            <div className="product-4 no-arrow">
              <HomeProduct
                slider={true}
                style="vertical"
                productIds={spacialProduct?.product_ids || []}
                sliderOptions={horizontalProductSlider}
              />
            </div>
          </WrapperComponent>
        </>
      )}

      {/* Full Banner */}
      <FullBanner />

      {/* Product Categories */}
      {data?.category_product?.status && (
        <>
          <HomeTitle title={data?.category_product} type="basic" />
          <WrapperComponent
            classes={{
              sectionClass: "section-b-space category-tab-section pt-0",
              fluidClass: "container",
            }}>
            <HomeProductTab
              categoryIds={data?.category_product?.category_ids}
              style="vertical"
            />
          </WrapperComponent>
        </>
      )}

      {/* Services */}
      <Services />

      {/* Social Media */}
      {socialData?.status && (
        <section className="instagram ratio_square overflow-hidden">
          <HomeSocialMedia
            media={socialData || []}
            classes="container-fluid"
            type="borderless"
          />
        </section>
      )}

      {/* Brands */}
      {brandsData?.status && (
        <section className="section-b-space">
          <HomeBrand brandIds={brandsData?.brand_ids || []} />
        </section>
      )}
    </>
  );
};

export default Home;
