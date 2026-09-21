import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function Auth() {
  const { isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>

      <p>
        {isAuthenticated
          ? "you are now authenticated, you can proceed"
          : "you are not authenticated"}
      </p>

      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={(e) => setIsAuthenticated(e.target.checked)}
        />
        I'm not a robot
      </label>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );
}

export default App;