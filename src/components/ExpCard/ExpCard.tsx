import React from "react"
import * as classes from "./ExpCard.module.scss"

export interface ExpCardProps {
  roleInfo: string
  roleInterval: string
  company: string
  logo: any
  location: string
  desc: string
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
    <span className={classes.tag}>{tag}</span>
  ))

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <div className={classes.roleInfo}>
          {roleInfo}
          {" · "}
          <span className={classes.roleInterval}>{roleInterval}</span>
        </div>
        <h3 className={classes.company}>{company}</h3>
        <span className={classes.location}>{location}</span>
        <div className={classes.descContainer}>
          <p className={classes.desc}>{desc}</p>
        </div>
        <div className={classes.tagContainer}>{parsedTags}</div>
      </div>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="Company Logo" />
      </div>
    </div>
  )
}
