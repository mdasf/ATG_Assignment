import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: setUser,
        logout: setUser,
        // logout: () => {
        //   setUser(null);
        //   console.log(user);
        // },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
