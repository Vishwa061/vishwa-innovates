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
      desc: [
        "Maintained and developed the front end of a data quality and controls app using Citi's standard UI library",
        "Revamped the UI & constructed the API of a team hackathon project which was approved for further development",
        "Built robust protocol translation layers that seamlessly bridge FIX, binary, and cross-version FIX integrations, enabling effortless connectivity to global exchanges",
        "Delivered low-latency, high-throughput connectivity solutions that unify message formats and optimize order and market-data flows across trading venues",
      ],
      tags: [
        "Java",
        "FIX Protocol",
        "Low-Latency Systems",
        "Exchange Connectivity",
        "Python",
        "Shell Scripting",
        "Angular",
        "TypeScript",
      ],
    },
    {
      roleInfo: "Full Stack Engineer",
      roleInterval: "June 2021 - Aug 2022; Jan 2023 - June 2023",
      company: "MRS Company",
      logo: mrsLogo,
      location: "Toronto, Ontario, Canada",
      desc: [
        "Routinely developed complex features on the front end with React/TypeScript and on the back end with .NET Core, C#, Entity Framework (ORM)",
        "Experience using libraries such as Redux, Hangfire and SignalR",
        "Assisted in Azure DevOps setup for CI/CD and bug tracking, closed 100+ bugs",
        "Worked with a team of experienced developers to design a system dealing with large datasets and concurrency",
        "Introduced best practices and methodologies that improved product definition and provided customization of applications to meet client needs",
        "Wrote SQL stored procedures to optimize client app core feature performance from hours to seconds",
      ],
      tags: [
        "React",
        "TypeScript",
        ".NET Core",
        "Entity Framework",
        "Azure DevOps",
        "SQL",
      ],
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
