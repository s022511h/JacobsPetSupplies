const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./jacob-pet-supplies/public/assets"; 
const outputDir = "./jacob-pet-supplies/public/assets/optimized"; 


if (!fs.existsSync(inputDir)) {
  console.error(`Input directory "${inputDir}" does not exist.`);
  process.exit(1);
}


if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}


fs.readdirSync(inputDir).forEach((file) => {
  const filePath = path.join(inputDir, file);

  if (path.extname(file).toLowerCase() === ".webp") {
    console.log(`Processing: ${file}`); 

    const outputFilePath = path.join(outputDir, file);

    sharp(filePath)
      .resize({
        width: 400,
        height: 300,
        fit: "contain", 
        background: { r: 255, g: 255, b: 255, alpha: 1 }, 
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
