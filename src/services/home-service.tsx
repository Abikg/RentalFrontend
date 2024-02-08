import { privateAxios } from "./helper";

export const homeData = () => {
  return privateAxios
    .get("/api/house/all")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // Handle error
      console.error("Error fetching home data:", error);
      throw error; // Re-throw the error to be handled by the caller
    });
};
