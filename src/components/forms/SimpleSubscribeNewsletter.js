import React from "react";
import tw from "twin.macro";
import {ReactComponent as EmailNewsletterIconBase } from "../../images/email-newsletter-icon.svg"
import {Container as ContainerBase } from "components/misc/Layouts.js"
import {SectionHeading} from "components/misc/Headings.js";
// import {PrimaryButton} from "components/misc/Buttons.js";


const Container = tw(ContainerBase)`bg-primary-700 -mx-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-row px-8`
const TextColumn = tw.div`flex items-center flex-col sm:flex-row`
// const FormColumn = tw.div`mt-12 lg:mt-0 lg:ml-16 w-full sm:w-auto`

const EmailNewsletterIcon = tw(EmailNewsletterIconBase)`w-16 h-16 text-green-500`
const HeadingInfoContainer = tw.div`sm:ml-6 mt-6 sm:mt-0`
const Heading = tw(SectionHeading)`text-gray-100 sm:text-left leading-none`
const Description = tw.p`text-gray-500 font-medium text-sm max-w-sm mt-2 sm:mt-1 text-center sm:text-left`

const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const PrimaryLink = tw(Link)`shadow text-gray-100 hocus:text-gray-300 bg-green-500 hocus:bg-green-700`;
const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`
const LinksContainer = tw(ColumnContainer)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;


export default ({
  primaryLinkText = "Subscribe Now",
  primaryLinkUrl = "/contact",
}) => {
  return (
    <Container>
      <Content>
        <Row>
          <TextColumn>
            <EmailNewsletterIcon />
            <HeadingInfoContainer>
              <Heading>Newsletter</Heading>
              <Description>Subscribe now to get our latest updates.</Description>
            </HeadingInfoContainer>
          </TextColumn>

        <LinksContainer>
            <PrimaryLink href={primaryLinkUrl}>{primaryLinkText}</PrimaryLink>
        </LinksContainer>
        </Row>
      </Content>
    </Container>
  );
};
