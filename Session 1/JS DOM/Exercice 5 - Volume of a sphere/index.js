document.addEventListener('DOMContentLoaded', function () {
  // Lorsque l'utilisateur saisi le rayon dans le champ radius
  // Puis clique sur le bouton "Calculate"
  // Calculer le volume d'une sphère et mettre le résultat dans le champ volume
  // ASTUCE : volume sphère = (4/3) * PI * (rayon puissance 3)
  
  let calculate = document.querySelector('.js-submit-button');
  let inputRadius= document.querySelector('#radius');
    let volume = document.querySelector('#volume');
    console.log(inputRadius.value)
    
    
  
  
  
  calculate.addEventListener('click', function(){
    
    let RadiusSaisie = inputRadius.value;
    
    console.log(RadiusSaisie);
    
    let result = Math.floor((Math.pow(RadiusSaisie, 3))*(4/3)*(Math.PI));
    console.log(result);
    event.preventDefault();
    
    volume.value = result;
    
  });
  
  
  
  
});
