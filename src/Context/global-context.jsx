import PropTypes from "prop-types";
//
import { createContext, useContext, useEffect, useState } from "react";

ContextProvider.propTypes = {
  children: PropTypes.element,
};

const ContextGlobal = createContext();

export default function ContextProvider({ children }) {
  const [dentists, setDentists] = useState(null);
  const [favs, setFavs] = useState(null);
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) =>
        res.json().then((data) => {
          setDentists(data);
        })
      )
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ContextGlobal.Provider
      value={{
        dentists,
        setDentists,
        favs,
        setFavs,
        theme,
        setTheme,
        loading,
        setLoading,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
}

export const useGlobalStates = () => useContext(ContextGlobal);
