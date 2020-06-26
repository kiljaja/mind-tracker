const meditationApiUrl = "https://mind-tracker-api.herokuapp.com/meditation";
// =============== Testing Data ==================================
async function getFakeMeditations(userName= ""){
  
} 




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


// Delete a habit
async function deleteMeditation(userName = "", id = -1) {
  const url = new URL(meditationApiUrl);
  const data = { userName, id };
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(url.toString(), options);
}

// Update a habit
async function updateMeditation(userName = "", id = -1, date = "") {
  const url = new URL(meditationApiUrl);
  const data = { userName, id, date };
  console.log(data);
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(url.toString(), options);
}




export { getAllMeditations, meditationApiUrl, addMeditation, deleteMeditation, updateMeditation };
