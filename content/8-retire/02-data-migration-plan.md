---
title: "Data Migration Plan"
metaTitle: "Data Migration Plan | WP"
metaDescription: "Systematic plan to smoothly migrate data (system data, users, user data, etc.) from the old platform to a new platform with feature compatibility. Have a migration strategy."
published: true

metaTags:
  - Retire
  - Data Migration Plan
  - Winning Product
  - Customer Success
---

## Why

Data migration from old to the new platform has risks of

- costly downtime,
- corrupted, lost, and misplaced data,
- compatibility issues
- bad performance
- data security and privacy breach
- etc.

A thorough data migration plan is essential to select, prepare, cleanse, transform, and transfer the data from the old to the new product.

## How

### Identify data formats (Existing and New)

A clear understanding of the source and target data is key to the success of your migration project. Consider getting the business team and users involved to find the business use and the meaning of your data schemas. It is useful to record decisions taken and reasons in mapping, cleansing, and transformation.

### Backup and version data

Things that can go wrong during a migration project. You need to have a mechanism to take snapshots or continuously version your data during different migration processes.

### Identify migration tooling

Most migration projects are complicated and require the support of proper tooling. Data migration is usually not a one-time procedure, but continuous porting during a period. Many ETL tools can exists, and such should be validate for features and flexibility.

### Select, prepare and cleanse

Some data in the legacy datastore might not be relevant in the new business models. Also, well transformed historical data will perform faster in a new data scheme.

### Validate data

New system features, business processes, and permission models could get violated with legacy data. For example, some mandatory fields in the new system may not be available in the legacy data. It would be best if you validated the data migration plan for following key attributes:

- Relevance: Is the migrated data relevant to its intended purpose?
- Accuracy and Completeness: Is it correct, and can it be validated to provide all information?
- Integrity and Consistency: Does it comply with a coherent, logical, and easily understood?
- Timeliness. Is it up to date to be used with new business processes?
- Compliance: Does it comply with regulatory standards?

### Move the data

The most effective time for migration switchover is the least active periods, such as weekends, holidays. In case of an unexpected showstopper you should have the ability to rollback to a working data version.
There are two ways you may do the execution:

**Big-Bang Migration:** Transfer all data within a small time window and make a complete switch over to the new system. Most of the time, this could result in downtime during the process.

**Trickle Migration:** In contract, trickle migration recommends running both systems in parallel. Migration processes keep data continuously synced between the products until the migration is completed. Trickle Migration is a sophisticated design compared to big-bang, but it can result in a safe and smooth transition from user point-of-view.

### Test the migration

You must perform a full audit for the quality of data, performance, security, and completeness once the migration process is complete. Conduct unit, system, volume, and stress tests.

### Plan for maintenance and shut down old systems

Once the transformation is done, keep close monitoring of the new environment to verify running smoothly. When you are confident, shut down the legacy system. Ensure to setup data maintenance processes to continuously improve security and performance.

## References

[Successful Data Migration](https://www.oracle.com/technetwork/middleware/oedq/successful-data-migration-wp-1555708.pdf)
[7 Step Migration Plan](https://nordic-backup.com/blog/7-steps-data-migration-plan/)
[Understanding Data Migration](https://www.talend.com/resources/understanding-data-migration-strategies-best-practices/)
