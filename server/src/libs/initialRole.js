import Role from "../models/Roles.js";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count > 0) return;

    const values = await Promise.all([
      new Role({ name: "Cliente" }).save(),
      new Role({ name: "Admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.log(error);
  }
};
