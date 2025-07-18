import { motion } from "framer-motion";

const Tooling = () => {
  const skills = ["ReactJS","TailwindCSS","Firebase","Javascript","Typescript","Zustand","Github","CSS"]
  return (
    <div className="mt-[100px] flex justify-center">
      {/* This div centers the entire "Tooling" section */}
      <div className="flex flex-col items-center"> {/* Added flex-col and items-center to stack content vertically */}
        {/* Tooling Button */}
        <motion.div 
        className="border-2 border-green-600 rounded-xl bg-slate-800 text-[48px] px-[24px]"
        initial={{opacity:0}}
        whileInView={{ opacity:[1,0.4,1,0.2,1,0.3,1]}}
        transition={{duration:1.2}}
        >
          <p className="text-green-600">Tooling</p>
        </motion.div>

        {/* Container for the 2x4 grid of items */}
        <motion.div 
        className="my-[80px] w-full max-w-[1000px] rounded-xl overflow-hidden"
        initial = {{scale:0, rotate:-10, opacity:0}}
        whileInView={{scale:1,rotate:[0, 8, -5, 0], opacity:1}}
        transition={{duration:1.2}}
        > {/* Added a max-width to control overall grid width, and overflow-hidden */}
        
          <div className="flex flex-wrap justify-center gap-4 p-4 rounded-xl bg-green-500"> {/* flex-wrap for multiple rows, justify-center for centering items, gap for spacing. Added py-4 and removed gap-y-0 */}
            {skills.map((skill)=>(
              <div className="text-white text-[1.6rem] p-[0px] flex-grow flex-shrink-0 basis-[calc(25%-1rem)]"> {/* Removed p-[12px] and added p-[0px] */}
              <div className="bg-slate-800 px-[18px] py-[12px] gap-4 flex flex-row items-center text-center rounded-xl"> {/* Moved rounded-xl here */}
                <img className="w-[30px] text-white" src={`./${skill}.svg`}/>{skill}
              </div>
            </div>
            ))}

            {/* Add more items as needed to fill out rows */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Tooling;