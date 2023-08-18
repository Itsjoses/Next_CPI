import React, { createContext, useContext, useState } from 'react'


const UserContext = createContext();
export function GetUserContext(){
    return useContext(UserContext);
}

export default function UserComponent({children}) {

    const [user,setUser] = useState();

  return (  
    <UserContext.Provider value={{user , setUser}}>
      {children}
    </UserContext.Provider>
  )
}
