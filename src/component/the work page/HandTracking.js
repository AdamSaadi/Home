import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
export default function Python(){
    return(
        <div>
            <Nav/>
        <section class="intro" >
            <h1 class="section__title section__title--intro">
               Hand Tracking<strong>AI work </strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">AI Python Development</p>
            <img src="./images/4518857_python_icon.png" alt="" class="intro__img"></img>
        </section>
        <div class="portfolio-item-individual">
            <p>
                this is an AI python project that 
            </p>
            <img src="./images/hand tracking minimum.py - the - Visual Studio Code 6_18_2022 4_49_28 PM.png" alt=""></img>
            <p>
                we use mediapipe and CV2 
                the most important thing about this web is acsses a data from anther file this is an important thing because
                when you make a big web and need to change or add data consestently you it's easier to have a data file
            </p>
            <p></p>
        </div>
        <Foot/>
        </div>
    )
}