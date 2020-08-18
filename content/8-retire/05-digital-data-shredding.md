---
title: "Digital Data Shredding"
metaTitle: "Digital Data Shredding | WP"
metaDescription: "With customer's consent to close the account, permanently delete data and provide a mechanism to export customer's data on request."
published: true

checklist: 
  -
    order: 1
    question: Have you identified the sensitive data in your system that needs to be removed?
    expectation: Classification of all stored data with their sensitivity level clearly identified. For example what data table/blob which requires eventual removal should be clearly visible.
    version: 1.0.0
  -
    order: 2
    question: Is your system capable of extracting all data that belongs to a customer?
    expectation: A mechanism should be in place to clearly identify to which each atomic level of data belongs to. Each data row, file, etc.. needs to have a unique owner. Then there should be mechanisms in place easily extract this data when needed.
    version: 1.0.0
  -
    order: 3
    question: Is the product team aware of the data shredding standards? 
    expectation: Team members should be aware of the data shredding standards and there should be a justification for chosen standard.
    version: 1.0.0
  -
    order: 4
    question: Have you defined the data shredding process?
    expectation: There should be an agreed time span in place for customer data after they retire the product. There should also be mechanisms to evidences of data shredding.
    version: 1.0.0

metaTags:
  - Retire
  - Digital data shredding
  - Winning Product
  - Customer Success
---

## Why
Digital data shredding refers to the process of removing all data that is no longer needed. When retiring your legacy system, certain old data will become obsolete. Despite data storage expenses, various legal aspects often prevent you from keeping unnecessary data. If it’s required (e.g. business requirements) to keep historical data for analytics purposes, consider removing sensitive information (e.g. personal, medical, etc data) from the raw data. This process is well known as data anonymization.

Defining ownership of data is often tricky because there are legal considerations that need to be adhered to when storing users' private data. Laws such as GDPR enforce strict guidelines on this aspect. Disobeying such legal requirements can lead to serious penalties. That is why it is inadvisable to hold on to any data that your system doesn't need.

Another downside of holding unnecessary data is the increasing cost of storage. Especially if you’re using any cloud storage services, you can easily stack up expensive storage bills just to store data that does not have any business value and is no longer useful. For data analytics, consider just storing the outcomes (reports) of data analysis instead of the entire data load. This meta-information is significantly smaller in size and you can create it in a way that does not contain any user sensitive information.


## How
Consider the following when you shred data from your legacy system:

### Data returning options
Backup and return the user data to users before data is permanently removed from the system. You are legally obliged to do this, even before retiring the product. So be prepared and create necessary functionalities to do so.

### Data availability timelines
Removal of obsolete data and the availability of data to customers are two often conflicting topics. There are legal considerations in both these subjects. Make sure you mention the period of availability of users' data after the product retirement clearly in your user service level agreements (SLA).

### Data shredding standards
There are several data destruction standards available (NIST 800-88, DoD 5220.22-M, etc.). Align your data shredding procedures to widely accepted standards to ensure that the data cannot be recovered in any way later.

### Shredding evidence
Adopt a manual or an automated data shredding procedure. Either way, it’s recommended to keep some kind of evidence (e.g. logs) for audit purposes.

## References

- [Data erasure](https://en.wikipedia.org/wiki/Data_erasure#Regulatory_compliance)
- [What Are Current Data Destruction Standards?](https://www.compucycle.com/2019/01/10/current-data-destruction-standards/)
