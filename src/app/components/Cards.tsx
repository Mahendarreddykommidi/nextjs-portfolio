"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from  './ui/infinite-moving-cards'
import { testimonials } from "../data/data";

interface testimonials{
  quote:string;
  name: string;
  title:string;
}

export default function Cards() {
  return (
    <>
    <div className="description mt-[120px] flex justify-center font-bold text-2xl">
      <h2 className="mt-[50px] text-3xl">kind words from <span className="text-purple-400">satisfied clients</span> </h2>
  
    </div>
   
  
 
    <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    

    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

    
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
  


      
      />

     
  
  </div>
  

  
  
</>
  
    
  
  );
}


