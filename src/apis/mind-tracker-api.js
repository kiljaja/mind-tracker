const meditationApiUrl = "https://mind-tracker-api.herokuapp.com/meditation";

// Get all meditations for a given user
async function getAllMeditations(userName = "") {
  const url = new URL(meditationApiUrl);
  url.searchParams.append("userName", userName);
  const response = await fetch(url.toString());
  return response.json();
}

// Post a habit
async function addMeditation(userName = "", date = null) {
  const url = new URL(meditationApiUrl);
  const data = { userName, date };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(url.toString(), options);
}

export { getAllMeditations, meditationApiUrl, addMeditation };
