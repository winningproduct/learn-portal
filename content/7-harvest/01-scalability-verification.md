---
title: "Scalability Verification"
metaTitle: "Scalability Verification | WP"
metaDescription: "Make sure your application scales as users grow. Explore scale up and scale out strategies while maintaining SLA obligations and efficient cost of operations."
published: true
metaTags:
  - Harvest
  - Scalability Verification
  - Winning Product
  - Customer Success
---

## Why

Products need to scale up as the user base grows. If not, the user expectance for existing users may continue to shrink. Thankfully, modern cloud vendors provide mechanisms to both scales up and scale-out effortlessly. If the architecture is done correctly, your product can remain small with a minimum cost footprint at the inception and pay as you go as the product gets bigger.

## How

Consider the following when considering scalability verification.

- Make sure that your initial platform architecture had provisioned for scalability. Modern cloud vendors provide most requirements out of the box. Nevertheless, your architecture should have placed important components such as load balancers, decoupling patters, etc. in place from the beginning to support this.

- Define performance benchmarks. Re-look at performance benchmarks defined during the initial architecture and verify that system can perform as expected.

- Explore scale-up mechanisms that could be done with minimum architectural changes. It is especially helpful if you had not considered scaling during initial architecture.

- Scale-out methodologies could help to easy a bigger throughput bottleneck. Make sure your load balancing mechanisms and fault tolerance mechanisms are robust to handle this.

- Consider automatic scaling up and also scaling down mechanisms to reduce spending. Verify that automatic scaling works as advertised before going prime time with this.

- Setup the performance metrics monitoring to gather data from all deployed resources.

- Interpret these matrices to ensure that the throughput KPIs are met, and the limitations are communicated to the entire team.

## References

[Scalability testing](https://blog.qatestlab.com/2016/03/25/scalability-testing-procedure/)
