# Python CI/CD Example Setup

Continuous Integration, Delivery and Deployment go hand in hand. Your method of integration should be focused on achieving a state of continuous delivery/deployment. Likewise to ensure that you can deliver and deploy any version at any time, e.g. rollback if necessary, having a continuous integration pipeline is an efficient way to achieve this.

Lets say that our product uses a python REST API using Flask that uses psycopg to interact with a PostgreSQL database

As with most libraries/tools, where possible, we should try to use widely used/well maintained software with a history of success

We should use pytest for testing and flake8 for linting with VSCode integration

## Testing

Write all new code using Test Driven Development (TDD) that will give our programmers a clearer understanding of what the purpose of the code is and what the edge cases are. Also helping by structuring the development process and forcing code to be written in a testable format from the beginning. Developers should try to maximise test quality whilst minimizing overall tests size (i.e. avoid repetitive tests) to speed up development and prevent a bottleneck in the pipeline. This should lead to better code quality, less code written and a better product.

Have a testing pyramid. Most robust/quickest unit tests run first, then integration tests and finally E2E/performance tests that are the most brittle/slowest so we can:
1. fail fast
2. fix
3. retest

These tests will be used at all stages of the pipeline: development, staging and production. Therefore write tests that are robust and not environment specific. Moreover, the development environment should mimic the production/staging environment as much as possible so that development is focused on the end product.

With developers working on the same repository there is always the risk of merge conflicts from changes. Therefore, focus should be on iterative/incremental development. If desired, extending the pipeline to automate deploys can create a tighter feedback loop. This has spillover with agile development where being adaptable to changing business requirements is seen as a key objective.

## Build

Python is an interpreted language so the code doesn't need to be compiled/transpiled. However, we will need to install dependencies in the environment the code is running in. We can do this by running pip freeze > requirements.txt in the development environment. Later we pip install -r requirements.txt in the new environment (staging/production). This would normally be specified in the YAML file which handles the automation of our CI pipeline.

## Example Pipeline

1. TDD cycle
2. Request integration of changes into pipeline
- Automated steps below
3. Pre-build testing + linting
4. Build in container/production environment
5. Test and lint in container/production environment
6. Changes are committed to central branch if everything succeeded
7. Deploy

:rocket:

## Other CI solutions apart from Jenkins/GitHub Actions

Most providers offer some support for either cloud-based or self-hosted

Other CI providers
1. GitLab
2. CircleCI
3. Travis CI

## Conclusion

Self-hosted solutions are more configurable and scalable at the cost of the convenience and speed of cloud-based solutions. The tradeoff is similar to the decision of whether to leverage an external API to abstract away implementation details, with the goal of focusing on your product, or build your own solutions. Self-hosting and maintaining the service costs you less upfront but can indirectly cost more by occupying infrastructure and labour resources. Another factor to consider is security. Passing your codebase/private keys to another entity is not inherently dangerous but is an extra potential vulnerability. With a small team of developers and a simple build step I think that cloud-based is usually more appropriate.