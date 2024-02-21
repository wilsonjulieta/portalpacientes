import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserContextProvider({ children, initUser }) {
  const [user, setUser] = useState(initUser ?? {});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}