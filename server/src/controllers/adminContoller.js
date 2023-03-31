import Shopping from "../models/Shopping";
import User from "../models/Usuarios";

export const createShopping = async (req, res) => {
  try {
    const { numberBill, username, estate, description } = req.body;
    const userFound = await User.findOne({ username });
    if (!(userFound || numberBill || estate || description))
      res.status(404).json({ message: "Usuario no encontrado" });

    const newShopping = new Shopping({
      numberBill,
      username: userFound._id,
      estate: { ...estate },
      description,
    });

    const saveShopping = await newShopping.save();
    res.status(202).json(saveShopping._doc);
  } catch (error) {}
};

export const getShopping = async (req, res) => {
  console.log("entra en el ruter");
  try {
    const shoppings = await Shopping.find().populate("username");
    res.status(200).send(shoppings);
  } catch (error) {
    console.log(error);
  }
};
