import axios from "axios";
const getAllTasks = async (taskID) => {
  const { data, status } = await axios.get(
    `https://63214b9dfd698dfa29f51b03.mockapi.io/api/authToken/getAllTasks`
  );
  if (status >= 400 && status < 600) {
    throw Error(`Response error. Status code: ${status}`);
  }

  return data;
};
export default getAllTasks;
