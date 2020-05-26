---
published: false
title: "Stakeholder retirement consent"
metaTitle: "Stakeholder retirement consent | WP"
metaDescription: "Identify under which circumstances the stakeholders will agree to retire the product in the view of migrating to the new product along with end-of-service support models."

metaTags:
  - Retire
  - Stakeholder retirement consent
  - Winning Product
---

## Why
Software applications don’t live forever. A time would come when the stakeholders will need to take a decision to retire the software application they have been using -may be for years. This could either be replacing the entire application with a new one or a revamp of the existing one. 

Below are some of the reaons why stakeholders may arrive to such a decision:
- Old Technology Is Compromising Your Security
- It’s More Cost Effective to Use Newer Technology
- Outdated Software Has No Upgrade Path
- Your Younger Workforce Wants Better UX
- The business is shutting down

This process is also called as application retirement, application decommissioning and application sunsetting.

This would also bring additional benefits for the stakeholders such as:
- Significant cost savings;
- More efficient utilization of critical resources;
- Freeing up of headroom and budget so that resources and funding can be directed toward adding value to the business. 



## How
The main activities of retirement would consist:
### Analyze system interactions
Most systems do not exist in isolation but rather interact with others systems in some fashion. As part of your retirement effort, you must identify the interactions, analyze them, and address each one via legacy integration modeling.
### Determine retirement strategy
Your strategy depends on your situation. First, if this is a new release of your system, you may need to perform simple data conversions, perhaps applying the collection of database refactorings implemented during the development cycle for this release as well as the new version of the application code. Second, when replacing an system with one developed in-house the team developing the replacement system will be responsible for architecting, designing, and implementing the interactions. They should do so following guidance from your enterprise architects, and the results of the legacy analysis, and seek to minimize the impact on other systems. Third, when replacing with a COTS system you will likely want to extend the COTS product, implying that you may opt to engage the COTS vendor to develop the additionally functionality you need. Fourth, completely retiring a system is the hardest case because you need to rework the external systems and may even cause the retirement of other systems because you have removed critical functionality which they cannot do without. You must work with the owners of the other systems and assist them in finding other sources for the information they need.
### Update the documentation
You will need to update a wide range of documentation, including your operations and support procedures, enterprise architecture models, system portfolio documentation, administration documentation, and system overview documentation (to note that it's been retired).
### Test
You must test your migration tools in a similar manner that you would test a system during the Transition phase. If you are following the evolutionary approach of the EUP you will be testing your migration and removal tools as you develop them. While it is desirable, you may not have the luxury of a test environment that supports all of your system, including all your data. If that is the case, make sure that the data you do have is a representative sample of the entire system.
### Migrate users
You will most likely not be able to simply turn off access to a system one day and be done with it. You must accommodate your end users by notifying them appropriately of the upcoming retirement and assisting them in migrating to other systems.
### Archive
The existing data, code, documentation, and other system artifacts must be properly archived so that it may be restored at a future date if required.
### System removal
This is often a complex task, as you must migrate and convert data, turn off access and remove all vestiges of the retiring system, and update all the others systems that interacted with the retiring system. It’s a good idea to take a complete backup of your system before you begin just in case you need to recreate the system in a hurry.
### End of Life
It is also vital to implement the end of life strategy depending on the previous agreement with the stakeholders. 
This may include the release of sourcecode for other parties to carry on from there. And/Or specify other conditions such as:
- Technical support, workarounds, and bug fixes will stop.
- Support during the period between EoS and EoL may only be available to those with a paid support contract.
- Online support documentation, wikis, or forums may be archived or taken offline on the EoL date or another specified date.
- Requests for features will not be accepted.
- Validation of software installs may not work.
- Official training for the software may no longer be available.


## References
- [Application Retirement Methodology] (https://www.capgemini.com/wp-content/uploads/2017/07/2013-04-10_application_retirement_methodology_whitepaper_web.pdf)
- [Retiring/Decommissioning an Software-Based Solution] (http://www.enterpriseunifiedprocess.com/essays/retirementPhase.html)
- [What Does End of Life Mean for Software and Should You Care] (https://helpdeskgeek.com/featured-posts/what-does-end-of-life-mean-for-software-and-should-you-care/)

