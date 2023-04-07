import * as URL from  "../constants/urlFrontEnd";

import { Route, Routes as RoutesContainer } from "react-router-dom";

import Error from "../views/Error404"
import Home from "../views/Home";
import Lost from "../views/Lost";
import React from "react";
import { useParams } from "react-router";

/**
 * Routes of the application
 * with public and private route
 *
 * @author David Cordoba
 */

const Routes = () => {

 return (
  <RoutesContainer>
   <Route path={URL.URL_HOME} element={<Home/>}/>
   <Route path={URL.URL_LOST} element={<Lost/>}/>
   <Route path="/:Code" element={<Home />} />
   <Route path={URL.URL_ERROR} element ={<Error/>}/>
   
  </RoutesContainer>
 )
};


export default Routes;
