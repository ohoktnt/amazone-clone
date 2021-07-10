import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-87b0d.cloudfunctions.net/api', 
  headers: {'Access-Control-Allow-Origin': "*"}
  // "http://localhost:5001/clone-87b0d/us-central1/api"
});

export default instance;
