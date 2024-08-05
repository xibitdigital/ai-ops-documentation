---
sidebar_position: 3
title: FAQ
---

### Frequently Asked Questions (FAQs)

**Q: How does GitOps AI handle sensitive information?**

**A:** GitOps AI prioritizes the privacy and security of your code. To ensure that sensitive information remains protected, GitOps AI operates on a real-time analysis model. This means that none of your code is stored on our servers. When you integrate GitOps AI with your GitLab CI/CD pipeline, the service temporarily accesses the relevant code changes or pipeline logs required for analysis. The AI models process this data on-the-fly, generate the necessary insights, and immediately discard the data post-analysis. Only the analysis results, such as recommendations or detected issues, are returned to you. This design minimizes the risk of data exposure and ensures that your proprietary code remains secure and confidential.

**Q: Can I use GitOps AI with other Git providers?**

**A:** Currently, GitOps AI is optimized specifically for GitLab, leveraging GitLab’s API and CI/CD features to provide seamless integration and functionality. However, we understand the diverse needs of development teams and are actively working towards expanding our support to include other popular Git providers, such as GitHub, Bitbucket, and Azure DevOps. This future support will allow a broader range of users to benefit from GitOps AI's capabilities, irrespective of their chosen development environment.

**Q: How accurate is the AI feedback?**

**A:** GitOps AI employs advanced AI models, including GPT, Anthropic, and Llama, which are known for their high accuracy in generating insights and feedback. These models are trained on vast datasets and are capable of understanding complex code structures, identifying potential issues, and providing meaningful recommendations. However, while the feedback provided by GitOps AI is highly accurate, it is essential to consider it as advisory rather than prescriptive. AI-generated feedback, like any tool-based analysis, may not fully capture the unique context or nuanced requirements of your project. Therefore, we strongly recommend that all AI-generated suggestions be reviewed by a human developer before implementation. This review process ensures that the feedback aligns with your project's specific goals, coding standards, and best practices.
