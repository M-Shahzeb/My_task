import express, { response } from "express";
const router = express.Router();
import wikiPediaModel from "../models/wikiRecords.js";
import wikiPediacontroller from "../controllers/wikiController.js";


router.post("/testRoute", wikiPediacontroller.insertWikiRecord);

router.get("/getWikis",wikiPediacontroller.getAllWikiRecords);
//  

router.get("/getWiki/:id", wikiPediacontroller.getWikiRecordById);

router.delete("/deleteWiki/:id",wikiPediacontroller.deleteWikiRecord); 
  


router.post("/updateWiki/:id", wikiPediacontroller.updateWikiRecords);
  

export default router;
