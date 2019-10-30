---
templateKey: 'model-post'
title: '5-product architecture'
date: 2019-07-25T15:04:10.000Z
featuredpost: true
indexingField: 4-Focus
featuredimage: '/img/product-architecture-img-1.png'
description: 'product architecture'

tags:
  - WPO introduction
  - Value Proposition
  - Organization
  - WPO canvas
  - Winning product organization
  - Winning products
  - types of software
  - product architecture
---

##What is product architecture


The generalized definition of the software product architecture refers to the fundamental components of the software system and the associated disciplines used in creating software products.



Considered how the technology moves with the businesses in the modern software development world, the closest definition we can get in can be written as follows,



Product architecture defines how the granular software components are engineered and organized together in a software deployment echo system to achieve the optimal value delivery of the features in demand. The product architecture disciplines shall mainly be governed by the product development requirements under the moderation of industry best practices associated with the selected technologies, services and relevant regulations.



##Why
The product architecture blue print is an essential early starter to determine the direction of the solution development. Following are the main reasons why it is a must to focus on the product architecture at the beginning.



The cost of the decision

![flavor wheel](/img/product-architecture-img-1.png)




THIS NEEDS TO BE WRITTEN IN THE SPLIT FORM BREAKING THE TOPICS UNDER FOCUS, IMMERSE, PLAN, BUILD AND STABILIZE

WE WILL WRITE UNDER <HOW> SECTION WHAT WE NEED TO DO IN EACH STEP TO ACHIEVE THE OBJECTIVE.



##How


FOCUS - Sachith

IMMERSE - Sachith

PLAN - Jayantha

BUILD - Jayantha

STABILIZE - Shared



[Added by Jayantha - 8/23] 



##Product Quality Goals and Constraints

This section describes key quality goals of the product and associated constraints to choose alternatives.



•Scalability

•Availability

•Extendibility

•Reusability 

•Customizability

•Portability – Able to work in different platforms/OS and support of heterogeneous data persistence like MSSQL, MySQL, Oracle etc.

•Performance

•Reliability 

•Other key goals identified – Any specific client goals which are not captured in the above bullets can be listed here (Ex: Time to market which will impact the technology stack being chosen and use of off the shell components than building those by 99XT itself)



 

##Product Architecture

This will be described mainly using the 4+1 architectural view model.



##•Use Case Diagram
![flavor wheel](/img/product-architecture-img-2.png)


Main functionalities and users of the system will be described using a use case diagram.



 



 

##•High level overview of the system

This depicts the intended users or client applications, the system being built, and the external systems are being accessed in a diagram.

![flavor wheel](/img/product-architecture-img-3.png)

Example:

 



 



##Architecture Diagram of the System

This needs to show key architectural components of the system

Example 1: (Monolithic system with N layered architecture)

 ![flavor wheel](/img/product-architecture-img-4.png)



 

Example 2: A micro services-based system to be accessed by external banking systems

 ![flavor wheel](/img/product-architecture-img-5.png)



##Deployment Diagram/Physical View

How system should be deployed is shown using a deployment diagram. This shows the machine hardware configurations and operating system and installed software’s as prerequisites. If load balancers, firewalls or clustered nodes are used, those should be shown as part of the below diagram.

Example:

 ![flavor wheel](/img/product-architecture-img-6.png)





##Core Technical Components

•	Authentication and Authorization

•	Exception Handling

•	Logging

•	Transaction Management

•	Persistence

•	Inter process communication







##Non-Functional Requirements



•User interfaces requirements

•Performance requirements (i.e. Response time, load time, number of concurrent users, growth rate, data volume)

•Data migration requirements/backups

•Version Compatibility Requirement (Browser versions, HTML Version, Database versions, communication protocols, .Net Framework versions)

•Compliance requirements (i.e. GDPR, PCI)

•Certification requirements (i.e. All developers need to certify secure coding practices before starting the project)

•Software licensing requirements

•Legal requirements 

•Audit trail requirements (who did what and when for which purpose)

•Development requirements 

Development technology stack/versions
Development environment 
Coding standards 
Use of existing reusable components
•Internationalization requirements

•Technical documentation /Online help requirements

•User training requirements 

•Security requirements

Data Storage security (i.e. DB Encryption, Disk level encryption)
Data communication security (i.e. Certificates/TLS, )
Data Transit security 
Application layer security
•Usability requirements (i.e. Shortcuts keys, tab orders, ability to use by blind people)

•Folder structure/Packing requirements



Database designing

Alternative solutions and constraints

Risk/Limitations

