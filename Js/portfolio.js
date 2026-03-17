async function loadGithubProjects() {
  const statusEl = document.getElementById("githubStatus");
  const container = document.getElementById("githubProjects");

  statusEl.innerText = "Laddar projekt från GitHub...";
  container.innerHTML = "";

  try {
    const response = await fetch(`https://api.github.com/users/SimonFCO/repos?per_page=10&sort=updated`);
    const repos = await response.json();

    statusEl.innerText = "Visar dina senaste publika GitHub-projekt:";

    repos.forEach((repo) => {
      const card = document.createElement("article");
      card.className = "portfolio-card";
      card.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description ? repo.description : "Ingen beskrivning"}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Could not load GitHub repos", error);
    statusEl.innerText =
      "Kan inte ladda GitHub-projekt just nu. Kontrollera nätverk eller försök igen senare.";
    container.innerHTML = "";
  }
}

loadGithubProjects();