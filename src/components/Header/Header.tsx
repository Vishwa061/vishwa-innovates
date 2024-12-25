import React from "react"
import * as classes from "./Header.module.scss"
import { Logo } from "@/components"

export default () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Logo />
      </nav>
    </header>
  )
}
