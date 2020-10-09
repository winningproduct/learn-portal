---
title: "Errors and Exception Handling"
metaTitle: "Errors and exception handling | WP"
metaDescription: "Proactive monitoring and log analysis of potential and occurred errors to provide a graceful recovery and diagnostic capability for support teams."
published: true
metaTags:
  - Plan
  - Errors and Exception Handling
  - Winning Product
  - Technology Mastery
checklist: 
  -
    order: 1
    question: Does the team members get automatically notified of the production errors?
    expectation: Notifications has all information required to trace and help the effected user.
    version: 1.0.0
  -
    order: 2
    question: Is your error response process defined explicitly?
    expectation: All relevant team members are trained on the process and follows it consistent?
    version: 1.0.0
  -
    order: 3
    question: Do you have a production error dashboard/report frequently accessible to all stakeholders?
    expectation: Establish real-time information to the team and summary information to other stakeholders?
    version: 1.0.0
  -
    order: 4
    question: Do you followup with users when they encounter an error?
    expectation: All such followups are recorded for analysis purposes.
    version: 1.0.0
  -
    order: 5
    question: Do you perform periodical analysis of error logs?
    expectation: Summary information is shared with stakeholders in a manner the error response process improvements are visible.
    version: 1.0.0
---


## Why

Regardless how well you test a product, you must anticipate and prepare for unhandled errors in production. Such errors could be due to unplanned user behavior, missed test scenarios or data incompatibility. Good products recover from errors and keep the team informed with all necessary information to trace the error and help the users to complete the disturbed functionality.

There are 3 levels of problems your product should handle:

1. **Validation failures:** Issues that can be avoided through validations and checks, such that errors wont be resulted (e.g. user inputs).
2. **Handled Exceptions:** Issues that are tackled through coded exception handling routes for gracefully recover (e.g. Third-party service not available).
3. **Unhandled Errors:** Issues that are not anticipated and doesn’t get handled in exception handling routes. (e.g. An unplanned special character in data causing a data exchange protocol failure).

Your product require capability to detect the type-3 issue of Unhandled Errors occurring. Never rely on already frustrated users to take screenshots or send you error codes. Error handling must be automated and your team should proactively respond to users.

## How

- Build a high-importance work attitude towards production errors. It should be mandated that every error is brought to the limelight and immediately dealt with.
- Follow a standard process on how errors are captured, communicated, and fixed. Document this process and keep all stakeholders informed so that the customer experience is uniform.
- Make use of automation tools to capture, monitor, and report production errors. Increase the error visibility within the organization (through dashboards, etc.) to ensure they don’t go unnoticed.
- Enable your application to log diagnostic information on product health to an easily accessible location. Make sure that the logs are fresh and relevant. Proactively analyze this information to find any anomalies.
- Set up your tools in a way that it not only captures stack trace, but contextual information such as release version, account id, data status, etc. to make identification of the cause of error easier.
- Proactively respond to users when they have faced an error. Assist users to recover any potential loses they have incurred through your customer support organization.
- Audit the information exposed on an error condition. Hackers may use information exposed to get internal details.

### References/further readings

- Error monitoring tools:
  - [Sentry](https://sentry.io/)
  -[AirBrake](https://airbrake.io/)
  - [BugsNag](https://www.bugsnag.com/)
  - [Rollbar](https://rollbar.com/)
  - [TrackJS](https://trackjs.com/)
  - [RAYGUN](https://raygun.com/)
  - [Azure App Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)

- [How to handle exceptions](https://raygun.com/blog/errors-and-exceptions/)
