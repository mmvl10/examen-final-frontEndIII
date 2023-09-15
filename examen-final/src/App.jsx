import { Route, Routes } from "react-router-dom";
import { routes } from './Components/utils/routes';
import Template from "./Components/Template";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";


import { useContextGlobal } from "./Components/utils/global.context";
import NotFound from "./Routes/PageNotFound";

function App() {

  const { themeState } = useContextGlobal()
  return (
    <div className={"App " + themeState.theme}>

      <Routes>
        <Route path="/" element={<Template />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.dentist} element={<Detail />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path={routes.notFound} element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;