import { motion } from "framer-motion"
import { Menu, X } from "lucide-react";
import useMenuStore from "../zustand/useStore";

const MenuButton = () => {
  const { menuOpen, toggleMenu } = useMenuStore();

  return (
    <motion.div
      className='z-[100] fixed top-5 right-4' // Added top-4 right-4 and fixed. Using z-[100] for higher specificity.
      initial={{ scale:1 , rotate:0}}
      onClick={toggleMenu}
      animate={{ rotate: menuOpen ? 90 : 0 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {!menuOpen ? <Menu className="curPointer" size={48} strokeWidth={3}/> : <X className="text-white curPointer md:text-black" size={48} strokeWidth={3}/>}
    </motion.div>
  )
}

export default MenuButton;  