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
    ${tw`text-3xl font-bold mt-10 m-24`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8 m-24`}
  }
  h3 {
    ${tw`text-xl font-bold mt-8 m-24`}
  }
  h4 {
    ${tw`text-lg font-bold mt-8 m-24`}
  }
  h5 {
    ${tw`text-sm font-bold mt-6 m-24`}
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
export default ({ headingText = "Robotic Swarm Applications: Part II" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>

          <Text>
            <h1>Heya! Welcome Back 👋</h1>
              <p>
                  This page marks the second of many articles surrounding the wonderful world of
                  swarms, reflecting the author's long-standing interests in this fascinating field.
                <br/>
                <br/>
                  The following content aims to broadly present specific case studies that neatly
                  exemplify overarching subtopics within swarm robotics. 
              </p>

            <h1>Exploring Medical Applications</h1>
              <p>
                  From in-body health monitoring to magnetic slimes, nanotech can seem as terrifying
                  as it is useful inside our bodies.
                <br/>
                <br/>
                  In then near future, nanotech robots will become our ultra-healing companions.
                  For instance, doctors can use MRI technology to finely control these magnetically
                  charged swarms to unclog arteries of fatty deposits. And diagnostic swarms can freely
                  float around our bloodstream, looking for premature signs of cancer nodes.
                <br/>
                <br/>
                  This is truly revolutionary science because targeted delivery is much more effective
                  and safer than intense carpet bombing solutions in use today, such as chemotherapy.
                  Moreover, bespectacled folks will undoubtedly be pleased to harness ultra twenty vision
                  thanks to macroscopic plates of photosensitive swarms!
              </p>

              <h2>APPLICATION: In-Body Object Retrieval</h2>
              <p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/uxYJiXhT7Rc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br/>
                <br/>
                  Ever slapped a bowl of custard? Well, you shouldn’t play with food. Anyways,
                  this gooey substance shares custard’s non-Newtonian properties. Essentially,
                  depending on how fast you deform its shape, it either flows like liquid or behaves
                  like a stretchy solid.
              </p>
              <h3>SLIME BOFFINS</h3>
              <p>
                  Researchers at Chinese University of Hong Kong are developing these elastic slimes
                  for medical purposes. These can be vitally important in providing “ideal solutions
                  for minimally invasive surgery, micromanipulation, and targeted drug delivery”.
                <br/>
                <br/>
                  By use of circular magnetic fields inducing a a grasping motion, another key
                  application includes object retrieval in hard-to-reach spaces. For instance, to
                  safely reclaim accidentally swallowed batteries from one’s digestive tract. I’m
                  sure I’m not the only one who was tempted to so as a child!
                <br/>
                <br/>
                  “To avoid toxic electrolytes leak[ing] out, we can maybe use this kind of slime
                  robot to do an encapsulation, to form some kind of inert coating,” said Professor
                  Li Zhang who co-created the slime.
              </p>
              <h3>CONCERNS</h3>
              <p>
                  Unfortunately, the particles making up the slime themselves are extremely toxic!
                  Further research is therefore necessary to safely coat them with protective layers.
                  Ideally without compromising their amazing ability to reform even after splitting apart.
              </p>

              <br/>

              <h2>APPLICATION: Treating Neurological Disorders</h2>
              <p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/2mIqg_ROp78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br/>
                <br/>
                  DARPA (Defense Advanced Research Projects Agency) is heavily funding nanotech innovations.
                  Among their publicised programmes is ElectRx (Electrical Prescriptions) which comprises
                  “minimally invasive insertion procedures such as injectable delivery through a needle”.
                  Which sounds just as disconcerting, but perhaps only due to the mention of needle.
              </p>
              <h3>SELECTIVE THERAPY VIA MAGNETIC FIELDS</h3>
              <p>
                  One of seven ElectRx projects include MIT’s magnetothermal
                  – meaning heating effect of magnetic field – 
                  multiplexing nanoparticle research.
                <br/>
                <br/>
                  “We can selectively heat up one type of particle without heating another type. Even
                  though they are both being exposed to the same field,” explained Michael Christiansen,
                  then a PhD candidate, to MIT News in 2014. “This is powerful because it offers a non-invasive
                  way to independently trigger separate processes initiated by particle heating. Whether
                  it is neuromodulation, drug release, or some other desired therapeutic action”.
                <br/>
                <br/>
                  Led by Polina Anikeeva, Professor of Brain & Cognitive Sciences, the team is currently
                  seeking solutions that “alleviates parkinsonian-like symptoms in mice”. Eventually,
                  they aim to identify and treat “patients suffering from psychiatric and neurological
                  disorders (…) [through] deep brain stimulation (DBS)”.
              </p>
              <h3>COMPARING AGAINST TRADITIONAL SOLUTIONS</h3>
              <p>
                  Their latest paper noted the traditional “application of DBS to modulate neural circuits is,
                  however, hampered by its mechanical invasiveness and the use of chronically implanted leads”.
                  This inevitably “poses a risk for hardware failure, hemorrhage, and infection”.
                <br/>
                <br/>
                  Nanotech swarms, instead, offer safer alternative therapies via magnetothermal DBS (mDBS)
                  through the peripheral nervous system connecting our body and brain.
              </p>

              <br/>
              <br/>

              <h1>Isn't Nanotech Inherently Dangerous?</h1>
              <p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/-beO7ErVG64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  Scaremongers are bound to hound upon the hypothetical global catastrophe that will be “grey goo”.
                <br/>
                <br/>
                  Molecular nanotech pinoeer Eric Drexler first raised this issue through a thought experiment in his
                  1986 book ‘Engines of Abundance’: “Imagine (…) the first replicator assembles a copy in one thousand
                  seconds, the two replicators then build two more (…) In less than a day, they would weigh a ton;
                  in less than two days, they would outweigh the Earth”.
                <br/>
                <br/>
                  Our wildest imagination tells us this is a truly terrifying possibility. Yet a glimpse into the
                  benefits described above are equally terrific, if not life-changing for most of us.
              </p>

              <br/>

              <h1>Near future plans</h1>
                <p>
                  Other notable research directions include programmed drug distribution at specified pH and hormonal
                  levels. Such methodologies can also enable swarms to stop internal bleeding and repair potentially
                  fatal punctures. Or even restart our hearts post-cardiac arrest!
                <br/>
                <br/>
                  As our understanding of our body and brain deepens, the medical applications of swarms are inching
                  closer to reality. We should at the very least bake in ethical impact assessments from the outset to
                  avoid getting smothered by a “grey goo” dystopia.
                </p>

                <br/>
                <p>
                  <i>[ Stay tuned for more overviews of robotic swarms! ]</i>
                </p>

          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
