import { create } from "zustand";

interface MenuState{
    menuOpen: boolean
    toggleMenu: () => void;
}

const useMenuStore = create<MenuState>()((set)=>({
    menuOpen: false,
    toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
}))

export default useMenuStore;