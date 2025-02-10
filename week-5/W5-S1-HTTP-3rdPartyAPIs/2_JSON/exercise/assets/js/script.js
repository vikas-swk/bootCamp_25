document.getElementById("fetchRepos").addEventListener("click", onfetchRepos);

function onfetchRepos() {
  const username = document.getElementById("username").value;

  if (username) {
    // GitHub API endpoint for fetching user repositories
    const url = `https://api.github.com/users/${username}/repos`;

    // Make a GET request to the GitHub API
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("GitHub user not found");
        }
        return response.json();
      })
      .then((data) => {
        renderRepos(data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        alert("Error: " + error.message);
      });
  } else {
    console.log("Please enter a GitHub username.");
    alert("Please enter a GitHub username.");
  }
}

const renderRepos = (repos) => {
  const repoList = document.getElementById("repoList");
  if (!repoList) {
    console.error("Element with ID 'repoList' not found.");
    return;
  }
  repoList.innerHTML = ""; // Clear previous results

  repos.forEach((repo) => {
    console.log(`Full Name: ${repo.full_name}`);
    console.log(`Private: ${repo.private ? "Yes" : "No"}`);
    console.log(`Owner Login: ${repo.owner.login}`);
    console.log(`Avatar URL: ${repo.owner.avatar_url}`);

    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>Repository Name:</strong> ${repo.name} <br>
      <strong>Full Name:</strong> ${repo.full_name} <br>
      <strong>Private:</strong> ${repo.private ? "Yes" : "No"} <br>
      <strong>Owner:</strong> ${repo.owner.login} <br>
      <strong>Avatar URL:</strong> <img src="${repo.owner.avatar_url}" width="50" height="50"> <br>
    `;
    repoList.appendChild(listItem);
  });
};