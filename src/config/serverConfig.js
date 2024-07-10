const dotenv=require('dotenv');
dotenv.config();
module.exports={
PORT:process.env.PORT,
DB_URL:process.env.DB_URL,
JWT_SECRET:process.env.JWT_SECRET,
JWT_EXPIN:process.env.JWT_EXPIRES,
CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
CLOUDINARY_API_SECRET:process.env.CLOUDINARY_API_SECRET,
CLOUDINARY_CLOUDE_NAME:process.env.CLOUDINARY_CLOUDE_NAME,
}
