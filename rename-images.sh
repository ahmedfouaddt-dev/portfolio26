#!/bin/bash

# Script to rename all images in project folders to numeric format (1.jpg, 2.jpg, etc.)

cd public/assets/imgs/projects || exit 1

echo "Starting image rename process..."

# Loop through each project directory
for project_dir in */; do
    if [ -d "$project_dir" ]; then
        echo ""
        echo "Processing: $project_dir"

        cd "$project_dir" || continue

        # Count images
        count=$(find . -maxdepth 1 -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.webp" -o -name "*.jpeg" -o -name "*.gif" \) | wc -l | tr -d ' ')

        if [ "$count" -eq 0 ]; then
            echo "  No images found"
            cd ..
            continue
        fi

        echo "  Found $count images"

        # Create temp directory for renaming
        mkdir -p .temp_rename

        # Counter
        counter=1

        # Get all image files and sort them
        find . -maxdepth 1 -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.webp" -o -name "*.jpeg" -o -name "*.gif" \) | sort | while read -r file; do
            # Get file extension
            ext="${file##*.}"
            # Convert extension to lowercase
            ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

            # Normalize extension
            if [ "$ext" = "jpeg" ]; then
                ext="jpg"
            fi

            # New filename
            new_name="${counter}.${ext}"

            # Copy to temp directory with new name
            cp "$file" ".temp_rename/$new_name"

            echo "    $file -> $new_name"

            counter=$((counter + 1))
        done

        # Remove old images
        find . -maxdepth 1 -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.webp" -o -name "*.jpeg" -o -name "*.gif" \) -delete

        # Move renamed images back
        mv .temp_rename/* .
        rmdir .temp_rename

        echo "  ✓ Renamed $count images"

        cd ..
    fi
done

echo ""
echo "✓ All images renamed successfully!"
echo ""
echo "Summary by project:"
for project_dir in */; do
    if [ -d "$project_dir" ]; then
        count=$(find "$project_dir" -maxdepth 1 -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.webp" -o -name "*.gif" \) | wc -l | tr -d ' ')
        if [ "$count" -gt 0 ]; then
            echo "  ${project_dir%/}: $count images"
        fi
    fi
done
