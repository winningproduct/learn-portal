---
templateKey: "model-post"
indexingField: 6-Plan
title: '3-Detailed data schema'
subtitle: "Details of the data storage, data interaction interfaces (APIs) and data dimensions for analytics purposes, etc."
date: 2019-07-25T15:04:10.000Z
featuredpost: true
featuredimage: "/img/detailed-schema-deign.jpg"
description: "Detailed data schema focuses on how to store data efficiently for retrival, analytics, cost and performance."

tags:
  - Plan
  - Detailed Data Schema
  - Winning Product Canvas
---

![Detailed data schema](/img/detailed-schema-deign.jpg)

##Why
Data is important, only if it can be interpreted and analyzed. Every business has lots of data and information within its data warehouses and systems and software solutions but, without a way to understand the data it is useless. In order to understand data it has be structured, related and easy to retrieve. On the other hand, modern day ubiquitous computing demands data to be used at any device, in any location, and in any format. Business has to address the data complexities of ubiquitous computing, in order to reach their customers. 

##How
In planning the detailed data schema, consider following areas.
- Online Transaction Processing(OLTP) and Online Analytics Processing(OLAP) use-cases
  - It helps you to decide the data schema for the application. You may use OLTP optimzed database, OLAP optimized database or purpose-built databases.
- Command and Query Responsibility Segregation (CQRS)
  - Consider increating performance, scalability, and security by seperating reads and updates to your data stores
- Data access patterns
  - It will help to design your schemas to efficiently query data for access patterns.
- Data consumers
  - Consider using a suitable API (i.e. REST, GraphQL) to serve your data consumers.
- Data modeling for analytics
  - Optimally creating and structuring database tables to answer business questions.


#References
- [Data Modeling Examples for Analytics](https://panoply.io/analytics-stack-guide/data-modeling-examples-for-analytics/)
- [CQRS Pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs)
- [Web API Design](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)
- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)
- [Data modelling](https://opentextbc.ca/dbdesign01/chapter/chapter-5-data-modelling/)
