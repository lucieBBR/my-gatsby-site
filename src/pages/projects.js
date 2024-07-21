import * as React from 'react'
import Layout from '../components/layout'

const ProjectsPage = () => {
  return (
    <Layout>
      <div className="centeredText">
        <p>Hi there! These are the projects I have worked on so far:</p>
        <a href="https://github.com/lucieBBR" target='_blank'>See Github</a>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Projects</title>

export default ProjectsPage