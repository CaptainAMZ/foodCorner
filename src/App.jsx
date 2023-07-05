import { useRoutes } from "react-router-dom";
import { routes } from "./Routes";
//? For Routes & Route
// import {Router} from "./Routes";
import "./App.css";
import { Footer, Header } from "./exports";
import { icons } from "./data";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      {/* //? For useRoutes */}
      <Header />
      {router}
      <Footer data={icons} />
      {/* //? For Routes & Route */}
      {/* <Router /> */}
    </>
  );
}

export default App;
