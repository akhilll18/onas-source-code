// Automatically import all image/video files in this folder
const media = import.meta.glob(
  './*.{jpg,jpeg,png,webp,gif,mp4}',
  { eager: true }
);

// Convert the imported files into an array of URLs
const slides = Object.values(media).map((item) => item.default);

// Optionally sort them alphabetically (if filenames like 1.jpg, 2.jpg, etc.)
slides.sort((a, b) => a.localeCompare(b));

export default slides;
