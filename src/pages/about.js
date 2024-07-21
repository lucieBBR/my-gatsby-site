import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <div className="centeredText">
        <p>Full-stack developer with a background in International Relations and a passion for sustainability. Transitioned to tech after 5 years working mainly in NGOs and EU institutions in the areas of Communication, Project Management, and Administration. Currently working as a developer in a foundation focused on educational projects.</p>
      </div>
     </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage