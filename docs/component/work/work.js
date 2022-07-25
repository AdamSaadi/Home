import React from "react";
import Nav from "../sure/nav/nav";
import Foot from "../sure/footer/footer";
import l1 from 'D:/the/src/images/py-stock.png';
import l2 from 'D:/the/src/images/air-web-project1.png';
import l3 from 'D:/the/src/images/Untitled-3.png';
import l4 from 'D:/the/src/images/untitled-(1RR-of-1).png';
import l5 from 'D:/the/src/images/easy.jpg';
import l6 from 'D:/the/src/images/photoshop-work.png';
export default function Work(){
    function Customlink ({href,children, ...props}) {
        const path = window.location.pathname 
        return(
          <li className={path === href ? "active" : ""}>
            <a href= {href} {...props}>
              {children}
            </a>
          </li>
        )
      }

    return(
        <><Nav/>
<section class="my-work" id="work">
            <h2 class="section__title section__title--work">My Work</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div class="portfolio">

                <a href="/work/StockPrice" class="portfolio__item">
<<<<<<< HEAD:docs/component/work/work.js
                <Customlink href="/StockPrice"><img src={l1} alt="e" class="portfolio__img"></img></Customlink>
                </a>

                <a href="/work/AirblbWebsite" class="portfolio__item">
                <Customlink href="/Air"><img src={l2} alt="r" class="portfolio__img"></img></Customlink>
                </a>
                
                <a href="/work/potoshopColorFree"  class="portfolio__item" >
                 <Customlink href="/PhotoshopColorFree"><img src={l3} alt="e" class="portfolio__img"></img></Customlink>
                </a>

                <a href="/work/Photograph" class="portfolio__item">
                <Customlink href="/Photograph"><img src={l4} alt="e" class="portfolio__img"></img></Customlink>
=======
                <Customlink href="/StockPrice"><img src="images/py-stock.png" alt="e" class="portfolio__img"></img></Customlink>
                </a>

                <a href="/work/AirblbWebsite" class="portfolio__item">
                <Customlink href="/Air"><img src="images/air-web-project1.png" alt="r" class="portfolio__img"></img></Customlink>
                </a>
                
                <a href="/work/potoshopColorFree"  class="portfolio__item" >
                 <Customlink href="/PhotoshopColorFree"><img src="images/Untitled-3.png" alt="e" class="portfolio__img"></img></Customlink>
                </a>

                <a href="/work/Photograph" class="portfolio__item">
                <Customlink href="/Photograph"><img src="images/untitled-(1RR-of-1).png" alt="e" class="portfolio__img"></img></Customlink>
>>>>>>> ded22d9a94f8f1bbcc0eff78026e9cf78136b0b7:src/component/work/work.js
                </a>

                <a href="/work/Thisweb" class="portfolio__item">
                <Customlink href="/Thisweb"><img src={l5} alt="" class="portfolio__img"></img></Customlink>
                </a>
                
                <a href="/work/Photoshop" class="portfolio__item">
                <Customlink href="/Photoshop"><img src={l6} alt="" class="portfolio__img"></img></Customlink>
                </a>

            </div>
        </section>
        <Foot/>
        </>
        
    )
}
/*                <a href="/work/Nft" class="portfolio__item">
                <Customlink href="/Nft"><img src="images\nnfftt.png" alt="" class="portfolio__img"></img></Customlink>
                </a> 
                <a href="/work/python" class="portfolio__item">
                <Customlink href="/Python"><img src="images\hand-tracking.png" alt="" class="portfolio__img"></img></Customlink>
                </a> 
<a href="/work/python" class="portfolio__item">
<Customlink href="/Python"><img src="images\hand-tracking.png" alt="" class="portfolio__img"></img></Customlink>
</a> 

*/

