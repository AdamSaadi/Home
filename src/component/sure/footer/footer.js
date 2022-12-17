import React from "react";
import { Icon } from '@iconify/react';
export default function Foot() {

    return (
        <footer className='footer'>
            <ul className='social-list'>
                <li className='social-list__item'>
                    <a className='social-list__link' href="http://t.me/Adam0saadi" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-telegram" aria-hidden="true"></i>
                    </a>
                </li>
                <li className='social-list__item'>
                    <a className='social-list__link' href="http://Instagram.com/a.d.a.m_s.a.a.d.i" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li className='social-list__item'>
                    <a className='social-list__link' href="https://twitter.com/callme_ada_m?t=6Uv0ssyldLT_mjGychavYA&s=08" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>

                <li className='social-list__item'>
                    <a className='social-list__link' href="https://www.linkedin.com/in/adam-saadi-939565202" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li className='social-list__item'>
                    <a className='social-list__link' href="https://github.com/AdamSaadi"  target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li className='social-list__item'>
                    <a className='social-list__link' href="https://www.fiverr.com/adamsaadi6" target="_blank" rel="noopener noreferrer">
                        <Icon icon="jam:fiverr" />
                    </a>
                </li>
            </ul>
            <p className="copy">&copy; Copyright 2022 Adam Saadi </p>

        </footer>

    )
}
/* <li className='social-list__item'>
        <a className='social-list__link' href="https://pinterest.com/@adamsaadi06as">
        <i className="fab fa-pinterest"></i>
        </a>
    </li> */