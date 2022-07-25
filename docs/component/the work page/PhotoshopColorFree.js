import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
import l1 from "D:/the/src/images/Untitled-5.png"
import l2 from "D:/the/src/images/Untitled-5.png"
import l3 from "D:/the/src/images/dina.png"
import l4 from "D:/the/src/images/Untitled-43.png"
export default function PhotoshopColorFree(){
    return(
        <div>
            <Nav/>
        <section class="intro" >
            <h1 class="section__title section__title--intro">
                Photoshop <strong>Color book</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">
            vector outline on illustrator </p>
            <img src={l1} alt="" class="intro__img"></img>
        </section>
        <div class="portfolio-item-individual">
            <p>During this project, I worked with Dina Saadi, a great designer. The work focused on outline coloring. There were three projects I worked on. Down there, you can see them.
            </p>
            <p><a href="http://www.dinasaadi.com/"> her work </a></p>
            <img src={l2} alt=""></img>
            <p> Because there are so many lines and colors in this picture, it's kind of hard to work on it.</p>

            <img src={l3} alt=""></img>
            <p>This is another example!!</p>

            <img src={l4} alt=""></img>
            <p></p>
           
        </div>
        <Foot/>
        </div>
    )
}