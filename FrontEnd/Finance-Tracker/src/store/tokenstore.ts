import { create } from "zustand";

type TokenStore = {
  token: string | null;
  setToken: (token: string) => void;
};

export const useTokenStore = create<TokenStore>(() => {
  return {
    token: null,

    setToken: (token: string) => {
      useTokenStore.setState({ token });
      console.log("Token:", token);
    },
  };
});
