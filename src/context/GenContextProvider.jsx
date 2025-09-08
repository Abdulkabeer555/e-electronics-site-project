import React, { createContext, useState } from 'react';

const context = createContext();

function GenContextProvider({ children }) {

  const [login, setLogin] = useState(false);
  const [loginUser, setLoginUser] = useState({});
  const [allUsers, setAllUsers] = useState([
    {
      userName: "Bilal",
      userEmail: "bilal@gmail.com",
      userPwd: "bilal123",
    }
  ]);

  return (
    <div>
      <context.Provider value={{ login, setLogin, allUsers, setAllUsers, loginUser, setLoginUser }}>
        {children}
      </context.Provider>

    </div>
  )
}

export default GenContextProvider;
export { context };