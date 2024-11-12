"use client";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext } from "react";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import AboutUsImage from "./AboutUsImage";
import AboutUsText from "./AboutUsText";
import ClientSection from "./ClientSection";
import CreativeTeam from "./CreativeTeam";
import ServiceSection from "./ServicesSection";
import Loader from "@/Layout/Loader";

const AboutUsContent = () => {
  const { isLoading } = useContext(ThemeOptionContext);
  if (isLoading) return <Loader />;
  return (
    <>
      <Breadcrumbs title={"AboutUs"} subNavigation={[{ name: "AboutUs" }]} />
      <WrapperComponent
        classes={{
          sectionClass: "about-page section-b-space ",
          fluidClass: "container",
        }}
        noRowCol={true}>
        <AboutUsImage />
        <AboutUsText />
      </WrapperComponent>
      <ClientSection />
      <CreativeTeam />
      <ServiceSection />
    </>
  );
};

export default AboutUsContent;
