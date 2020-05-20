---
templateKey: "model-post"
indexingField: 6-Plan
title: "4-architecture blueprint in code"
subtitle: "Automate your infrastructure for fast recovery"
date: 2019-07-25T15:04:10.000Z
featuredpost: true
featuredimage: "/img/architecture-blueprint.jpg"
description: "Infrastructure as Code (IaC) is the management of infrastructure (networks, virtual machines, load balancers, and connection topology) in a descriptive model, using the same versioning as DevOps team uses for source code. Like the principle that the same source code generates the same binary, an IaC model generates the same environment every time it is applied. IaC is a key DevOps practice and is used in conjunction with continuous delivery."

tags:
  - Plan
  - Architecture Blueprint in Code
  - Winning Product Canvas
---

![Architecture blueprint in code](/img/architecture-blueprint.jpg)

##Why
Many applications today are quite complicated and require a load balancer, one or more web servers, database servers, and queue processing systems. A systems administrator spends hours provisioning and managing these interlocking systems. IaC reduces that time window to mere minutes and usually happens automatically! Engineers define the basic building blocks necessary for their application, and the IaC framework does the work to shape the environment correctly. The framework does this by provisioning virtual servers, installing software packages, creating users or starting code processes.

##How

You can use an appropriate IaC tool/framework. Following configuration orchestration and management tools can be used to implement Infrastructure as Code and help you automate your infrastructure.

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

#References

- [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code)
- [IaS](https://www.plutora.com/blog/infrastructure-as-code)
- [Infrastructure as Code tools](https://www.thorntech.com/2018/04/15-infrastructure-as-code-tools/)
