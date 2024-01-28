const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;
const objectId = Schema.ObjectId;

const schema = new Schema({
  author: objectId,
  title: {
    type: String,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
});

const model = Mongoose.models?.curess || Mongoose.model("curess", schema);

export default model;
