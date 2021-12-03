/*Define a wiki schema here*/
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const wikiPediaSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const wikiPediaModel = mongoose.model("WikiPedia", wikiPediaSchema);

export default wikiPediaModel;
