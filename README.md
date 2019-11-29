[![Build Status](https://travis-ci.org/agilesquads/agilesquads.github.io.svg?branch=devel)](https://travis-ci.org/agilesquads/agilesquads.github.io)

# Agile Squads
## The liberating agile framework for mature software teams

This is the source code of the website https://agilesquads.org

Click [here](https://agilesquads.org) to view the framework.

## Running it locally

The website is built using Webpack. To run it locally do the following:

```
npm install
npm start
```

## Deployment

Agile Squads website is using Travis-CI for deployment. Merging PRs to `devel` branch will run `npm run build` and deploy the `dist` folder to `master` branch, which will be served through Github Pages.
