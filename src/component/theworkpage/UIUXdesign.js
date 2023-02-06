import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav"; 
import l1 from "../../images/uiuxdesign-topphoto.jpg"
import l2 from "../../images/wrok-uiux.jpg"
export default function UIUXdesign() {
    return (
        <div>
            <Nav />
            <section class="intro" >
                <h1 class="section__title section__title--intro">
                    UI UX Design<strong>using linux </strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">Design</p>
                <img src={l1} alt="" class="intro__img"></img>
            </section>
            <div class="portfolio-item-individual">
            
  <p>I am a UI/UX designer and I just finished the four series course on UI/UX design offered by the California Institute of the Arts. Let me tell you, it was a wild ride.</p>
  <p>Throughout the course, I learned that user research is like a treasure hunt for the Holy Grail of design. And just like Indiana Jones, sometimes you have to outrun a giant boulder to get to it.</p>
  <p>I also learned about design thinking, which is like being a mad scientist in a lab, experimenting with different design solutions until you find the perfect potion.</p>
  <p>Prototyping was like playing with LEGOs, but instead of building castles, we were building digital interfaces. And let's not forget about user testing, it was like being a detective solving a mystery, trying to figure out what the user wants and needs.</p>
  <p>One of the most exciting parts of the course was working on real-world projects. It was like being in an episode of "Mythbusters", except instead of blowing stuff up, we were blowing user's minds with our designs.</p>
  <p>The course also allowed me to network with other designers and I must say, they were a colorful bunch. From the quiet and reserved to the loud and outrageous, we all had our unique design personalities.</p>
  <p>Overall, the course was an epic journey and I would highly recommend it to anyone who wants to become a UI/UX designer. It's like a roller coaster ride, filled with ups and downs, twists and turns, but in the end, you come out with a design that's worthy of a standing ovation.</p>
                <img src={l2} alt=""></img>
                <p></p>
                <p></p>
            </div>
            <Foot />
        </div>
    )
}