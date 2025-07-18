//BEFORE PASTE
import { Pointer } from "lucide-react";
import { motion, MotionConfig } from "framer-motion";
import MenuButton from "./MenuButton";

const ExpandedNavbar = () => {
  return (
    <>
      {/* Added 'fixed inset-0' to make it fixed and cover the entire screen */}
      <div className="fixed inset-0 bg-slate-950 z-[200] big-font flex flex-row">
        <div className="w-1/2 flex lg:flex-row lg:flex sm:hidden">
          <MotionConfig>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4 }}
              exit={{ scale: 0 }}
              className="h-full [writing-mode:sideways-lr] big-font curPointer w-1/4 bg-gray-700 text-[6rem] flex items-center justify-center gap-4 text-gray-400"
            >
              Github{" "}
              <img src="./github_svg.svg" className="rotate-[-90deg] w-[40%]" alt="GitHub icon" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              exit={{ scale: 0 }}
              className="h-full curPointer big-font [writing-mode:sideways-lr] w-1/4 bg-blue-400 text-[6rem] flex items-center justify-center gap-4 text-white"
            >
              Linkedin{" "}
              <img
                src="./linkedin_svg.svg"
                className="rotate-[-90deg] w-[40%]"
                alt="LinkedIn icon"
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              exit={{ scale: 0 }}
              className="h-full curPointer big-font [writing-mode:sideways-lr] w-1/4 bg-pink-400 text-[6rem] flex items-center justify-center gap-4 text-white"
            >
              Instagram{" "}
              <img
                src="./instagram_svg.svg"
                className="rotate-[-90deg] w-[40%]"
                alt="Instagram icon"
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              transition={{ duration: 0.7 }}
              exit={{ scale: 0 }}
              className="h-full curPointer big-font [writing-mode:sideways-lr] w-1/4 bg-blue-400 text-[6rem] flex items-center justify-center gap-4 text-gray-600"
            >
              Twitter{" "}
              <img
                src="./twitter_svg.svg"
                className="rotate-[-90deg] w-[40%]"
                alt="Twitter icon"
              />
            </motion.div>
          </MotionConfig>
        </div>
        <div className="w-1/2 sm:w-full">
          <motion.div
            className="bg-green-500 block sm:hidden md:block w-full"
            initial={{ height: "0px" }}
            animate={{ height: "250px" }}
            exit={{ height: "0px" }}
          ><MenuButton></MenuButton></motion.div>
          <div className="block md:hidden">
            <MenuButton></MenuButton>
          </div>
          <div className="flex flex-col sm:w-full w-1/2 items-end mt-14 mr-14">
            <motion.p
              className="text-green-600 group big-font text-[5rem] curPointer flex flex-row items-center gap-4"
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
              className="text-green-600 group big-font text-[5rem] curPointer flex flex-row items-center gap-4"
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
              className="text-green-600 group big-font text-[5rem] curPointer flex flex-row items-center gap-4"
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
              className="text-green-600 group big-font text-[5rem] curPointer flex flex-row items-center gap-4"
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
              className="text-green-600 group big-font text-[5rem] curPointer flex flex-row items-center gap-4"
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