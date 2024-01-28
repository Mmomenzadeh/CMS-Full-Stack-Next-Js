import model from "@/model/curess";
import conectToDB from "@/utils/conectToDb";

export default async function curess(req, res) {
  conectToDB();
  switch (req.method) {
    case "GET":
      const { q } = req.query;
      if (!q) {
        const curess = await model.find({});
        return res.status(200).json(curess);
      } else {
        const curess = await model.find({ title: { $regex: q } });
        return res.status(200).json(curess);
      }

    case "POST":
      try {
        const { title, time } = req.body;
        if (!title.trim() || !time.trim() || title.length < 8) {
          // A 422 status code indicates that the server was unable to process the request because it contains invalid data
          return res
            .status(422)
            .json({ "message => ": "entery is not valid!!" });
        }
        await model
          .create({ title, time })
          .then((res) => console.log("created in db"))
          .catch((err) => console.log("error not connect to db"));
        res.status(201).json({ "message => ": "created" });
      } catch (error) {
        res.status(500).json({ "message => ": "internal server error" });
      }
      break;
    default:
      console.log(" here is => default");
      break;
  }
}
