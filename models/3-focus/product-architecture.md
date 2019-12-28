---
templateKey: "model-post"
indexingField: 4-Focus
title: "5-product architecture"
subtitle: "What is product architecture"
date: 2019-07-25T15:04:10.000Z
featuredpost: true
featuredimage: "/img/software-architecture.jpg"
description: "Product architecture defines how the granular software components are engineered and organized together in a software deployment echo system to achieve the optimal value delivery of the features in demand. The product architecture disciplines shall mainly be governed by the product development requirements under the moderation of industry best practices associated with the selected technologies, services and relevant regulations."

tags:
  - Focus
  - Product Architecture
  - Winning Product Canvas
---

![flavor wheel](/img/software-architecture.jpg)

##Why
The product architecture blue print is an essential early starter to determine the direction of the solution development. Following are the main reasons why it is a must to focus on the product architecture at the beginning.

- The types of software building blocks to use
  Based on the fundamental requirements, the very first thing that the engineering team must decide is the type of the solution that is going to be built. Whether it will be a web application, mobile application, a standalone desktop application or a complex distributed system.

- The cost of the decision
  90% of the times, it is possible to make changes to the product architecture during its early phases. However the fact to to consider and plan here is the cost of change. The cost of change, which is a function of cost and time can increase exponentially with time. In-contra the cost or the effort needed in making informed decisions decreases with time by better getting to know the product domain and associated technicalities.

##How
This will be described mainly using the 4+1 architectural view model.

- Use Case Diagram
  Main functionalities and users of the system will be described using a use case diagram.

- High level overview of the system
  This depicts the intended users or client applications, the system being built, and the external systems are being accessed in a diagram.

- Architecture Diagram of the System
  This needs to show key architectural components of the system
  e.g. Monolithic system with N layered architecture, A micro services-based system to be accessed by external banking systems

- Deployment Diagram/Physical View
  How system should be deployed is shown using a deployment diagram. This shows the machine hardware configurations and operating system and installed software’s as prerequisites. If load balancers, firewalls or clustered nodes are used, those should be shown as part of the below diagram.

Technical and Non-Technical Aspects

- Core Technical Components

  - Authentication and Authorization
  - Exception Handling
  - Logging
  - Transaction Management
  - Persistence
  - Inter process communication

- Non-Functional Requirements
  - User interfaces requirements
  - Performance requirements (i.e. Response time, load time, number of concurrent users, growth rate, data volume)
  - Data migration requirements/backups
  - Version Compatibility Requirement (Browser versions, HTML Version, Database versions, communication protocols, .Net Framework versions)
  - Compliance requirements (i.e. GDPR, PCI)
  - Certification requirements (i.e. All developers need to certify secure coding practices before starting the project)
  - Technical documentation /Online help requirements
  - etc...

[Software architecture](https://en.wikipedia.org/wiki/Software_architecture)
