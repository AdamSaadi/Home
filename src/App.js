import React from "react";
import Contact from "./component/connect/connectt";
import Home from "./component/home/home";
import Work from "./component/work/work";
import Air from "./component/theworkpage/Airbab";
import PhotoshopColorFree from "./component/theworkpage/PhotoshopColorFree";
import Photoshop from "./component/theworkpage/Photoshop";
import Photograph from "./component/theworkpage/Photograph";
import Thisweb from "./component/theworkpage/ThisWeb";
import "./index.css"
import Navhum from "./component/sure/nav/Navhum";
import StockPrice from "./component/theworkpage/StockPrice";

export default function App() {
    let Component
    switch (window.location.pathname) {
        case "/Work":
            Component = <Work />
            break;
        case "/Connect":
            Component = <Contact />
            break;
        case "/StockPrice":
            Component = <StockPrice />
            break;
        case "/Air":
            Component = <Air />
            break;
        case "/PhotoshopColorFree":
            Component = <PhotoshopColorFree />
            break;
        case "/Photoshop":
            Component = <Photoshop />
            break;
        case "/Photograph":
            Component = <Photograph />
            break;
        case "/Thisweb":
            Component = <Thisweb />
            break;
        case "/Navhum":
            Component = <Navhum />
            break;
        default:
            Component = <Home />
            break;

    }
    return (
        <div>
            {Component}
        </div>
    )
}