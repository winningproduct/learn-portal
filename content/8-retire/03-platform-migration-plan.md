---
title: "Platform Migration Plan"
metaTitle: "Platform Migration Plan | WP"
metaDescription: "Strategy and action plan to migrate the technology platform components from old system to new system."
published: true

metaTags:
  - Retire
  - Platform migration plan
  - Winning Product
---

## Why

Planning for platform migrations is essential to improve the efficiency and effectiveness of the process. It would be best if you considered reuse of existing components to avoid the costs of reinventing the wheel at once. Gradual migration is a crucial success factor for most products.

Technologies might change, but the domain-driven core business logic may not change. Contrary to popular belief, the existence of migratable/reusable components is a good thing.

## How

The recommended approach to do a platform migration is four-fold.

### Investigation

_Gradual migration:_ First, you must investigate what components must be considered for migration, given the new system's requirements. How new components may co-exist with legacy components to seamlessly participate in the business processes.

_Inventory of assets:_ You should have a clear inventory of assets (data and modules) that exists as the legacy. Make a plan and schedule of how and when each of the assets gets migrated to the new platform.

_Prioritize components:_ Decide if you migrate your entire application at once, or migrate component by component or service by service.

_Risk Assessment:_ Those identified assets need to be assessed to measure their fit in the new system. First, you need to get a good feel of the component's existing performance and determine whether they meet the functional and non-functional requirements of the new system. The compatibility of migrating components also needs to be considered given the technology difference in platform architectures. Identify relevant risks to the migration, opportunity costs, compliance, and security issues to obtain the final approval from stakeholders.

### Establish performance KPIs

To determine the success of the platform migration, you must set baselines to compare with after and during the migration.

| category        | Example KPI                                                     |
| --------------- | --------------------------------------------------------------- |
| User experience | Page load time, Lag, Response time, Session duration            |
| Performance     | Error rates, Throughput, Availability                           |
| Infrastructure  | CPU usage %, Disk performance, Memory usage, Network throughput |
| Business        | Cart adds, Conversions and conversion %, Engagement rates       |

### Migration

When it comes to the actual migration of the component, there are two main alternatives.

_Lift & shift:_ This is the big bang approach. Just take the whole thing and try to move it into the new system at one go. However, it would help if you considered possible alterations to the component when taking this approach.

_Trickle migration:_ This refers to the process of migrating in phases. If there are many components in the platform architecture to migrate, then trickle migration strategy might be a good option. It also gives more comfort in an unfortunate situation where you might have to rollback.

### Test early and often

An essential piece of the puzzle verifies that the migrated components work as they are expected and meet the requirements set at the inception. Consider observing a parallel run of these components to make sure that they behave the same as in the old architecture.

## References

- [Understanding Data Migration: Strategy and Best Practices](https://www.talend.com/resources/understanding-data-migration-strategies-best-practices/)
- [Migration in 10 steps](https://hub.packtpub.com/how-to-plan-a-system-migration-10-steps/)
- [Cloud Migration Checklist](https://blog.newrelic.com/engineering/cloud-migration-checklist/)
