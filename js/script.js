let coloreAttuale = true; //true = blu; false = rosso
let caselle = document.getElementsByClassName("casella");

function clickButton (){
    for(let i = 0; i < caselle.length; i++){
        caselle[i].addEventListener("click", function (){
            cambiaColore(caselle[i]);
        });
    }
}

function cambiaColore(casella){
    if(coloreAttuale == true){
        casella.classList.add("bg-primary");
        coloreAttuale = false;
    } else {
        casella.classList.add("bg-danger");
        coloreAttuale = true;
    }
    console.log(coloreAttuale);
}