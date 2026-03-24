import React from "react"
import { contactContent, contactMethods } from "@/content/portfolio"
import * as classes from "./Contact.module.scss"

export default () => {
  return (
    <section id="contact" className={classes.container}>
      <div className={classes.shell}>
        <div className={classes.header}>
          <span className={classes.eyebrow}>{contactContent.eyebrow}</span>
          <h2 className={classes.title}>{contactContent.title}</h2>
          <p className={classes.description}>{contactContent.description}</p>

          <div className={classes.actions}>
            <a
              href={contactContent.primaryAction.href}
              className={`${classes.action} ${classes.primaryAction}`}
            >
              {contactContent.primaryAction.label}
            </a>
            <a
              href={contactContent.secondaryAction.href}
              target="_blank"
              rel="noreferrer"
              className={`${classes.action} ${classes.secondaryAction}`}
            >
              {contactContent.secondaryAction.label}
            </a>
          </div>
        </div>

        <div className={classes.cards}>
          {contactMethods.map((contact) => (
            <a
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              className={classes.card}
              key={contact.label}
            >
              <span className={classes.label}>{contact.label}</span>
              <span className={classes.value}>{contact.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
