module.exports = {
  siteMetadata: {
    title: `ACME Sports - NFL Teams List`,
    author: {
      name: `ACME Sports`,
      summary: `Sports company that just likes to list teams honestly`,
    },
    description: `We wanted to show you some NFL teams so here you go`,
    siteUrl: `https://acmesports.ca`,
    social: {
      twitter: `acmesports`,
    },
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "internal__",
        url: "http://delivery.chalk247.com/team_list/NFL.JSON?api_key=74db8efa2a6db279393b433d97c2bc843f8e32b0",
        method: "get",
        name: "teams",
        entityLevel: `results.data.team`,
        auth: false,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ACME Sports NFL Team List`,
        short_name: `AcmeSports`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/logos/nfl.svg`,
      },
    },
  ],
}
