import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
import l1 from "../../images/air-web-project.png"
export default function Air() {
    return (
        <div>
            <Nav />
            <section class="intro" >
                <h1 class="section__title section__title--intro">
                    Website for <strong>Air bob </strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">Web Development</p>
                <img src={l1} alt="" class="intro__img"></img>
            </section>
            <div class="portfolio-item-individual">
            <div>
  <p>As a beginner in the world of web development, I am excited to share my first project with you - a website built using the React framework that is similar to the popular vacation rental platform, Airbnb.</p>
  <p>The process of building this website has been a challenging and rewarding experience. I have gained a deep understanding of the React framework, as well as honed my skills in HTML, CSS, and JavaScript. I am constantly amazed by the power of React and its ability to create dynamic and interactive user interfaces.</p>
  <p>One of the most challenging aspects of this project was understanding and implementing the various components of the website, such as the search bar, the property listing, and the booking process. However, with the help of online tutorials and the React documentation, I was able to overcome these challenges and bring my vision to life.</p>
  <p>I am extremely proud of this project, as it is a tangible representation of my progress as a web developer. I am excited to continue learning and growing as a developer, and I look forward to the opportunity to work on more projects like this in the future.</p>
  <p>I invite you to check out my website and let me know what you think, any feedback is appreciated and will help me in my future projects. I hope you enjoy it as much as I enjoyed creating it.</p>
</div>

                <img src={l1} alt=""></img>
                <p>
                    One of the most important features of this web is the ability to access data from another file. It's important because if you create a large website, you will need to add data or change it consistently. Having a data file is much easier.  
                    </p>
    
            </div>
            <Foot />
        </div>
    )
}