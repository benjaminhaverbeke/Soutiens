document.addEventListener('DOMContentLoaded', function () {
  // Au clic sur le bouton ayant la classe js-submit-button
  // Changer la taille, famille et couleur de la police
  // de l'élément ayant la classe js-text

  let button = document.querySelector('.js-submit-button');
  console.log(button);
  let text = document.querySelector('.js-text');
  console.log(text);
  
  button.addEventListener('click', function(){
    text.style.fontSize = "2rem";
    text.style.fontFamily = "Monospace";
    text.style.color = 'blue';
    
  });
  
  
});
