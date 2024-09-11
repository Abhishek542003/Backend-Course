import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

cloudinary.config({
  cloud_name:  process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // File has been uploaded to Cloudinary
    console.log("file is uploaded to Cloudinary", response.url);
    
    // Remove the local file after a successful upload
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    console.error("Error during Cloudinary upload:", error.message);
    
    // Optionally remove the file if desired (depending on your error-handling policy)
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};


export {uploadOnCloudinary};