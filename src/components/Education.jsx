import {EDUCATION} from "../constants/index";
import {motion} from "framer-motion";

const Education = () => {
    return(
        <div className="pb-4">
            <motion.h2
                whileInView={{opacity:1, y:0}}
                initial={{y:-100, opacity:0}}
                transition={{duration:1}}
                className="my-20 text-center text-4xl">
                Education
            </motion.h2>
            <div>
                {EDUCATION.map((education, index) => (
                    <div key={index} className="mb-8 flex flex-wrap text-center lg:justify-center">
                        <div className="w-full lg:w-1/3">
                            <motion.p 
                                whileInView={{opacity:1, x:0}}
                                initial={{x:-100, opacity:0}}
                                transition={{duration:0.5}}
                                className="mb-2 text-neutral-400">
                                {education.year}
                            </motion.p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <motion.h6
                                whileInView={{opacity:1, x:0}}
                                initial={{x:100, opacity:0}}
                                transition={{duration:0.5}}
                                className="mb-2 font-bold">
                                {education.degree}
                            </motion.h6>
                            <h6 className="mb-2 text-neutral-400">
                                {education.college}
                            </h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Education;