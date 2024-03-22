
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;
    
    // le code de l'étape 1 se passe ici
    
    //## solution avec for()
    let divs = document.querySelectorAll(`header > div`);
    for(let i = 0; i < divs.length; i++){
        let div = divs[i];
        div.style.backgroundColor = colors[i];
    }
    
    //## solution avec forEach()
    // let divs = document.querySelector(`header > div`);
    // divs.forEach(function(color, key){
    //   let div = divs[key];
    //   div.style.backgroundColor = color;
    // });
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

    // le code de l'étape 2 se passe ici
    let headerDivs = document.querySelectorAll('header > div');
    for(let i = 0; i < headerDivs.length; i++){
        let div = headerDivs[i];
        div.addEventListener("click", selectColor);
    }
    /*
    // Méthode 2
    headerDivs.forEach(function(div){
      div.addEventListener("click", selectColor);
    });
    */
    // console.log(getSelectedColor());

    // le code de l'étape 3 se passe ici
    let mainDivs = document.querySelectorAll('main > div > div');
    for(let i = 0; i < mainDivs.length; i++) {
        let div = mainDivs[i];
        div.addEventListener('click', function(event) {
            let element = event.target;
            console.log(element);
            let color = getSelectedColor();
            if (color !== null) {
                if (event.target.style.backgroundColor) {
                    event.target.style.backgroundColor = "";
                } else {
                    event.target.style.backgroundColor = color;
                }
            }
        })
    }

});
