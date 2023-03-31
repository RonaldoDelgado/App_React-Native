import { Schema, model } from "mongoose";

const schemaShop = new Schema(
  {
    numberBill: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      ref: "User",
      unique: false,
      type: Schema.Types.ObjectId,
      required: true,
    },
    estate: {
      name: {
        type: String,
      },
      description: {
        type: String,
      },
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Shopping", schemaShop);
