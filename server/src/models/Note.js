import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Nota", schema);
