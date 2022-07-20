import React from "react";
import Contact from "D:/working-stuff/the/src/component/connect/connectt.js";
import Home from "D:/working-stuff/the/src/component/home/home.js";
import Work from "D:/working-stuff/the/src/work/work.js";
import Air from "D:/working-stuff/the/src/the work page/Airbab.js";
import PhotoshopColorFree from "D:/working-stuff/the/src/the work page/PhotoshopColorFree.js";
import Photoshop from "D:/working-stuff/the/src/the work page/Photoshop.js";
import Photograph from "D:/working-stuff/the/src/the work page/Photograph.js";
import Thisweb from "D:/working-stuff/the/src/the work page/Photoshop.js";
import "./index.css"
import Navhum from "D:/working-stuff/the/src/component/sure/nav/Navhum.js";
import Python from "D:/working-stuff/the/src/the work page/HandTracking.js";
import StockPrice from "D:/working-stuff/the/src/the work page/StockPrice.js"
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
      case "/Python":
          Component = <Python/>
          break; 
  
}
  return(
    <div>
    {Component}
    </div>
  )
  }