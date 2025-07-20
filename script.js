const gallery = document.getElementById("gallery");

const totalImages = 500; // ← Change ce nombre selon combien d'affiches tu as
const imageFormat = "jpg"; // ← Change si tu utilises .png, .webp, etc.

for (let i = 1; i <= totalImages; i++) {
  const link = document.createElement("a");
  link.href = `images/film${i}.${imageFormat}`;
  link.target = "_blank"; // Ouvre dans un nouvel onglet

  const img = document.createElement("img");
  img.src = `images/film${i}.${imageFormat}`;
  img.alt = `Affiche Film ${i}`;

  link.appendChild(img);
  gallery.appendChild(link);
}
