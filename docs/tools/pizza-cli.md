---
id: pizza-cli
title: "Introduction to the Pizza CLI"
sidebar_label: "Pizza CLI"
keywords: 
- "introduction to the pizza cli" 
- "Pizza CLI Overview" 
- "Command Line Interface Introduction" 
- "CLI Basics" 
- "Pizza Command Line Tool" 
- "CLI Usage Guide" 
- "Pizza CLI Commands" 
- "Introduction to Command-Line Interfaces" 
- "Command Line Tool Features" 
- "CLI for Pizza Enthusiasts" 
- "Pizza Ordering CLI" 
- "Getting Started with Pizza CLI" 
---

## The OpenSauced Pizza CLI

The OpenSauced Pizza CLI is a command-line utility designed specifically for OpenSauced. It provides a comprehensive set of functionalities that make it easier for users to gain insights and metrics and manage various tasks related to open source projects through OpenSauced.

Beyond just code commits, the pizza CLI reports on different ways individuals contribute to the open source ecosystem through community engagement, issue reporting, blog post writings, or pull request creations.

## Key Features

- **Bake**: Seamlessly source git commits into OpenSauced with the metaphorical 'oven' of technology.
- **Insights**: Dive deep into data about git contributors, repositories, users, and pull requests.
- **Repo-query**: Get your questions about any GitHub repository answered.
- **Show**: Visualize the metrics of a repository, providing a holistic view of its health and activity.
- **Login**: Securely log into the application via GitHub, ensuring a streamlined and safe experience.

## Installation and Instructions

### 📦 Download and Install

The pizza CLI provides multiple installation methods to cater to the varied preferences of its users:

- **Homebrew**: For macOS users who prefer the Homebrew package manager.

  ```bash
  brew install open-sauced/tap/pizza
  ```

- **NPM**: For those who are fond of the Node Package Manager.

  ```bash
  npm i -g pizza
  ```

- **Direct script**: A quick way to get started by directly fetching the installation script from GitHub.

  ```bash
  curl -fsSL https://raw.githubusercontent.com/open-sauced/pizza-cli/main/install.sh
  ```

  ⚠️ **Warning**: Piping scripts directly from the web to your shell can be risky. Always ensure you trust the source. For a safer approach, download, inspect, and then execute the following commands:

  ```bash
  curl -fsSL https://raw.githubusercontent.com/open-sauced/pizza-cli/main/install.sh > install.sh
  vim install.sh
  ./install.sh
  ```

- **Manual build and install**: For those who like a hands-on approach.

  ```bash
  make install
  ```

  Ensure `/usr/local/bin/` is in your path with:

  ```bash
  export PATH="$PATH:/usr/local/bin"
  ```

  Alternatively, after building with `make build`, move the binary to your desired location:

  ```bash
  mv build/pizza <your-preferred-path>
  ```

### 🖥️ Local Development Setup

To contribute to or modify the pizza CLI, you need a specific set of tools:

- [**Go Toolchain**](https://go.dev/doc/install): The foundational tool for building and managing Go applications.
- [**Docker**](https://docs.docker.com/engine/install/): Required for linting and other auxiliary tooling.
- **Make**: A build automation tool.

  Development commands:

  - **Linting**: Ensure code quality with `make lint`.
  - **Testing**: Verify functionality with `make test`.
  - **Building**: Create the executable with `make build`.
