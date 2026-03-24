import React from "react"
import * as classes from "./ExpCard.module.scss"

export interface ExpCardProps {
  company: string
  role: string
  interval: string
  location: string
  summary: string
  highlights: string[]
  tags: string[]
  logo: string
  logoAlt: string
}

export default ({
  company,
  role,
  interval,
  location,
  summary,
  highlights,
  tags,
  logo,
  logoAlt,
}: ExpCardProps) => {
  return (
    <article className={classes.card}>
      <div className={classes.metaColumn}>
        <img className={classes.logo} src={logo} alt={logoAlt} loading="lazy" />
        <span className={classes.interval}>{interval}</span>
      </div>

      <div className={classes.content}>
        <div className={classes.heading}>
          <div>
            <p className={classes.company}>{company}</p>
            <h3 className={classes.role}>{role}</h3>
          </div>
          <p className={classes.location}>{location}</p>
        </div>

        <p className={classes.summary}>{summary}</p>

        <div className={classes.featureBlock}>
          <h4 className={classes.featureTitle}>Highlights</h4>
          <ul className={classes.featureList}>
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className={classes.tags}>
          {tags.map((tag) => (
            <span className={classes.tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
