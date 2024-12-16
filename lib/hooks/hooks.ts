import { create } from "zustand";

type generateLoaderType = {
  toggleState: (loading: boolean) => void;
  loading: boolean;
};

type finalOutputUrlType = {
  url: null | string;
  setState: (url: string) => void;
};

type creditsType = {
  credits: null | number;
  setCredits: (credit: number | null) => void;
};

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
