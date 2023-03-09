import { Users } from "../Models/users.js";

// find all users
export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    !users ? res.status(400).json({ message: "No users found" }) : res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};

// find user
export const getUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await Users.findById(_id);
    !user ? res.status(400).json({ message: "No user found" }) : res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};

// add new user
export const createUser = async (req, res) => {
  try {
    const { name, email, tel } = req.body;
    const user = new Users({ name, email, tel });
    await user.save();
    return res.status(200).json({ ok: "New User Created" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};

// delete one user
export const delUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await Users.findById(_id);

    !user
      ? res.status(400).json({ message: `No user found with id: ${id},  could not to be deleted` })
      : await Users.findByIdAndRemove(_id);

    return res.status(200).json({ ok: "User Deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};

// update one user
export const updateUser = async (req, res) => {
  const { _id, name, email, tel } = req.body;
  try {
    const user = await Users.findById(_id);

    !user
      ? res.status(400).json({ message: `No user found with id: ${id},  could not to be updated` })
      : await Users.findByIdAndUpdate(_id, { name, email, tel });

    user.save();
    return res.status(200).json({ ok: "User Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};
