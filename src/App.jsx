import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { useState } from "react";

/**
 * Component RouteWithNavigation
 * To create the structure of the application (nav bar, routes, toast, etc...)
 *
 * @author David Cordoba
 */

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
