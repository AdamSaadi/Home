import React from "react";
import Nav from "../sure/nav/nav";
import Foot from "../sure/footer/footer";
import l1 from "../../images/work-py-stock.jpg"
import l2 from "../../images/work-air-web.png"
import l3 from "../../images/work-photoshop.jpg"
import l4 from "../../images/work-photograph.png"
import l5 from "../../images/work-This-web.jpg" 
import l6 from "../../images/work-m-photoshop.jpg"
import l7 from "../../images/work-UI-UX.jpg"
export default function Work() {
  function Customlink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
      <li className={path === href ? "active" : ""}>
        <a href={href} {...props}>
          {children}
        </a>
      </li>
    )
  }

  return (
    <><Nav />
      <section class="my-work" id="work">
        <h2 class="section__title section__title--work">My Work</h2>
        <p class="section__subtitle section__subtitle--work">Here is a selection of my work</p>

        <div class="portfolio">

            <div className="baba">
                <p className="text_here">stock market-python</p>
                <a href="/work/StockPrice" class="portfolio__item">
                   <Customlink href="/StockPrice"><img src={l1} alt="e" class="portfolio__img"></img></Customlink>
                </a>
                
            </div>

            <div className="baba">
          <p className="text_here">Air bob-React</p>
          <a href="/work/AirblbWebsite" class="portfolio__item">
            <Customlink href="/Air"><img src={l2} alt="r" class="portfolio__img"></img></Customlink>
          </a>
          </div>

          <div className="baba">
          <p className="text_here">vector outline-Design</p>
           <a href="/work/potoshopColorFree" class="portfolio__item" >
             <Customlink href="/PhotoshopColorFree"><img src={l3} alt="e" class="portfolio__img"></img></Customlink>
            </a>
          </div>

          <div className="baba">
          <p className="text_here">photography-canon</p>
          <a href="/work/Photograph" class="portfolio__item">
            <Customlink href="/Photograph"><img src={l4} alt="e" class="portfolio__img"></img></Customlink>
          </a>
          </div>

          <div className="baba">
          <p className="text_here">Website development</p>
          <a href="/work/Thisweb" class="portfolio__item">
            <Customlink href="/Thisweb"><img src={l5} alt="" class="portfolio__img"></img></Customlink>
          </a>
          </div>

          <div className="baba">
          <p className="text_here">UI/UX Design</p>
          <a href="/work/UI-UX Design" class="portfolio__item">
            <Customlink href="/UIUXdesign"><img src={l7} alt="" class="portfolio__img"></img></Customlink>
          </a>
          </div>

          <div className="baba">
          <p className="text_here">photo photoshop</p>
          <a href="/work/Photoshop" class="portfolio__item">
            <Customlink href="/Photoshop"><img src={l6} alt="" class="portfolio__img"></img></Customlink>
          </a>
          </div>

      </div>
      </section>
      <Foot />
    </>

  )
}
