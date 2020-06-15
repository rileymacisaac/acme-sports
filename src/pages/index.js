import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AllTeams from "../components/teams"
import Image from "../components/image"

function Article(props) {
  return (
      <article className={props.class+" "+props.className}>
        <div className="container">
          <div className={props.class+'__wrapper' + " flow-vertical"}>
            {props.children}
          </div>
        </div>
      </article>
  )
}

const Index = ({ data }) => {
  const heroClass = 'hero';

  return (
      <Layout>
        <SEO title="ACME Sports NFL Team List"/>

        <Article class={heroClass}>
          <div className="hero__content">
            <h1 className="hero__title color-blue">The NFL teams you clearly don't know</h1>
            <p className="hero__intro color-gray">At a friends house watching an NFL game and have no idea who the teams are?
              We've got you covered with our comprehensive list of NFL teams. We do nothing else.</p>
          </div>

          <picture className="hero__image">
            <Image allFiles={data.allFile.nodes} name="sports_fans" alt="Illustration of two people on a couch watching sports and cheering."/>
          </picture>
        </Article>

        <Article class="teams" className="background-blue-light">
          <h2>NFL Teams</h2>

          <AllTeams allData={data} />
        </Article>
      </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      nodes {
        publicURL
        name
      }
    }
    allInternalTeams(sort: { fields: name, order: ASC }, filter: {name: {ne: null}}) {
      nodes {
        name
        nickname
        alternative_id
        division
        display_name
        conference
      }
    }
  }
`

export default Index