import { connect } from "mongoose";
import { MONGODB_URI } from "../config";

export const connectDB = async () => {
  try {
    await connect(MONGODB_URI, { useNewUrlParser: true }).then(() =>
      console.log("Conexion a la DB")
    );
  } catch (error) {
    console.log("error en la BD" + error);
  }
};
