---
templateKey: 'model-post'
title: 'technology updating and migration plan '
date: 2019-07-25T15:04:10.000Z
featuredpost: true
indexingField: 6-Harvest
featuredimage: '/img/technology-migration-img-1.png'
description: 'technology updating and migration plan '

tags:
  - WPO introduction
  - hot fix process
  - Organization
  - WPO canvas
  - Winning product organization
  - Winning products
  - types of software
  - context-competitor-analysis
---
##Why? 


Software migration is the practice of transferring data, accounts, and functionality from one operating environment to another. It could also refer to times when users are migrating the same software from one piece of computer hardware to another, or changing both software and hardware simultaneously. Software migration is a generic term that can refer to either a sort of transfer for applications, operating systems, databases, networks, content management systems (CMS), or even an entire IT infrastructure.



###What is Application, Program, and Software Migration
Application, app, program, and software migration all refer to the same type of transfer: the process of moving an application from one environment to another (like from an on-premises enterprise server to a cloud-based environment, from one server to another, or from cloud-to-cloud). This can refer to applications custom-built on platforms like Microsoft Azure, the Google App Engine, Force.com, MySQL, or Amazon Web Services. Software migration is one of a few types of migrations that can be managed and automated entirely by a third party middleware solution. 



#Why Perform Application, Program, and Software Migration?
Migrations of this type are done to improve efficiency or bring all applications from a legacy system into a current one. Often, organizations want to virtualize their software, meaning to disassociate it with operating systems and host the programs in separate environments for sandboxing at runtime. 



###Enterprise Resource Planning Migration
Enterprise Resource Planning (ERP) software is a specific type of software that integrates with other applications and automates many backend office functions like HR, product planning, sales, and marketing into a single interface. ERP migration is similar to other software migration, but involves significantly more risk because of how many business-critical functions it contains.



#Why Perform ERP Migration?

Because of the massive complexity, integral nature, and significant investment of ERP systems, many large companies don’t migrate off of the platforms and systems they have installed for years. However, rapid changes in technology cause many features of new ERP systems to be out of reach, so there is limited talent that can or wants to work with a custom-built legacy ERP system. Additionally, global compliance is often a concern for enterprise-level companies, and those changing standards can apply to ERP. 



###Operating System Migration
An operating system (OS) migration often refers to taking an OS (Windows, OSX, etc.) off a computer’s main hard disk and placing it on a virtual machine (VM) or a disk partition. It could also refer to moving from one operating system to another, transferring all data and software in the process.



#Why Perform Operating System Migration?

Migrations of this type are done to increase speed or modernize an operating system (if it’s what’s being transferred), or to speed up all software and add new functionality (if you’re migrating from one OS to another).



##Database Migration
Database migration involves moving from one type of database to another, while maintaining other parts of your setup like its software and operating system. It could be changing the physical location of data, the type or provider of a database, or the format of the data. It often involves converting all data into a commonly-understood, transferable format before converting it again for its new location. It’s key to either write or license a program to process this migration.



Why Perform Database Migration?

Migrations of this type are usually done to upgrade or replace existing servers and hard disks, to perform server maintenance, to relocate a data center, or to consolidate all of a website’s assets into one physical location. 



##Cloud Migration
Cloud migration involves moving applications, data, or other assets from on-site systems to a remotely-hosted environment, or from one cloud system to another. It often requires coordination with the third-party entities who control the cloud servers, which can have your data distributed between different locations.



#Why Perform Cloud Migration?

Cloud migrations might be performed to consolidate an organization’s different teams’ data onto one service, or because another provider proved more cost-efficient or had other enhanced features like enterprise security.



Inputs 
Invent or Improve Decision

 

Outputs 
Data Migration Plan

 

How? 


Six Application Migration Strategies: “The 6 R’s”  - (Cloud Migration)

 ![flavor wheel](/img/technology-migration-img-1.png)




##Rehosting — Otherwise known as “lift-and-shift.”


We find that many early cloud projects gravitate toward net new development using cloud-native capabilities, but in a large legacy migration scenario where the organization is looking to scale its migration quickly to meet a business case, we find that the majority of applications are rehosted. GE Oil & Gas, for instance, found that, even without implementing any cloud optimizations, it could save roughly 30 percent of its costs by rehosting.



Most rehosting can be automated with tools (e.g. AWS VM Import/Export, Racemi), although some customers prefer to do this manually as they learn how to apply their legacy systems to the new cloud platform.



We’ve also found that applications are easier to optimize/re-architect once they’re already running in the cloud. Partly because your organization will have developed better skills to do so, and partly because the hard part — migrating the application, data, and traffic — has already been done.



##Replatforming — “lift-tinker-and-shift.”


Here you might make a few cloud (or other) optimizations in order to achieve some tangible benefit, but you aren’t otherwise changing the core architecture of the application. You may be looking to reduce the amount of time you spend managing database instances by migrating to a database-as-a-service platform like Amazon Relational Database Service (Amazon RDS), or migrating your application to a fully managed platform like Amazon Elastic Beanstalk.



##Repurchasing — Moving to a different product


Most commonly see repurchasing as a move to a SaaS platform. Moving a CRM to Salesforce.com, an HR system to Workday, a CMS to Drupal, and so on.



##Refactoring / Re-architecting


Re-imagining how the application is architected and developed, typically using cloud-native features. This is typically driven by a strong business need to add features, scale, or performance that would otherwise be difficult to achieve in the application’s existing environment. Are you looking to migrate from a monolithic architecture to a service-oriented (or server-less) architecture to boost agility or improve business continuity? This pattern tends to be the most expensive, but, if you have a good product-market fit, it can also be the most beneficial.


##Retire — Get rid of


Once you’ve discovered everything in your environment, you might ask each functional area who owns each application. We’ve found that as much as 10% (I’ve seen 20%) of an enterprise IT portfolio is no longer useful, and can simply be turned off. These savings can boost the business case, direct your team’s scarce attention to the things that people use, and lessen the surface area you have to secure



##Retain — Usually this means “revisit” or do nothing (for now)


Maybe you’re still riding out some depreciation, aren’t ready to prioritize an application that was recently upgraded, or are otherwise not inclined to migrate some applications. You should only migrate what makes sense for the business; and, as the gravity of your portfolio changes from on-premises to the cloud, you’ll probably have fewer reasons to retain.





References

[1](https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/)

[2](https://www.smartsheet.com/all-about-software-migration-planning)