export type generateLoaderType = {
  toggleState: (loading: boolean) => void;
  loading: boolean;
};

export type finalOutputUrlType = {
  url: null | string;
  setState: (url: string) => void;
};

export type creditsType = {
  credits: null | number;
  setCredits: (credit: number | null) => void;
};

export type userHistoryDataType = {
  id: string;
  prompt: string;
  final: string;
  createdAt: Date;
};

export type userHistoryType = {
  data: userHistoryDataType[] | null;
  setData: (data: userHistoryDataType[] | null) => void;
};
