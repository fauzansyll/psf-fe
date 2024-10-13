"use client";

import LandingPage from "@/components/pages/LandingPage";
import style from "./page.module.css";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Form from "@/components/organisms/Form";
import { useScrollBlock } from "@/lib/useScroll";
import Prompt from "@/components/atoms/Prompt";

interface StateProps {
  isBook: boolean;
}

interface AppContextProps {
  isBook: boolean;
  setIsBook: Dispatch<SetStateAction<StateProps>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within AppContext.Provider");
  }
  return context;
};

export default function Home() {
  const [state, setState] = useState<StateProps>({ isBook: false });
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if (!state.isBook) {
      allowScroll();
    } else {
      blockScroll();
    }
  }, [state.isBook, blockScroll, allowScroll]);

  return (
    <AppContext.Provider value={{ isBook: state.isBook, setIsBook: setState }}>
      <div className={`${style.main} py-2 `}>
        <LandingPage />
      </div>
      {state.isBook && <Form />}
      {/* <div className={`${style.prompt}`}>
        <Prompt left="50" top="50" />
      </div> */}
    </AppContext.Provider>
  );
}
