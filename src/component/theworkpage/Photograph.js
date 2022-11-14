import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
import l1 from "../../images/untitled-3ER334(1-of-1).png"
import l2 from "../../images/untitleWWd-(1-of-1).png"
import l3 from "../../images/KIH.jpg"
import l4 from "../../images/untitled-3ER334(1-of-1).png"
import l5 from "../../images/untitleEd-(1-of-1).png"
import l6 from "../../images/_MG_1033.png"
import l7 from "../../images/YT.jpg"
import l8 from "../../images/_MG_1321-01.png"
import l9 from "../../images/20210506171144__MG_3336.jpg"

export default function Photograph() {
    return (
        <div>
            <Nav />
            <section class="intro" >
                <h1 class="section__title section__title--intro">
                    Photography<strong>Section of my photo</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro"> By my lence 📸</p>
                <img src={l1} alt="" class="intro__img"></img>
            </section>
            <div class="portfolio-item-individual">
                <p className="some-b-text">Here are some pictures I'm proud of. </p>
                <img src={l2} alt="this shoot is for a  black BMW car"></img>
                <p>A black BMW car is the subject of this shoot</p>
            </div>
            <div class="portfolio-item-individual">
                <img src={l3} alt="working with light"></img>
                <p>Light is the theme of this project, and I took these photos at a low shutter speed to capture the light </p>
            </div>
            <div class="portfolio-item-individual">
                <img src={l4} alt=" book and know word"></img>
                <p>this is a black and white meaningful photo for a book and "know" word</p>
            </div>
            <div class="portfolio-item-individual">
                <img src={l5} alt="the guitar is shining"></img>
                <p>An example of this project is how the guitar shines through the blurry Christmas tree decorations</p>
            </div>
            <div class="portfolio-item-individual">
                <img src={l6} alt="micro project for a cube of ice and how it melt"></img>
                <p>Project about the melting of ice cubes with microlenses</p>
            </div>
            <div class="portfolio-item-individual">
                <img src={l7} alt="an old house"></img>
                <p>A black igneous rock house is the subject of this project in Syria</p>
            </div>
            <div class="portfolio-item-individual">
                <img src={l8} alt="several white flowers on the ground"></img>
                <p>several white flowers with dark theme should be shot on the ground</p>
            </div>
            <div class="portfolio-item-individual">
                <img src={l9} alt="a beauty red flower"></img>
                <p>Beautiful red flower</p>
            </div>

            <Foot />
        </div>
    )
}
/*
import l11 from "../../images/ERE.JPG"
            <div class="portfolio-item-individual">
                <img src={l11} alt="a beauty red flower"></img>
                <p>Someone sitting on the street</p>
            </div>
*/