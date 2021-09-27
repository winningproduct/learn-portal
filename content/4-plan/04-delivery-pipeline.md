---
title: "Delivery Pipeline"
metaTitle: "Delivery Pipeline | WP"
metaDescription: "Helps you automate steps in your software delivery process, such as initiating code builds, static code analysis, running automated tests, and deploying to a staging or production environment."
published: true
documentation: "TechArchitecture"
metaTags:
  - Plan
  - Delivery Pipeline
  - Winning Product
  - Customer Success
checklist: 
  -
    order: 1
    question: Have you setup key steps of the CI pipeline?
    expectation: Ability to demonstrate CI configuration and execute CI job successfully having tasks such as, code quality analysis, unit test execution, security tests 
    version: 1.0.0
  -
    order: 2
    question: Have you setup key steps of the CD pipeline?
    expectation: Ability to demonstrate the key stages of the delivery such as executing infrastructure code, execute code to configure infrastructure, prmote artefacts across different stages of the pipeline, have different nonfunctional automated tests harnesses.
    version: 1.0.0
  -
    order: 3
    question: Have you identified release methods different to deployment techniques?
    expectation: Ability to decouple deployments from releases
    version: 1.0.0
---


## Why
CI/CD (Continuous Integration/Continuous Deployment) implementation allows a fast flow of work from your development to production while ensuring the quality of all development changes. With a good DevOps pipeline, you can make sure that your automated tests are run with each build. This makes it easier to catch bugs earlier in the development life cycle. It also automates the deployment of infrastructure such as Databases, Storage Queues, Web Servers, etc. making little room for human errors. With all this, a CI/CD pipeline ultimately allows you greater confidence in product development that’s critical for a fast flow of work.


## How
Modern cloud service providers have numerous tools and techniques available for you to setup a good DevOps pipeline. It’s usually a matter of doing the right configurations to achieve the desired outcome. However, when setting it up, all aspects of the delivery pipeline should be considered. The flow of a delivery pipeline is twofold. 

1.	**Continuous Integration (CI):** - should include the following steps and characteristics:
  - CI must be triggered by the changes to the code base. This can be changes merging to the trunk (in Trunk Based Development) or to any branch.
  - Build the entire code base to check for compilation errors.
  - Run the unit tests to ensure existing/new functionality is not broken.
  - Include Static Code analysis to check the quality of the code and prevent new tech debt from being accumulated.
  - Run SAST tools to ensure that there isn’t any security vulnerablity introduced to the code base.
  - Run tests/validation on the Infrastructure Code (if any)
  - Run tests/validation on the Configuration Code (if any)
  - Generate/Publish code metrics and test results
  - Generate/Publish artifacts that’s needed for Continuous Delivery/Deployment.


2. **Continuous Delivery/Deployment**
  - Run the Infrastructure Code to create/update Application Infrastructure (if any)
  - Run the Configuration Code to configure the infrastructure to the desired state (if any)
  - Deploy the artifacts on top of provisioned and configured environment
  - Run the automated e2e tests on the deployed application
  - Run DAST Suite on the deployed application
  - Run Performance tests on the deployed application

Also consider the following best practices when setting up a delivery pipeline:
 - Use a good branching strategy for your development. Trunk-Based Development is recommended.
 - Use Infrastructure as Code and Configuration as Code practices in your application development to avoid infrastructure and configuration drift.
 - Include Static Code Analysis, SAST (Static Application Security Tests), Unit test results and coverage in the CI pipeline.
 - Validate infrastructure code and configuration code in the CI pipeline.
 - Follow the “Build Once, Deploy Many” principle.
 - Only promote the deployment to the next environment after validating the current environment using automated tests, telemetry from the environments etc.
 - Implement continuous testing.
 - Decouple deployment from the release.
 - Perform parallel test execution.
 - Perform artifact versioning.

An ideal delivery pipeline would be something similar to the following:
  - **DEV Local environment:** This is the environment used to write code and unit test it
  - **Integration testing environment (optional):**
    - Code could be automatically deployed to this environment once it has been unit tested and the pull request has been approved. This environment could be used to run tests once work related to different modules has been integrated
    - Integration tests would be run in this environment
  - **Staging environment:**
    - Once unit testing has been performed in the DEV local environment or integration testing has been performed in the Integration testing environment, features/bug fixes could be pipelined into the staging environment.
    - Regression testing should take place in this environment
    - The staging environment should be similar to the production environment to ensure correctness of test results. That would mean having to mirror: the same set of systems and services as production, network endpoints and databases having the same configurations and schemas as production, same load balancers as in production, same monitoring tools used in production
    - The right test data should be available in this environment and it should mimic real users. If Data anonymization is performed on production data to be used in the staging environment, the data must preserve the original data types and formats (e.g. any field mandating alphanumeric characters, data range and number of characters should be substituted with other alphanumeric characters within the set data range and follow the limit of number of characters) , preserve the consistency of primary key values , preserve referential integrity, considering up and down stream data flows
  - **Production environment:** Features/bug fixes could be migrated to production once they have passed the relevant validation tests in the staging environment.


Also, consider researching the following deployment techniques
 - **Blue-Green Deployments:** The technique of having two identical production environments with one serving as live and the other serving as a backup.
 - **Canary Deployments:** Rolling out releases to a subset of users at a time.
 - **Zero-Downtime Deployments**
 - **Dogfooding:** Trying the product in house first before rolling it out.
 - **Feature Toggles:** Have facilities to enable and disable certain features to certain users without changing the code.



## References
- [CI/CD Pipeline: A Gentle Introduction](https://semaphoreci.com/blog/cicd-pipeline)
- [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration)
- [Continuous Delivery](https://en.wikipedia.org/wiki/Continuous_delivery)
