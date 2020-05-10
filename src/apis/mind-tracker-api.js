const meditationApiUrl = "https://mind-tracker-api.herokuapp.com/meditation";


// Get all meditations for a given user
async function getAllMeditations(userName = "") {
  const url = new URL(meditationApiUrl);
  url.searchParams.append("userName", userName);
  const response = await fetch(url.toString());
  return response.json();
}



export { getAllMeditations, meditationApiUrl };
