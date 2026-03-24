import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Vishwa Perera | Software Engineer",
    description:
      "Portfolio website for Vishwa Perera, a software engineer building dependable systems, internal tools, and practical product experiences across capital markets and full-stack applications.",
    twitterUsername: "@VishwaP25503843",
    image: "/images/logo.png",
    siteUrl: "https://www.vishwainnovates.com",
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-tsconfig-paths",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Vishwa Perera Portfolio",
        short_name: "Vishwa",
        start_url: "/",
        background_color: "#08111d",
        theme_color: "#08111d",
        display: "standalone",
        icon: "src/images/icon-square.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}

export default config
