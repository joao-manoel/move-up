import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {ChallengesContext} from './ChallengesContext';

interface CountContextData {
  minutes: number;
  seconds: number
  hasFinished: boolean;
  isActive: boolean;
  startCount: () => void;
  resetCount: () => void;
}

export const CountContext = createContext({} as CountContextData);

interface CountProviderProps {
  children: ReactNode;
}

let countTimeout: NodeJS.Timeout;

export function CountProvider({children}: CountProviderProps){

  const { startNewChallenge } = useContext(ChallengesContext);
  
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCount(){
    setIsActive(true);
  }

  function resetCount(){
    clearTimeout(countTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
    setHasFinished(false);
  }

  useEffect(() =>{
    if(isActive && time > 0){

      countTimeout = setTimeout(() =>{
        setTime(time - 1);
      }, 1000);

    } else if(isActive && time === 0){
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return(
    <CountContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCount,
        resetCount
      }}
    >
      {children}
    </CountContext.Provider>
  );
}