module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "tbhi",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Source Sans Pro:300,400']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        duration: 1
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-background-image",
    "styled-components",
    "react-accessible-accordion",
    "gatsby-plugin-modal-routing-3",
    "gatsby-plugin-image"
  ],
};
