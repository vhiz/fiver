import { create } from "zustand";

const useReviewStore = create((set) => ({
  review: [],
  setReview: (review) => set({ review }),
}));

export default useReviewStore;
