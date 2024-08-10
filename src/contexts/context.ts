import { ContentType } from "@/types/type";
import { createContext, useContext } from "react";

interface ContextType {
  inputStore: ContentType;
  setinputStore: (inputStore: ContentType) => void;
}

export const ContextData = createContext<ContextType | undefined>(undefined);

export const useStore = () => {
  const context = useContext(ContextData);
  if (context === undefined) {
    throw new Error("Context undefined");
  }
  return context;
};
