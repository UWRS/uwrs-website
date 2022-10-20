import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/headerpurple.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";

// Background images for blog posts
import BackgroundImageSwarmApplications2 from "images/nanobots.jpg";
import BackgroundImageSwarmApplications1 from "images/birdSwarm.jpg";
import BackgroundImageUnderwaterComm from "images/underwaterComm.jpg";
import BackgroundImageSwarmHack22 from "images/swarmhack22.jpg";
import BackgroundImageUKRAS from "images/ukras.png";
import BackgroundImageUnibotsUK22 from "images/unibotsuk22CV.png";



const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
  headingText = "Blog Posts",
  posts = [
    researchUnderwaterComm(),
    researchSwarmApplications2(),
    eventUKRAS(),
    competitionSwarmHackSignUp(),
    researchSwarmApplications1(),
    competitionUnibotsUKSignUp()
  ]
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && <Description>{post.description}</Description>}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};


// Blog posts listed in reverse-chronological order:

const researchUnderwaterComm = () => ({
  imageSrc: BackgroundImageUnderwaterComm,
  category: "Research",
  date: "Aug 26, 2022",
  title: "Underwater Communication Techniques",
  description:
    "Exploring various methods of communication between landside and underwater devices.",
  url: "/blog/underwatercomm",
  featured: true
});

const researchSwarmApplications2 = () => ({
  imageSrc: BackgroundImageSwarmApplications2,
  category: "Research",
  date: "Jul 05, 2022",
  title: "Real World Swarm Applications: Part II",
  description:
    "Overview of novel, useful and creative applications of robotic swarms grounded (or flown!) in the real world.",
  url: "/blog/swarms2",
  featured: false
});

const eventUKRAS = () => ({
  imageSrc: BackgroundImageUKRAS,
  category: "Event",
  date: "May 06, 2022",
  title: "EPSRC UK-RAS Network Events For Everyone",
  description:
    "Exciting events coming up on EPSRC UK-Robotics and Autonomous Systems Network homepage!",
  url: "/blog/ukras",
  featured: false
});

const competitionSwarmHackSignUp = () => ({
  imageSrc: BackgroundImageSwarmHack22,
  category: "Competition",
  date: "Apr 30, 2022",
  title: "SwarmHack '22 Poppin' This June",
  description:
    "Recruiting UWRS roboticists for SwarmHack entry.",
  url: "/blog/swarmhack22"
});

const researchSwarmApplications1 = () => ({
  imageSrc: BackgroundImageSwarmApplications1,
  category: "Research",
  date: "Mar 31, 2022",
  title: "Real World Swarm Applications: Part I",
  description:
    "Overview of novel, useful and creative applications of robotic swarms grounded (or flown!) in the real world.",
  url: "/blog/swarms1",
  featured: false
});

const competitionUnibotsUKSignUp = () => ({
  imageSrc: BackgroundImageUnibotsUK22,
  category: "Competition",
  date: "Feb 19, 2022",
  title: "Unibots UK - UWRS x WAI Sign Up",
  description:
    "We are looking for 2 computer vision specialists to join our competition team!",
  url: "/blog/unibotsuk22team"
});
