import React, { useState } from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import DoctorDH from '../assets/doctor.jpg'
import { FavsNo, FavsYes } from "./Icons";

const Card = ({ data }) => {
  const { favDispatch, favState } = useContextGlobal();
  const [favorite, setFavorite] = useState("")

  const addFav = () => {
    const isFavorited = favState.favs.includes(data);

    if (isFavorited) {
      favDispatch({ type: 'DISLIKE', payload: data });
      removeFromStorage(data); 
      alert("Eliminado de la lista de Favoritos");
    } else {
      favDispatch({ type: 'LIKE', payload: data });
      addToStorage(data); 
      alert("Agregado a la lista de Favoritos");
    }
  }

  const addToStorage = (dentist) => {
    const favorites = JSON.parse(localStorage.getItem('favs')) || [];
    favorites.push(dentist);
    localStorage.setItem('favs', JSON.stringify(favorites));
  }

  const removeFromStorage = (dentist) => {
    const favorites = JSON.parse(localStorage.getItem('favs')) || [];
    const updatedFavorites = favorites.filter(fav => fav.id !== dentist.id);
    localStorage.setItem('favs', JSON.stringify(updatedFavorites));
  }

  return (
    <ul>
      <li>
        <img src={DoctorDH} alt={"Dr." + data.name} />
        <Link to={`/dentista/` + data.id}>
          <div>
            <strong>
              {data.name}
            </strong>
            {data.username}
          </div>
        </Link>
        <div>
          <button
            onClick={addFav}
            className={`favButton ${favState.favs.includes(data) ? "liked" : ""}`}>
            {favState.favs.includes(data) ? <FavsYes /> : <FavsNo />}
          </button>
        </div>
      </li>
    </ul>
  );
};

export default Card;
