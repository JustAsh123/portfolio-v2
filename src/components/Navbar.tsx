import MenuButton from './MenuButton';
import ExpandedNavbar from './ExpandedNavbar';
import useMenuStore from '../zustand/useStore';

const Navbar: React.FC = () => {
  const menuOpen: boolean = useMenuStore((state) => state.menuOpen);

  return (
    <>
      {!menuOpen ? (
        <div className="bg-lime-500 big-font h-[100px] top-0 w-full flex items-center justify-between flex-row px-[56px] z-50 fixed">
          <img src="./logo.png" className="h-[70%] rounded-xl" />
        </div>
      ) : (
        <ExpandedNavbar />
      )}
      <MenuButton />
    </>
  );
};

export default Navbar;
