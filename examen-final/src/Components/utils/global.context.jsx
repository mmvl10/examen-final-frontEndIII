import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';


export const initialState = {
  theme: "",
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  dentistas: [],
  dentista: {}
}

export const ContextGlobal = createContext(undefined);

const dataReducer = (state, action) => {
  switch (action.type) {

    case "LIKE":
      return { ...state, favs: [action.payload, ...state.favs] }
    case "DISLIKE":
      return { ...state, favs: state.favs.filter(fav => fav.id !== action.payload.id) };
    case "CHANGE_THEME":
      return { ...state, theme: action.payload }
    default:
      throw new Error()
  }
}
const dentistsReducer = (state, action) => {
  switch (action.type) {
        case "GET_LIST":
      return { ...state, dentistas: action.payload }
    case "GET_A_DENTIST":
      return { ...state, dentista: action.payload }
    default:
      throw new Error()
  }
}

export const ContextProvider = ({ children }) => {
  const [favState, favDispatch] = useReducer(dataReducer, initialState)

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState.favs))
  }, [favState.favs])

  const [themeState, themeDispatch] = useReducer(dataReducer, initialState)
  const [dentistasState, dentistasDispatch] = useReducer(dentistsReducer, initialState)

  const urlDentistas = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios.get(urlDentistas)
      .then(response => {
        dentistasDispatch(({ type: 'GET_LIST', payload: response.data }))

      })
  }, [urlDentistas])




  return (
    <ContextGlobal.Provider value={{
      favState, favDispatch,
      dentistasState, dentistasDispatch,
      themeState, themeDispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)