import React from "react"
import * as classes from "./Experience.module.scss"
import { ExpCard, ExpCardProps } from "@/components"
import citiLogo from "@/images/Citi-Logo.png"
import mrsLogo from "@/images/MRS-Logo.png"

export default () => {
  const exps: ExpCardProps[] = [
    {
      roleInfo: "Software Engineer",
      roleInterval: "July 2023 — Present",
      company: "Citi",
      logo: citiLogo,
      location: "Mississauga, Ontario, Canada",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  lacus tortor, eleifend posuere tellus nec, auctor suscipit tellus.
                  Phasellus imperdiet pharetra sem, vitae dignissim neque posuere nec.
                  Duis feugiat gravida metus, quis placerat ex aliquet id.`,
      tags: ["Angular", "Python", "Java"],
    },
    {
      roleInfo: "Full Stack Engineer",
      roleInterval: "June 2021 — June 2023",
      company: "MRS Company",
      logo: mrsLogo,
      location: "Toronto, Ontario, Canada",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  lacus tortor, eleifend posuere tellus nec, auctor suscipit tellus.
                  Phasellus imperdiet pharetra sem, vitae dignissim neque posuere nec.
                  Duis feugiat gravida metus, quis placerat ex aliquet id.`,
      tags: ["React", ".NET", "SQL"],
    },
  ]

  const parsedExps = exps.map((exp) => <ExpCard {...exp} key={exp.company} />)

  return (
    <section id="experience" className={classes.container}>
      <h2 className={classes.title}>Where I've Worked</h2>
      <div className={classes.expsContainer}>{parsedExps}</div>
    </section>
  )
}
