import React from 'react'
import { withPrefix } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

const Clients = ({ data }) => (
  <section className="clients section">
    <div className="container">
      <div className="clients-inner section-inner">
        <div className="container-sm">
          <ul className="list-reset mb-0">
            {data.contentYaml.content.clients.map((item, i) => (
              <li key={i}>
                <span className="screen-reader-text">{item.name}</span>
                <img
                  alt={item.name}
                  width="132"
                  height="40"
                  src={withPrefix(`img/${item.url}`)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default props => (
  <StaticQuery
    query={graphql`
      query ClientsQuery {
        contentYaml {
          content {
            clients {
              name
              url
            }
          }
        }
      }
    `}
    render={data => <Clients data={data} {...props} />}
  />
)
