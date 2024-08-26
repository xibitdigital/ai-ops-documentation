"use strict";(self.webpackChunkxbt_gitlab_ai_plugin_docs_site=self.webpackChunkxbt_gitlab_ai_plugin_docs_site||[]).push([[873],{2163:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=i(4848),s=i(8453);const a={sidebar_position:2,title:"Configuration"},r=void 0,l={id:"configuration",title:"Configuration",description:"Environment Variables",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/configuration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/"},next:{title:"FAQ",permalink:"/faq"}},o={},c=[{value:"Environment Variables",id:"environment-variables",level:2},{value:"GitOps AI Integration with GitLab CI/CD Pipeline",id:"gitops-ai-integration-with-gitlab-cicd-pipeline",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Pipeline Configuration",id:"pipeline-configuration",level:3},{value:"Code Analysis",id:"code-analysis",level:4},{value:"Example of a Different Stage Job",id:"example-of-a-different-stage-job",level:3},{value:"Code Feedback",id:"code-feedback",level:3},{value:"Code Review",id:"code-review",level:3},{value:"Full GitLab Sample Template for Integration",id:"full-gitlab-sample-template-for-integration",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsx)(n.p,{children:"To configure GitOps AI, set the following environment variables in your GitLab CI/CD settings:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"API_KEY:"})," The authentication key for the API."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"API_URL (Optional):"})," Set this variable only if you are subscribed to beta features, contact support."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ACTION:"})," Specifies the operation to perform (either ",(0,t.jsx)(n.code,{children:"review"}),", ",(0,t.jsx)(n.code,{children:"analysis"})," or ",(0,t.jsx)(n.code,{children:"feedback"}),"(beta))."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"STEPS_TO_ANALYZE:"})," The name of the previous job steps in the pipeline, to define more than one define them comma separated (see template below)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CREATE_NOTE (Optional):"})," If set to ",(0,t.jsx)(n.code,{children:"true"}),", the service adds the AI-generated feedback as a note in the merge request (default is ",(0,t.jsx)(n.code,{children:"false"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"gitops-ai-integration-with-gitlab-cicd-pipeline",children:"GitOps AI Integration with GitLab CI/CD Pipeline"}),"\n",(0,t.jsx)(n.p,{children:"This guide provides detailed instructions on integrating GitOps AI into your GitLab CI/CD pipeline. By leveraging AI models, GitOps AI automates code reviews and analyses, helping to identify issues and provide suggestions for improvements. The integration is done through specific GitLab CI jobs triggered during certain pipeline events."}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"GitLab Project:"})," A GitLab project with an active CI/CD pipeline."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"API_KEY:"})," Set up this variable in your GitLab CI/CD settings for secure access to the GitOps AI service."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"pipeline-configuration",children:"Pipeline Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following jobs to your ",(0,t.jsx)(n.code,{children:".gitlab-ci.yml"})," file:"]}),"\n",(0,t.jsx)(n.p,{children:"Add stages to run AI services."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"stages:\n    - analyze\n    - feedback # beta\n    - review\n"})}),"\n",(0,t.jsx)(n.p,{children:"Include template here below and import it."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"include:\n   - .gitlab/xbt-ai.gitlab-ci.yml\n"})}),"\n",(0,t.jsx)(n.h4,{id:"code-analysis",children:"Code Analysis"}),"\n",(0,t.jsx)(n.p,{children:"This job uses GitOps AI to analyze potential issues in the deployment process. It is manually triggered for non-protected branches and both commit branches or merge requests."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"analyze_failures:\n    extends: .ai_analyze_failures\n    variables:\n        STEPS_TO_ANALYZE: dev_plan,dev_deploy\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-of-a-different-stage-job",children:"Example of a Different Stage Job"}),"\n",(0,t.jsxs)(n.p,{children:["The following example illustrates configuring a job in a different stage, such as plan. A descriptive tag in the script output, ",(0,t.jsx)(n.code,{children:"<GIT_AI_OPS>"}),", helps the analysis step by marking specific points in the pipeline output."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'# plan:\n#     stage: plan\n#     script:\n#         - echo "<GIT_AI_OPS> Starting the planning stage."\n#         - make init\n#         - # Add other commands as needed\n'})}),"\n",(0,t.jsx)(n.h3,{id:"code-feedback",children:"Code Feedback"}),"\n",(0,t.jsx)(n.p,{children:"The Code Feedback job leverages GitOps AI to provide detailed insights and suggestions regarding code quality, best practices, potential vulnerabilities, and opportunities for refactoring."}),"\n",(0,t.jsx)(n.p,{children:"When the language Focus is set, ex:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"analyze_changes:\n    extends: .ai_analyze_changes\n    variables:\n        LANGUAGE_FOCUS: Python\n"})}),"\n",(0,t.jsx)(n.p,{children:"The feedback analysis becomes more targeted and thorough. This deeper analysis allows GitOps AI to tailor its recommendations to the specific characteristics and idioms of the selected programming languages, resulting in more precise and actionable feedback. For instance, if the focus is set on Python, the AI can provide insights related to Pythonic code style, efficient use of built-in functions, and common security pitfalls in Python scripts. Similarly, focusing on JavaScript can lead to recommendations about modern JavaScript features, asynchronous programming best practices, and common client-side security concerns."}),"\n",(0,t.jsx)(n.p,{children:"This level of specificity is made possible by the job's ability to recognize and analyze files based on their extensions. Only files with extensions matching the supported languages are considered, ensuring that the feedback is relevant and useful. Supported languages for this deeper analysis include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Python"}),"\n",(0,t.jsx)(n.li,{children:"C"}),"\n",(0,t.jsx)(n.li,{children:"C++"}),"\n",(0,t.jsx)(n.li,{children:"Java"}),"\n",(0,t.jsx)(n.li,{children:"JavaScript"}),"\n",(0,t.jsx)(n.li,{children:"TypeScript"}),"\n",(0,t.jsx)(n.li,{children:"HTML"}),"\n",(0,t.jsx)(n.li,{children:"CSS"}),"\n",(0,t.jsx)(n.li,{children:"Ruby"}),"\n",(0,t.jsx)(n.li,{children:"PHP"}),"\n",(0,t.jsx)(n.li,{children:"Swift"}),"\n",(0,t.jsx)(n.li,{children:"Go"}),"\n",(0,t.jsx)(n.li,{children:"Kotlin"}),"\n",(0,t.jsx)(n.li,{children:"Rust"}),"\n",(0,t.jsx)(n.li,{children:"Terraform"}),"\n",(0,t.jsx)(n.li,{children:"Terragrunt"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These languages are carefully chosen to cover a broad range of application types and development scenarios, from web development and scripting to infrastructure as code and compiled applications."}),"\n",(0,t.jsx)(n.p,{children:"By integrating the Code Feedback job into the CI/CD pipeline, teams can continuously monitor code quality and receive proactive recommendations, helping to catch issues early in the development cycle. This continuous feedback loop not only reduces the number of bugs and vulnerabilities but also promotes a culture of clean, efficient, and maintainable code across the development team."}),"\n",(0,t.jsx)(n.h3,{id:"code-review",children:"Code Review"}),"\n",(0,t.jsx)(n.p,{children:"This job automates the code review process using GitOps AI and can add review notes to the merge request."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"review:\n    extends: .ai_merge_request_review\n    variables:\n        CREATE_NOTE: true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"full-gitlab-sample-template-for-integration",children:"Full GitLab Sample Template for Integration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# .gitlab/xbt-ai.gitlab-ci.yml\n---\n# This is a sample GitLab CI/CD configuration template for integrating with the xbt-ai-gitlab plugin.\n# It includes two jobs, 'ai_analyze_failures' and 'ai_merge_request_review', which run in the 'analyze' and 'review' stages, respectively.\n# These stages must be defined in the main .gitlab-ci.yml file under the 'stages' section to ensure they are recognized by the pipeline.\n# Customize the variables, scripts, and rules as needed to suit your project's requirements.\n#\n# stages:\n#     - analyze\n#     - feedback # beta\n#     - review\n\nvariables:\n    XBT_AI_IMAGE: xibitdigital/xbt-ai-gitlab-plugin:v.1.2.2\n\n## ========== AI Pipelines analysis ==========\n# Job for analyzing potential issues in previous pipeline steps.\n# This job runs in the 'analyze' stage and is configured to run manually on non-protected branches\n# and on both commit branches or merge requests.\n\n.ai_analyze_failures:\n    stage: analyze\n    image: ${XBT_AI_IMAGE}\n    variables:\n        ACTION: analysis\n        STEPS_TO_ANALYZE: step_1,step_2,step_3\n    script:\n        - echo \"AI > analyze possible issue on the ${STEPS_TO_ANALYZE} steps\"\n    rules:\n        - if: $CI_COMMIT_REF_PROTECTED == \"false\" && ($CI_COMMIT_BRANCH || $CI_PIPELINE_SOURCE == \"merge_request_event\")\n          when: manual\n\n# Example of a job in a different stage, such as 'plan'.\n# The 'plan' job illustrates how to configure it with a descriptive tag in your script output.\n# This tag, `<GIT_AI_OPS>`, helps the analysis step by marking specific points in the pipeline output.\n#\n# plan:\n#     stage: plan\n#     script:\n#         - echo \"<GIT_AI_OPS> Starting analysis for possible errors.\"\n#         - make init\n#         - # Add other commands as needed\n\n\n## ========== AI changes feedback (BETA)==========\n# Job for analyzing and giving feedback on current changes.\n# This jobs will give a feedback on:\n# - code quality and best practices\n# - potential vulnerabilities\n# - refactoring opportunities\n# This job runs in the 'feedback' stage and is configured to run manually on non-protected branches\n# and on both commit branches or merge requests.\n\n.ai_analyze_changes:\n    stage: analyze\n    image: ${XBT_AI_IMAGE}\n    variables:\n        ACTION: feedback\n    script:\n        - echo \"AI > analyze changes with best practices\"\n    rules:\n        - if: $CI_COMMIT_REF_PROTECTED == \"false\" && ($CI_COMMIT_BRANCH || $CI_PIPELINE_SOURCE == \"merge_request_event\")\n          when: manual\n\n\n## ========== AI MR review ==========\n# Job for performing automated code reviews during merge requests.\n# This job runs in the 'review' stage and is configured to run manually when a merge request event is detected.\n.ai_merge_request_review:\n    stage: review\n    image: ${XBT_AI_IMAGE}\n    variables:\n        ACTION: review\n        CREATE_NOTE: false\n    script:\n        - echo \"AI > running automated code review ...\"\n    rules:\n        - if: $CI_PIPELINE_SOURCE == \"merge_request_event\"\n          when: manual\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);