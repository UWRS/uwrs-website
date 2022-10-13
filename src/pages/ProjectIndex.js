import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/headerblue.js";
import Footer from "components/footers/SimpleFiveColumn.js";
// import MainFeature1 from "components/hero/TwoColumnWithVideo.js";

// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import ProjectGrid from "components/cards/TabCardGrid.js";
import CTA from "components/cta/Proposal.js";


// import SupportIconImage from "images/support-icon.svg";
// import ShieldIconImage from "images/shield-icon.svg";
// import CustomerLoveIconImage from "images/simple-icon.svg";
// // import AboutUsImage from "images/unibotsuk/unibots1.jpg";
// import AboutUsImage from "images/unibots1.jpg";


// const Subheading = tw.span`uppercase tracking-wider text-sm`;


export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ProjectGrid />
      <CTA />
      <Footer />
    </AnimationRevealPage>
  );
};
