import axios from "axios";
import baseURL from "../../../utils/baseURL";

const retrieveAxios = axios.create({
  baseURL: `${baseURL}/api`, // Adjust the base URL to match your backend server
});

export const getAllImages = async () => {
  try {
    const response = await retrieveAxios.get("/images");
    return response.data;
  } catch (error) {
    throw error;
  }
};
