import React from "react"
import * as classes from "./About.module.scss"

export default () => {
  return (
    <section id="about" className={classes.container}>
      <span className={classes.hi}>Hi, my name is</span>
      <span className={classes.name}>Vishwa Perera.</span>
      <span className={classes.job}>I'm a Software Engineer.</span>
      <p className={classes.desc}>
        I simplify complex problems and build innovative solutions that make an
        impact. My current position at{" "}
        <a
          href="https://www.citi.com"
          target="_blank"
          className={classes.company}
        >
          Citi
        </a>{" "}
        is backend focused. I create, maintain and develop data pipelines &
        microservices for the Equities sector.
      </p>
    </section>
  )
}
