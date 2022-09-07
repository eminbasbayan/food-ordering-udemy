import Order from "../../../models/Order";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "POST") {
    try {
      const newOrder = await Order.create(req.body);
      res.status(201).json(newOrder);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
