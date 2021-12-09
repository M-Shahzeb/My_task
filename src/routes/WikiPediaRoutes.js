import express, { response } from "express";
import multer from 'multer';

const router = express.Router();
import wikiPediaModel from "../models/wikiRecords.js";
import wikiPediacontroller from "../controllers/wikiController.js";
import usercontroller from "../controllers/userController.js";
import path from 'path';

var imageUpload = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
      },
      filename: function (req, file, cb) {
         cb(null, Date.now() + path.extname(file.originalname));
      }
  });
  var images = multer({ storage: imageUpload });

router.post('/login',usercontroller.login)

router.post('/signup',images.single('profileImage'),usercontroller.registerUser)
router.post('/stringTest',usercontroller.matchFinder)
router.get('/getbirthdays',usercontroller.getAllUsersBirthday)
router.get('/calcAge',usercontroller.birthYear)
router.post('/softDeleteFemaleUsers',usercontroller.softDeleteFemaleUsers)

router.post("/testRoute", wikiPediacontroller.insertWikiRecord);

router.get("/getWikis",wikiPediacontroller.getAllWikiRecords);
//  

router.get("/getWiki/:id", wikiPediacontroller.getWikiRecordById);

router.delete("/deleteWiki/:id",wikiPediacontroller.deleteWikiRecord); 
  


router.post("/updateWiki/:id", wikiPediacontroller.updateWikiRecords);
  

export default router;
