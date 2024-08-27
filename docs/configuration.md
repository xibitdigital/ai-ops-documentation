---
sidebar_position: 2
title: Configuration
---

## Environment Variables

To configure GitOps AI, set the following environment variables in your GitLab CI/CD settings:

- **API_KEY:** The authentication key for the API.
- **API_URL (Optional):** Set this variable only if you are subscribed to beta features, contact support.
- **ACTION:** Specifies the operation to perform (either `review`, `analysis` or `feedback`(beta)).
- **STEPS_TO_ANALYZE:** The name of the previous job steps in the pipeline, to define more than one define them comma separated (see template below).
- **CREATE_NOTE (Optional):** If set to `true`, the service adds the AI-generated feedback as a note in the merge request (default is `false`).

## GitOps AI Integration with GitLab CI/CD Pipeline

This guide provides detailed instructions on integrating GitOps AI into your GitLab CI/CD pipeline. By leveraging AI models, GitOps AI automates code reviews and analyses, helping to identify issues and provide suggestions for improvements. The integration is done through specific GitLab CI jobs triggered during certain pipeline events.

### Prerequisites

- **GitLab Project:** A GitLab project with an active CI/CD pipeline.
- **API_KEY:** Set up this variable in your GitLab CI/CD settings for secure access to the GitOps AI service.

### Pipeline Configuration

Add the following jobs to your `.gitlab-ci.yml` file:

Add stages to run AI services.

```yaml
stages:
    - analyze
    - feedback
    - review
```

Include template here below and import it.

```yaml
include:
   - .gitlab/xbt-ai.gitlab-ci.yml
```

### Code Analysis

This job uses GitOps AI to analyze potential issues in the deployment process. It is manually triggered for non-protected branches and both commit branches or merge requests.

```yaml
analyze_failures:
    extends: .ai_analyze_failures
    variables:
        STEPS_TO_ANALYZE: dev_plan,dev_deploy
```

The following example illustrates configuring a the code error analysis pipeline for the `dev_plan` step.
A descriptive tag in the script output, `echo <GIT_AI_OPS>`,  must be added before running the scripts you require.

```yaml
....

dev_plan:
    stage: plan
    script:
        - echo "<GIT_AI_OPS> Starting the planning stage." # NOTE Add this before any other commands
        - # Add other commands as needed
        - .....

```

### Code Feedback

The Code Feedback job leverages GitOps AI to provide detailed insights and suggestions regarding code quality, best practices, potential vulnerabilities, and opportunities for refactoring.

When the language Focus is set, ex:

```yaml
analyze_changes:
    extends: .ai_analyze_changes
    variables:
        LANGUAGE_FOCUS: Python
```

The feedback analysis becomes more targeted and thorough. This deeper analysis allows GitOps AI to tailor its recommendations to the specific characteristics and idioms of the selected programming languages, resulting in more precise and actionable feedback. For instance, if the focus is set on Python, the AI can provide insights related to Pythonic code style, efficient use of built-in functions, and common security pitfalls in Python scripts. Similarly, focusing on JavaScript can lead to recommendations about modern JavaScript features, asynchronous programming best practices, and common client-side security concerns.

This level of specificity is made possible by the job's ability to recognize and analyze files based on their extensions. Only files with extensions matching the supported languages are considered, ensuring that the feedback is relevant and useful. Supported languages for this deeper analysis include:

- Python
- C
- C++
- Java
- JavaScript
- TypeScript
- HTML
- CSS
- Ruby
- PHP
- Swift
- Go
- Kotlin
- Rust
- Terraform
- Terragrunt

These languages are carefully chosen to cover a broad range of application types and development scenarios, from web development and scripting to infrastructure as code and compiled applications.

By integrating the Code Feedback job into the CI/CD pipeline, teams can continuously monitor code quality and receive proactive recommendations, helping to catch issues early in the development cycle. This continuous feedback loop not only reduces the number of bugs and vulnerabilities but also promotes a culture of clean, efficient, and maintainable code across the development team.

### Code Review

This job automates the code review process using GitOps AI and can add review notes to the merge request.

```yaml
review:
    extends: .ai_merge_request_review
    variables:
        CREATE_NOTE: true
```

### XBT-AI Gitlab Template

This isa configuration template that you can paste an utilize in your pipeline to enable the AI service

```yaml
# .gitlab/xbt-ai.gitlab-ci.yml
---
# This is a sample GitLab CI/CD configuration template for integrating with the xbt-ai-gitlab plugin.
# It includes two jobs, 'ai_analyze_failures' and 'ai_merge_request_review', which run in the 'analyze' and 'review' stages, respectively.
# These stages must be defined in the main .gitlab-ci.yml file under the 'stages' section to ensure they are recognized by the pipeline.
# Customize the variables, scripts, and rules as needed to suit your project's requirements.
#
# stages:
#     - analyze
#     - feedback # beta
#     - review

variables:
    XBT_AI_IMAGE: xibitdigital/xbt-ai-gitlab-plugin:v.1.2.2

## ========== AI Pipelines analysis ==========
# Job for analyzing potential issues in previous pipeline steps.
# This job runs in the 'analyze' stage and is configured to run manually on non-protected branches
# and on both commit branches or merge requests.

.ai_analyze_failures:
    stage: analyze
    image: ${XBT_AI_IMAGE}
    variables:
        ACTION: analysis
        STEPS_TO_ANALYZE: step_1,step_2,step_3
    script:
        - echo "AI > analyze possible issue on the ${STEPS_TO_ANALYZE} steps"
    rules:
        - if: $CI_COMMIT_REF_PROTECTED == "false" && ($CI_COMMIT_BRANCH || $CI_PIPELINE_SOURCE == "merge_request_event")
          when: manual

# Example of a job in a different stage, such as 'plan'.
# The 'plan' job illustrates how to configure it with a descriptive tag in your script output.
# This tag, `<GIT_AI_OPS>`, helps the analysis step by marking specific points in the pipeline output.
#
# plan:
#     stage: plan
#     script:
#         - echo "<GIT_AI_OPS> Starting analysis for possible errors."
#         - make init
#         - # Add other commands as needed


## ========== AI changes feedback (BETA)==========
# Job for analyzing and giving feedback on current changes.
# This jobs will give a feedback on:
# - code quality and best practices
# - potential vulnerabilities
# - refactoring opportunities
# This job runs in the 'feedback' stage and is configured to run manually on non-protected branches
# and on both commit branches or merge requests.

.ai_analyze_changes:
    stage: analyze
    image: ${XBT_AI_IMAGE}
    variables:
        ACTION: feedback
    script:
        - echo "AI > analyze changes with best practices"
    rules:
        - if: $CI_COMMIT_REF_PROTECTED == "false" && ($CI_COMMIT_BRANCH || $CI_PIPELINE_SOURCE == "merge_request_event")
          when: manual


## ========== AI MR review ==========
# Job for performing automated code reviews during merge requests.
# This job runs in the 'review' stage and is configured to run manually when a merge request event is detected.
.ai_merge_request_review:
    stage: review
    image: ${XBT_AI_IMAGE}
    variables:
        ACTION: review
        CREATE_NOTE: false
    script:
        - echo "AI > running automated code review ..."
    rules:
        - if: $CI_PIPELINE_SOURCE == "merge_request_event"
          when: manual

```
