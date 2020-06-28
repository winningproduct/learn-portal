---
title: "Productization Blueprint"
metaTitle: "Productization Blueprint | WP"
metaDescription: "Productization Blueprint is for implementing product-specific technical components such as multi-tenancy, licensing, standard APIs, plugins, etc."
published: true

metaTags:
  - Focus
  - Productization Blueprint
  - Winning Product
---

## Why

The Productization Blueprint is an essential early starter for product development. There are specific technical components that are not required/important in bespoke applications but are crucial for products. This is because products are quite different from bespoke applications. Read [Products are Different](https://learn.winningproduct.com/introduction/02-products-are-different) topic to understand more.

## How

There are a few technical factors that must be designed to ensure the success of the product.

### Design for Tenancy

Multi-tenancy refers to designing product architecture where a single instance of product serving multiple tenants (customers). Application servers, databases designed in such manner are often shared.

- Security: How to isolate tenant data in a secure manner?
- Tenant identification: Use subdomains? Separate domains? Single domain?
- User account management: Can a single user account be used to sign-in to multiple tenants?

### Design for Branding

How can the product fulfill the need of different customers to have their own branding of the product?

### Design for Specific Extensions

How can the product deliver the specific needs of different customer organizations?

1. Through API
2. Through Plugins

### Design for Payment processing

How are payments processed?

1. Third-party payment Gateway
2. PCI DSS Compliant Card Processing

### Automatic provisioning

Products should keep the cost of a new customer onboarding as low as possible. Design the product to provision new customer tenants automatically and onboard them with a minimal hand-holding.

### Design for Trials and Demos

How does the trial/demo accounts operate? How is this integrated into your sales and marketing activities and to the related systems such as your CRM.

### Design for Releases

Use Feature Toggles/Canary releases/Dark Launching to slowly rolling out the change to a small subset of users/customers for verification.

### Design for Licensing

What type of licensing model to adapt?

1. Perpetual license
2. Subscription-based
3. Transaction basis

### Portfolio Strategy

How to handle the modularity of your product offering?

1. Integrated Product (e.g: Trello)
2. Product Suit (e.g.: Office 365)

## References

- [Canary Releases - Martin Fowler](https://martinfowler.com/bliki/CanaryRelease.html)
