---
title: "Release Management"
metaTitle: "Release Management | WP"
metaDescription: "Release management is typically a set of processes and practices to be followed when doing any changes to the existing system. Changes can be categorized as bug fixes, feature development and Platform/UX/Technology Shift."
published: true
documentation: "DeliveryProcess"
metaTags:
  - Stabilize
  - Release management
  - Winning Product
  - Technology Mastery
---

## Why
Every Software product needs to be evolved with time to serve existing customers and to attract new ones. These changes can be bug fixes, new features, improving non-functional aspects (performance, security, etc.), technology shift, and UX revamp. With frequent changes, you need a systematic process to manage these releases. Your system is likely to be used by many existing customers.  But the new releases should make sure that there is no adverse effect on their usage.
Furthermore, with frequent releases, you need to a process to continuously assure the quality of the product. Customers also need to be communicated both for awareness and for marketing purposes about the new changes. Therefore when the product matures, a proper release management plan is required.


## How
Consider the following when building a release management plan.

- Communication plan
Communication of the release is important. Changes in each release first need to be understood and then documented and communicated to all stakeholders, especially to customers well ahead of release dates.

- Quality plan
With frequent releases, assuring quality can be challenging. There should be a process in place to handle regression testing. What test cases need to be executed at each release, what is automated and what is done manually and how the fixes of bugs are handled; all need to be answered here.

- Risk assessment
The release is when everything comes together. Many components and stakeholders are involved during a release. Thus, a good release management plan needs to identify possible risks in the flow and have a contingency plan if things go wrong.

- Code progression
Consider progressing the code through different stages of the release. In other words, at the stage of development using a development environment which is expected to be half working. Once the development is done, progress the code to the testing stage by deploying a developer approved version to a test environment. Moving the deployment to production or an intermediate stage environment should only be done when the testing is done, and the quality check is approved.

- Scheduling
Part of release management is to understand the bandwidth of the team and capacity of each specialized resource. Scheduling releases should be a proactive process based on required work and available capacity.

- Development to release plan
With a release, frequent code changes, testing and deployments need to be handled systematically. It is recommended to freeze the code well before the intended release date to give enough headroom for testing. If and when bugs are found, they need to be triaged to determine what gets fixed. This prioritization needs to be based on the severity of the bug vs the impact of fix to other parts of the product. On a different note, there have to be clear role descriptions to indicate who makes the final call of a release.

- DevOps
Invest in a good DevOps pipeline to streamline the release process. Consider having a proper continuous integration/delivery/deployment framework to fast-track the releases process.

- IaC
Consider doing infrastructure deployment via code as much as possible. It will eliminate any human errors from the process while dramatically improving deployment time.

- Consider the following techniques to manage feature deployment in the release process.
Feature Toggling: Feature toggling is the ability to turn features of an application on or off quickly without a code change.
Dark Launching: Dark launching is the process of releasing production-ready features to a subset of your users before a full release.
Blue-Green Deployments: Technique of having two identical production environment with one serving as live and the other serving as a backup.  


## References 
- [Release management](https://en.wikipedia.org/wiki/Release_management#:~:text=Release%20management%20is%20the%20process,testing%20and%20deploying%20software%20releases.)
- [What is Release Management?](https://www.plutora.com/software-release-management/what-is-release-management)
- [Release Management Process and Best Practices](https://www.plutora.com/blog/release-management-best-practices)
