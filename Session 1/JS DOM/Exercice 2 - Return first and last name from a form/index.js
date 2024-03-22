document.addEventListener('DOMContentLoaded', function () {
  // Afficher dans la console les valeurs des champs du formulaire #form1
  let firstName = document.querySelector('#firstNameField');
  console.log(firstName.value);
  let lastName = document.querySelector('#lastNameField');
  console.log(lastName.value);
});
