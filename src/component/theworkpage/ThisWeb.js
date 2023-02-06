import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
import l1 from "../../images/my-web-react-logo.png"
import l2 from "../../images/my-web-code.png"
import l3 from "../../images/my-web-hosting.jpg"
export default function Thisweb() {
    return (
        <div>
            <Nav />
            <section class="intro" >
                <h1 class="section__title section__title--intro">
                      portfolio  website <strong>    </strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">React Web Development </p>
                <img src={l1} alt="" class="intro__img"></img>
            </section>
            <div class="portfolio-item-individual">
                <p>
                Building a portfolio website can be a daunting task, but with the power of React, JSX, and CSS, I was able to create a website that not only showcases my skills, but also stands out from the crowd.

With over 1500 lines of React and JSX code, I was able to create a website that is both functional and visually appealing. The JSX code allowed me to easily build a website that is responsive and user-friendly, while the React code allowed me to create a website that is fast and efficient.

But let's not forget about the 750 lines of CSS that went into making this website look as amazing as it does. I spent countless hours fine-tuning every design element to make sure that it was pixel perfect. From the typography to the color scheme, I made sure that everything was just right.

But it wasn't just my knowledge of React, JSX, and CSS that made this website a success. I also made sure to incorporate all my SEO knowledge to make sure that the website would rank well in search engines. From optimizing the website's structure to writing meta descriptions, I made sure that the website would be easy to find.

And let's not forget about the UI/UX knowledge. I made sure that the website was easy to navigate and understand, making it a great experience for anyone who visited.

In short, building a portfolio website can be a lot of work, but with the right tools and knowledge, it can be a fun and rewarding experience. I'm proud of the website I built, and I hope you enjoy it as much as I do!"

Keep in mind that this is just a sample and you can always edit or add more details to make it more personalized.

                </p>
                <img src={l2} alt=""></img>

                    

                <p>Props for the nav bar and React router were some of the tools I used
                    State and Emailjs were also used to make the connection part of the page, as well as Photoshop for some logo designs.
                </p>
                <img src={l3} alt=""></img>
                <p>


                Because it took so much work to deploy this website, I can make your website live using Google Cloud, Github Pages and other tools.
                </p>
            </div>
            <Foot />
        </div>
    )
}