import React from 'react'

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="site-footer-inner">
        <div className="brand footer-brand">
          <a href="/">
            <svg
              width="44"
              height="32"
              viewBox="0 0 44 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Sienna</title>
              <defs>
                <linearGradient
                  x1="97.927%"
                  y1="0%"
                  x2="1.669%"
                  y2="0%"
                  id="logo-footer-a"
                >
                  <stop stopColor="#82DDFC" offset="0%" />
                  <stop stopColor="#0181F6" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="96.64%"
                  y1="1.497%"
                  x2="0%"
                  y2="44.56%"
                  id="logo-footer-b"
                >
                  <stop stopColor="#A3A9F1" offset="0%" />
                  <stop stopColor="#6A72E4" offset="99.203%" />
                  <stop stopColor="#6A6FEC" offset="100%" />
                </linearGradient>
              </defs>
              <path
                d="M0 16h8a8 8 0 1 0 16 0h8c0 8.837-7.163 16-16 16S0 24.837 0 16z"
                fill="url(#logo-footer-a)"
              />
              <path
                d="M12 0h8a8 8 0 1 0 16 0h8c0 8.837-7.163 16-16 16S12 8.837 12 0z"
                fill="url(#logo-footer-b)"
                transform="rotate(180 28 8)"
              />
            </svg>
          </a>
        </div>
        <ul className="footer-links list-reset">
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">FAQ's</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
        </ul>
        <ul className="footer-social-links list-reset">
          <li>
            <a href="/">
              <span className="screen-reader-text">Facebook</span>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                  fill="#FFF"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="screen-reader-text">Twitter</span>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                  fill="#FFF"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="screen-reader-text">Google</span>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                  fill="#FFF"
                />
              </svg>
            </a>
          </li>
        </ul>
        <div className="footer-copyright">
          &copy; 2018 Sienna, all rights reserved
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
