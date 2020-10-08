---
title: "Architecture Blueprint"
metaTitle: "Architecture Blueprint | WP"
metaDescription: "Describes the architectural representation of the system's components. At the inception implement a feature vertical and the setup of the required infrastructure to act as a guideline for further development."
published: true
documentation: "TechArchitecture"
metaTags:
  - Plan
  - Architecture Blueprint
  - Winning Product
  - Technology Mastery
checklist: 
  -
    order: 1
    question: Have you specified the traceability between architecture blueprint and requirements ?
    expectation: Clearly illustrate how certain architectural decisions have been taken to address each product requirement. An architecture decision log should be available to understand how assumptions and validation has taken place over a period of time.
    version: 1.0.0
  -
    order: 2
    question: Have you identified architecturally significant requirements? 
    expectation: List of requirements covering functional and non functional which has a direct impact for product architecture
    version: 1.0.0
  -
    order: 3
    question: Have you documented various alternative architectures and tradeoff analysis before focusing on a specific architecture?
    expectation: Artefact covering alternative architecture analysis covering aspects of typical quality attributes of the product
    version: 1.0.0
---


## Why

Modern day enterprise applications make use of an array of complex technical resources such as load balancers, queues, data stores, and containerized components. While there are many technical options to choose from, selecting the right resource for the right reason is crucial. The selection might depend on the throughput, security or even cost aspects; but it’s important to have a rational for the selection based on your requirements.

Once the architecture blueprint is in place, it acts as a reference for future development. The technical decisions are already made at this point and the developers have to just follow this design. The architecture blueprint also acts as a communication mechanism to any technology interested stake holder regarding the technology stack in use.

## How

Consider the following aspects when establishing a technical architecture:

- **Configurability:** Despite your awareness on requirements, it’s likely that some assumptions have to be made when building the initial product architecture. Good architects can build the system in a highly configurable manner. If some of the components are changed later on, it has a minimum dependency on the rest of the system. This helps to postpone some of the architectural decisions until there’s enough information.
- **Non-functional requirements:** Your architecture must support all required non-functional requirements such as performance and security. It’s recommended to do an analysis on the capability before starting to implement any features.
- **Extendibility:** Both functional and non-functional requirements are bound to scale up as the business grows. This is usually a sign of a growing business. Your architecture should support extendibility in all aspects.
- **Infrastructure as Code (IaC):** Enables system administrators to automate the configuration and provisioning process, reducing human errors and saving time. The following configuration orchestration and management tools can be used to implement IaC and help you automate your infrastructure:
  - Terraform
  - AWS CloudFormation
  - Azure Resource Manager and Google Cloud Deployment Manager
  - Chef
  - Puppet
  - Saltstack
  - Ansible
  - Docker
  - Vagrant

## References

- [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code)
- [IaS](https://www.plutora.com/blog/infrastructure-as-code)
- [Infrastructure as Code tools](https://www.thorntech.com/2018/04/15-infrastructure-as-code-tools/)
