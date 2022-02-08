import axios from "axios";
const BASE_URL = "http://localhost:3001";

function postFeedback(name, email, message) {
  const url = `${BASE_URL}/api/feedback`;
  return axios
    .post(url, {
      name,
      email,
      message,
    })
    .then(console.log("Feedback added successfully"))
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}

export { postFeedback };
