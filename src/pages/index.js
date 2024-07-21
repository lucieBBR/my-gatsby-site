
import * as React from 'react'
import Layout from '../components/layout'
import MyIntro from '../components/myIntro';
import "../styles/global.css";
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <main>
        <MyIntro/>  
      </main>   
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

