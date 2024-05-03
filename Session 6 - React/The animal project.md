
# Etape 1 - Un animal

Créer un composant Animal avec deux props : nom et cri
Afficher chaque prop dans un paragraphe respectif

```javascript
        ReactDOM.render(
            <Animal nom='Chat' cri='Miaou' />,
            document.getElementById('root')
        );
```

# Etape 2 - Liste d'animaux

Créer un composant AnimalList qui prend en prop "animals" une collection
et qui pour chaque élément de la collection génère un composant Animal

```javascript

    const animals = [{
        nom: "Chat",
        cri: "Miaou"
    },{
        nom: "Chien",
        cri: "Woaf"
    },{
        nom: "Canari",
        cri: "Cui cui"
    }];

    ReactDOM.render(
        <AnimalList animals={animals} />,
        document.getElementById('root')
    );
```

# Etape 3 - Bouton crier

Ajouter au composant Animal un bouton "Crier".
- Par défaut le paragraphe contenant le cri est masqué
- Lorsqu'on clique sur le bouton, afficher le paragraphe du cri 
ET masquer le bouton

# Etape 4 : Ajout d'un animal

Dans le composant AnimalList,
- Ajouter 2 champs input pour créer un nouvel animal : nom et cri
- Ajouter un bouton "Ajouter"
Lorsqu'on clique sur le bouton, le nouvel animal doit apparaitre dans la liste avec les autres

```javascript

    const AnimalList = () => {
        const [animals, setAnimals] = React.useState([{
            nom: "Chat",
            cri: "Miaou"
        },{
            nom: "Chien",
            cri: "Woaf"
        },{
            nom: "Canari",
            cri: "Cui cui"
        }]);
        
        //...
    }

    ReactDOM.render(
        <AnimalList />,
        document.getElementById('root')
    );
```

# BONUS
- Ajouter un bouton pour supprimer un animal
- Un peu de CSS pour rendre ça joli
