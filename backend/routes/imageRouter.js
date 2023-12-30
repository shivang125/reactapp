import express from "express";
import multer from "multer";
import path from "path";
const imageRouter = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload image route
imageRouter.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { description } = req.body;
    const image = req.file;

    const newImage = new Image({
      description,
      image: {
        data: image.buffer,
        contentType: image.mimetype,
      },
    });

    await newImage.save();

    res.status(201).json({ message: "Image uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get all images route
imageRouter.get("/images", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default imageRouter;
