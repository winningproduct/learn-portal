---
title: "Technical Architecture"
metaTitle: "Technical Architecture' | WP"
metaDescription: "Technical architecture defines how the granular software components are engineered and organized together to achieve the optimal delivery of the features in demand. The architecture shall mainly be governed by the product requirements under the moderation of industry best practices associated with the selected technologies, services, and relevant regulations."
published: true

metaTags:
  - Focus
  - Technical Architecture
  - Winning Product Canvas
---

## Why

Technical architecture defines and justifies the decisions and constructs of the underline platform of the software product. It includes functional and non-functional considerations and constraints, tech-stack selection, platform selection, architecture diagrams, deployment model, and DevOps process.

## How

### Requirements as your starting point

It would help if you always began from the requirements, not from a pre-conceived architecture blueprint. For this, you need to identify the 'architecturally significant' functional and non-functional requirements of the product. The requirements of which the 'cost of change is high' are considered architecturally significant since those should be determined at an early stage of the process to minimize rework.

- Understand the business requirements
- Understand the constraints
- Understand the stakeholder concerns and preferences

### Quantify using Quality Attributes

Now you must translate the requirements into a measurable set of quality attributes. You can find a comprehensive list of quality attributes to pick from [here](https://en.wikipedia.org/wiki/List_of_system_quality_attributes).

### Employ architectural-styles and design-tactics

Now you should decide what [architecture styles](https://en.wikipedia.org/wiki/List_of_software_architecture_styles_and_patterns) and [design tactics](https://core.ac.uk/download/pdf/82315288.pdf) to be employed to fulfill the quantified quality attributes. You should be aware of the possible trade-offs and conflicts that may arise by using different tactics. For example, a tactic used for high security may impede usability and performance.

### Defer decisions as appropriate

If you can postpone decisions, more knowledge and context is available to you for a better decision, but not all decisions can be delayed (deferred), especially those with a high cost of change. Examples for this are the 'programing language' and 'cloud native platform' to choose. But there are some decisions you may be able to delay by using some tactics more knowledge is available. An example of this is the database system. You may be able to use a dummy in memory DAL layer until you require persistence. Where you do not have enough knowledge to make a decision, consider the possibility of deferring.

### Create architecture views

You will require to develop different views of the developed architecture to communicate the concepts better. For example, the runtime behavior of a system cannot be explained through a view depicting how the solution code is organized. There are different documentation standards you may consider including the popular [4+1 model](https://devcycles.io/2019/02/27/4---1-architectural-view-model-introduction/).

### Living architecture

Technical architecture is not something you do just at the beginning of a project. Architecture is a living document and should be handled in an agile manner. Please read the topic [Architecture Runway](https://learn.winningproduct.com/5-build/01-architectural-runway) to understand how this should be practically done in a project.

### Validating the architecture

You should consider the derived architecture as a set of assumptions that are not verified until tested. Use early and frequent MVPs and POCs to validate the architecture regularly. Refer to the topic [Architecture Blueprint](https://learn.winningproduct.com/4-plan/03-architecture-blueprint) for further details.

## References

- [DevOps](https://en.wikipedia.org/wiki/DevOps)
- [Non-functional requirement](https://en.wikipedia.org/wiki/Non-functional_requirement)
- [4+1 model](https://devcycles.io/2019/02/27/4---1-architectural-view-model-introduction/)
- [Architecture styles](https://en.wikipedia.org/wiki/List_of_software_architecture_styles_and_patterns)
- [Quality attributes](https://en.wikipedia.org/wiki/List_of_system_quality_attributes)
