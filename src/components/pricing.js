import React from 'react'
import Accordion from './Accordion'

class Pricing extends React.Component {
  render() {
    return (
      <section className="pricing section">
        <div className="container">
          <div className="pricing-inner section-inner">
            <h2 className="section-title mt-0 text-center">Pricing</h2>
            <div className="pricing-tables-wrap">
              <div className="pricing-table is-revealing">
                <div className="pricing-table-inner">
                  <div className="pricing-table-main">
                    <div className="pricing-table-header">
                      <div className="pricing-table-title mt-12 mb-16">
                        Monthly
                      </div>
                      <div className="pricing-table-price pb-32">
                        <span className="pricing-table-price-currency h3">
                          $
                        </span>
                        <span className="pricing-table-price-amount h1">
                          29
                        </span>
                        /m
                      </div>
                    </div>
                    <ul className="pricing-table-features list-reset text-xs">
                      <li>
                        <span>Lorem ipsum dolor sit consectetur</span>
                      </li>
                      <li>
                        <span>Lorem ipsum dolor sit consectetur</span>
                      </li>
                      <li>
                        <span>Lorem ipsum dolor sit consectetur</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-table-cta">
                    <a
                      className="button button-primary button-shadow button-block"
                      href="/"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
              <div className="pricing-table pricing-table-primary text-light is-revealing">
                <div className="pricing-table-inner">
                  <div className="pricing-table-main">
                    <div className="pricing-table-header">
                      <div className="pricing-table-title mt-12 mb-16">
                        Yearly
                      </div>
                      <div className="pricing-table-price pb-32">
                        <span className="pricing-table-price-currency h3">
                          $
                        </span>
                        <span className="pricing-table-price-amount h1">
                          19
                        </span>
                        /m
                      </div>
                    </div>
                    <ul className="pricing-table-features list-reset text-xs">
                      <li>
                        <span>Lorem ipsum dolor sit consectetur</span>
                      </li>
                      <li>
                        <span>Lorem ipsum dolor sit consectetur</span>
                      </li>
                      <li>
                        <span>Lorem ipsum dolor sit consectetur</span>
                      </li>
                      <li>
                        <span>Lorem ipsum dolor sit consectetur</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-table-cta">
                    <a className="button button-shadow button-block" href="/">
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-faqs container-sm">
              <ul className="accordion">
                <Accordion
                  title="In a professional context it often happens that private?"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam"
                />

                <Accordion
                  title="In a professional context it often happens that private?"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam"
                />
                <Accordion
                  title="ILorem ipsum dolor sit amet, consectetur"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam. Ut enim ad minim veniam
                semper. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua."
                />
                <Accordion
                  title="ILorem ipsum dolor sit amet, consectetur"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam. Ut enim ad minim veniam
                semper. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua."
                />
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Pricing
