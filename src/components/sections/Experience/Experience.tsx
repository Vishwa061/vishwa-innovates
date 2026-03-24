import React from "react"
import { ExpCard } from "@/components"
import { experienceEntries } from "@/content/portfolio"
import * as classes from "./Experience.module.scss"

export default () => {
  return (
    <section id="experience" className={classes.container}>
      <div className={classes.header}>
        <span className={classes.eyebrow}>Experience</span>
        <h2 className={classes.title}>
          Production engineering with a bias for reliability and clarity.
        </h2>
        <p className={classes.description}>
          My experience spans capital markets infrastructure, internal tooling,
          and client-facing product development. The common thread is shipping
          software that teams can trust in real workflows.
        </p>
      </div>

      <div className={classes.expsContainer}>
        {experienceEntries.map((experience) => (
          <ExpCard {...experience} key={experience.company} />
        ))}
      </div>
    </section>
  )
}
