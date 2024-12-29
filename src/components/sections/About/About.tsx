import React from "react"
import * as classes from "./About.module.scss"

export default () => {
  return (
    <section id="about" className={classes.container}>
      <span className={classes.hi}>Hi, my name is</span>
      <span className={classes.name}>Vishwa Perera.</span>
      <span className={classes.job}>I'm a Software Engineer.</span>
      <p className={classes.desc}>
        I specialize in simplifying complex challenges and developing innovative
        solutions that deliver a meaningful impact. In my current role at{" "}
        <a
          href="https://www.citi.com"
          target="_blank"
          className={classes.company}
        >
          Citi
        </a>
        , I design, maintain, and enhance data pipelines & microservices in the
        Equities sector.
      </p>
    </section>
  )
}
