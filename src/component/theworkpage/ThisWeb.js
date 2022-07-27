import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
import l1 from "../../images/react-logo.png"
import l2 from "../../images/home.js - the - Visual Studio Code 6_12_2022 10_07_27 AM.png"
export default function Thisweb() {
    return (
        <div>
            <Nav />
            <section class="intro" >
                <h1 class="section__title section__title--intro">
                    This portfolio website  <strong>using React</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">React Web Development </p>
                <img src={l1} alt="" class="intro__img"></img>
            </section>
            <div class="portfolio-item-individual">
                <p>React and JSX are used to make the pages responsive
                    and all designs on it using CSS.
                </p>
                <img src={l2} alt=""></img>
                <p>Props for the nav bar and React router were some of the tools I used
                    State and Emailjs were also used to make the connection part of the page, as well as Photoshop for some logo designs

                </p>
            </div>
            <Foot />
        </div>
    )
}