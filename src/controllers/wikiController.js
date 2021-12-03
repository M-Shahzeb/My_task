import wikiPediaModel from "../models/wikiRecords.js";
export default{

  async insertWikiRecord(){
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
  },

  async getAllWikiRecords(req, res){
    
        const all = await wikiPediaModel.find({});
      
        res.send(all);
      },
  

  async getWikiRecordById(){
    const all = await wikiPediaModel.find({ _id: req.params.id });

    res.send(all);

  },

  async updateWikiRecords(){
    const all = await wikiPediaModel.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, description: req.body.description }
    );
  
    res.send("updated");

  },

  async deleteWikiRecord(){
    const all = await wikiPediaModel.find({ _id: req.params.id }).remove();

    res.send("Deleted");
  }
}