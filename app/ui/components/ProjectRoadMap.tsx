'use client'

import React, { useEffect, useState } from 'react';
import "../../styles/roadmap.style.css";
import { Project } from '@/db/data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const { projects } = require('../../../db/data');
const starPosition = [
  {
    top: '0%',
    left: '0%'
  },
  {
    top: '5%',
    left: '90%'
  },
  {
    top: '55%',
    left: '90%'
  },
  {
    top: '90%',
    left: '30%'
  },
];

const getRotatingStyle = (value: number, transitionEnable = true) => {
  return {
    transform: `rotate(${value}deg)`,
    transition: transitionEnable ? 'transform 0.5s ease-in-out' : 'none'
  }
}

export default function ProjectRoadMap() {
  const router = useRouter();
  let interval: string | number | NodeJS.Timeout | undefined;
  const [rotateDeg, setRotateDeg] = useState(0);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleStarHover = (index: number) => {
    setHoveredStar(index);
    setIsHovering(true);
    clearInterval(interval);
  };

  const handleStarLeave = () => {
    setHoveredStar(null);
    setIsHovering(false);
  };

  const handleToGoDetail = (index: number) => {
    router.push(`/projects/${index}`);
  }

  useEffect(() => {
    if (!isHovering) {
      interval = setInterval(() => {
        setRotateDeg(deg => (deg + 1));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div className='w-screen h-screen px-4 md:px-24'>
      <p className="text-2xl font-extrabold text-center mb-24 mt-5">Roadmaps</p>
      <div className={`relative h-[300px] w-[50%] md:w-[300px] mx-auto`} style={getRotatingStyle(rotateDeg)}>
        {projects.map((project: Project, index: number) => ( 
          <div key={index} className='star-con cursor-pointer' id={`start${index}`} style={{ top: starPosition[index].top, left: starPosition[index].left }} onMouseEnter={() => handleStarHover(index)} onMouseLeave={handleStarLeave}>
            {hoveredStar !== null && hoveredStar === index ? 
              <div className='project-card transition-none' style={getRotatingStyle(-1 * rotateDeg, false)} onClick={() => handleToGoDetail(index)}>
                <p className='font-bold'>Title : { project.title}</p>
                <p className='text-[0.9rem] font-semibold'>Company : { project.company}</p>
                <p className='text-[0.9rem]'>Duration : {project.date.duration}</p>
                <p className='text-[0.8rem] text-white/60 text-end font-extrabold'>Click for detail</p>
                <Image src="/rocket-png.webp" className="absolute -left-[120px] bottom-0" width={140} height={100} alt="profile"/>
              </div>
             : <div className='star'></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
