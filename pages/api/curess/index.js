import model from "@/model/curess";
import teachersModel from "@/model/teachers";
import conectToDB from "@/utils/conectToDb";
import { isValidObjectId } from "mongoose";

export default async function curess(req, res) {
  conectToDB();
  switch (req.method) {
    case "GET":
      const { q } = req.query;
      if (!q) {
        const curess = await model
          .find({}, "-__v -updatedAt")
          .populate("teacher", "name");
        return res.status(200).json(curess);
      } else {
        const curess = await model.find({ title: { $regex: q } });
        return res.status(200).json(curess);
      }

    case "POST":
      try {
        const { title, time, price, teacher } = req.body;

        // console.log(req.body)

        if (
          !title.trim() ||
          !time.trim() ||
          title.length < 4 ||
          !price ||
          !isValidObjectId(teacher)
        ) {
          // A 422 status code indicates that the server was unable to process the request because it contains invalid data
          return res
            .status(422)
            .json({ "message => ": "entery is not valid!!" });
        }

        const mainTeacher = await teachersModel.findOne({ _id: teacher });

        // console.log(mainTeacher)

        await model.create({ title, time, price, teacher: mainTeacher });
        res.status(201).json({ "message => ": "created" });
      } catch (error) {
        res.status(500).json({ "message => ": "internal server error" }, error);
      }
      break;
    default:
      console.log(" here is => default");
      break;
  }
}
