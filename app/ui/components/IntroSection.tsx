'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import "../../styles/intro.style.css";

// function rotateDice(e) {
//     const dice = document.querySelectorAll('.dice');
//     let x = (e.clientX - window.innerWidth / 2) * 0.7;
//     let y = (window.innerHeight / 2 - e.clientY) * 0.7;

//     for (let i = 0; i < dice.length; i++) {
//         dice[i].style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//     }
// }
const positionArray = ['Full Stack', 'Frontend', 'Backend', 'Software'];

export default function Intro() {
  const [positionStyle, setPositionStyle] = useState({
    class: 'normal',
    positionIndex: 0
  });
  useEffect(() => {
  const intervalId = setInterval(() => {
    setPositionStyle(prevStyle => {
      const newPositionIndex = (prevStyle.positionIndex + 1 >= positionArray.length ? 0 : prevStyle.positionIndex + 1);
      if (prevStyle.class === 'normal') {
        // document.styleSheets[0].addRule('.content:before', `content: "${positionArray[prevStyle.positionIndex]}"`);
        // document.styleSheets[0].addRule('.content:after', `content: "${positionArray[prevStyle.positionIndex]}"`);
        return { ...prevStyle, class: 'loader' };
      } else {
        return { ...prevStyle, class: 'normal' };
      }
    });
  }, 1000);

  return () => clearInterval(intervalId);
}, []);


  useEffect(() => {
    if (positionStyle.class === 'normal') 
      setPositionStyle({...positionStyle, positionIndex: positionStyle.positionIndex === positionArray.length-1 ? 0 : positionStyle.positionIndex + 1 })
  }, [positionStyle.class])

  // useEffect(() => {
  //       document.addEventListener('mousemove', rotateDice);
  //       return () => {
  //           document.removeEventListener('mousemove', rotateDice);
  //       };
  //   }, []);
    
  return (
    <section className="w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-24">
        <div className="my-10 md:mt-0">
          <p className="text-slate-200 font-semibold">Hi! {`I'm`}</p>
          <p className="text-slate-200 text-5xl font-bold">Linn Htet Aung</p>
        <p className="relative text-slate-200 text-lg font-bold overflow-hidden">
          Creative
          <span data-text={positionArray[positionStyle.positionIndex]} className={`absolute ${positionStyle.class} ${positionStyle.class === 'normal' && 'hidden'} text-lg font-bold mx-[6px] overflow-hidden bg-black`}>
            {positionArray[positionStyle.positionIndex]}
          </span> <span className="mx-[6px]">{positionArray[positionStyle.positionIndex]}</span> { positionArray[positionStyle.positionIndex] === 'Software' ? 'Engineer' : 'Developer'}</p>
          <p className="text-lg font-bold">From Myanmar</p>
        </div>
        <div className="relative m-0 md:m-10">
            <div className="dice">
              <div className="face border-2 border-green-400">1</div> 
              <div className="face border-2 border-green-400">2</div> 
              <div className="face border-2 border-green-400">3</div> 
              <div className="face border-2 border-green-400">4</div> 
              <div className="face border-2 border-green-400">5</div> 
              <div className="face border-2 border-green-400">6</div> 
            </div>
            <img src="/nobita.jpg" className="profile_img w-[250px] md:w-[350px]" alt="profile"/>
        </div>
      </section>
  )
  
}
