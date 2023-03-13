import React, { lazy, Suspense } from "react";
import Foot from "../sure/footer/footer";
import l1 from "../../images/ps.icon.png"
import l2 from "../../images/photoshop-profile-b-and-a.jpg"
import l3 from "../../images/photoshop-flower 2.jpg"
import l4 from "../../images/photoshop-flower.jpg"
import l5 from "../../images/photoshop-flowers.jpg"
import l6 from "../../images/photoshop-b-and-f-light.jpg"
const Nav = lazy(() => import("../sure/nav/nav"));
export default function Photoshop() {
    return (
        <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
        </Suspense>
            <section className="intro" >
                <h1 className="section__title section__title--intro">
                  Design using <strong> Photoshop</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro"><samp className="New-style-of-font">Color correction and effects</samp> </p>
                <img src={l1} alt="represent design using photoshop" className="intro__img"></img>
            </section>
            <div className="portfolio-item-individual">
            <div>
                <p>
  As a designer, I have been using Photoshop and Lightroom to create visually stunning designs. The process of using these two programs together has allowed me to take my designs to the next level.
  <br />
  <br />
  One of the key elements in my design process is color correction. By carefully adjusting the color palette of my designs, I am able to create a more cohesive and visually pleasing final product. Photoshop's powerful color correction tools have been invaluable in this process, allowing me to make precise adjustments to the hue, saturation, and brightness of my images.
  <br />
  <br />
  Another aspect of my design process that I have been focusing on is visual effects. By using Photoshop's various filters and tools, I have been able to add depth and dimension to my designs, making them more engaging and dynamic. Whether it's adding a subtle blur or creating a dramatic lighting effect, Photoshop has given me the tools to bring my designs to life.
  <br />
  <br />
  I also use Lightroom to edit my images and to give them a professional touch. Lightroom has a wide range of tools and presets that can help to enhance the overall look and feel of my images. With Lightroom, I can fine-tune the brightness, contrast, and other parameters to get the desired result.
  <br />
  <br />
  In conclusion, by using Photoshop and Lightroom together, I am able to create designs that are not only beautiful but also unique and professional. I am constantly learning and experimenting with these programs to improve my skills and produce the best possible results.</p>
</div>
                <img src={l2} alt="a photoshop effect"></img>
                <p>A photoshop effect...</p>
                
                <img src={l3} alt="before and after color correction"></img>
                <p>Before and after color correction.</p>

                <img src={l4}  alt="before and after color correction"></img>
                <p>Before and after color correction.</p>

                <img src={l5} alt="before and after color correction"></img>
                <p>Before and after color correction.</p>

                <img src={l6} alt="before and after color correction"></img>
                <p>Before and after color correction.</p>
            </div>
            <Foot />
        </div>
    )
}