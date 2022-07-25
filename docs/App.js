import React from "react";
import Contact from "./component/connect/connectt";
import Home from "./component/home/home";
import Work from "./component/work/work";
import Air from "./component/the work page/Airbab";
import PhotoshopColorFree from "./component/the work page/PhotoshopColorFree";
import Photoshop from "./component/the work page/Photoshop";
import Photograph from "./component/the work page/Photograph";
import Thisweb from "./component/the work page/ThisWeb";
import "./index.css"
import Navhum from "./component/sure/nav/Navhum";
import StockPrice from "./component/the work page/StockPrice";

export default function App(){
  let Component
 switch (window.location.pathname){
      case "/":
          Component = <Home/>
          break;
      case "/Work":
          Component = <Work/>
          break;
      case "/Connect":
          Component = <Contact/>
          break;
      case "/StockPrice":
          Component = <StockPrice/>
          break;
      case "/Air":
          Component = <Air/>
          break;
      case "/PhotoshopColorFree":
          Component = <PhotoshopColorFree/>
          break;
      case "/Photoshop":
          Component = <Photoshop/>
          break;
      case "/Photograph":
          Component = <Photograph/>
          break;
      case "/Thisweb":
          Component = <Thisweb/>
          break;   
      case "/Navhum":
          Component = <Navhum/>
          break; 
  
}
  return(
    <div>
    {Component}
    </div>
  )
  }