/*window.addEventListener("DOMContentLoaded", function(){
    
    let afficher = document.querySelector('.afficher');
    console.log(afficher);
    let modal = document.querySelector('.modal');
    console.log(modal);
    let fermer = document.querySelector('.fermer');
    console.log(fermer);
    
    afficher.addEventListener("click", function(){
        
        modal.style.display = 'block';
        
    });
    fermer.addEventListener("click", function(){
        
        modal.style.display = 'none';
        
    });
    
    
});

*/

$(function(){
   $('.afficher').click(function(){
       $('.modal').css('display', 'block');
   });
   $('.fermer').click(function(){
       $('.modal').css('display', 'none');
   });
});
