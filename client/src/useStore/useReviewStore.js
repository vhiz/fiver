import { create } from "zustand";

const useReviewStore = create((set) => ({
  review: [],
  setReview: (data) => {
    return set((prev) => ({
      review: [...prev.review, data],
    }));
  },
}));

export default useReviewStore;
