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
      <div id="spacer" style={{ paddingTop: "500px" }}></div>
      <Solutions />
      <Contact />
    </Layout>
  )
}

export const Head = () => <SEO />
