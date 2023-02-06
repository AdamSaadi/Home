import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
import l0 from "../../images/me-photograph.jpg"
import l2 from "../../images/Photography-BMW.png"
import l3 from "../../images/Photograph-light.jpg"
import l4 from "../../images/Photograph-book.png"
import l5 from "../../images/Photograph-guitar.png"
import l6 from "../../images/Photograph-ice.png"
import l7 from "../../images/Photograph-rook.jpg"
import l8 from "../../images/Photography-flower.jpg"
import l9 from "../../images/photograph-pape.jpg"
import l10 from "../../images/Photography-red-flower.jpg"
import l11 from "../../images/chanel.jpg"
import l12 from "../../images/photography-goast.jpg"
export default function Photograph() {
    return (
        <div>
            <Nav />
            <section class="intro" >
                <h1 class="section__title section__title--intro">
                    Photography<strong>Section of my photo</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">By my lence 📸</p>
                <img src={l0} alt="" class="intro__img"></img>
            </section>        

            <div class="portfolio-item-individual">
            <p className=".portfolio-item-individual-top">
            Being a photographer is like being a time traveler, but instead of traveling through time, I save memories! With three years of experience under my belt, I've become a master of time travel, capturing memories and freezing them forever.
            <br />
            <br />
            My portfolio website is like a portal to the past, a place where I can showcase my time-traveling adventures and let others see the world through my lens. It's like a virtual museum of memories, where I can store all of my greatest hits and share them with the world.
            <br />
            <br />
            But let's be real, the true reward for being a photographer isn't fame or fortune. It's the pure joy of capturing the beauty of the world and the happiness it brings to me. The best part of photography is being able to look back at the memories and relive them as if it were yesterday. So I'll keep clicking that shutter button, and who knows, I might just capture the next "time machine" of photography!
            </p>

                <img src={l11} alt="this shoot is for a  black BMW car"></img>
                <p classname="portfolio-item-individual-p">Product photography session for Chanel</p>
            </div>

            <div class="portfolio-item-individual">
                <p className="some-b-text"> </p>
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
                <img src={l9} alt=""></img>
                <p></p>
            </div>

            <div class="portfolio-item-individual">
                <img src={l12} alt=""></img>
                <p>Art like this reflects my soul and my feelings at the time</p>
            </div>

            <div class="portfolio-item-individual">
                <img src={l10} alt="a beauty red flower"></img>
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