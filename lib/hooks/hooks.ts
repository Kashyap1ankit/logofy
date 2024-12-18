import {
  creditsType,
  finalOutputUrlType,
  generateLoaderType,
  userHistoryType,
} from "@/types/hooks.type";
import { create } from "zustand";

//Loader for showing generation

export const useGenerateLoader = create<generateLoaderType>((set) => ({
  loading: false,
  toggleState: (loading) => set(() => ({ loading: loading })),
}));

//Storing the final generated url

export const useFinalOutputUrl = create<finalOutputUrlType>((set) => ({
  url: null,
  setState: (url) => set(() => ({ url: url })),
}));

//storing the credits

export const useCredits = create<creditsType>((set) => ({
  credits: null,
  setCredits: (credit) =>
    set(() => ({
      credits: credit,
    })),
}));

export const useUserHistory = create<userHistoryType>((set) => ({
  data: null,
  setData: (data) => set(() => ({ data: data })),
}));
