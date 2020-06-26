---
title: "End-of-life Roadmap"
metaTitle: "End-of-life Roadmap | WP"
metaDescription: "Identify the circumstances to retire a product, migrate to a new product, and establish end-of-service support models"
published: true

metaTags:
  - Stakeholder retirement consent
  - Winning Product
  - Retire
---

## Why

Software applications don't live forever. There will be a time when you need to decide as a product manager to retire the software product. The strategy could be to replace the entire software with a new one or revamp the existing one.

- New major release to retire an old version
- Retiring a module of the product
- Completely retiring the entire product

Product retirement, end-of-life a product, product decommissioning, and product sun-setting are few other names referred to the same process.

Below are some of the reasons which impact the decision of product retirement:

1. Old technology is compromising your security
2. It's more cost-effective to use newer technology
3. If the software platform is outdated and has no upgrade path
4. Your new users require better UX on a new platform
5. The business model change requires a different platform
6. The product is financially not performing well
7. The business is shutting down, or you are no longer in that market

Product retirement would also bring additional benefits for the stakeholders such as:

- Significant cost savings on efficient platforms
- Increase attraction of development talent
- Efficient utilization of critical resources
- Freeing up of headroom and budget to direct resources and funding toward adding value to the business.

## How

The main activities to include on the end-of-life roadmap would consist of:

### Impact analysis

Business Processes: Users were using the functionality to fulfill their business processes. It would be best to understand the impact on the business processes and alternative means through which they may minimize the effect.

Parties affected: Subset of your customers, internal teams and departments, partner organizations, resellers, etc.

Integrations: Your product does not exist in isolation but rather interacts with other systems in some way. You must identify the interactions, analyze them, and understand the impact of retirement.

Financial: Your product brought revenue/profit to the company. There will be a revenue loss due to its retirement. It would be best if you planned to handle such in case of a significant loss.

Customer Goodwill: Customers have trusted you when they have decided to buy the product. It would be best if you handled the retirement of the product sensitively.

### Process, Milestones, and Dates

What is the detailed plan of discontinuing the product? Include an exit date and work back from that point.

### Internal Approvals

Product retirement is an important strategic decision for an ISV. There can be other departments etc. that are affected due to the decision. Remember that it's essential to keep your company stakeholders, executive staff, and the whole organization informed and involved in the decision making.

### EoL Policy

It is also a good idea to develop an end-of-life policy for your company so that your customers know the procedure of retiring a product. For example, have a look at the [end-of-life policy of Cisco](https://www.cisco.com/c/en/us/products/eos-eol-policy.html).

EOL policy may include the release of source code for other parties to carry on from there. It  is also vital to specify additional conditions such as:

- Technical support, workarounds, and bug fixes will stop.
- Support during the period between EoS and EoL (may only for paid support contract).
- Online support documentation, wikis, or forums may be archived or taken offline on a date.
- Requests for features will not be accepted.
- Validation of software installs may not work.
- Official training for the software may no longer be available.

### Customer communication

Customer communication is the most crucial step of your roadmap, and many ISVs get this step wrong. It would help if you gave plenty of advanced notice so that your customers do not feel that the product they use is suddenly disappearing. It's vital to communicate the

- reason for retirement
- customer impact
- migration paths
- alternatives
- last date of support (EoS)

You should also have alternative solutions to suggest to your customers. It could be either a third-party tool, partner offers, or to migrate to a newer version you have developed.

### Update the documentation

You will need to update a wide range of documentation, including your sales scripts, website, operations, and support procedures, enterprise architecture models, system portfolio documentation, administration documentation, and system overview documentation (to note that it's been retired).

### RACI and Execution

Develop a Responsibility Matrix (RACI - responsible, accountable, consulted, and informed) to manage the execution of the migration. You may include the following areas in your execution plan.

Test the migration: You must similarly test the migration tools that you would test a system during the Transition phase. While it is desirable, you may not have the luxury of a test environment that supports all of your customers, including all your data. If that is the case, make sure that the data you do have is a representative sample of the entire customer base.

Migrate platform and data: You will most likely not be able to turn off access to a system one day and be done with it. You must accommodate your customers by notifying them appropriately of the upcoming retirement and assisting them in migrating to other systems.

Data Archiving: The existing data, code, documentation, and other system artifacts must be adequately archived to be restored at a future date if required.

System removal: This is often a complicated task. You must migrate and convert data, turn off access and remove all vestiges of the retiring system, and update all the other systems that interacted with the retiring system. It's a good idea to take a complete backup of the system before you begin just in case you need to recreate the system in a hurry.

## References

- [Application Retirement Methodology](https://www.capgemini.com/wp-content/uploads/2017/07/2013-04-10_application_retirement_methodology_whitepaper_web.pdf)
- [Retiring/Decommissioning an Software-Based Solution](http://www.enterpriseunifiedprocess.com/essays/retirementPhase.html)
- [What Does End of Life Mean for Software and Should You Care](https://helpdeskgeek.com/featured-posts/what-does-end-of-life-mean-for-software-and-should-you-care/)
- [10-Step Checklist](https://www.productplan.com/how-to-end-of-life-product/)
