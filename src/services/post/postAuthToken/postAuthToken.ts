import axios from "axios";

export const postAuthToken = async () => {
  let { data, status } = await axios.post(
     "https://63214b9dfd698dfa29f51b03.mockapi.io/api/authToken/user"
   
  );
  if (status >= 400 && status < 600) {
    throw Error(`Response error. Status code: ${status}`);
  }
  return data;
};

export default postAuthToken;
