import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
import l1 from "../../images/PhotoshopColorFree-face.jpg"
import l2 from "../../images/PhotoshopColorFree-water.png"
import l3 from "../../images/PhotoshopColorFree-skeleton.jpg"
export default function PhotoshopColorFree() {
    return (
        <div>
            <Nav />
            <section class="intro" >
                <h1 class="section__title section__title--intro">
                    Photoshop <strong>Color book</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">
                vector outline on illustrator </p>
                <img src={l1} alt="" class="intro__img"></img>
            </section>
            <div class="portfolio-item-individual">
                <div className="the-blog-in-work">
                <p>
                "Exploring the World of Outline Coloring in Design"
                <br />
                <br />
                Design is an ever-evolving field, and one of the latest trends is the use of outline coloring. This technique adds depth and dimension to artwork and is being used in various mediums such as digital art and print design.
                <br />
                <br />
                Recently, I had the opportunity to work with designer <a href="http://www.dinasaadi.com/"> Dina Saadi</a> , a talented designer, on several projects that utilized the technique of outline coloring. Together we were able to create visually impactful designs using this technique.
                <br />
                <br />
                Working with outline coloring was an exciting and rewarding experience and I highly recommend it to any designer looking to take their work to the next level. Dina's expertise and passion for design was invaluable, and I look forward to working with her in the future
                </p>
                </div>
                <img src={l1} alt=""></img>
                <p> Because there are so many lines and colors in this picture, it's kind of hard to work on it.</p>

                <img src={l2} alt=""></img>
                <p>This is another example!!</p>

                <img src={l3} alt=""></img>
                <p></p>

            </div>
            <Foot />
        </div>
    )
}