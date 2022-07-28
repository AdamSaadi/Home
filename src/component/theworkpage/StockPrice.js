import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
export default function StockPrice() {
    return (
        <div>
            <Nav />
            <section class="intro" >
                <h1 class="section__title section__title--intro">
                    Data Science<strong> Python App</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">
                    Stock Price python project</p>
                <img src="/images/2103569.png" alt="" class="intro__img"></img>
            </section>
            <div class="portfolio-item-individual">
                <p>This website was built with , Streamlit, yfinance, Cufflinks, Pandas and datetime in Python </p>
                <img src="/images/the-stock.png" alt=""></img>
                <p>Here is apple share for example you can change the stock start and end date you can choose any stock you want  </p>
            </div>
            <div class="portfolio-item-individual">
                <img src="/images/the-stock-info.png" alt=""></img>
                <p>Here are some important details about the company and its share price</p>
            </div>
            <div class="portfolio-item-individual">
                <img src="/images/the-stock-table.png" alt=""></img>
                <p>this is a table for ticker data for the share </p>
            </div>
            <div class="portfolio-item-individual">
                <img src="/images/the-stock-graph.png" alt=""></img>
                <p>The share graph shows how it has grown over time </p>
                <p><a href="https://github.com/AdamSaadi/data-science">see the code here</a></p>
            </div>
            <Foot />
        </div>
    )
}