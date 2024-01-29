const mongoose = require("mongoose");
// import model from "./curess";
const model = require("./curess")

const commentsSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      require: true,
    },

    curess: {
      type: mongoose.Types.ObjectId,
      ref: "curess",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const commentsModel =
  mongoose.models.comment || mongoose.model("comment", commentsSchema);

export default commentsModel;
