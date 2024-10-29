---
id: key-metrics-guide
title: "Key Metrics Guide"
sidebar_label: "Key Metrics Guide"
keywords:
  - "metrics"
  - "openSauced"
  - "OpenSauced metrics guide"
  - "Key metrics guide"
  - "Open Source metric guide"
---

Welcome to the Key Metrics Guide, where we define the main metrics used on our platform to help you better understand them.

## OSCR

[OSCR](../glossary/#oscr) stands for Open Source Contributor Rating. It's a way to measure and rate the impact of your open-source contributions over 90 days.

This helps you understand the quality and frequency of your contributions. It's a good way to measure your open source activities and takes into account many factors.

You can read more about [what it is and how to improve it](../../opensauced-guides/oscr-score-guide/oscr-guide/).

## Contributor Confidence

[Contributor Confidence](../glossary/#contributor-confidence) is a metric that measures how likely contributors who have interacted with a repository via stars or forks are to contribute in some way. It's measured as a percentage calculated over a specified time range.

This helps you evaluate whether a repository you are interested in provides a good environment for new contributors. A positive score implies that the project is welcoming to new contributors or that those who interact with the project are willing to support the project through contributions.

You can read more about [what it is and how it can be interpreted](../../features/repo-pages/#insights-into-contributor-confidence).

## OpenSSF Score

[The OpenSSF Score](../glossary/#ossf-scorecard) is a metric that measures how secure an open-source project is based on how compliant the repository is to OpenSSF’s standards. It's scored out of 10 and uses [OpenSSF’s CLI tool](https://scorecard.dev/#what-is-openssf-scorecard) under the hood to help calculate this score.

[OpenSSF](https://openssf.org) refers to the Open Source Security Foundation, a group of security-focused tech professionals who are trying to enable the open-source ecosystem to create safe, open software in compliance with the [EU’s Cyber Resilience Act](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act).

This helps you evaluate how secure a repository is and how attentive maintainers are to compliance issues. It's also a good metric to evaluate whether or not a repo is secure. Users can see the security scores of all their dependencies.

You can read more about [what it is and why it is important](https://opensauced.pizza/blog/introducing-openssf-scorecard-for-opensauced).

## Lottery Factor

[Lottery Factor](../glossary/#lottery-factor) is a metric that measures the risk that comes with a project’s dependence on one or a few key contributors. It measures how many pull requests are made by the most active contributors as a percentage.

This helps you understand whether or not a repository is at risk of abandonment should a key contributor become unavailable. This information is particularly important if you plan on being a long-term contributor or if your project relies on an open-source project for the long term.

You can read more about [what it is and how it can be interpreted](https://opensauced.pizza/blog/Understanding-the-Lottery-Factor).

## Repositories as a Dataset

[Repositories as a Dataset](../glossary/#repository-insights) refers to viewing repositories as complete and in-depth information sources. It suggests holistically treating repositories by considering GitHub discussions, issues, and general activity and considering the history of entire repositories.

In the context of AI and its role in aiding developers, treating Repositories as a dataset helps train more context-aware AI models and makes this information more accessible.

This is helpful, as having more context around a repository you want to contribute to can make the process of contributing and onboarding much smoother.

You can read more about [the case for treating repositories as datasets and why that is important](https://opensauced.pizza/blog/github-repos-as-datasets).

## YOLO Coders

[YOLO Coders](../glossary/#yolo-coders) refers to repository owners, contributors or maintainers who push code changes directly to a project's default branch without going through a pull request (PR).

Proposing changes through PRs helps increase visibility and offers an opportunity for code reviews and discussions. This increases collaboration and makes potential contributors more likely to engage.

Using PRs and established means of making code changes reduces the chances of project bugs and preserves project history.

You can read more about [what it is and why it is not the best practice](https://opensauced.pizza/blog/yolo-coder).
