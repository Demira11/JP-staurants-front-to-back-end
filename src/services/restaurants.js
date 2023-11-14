import api from "./apiConfig.js";

export const getRestaurants = async () => {
  try {
    const response = await api.get("/restaurants");
    return response.data;
  } catch (error) {
    console.error("Error: Getting all Restaurants: ", error);
  }
};

export const getRestaurantsByCity = async (city) => {
  try {
    const response = await api.get("/restaurants", {
      params: { city },
    });
    return response.data;
  } catch (error) {
    console.error("Error: Getting Restaurants by City: ", error);
  }
};

export const getRestaurant = async (id) => {
  try {
    const response = await api.get(`/restaurants/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error: Getting one Restaurant: ", error);
  }
};

export const createRestaurant = async (restaurantData) => {
  try {
    const response = await api.post("/restaurants", restaurantData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editRestaurant = async (id, restaurantData) => {
  try {
    const response = await api.put(`/restaurants/${id}`, restaurantData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteRestaurant = async (id) => {
  try {
    const response = await api.delete(`/restaurants/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
