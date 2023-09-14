import PropTypes from "prop-types";
//
import { createContext, useContext, useState } from "react";

ContextProvider.propTypes = {
  children: PropTypes.element,
};

const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(initialState);

export default function ContextProvider({ children }) {
  const [dentits, setDentits] = useState(null);
  const [favs, setFavs] = useState(null);
  const [theme, setTheme] = useState(null);
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{ dentits, setDentits }}>
      {children}
    </ContextGlobal.Provider>
  );
}

export const useGlobalStates = () => useContext(ContextGlobal);
