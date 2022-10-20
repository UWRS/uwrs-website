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


export default ({ headingText = "UK-RAS Network Events For Everyone To Enjoy" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
          <time>May 06, 2022</time>
            <h1>What Is Robotics and Autonomous Systems?</h1>
            <p>
                Popular culture may cite cyborg Terminators and astromech R2-D2 droids.
                In reality? Any smart, ubiquitous and / or wearable device with autonomous
                capability falls under this umbrella.
              <br/>
              <br/>
                And the UK is indeed gearing towards making the above commercially viable
                in a nationalistic effort. In doing so, our country is hoping to improve
                and lead manufacturing, medicine and transport sectors.
              <br/>
              <br/>
                It’s definitely a long way away. But the economic pay-off of reduced labour,
                time and production costs is enormous. Back in 2012, the UK Government
                identified RAS as one of the 8GT (Eight Great Technologies). In fact, the
                virtually limitless growth opportunities in this global market point to a
                whopping £13 billion valuation by 2025.
              <br/>
              <br/>
                <a href="https://www.ukras.org.uk/">UK-RAS Network</a> is therefore paving the way to “play a significant role to
                improved international competitiveness, productivity and economic growth” in
                the adoption of RAS.
            </p>

            <h1>UK-RAS Network Festivities</h1>
            <p>
                With the aim to cultivate “core academic capabilities in robotics innovation
                under national coordination”, UK-RAS Network organises many student-friendly
                events.
              <br/>
              <br/>
                Audited members frequently post promotions on their dedicated Twitter
                feed too, so do check out external event / job postings!
            </p>
            
            <h2>EVENT:  Robot Lab Live</h2>
            <p>
                <b>Youtube Streaming:</b>  22nd June
              <br/>
                Launched in 2021, this virtual showcase marked the first ever mass simultaneous
                robotics event. Now, the two-hour livestream is back with some of the most
                innovative robotics research centres.
              <br/>
              <br/>
                Those who’ve seen the viral video of "R2-D-Chew" frying omelettes
                will be excited to learn its creators are participating. I definitely can’t wait
                to feast upon cutting-edge demos from twelve unique autonomous systems groups!
              <br/>
              <br/>
                You can check out last year’s trail-blazing highlights via their channel below:
              <br/>
              <br/>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/u29cOSmC-yc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>

            <h2>EVENT:  UK Festival of Robotics (formerly UK Robotics Week)</h2>
            <p>
                <b>During:</b>  18th – 24th June
              <br/>
                This 7-day celebration of aims to engage the public with AI and automation
                through hybrid settings. Organisers are currently calling for more workshops
                to help raise the profile of next-gen roboticists.
              <br/>
              <br/>
                Are you interested in: teleoperation, augmented reality, online games and
                performing arts? Then check out this growing list of entertainment planned
                for June.
              <br/>
              <br/>
            </p>

            <h2>AWARD:  UK-RAS Network Awards</h2>
            <p>
                <b>Deadline:</b>  16th May
              <br/>
                UK-RAS is seeking nominations for exceptional individuals and groups to be recognised
                in its second annual ceremony.
              <br/>
              <br/>
                Up to four awards will recognise excellence in the UK Robotics and Autonomous Systems community:
              <br/>
                <ul>
                  <li>UK-RAS Rising Star Award</li>
                  <li>UK-RAS Early Career Award</li>
                  <li>UK-RAS Community Award</li>
                  <li>UK-RAS Impact Award</li>
                </ul>
            </p>

            <h2>PODCAST:  Robot Talk</h2>
            <p>
                <b>Drop Rate:</b>  Intermittent (up to once per month)
              <br/>
                From soft robotics to <a href="/blog/swarms1">automated manufacturing</a>, this bite-sized series is a
                truly excellent way of gaining a holistic understanding of robotics.
              <br/>
              <br/>
                Join science communicator and robot enthusiast Dr Claire Asher each month as she
                chats with scientists from across the UK to find out how their
                "cutting-edge research is influencing the future of every aspect of science,
                technology, and engineering, from the mundane to the extraordinary."
              <br/>
              <br/>
            <iframe title="Libsyn Player" src="//html5-player.libsyn.com/embed/episode/id/15841340/height/250/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/87A93A/" height="250" width="100%" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
            </p>

          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
