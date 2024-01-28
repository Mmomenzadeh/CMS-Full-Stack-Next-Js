const mongoose = require("mongoose");

const conectToDB = async () => {
  try {
    // console.log({ "state => ": mongoose.connections[0].readyState });
    if (mongoose.connections[0].readyState) {
      return false;
    }

    await mongoose
      .connect("mongodb://127.0.0.1:27017/cms_NextJs")
      .then((res) => console.log("conect to db"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log({ error: error });
  }
};

export default conectToDB;
