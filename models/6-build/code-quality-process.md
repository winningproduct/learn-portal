---
templateKey: "model-post"
indexingField: 7-Build
title: "4-code quality process"
subtitle: "Checklist to follow for a code which does what it should, follows a consistent style, is easy to understand, has been well-documented, can be tested."
date: 2019-07-25T15:04:10.000Z
featuredpost: true
featuredimage: "/img/code-quality-process.jpg"
description: "This is to have a code which does what it should, follows a consistent style, is easy to understand, has been well-documented, can be tested."

tags:
  - Build
  - code quality process
  - Winning Product Canvas
---

![Code-quality](/img/code-quality-process.jpg)

## Why

Make software reliable, extendable, maintainable and in good quality.
Make the code more readable and easier to comprehend for everyone working on the project. It’s much harder to read and understand a bad quality code than to write it.
It’s easier, safer and less time consuming to maintain and test quality code.
Good quality code can speed up long-term software development since it can be reused and developers don’t have to spend that much time fixing old bugs and polishing code. It also makes easier for new project members who join the project.
Reduces frustrating bugs and design problems.
Manages risk of customer dissatisfaction, data loss, security incidents, and scaling problems.

## How

- Awareness
  - Software architectural patterns and design patterns
  - Well defined coding standards in general and specific to programming languages
  - Security guidelines which should be followed
  - In-depth knowledge about the domain, system, and used programming languages
- Implement Controls
  - Come up with an approach to address the problem and plan it well before start writing codes
  - Design the approach considering software architectural patterns and design patterns
  - Write unit tests for codes you are going to write
  - Follow well defined coding standards both general and language specific
  - Document all necessary details to refer later
  - Add necessary comments on code to log why you do something which is not straight forward
  - Do proper developer testing
  - Check whether security guidelines are followed
  - Refactor the code well so that you cannot think of any other improvement
  - Get your code reviewed before it's merged to the main branch and do necessary updates
- Monitoring and Reporting
  - Performance numbers to make sure the code will behave as expected in live environment
  - Unit test and code coverage results
  - Reports for scans through analysis tools
  - Monitor once the code is in a staging environment where similar to Production
  - Continuously monitor on production environment once the code is in live
  - Log root causes for the bugs observed
- Process to Control
  - Findings from analysis tools are addressed correctly
  - Do necessary adaptations for the findings in staging environment as necessary
  - Continuous KT sessions to make sure the necessary knowledge is with everyone in the team
  - Discuss root causes and find ways to avoid them

# Refernces

- [Comprehensive Guide to Code Quality](https://codingsans.com/blog/code-quality)
- [Revelry](https://revelry.co/code-quality-process/)
- [Code Reviews and Pair Programming](https://medium.com/@andreigridnev/code-reviews-and-pair-programming-68a5ca8ba90c)
- [What Is Code Quality? And How to Improve It](https://www.perforce.com/blog/sca/what-code-quality-and-how-improve-it)
- [Code Review Checklist – To Perform Effective Code Reviews](https://www.evoketechnologies.com/blog/code-review-checklist-perform-effective-code-reviews/)
