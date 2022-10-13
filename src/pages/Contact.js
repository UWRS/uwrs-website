import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/headerpurple.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/SimpleFiveColumn.js";

const GoogleForm = () => {
  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSe6-fXkktkffBoAq21lS1Vv-Fnp7xJkBp7NsevYk_1ql4BbfA/viewform?embedded=true"
      title="UWRS Contact Form"
      width="640"
      height="1795"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  )
}

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <GoogleForm />
      <Footer />
    </AnimationRevealPage>
  );
};
