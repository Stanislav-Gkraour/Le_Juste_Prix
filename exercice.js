// Etape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");
let msgPlaceHolder = document.querySelector("#instructions");
let coups = 0;
let nombreChoisi;
// Etape 2 - Cacher l'erreur
error.style.display = "none";
// Etape 3 - Générer un nombre aléatoire
genererNombre = () => {
  return Math.trunc(Math.random() * Math.floor(1001));
};

let nombreAleatoire = genererNombre()

console.log(nombreAleatoire);
// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
  console.log(nombre);
  // creer un petit objet
  let instruction = document.createElement("div");

  if (nombre < nombreAleatoire) {
    // C'est plus
    // Ajouter un contenu #1 (4) C'est plus !;

    instruction.innerText = "#" + coups + "(" + nombre + ") " + "C'est plus !";

    // Ajouter les clases instructions et plus

    instruction.className = "instruction plus";
    console.log("plus");
  } else if (nombre > nombreAleatoire) {
    // C'est moins()
    // Ajouter un contenu #1 (4) C'est moins !;

    instruction.innerText = "#" + coups + "(" + nombre + ") " + "C'est moins !";

    // Ajouter les clases instructions et moins

    instruction.className = "instruction moins";
  } else {
    // Felicitations vous avez trouvé le juste prix
    // Ajouter un contenu #1 (4) Felicitations vous avez trouvé le juste prix;
    instruction.innerText = "#" + coups + "(" + nombre + ") " +
    "Felicitations vous avez trouver le jouste prix !";
    // Ajouter les clases instructions et fini
    instruction.className = "instruction fini";
    input.disabled = true;
  }
  msgPlaceHolder.prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    // pour afficher le message d'erreur
    error.style.display = "inline";
  } else {
    // pour cacher le message d'erreur
    error.style.display = "none";
  }
});
// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener("submit", (e) => {
  // pour anouler l'eveniment par defaut
  e.preventDefault();

  if (input.value.length == 0 || isNaN(input.value)) {
    input.style.borderColor = "red";
  } else {
    coups++;
    input.style.borderColor = "silver";
    // stocker le nombre choisi par l'utilisateur
    nombreChoisi = input.value;
    // vider l'input apres submit
    input.value = "";
    verifier(nombreChoisi);
  }
});
