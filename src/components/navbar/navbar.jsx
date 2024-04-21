import SideBar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"
const Navbar =() => {
    return (
        <div className="navbar">
            {/* SideBar*/}
            <SideBar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0,scale:0.5}}
                 animate={{opacity:1,scale:1}}  
                 transition={{duration:0.5}}>
                    Portfolio Website
                    </motion.span>
                <div className="social">
                    <a href="https://github.com/AjayRauniyar"><img src="./github.png" alt=""/></a>
                    <a href="https://www.facebook.com/ajay.rauniyar.754918/"><img src="./facebook.png" alt=""/></a>
                    <a href="https://www.instagram.com/ajay_rauniyar77/?igsh=MWo1bHhzcWptc2ZwMQ%3D%3D"><img src="./instagram.png" alt=""/></a>
                    <a href="https://www.linkedin.com/in/ajay-rauniyar-4a0866250/"><img src="./linkedin.png" alt=""/></a>
                    <a href="https://discord.com/users/760034702882242561"><img src="./discord.png" alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar