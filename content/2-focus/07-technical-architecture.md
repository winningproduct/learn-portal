---
title: "Technical Architecture"
metaTitle: "Technical Architecture' | WP"
metaDescription: "Defines how granular software components are engineered and organized together to achieve the optimal delivery of the features in demand. The architecture is mainly governed by the product requirements. It’s moderated by industry best practices associated with the selected technologies, services and relevant regulations."
published: true
metaTags:
  - Focus
  - Technical Architecture
  - Winning Product Canvas
  - Technology Mastery
checklist: 
  -
    order: 1
    question: Have you identified the key quality attributes of your product?
    expectation: Key non-functional quality attributes such as security, performance, etc... needs to have been identified along with recommended technical strategies to overcome them.
    version: 1.0.0
  -
    order: 2
    question: Is the technical architecture clearly defined?
    expectation: There should be a clear technical diagram outlining all major components. This should show how the above key quality attributes are addressed in the system.
    version: 1.0.0
  -
    order: 3
    question: Does your architecture support future scaling & extendability?
    expectation: The technical architecture should have provisioning to scale as the application scales. Clear separation needs to be maintained between different components to enable both scaling out and up independently.
    version: 1.0.0
  -
    order: 4
    question: How do you maintain security of your system and customer data?
    expectation: Architecture should have made measures to provide tight security. There should be evidences of OWASP testing. Also, customer data needs to be accessed securely to meet data protection standards such as GDPR. Encryption at rest can be considered here.
    version: 1.0.0
  -
    order: 5
    question: Have you validated your architecture to ensure the corner cases?
    expectation: All the ceiling values of non-functional requirements needs to be identified. There should be evidences to make sure that the technical architecture can support such data loads specified in SLAs.
    version: 1.0.0      
---

## Why
Technical architecture defines and justifies the decisions and constructs of the underlying platform of the software product. It includes functional and non-functional considerations and constraints, tech-stack selection, platform selection, architecture diagrams, deployment model and DevOps process.

## How

### Requirements as your starting point
Always begin from the requirements, not from a pre-conceived architecture blueprint. For this you need to identify the 'architecturally significant' functional and non-functional requirements of the product. Requirements where the 'cost of change is high' are considered architecturally significant and those should be determined at an early stage of the process to minimize rework.

- Understand the business requirements
- Understand the constraints
- Understand the stakeholder concerns and preferences

### Quantify using Quality Attributes

Now, you must translate the requirements into a measurable set of quality attributes. You can find a comprehensive list of quality attributes to pick from [here](https://en.wikipedia.org/wiki/List_of_system_quality_attributes).

### Employ architectural-styles and design-tactics

Decide the [architecture styles](https://en.wikipedia.org/wiki/List_of_software_architecture_styles_and_patterns) and [design tactics](https://core.ac.uk/download/pdf/82315288.pdf) to be used to fulfil the quantified quality attributes. Be aware of the possible tradeoffs and conflicts that can arise from using different tactics. For example, tactics used for high security may impede usability and performance.

### Defer decisions as appropriate

If you don’t have enough knowledge to make a decision, consider the possibility of deferring. Not all decisions can be delayed (deferred), especially the ones with a high cost of change. An example of this is the choice of 'programming language' and 'cloud native platform'. But there are some decisions you can delay until more knowledge is available. For example, the database system. You can use a dummy in memory DAL layer until you really require persistence. 

### Create architecture views

Develop different views of the developed architecture to better communicate concepts. For example, the runtime behavior of a system cannot be explained through a view depicting how the solution code is organized. There are different documentation standards to consider including the popular [4+1 model](https://devcycles.io/2019/02/27/4---1-architectural-view-model-introduction/).

### Living architecture

Technical architecture is not something you do just at the beginning of a project. Architecture is a living document and should be handled in an agile manner. Check out [Architecture Runway](https://learn.winningproduct.com/5-build/01-architectural-runway) to understand how this should be practically executed within a project.

### Validating the architecture

Consider the derived architecture as a set of assumptions that are not verified until tested for the purpose. Use early and frequent MVPs and POCs to validate the architecture regularly. Refer to the topic [Architecture Blueprint](https://learn.winningproduct.com/4-plan/03-architecture-blueprint) for further details.

## References

- [DevOps](https://en.wikipedia.org/wiki/DevOps)
- [Non-functional requirement](https://en.wikipedia.org/wiki/Non-functional_requirement)
- [4+1 model](https://devcycles.io/2019/02/27/4---1-architectural-view-model-introduction/)
- [Architecture styles](https://en.wikipedia.org/wiki/List_of_software_architecture_styles_and_patterns)
- [Quality attributes](https://en.wikipedia.org/wiki/List_of_system_quality_attributes)
