---
title: "Performance Tuning Plan"
metaTitle: "Performance Tuning Plan | WP"
metaDescription: "Optimize system performance for the best user experience, based on performance requirements and analysis on existing performance."
published: true
documentation: "TechArchitecture"
checklist: 
  -
    order: 1
    question: Have you identified the requirements related to performance?
    expectation: Overiew of the performance requirements. Higher throughput and lower latency is better for the overall performance of the product.
    version: 1.0.0
  -
    order: 2
    question: Have you carried out performance testing? 
    expectation: Throughout the product engineering lifecycle, it’s required to do different types of performance testing to identify performance bottlenecks.
    version: 1.0.0
  -
    order: 3
    question: Have you identified performance issues? 
    expectation: Overview of issues of identified components, subsystems and integrations to reach the benchmarked performance levels.
    version: 1.0.0
metaTags:
  - Optimize
  - Performance tuning plan
  - Winning Product
  - Technology Mastery
---

## Why
According to user experience research, more than 40% of users abandon the software product if the page loading time gets delayed for more than 2 seconds. If the product's business is also relying on the API economy, poor product API performance can have a direct impact on the revenue.

## How
A software product has a collection of integrated subsystems and this can be viewed as a collection of nodes and connections. Performance is the level of throughput of node and latency of each connection. Higher the throughput and lower the latency it's better for the overall performance of the product. Performance fine-tuning incurs different level costs based on the tactics utilized. It’s important to understand the level of performance required for a product and use the most optimal set of tactics.

- Performance Engineering
  - Identify architecturally significant requirements and isolate requirements related to performance.
  - Derive a performance benchmark.
  - Identify tactics to ensure the required performance level.
        - Tactics to ensure the right level of performance for components and sub-systems
        - Tactics to minimize the latency of communication between components and subsystems 
- Performance Testing     
  - Throughout the product engineering lifecycle, it’s required for performance testing based on benchmarks.
  - To identify performance bottlenecks, performance testing is carried out in a simulated production environment with realistic data loads.
  - Types of performance testing:
        - Stress testing
        - Load testing
        - Scalability testing
- Performance Improvements
  - The list of issues of identified components, subsystems, and integrations are updated until it reaches the benchmarked performance levels.

## References
[Designing for Performance](http://designingforperformance.com/performance-is-ux/)
