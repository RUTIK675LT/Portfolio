import aboutImg from "../assets/about.jpg";
import {ABOUT_TEXT} from "../constants/index.js";
import {motion} from "framer-motion";

const About = () => {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{opacity:1, y:0}}
                initial={{y:-100, opacity:0}}
                transition={{duration:1}}
                className="my-20 text-center text-4xl">
                    About Me
                </motion.h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-16">
                <motion.div
                whileInView={{opacity:1, x:0}}
                    initial={{x:-100, opacity:0}}
                    transition={{duration:0.5}} 
                    className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="About" />
                </motion.div>
                </div>
                <div className="w-full lg:w-1/2">
                        <motion.div 
                            whileInView={{opacity:1, x:0}}
                            initial={{x:100, opacity:0}}
                            transition={{duration:0.5}}
                            className= "flex justify-center lg:justify-start">
                            <p className="my-2 max-w-xl py-8 font-light tracking-tighter">{ABOUT_TEXT}</p>
                        </motion.div>
                </div>
            </div>
        </div>
    )
};

export default About;