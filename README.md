# ACME Sports

## Introduction

This project is built on Gatsby which allows this project to be built statically and deployed for super quick performance.

Also, it was a good excuse to finally try out Gatsby.

 Data is pulled from the following API: http://delivery.chalk247.com/team_list/NFL.JSON?api_key=74db8efa2a6db279393b433d97c2bc843f8e32b0

## Development
To run this locally, check out the [Gatsby quick start](https://www.gatsbyjs.org/docs/quick-start/) page and when you have Gatsby installed locally just navigate to the root of this repo and run `gatsby develop`

## Hypothetical updating
Since there is no reason for me to throw this on a live server, I haven't. However, since I have this running on gatsby cloud, I have a webhook available that would trigger a re-build of the site with up to date data.

I would set up a CURl request on a schedule to run once a day to hit the webhook and initialize the re-build.