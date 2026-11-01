import { createContext, useContext } from 'react';

export const FoldRevealContext = createContext(null);

export function useFoldReveal() {
  return useContext(FoldRevealContext);
}
