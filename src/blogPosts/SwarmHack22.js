import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/headerpurple.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-primary-700 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose m-24`}
  }
  h1 {
    ${tw`text-3xl text-primary-600 font-bold mt-10 m-24`}
  }
  h2 {
    ${tw`text-2xl text-primary-400 font-bold mt-8 m-24`}
  }
  h3 {
    ${tw`text-xl text-primary-400 font-bold mt-8 m-24`}
  }
  h4 {
    ${tw`text-lg text-primary-300 font-bold mt-8 m-24`}
  }
  h5 {
    ${tw`text-sm text-primary-300 font-bold mt-6 m-24`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
  a {
    ${tw`text-primary-300`}
  }
  time {
    ${tw`text-end text-primary-700 font-thin`}
  }
`;

export default ({ headingText = "SwarmHack '22 Poppin' This June" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <time>Apr 30, 2022</time>
            <h1>3-Day Hackathon</h1>
              <p>
                Budding roboticists will be absolutely thrilled to hear SwarmHack '22 is on
                schedule for June 13 - 15th! The teleoperation hackathon will be hosted
                on-site at the following universities: York, Manchester and Sheffield.
              <br/>
              <br/>
                All
                three are renowned for their robotics research - notably producing
                Pi-puck extension boards and MONA platforms for education, not to mention
                the magnificent Advanced Manufacturing Research Centre Factory 2050,
                respectively.
              </p>
            <h1>Event Overview</h1>
              <p>
                Participants will remotely control pint-sized experimental two-wheelers as part
                of a team. The key challenges to be explored and final prizes for the best
                solutions are as yet classified (wooohh!)
              <br/>
              <br/>
                Besides the competition, there will be expert panel sessions live-streamed
                throughout the day. The three-day event will therefore provide unmissable
                networking opportunities with fellow electronics nerds!
              </p>
            <h1>Sign Up Now</h1>
              <p>
                Not affiliated with either of those institutions? No worries! It's open to all
                student enthusiasts and early-career researchers. What's more, external
                applicants (that's us !!) may receive accomdation and<b>/</b>or travel bursaries.
              <br/>
              <br/>
                So go on - head over to their <a href="https://www.cs.york.ac.uk/news-events/events/2022/swarm-hack-2022/">
                  computer science departmental advertisement boards </a>
                to secure your place today!
              </p>

          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
