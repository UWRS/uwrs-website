import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/headerpurple.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileTeam.js";
import FAQ from "components/faqs/SingleCol.js";
// import Contact from "pages/Contact.js";
import CTA from "components/cta/GetStartedLight.js";


import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
// import AboutUsImage from "images/unibotsuk/unibots1.jpg";
import AboutUsImage from "images/unibots1.jpg";


const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>UWRS := UWRS' Warwick's Robotics Society</Subheading>}
        heading="Who we are"
        buttonRounded={false}
        primaryButtonText="Follow Us"
        imageSrc={AboutUsImage}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="Enabling Robotics For All Enthusiasts"
        // description="Placeholder text."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Community Support",
            description: "Hands-on experience for all members through dedicated support channels"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Diverse project exposure by attracting multidisciplinary talent"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Member Satisfaction",
            description: "Roboticists aren't themselves robots - we actively adhere to peer feedback"
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <FAQ />
      <CTA />
      <Footer />
    </AnimationRevealPage>
  );
};
