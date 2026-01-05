import React from "react"
import pocketFlowLogo from "@/images/pocket-flow.png"
import * as classes from "./Solutions.module.scss"

const solutions = [
  {
    name: "Pocket Flow",
    subtitle: "Android budgeting app built with Jetpack Compose",
    description:
      "Pocket Flow keeps budgeting fully offline by persisting all user data as JSON in internal storage—no databases or network required.",
    link: "https://play.google.com/store/apps/details?id=com.pocketflow",
    features: [
      "Capture expenses with names, prices, categories, and dates",
      "Flexible recurrences: daily, weekly (with weekday selection), monthly, and yearly—similar to calendar events",
      "Overview screen that expands recurrences to summarize spend by week, month, year, and next year",
      "Category management with default icons, add/edit/remove options, and safeguards when expenses exist",
      "Category pie chart that visualizes spend distribution with percentages and icons",
      "List view dedicated to recurring expenses for quick reviews",
    ],
    tags: ["Android", "Jetpack Compose", "Kotlin", "Offline JSON storage"],
    image: pocketFlowLogo,
    imageAlt: "Pocket Flow app logo featuring a pocket holding a dollar bill",
  },
]

export default () => {
  return (
    <section id="solutions" className={classes.container}>
      <h2 className={classes.title}>Solutions</h2>
      <div className={classes.cards}>
        {solutions.map((solution) => (
          <article className={classes.card} key={solution.name}>
            <div className={classes.preview}>
              <img
                src={solution.image}
                alt={solution.imageAlt}
                className={classes.image}
                loading="lazy"
              />
            </div>
            <div className={classes.content}>
              <div className={classes.heading}>
                <div>
                  <h3 className={classes.name}>{solution.name}</h3>
                  <p className={classes.subtitle}>{solution.subtitle}</p>
                </div>
                <div className={classes.tags}>
                  {solution.tags.map((tag) => (
                    <span className={classes.tag} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className={classes.description}>{solution.description}</p>
              {solution.link && (
                <div className={classes.actions}>
                  <a
                    href={solution.link}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.link}
                  >
                    View on Google Play
                  </a>
                </div>
              )}
              <div className={classes.featureBlock}>
                <h4 className={classes.featureTitle}>Highlights</h4>
                <ul className={classes.featureList}>
                  {solution.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
