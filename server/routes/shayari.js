const express = require("express");
const router = express.Router();
const Shayari = require("../models/Shayari");

router.get("/", async (req, res) => {
  const all = await Shayari.find();
  res.json(all);
});

router.post("/", async (req, res) => {
  const { name, category, content } = req.body;
  const shayari = new Shayari({ name, category, content });
  await shayari.save();
  res.json(shayari);
});

router.delete("/:id", async (req, res) => {
  await Shayari.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

router.put("/:id", async (req, res) => {
  await Shayari.findByIdAndUpdate(req.params.id, { content: req.body.content });
  res.send("Updated");
});

module.exports = router;
