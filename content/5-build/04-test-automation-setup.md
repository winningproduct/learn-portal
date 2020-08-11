---
published: true
title: "Test Automation Setup"
metaTitle: "Test Automation Setup | WP"
metaDescription: "Identify the high priority areas for test automation. E.g., regression tests and repetitive tests. Make the tests run on commits and deployments."

metaTags:
  - Build
  - Technical Debt Management
  - Winning Product Canvas
  - Customer Success
checklist: 
  -
    order: 1
    question: Have you thought of having automated test cases in your project? 
    expectation: Automated test cases can help testing activity to a greater extent in terms of time saving, efficiency and reliability
    version: 1.0.0
  -
    order: 2
    question: Did you do an analysis on which test cases to be automated?
    expectation: Identifying the correct test cases to automate is crucial. As trying to automate the wrong test cases might cause negative impacts to the project.
    version: 1.0.0
  -
    order: 3
    question: How did you arrive at the tools and technology to be used in the automation?
    expectation: Identifying the best technology and tools to develop the automation framework is important in order match with the application under test and team composition.
    version: 1.0.0
---

## Why
Test automation helps teams to reduce human error during repetitive testing. In a world where continuous release and testing is increasingly becoming the norm, the test activities must be performed accurately and efficiently. Automation testing also reduces the time consumption of testing, as it’s faster than human testing, and execution can be triggered multiple times immediately and sometimes in parallel.

When automating test cases, the selection should be based on the following criteria:
- High risk and business-critical test cases.
- Repeatedly executed test cases.
- Test cases that are difficult to perform manually.
- Time-consuming test cases.


## How

The test automation process can be defined as:

1. Test tool selection
2. Define the scope of selection
3. Planning, design, and development
4. Test execution
5. Maintenance

**1. Test tool selection:** Tool selection is the most important step as some applications don’t support some tools. It’s advisable to conduct a proof of concept on the application with regards to the test automation tool.

**2. Define the scope of selection:** The scope of the application area that intends to conduct test automation should be considered based on the following:
  - Areas that have a large amount of data 
  - Common functionalities 
  - Technical feasibility 
  - The complexity of test cases 
  - Ability to use the same test cases for cross-browser testing

**3. Planning, design, and development:** Automation strategy and plan should be made as follows: 
  - Automation tools selected 
  - Framework design and its features 
  - In-Scope and out-scope items of automation 
  - Automation testbed preparation 
  - Schedule and timeline of scripting and execution 
  - Deliverables of test automation

**4. Test execution:** In this phase, test automation should be run with the test input data, and after the execution, detailed test reports should be generated. It’s best to trigger the test automation scripts upon code commits and pull requests.

**5. Maintenance:** As new functionalities are added, automation scripts need to be added, reviewed, and maintained for each release cycle.

## References

- [Automated Testing Best Practices and Tips](https://smartbear.com/learn/automated-testing/)best-practices-for-automation/
- [Benefits of automated testing](https://saucelabs.com/blog/top-10-benefits-of-automated-testing)
- [What is, Process, Benefits & Tools](https://www.guru99.com/automation-testing.html)
