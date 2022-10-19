import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";

import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import MainFeature1 from "components/hero/TwoColumnWithVideo.js";
import NewsLetter from "components/forms/SimpleSubscribeNewsletter.js";
// import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

import { components } from "ComponentRenderer.js";


export default ({
features = null,
  primaryButtonUrl = "#landingPageDemos",
  primaryButtonText = "Explore Demos",
  secondaryButtonUrl = "#componentDemos",
  secondaryButtonText = "View Components",
  buttonRoundedCss = "",
  landingPages = components.landingPages,
  innerPages = components.innerPages,
  blocks = components.blocks,
  heading = "UWRS' Warwick Robotics Society",
  description = "Officially renamed University of Warwick Robotics Society (UWRS) in Spring 2022, we are a thriving community of hardware hobbyists and electronics enthusiasts!"}) => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature2 />
    <Portfolio />
    <MainFeature1 />
    <NewsLetter />
    <Footer />
  </AnimationRevealPage>
);
