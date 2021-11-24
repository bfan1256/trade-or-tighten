import { createContext, useState, useContext } from "react";

const playerContext = createContext({});

export function PlayerProvider({ children }: any): any {
  const player = usePlayerGlobal();
  return <playerContext.Provider value={player}>{children}</playerContext.Provider>;
}

export const usePlayer = (): any => {
  return useContext(playerContext);
};

function usePlayerGlobal() {
  const [player, setPlayer] = useState<any | null>(null);
  const [id, setId] = useState<string>("");

  return {
    player,
    setPlayer,
    id,
    setId,
  };
}
