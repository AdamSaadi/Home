import React from "react";
import Foot from "D:/working-stuff/the/src/component/footer/footer.js";
import Nav from "D:/working-stuff/the/src/component/sure/nav.js";

export default function Thisweb(){
    return(
        <div>
            <Nav/>
        <section class="intro" >
            <h1 class="section__title section__title--intro">
                This portfolio website  <strong>using React</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">React Web Development </p>
            <img src="./images/react-logo.png" alt="" class="intro__img"></img>
        </section>
        <div class="portfolio-item-individual">
            <p>React and JSX are used to make the pages responsive
and all designs on it using CSS. 
</p>
            <img src="./images/home.js - the - Visual Studio Code 6_12_2022 10_07_27 AM.png" alt=""></img>
            <p>Props for the nav bar and React router were some of the tools I used
State and Emailjs were also used to make the connection part of the page, as well as Photoshop for some logo designs

            </p>
        </div>
        <Foot/>
        </div>
    )
}