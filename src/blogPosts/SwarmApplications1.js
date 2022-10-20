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

export default ({ headingText = "Robotic Swarm Applications: Part I" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>

          <Text>
          <time>Mar 31, 2022</time>
            <h1>Welcome To Our Swarm Series 👋</h1>
              <p>
                  This page marks the first of many articles surrounding the wonderful world of
                  swarms, reflecting the author's long-standing interests in this fascinating field.
                <br/>
                <br/>
                  The following content aims to broadly present specific case studies that neatly
                  exemplify overarching subtopics within swarm robotics. 
              </p>

            <h1>So... What Is Swarm Robotics?</h1>
              <p>
                  Swarm robotics deals with the coordination
                  of multiple, usually small and simple robots treated as a single system.
                <br/>
                <br/>
                  Essentially, it's the study of emergent behaviour from collective
                  interactions. Just like bees and ants. In fact, exactly like bees and ants,
                  and any organism typically engaging as a hive mind - minus the stings and bites.
                  Hopefully...
              </p>

              <h3>But how is this different to distributed systems in general?</h3>
              <p>
                  Firstly,
                  particular emphasis is placed on larger numbers of robots that can smoothly
                  scale to the hundreds and thousands. And perhaps the most distinguishing
                  factor of all is the swarms' method of communication - locally achieved via
                  radio or infrared.
                  No GPS required at all!
                <br />
                <br />
                  It's admittedly an over-simplified answer. Typically, academic interests
                  revolve around identifying optimally weighted algorithms that give rise to
                  globally emergent behaviour from local rules.
                <br />
                <br />
                  Here's a rather visually mesmerising demonstration:
                <br/>
                <br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/i3ernrkZ91E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </p>

              <br/>

              <h2>APPLICATION: Swarm Manufacturing<br /></h2>
              <p>
                  We've heard of 3D printing. How about swarm 3D printing?
                  Imagine a bunch of mobile robots riced with specially-configured wheels making
                  use of the super omnidirectional Mecanum design.
                  Each miniature robot, equipped with various tool heads, can autonomously drive
                  (or fly!) across the factory floor.
                <br/>
                <br/>
                  In 2019, manufacturing company AMBOTS released the first end-to-end proof-of-concept swarm
                  manufacturing platform. Their latest video showcases a hexagonal design equally divided and
                  distributed in smaller chunks amongst guided arms.
                <br/>
                <br/>
                  Harnessing this power of swarm robotics facilitates practically infinite
                  printing of components in parallel. Hence, emerging start-ups like AMBOTS are
                  slowly on their way towards commercialising this flexible, limitless dream for
                  assemblists!
                <br/>
                <br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xMMauLmHcwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </p>

              <br/>

              <h2>APPLICATION: Search & Rescue<br /></h2>
              <p>
                  Unmanned as they may be, drones can go places human rescuers cannot - at least
                  not within reasonable time. And time is especially critical in search
                  operations say, for instance, in the dense canopies around NASA's Langley Research Center.
                <br/>
                <br/>
                  Back in 2018, a research team at MIT unveiled a “no-GPS” autonomous drone fleet system.
                  After extensive computer simulations, they tested two physical drones at NASA’s Virginia
                  base for good measure.
                <br/>
                <br/>
                  It's perhaps worth noting those drones are a long way away from deployment;
                  the team is currently working on object recognition training to identify
                  distressed hikers.
                <br/>
                <br/>
                  The primary test was nonetheless successful: to collaboratively map out roughly 20-square-metres
                  in less than 5 minutes. In effect, each drone recognised tree clusters, using machine-learning to
                  quickly recognise if the other had already captured a sub-forest. Then their SLAM feeds were
                  wirelessly transmitted to a ground station via laser-range sensors. Finally, at ground-level,
                  operators were able to monitor each drone’s 3D terrain map which eventually merged to forge
                  global coverage. All done on-board in real-time in-flight to boot!
                <br/>
                <br/>
                  Most importantly, the fleet implemented simultaneous localisation technology – markedly removing
                  the need for GPS positioning. Wireless transmission is the key enabling alternative here.
                <br/>
                <br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2hRNx_0SWGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </p>

                <br/>
                <p>
                  <i>[ Stay tuned for more - soon to cover sentient
                    liquid slimeballs and ingestible nanobot swarms! ]</i>
                </p>

          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
