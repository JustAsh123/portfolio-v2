import { motion, MotionConfig } from "framer-motion";
import { Pointer } from "lucide-react";

const ExpandedNavbar = () => {
  return (
    <>
      <div className="bg-gray-800 h-screen flex flex-row">
        <div className="w-1/2 flex flex-row">
          <MotionConfig>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{scale:1.2, transition:{duration:0.2}}}
              transition={{duration:0.4}}
              exit={{ scale: 0 }}
              className="h-full [writing-mode:sideways-lr] curPointer w-1/4 bg-gray-700 text-[6rem] flex items-center justify-center gap-4 text-gray-400"
            >
              Github{" "}
              <img src="./github_svg.svg" className="rotate-[-90deg] w-[40%]" />
            </motion.div>
            <motion.div initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{duration:0.5}}
              whileHover={{scale:1.2, transition:{duration:0.2}}}
              exit={{ scale: 0 }} className="h-full curPointer [writing-mode:sideways-lr] w-1/4 bg-blue-400 text-[6rem] flex items-center justify-center gap-4 text-white">
              Linkedin{" "}
              <img
                src="./linkedin_svg.svg"
                className="rotate-[-90deg] w-[40%]"
              />
            </motion.div>
            <motion.div initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{duration:0.6}}
              whileHover={{scale:1.2, transition:{duration:0.2}}}
              exit={{ scale: 0 }} className="h-full curPointer [writing-mode:sideways-lr] w-1/4 bg-pink-400 text-[6rem] flex items-center justify-center gap-4 text-white">
              Instagram{" "}
              <img
                src="./instagram_svg.svg"
                className="rotate-[-90deg] w-[40%]"
              />
            </motion.div>
            <motion.div initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{scale:1.2, transition:{duration:0.2}}}
              transition={{duration:0.7}}
              exit={{ scale: 0 }} className="h-full curPointer [writing-mode:sideways-lr] w-1/4 bg-blue-400 text-[6rem] flex items-center justify-center gap-4 text-gray-600">
              Twitter{" "}
              <img
                src="./twitter_svg.svg"
                className="rotate-[-90deg] w-[40%]"
              />
            </motion.div>
          </MotionConfig>
        </div>
        <div className="w-1/2">
          <motion.div
            className="bg-lime-500 hidden md:block"
            initial={{ height: "0px" }}
            animate={{ height: "250px" }}
            exit={{ height: "0px" }}
          ></motion.div>
          <div className="flex flex-col items-end mt-14 mr-14">
            <motion.p
              className="text-lime-500 group text-[5rem] curPointer flex flex-row items-center gap-4"
              initial={{ fontSize: "0rem" }}
              animate={{ fontSize: "5rem" }}
              whileHover={{ fontSize: "5.5rem" }}
            >
              <Pointer
                size={36}
                className="rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />{" "}
              Home
            </motion.p>
            <motion.p
              className="text-lime-500 group text-[5rem] curPointer flex flex-row items-center gap-4"
              initial={{ fontSize: "0rem" }}
              animate={{ fontSize: "5rem" }}
              whileHover={{ fontSize: "5.5rem" }}
            >
              <Pointer
                size={36}
                className="rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />{" "}
              Skills
            </motion.p>
            <motion.p
              className="text-lime-500 group text-[5rem] curPointer flex flex-row items-center gap-4"
              initial={{ fontSize: "0rem" }}
              animate={{ fontSize: "5rem" }}
              whileHover={{ fontSize: "5.5rem" }}
            >
              <Pointer
                size={36}
                className="rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />{" "}
              Projects
            </motion.p>
            <motion.p
              className="text-lime-500 group text-[5rem] curPointer flex flex-row items-center gap-4"
              initial={{ fontSize: "0rem" }}
              animate={{ fontSize: "5rem" }}
              whileHover={{ fontSize: "5.5rem" }}
            >
              <Pointer
                size={36}
                className="rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />{" "}
              Resume
            </motion.p>
            <motion.p
              className="text-lime-500 group text-[5rem] curPointer flex flex-row items-center gap-4"
              initial={{ fontSize: "0rem" }}
              animate={{ fontSize: "5rem" }}
              whileHover={{ fontSize: "5.5rem" }}
            >
              <Pointer
                size={36}
                className="rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />{" "}
              Contact
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpandedNavbar;
