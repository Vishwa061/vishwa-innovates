import React from "react"
import * as classes from "./Logo.module.scss"
import logo from "@/images/logo.png"

export default () => {
  return (
    <div className={classes.logo} tabIndex={-1}>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  )
}
