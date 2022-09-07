import Category from "../../../models/Category";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const category = await Category.findById(id);
      res.status(200).json(category);
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "DELETE") {
    try {
      const category = await Category.findByIdAndDelete(id);
      res.status(200).json(category);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
