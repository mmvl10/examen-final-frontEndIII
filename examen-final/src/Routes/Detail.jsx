import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { dentistasState, dentistasDispatch } = useContextGlobal();
  const { id } = useParams();
  const urlDentista = `https://jsonplaceholder.typicode.com/users/${id}`;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(urlDentista)
      .then((response) => {
        dentistasDispatch({ type: "GET_A_DENTIST", payload: response.data });
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError("Error al cargar los datos del dentista");
      });
  }, [dentistasDispatch, urlDentista]);

  const navigate = useNavigate();

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const { dentista } = dentistasState;

  return (
    <>
      <h1>Detalle del Dentista {dentista.id}</h1>
      <table>
        <tbody>
          <tr>
            <td>Nombre</td>
            <td>{dentista.name}</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>{dentista.email}</td>
          </tr>
          <tr>
            <td>Teléfono</td>
            <td>{dentista.phone}</td>
          </tr>
          <tr>
            <td>Web</td>
            <td>{dentista.website}</td>
          </tr>
        </tbody>
      </table>

      <button className="back-button" onClick={() => navigate(-1)}>
        Volver
      </button>
    </>
  );
};

export default Detail;
