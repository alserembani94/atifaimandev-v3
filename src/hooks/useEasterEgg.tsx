// Create a simple context provider to manage the state of the easter egg. This context provider will be used to wrap the entire application to listen for the easter egg.

// Path: src/context/easterEgg.tsx

import { createContext, FC, useContext, useEffect, useState } from "react";
import useKonamiCode from "./useKonamiCode";
import { Sequence } from "@/pages/api/stashes";

type EasterEggContextType = {
  easterEgg: boolean;
  isOpenDen: boolean;
  setIsOpenDen: (value: boolean) => void;
  getSequence: () => string | null;
  triggerSequence: (sequencePhase: Sequence) => void;
};

const EasterEggContext = createContext<EasterEggContextType>({
  easterEgg: false,
  isOpenDen: false,
  setIsOpenDen: () => {},
  getSequence: () => null,
  triggerSequence: () => {},
});

export const useEasterEgg = () => {
  return useContext(EasterEggContext);
};

export const EasterEggProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [easterEgg, setEasterEgg] = useState(false);
  const [isOpenDen, setIsOpenDen] = useState(false);

  const triggerSequence = (sequencePhase: Sequence) => {
    localStorage.setItem("sequence", sequencePhase);
  }

  const getSequence = () => {
    return localStorage.getItem("sequence");
  }
  
  const handleEasterEgg = () => {
    const sequence = getSequence();
    if (sequence === null) {
      alert("Catch it before it hides again 👀!");
    }
    setEasterEgg(true);
  };

  useEffect(() => {
    const theTimeout = setTimeout(() => {
      if (!easterEgg) return;
      setEasterEgg(false);
    }, 1000 * 3);

    return () => {
      clearTimeout(theTimeout);
    };
  }, [easterEgg]);

  useKonamiCode(handleEasterEgg);

  return (
    <EasterEggContext.Provider value={{ easterEgg, triggerSequence, getSequence, isOpenDen, setIsOpenDen }}>
      {children}
    </EasterEggContext.Provider>
  );
};