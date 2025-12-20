import React from "react"
import * as classes from "./ExpCard.module.scss"

export interface ExpCardProps {
  roleInfo: string
  roleInterval: string
  company: string
  logo: any
  location: string
  desc: string[]
  tags: string[]
}

export default ({
  roleInfo,
  roleInterval,
  company,
  logo,
  location,
  desc,
  tags,
}: ExpCardProps) => {
  const parsedTags = tags.map((tag) => (
    <span className={classes.tag} key={tag}>
      {tag}
    </span>
  ))
  const parsedDesc = desc.map((descItem) => <li key={descItem}>{descItem}</li>)

  return (
    <article className={classes.card}>
      <div className={classes.preview}>
        <img
          className={classes.logo}
          src={logo}
          alt={`${company} logo`}
          loading="lazy"
        />
      </div>
      <div className={classes.content}>
        <div className={classes.heading}>
          <div>
            <h3 className={classes.company}>{company}</h3>
            <p className={classes.roleInfo}>
              {roleInfo}
              {" · "}
              <span className={classes.roleInterval}>{roleInterval}</span>
            </p>
            <p className={classes.location}>{location}</p>
          </div>
          <div className={classes.tags}>{parsedTags}</div>
        </div>
        <div className={classes.featureBlock}>
          <h4 className={classes.featureTitle}>Highlights</h4>
          <ul className={classes.featureList}>{parsedDesc}</ul>
        </div>
      </div>
    </article>
  )
}
