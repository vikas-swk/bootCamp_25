const { getUserRepos } = require("./github");

// TODO: Enter your GitHub username
const gitHubUser = "vikas-wk";

getUserRepos(gitHubUser).then((repos) => {
  console.log(repos);
});
