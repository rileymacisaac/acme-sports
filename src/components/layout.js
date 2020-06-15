import React from "react"
import "../../sass/styles.scss"

const Layout = ({ children }) => {
  return (
    <div className="site-wrap">
      <a href="#content" className="skip-link sr-only sr-only-focusable link">Skip to main content</a>

      <header className="header">
        <div className="container">
          <div className="header__wrapper flow-vertical">
            <div className="header__left">
              <a href="/" className="header__logo font-red-hat-display" aria-current="page">
                ACME Sports
              </a>
            </div>

            <div className="header__right">
              <a href="mailto:info@acmesports.example" className="header__link link">Contact us</a>
            </div>
          </div>
        </div>
      </header>

      <main id="content">
        {children}
      </main>

      <footer className="footer background-blue">
        <div className="container">
          <div className="footer__wrapper flow-vertical">
            <p className="footer__year">
              &copy; {new Date().getFullYear()}, Built by Riley MacIsaac
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
