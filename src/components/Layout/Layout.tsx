import React, { ReactNode } from "react"
import { Header, Footer } from "@/components"
import * as classes from "./Layout.module.scss"

interface LayoutProps {
  children: ReactNode
}

export default ({ children }: LayoutProps) => {
  return (
    <div id="root" className={classes.root}>
      <a href="#content" className={classes.skip}>
        Skip to main content
      </a>
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </div>
  )
}
