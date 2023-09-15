import React from 'react';
import Card from '../Components/Card';
import { useContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { dentistasState } = useContextGlobal();

  return (
    <>
      <h4>Lista de dentistas</h4>
      <main className="card">
        {dentistasState.dentistas
          ? dentistasState.dentistas.map((dentista) => (
              <Card data={dentista} key={dentista.id} />
            ))
          : null}
      </main>
    </>
  );
};

export default Home;