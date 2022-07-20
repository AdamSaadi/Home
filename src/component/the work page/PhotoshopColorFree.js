import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
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
            <img src="./images/Untitled-5.png" alt="" class="intro__img"></img>
        </section>
        <div class="portfolio-item-individual">
            <p>During this project, I worked with Dina Saadi, a great designer. The work focused on outline coloring. There were three projects I worked on. Down there, you can see them.
            </p>
            <p><a href="http://www.dinasaadi.com/"> her work </a></p>
            <img src="./images/Untitled-5.png" alt=""></img>
            <p> Because there are so many lines and colors in this picture, it's kind of hard to work on it.</p>

            <img src="./images/dina.png" alt=""></img>
            <p>This is another example!!</p>

            <img src="./images/Untitled-43.png" alt=""></img>
            <p></p>
           
        </div>
        <Foot/>
        </div>
    )
}