---
title: "Scalability Verification"
metaTitle: "Scalability Verification | WP"
metaDescription: "Ensure your application scales as users grow. Explore scale up and scale out strategies while maintaining SLA obligations and efficient cost of operations."
published: true
metaTags:
  - Harvest
  - Scalability Verification
  - Winning Product
  - Customer Success
checklist: 
  -
    order: 1
    question: Has your platform architecture provisioning for scalability? 
    expectation: Cloud vendors provide scalability requirements out of the box, but your architecture should have placed important components such as load balancers, decoupling patters, etc... Explore scale up and scale down mechanisms.
    version: 1.0.0
  -
    order: 2
    question: Have you defined performance benchmarks? 
    expectation: Verify that performance benchmarks defined during initial architecture.
    version: 1.0.0
  -
    order: 3
    question: Have you setup performance metrics monitoring? 
    expectation: Monitoring to gather data from all deployed resources ensure that the throughput KPIs are met and the limitations are communicated to the entire team . Overview of monitoring mechanisms.
    version: 1.0.0
---

## Why
Products need to scale up as the user base grows. If not, the user expectance for existing users may continue to shrink. Thankfully, modern cloud vendors provide mechanisms to both scale-up and scale-out effortlessly. If the architecture is done properly, your product can remain small with a minimum cost footprint at the inception and pay as you go as the product gets bigger.

## How
Consider the following when considering scalability verification:

- Ensure that your initial platform architecture had provisioned for scalability. Modern cloud vendors provide most requirements out of the box, but your architecture should have placed important components such as load balancers, decoupling patters, etc, in place from the beginning to support this.
- Define performance benchmarks. Re-look at performance benchmarks defined during the initial architecture and verify that a system can perform as expected.
- Explore scale-up mechanisms that could be done with minimum architectural changes. This is especially helpful if you had not considered scaling during the initial architecture.
- Scale-out methodologies could help ease a bigger throughput bottleneck. Ensure your load balancing mechanisms and fault tolerance mechanisms are robust to handle this.
- Consider automatic scaling up and also scaling down mechanisms to reduce spending. Verify that automatic scaling works as advertised before going prime time with this.
- Setup the performance metrics monitoring to gather data from all deployed resources.
- Interpret these matrices to ensure that the throughput KPIs are met and the limitations are communicated to the entire team.

## References

[Scalability testing](https://blog.qatestlab.com/2016/03/25/scalability-testing-procedure/)
