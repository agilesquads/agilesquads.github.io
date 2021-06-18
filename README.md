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

## Adding Addons

Addons expand the Agile Squads with new guides,
making the framework more strict.

To add a new addon to the website do the following:
- Select a `slug` for the addon, e.g. `lean-roadmap`
- create a new folder with the slug name under `./src/addons/<slug>`
- Add a `manifest.json` file that describes the addon
- Add a `summary.md` file with a short description, up to 160 characters
- Add a `description.md` file with the guide of the addon.

Summary text that is longer than the limit, will be truncated in the
addons page.

Use markdown to enrich the description file.

## Deployment

Agile Squads website is using Github Actions for deployment.
Merging PRs to `devel` branch will run `npm run build` and deploy the `dist` folder to `master` branch, which will be served through Github Pages.
