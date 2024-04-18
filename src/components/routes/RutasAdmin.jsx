import { Route, Routes } from "react-router-dom";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/administrador"
          element={<PaginaAdministrador></PaginaAdministrador>}
        >
          {" "}
        </Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
