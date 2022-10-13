import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Meet These Fine Folks.",
  subheading = "Our Team",
  description = "Committee members are carefully vetted through interview on a rolling basis.",
  cards = [
    {
      imageSrc: "https://www.thestudentpocketguide.com/wp-content/uploads/minseok-ryu-SPG.png",
      position: "President",
      name: "Minseok Ryu",
      links: [
        {
          url: "https://www.linkedin.com/in/minseok-ryu-7651a41a5/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/euteryu",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4D03AQEdyUCecVqScg/profile-displayphoto-shrink_400_400/0/1594499325231?e=1671062400&v=beta&t=LicWxaN14efdCMD_ZxTwMforOG4ranl5C0xHJJp9D9w",
      position: "Treasurer",
      name: "Joshua Fitzmaurice",
      links: [
        {
          url: "https://www.linkedin.com/in/nathan-telford-1b2681220/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/jfitz02",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4E03AQEWw4TzYI1Gsg/profile-displayphoto-shrink_400_400/0/1632049559116?e=1671062400&v=beta&t=Y01mf4temIj85SATWLheTyjrgHMvdbAPmQI6N8ZvHbg",
      position: "Secretary",
      name: "Nathan Telford",
      links: [
        {
          url: "https://www.linkedin.com/in/nathan-telford-1b2681220/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg",
      position: "Social Officer",
      name: "Yoel Kastro-Morlevi",
      links: [
        {
          url: "https://github.com/yoelkastro",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg",
      position: "Sr. Developer",
      name: "Robert Bush",
      links: [
        {
          url: "https://github.com/Rob14234t3456",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4E03AQGltx_9SF56KA/profile-displayphoto-shrink_400_400/0/1617114486283?e=1671062400&v=beta&t=wvJWrYvB0t-taBktS1jQ4q0AFhUx0dmkUKWQHDJTvnY",
      position: "Sr. Engineer",
      name: "Natasha Galpayage-Dona",
      links: [
        {
          url: "https://www.linkedin.com/in/natasha-galpayage-dona-a6c3/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4E03AQHauCZ3ZEIKXA/profile-displayphoto-shrink_400_400/0/1646160097798?e=1671062400&v=beta&t=kh7vRpzG4ZXGqxow3kVc1n2NlV_-SjsE3xxwUEmhIpo",
      position: "Sr. Designer",
      name: "Theo Weeden",
      links: [
        {
          url: "https://www.linkedin.com/in/theo-weeden/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/theoweeden",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg",
      position: "Sr. Advisor",
      name: "Vishal Dhayalan",
      links: [
        {
          url: "https://www.linkedin.com/in/vishal-dhayalan/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4D03AQGMO7inQV4yeA/profile-displayphoto-shrink_400_400/0/1647654492069?e=1671062400&v=beta&t=dGP_HWqamfaYaWVwlhL_hMZVCMAd9AYikSR9xLT-asc",
      position: "Sr. Advisor",
      name: "Akram Ahmad",
      links: [
        {
          url: "https://www.linkedin.com/in/akram-ahmad-8b2013162/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/arkamnite",
          icon: GithubIcon,
        },
      ],
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
