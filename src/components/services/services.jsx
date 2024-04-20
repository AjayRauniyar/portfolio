import { useRef } from "react";
import "./services.scss";
import {animate, motion, useInView} from "framer-motion";

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}
const Services=()=>{

    const ref=useRef()
    const  isInView=useInView(ref,{margin:"-100px"})
    return (
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
        <motion.div className="textContainer"variants={variants}>
        <p>I focus on helping your company grow 
            <br/>and move forward
        </p>
        <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                
                <h1><motion.b whileHover={{color:"orange"}}>For You </motion.b>or Business.</h1>
                <button>WHAT I DO ?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box"  whileHover={{background:"lightgray",color:"black"}}>
                <h2> Flutter App</h2>
                    <p>
                        here is how i do make my projects 
                    </p>
                <button>Click to See</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2> Web App</h2>
                    <p>
                        here is how i do make my projects 
                    </p>
                <button>Click to See</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2> UI/UX</h2>
                    <p>
                        here is how i do make my projects 
                    </p>
                <button>Click to See</button>
            </motion.div>
           
        </motion.div>
        </motion.div>
    )
}
export default Services