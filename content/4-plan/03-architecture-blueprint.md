---
title: "Architecture Blueprint"
metaTitle: "Architecture Blueprint | WP"
metaDescription: "Infrastructure as Code refers to automate the entire infrastructure of a software system using code. This includes automatic configuration of  virtual networks, VMs, load balancers and other systems used in the software. It is a primary area of DevOps that contributes to Continuous Delivery."

metaTags:
  - Plan
  - Architecture Blueprint
  - Winning Product 
---


## Why
Today enterprise applications are getting complex and use varity of resources behind the scenes e.g. Load balancers, Queues, Data Stores etc.. Manual configuration and provision of these resources are tedious and time consuming for System administrators. Infrastructure As Code enables system administrators to automate the configuration and provisioning process thereby it reduces the human errors and saves the time.

## How

You can use a suitable IaC tool/framework. There are open source and propriatory available. Following configuration orchestration and management tools can be used to implement Infrastructure as Code and help you automate your infrastructure.

- Terraform
  - Terraform is an infrastructure provisioning tool created by Hashicorp. It allows you to describe your infrastructure as code, creates “execution plans” that outline exactly what will happen when you run your code, builds a graph of your resources, and automates changes with minimal human interaction.
- AWS CloudFormation
  - Similar to Terraform, AWS CloudFormation is a configuration orchestration tool that allows you to code your infrastructure to automate your deployments.
- Azure Resource Manager and Google Cloud Deployment Manager
  - If you’re using Microsoft Azure or Google Cloud Platform, these cloud service providers offer their own IaC tools similar to AWS CloudFormation.
- Chef
  - One of the most popular configuration management tools that organizations use in their continuous integration and delivery processes.
- Puppet
  - Similar to Chef, Puppet is another popular configuration management tool that helps engineers continuously deliver software.
- Saltstack
  - Saltstack differentiates itself from tools like Chef and Puppet by taking an “infrastructure as data” approach, instead of “infrastructure as code.”
- Ansible
  - Ansible is an infrastructure automation tool created by Red Hat, the huge enterprise open source technology provider.
- Docker
  - Dockerdocker logo helps you easily create containers that package your code and dependencies together so your applications can run in any environment, from your local workstation to any cloud service provider’s servers.
- Vagrant
  - Vagrant is another IaC tool built by HashiCorp, the makers of Terraform
-

## References

- [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code)
- [IaS](https://www.plutora.com/blog/infrastructure-as-code)
- [Infrastructure as Code tools](https://www.thorntech.com/2018/04/15-infrastructure-as-code-tools/)
