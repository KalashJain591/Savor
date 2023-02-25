const router = require("express").Router();
const Gallery = require("../models/galleryModel");

router.get("/",(req, res) => {
    try {
        Gallery.find()
        .then((gallery) => res.json(gallery))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.json(false);
    }
});
router.post('/addimg',  async (req, res) => {
  try{
    const {photolink, name, details}=req.body;
    // console.log("ADD IMAGES")
    const newGallery = new Gallery({
        photolink, name, details
      });
  
      const savedGallery = await newGallery.save();
      res.status(200).send(savedGallery);
  }
  catch (error) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
});

router.get("/deleteimg/:id",  async (req, res) => {
    const galleryId=req.params.id;
    // console.log(galleryId);
    try{
        let gallerysaved= await Gallery.findOneAndDelete({ _id:galleryId});
        res.status(200).send(gallerysaved);
    }
    catch (error) {
      console.log(err);
      res.status(500).send('Something went wrong');
    }
});
  
router.post("/updateimg/:id",  async (req, res) => {
    const galleryId=req.params.id;
    try{
      const {photolink, name, details}=req.body;
      const oldgallery= await Gallery.findOne({_id:productId});
      if(!photolink){
        photolink:oldgallery.photolink;
      }
      if(!name){
        name:oldgallery.name;
      }
      if(!details){
        details:oldgallery.details;
      }
      const savedGallery = await newGallery.findOneAndUpdate({_id:galleryId},{photolink, name, details});
      res.status(200).send(savedGallery);
    }
    catch (error) {
      console.log(err);
      res.status(500).send('Something went wrong');
    }
 });
  
module.exports = router;
