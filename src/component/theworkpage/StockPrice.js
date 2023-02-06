import React from "react";
import Foot from "../sure/footer/footer";
import Navbarr from "../sure/nav/nav";
import l1 from "../../images/the-stock-thumnail.png"
import l2 from "../../images/the-stock.jpg"
import l3 from "../../images/the-stock-info.jpg"
import l4 from "../../images/the-stock-table.jpg"
import l5 from "../../images/the-stock-graph.jpg"
export default function StockPrice() {
    return (
        <div>
            <Navbarr/>
            <section class="intro" >
                <h1 class="section__title section__title--intro">
                Stock Price <strong> Data Science</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">
                Python Project 
                </p>
                <img src={l1} alt="" class="intro__img"></img>
            </section>
            <div class="portfolio-item-individual">
            <p>
  Exploring the Stock Market with Python: A Data Science Adventure
  <br />
  <br />
  As a data scientist, I'm always on the lookout for new and exciting projects to sink my teeth into. Recently, I had the opportunity to combine my love for the stock market with my passion for data science by creating a web application that allows users to easily access and analyze stock price data using Python.
  <br />
  <br />
  To gather the data, I used the yfinance library to extract historical stock prices from Yahoo Finance. With the Pandas library, I was able to clean and organize the data for further analysis. To make it user-friendly, I employed the Streamlit library to create an interactive web application. The Cufflinks library was also used to display the data in beautiful and informative visualizations.
  <br />
  <br />
  The final product exceeded my expectations and has proven to be a valuable tool for anyone interested in exploring the stock market. It was a fun and rewarding experience, and I'm excited to see how others will use it.
</p>

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