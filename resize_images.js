const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./jacob-pet-supplies/public/assets"; // Folder where your WebP images are stored
const outputDir = "./jacob-pet-supplies/public/assets/optimized"; // Folder for resized images

// Ensure input directory exists
if (!fs.existsSync(inputDir)) {
  console.error(`Input directory "${inputDir}" does not exist.`);
  process.exit(1);
}

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process each WebP file in the input directory
fs.readdirSync(inputDir).forEach((file) => {
  const filePath = path.join(inputDir, file);

  // Only process .webp files
  if (path.extname(file).toLowerCase() === ".webp") {
    console.log(`Processing: ${file}`); // Debug log

    const outputFilePath = path.join(outputDir, file);

    sharp(filePath)
      .resize({
        width: 400, // Target width
        height: 300, // Target height
        fit: "contain", // Ensures the entire image fits within the box
        background: { r: 255, g: 255, b: 255, alpha: 1 }, // Adds white padding if necessary
      })
      .toFile(outputFilePath, (err) => {
        if (err) {
          console.error(`Error processing ${file}:`, err);
        } else {
          console.log(`Optimized and saved: ${outputFilePath}`);
        }
      });
  } else {
    console.log(`Skipping: ${file} (Not a .webp file)`);
  }
});
