import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/restaurant-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose.connection;
