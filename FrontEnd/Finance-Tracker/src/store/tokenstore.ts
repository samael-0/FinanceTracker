import { create } from "zustand";

type TokenStore = {
  token: string | null;
  setToken: (token: string) => void;
  income: [] | null;
  setIncome: (income: []) => void;
};

export const useTokenStore = create<TokenStore>(() => {
  return {
    token: null,
    income: null,

    setToken: (token: string) => {
      useTokenStore.setState({ token });
      console.log("Token:", token);
    },
    setIncome: (income: []) => {
      useTokenStore.setState({ income });
      console.log("Income:", income);
    },
  };
});
