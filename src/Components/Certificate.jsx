import React from "react";
import "../Components/Global.css";
import html from "../Components/SocialLinks/html.png"
import css from "../Components/SocialLinks/social.png"
import js from "../Components/SocialLinks/js.png"
import react from "../Components/SocialLinks/react_original_logo_icon_146374.png"
import nodejs from "../Components/SocialLinks/nodejs.png"
import expressJs from "../Components/SocialLinks/express_logo_icon_248911.png"
import mongodb from "../Components/SocialLinks/mongodb_original_logo_icon_146424.png"
import git from "../Components/SocialLinks/social (1).png"
import github from "../Components/SocialLinks/github.png"
import C from "../Components/SocialLinks/C.png"
import Python from "../Components/SocialLinks/Python.png"


const Certificate = ({ bgcolor, darkmode }) => {


  const skills =
  [
    {
      skill:"HTML",
      png:html
    },
    {
      skill:"Css",
      png:css
    },
    {
      skill:"Js",
      png:js
    },
    {
      skill:"ReactJs",
      png:react
    },
    {
      skill:"Nodejs",
      png:nodejs
    },
    {
      skill:"ExpressJs",
      png:expressJs
    },
    {
      skill:"MongodDb",
      png:mongodb
    },
    {
      skill:"Python",
      png:Python
     },
     {
      skill:"C/C++",
      png:C
     }
  ]

  const otherSkills=
  [
   {
    skill:"Git",
    png:git
   },

   {
    skill:"Github",
    png:github
   }, 

  ]


  return (
    <>
      <div
        className={` ${
          darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`
        } p-10 rounded-lg flex flex-col gap-10 `}
      >
        <h1
          className={`text-3xl font-bold ${
            bgcolor === "white" ? "text-black" : "text-white"
          }`}
        >
          Techincal Skills
        </h1>

        <div className="w-full flex flex-wrap gap-4">
           {
            skills.map((curr,i)=> 
            <div key={i} className="w-[7rem] text-center h-[7rem] rounded-full flex flex-col">
            <img src={curr.png} className="w-full p-5"/>
            <h1 className={`font-bold ${
            bgcolor === "white" ? "text-black" : "text-white"
          }`}>{curr.skill}</h1>
         </div>)
           }
        </div>



        <h1
          className={`text-3xl font-bold ${
            bgcolor === "white" ? "text-black" : "text-white"
          }`}
        >
          Other Skills
        </h1>


        <div className="w-full flex flex-wrap gap-4">
        {
            otherSkills.map((curr,i)=> 
            <div key={i} className="w-[7rem] text-center h-[7rem] rounded-full flex flex-col">
            <img src={curr.png} className="w-full p-5"/>
            <h1 className={`font-bold ${
            bgcolor === "white" ? "text-black" : "text-white"
          }`}>{curr.skill}</h1>
         </div>)
           }
        </div>

        
      </div>
    </>
  );
};

export default Certificate;
