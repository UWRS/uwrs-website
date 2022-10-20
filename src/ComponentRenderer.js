import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"

import BlogSwarmHack22 from "blogPosts/SwarmHack22.js";
import BlogSwarmApplications1 from "blogPosts/SwarmApplications1.js";
import BlogSwarmApplications2 from "blogPosts/SwarmApplications2.js";
import BlogUKRASNetwork from "blogPosts/UKRASNetwork.js";
import BlogUnibotsUK22Team from "blogPosts/UnibotsUK22Team.js";


export const components = {
  blog: {
    swarmhack22: {
      component: BlogSwarmHack22,
      url: "/blog/swarmhack22",
    },
    swarms1: {
      component: BlogSwarmApplications1,
      url: "/blog/swarms1",
    },
    swarms2: {
      component: BlogSwarmApplications2,
      url: "/blog/swarms2",
    },
    ukras: {
      component: BlogUKRASNetwork,
      url: "/blog/ukras",
    },
    unibotsuk22team: {
      component: BlogUnibotsUK22Team,
      url: "/blog/unibotsuk22team",
    },
  },


  innerPages: {
    LoginPage: {
      scrollAnimationDisabled: true,
      component: BlogSwarmHack22,
      url: "/components/landingPages/RestaurantLandingPage",
    },
  },


  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        BackgroundAsImage: {
          name: "With Background Image",
          component: BlogSwarmHack22,
          url: "/components/blocks/Hero/BackgroundAsImage",
        },
      }
    },
  }
}

export default () => {
  /*
    NOTE: `[name]` refers to inner-most capitalised title of element,
          not the eponymous title of the element's field.
  */

  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component = components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found; Check If Listed In ComponentRenderer.js")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found; Check If Listed In ComponentRenderer.js</div>
  }
}
