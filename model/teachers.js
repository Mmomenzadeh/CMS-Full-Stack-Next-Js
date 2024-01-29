const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export  const teachersSchems = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },

  {
    timestamps: true,
  }
);

const teachersModel =
  mongoose.models.teacher || mongoose.model("teacher", teachersSchems);

export default teachersModel;
