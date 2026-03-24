import React, { useEffect, useState } from "react"
import { useLocation } from "@reach/router"
import { Logo } from "@/components"
import { navSections, siteOwner } from "@/content/portfolio"
import * as classes from "./Header.module.scss"

export default () => {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState(navSections[0].id)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!location.hash) {
      setActiveSection(navSections[0].id)
    }

    const sectionId = location.hash.replace("#", "")
    if (navSections.some((section) => section.id === sectionId)) {
      setActiveSection(sectionId)
    }

    setIsMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined
    }

    const elements = navSections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const handleScroll = () => {
      const focusPoint = window.scrollY + window.innerHeight / 3
      const currentSection = elements
        .filter((section) => section.offsetTop <= focusPoint)
        .sort((a, b) => b.offsetTop - a.offsetTop)[0]

      const nextActiveId =
        currentSection?.id ?? elements[0]?.id ?? navSections[0].id

      setActiveSection((prev) => (prev === nextActiveId ? prev : nextActiveId))
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.brand}>
          <Logo />
          <span className={classes.brandCopy}>
            <span className={classes.brandName}>{siteOwner.name}</span>
            <span className={classes.brandRole}>{siteOwner.role}</span>
          </span>
        </div>

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

          <div
            className={`${classes.navPanel} ${
              isMenuOpen ? classes.navPanelOpen : ""
            }`}
          >
            <ol className={classes.navLinksContainer}>
              {navSections.map((section) => {
                const activeStyle =
                  section.id === activeSection ? classes.active : ""

                return (
                  <li className={classes.navLink} key={section.id}>
                    <a
                      className={`${classes.navAnchor} ${activeStyle}`}
                      href={`/#${section.id}`}
                      aria-current={
                        section.id === activeSection ? "page" : undefined
                      }
                      onClick={closeMenu}
                    >
                      {section.label}
                    </a>
                  </li>
                )
              })}
            </ol>

            <a href="/#contact" className={classes.cta} onClick={closeMenu}>
              Get in touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
