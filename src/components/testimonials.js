import React from 'react'
import { StaticQuery, graphql, withPrefix } from 'gatsby'

const Testimonials = ({ data }) => (
  <section className="testimonials section">
    <div className="container">
      <div className="testimonials-inner section-inner">
        <h2 className="section-title mt-0 text-center">Testimonials</h2>
        <div className="testimonials-wrap">
          {data.contentYaml.content.testimonials.map((item, i) => (
            <div
              key={i}
              className="testimonial text-center text-xs is-revealing"
            >
              <div className="testimonial-inner">
                <div className="testimonial-main">
                  <div className="testimonial-header">
                    <img
                      className="mb-16"
                      src={withPrefix(`img/${item.avatar}`)}
                      alt="Testimonial"
                    />
                  </div>
                  <div className="testimonial-body">
                    <p>{item.text}</p>
                  </div>
                </div>
                <div className="testimonial-footer">
                  <div className="testimonial-name">{item.name}</div>
                  <div className="testimonial-link">
                    <a href="/">{item.company}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default props => (
  <StaticQuery
    query={graphql`
      query TestimonialsQuery {
        contentYaml {
          content {
            testimonials {
              avatar
              text
              name
              company
            }
          }
        }
      }
    `}
    render={data => <Testimonials data={data} {...props} />}
  />
)
