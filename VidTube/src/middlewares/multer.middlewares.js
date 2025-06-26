// import multer from "multer";
// import fs from "fs";
// import path from "path";



// // Define upload directory inside the project
// const uploadDir = path.join(process.cwd(), "temp", "my-uploads");

// // Ensure the upload directory exists
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // console.log("Upload directory:", uploadDir);


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/tmp/my-uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
// })

// export const upload = multer({
//     storage
// })


import multer from "multer";
import fs from "fs";
import path from "path";

// Define the correct upload directory
const uploadDir = path.join(process.cwd(), "temp", "my-uploads");

// Ensure the directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // Save files to the correct path
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // Unique filename
    }
});

const upload = multer({ storage });

// ✅ Ensure you're exporting `upload` correctly
export { upload };
