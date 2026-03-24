import React from "react"
import {
  About,
  Contact,
  Experience,
  Layout,
  SEO,
  Solutions,
} from "@/components"

const IndexPage = () => {
  return (
    <Layout>
      <About />
      <Experience />
      <Solutions />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO pathname="/" />
