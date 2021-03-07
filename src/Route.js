import React from "react";
import {BrowserRouter as Router,Switch,Route}from "react-router-dom";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Product from "./Componets/Product";
import ProductItem from "./Componets/ProductItem";
import NavBar from "./Componets/NavBar";


function RoutConfig() {
  return (
    <div>
        <Router>
          <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route exact path="/Product" component={Product}/>
                <Route path="/Product/:id" component={ProductItem}/>
                <Route path="*" component={()=><h2>404 Eror Found</h2>}/>

            </Switch>
        </Router>
      
    </div>
  );
}

export default RoutConfig;