---
templateKey: 'model-post'
title: '4-code quality process'
date: 2019-07-25T15:04:10.000Z
featuredpost: true
indexingField: 5-Build
featuredimage: '/img/code-quality-process-img-1.jpeg'
description: 'code quality process'

tags:
  - WPO introduction
  - code quality process
  - Organization
  - WPO canvas
  - Winning product organization
  - Winning products
  - types of software
---

##1. Why?


Make software reliable, extendable, maintainable and in good quality.

Make the code more readable and easier to comprehend for everyone working on the project. It’s much harder to read and understand a bad quality code than to write it.
It’s easier, safer and less time consuming to maintain and test quality code.
Good quality code can speed up long-term software development since it can be reused and developers don’t have to spend that much time fixing old bugs and polishing code. It also makeseasier for new project members who join the project.
Reduces frustrating bugs and design problems.

Manages risk of customer dissatisfaction, data loss, security incidents, and scaling problems.



##2. Inputs?


In-depth knowledge about the domain, system, and used programming languages

Well defined coding standards in general and specific to programming languages

Necessary tools such as code review tools, code analysis tools

Soft skills like problem solving skills, analytical skills



##3. Outputs


Code which

Does what it should.
Follows a consistent style.
Is easy to understand.
Has been well-documented.
Can be tested. 


##4. How?


#1) Clear understanding about what to do



Before starting writing single code line, have clear picture on what is to be implemented

Always refer documentation on what's already implemented and document any new things, so that it would be helpful for others and also for the same person in future.



#2) Pair Programming



Pair programming would help when the brain power of two developers is needed to solve a problem or some technical skills have to be transferred.



The research is in – pair programming is awesome. At the cost of about a 15% increase in development time, pairing produces code with fewer errors, and even makes us happier at work.



This would enhance the quality of code by improving the ability to explain the solution to someone else.

Using visual diagrams to have very clear picture before starting actual implementation.
Make sure code you are writing is understood by others.
Have opportunity to see out of the box with the help of another person.


#3) Automated Tests



What automated tests to do with code quality? You do a fix for an issue, and how to make sure it doesn't create new problems. 

Unit tests / code coverage is also part of this.



#4) Static Analysis



Use tools to analyse the codes instead of doing all reviews manually

Saves time
Less probability to miss certain common problems
Eg: FxCop, JSLint, StyleCop etc.


#5) Code Reviews



Addition or change made to the software should be reviewed by at least one additional developer. You might need to add more reviewers when the code is complex. Think of it as proofreading for code.



Code review would ensure that the code produced by developers “looks good”, is correct, and can be understood by each team member.



The code reviewer finds problems that the first developer missed. They can also find issues that static analysis can’t find– like errors in business logic or design problems. 



Research has shown that code reviews can reduce errors by 20%.



Important: Doing a self review is a must before assigning to someone else. This would help to

Remove any temporary codes (debug statements, dead codes, TODO comments)
Identify side effects of codes written and take necessary actions
Make sure about the correctness - Double check logic for any possibility of not behaving as expected
Look for better ways to do the same
Maintain quality of code by verifying whether the code is easy to read and understand, double check naming conventions, organize things as cleanly as possible, add comments to help others who will go through the code in future


While reviewing the code, ask yourself the following basic questions:

Am I able to understand the code easily?
Is the code written following the coding standards/guidelines?
Is the same code duplicated more than twice?
Can I unit test / debug the code easily to find the root cause?
Is this function or class too big? If yes, is the function or class having too many responsibilities?
Does this break security or lag performance?

![flavor wheel](/img/code-quality-process-img-1.jpeg)


Ref: https://www.evoketechnologies.com/blog/code-review-checklist-perform-effective-code-reviews/



#6) Developer Testing and QA Testing



Proper testing should cover all possible scenarios so that the code is also tested indirectly simultaneously.



Developer testing includes verifying security and monitor performance as well. Tools like LoadUI and SQL Profiler are some of the tools which can be used for this.



#7) Continuous Monitoring



Monitor in production or similar staging environment for errors and performance problems.



It also gives us valuable insight into what we need to refine as we keep developing the software.



It's very important to happen this continuously.

Best code at a certain time might have certain issues at another time, and could not be the best anymore.


#5. Check List


Come up with an approach to address the problem and plan it well before start writing codes

Design the approach considering software architectural patterns and design patterns

Write unit tests for the codes you are going to write

Follow well defined coding standards both general and language specific

Document all necessary details to refer later

Add necessary comments on code to log why you do something which is not straight forward

Do proper developer testing

Check whether security guidelines are followed

Check performance numbers to make sure the code will behave as expected in live environment

Refactor the code well so that you cannot think of any other improvement

Make sure all unit tests are passed and code coverage is as expected

Make sure code is scanned through analysis tools and the findings are addressed correctly

Get your code reviewed before it's merged to the main branch and do necessary updates

Monitor once the code is in a staging environment where similar to Production and do necessary adaptations as necessary

Continuously monitor on production environment once the code is in live



References:

[1](https://codingsans.com/blog/code-quality)

[2](https://revelry.co/code-quality-process/)

[3](https://medium.com/@andreigridnev/code-reviews-and-pair-programming-68a5ca8ba90c)

[4](https://www.perforce.com/blog/sca/what-code-quality-and-how-improve-it)

[5](https://www.evoketechnologies.com/blog/code-review-checklist-perform-effective-code-reviews/)