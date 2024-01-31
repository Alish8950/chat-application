"use client";
import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import * as io from "socket.io-client";

interface AppContextProps {
  children: ReactNode;
}

export interface UserState {
  socket: any;
  setCountAlish: (e: any) => void;
  setCountRishabh: (e: any) => void;
  setMessagesRishabh: (e: any) => void;
  countAlish: number;
  countRishabh: number;
  messagesRishabh: string[];
}

const initialState: UserState = {
  socket: {},
  setCountAlish: () => {},
  setCountRishabh: () => {},
  setMessagesRishabh: () => {},
  countAlish: 0,
  countRishabh: 0,
  messagesRishabh: [],
};

const UserContext = createContext<UserState | undefined>(initialState);

const UserProvider: FC<AppContextProps> = ({ children }) => {
  const socket = io.connect("http://localhost:3001");
  const [countAlish, setCountAlish] = useState(0);
  const [countRishabh, setCountRishabh] = useState(0);
  const [messagesRishabh, setMessagesRishabh] = useState<string[]>([]);

  return (
    <UserContext.Provider
      value={{
        socket,
        setCountAlish,
        setCountRishabh,
        countAlish,
        countRishabh,
        messagesRishabh,
        setMessagesRishabh,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useGlobalUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useGlobalUser must be used within a AppProvider");
  }
  return context;
};

export { UserProvider, useGlobalUser };
