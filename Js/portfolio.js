async function loadGithubProjects() {
  const statusEl = document.getElementById("githubStatus");
  const container = document.getElementById("githubProjects");

  if (!statusEl || !container) return;

  statusEl.innerText = "Laddar projekt från GitHub...";
  container.innerHTML = "";

  try {
    const username = "SimonFCO";
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=updated`);
    if (!response.ok) {
      throw new Error(`GitHub load failed ${response.status}`);
    }
    const repos = await response.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      statusEl.innerText = "Inga publika projekt hittades just nu.";
      return;
    }

    statusEl.innerText = "Visar dina senaste publika GitHub-projekt:";

    repos.forEach((repo) => {
      const card = document.createElement("article");
      card.className = "portfolio-card";
      card.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></h3>
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