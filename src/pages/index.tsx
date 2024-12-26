import React from "react"
import {
  About,
  Contact,
  Experience,
  Intro,
  Layout,
  SEO,
  Solutions,
} from "@/components"

export default () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Experience />
      <Solutions />
      <Contact />
    </Layout>
  )
}

export const Head = () => <SEO />
