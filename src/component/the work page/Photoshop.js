import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
import l1 from "D:/the/src/images/photoshop-workk.png"
import l2 from "D:/the/src/images/photoshoot.png"
import l3 from "D:/the/src/images/Track_Progress_14052021_205835.jpg"
import l4 from "D:/the/src/images/Track_Progress_08052021_091229.jpg"
import l5 from "D:/the/src/images/Track_Progress_25042021_131727.jpg"
export default function Photoshop(){
    return(
        <div>
            <Nav/>
        <section class="intro" >
            <h1 class="section__title section__title--intro">
                Color Design using <strong> Photoshop</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">Color correction -- Effects </p>
            <img src={l1} alt="" class="intro__img"></img>
        </section>
        <div class="portfolio-item-individual">
            <p>My designs were made in Photoshop and other programs including Lightroom and Illustrator </p>
            <img src={l2} alt="a photoshop effect"></img>
            <p>A photoshop effect...</p>
            <p></p>
            <img src={l3} alt="before and after color correction"></img>
            <p>Before and after color correction.</p>
            <p></p>
            <img src={l4} alt="before and after color correction"></img>
            <p>Before and after color correction.</p>
            <p></p>
            <img src={l5} alt="before and after color correction"></img>
            <p>Before and after color correction.</p>
            <p></p>
        </div>
        <Foot/>
        </div>
    )
}