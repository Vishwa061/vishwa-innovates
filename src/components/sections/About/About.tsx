import React from "react"
import * as classes from "./About.module.scss"

export default () => {
  return (
    <section id="about" className={classes.container}>
      <span className={classes.hi}>Hi, my name is</span>
      <span className={classes.name}>Vishwa Perera.</span>
      <span className={classes.job}>I'm a Software Engineer.</span>
      <span className={classes.motto}>Simplicity Is Innovation</span>
    </section>
  )
}
