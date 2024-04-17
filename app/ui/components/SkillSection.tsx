'use client'

import React, { useEffect, useState } from 'react'
import { CircularProgressbar,CircularProgressbarWithChildren,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../styles/card.style.css';

// data
const {percentages} = require("../../../db/data");

export default function SkillSection() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseMove = (e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (index:any) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const calculateSkew = (index:any) => {
    if (index === hoveredCard) {
      const grid = document.querySelector('.grid');
      if (grid) {
        const gridRect = grid.getBoundingClientRect();
        const card = document.querySelector(`.skill-card:nth-child(${index + 1})`)!;
        const cardRect = card.getBoundingClientRect();
        const mouseX = cursorPosition.x - gridRect.left;
        const mouseY = cursorPosition.y - gridRect.top;
        const cardX = cardRect.left - gridRect.left;
        const cardY = cardRect.top - gridRect.top;
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;
        const distanceTop = mouseY - cardY;
        const distanceBottom = cardY + cardHeight - mouseY;
        const distanceLeft = mouseX - cardX;
        const distanceRight = cardX + cardWidth - mouseX;
        const maxDistance = cardWidth / 2;
        const maxSkew = 5;

        let skewX = 0;
        let skewY = 0;

        if (distanceTop <= maxDistance) {
          skewX = maxSkew * (1 - distanceTop / maxDistance);
        } else if (distanceBottom <= maxDistance) {
          skewX = -maxSkew * (1 - distanceBottom / maxDistance);
        }

        if (distanceLeft <= maxDistance) {
          skewY = maxSkew * (1 - distanceLeft / maxDistance);
        } else if (distanceRight <= maxDistance) {
          skewY = -maxSkew * (1 - distanceRight / maxDistance);
        }

        return `skew(${skewX}deg, ${skewY}deg)`;
      }
    }
    return 'skew(0deg)';
  };

  return (
    <div className="w-full h-screen pt-8 px-4 md:px-10 lg:px-24" onMouseMove={handleMouseMove}>
      <p className="text-2xl font-extrabold text-center mb-24">Skills and Responsibilities</p>
      <section className="flex flex-col md:flex-row justify-evenly md:justify-between items-start">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <p className="text-lg font-extrabold text-center">My skills & tools</p>
          <p className="text-start font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quia repellendus ullam facere alias mollitia
            porro tenetur sequi architecto, ut quas expedita earum adipisci? Commodi ratione voluptate vel aut corporis.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5 justify-evenly items-center w-full md:w-1/2">
          {percentages.map((element :any, index: number) => (
            <div
              className={`skill-card w-[60px] md:w-[80px] lg:w-[100px] border border-green-400 rounded-md p-2 ${hoveredCard === index ? 'hovered' : ''}`}
              key={element.text}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ transform: calculateSkew(index) }}
            >
              <CircularProgressbarWithChildren
                value={element.percentage}
                styles={{ path: { stroke: `rgba(27, 233, 151, ${element.percentage / 100})` } }}
              >
                <img className='w-[30px] -mt-5 bg-white md:bg-transparent rounded-sm p-1' src={element.svg} alt={element.text} />
                <div style={{ fontSize: 12, marginTop: 2 }}>
                  <strong>{element.percentage}%</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          ))}
        </div>
      </section>
      <style jsx>{`
        .hovered {
          filter: brightness(150%);
        }
      `}</style>
    </div>
  );
}