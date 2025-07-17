import MenuButton from './MenuButton';
import ExpandedNavbar from './ExpandedNavbar';
import useMenuStore from '../zustand/useStore';

const Navbar = () => {
    const menuOpen : boolean = useMenuStore((state)=>state.menuOpen)

  return (
    <>
    {!menuOpen ? <div className="bg-lime-500 h-[100px] fixed top-0 w-full flex items-center justify-between flex-row px-[56px]">
        <img src="./logo.png" className='h-[70%] rounded-xl'/>
    </div> : <ExpandedNavbar/>}
    <MenuButton />
    </>
  )
}

export default Navbar