import { motion } from "framer-motion";
import "./ajay.scss"
const textVariants={
    initial:{
        x: -500,
        opacity:0,
    },
    animate:{
        x: 0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },

    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
};
const sliderVariants={
    initial:{
        x: 0
    },
    animate:{
        x: "-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20
        }
    },
};
const Ajay =() =>{
    const handleScrollToPortfolio = () => {
        const portfolioSection = document.getElementById('Portfolio');
        portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      const handleScrollToContact = () => {
        const portfolioSection = document.getElementById('Contact');
        portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
    const handleClick = () => {
        window.location.href = 'https://drive.google.com/file/d/1_K1AZqgUOc_Z-1M7Cbk92qvXRkUWjFrD/view?usp=sharing'; 
      };
    return(
        <div className="ajay">
            <div className="wrapper">
                 <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>
                    Ajay Kumar Rauniyar
                </motion.h2>
                <motion.h1 variants={textVariants}>Flutter App & Web Developer </motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button onClick={handleScrollToPortfolio} variants={textVariants}>See the Latest Works</motion.button>
                    <motion.button onClick={handleClick} variants={textVariants}>Resume</motion.button>
                    <motion.button onClick={handleScrollToContact} variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img onClick={handleScrollToContact} variants={textVariants} animate="scrollButton" src="./scroll.png" alt="" />
             </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Developer Influencer Learner 
            </motion.div>
            <div className="imageContainer">
                <img src="./ajayrauniyar.png" alt=""/>
            </div>
        </div>
    )
}
export default Ajay