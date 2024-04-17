'use client'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { useRef } from 'react'
import Detail from './Detail';
const roadMapBackgroundDir = "/gallaxy_background.mp4";

export default function DetailParallaxWrapper() {
    const ref = useRef();
  return (
    <div>
        <Parallax pages={1} ref={ref}>
            <ParallaxLayer
                offset={0}
                speed={1}
                factor={1}
                style={{
                    position: 'fixed',
                    width: '100%',
                    zIndex: '-1'
                }}>
          <video autoPlay loop muted style={{ width: '100%', height: '100%' }}>
            <source src={roadMapBackgroundDir} type='video/mp4'/>
          </video>
            </ParallaxLayer> 
              <ParallaxLayer>
                <Detail/>
            </ParallaxLayer>
        </Parallax>
    </div>
  )
}
