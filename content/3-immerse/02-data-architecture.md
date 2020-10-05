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
  - Technology Mastery
checklist: 
  -
    order: 1
    question: Have you identified the information that needs to be stored and their relationships with each other? 
    expectation: There should be a data relationship diagram; something like an ER diagram. Everyone in the team should be aware of what is stored and the relationship between stored entities.
    version: 1.0.0
  -
    order: 2
    question: Have you identified the security concerns regarding the stored data and their access levels?
    expectation: Team should be aware of what data entities needs to be kept secured and who can have access to those data. According to some data regulations such as GDPR, it could be that even the development team should not have access to some sensitive data.
    version: 1.0.0
  -
    order: 3
    question: Have you optimized the data storage considering performance?
    expectation: The team should have identified the read and write performance constraints for each data entity and the data architecture should address those concerns. The team should also consider replication strategies for distributed applications.
    version: 1.0.0
  -
    order: 4
    question: What is the data storage strategy?
    expectation: Team should have decided on a storage strategy such as relational DB, No-Sql, etc... There should be a good justification for the selection based on cost, performance, etc...
    version: 1.0.0
  -
    order: 5
    question: Does your data architecture consider possible future data analytics requirements?
    expectation: Team should have at least consider a data model to represent different dimensions of data. There could be a data analytics model such as a Kimball model that is independent of the main data model.
    version: 1.0.0
---


## Why
Data architecture provides meaning to all the data that is collected. This gives the ability to the system to work with accurate information efficiently to solve the business problem. In addition to that, it gives a new opportunity to analyze and predict trends in information and to generate business insights.

## How
A successful enterprise needs to have a top-down coherent data architecture, designed based on the business processes and operations. Usually, there are three different layers for a data architecture.

### Conceptual Level Data Architecture Design based on Business Process and Operations
- The core data entities and data elements such as those about customers, products, sales.
- The output data needed by the clients and customers.
- Security policies to be applied to each data entity.
- The relationships between the data entities, such as reference integrity, business rules, execution sequence.
- Standards of data quality, operations, and Service Level Agreements (SLAs).

### Logical Level Data Architecture Design
- The type of database and the data format to be used. E.g. NoSQL, Relational
- The naming conventions and data integrity.
- Data archival/retention policies.
- Privacy and security information.
- Data Replications.
- Data Flows and Pipelines.
    
### Physical/technology model
- Provides the data mechanism for a specific process and functionality, or how the actual data architecture is implemented on underlying technology infrastructure. Also considers the different dimensions of collected data, such as time, etc. to use for analytical purposes later.

## References
- [Data architecture](https://en.wikipedia.org/wiki/Data_architecture)
