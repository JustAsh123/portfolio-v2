import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-[url(/hero.jpg)] h-[calc(100vh-100px)] mt-[100px]">
      <div className=" h-full w-full bg-cover bg-center bg-linear-to-r from-black/80 to-black/80 lg:px-[80px] lg:py-[128px] md:px-[32px] md:py-[192px] sm:px-[20] sm:py-[192] flex lg:flex-row sm:flex-col sm:text-center lg:text-left items-center justify-center">
        <motion.div
          className="lg:basis-3/5 basis-1"
          initial={{ x: "-1000px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-1000px" }}
          transition={{ duration: 1 }}
        >
          <div className="text-2xl font-bold  text-lime-500 bg-green-400/30 px-4 py-2 inline rounded-lg mb-8">
            ✌️ Hi there! I am Ashmit.
          </div>
          <div className="text-white text-5xl my-8">
            I am a <span className="text-lime-500">Full-Stack Developer</span>.
            I create <span className="text-lime-500">Functional</span> and{" "}
            <span className="text-lime-500">Pretty</span> Websites.
          </div>
          <div className="text-md text-gray-400 my-4">
            I'm a self-taught software engineer dedicated to building
            functional, innovative projects. My strength lies in practical
            problem-solving. I develop clean, efficient solutions from concept to
            deployment. My portfolio showcases my ability to turn ideas into
            fully realized applications, with a focus on performance and user
            experience. No fluff—just code that works
          </div>
        </motion.div>
        <motion.div
          className="lg:basis-2/5     basis-1 flex justify-start"
          initial={{ x: "1000px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-1000px" }}
          transition={{ duration: 1 }}
        >
          <img src="/hero_svg.svg" className="w-[75%] h-auto" alt="Hero" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
