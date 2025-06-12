import React, { useEffect, useState } from "react"
import * as classes from "./Header.module.scss"
import { Logo } from "@/components"
import { useLocation } from "@reach/router"

export default () => {
  const location = useLocation()
  const [sections, setSections] = useState([
    { link: "/#about", text: "About", isActive: true },
    { link: "/#experience", text: "Experience", isActive: false },
    { link: "/#solutions", text: "Solutions", isActive: false },
    { link: "/#contact", text: "Contact", isActive: false },
  ])

  useEffect(() => {
    setSections((prevSections) => {
      let newSections = [...prevSections]

      newSections.forEach((s) => {
        s.isActive = s.link === `/${location.hash}`
      })

      if (newSections.every((x) => !x.isActive)) {
        newSections[0].isActive = true
      }

      if (!location.hash) {
        window.scrollTo(0, 0)
      }

      return newSections
    })
  }, [location])

  const listItems = sections.map((x) => {
    const activeStyle = x.isActive ? classes.active : ""
    return (
      <li className={classes.navLink} key={x.link}>
        <a className={`${classes.navAnchor} ${activeStyle}`} href={x.link}>
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
