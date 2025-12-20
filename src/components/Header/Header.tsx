import React, { useEffect, useState } from "react"
import * as classes from "./Header.module.scss"
import { Logo } from "@/components"
import { useLocation } from "@reach/router"

const NAV_SECTIONS = [
  { id: "about", text: "About" },
  { id: "experience", text: "Experience" },
  { id: "solutions", text: "Solutions" },
  { id: "contact", text: "Contact" },
]

export default () => {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState(NAV_SECTIONS[0].id)

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
      setActiveSection(NAV_SECTIONS[0].id)
      return
    }

    const sectionId = location.hash.replace("#", "")
    if (NAV_SECTIONS.some((section) => section.id === sectionId)) {
      setActiveSection(sectionId)
    }
  }, [location])

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visibleEntries.length === 0) {
          return
        }

        const currentId = visibleEntries[0].target.id
        setActiveSection((prev) => (prev === currentId ? prev : currentId))
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.25, 0.5, 0.75],
      }
    )

    const elements = NAV_SECTIONS.map(({ id }) =>
      document.getElementById(id)
    ).filter((section): section is HTMLElement => Boolean(section))

    elements.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const listItems = NAV_SECTIONS.map((section) => {
    const activeStyle = section.id === activeSection ? classes.active : ""
    return (
      <li className={classes.navLink} key={section.id}>
        <a
          className={`${classes.navAnchor} ${activeStyle}`}
          href={`/#${section.id}`}
        >
          {section.text}
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
