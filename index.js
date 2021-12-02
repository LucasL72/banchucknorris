console.log("coucou");
/*
    Vous devez creer un bannière dans laquelle il devra y avoir un texte (la blague)
    
    Vous allez devoir récupérer la blague à partir d'une api
      - https://api.chucknorris.io/jokes/random
    source: https://api.chucknorris.io/

    Vous allez devoir creer un boutton en sorte que quand vous clicker dessus une
    nouvelle blague sera générer et donc le contenu de la banière devra changer

    Bon Courage !
*/
const url = 'https://api.chucknorris.io/jokes/random';
const app = document.getElementById("app");

function getDataJoke() {
    console.log('fn')
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const joke = data.value
            console.log("joke");
            changejoke(joke);
        })
        .catch((err) => console.log(err));
}


function changejoke(content) {
    const banner = document.getElementById("banner");
    banner.innerText = content;

}

setInterval(function () {getDataJoke()}, 10000)

// Creer le boutton

function buildButton() {

    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const row = document.createElement("div");
    row.setAttribute("class", "row");

    const btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.setAttribute("onclick", "getDataJoke()");
    btn.innerText = "cliquez-ici";

    app.appendChild(container);
    container.appendChild(row);
    row.appendChild(btn);

}
// créé la banner en JS DOM
/*
    <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
    </div>
*/
function buildBanner() {
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const row = document.createElement("div");
    row.setAttribute("class", "row");

    const banner = document.createElement("div");
    banner.setAttribute("class", "alert alert-primary");
    banner.setAttribute("id", "banner");
    banner.innerText = "wait on load !";

    app.appendChild(container);
    container.appendChild(row);
    row.appendChild(banner);
}



function mountedComponents() {
    // Components
    buildBanner()
    buildButton()

    // Fn 
    getDataJoke()
}

mountedComponents()

// événement à partir d'un boutton au click pour générer une nouvelle blague
// 

// })

// Me prévenir avant de commencer l'automatisation
// Lorsque tous est fonctionel vous devrais rendre la fonction automatique
// Et faire en sorte que la génération de la blague sois automatique
/* info: https://www.w3schools.com/jsref/met_win_setinterval.asp*/