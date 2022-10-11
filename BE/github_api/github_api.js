const { Octokit } = require("@octokit/core");
const nameUser = "hyungyoo";
const repo = "JS_piscine";
const octokit = new Octokit({
  auth: "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",
});

const createIssue = async (title, body, labels) => {
  await octokit.request(`POST /repos/${nameUser}/${repo}/issues`, {
    owner: nameUser,
    repo: repo,
    title: title,
    body: body,
    labels: labels,
  });
};

createIssue("Test Api with Github", " api 테스트 ", ["bug"]);
