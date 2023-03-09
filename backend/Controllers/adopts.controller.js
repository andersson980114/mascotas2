import { Adopts } from "../Models/adopts.js";

// get all adoptions
export const getAllAdopts = async (req, res) => {
  try {
    const adopts = await Adopts.find();
    !adopts ? res.status(404).json({ message: "No adopts found" }) : res.json(adopts);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};

// get one adoption
export const getAdopt = async (req, res) => {
  const _id = req.params.id;
  try {
    const adopt = await Adopts.findById(_id);
    !adopt ? res.status(404).json({ message: "Adopt not found" }) : res.json(adopt);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};

// create one adoption
export const createAdopt = async (req, res) => {
  try {
    const { id_pet, id_user, date } = req.body;

    const findId = await Adopts.findOne({ id_pet, id_user });

    if (findId) {
      return res.status(409).json({ message: "Adopt already exists" });
    } else {
      let adopt = new Adopts({ id_pet, id_user, date });
      await adopt.save();
      return res.status(200).json({ ok: "New Adopt Created" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};

//update one adoption
export const updateAdopt = async (req, res) => {
  const { _id, id_pet, id_user, date } = req.body;
  try {
    const adopt = await Adopts.findById(_id);

    !adopt
      ? res.status(400).json({ message: `No user found with id: ${id},  could not to be updated` })
      : await Adopts.findByIdAndUpdate(_id, { id_pet, id_user, date });

    await adopt.save();
    return res.status(200).json({ ok: "Adopt Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};

//Remove one adoption
export const delAdopt = async (req, res) => {
  const _id = req.params.id;
  try {
    const adopt = await Adopts.findById(_id);

    !adopt
      ? res.status(404).json({ message: `Adopt not found with id ${id}, could not to be deleted` })
      : await Adopts.findByIdAndRemove(_id);

    return res.status(200).json({ ok: "Adopt Deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};
