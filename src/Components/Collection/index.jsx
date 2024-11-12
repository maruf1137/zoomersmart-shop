"use client";
import CategoryContext from "@/Context/CategoryContext";
import Loader from "@/Layout/Loader";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useCustomSearchParams } from "@/Utils/Hooks/useCustomSearchParams";
import { useContext, useEffect, useState } from "react";
import CollectionLeftSidebar from "./CollectionLeftSidebar";

const CollectionContain = () => {
  const [filter, setFilter] = useState({
    category: [],
    brand: [],
    price: [],
    attribute: [],
    rating: [],
    sortBy: "asc",
    field: "created_at",
  });
  const [
    category,
    brand,
    attribute,
    price,
    rating,
    sortBy,
    field,
    layout,
    paginate,
  ] = useCustomSearchParams([
    "category",
    "brand",
    "attribute",
    "price",
    "rating",
    "sortBy",
    "field",
    "layout",
    "paginate",
  ]);

  const { categoryIsLoading } = useContext(CategoryContext);

  useEffect(() => {
    setFilter((prev) => {
      return {
        ...prev,
        paginate: paginate?.paginate ? paginate?.paginate : 12,
        category: category ? category?.category?.split(",") : [],
        brand: brand ? brand?.brand?.split(",") : [],
        attribute: attribute ? attribute?.attribute?.split(",") : [],
        price: price ? price?.price?.split(",") : [],
        rating: rating ? rating?.rating?.split(",") : [],
        sortBy: sortBy ? sortBy?.sortBy : "asc",
        field: field ? field?.field : "created_at",
      };
    });
  }, [category, brand, attribute, price, rating, sortBy, field, paginate]);

  return (
    <>
      {categoryIsLoading ? (
        <Loader />
      ) : (
        <>
          <Breadcrumbs
            title={"Collections"}
            subNavigation={[{ name: "Collections" }]}
          />
          <CollectionLeftSidebar filter={filter} setFilter={setFilter} />
        </>
      )}
    </>
  );
};

export default CollectionContain;
