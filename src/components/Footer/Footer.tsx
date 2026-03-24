import React from "react"
import { siteOwner } from "@/content/portfolio"
import * as classes from "./Footer.module.scss"

export default () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <div>
          <p className={classes.name}>{siteOwner.name}</p>
          <p className={classes.text}>
            Software Engineer focused on dependable systems and practical
            product delivery.
          </p>
        </div>

        <div className={classes.links}>
          <a href={siteOwner.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={siteOwner.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`mailto:${siteOwner.email}`}>Email</a>
        </div>

        <p className={classes.copy}>
          Copyright {currentYear} {siteOwner.name}
        </p>
      </div>
    </footer>
  )
}
