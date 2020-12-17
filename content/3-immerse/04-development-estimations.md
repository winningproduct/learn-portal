---
title: "Engineering Estimations"
metaTitle: "Engineering Estimations | WP"
metaDescription: "Estimating the development efforts for functional and non-functional features."
published: true
documentation: "CostBook"
metaTags:
  - Immerse
  - Engineering Estimations
  - Winning Product 
  - Technology Mastery
checklist: 
  -
    order: 1
    question: How do you estimate functional and non-functional features in your project?
    expectation: An explanation of the estimation process used in the project. 
    version: 1.0.0
  -
    order: 2
    question: What is the Task/Method Estimation aka Bottom-up Estimation?
    expectation: An explanation of the popular Task/Method estimation and its key pointers 
    version: 1.0.0
  -
    order: 3
    question: Where would you use the Heuristic Method of estimation?
    expectation: If there are analogus estimations that had been done for similar features in the same or other projects. 
    version: 1.0.0
---


## Why
An estimate is a best faith prediction of the effort that is expended to perform a task. It has tolerance, distribution, and may depend on other factors beyond the estimator’s control. An estimate is the opinion of a professional.
Engineering estimations convey to the product managers the cost and effort required for various engineering activities. It helps them to make informed decisions to control the project more efficiently and effectively.


## How
There are several methods to perform engineering estimations. They each has their advantages and disadvantages. The most popular engineering estimation method is the Task/Method Estimation, also known as "Bottom up Estimation".

- **Task/Method Estimation:** We break large tasks or stories in to discrete, easy to understand, incremental tasks. These tasks can easily be assigned among project team members. Each task comprises of task specification, Condition Of Satisfaction (COS), estimated time of completion, test functionaries, etc.. Eventually, the more granular estimations are added up to understand the full picture.
When deriving estimations of testing requirements, it is highly recommended that the following factors be taken into account:
  - Risks and Complexity of the application : It is important that the size of the system is taken into account when estimating the test effort.
  - Types of testing required : Effort estimates should be derived for each type of testing that would be identified as part of the Quality Assurance Strategy. eg. for load testing , installation testing, Accessibility testing etc
  - Manual or Automated testing : Effort required to create test cases and maintain them or effort required to set up automation should be taken into account. 
  - Test Data : If the test data is not available, you should estimate the effort it would take to create and maintain test data.
  - Test Cycles :This should include number of test cycles required prior to promoting the system to production.  A test cycle could typically include smoke tests along with a complete system test   
  - Supporting Activities –Take into account retesting, Regression testing and bug reporting
  - Integrated systems and integration points
  - Internal and External dependencies 
  - Environment Setup - Setting up of development , test , staging environments.
  - Early test phases - unit testing , Integration testing 
  - The need to ramp up, train, and orient team members
  - Prototype Validation (if applicable)

- **Heuristic Method/Comparison to Actual:** This is also called analogous estimation. You use the knowledge of the company to find similar tasks to the one you are anticipating.

## References
- [What is the Difference Between an Estimate and a Bid?](https://sites.google.com/site/mullsengineeringmanagement/articles/three-methods-of-engineering-estimation/estimate-vs-bid)
- [Estimating Engineering Effort ](https://sites.google.com/site/mullsengineeringmanagement/articles/three-methods-of-engineering-estimation)
