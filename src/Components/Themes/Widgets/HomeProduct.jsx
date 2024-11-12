import NoDataFound from "@/Components/Widgets/NoDataFound";
import ProductBox from "@/Components/Widgets/ProductBox";
import ProductIdsContext from "@/Context/ProductIdsContext";
import request from "@/Utils/AxiosUtils";
import { ProductAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useMemo } from "react";
import Slider from "react-slick";
import { Row } from "reactstrap";

const HomeProduct = ({
  type,
  style,
  slider = false,
  productIds,
  product_box_style,
  classForVertical,
  sliderOptions,
  rowClass,
}) => {
  const { filteredProduct } = useContext(ProductIdsContext);
  const router = useRouter();

  // Check if productIds is defined and not empty
  const {
    data: products,
    refetch,
    fetchStatus,
    isLoading,
  } = useQuery(
    ["NewProds", productIds], // Include productIds in the query key
    () =>
      request(
        { url: ProductAPI, params: { ids: productIds?.join(","), status: 1 } },
        router
      ),
    {
      enabled: !!productIds?.length, // Only fetch if productIds has values
      refetchOnWindowFocus: false,
      select: (res) => res?.data?.data,
    }
  );

  const sliderSettingMain = sliderOptions && sliderOptions(productIds?.length);

  useEffect(() => {
    refetch();
  }, [productIds]);

  // useEffect(() => {
  //   console.log(products);
  // }, [products]);

  return (
    <>
      {style === "vertical" ? (
        slider ? (
          <div className={`product-4 ${classForVertical || ""}`}>
            {products?.length ? (
              <Slider {...sliderSettingMain}>
                {products?.map((product, index) => (
                  <div key={index}>
                    <div className={classForVertical}>
                      <ProductBox product={product} style={style} />
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <NoDataFound title="NoProductFound" customClass="no-data-added" />
            )}
          </div>
        ) : (
          <>
            <Row
              className={
                rowClass
                  ? rowClass
                  : "row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3 m-0"
              }>
              {products?.map((product, index) => (
                <div key={index} className={classForVertical}>
                  <ProductBox product={product} style={style} />
                </div>
              ))}
            </Row>
            {products?.length === 0 && (
              <NoDataFound title="NoProductFound" customClass="no-data-added" />
            )}
          </>
        )
      ) : null}
    </>
  );
};

export default HomeProduct;