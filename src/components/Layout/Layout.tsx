import React, { ReactNode } from "react"
import * as classes from "./Layout.module.scss"

interface LayoutProps {
  children: ReactNode
}

export default ({ children }: LayoutProps) => {
  return <h1 className={classes.test}>Hello World!!!</h1>
}
