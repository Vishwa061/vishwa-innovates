import React from "react"
import * as classes from "./Footer.module.scss"

export default () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={classes.footer}>
      <p className={classes.text}>
        © {currentYear} Vishwa Perera. All rights reserved.
      </p>
    </footer>
  )
}
