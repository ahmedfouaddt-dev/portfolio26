import fs from "fs";
import path from "path";

/**
 * Automatically loads all image files from a project directory
 * Convention: public/assets/imgs/projects/[projectId]/[1.jpg, 2.jpg, 3.jpg, ...]
 *
 * @param projectId - The project folder name (matches the 'id' in CATEGORIES)
 * @returns Array of image paths relative to /public, or empty array if folder doesn't exist
 */
export function getProjectImages(projectId: string): string[] {
  const dir = path.join(
    process.cwd(),
    "public/assets/imgs/projects",
    projectId
  );

  // Return empty array if directory doesn't exist
  if (!fs.existsSync(dir)) return [];

  try {
    // Read all files in the directory
    const files = fs.readdirSync(dir);

    // Filter for image files and sort them numerically
    return files
      .filter((file) => /\.(png|jpe?g|webp|gif)$/i.test(file))
      .sort((a, b) => {
        // Extract numbers from filenames (e.g., "1.jpg" -> 1, "screenshot-2.png" -> 2)
        const numA = parseInt(a.match(/\d+/)?.[0] || "0");
        const numB = parseInt(b.match(/\d+/)?.[0] || "0");
        return numA - numB;
      })
      .map((file) => {
        const basePath = process.env.NODE_ENV === 'production' ? '/portfolio26' : '';
        return `${basePath}/assets/imgs/projects/${projectId}/${file}`;
      });
  } catch (error) {
    console.error(`Error reading project images for ${projectId}:`, error);
    return [];
  }
}
