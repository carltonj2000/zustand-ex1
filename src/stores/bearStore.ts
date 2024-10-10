import { create } from "zustand";

type TBearStoreState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
  getOwner: () => Promise<string>;
};

export const useBearStore = create<TBearStoreState>()((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: TBearStoreState) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
  getOwner: async () => {
    const resp = await fetch("https://api.github.com/users/1");
    const owner = await resp.json();
    console.log(owner.name);
    return owner.name;
  },
}));
