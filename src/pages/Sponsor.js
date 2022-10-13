import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/headerpurple.js";
import Sponsors from "components/cards/ProfileSponsor.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import CTA from "components/cta/GetStarted.js"
import Footer from "components/footers/SimpleFiveColumn.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Sponsors />
      <Pricing />
      <CTA />
      <Footer/>
    </AnimationRevealPage>
  );
};
