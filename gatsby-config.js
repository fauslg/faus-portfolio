module.exports = {
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Open Sans`,
              variants: [`300`, `400`, `600`, `700`, `800`]
            },
          ],
        },
      },
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          // Add any options here
        },
      },
    ],
    pathPrefix: "/faus-portfolio-deploy",
  }