import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";

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
  heading = "Sponsorship",
  subheading = "Our Partners",
  description = "We work closely with our partners on innovative projects",
  cards = [
    {
      imageSrc: "https://event.edie.net/awards/wp-content/uploads/sites/38/2021/09/university-of-warwick-logo.png",
      position: "University of Warwick",
      links: [
      ],
    },
    {
      imageSrc: "https://warwick.ai/static/logo2.png",
      position: "Warwick AI",
      links: [
      ],
    },
    {
      imageSrc: "data:image/png;base64,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",
      position: "embed",
      links: [
      ],
    },
    {
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4D0BAQH5nm29LS0L_w/company-logo_200_200/0/1618292233558?e=2147483647&v=beta&t=DqJ1Aje8OAq_CCRxmmvHGEHGDbz636wZwdqQIrcOr5Q",
      position: "Neural Foundry",
      links: [
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
