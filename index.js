const express = require("express");
const app = express();
const multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  }
});

let upload = multer({ storage: storage });

app.post("/fileUpload", upload.single("image"), (req, res, next) => {
  console.log("filename", req);
  res.json({
    message: "File uploaded successfully"
  });
});

app.listen(3001, () => {
  console.log("PORT Running at 3001");
});
