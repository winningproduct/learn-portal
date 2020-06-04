---
title: "Data Architecture"
metaTitle: "Data Architecture | WP"
metaDescription: "Data architecture is composed of models, policies and rules or standards that govern which data is collected, data relationships, how it is stored, arranged, integrated, and processed."
published: true
documentation: "DataModel"
metaTags:
  - Immerse
  - Data Architecture
  - Winning Product
---


## Why
Data architecture provides meaning to all the data that is collected. On one hand this gives the ability to the system to work with accurate information efficiently to solve the business problem. On the other hand it gives a new opportunity to analyze and predict trends in information and there by to generate business insights.


## How
A successful enterprise needs to have a top-down coherent data architecture designed based on the business processes and operations. Usually there are three different layers for a data architecture.
- Conceptual Level Data Architecture Design based on Business Process and Operations
  - It should include,
    - The core data entities and data elements such as those about customers, products, sales
    - The output data needed by the clients and customers.
    - Security policies to be applied to each data entity.
    - The relationships between the data entities, such as reference integrity, business rules, execution sequence.
    - Standards of data quality, operations, and Service Level Agreements (SLAs)
- Logical Level Data Architecture Design
  - It should consider,
    - Type of database and the data format to use e.g. NoSQL, Relational
    - The naming conventions and data integrity
    - Data archival/retention policies
    - Privacy and security information
    - Data Replications
    - Data Flows and Pipelines
- Physical/technology model
  - Provides the data mechanism for a specific process and functionality, or how the actual data architecture is implemented on underlying technology infrastructure
Apart from the above, also consider the difference dimensions of collection data such as time, etc... to be used for analytical purposes later on.


## References
- [Data architecture](https://en.wikipedia.org/wiki/Data_architecture)