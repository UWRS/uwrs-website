import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/UWRS_logo/uwrs-logo-colour.svg";
import { ReactComponent as DiscordIcon } from "../../images/discord-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";


const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;


const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-32`;
const LogoText = tw.h5`ml-2 text-lg font-black text-primary-500`;

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-8 lg:my--1
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-8 border-transparent hover:border-primary-500 hocus:text-primary-500
`;
export const Home = <LogoText>University of Warwick Robotics Society</LogoText>;


// const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;
const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;


const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;



export default (primaryButtonUrl = "https://linktr.ee/uwrs") => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <NavLink href="/">{Home}</NavLink>
          </LogoContainer>
          <CompanyAddress>
              School of Engineering, University of Warwick
              Coventry
              CV4 7AL, United Kingdom
          </CompanyAddress>
          <SocialLinksContainer>
            <SocialLink href="https://www.linkedin.com/company/79147219/admin/">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="https://discord.com/invite/hq2HWpZAQD">
              <DiscordIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/uwrs_robotics/">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCCscF0MFm4ezqTd8IM-m0iQ">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Quick Links</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/404">Blog</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/404">Editorial</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/sponsor">Sponsorship</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>&#8205;</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/about">About Us</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="https://linktr.ee/uwrs">Linktree</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
    </Container>
  );
};
