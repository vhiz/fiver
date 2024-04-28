import { create } from "zustand";

const useUserStore = create((set) => ({
  currentUser: JSON.parse(localStorage.getItem("fiverrStore")) || null,
  setCurrentUser: (data) => {
    localStorage.setItem("fiverrStore", JSON.stringify(data));
    return set({ currentUser: data });
  },
}));

export default useUserStore;
