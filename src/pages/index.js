
import * as React from 'react'
import Layout from '../components/layout'
import "../styles/global.css";
import {
  introText,
  greeting,
  aboutText
} from "../styles/global.css";
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <div className={introText}>
        <h1 className={greeting}>Hi. I'm Lucie. <br/> A fullstack developer.</h1>
        <p className={aboutText}>I'm passionate about sustainability and projects with a positive social impact.</p>
        {/* <StaticImage
          alt="Piece of code"
          src="../images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg"
        /> */}
      </div>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

