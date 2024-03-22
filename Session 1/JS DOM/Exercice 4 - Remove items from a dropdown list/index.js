document.addEventListener('DOMContentLoaded', function() {
  // Au clic sur le bouton ayant la classe js-remove-button
  // Supprimer l'élément sélectionné dans la liste js-color-selector

  // ASTUCE : Pour empêcher le rafraichissement de la page lors du clic sur le bouton,
  // utiliser la fonction preventDefault sur l'événement click

  let remove = document.querySelector('.js-remove-button');
  console.log(remove);




  remove.addEventListener('click', function() {


    let colorSelect = document.querySelector('.js-color-selector')
    let optionList = document.querySelectorAll('option');
    console.log(optionList[0].value);


    if (colorSelect.value === "red") {

      for (let i = 0; i < optionList.length; i++) {
        if (optionList[i].value === "red") {
          optionList[i].remove();
        }

        event.preventDefault();
      };


    }
    else if (colorSelect.value === "green") {

      for (let i = 0; i < optionList.length; i++) {
        if (optionList[i].value === "green") {
          optionList[i].remove();
        }

        event.preventDefault();
      };


    }
    else if (colorSelect.value === "white") {

      for (let i = 0; i < optionList.length; i++) {
        if (optionList[i].value === "white") {
          optionList[i].remove();
        }

        event.preventDefault();
      };


    }
    else{

      for (let i = 0; i < optionList.length; i++) {
        if (optionList[i].value === "black") {
          optionList[i].remove();
        }

        event.preventDefault();
      };


    }



  });

});
