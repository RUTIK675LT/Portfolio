import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants/index';

const Achievement = () => {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl"
            >
                Achievements
            </motion.h2>
            <div>
                {ACHIEVEMENTS.map((achievement, index) => (
                    <div key={index} className="mb-8 flex flex-wrap text-center lg:justify-center">
                        <div className="w-full lg:w-1/3 flex justify-center">
                            <motion.img
                                src={achievement.image}
                                width={150}
                                height={150}
                                alt={achievement.company}
                                className="mb-5 rounded"
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ x: -100, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <motion.h6
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ x: 100, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-2 font-bold"
                            >
                                {achievement.company}
                            </motion.h6>
                            <p className="mb-4 text-neutral-400">{achievement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievement;