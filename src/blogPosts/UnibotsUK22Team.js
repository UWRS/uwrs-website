import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/headerpurple.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import { SectionHeading } from "components/misc/Headings";

import Image1 from "images/uwrsXwaiUnibots.png";


const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-primary-700 mb-10`;

/*
  Text font sizes:
  - text-xs > 0.75rem
  - text-sm > 0.875rem
  - text-lg > 1.125rem
  - text-xl > 1.25rem
  - text-end > text-end
*/
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


export default ({ headingText = "Recruiting Computer Visionists For Unibots UK 22" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
          <time>Feb 19, 2022</time>
            <h1>UWRS⠀X⠀WAI</h1>
            <p>
            <img src={Image1} alt="UWRSxWAI Unibots collab" width="800" height="800" />
              <br/>
                We are partnering with Warwick AI to fine-tune our autonomy.
              <br/>
              <br/>
                Join our team to compete in the first-ever student-led robotics competition
                featuring 8+ leading universities across the UK.
            </p>

            <h2>Desired Skillset</h2>
            <p>
                Prospecting engineers should ideally be familiar with the following stack:
              <br/>
              <br/>
                <ul>
                  <li>OpenCV</li>
                  <li>PyBullet</li>
                  <li>ROS</li>
                  <li>BeagleBone Blue</li>
                  <li>Arduino</li>
                </ul>
            </p>

            <h2>Competition Details</h2>
            <p>
                <ul>
                  <li><b>Date: </b>Mar 26th</li>
                  <li><b>Location: </b>St John's College, Cambridge</li>
                </ul>
            </p>

            <h2>Meet-Up Details</h2>
            <p>
                <ul>
                  <li><b>Schedule: </b>4-6pm, every Wed. & Sat.</li>
                  <li><b>Location: </b>
                    <a href="https://warwick.ac.uk/services/sg/spa/centraltimetabling/roominformation/centrallytimetabledrooms/capacity/h002">
                      H0.02, Humanities Building
                    </a>
                    ;⠀Remote work available
                  </li>
                </ul>
              <br/>
              <br/>
            </p>

          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
