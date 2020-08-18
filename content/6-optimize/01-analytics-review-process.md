---
published: true
title: "Analytics Review Process"
metaTitle: "Analytics Review Process | WP"
metaDescription: "Gathering correct and current data and processing them to identify patterns and make predictions. Use this to enable data-driven decision making."

checklist: 
  -
    order: 1
    question: Have you defined the analytics data model?
    expectation: There has to be an analytics representation of the transaction data. Something like a Kimball model/Star schema should be in place.
    version: 1.0.0
  -
    order: 2
    question: Do you have data driven standardized APIs?
    expectation: The product should have standardized data driven APIs (apart from application APIs). These APIs should have authentication and data throttling concerns sorted.
    version: 1.0.0
  -
    order: 3
    question: How do you visualize the analyzed data?
    expectation: Ideally the product should use established visualization tools such as PowerBI. It should use the above mentioned data end points to seamlessly connect to data instead of exposing the data base directly. Embedded analytics could also be used here.
    version: 1.0.0
  -
    order: 4
    question: Is analytics used for predictive modeling?
    expectation: The presence of pattern identification using existing data. These patterns needs to be converted into business meaning and should be incorporated in decision making. 
    version: 1.0.0

metaTags:
  - Optimize
  - Data analytics plan
  - Winning Product
  - User Experience
---


## Why
The collection and analysis of data can be used to make important business decisions based on product performance and users' behavior. For instance, it can be used to identify market patterns, ways to optimize (including SEO and conversions), and to analyze impacts after business decisions.

However, the most notable advantage of data analytics is the ability to do predictive modeling. Modern algorithms can predict where the market and user patterns are likely to head. This can easily make your organization more proactive in maximizing the return on investments.

## How
Consider the following when thinking of building an analytics suite:

### Start early in the life cycle
Consider the analytics aspect of data from the very beginning of the product life cycle. Data needs to be modeled very differently to your normal transaction processing application. Consider building a dimension or a Kimball model that is independent yet connected to your main relational data model.

### Data-driven API endpoints
Focus on building data-driven APIs rather than functionality driven APIs. For example, engineer your endpoints to return raw data in universally accepted formats (E.g.- OData) and use the client-side to process data. This in contrast to returning processed data makes it easier to build data analytics applications later.

### Data visualization
There are many tried and tested off the shelf applications available for data visualization and predictive modeling. If your data is universally acceptable and accessible via the above-mentioned endpoints, you'll be able to fit these applications right into your product.

### Decision making
The real success of this only comes when you include the output of data analytics (reports) in your business decisions. Do the needed alteration in your decision-making process to reflect this information.

### Continuously improve
Analytics is based on learning algorithms. The more learning your algorithms have, the better it is at predicting accurate outcomes. 

## References
[Why are Analytics Important?](https://www.webfx.com/internet-marketing/why-are-analytics-important.html)
[Dimensional Modeling Techniques](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/)
[Why Analytics is Important for Business](https://blog.stormid.com/why-analytics-is-important-for-business/)
