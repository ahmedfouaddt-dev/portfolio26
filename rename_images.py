#!/usr/bin/env python3
import os
from pathlib import Path

# Change to projects directory
projects_dir = Path("public/assets/imgs/projects")

print("Starting image rename process...\n")

for project_folder in sorted(projects_dir.iterdir()):
    if not project_folder.is_dir():
        continue

    print(f"Processing: {project_folder.name}")

    # Get all image files
    image_extensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif']
    images = []

    for ext in image_extensions:
        images.extend(list(project_folder.glob(f"*{ext}")))
        images.extend(list(project_folder.glob(f"*{ext.upper()}")))

    if not images:
        print(f"  No images found\n")
        continue

    # Sort images by name
    images = sorted(images, key=lambda x: x.name.lower())

    print(f"  Found {len(images)} images")

    # Rename with temporary names first to avoid conflicts
    temp_names = []
    for i, img in enumerate(images, 1):
        ext = img.suffix.lower()
        if ext == '.jpeg':
            ext = '.jpg'
        temp_name = project_folder / f"temp_{i}{ext}"
        img.rename(temp_name)
        temp_names.append((temp_name, i, ext))

    # Rename to final names
    for temp_path, num, ext in temp_names:
        final_name = project_folder / f"{num}{ext}"
        temp_path.rename(final_name)
        print(f"    -> {num}{ext}")

    print(f"  ✓ Renamed {len(images)} images\n")

print("\n✓ All images renamed successfully!\n")

# Print summary
print("Summary by project:")
for project_folder in sorted(projects_dir.iterdir()):
    if not project_folder.is_dir():
        continue

    image_count = len([f for f in project_folder.iterdir()
                       if f.suffix.lower() in ['.jpg', '.jpeg', '.png', '.webp', '.gif']])

    if image_count > 0:
        print(f"  {project_folder.name}: {image_count} images")
