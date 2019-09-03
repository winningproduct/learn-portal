---
templateKey: 'model-post'
title: 'hot fix process s 13'
date: 2019-07-25T15:04:10.000Z
featuredpost: true
indexingField: 9-Stabilize
featuredimage: '/img/default-image.png'
description: 'hot fix process s 13'

tags:
  - WPO introduction
  - Value Proposition
  - Organization
  - WPO canvas
  - hot fix process s 13
  - Winning product organization
---

Can suggest a proper branching strategy.

keep a master branch pointing to production deployed version. A developer branch made out of master. All feature branches are made out of developer. When there is a hot fix (Bug in production) do a quick evaluation with two architects in the team. It can be two developers also (It is preferred if we can take in stakeholders also in to the initial discussions) , say like the original developer who implemented the pertaining feature and some random available resource who is having a fair enough knowledge on the feature broken. If it is urgent and and a quick enough fix make a branch out of master and fix it on the spot. If it is urgent and takes a considerable amount of time make it a backlog item and do a proper evaluation and estimation. so it can be put on top of the backlog. Once hot fix is deployed need to merge it back to developer and other feature branches. Obviously it should go through a code review and Test cycle before merging to master branch.

Simple bugs can be done as Bucket tasks, and more complex things can be a new story that is added to the sprint.



Since estimations can be wrong, if the bug turns out to be more complex than thought, we must go back and ask the team (and stake holders) whether it's important enough to do anyway, or whether it should be postponed.

If it's not considered simple, the team (and possibly stakeholders) decide together whether it's desired that the bug be fixed in the current sprint / release, or whether it can wait.

If it's decided that it can wait, it's made as an issue and added to the backlog. And prioritized later on.

For good communication, hotfix branches can be named in special agreed format to make it clear to identify if that is a hotfix.