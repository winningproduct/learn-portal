---
templateKey: 'model-post'
title: 'data scheme design'
date: 2019-07-25T15:04:10.000Z
featuredpost: true
indexingField: 8-Plan
featuredimage: '/img/default-image.png'
description: 'data scheme design'

tags:
  - WPO introduction
  - data scheme design
  - Organization
  - WPO canvas
  - Winning product organization
  - Winning products
  - types of software
  - context-competitor-analysis
---
##1. Why?

Majority of software systems need to generate, read, write and query data to function as expected. Thus, data schema plays a major factor on the application performance and scalability.

(Data integrity, ACID, Consistency, multi tenancy)



##2. Inputs?

Domain knowledge, non-functional requirements (Scalability, multi-tenancy, consistency)



##3. Outputs

Logical model

Physical database schema design



##4. How?

When compared with 10 years back, where we had only relational databases, now we have more choice on the way we need to persist the data. There are 2 main ways of how you store data, which are Relational and NoSQL. When you further drill down to Relational DBs, there are two classes of workloads. Which are transactional and analytical DBMS. Transactional DBMS are the choice for concurrent, small, low-latency transactions (real-time apps)

While Analytical DBMS just focus on large, parallel and read-only analytics (data warehouses).

 

Typically RDBMS provides you with ACID properties (Atomicity, Consistency, Isolation, Durability) that is suited for real-time apps.

 

NoSQL databases targets applications with big data with less restrictions on schema, data integrity and data consistency. There are four types of NoSQL database types which are mentioned below,

Document databases
Graph stores
Key-value stores
Wide-column stores


##5. Check List

Relational or NoSQL or combination of both
How to do multi-tenancy if required
Identify performance hotspots and optimize
Horizontal and vertical scaling