---
title: "Quality Assurance Strategy"
metaTitle: "Quality Assurance Strategy | WP"
metaDescription: "Defining quality objectives, test approaches, techniques & scope of a software project"
published: true
metaTags:
  - Plan
  - Quality Assurance Strategy
  - Winning Product
  - Technology Mastery
checklist: 
  -
    order: 1
    question: Have you identified all the activities that would need to be performed to ensure quality starting from requirement analysis to deployment?
    expectation: Identifying all the activities required to ensure quality would help in building an effective Quality Assurance Strategy
    version: 1.0.0
  -
    order: 2
    question: Have you defined a process to capture root causes of defects?
    expectation: Root causes of defects should be identified and used as an input to identify areas of improvement
    version: 1.0.0
  -
    order: 3
    question: Have you captured potential risks that may affect the successful execution of the QA strategy?
    expectation: Risks along with their impact and mitigation strategy should be identified
    version: 1.0.0  
---

## Why
The Quality Assurance Strategy is a living document that ensures customer satisfaction by defining how Quality Assurance would be done in the project. It should be continuously reviewed and updated with process enhancements.


## How
When formulating this strategy, you would be covering aspects starting from requirement analysis to deployment. The chosen strategy should be able to maximize the impact of testing within the allocated budget of time and cost in addition to contributing to meet stakeholder objectives. 
The strategy should be used to outline processes applicable across sprints/releases and should cover the following aspects:
  - **Inclusions:** This would highlight the scope of testing in the project. If Performance testing / Security testing is in the scope of testing, references to the performance/security test strategies respectively could be added to the QA strategy
  - **Exclusions:** Any testing that would be out of scope should be captured mentioning the relevant reason
  - **Code Quality:** Identify the steps that would be taken to ensure code quality. This could include measures such as Development done against defined coding standards, Developer testing, Code reviews done against a defined code review checklist, use of static analysis tools etc
  - **Test Design:** Capture details regarding test case creation in the project. E.g. where test cases would be maintained, the process in place to ensure regression test suites are frequently updated etc.
  - **Test Organization:** Identify all the activities that would typically be executed in a test cycle / sprint / release.  e.g. Test environment setup, Test data setup, Test case design, Types of testing that would be performed, monitoring and collating results, Continuous improvement activities such as Root cause analysis meetings etc.
  - **Test Reporting:** Identify the reports along with their intended audience and frequency that would be generated for the tests in scope of the project. Any reports generated from specific tools could also be taken into consideration
  - **Defect Management:** 
    - Identify the tool that would be used for the detection, management and resolution of defects. 
    - Visually represent the process that would be followed for defect management.in the project.
    - Define the defect report template that should be followed by the team. 
    - Define a process to capture root causes of defects that could be used as an input to identify areas of improvement
  - **Quality Metrics:** Identify the metrics that would be used to measure quality, track progress etc.
  - **Environments:** Identify all the environments that would be required for the successful execution of tests in scope
  - **Compliance with legal Requirements:** Identify any testing that would need to be done in order to comply with special legal requirements. e.g. GDPR
  - **Risks, dependencies, assumptions and constraints:**
    - Identify any risks that may affect the successful execution of the QA Strategy. Additionally, the potential effect the risk has on project success, the risk mitigation strategy and the impact of the risk should be identified.
    - Identify any dependencies that may affect the successful execution of the QA strategy if those dependencies are not honored. Typically, these dependencies relate to activities on the critical path that are prerequisites or post-requisites to one or more preceding (or subsequent) activities. You should consider responsibilities you are relying on other teams or staff members, timing and dependencies of other planned tasks, the reliance on certain work products being produced.
    - Identify any assumptions that may affect the successful execution of the QA strategy if those assumptions are proven incorrect. Assumptions might relate to work you assume other teams are doing, expectations that certain aspects of the product or environment are stable etc.

## References
- [Sample Strategy ](https://www.fsa.usda.gov/Internet/FSA_File/sdlc_template_test_strategy.doc)
