import teachersModel from "@/model/teachers";
import conectToDB from "@/utils/conectToDb";

const teacherHandler = async (req, res) => {
  conectToDB();

  switch (req.method) {
    case "GET":
      try {
        const teachers = await teachersModel.find({});
        res.status(200).json(teachers);
      } catch (error) {
        res.status(500).json("internal server error !");
      }
      break;

    case "POST":
      try {
        const { name } = req.body;
        if (!name.trim() || name.length < 4) {
          res.status(422).json(" name is not valid ! ");
        } else {
          await teachersModel.create({ name });
          res.status(201).json("created");
        }
      } catch (error) {
        res.status(500).json("internal server error");
      }
      break;
    default:
      res.json({ "message => ": "here is default" });

      break;
  }
};

export default teacherHandler;
