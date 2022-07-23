import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
export default function Nft(){
    return(
        <div>
            <Nav/>
        <section className="intro" >
            <h1 className="section__title section__title--intro">
               Design work<strong> NFT </strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">photoshop -- and coding NFT</p>
            <img src="./images/4518857_python_icon.png" alt="" className="intro__img"></img>
        </section>
        <div className="portfolio-item-individual">
            <p>An NFT work made on photoshop and some line of code to make a big collection </p>
            <img src="./images/GettyImages-1309905479-scaled.WEBP" alt=""></img>
            <p>the NFT collection... </p>
            <p>This work also done with python code so you can check it on my Github down </p>
            <img src="./images/nfts-Recov2ered.png" alt="before and after color correction"></img>
            <p>this is one on the collection and you can buy some down</p>
            <p><a href="https://opensee.com">Buy NFTs</a></p>
        </div>
        <Foot/>
        </div>
    )
}
/*nfts-Recovered.png 
  "homepage": "http://AdamSaadi.github.io/portfolio"
      "dev": "webpack --config=Scripts/config/webpack.dev.js --watch",
        "homepage": "https://adamsaadi.github.io/HomePage.github.io",
*/
