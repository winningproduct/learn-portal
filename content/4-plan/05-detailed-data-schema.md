---
title: 'Detailed Data Schema'
metaTitle: "Detailed Data Schema | WP"
metaDescription: "Focuses on how to store data efficiently for retrieval, cost, and performance. It also looks at data interaction interfaces (APIs) and data dimensions for analytic purposes."
published: true
documentation: "DataModel"
metaTags:
  - Plan
  - Detailed Data Schema
  - Winning Product
  - Technology Mastery
checklist: 
  -
    order: 1
    question: Have you identify entities and attributes ?
    expectation: OLTP and OLAP schemas are identified with their attributes and indexing techniques
    version: 1.0.0
  -
    order: 2
    question: Have you identified data access patterns?
    expectation: Different data requirements needs different patterns eg. CQRS, Repository etc.
    version: 1.0.0
  -
    order: 3
    question: Is there a analysis done to chose between different storage types eg. Sql vs NoSql?
    expectation: There should be clear analysis to accomodate entities belonging to Sql and NoSql with their indexing and associated costs
    version: 1.0.0
---


## Why
Every product is exposed to a variety of user data. However, the way in which they are stored and accessed can make a huge difference in productivity. Your business needs to capture enough information to support future requirements but should only capture enough data to minimize storage solutions overload. How you define relationships among data entities has a direct impact on data retrieval performance. Considering all these, it’s important to establish a detailed data schema to determine what data needs to be stored and how they are related.


## How
In planning the detailed data schema, consider the following areas:
- **Focus on what information needs to be stored:** It’s always a fight between future requirements and the burden on storage solution. First step should be to determine what data needs to be processed considering current and possible future requirements.
- **Data relationships:** Establish relationships between entities to determine the meaning of stored data. Relationships need to be as close to reality as possible.
- **Storage solution:** Contemplate the data storage solution as well. You could consider a relational database, NoSQL database, in memory database or even a flat storage solution like blob storage taking into account the cost vs performance.
- **Online Transaction Processing (OLTP) and Online Analytics Processing (OLAP) use-cases:** It helps you to decide the data schema for the application. You can use OLTP optimized database, OLAP optimized database or purpose-built databases.
- **Command and Query Responsibility Segregation (CQRS):** Consider increasing performance, scalability, and security by separating reads and updates to your data stores.
- **Data Access Patterns:** This helps to design your schemas to efficiently query data for access patterns.
- **Data Consumers:** Consider using a suitable API (i.e. REST, GraphQL) to serve your data consumers.
- **Data Modeling for Analytics:** Consider creating and structuring data to suit analytical requirements. Try to model data with various dimensions such as time, sales etc. to be able to do data analysis.


## References
- [Data Modeling Examples for Analytics](https://panoply.io/analytics-stack-guide/data-modeling-examples-for-analytics/)
- [CQRS Pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs)
- [Web API Design](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)
- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)
- [Data modelling](https://opentextbc.ca/dbdesign01/chapter/chapter-5-data-modelling/)
