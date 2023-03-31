import User from "../models/Usuarios.js";
import Role from "../models/Roles.js";

export const admin = async (user) => {
  const foundRoles = await Role.find({ name: { $in: user.roles[0].name } });
  if (foundRoles) return true;

  return false;
};

export const signUp = async (req, res) => {
  const { name, username, email, password, roles } = req.body;

  const newUser = new User({
    name,
    username,
    email,
    password: await User.encryptPassword(password),
  });
  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "Cliente" });
    newUser.roles = [role._id];
  }
  const saveUser = await newUser.save();

  res.status(200).json({ ...saveUser._doc });
};

export const signIn = async (req, res) => {
  const { username, password } = req.body;
  const userFound = await User.findOne({
    username,
  }).populate("roles");

  if (!userFound)
    return res
      .status(404)
      .json({ message: `NO EXISTE EL USUARIO: ${username}` });

  const matchPass = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPass)
    return res.status(400).json({ message: "Contraseña incorrecta" });

  if (admin(userFound) === true) res.send({ ...userFound, admin: true });

  res.send(userFound);
};
