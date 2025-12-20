import type { IpoData } from "@/Component/UpcommingIPO";
import { create } from "zustand";

type TokenStore = {
  token: string | null;
  setToken: (token: string) => void;
  income: [] | null;
  setIncome: (income: []) => void;
  ipodata: IpoData[] | null;
  setIpoData: (ipodata: IpoData[]) => void;
};

export const useTokenStore = create<TokenStore>(() => {
  return {
    token: null,
    income: null,
    ipodata: null,

    setToken: (token: string) => {
      useTokenStore.setState({ token });
      console.log("Token:", token);
    },
    setIncome: (income: []) => {
      useTokenStore.setState({ income });
      console.log("Income:", income);
    },

    setIpoData: (ipodata: IpoData[]) => {
      useTokenStore.setState({ ipodata });
      console.log("Ipodata:", ipodata);
    },
  };
});
