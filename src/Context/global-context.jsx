import PropTypes from "prop-types";
//
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

ContextProvider.propTypes = {
  children: PropTypes.element,
};

const localFavs = JSON.parse(localStorage.getItem("favs"));
const initialFavState = localFavs ? localFavs : [];

// const themes = {
//   light: {
//     font: "black",
//     background: "white",
//   },
//   dark: {
//     font: "white",
//     background: "black",
//   },
// };

const initialStates = {
  dentists: [],
  favs: initialFavState,
  theme: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DELETE FAV":
      return { ...state, favs: [...action.payload] };
    case "SWITCH THEME":
      return { ...state, theme: !state.theme };
    default:
      throw new Error();
  }
};

const ContextGlobal = createContext();

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialStates);
  const [isLoadingDentists, setIsLoadingDentists] = useState(true);
  const [isLoadingFavs, setIsLoadingFavs] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) =>
        res.json().then((data) => {
          dispatch({ type: "GET DENTISTS", payload: data });
          setIsLoadingDentists(false);
        })
      )
      .catch((error) => {
        setIsLoadingDentists(false);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
    setIsLoadingFavs(false);
  }, [state.favs]);

  // const handleChangeTheme = () => {
  //   if (theme === themes.dark) setTheme(themes.light);
  //   if (theme === themes.light) setTheme(themes.dark);
  // };

  return (
    <ContextGlobal.Provider
      value={{
        state,
        dispatch,
        isLoadingDentists,
        isLoadingFavs,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
}

export const useGlobalStates = () => useContext(ContextGlobal);
