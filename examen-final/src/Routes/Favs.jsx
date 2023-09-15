import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";


const Favs = () => {

  const { favState } = useContextGlobal()

  return (
    <>
      <h4>Dentistas favoritos</h4>
      {!favState.favs.length && <h3 className="aviso">Aun no hay favoritos</h3>}
      <div className="card">
        {favState.favs.map(fav =>

          <Card data={fav} key={fav.id} />
        )}

      </div>
    </>
  );
};

export default Favs;