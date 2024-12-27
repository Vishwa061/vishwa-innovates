import React, { useState } from "react"
import * as classes from "./Header.module.scss"
import { Logo } from "@/components"

export default () => {
  const [sections, setSections] = useState([
    { link: "/#about", text: "About", isActive: true },
    { link: "/#experience", text: "Experience", isActive: false },
    { link: "/#solutions", text: "Solutions", isActive: false },
    { link: "/#contact", text: "Contact", isActive: false },
  ])

  const handleNavLinkSelect = (selectedLink: string) => {
    setSections((prevSections) => {
      let newSections = [...prevSections]

      newSections.forEach((s) => {
        s.isActive = s.link === selectedLink
      })

      return newSections
    })
  }

  const listItems = sections.map((x) => {
    const activeStyle = x.isActive ? classes.active : ""
    return (
      <li className={classes.navLink} key={x.link}>
        <a
          className={`${classes.navAnchor} ${activeStyle}`}
          href={x.link}
          onClick={() => handleNavLinkSelect(x.link)}
        >
          {x.text}
        </a>
      </li>
    )
  })

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Logo />
        <div className={classes.navRightContainer}>
          <ol className={classes.navLinksContainer}>{listItems}</ol>
        </div>
      </nav>
    </header>
  )
}
