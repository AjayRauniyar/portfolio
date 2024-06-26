import { useRef } from "react";
import "./portfolio.scss";
import{motion,useScroll,useSpring, useTransform} from "framer-motion"
const items=[
    {
        id:1,
        title:"Logistics App",
        img:"./logistics.jpeg",
        desc:"This is my logistic app having both user and driver app",
        linkid:"https://github.com/AjayRauniyar/Flutter-Logistic-app-project",
    },
    {
        id:2,
        title:"Gemini ChatBot",
        img:"./gemini.png",
        desc:"This is ai chatbot using google gemini api",
        linkid:'https://github.com/AjayRauniyar/AI_Chat_Bot',
    },
    {
        id:3,
        title:"Image Geneator using DALLE ",
        img:"./dalle.png",
        desc:"this is ai image generator using openAi DALLE ",
        linkid:'https://github.com/AjayRauniyar/cinemAI',
    },
    {
        id:4,
        title:"Image Generator using Midjourney",
        img:"./midjourney.png",
        desc:"this is ai image generator using Midjourney api",
        linkid:'https://github.com/AjayRauniyar/AI_image_generator',
    },
    {
        id:5,
        title:"Video Generator using HuggingFace",
        img:"./video.jpeg",
        desc:"this is video generator using HuggingFace video generator model",
        linkid:'https://github.com/AjayRauniyar/cinemAIVideo',
    }
];

const Single =({item}) => {
    const ref=useRef();
    const {scrollYProgress} =useScroll({target:ref,
        // offset:["end end","start start"]
    });
    const y=useTransform(scrollYProgress,[0,1],[100,-100]);
    return (
    <section  >
        <div className="container">
            <div className="wrapper">

           <div className="imagecontainer" ref={ref}>
           <img src={item.img} alt=""/>
           </div>
           <motion.div className="textContainer" style={{y}} >
            <h2 >{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.linkid}>
            <button >See Respository</button></a>
           </motion.div>
           </div>
        </div>
    </section>
    ) ;
};
const Portfolio =() =>{
    const ref=useRef()
    const {scrollYProgress} =useScroll({target:ref,offset:["end end","start start"]});
    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });


    return (
        <div className="portfolio" ref={ref} >
            <div className="progress"><h1>Featured Projects</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div></div>
            {items.map((item)=> (<Single item={item} key={item.id}/>))}</div>
    )
}

export default Portfolio