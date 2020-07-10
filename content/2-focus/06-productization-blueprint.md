---
title: "Productization Blueprint"
metaTitle: "Productization Blueprint | WP"
metaDescription: "Productization Blueprint is used to implement product specific technical components such as multi-tenancy, licensing, standard APIs, plugins, etc."
published: true

metaTags:
  - Focus
  - Productization Blueprint
  - Winning Product
  - Customer Success
---

## Why

The Productization Blueprint is an essential early starter for product development. There are certain technical components that are not required/important in bespoke applications, but are crucial for products. This is because products are quite different from bespoke applications. Read [Products are Different](https://learn.winningproduct.com/introduction/02-products-are-different) topic to understand more.

## How

A few technical factors should be considered to ensure product success.

### Design for Tenancy

Multi-tenancy refers to designing product architecture where a single instance of a product serves multiple tenants (customers). Application servers, databases designed in such manner are often shared.

- **Security:** How to isolate tenant data in a secure manner?
- **Tenant Identification:** Use subdomains? Separate Domains? Single Domain?
- **User Account Management:** Can a single user account be used to sign-in to multiple tenants?

### Design for Branding

How can the product fulfil the need of different customers?

### Design for Specific Extensions

How can the product deliver the specific needs of different customer organizations?

1. Through API
2. Through Plugins

### Design for Payment Processing

How are payments processed?

1. Third-party Payment Gateway
2. PCI DSS Compliant Card Processing

### Automatic Provisioning

Products should keep the cost of a new customer onboarding as low as possible. Design the product to automatically provision a new customer and onboard them with minimal hand holding.

### Design for Trials and Demos

How does trial/demo accounts operate? How is this integrated to your sales and marketing activities and to the related systems such as your CRM.

### Design for Releases

Use Feature Toggles/Canary Releases/Dark Launching to slowly roll out the change to a small subset of users/customers for verification.

### Design for Licensing

What type of licensing model should you adopt?

1. Perpetual License
2. Subscription Based
3. Transaction Basis

### Portfolio Strategy

How to handle the modularity of your product offering?

1. Integrated Product (e.g: Trello)
2. Product Suit (e.g.: Office 365)

## References

- [Canary Releases - Martin Fowler](https://martinfowler.com/bliki/CanaryRelease.html)
