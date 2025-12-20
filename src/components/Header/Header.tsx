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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

    setIsMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined
    }

    const elements = NAV_SECTIONS.map(({ id }) =>
      document.getElementById(id)
    ).filter((section): section is HTMLElement => Boolean(section))

    const handleScroll = () => {
      const focusPoint = window.scrollY + window.innerHeight / 3
      const currentSection = elements
        .filter((section) => section.offsetTop <= focusPoint)
        .sort((a, b) => b.offsetTop - a.offsetTop)[0]

      const nextActiveId =
        currentSection?.id ?? elements[0]?.id ?? NAV_SECTIONS[0].id

      setActiveSection((prev) => (prev === nextActiveId ? prev : nextActiveId))
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const listItems = NAV_SECTIONS.map((section) => {
    const activeStyle = section.id === activeSection ? classes.active : ""
    const closeMenu = () => setIsMenuOpen(false)

    return (
      <li className={classes.navLink} key={section.id}>
        <a
          className={`${classes.navAnchor} ${activeStyle}`}
          href={`/#${section.id}`}
          onClick={closeMenu}
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
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className={classes.menuButton}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={classes.menuIcon} aria-hidden="true" />
          </button>
          <ol
            className={`${classes.navLinksContainer} ${
              isMenuOpen ? classes.navLinksOpen : ""
            }`}
          >
            {listItems}
          </ol>
        </div>
      </nav>
    </header>
  )
}
