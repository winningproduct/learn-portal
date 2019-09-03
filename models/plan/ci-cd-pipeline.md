---
templateKey: 'model-post'
title: '6-ci cd pipeline'
date: 2019-07-25T15:04:10.000Z
featuredpost: true
indexingField: 8-Plan
featuredimage: '/img/default-image.png'
description: 'value-proposition'

tags:
  - WPO introduction
  - ci cd pipeline
  - Organization
  - WPO canvas
  - Winning product organization
  - Winning products
  - types of software
  - context-competitor-analysis
---
##Why? 
Having CI/CD Implemented allows you to enable fast flow of work from your development to production while ensuring the quality of the changes you are making with your development activities.It will also allow you to have greater confidence in the product that is critical for fast flow of work. 



##Inputs
Changes to the product you are making. The changes may include

Application Code Changes
Infrastructure Code Changes
Configuration Script Changes
Test Changes
Documentation Changes
 

##Outputs
The following can be outputs from your CI/CD Pipelines

Application Artifacts - That will be deployed to environments
Test Artifacts - Includes test results, Coverage Reports etc.
Other reports - SAST Reports, Dependency analysis reports etc.
            

	

##How?
Continuous Integration
Continuous Integration (CI) should include the following steps and characteristics

CI must be triggered by the changes to the code base. This can be changes merging to the trunk (in Trunk Based Development) or to any branch
Must Build the entire code base to check for compilation errors
Must run the unit tests to ensure existing/new functionality is not broken
Must include Static Code analysis to check the quality of the code to prevent new tech debt from being accumulated
Run SAST tools to ensure that there aren't any security vulnerable introduced to the code base
Run tests/validation on the Infrastructure Code (if any)
Run tests/validation on the Configuration Code (if any)
Generate/Publish code metrics and test results
Generate/Publish artifacts that is needed for Continuous Delivery/Deployment
            

Continuous Delivery/Deployment
Run the Infrastructure Code to create/update Application Infrastructure (if any)
Run the Configuration Code to configure the infrastructure to the desired state (if any)
Deploy the artifacts on top of provisioned and configured environment
Run the automated e2e tests on the deployed application
Run DAST Suite on the deployed application
Run Performance tests on the deployed application
            

##Check List 


##Best Practices
Use a good branching strategy for your development - Trunk-Based Development Recommended
Use Infrastructure as Code, Configuration as Code practices in your application development to avoid Infrastructure and Configuration drift
Include Static Code Analysis, SAST (Static Application Security Tests), Unit test results and coverage in the CI pipeline
Validate Infrastructure Code, Configuration Code in the CI Pipeline
Follow Build Once, Deploy Many principle
Only promote the deployment to the next environment after validating the current environment using Automated tests, telemetry from the environments etc. 
 

Techniques
Blue-Green Deployments
Canary Deployments
Dogfooding
