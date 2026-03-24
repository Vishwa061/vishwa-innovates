import React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { Layout, SEO } from "@/components"
import * as classes from "./404.module.scss"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className={classes.section}>
        <div className={classes.card}>
          <span className={classes.eyebrow}>404</span>
          <h1 className={classes.title}>Page not found</h1>
          <p className={classes.description}>
            The page you were trying to reach is not available. Head back to the
            main portfolio to review experience, selected work, or contact
            details.
          </p>
          <div className={classes.actions}>
            <Link to="/" className={classes.primaryAction}>
              Return home
            </Link>
            <a href="/#contact" className={classes.secondaryAction}>
              Contact Vishwa
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <SEO
    title="Page Not Found | Vishwa Perera"
    description="The page you requested could not be found on vishwainnovates.com."
    pathname="/404/"
  />
)
