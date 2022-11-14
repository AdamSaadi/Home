import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
import l1 from "../../images/air-web-project.png"
export default function Air() {
    return (
        <div>
            <Nav />
            <section class="intro" >
                <h1 class="section__title section__title--intro">
                    Website for <strong>Air bob </strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">Web Development</p>
                <img src={l1} alt="" class="intro__img"></img>
            </section>
            <div class="portfolio-item-individual">
                <p className="some-b-text">I am just beginning my career in web development. This is my first website built using the React framework.            </p>
                <img src={l1} alt=""></img>
                <p>One of the most important features of this web is the ability to access data from another file. It's important because if you create a large website, you will need to add data or change it consistently. Having a data file is much easier.  </p>
                <p></p>
            </div>
            <Foot />
        </div>
    )
}