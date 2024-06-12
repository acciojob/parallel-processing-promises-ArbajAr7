//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
function loadImage(url) {
	return new Promise((resolve, reject) => {
		let img = new Image();
		img.onload = function() {
			resolve(img);
		};
		img.onerror = function() {
			reject(new Error(`Failed to load image's URL: ${url}`));
		};
		img.src = url;
	});
}

document.getElementById("download-images-button").addEventListener("click", function () {
	let imagePromises = images.map(img =>
		loadImage(img.url));
	Promise.all(imagePromises)
	.then(imgs => {
		imgs.forEach(img => document.getElementById("output").appendChild(img));
	})
	.catch(err => console.error(err));
})