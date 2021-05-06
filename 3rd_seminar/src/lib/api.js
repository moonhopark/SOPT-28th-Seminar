import axios from "axios";

export const getUserData = async (id) => {
  try {
    const {data} = await axios.get("https://api.github.com/users/" + id);
    console.log("[SUCCESS] GET user data", data);
    return data;
  } catch(e) {
    console.log("[FAIL] GET user data");
    return null;
  }
};