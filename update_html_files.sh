#!/bin/bash

# Loop through all HTML files in the html directory
for file in html/*.html; do
  # Get the filename without the directory
  filename=$(basename "$file")

  # Update CSS and JS paths
  sed -i 's@<link rel="stylesheet" href="css/global.css">@<link rel="stylesheet" href="../css/global.css">@g' "$file"
  sed -i 's@<script src="js/global.js"><\/script>@<script src="../js/global.js"><\/script>@g' "$file"

  # Add service worker registration code
  echo "<script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service worker registration failed:', error);
        });
    }
  <\/script>" >> "$file"

  echo "Updated: $filename"
done

echo "Finished updating all HTML files."
