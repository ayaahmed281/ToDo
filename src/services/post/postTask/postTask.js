import axios from "axios";

const addUser = async (userModel) => {
  const { data, status } = await axios.post(
    `${process.env.API_URL || "https://todo--api.herokuapp.com"}/api/v1/users`,
    {
      user: {
        name: "aya",
        email: "ayaahmed.281@gmail.com",
        password: "alah@@78",
      },
    }
  );
  if (status >= 400 && status < 600) {
    throw Error(`Response error. Status code: ${status}`);
  }

  return data;
};

export default addUser;
export { addUser };
