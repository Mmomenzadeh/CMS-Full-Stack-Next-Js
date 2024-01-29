const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
import teachersModel from "./teachers";
import { teachersSchems } from "./teachers";

const schema = new Schema(
  {
    title: {
      type: String,
      require: true,
      minLength: 4,
      maxLength: 20,
      index: true,
      unique: true,
      // lowercase : true
      // uppercase : true
    },
    time: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
      // default: 0,
      min: 500000,
      max: 1000000,
    },

    // refrence
    // teacher: {
    //   type: Mongoose.Types.ObjectId,
    //   ref: "teacher",
    //   require: true,
    // },

    // embedded
    teacher: {
      type: teachersSchems,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const model = Mongoose.models?.curess || Mongoose.model("curess", schema);

export default model;
