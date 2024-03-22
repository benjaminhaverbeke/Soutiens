document.addEventListener('DOMContentLoaded', function () {
  // Changer la couleur de fond de chaque paragraphe
  
  let para = document.querySelectorAll('p');
  console.log(para);
  para[1].style.color = "blue";
  para[0].style.color = 'red';
});
