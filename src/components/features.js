import React from 'react'
import { StaticQuery, graphql, withPrefix } from 'gatsby'

const Features = ({ data }) => (
  <section className="features-extended section">
    <div className="container">
      <div className="features-extended-inner section-inner has-top-divider">
        <div className="features-extended-header text-center">
          <div className="container-sm">
            <h2 className="section-title mt-0">
              {data.contentYaml.content.features.bigtitle}
            </h2>
            <p className="section-paragraph">
              {data.contentYaml.content.features.text}
            </p>
          </div>
        </div>
        {data.contentYaml.content.features.items.map((item, i) => (
          <div key={i} className="feature-extended">
            <div className="feature-extended-image is-revealing">
              <img
                width="480"
                height="320"
                src={withPrefix(`img/${item.image}`)}
                alt={item.feature}
              />
            </div>
            <div className="feature-extended-body">
              <h3 className="mt-0">{item.feature}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default props => (
  <StaticQuery
    query={graphql`
      query FeaturesQuery {
        contentYaml {
          content {
            features {
              bigtitle
              text
              items {
                feature
                text
                image
              }
            }
          }
        }
      }
    `}
    render={data => <Features data={data} {...props} />}
  />
)
