---
title: "Platform Migration Plan"
metaTitle: "Platform Migration Plan | WP"
metaDescription: "A strategy and action plan to migrate the technology platform components from the old system to the new system."
published: true

checklist: 
  -
    order: 1
    question: Have you identified the components which needs to be migrated?
    expectation: A list of components that are marked as migratable and justification of other components to indicate why are they not worthy of migration. 
    version: 1.0.0
  -
    order: 2
    question: Have you identified the new KPIs for the components which are marked for migration?
    expectation: Make sure the KPIs that are required for the new system are properly identified and the components which are marked for migration meets these standards.
    version: 1.0.0
  -
    order: 3
    question: Do you have a defined migration plan?
    expectation: Make sure that there is a clear plan for migrating the components. Make sure that the migration plan considers all the uncertainties.
    version: 1.0.0

metaTags:
  - Retire
  - Platform migration plan
  - Winning Product
  - Technology Mastery
---

## Why

Planning for platform migrations is essential to improve the efficiency and effectiveness of the process. Consider reusing existing components to avoid the costs of reinventing the wheel at once. Gradual migration is a crucial success factor for most products.

Technologies might change, but the domain-driven core business logic may not change. Contrary to popular belief, the existence of migratable/reusable components is a good thing.


## How

The recommended approach to do a platform migration is four-fold:

### Investigation

**Gradual migration:** First, you must investigate what components must be considered for migration, given the new system's requirements. How new components may co-exist with legacy components to seamlessly participate in the business processes.

**Inventory of assets:** You should have a clear inventory of assets (data and modules) that exists as the legacy. Make a plan and schedule how and when each of the assets gets migrated to the new platform.

**Prioritize components:** Decide whether to migrate your entire application at once, or migrate component by component or service by service.

**Risk Assessment:** Those identified assets need to be assessed to measure their fit in the new system. First, you need to get a good feel of the component's existing performance and determine whether they meet the functional and non-functional requirements of the new system. The compatibility of migrating components also needs to be considered given the technology difference in platform architectures. Identify relevant risks to the migration, opportunity costs, compliance, and security issues to obtain the final approval from stakeholders.

### Establish performance KPIs

To determine the success of the platform migration, you must set baselines to compare with after and during the migration.

| category        | Example KPI                                                     |
| --------------- | --------------------------------------------------------------- |
| User experience | Page load time, Lag, Response time, Session duration            |
| Performance     | Error rates, Throughput, Availability                           |
| Infrastructure  | CPU usage %, Disk performance, Memory usage, Network throughput |
| Business        | Cart adds, Conversions and conversion %, Engagement rates       |

### Migration

When it comes to the actual migration of the component, there are two main alternatives:

1.**Lift & shift:** This is the big bang approach. Just take the whole thing and try to move it into the new system at one go. However, it would help if you considered possible alterations to the component when taking this approach.

**Trickle migration:** This refers to the process of migrating in phases. If there are many components in the platform architecture to migrate, then trickle migration strategy might be a good option. It also gives more comfort in an unfortunate situation where you might have to roll-back.
Test early and often.


### Test early and often:

An essential piece of the puzzle verifies that the migrated components work as they are expected and meet the requirements set at the inception. Consider observing a parallel run of these components to make sure that they behave the same as the old architecture.

## References

- [Understanding Data Migration: Strategy and Best Practices](https://www.talend.com/resources/understanding-data-migration-strategies-best-practices/)
- [Migration in 10 steps](https://hub.packtpub.com/how-to-plan-a-system-migration-10-steps/)
- [Cloud Migration Checklist](https://blog.newrelic.com/engineering/cloud-migration-checklist/)
