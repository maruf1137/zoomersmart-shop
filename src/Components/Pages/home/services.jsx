import React from "react";
import HomeServices from "@/Components/Themes/Widgets/HomeService";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import { Container } from "reactstrap";

const servicesData = {
  banners: [
    {
      title: "free shipping",
      status: true,
      image_url: "/assets/images/theme/fashion_one/service1.png",
      description: "free shipping world wide",
    },
    {
      title: "24 X 7 service",
      status: true,
      image_url: "/assets/images/theme/fashion_one/service2.png",
      description: "online service for new customer",
    },
    {
      title: "festival offer",
      status: true,
      image_url: "/assets/images/theme/fashion_one/service3.png",
      description: "new online special festival offer",
    },
  ],
};

const Services = () => {
  return (
    <Container>
      <WrapperComponent
        classes={{ sectionClass: "service border-section small-section" }}
        noRowCol={true}>
        <HomeServices services={servicesData?.banners || []} />
      </WrapperComponent>
    </Container>
  );
};

export default Services;
