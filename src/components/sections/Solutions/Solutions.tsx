import React from "react"
import { featuredProject, supportingHighlights } from "@/content/portfolio"
import * as classes from "./Solutions.module.scss"

export default () => {
  return (
    <section id="work" className={classes.container}>
      <div className={classes.header}>
        <span className={classes.eyebrow}>Selected Work</span>
        <h2 className={classes.title}>
          Case study depth where it matters most.
        </h2>
        <p className={classes.description}>
          I prefer projects that solve concrete user problems with clear
          tradeoffs. Pocket Flow is the clearest example in this portfolio: a
          focused product with deliberate technical constraints and practical UX
          decisions.
        </p>
      </div>

      <article className={classes.featuredCard}>
        <div className={classes.preview}>
          <img
            src={featuredProject.image}
            alt={featuredProject.imageAlt}
            className={classes.image}
            loading="lazy"
          />

          <div className={classes.metricGrid}>
            {featuredProject.metrics.map((metric) => (
              <div className={classes.metricCard} key={metric.label}>
                <span className={classes.metricLabel}>{metric.label}</span>
                <span className={classes.metricValue}>{metric.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.content}>
          <div className={classes.heading}>
            <div>
              <span className={classes.projectEyebrow}>Featured project</span>
              <h3 className={classes.name}>{featuredProject.name}</h3>
              <p className={classes.subtitle}>{featuredProject.subtitle}</p>
            </div>

            <div className={classes.tags}>
              {featuredProject.tags.map((tag) => (
                <span className={classes.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className={classes.projectDescription}>
            {featuredProject.description}
          </p>

          <div className={classes.storyGrid}>
            <div className={classes.storyBlock}>
              <h4>The problem</h4>
              <p>{featuredProject.challenge}</p>
            </div>
            <div className={classes.storyBlock}>
              <h4>Approach</h4>
              <p>{featuredProject.approach}</p>
            </div>
            <div className={classes.storyBlock}>
              <h4>Outcome</h4>
              <p>{featuredProject.outcome}</p>
            </div>
          </div>

          <div className={classes.featureBlock}>
            <h4 className={classes.featureTitle}>Implementation highlights</h4>
            <ul className={classes.featureList}>
              {featuredProject.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={classes.actions}>
            <a
              href={featuredProject.link}
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              {featuredProject.linkLabel}
            </a>
          </div>
        </div>
      </article>

      <div className={classes.supportGrid}>
        {supportingHighlights.map((highlight) => (
          <article className={classes.supportCard} key={highlight.title}>
            <h3 className={classes.supportTitle}>{highlight.title}</h3>
            <p className={classes.supportDescription}>
              {highlight.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
