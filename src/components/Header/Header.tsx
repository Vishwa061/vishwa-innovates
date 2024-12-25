import React from "react"
import * as classes from "./Header.module.scss"
import { Logo } from "@/components"

export default () => {
  const sections = [
    { link: "/#about", text: "About" },
    { link: "/#experience", text: "Experience" },
    { link: "/#solutions", text: "Solutions" },
    { link: "/#contact", text: "Contact" },
  ]

  const listItems = sections.map((x) => (
    <li className={classes.navLink} key={x.link}>
      <a href={x.link}>{x.text}</a>
    </li>
  ))

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
