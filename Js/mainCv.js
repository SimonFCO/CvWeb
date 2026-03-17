async function loadCvData() {
  try {
    const response = await fetch("JsonData/WorkEducationHistory.json");
    const data = await response.json();

    const educationList = document.getElementById("educationList");
    educationList.innerHTML = "";
    if (Array.isArray(data.Education)) {
      data.Education.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = `${item.School} | ${item.Class} | ${item.Timespan}`;
        educationList.appendChild(li);
      });
    } else {
      educationList.innerHTML = "<li>Education data not found.</li>";
    }

    const workList = document.getElementById("workList");
    workList.innerHTML = "";
    if (Array.isArray(data.Work)) {
      data.Work.forEach((job) => {
        const workDiv = document.createElement("div");
        workDiv.className = "work-item";
        workDiv.innerHTML = `
          <h3>${job.Position} | ${job.Company}</h3>
          <p>${job.Description}</p>
        `;
        workList.appendChild(workDiv);
      });
    } else {
      workList.innerText = "Work data not found.";
    }
  } catch (error) {
    console.error("Error loading CV data:", error);
    document.getElementById("educationList").innerHTML =
      "<li>Could not load data.</li>";
    document.getElementById("workList").innerText = "Could not load work data.";
  }
}

loadCvData();
