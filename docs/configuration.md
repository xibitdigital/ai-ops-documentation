---
sidebar_position: 2
title: Configuration
---

## Environment Variables

To configure GitOps AI, set the following environment variables in your GitLab CI/CD settings:

- **API_KEY:** The authentication key for the API.
- **API_URL:** The URL endpoint of the API.
- **ACTION:** Specifies the operation to perform (either `review` or `analysis`).
- **CI_PIPELINE_PREVIOUS_JOB_STEP_NAME:** The name of the previous job step in the pipeline.
- **CREATE_NOTE (Optional):** If set to `true`, the service adds the AI-generated feedback as a note in the merge request.

## GitOps AI Integration with GitLab CI/CD Pipeline

This guide provides detailed instructions on integrating GitOps AI into your GitLab CI/CD pipeline. By leveraging AI models, GitOps AI automates code reviews and analyses, helping to identify issues and provide suggestions for improvements. The integration is done through specific GitLab CI jobs triggered during certain pipeline events.

### Prerequisites

- **GitLab Project:** A GitLab project with an active CI/CD pipeline.
- **API_KEY and API_URL:** Set up these variables in your GitLab CI/CD settings for secure access to the GitOps AI service.

### Pipeline Configuration

Add the following jobs to your `.gitlab-ci.yml` file:

#### Code Analysis

This job uses GitOps AI to analyze potential issues in the deployment process. It is manually triggered for non-protected branches and both commit branches or merge requests.

```yaml
## AI analysis
# Job for analyzing potential issues in previous pipeline steps.
# This job runs in the 'analyze' stage and is configured to run manually on non-protected branches 
# and on both commit branches or merge requests.
ai_analyze_failures:
    stage: analyze
    image: xibitdigital/xbt-ai-gitlab-plugin:v.1.2
    variables:
        ACTION: analysis
        CI_PIPELINE_PREVIOUS_JOB_STEP_NAME: dev_deploy
    script:
        - echo "AI > analyze possible issue on the ${CI_PIPELINE_PREVIOUS_JOB_STEP_NAME} step"
    rules:
        - if: '$CI_COMMIT_REF_PROTECTED == "false" && ($CI_COMMIT_BRANCH || $CI_PIPELINE_SOURCE == "merge_request_event")'
          when: manual
```

### Example of a Different Stage Job

The following example illustrates configuring a job in a different stage, such as plan. A descriptive tag in the script output, `<GIT_AI_OPS>`, helps the analysis step by marking specific points in the pipeline output.

```yaml
# plan:
#     stage: plan
#     script:
#         - echo "<GIT_AI_OPS> Starting the planning stage."
#         - make init
#         - # Add other commands as needed
```


### Code Review

This job automates the code review process using GitOps AI and can add review notes to the merge request.

```yaml
## AI MR review
# Job for performing automated code reviews during merge requests.
# This job runs in the 'review' stage and is configured to run manually when a merge request event is detected.
ai_merge_request_review:
    stage: review
    image: xibitdigital/xbt-ai-gitlab-plugin:v.1.2
    variables:
        ACTION: review
        CREATE_NOTE: true
    script:
        - echo "AI > running automated code review ..."
    rules:
        - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
          when: manual
```


### Environment Variable Setup

Set the following variables in your GitLab CI/CD settings under the project’s settings page:

- API_KEY: Secure key for authenticating with the GitOps AI API.
- API_URL: The endpoint URL for the GitOps AI API.
- CI_PIPELINE_PREVIOUS_JOB_STEP_NAME: The name of the previous job step, used for tracking job dependencies and contexts.


### Full GitLab Sample Template for Integration

```yaml
---
# This is a sample GitLab CI/CD configuration template for integrating with the xbt-ai-gitlab plugin.
# It includes two jobs, 'ai_analyze_failures' and 'ai_merge_request_review', which run in the 'analyze' and 'review' stages, respectively.
# These stages must be defined in the main .gitlab-ci.yml file under the 'stages' section to ensure they are recognized by the pipeline.
# Customize the variables, scripts, and rules as needed to suit your project's requirements.
#
# stages:
#     - analyze
#     - review
## AI analysis
# Job for analyzing potential issues in previous pipeline steps.
# This job runs in the 'analyze' stage and is configured to run manually on non-protected branches 
# and on both commit branches or merge requests.
ai_analyze_failures:
    stage: analyze
    image: xibitdigital/xbt-ai-gitlab-plugin:v.1.2
    variables:
        ACTION: analysis
        CI_PIPELINE_PREVIOUS_JOB_STEP_NAME: dev_deploy
    script:
        - echo "AI > analyze possible issue on the ${CI_PIPELINE_PREVIOUS_JOB_STEP_NAME} step"
    rules:
        - if: '$CI_COMMIT_REF_PROTECTED == "false" && ($CI_COMMIT_BRANCH || $CI_PIPELINE_SOURCE == "merge_request_event")'
          when: manual
# Example of a job in a different stage, such as 'plan'.
# The 'plan' job illustrates how to configure it with a descriptive tag in your script output.
# This tag, `<GIT_AI_OPS>`, helps the analysis step by marking specific points in the pipeline output.
#
# plan:
#     stage: plan
#     script:
#         - echo "<GIT_AI_OPS> Starting the planning stage."
#         - make init
#         - # Add other commands as needed
## AI MR review
# Job for performing automated code reviews during merge requests.
# This job runs in the 'review' stage and is configured to run manually when a merge request event is detected.
ai_merge_request_review:
    stage: review
    image: xibitdigital/xbt-ai-gitlab-plugin:v.1.2
    variables:
        ACTION: review
        CREATE_NOTE: true
    script:
        - echo "AI > running automated code review ..."
    rules:
        - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
          when: manual
```
