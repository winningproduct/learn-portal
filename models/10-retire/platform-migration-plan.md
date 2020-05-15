---
templateKey: "model-post"
indexingField: 11-Retire
title: "1-Platform migration plan"
subtitle: "Strategy and action plan to migrate all technology platform components from old system to new system"
date: 2019-07-25T15:04:10.000Z
featuredpost: true
featuredimage: "/img/platform-migration-plan.jpg"
description: "Platform migration is about salvaging what ever possible from the old system. Components need to be reused as much as possible to avoid the pitfall of reinventing the wheel."

tags:
  - Retire
  - Platform migration plan
  - Winning Product Canvas
---

![flavor wheel](/img/platform-migration-plan.jpg)

## Why

'Recycle' is the key word here. You should reuse anything that can be salvaged from the legacy system to avoid reinventing the wheel. Why you would have components which are worthy of migrating in the first place is, that despite the technology improvements, your business logic is likely remain the same. In otherworld, if your new products intends to solve the same problem then it is likely that there will be core business logic components which can easily work in the new system. Technologies might change, but the domain driven core business logic may not change. 

Contrary to the popular belief, the existence of migratable/reusable components is actually a good thing. What this actually proves is that your existing code is robust and can stand the test of time. There is no shame in using good old code. 


## How

Recommended approach to do a platform migration is four fold.

- Investigation
First you must investigate what components are actually required to be considered for migration given the requirements of the new system.

- Assessment
Those identified components need to be then assessed to measure their fit in the new system. First you need to get a good feel of the existing performance of the component and must assess whether that they meet the functional and non functional requirement of the new system. 
Compatibility of migrating components also need to be considered next given the technology difference in platform architectures.

- Approach
When it comes to actual migration of the component, there are two main alternatives.
Lift & shift:- As the title suggest this is the big bang approach. Just take the whole thing and try to move it in to the new system as it is. However, you need to consider possible alterations to the component when taking this approach. 
Trickle migration:- This refers to the process of migrating in phases. If there are many component in the platform architecture to migrate then trickle migration strategy might be a good option. It also gives more comfort in an unfortunate situation where you might have to rollback.

- Verification
Last piece of the puzzle is verifying that the migrated components indeed work as they are expected and they meet the requirements set at the inception. Consider observing a parallel run of these components to make sure that they behave the same as in the old architecture.

#References

- [Understanding Data Migration: Strategy and Best Practices](https://www.talend.com/resources/understanding-data-migration-strategies-best-practices/)
