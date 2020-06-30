---
title: "Delivery Pipeline"
metaTitle: "Delivery Pipeline | WP"
metaDescription: "A CI/CD pipeline helps you automate steps in your software delivery process, such as initiating code builds, static code analysis, running automated tests, and deploying to a staging or production environment."
published: true
documentation: "TechArchitecture"
metaTags:
  - Plan
  - Delivery Pipeline
  - Winning Product 
---


## Why
Having CI/CD Implemented allows a fast flow of work from your development to production while ensuring the quality of all development changes. With a good DevOps pipeline you can make sure that your automated tests are run with each build and thereby making it easier to catch bugs earlier in the development life cycle. This also automates the deployment of infrastructure such as DataBases, Storage Queues, Web Servers, etc... making little room for human errors. With all this, a CI/CD pipeline ultimately allow you greater confidence in  product developmentthat is critical for fast flow of work.


## How
Modern cloud service providers have a plethora of tools and techniques available for you to setup a good DevOps pipeline. It is usually a matter of doing the right configurations to achieve the desired outcome. However when setting it up all aspects of the delivery pipeline should be considered. Flow of a delivery pipeline is two fold. Continuous Integration and Continuous Delivery. Improvement

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

Also consider the following best practices when setting up a delivery pipeline.
- Use a good branching strategy for your development - Trunk-Based Development Recommended
- Use Infrastructure as Code, Configuration as Code practices in your application development to avoid Infrastructure and Configuration drift.
- Include Static Code Analysis, SAST (Static Application Security Tests), Unit test results and coverage in the CI pipeline.
- Validate Infrastructure Code, Configuration Code in the CI Pipeline.
- Follow Build Once, Deploy Many principle.
- Only promote the deployment to the next environment after validating the current environment using Automated tests, telemetry from the environments etc.
- Implement Continuous Testing.
- Decouple Deployment from Release.
- Parallel test execution.
- Artifact versioning.

Also consider researching on the following deployment techniques
- Blue-Green Deployments: Technique of having two identical production environment with one serving as live and the other serving as a backup.
- Canary Deployments: Rolling out releases to a subset of users at a time.
- Zero-Downtime Deployments
- Dogfooding: Trying the product in house first before rolling it out.
- Feature Toggles: Having facilities to enable and disable certain features to certain users without changing code.


## References
- [CI/CD Pipeline: A Gentle Introduction](https://semaphoreci.com/blog/cicd-pipeline)
- [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration)
- [Continuous Delivery](https://en.wikipedia.org/wiki/Continuous_delivery)
