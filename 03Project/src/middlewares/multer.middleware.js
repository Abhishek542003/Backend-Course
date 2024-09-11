import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("File received for storage:", file.originalname); // Debugging log
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    console.log("Saving file as:", file.originalname); // Debugging log
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage: storage,
});
