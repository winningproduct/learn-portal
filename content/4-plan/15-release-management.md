---
title: "Release Management"
metaTitle: "Release Management | WP"
metaDescription: "A set of processes and practices to follow when making changes to the existing system. Changes can be categorized as bug fixes, feature development and Platform/UX/Technology Shift."
published: true
documentation: "DeliveryProcess"
metaTags:
  - Stabilize
  - Release management
  - Winning Product
  - Technology Mastery
---

## Why
Every software product needs to evolve with time to serve existing customers and to attract new ones. These changes can be in the form of bug fixes, new features, improving nonfunctional aspects (performance, security, etc..), technology shift, UX revamp, etc.. With frequent changes you need a systematic process to manage these releases. Your system is likely to be used by many existing customers and new releases should ensure there’s no adverse effect to their usage. Continuously assure the quality of the product when making frequent releases. Customers should be notified both for awareness and for marketing purposes about the new changes. There’s an increased need for a proper release management plan as the product matures.


## How
Consider the following when creating a release management plan:

- **Communication Plan:** Communication of the release is important. Changes in each release first needs to be understood, then documented and communicated to all stakeholders especially to customers well ahead of release dates.
- **Quality Plan:** Assuring quality can be challenging with frequent releases. There should be a process in place to handle regression testing. What test cases needs to be executed at each release, what is automated and what is done manually and how the fixes of bugs are handled; all needs to be answered here.
- **Risk Assessment:** Release is when everything comes together. Many components and stakeholders are involved during a release. A good release management plan needs to identify possible risks in the flow and should have a contingency plan if things go wrong.
- **Code Progression:** Consider progressing the code through different stages of the release. At the stage of development, use a development environment that’s partially working. Once the development is done, progress the code to a testing stage by deploying a developer approved version to a test environment. Moving the deployment to production or an intermediate stage environment should only be done once the testing is done and the quality check is approved.
- **Scheduling:** Part of the release management is to understand the bandwidth of the team and capacity of each specialized resource. Scheduling releases should be a proactive process based on the required work and the available capacity.
- **Development to Release Plan:** Testing and deployments needs to be handled in a methodical manner due to frequent code changes during a release. Freeze the code well before the intended release date to give enough headroom for testing. If and when bugs are found, they need to be triaged to determine what gets fixed. This prioritization needs to be based on the severity of the bug vs the impact of fix to other parts of the product. Also, there must be clear role descriptions to indicate who makes the final call of a release as well.
- **DevOps:** Invest on a good DevOps pipeline to streamline the release process. Consider having a proper continuous integration/delivery/deployment framework to fast-track the release process.
- **IaC:** Consider doing infrastructure deployment via code as much as possible. This eliminates any human errors from the process while dramatically improving deployment time.
- **Feature Deployment:** Consider the following techniques to manage feature deployment in the release process:
  - **Feature Toggling:** Turn features of an application on or off easily without a code change. 
  - **Dark Launching:** The process of releasing production-ready features to a subset of your users prior to a full release. 
  - **Blue-Green Deployments:** The technique of having two identical production environments with one live and the other serving as a backup.


## References 
- [Release management](https://en.wikipedia.org/wiki/Release_management#:~:text=Release%20management%20is%20the%20process,testing%20and%20deploying%20software%20releases.)
- [What is Release Management?](https://www.plutora.com/software-release-management/what-is-release-management)
- [Release Management Process and Best Practices](https://www.plutora.com/blog/release-management-best-practices)
