import Order from "../../../models/Order";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "DELETE") {
    try {
      const order = await Order.findByIdAndDelete(id);
      res.status(200).json(order);
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(order);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
