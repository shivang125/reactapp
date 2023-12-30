import axios from "axios";
import baseURL from "../../../utils/baseURL";
const uploadAxios = axios.create({
  baseURL: `${baseURL}/api`, // Adjust the base URL to match your backend server
});

export const uploadImage = async (formData) => {
  try {
    const response = await uploadAxios.post("/upload", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
