import React, { lazy, Suspense } from "react";
import Foot from "../sure/footer/footer"; 
import l1 from "../../images/uiux.png"
import l2 from "../../images/wrok-uiux.jpg"
const Nav = lazy(() => import("../sure/nav/nav"));
export default function UIUXdesign() {
    return (
        <div>
                    <Suspense fallback={<div>Loading...</div>}>
          <Nav />
        </Suspense>
            <section className="intro" >
                <h1 className="section__title section__title--intro">
                The Art of <strong> UI/UX Design </strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">Crafting User-Centered Experiences</p>
                <img src={l1} alt="represent my art of ui ux design crafting user centered experience" className="intro__img"></img>
            </section>
            <div className="portfolio-item-individual">
            
  <p>I am a UI/UX designer and I just finished the four series course on UI/UX design offered by the California Institute of the Arts. Let me tell you, it was a wild ride.
  <br />
  <br />
  Throughout the course, I learned that user research is like a treasure hunt for the Holy Grail of design. And just like Indiana Jones, sometimes you have to outrun a giant boulder to get to it.
  <br />
  <br />
  I also learned about design thinking, which is like being a mad scientist in a lab, experimenting with different design solutions until you find the perfect potion.
  <br />
  <br />
  Prototyping was like playing with LEGOs, but instead of building castles, we were building digital interfaces. And let's not forget about user testing, it was like being a detective solving a mystery, trying to figure out what the user wants and needs.
  <br />
  <br />
  One of the most exciting parts of the course was working on real-world projects. It was like being in an episode of "Mythbusters", except instead of blowing stuff up, we were blowing user's minds with our designs.
  <br />
  <br />
  The course also allowed me to network with other designers and I must say, they were a colorful bunch. From the quiet and reserved to the loud and outrageous, we all had our unique design personalities.
  <br />
  <br />
  Overall, the course was an epic journey and I would highly recommend it to anyone who wants to become a UI/UX designer. It's like a roller coaster ride, filled with ups and downs, twists and turns, but in the end, you come out with a design that's worthy of a standing ovation.</p>
                <img src={l2} alt="represent ui ux design"></img>
            </div>
            <Foot />
        </div>
    )
}