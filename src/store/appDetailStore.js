import { create } from 'zustand';

export const useAppDetailStore = create((set) => ({
  applications: [],
  selectedApplication: null,

  setApplications: (apps) => set({ applications: apps }),
  setSelectedApplication: (app) => set({ selectedApplication: app }),
}));
