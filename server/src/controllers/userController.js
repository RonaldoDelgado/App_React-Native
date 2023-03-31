import Shopping from "../models/Shopping";

export const getShopping = async (req, res) => {
  try {
    const shoppings = await Shopping.find({
      username: { $in: req.query.id },
    }).populate("username");
    res.status(202).send(shoppings);
  } catch (error) {
    console.log("ERROR en el getShopping", error);
  }
};
