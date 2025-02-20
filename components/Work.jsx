import { assets, workData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";

const Work = (isDarkMode) => {
  return (
    <>
      <motion.div
        id="work"
        className=" w-full px-[12%] py-10 scroll-mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h4
          className=" text-center mb-2 text-lg font-Ovo"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          My Portfolio
        </motion.h4>
        <motion.h2
          className=" text-center text-5xl font-Ovo"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          My Latest work
        </motion.h2>
        <motion.p
          className=" text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Turning ideas into functional web applications. I focus on building
          solutions that solve real-world problems for businesses and users in
          Bangladesh and beyond.
        </motion.p>
        <motion.div
          className="grid grid-cols-auto my-10 gap-5 dark:text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {workData.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index}
              className="aspect-square bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${project.bgImage.src})` }}
            >
              <a href={project.url} target="_blank">
                <div className=" bg-white/20 backdrop-blur-md w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-xl">
                  <div>
                    <h2 className=" font-semibold">{project.title}</h2>
                    <p className=" text-sm text-gray-700">
                      {project.description}
                    </p>
                  </div>
                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <Image
                      src={assets.send_icon}
                      alt="send icon"
                      className="w-5 mt-1 mr-1"
                    />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
        {/* <motion.a
          href=""
          className=" w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-darkHover hover:text-white duration-500 dark:text-white dark:border-white dark:hover:bg-lightHover dark:hover:text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          show more...
          <Image
            src={
              isDarkMode
                ? assets.right_arrow_bold
                : assets.right_arrow_bold_dark
            }
            alt="right arrow"
            className="w-4"
          />
        </motion.a> */}
      </motion.div>
    </>
  );
};

export default Work;
