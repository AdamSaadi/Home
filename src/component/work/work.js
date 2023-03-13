import React, { lazy, Suspense } from "react";
import Foot from "../sure/footer/footer";
import l1 from "../../images/work-py-stock.jpg"
import l2 from "../../images/work-air-web.jpg"
import l3 from "../../images/work-photoshop.jpg"
import l4 from "../../images/work-photograph.jpg"
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
  const Nav = lazy(() => import("../sure/nav/nav"));
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
          <Nav />
        </Suspense>
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work</h2>
        <p className="section__subtitle section__subtitle--work">Here is a selection of my work</p>

        <div className="portfolio">

            <div className="text-over-image-container">
                <p className="text_here">stock python</p>
                <a href="/work/StockPrice" className="portfolio__item">
                   <Customlink href="/StockPrice"><img src={l1} alt="stock price with python " className="portfolio__img"></img></Customlink>
                </a>
                
            </div>

            <div className="text-over-image-container">
          <p className="text_here">React development</p>
          <a href="/work/AirblbWebsite" className="portfolio__item">
            <Customlink href="/Air"><img src={l2} alt="Air bob website that I made using react" className="portfolio__img"></img></Customlink>
          </a>
          </div>

          <div className="text-over-image-container">
          <p className="text_here">vector outline-Design</p>
           <a href="/work/potoshopColorFree" className="portfolio__item" >
             <Customlink href="/PhotoshopColorFree"><img src={l3}  alt="vector ouline design on illustrator" className="portfolio__img"></img></Customlink>
            </a>
          </div>

          <div className="text-over-image-container">
          <p className="text_here">photography</p>
          <a href="/work/Photograph" className="portfolio__item">
            <Customlink href="/Photograph"><img src={l4} alt="I took by My License " className="portfolio__img"></img></Customlink>
          </a>
          </div>

          <div className="text-over-image-container">
          <p className="text_here">Website development</p>
          <a href="/work/Thisweb" className="portfolio__item">
            <Customlink href="/Thisweb"><img src={l5} alt="website development " className="portfolio__img"></img></Customlink>
          </a>
          </div>

          <div className="text-over-image-container">
          <p className="text_here">UI/ UX Design</p>
          <a href="/work/UI-UX Design" className="portfolio__item">
            <Customlink href="/UIUXdesign"><img src={l7} alt="ui ux design" className="portfolio__img"></img></Customlink>
          </a>
          </div>

          <div className="text-over-image-container">
          <p className="text_here">photoshop</p>
          <a href="/work/Photoshop" className="portfolio__item">
            <Customlink href="/Photoshop"><img src={l6} alt="my photoshop work" className="portfolio__img"></img></Customlink>
          </a>
          </div>


      </div>
      </section>
      <Foot />
    </>

  )
}

