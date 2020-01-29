---
templateKey: "model-post"
indexingField: 6-Plan
title: "5-ci cd pipeline"
subtitle: "Identifying bugs at early stages "
date: 2019-07-25T15:04:10.000Z
featuredpost: true
featuredimage: "/img/ci-cd-pipeline.jpg"
description: "A CI/CD pipeline helps you automate steps in your software delivery process, such as initiating code builds, running automated tests, and deploying to a staging or production environment."

tags:
  - Plan
  - CI/CD Pipeline
  - Winning Product Canvas
---

![flavor wheel](/img/ci-cd-pipeline.jpg)

##Why
Having CI/CD Implemented allows you to enable fast flow of work from your development to production while ensuring the quality of the changes you are making with your development activities.It will also allow you to have greater confidence in the product that is critical for fast flow of work.

##How

- Continuous Integration

  - Continuous Integration (CI) should include the following steps and characteristics
    - CI must be triggered by the changes to the code base. This can be changes merging to the trunk (in Trunk Based Development) or to any branch
    - Must Build the entire code base to check for compilation errors
    - Must run the unit tests to ensure existing/new functionality is not broken
    - Must include Static Code analysis to check the quality of the code to prevent new tech debt from being accumulated
    - Run SAST tools to ensure that there aren't any security vulnerable introduced to the code base
    - Run tests/validation on the Infrastructure Code (if any)
    - Run tests/validation on the Configuration Code (if any)
    - Generate/Publish code metrics and test results
    - Generate/Publish artifacts that is needed for Continuous Delivery/Deployment
  - Continuous Delivery/Deployment
    - Run the Infrastructure Code to create/update Application Infrastructure (if any)
    - Run the Configuration Code to configure the infrastructure to the desired state (if any)
    - Deploy the artifacts on top of provisioned and configured environment
    - Run the automated e2e tests on the deployed application
    - Run DAST Suite on the deployed application
    - Run Performance tests on the deployed application

- Best Practices

  - Use a good branching strategy for your development - Trunk-Based Development Recommended
  - Use Infrastructure as Code, Configuration as Code practices in your application development to avoid Infrastructure and Configuration drift
  - Include Static Code Analysis, SAST (Static Application Security Tests), Unit test results and coverage in the CI pipeline
  - Validate Infrastructure Code, Configuration Code in the CI Pipeline
  - Follow Build Once, Deploy Many principle
  - Only promote the deployment to the next environment after validating the current environment using Automated tests, telemetry from the environments etc.
  - Implement Continuous Testing
  - Decouple Deployment from Release
  - Parallel test execution
  - Artifact versioning

- Techniques
  - Blue-Green Deployments
  - Canary Deployments
  - Zero-Downtime Deployments
  - Dogfooding
  - Feature Toggles

#References

- [CI/CD Pipeline: A Gentle Introduction](https://semaphoreci.com/blog/cicd-pipeline)
- [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration)
- [Continuous Delivery](https://en.wikipedia.org/wiki/Continuous_delivery)
