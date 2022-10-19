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
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  h4 {
    ${tw`text-xl font-bold mt-4`}
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
            <h1>SwarmHack '22 <br /></h1>
              <p>
                Budding roboticists will be absolutely thrilled to hear SwarmHack '22 is on
                schedule for June 13 - 15th! The teleoperation hackathon will be hosted
                on-site at the following universities: York, Sheffield and Manchester. All
                three are renowned for their swarm robotics research, notably producing
                Pi-puck extension boards and MONA robotics platforms for education.
              </p>
              <p>
                Participants will control these pint-sized experimental two-wheelers as part
                of a team. The key challenges to be explored and final prizes for the best
                solutions are as yet classified (wooohh!)
              </p>
              <p>
                Besides the competition, there will be expert panel sessions live-streamed
                throughout the day. The three-day event will therefore provide unmissable
                networking opportunities with fellow electronics nerds into the bargain.<br />
              </p>
              <p>
                Not affiliated with either of those institutions? No worries! It's open to all
                student enthusiasts and early-career researchers. What's more, external
                applicants may receive travel bursaries. So go on - head over to their
                computer science departmental advertisement boards to secure your place
                today!<br />
              </p>

          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
