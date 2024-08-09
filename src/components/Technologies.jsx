import { RiHtml5Line, RiCss3Line, RiJavascriptLine, RiReactjsLine, RiNodejsLine} from 'react-icons/ri';
import { DiPython, DiMongodb } from "react-icons/di";
import { FaGithub } from "react-icons/fa6";
import { IoLogoDocker } from "react-icons/io5";
import { SiKubernetes } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import {motion} from "framer-motion";


const iconVariants = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10, -10],
        transition:{
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});


const Technologies = () => {
    return(
        <div className="pb-24">
            <motion.h2 
                whileInView={{opacity:1, y:0}}
                initial={{y:-100, opacity:0}}
                transition={{duration:1}}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h2>
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{x:-100, opacity:0}}
                transition={{duration:1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <DiMongodb  className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <RiJavascriptLine className="text-7xl text-yellow-500"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <RiReactjsLine className="text-7xl text-cyan-500"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <RiNodejsLine className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <IoLogoDocker className="text-7xl text-sky-600"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <FaAws  className="text-7xl text-yellow-500"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <DiPython className="text-7xl text-yellow-400"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <FaGithub  className="text-7xl text-white"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                    <SiKubernetes className="text-7xl text-blue-700"/>
                </motion.div>
            </motion.div>
        </div>
    )
};

export default Technologies;