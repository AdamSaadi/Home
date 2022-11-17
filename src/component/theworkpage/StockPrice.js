import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
import l1 from "../../images/the-stock-thumnail.png"
import l2 from "../../images/the-stock.jpg"
import l3 from "../../images/the-stock-info.jpg"
import l4 from "../../images/the-stock-table.jpg"
import l5 from "../../images/the-stock-graph.jpg"
export default function StockPrice() {
    return (
        <div>
            <Nav />
            <section class="intro" >
                <h1 class="section__title section__title--intro">
                Stock Price <strong> Data Science</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">
                     python project</p>
                <img src={l1} alt="" class="intro__img"></img>
            </section>
            <div class="portfolio-item-individual">
                <p>This website was built with , Streamlit, yfinance, Cufflinks, Pandas and datetime in Python </p>
                <img src={l2} alt=""></img>
                <p>Here is apple share for example you can change the stock start and end date you can choose any stock you want  </p>
            </div>
            <div class="portfolio-item-individual">
                <img src={l3} alt=""></img>
                <p>Here are some important details about the company and its share price</p>
            </div>
            <div class="portfolio-item-individual">
                <img src={l4} alt=""></img>
                <p>this is a table for ticker data for the share </p>
            </div>
            <div class="portfolio-item-individual">
                <img src={l5} alt=""></img>
                <p>The share graph shows how it has grown over time </p>
                <p><a href="https://github.com/AdamSaadi/data-science">see the code here</a></p>
            </div>
            <Foot />
        </div>
    )
}