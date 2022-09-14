import axios from "axios";
const addCategory = async (categoryName) => {
  const { data, status } = await axios.post(
    `${
      process.env.API_URL || "https://todo--api.herokuapp.com"
    }/api/v1/group_items`,
    { list_title: categoryName, list_items: [] }
  );
  if (status >= 400 && status < 600) {
    throw Error(`Response error. Status code: ${status}`);
  }

  return data;
};
//{id: 77}
export default addCategory;
