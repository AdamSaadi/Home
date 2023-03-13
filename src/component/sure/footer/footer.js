import React from "react";
import { Icon } from '@iconify/react';
import { faTelegram, faInstagram, faTwitter, faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="social-list">
        <li className="social-list__item">
          <a href="https://instagram.com/ad_ms1?igshid=YmJhNjkzNzY=" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://twitter.com/callme_ada_m?t=6Uv0ssyldLT_mjGychavYA&s=08" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://www.youtube.com/channel/UCjamqXL0arU3Xv52vas2nxQ" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://www.linkedin.com/in/adam-saadi-939565202" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://github.com/AdamSaadi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://www.fiverr.com/adamsaadi6" target="_blank" rel="noopener noreferrer">
            <Icon icon="jam:fiverr" />
          </a>
        </li>
      </ul>
      <p className="copy">&copy; 2021 - {new Date().getFullYear()} Adam Saadi.com. All rights reserved  </p>
    </footer>
  );
}

/*
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
                    <a className='social-list__link' href="http://Instagram.com/ad_ms1" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li className='social-list__item'>
                    <a className='social-list__link' href="https://twitter.com/callme_ada_m?t=6Uv0ssyldLT_mjGychavYA&s=08" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>

                <li className='social-list__item'>
                    <a className='social-list__link' href="https://www.youtube.com/channel/UCjamqXL0arU3Xv52vas2nxQ" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
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
}*/