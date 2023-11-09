import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: String,
  city: String,
  // Add other fields as needed
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
