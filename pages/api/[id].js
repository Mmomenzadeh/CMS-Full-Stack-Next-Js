import model from "@/model/curess";
import conectToDB from "@/utils/conectToDb";

import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  conectToDB();
  const { id } = req.query;
  const { title, time } = req.body;
  switch (req.method) {
    case "DELETE":
      if (isValidObjectId(id)) {
        try {
          await model.findOneAndDelete({ _id: id });
          res.status(200).json({ "message => ": "delete" });
        } catch (error) {
          res.status(500).json({ "message => ": "internal server error" });
          console.log(error);
        }
      } else {
        res.status(422).json({ "message =>": "id is not valid" });
      }

      break;

    case "PUT":
      if (isValidObjectId(id)) {
        try {
          await model.findOneAndUpdate({ _id: id }, { title, time });

          res.status(200).json({ "message => ": "updateed" });
        } catch (error) {
          res.status(500).json({ "message => ": "internal server error " });
        }
      } else {
        // A 422 status code indicates that the server was unable to process the request because it contains invalid data
        res.status(422).json({ "message => ": "id is not valid" });
      }
      break;

    default:
      console.log("default");
      break;
  }
};

export default handler;
