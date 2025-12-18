import React from "react"
import {
  About,
  Contact,
  Experience,
  Layout,
  SEO,
  Solutions,
} from "@/components"

export default () => {
  return (
    <Layout>
      <About />
      <Experience />
      <Solutions />
      <Contact />
    </Layout>
  )
}

export const Head = () => <SEO />
