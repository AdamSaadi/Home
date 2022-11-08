import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
import l1 from "../../images/py-stock.png"
export default function Hacking() {
    return (
        <div>
            <Nav />
            <section class="intro" >
                <h1 class="section__title section__title--intro">
                    Hacking project<strong>using linux </strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">Hacking code</p>
                <img src={l1} alt="" class="intro__img"></img>
            </section>
            <div class="portfolio-item-individual">
                <p></p>
                <img src={l1} alt=""></img>
                <p></p>
                <p></p>
            </div>
            <Foot />
        </div>
    )
}