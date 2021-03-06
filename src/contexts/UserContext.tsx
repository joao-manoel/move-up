import { createContext, ReactNode, useEffect, useState } from "react";

import { useSession } from 'next-auth/client';

interface User {
  email: string;
  image: string;
  name: string;
}

interface UserContextData {
  user: User;
  
}

interface UserProviderProps {
  children: ReactNode;
}



export const UserContext = createContext({} as UserContextData);


export  function UserProvider( {children}: UserProviderProps){

  const [user, setUser] = useState()
  
  
  return(
    <UserContext.Provider value={{
      user
    }}>
      {children}
    </UserContext.Provider>
  )
}