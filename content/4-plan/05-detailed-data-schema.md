---
title: 'Detailed Data Schema'
metaTitle: "Detailed Data Schema | WP"
metaDescription: "Detailed data schema focuses on storing data efficiently for retrieval, cost, and performance. It also looks at data interaction interfaces (APIs) and data dimensions for analytics purposes."
published: true
documentation: "DataModel"
metaTags:
  - Plan
  - Detailed Data Schema
  - Winning Product
  - Technology Mastery
---


## Why
Every product is exposed to a variety of user data. However, the way in which they are stored and accessed can make a massive difference in productivity. The business needs to capture enough information to support future requirements yet should only capture enough data, not to overload storage solutions. Furthermore, how you define relationships among data entities will have a direct impact on data retrieval performance. Thereby it's important to establish a detailed data schema to determine what data to store and how they are related. 


## How
In planning the detailed data schema, consider the following areas.
- Focus on what information to store
It's always a fight between future requirements and the burden on the storage solution. The first step should be to determine what data we need to be processed, considering current and possible future requirements.
- Data relationships
Establish relationships between entities to determine the meaning of stored data. Relationships need to be as close to reality as possible.
- Storage solution
Amidst all of this, contemplate the data storage solution as well. You could consider a relational database, NoSQL database, a memory database, or even a flat storage solution like blob storage considering the cost vs. performance.
- Online Transaction Processing(OLTP) and Online Analytics Processing(OLAP) use-cases
It helps you to decide the data schema for the application. You may use OLTP optimized database, OLAP optimized database, or purpose-built databases.
- Command and Query Responsibility Segregation (CQRS)
Consider increasing performance, scalability, and security by separating reads and updates to your data stores.
- Data access patterns
It will help to design your schemas to efficiently query data for access patterns.
- Data consumers
Consider using a suitable API (i.e., REST, GraphQL) to serve your data consumers.
- Data modeling for analytics
Consider creating and structuring data to suit analytical requirements. Try to model data with various dimensions such as time, sales, etc.. to be able to do data analysis.


## References
- [Data Modeling Examples for Analytics](https://panoply.io/analytics-stack-guide/data-modeling-examples-for-analytics/)
- [CQRS Pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs)
- [Web API Design](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)
- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)
- [Data modelling](https://opentextbc.ca/dbdesign01/chapter/chapter-5-data-modelling/)
