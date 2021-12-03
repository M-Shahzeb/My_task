import express, { response } from "express";
const router = express.Router();
import wikiPediaModel from "../models/wikiRecords.js";
import axios from "axios";

router.post("/testRoute", async (req, res) => {
  const data = axios
    .get(
      `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&exintro=1&titles=Albert%20Einstein`
    )
    .then((response) => {
      const data = response.data.query.pages;

      //   const array = Object.keys(data);
      const convert = Object.values(data);

      const saveData = new wikiPediaModel({
        title: convert[0].title,
        description: convert[0].extract,
      });
      const success = saveData.save();

      if (success) {
        res.json({
          status: true,
          message: "Data is saved",
          data: [],
          code: 200,
        });
      } else {
        res.json({
          status: false,
          message: "Data is failed to save",
          data: [],
          code: 400,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/getWikis", async (req, res) => {
  const all = await wikiPediaModel.find({});

  res.send(all);
});

router.get("/getWiki/:id", async (req, res) => {
  const all = await wikiPediaModel.find({ _id: req.params.id });

  res.send(all);
});
router.delete("/deleteWiki/:id", async (req, res) => {
  const all = await wikiPediaModel.find({ _id: req.params.id }).remove();

  res.send("Deleted");
});

router.post("/updateWiki/:id", async (req, res) => {
  const all = await wikiPediaModel.findOneAndUpdate(
    { _id: req.params.id },
    { title: req.body.title, description: req.body.description }
  );

  res.send("updated");
});

export default router;
