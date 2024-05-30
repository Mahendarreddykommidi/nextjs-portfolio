"use client";
import React from "react";
import { PinContainer } from './ui/3d-pin'
import project_1 from '../assets/project_1.svg'
import project_2 from '../assets/project_2.svg'
import project_3 from '../assets/project_3.svg'
import project_4 from '../assets/project_4.svg'
import project_5 from '../assets/project_5.svg'
import project_6 from '../assets/project_6.svg'
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";

export default function Projects() {
  return (
    <>
    <div className="title text-center font-bold text-purple-600 text-5xl">
      <h2>my projects</h2>
    </div>
    <div className="images grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
    
      <div className="img ">




<Image src={project_1}  alt="img"/>

      </div>
      <div className="img">
      <Image src={project_2} alt="img"/>

      </div>
      <div className="img">
      <Image src={project_3} alt="img"/>

      </div>
      <div className="img">
      <Image src={project_4} alt="img"/>

      </div>
      <div className="img">
      <Image src={project_5} alt="img"/>

      </div>
      <div className="img">
      <Image src={project_6} alt="img"/>

      </div>
    </div>

      
      </>
  );
}
