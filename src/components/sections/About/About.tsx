import React from "react"
import { heroContent, siteOwner } from "@/content/portfolio"
import * as classes from "./About.module.scss"

export default () => {
  return (
    <section id="about" className={classes.container}>
      <div className={classes.hero}>
        <div className={classes.copy}>
          <span className={classes.eyebrow}>{heroContent.eyebrow}</span>
          <h1 className={classes.title}>{heroContent.title}</h1>
          <p className={classes.summary}>{heroContent.summary}</p>
          <p className={classes.supportingText}>{heroContent.supportingText}</p>

          <div className={classes.meta}>
            <span>{siteOwner.location}</span>
            <span>{heroContent.availability}</span>
          </div>

          <div className={classes.actions}>
            {heroContent.links.map((link) => (
              <a
                className={`${classes.action} ${
                  link.variant === "primary"
                    ? classes.primaryAction
                    : classes.secondaryAction
                }`}
                href={link.href}
                key={link.label}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <aside className={classes.panel}>
          <span className={classes.panelEyebrow}>Professional snapshot</span>
          <h2 className={classes.panelTitle}>What I bring to a team</h2>
          <ul className={classes.focusList}>
            {heroContent.focusAreas.map((focus) => (
              <li key={focus}>{focus}</li>
            ))}
          </ul>
          <p className={classes.panelText}>
            Strongest in roles where infrastructure, product delivery, and
            day-to-day engineering judgment all need to work together.
          </p>
        </aside>
      </div>

      <div className={classes.statsGrid}>
        {heroContent.stats.map((stat) => (
          <article className={classes.statCard} key={stat.label}>
            <span className={classes.statValue}>{stat.value}</span>
            <p className={classes.statLabel}>{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
