## part11 
https://fullstackopen.com/en/part11

### CI/CD

---
We first looked at what CI/CD is, how it's done usually and its purpose. The first exercise was to research and discuss a hypothetical CI/CD pipeline in a language that was not JavaScript, this can be found in ```exercise1.md```.

Once we forked this repository, we used [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) to create different workflows which can be found in ```.github/workflows```.

Used [cron](https://crontab.guru/#0_12_*_*_*) to schedule jobs. Used the [GitHub Events API](https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types) to run specific jobs only when certain words are included/not included in the commit message (e.g. '#skip'). Used [Github Contexts](https://docs.github.com/en/actions/learn-github-actions/contexts) to conditionally run jobs depending on the status of the current job, such as sending a Slack notification on failure or success, and access repository secrets in the workflows e.g. [Slack Webhook](https://api.slack.com/messaging/webhooks), Heroku API key. Learned how to include deployment to Heroku in workflows with the custom action [Heroku Deploy](https://github.com/AkhileshNS/heroku-deploy) and how to roll back if health-checking the deployed app fails. The final main workflow used for this repository is ```.github/workflows/pipeline.yml``` which includes test, build, lint, version, deploy and notification steps.

![full-stack-open-pokedex](https://github.com/jamessl154/full-stack-open-pokedex/actions/workflows/pipeline.yml/badge.svg)

#### The project for the final exercise of this part can be found [here](https://github.com/jamessl154/bloglist)

---

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build
