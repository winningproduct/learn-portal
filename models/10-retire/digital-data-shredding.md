---
templateKey: "model-post"
indexingField: 11-Retire
title: "2-Digital-data-shredding"
subtitle: "Removal of unwanted data"
date: 2019-07-25T15:04:10.000Z
featuredpost: true
featuredimage: "/img/digital-data-shredding.jpg"
description: "Digital data shredding refers to the process of removal of unwanted data from your system. Basic rule of thumb is that you should remove all data which you do not absolutely need. When retiring your legacy system, the chances are you probably don't need any old data. Despite the case of storage expenses, there are many legal aspect which prevents you from keeping unneeded data. If there is a requirement to keep historical data for analytics purposes, consider removing sensitive information such as customers' personal data from raw data. This process is known as data anonymization. "

tags:
  - Retire
  - Digital data shredding
  - Winning Product Canvas
---

![flavor wheel](/img/digital-data-shredding.jpg)

## Why

Ownership of the data is somewhat of a tricky concepts. There are legal considerations that needs to be adhered to when storing users' private data. Laws such as GDPR has strict guidance on this and disobeying can lead to serious penalties. So there is a very good reason not to hold on to any data that your system doesn't absolutely need.

Another argument is the cost of storage. Especially if you are using any cloud storage mechanism, you can easily stack up expensive storage bills just to store data that you don't really need and possible will not use in future. If there is a need to run any data analytics, consider just storing the outcomes (reports) of data analysis instead of the entire data load. These meta information is significantly smaller in size and you can create it in a way that does not contain any user sensitive information.


## How

Consider the following pointers when you want to shred data from your legacy system.

- Data returning options
Users' data belong to users. Backup and return the user data to users before data is permanently removed from the system. You are most likely legally obliged to do this at any time, even before retiring the product. So be prepared and create needed functionalities to do so.

- Data availability timelines
Removal of obsolete data and the availability of data to customers are two often conflicting topics. There are legal considerations in both these topics. Make sure that you mention the period of availability of users' data after the product retirement clearly in your user SLA.

- Data shredding standards
There are data destruction standards available (NIST 800-88, DoD 5220.22-M, etc.). Make sure your data shredding procedures adhere to widely accepted standard to make sure that the data cannot be recovered in any way later on.

- Shredding evidence
You may employee a manual or an automated data shredding procedure. Either way, make sure that you keep a log or some sort of an evidence for audit purposes.

## References

[Data erasure](https://en.wikipedia.org/wiki/Data_erasure#Regulatory_compliance)
[What Are Current Data Destruction Standards?](https://www.compucycle.com/2019/01/10/current-data-destruction-standards/)
