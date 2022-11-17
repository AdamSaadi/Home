import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
import l1 from "../../images/photoshop-profile.png"
import l2 from "../../images/photoshop-profile-b-and-a.png"
import l3 from "../../images/photoshop-flower 2.jpg"
import l4 from "../../images/photoshop-flower.jpg"
import l5 from "../../images/photoshop-flowers.jpg"
import l6 from "../../images/photoshop-b-and-f-light.jpg"
export default function Photoshop() {
    return (
        <div>
            <Nav />
            <section class="intro" >
                <h1 class="section__title section__title--intro">
                  Design using <strong> Photoshop</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">Color correction and effects </p>
                <img src={l1} alt="" class="intro__img"></img>
            </section>
            <div class="portfolio-item-individual">
                <p className="some-b-text">The designs I created were made using Photoshop, Lightroom, and Illustrator </p>
                <img src={l2} alt="a photoshop effect"></img>
                <p>A photoshop effect...</p>
                <p></p>
                <img src={l3} alt="before and after color correction"></img>
                <p>Before and after color correction.</p>
                <p></p>
                <img src={l4}  alt="before and after color correction"></img>
                <p>Before and after color correction.</p>
                <p></p>
                <img src={l5} alt="before and after color correction"></img>
                <p>Before and after color correction.</p>
                <p></p>
                <img src={l6} alt="before and after color correction"></img>
                <p>Before and after color correction.</p>
                <p></p>
            </div>
            <Foot />
        </div>
    )
}