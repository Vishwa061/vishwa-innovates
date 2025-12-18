import React from "react"
import * as classes from "./Contact.module.scss"

export default () => {
  const contactMethods = [
    {
      label: "GitHub",
      href: "https://github.com/Vishwa061",
      value: "https://github.com/Vishwa061",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vishwa-perera",
      value: "https://www.linkedin.com/in/vishwa-perera",
    },
    {
      label: "Email",
      href: "mailto:vishwainnovates@gmail.com",
      value: "vishwainnovates@gmail.com",
    },
  ]

  return (
    <section id="contact" className={classes.container}>
      <h2 className={classes.title}>Contact Me</h2>
      <div className={classes.cards}>
        {contactMethods.map((contact) => (
          <a
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.card}
            key={contact.label}
          >
            <span className={classes.label}>{contact.label}</span>
            <span className={classes.value}>{contact.value}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
