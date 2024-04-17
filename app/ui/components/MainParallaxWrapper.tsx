'use client'

import React, { useRef } from 'react'
import IntroSection from "./IntroSection";
import SkillSection from "./SkillSection";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ProjectRoadMap from './ProjectRoadMap';

const roadMapBackgroundDir = "/gallaxy_background.mp4";
const infoBackgroundDir = "/info_background.mp4";

export default function MainParallaxWrapper() {
  const ref = useRef();
    return (
      <Parallax pages={3} ref={ref}> 
        {/* <ParallaxLayer
          offset={0}
          speed={1}
          factor={3}
          style={{
            backgroundImage: "url(/background_img.jpg)",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={3}
          style={{
            width: '100%',
            zIndex: '-1'
          }}>
          <video autoPlay loop muted style={{ width: '100%', height: '150%' }}>
            <source src={infoBackgroundDir} type='video/mp4'/>
          </video>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}>
          <IntroSection />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <SkillSection/>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.99}
          speed={1}
          factor={2}
          style={{
            position: 'fixed',
            width: '100%',
            zIndex: '-1'
          }}>
          <video autoPlay loop muted style={{ width: '100%', height: '150%' }}>
            <source src={roadMapBackgroundDir} type='video/mp4'/>
          </video>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2}>
          <ProjectRoadMap/>
        </ParallaxLayer>
      </Parallax>
  )
}
