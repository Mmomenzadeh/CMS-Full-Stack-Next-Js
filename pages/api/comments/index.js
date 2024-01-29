import commentsModel from "@/model/comments";
import conectToDB from "@/utils/conectToDb";
import { isValidObjectId } from "mongoose";

const commentHandler = async (req, res) => {
  conectToDB();
  switch (req.method) {
    case "GET":
      try {
        const comments = await commentsModel.find({}).populate("curess");
        res.status(200).json(comments);
      } catch (error) {
        res.status(500).json("internal server error");
      }
      break;

    case "POST":
      try {
        const { body, curess } = req.body;
        if (!body.trim() || !isValidObjectId(curess)) {
          res.status(422).json("entery is not valid");
        }

        await commentsModel.create({ body, curess });
        res.status(201).json("message => created");
      } catch (error) {
        res.status(500).json("internal server error !");
      }

      break;

    default:
      res.json({ "message => ": "here is default" });

      break;
  }
};

export default commentHandler;
