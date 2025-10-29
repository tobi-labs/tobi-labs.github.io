"use strict";

function getImageName(title) {
  title = title.toLowerCase().trim().replace(/[\s.]+/g, '-');
  return title;
}

function getImagePath(imageName) {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
}

export { getImagePath, getImageName };