import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

// import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

// import props from "images/customer-support-illustration.svg";
import BackgroundImage from "images/warwickfab.png";

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/headerwhite.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-teal-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;


const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${BackgroundImage => tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-128`}
  background-image: url("${BackgroundImage}");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-50`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Heading2 = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-primary-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;


export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg", bg = "https://www.design-warwick.com/dal/wp-content/uploads/2021/12/fab.png" }) => {
  const navLinks = [
    <NavLinks key={1}>
    <NavLink href="/about">About</NavLink>
      <NavLink href="/404">Blog</NavLink>
      <NavLink href="/404">Events + Projects</NavLink>
      <NavLink href="/sponsor">Sponsorship</NavLink>
      <NavLink href="/404" tw="lg:ml-32!">Wiki</NavLink>
      <PrimaryLink css={roundedHeaderButton && tw`rounded-full`}href="https://linktr.ee/uwrs">
        Follow Us
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container >
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
              University of
              <br />
              Warwick
          <Heading2>
              Robotics
          </Heading2>
              Society
          </Heading>
        </Content>
      </HeroContainer>
    </Container>
  );
};
