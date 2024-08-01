import React from "react";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_gallery.scss";
import "../../utils/SASS/base/_fonts.scss";

const slides = [];

let IndexActuel = 0;

function mettreAJourCarousel() {
  // Image affichée
  // Sélectionner l'élément image du carousel
  let ElementImage = document.querySelector(".banner-img");

  // Obtenir l'URL de l'image actuelle
  let urlImageActuelle = slides[IndexActuel].image;

  // Mettre à jour l'attribut 'src'
  ElementImage.src = urlImageActuelle;

  // Texte affichée
  // Sélectionner l'élément de texte du carousel
  let ElementTexte = document.querySelector("#banner p");

  // Obtenir le texte actuelle
  let texteActuel = slides[IndexActuel].tagLine;

  // Mettre à jour le contenu HTML de l'élément de texte avec le texte actuel
  ElementTexte.innerHTML = texteActuel;

  // Dots
  // Sélectionner tous les points du carousel
  let dots = document.querySelectorAll(".dot");

  // Parcourir chaque dots
  dots.forEach((dot, index) => {
    // Supprimer la classe 'dot_selected' du dots
    dot.classList.remove("dot_selected");

    // Si l'index dots correspond à l'index actuel
    if (index === IndexActuel) {
      // Ajouter la classe 'dot_selected' au point
      dot.classList.add("dot_selected");
    }
  });
}
//-----–----------------------------------------------
// Sélectionner les flèches gauche et droite

// Flèche gauche
// Mettre à jour le carousel
let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
  if (IndexActuel > 0) {
    IndexActuel -= 1;
  } else {
    // Sinon, aller à la dernière diapositive
    IndexActuel = 3;
  }
  console.log("Flèche gauche cliquée");

  mettreAJourCarousel();
});

// Flèche droite
let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
  // Si l'index actuel est inférieur à la longueur des slides moins 1
  if (IndexActuel < 3) {
    IndexActuel += 1;
  } else {
    IndexActuel = 0;
  }

  mettreAJourCarousel();

  console.log("Flèche droite cliquée");
});

//---------------------------------------------------

// faire apparaitre des chiffres dans les slides
let conteneurchiffre = document.querySelector(".chiffre");
let totalSlides = slides.length; // Nombre total de slides

// Parcourir chaque slide
slides.forEach((slide, index) => {
  // creation un nouvel élément div
  let chiffre = document.createElement("div");
  chiffre.classList.add("dot");

  // Définir le contenu textuel sous la forme "index/totalSlides"
  chiffre.textContent = `${index + 1}/${totalSlides}`; // +1 pour commencer à 1 au lieu de 0

  // Ajouter le chiffre à conteneurchiffre
  conteneurchiffre.appendChild(chiffre);
});
